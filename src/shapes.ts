/**
 * Shapes of the dictionaries, arrays and callbacks that reflection leaves
 * untyped. spec/overlay.ts maps parameters to these types.
 */
import type { Alignment, Auto, Expr, Fraction, Length, Paint, Relative, TypstValue } from './core.ts'

/** Per-side values: `(top: …, x: …, rest: …)`. */
export interface Sides<T> {
  readonly top?: T
  readonly right?: T
  readonly bottom?: T
  readonly left?: T
  readonly x?: T
  readonly y?: T
  readonly rest?: T
}

/** Per-corner values: `(top-left: …, rest: …)`. */
export interface Corners<T> {
  readonly topLeft?: T
  readonly topRight?: T
  readonly bottomRight?: T
  readonly bottomLeft?: T
  readonly top?: T
  readonly right?: T
  readonly bottom?: T
  readonly left?: T
  readonly rest?: T
}

/** Page margins: sides, plus `inside`/`outside` for two-sided layouts. */
export interface Margin extends Sides<Relative | Auto> {
  readonly inside?: Relative | Auto
  readonly outside?: Relative | Auto
}

/** The dictionary form of a stroke. */
export interface StrokeDict {
  readonly paint?: Paint
  readonly thickness?: Length
  readonly cap?: 'butt' | 'round' | 'square'
  readonly join?: 'miter' | 'round' | 'bevel'
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
    | DashArray
    | { readonly array: DashArray; readonly phase?: Length }
    | null
  readonly miterLimit?: number | Expr<'int' | 'float'>
}

/** Dash lengths and gaps, alternating; `'dot'` is a dot. */
export type DashArray = readonly (Length | 'dot')[]

export type StrokeArg = Length | Paint | Expr<'stroke'> | StrokeDict | null

/** A track size of a grid or table. */
export type Track = Auto | Relative | Fraction
export type Tracks = readonly Track[]

/** A font family descriptor. */
export interface FontDict {
  readonly name: string
  readonly covers?: 'latin-in-cjk' | Expr<'regex'>
}

/** A per-cell callback of a grid or table: `(x, y) => …`. */
export type CellFn<T> = Expr<'function'> | ((x: Expr<'int'>, y: Expr<'int'>) => T)

/** The position form of a link destination. */
export interface Position {
  readonly page: number | Expr<'int'>
  readonly x: Length
  readonly y: Length
}

export type { Alignment, TypstValue }
