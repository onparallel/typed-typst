/** Every safety rule as a type test. */
import { describe, expect, expectTypeOf, it } from 'vitest'
import {
  type Block,
  type Content,
  type Expr,
  type Stmt,
  type Value,
  type NamedOf,
  type Auto,
  aqua,
  bibliography,
  csv,
  dictionary,
  layout,
  decimal,
  dict,
  math,
  outline,
  box,
  contentBlock,
  page,
  luma,
  line,
  highlight,
  terms,
  enum_,
  list,
  minus,
  div,
  deg,
  assume,
  grid,
  rect,
  columns,
  numbering,
  times,
  spread,
  pad,
  auto,
  image,
  path,
  read,
  sym,
  block,
  counter,
  scale,
  blocks,
  context,
  data,
  datetime,
  define,
  external,
  includeFile,
  figure,
  doc,
  here,
  heading,
  inline,
  label,
  let_,
  call,
  link,
  m,
  metadata,
  mm,
  pct,
  pt,
  rgb,
  set,
  show,
  strong,
  T,
  table,
  text,
  unsafeRaw,
  where,
  lorem,
  add,
} from '../src/index.ts'

declare const userInput: string
declare const key: string

describe('plain strings are data', () => {
  it('compile where Typst takes str or content', () => {
    expectTypeOf(text(userInput)).toEqualTypeOf<Value<'content'>>()
    expectTypeOf(strong(userInput)).toEqualTypeOf<Value<'content'>>()
    expectTypeOf(text({ lang: userInput }, 'x')).toEqualTypeOf<Value<'content'>>()
  })

  it('do not compile where Typst takes another type', () => {
    // @ts-expect-error a length is not a string
    text({ size: '12pt' }, 'x')
    // @ts-expect-error a color is not a string
    text({ fill: '#ff0000' }, 'x')
    // @ts-expect-error `auto` is a constant, not the string 'auto'
    block({ width: 'auto' })
    // @ts-expect-error a string that is not one of the allowed values
    text({ style: userInput }, 'x')
    // @ts-expect-error a relative length is not a string
    block({ inset: '5pt' })
  })
})

describe('computed and unknown keys', () => {
  it('do not compile in named arguments', () => {
    // @ts-expect-error a computed key is an index signature
    text({ [key]: pt(1) }, 'x')
    // @ts-expect-error a key that `text` does not have
    text({ sise: pt(1) }, 'x')
    // @ts-expect-error a computed key in a set rule
    set(text, { [key]: pt(1) })
    // @ts-expect-error a computed key in a selector
    where(heading, { [key]: 1 })
  })

  it('compile for data, whose keys are printed as strings', () => {
    expectTypeOf(data({ [key]: 1 })).toEqualTypeOf<Value<'dictionary'>>()
  })
})

describe('content in code positions', () => {
  it('does not compile where Typst takes another type', () => {
    // @ts-expect-error content is not a length
    text({ size: strong('a') }, 'x')
    // @ts-expect-error markup is not a length
    block({ height: inline('a') })
    // @ts-expect-error content is not a color
    text({ fill: strong('x') }, 'x')
  })
})

describe('inline and block markup', () => {
  it('rejects block markup inside a line', () => {
    // @ts-expect-error a list needs its own lines
    inline('a', m.list('b'))
    // A statement in a line applies to the rest of the paragraph.
    expectTypeOf(inline('a ', set(text, { size: pt(1) }), ' b')).not.toBeAny()
  })

  it('accepts block markup as a block body or document part', () => {
    expectTypeOf(block(m.list('a', 'b'))).toEqualTypeOf<Value<'content'>>()
    expectTypeOf(doc(set(text, { size: pt(1) }), heading('x'), 'text'))
  })
})

describe('set and show rules', () => {
  it('accept only settable fields', () => {
    expectTypeOf(set(text, { size: pt(10), lang: 'es' })).toEqualTypeOf<Stmt>()
    expectTypeOf(set(block, { spacing: mm(1) })).toEqualTypeOf<Stmt>()
    // @ts-expect-error the body is no setting
    set(text, { body: 'x' })
    // @ts-expect-error `link.dest` is required, not settable
    set(link, { dest: 'x' })
  })

  it('type `it` with the element fields', () => {
    show(heading, (it) => {
      expectTypeOf(it.body).toEqualTypeOf<Value<'content'>>()
      expectTypeOf(it.level).toEqualTypeOf<Expr<'int' | 'auto'>>()
      // @ts-expect-error not a field of heading
      it.nonsense
      return it.body
    })
  })
})

describe('let and define', () => {
  it('need literal names', () => {
    // @ts-expect-error a computed name
    let_(userInput, 1)
    // @ts-expect-error a computed name
    define(userInput)
  })

  it('give typed callers', () => {
    const card = define('card')
      .pos('name', T.content)
      .pos('id', T.str)
      .named('size', T.length, pt(1))
      .body(({ name }) => name)
    expectTypeOf(card('Ada', 'a-1')).toEqualTypeOf<Value<'content'>>()
    expectTypeOf(card({ size: mm(2) }, 'Ada', 'a-1')).toEqualTypeOf<Value<'content'>>()
    // @ts-expect-error id is a str, not content
    card('Ada', strong('x'))
    // @ts-expect-error a missing argument
    card('Ada')
    // @ts-expect-error a wrong named type
    card({ size: '2mm' }, 'Ada', 'a')
    expectTypeOf(card.with({ size: mm(2) })).toEqualTypeOf<Value<'function'>>()
    // A Typst name is a camelCase key, as for the standard library.
    const note = define('note').named('font-size', T.length, pt(10)).external()
    note({ fontSize: pt(9) })
    // @ts-expect-error the Typst spelling is not the key
    note({ 'font-size': pt(9) })
    // @ts-expect-error `with` takes the named parameters only
    card.with({ name: 'Ada' })
  })

  it('give values from outside the document a type only by assumption', () => {
    const accent = external('accent')
    expectTypeOf(accent).toExtend<Expr<any>>()
    // @ts-expect-error a color is not a length
    rect({ width: assume<'color'>(accent) })
    // @ts-expect-error a computed name
    external(userInput)
    // @ts-expect-error a computed path
    includeFile(userInput)
  })
})

describe('context', () => {
  it('requires the context token for contextual functions', () => {
    expectTypeOf(context((ctx) => metadata(here(ctx)))).toEqualTypeOf<Content>()
    // @ts-expect-error `here` is contextual
    here()
  })
})

describe('types with methods', () => {
  it('every value of one known type has the methods of its type', () => {
    const [, c] = let_('c', counter(heading))
    expectTypeOf(c.update(2)).toEqualTypeOf<Value<'content'>>()
    expectTypeOf(datetime.today().display('[year]')).toEqualTypeOf<Value<'str'>>()
    expectTypeOf(data([1, 2]).first()).toEqualTypeOf<Value<any>>()
    expectTypeOf(assume<'array'>(external('xs')).len()).toEqualTypeOf<Value<'int'>>()
    show(heading, (it) => it.func())
    // @ts-expect-error a value whose type only Typst knows has no methods until one is assumed
    external('xs').first()
    // @ts-expect-error a value of several possible types has no methods
    assume<'str' | 'array'>(external('xs')).len()
    // @ts-expect-error `update` takes an int or a function, not a string
    c.update('2')
  })

  it('a number binding is an int when its literal prints as one', () => {
    expectTypeOf(let_('a', 150)[1]).toEqualTypeOf<Value<'int'>>()
    expectTypeOf(let_('b', -3)[1]).toEqualTypeOf<Value<'int'>>()
    expectTypeOf(let_('c', 1.5)[1]).toEqualTypeOf<Value<'float'>>()
    expectTypeOf(let_('d', 1e21)[1]).toEqualTypeOf<Value<'float'>>()
    expectTypeOf(let_('e', 2 ** 53)[1]).toEqualTypeOf<Expr<'int' | 'float'>>()
    expectTypeOf(let_('f', Number('4'))[1]).toEqualTypeOf<Expr<'int' | 'float'>>()
  })

  it('a list item body is one line, or m.lines to continue on the next lines', () => {
    m.item(m.lines('text', m.list('nested')))
    // @ts-expect-error block content other than m.lines cannot be an item's text
    m.item(blocks('a', 'b'))
  })

  it('a type of the standard library is a value where Typst takes a type', () => {
    csv({ rowType: dictionary }, path('data.csv'))
    // @ts-expect-error an element function is not a type
    csv({ rowType: text }, path('data.csv'))
  })

  it('spread goes only where the variadic arguments go', () => {
    grid(spread(data([1, 2])))
    // @ts-expect-error `rect` has no variadic arguments
    rect(spread(data([1])))
    // @ts-expect-error a string is no array
    grid(spread(data('ab')))
  })

  it('times scales numbers and lengths and repeats arrays, strings and content', () => {
    expectTypeOf(times(pt(2), 3)).toEqualTypeOf<Value<'length'>>()
    expectTypeOf(times('ab', 3)).toEqualTypeOf<Value<'str'>>()
    expectTypeOf(times(3, [pt(1)])).toEqualTypeOf<Value<'array'>>()
    // @ts-expect-error two strings do not multiply
    times('a', 'b')
    // @ts-expect-error content repeats an integer number of times
    times(strong('a'), pt(1))
  })

  it('take a name from a parameter only where it is one of the names', () => {
    define('refs')
      .named('style', T.oneOf('apa', 'ieee'), 'apa')
      .body(({ style }) => bibliography({ style }, path('refs.bib')))
    define('own')
      .named('style', T.oneOf('secret.csl'), 'secret.csl')
      // @ts-expect-error not a name `style` takes
      .body(({ style }) => bibliography({ style }, path('refs.bib')))
    define('any')
      .named('style', T.str, 'apa')
      // @ts-expect-error any string could be a file
      .body(({ style }) => bibliography({ style }, path('refs.bib')))
    define('refs2')
      .named('style', T.oneOf('apa', 'ieee'), 'apa')
      .body(({ style }) => text(style))
    // @ts-expect-error callers pass one of the names
    define('refs3').named('style', T.oneOf('apa', 'ieee'), 'mla')
  })

  it('with takes named arguments and the first positional ones', () => {
    expectTypeOf(columns.with(2)).toEqualTypeOf<Value<'function'>>()
    columns.with({ gutter: pt(4) }, 2)
    numbering.with('a')
    // @ts-expect-error the count is a number
    columns.with('two')
    // @ts-expect-error no such named argument
    columns.with({ gap: pt(4) })
  })

  it('name the named arguments of a function, and take auto where asked', () => {
    expectTypeOf<NamedOf<typeof table.cell>['inset']>().not.toBeNever()
    const box_ = define('box2')
      .named('width', T.orAuto(T.length), auto)
      .body(({ width }) => text({ size: pt(1) }, 'x'))
    expectTypeOf<NamedOf<typeof box_>>().toEqualTypeOf<{ readonly width?: Expr<'length'> | Auto | undefined }>()
    box_({ width: auto })
    box_({ width: pt(3) })
    // @ts-expect-error a ratio is not a length
    box_({ width: pct(3) })
  })

  it('type constructors and methods', () => {
    expectTypeOf(counter(heading).step()).toEqualTypeOf<Value<'content'>>()
    expectTypeOf(aqua.lighten(pct(50))).toExtend<Expr<'color'>>()
    // @ts-expect-error `display` is contextual
    counter(heading).display()
    show(heading, (it, ctx) => inline(counter(heading).display(ctx), it.body))
    // @ts-expect-error `lighten` takes a ratio
    aqua.lighten(pt(1))
  })

  it('`with` applies named arguments', () => {
    expectTypeOf(scale.with({ x: pct(80) })).toEqualTypeOf<Value<'function'>>()
    // @ts-expect-error not an argument of scale
    scale.with({ size: pct(80) })
  })
})

describe('file paths', () => {
  it('come only from literals', () => {
    expectTypeOf(image(path('logo.png'))).toEqualTypeOf<Value<'content'>>()
    // @ts-expect-error data must not choose a file
    image(userInput)
    // @ts-expect-error data must not choose a file
    read(userInput)
    // @ts-expect-error not a literal
    path(userInput)
    // The result of read depends on the encoding.
    expectTypeOf(read(path('a.txt'))).toEqualTypeOf<Value<'str'>>()
    expectTypeOf(read({ encoding: null }, path('a.bin'))).toEqualTypeOf<Value<'bytes'>>()
  })
})

describe('assume', () => {
  it('narrows the type of an expression where the bindings are wider', () => {
    show(grid.cell, (it) => {
      // @ts-expect-error inset may be a dictionary or auto as far as the bindings know
      pad({ rest: it.inset }, it.body)
      return pad({ rest: assume<'length' | 'ratio' | 'relative'>(it.inset) }, it.body)
    })
  })
})

describe('symbols', () => {
  it('are content with typed modifiers', () => {
    expectTypeOf(strong(sym.arrow.r)).toEqualTypeOf<Value<'content'>>()
    // @ts-expect-error not a modifier of arrow
    sym.arrow.nonsense
    // @ts-expect-error a symbol is not a length
    block({ inset: sym.arrow })
  })
})

describe('values', () => {
  it('are built from typed input', () => {
    expectTypeOf(pt(12)).toEqualTypeOf<Value<'length'>>()
    expectTypeOf(pct(50)).toEqualTypeOf<Value<'ratio'>>()
    // A hex color is checked at runtime (`rgb('red')` throws), with or without `#`.
    expectTypeOf(rgb('a0aec0')).toExtend<Expr<'color'>>()
    // A label name from data is checked at runtime, so it needs no literal type.
    expectTypeOf(label(userInput)).toEqualTypeOf<Expr<'label'>>()
    expectTypeOf(table({ columns: [auto, pct(50)] }, 'a', 'b')).toEqualTypeOf<Value<'content'>>()
    expectTypeOf(blocks('a')).not.toBeAny()
  })
})

describe('unsafeRaw', () => {
  it('takes literal text, and values only as variables', () => {
    expectTypeOf(unsafeRaw.code<'length'>`page.width - 2cm`).toEqualTypeOf<Value<'length'>>()
    expectTypeOf(unsafeRaw.markup({ name: userInput })`Hello #name`).toEqualTypeOf<Content>()
    expectTypeOf(unsafeRaw.code({ banner: strong(userInput) })<'content'>`banner`).toEqualTypeOf<Value<'content'>>()
    expectTypeOf(unsafeRaw.math`x^2`).toEqualTypeOf<Expr<'content'>>()
    // @ts-expect-error no ${…}
    unsafeRaw.markup`Hello ${userInput}`
    // @ts-expect-error a computed variable name
    unsafeRaw.code({ [key]: 1 })`x`
    // @ts-expect-error a plain object is not a value (use data())
    unsafeRaw.code({ x: { a: 1 } })`x`
  })
})

describe('destructuring let and call', () => {
  it('take literal names and give values only Typst knows', () => {
    const name = 'x' as string
    const [, [a, gap, b]] = let_(['a', null, 'b'], [1, 2, 3])
    expectTypeOf(a).toEqualTypeOf<Expr<any>>()
    expectTypeOf(gap).toEqualTypeOf<Expr<any>>()
    expectTypeOf(call(b, 1)).toEqualTypeOf<Expr<any>>()
    // @ts-expect-error a computed name
    let_(['a', name], [1, 2])
    // @ts-expect-error call takes a function value, not a string
    call('f')
  })
})

describe('edge cases', () => {
  it('Set, show and where take element functions only', () => {
    // @ts-expect-error lorem is no element
    show(lorem, () => strong('x'))
    // @ts-expect-error lorem is no element
    set(lorem, {})
    // @ts-expect-error lorem is no element
    where(lorem, {})
    show(heading, (it) => strong(it.body))
  })

  it('Content joins content and strings; ints make an int; a JS number may be a float', () => {
    const [, n] = let_('n', 3)
    const m = 4 as number
    expectTypeOf(add(n, n)).toEqualTypeOf<Value<'int'>>()
    expectTypeOf(add(n, 0.5)).toEqualTypeOf<Value<'int' | 'float'>>()
    expectTypeOf(add(n, m)).toEqualTypeOf<Value<'int' | 'float'>>()
    expectTypeOf(add(strong('x'), '!')).toEqualTypeOf<Content>()
    // @ts-expect-error content plus a number
    add(strong('x'), 5)
  })

  it('`set pad(rest: …)`', () => {
    set(pad, { rest: pt(4) })
  })

  it("A callback's parameters are values only Typst knows", () => {
    // @ts-expect-error a field of Typst is read with assume or unsafeRaw
    layout((size) => inline('Width: ', size.width))
    layout((size) => inline('Width: ', assume<'dictionary'>(size).at('width')))
    metadata(data([1]).map((v) => add(v, 1)))
  })

  it('A bound function is a function, a bound type a type', () => {
    const [, fmt] = let_('fmt', (x: Expr<any>) => strong(x))
    expectTypeOf(fmt).toEqualTypeOf<Value<'function'>>()
    fmt.with('a')
    expectTypeOf(let_('t', dictionary)[1]).toEqualTypeOf<Value<'type'>>()
  })

  it('As for add, only kinds Typst subtracts and divides', () => {
    // @ts-expect-error a length minus a number
    minus(pt(10), 2)
    // @ts-expect-error an angle minus a length
    minus(deg(1), pt(1))
    // @ts-expect-error a length divided by an angle
    div(pt(10), deg(1))
    // @ts-expect-error a length divided by a ratio
    div(pt(10), pct(50))
    expectTypeOf(minus(pt(1), pct(50))).toEqualTypeOf<Value<'relative'>>()
    expectTypeOf(div(pt(10), pt(2))).toEqualTypeOf<Value<'float'>>()
  })

  it('A ..rest parameter has the methods of arguments', () => {
    define('g')
      .rest('xs', T.int)
      .returns(T.any)
      .body((p) => p.xs.pos())
  })

  it('Past 2^53 a literal prints as a float', () => {
    expectTypeOf(add(9007199254740992, 1)).toEqualTypeOf<Value<'int' | 'float'>>()
  })

  it("A decimal mixes with ints (a float, which a JS number may be, is Typst's error)", () => {
    expectTypeOf(add(decimal('1.5'), 1)).toEqualTypeOf<Value<'decimal'>>()
  })

  it('Ints multiply to an int', () => {
    const [, n] = let_('n', 3)
    expectTypeOf(times(n, n)).toEqualTypeOf<Value<'int'>>()
    // A fraction of a count is checked when called.
    expect(() => times('a', 2.5)).toThrow(RangeError)
  })

  it("A counter's value is an array", () => {
    context((ctx) => {
      expectTypeOf(counter(page).get(ctx)).toEqualTypeOf<Value<'array'>>()
      return counter(page).get(ctx).first()
    })
  })

  it('Without .returns, the body is content', () => {
    // @ts-expect-error a dictionary body without .returns
    define('g').body(() => ({ a: 1 }))
    define('g')
      .returns(T.any)
      .body(() => ({ a: 1 }))
  })

  it('Markup shows functions that are Typst values, not JS functions', () => {
    // @ts-expect-error a JS function has no closure to show
    inline(() => 1)
    inline(heading)
  })

  it('A computed count compiles; a fraction literal does not', () => {
    const n = [1, 2].length
    expectTypeOf(times('-', n)).toEqualTypeOf<Value<'str'>>()
  })

  it('Terms take items; enum children are content, not arrays', () => {
    terms(terms.item('Term', 'Description'))
    // @ts-expect-error a string is no term item
    terms('x')
    // @ts-expect-error the (term, description) array is deprecated
    terms(['T', 'D'])
    enum_(['Item ', 'x'])
    set(list, { marker: false })
  })

  it('Where a function has no named parameters, a string is no named-arguments object', () => {
    // @ts-expect-error '1' is the numbering, and 'x' no number
    numbering('1', 'x')
    numbering('1', 2)
  })

  // Undefined leaves a named argument out, also under exactOptionalPropertyTypes
  it("(the repository's tsconfig sets it, as strict consumers do)", () => {
    const cond = false as boolean
    text({ size: cond ? pt(1) : undefined }, 'x')
    set(page, { margin: cond ? mm(1) : undefined })
    where(heading, { level: cond ? 1 : undefined })
    const named: NamedOf<typeof text> = { size: cond ? pt(1) : undefined }
    void named
  })

  // Hand-written shapes and constructors take values Typst computes, as the
  it('generated types do (a define parameter, a let_ reference)', () => {
    define('rule')
      .pos('dash', T.str)
      .pos('cap', T.str)
      .body(({ dash, cap }) => line({ stroke: { thickness: pt(1), dash, cap, join: cap } }))
    define('styled')
      .pos('font', T.str)
      .body(({ font }) => text({ font: [font, 'Libertinus Serif', { name: font, covers: font }] }, 'x'))
    highlight({ stroke: { paint: aqua, thickness: pt(1) } }, 'x')
    const [, hex] = let_('hex', '#ff0000')
    const [, level] = let_('level', 40)
    rgb(hex)
    rgb(level, 0, 0)
    luma(level)
    rgb(255, 0, 0, undefined)
  })

  it('Math.mat takes rows of cells, not grid tracks', () => {
    math.equation(math.mat(['a', 'b'], ['c', 'd']))
  })

  it('A Typst string is no content for a function the document defines', () => {
    const [, s] = let_('s', 'x')
    const f = define('f')
      .pos('body', T.content)
      .body(({ body }) => body)
    f('x')
    // @ts-expect-error a str expression goes through inline(…)
    f(s)
    f(inline(s))
    const g = define('g').pos('n', T.str)
    // @ts-expect-error without .returns, a str body is no content
    g.body(({ n }) => n)
    g.body(({ n }) => inline(n))
  })

  // Define parameters, read, content results, cell callbacks and an element
  it('that is also a type (outline.entry) have the methods of their Typst type', () => {
    define('chip')
      .pos('label', T.str)
      .pos('fill', T.color)
      .body(({ label, fill }) => box({ fill: fill.lighten(pct(80)) }, inline(label.len())))
    read(path('notes.txt')).split(',')
    inline(contentBlock('x').func(), context(() => 'x').func())
    table({ columns: 2, fill: (x) => (x.signum(), null) }, 'a')
    show(where(outline.entry, { level: 1 }), (it, ctx) => it.indented(ctx, it.prefix(ctx), it.inner(ctx)))
  })

  it('A statement, or an array with one, is content where a value goes', () => {
    expectTypeOf(let_('s', set(text, { fill: aqua }))[1]).toEqualTypeOf<Value<'content'>>()
    expectTypeOf(let_('x', [set(text, { fill: aqua }), 'y'])[1]).toEqualTypeOf<Value<'content'>>()
  })

  it('With ..rest, an object first takes any key, as at run time', () => {
    const rows = define('rows')
      .rest('items', T.any)
      .returns(T.any)
      .body((p) => p.items.pos())
    rows({ extra: 1 }, 2)
    rows.with({ extra: 1 })
  })

  it('The shapes take a Typst none value where they take null', () => {
    define('zebra')
      .named('stripe', T.nullable(T.color), null)
      .named('rule', T.nullable(T.length), null)
      .body(({ stripe, rule }) => [
        table({ columns: 2, fill: (_x, _y) => stripe }, 'a', 'b'),
        table({ columns: 2, fill: [stripe, aqua] }, 'a', 'b'),
        box({ stroke: { bottom: rule } }, 'x'),
      ])
  })

  it('An object typed by an interface passes data and dict', () => {
    interface Item {
      name: string
      price: number
      note?: string
    }
    interface Invoice {
      customer: string
      items: Item[]
    }
    const inv: Invoice = { customer: 'ACME', items: [{ name: 'x', price: 1 }] }
    expectTypeOf(data(inv)).toEqualTypeOf<Value<'dictionary'>>()
    expectTypeOf(data(inv.items)).toEqualTypeOf<Value<'array'>>()
    dict(inv)
    // @ts-expect-error a Date is no JSON-like value
    data(new Date())
  })

  it('Results of where, includeFile and .with have their methods', () => {
    where(heading, { level: 1 }).or(figure)
    includeFile('chapter.typ').func()
    text.with({ fill: aqua }).with({ size: pt(20) })
  })

  it('Length.to-absolute needs the context token', () => {
    // @ts-expect-error contextual
    pt(-5).toAbsolute()
    context((ctx) => inline(pt(-5).toAbsolute(ctx)))
  })
})
