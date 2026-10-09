// Converted from test/suite/corpus/shaping-font-fallback.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, m, set, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(text, { font: ['Libertinus Serif', 'Noto Sans Arabic'] }), 'A😀B'),
    'دع النص يمطر عليك',
    'ب🐈😀سم',
    'Aب😀🏞سمB',
    '01️⃣2',
    'A🐈ዲሞB',
  )
}
