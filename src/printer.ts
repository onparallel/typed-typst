/**
 * Prints a node tree as Typst source.
 *
 * Rules (see docs/design.md §7):
 * - markup text never contains a line break, so the printer owns every newline;
 * - a code expression in markup is `#expr`, followed by `;` when the next
 *   character could continue the expression;
 * - inline content in code is `[…]` with no padding; block content is
 *   `[`, the blocks indented one level, then `]`;
 * - a call goes on one line when it fits in 80 columns, else one argument per
 *   line with a trailing comma.
 */
import type { Arg, BlockNode, Code, InlineNode, Markup, Param, StmtNode } from './core.ts'
import {
  assertFieldName,
  assertIdent,
  assertLabelName,
  intLiteral,
  isLabelName,
  markupText,
  strLiteral,
} from './escape.ts'
import { toBlocks } from './convert.ts'

const WIDTH = 80

/**
 * An optional field of a node, only when the node has it: a field inherited from a polluted
 * `Object.prototype` (a deep merge of `{"__proto__": …}` elsewhere in the program) is never code.
 */
function own<O extends object, K extends keyof O>(o: O, k: K): O[K] | undefined {
  return Object.hasOwn(o, k) ? o[k] : undefined
}

function pad(indent: number): string {
  return '  '.repeat(indent)
}

/**
 * The names that the document binds (`let`, imports, parameters, values from
 * outside): where one is a name of the standard library, the library's
 * definition prints as `std.name`, which always means the library's.
 */
let bound: ReadonlySet<string> = new Set()
/** Prints a document body. */
export function render(doc: unknown): string {
  const blocks = toBlocks(doc)
  bound = boundNames(blocks)
  try {
    return printBlocks(blocks, 0) + '\n'
  } finally {
    bound = new Set()
  }
}

/** Every name a node tree binds or refers to that is not the standard library's. */
function boundNames(tree: unknown): Set<string> {
  const out = new Set<string>()
  // A loop, not recursion: a tree built in steps can be deeper than the stack (it fails later, in
  // printCode, with a clear error). A subtree shared by several parents is walked once.
  const seen = new WeakSet<object>()
  const stack: unknown[] = [tree]
  while (stack.length) {
    const v = stack.pop()
    if (typeof v !== 'object' || v === null || seen.has(v)) continue
    seen.add(v)
    if (Array.isArray(v)) {
      for (const item of v) stack.push(item)
      continue
    }
    const node = v as Record<string, unknown>
    const k = own(node, 'k')
    if (k === 'ident' && !own(node, 'std')) out.add(node.name as string)
    if (k === 'let-pattern') for (const n of node.names as (string | null)[]) if (n !== null) out.add(n)
    // A snippet's variable is no name of the document (see printStmt).
    if (k === 'let') {
      if (!own(node, 'snippet')) out.add(node.name as string)
      for (const p of (own(node, 'params') as { name: string }[] | null | undefined) ?? []) out.add(p.name)
    }
    if (k === 'closure') for (const p of node.params as string[]) if (p !== '..') out.add(p.replace(/^\.\./, ''))
    if (k === 'import') {
      if (own(node, 'module')) out.add(node.module as string)
      for (const i of node.items as (string | { as: string })[]) out.add(typeof i === 'string' ? i : i.as)
    }
    for (const child of Object.values(node)) stack.push(child)
  }
  return out
}

// ---------------------------------------------------------------------------
// Markup.

/**
 * A block that prints nothing (a list built from no items, `m.lines()`): it would leave a line of
 * only spaces, which Typst reads as a paragraph break (a tight list would turn loose).
 */
function isEmptyBlock(b: BlockNode): boolean {
  if (b.k === 'list' || b.k === 'enum' || b.k === 'terms') return b.items.length === 0
  if (b.k === 'lines') return b.items.every(isEmptyBlock)
  return false
}

export function printBlocks(all: readonly BlockNode[], indent: number): string {
  const items = all.filter((b) => !isEmptyBlock(b))
  let out = ''
  items.forEach((item, i) => {
    if (i > 0) {
      const prev = items[i - 1]!
      out += prev.k === 'stmt' && item.k === 'stmt' ? '\n' : '\n\n'
    }
    out += pad(indent) + printBlock(item, indent)
  })
  return out
}

type ListBlock = Extract<BlockNode, { k: 'list' | 'enum' | 'terms' }>

const std = (name: string): Code => ({ k: 'ident', name, std: true })

/** Content of blocks: one paragraph is inline (`[text]`), anything else block content. */
function contentOf(blocks: readonly BlockNode[]): Code {
  return {
    k: 'content',
    body:
      blocks.length === 1 && blocks[0]!.k === 'par'
        ? { inline: trimSpaces(blocks[0]!.inline) }
        : { blocks, flush: true },
  }
}

/**
 * A list as its items, one element call each (`#enum.item(3)[a]`), as markup makes them (`3. a`): Typst
 * groups items next to each other into a list, and show rules on `list.item` apply to them. On lines
 * of their own (a tight list) or with a blank line between them (a wide one); the item's body is a
 * content block, so its lines need no indentation.
 */
function printList(list: ListBlock, indent: number): string {
  const nested = (b: BlockNode) => b.k === 'list' || b.k === 'enum' || b.k === 'terms'
  const items = list.items.map((it): string => {
    const text: BlockNode[] = it.inline.length ? [{ k: 'par', inline: it.inline }] : []
    const continued = (own(it, 'continued') ?? []).filter((b) => !isEmptyBlock(b))
    const children = it.children.filter((b) => !isEmptyBlock(b))
    // In a tight list, nested lists right after the text follow it on the next lines; anything else is
    // a new paragraph.
    let n = 0
    if (list.tight) while (n < children.length && nested(children[n]!)) n++
    const lines = [...text, ...continued, ...children.slice(0, n)]
    const first: BlockNode[] = lines.length > text.length ? [{ k: 'lines', items: lines }] : text
    const body = contentOf([...first, ...children.slice(n)]) as Code & { k: 'content' }
    const callee: Code = { k: 'field', target: std(list.k), name: 'item' }
    const number = own(it, 'number')
    const args: Arg[] =
      list.k === 'terms'
        ? [{ name: null, value: contentOf([{ k: 'par', inline: own(it, 'term') ?? [] }]) }]
        : number === undefined
          ? []
          : [{ name: null, value: { k: 'lit', v: intLiteral(number) } }]
    return '#' + printCode({ k: 'call', callee, args, trailing: body.body }, indent)
  })
  return items.join(list.tight ? '\n' + pad(indent) : '\n\n' + pad(indent))
}

function printBlock(item: BlockNode, indent: number): string {
  switch (item.k) {
    case 'par': {
      // A snippet without variables on lines of its own in the document goes as written, as if typed in
      // the file: its definitions and rules apply to the rest of the document.
      const only = item.inline.length === 1 ? item.inline[0]! : undefined
      if (!indent && only?.k === 'embed' && only.code.k === 'snippet' && !only.code.vars) return only.code.src
      return printInline(trimSpaces(item.inline), indent)
    }
    case 'list':
    case 'enum':
    case 'terms':
      return printList(item, indent)
    case 'stmt':
      return '#' + printStmt(item.stmt, indent)
    case 'lines':
      return item.items
        .filter((b) => !isEmptyBlock(b))
        .map((it, i) => (i ? pad(indent) : '') + printBlock(it, indent))
        .join('\n')
  }
}

/**
 * A snippet that something follows on its last line: a line comment at its end would comment out what
 * the printer writes after it (`]`, `$`, `)`), so a line break ends it; a backslash at its end (a line
 * break in markup, `Street 1 \`) would escape it, so a space follows (`\ ` is the same line break).
 */
function closable(src: string): string {
  if (/\/\/[^\n]*$/.test(src)) return src + '\n'
  let n = 0
  while (src[src.length - 1 - n] === '\\') n++
  return n % 2 ? src + ' ' : src
}

/** Prints inline markup. It contains no newline except inside embedded code. */
/**
 * A line of markup without the markup spaces at its edges, which Typst trims there: printed at the
 * start of a line, a space would be indentation, which continues the list item above.
 */
function trimSpaces(nodes: readonly InlineNode[]): readonly InlineNode[] {
  let start = 0
  let end = nodes.length
  while (start < end && nodes[start]!.k === 'space') start++
  while (end > start && nodes[end - 1]!.k === 'space') end--
  return start === 0 && end === nodes.length ? nodes : nodes.slice(start, end)
}

export function printInline(nodes: readonly InlineNode[], indent: number): string {
  // Adjacent text nodes are escaped as one run, so that `1` + `.` is still seen as `1.`; which of its
  // characters are prose (typography applies) is kept per character.
  // Each run is joined once: joining one text at a time would copy the run each time (quadratic). An
  // empty text is nothing: it would leave a line of only spaces (a paragraph break) after a lineSpace.
  const merged: InlineNode[] = []
  const proseOf = new Map<InlineNode, boolean[]>()
  for (let i = 0; i < nodes.length;) {
    const node = nodes[i]!
    if (node.k !== 'text') {
      merged.push(node)
      i++
      continue
    }
    let v = ''
    const prose: boolean[] = []
    for (; i < nodes.length && nodes[i]!.k === 'text'; i++) {
      const text = nodes[i] as InlineNode & { k: 'text' }
      v += text.v
      const flag = own(text, 'prose') === true
      for (const _ of text.v) prose.push(flag)
    }
    if (!v) continue
    const joined: InlineNode = { k: 'text', v }
    proseOf.set(joined, prose)
    merged.push(joined)
  }
  const isLine = (n: InlineNode | undefined) => n?.k === 'space' && own(n, 'line') === true
  // A lineSpace is a line break when it is the first in its run of spaces and something follows: a
  // second one, or one at the end, would leave a line of only spaces, a paragraph break.
  const breakAt = new Set<number>()
  for (let i = 0; i < merged.length;) {
    if (merged[i]!.k !== 'space') {
      i++
      continue
    }
    let j = i
    while (j < merged.length && merged[j]!.k === 'space') j++
    const first = merged.slice(i, j).findIndex(isLine)
    if (first >= 0 && j < merged.length) breakAt.add(i + first)
    i = j
  }
  const breaks = (i: number) => breakAt.has(i)
  const pieces = merged.map((node, i) => {
    switch (node.k) {
      case 'text': {
        // At the start of a line, `1. ` or `/ ` would be markup, also after spaces (indentation).
        let j = i - 1
        while (j >= 0 && merged[j]!.k === 'space' && !(isLine(merged[j]) && breaks(j))) j--
        const lineStart = j < 0 || merged[j]!.k === 'space'
        // A space of data next to a markup space would merge with it (and be trimmed at the end of a
        // line): it is escaped there, as at the edges.
        const spaceBefore = merged[i - 1]?.k === 'space'
        const atEnd = i === merged.length - 1 || merged[i + 1]!.k === 'space'
        return markupText(node.v, lineStart, atEnd, spaceBefore, proseOf.get(node)!)
      }
      case 'space':
        // Continuation lines are indented like the block they continue (a list item's text).
        return breaks(i) ? '\n' + pad(indent) : ' '
      case 'embed':
        // An equation is markup syntax: it needs no `#`.
        return node.code.k === 'math' ? printCode(node.code, indent) : '#' + printEmbedded(node.code, indent)
      case 'label':
        // Right after the content: a space before it would be content too.
        return '<' + assertLabelName(node.name) + '>'
      case 'stmt':
        return '#' + printStmt(node.stmt, indent)
    }
  })
  let out = ''
  pieces.forEach((piece, i) => {
    out += piece
    const next = pieces[i + 1]
    const node = merged[i]!
    // A label right after an expression attaches to it; `<` does not continue the expression.
    const label = merged[i + 1]?.k === 'label'
    const after = next !== undefined
    if (node.k === 'embed' && node.code.k !== 'math' && next !== undefined && !label && !/^\s/.test(next)) out += ';'
    // `include` reads an expression past spaces (`#include "a" #b` is an error): it always ends with `;`.
    else if (node.k === 'embed' && readsPastSpaces(node.code) && after) out += ';'
    // A statement in a line always ends with `;`, so that nothing after it reads as part of it.
    if (node.k === 'stmt' && after) out += ';'
  })
  return out
}

/** `include` (also as the body of `context`) reads its expression past spaces. */
function readsPastSpaces(code: Code): boolean {
  return code.k === 'include' || (code.k === 'context' && readsPastSpaces(code.body))
}

/**
 * Whether code after `#` in markup ends where it prints: a call chain or a literal. After `#`, Typst
 * reads one such expression (`#context` too, with such a body: `#context a + b` is `context a`, and
 * ` + b` markup).
 */
function atomic(code: Code): boolean {
  if (code.k === 'context') return atomic(code.body)
  return ['ident', 'field', 'call', 'str', 'content', 'snippet', 'raw', 'block', 'include'].includes(code.k)
}

/** Code after `#` in markup: anything but a call chain or a literal is parenthesized. */
function printEmbedded(code: Code, indent: number): string {
  const printed = printCode(code, indent)
  return atomic(code) ? printed : `(${printed})`
}

function printMarkupBlock(body: Markup, indent: number): string {
  // A content block is a level of nesting for Typst's parser too.
  return nested(() => printMarkupBlockAt(body, indent))
}

function printMarkupBlockAt(body: Markup, indent: number): string {
  // Own field only: an `inline` that a polluted `Object.prototype` holds is no markup of this node.
  if (Object.hasOwn(body, 'inline'))
    return '[' + printInline((body as { inline: readonly InlineNode[] }).inline, indent) + ']'
  const items = (body as { blocks: readonly BlockNode[] }).blocks
  if (items.length === 0) return '[]'
  // A paragraph alone is inline content (`[#heading(depth: 1)[H]]`): the line breaks around block
  // content are spaces of its own, so the content would be a sequence, no heading (a label on it fails).
  if (items.length === 1 && items[0]!.k === 'par') return '[' + printInline(trimSpaces(items[0]!.inline), indent) + ']'
  // A list item's body, as markup makes it: the text starts right after `[`.
  if (own(body as { flush?: true }, 'flush')) return '[' + closable(printBlocks(items, indent + 1).trimStart()) + ']'
  // A paragraph break at an edge (`parbreak()`) is a blank line there, as written by hand.
  const blocks = [...items]
  const lead = isParbreak(blocks[0]) && blocks.length > 1 ? (blocks.shift(), '\n') : ''
  const trail = isParbreak(blocks.at(-1)) && blocks.length > 1 ? (blocks.pop(), '\n') : ''
  return '[\n' + lead + printBlocks(blocks, indent + 1) + '\n' + trail + pad(indent) + ']'
}

/** A paragraph that is only `#parbreak()`. */
function isParbreak(block: BlockNode | undefined): boolean {
  if (block?.k !== 'par' || block.inline.length !== 1) return false
  const node = block.inline[0]!
  return (
    node.k === 'embed' &&
    node.code.k === 'call' &&
    node.code.callee.k === 'ident' &&
    node.code.callee.name === 'parbreak' &&
    // The standard library's, not a function of the document with that name.
    own(node.code.callee, 'std') === true &&
    node.code.args.length === 0 &&
    !node.code.trailing
  )
}

// ---------------------------------------------------------------------------
// Code.

/**
 * How deep the printer is in nested code and content blocks. Typst stops parsing below 256 levels of
 * its own (the markup around counts too), and a value built in steps (each within the conversion's own
 * limit) can nest deeper: it fails here, clearly, before the stack does.
 */
let codeDepth = 0
const MAX_CODE_DEPTH = 250

export function printCode(code: Code, indent: number): string {
  return nested(() => printCodeAt(code, indent))
}

function nested(print: () => string): string {
  if (codeDepth >= MAX_CODE_DEPTH)
    throw new RangeError(`the document nests code deeper than ${MAX_CODE_DEPTH} levels: Typst cannot parse it`)
  codeDepth++
  try {
    return print()
  } finally {
    codeDepth--
  }
}

function printCodeAt(code: Code, indent: number): string {
  switch (code.k) {
    case 'str':
      return strLiteral(code.v)
    case 'lit':
      return code.v
    case 'ident':
      return own(code, 'std') && bound.has(code.name) ? `std.${assertIdent(code.name)}` : assertIdent(code.name)
    case 'field':
      return postfix(code.target, indent) + '.' + assertFieldName(code.name)
    case 'call': {
      const callee = postfix(code.callee, indent)
      const args = code.args.length || !code.trailing ? printArgs(callee, code.args, indent) : callee
      return code.trailing ? args + printMarkupBlock(code.trailing, indent) : args
    }
    case 'neg': {
      const v = printCode(code.v, indent)
      return ['ident', 'field', 'call', 'array', 'dict', 'str'].includes(code.v.k) ||
        (code.v.k === 'lit' && !v.startsWith('-'))
        ? `-${v}`
        : `-(${v})`
    }
    case 'binop': {
      const side = (c: Code) =>
        c.k === 'binop' ||
        c.k === 'neg' ||
        c.k === 'closure' ||
        c.k === 'context' ||
        c.k === 'block' ||
        c.k === 'include'
          ? `(${printCode(c, indent)})`
          : printCode(c, indent)
      return `${side(code.l)} ${code.op} ${side(code.r)}`
    }
    case 'array': {
      // `Array.from`: a hole is never skipped (it would print `(undefined,)` or `(1, , 3)`).
      const items = Array.from(code.items, (c) => printCode(c, indent + 1))
      if (items.length === 1) return `(${items[0]},)`
      return wrap('(', items, ')', indent)
    }
    case 'dict': {
      if (code.entries.length === 0) return '(:)'
      const items = code.entries.map(([key, value]) => {
        // Own fields only (a polluted `ident` would print as code), and checked again where it prints.
        const k = Object.hasOwn(key, 'ident')
          ? assertIdent((key as { ident: string }).ident)
          : strLiteral((key as { str: string }).str)
        return `${k}: ${printCode(value, indent + 1)}`
      })
      return wrap('(', items, ')', indent)
    }
    case 'label':
      // A name that the label syntax cannot hold (`DBLP:books/x`) is a `label(…)` call.
      // In code, `<…>` is a label only from an identifier's first character (`<.x>` is not), and only
      // with characters Typst knows (Unicode grows faster in JS): ASCII, to be safe.
      return /^[A-Za-z_]/.test(code.name) && isLabelName(code.name)
        ? '<' + code.name + '>'
        : // Like an identifier of the library: `std.label` when the document binds `label`.
          `${bound.has('label') ? 'std.' : ''}label(${strLiteral(code.name)})`
    case 'closure': {
      // `.._0` takes any number of arguments; `..` alone drops them.
      const param = (n: string) =>
        n === '..' ? n : n.startsWith('..') ? '..' + assertIdent(n.slice(2)) : assertIdent(n)
      const params =
        code.params.length === 1 && !code.params[0]!.startsWith('..')
          ? param(code.params[0]!)
          : `(${code.params.map(param).join(', ')})`
      return `${params} => ${printCode(code.body, indent)}`
    }
    case 'content':
      return printMarkupBlock(code.body, indent)
    case 'context':
      return 'context ' + printCode(code.body, indent)
    case 'block': {
      const lines = [
        ...code.stmts.map((s) => printStmt(s, indent + 1)),
        ...(code.value ? [printCode(code.value, indent + 1)] : []),
      ]
      const flat = `{ ${lines.join('; ')} }`
      if (!flat.includes('\n') && pad(indent).length + flat.length <= WIDTH) return flat
      return '{\n' + lines.map((l) => pad(indent + 1) + l + '\n').join('') + pad(indent) + '}'
    }
    case 'snippet': {
      // A snippet's lines go as written: indenting them would change a string or raw text that spans
      // lines. Its variables go on lines of their own (a line break after a statement is no space);
      // without one (no variables, or only ones that already have their names, `{ it }`), a snippet of
      // several lines starts on a line of its own, so that its first line has the indentation of the
      // others (a markup list keeps its nesting).
      const lets = code.stmts.map((stmt) => '#' + printStmt(stmt, 0) + '\n').join('')
      const lead = !lets && code.src.includes('\n') ? '\n' : ''
      return '[' + lets + lead + closable(code.src) + ']'
    }
    case 'raw':
      // A line comment at the end would comment out the closing parenthesis.
      return `(${closable(code.src)})`
    case 'include':
      return `include ${strLiteral(code.source)}`
    case 'group':
      return `(${printCode(code.v, indent)})`
    case 'math':
      return code.block ? `$ ${closable(code.src)} $` : `$${closable(code.src)}$`
  }
}

/** A target of a field access or call: a call chain or a literal goes without parentheses. */
function postfix(code: Code, indent: number): string {
  const printed = printCode(code, indent)
  // Literals delimit themselves: `(1, 2).len()`, `"a".len()`.
  return ['ident', 'field', 'call', 'array', 'dict', 'str', 'group'].includes(code.k) ? printed : `(${printed})`
}

function printArgs(callee: string, args: readonly Arg[], indent: number): string {
  const items = args.map((a) =>
    own(a, 'spread')
      ? '..' + postfix(a.value, indent + 1)
      : (a.name ? `${assertIdent(a.name)}: ` : '') + printCode(a.value, indent + 1),
  )
  return wrap(callee + '(', items, ')', indent)
}

/** One line when it fits, else one item per line with a trailing comma. */
function wrap(open: string, items: readonly string[], close: string, indent: number): string {
  const flat = open + items.join(', ') + close
  // Deep in nested values, indentation would outgrow the text (a line per level, each indented more).
  if ((!flat.includes('\n') && pad(indent).length + flat.length <= WIDTH) || indent > 16) return flat
  return open + '\n' + items.map((item) => pad(indent + 1) + item + ',\n').join('') + pad(indent) + close
}

// ---------------------------------------------------------------------------
// Statements.

export function printStmt(stmt: StmtNode, indent: number): string {
  switch (stmt.k) {
    case 'set':
      return (
        'set ' +
        printArgs(postfix(stmt.target, indent), stmt.args, indent) +
        (own(stmt, 'cond') ? ` if ${printCode(stmt.cond!, indent)}` : '')
      )
    case 'show': {
      const replacement =
        Object.hasOwn(stmt.replacement, 'k') && isStmtNode(stmt.replacement)
          ? printStmt(stmt.replacement, indent)
          : printCode(stmt.replacement as Code, indent)
      return stmt.selector ? `show ${printCode(stmt.selector, indent)}: ${replacement}` : `show: ${replacement}`
    }
    case 'let-pattern':
      // One name is `(a,)`: `(a)` would be a parenthesized name, no pattern.
      return `let (${stmt.names.map((n) => (n === null ? '_' : assertIdent(n))).join(', ')}${stmt.names.length === 1 ? ',' : ''}) = ${printCode(stmt.value, indent)}`
    case 'let': {
      const params = stmt.params ? `(${stmt.params.map((p) => printParam(p, indent)).join(', ')})` : ''
      return `let ${assertIdent(stmt.name)}${params} = ${printCode(stmt.value, indent)}`
    }
    case 'import':
      if (own(stmt, 'module')) return `import ${strLiteral(stmt.source)} as ${assertIdent(stmt.module!)}`
      return (
        `import ${strLiteral(stmt.source)}` +
        (stmt.items.length
          ? `: ${stmt.items.map((i) => (typeof i === 'string' ? assertIdent(i) : `${assertIdent(i.name)} as ${assertIdent(i.as)}`)).join(', ')}`
          : '')
      )
    case 'expr':
      return printEmbedded(stmt.code, indent)
  }
}

function isStmtNode(node: Code | StmtNode): node is StmtNode {
  return ['set', 'show', 'let', 'let-pattern', 'import', 'expr'].includes(node.k)
}

function printParam(p: Param, indent: number): string {
  if (own(p, 'rest')) return '..' + assertIdent(p.name)
  return own(p, 'default') ? `${assertIdent(p.name)}: ${printCode(p.default!, indent + 1)}` : assertIdent(p.name)
}
