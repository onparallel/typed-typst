/**
 * Regressions from the security review: each case is a way data once changed a document's
 * structure, chose a file, became code or crashed the printer.
 */
import { describe, expect, it } from 'vitest'
import {
  bibliography,
  blocks,
  block,
  data,
  define,
  dict,
  doc,
  external,
  heading,
  image,
  importPackage,
  importFile,
  inline,
  label,
  labelled,
  link,
  lineSpace,
  luma,
  m,
  metadata,
  path,
  raw,
  read,
  render,
  unsafePath,
  let_,
  rgb,
  set,
  show,
  space,
  prose,
  context,
  call,
  contentBlock,
  csv,
  figure,
  json,
  upper,
  where,
  math,
  add,
  neg,
  includeFile,
  strong,
  T,
  table,
  text,
  unsafeRaw,
} from '../src/index.ts'
import type { Expr } from '../src/index.ts'
import * as lib from '../src/index.ts'
import { checkSource } from '../src/node.ts'
import { RT } from '../src/element.ts'
import { STD_READERS } from '../src/rules.ts'
import { PLAIN, typstEval } from './helpers/typst.ts'

/** Evaluates `expression` where `body` is the printed markup, and `plain` the helper of PLAIN. */
async function evalIn(markup: string, expression: string): Promise<unknown> {
  const source = `${PLAIN}\n#let body = [${markup}]\n#metadata(${expression})<result>\n`
  return typstEval(source, 'query(<result>).first().value')
}

const STRUCTURE = '("item", "heading", "enum.item", "terms.item")'

/** What Typst makes of printed markup: its plain text, and the structure it created. */
async function shows(markup: string): Promise<{ text: string; structure: string[] }> {
  return (await evalIn(
    markup,
    `(text: plain(body), structure: body.at("children", default: (body,)).map(c => repr(c.func())).filter(f => f in ${STRUCTURE}))`,
  )) as { text: string; structure: string[] }
}

const r = (x: Parameters<typeof doc>[0]) => render(doc(x))

describe('markup made by data', () => {
  it('a marker after leading spaces stays text', async () => {
    expect(await shows(r(inline(space, '- item')))).toEqual({ text: '- item', structure: [] })
    expect((await shows(r(inline('a', lineSpace, space, '= Heading')))).structure).toEqual([])
    expect(await evalIn(r(strong(inline(space, '+ item'))), `repr(body).contains("item(")`)).toBe(false)
  })

  it("a term's colons and brackets stay in the term", async () => {
    const source = r(m.terms(m.term('Total: net', 'desc'), m.term('[a: b]', 'd')))
    const terms = await evalIn(
      source,
      'body.children.filter(c => c.func() == terms.item).map(c => (plain(c.term), plain(c.description)))',
    )
    expect(terms).toEqual([
      ['Total: net', 'desc'],
      ['[a: b]', 'd'],
    ])
  })

  it('a label on blank data goes on a block of its own, not on the element before', async () => {
    for (const blank of ['', ' ']) {
      const source = r(blocks(m.heading(1, 'Intro'), inline(strong('b'), labelled(inline(blank), label('u')))))
      const targets = (await typstEval(source, 'query(<u>).map(e => repr(e.func()))')) as string[]
      expect(targets).toHaveLength(1)
      expect(['sequence', 'text']).toContain(targets[0])
    }
  })

  it('a space of data next to a markup space is kept', async () => {
    expect((await shows(r(inline('a ', space, 'b')))).text).toBe('a  b')
    expect((await shows(r(inline('a', space, ' b')))).text).toBe('a  b')
  })

  it('a term or a heading with a lineSpace (CJK prose from data) is a content block', () => {
    expect(r(m.terms(m.term(inline('a', lineSpace, 'b'), 'c')))).toBe('/ #[a\n    b]: c\n')
    expect(r(m.heading(1, prose('日本\n語')))).toBe('= #[日本\n  語]\n')
  })

  it('prints a megabyte of text in markup in linear time', () => {
    const start = performance.now()
    r(inline('a'.repeat(1 << 20)))
    r(m.heading(1, '-1 [x] #y '.repeat(1 << 16)))
    // Prose splits lines without a regular expression that backtracks on a run of spaces, and a line
    // of many parts joins its texts once.
    prose('a' + ' '.repeat(1 << 20) + 'b')
    prose.paragraphs('a \n'.repeat(1 << 16))
    r(inline(...Array.from({ length: 1 << 16 }, (_, i) => (i % 2 ? ', ' : 'tag'))))
    expect(performance.now() - start).toBeLessThan(5000)
  })

  it('code after `#context` in markup is one expression', async () => {
    const note = ' *bold* #panic(1) '
    const printed = r(
      inline(
        'Note: ',
        context(() => add('Hello', note)),
      ),
    )
    expect(printed).toBe('Note: #(context "Hello" + " *bold* #panic(1) ")\n')
    // All of it is the context: nothing after it is markup (a `#panic` there would run).
    expect((await shows(printed)).text).toBe('Note: <context>')
    expect(r(inline(context(() => neg(data(3)))))).toBe('#(context -3)\n')
  })

  it('text after `include`, also in `context` or a term, does not continue its path', () => {
    expect(
      r(
        inline(
          context(() => includeFile('chapter.typ')),
          ' + {x}',
        ),
      ),
    ).toBe('#context include "chapter.typ"; + {x}\n')
    expect(r(m.terms(m.term(inline('a', includeFile('chapter.typ')), 'b')))).toBe('/ a#include "chapter.typ";: b\n')
  })

  it('a hyphen before a number after a prose quote or shorthand stays a hyphen', async () => {
    const printed = r(inline`Balance: "${'-5'}", wait...${'-3'} and ${prose("'-1")}`)
    expect((await shows(printed)).text).toBe('Balance: <smartquote>-5<smartquote>, wait…-3 and <smartquote>-1')
  })

  it('an empty value after a line break of a template makes no paragraph break', async () => {
    const name = ''
    const printed = r(
      m.list(
        inline`Thanks,
      ${name}`,
        'b',
      ),
    )
    expect(await evalIn(printed, 'body.children.filter(c => c.func() == parbreak).len()')).toBe(0)
  })

  it('a hyphen before a number stays a hyphen', async () => {
    for (const s of ['a:-1', 'x[-1]', '[a]-1', 'x -٣', '-½', '\u0001-1'])
      expect((await shows(r(inline(s)))).text, s).toBe(s)
  })
})

describe('values read once and whole', () => {
  it('a file array is read once, a label goes on all of the text, an empty object fills an argument', () => {
    let reads = 0
    const sources = [path('a.bib')]
    Object.defineProperty(sources, 0, { get: () => (reads++ ? 'secret.bib' : path('a.bib')), enumerable: true })
    expect(r(bibliography(sources as never))).toBe('#bibliography(("a.bib",))\n')
    expect(r(labelled('a *b', label('k')))).toBe('#[a \\*b]<k>\n')
    expect(r(metadata(json.encode({})))).toBe('#metadata(json.encode((:)))\n')
    expect(() => importFile('lib/std.typ', [])).toThrow(/lists what it brings/)
  })
})

describe('strings that Typst checks', () => {
  it('fail where the document is built, not in its compilation', () => {
    expect(() => show('', strong('x'))).toThrow(/not empty/)
    expect(() => heading({ numbering: '' }, 'A')).toThrow(/a pattern/)
    expect(() => set(text, { lang: 'abcd' })).toThrow(/language code/)
    expect(() => text({ region: 'xyz' }, 'a')).toThrow(/region code/)
    expect(() => set(math.mat, { delim: 'ab' })).toThrow(/one character/)
    expect(r(set(text, { lang: 'de', region: 'AT' }))).toBe('#set text(lang: "de", region: "AT")\n')
  })
})

describe('names', () => {
  it('a label or a named argument from data is ASCII: JS knows newer Unicode letters than Typst', () => {
    // U+10940 is a letter of Unicode 17, which Typst 0.15.1 (Unicode 16) rejects in code and labels.
    const key = JSON.parse('"a\\ud802\\udd40"') as string
    expect(() => r(labelled(strong('Report'), label(key)))).toThrow(/not a valid label name/)
    expect(() => r(labelled(strong('Report'), label('introducción')))).toThrow(/ASCII/)
    expect(r(metadata(label(key)))).toBe(`#metadata(label("${key}"))\n`)
    expect(() => call(external('f'), { [key]: 1 })).toThrow(/ASCII identifier/)
    const card = define('card').rest('items', T.any).external()
    expect(() => card({ [key]: 'x' })).toThrow(/ASCII identifier/)
    // A dictionary's key prints as a string.
    expect(r(metadata(data({ [key]: 1 })))).toBe(`#metadata(("${key}": 1))\n`)
  })

  it('a module is one the library made, never a { name } from data', () => {
    const from = JSON.parse('{"name":"(x: read(\\"secret.txt\\"))"}') as { name: string }
    // @ts-expect-error a plain object is no Importable
    expect(() => external('x', from)).toThrow(/not a plain object/)
    // @ts-expect-error a plain object is no Importable
    expect(() => define('f').pos('a', T.str).external({ name: 'apa' })).toThrow(/not a plain object/)
    // @ts-expect-error a plain object is no Importable
    expect(() => importFile('lib.typ', [{ name: 'x' }])).toThrow(/not a plain object/)
    expect(render(doc(external('title', external('apa'))))).toBe('#apa.title\n')
  })

  it('a label that is no label syntax prints as label("…") in code, and is refused in markup', () => {
    expect(r(show(label('.x'), (it) => it))).toBe('#show label(".x"): it => it\n')
    expect(() => r(labelled(metadata(1), label('.x')))).toThrow(/label/)
  })

  it('an object key Typst may not know prints as a string; two keys that are one in Typst throw', () => {
    expect(r(metadata({ ['a\u{323b0}']: 1 }))).toBe('#metadata(("a\u{323b0}": 1))\n')
    expect(() => r(metadata({ aB: 1, 'a-b': 2 }))).toThrow(/both "a-b"/)
  })

  it('keys of Object.prototype are no named arguments', () => {
    expect(() => text({ constructor: 'x' } as never, 'hi')).toThrow(/no argument "constructor"/)
  })
})

describe('standard functions that read files or run code', () => {
  it("are only names the document imports, never the standard library's through external", () => {
    const evalFn = define('eval').pos('s', T.str).external()
    const imageFn = define('image').pos('s', T.str).external()
    expect(() => r(inline(evalFn('read("/etc/hosts")')))).toThrow(/not imported by the document/)
    expect(() => r(imageFn(JSON.parse('"secret.txt"') as string))).toThrow(/not imported by the document/)
    expect(() => r(metadata(external('json')))).toThrow(/not imported by the document/)
    expect(() => r(metadata(data(['a']).map(evalFn)))).toThrow(/not imported by the document/)
    // Imported, it is the package's; a member of a module is not the standard library's either.
    expect(r(blocks(importPackage('@preview/x:1.0.0', [evalFn]), inline(evalFn('x'))))).toBe(
      '#import "@preview/x:1.0.0": eval\n\n#eval("x")\n',
    )
    expect(r(external('image', external('prequery')))).toBe('#prequery.image\n')
  })

  it("count as the document's only once bound, at the top level, before the use", () => {
    const user = JSON.parse('"read(\\"secret.txt\\")"') as string
    // `let eval = eval` binds the standard library's eval under its own name.
    const [self, ev] = let_('eval', external('eval'))
    expect(() => r(blocks(self, inline(call(ev, user))))).toThrow(/not imported by the document/)
    const [pattern] = let_(['eval'], data([external('eval')]))
    expect(() => r(pattern)).toThrow(/not imported by the document/)
    // A binding after the use, or in a block, a function or a snippet, ends before it.
    const [later] = let_('eval', strong('x'))
    expect(() => r(blocks(inline(call(external('eval'), user)), later))).toThrow(/not imported/)
    const [inner] = let_('read', 1)
    expect(() => r(blocks(contentBlock([inner, 'x']), inline(call(external('read'), user))))).toThrow(/not imported/)
    expect(() => unsafeRaw.markup({ read: strong('Read more') })`#read`).toThrow(/would hide Typst's read/)
    // Bound first, at the top level, it is the document's, also earlier in a paragraph or m.lines.
    const citeFn = define('cite').pos('k', T.str).external()
    const imported = importPackage('@preview/x:1.0.0', [citeFn])
    expect(r(m.lines(imported, inline(citeFn('k'))))).toBe('#import "@preview/x:1.0.0": cite\n#cite("k")\n')
    expect(r(inline(imported, ' ', citeFn('k')))).toBe('#import "@preview/x:1.0.0": cite; #cite("k")\n')
    expect(() => r(inline(citeFn('k'), ' ', imported))).toThrow(/not imported/)
    const [own, mine] = let_('read', (x: Expr<'str'>) => upper(x))
    expect(r(blocks(own, inline(call(mine, user))))).toBe(
      '#let read = it => upper(it)\n\n#read("read(\\"secret.txt\\")")\n',
    )
  })

  it('go nowhere as values, also through .with or a define; call takes no computed function', () => {
    const user = JSON.parse('"secret.txt"') as string
    expect(() => call(csv.with(), user)).toThrow(/computed in Typst/)
    expect(() => data([user]).map(json.with())).toThrow(/reads files/)
    expect(() => call(image(path('logo.svg')).func(), user)).toThrow(/computed in Typst/)
    expect(() => show(raw, (it) => call(it.func(), { theme: user }, 'x'))).toThrow(/computed in Typst/)
    expect(() => call(raw.with(), { theme: user }, 'x')).toThrow(/computed in Typst/)
    // An element's func() is a value like any other (it takes code written to hand it to data).
    expect(r(metadata(strong('x').func()))).toBe('#metadata(strong("x").func())\n')
    expect(() => show(where(figure, { kind: image }), (it) => call(it.kind, user))).toThrow(/field of a parameter/)
    // A define with a file (or a name that may be one) by position reads what Typst passes it.
    const shown = define('shown')
      .pos('src', T.path)
      .returns(T.str)
      .body(({ src }) => read(src))
    const styled = define('styled')
      .pos('style', T.oneOf('apa', 'ieee'))
      .body(({ style }) => bibliography({ style }, path('refs.bib')))
    expect(() => data([user]).map(shown)).toThrow(/reads a file/)
    expect(() => data([user]).map(styled)).toThrow(/reads a file/)
    expect(() => call(shown.with(), user)).toThrow(/computed in Typst/)
    expect(() => let_('h', shown)).toThrow(/reads a file/)
    const apply = define('apply')
      .pos('f', T.any)
      .pos('v', T.any)
      .returns(T.any)
      .body(({ f, v }) => call(f, v))
    expect(() => apply(json, user)).toThrow(/reads a file/)
    expect(() => r(blocks(shown.decl, call(external('shown'), user)))).toThrow(/defined by the document/)
    // With its file given, it reads that one: it may go to a template.
    const tpl = external('tpl')
    expect(r(call(tpl, { bib: bibliography.with(path('refs.bib')), logo: shown.with(path('a.txt')) }))).toBe(
      '#tpl(bib: bibliography.with(path("refs.bib")), logo: shown.with(path("a.txt")))\n',
    )
  })

  it('a name bound to a file is bound to nothing else', () => {
    const user = JSON.parse('"secret.txt"') as string
    const [file, notes] = let_('notes', path('notes.txt'))
    const [other] = let_('notes', user)
    expect(() => r(blocks(file, other, read(notes)))).toThrow(/bound to a file and also/)
    const snippet = unsafeRaw.markup({ notes: user })`#notes`
    expect(() => r(blocks(file, snippet, read(notes)))).toThrow(/bound to a file and also/)
  })

  it("a snippet's variable hides no name of Typst", () => {
    const row = JSON.parse('{"name":"Card","text":"x"}') as { name: string }
    // An object typed { name } that holds more keys at run time, which the lint rule reports.
    // eslint-disable-next-line typed-typst/unsafe-raw -- this checks the runtime guard
    expect(() => unsafeRaw.markup(row)`#name #text(red)[a]`).toThrow(/would hide Typst's text/)
    const area = JSON.parse('{"name":"A","pi":"FREE"}') as { name: string }
    // eslint-disable-next-line typed-typst/unsafe-raw -- this checks the runtime guard
    expect(() => unsafeRaw.math(area)`#name = pi r^2`).toThrow(/would hide Typst's pi/)
  })

  it('lists every function with a file parameter', () => {
    const readers = Object.entries(lib).flatMap(([name, v]) => {
      const rt = (v as { [k: symbol]: unknown })?.[RT] as
        { pos: { path?: unknown }[]; named: Record<string, { path?: unknown }>; rest?: { path?: unknown } } | undefined
      if (typeof v !== 'function' || !rt?.pos) return []
      const params = [...rt.pos, ...Object.values(rt.named), ...(rt.rest ? [rt.rest] : [])]
      return params.some((p) => p.path) ? [name] : []
    })
    expect(readers.length).toBeGreaterThan(5)
    for (const name of readers) expect(STD_READERS.has(name), name).toBe(true)
  })
})

describe('files', () => {
  it('a string in an array or in data at a file parameter throws', () => {
    expect(() => bibliography(JSON.parse('["private.bib"]') as never)).toThrow(/never read as a file/)
    expect(() => bibliography(data(['private.bib']) as never)).toThrow(/computed in Typst/)
    expect(() => set(raw, { syntaxes: ['x.sublime-syntax' as never] })).toThrow(/never read as a file/)
    expect(r(bibliography([path('a.bib'), path('b.bib')]))).toBe('#bibliography(("a.bib", "b.bib"))\n')
  })

  it('a value computed in Typst is no file, unless the program vouches for it with unsafePath', () => {
    const record = data({ logo: 'secret.txt' })
    expect(() => read(record.at('logo'))).toThrow(/computed in Typst/)
    expect(() => image(record.at('logo'))).toThrow(/computed in Typst/)
    expect(() => data(['a.png']).map(image)).toThrow(/reads a file/)
    expect(() =>
      define('show-file')
        .pos('f', T.any)
        .body(({ f }) => inline(read(f))),
    ).toThrow(/computed in Typst/)
    const [stmt, logo] = let_('logo', path('logo.png'))
    expect(r(blocks(stmt, image(logo)))).toBe('#let logo = path("logo.png")\n\n#image(logo)\n')
    const shown = define('shown')
      .pos('f', T.path)
      .body(({ f }) => image(f))
    expect(r(shown(path('a.png')))).toBe('#shown(path("a.png"))\n')
    expect(r(image(unsafePath(external('logo'))))).toBe('#image(logo)\n')
    // Nor does a reader go to a template as a value: it could call it with any string.
    const card = define('card').named('loader', T.any, null).external()
    expect(() => card({ loader: image })).toThrow(/reads a file/)
  })

  it('a computed path does not type-check, a template literal type included', () => {
    const name = 'x' as string
    // @ts-expect-error a template literal type, which data fills in
    // eslint-disable-next-line typed-typst/literal-path -- this checks the type rules
    expect(() => image(path(`uploads/${name}`))).not.toThrow()
  })
})

describe('values', () => {
  it('a polluted Object.prototype never becomes code', () => {
    const proto = Object.prototype as Record<string, unknown>
    try {
      proto.number = '#panic()'
      proto.cond = { k: 'raw', src: 'panic()' }
      proto.t = 'fill: red, read("secret.txt")) + text(stroke'
      expect(r(m.list('a'))).toBe('- a\n')
      expect(r(text({ size: 12 as never }, 'hi'))).not.toContain('read')
    } finally {
      delete proto.number
      delete proto.cond
      delete proto.t
    }
  })

  it('a polluted ident, inline, ctx or default never becomes code nor drops an argument', () => {
    const proto = Object.prototype as Record<string, unknown>
    try {
      proto.ident = 'a: read("secret.txt"), b'
      proto.inline = [{ k: 'raw', src: '#read("secret.txt")' }]
      proto.ctx = true
      proto.c = true
      expect(r(metadata(data({ title: 'Report' })))).toBe('#metadata(("title": "Report"))\n')
      expect(r(block(m.heading(1, 'Card')))).toBe('#block[= Card]\n')
      expect(r(table({ columns: 2 }, 'a'))).toBe('#table(columns: 2, "a")\n')
      proto.default = { k: 'raw', src: 'read("secret.txt")' }
      expect(
        r(
          define('card')
            .pos('title', T.str)
            .body(({ title }) => strong(title)).decl,
        ),
      ).toBe('#let card(title) = strong(title)\n')
    } finally {
      for (const k of ['ident', 'inline', 'ctx', 'c', 'default']) delete proto[k]
    }
  })

  it('a polluted Object.prototype does not make a dictionary key code, nor fill a hole', () => {
    const proto = Object.prototype as Record<string | number, unknown>
    try {
      proto.ident = 'a: read("secret.txt"), b'
      expect(r(metadata(data({ title: 'Report' })))).toBe('#metadata(("title": "Report"))\n')
      expect(r(metadata(dict({ 'x y': 1 })))).toBe('#metadata(("x y": 1))\n')
      delete proto.ident
      // An index past the end of an array is read from the prototype too: only the hole is checked.
      proto[1] = 'INJECTED'
      expect(() => data([0, , 2] as never)).toThrow(/hole/)
    } finally {
      delete proto.ident
      delete proto[1]
    }
  })

  it('holes, cycles and depth fail clearly', () => {
    expect(() => r(metadata(new Array(1) as never))).toThrow(/undefined/)
    expect(() => r(metadata([1, , 3] as never))).toThrow()
    expect(() => data([1, , 3] as never)).toThrow(/undefined/)
    const cycle: unknown[] = []
    cycle.push(cycle)
    expect(() => r(metadata(cycle as never))).toThrow(/nests deeper/)
  })

  it('data takes JSON-like values only', () => {
    class Point {
      x = 1
    }
    for (const v of [new Date(), new Map(), new Point()]) expect(() => data(v as never)).toThrow(/JSON-like values/)
    expect(r(metadata(data({ a: [1, { b: null }] })))).toBe('#metadata(("a": (1, ("b": none))))\n')
  })

  it('values nested in steps fail clearly, and deep values print without growing', () => {
    let chain: unknown = 'x'
    for (let i = 0; i < 100_000; i++) chain = data([chain as never])
    expect(() => r(metadata(chain as never))).toThrow(/deeper than 250/)
    let deep: unknown = 1
    for (let i = 0; i < 240; i++) deep = [deep, 'item']
    expect(r(metadata(data(deep as never))).length).toBeLessThan(10_000)
  })

  it('an empty object from data is a dictionary where a function has no named arguments; list options are checked', () => {
    expect(r(metadata(JSON.parse('{}') as never))).toBe('#metadata((:))\n')
    expect(r(link(JSON.parse('{}') as never, 'Go'))).toBe('#link((:), "Go")\n')
    expect(() => m.list(...(JSON.parse('[{"tight": "x", "foo": 1}, "a"]') as never[]))).toThrow(/options take tight/)
  })

  it('the smallest int stays an int', async () => {
    const source = r(metadata(-(2n ** 63n)))
    expect(await typstEval(source, 'type(query(metadata).first().value) == int')).toBe(true)
  })

  it('a value that is not an expression where one is required fails clearly', () => {
    expect(() => rgb(1, 'x' as never, 3)).toThrow(/expected a Typst expression/)
    expect(() => luma('5' as never)).toThrow(/expected a Typst expression/)
    expect(() => show(heading, (async (it: never) => it) as never)).toThrow(/promise/)
  })
})

describe('unsafeRaw', () => {
  it('rejects a forged template', () => {
    const s = 'read("secret.txt")'
    const forged = Object.freeze(Object.assign([s], { raw: Object.freeze([s]) })) as unknown as TemplateStringsArray
    // eslint-disable-next-line typed-typst/unsafe-raw -- this checks the runtime guard
    expect(() => unsafeRaw.code(forged)).toThrow(/literal template/)
  })
})

describe('check()', () => {
  it('kills Typst after the timeout', async () => {
    const loop = '#let n = 0\n#for i in range(100000000) { n = n + 1 }'
    await expect(checkSource(loop, { timeout: 300 })).rejects.toThrow(/did not finish/)
  })

  it('rejects an input name Typst would split', async () => {
    await expect(checkSource('x', { inputs: { 'a=b': 'c' } })).rejects.toThrow(/input name/)
  })
})
