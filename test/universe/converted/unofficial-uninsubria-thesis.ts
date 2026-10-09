// Converted from test/universe/corpus/unofficial-uninsubria-thesis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  define,
  doc,
  external,
  importFile,
  importPackage,
  includeFile,
  m,
  path,
  show,
} from '../../../src/index.ts'

export default () => {
  const tesiUninsubria = external('tesi-uninsubria')
  const glossaryEntries = external('glossary-entries')
  const tesiUninsubria_with = define('with')
    .named('anno-accademico', T.any, null)
    .named('autore', T.any, null)
    .named('azienda', T.any, null)
    .named('bibliography', T.any, null)
    .named('codice-corso', T.any, null)
    .named('corso', T.any, null)
    .named('dipartimento', T.any, null)
    .named('glossary', T.any, null)
    .named('language', T.any, null)
    .named('matricola', T.any, null)
    .named('relatore', T.any, null)
    .named('titolo', T.any, null)
    .named('tutor', T.any, null)
    .returns(T.any)
    .external(tesiUninsubria)
  return doc(
    m.lines(
      importPackage('@preview/unofficial-uninsubria-thesis:0.1.0', [tesiUninsubria]),
      importFile('glossary.typ', [glossaryEntries]),
    ),
    show(
      tesiUninsubria_with({
        titolo: 'Sviluppo di un sistema embedded per un razzo lunare',
        autore: 'Mattia Rossi',
        matricola: '747053',
        bibliography: bibliography(path('sources.bib')),
        codiceCorso: 'F004',
        relatore: 'Carlo Rossi',
        tutor: 'Edoardo Neri',
        azienda: 'NASA spa',
        annoAccademico: '2025/2026',
        corso: 'CORSO DI STUDIO TRIENNALE IN INFORMATICA',
        dipartimento: 'DIPARTIMENTO DI SCIENZE TEORICHE E APPLICATE',
        glossary: glossaryEntries,
        language: 'it',
      }),
    ),
    m.lines(
      includeFile('capitoli/introduzione.typ'),
      includeFile('capitoli/capitolo1.typ'),
      includeFile('capitoli/conclusione.typ'),
    ),
  )
}
