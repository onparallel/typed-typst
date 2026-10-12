/**
 * Shapes of the dictionaries, arrays and callbacks that reflection leaves
 * untyped. spec/overlay.ts maps parameters to these types.
 */
import type { Alignment, Auto, Expr, Fraction, Length, Paint, Relative, TypstValue } from './core.ts'
import type { Value } from './element.ts'

/** Per-side values: `(top: …, x: …, rest: …)`. */
export interface Sides<T> {
  readonly top?: T | undefined
  readonly right?: T | undefined
  readonly bottom?: T | undefined
  readonly left?: T | undefined
  readonly x?: T | undefined
  readonly y?: T | undefined
  readonly rest?: T | undefined
}

/** Per-corner values: `(top-left: …, rest: …)`. */
export interface Corners<T> {
  readonly topLeft?: T | undefined
  readonly topRight?: T | undefined
  readonly bottomRight?: T | undefined
  readonly bottomLeft?: T | undefined
  readonly top?: T | undefined
  readonly right?: T | undefined
  readonly bottom?: T | undefined
  readonly left?: T | undefined
  readonly rest?: T | undefined
}

/** Page margins: sides, plus `inside`/`outside` for two-sided layouts. */
export interface Margin extends Sides<Relative | Auto> {
  readonly inside?: Relative | Auto | undefined
  readonly outside?: Relative | Auto | undefined
}

/** The dictionary form of a stroke. */
export interface StrokeDict {
  readonly paint?: Paint | undefined
  readonly thickness?: Length | undefined
  readonly cap?: 'butt' | 'round' | 'square' | Expr<'str'> | undefined
  readonly join?: 'miter' | 'round' | 'bevel' | Expr<'str'> | undefined
  readonly dash?:
    | 'solid'
    | 'dotted'
    | 'densely-dotted'
    | 'loosely-dotted'
    | 'dashed'
    | 'densely-dashed'
    | 'loosely-dashed'
    | 'dash-dotted'
    | 'densely-dash-dotted'
    | 'loosely-dash-dotted'
    | Expr<'str'>
    | DashArray
    | { readonly array: DashArray; readonly phase?: Length | undefined }
    | null
    | Expr<'none'>
    | undefined
  readonly miterLimit?: number | Expr<'int' | 'float'> | undefined
}

/** Dash lengths and gaps, alternating; `'dot'` is a dot. */
export type DashArray = readonly (Length | 'dot' | Expr<'str'>)[]

export type StrokeArg = Length | Paint | Expr<'stroke'> | StrokeDict | null | Expr<'none'>

/** A track size of a grid or table. */
export type Track = Auto | Relative | Fraction
export type Tracks = readonly Track[]

/** A font family descriptor. */
export interface FontDict {
  readonly name: string | Expr<'str'>
  readonly covers?: 'latin-in-cjk' | Expr<'str'> | Expr<'regex'> | undefined
}

/** A per-cell callback of a grid or table: `(x, y) => …` (printed `(_1, _2, ..) => …`). */
export type CellFn<T> = Expr<'function'> | ((x: Value<'int'>, y: Value<'int'>) => T)

/** The position form of a link destination. */
export interface Position {
  readonly page: number | Expr<'int'>
  readonly x: Length
  readonly y: Length
}

export type { Alignment, TypstValue }
