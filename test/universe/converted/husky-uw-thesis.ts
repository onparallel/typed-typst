// Converted from test/universe/corpus/husky-uw-thesis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, external, importPackage, inline, m, show, space } from '../../../src/index.ts'

export default () => {
  const thesis = external('thesis')
  const thesis_with = define('with')
    .named('abstract', T.content, [])
    .named('author', T.any, null)
    .named('chair', T.any, null)
    .named('committee', T.any, null)
    .named('degree', T.any, null)
    .named('program', T.any, null)
    .named('title', T.content, [])
    .named('year', T.any, null)
    .returns(T.any)
    .external(thesis)
  return doc(
    importPackage('@preview/husky-uw-thesis:0.1.0', [thesis]),
    show(
      thesis_with({
        title: inline`Your Dissertation Title`,
        author: 'Your Name',
        degree: 'Doctor of Philosophy',
        year: '2026',
        program: 'Your Department',
        chair: { name: 'Chair Name', department: "Chair's Department" },
        committee: [
          { name: 'Chair Name', role: 'Chair' },
          { name: 'Second Member Name', role: null },
          { name: 'Third Member Name', role: null },
        ],
        abstract: inline`${space}Your abstract goes here.${space}`,
      }),
    ),
    m.heading(1, 'Introduction'),
    m.heading(2, 'Motivation'),
    m.heading(2, 'Outline'),
    m.heading(1, 'Background'),
    m.heading(1, 'Methods'),
    m.heading(1, 'Results'),
    m.heading(1, 'Discussion'),
    m.heading(1, 'Conclusion'),
  )
}
