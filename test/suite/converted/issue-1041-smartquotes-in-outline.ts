// Converted from test/suite/corpus/issue-1041-smartquotes-in-outline.typ by scripts/convert-suite.ts — do not edit.
import { doc, em, heading, inline, m, outline, page, set, smartquote } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(page, { width: em(15) }), inline(outline())),
    heading(
      { depth: 1 },
      inline(
        smartquote({ double: true }),
        'This',
        smartquote({ double: true }),
        ' ',
        smartquote({ double: true }),
        'is',
        smartquote({ double: true }),
        ' ',
        smartquote({ double: true }),
        'a',
        smartquote({ double: true }),
        ' ',
        smartquote({ double: true }),
        'test',
        smartquote({ double: true }),
      ),
    ),
  )
}
