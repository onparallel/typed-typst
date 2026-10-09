// Converted from test/suite/corpus/symbol-repr.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, inline, let_, m, repr, space, sym, symbol, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const [envelopeDecl, envelope] = let_(
    'envelope',
    symbol('🖂', ['stamped', '🖃'], ['stamped.pen', '🖆'], ['lightning', '🖄'], ['fly', '🖅']),
  )
  return doc(
    inline(
      test(repr(sym.amp), unsafeRaw.code<any>`\`symbol("&", ("inv", "⅋"))\`.text`),
      space,
      test(repr(sym.amp.inv), unsafeRaw.code<any>`\`symbol("⅋")\`.text`),
      space,
      test(
        repr(unsafeRaw.code<any>`sym.arrow.double.r`),
        unsafeRaw.code<any>`\`\`\`
  symbol(
    "⇒",
    ("bar", "⤇"),
    ("long", "⟹"),
    ("long.bar", "⟾"),
    ("not", "⇏"),
    ("struck", "⤃"),
    ("l", "⇔"),
    ("l.long", "⟺"),
    ("l.not", "⇎"),
    ("l.struck", "⤄"),
  )
  \`\`\`.text`,
      ),
      space,
      test(repr(sym.smash), 'symbol("⨳")'),
    ),
    m.lines(
      envelopeDecl,
      inline(
        test(
          repr(envelope),
          unsafeRaw.code<any>`\`\`\`
  symbol(
    "🖂",
    ("stamped", "🖃"),
    ("stamped.pen", "🖆"),
    ("lightning", "🖄"),
    ("fly", "🖅"),
  )
  \`\`\`.text`,
        ),
        space,
        test(repr(unsafeRaw.code<any>`envelope.stamped`), unsafeRaw.code<any>`\`symbol("🖃", ("pen", "🖆"))\`.text`),
        space,
        test(repr(unsafeRaw.code<any>`envelope.stamped.pen`), unsafeRaw.code<any>`\`symbol("🖆")\`.text`),
        space,
        test(repr(unsafeRaw.code<any>`envelope.lightning`), unsafeRaw.code<any>`\`symbol("🖄")\`.text`),
        space,
        test(repr(unsafeRaw.code<any>`envelope.fly`), unsafeRaw.code<any>`\`symbol("🖅")\`.text`),
      ),
    ),
  )
}
