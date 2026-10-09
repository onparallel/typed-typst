/**
 * Hostile values in every position compile and show as plain text.
 *
 * Each position wraps the value in a labelled block; a Typst-side extractor
 * (helpers/plain.typ) reads back the text the block shows.
 */
import fc from 'fast-check'
import { describe, expect, it } from 'vitest'
import {
  type Content,
  block,
  blocks,
  data,
  dict,
  define,
  unsafeRaw,
  doc,
  emph,
  heading,
  inline,
  label,
  labelled,
  let_,
  link,
  m,
  metadata,
  prose,
  red,
  render,
  strong,
  T,
  table,
  text,
} from '../src/index.ts'
import { PLAIN, typstEval } from './helpers/typst.ts'

const HOSTILE = [
  '#x @y $z$ *b* _e_ [x] <l> \\ "q"',
  '#let x = read("/etc/passwd")',
  '#for i in range(9) [loop]',
  '] #panic("out") [',
  '"); panic("out"); ("',
  '// comment',
  '/* block',
  'https://example.com',
  '= heading',
  '- item',
  '+ item',
  '/ term: description',
  '1. first',
  '...',
  '--- and --',
  '~ nbsp',
  '`raw`',
  'it\'s "quoted"',
  ' leading and trailing ',
  'two  spaces',
  'a\nb',
  'a\n\nb',
  'tab\there',
  '\u0000\u0001\u001f\u007f',
  '\u0085  ',
  // An identifier character for newer Unicode than Typst's (found by fuzzing dictionary keys).
  '\u{323b0}',
  '\\',
  '\\u{41}',
  '<label>',
  '@ref',
  '{ code }',
  'ünïcödé 日本語 🎉',
]

const shown = define('shown')
  .pos('value', T.content)
  .body(({ value }) => value)

/** Every way a string can reach the document; each gives the content to read back. */
const POSITIONS: [name: string, make: (s: string) => { pre?: ReturnType<typeof let_>[0]; content: Content }][] = [
  ['paragraph', (s) => ({ content: block(blocks(s)) })],
  ['inline markup', (s) => ({ content: block(inline(s)) })],
  ['heading markup', (s) => ({ content: block(m.heading(2, s)) })],
  ['list item', (s) => ({ content: block(m.list(s)) })],
  ['enum item', (s) => ({ content: block(m.enum(s)) })],
  ['heading()', (s) => ({ content: block(heading(s)) })],
  ['strong("…")', (s) => ({ content: block(strong(s)) })],
  ['emph[markup]', (s) => ({ content: block(emph(inline(s))) })],
  ['text body', (s) => ({ content: block(text({ fill: red }, s)) })],
  ['table cell', (s) => ({ content: block(table(s)) })],
  ['table cell markup', (s) => ({ content: block(table(inline(s))) })],
  ['link body', (s) => ({ content: block(link('https://example.com', s)) })],
  ['define argument', (s) => ({ content: block(shown(s)) })],
  ['define argument markup', (s) => ({ content: block(shown(inline('[', s, ']'))) })],
  // unsafeRaw variables: shown where the snippet shows them, a plain name where it does not.
  ['raw markup variable', (s) => ({ content: block(unsafeRaw.markup({ value: s })`#value`) })],
  ['raw markup variable without #', (s) => ({ content: block(unsafeRaw.markup({ value: s })`value`) })],
  ['raw code variable in markup', (s) => ({ content: block(unsafeRaw.code({ value: s })<'content'>`[#value]`) })],
  [
    'raw code variable in markup without #',
    (s) => ({ content: block(unsafeRaw.code({ value: s })<'content'>`[value]`) }),
  ],
  [
    'raw code variable as argument',
    (s) => ({ content: block(unsafeRaw.code({ value: s })<'content'>`text(fill: red, value)`) }),
  ],
  [
    'raw variable of content',
    (s) => ({ content: block(unsafeRaw.code({ value: inline(s) })<'content'>`strong(value)`) }),
  ],
  ['raw math variable', (s) => ({ content: block(unsafeRaw.math({ value: s })`#value`) })],
  // A value in an `inline` template is data, like any part.
  ['inline template value', (s) => ({ content: block(inline`${s}`) })],
  // Prose: Typst's typography applies (smart quotes, dashes, an ellipsis, paragraphs), never syntax.
  ['prose', (s) => ({ content: block(prose(s)) })],
  ['prose.paragraphs', (s) => ({ content: block(prose.paragraphs(s)) })],
  // A method takes its arguments through the method table shared by every type with that name.
  ['method argument', (s) => ({ content: block(data(['', '']).join(s)) })],
]

/**
 * What `prose(s)` shows, as Typst typesets typed text: a line break with the spaces and tabs around it
 * is a space (none at the edges), other spaces stay; quotes are smart quotes (`<smartquote>` to the
 * extractor), runs of exactly two or three hyphens a dash and of three dots an ellipsis.
 */
function proseShown(s: string): string {
  return typography(proseLine(s))
}

function proseLine(s: string): string {
  return s
    .replace(/[ \t]*\r?\n[ \t]*/g, '\n')
    .split('\n')
    .filter(Boolean)
    .join(' ')
}

/** `prose.paragraphs(s)`: a line of only spaces and tabs ends a paragraph (the extractor joins them). */
function paragraphsShown(s: string): string {
  const paragraphs: string[][] = [[]]
  for (const line of s.replace(/\r\n/g, '\n').split('\n')) {
    if (/^[ \t]*$/.test(line)) paragraphs.push([])
    else paragraphs.at(-1)!.push(line)
  }
  return typography(
    paragraphs
      .filter((p) => p.length)
      .map((p) => proseLine(p.join('\n').replace(/^[ \t]+|[ \t]+$/g, '')))
      .join(''),
  )
}

function typography(s: string): string {
  return s
    .replace(/(?<!-)-{2,3}(?!-)/g, (d) => (d.length === 3 ? '—' : '–'))
    .replace(/(?<!\.)\.{3}(?!\.)/g, '…')
    .replace(/['"]/g, '<smartquote>')
}

async function check(values: readonly string[]): Promise<void> {
  // Every value as a dictionary key too.
  const keys = Object.fromEntries(values.map((s, i) => [s, i]))
  const cases = values.flatMap((s) => POSITIONS.map(([name, make]) => ({ s, name, ...make(s) })))
  const lets = values.map((s, i) => let_(`v${i}` as 'v', s))
  const source =
    PLAIN +
    render(
      doc(
        shown.decl,
        lets.map(([stmt]) => stmt),
        cases.map((c, i) => labelled(c.content, label(`c${i}`))),
        lets.map(([, ref], i) => labelled(block(ref), label(`l${i}`))),
        values.map((s, i) => labelled(metadata(s), label(`m${i}`))),
        labelled(metadata(data(keys)), label('keys')),
        labelled(metadata(dict(keys)), label('dict')),
      ),
    )
  // The extractor runs inside the document, where `plain` is defined.
  const probe = `#context [#metadata((
  cases: range(${cases.length}).map(i => plain(query(label("c" + str(i))).first().body)),
  lets: range(${values.length}).map(i => plain(query(label("l" + str(i))).first().body)),
  meta: range(${values.length}).map(i => query(label("m" + str(i))).first().value),
  keys: query(<keys>).first().value,
  dict: query(<dict>).first().value,
)) <result>]\n`
  const got = (await typstEval(source + probe, 'query(<result>).first().value')) as {
    cases: string[]
    lets: string[]
    meta: string[]
    keys: Record<string, number>
    dict: Record<string, number>
  }
  const expected = (c: { s: string; name: string }) =>
    c.name === 'define argument markup'
      ? `[${c.s}]`
      : c.name.endsWith('without #')
        ? 'value'
        : c.name === 'prose'
          ? proseShown(c.s)
          : c.name === 'prose.paragraphs'
            ? paragraphsShown(c.s)
            : c.s
  const wrong = cases.flatMap((c, i) =>
    got.cases[i] === expected(c) ? [] : [`${c.name}: ${JSON.stringify(c.s)} shows ${JSON.stringify(got.cases[i])}`],
  )
  expect(wrong).toEqual([])
  expect(got.lets).toEqual(values)
  expect(got.meta).toEqual(values)
  expect(got.keys).toEqual(keys)
  expect(got.dict).toEqual(keys)
}

describe('injection', () => {
  it('shows hostile values as text in every position', async () => {
    await check(HOSTILE)
  })

  it('shows arbitrary strings as text in every position', async () => {
    const unit = fc.oneof(
      fc.string({ unit: 'binary', minLength: 1, maxLength: 1 }),
      fc.constantFrom(...'#$*_`<>@=-+~/\\[]{}"\'.: \n\t1'),
    )
    await fc.assert(
      fc.asyncProperty(fc.array(fc.string({ unit, maxLength: 24 }), { minLength: 1, maxLength: 12 }), check),
      { numRuns: Number(process.env.FUZZ_RUNS ?? 15) },
    )
  })

  it('does not expose functions that turn data into code', async () => {
    const lib: Record<string, unknown> = await import('../src/index.ts')
    expect(lib.eval).toBeUndefined()
    expect(lib.plugin).toBeUndefined()
  })

  it('rejects a lone surrogate instead of printing it', () => {
    expect(() => render(doc('a\ud800b'))).toThrow(/lone surrogate/)
    expect(() => strong('\udc00')).toThrow(/lone surrogate/)
  })
})
