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
  inline,
  label,
  labelled,
  let_,
  linebreak,
  lineSpace,
  emoji,
  image,
  m,
  metadata,
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
} from '../src/index.ts'

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
    expect(r(block(m.list('a', 'b')))).toBe('#block[\n  - a\n  - b\n]\n')
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
    expect(r(m.lines('Fruits:', m.list('apple', 'pear')), 'Next')).toBe('Fruits:\n- apple\n- pear\n\nNext\n')
    expect(r(m.lines(set(text, { fill: red }), 'styled'))).toBe('#set text(fill: red)\nstyled\n')
  })
})

describe('term lists', () => {
  it('print as markup, tight or wide', () => {
    expect(r(m.terms(m.term('A', 'first'), m.term('B', 'second')))).toBe('/ A: first\n/ B: second\n')
    expect(r(m.terms({ tight: false }, m.term('A', m.lines('x', 'more'))))).toBe('/ A: x\n  more\n')
    expect(r(m.terms({ tight: false }, m.term('A', 'x', m.lines('more'))))).toBe('/ A: x\n\n  more\n')
  })
})

describe('block content in code', () => {
  it('keeps one line on one line and writes paragraph breaks at the edges as blank lines', () => {
    // `[\n= H\n]` would be a space, the heading and a space.
    expect(r(inline(box(blocks(m.heading(1, 'H')))))).toBe('#box[= H]\n')
    expect(r(inline(box(blocks(parbreak(), m.heading(1, 'H'), 'x', parbreak()))))).toBe('#box[\n\n  = H\n\n  x\n\n]\n')
  })
})

describe('list items', () => {
  it('continue on the next lines with an m.lines body; an m.lines child is a new paragraph', () => {
    const child = m.list('Child item')
    expect(r(m.list(m.item(m.lines('Parent item', child)), 'Next item'))).toBe(
      '- Parent item\n  - Child item\n- Next item\n',
    )
    expect(r(m.list(m.item('Parent item', m.lines('Second paragraph', child)), 'Next item'))).toBe(
      '- Parent item\n\n  Second paragraph\n  - Child item\n- Next item\n',
    )
    expect(r(m.list(m.item(m.lines('Parent item', 'same paragraph'), 'Second paragraph')))).toBe(
      '- Parent item\n  same paragraph\n\n  Second paragraph\n',
    )
    // A nested list follows the item directly in a tight list, as before.
    expect(r(m.list(m.item('Parent item', child)))).toBe('- Parent item\n  - Child item\n')
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
    expect(r(m.heading(1, 'A ', labelled(strong('b'), label('k'))))).toBe('= #[A #strong("b")<k>]\n')
    expect(r(labelled(strong('x'), label('s')))).toBe('#strong("x")<s>\n')
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
    expect(r(m.heading(2, 'T'), m.enum(m.numbered(3, 'c', m.list('d'))))).toBe('== T\n\n3. c\n  - d\n')
  })

  it('never puts a source line break in data', () => {
    expect(r(m.heading(1, 'a\nb'), m.list('c\n\nd'))).toBe('= a\\u{a}b\n\n- c\\u{a}\\u{a}d\n')
  })
})

describe('rules and scripting', () => {
  it('prints show rules with closures and nested closure names', () => {
    // The inner closure's parameter is renamed so that it does not shadow `it`.
    const rule = show(heading, (it) => array.map(data([1]), (_x) => it))
    expect(r(rule)).toBe('#show heading: it => array.map((1,), it2 => it)\n')
    // A JS function with no parameters ignores whatever Typst passes it.
    expect(r(show(heading, (it) => array.map(data([1]), () => it)))).toBe(
      '#show heading: it => array.map((1,), (..) => it)\n',
    )
    expect(r(show(strong, (it) => [it.body, it.body]))).toBe('#show strong: it => (it.body, it.body)\n')
  })

  it('takes a function where a parameter takes content or a function', () => {
    expect(r(set(heading, { supplement: (it) => it }))).toBe('#set heading(supplement: it => it)\n')
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
      '#let strong(body) = emph(body)\n#show heading: strong\n\n#std.strong(\"a\");#strong(\"b\")\n',
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
    expect(r(inline('日本', lineSpace, '語'), m.list(inline('a', lineSpace, 'b')))).toBe('日本\n語\n\n- a\n  b\n')
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
    ).toBe('- Thanks, \n- b\n\na\n  b\n')
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
    const snippet = unsafeRaw.markup`#context {
      let w = page.width
      [#w]
    }`
    expect(r(snippet)).toBe('#context {\n  let w = page.width\n  [#w]\n}\n')
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
  })
})

describe('functions only Typst knows', () => {
  it('call(f, …) calls a binding or a name a template brings', () => {
    const [decl, fmt] = let_('fmt', (x: Expr<'content'>) => strong(x))
    expect(r(blocks(decl, inline(call(fmt, 'hi'))))).toBe('#let fmt = it => strong(it)\n\n#fmt("hi")\n')
    expect(r(call(external('slide'), { title: 'A', colorScheme: 'dark' }, inline('Body')))).toBe(
      '#slide(title: "A", color-scheme: "dark", [Body])\n',
    )
    // Not a function value computed in Typst, which could be one that reads files.
    expect(() => call(assume<'function'>(external('f')).with(1))).toThrow(/computed in Typst/)
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
    expect(r(unsafeRaw.markup({ name: 'Ada' })`Hello #name\#`)).toBe('#[\n  #let name = "Ada"\n\n  Hello #name\\#\n]\n')
  })

  it('reads \\, \` and \${ as escapes and leaves every other backslash', () => {
    expect(r(unsafeRaw.markup`Use \`raw\` and \${x}`)).toBe('Use `raw` and ${x}\n')
    expect(r(unsafeRaw.markup`\#not code`)).toBe('\\#not code\n')
    // A snippet can end with a backslash, and hold a Typst \` or \\.
    expect(r(unsafeRaw.math.block`a \\`)).toBe('$ a \\ $\n')
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
    expect(() => r(inline(m.heading(1, 'x') as never))).toThrow(/inside a line/)
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
    expect(() => m.heading(0, 'x')).toThrow()
    expect(() => rgb('red')).toThrow(/hex/)
    // eslint-disable-next-line typed-typst/literal-path -- this test checks the runtime guard
    expect(() => path(pt(1) as never)).toThrow(/string literal/)
    expect(r(inline(assume<'length'>(pt(1)) as never))).toBe('#(1pt)\n')
    expect(() => image('/etc/passwd' as never)).toThrow(/path/)
  })
})
