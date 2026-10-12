// Converted from test/universe/corpus/unofficial-ulb-report.typ by scripts/convert-suite.ts — do not edit.
import {
  T,
  bibliography,
  counter,
  datetime,
  define,
  doc,
  external,
  heading,
  importPackage,
  inline,
  label,
  lorem,
  m,
  outline,
  path,
  ref,
  set,
  show,
} from '../../../src/index.ts'

export default () => {
  const report = external('report')
  const report_with = define('with')
    .named('authors', T.any, null)
    .named('course', T.any, null)
    .named('date', T.any, null)
    .named('studies', T.any, null)
    .named('teachers', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(report)
  return doc(
    importPackage('@preview/unofficial-ulb-report:0.1.0', [report]),
    show(
      report_with({
        title: 'Exemple de titre',
        studies: "Année d'étude",
        course: 'Nom du cours',
        date: datetime.today().display('[day]/[month]/[year]'),
        authors: ['Nom 1', 'Nom 2'],
        teachers: ['Prof 1', 'Superviseur'],
      }),
    ),
    inline(outline({ depth: 2 })),
    heading({ depth: 1 }, inline('Introduction')),
    inline`This is a citation: ${ref(label('Exemple'))}`,
    heading({ depth: 2 }, inline('Section 1')),
    inline(lorem(100)),
    m.lines(
      heading({ depth: 2 }, inline('Section 2')),
      heading({ depth: 3 }, inline('Subsection')),
      heading({ depth: 4 }, inline('Subsubsection')),
    ),
    inline(bibliography({ style: 'ieee' }, path('biblio.bib'))),
    m.lines(
      set(heading, { numbering: 'A.1 -' }),
      inline(counter(heading).update(0)),
      heading({ depth: 1 }, inline('Détail supplémentaire')),
      heading({ depth: 2 }, inline('Section')),
    ),
  )
}
