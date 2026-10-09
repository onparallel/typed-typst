// Converted from test/universe/corpus/clean-ensam.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, external, importPackage, show } from '../../../src/index.ts'

export default () => {
  const project = external('project')
  const project_with = define('with')
    .named('authors', T.any, null)
    .named('department', T.any, null)
    .named('module', T.any, null)
    .named('program', T.any, null)
    .named('subtitle', T.any, null)
    .named('supervisor', T.any, null)
    .named('title', T.any, null)
    .named('year', T.any, null)
    .returns(T.any)
    .external(project)
  return doc(
    importPackage('@preview/clean-ensam:0.1.0', [project]),
    show(
      project_with({
        title: "Etude d'une vulnérabilité critique",
        subtitle: 'React2Shell (CVE-2025-55182)',
        authors: ['BAHLAOUI Ahmed'],
        supervisor: 'Pr. X',
        department: 'MAGI',
        program: 'INDIA/SD',
        module: 'Programmation web avancée',
        year: '2025-2026',
      }),
    ),
  )
}
