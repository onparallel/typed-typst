// Converted from test/suite/corpus/repeat-basic.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { data, doc, inline, let_, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const [sectionsDecl, sections] = let_(
    'sections',
    data([
      ['Introduction', 1],
      ['Approach', 1],
      ['Evaluation', 3],
      ['Discussion', 15],
      ['Related Work', 16],
      ['Conclusion', 253],
    ]),
  )
  return doc(
    sectionsDecl,
    inline(unsafeRaw.code<any>`for section in sections [
  #section.at(0) #box(width: 1fr, repeat[.]) #section.at(1) \\
]`),
  )
}
