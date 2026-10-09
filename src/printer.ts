/**
 * Prints a node tree as Typst source.
 *
 * Rules (see docs/design.md §6):
 * - markup text never contains a line break, so the printer owns every newline;
 * - a code expression in markup is `#expr`, followed by `;` when the next
 *   character could continue the expression;
 * - inline content in code is `[…]` with no padding; block content is
 *   `[`, the blocks indented one level, then `]`;
 * - a call goes on one line when it fits in 80 columns, else one argument per
 *   line with a trailing comma.
 */
import type { Arg, BlockNode, Code, InlineNode, ListItemNode, Markup, Param, StmtNode } from './core.ts'
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
/**
 * The names the document has bound so far at its top level (`let`, imports): the only ones a reference
 * to `eval`, `image`… may be. A name counts once its statement is printed (in its own value, `let eval
 * = eval`, it is still the standard library's), and only at the top level: a binding in a block, a
 * function or a snippet ends with it.
 */
let declared = new Set<string>()
/** The functions the document defines (`define`): an `external` of one of them would skip its checks. */
let defined: ReadonlySet<string> = new Set()

/** Prints a document body. */
export function render(doc: unknown): string {
  const blocks = toBlocks(doc)
  bound = boundNames(blocks)
  declared = new Set()
  defined = new Set()
  const bindings = bindingsOf(blocks)
  defined = bindings.defined
  try {
    return printBlocks(blocks, 0, true) + '\n'
  } finally {
    bound = new Set()
    declared = new Set()
    defined = new Set()
  }
}

/** The names a top-level statement binds for what follows it (also one in a paragraph or `m.lines`). */
function declare(stmt: StmtNode): void {
  if (stmt.k === 'let') declared.add(stmt.name)
  if (stmt.k === 'let-pattern') for (const n of stmt.names) if (n !== null) declared.add(n)
  if (stmt.k === 'import') {
    if (own(stmt, 'module')) declared.add(stmt.module!)
    for (const i of stmt.items) declared.add(typeof i === 'string' ? i : i.as)
  }
}

/**
 * Checks the names the document binds: a name bound to a file (`let_('logo', path(…))`, a `T.path`
 * parameter) must not also be bound to another value anywhere, which Typst would read instead where
 * the library passes the file. Returns the functions the document defines.
 */
function bindingsOf(tree: unknown): { defined: Set<string> } {
  const files = new Set<string>()
  const others = new Set<string>()
  const defined = new Set<string>()
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
    // Own fields only: an argument (no `k`) reads none from a polluted `Object.prototype`.
    const node = v as Record<string, unknown>
    const k = own(node, 'k')
    if (k === 'let') {
      ;(own(node, 'file') ? files : others).add(node.name as string)
      const params = own(node, 'params') as Param[] | null | undefined
      if (params) defined.add(node.name as string)
      for (const p of params ?? []) (own(p, 'file') ? files : others).add(p.name)
    }
    if (k === 'let-pattern') for (const n of node.names as (string | null)[]) if (n !== null) others.add(n)
    if (k === 'closure') for (const p of node.params as string[]) others.add(p)
    if (k === 'import') {
      if (own(node, 'module')) others.add(node.module as string)
      for (const i of node.items as (string | { as: string })[]) others.add(typeof i === 'string' ? i : i.as)
    }
    for (const child of Object.values(node)) stack.push(child)
  }
  for (const name of files)
    if (others.has(name))
      throw new TypeError(
        `${name} is bound to a file and also to another value: Typst would read that one where the library passes ` +
          'the file; rename one of them',
      )
  return { defined }
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
    if (k === 'closure') for (const p of node.params as string[]) out.add(p)
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

export function printBlocks(items: readonly BlockNode[], indent: number, top = false): string {
  let out = ''
  items.forEach((item, i) => {
    if (i > 0) {
      const prev = items[i - 1]!
      out += prev.k === 'stmt' && item.k === 'stmt' ? '\n' : '\n\n'
    }
    out += pad(indent) + printBlock(item, indent, top)
  })
  return out
}

/** `top`: a block at the top level of the document, whose statements bind names for what follows. */
function printBlock(item: BlockNode, indent: number, top = false): string {
  switch (item.k) {
    case 'par':
      return printInline(item.inline, indent, false, top)
    case 'heading':
      return '='.repeat(item.level) + ' ' + printOneLine(item.inline, indent)
    case 'list':
    case 'enum':
    case 'terms': {
      const sep = item.tight ? '\n' : '\n\n'
      return item.items
        .map((it, i) => {
          const marker =
            item.k === 'terms'
              ? `/ ${printTerm(own(it, 'term') ?? [], indent + 1)}: `
              : own(it, 'number') !== undefined
                ? `${intLiteral(it.number!)}. `
                : item.k === 'list'
                  ? '- '
                  : '+ '
          // Continuation lines are indented past the marker.
          return (i ? pad(indent) : '') + marker + printItem(it, indent + 1, item.tight)
        })
        .join(sep)
    }
    case 'stmt': {
      const printed = '#' + printStmt(item.stmt, indent)
      if (top) declare(item.stmt)
      return printed
    }
    case 'raw':
      return item.src.split('\n').join('\n' + pad(indent))
    case 'lines':
      return item.items.map((it, i) => (i ? pad(indent) : '') + printBlock(it, indent, top)).join('\n')
  }
}

/** A term (`/ term: …`) ends at a line break: it is one line, like a heading. */
function printTerm(nodes: readonly InlineNode[], indent: number): string {
  return printOneLine(nodes, indent, true)
}

/**
 * The text of a heading or a term, which ends at a line break: a `lineSpace` in it (next to CJK, from
 * `prose`) goes in a content block of its own, `#[日本⏎語]`, where Typst reads it as it would anywhere.
 * So does a heading that ends with a label, which would otherwise label the heading.
 */
function printOneLine(nodes: readonly InlineNode[], indent: number, term = false): string {
  // A label at the end of a heading would go on the heading, not on the element before it (`labelled`).
  const last = nodes.findLast((n) => n.k !== 'space')
  if (nodes.some((n) => n.k === 'space' && n.line) || (!term && last?.k === 'label'))
    return '#[' + printInline(nodes, indent + 1) + ']'
  return printInline(nodes, indent, term)
}

function printItem(item: ListItemNode, indent: number, tightList: boolean): string {
  let out = printInline(item.inline, indent)
  // A body `m.lines(text, …)`: the blocks after the text go on the next lines.
  for (const block of own(item, 'continued') ?? []) out += '\n' + pad(indent) + printBlock(block, indent)
  item.children.forEach((child, i) => {
    const prev = i === 0 ? null : item.children[i - 1]!
    // In a tight list, a nested list follows its item directly; anything else is a new paragraph.
    const nested = (b: BlockNode) => b.k === 'list' || b.k === 'enum' || b.k === 'terms'
    const tight = tightList && nested(child) && (prev === null || nested(prev))
    out += (tight ? '\n' : '\n\n') + pad(indent) + printBlock(child, indent)
  })
  return out
}

/** Prints inline markup. It contains no newline except inside embedded code. */
export function printInline(nodes: readonly InlineNode[], indent: number, term = false, top = false): string {
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
        return markupText(node.v, lineStart, atEnd, term, spaceBefore, proseOf.get(node)!)
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
      case 'raw':
        return node.src
      case 'stmt': {
        // The pieces print in order: what a statement binds counts for the rest of the paragraph.
        const printed = '#' + printStmt(node.stmt, indent)
        if (top) declare(node.stmt)
        return printed
      }
    }
  })
  let out = ''
  pieces.forEach((piece, i) => {
    out += piece
    const next = pieces[i + 1]
    const node = merged[i]!
    // A label right after an expression attaches to it; `<` does not continue the expression.
    const label = merged[i + 1]?.k === 'label'
    // In a term, the `:` after it follows too: a statement or `include` would read it.
    const after = next !== undefined || term
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
  return ['ident', 'field', 'call', 'str', 'content', 'raw', 'block', 'include'].includes(code.k)
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
  // A heading alone stays on one line, `[= H]`: the line breaks around block content are spaces of
  // its own (`[\n= H\n]` is a space, the heading and a space), which end up in the heading's outline
  // entry. Other blocks keep them, as packages that read `children` of a list's content expect.
  if (items.length === 1 && items[0]!.k === 'heading') {
    const one = printBlocks(items, indent)
    if (!one.includes('\n')) return '[' + one.trimStart() + ']'
  }
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
      // `eval`, `image`… that the document does not import are the standard library's, which the
      // bindings call only with what they check (rules.ts, STD_READERS).
      if (own(code, 'reader') && !declared.has(code.name))
        throw new TypeError(
          `${code.name} is not imported by the document, so it is the standard library's, which reads files or runs ` +
            `code: import it (importPackage(…, [${code.name}])), or use the library's binding`,
        )
      // A function the document defines is called directly, with its checks (`T.path`): an `external` of it
      // would take any value.
      if (own(code, 'ext') && defined.has(code.name))
        throw new TypeError(`${code.name} is defined by the document: call the define, not an external of it`)
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
      const params =
        code.params.length === 1 && code.params[0] !== '..'
          ? assertIdent(code.params[0]!)
          : `(${code.params.map((n) => (n === '..' ? n : assertIdent(n))).join(', ')})`
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
    case 'raw':
      return `(${code.src})`
    case 'include':
      return `include ${strLiteral(code.source)}`
    case 'math':
      // A backslash right before the closing `$` would escape it: keep a space between them.
      return code.block ? `$ ${code.src} $` : `$${code.src}${code.src.endsWith('\\') ? ' ' : ''}$`
  }
}

/** A target of a field access or call: a call chain or a literal goes without parentheses. */
function postfix(code: Code, indent: number): string {
  const printed = printCode(code, indent)
  // Literals delimit themselves: `(1, 2).len()`, `"a".len()`.
  return ['ident', 'field', 'call', 'array', 'dict', 'str'].includes(code.k) ? printed : `(${printed})`
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
  return ['set', 'show', 'let', 'import', 'expr'].includes(node.k)
}

function printParam(p: Param, indent: number): string {
  if (own(p, 'rest')) return '..' + assertIdent(p.name)
  return own(p, 'default') ? `${assertIdent(p.name)}: ${printCode(p.default!, indent + 1)}` : assertIdent(p.name)
}
