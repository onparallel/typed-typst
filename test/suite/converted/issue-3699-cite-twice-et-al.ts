// Converted from test/suite/corpus/issue-3699-cite-twice-et-al.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { bibliography, doc, inline, label, linebreak, path, ref, show, space } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      ref(label('mcintosh_anxiety')),
      space,
      linebreak(),
      space,
      ref(label('mcintosh_anxiety')),
      space,
      show(bibliography, null),
      space,
      bibliography({ style: 'chicago-author-date' }, path('/assets/bib/works.bib')),
    ),
  )
}
