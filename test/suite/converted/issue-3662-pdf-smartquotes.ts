// Converted from test/suite/corpus/issue-3662-pdf-smartquotes.typ by scripts/convert-suite.ts — do not edit.
import { doc, heading, inline, m, set, smartquote } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      heading(
        { depth: 1 },
        inline(
          'It',
          smartquote({ double: false }),
          's',
          ' ',
          smartquote({ double: true }),
          'Unnormal Heading',
          smartquote({ double: true }),
        ),
      ),
      heading({ depth: 1 }, inline('It’s “Normal Heading”')),
    ),
    m.lines(
      set(smartquote, { enabled: false }),
      heading(
        { depth: 1 },
        inline(
          'It',
          smartquote({ double: false }),
          's',
          ' ',
          smartquote({ double: true }),
          'Unnormal Heading',
          smartquote({ double: true }),
        ),
      ),
      heading(
        { depth: 1 },
        inline(
          'It',
          smartquote({ double: false }),
          's',
          ' ',
          smartquote({ double: false }),
          'single quotes',
          smartquote({ double: false }),
        ),
      ),
      heading({ depth: 1 }, inline('It’s “Normal Heading”')),
    ),
  )
}
