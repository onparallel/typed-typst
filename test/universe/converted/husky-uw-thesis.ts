// Converted from test/universe/corpus/husky-uw-thesis.typ by scripts/convert-suite.ts — do not edit.
import { T, define, doc, external, heading, importPackage, inline, show, space } from '../../../src/index.ts'

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
    heading({ depth: 1 }, inline('Introduction')),
    heading({ depth: 2 }, inline('Motivation')),
    heading({ depth: 2 }, inline('Outline')),
    heading({ depth: 1 }, inline('Background')),
    heading({ depth: 1 }, inline('Methods')),
    heading({ depth: 1 }, inline('Results')),
    heading({ depth: 1 }, inline('Discussion')),
    heading({ depth: 1 }, inline('Conclusion')),
  )
}
