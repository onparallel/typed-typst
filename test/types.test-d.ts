/** Every safety rule as a type test. */
import { describe, expectTypeOf, it } from 'vitest'
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
    // @ts-expect-error a heading needs its own line
    inline('a', m.heading(1, 'b'))
    // A statement in a line applies to the rest of the paragraph.
    expectTypeOf(inline('a ', set(text, { size: pt(1) }), ' b')).not.toBeAny()
  })

  it('accepts block markup as a block body or document part', () => {
    expectTypeOf(block(m.list('a', 'b'))).toEqualTypeOf<Value<'content'>>()
    expectTypeOf(doc(set(text, { size: pt(1) }), m.heading(1, 'x'), 'text'))
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
    expectTypeOf(card.with({ size: mm(2) })).toEqualTypeOf<Expr<'function'>>()
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
    includeFile(userInput) // eslint-disable-line typed-typst/literal-path -- this checks the type rules
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
    expectTypeOf(columns.with(2)).toEqualTypeOf<Expr<'function'>>()
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
    expectTypeOf<NamedOf<typeof box_>>().toEqualTypeOf<{ readonly width?: Expr<'length'> | Auto }>()
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
    expectTypeOf(scale.with({ x: pct(80) })).toEqualTypeOf<Expr<'function'>>()
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
    path(userInput) // eslint-disable-line typed-typst/literal-path -- this checks the type rules
    // The result of read depends on the encoding.
    expectTypeOf(read(path('a.txt'))).toEqualTypeOf<Expr<'str'>>()
    expectTypeOf(read({ encoding: null }, path('a.bin'))).toEqualTypeOf<Expr<'bytes'>>()
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
    expectTypeOf(unsafeRaw.markup({ name: userInput })`Hello #name`).toEqualTypeOf<Block>()
    expectTypeOf(unsafeRaw.code({ banner: strong(userInput) })<'content'>`banner`).toEqualTypeOf<Value<'content'>>()
    expectTypeOf(unsafeRaw.math`x^2`).toEqualTypeOf<Expr<'content'>>()
    /* eslint-disable typed-typst/unsafe-raw -- these check the type rules */
    // @ts-expect-error no ${…}
    unsafeRaw.markup`Hello ${userInput}`
    // @ts-expect-error a computed variable name
    unsafeRaw.code({ [key]: 1 })`x`
    // @ts-expect-error a plain object is not a value (use data())
    unsafeRaw.code({ x: { a: 1 } })`x`
    /* eslint-enable typed-typst/unsafe-raw */
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
