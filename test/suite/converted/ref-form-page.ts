// Converted from test/suite/corpus/ref-form-page.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, heading, inline, label, labelled, m, page, ref, set, space } from '../../../src/index.ts'

export default () => {
  return doc(
    set(page, { numbering: '1' }),
    inline`${labelled(['Text', space], label('text'))} is on ${ref({ form: 'page' }, label('text'))}. See
${ref({ form: 'page' }, label('setup'))}.`,
    set(page, { supplement: inline`p.` }),
    m.lines(
      inline(labelled(heading({ depth: 2 }, inline('Setup')), label('setup'))),
      inline`Text seen on ${ref({ form: 'page' }, label('text'))}. Text seen on ${ref({ form: 'page', supplement: 'Page' }, label('text'))}.`,
    ),
  )
}
