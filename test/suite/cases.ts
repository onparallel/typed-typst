/**
 * Cases of Typst's own test suite, rebuilt with the library.
 *
 * Each entry reproduces test/suite/original/<name>.typ; suite.test.ts checks
 * that both render to the same pixels. Values that the test runner defines
 * (`conifer`, `forest`) are written as the colors they are, and markup
 * smart quotes as the characters they produce.
 */
import {
  type BlockArg,
  math,
  start,
  unsafeRaw,
  emoji,
  sym,
  circle,
  divider,
  document,
  figure,
  hide,
  lower,
  outline,
  quote,
  raw,
  repeat,
  smartquote,
  sub,
  super_,
  title,
  type StrokeDict,
  align,
  auto,
  blocks,
  block,
  blue,
  box,
  center,
  cm,
  eastern,
  em,
  emph,
  fr,
  green,
  grid,
  heading,
  inline,
  left,
  let_,
  add,
  aqua,
  bottom,
  codeBlock,
  columns,
  context,
  counter,
  h,
  highlight,
  line,
  ltr,
  pad,
  scale,
  smallcaps,
  square,
  stack,
  state,
  teal,
  top,
  v,
  white,
  linebreak,
  link,
  list,
  lorem,
  m,
  page,
  par,
  parbreak,
  pct,
  pt,
  rect,
  red,
  rgb,
  right,
  rtl,
  set,
  show,
  strong,
  table,
  terms,
  text,
  underline,
  where,
  horizon,
  enum_,
  pagebreak,
} from '../../src/index.ts'

const conifer = rgb('#9feb52')
const forest = rgb('#43a127')

export const CASES: Record<string, () => BlockArg> = {
  // Equations are written as Typst math (unsafeRaw.math): a vetted literal, like the original.
  'math-frac-baseline': () => unsafeRaw.math.block`x = 1/2 = a/(a h) = a/a = a/(1/2)`,

  'math-binom': () => unsafeRaw.math.block`binom(circle, square)`,

  'math-attach-prescripts': () => unsafeRaw.math.block`
attach(upright(O), bl: 8, tl: 16, br: 2, tr: 2-),
attach("Pb", bl: 82, tl: 207) + attach(upright(e), bl: -1, tl: 0) + macron(v)_e \
`,

  'math-root-basic': () => inline(unsafeRaw.math`A = sqrt(x + y) = c`),

  'math-vec-gap': () => [set(math.vec, { gap: em(1) }), unsafeRaw.math.block`vec(1, 2)`],

  'math-lr-color': () => unsafeRaw.math.block`lr(
    text(\(, fill: #green) a/b
    text(\), fill: #blue)
  )`,

  'math-equation-show-rule': () => [
    inline('This is small: ', unsafeRaw.math`sum_(i=0)^n`),
    show(math.equation, math.display),
    inline('This is big: ', unsafeRaw.math`sum_(i=0)^n`),
  ],

  'figure-align': () => [
    show(figure, set(align, { alignment: start })),
    figure({ caption: 'Start-aligned' }, rect(inline('This is ', linebreak(), ' left'))),
  ],

  'grid-header-multiple': () => grid(grid.header('a'), grid.header('b'), 'a'),

  'grid-footer-bare-2': () => [
    table(table.footer('a', 'b', 'c')),
    table({ gutter: pt(3) }, table.footer('a', 'b', 'c')),
  ],

  // `...` in markup is an ellipsis; data is literal, so the reproduction writes the character.
  'par-spacing-and-first-line-indent': () => [
    set(par, { firstLineIndent: pt(12) }),
    'Why would anybody ever …',
    '… want spacing and indent?',
  ],

  'page-set-override-and-mix': () => [
    set(page, { paper: 'a4' }),
    set(page, { paper: 'a5' }),
    set(page, { paper: 'a11', flipped: true, fill: eastern }),
    set(text, { font: 'Roboto', fill: white }),
    smallcaps('Typst'),
  ],

  symbol: () => [
    inline(emoji.face, ' ', emoji.woman.old, ' ', emoji.turtle),
    set(text, { font: 'New Computer Modern Math' }),
    inline(sym.arrow, ' ', sym.arrow.l, ' ', sym.arrow.r.squiggly, ' ', sym.arrow.tr.hook),
    inline(sym.arrow.r, 'this and this', sym.arrow.l),
  ],

  'enum-number-override-nested': () => [
    m.enum(m.numbered(0, 'Before first!'), m.numbered(1, 'First.', m.enum(m.numbered(2, 'Indented')))),
    m.enum('Second'),
  ],

  'enum-numbering-pattern': () => [
    set(enum_, { numbering: '(1.a.*)' }),
    m.enum('First', m.item('Second', m.enum(m.numbered(2, 'Nested', m.enum('Deep')))), 'Normal'),
  ],

  'figure-caption-show': () => [show(figure.caption, emph), figure({ caption: 'Italicized' }, 'Not italicized')],

  'outline-styled-text': () => [outline({ title: null }), m.heading(1, text({ fill: blue }, 'He'), 'llo')],

  'quote-nesting-custom': () => [
    set(smartquote, { quotes: { single: ['<', '>'], double: ['(', ')'] } }),
    quote(inline('A ', quote('nested'), ' quote')),
  ],

  'raw-show-set': () => [show(raw, set(text, { font: 'Roboto' })), raw('Roboto')],

  'terms-constructor': () => terms(terms.item('One', 'First'), terms.item('Two', 'Second')),

  // Markup quotes are smart quotes; data strings are literal, so the reproduction asks for them.
  smartquote: () => {
    const dq = smartquote({ double: true })
    const sq = smartquote({ double: false })
    return [
      set(text, { lang: 'en' }),
      inline(
        dq,
        'The horse eats no cucumber salad',
        dq,
        ' was the first sentence ever uttered on the ',
        sq,
        'telephone.',
        sq,
      ),
    ]
  },

  'sub-super': () => {
    const [decl, sq] = let_('sq', box(square({ size: pt(4) })))
    return [
      decl,
      table(
        { columns: 3 },
        'Typo.',
        'Fallb.',
        'Synth.',
        inline('x', super_(inline('1', sq))),
        inline('x', super_(inline('5: ', sq))),
        inline('x', super_({ typographic: false }, inline('2 ', sq))),
        inline('x', sub(inline('1', sq))),
        inline('x', sub(inline('5: ', sq))),
        inline('x', sub({ typographic: false }, inline('2 ', sq))),
      ),
    ]
  },

  circle: () => stack({ dir: ltr, spacing: em(0.5) }, circle(), circle('Hey')),

  'hide-text': () => inline('AB ', h(fr(1)), ' CD ', linebreak(), ' ', hide('A'), 'B ', h(fr(1)), ' C', hide('D')),

  'repeat-gap': () =>
    inline('A', box({ width: fr(1) }, repeat({ gap: em(1) }, rect({ width: em(2), height: em(1) }))), 'B'),

  title: () => [set(document, { title: inline('My title') }), title(), m.heading(1, 'A level one heading')],

  'divider-basic': () => [set(page, { width: pt(200) }), inline('Before ', divider(), ' After')],

  'cases-content-text': () => lower(box('HI!')),

  // The rule and the text are on consecutive lines: no paragraph break between them.
  'square-auto-sized': () => square({ fill: eastern }, m.lines(set(text, { fill: white, weight: 'bold' }), 'Typst')),

  'grid-cell-set': () => [
    set(grid.cell, { align: center }),
    show(grid.cell, (it) => [it.align, it.fill, it.inset]),
    set(grid.cell, { inset: pt(20) }),
    grid({ align: left, rowGutter: pt(5) }, 'A', grid.cell({ align: right }, 'B'), grid.cell({ fill: aqua }, 'B')),
  ],

  'table-cell-set': () => [
    set(table.cell, { align: center }),
    show(table.cell, (it) => [it.align, it.fill, it.inset]),
    set(table.cell, { inset: pt(20) }),
    table({ align: left, rowGutter: pt(5) }, 'A', table.cell({ align: right }, 'B'), table.cell({ fill: aqua }, 'B')),
  ],

  'show-multiple-rules': () => [
    show(list, scale.with({ origin: left, x: pct(80) })),
    show(heading, []),
    show(enum_, []),
    m.list('Actual', 'Tight', 'List'),
    m.heading(1, 'Nope'),
  ],

  'show-function-set-on-it': () => [
    show(heading, (it) => codeBlock([set(heading, { numbering: '(I)' })], it)),
    m.heading(1, 'Heading'),
  ],

  'counter-page-between-pages': () => [
    set(page, { numbering: '1', margin: { bottom: pt(20) } }),
    'A',
    pagebreak(),
    counter(page).update(5),
    set(page, { numberAlign: add(top, center), margin: { top: pt(20), bottom: pt(10) } }),
    'B',
  ],

  'counter-display-matching-numbering-basic': () => [
    show(heading, (it, ctx) => block(inline(counter(heading).display(ctx), ' ', it.body))),
    heading({ numbering: '1.' }, 'One'),
    heading({ numbering: 'A.' }, 'Two'),
  ],

  'state-multiple-calls-same-key': () =>
    inline(
      context((ctx) => state('key', 2).get(ctx)),
      ' ',
      state('key').update((x) => add(x, 1)),
      ' ',
      context((ctx) => state('key', 2).get(ctx)),
      ' ',
      context((ctx) => state('key', 3).get(ctx)),
      ' ',
      state('key').update((x) => add(x, 1)),
      ' ',
      context((ctx) => state('key', 2).get(ctx)),
    ),

  'page-margin-individual': () => [
    set(page, { height: pt(40) }),
    inline(
      codeBlock([set(page, { margin: { left: pt(0) } })], align(left, 'Left')),
      ' ',
      codeBlock([set(page, { margin: { right: pt(0) } })], align(right, 'Right')),
      ' ',
      codeBlock([set(page, { margin: { top: pt(0) } })], align(top, 'Top')),
      ' ',
      codeBlock([set(page, { margin: { bottom: pt(0) } })], align(bottom, 'Bottom')),
    ),
    codeBlock([set(page, { margin: { rest: pt(0), left: pt(20) } })], 'Overridden'),
  ],

  'page-number-align-top-right': () => [
    set(page, { height: pt(100), margin: pt(30), numbering: '(1)', numberAlign: add(top, right) }),
    block({ width: pct(100), height: pct(100), fill: aqua.lighten(pct(50)) }),
  ],

  'page-fill': () => [
    set(page, { width: pt(80), height: pt(40), fill: eastern }),
    inline(
      text({ size: pt(15), font: 'Roboto', fill: white }, smallcaps('Typst')),
      ' ',
      page({ width: pt(40), fill: auto, margin: { top: pt(10), rest: auto } }, 'Hi'),
    ),
  ],

  'align-center-in-flow': () => align(center, blocks('Lorem Ipsum', 'Dolor')),

  'pad-expanding-contents': () => pad({ left: pt(10), right: pt(10) }, inline('PL ', h(fr(1)), ' PR')),

  'stack-spacing': () => {
    const [decl, x] = let_('x', square({ size: pt(10), fill: eastern }))
    return [
      set(page, { width: pt(50), margin: pt(0) }),
      decl,
      stack(
        { spacing: pt(5) },
        stack({ dir: rtl, spacing: pt(5) }, x, x, x),
        stack({ dir: ltr }, x, pct(20), x, pct(20), x),
        stack({ dir: ltr, spacing: pt(5) }, x, x, pt(7), pt(3), x),
      ),
    ]
  },

  'transform-scale-origin': () => {
    const [decl, r] = let_('r', rect({ width: pt(100), height: pt(10), fill: forest }))
    return [
      decl,
      set(page, { height: pt(65) }),
      inline(
        box(scale({ x: pct(50), y: pct(200), origin: add(left, top) }, r)),
        ' ',
        box(scale({ x: pct(50), origin: center }, r)),
        ' ',
        box(scale({ x: pct(50), y: pct(200), origin: add(right, bottom) }, r)),
      ),
    ]
  },

  highlight: () =>
    inline(
      'This is the built-in ',
      highlight('highlight with default color'),
      '. We can also specify a customized value ',
      highlight({ fill: green.lighten(pct(80)) }, 'to highlight'),
      '.',
    ),

  'line-stroke-dash': () => {
    const l = (dash: StrokeDict['dash']) => line({ length: pt(60), stroke: { paint: red, thickness: pt(1), dash } })
    return inline(
      l(['dot', pt(1)]),
      ' ',
      v(pt(3)),
      ' ',
      l(['dot', pt(1), pt(4), pt(2)]),
      ' ',
      v(pt(3)),
      ' ',
      l({ array: ['dot', pt(1), pt(4), pt(2)], phase: pt(5) }),
      ' ',
      v(pt(3)),
      ' ',
      l([]),
      ' ',
      v(pt(3)),
      ' ',
      l([pt(1), pt(3), pt(9)]),
    )
  },

  'rect-stroke': () =>
    inline(
      rect({ width: pt(20), height: pt(20), stroke: red }),
      ' ',
      v(pt(3)),
      ' ',
      rect({ width: pt(20), height: pt(20), stroke: { rest: red, top: { paint: blue, dash: 'dashed' } } }),
      ' ',
      v(pt(3)),
      ' ',
      rect({ width: pt(20), height: pt(20), stroke: { thickness: pt(5), join: 'round' } }),
    ),

  'par-hanging-indent': () => [set(par, { hangingIndent: pt(15), justify: true }), lorem(10)],

  'columns-one': () => [
    set(page, { height: auto, width: cm(7.05), columns: 1 }),
    'This is a normal page. Very normal.',
  ],

  'text-call-body': () =>
    inline(
      text('Text'),
      ' ',
      linebreak(),
      ' ',
      text({ fill: red }, 'Text'),
      ' ',
      linebreak(),
      ' ',
      text({ font: 'Ubuntu', fill: blue }, 'Text'),
      ' ',
      linebreak(),
      ' ',
      text({ fill: teal, font: 'IBM Plex Serif' }, 'Text'),
      ' ',
      linebreak(),
      ' ',
      text({ fill: forest, font: 'New Computer Modern' }, 'Text'),
      ' ',
      linebreak(),
    ),

  box: () => [
    inline('A ', box(inline('B ', linebreak(), ' C')), ' D.'),
    inline('Spaced ', linebreak(), ' ', box({ height: cm(0.5) }), ' ', linebreak(), ' Apart'),
  ],

  'block-sizing': () => [
    set(page, { height: pt(120) }),
    set(block, { spacing: pt(0) }),
    block(
      { width: pt(90), height: pt(80), fill: red },
      blocks(
        block({ width: pct(60), height: pct(60), fill: green }),
        block({ width: pct(50), height: pct(60), fill: blue }),
      ),
    ),
  ],

  'box-fr-width': () => inline('Hello ', box({ width: fr(1) }, rect({ height: em(0.7), width: pct(100) })), ' World'),

  'block-spacing-basic': () => [
    set(par, { spacing: pt(10) }),
    'Hello',
    'There',
    block({ spacing: pt(20) }, 'Further down'),
  ],

  'table-fill-basic': () => table({ columns: 3, stroke: null, fill: green }, 'A', 'B', 'C'),

  'table-align-array': () => [
    table({ columns: [fr(1), fr(1), fr(1)], align: [left, center, right] }, 'A', 'B', 'C'),
    set(align, { alignment: center }),
    table({ columns: [fr(1), fr(1), fr(1)], align: [] }, 'A', 'B', 'C'),
  ],

  'table-inset-fold': () => [
    set(table, { inset: pt(10) }),
    set(table, { inset: { left: pt(0) } }),
    table({ fill: red, inset: { right: pt(0) } }, table.cell({ inset: { top: pt(0) } }, 'a')),
  ],

  'table-cell-show': () => [
    show(table.cell, () => 'Zz'),
    table(
      { align: left, fill: red, stroke: blue, columns: 2 },
      'AAAAA',
      'BBBBB',
      'A',
      'B',
      table.cell({ align: right }, 'C'),
      'D',
      align(right, 'E'),
      'F',
      align(horizon, 'G'),
      inline('A', linebreak(), 'A', linebreak(), 'A'),
    ),
  ],

  'heading-basic': () => [
    m.heading(1, 'Level 1'),
    m.heading(2, 'Level 2'),
    m.heading(3, 'Level 3'),
    m.heading(11, 'Level 11'),
  ],

  'heading-show-where': () => [
    show(where(heading, { level: 5 }), (it) => block(text({ font: 'Roboto', fill: eastern }, inline(it.body, '!')))),
    m.heading(1, 'Heading'),
    m.heading(5, 'Heading 🌍'),
    heading({ level: 5 }, 'Heading'),
  ],

  'heading-offset': () => [
    set(heading, { numbering: '1.1' }),
    show(where(heading, { level: 2 }), set(text, { fill: blue })),
    m.heading(1, 'Level 1'),
    // A markup apostrophe is a smart quote: typographic on the page, straight in the PDF bookmark.
    heading({ depth: 1 }, inline('We', smartquote({ double: false }), 're twins')),
    heading({ level: 1 }, inline('We', smartquote({ double: false }), 're twins')),
    m.heading(2, 'Real level 2'),
    set(heading, { offset: 1 }),
    m.heading(1, 'Fake level 2'),
    m.heading(2, 'Fake level 3'),
  ],

  // A list right after a paragraph line is attached to it, so both go in one block.
  'list-basic': () => inline(emph('Shopping list'), ' ', list('Apples', 'Potatoes', 'Juice')),

  'list-nested': () =>
    m.list(
      { tight: false },
      m.item(
        'First level.',
        m.list(
          { tight: false },
          m.item(
            'Second level. There are multiple paragraphs.',
            m.list('Third level.'),
            'Still the same bullet point.',
          ),
          'Still level 2.',
        ),
      ),
      'At the top.',
    ),

  'list-mix': () => [m.list('Bullet List'), m.enum('Numbered List'), terms(terms.item('Term', 'List'))],

  'emph-and-strong-call-in-word': () => inline('P', strong('art'), 'ly em', emph('phas'), 'ized.'),

  'strong-delta': () => [
    'Normal',
    set(strong, { delta: 300 }),
    strong('Bold'),
    set(strong, { delta: 150 }),
    inline(strong('Medium'), ' and ', strong(strong('Bold'))),
  ],

  'link-show': () => [
    show(link, (it) => underline(text({ fill: rgb('#283663') }, it))),
    inline('You could also make the ', link('https://html5zombo.com/', 'link look way more typical.')),
  ],

  'set-text-override': () => {
    const [decl, x] = let_('x', inline('And the forest ', parbreak(), ' lay silent!'))
    return [
      set(par, { spacing: pt(4) }),
      set(text, { style: 'italic', fill: eastern }),
      decl,
      text({ fill: forest }, x),
    ]
  },

  'set-vs-construct-1': () => [set(par, { leading: pt(2) }), list({ bodyIndent: pt(20) }, 'First', list('A', 'B'))],

  'show-selector-replace': () => [show(heading, inline('1234')), m.heading(1, 'Heading')],

  'show-set-override': () => [
    show(strong, set(text, { fill: red })),
    inline('Hello ', strong('World')),
    show(strong, set(text, { fill: blue })),
    inline('Hello ', strong('World')),
  ],

  'grid-gutter-fr': () => [
    set(rect, { inset: pt(0) }),
    grid(
      { columns: [auto, auto, pct(40)], columnGutter: fr(1), rowGutter: fr(1) },
      rect({ fill: eastern }, 'dddaa aaa aaa'),
      rect({ fill: conifer }, 'ccc'),
      rect({ fill: rgb('#dddddd') }, 'aaa'),
    ),
  ],

  'grid-stroke-array': () => {
    const [decl, t] = let_(
      't',
      table({ columns: 3, stroke: [red, blue, green] }, 'a', 'b', 'c', 'd', 'e', 'f', 'h', 'i', 'j'),
    )
    return [decl, t, set(text, { dir: rtl }), t]
  },

  'grid-colspan-thick-stroke': () => [
    set(page, { width: pt(300) }),
    table(
      { columns: [em(2), em(2), auto, auto], stroke: pt(5) },
      'A',
      'B',
      'C',
      'D',
      table.cell({ colspan: 4 }, lorem(20)),
      'A',
      table.cell({ colspan: 2 }, 'BCBCBCBC'),
      'D',
    ),
  ],
}
