// Converted from test/universe/corpus/iut-orsay-report-flat.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  auto,
  bibliography,
  black,
  blocks,
  cite,
  codeBlock,
  define,
  doc,
  external,
  figure,
  fr,
  heading,
  importPackage,
  inline,
  label,
  labelled,
  lorem,
  m,
  outline,
  par,
  path,
  pt,
  raw,
  ref,
  regex,
  set,
  show,
  space,
  strong,
  table,
  text,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const figureList = define('figure-list').returns(T.any).external()
  const iutOrsayReport = external('iut-orsay-report')
  const lexicon = define('lexicon').pos('arg1', T.content).returns(T.any).external()
  const prune = external('prune')
  const remark = define('remark').pos('arg1', T.content).named('number', T.any, null).returns(T.any).external()
  const summary = define('summary').pos('arg1', T.content).returns(T.any).external()
  const tableList = define('table-list').returns(T.any).external()
  const iutOrsayReport_with = define('with')
    .named('abstract', T.any, null)
    .named('company-name', T.content, [])
    .named('diploma', T.content, [])
    .named('keywords', T.any, null)
    .named('level', T.content, [])
    .named('report-date', T.content, [])
    .named('report-examiners', T.any, null)
    .named('report-type', T.content, [])
    .named('show-abstract', T.any, null)
    .named('specialty', T.content, [])
    .named('student-names', T.any, null)
    .named('students-in-headers', T.any, null)
    .named('subtitle', T.content, [])
    .named('title', T.content, [])
    .returns(T.any)
    .external(iutOrsayReport)
  return doc(
    importPackage('@preview/iut-orsay-report-flat:0.1.1', [
      figureList,
      iutOrsayReport,
      lexicon,
      prune,
      remark,
      summary,
      tableList,
    ]),
    show(
      iutOrsayReport_with({
        studentNames: [
          { last_name: inline`Patraque`, first_name: inline`Typhaine` },
          { last_name: inline`Hawkins`, first_name: inline`Anagramma` },
        ],
        studentsInHeaders: false,
        title: inline`Rapport d'apprentissage`,
        subtitle: inline`Têtologie`,
        keywords: ['Causse', 'sorcellerie', 'magie occulte', 'têtologie'],
        abstract: lorem(200),
        showAbstract: true,
        diploma: inline`BUT Sorcellerie`,
        specialty: inline`Parcours A : magie des miroirs`,
        level: inline`Troisième année`,
        reportDate: inline`16 février 2026`,
        reportType: inline`apprentissage`,
        companyName: inline`Cercle des Sorcières`,
        reportExaminers: [
          {
            name: inline(strong(inline`Esmé Ciredutemps`)),
            title: inline`Sorcière`,
            status: inline`Maîtresse d'apprentissage`,
          },
          { name: inline(strong(inline`Perspicacia Tique`)), title: inline`Sorcière`, status: inline`Tutrice` },
          { name: inline(strong(inline`Nac mac Feegle`)), title: inline`Fées`, status: inline`Tuteurs` },
        ],
      }),
    ),
    m.lines(
      show(cite, (it, ctx) =>
        codeBlock(
          [show(regex('\\['), set(text, { fill: black })), show(regex('^\\[(\\d+)'), set(text, { fill: prune }))],
          it,
        ),
      ),
      show(ref, (it_2, ctx_2) =>
        codeBlock([
          unsafeRaw.code<any>`if it.element == none {
    // Référence vers une entrée de bibliographie -> \`#show cite\` précédent
    return it
  }`,
          show(regex('[\\d]+[\\.]?[\\d]*[\\.]?[\\d]*'), set(text, { fill: prune })),
          it_2,
        ]),
      ),
    ),
    show(figure.caption, (it_3, ctx_3) => inline(space, text({ size: pt(10), style: 'italic' }, inline(it_3)), space)),
    set(par, { linebreaks: 'optimized', justify: true }),
    inline(outline()),
    inline(labelled(heading({ depth: 1 }, inline('Partie')), label('p:partie'))),
    inline(lorem(50)),
    inline(summary(inline(space, lorem(25), space))),
    inline(labelled(heading({ depth: 2 }, inline('Sous-partie')), label('p:sous-partie'))),
    inline(lorem(25)),
    inline(labelled(heading({ depth: 3 }, inline('Sous-sous-partie')), label('ch:sous-sous-partie'))),
    inline(lorem(50), space, ref(label('bib:what-i-did-holidays'))),
    inline(remark(inline(space, lorem(25), space))),
    inline(remark({ number: 1 }, inline`On peut aussi numéroter les remarques.`)),
    inline(lorem(50)),
    inline(
      figure(
        { caption: inline`Mesures de temps` },
        table(
          { columns: [auto, fr(1), fr(1), fr(1)] },
          inline`t`,
          inline`1`,
          inline`2`,
          inline`3`,
          inline`y`,
          inline`0.3s`,
          inline`0.4s`,
          inline`0.8s`,
        ),
      ),
    ),
    inline(
      figure(
        { numbering: '1' },
        inline(space, raw({ block: true, lang: 'py' }, 'def my_func():\n  print("Hello World")'), space),
      ),
    ),
    inline(tableList()),
    inline(figureList()),
    inline(
      lexicon(
        blocks(
          m.terms(
            m.term(['Ligature'], ['A merged glyph.']),
            m.term(['Kerning'], ['A spacing adjustment between two adjacent letters.']),
          ),
        ),
      ),
    ),
    inline(bibliography({ title: inline`Bibliographie` }, path('bib.yml'))),
  )
}
