// Converted from test/universe/corpus/structured-uib.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  define,
  doc,
  external,
  importPackage,
  inline,
  m,
  outline,
  path,
  show,
} from '../../../src/index.ts'

export default () => {
  const report = external('report')
  const appendix = external('appendix')
  const report_with = define('with')
    .named('authors', T.any, null)
    .named('date', T.any, null)
    .named('group', T.any, null)
    .named('mails', T.any, null)
    .named('supervisor', T.any, null)
    .named('task-name', T.any, null)
    .named('task-no', T.any, null)
    .returns(T.any)
    .external(report)
  const appendix_with = define('with').returns(T.any).external(appendix)
  return doc(
    importPackage('@preview/structured-uib:0.2.0', [report, appendix]),
    show(
      report_with({
        taskNo: '1',
        taskName: 'Måling og behandling av måledata',
        authors: ['Student Enersen', 'Student Toersen', 'Student Treersen'],
        mails: ['student.enersen@student.uib.no', 'student.toersen@student.uib.no', 'student.treersen@student.uib.no'],
        group: '1-1',
        date: '29. Apr. 2024',
        supervisor: 'Professor Professorsen',
      }),
    ),
    inline(outline()),
    m.heading(1, 'Oppgavens målsetting'),
    m.heading(1, 'Beskrivelse av måleoppstilling'),
    m.heading(1, 'Utførelse og målinger'),
    m.heading(1, 'Konklusjon og diskusjon'),
    inline(bibliography(path('references.bib'))),
    show(appendix_with()),
    m.heading(1, 'Ekstra Info'),
  )
}
