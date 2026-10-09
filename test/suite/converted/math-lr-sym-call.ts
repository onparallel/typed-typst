// Converted from test/suite/corpus/math-lr-sym-call.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(unsafeRaw.math.block`ceil.l(x) \\
  floor.l(x) \\

  paren.l(x) \\
  paren.l.flat(x) \\
  paren.l.closed(x) \\
  paren.l.stroked(x) \\

  brace.l(x) \\
  brace.l.stroked(x) \\

  bracket.l(x) \\
  bracket.l.tick.t(x) \\
  bracket.l.tick.b(x) \\
  bracket.l.stroked(x) \\

  shell.l(x) \\
  shell.l.stroked(x) \\
  shell.l.filled(x) \\

  bag.l(x) \\

  mustache.l(x) \\
  mustache.r(x) \\

  fence.l(x) \\
  fence.l.double(x) \\

  chevron.l(x) \\
  chevron.l.curly(x) \\
  chevron.l.dot(x) \\
  chevron.l.closed(x) \\
  chevron.l.double(x) \\

  corner.l.t(x) \\
  corner.l.b(x) \\

  bar(x) \\
  bar.double(x) \\
  bar.triple(x) \\
  fence.dotted(x) \\`),
  )
}
