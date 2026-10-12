/**
 * Hand-written corrections to the reflected standard library.
 *
 * Reflection gives every parameter's flags and types, with two gaps:
 * - dictionaries, arrays and callbacks have no shape;
 * - elements with a custom constructor (`text`, `page`) and `link` report
 *   constructor flags that differ from what a call accepts.
 *
 * Every flag patch states the reflected values it expects (`expect`). When an
 * upgrade changes them, generation fails and the patch must be reviewed.
 */

export interface Flags {
  positional: boolean
  named: boolean
  required: boolean
  settable: boolean
}

export interface ParamPatch {
  /** Reflected flags this patch was written against. */
  expect?: Partial<Flags>
  /** Corrected flags. */
  flags?: Partial<Flags>
  /** Leave the parameter out of the bindings. */
  hide?: true
  /** Not an argument of the constructor, but a field (`text.where(text: " ")`). */
  fieldOnly?: true
  /** Whether the parameter is an element field (for `where` and `it.…`). */
  field?: boolean
  /** Whether a set rule accepts it, when the generic rule is wrong. */
  set?: boolean
}

/** TS types for the untyped parts of a parameter's input. */
export interface Shape {
  dictionary?: string
  array?: string
  function?: string
  /** A JS function given here returns content: an array it returns is a sequence, `false` is empty. */
  content?: true
  /** The whole TS input type, where reflection's is wider than what Typst takes. */
  input?: string
  /** Content, though Typst also takes an array here (a form it is phasing out): a JS array is a sequence. */
  sequence?: true
  /** `false`, `undefined` and numbers are content, as in a content parameter; an array stays an array. */
  scalarContent?: true
}

/**
 * Definitions left out of the bindings.
 * - `eval` runs a string as Typst code, and `plugin` loads WebAssembly: either
 *   would turn data into code.
 * - `rgb`, `luma` and `label` are written by hand (values.ts) with validation
 *   and methods; `path` too, so that a path can only come from a literal; and `read`,
 *   whose result type depends on its `encoding` (text or bytes).
 */
export const exclude: readonly string[] = ['eval', 'plugin', 'rgb', 'luma', 'label', 'path', 'read']

const body: ParamPatch = {
  expect: { positional: false, named: true, required: false },
  flags: { positional: true, named: false, required: true },
  field: false,
  set: false,
}

/** Flag patches, by `path.param`. */
export const params: Readonly<Record<string, ParamPatch>> = {
  // The constructors of `text` and `page` take the body positionally.
  'text.body': body,
  'page.body': body,
  // Shorthands that Typst also takes positionally: `scale(50%, body)`, `pad(10pt, body)`.
  // Shorthands are no fields: `scale.where(factor: …)` and `pad.where(rest: …)` are errors.
  'scale.factor': {
    expect: { positional: false, named: true },
    flags: { positional: true },
    field: false,
    set: true,
  },
  // `rest` is also a shorthand of a set rule: `set pad(rest: 1em)`.
  'pad.rest': { expect: { positional: false, named: true }, flags: { positional: true }, set: true, field: false },
  // Reflection marks these positional, but Typst takes them by name: `gradient.linear(..stops, dir: ltr)`.
  'gradient.linear.dir': { expect: { positional: true, named: false }, flags: { positional: false, named: true } },
  'gradient.linear.angle': {
    expect: { positional: true, named: false },
    flags: { positional: false, named: true, required: false },
  },
  // `stroke(…)` takes one positional value, any stroke (`stroke(1pt + red)`), or its parts by name; never
  // parts positionally (`stroke(red, 1pt)` is an error). The positional slot is `paint`'s (see shapes).
  'stroke.constructor.paint': {
    expect: { positional: true, required: true },
    flags: { positional: true, named: true, required: false },
  },
  ...Object.fromEntries(
    ['thickness', 'cap', 'join', 'dash', 'miter-limit'].map((n) => [
      `stroke.constructor.${n}`,
      { expect: { positional: true, required: true }, flags: { positional: false, named: true, required: false } },
    ]),
  ),
  // Without data, the attachment is read from the path.
  'pdf.attach.data': { expect: { required: true }, flags: { required: false } },
  // A field that the constructor does not accept.
  'text.text': { expect: { positional: true, required: true }, fieldOnly: true },
  // Neither an argument nor a field (`math.text.where(body: …)` is an error).
  'math.text.body': { expect: { positional: false, named: true, required: false, settable: false }, hide: true },
  // In code, `math.root` takes both: `math.root(none, x)` (`root(x)` is math syntax only).
  'math.root.index': { expect: { positional: true, required: false }, flags: { required: true } },
  // `link("https://…")` shows the URL when there is no body.
  'link.body': { expect: { positional: true, required: true }, flags: { required: false } },
}

/**
 * Result types narrower than the reflected ones: a counter's value is always an array of ints
 * (`counter(page).get().first()`), though reflection says `int | array`.
 */
export const returns: Readonly<Record<string, string>> = {
  'counter.get': "'array'",
  'counter.at': "'array'",
  'counter.final': "'array'",
}

/** Functions that need context, though reflection says not: `length.to-absolute` reads the font size. */
export const contextual: readonly string[] = ['length.to-absolute']

/**
 * Symbols Typst deprecates as a whole, though reflection gives their variants no deprecation:
 * `sym.join` warns "use `bowtie.big` instead".
 */
export const deprecatedSymbols: readonly string[] = ['sym.join']

/**
 * Functions whose argument sink also takes named arguments of any name: `arguments(0, a: 2)`,
 * `tmpl.with(title: "T")`, `h.where(level: 1)` (a dictionary for the sink is `data({…})`).
 */
export const openNamed: readonly string[] = ['arguments.constructor', 'function.with', 'function.where']

/**
 * Alternative positional signatures, by function: color constructors take
 * either components or a color, which reflection marks as all required.
 */
const components = (names: string[]): string[][] => [names, [...names, 'alpha'], ['color']]
export const variants: Readonly<Record<string, readonly (readonly string[])[]>> = {
  cmyk: [['cyan', 'magenta', 'yellow', 'key'], ['color']],
  'color.cmyk': [['cyan', 'magenta', 'yellow', 'key'], ['color']],
  oklab: components(['lightness', 'a', 'b']),
  'color.oklab': components(['lightness', 'a', 'b']),
  oklch: components(['lightness', 'chroma', 'hue']),
  'color.oklch': components(['lightness', 'chroma', 'hue']),
  'color.rgb': [...components(['red', 'green', 'blue']), ['hex']],
  'color.linear-rgb': components(['red', 'green', 'blue']),
  'color.hsl': components(['hue', 'saturation', 'lightness']),
  'color.hsv': components(['hue', 'saturation', 'value']),
  'color.luma': components(['lightness']),
}

/**
 * Values in the scope of a type or module that reflection does not dump:
 * constants (`calc.pi`, `float.inf`), `sys.inputs`, math operators and spacing
 * (`math.sin`, `math.quad`) and the color maps (`color.map.rainbow`, arrays of
 * colors). test/bindings.test.ts checks each name and its type against Typst.
 */
export const values: Readonly<Record<string, { readonly type: string; readonly names: readonly string[] }>> = {
  calc: { type: 'float', names: ['inf', 'pi', 'tau', 'e'] },
  float: { type: 'float', names: ['inf', 'nan'] },
  sys: { type: 'dictionary', names: ['inputs'] },
  // Text operators (`math.sin`) and spacing (`math.quad`), which are content.
  math: {
    type: 'content',
    names: [
      'arccos',
      'arcsin',
      'arctan',
      'arg',
      'cos',
      'cosh',
      'cot',
      'coth',
      'csc',
      'csch',
      'ctg',
      'deg',
      'det',
      'dim',
      'exp',
      'gcd',
      'lcm',
      'hom',
      'id',
      'im',
      'inf',
      'ker',
      'lg',
      'lim',
      'liminf',
      'limsup',
      'ln',
      'log',
      'max',
      'min',
      'mod',
      'Pr',
      'sec',
      'sech',
      'sin',
      'sinc',
      'sinh',
      'sup',
      'tan',
      'tanh',
      'tg',
      'tr',
      'dif',
      'Dif',
      'thin',
      'med',
      'thick',
      'quad',
      'wide',
    ],
  },
  'color.map': {
    type: 'array',
    names: [
      'turbo',
      'cividis',
      'rainbow',
      'spectral',
      'viridis',
      'inferno',
      'magma',
      'plasma',
      'rocket',
      'mako',
      'coolwarm',
      'vlag',
      'icefire',
      'flare',
      'crest',
    ],
  },
}

const sides = (t: string): Shape => ({ dictionary: `Sides<${t}>` })
const cell = (t: string): Shape => ({ array: `readonly (${t})[]`, function: `CellFn<${t}>` })
const tracks: Shape = { array: 'Tracks' }

/** Shapes by parameter name; `path.param` entries win. */
export const shapes: Readonly<Record<string, Shape>> = {
  inset: sides('Relative'),
  outset: sides('Relative'),
  radius: { dictionary: 'Corners<Relative>' },
  // A stroke dictionary is either per side or the stroke itself.
  stroke: { dictionary: 'Sides<StrokeArg> | StrokeDict' },
  // Tracks of grids and tables by path: `math.mat` has `..rows` too, which are rows of cells.
  ...Object.fromEntries(
    ['grid', 'table'].flatMap((t) =>
      ['columns', 'rows', 'gutter', 'column-gutter', 'row-gutter'].map((n) => [`${t}.${n}`, tracks]),
    ),
  ),
  font: { dictionary: 'FontDict', array: "readonly (string | Expr<'str'> | FontDict | Expr<'dictionary'>)[]" },

  'text.stroke': { dictionary: 'StrokeDict' },
  'line.stroke': { dictionary: 'StrokeDict' },
  'highlight.stroke': { dictionary: 'Sides<StrokeArg> | StrokeDict' },
  'underline.stroke': { dictionary: 'StrokeDict' },
  'overline.stroke': { dictionary: 'StrokeDict' },
  'strike.stroke': { dictionary: 'StrokeDict' },
  'table.hline.stroke': { dictionary: 'StrokeDict' },
  'table.vline.stroke': { dictionary: 'StrokeDict' },
  'grid.hline.stroke': { dictionary: 'StrokeDict' },
  'grid.vline.stroke': { dictionary: 'StrokeDict' },
  'page.margin': { dictionary: 'Margin' },
  // Callbacks whose result Typst shows: `numbering: n => …`, `marker: depth => …`, `layout(size => …)`.
  numbering: { content: true },
  'list.marker': { content: true, scalarContent: true },
  'layout.func': { content: true },
  'link.dest': { dictionary: 'Position' },
  // The positional value of `stroke(…)` is any stroke; by name, the paint (Typst reports a mismatch).
  'stroke.constructor.paint': { input: 'StrokeArg' },
  // Typst 0.15 deprecates the arrays it converts to items, `(3, [Item])` and `([Term], [Desc])`: an
  // enum's array is one item's content (a number is `enum_.item(3, …)`), and terms take `terms.item`.
  'enum.children': { sequence: true },
  'terms.children': { input: "Expr<'content'>" },
  ...Object.fromEntries(
    ['table', 'grid'].flatMap((t) => [
      [`${t}.inset`, { dictionary: 'Sides<Relative>', ...cell('Relative | Sides<Relative>') }],
      [`${t}.align`, cell('Alignment | Auto')],
      [`${t}.fill`, cell("Paint | null | Expr<'none'>")],
      [`${t}.stroke`, { dictionary: 'Sides<StrokeArg> | StrokeDict', ...cell('StrokeArg | Sides<StrokeArg>') }],
    ]),
  ),
}
