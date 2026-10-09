// Converted from test/universe/corpus/cleanified-hpi-thesis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  blocks,
  define,
  doc,
  external,
  importPackage,
  inline,
  label,
  lorem,
  m,
  path,
  ref,
  show,
  space,
  sym,
} from '../../../src/index.ts'

export default () => {
  const project = external('project')
  const abstract = define('abstract').pos('arg1', T.content).returns(T.any).external()
  const abstractDe = define('abstract-de').pos('arg1', T.content).returns(T.any).external()
  const acknowledgements = define('acknowledgements').pos('arg1', T.content).returns(T.any).external()
  const appendix = define('appendix').pos('arg1', T.content).returns(T.any).external()
  const project_with = define('with')
    .named('advisors', T.any, null)
    .named('chair', T.any, null)
    .named('date', T.any, null)
    .named('name', T.any, null)
    .named('professors', T.any, null)
    .named('study-program', T.any, null)
    .named('title', T.any, null)
    .named('translation', T.any, null)
    .named('type', T.any, null)
    .returns(T.any)
    .external(project)
  return doc(
    importPackage('@preview/cleanified-hpi-thesis:0.3.0', [project, abstract, abstractDe, acknowledgements, appendix]),
    show(
      project_with({
        title: 'My Very Long, Informative, Expressive, and Definitely Fancy Title',
        translation: 'Eine adäquate Übersetzung meines Titels',
        name: 'Max Mustermann',
        date: '17. Juli, 2025',
        studyProgram: 'IT-Systems Engineering',
        chair: 'Data-Intensive Internet Computing',
        professors: ['Prof. Dr. Rosseforp Renttalp', 'Prof. Dr. Erika Mustermann'],
        advisors: ['Dr. Karla Musterfrau'],
        type: 'Master',
      }),
    ),
    inline(abstract(inline`${space}This is a very good abstract.${space}`)),
    inline(abstractDe(inline`${space}Dies ist eine wirklich gute Zusammenfassung.${space}`)),
    inline(acknowledgements(inline`${space}Thanks to ...${space}`)),
    m.lines(m.heading(1, 'Introduction'), inline(lorem(80))),
    inline`As shown by Doe and Smith ${ref(label('example2025'))}, this approach is effective.`,
    m.lines(m.heading(2, 'In this paper'), inline(lorem(20))),
    m.lines(m.heading(3, 'Contributions'), inline(lorem(40))),
    m.lines(m.heading(4, 'Really Small Stuff'), inline(lorem(20))),
    m.lines(m.heading(1, 'Related Work'), inline(lorem(500))),
    inline(bibliography(path('references.bib'))),
    inline(appendix(blocks(m.lines(m.heading(2, 'Additional Results'), inline(lorem(80)))))),
  )
}
