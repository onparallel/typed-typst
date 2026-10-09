// Converted from test/suite/corpus/issue-3662-pdf-smartquotes.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, m, set, smartquote } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      m.heading(
        1,
        'It',
        smartquote({ double: false }),
        's',
        ' ',
        smartquote({ double: true }),
        'Unnormal Heading',
        smartquote({ double: true }),
      ),
      m.heading(1, 'It’s “Normal Heading”'),
    ),
    m.lines(
      set(smartquote, { enabled: false }),
      m.heading(
        1,
        'It',
        smartquote({ double: false }),
        's',
        ' ',
        smartquote({ double: true }),
        'Unnormal Heading',
        smartquote({ double: true }),
      ),
      m.heading(
        1,
        'It',
        smartquote({ double: false }),
        's',
        ' ',
        smartquote({ double: false }),
        'single quotes',
        smartquote({ double: false }),
      ),
      m.heading(1, 'It’s “Normal Heading”'),
    ),
  )
}
