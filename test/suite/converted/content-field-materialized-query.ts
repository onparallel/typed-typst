// Converted from test/suite/corpus/content-field-materialized-query.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { context, doc, inline, label, labelled, m, raw, set, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(raw, { lang: 'rust' }),
      inline(
        unsafeRaw.code<any>`context query(<myraw>).first().lang`,
        space,
        labelled([raw('raw'), space], label('myraw')),
      ),
    ),
  )
}
