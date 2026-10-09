// Converted from test/suite/corpus/page-marginal-style-text-call-around-set-page.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { codeBlock, doc, inline, page, pt, red, set, text } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      text(
        { fill: red },
        codeBlock(
          [set(page, { numbering: '1', margin: { bottom: pt(20) } })],
          text({ style: 'italic' }, inline`Hello`),
        ),
      ),
    ),
  )
}
