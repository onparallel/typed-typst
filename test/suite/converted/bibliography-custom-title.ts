// Converted from test/suite/corpus/bibliography-custom-title.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { bibliography, doc, inline, label, path, ref, space } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      ref(label('distress')),
      space,
      bibliography({ title: inline`My References` }, path('/assets/bib/works.bib')),
    ),
  )
}
