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
  /** Parameter names of a callback given as a JS function. */
  fn?: readonly string[]
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
  'scale.factor': { expect: { positional: false, named: true }, flags: { positional: true } },
  'pad.rest': { expect: { positional: false, named: true }, flags: { positional: true } },
  // Reflection marks these positional, but Typst takes them by name: `gradient.linear(..stops, dir: ltr)`.
  'gradient.linear.dir': { expect: { positional: true, named: false }, flags: { positional: false, named: true } },
  'gradient.linear.angle': {
    expect: { positional: true, named: false },
    flags: { positional: false, named: true, required: false },
  },
  // Every part of `stroke(…)` can be left out or given by name.
  ...Object.fromEntries(
    ['paint', 'thickness', 'cap', 'join', 'dash', 'miter-limit'].map((n) => [
      `stroke.constructor.${n}`,
      { expect: { positional: true, required: true }, flags: { named: true, required: false } },
    ]),
  ),
  // Without data, the attachment is read from the path.
  'pdf.attach.data': { expect: { required: true }, flags: { required: false } },
  // A field that the constructor does not accept.
  'text.text': { expect: { positional: true, required: true }, fieldOnly: true },
  // `link("https://…")` shows the URL when there is no body.
  'link.body': { expect: { positional: true, required: true }, flags: { required: false } },
}

/** Functions whose argument sink also takes named arguments of any name: `arguments(0, a: 2)`. */
export const openNamed: readonly string[] = ['arguments.constructor']

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

/**
 * Strings that Typst checks before it uses them, checked when the document is built instead, so that
 * a string from data fails clearly rather than the whole compilation. By parameter name; `path.param`
 * entries win.
 * - `char`: exactly one character (`math.mat(delim: "[")`);
 * - `nonempty`: a numbering pattern (`""` is none);
 * - `lang`: two or three ASCII characters (ISO 639); `region`: two (ISO 3166-1).
 */
export const strings: Readonly<Record<string, 'char' | 'nonempty' | 'lang' | 'region'>> = {
  delim: 'char',
  numbering: 'nonempty',
  'text.lang': 'lang',
  'text.region': 'region',
  'math.text.lang': 'lang',
  'math.text.region': 'region',
}

const sides = (t: string): Shape => ({ dictionary: `Sides<${t}>` })
const cell = (t: string): Shape => ({ array: `readonly (${t})[]`, function: `CellFn<${t}>`, fn: ['x', 'y'] })
const tracks: Shape = { array: 'Tracks' }

/** Shapes by parameter name; `path.param` entries win. */
export const shapes: Readonly<Record<string, Shape>> = {
  inset: sides('Relative'),
  outset: sides('Relative'),
  radius: { dictionary: 'Corners<Relative>' },
  // A stroke dictionary is either per side or the stroke itself.
  stroke: { dictionary: 'Sides<StrokeArg> | StrokeDict' },
  columns: tracks,
  rows: tracks,
  gutter: tracks,
  'column-gutter': tracks,
  'row-gutter': tracks,
  font: { dictionary: 'FontDict', array: "readonly (string | FontDict | Expr<'dictionary'>)[]" },

  'text.stroke': { dictionary: 'StrokeDict' },
  'line.stroke': { dictionary: 'StrokeDict' },
  'highlight.stroke': sides('StrokeArg'),
  'underline.stroke': { dictionary: 'StrokeDict' },
  'overline.stroke': { dictionary: 'StrokeDict' },
  'strike.stroke': { dictionary: 'StrokeDict' },
  'table.hline.stroke': { dictionary: 'StrokeDict' },
  'table.vline.stroke': { dictionary: 'StrokeDict' },
  'grid.hline.stroke': { dictionary: 'StrokeDict' },
  'grid.vline.stroke': { dictionary: 'StrokeDict' },
  'page.margin': { dictionary: 'Margin' },
  'link.dest': { dictionary: 'Position' },
  ...Object.fromEntries(
    ['table', 'grid'].flatMap((t) => [
      [`${t}.inset`, { dictionary: 'Sides<Relative>', ...cell('Relative | Sides<Relative>') }],
      [`${t}.align`, cell('Alignment | Auto')],
      [`${t}.fill`, cell('Paint | null')],
      [`${t}.stroke`, { dictionary: 'Sides<StrokeArg> | StrokeDict', ...cell('StrokeArg | Sides<StrokeArg>') }],
    ]),
  ),
}
