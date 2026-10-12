// Converted from test/suite/corpus/issue-4065-document-context.typ by scripts/convert-suite.ts — do not edit.
import { context, doc, heading, inline, m, show, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    show(
      (body, ctx) => unsafeRaw.code({ body })<any>`context {
  let all = query(heading)
  let title = if all.len() > 0 { all.first().body }
  set document(title: title)
  body
}`,
    ),
    m.lines(show(heading, null), heading({ depth: 1 }, inline('Top level'))),
  )
}
