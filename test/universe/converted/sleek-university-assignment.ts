// Converted from test/universe/corpus/sleek-university-assignment.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, external, importPackage, inline, lorem, show } from '../../../src/index.ts'

export default () => {
  const assignment = external('assignment')
  const assignment_with = define('with')
    .named('authors', T.any, null)
    .named('course', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(assignment)
  return doc(
    importPackage('@preview/sleek-university-assignment:0.1.0', [assignment]),
    show(
      assignment_with({
        title: 'Assignment 1',
        course: 'CSXXXX: Cryptography',
        authors: [{ name: 'John Doe', email: 'john.doe@example.com', studentNo: 'XX/123' }],
      }),
    ),
    inline(lorem(1000)),
  )
}
