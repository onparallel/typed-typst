// Converted from test/suite/corpus/list-marker-align-values.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { add, bottom, center, doc, end, enum_, horizon, left, m, right, set, start, top } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(enum_, { numberAlign: start }),
      set(enum_, { numberAlign: end }),
      set(enum_, { numberAlign: left }),
      set(enum_, { numberAlign: center }),
      set(enum_, { numberAlign: right }),
      set(enum_, { numberAlign: top }),
      set(enum_, { numberAlign: horizon }),
      set(enum_, { numberAlign: bottom }),
      set(enum_, { numberAlign: add(start, top) }),
      set(enum_, { numberAlign: add(left, horizon) }),
      set(enum_, { numberAlign: add(center, bottom) }),
    ),
  )
}
