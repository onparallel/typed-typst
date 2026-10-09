// Converted from test/universe/corpus/kinetic-kit.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  blocks,
  contentBlock,
  define,
  doc,
  external,
  figure,
  image,
  importPackage,
  includeFile,
  inline,
  m,
  mm,
  outline,
  path,
  set,
  show,
  space,
  table,
  text,
  where,
} from '../../../src/index.ts'

export default () => {
  const doctoralTitlePage = external('doctoral-title-page')
  const thesis = external('thesis')
  const thesis_with = define('with')
    .named('author-firstname', T.any, null)
    .named('author-surname', T.any, null)
    .named('back-matter', T.content, [])
    .named('binding-correction', T.any, null)
    .named('colored-links', T.any, null)
    .named('draft', T.any, null)
    .named('format', T.any, null)
    .named('front-matter', T.content, [])
    .named('heading-numbering-depth', T.any, null)
    .named('lang', T.any, null)
    .named('margin-preset', T.any, null)
    .named('serif-headings', T.any, null)
    .named('title', T.content, [])
    .named('title-page', T.any, null)
    .returns(T.any)
    .external(thesis)
  const doctoralTitlePage_with = define('with')
    .named('author-male', T.any, null)
    .named('author-title', T.any, null)
    .named('department', T.any, null)
    .named('doc-degree', T.any, null)
    .named('doc-degree-f', T.any, null)
    .named('status-approved', T.any, null)
    .named('university-genitive', T.any, null)
    .returns(T.any)
    .external(doctoralTitlePage)
  return doc(
    importPackage('@preview/kinetic-kit:0.2.1', [doctoralTitlePage, thesis]),
    show(
      thesis_with({
        format: 'a5',
        lang: 'en',
        authorFirstname: 'Vorname',
        authorSurname: 'Nachname',
        title: inline`Titel der Arbeit`,
        titlePage: doctoralTitlePage_with({
          authorTitle: 'M.Sc.',
          authorMale: true,
          docDegree: 'Doktors der Ingenieurwissenschaften (Dr.-Ing.)',
          docDegreeF: 'Doktorin der Ingenieurwissenschaften (Dr.-Ing.)',
          department: 'KIT-Fakultät für Maschinenbau',
          universityGenitive: 'des Karlsruher Instituts für Technologie (KIT)',
          statusApproved: false,
        }),
        frontMatter: blocks(
          inline(
            contentBlock(
              blocks(
                m.lines(
                  set(text, { lang: 'de' }),
                  m.heading(1, 'Kurzfassung'),
                  'Hier steht die deutsche Kurzfassung. Sie fasst Fragestellung, Methodik, wichtigste Ergebnisse und Schlussfolgerung zusammen.',
                ),
              ),
            ),
          ),
          m.lines(
            m.heading(1, 'Abstract'),
            'Here should be your English abstract. It summarizes the research question, methodology, key results, and conclusion.',
          ),
          inline(outline()),
        ),
        backMatter: blocks(
          inline(
            outline({ target: where(figure, { kind: image }) }),
            space,
            outline({ target: where(figure, { kind: table }) }),
          ),
          inline(bibliography({ style: 'ieee' }, path('refs.bib'))),
        ),
        serifHeadings: false,
        headingNumberingDepth: 3,
        marginPreset: 'short',
        bindingCorrection: mm(0),
        coloredLinks: true,
        draft: false,
      }),
    ),
    includeFile('guide.typ'),
  )
}
