// Converted from test/suite/corpus/symbol-constructor.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, let_, m, space, symbol, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const [envelopeDecl, envelope] = let_(
    'envelope',
    symbol('🖂', ['stamped', '🖃'], ['stamped.pen', '🖆'], ['lightning', '🖄'], ['fly', '🖅']),
  )
  const [oneDecl, one] = let_('one', symbol('1', ['emoji', '1️']))
  return doc(
    m.lines(envelopeDecl, oneDecl),
    inline(
      envelope,
      space,
      unsafeRaw.code<any>`envelope.stamped`,
      space,
      unsafeRaw.code<any>`envelope.pen`,
      space,
      unsafeRaw.code<any>`envelope.stamped.pen`,
      space,
      unsafeRaw.code<any>`envelope.lightning`,
      space,
      unsafeRaw.code<any>`envelope.fly`,
      space,
      one,
      space,
      unsafeRaw.code<any>`one.emoji`,
    ),
  )
}
