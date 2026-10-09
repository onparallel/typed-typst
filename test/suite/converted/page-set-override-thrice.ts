// Converted from test/suite/corpus/page-set-override-thrice.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { cm, doc, m, page, set } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(page, { paper: 'a4' }), set(page, { paper: 'a5' }), set(page, { width: cm(1), height: cm(1) })),
  )
}
