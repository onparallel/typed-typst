// Converted from test/suite/corpus/issue-4065-document-context.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { context, doc, heading, m, show, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    unsafeRaw.markup`#show: body => context {
  let all = query(heading)
  let title = if all.len() > 0 { all.first().body }
  set document(title: title)
  body
}`,
    m.lines(show(heading, null), m.heading(1, 'Top level')),
  )
}
