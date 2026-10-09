// Converted from test/suite/corpus/math-mat-align-complex.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { codeBlock, doc, inline, let_, m, math, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const [stopDecl, stop] = let_('stop', codeBlock([], math.class('punctuation', unsafeRaw.math`.`)))
  return doc(
    m.lines(
      stopDecl,
      inline(
        unsafeRaw.math.block`mat(&a+b,c;&d, e)`,
        space,
        unsafeRaw.math.block`mat(&a+b&,c;&d&, e)`,
        space,
        unsafeRaw.math.block`mat(&&&a+b,c;&&&d, e)`,
        space,
        unsafeRaw.math.block`mat(stop &a+b&stop,c;...stop stop&d&...stop stop, e)`,
      ),
    ),
  )
}
