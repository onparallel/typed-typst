// Converted from test/suite/corpus/justify-avoid-runts.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { data, doc, inline, m, page, par, pt, set, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { width: pt(124) }),
      set(par, { justify: true }),
      inline(
        unsafeRaw.code<any>`for i in range(0, 20) {
	"a b c "
}`,
        space,
        data('d'),
      ),
    ),
  )
}
