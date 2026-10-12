/** Symbols (`sym.arrow.r`, `emoji.face.grin`) as typed values. */
import { type Code, type Expr, NODE } from './core.ts'

/** A trie of names: TS name → [Typst name, or 0 when the same; children; 1 for a submodule]. */
export interface Trie {
  readonly [name: string]: readonly [string | 0, Trie] | readonly [string | 0, Trie, 1]
}

type Child<E> = E extends readonly [string | 0, infer C extends Trie, 1]
  ? SymbolModule<C>
  : E extends readonly [string | 0, infer C extends Trie]
    ? SymbolNode<C>
    : never
/** A symbol, with its modifiers as properties: `sym.arrow.r.double`. */
export type SymbolNode<T extends Trie> = Expr<'symbol'> & { readonly [K in keyof T]: Child<T[K]> }
/** A module of symbols (`sym`, `sym.control`). */
export type SymbolModule<T extends Trie> = { readonly [K in keyof T]: Child<T[K]> }

function node(target: Code, trie: Trie, isModule: boolean): object {
  // A submodule is no value, so it is no expression.
  const out: Record<string | symbol, unknown> = isModule ? {} : { [NODE]: target }
  for (const [key, [name, children, mod]] of Object.entries(trie))
    out[key] = node({ k: 'field', target, name: name || key }, children, mod === 1)
  return Object.freeze(out)
}

/** Builds a symbol module from its trie (called by generated code). */
export function symbolModule<T extends Trie>(name: string, trie: T): SymbolModule<T> {
  return node({ k: 'ident', name, std: true }, trie, true) as SymbolModule<T>
}
