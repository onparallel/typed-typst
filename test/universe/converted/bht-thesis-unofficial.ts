// Converted from test/universe/corpus/bht-thesis-unofficial.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  blocks,
  cm,
  define,
  doc,
  em,
  external,
  figure,
  fr,
  grid,
  heading,
  importPackage,
  inline,
  label,
  labelled,
  left,
  let_,
  line,
  lorem,
  m,
  path,
  pct,
  pt,
  rect,
  ref,
  right,
  show,
  space,
  sym,
  table,
  text,
  v,
} from '../../../src/index.ts'

export default () => {
  const project = external('project')
  const listOfFigures = define('list-of-figures').returns(T.any).external()
  const listOfTables = define('list-of-tables').returns(T.any).external()
  const bhtColors = external('bht-colors')
  const project_with = define('with')
    .named('appendix', T.content, [])
    .named('bibliography', T.any, null)
    .named('committee', T.any, null)
    .named('date', T.any, null)
    .named('degree', T.any, null)
    .named('department', T.any, null)
    .named('name', T.any, null)
    .named('post-body', T.content, [])
    .named('pre-toc', T.any, null)
    .named('student-id', T.any, null)
    .named('study-program', T.any, null)
    .named('subtitle', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(project)
  const bhtColors_turquoise = external('turquoise', bhtColors)
  const [kurzfassungDecl, kurzfassung] = let_(
    'kurzfassung',
    inline`${space}Die Kurzfassung gibt ein kurzes und prägnantes Bild der gesamten Arbeit.${space}`,
  )
  const [abstractDecl, abstract] = let_('abstract', inline`${space}This is a very good abstract.${space}`)
  const [aiStatementDecl, aiStatement] = let_(
    'ai-statement',
    inline`${space}This thesis was authored with the assistance of Artificial Intelligence (AI).${space}`,
  )
  const [acknowledgementsDecl, acknowledgements] = let_('acknowledgements', inline`${space}Thanks to ...${space}`)
  const [declarationDecl, declaration] = let_(
    'declaration',
    blocks(
      'I hereby declare that I have written this thesis independently without outside help and that I have used no sources or aids other than those cited. Passages taken verbatim or in substance from other works are identified as such, with the sources indicated.',
      inline(
        v(cm(4)),
        space,
        line({ length: pct(100), stroke: pt(0.5) }),
        space,
        v(em(-0.3)),
        space,
        grid(
          { columns: [fr(1), fr(1)], align: [left, right] },
          text({ size: em(0.8) }, inline`Date`),
          text({ size: em(0.8) }, inline`Signature`),
        ),
      ),
    ),
  )
  return doc(
    importPackage('@preview/bht-thesis-unofficial:0.1.0', [project, listOfFigures, listOfTables, bhtColors]),
    kurzfassungDecl,
    abstractDecl,
    aiStatementDecl,
    acknowledgementsDecl,
    declarationDecl,
    show(
      project_with({
        title: 'My Very Long, Informative, Expressive, and Definitely Fancy Title',
        subtitle: 'An Adequate Subtitle',
        name: 'Toni Musterperson',
        studentId: '123456',
        date: '31 July 2026',
        degree: 'Bachelor',
        studyProgram: 'Computer Science',
        department: 'VI – Informatik und Medien',
        committee: [
          {
            role: 'Advisor and First Examiner',
            name: 'Prof. Dr. Kim Beispiel',
            institution: 'Berliner Hochschule für Technik',
          },
          {
            role: 'Second Examiner',
            name: 'Prof. Dr.-Ing. Robin Muster',
            institution: 'Berliner Hochschule für Technik',
          },
        ],
        preToc: [
          { title: 'Kurzfassung', body: kurzfassung },
          { title: 'Abstract', body: abstract, ownPage: false },
          { title: 'Statement on the Use of AI Tools', body: aiStatement },
          { title: 'Acknowledgements', body: acknowledgements },
          { title: 'Plagiarism Statement', body: declaration },
        ],
        bibliography: bibliography(path('references.bib')),
        appendix: blocks(
          m.lines(
            inline(labelled(heading({ depth: 1 }, inline('Additional Material')), label('app-material'))),
            inline(lorem(50)),
          ),
        ),
        postBody: inline(space, listOfFigures(), space, listOfTables(), space),
      }),
    ),
    m.lines(m.heading(1, 'Introduction'), inline(lorem(80))),
    inline`As shown by Doe and Smith ${ref(label('example2025'))}, this approach is effective.`,
    inline(
      labelled(
        [
          figure(
            { caption: inline`An example figure` },
            rect({ width: pct(50), height: cm(3), fill: bhtColors_turquoise }),
          ),
          space,
        ],
        label('fig-example'),
      ),
    ),
    m.lines(m.heading(2, 'In this paper'), inline(lorem(20))),
    m.lines(
      m.heading(3, 'Contributions'),
      inline`As ${ref(label('fig-example'))} and ${ref(label('tab-example'))} show, ${lorem(10)}`,
    ),
    inline(
      labelled(
        [
          figure(
            { caption: inline`An example table` },
            table(
              { columns: 3 },
              table.header(inline`Approach`, inline`Speed`, inline`Quality`),
              inline`Ours`,
              inline`fast`,
              inline`high`,
              inline`Baseline`,
              inline`slow`,
              inline`low`,
            ),
          ),
          space,
        ],
        label('tab-example'),
      ),
    ),
    m.lines(m.heading(4, 'Really Small Stuff'), inline(lorem(20))),
    m.lines(m.heading(1, 'Related Work'), inline`Supplementary details can be found in ${ref(label('app-material'))}.`),
    inline(lorem(500)),
  )
}
