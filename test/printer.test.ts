/** The printer's syntax rules, one by one. */
import { describe, expect, it } from 'vitest'
import {
  add,
  array,
  assume,
  type Expr,
  block,
  heading,
  blocks,
  parbreak,
  box,
  calc,
  codeBlock,
  context,
  align,
  auto,
  bibliography,
  center,
  columns,
  color,
  counter,
  gradient,
  grid,
  spread,
  data,
  fr,
  times,
  datetime,
  here,
  doc,
  emph,
  dict,
  external,
  define,
  T,
  importPackage,
  includeFile,
  figure,
  inline,
  label,
  labelled,
  contentBlock,
  let_,
  linebreak,
  lineSpace,
  emoji,
  image,
  m,
  metadata,
  where,
  query,
  red,
  rgb,
  sym,
  path,
  pt,
  pagebreak,
  space,
  page,
  render,
  set,
  show,
  str,
  strong,
  table,
  text,
  unsafeRaw,
  unsafePath,
  rect,
  ref,
  mm,
  call,
  prose,
  raw,
  json,
  pad,
  enum_,
  list,
  layout,
  numbering,
  link,
  outline,
  luma,
  terms,
  math,
  stroke,
  scale,
  pct,
} from '../src/index.ts'
import { typstCompile, typstEval } from './helpers/typst.ts'

const r = (...parts: Parameters<typeof doc>) => render(doc(...parts))

describe('code embedded in markup', () => {
  it('ends with `;` when the next character could continue it', () => {
    expect(r(inline(strong('a'), '(b)'))).toBe('#strong("a");(b)\n')
    expect(r(inline(strong('a'), '[b]'))).toBe('#strong("a");[b]\n')
    expect(r(inline(strong('a'), '[b'))).toBe('#strong("a");\\[b\n')
    expect(r(inline(strong('a'), '.b'))).toBe('#strong("a");.b\n')
    expect(r(inline(strong('a'), 'b'))).toBe('#strong("a");b\n')
  })

  it('needs no `;` before a space, a line end or `]`', () => {
    expect(r(inline(strong('a'), ' b'))).toBe('#strong("a") b\n')
    expect(r(inline('a ', strong('b')))).toBe('a #strong("b")\n')
    expect(r(block(inline(strong('a'))))).toBe('#block[#strong("a")]\n')
  })

  it('parenthesizes what is not a call chain', () => {
    expect(r(inline(add(pt(1), pt(2)) as never))).toBe('#(1pt + 2pt)\n')
    expect(r(inline(pt(-1) as never))).toBe('#(-1pt)\n')
    expect(r(inline(unsafeRaw.code<'content'>`x`))).toBe('#(x)\n')
  })
})

describe('content in code', () => {
  it('prints a string as a string literal and markup as a content block', () => {
    expect(r(strong('a'))).toBe('#strong("a")\n')
    expect(r(strong(inline('a', emph('b'))))).toBe('#strong[a#emph("b")]\n')
  })

  it('puts only the last content argument in a trailing block', () => {
    expect(r(block({ inset: pt(1) }, inline('x')))).toBe('#block(inset: 1pt)[x]\n')
    expect(r(table(inline('a'), inline('b')))).toBe('#table([a], [b])\n')
  })

  it('indents block content and keeps inline content on one line', () => {
    expect(r(block(m.list('a', 'b')))).toMatchInlineSnapshot(`
      "#block[
        #list.item[a]
        #list.item[b]
      ]
      "
    `)
    expect(r(block([]))).toBe('#block([])\n')
  })
})

describe('literals', () => {
  it('prints arrays and dictionaries', () => {
    expect(r(metadata(data([])))).toBe('#metadata(())\n')
    expect(r(metadata(data([1])))).toBe('#metadata((1,))\n')
    expect(r(metadata(data({})))).toBe('#metadata((:))\n')
    expect(r(metadata(data({ 'a b': 1.5, c: null })))).toBe('#metadata(("a b": 1.5, "c": none))\n')
    // Data may hold Typst values; as a value, it has the methods of its type.
    expect(r(inline(data([pt(1), strong('x')]).len()))).toBe('#(1pt, strong("x")).len()\n')
    // Keys as written: identifiers when they can be, else strings.
    expect(r(metadata(dict({ showTitle: true, 'a b': pt(1), none: null, é: 1 })))).toBe(
      '#metadata((showTitle: true, "a b": 1pt, "none": none, "é": 1))\n',
    )
  })

  it('breaks long calls one argument per line with a trailing comma', () => {
    const long = table({ columns: 3 }, 'a'.repeat(30), 'b'.repeat(30), 'c'.repeat(30))
    expect(r(long)).toBe(
      `#table(\n  columns: 3,\n  "${'a'.repeat(30)}",\n  "${'b'.repeat(30)}",\n  "${'c'.repeat(30)}",\n)\n`,
    )
  })
})

describe('lines', () => {
  it('join blocks with a line break instead of a paragraph break', () => {
    expect(r(m.lines('Fruits:', m.list('apple', 'pear')), 'Next')).toMatchInlineSnapshot(`
      "Fruits:
      #list.item[apple]
      #list.item[pear]

      Next
      "
    `)
    expect(r(m.lines(set(text, { fill: red }), 'styled'))).toBe('#set text(fill: red)\nstyled\n')
  })
})

describe('term lists', () => {
  it('print as markup, tight or wide', () => {
    expect(r(m.terms(m.term('A', 'first'), m.term('B', 'second')))).toMatchInlineSnapshot(`
      "#terms.item([A])[first]
      #terms.item([B])[second]
      "
    `)
    expect(r(m.terms({ tight: false }, m.term('A', m.lines('x', 'more'))))).toMatchInlineSnapshot(`
      "#terms.item([A])[x
        more]
      "
    `)
    expect(r(m.terms({ tight: false }, m.term('A', 'x', m.lines('more'))))).toMatchInlineSnapshot(`
      "#terms.item([A])[x

        more]
      "
    `)
  })
})

describe('block content in code', () => {
  it('keeps one line on one line and writes paragraph breaks at the edges as blank lines', () => {
    // `[\n= H\n]` would be a space, the heading and a space.
    expect(r(inline(box(blocks(heading('H')))))).toMatchInlineSnapshot(`
      "#box[#heading("H")]
      "
    `)
    expect(r(inline(box(blocks(parbreak(), heading('H'), 'x', parbreak()))))).toMatchInlineSnapshot(`
      "#box[

        #heading("H")

        x

      ]
      "
    `)
  })
})

describe('list items', () => {
  it('continue on the next lines with an m.lines body; an m.lines child is a new paragraph', () => {
    const child = m.list('Child item')
    expect(r(m.list(m.item(m.lines('Parent item', child)), 'Next item'))).toMatchInlineSnapshot(`
      "#list.item[Parent item
        #list.item[Child item]]
      #list.item[Next item]
      "
    `)
    expect(r(m.list(m.item('Parent item', m.lines('Second paragraph', child)), 'Next item'))).toMatchInlineSnapshot(`
      "#list.item[Parent item

        Second paragraph
        #list.item[Child item]]
      #list.item[Next item]
      "
    `)
    expect(r(m.list(m.item(m.lines('Parent item', 'same paragraph'), 'Second paragraph')))).toMatchInlineSnapshot(`
      "#list.item[Parent item
        same paragraph

        Second paragraph]
      "
    `)
    // A nested list follows the item directly in a tight list.
    expect(r(m.list(m.item('Parent item', child)))).toMatchInlineSnapshot(`
      "#list.item[Parent item
        #list.item[Child item]]
      "
    `)
  })
})

describe('show rule elements', () => {
  it('reject a field the bindings do not know', () => {
    expect(() => show(heading, (it) => (it as unknown as Record<string, never>).nonsense!)).toThrow(/no field/)
  })
})

describe('labels', () => {
  it('attach to an element or to text', () => {
    // Text in a content block: Typst would label only the last of the elements it splits it into.
    expect(r(inline(labelled('Text', label('t')), ' ', strong('x')))).toBe('#[Text]<t> #strong("x")\n')
    // At the end of a heading, a label would go on the heading.
    expect(r(heading(['A ', labelled(strong('b'), label('k'))]))).toMatchInlineSnapshot(`
      "#heading[A #strong("b")<k>]
      "
    `)
    expect(r(labelled(strong('x'), label('s')))).toBe('#strong("x")<s>\n')
  })
})

describe('content and values', () => {
  it('a define that returns a type has a value body; a field that may be none goes back where none goes', () => {
    const two = define('two')
      .returns(T.int)
      .body(() => 2)
    expect(r(two.decl)).toBe('#let two() = 2\n')
    expect(r(show(rect, (it) => rect({ fill: it.fill, stroke: it.stroke }, it.body)))).toBe(
      '#show rect: it => rect(fill: it.fill, stroke: it.stroke, it.body)\n',
    )
  })

  it('list items fit their list; a snippet that ends with a line comment compiles', () => {
    expect(() => m.terms('x' as never)).toThrow(/m.term/)
    expect(() => m.list('a', m.numbered(3, 'b'))).toThrow(/m.enum/)
    expect(r(inline(unsafeRaw.code`1 + 2 // sum`))).toBe('#(1 + 2 // sum\n)\n')
  })
})

describe('numbers', () => {
  it('shown as text or with a unit keep 15 significant digits; as values, all of them', () => {
    expect(r(inline(0.1 + 0.2, ' ', 1.1 * 1.1, ' ', 2 / 3, ' ', 1234567890123456))).toBe(
      '0.3 1.21 0.666666666666667 1234567890123456\n',
    )
    expect(r(inline(pt(0.1 + 0.2)))).toBe('#(0.3pt)\n')
    expect(r(metadata(data([0.1 + 0.2, 0.8427007929497149])))).toBe(
      '#metadata((0.30000000000000004, 0.8427007929497149))\n',
    )
  })

  it('a contextual function without its token throws, and a callback keeps all its parameters', () => {
    expect(() => (query as unknown as (s: unknown) => unknown)(heading)).toThrow(/contextual: pass the token/)
    expect(r(metadata(data([1]).map((a, _b, _c, _d, e) => add(a, e))))).toMatchInlineSnapshot(`
      "#metadata((1,).map((_1, _2, _3, _4, _5, .._0) => _1 + _5))
      "
    `)
  })

  // The parameters the library names never hide a binding the callback reads.
  it('callback parameters are _1, _2…, which the document cannot bind', () => {
    const [d, x] = let_('x', 10)
    expect(r([d, metadata(data([1, 2, 3]).fold(0, (acc, _v) => add(acc, x)))])).toMatchInlineSnapshot(`
      "#let x = 10;#metadata((1, 2, 3).fold(0, (_1, _2, .._0) => _1 + x))
      "
    `)
    expect(r(metadata(data([1]).map((a, _i) => data([2]).map((b, _j) => add(a, b)))))).toMatchInlineSnapshot(`
      "#metadata(
        (1,).map((_1, _2, .._0) => (2,).map((_1_2, _2_2, .._0_2) => _1 + _1_2)),
      )
      "
    `)
    expect(() => let_('_1', 1)).toThrow(/cannot be bound/)
    expect(() =>
      define('f')
        .pos('_2', T.int)
        .body(() => 'x'),
    ).toThrow(/cannot be bound/)
  })

  // A key that is no identifier prints as a string, as in dict().
  it('object keys that are keywords or not identifiers print as strings', () => {
    expect(r(metadata({ none: 1, 'a b': 2, fontSize: 3 } as never))).toBe(
      '#metadata(("none": 1, "a b": 2, font-size: 3))\n',
    )
  })

  // An object is named arguments only when the required values are still given.
  it('an object as the only argument of a function that needs a value is that value', () => {
    expect(r(raw(json.encode({ pretty: true } as never)))).toBe('#raw(json.encode((pretty: true)))\n')
    expect(r(raw(json.encode({ pretty: true }, data({ a: 1 }))))).toBe('#raw(json.encode(pretty: true, ("a": 1)))\n')
  })
  it('set pad takes rest', () => {
    expect(r(set(pad, { rest: pt(4) }))).toBe('#set pad(4pt)\n')
  })

  // In a callback that returns content, `false` is content, as in `context`.
  it('false or a number from a content callback is content', () => {
    const draft = false as boolean
    expect(r(show(heading, (it) => draft && strong(it.body)))).toBe('#show heading: it => []\n')
    expect(r(show(heading, () => 3))).toBe('#show heading: it => [3]\n')
  })

  // Grid and table callbacks follow the same rule.
  it('cell callbacks are (_1, _2)', () => {
    const [d, x] = let_('x', 3)
    expect(r([d, table({ columns: 2, inset: (_c, _r) => times(pt(2), x) }, 'a', 'b')])).toMatchInlineSnapshot(`
      "#let x = 3;#table(columns: 2, inset: (_1, _2, .._0) => 2pt * x, "a", "b")
      "
    `)
  })

  // Numbering, list markers and layout return content too.
  it('an array or false from a numbering, marker or layout callback is content', () => {
    const draft = false as boolean
    expect(r(set(heading, { numbering: (n) => draft && inline(n, '.') }))).toMatchInlineSnapshot(`
      "#set heading(numbering: (it, .._0) => [])
      "
    `)
    expect(r(set(enum_, { numbering: (n) => [strong('No.'), ' ', inline(n), ')'] }))).toMatchInlineSnapshot(`
      "#set enum(numbering: (it, .._0) => [#strong("No.") #it;)])
      "
    `)
    expect(r(set(list, { marker: () => draft && '-' }))).toBe('#set list(marker: (.._0) => [])\n')
    expect(r(layout(() => ['Width: ', strong('w')]))).toBe('#layout((.._0) => [Width: #strong("w")])\n')
    expect(r(context((ctx) => counter(heading).display(ctx, (n) => [n, '.'])))).toMatchInlineSnapshot(`
      "#context counter(heading).display((it, .._0) => [#it;.])
      "
    `)
  })

  // A function without fixed parameters takes them all, and spreads them.
  it('(...nums) => … prints (.._0) => …', () => {
    expect(r(set(heading, { numbering: (...n) => numbering('1.a', ...n) }))).toBe(
      '#set heading(numbering: (.._0) => numbering("1.a", .._0))\n',
    )
    expect(r(set(heading, { numbering: (...n) => layout(() => numbering('1.a', ...n)) }))).toBe(
      '#set heading(numbering: (.._0) => layout((.._0_2) => numbering("1.a", .._0)))\n',
    )
  })

  // As in generated functions, an object is named arguments only when the
  // positional ones are still given.
  it('an object for a positional parameter is that value', () => {
    const f = define('f')
      .pos('opts', T.any)
      .named('title', T.str, '')
      .body((p) => inline(p.title))
    expect(r(f({ title: 'x' }))).toBe('#f((title: "x"))\n')
    expect(r(f({ title: 'x' }, 1))).toBe('#f(1, title: "x")\n')
    expect(r(f.with({ title: 'y' }))).toBe('#f.with(title: "y")\n')
  })

  // `{}` that cannot be a positional argument is no arguments.
  it('align({}, center, body)', () => {
    expect(r(align({}, center, 'body'))).toBe('#align(center, "body")\n')
  })

  it('a named-arguments object after the positional ones says that it goes first', () => {
    expect(() => table('a', { columns: 2 } as never)).toThrow(/named arguments go first/)
  })
})

describe('statements in a line', () => {
  it('end with `;` and apply to the rest of the paragraph', () => {
    expect(r(inline('A ', set(text, { fill: red }), ' B'))).toBe('A #set text(fill: red); B\n')
  })
})

describe('blocks', () => {
  it('separates statements by a line and other blocks by a blank line', () => {
    expect(r(set(text, { size: pt(1) }), set(text, { size: pt(2) }), 'a', 'b')).toBe(
      '#set text(size: 1pt)\n#set text(size: 2pt)\n\na\n\nb\n',
    )
  })

  it('prints headings, nested lists and numbered items', () => {
    expect(r(heading({ depth: 2 }, 'T'), m.enum(m.numbered(3, 'c', m.list('d'))))).toMatchInlineSnapshot(`
      "#heading(depth: 2, "T")

      #enum.item(3)[c
        #list.item[d]]
      "
    `)
  })

  it('never puts a source line break in data', () => {
    expect(r(heading('a\nb'), m.list('c\n\nd'))).toMatchInlineSnapshot(`
      "#heading("a\\u{a}b")

      #list.item[c\\u{a}\\u{a}d]
      "
    `)
  })
})

describe('rules and scripting', () => {
  it('prints show rules with closures and nested closure names', () => {
    // The inner closure's parameter is renamed so that it does not shadow `it`.
    const rule = show(heading, (it) => array.map(data([1]), (_x) => it))
    expect(r(rule)).toMatchInlineSnapshot(`
      "#show heading: it => array.map((1,), (it2, .._0_2) => it)
      "
    `)
    // A JS function with no parameters takes whatever Typst passes it.
    expect(r(show(heading, (it) => array.map(data([1]), () => it)))).toBe(
      '#show heading: it => array.map((1,), (.._0_2) => it)\n',
    )
    // A show rule returns content: an array is a sequence.
    expect(r(show(strong, (it) => [it.body, it.body]))).toBe('#show strong: it => [#it.body;#it.body]\n')
  })

  it('takes a function where a parameter takes content or a function', () => {
    expect(r(set(heading, { supplement: (it) => it }))).toMatchInlineSnapshot(`
      "#set heading(supplement: (it, .._0) => it)
      "
    `)
  })

  it('prints lets, code blocks, context and labels', () => {
    // `std` is how the document reaches the standard library, so it cannot be a name.
    expect(() => let_('std', 1)).toThrow(/std/)
    const [decl, count] = let_('count', 1)
    expect(r(decl, inline(count as never))).toBe('#let count = 1\n\n#count\n')
    expect(r(codeBlock([set(text, { size: pt(1) })], 'a'))).toBe('#{ set text(size: 1pt); "a" }\n')
    expect(r(context(() => str('a')))).toBe('#context str("a")\n')
    expect(r(labelled(metadata(1), label('m')))).toBe('#metadata(1)<m>\n')
  })

  it('applies a package template with `show: f.with(…)`', () => {
    const template = define('conf').named('title', T.content, null).rest('args', T.any).external()
    const accent = external('accent')
    expect(
      r(
        importPackage('@preview/example:0.1.0', [template, accent]),
        show(template.with({ title: 'A paper' })),
        inline(text({ fill: accent }, 'x')),
      ),
    ).toBe(
      '#import "@preview/example:0.1.0": conf, accent\n#show: conf.with(title: "A paper")\n\n#text(fill: accent, "x")\n',
    )
    expect(() => external('std')).toThrow(/std/)
    expect(() => external('a b' as 'x')).toThrow()
  })

  it('declares parameters by their Typst name and takes them in camelCase', () => {
    const note = define('note')
      .named('font-size', T.any, pt(10))
      .body(({ fontSize }) => text({ size: fontSize }, 'x'))
    expect(r(note.decl, inline(note({ fontSize: pt(9) })))).toBe(
      '#let note(font-size: 10pt) = text(size: font-size, "x")\n\n#note(font-size: 9pt)\n',
    )
  })

  it('reaches the standard library through std where the document binds one of its names', () => {
    const [decl, title] = let_('title', inline('My report'))
    const location = external('location')
    expect(r(decl, set(text, { fill: red }), inline(title, heading(title), text({ fill: red }, 'x'), location))).toBe(
      '#let title = [My report]\n#set text(fill: red)\n\n#title;#heading(title);#text(fill: red, "x");#location\n',
    )
    const strongFn = define('strong')
      .pos('body', T.content)
      .body(({ body }) => emph(body))
    expect(r(strongFn.decl, show(heading, strongFn), inline(strong('a'), strongFn('b')))).toBe(
      '#let strong(body) = emph(body)\n#show heading: strong\n\n#std.strong(\"a\");#strong([b])\n',
    )
    const [shadow] = let_('text', 'x')
    expect(r(shadow, set(text, { fill: red }), inline(text('a'), sym.arrow.r))).toBe(
      '#let text = "x"\n#set std.text(fill: red)\n\n#std.text("a");#sym.arrow.r\n',
    )
  })

  it('calls methods on any value', () => {
    const [decl, c] = let_('c', counter(heading))
    expect(r(decl, inline(c.update(2), datetime.today().display('[year]')))).toBe(
      '#let c = counter(heading)\n\n#c.update(2);#datetime.today().display("[year]")\n',
    )
    expect(r(show(heading, (it) => it.fields()))).toBe('#show heading: it => it.fields()\n')
    // A method of several types with one name (`counter.at` takes the context token, `array.at` does not).
    expect(
      r(
        context((ctx) => c.at(ctx, here(ctx))),
        inline(data([1]).at(0)),
      ),
    ).toBe('#context c.at(here())\n\n#(1,).at(0)\n')
  })

  it('spreads arrays into variadic arguments', () => {
    expect(r(inline(grid({ columns: 2 }, 'a', spread(data(['b', 'c'])))))).toBe(
      '#grid(columns: 2, "a", ..("b", "c"))\n',
    )
    expect(r(inline(gradient.linear(spread(color.map.rainbow))))).toBe('#gradient.linear(..color.map.rainbow)\n')
    expect(() => text(spread(data(['a'])) as never)).toThrow(/variadic/)
  })

  it('repeats arrays, strings and content with `times`', () => {
    expect(r(metadata(times([fr(1)], 3)), metadata(times(4, 'ab')), inline(times(inline('a', linebreak()), 2)))).toBe(
      '#metadata((1fr,) * 3)\n\n#metadata(4 * "ab")\n\n#([a#linebreak()] * 2)\n',
    )
  })

  it('imports modules and renamed items', () => {
    const apa = external('apa')
    const titlePage = define('title-page').named('title', T.content, []).external(apa)
    const orcid = external('orcid-link')
    expect(
      r(
        importPackage('@preview/versatile-apa:7.2.0', apa),
        importPackage('@preview/orchid:0.1.0', [{ item: 'generate-link', as: orcid }]),
        show(titlePage.with({ title: inline('A') })),
        inline(titlePage({ title: inline('B') }), external('version', apa), orcid),
      ),
    ).toBe(
      '#import "@preview/versatile-apa:7.2.0" as apa\n' +
        '#import "@preview/orchid:0.1.0": generate-link as orcid-link\n' +
        '#show: apa.title-page.with(title: [A])\n\n' +
        '#apa.title-page(title: [B]);#apa.version;#orcid-link\n',
    )
    expect(() => importPackage('@preview/a:0.1.0', [{ item: 'a b', as: orcid }])).toThrow()
  })

  it('passes on a name from a parameter where any other string would be a file', () => {
    const refs = define('refs')
      .named('style', T.oneOf('apa', 'ieee'), 'apa')
      .body(({ style }) => bibliography({ style }, path('refs.bib')))
    expect(r(refs.decl, inline(refs({ style: 'ieee' })))).toBe(
      '#let refs(style: "apa") = bibliography(style: style, "refs.bib")\n\n#refs(style: "ieee")\n',
    )
    expect(() => refs({ style: 'secret.csl' as 'apa' })).toThrow(/not one of apa, ieee/)
    expect(() => bibliography({ style: 'secret.csl' as 'apa' }, path('refs.bib'))).toThrow(/T\.oneOf/)
    // A name the parameter does not take is no way around it either.
    expect(() =>
      define('own')
        .named('style', T.oneOf('secret.csl'), 'secret.csl')
        .body(({ style }) => bibliography({ style: style as never }, path('refs.bib'))),
    ).toThrow(/secret\.csl/)
  })

  it('writes a lineSpace as a line break, never as a paragraph break', () => {
    expect(r(inline('日本', lineSpace, '語'), m.list(inline('a', lineSpace, 'b')))).toMatchInlineSnapshot(`
      "日本
      語

      #list.item[a
      b]
      "
    `)
    expect(r(inline('a', lineSpace, lineSpace, 'b'))).toBe('a\n b\n')
    // After a line break, text starts a line: an enum marker or a term there is escaped.
    expect(r(inline('a', lineSpace, '1. b', lineSpace, '/ c'))).toBe('a\n1\\. b\n\\/ c\n')
    // One with nothing after it, or after another, would leave a line of only spaces.
    expect(
      r(
        m.list(
          inline`Thanks,
      ${''}`,
          'b',
        ),
        inline('a', lineSpace, space, lineSpace, 'b'),
      ),
    ).toMatchInlineSnapshot(`
      "#list.item[Thanks,]
      #list.item[b]

      a
        b
      "
    `)
  })

  it('applies positional arguments with `with`, from the first', () => {
    expect(r(show(columns.with(2)), show(columns.with({ gutter: pt(4) }, 2)), inline(align.with(center)))).toBe(
      '#show: columns.with(2)\n#show: columns.with(gutter: 4pt, 2)\n\n#align.with(center)\n',
    )
  })

  it('prints set rules with a condition', () => {
    const [decl, wide] = let_('wide', true)
    expect(r(decl, set(page, { width: pt(200) }, { if: wide }))).toBe(
      '#let wide = true\n#set page(width: 200pt) if wide\n',
    )
    expect(() => set(page, { width: pt(1) }, { if: true as never })).toThrow(/bool/)
  })

  it('prints code blocks of statements and expressions, whose values join', () => {
    const [decl, n] = let_('n', 3)
    expect(r(inline(codeBlock([decl, strong('x'), inline('n = ', n)])))).toBe('#{ let n = 3; strong("x"); [n = #n] }\n')
  })

  it('takes functions from define as unsafeRaw variables, and parameters without a let', () => {
    const half = define('half')
      .pos('x', T.any)
      .returns(T.any)
      .body(({ x }) => unsafeRaw.code({ x })`x / 2`)
    expect(r(half.decl, inline(unsafeRaw.code({ half })`half(4)`))).toBe('#let half(x) = (x / 2)\n\n#(half(4))\n')
  })

  it('removes the indentation of unsafeRaw templates that TypeScript adds', () => {
    // A template on lines of its own loses those line breaks and the indentation all its lines share.
    const snippet = unsafeRaw.markup`
      #context {
        let w = page.width
        [#w]
      }
    `
    expect(r(snippet)).toBe('#context {\n  let w = page.width\n  [#w]\n}\n')
    // One that starts on the backtick's line keeps its lines as written (its first line's column is unknown).
    expect(
      r(
        block(unsafeRaw.markup`- Fruits
        - apple`),
      ),
    ).toContain('[\n- Fruits\n        - apple]')
  })

  it('prints units without the noise of JS arithmetic, hex colors as given, and unsafe paths', () => {
    expect(r(inline(pt(0.1 + 0.2), mm(246.20000000000002)))).toBe('#(0.3pt);#(246.2mm)\n')
    expect(r(inline(rect({ fill: rgb('#A0AEC0') })))).toBe('#rect(fill: rgb("#A0AEC0"))\n')
    const hash = 'ab12'
    expect(r(inline(image(unsafePath(`assets/${hash}.png`))))).toBe('#image("assets/ab12.png")\n')
  })

  it('prints a path literal as a string only where the call that reads it is written', () => {
    // Typst resolves a string where the function that reads it runs, a path where it was made.
    expect(r(inline(image(path('a.png'))))).toBe('#image("a.png")\n')
    expect(r(inline(bibliography({ style: path('x.csl') }, [path('a.bib'), path('b.bib')])))).toBe(
      '#bibliography(style: "x.csl", ("a.bib", "b.bib"))\n',
    )
    const logo = define('logo').pos('file', T.any).external()
    expect(r(inline(logo(path('a.png'))))).toBe('#logo(path("a.png"))\n')
    expect(r(let_('p', path('a.png'))[0])).toBe('#let p = path("a.png")\n')
    expect(r(show(image.with(path('a.png'))))).toBe('#show: image.with(path("a.png"))\n')
  })

  it('takes auto and none where T.orAuto and T.nullable allow them, also around T.oneOf', () => {
    const img = define('img')
      .named('format', T.orAuto(T.oneOf('png', 'svg')), auto)
      .named('fit', T.nullable(T.oneOf('cover', 'contain')), null)
      .body(({ format }) => inline(format))
    expect(r(img.decl, inline(img({ format: 'svg' }), img({ format: auto, fit: null })))).toBe(
      '#let img(format: auto, fit: none) = [#format]\n\n#img(format: "svg");#img(format: auto, fit: none)\n',
    )
    expect(() => img({ format: 'gif' as 'png' })).toThrow(/not one of png, svg/)
  })

  it('writes inline as a template: text is text, values are elements', () => {
    const name = 'ACME *Ltd* #x'
    expect(r(inline`Thank you, ${strong(name)}. A *literal* #star, 2 < 3.`)).toBe(
      'Thank you, #strong("ACME *Ltd* #x");. A \\*literal\\* \\#star, 2 < 3.\n',
    )
    // Line breaks and their indentation are one space; at the edges they go away.
    const long = inline`
      A paragraph that spans
      several lines, with ${emph('one')} element.
    `
    expect(r(long)).toBe('A paragraph that spans several lines, with #emph("one") element.\n')
    // Between CJK characters, a line break that Typst drops.
    expect(
      r(inline`日本
      語`),
    ).toBe('日本\n語\n')
    // The same as the parts form.
    expect(r(inline`a ${strong('b')} c`)).toBe(r(inline('a ', strong('b'), ' c')))
  })

  it('includes files', () => {
    expect(r(includeFile('chapters/intro.typ'), inline(includeFile('a "b".typ'), 'x'))).toBe(
      '#include "chapters/intro.typ"\n\n#include "a \\"b\\".typ";x\n',
    )
    // `include` reads past spaces: followed by anything on its line, it ends with `;`.
    expect(r(inline(includeFile('a.typ'), space, pagebreak()))).toBe('#include "a.typ"; #pagebreak()\n')
  })

  it('calls type and module functions by their Typst path', () => {
    expect(
      r(inline(calc.abs(-3) as never, str.len('ab') as never, array.join(['a'], ', ') as never, box(linebreak()))),
    ).toBe('#calc.abs(-3);#str.len("ab");#array.join(("a",), ", ");#box(linebreak())\n')
    expect(r(inline(str('x').len() as never))).toBe('#str("x").len()\n')
  })
})

describe('prose', () => {
  it("an inline template's own text and prose() get Typst's typography; data is shown as it is", () => {
    const value = `don't -- 5'11"`
    expect(r(inline`Don't -- wait... "${value}"`)).toBe('Don\'t -- wait... "don\\\'t \\-- 5\\\'11\\""\n')
    expect(r(inline(prose(value)))).toBe("don't -- 5'11\"\n")
    // A run counts only as a whole, and only when all of it is prose.
    expect(r(inline(prose('a----b c....d')))).toBe('a\\-\\-\\--b c\\.\\.\\.\\.d\n')
    expect(r(inline`a-${'-b'} c..${'.d'}`)).toBe('a\\--b c\\.\\.\\.d\n')
    // Syntax stays text.
    expect(r(inline(prose('*bold* #eval = x')))).toBe('\\*bold\\* \\#eval = x\n')
  })

  it('a line break is a space; in prose.paragraphs a blank line is a new paragraph', () => {
    expect(r(prose('One\nline\n\nTwo'))).toBe('One line Two\n')
    expect(r(prose.paragraphs('One\nline\n\nTwo'))).toBe('One line\n\nTwo\n')
    // A `\r` of the data at the end of a paragraph stays, as in prose.
    expect(r(prose.paragraphs('One \t\n\nTwo\r'))).toBe('One\n\nTwo\\u{d}\n')
  })
})

describe('functions only Typst knows', () => {
  it('call(f, …) calls a binding, a name a template brings, or a result', () => {
    const [decl, fmt] = let_('fmt', (x: Expr<'content'>) => strong(x))
    expect(r(blocks(decl, inline(call(fmt, 'hi'))))).toMatchInlineSnapshot(`
      "#let fmt = (it, .._0) => strong(it)

      #fmt("hi")
      "
    `)
    expect(r(call(external('slide'), { title: 'A', colorScheme: 'dark' }, inline('Body')))).toBe(
      '#slide(title: "A", color-scheme: "dark", [Body])\n',
    )
    expect(r(call(assume<'function'>(external('f')).with(1)))).toBe('#f.with(1)()\n')
    expect(() => call('f' as never)).toThrow(/function value/)
  })

  it('let_ destructures an array or a dictionary', () => {
    const [decl, [doc_, , cover]] = let_(['doc', null, 'cover'], call(external('documentclass')))
    expect(r(blocks(decl, call(cover), inline(doc_)))).toBe(
      '#let (doc, _, cover) = documentclass()\n\n#cover()\n\n#doc\n',
    )
    expect(() => let_(['a', 'a'], 1)).toThrow(/once/)
    expect(() => let_([null], 1)).toThrow(/at least one/)
  })
})

describe('unsafeRaw', () => {
  it('prints variables as lets before the snippet', () => {
    const rule = show(
      heading,
      () => unsafeRaw.code({ banner: strong('a') })<'content'>`if it.level == 1 { banner } else { it }`,
    )
    expect(r(rule)).toBe(
      '#show heading: it => { let banner = strong("a"); (if it.level == 1 { banner } else { it }) }\n',
    )
    expect(r(unsafeRaw.markup({ name: 'Ada' })`Hello #name\#`)).toMatchInlineSnapshot(`
      "#[#let name = "Ada"
      Hello #name\\#]
      "
    `)
    // On several lines, the variables go on lines of their own, with no paragraph break after them.
    expect(
      r(unsafeRaw.markup({ name: 'Ada' })`Hello
#name`),
    ).toMatchInlineSnapshot(`
      "#[#let name = "Ada"
      Hello
      #name]
      "
    `)
  })

  it('reads \\, \` and \${ as escapes and leaves every other backslash', () => {
    expect(r(unsafeRaw.markup`Use \`raw\` and \${x}`)).toBe('Use `raw` and ${x}\n')
    expect(r(unsafeRaw.markup`\#not code`)).toBe('\\#not code\n')
    // A snippet can end with a backslash, and hold a Typst \` or \\.
    expect(r(unsafeRaw.math.block`a \\`)).toBe('$ a \\  $\n')
    // Inline, a trailing backslash must not escape the closing `$`.
    expect(r(inline(unsafeRaw.math`a \\`))).toBe('$a \\ $\n')
    expect(r(unsafeRaw.markup`\\\` and \\\\`)).toBe('\\` and \\\\\n')
  })

  it('prints equations as markup', () => {
    expect(r(inline('Sea ', unsafeRaw.math`x^2`, '.'))).toBe('Sea $x^2$.\n')
    expect(r(unsafeRaw.math.block`sum_(i=1)^n i`)).toBe('$ sum_(i=1)^n i $\n')
    expect(r(inline(unsafeRaw.math({ total: 3 })`#total + 1`))).toBe('#{ let total = 3; $#total + 1$ }\n')
  })

  it('rejects unused variables and the name std', () => {
    expect(() => unsafeRaw.code({ banner: 'a' })`baner`).toThrow(/not used/)
    expect(() => unsafeRaw.code({ std: 'a' })`std`).toThrow(/std/)
  })
})

describe('symbols', () => {
  it('print as their path, in markup and in code', () => {
    expect(r(inline('a', sym.arrow.r.double, 'b'))).toBe('a#sym.arrow.r.double;b\n')
    expect(r(strong(sym.checkmark))).toBe('#strong(sym.checkmark)\n')
    expect(r(inline(emoji.face.grin))).toBe('#emoji.face.grin\n')
  })
})

describe('determinism', () => {
  it('prints named arguments in the order of the signature, not of the object', () => {
    expect(r(text({ size: pt(1), font: 'A' }, 'x'))).toBe(r(text({ font: 'A', size: pt(1) }, 'x')))
  })
})

describe('runtime guards', () => {
  it('rejects what types would reject, when types are bypassed', () => {
    expect(() => r(inline(m.list('x') as never))).toThrow(/inside a line/)
    expect(() => text({ nonsense: 1 } as never, 'x')).toThrow()
    // Errors say what to do instead.
    expect(() => text({ 'font-size': pt(1) } as never, 'x')).toThrow(/camelCase: "fontSize"/)
    expect(() => image('logo.png' as never)).toThrow(/path\('…'\)/)
    expect(() => r(show(heading, (it) => (it as unknown as { counter: never }).counter))).toThrow(/unsafeRaw/)
    expect(() => let_('std' as never, 1)).toThrow(/std/)
    expect(() => label('')).toThrow()
    // Any name works in code; only label syntax attaches in markup.
    expect(r(inline(ref(label('DBLP:books/x'))))).toBe('#ref(label("DBLP:books/x"))\n')
    expect(() => r(inline(labelled(strong('x'), label('a b'))))).toThrow(/attach in markup/)
    expect(() => pt(Number.NaN)).toThrow()
    expect(() => rgb('red')).toThrow(/hex/)
    expect(() => path(pt(1) as never)).toThrow(/string literal/)
    expect(r(inline(assume<'length'>(pt(1)) as never))).toBe('#(1pt)\n')
    expect(() => image('/etc/passwd' as never)).toThrow(/path/)
  })
})

describe('edge cases', () => {
  // A closure drops the arguments past its parameters, as a JS function does.
  it('(it, .._0) => …', async () => {
    const source = render(
      doc(
        set(page, { numbering: (n) => numbering('1', n) }),
        outline(),
        heading('Intro'),
        table({ columns: 2, fill: (_x) => luma(230) }, 'a', 'b'),
        metadata(data([1, 2, 3]).fold(0, (acc) => acc)),
      ),
    )
    expect(source).toContain('#set page(numbering: (it, .._0) => numbering("1", it))')
    expect(source).toContain('fill: (it, .._0) =>')
    await typstCompile(source)
  })

  // The sink of a function without fixed parameters is `.._0`, which hides no binding.
  it('(.._0) => …', async () => {
    const [decl, it] = let_('it', 'shared')
    const source = render(
      doc(
        decl,
        layout(() => metadata(it)),
      ),
    )
    expect(source).toContain('#layout((.._0) => metadata(it))')
    expect(await typstEval(source, 'query(metadata).map(m => m.value)')).toEqual(['shared'])
    expect(() => let_('_0', 1)).toThrow(/cannot be bound/)
  })

  // A rest parameter only spreads.
  it('(...xs) => data(xs) throws', () => {
    expect(() => let_('f', (...xs) => data(xs as never))).toThrow(/goes only where variadic arguments go/)
    expect(() => layout((...xs) => strong(xs[0] as never))).toThrow(/spread only goes where/)
    expect(() => layout((...xs) => inline(xs[0] as never))).toThrow(/goes only where variadic arguments go/)
  })

  // Undefined where content is required is empty content; an optional argument is left out.
  it('strong(undefined) is strong([])', () => {
    const maybe = undefined as string | undefined
    expect(r(strong(maybe))).toBe('#strong([])\n')
    expect(r(table({ columns: 2 }, 'a', maybe, 'c', 'd'))).toBe('#table(columns: 2, "a", [], "c", "d")\n')
    expect(r(table({ columns: 2 }, 'a', maybe))).toBe('#table(columns: 2, "a", [])\n')
    expect(r(link('https://example.com', maybe))).toBe('#link("https://example.com")\n')
  })

  // An array is one item's content; a number is enum_.item (Typst deprecates the pair).
  it('enum_([…]) is content; a number is enum_.item', async () => {
    const source = r(enum_(['Item ', strong('x')], enum_.item(3, 'Third')))
    expect(source).toBe('#enum([Item #strong("x")], enum.item(3, "Third"))\n')
    await typstCompile(source)
  })

  // Without .returns, the body is content.
  it('a dictionary body needs .returns(T.any)', () => {
    expect(() => define('g').body(() => ({ a: 1 }) as never)).toThrow(/needs .returns\(T.any\)/)
    expect(
      r(
        define('g')
          .returns(T.any)
          .body(() => ({ a: 1 })).decl,
      ),
    ).toBe('#let g() = (a: 1)\n')
  })

  // A rest parameter after fixed ones spreads; a default value gets the spread, which throws.
  it('(first, ...rest) prints (it, .._0)', async () => {
    const source = r(
      set(heading, { numbering: (first, ...rest) => numbering('1.a', first, ...rest) }),
      heading('Intro'),
      heading({ level: 2 }, 'Scope'),
    )
    expect(source).toContain('(it, .._0) => numbering("1.a", it, .._0)')
    expect(await typstEval(source, 'query(heading).map(h => counter(heading).at(h.location()))')).toEqual([[1], [1, 1]])
    await typstCompile(source)
    // A default is a type error too (parameters are `Expr<any>`), unless it is a Typst value.
    expect(() => set(heading, { numbering: (n, sep = str('.')) => numbering(add('1', sep), n) })).toThrow(
      /variadic arguments/,
    )
  })

  // The variant the call picks decides, not the optional slot.
  it('align(undefined) is align([])', () => {
    const u = undefined as string | undefined
    expect(r(align(u))).toBe('#align([])\n')
    expect(r(math.root(null, u))).toBe('#math.root(none, [])\n')
    expect(r(align(center, u))).toBe('#align(center, [])\n')
  })

  // Enum children and list markers are content; terms take items.
  it('false and numbers are content in enum_ and list markers', async () => {
    const ok = false as boolean
    const source = r(
      m.lines(
        enum_('Draft', ok && 'x', 2024),
        set(list, { marker: ok && '-' }),
        terms(terms.item('Term', 'Description')),
      ),
    )
    expect(source).toBe(
      '#enum("Draft", [], [2024])\n#set list(marker: [])\n#terms(terms.item("Term", "Description"))\n',
    )
    expect(r(enum_('a', undefined, 'b'))).toBe('#enum("a", [], "b")\n')
    await typstCompile(source)
  })

  // Items and value are typed as let_ types a value (an array of numbers is an array).
  it('an array value is an array', async () => {
    const [d] = let_('x', 'v')
    const source = r(inline(codeBlock([d, ['Total: ', 'none']]), codeBlock([], [1, 2])))
    expect(source).toBe('#{ let x = "v"; [Total: none] };#{ (1, 2) }\n')
    expect(r(inline(codeBlock([[33]])))).toBe('#{ ((33,)) }\n')
    await typstCompile(source)
  })

  // A computed count is a number, checked when called.
  it('times(x, cols.length)', () => {
    const cols = ['a', 'b', 'c']
    expect(r(grid({ columns: times([fr(1)], cols.length) }, ...cols))).toBe(
      '#grid(columns: (1fr,) * 3, "a", "b", "c")\n',
    )
    expect(() => times('-', cols.length / 2)).toThrow(/an int/)
  })

  // Markup lists skip false, null and undefined, as markup does.
  it('m.list(…, ok && item, …) skips it', () => {
    const ok = false as boolean
    expect(r(m.list('Draft', ok && 'Review', 'Final'))).toMatchInlineSnapshot(`
      "#list.item[Draft]
      #list.item[Final]
      "
    `)
    expect(r(m.terms(m.term('a', 'b'), ok && m.term('c', 'd')))).toMatchInlineSnapshot(`
      "#terms.item([a])[b]
      "
    `)
  })

  // A markup space at the edge of a paragraph is trimmed, as Typst trims it; printed,
  // it would indent the line and continue the list item above.
  it('a space at the start of a paragraph after a list stays out of the list', () => {
    const flag = false as boolean
    const source = r(m.list('a'), inline(flag && 'Note:', space, 'b'))
    expect(source).toMatchInlineSnapshot(`
      "#list.item[a]

      b
      "
    `)
    expect(r(m.list(m.item('a', m.list('b'), inline(space, 'c'))))).toMatchInlineSnapshot(`
      "#list.item[a
        #list.item[b]

        c]
      "
    `)
    expect(r(m.terms(m.term('T', 'd')), inline(space, 'b'))).toMatchInlineSnapshot(`
      "#terms.item([T])[d]

      b
      "
    `)
    expect(r(inline('a', space))).toBe('a\n')
  })

  // `f.with` and `f.where` take named arguments of any name.
  it('tmpl.with({ title }) passes a named argument', () => {
    const tmpl = external('tmpl')
    expect(r(show(assume<'function'>(tmpl).with({ title: 'T' })))).toBe('#show: tmpl.with(title: "T")\n')
    const [, h] = let_('h', heading)
    expect(r(show(h.where({ level: 1 }), set(text, { fill: red })))).toBe(
      '#show h.where(level: 1): set text(fill: red)\n',
    )
  })

  // UnsafeRaw.math is inline whatever whitespace the template has at its edges.
  it('unsafeRaw.math` x ` is $x$', () => {
    expect(r(inline('Area: ', unsafeRaw.math` x^2 `))).toBe('Area: $x^2$\n')
    expect(r(inline(unsafeRaw.math.block`x`))).toBe('$ x $\n')
  })

  // Without .returns, a string body is content, as the result is typed.
  it('a string body prints as [text]', () => {
    expect(r(define('sig').body(() => 'Signed').decl)).toBe('#let sig() = [Signed]\n')
    expect(r(define('nil').body(() => null).decl)).toBe('#let nil() = []\n')
  })

  // The parts of a stroke go by name; Typst takes no parts positionally.
  it('stroke({ paint, thickness }) or stroke(value)', async () => {
    const source = r(
      rect({ stroke: stroke({ paint: red, thickness: pt(1) }) }),
      rect({ stroke: stroke(add(pt(1), red)) }),
    )
    expect(source).toBe('#rect(stroke: stroke(paint: red, thickness: 1pt))\n\n#rect(stroke: stroke(1pt + red))\n')
    await typstCompile(source)
  })

  // It2, it3… are the parameters of nested callbacks; the document cannot bind them.
  it('let_("it2") throws', () => {
    expect(() => let_('it2', 1)).toThrow(/cannot be bound/)
    expect(() => define('it3')).toThrow(/cannot be bound/)
    expect(() => let_('item2', 1)).not.toThrow()
  })

  // In a content array, any value shows as markup shows it.
  it('strong(["Total: ", total])', async () => {
    const [decl, total] = let_('total', 42)
    const source = r(decl, strong(['Total: ', total]))
    expect(source).toBe('#let total = 42\n\n#strong([Total: #total])\n')
    await typstCompile(source)
  })

  // A statement in a content array stays in the line, as inline prints it.
  it('strong([set(…), "world"]) stays on one line', async () => {
    const source = r(inline('Hello ', strong([set(text, { fill: red }), 'world']), '!'))
    expect(source).toBe('Hello #strong[#set text(fill: red);world];!\n')
    expect(r(show(link, (it) => [set(text, { fill: red }), it]))).toBe('#show link: it => [#set text(fill: red);#it]\n')
    expect(r(let_('x', [set(text, { fill: red }), 'y'])[0])).toBe('#let x = [#set text(fill: red);y]\n')
    await typstCompile(source)
  })

  // An alpha left out is left out.
  it('rgb(255, 0, 0, undefined)', () => {
    expect(r(rect({ fill: rgb(255, 0, 0, undefined) }))).toBe('#rect(fill: rgb(255, 0, 0))\n')
  })

  // Undefined in let_ or among the items of codeBlock is empty content, as where content goes.
  it('let_("note", undefined) is []', () => {
    const note = undefined as string | undefined
    expect(r(let_('note', note)[0])).toBe('#let note = []\n')
    expect(r(inline(codeBlock([strong('a'), note])))).toBe('#{ strong("a"); [] }\n')
  })

  // A function the document defines does not convert a string to content, so
  // a JS string for a T.content parameter goes as [..] , so the parameter is content.
  it('sec("Intro") passes [Intro]', async () => {
    const sec = define('sec')
      .pos('title', T.content)
      .body(({ title }) => [heading({ depth: 1 }, title), metadata(title)])
    const source = r(sec.decl, sec('Intro'))
    expect(source).toContain('#sec([Intro])')
    expect(await typstEval(source, 'query(metadata).map(m => type(m.value) == content)')).toEqual([true])
    // A template's function keeps its strings: what it does with them is the template's.
    const tmpl = define('tmpl').pos('title', T.content).external()
    expect(r(tmpl('Intro'))).toBe('#tmpl("Intro")\n')
  })

  // An array as content is one sequence; only its blocks break the paragraph.
  it('block(["Total: ", total, m.list(…)])', async () => {
    const [d, total] = let_('total', 42)
    const source = r(d, block(['Total: ', total, ' EUR', m.list('paid', 'shipped')]), ['Next ', strong('x')])
    expect(source).toMatchInlineSnapshot(`
      "#let total = 42

      #block[
        Total: #total EUR

        #list.item[paid]
        #list.item[shipped]
      ]

      Next #strong("x")
      "
    `)
    await typstCompile(source)
  })

  // No paragraph break between the variables and the snippet.
  it('strong(unsafeRaw.markup({ who })`#who`) stays in the line', () => {
    const who = data('Ada')
    expect(r(inline('Hi ', strong(unsafeRaw.markup({ who })`#who`), '!'))).toMatchInlineSnapshot(`
      "Hi #strong(
        [#let who = "Ada"
      #who],
      );!
      "
    `)
  })

  // The template's spaces around a value left out collapse, as Typst's would.
  it('inline`Paid ${late && strong("late")} today.`', () => {
    const late = false as boolean
    expect(r(inline`Paid ${late && strong('late')} today.`)).toBe('Paid today.\n')
    expect(r(inline`${late && strong('Late:')} Paid.`)).toBe('Paid.\n')
    expect(r(inline`Done ${late && 'x'}`)).toBe('Done\n')
    expect(r(inline`Paid ${strong('late')} today.`)).toBe('Paid #strong("late") today.\n')
  })

  // In an equation (unsafeRaw.math) a variable named like a math name throws; a `$` in
  // markup or code (a price) checks nothing.
  it('unsafeRaw.math({ pi })`pi r^2` throws', () => {
    expect(() => unsafeRaw.math({ r: '5', pi: '3' } as { r: string })`pi r^2`).toThrow(/would hide/)
    expect(() => unsafeRaw.markup({ total: 40, note: 'Paid' })`Total: \$#total. _#note _`).not.toThrow()
  })

  // Set(scale, { factor }) prints the factor positionally, as Typst takes it.
  it('set(scale, { factor: pct(50) })', () => {
    expect(r(set(scale, { factor: pct(50) }))).toBe('#set scale(50%)\n')
  })

  // A value that shows nothing (an empty list mapped to markup) takes the
  // template's spaces with it, as a value left out does.
  it('inline`Tags: ${[]} end.`', () => {
    const tags: string[] = []
    expect(r(block(inline`Tags: ${tags.map((t) => strong(t))} end.`))).toBe('#block[Tags: end.]\n')
    expect(r(block(inline`${tags.map((t) => strong(t))} Hello`))).toBe('#block[Hello]\n')
  })

  // A list built from no items prints nothing, which keeps a tight list tight.
  it('m.item(name, m.list(...[]))', async () => {
    const source = r(
      m.list(m.item('Fruit', m.list('apple')), m.item('Bread', m.list(...[])), m.item('a', m.lines(...[]))),
    )
    expect(source).toMatchInlineSnapshot(`
      "#list.item[Fruit
        #list.item[apple]]
      #list.item[Bread]
      #list.item[a]
      "
    `)
    await typstCompile(source)
  })

  it('Null from a nullable content return is none', () => {
    expect(
      r(
        define('cap')
          .pos('on', T.bool)
          .returns(T.nullable(T.content))
          .body(() => null).decl,
      ),
    ).toBe('#let cap(on) = none\n')
  })

  // A one-line snippet that starts with line markup keeps its line.
  it('unsafeRaw.markup({ x })`= #x` is a heading', async () => {
    const source = r(unsafeRaw.markup({ x: data('X') })`= #x`)
    expect(source).toMatchInlineSnapshot(`
      "#[#let x = "X"
      = #x]
      "
    `)
    expect(await typstEval(source, 'query(heading).len()')).toBe(1)
  })

  // Where gives a selector with its methods.
  it('where(heading, { level: 1 }).or(figure)', () => {
    expect(r(show(where(heading, { level: 1 }).or(figure), set(text, {})))).toBe(
      '#show heading.where(level: 1).or(figure): set text()\n',
    )
  })

  // A callback's rest parameter spreads into a define's ..rest.
  it('(...nums) => f(...nums)', async () => {
    const f = define('f')
      .rest('items', T.any)
      .body(({ items }) => inline(items.pos().len()))
    const source = r(f.decl, set(heading, { numbering: (...nums) => f(...(nums as never[])) }), heading('A'))
    expect(source).toContain('(.._0) => f(.._0)')
    await typstCompile(source)
  })

  // A snippet's lines are not indented; nested, it goes in a content block of its own.
  it('a string spanning lines keeps its text in a list item', async () => {
    const snip = unsafeRaw.markup`#metadata("a
b".len())<out>`
    const source = r(m.list(m.item('x', snip)))
    expect(source).toMatchInlineSnapshot(`
      "#list.item[x

        #[
      #metadata("a
      b".len())<out>]]
      "
    `)
    expect(await typstEval(source, 'query(<out>).first().value')).toBe(3)
  })

  // A heading alone in a content block starts on the [ line even when a call in
  // it wraps, so the content is the heading and a label on it works.
  it('contentBlock(heading(…long…)) is a heading', async () => {
    const t = text(
      { fill: red, size: pt(14), weight: 'bold', font: 'Libertinus Serif' },
      'for the period from January to March 2024',
    )
    const source = r(
      set(heading, { numbering: '1.' }),
      labelled(contentBlock(heading(['Report ', t])), label('sec')),
      inline('See ', ref(label('sec')), '.'),
    )
    expect(source).toContain('#[#heading(')
    await typstCompile(source)
  })

  // A function of the document named parbreak is no paragraph break.
  it('define("parbreak") at the edge of block content stays', () => {
    const pb = define('parbreak').body(() => 'Signature line')
    expect(r(pb.decl, block(blocks('Body text', pb())))).toContain('#parbreak()')
  })

  // A label anywhere in a heading goes in a content block, or it would end the heading.
  it('heading([labelled(…), " for 2024"])', async () => {
    const source = r(heading([labelled(strong('Results'), label('res')), ' for 2024']))
    expect(source).toMatchInlineSnapshot(`
      "#heading[#strong("Results")<res> for 2024]
      "
    `)
    expect(await typstEval(source, 'query(<res>).first().func() == strong')).toBe(true)
  })

  // The template's own dash or ellipsis keeps its typography next to data.
  it('inline`${lo}--${hi}` keeps the dash', () => {
    expect(r(inline`Change: ${'1.0'}--${'-5.0'}`)).toBe('Change: 1.0--\\-5.0\n')
    expect(r(inline`See ${'etc.'}...`)).toBe('See etc\\....\n')
  })

  // Data of hundreds of thousands of parts prints without overflowing the stack.
  it('a long prose note in a content array', () => {
    expect(() => render(doc([strong('Note: '), prose('word\n'.repeat(70000))]))).not.toThrow()
    expect(() => render(doc(prose.paragraphs('para\n\n'.repeat(130000))))).not.toThrow()
  })

  it('A line comment at the end of a snippet does not comment out the closer', async () => {
    const who = data('Ada')
    const source = r(
      unsafeRaw.markup({ who })`Dear #who // greeting`,
      inline('Area: ', unsafeRaw.math`pi r^2 // circle`, '.'),
      unsafeRaw.math.block`sum_k k // the sum`,
    )
    await typstCompile(source)
  })

  it('Null for T.content is empty content', () => {
    const f = define('f')
      .pos('t', T.content)
      .returns(T.any)
      .body(({ t }) => t.func())
    expect(r(f(null))).toBe('#f([])\n')
  })
})

describe('names and numbers', () => {
  // A package's namespace and name are identifiers (`_` and capitals included).
  it('@local/my_pkg', () => {
    expect(r(importPackage('@local/my_pkg:0.1.0', [external('hello')]))).toBe('#import "@local/my_pkg:0.1.0": hello\n')
  })

  // A negative number shows a minus sign, as Typst shows one.
  it('inline(-5) shows −5', () => {
    expect(r(inline(-5, ' ', -0.25))).toBe('−5 −0.25\n')
  })
})

describe('content values', () => {
  it('a show callback and a let_ of strings and markup are content', () => {
    expect(r(show(heading, (it) => [strong(it.body), '!']))).toBe('#show heading: it => [#strong(it.body);!]\n')
    const [decl] = let_('names', ['Ada', ' and ', inline(strong('Grace'))])
    expect(r(decl)).toBe('#let names = [Ada and #strong("Grace")]\n')
    const [nums] = let_('nums', [1, 2])
    expect(r(nums)).toBe('#let nums = (1, 2)\n')
  })

  it('where takes no content field: Typst compares content as it was built', () => {
    expect(() => where(heading, { body: 'Intro' } as never)).toThrow(/body is content/)
  })
})

describe('lists', () => {
  // Lists print as their items, as markup makes them: Typst groups items of a kind that meet into one
  // list, so two lists with nothing between them are one, as in markup.
  it('are items, which Typst groups as it groups markup items', async () => {
    const source = r(m.enum('a', 'b'), m.enum('c'))
    expect(source).toBe('#enum.item[a]\n#enum.item[b]\n\n#enum.item[c]\n')
    expect(await typstEval(source, 'query(enum).len()')).toBe(1)
    expect(await typstEval(r(m.enum('a'), 'text', m.enum('c')), 'query(enum).len()')).toBe(2)
  })

  it('take show rules on their items, as markup items do', async () => {
    const source = r(
      show(list.item, (it) => it.body),
      m.list('a'),
      metadata('x'),
    )
    expect(await typstEval(source, 'query(list).len()')).toBe(0)
  })
})

describe('nested snippets', () => {
  // A nested snippet of several lines starts on a line of its own, so its first line
  // has the indentation of the others (a markup list in it keeps its nesting).
  it('block(unsafeRaw.markup`- a⏎  - b⏎- c`) keeps the nested list', async () => {
    const steps = unsafeRaw.markup`- Prepare
  - Check the totals
- Send`
    const source = r(block(steps), m.list(m.item('x', steps)))
    expect(source).toContain('#[\n- Prepare\n  - Check the totals\n- Send]')
    expect(await typstEval(source, 'query(list).map(l => l.children.len())')).toEqual([2, 1, 1, 2, 1])
  })
})

describe('snippets in a line', () => {
  // A snippet alone in an element's body starts right after `[`, so no edge is a space.
  it('strong(unsafeRaw.markup`…`) mid-sentence has no spaces at its edges', () => {
    expect(r(inline('Rated ', strong(unsafeRaw.markup`#sym.star.filled`), '.'))).toMatchInlineSnapshot(`
      "Rated #strong([#sym.star.filled]);.
      "
    `)
  })
})

describe('snippet edges', () => {
  // A nested snippet that starts with a line break gets no second one, which
  // would be a paragraph break.
  it('strong(unsafeRaw.markup`⏎…⏎`) mid-sentence stays one paragraph', async () => {
    const source = r(
      inline(
        'Order: ',
        strong(unsafeRaw.markup`
      #(1 + 2) items
    `),
        ', shipped today.',
      ),
    )
    expect(source).not.toContain('\n\n')
    await typstCompile(source)
  })

  // A line break (`\`) at the end of a snippet does not escape what follows.
  it('strong(unsafeRaw.markup`Line one \\\\`) compiles', async () => {
    await typstCompile(r(strong(unsafeRaw.markup`Line one \\`)))
    await typstCompile(r(m.list(m.item('Ship to:', unsafeRaw.markup`Main St 1 \\`))))
    await typstCompile(
      r(
        block(unsafeRaw.markup`Street 1 \\
City \\`),
      ),
    )
  })
})

describe('snippet templates', () => {
  // The line breaks that open and close a template are the TypeScript's.
  it('m.lines(text, unsafeRaw.markup`⏎…⏎`) stays one paragraph', () => {
    const source = r(
      m.lines(
        inline('Total due:'),
        unsafeRaw.markup`
      *42 EUR*, payable
      within 30 days.
    `,
      ),
    )
    expect(source).toBe('Total due:\n*42 EUR*, payable\nwithin 30 days.\n')
  })
})

describe('snippets as content', () => {
  // A define parameter named like a Typst global passes to a snippet as itself.
  it('define("card").pos("title") with unsafeRaw.markup({ title })', async () => {
    const card = define('card')
      .pos('title', T.content)
      .body(({ title }) => unsafeRaw.markup({ title })`*#title*`)
    await typstCompile(r(card.decl, card('A')))
  })

  // A snippet is content, so it is a list item's body too.
  it('m.list(unsafeRaw.markup`…`, "Paid")', async () => {
    const source = r(m.list(unsafeRaw.markup`*Due* #sym.arrow.r tomorrow`, 'Paid'))
    expect(await typstEval(source, 'query(list).map(l => l.children.len())')).toEqual([2])
  })
})

describe('snippet variables', () => {
  // A snippet given variables is a content block, even when they already have
  // their names (no `let` prints), so its rules end with it at the top level too.
  it('unsafeRaw.markup({ total }) keeps its set rule', async () => {
    const [totalDecl, total] = let_('total', 42)
    const source = r(
      totalDecl,
      unsafeRaw.markup({ total })`#set text(red)
Total: #total`,
      metadata('after'),
    )
    expect(source).toContain('#[\n#set text(red)')
    await typstCompile(source)
  })
})

describe('snippet variable checks', () => {
  // A variable that prints no let (`{ it }`) is named by another one's value.
  it('show(heading, it => unsafeRaw.markup({ it, body: strong(it.body) }))', async () => {
    const source = r(
      show(heading, (it) => unsafeRaw.markup({ it, body: strong(it.body) })`#body (#it.depth)`),
      heading('H'),
    )
    await typstCompile(source)
  })
})
