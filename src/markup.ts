/** Composition of markup. */
import {
  type Block,
  type BlockArg,
  type Content,
  type ContentArg,
  type InlineArg,
  type ShowArg,
  type Inline,
  type Label,
  type ListItemNode,
  type InlineNode,
  type Expr,
  blockOf,
  FLOW,
  isMarkup,
  expr,
  isPlainObject,
  inlineOf,
  nodeOf,
} from './core.ts'
import { toBlocks, toInline, toMarkup } from './convert.ts'

/**
 * A markup space, as between two words of markup. Unlike `' '` in data, which
 * is kept exactly, it collapses with neighbouring spaces and is trimmed at the
 * edges of a paragraph.
 */
export const space: Inline = inlineOf([{ k: 'space' }])

/**
 * A space written as a line break in the source. Typst drops it between two
 * CJK characters (`日本` / `語` stays `日本語`), where `space` would stay.
 */
export const lineSpace: Inline = inlineOf([{ k: 'space', line: true }])

/**
 * A line of markup. Two ways to write it:
 *
 * - parts joined with no separator: `inline('Thank you, ', strong(name), '.')`;
 * - a template, where the text is text and `${…}` puts in elements or data:
 *   ``inline`Thank you, ${strong(name)}.` ``.
 *
 * The text of a template is text, never Typst: `*`, `#` and the rest show as
 * they are, as in any string. A line break and the indentation after it are
 * one space, as in markup (next to CJK characters, a `lineSpace`, which Typst
 * drops between them), so a long paragraph can span lines of the TypeScript file. A line
 * break at the very start or end is dropped. Block content does not compile
 * here.
 */
export function inline(strings: TemplateStringsArray, ...values: ShowArg[]): Inline
export function inline(...parts: ShowArg[]): Inline
export function inline(...args: unknown[]): Inline {
  if (isTemplate(args[0])) return inlineOf(toInline(templateParts(args[0], args.slice(1) as ShowArg[])))
  return inlineOf(toInline(args as ShowArg[]))
}

function isTemplate(v: unknown): v is TemplateStringsArray {
  return Array.isArray(v) && 'raw' in v
}

/** Characters between which Typst drops a source line break. */
const CJK = /[\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}\u3000-\u303f\uff00-\uffef]/u

/**
 * The lines of a text (`\n` or `\r\n` between them), without the spaces and tabs next to a line break
 * (not other whitespace, like an ideographic space, which is text). A loop, not a regular expression:
 * one would backtrack on a long run of spaces (quadratic).
 */
function textLines(text: string): string[] {
  if (!text.isWellFormed()) throw new TypeError('Typst cannot represent a string with a lone surrogate')
  const out = text.split('\n')
  return out.map((line, i) => {
    let start = 0
    let end = line.length
    if (i < out.length - 1 && line.endsWith('\r')) end--
    if (i > 0) while (start < end && (line[start] === ' ' || line[start] === '\t')) start++
    if (i < out.length - 1) while (end > start && (line[end - 1] === ' ' || line[end - 1] === '\t')) end--
    return line.slice(start, end)
  })
}

/** The parts of an `inline` template: its texts, with line breaks as spaces, and its values. */
function templateParts(strings: TemplateStringsArray, values: readonly ShowArg[]): ShowArg[] {
  const parts: ShowArg[] = []
  strings.forEach((cooked, i) => {
    if (cooked === undefined) throw new TypeError('inline: a template with an invalid escape sequence')
    // A line break with the spaces and tabs around it: one space, or a lineSpace between CJK
    // characters. One at the very start or end is dropped.
    const pieces = textLines(cooked)
    if (i === 0 && pieces.length > 1 && /^[ \t]*$/.test(pieces[0]!)) pieces.shift()
    if (i === strings.length - 1 && pieces.length > 1 && /^[ \t]*$/.test(pieces.at(-1)!)) pieces.pop()
    pieces.forEach((piece, j) => {
      if (j > 0) {
        const before = pieces[j - 1]!.slice(-1)
        const after = piece.charAt(0)
        // Next to CJK, or to a value (whose text only Typst sees), a line break that Typst may drop.
        parts.push(CJK.test(before) || CJK.test(after) || !before || !after ? lineSpace : ' ')
      }
      // The template's own text is prose: Typst's typography applies (`don't` → `don’t`, `--` → `–`);
      // the values are data, shown as they are.
      if (piece) parts.push(inlineOf([{ k: 'text', v: piece, prose: true }]))
    })
    if (i < values.length) parts.push(values[i]!)
  })
  return parts
}

/**
 * A line of prose: a line break, with the spaces and tabs around it, is a space (or nothing between CJK
 * characters, as Typst reads source); one at the start or end is dropped. Other spaces stay, also at
 * the edges (`prose('see ')` before `strong(…)`).
 */
function proseLine(pieces: readonly string[]): Inline {
  const parts: ShowArg[] = []
  pieces = pieces.filter(Boolean)
  pieces.forEach((piece, j) => {
    if (j > 0) parts.push(CJK.test(pieces[j - 1]!.slice(-1)) || CJK.test(piece.charAt(0)) ? lineSpace : ' ')
    if (piece) parts.push(inlineOf([{ k: 'text', v: piece, prose: true }]))
  })
  return inlineOf(toInline(parts))
}

/**
 * Data that is prose (a customer's note, a product description), typeset as Typst would if it were
 * typed: straight quotes become smart quotes for the document's language (`don't` → `don’t`), `--`
 * and `---` dashes, `...` an ellipsis, and line breaks spaces. Everything else is escaped as any
 * data: `*`, `#`, `=` or `@` in it stay text. Other data is shown exactly as it is (`REF--2024`),
 * like a Typst string. `prose.paragraphs(text)` also makes a blank line a new paragraph.
 */
export const prose: {
  (text: string): Inline
  /** Prose in paragraphs, one per blank-line-separated part: block content. */
  paragraphs(text: string): Block
} = Object.assign(
  (text: string): Inline => {
    if (typeof text !== 'string') throw new TypeError('prose takes a string')
    return proseLine(textLines(text))
  },
  {
    paragraphs(text: string): Block {
      if (typeof text !== 'string') throw new TypeError('prose.paragraphs takes a string')
      // A line of only spaces and tabs ends a paragraph; the spaces and tabs at a paragraph's edges are
      // indentation.
      const paragraphs: string[][] = [[]]
      for (const line of textLines(text)) {
        if (/^[ \t]*$/.test(line)) paragraphs.push([])
        else paragraphs.at(-1)!.push(line)
      }
      return blocks(
        ...paragraphs
          .filter((p) => p.length)
          .map((p) => {
            p[0] = p[0]!.replace(/^[ \t]+/, '')
            return proseLine(textLines(p.join('\n') + '\n'))
          }),
      )
    },
  },
)

/** Block content: each part is its own block, separated by a blank line (a paragraph break). */
export function blocks(...parts: (BlockArg | ShowArg)[]): Block {
  return blockOf(toBlocks(parts))
}

/**
 * Content as a value: `[…]`. Block content (paragraphs, headings) can then go
 * inside a line, where it is a content block, as in `#[…]`.
 */
export function contentBlock(body: ContentArg): Content {
  return expr({ k: 'content', body: toMarkup(body) })
}

/** A document body. Same as `blocks`; pass the result to `render`. */
export const doc = blocks

/** Attaches a label to the content before it: `#metadata(…) <label>`, `Text <label>`. */
export function labelled(element: ShowArg, label: Label): Inline {
  const node = nodeOf(label)
  if (node.k !== 'label') throw new TypeError('expected a label')
  // As in Typst, the label attaches to the last element before it (an element, or text). With
  // nothing visible before it (`''`, `' '` from data), that would be an element further back: the
  // label goes on a content block of its own (`#[ ]<name>`).
  // Text goes in a content block of its own too: Typst splits it into several elements (at an escape, a
  // smart quote), and the label would go on the last of them, which the data decides.
  const nodes = toInline(element)
  const blank = nodes.every((n) => n.k === 'space' || (n.k === 'text' && /^\s*$/u.test(n.v)))
  if (blank) return inlineOf([block(nodes), { k: 'label', name: node.name }])
  if (!nodes.some((n) => n.k === 'text')) return inlineOf([...nodes, { k: 'label', name: node.name }])
  // Spaces after the text stay after the block, as written (`Text <name>`).
  let end = nodes.length
  while (nodes[end - 1]!.k === 'space') end--
  return inlineOf([block(nodes.slice(0, end)), ...nodes.slice(end), { k: 'label', name: node.name }])
}

function block(nodes: readonly InlineNode[]): InlineNode {
  return { k: 'embed', code: { k: 'content', body: { inline: nodes } } }
}

const ITEM = Symbol('typst.item')
/** A list item with nested blocks (`m.item('Payment', m.list(…))`). */
export interface Item {
  readonly [ITEM]: true
  readonly node: ListItemNode
}
type ItemArg = ShowArg | Item

function itemNode(arg: ItemArg): ListItemNode {
  if (typeof arg === 'object' && arg !== null && ITEM in arg) return (arg as Item).node
  return { inline: toInline(arg), children: [] }
}

declare const LINES: unique symbol
/** Blocks on consecutive lines, from `m.lines`; also the body of a list item that continues on the next lines. */
export interface Lines extends Block {
  readonly [LINES]: true
}

/** An item's text, and the blocks that continue it when the body is `m.lines(text, …)`. */
function itemBody(body: ShowArg | Lines): Pick<ListItemNode, 'inline' | 'continued'> {
  const node = isMarkup(body) && body[FLOW] === 'block' && body.items.length === 1 ? body.items[0]! : null
  if (node?.k !== 'lines') return { inline: toInline(body) }
  const [first, ...rest] = node.items
  // Without text first (`m.lines(m.heading(…), …)`), the item's line is empty and all of it continues.
  return first?.k === 'par' ? { inline: first.inline, continued: rest } : { inline: [], continued: node.items }
}

/**
 * A list item, and the blocks nested in it, each a new paragraph (a nested list
 * follows a tight list's item directly). To go on the lines right after the
 * item's text, make the body `m.lines(text, …)`.
 */
function item(body: ShowArg | Lines, ...children: (BlockArg | ShowArg)[]): Item {
  return Object.freeze({ [ITEM]: true, node: { ...itemBody(body), children: toBlocks(children) } }) as Item
}

function heading(level: number, ...body: ShowArg[]): Block {
  if (!Number.isInteger(level) || level < 1) throw new RangeError(`heading level must be ≥ 1, got ${level}`)
  return blockOf([{ k: 'heading', level, inline: toInline(body) }])
}

/**
 * Blocks with a line break between them, not a paragraph break: a list right
 * under a paragraph line (an attached list), a heading in the middle of a
 * paragraph, a rule followed by the text it styles.
 */
function lines(...parts: (BlockArg | ShowArg)[]): Lines {
  return blockOf([{ k: 'lines', items: toBlocks(parts) }]) as Lines
}

/** Line-level markup syntax: headings (`=`), lists (`-`) and enums (`+`). */
/** A wide list puts a blank line between items, which spaces them like paragraphs. */
export interface ListOptions {
  readonly tight?: boolean
}

function listOf(k: 'list' | 'enum' | 'terms') {
  function make(...items: ItemArg[]): Block
  function make(options: ListOptions, ...items: ItemArg[]): Block
  function make(...args: (ItemArg | ListOptions)[]): Block {
    const options = isPlainObject(args[0]) && !(ITEM in args[0]) ? (args.shift() as ListOptions) : {}
    // Options are written in code: an object with other keys, or a tight that is no boolean, is a
    // mistake (or data spread into the items), not options.
    for (const [key, value] of Object.entries(options))
      if (key !== 'tight' || typeof value !== 'boolean')
        throw new TypeError(`m.${k}: the options take tight (a boolean), not ${JSON.stringify(key)}: ${typeof value}`)
    return blockOf([{ k, items: (args as ItemArg[]).map(itemNode), tight: options.tight ?? true }])
  }
  return make
}

/** A term list item: `/ term: description`, with nested blocks. */
function term(name: ShowArg, description: ShowArg | Lines, ...children: (BlockArg | ShowArg)[]): Item {
  return Object.freeze({
    [ITEM]: true,
    node: { term: toInline(name), ...itemBody(description), children: toBlocks(children) },
  }) as Item
}

export const m = {
  heading,
  lines,
  /** A term list (`/ term: description`); items come from `m.term`. */
  terms: listOf('terms'),
  term,
  list: listOf('list'),
  enum: listOf('enum'),
  item,
  /** An enum item with an explicit number: `3. body`. */
  numbered: (number: number, body: ShowArg | Lines, ...children: (BlockArg | ShowArg)[]): Item => {
    if (!Number.isSafeInteger(number) || number < 0)
      throw new RangeError(`enum numbers are non-negative integers, got ${number}`)
    return Object.freeze({
      [ITEM]: true,
      node: { ...itemBody(body), children: toBlocks(children), number },
    }) as Item
  },
}

export type { Expr }
