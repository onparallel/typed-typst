// Converted from test/universe/corpus/modern-hsh-thesis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  define,
  doc,
  external,
  importPackage,
  includeFile,
  inline,
  linebreak,
  link,
  path,
  show,
  space,
} from '../../../src/index.ts'

export default () => {
  const project = external('project')
  const project_with = define('with')
    .named('author', T.any, null)
    .named('author-email', T.any, null)
    .named('bibliography', T.any, null)
    .named('date', T.any, null)
    .named('glossary-columns', T.any, null)
    .named('matrikelnummer', T.any, null)
    .named('prof', T.content, [])
    .named('second-prof', T.content, [])
    .named('subtitle', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(project)
  return doc(
    importPackage('@preview/modern-hsh-thesis:1.1.2', [project]),
    show(
      project_with({
        title: 'Beispiel-Titel',
        subtitle: 'Bachelorarbeit im Studiengang Mediendesigninformatik',
        author: 'Vorname Nachname',
        authorEmail: 'vorname@nachname.tld',
        matrikelnummer: 1234567,
        prof: inline`${space}Prof. Dr. Vorname Nachname${linebreak()} Abteilung Informatik, Fakultät IV${linebreak()}
Hochschule Hannover${linebreak()} ${link('mailto:vorname.nachname@hs-hannover.de')}${space}`,
        secondProf: inline`${space}Prof. Dr. Vorname Nachname${linebreak()} Abteilung Informatik, Fakultät IV${linebreak()}
Hochschule Hannover${linebreak()} ${link('mailto:vorname.nachname@hs-hannover.de')}${space}`,
        date: '01. August 2024',
        glossaryColumns: 1,
        bibliography: bibliography(
          { style: 'institute-of-electrical-and-electronics-engineers', title: 'Literaturverzeichnis' },
          [path('sources.bib'), path('sources.yaml')],
        ),
      }),
    ),
    includeFile('chapters/1-einleitung.typ'),
  )
}
