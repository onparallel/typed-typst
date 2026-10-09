// Converted from test/universe/corpus/red-agora.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, external, importPackage, show } from '../../../src/index.ts'

export default () => {
  const project = external('project')
  const project_with = define('with')
    .named('academic-year', T.any, null)
    .named('authors', T.any, null)
    .named('branch', T.any, null)
    .named('footer-text', T.any, null)
    .named('jury', T.any, null)
    .named('mentors', T.any, null)
    .named('subtitle', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(project)
  return doc(
    importPackage('@preview/red-agora:0.2.0', [project]),
    show(
      project_with({
        title:
          'Injecting a backdoor in the xz library and taking over NASA and SpaceX spaceship tracking servers (for education purposes only)',
        subtitle: 'Second year internship report',
        authors: ['Amine Hadnane', 'Mehdi Essalehi'],
        mentors: ['Pr. John Smith (Internal)', 'Jane Doe (External)'],
        jury: ['Pr. John Smith', 'Pr. Jane Doe'],
        branch: 'Software Engineering',
        academicYear: '2077-2078',
        footerText: 'ENSIAS',
      }),
    ),
  )
}
