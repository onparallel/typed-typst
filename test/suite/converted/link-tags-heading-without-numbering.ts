// Converted from test/suite/corpus/link-tags-heading-without-numbering.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, heading, inline, label, labelled, link, m } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(labelled(heading({ depth: 1 }, inline('Heading')), label('heading'))),
    inline(link(label('heading'), inline`link to heading`)),
  )
}
