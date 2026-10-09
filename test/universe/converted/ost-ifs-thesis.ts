// Converted from test/universe/corpus/ost-ifs-thesis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  define,
  doc,
  external,
  figure,
  image,
  importFile,
  importPackage,
  includeFile,
  inline,
  m,
  outline,
  path,
  raw,
  show,
  table,
  where,
} from '../../../src/index.ts'

export default () => {
  const appendix = external('appendix')
  const template = external('template')
  const toc = external('toc')
  const docTitle = external('doc-title')
  const docSubtitle = external('doc-subtitle')
  const docAuthors = external('doc-authors')
  const docAdvisor = external('doc-advisor')
  const docCoAdvisor = external('doc-co-advisor')
  const docExpert = external('doc-expert')
  const docThesisType = external('doc-thesis-type')
  const template_with = define('with')
    .named('advisor', T.any, null)
    .named('authors', T.any, null)
    .named('co-advisor', T.any, null)
    .named('expert', T.any, null)
    .named('lang', T.any, null)
    .named('subtitle', T.any, null)
    .named('thesis-type', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(template)
  return doc(
    m.lines(
      importPackage('@preview/ost-ifs-thesis:1.0.0', [appendix, template, toc]),
      importFile('meta.typ', [docTitle, docSubtitle, docAuthors, docAdvisor, docCoAdvisor, docExpert, docThesisType]),
    ),
    show(
      template_with({
        title: docTitle,
        subtitle: docSubtitle,
        authors: docAuthors,
        advisor: docAdvisor,
        coAdvisor: docCoAdvisor,
        expert: docExpert,
        thesisType: docThesisType,
        lang: 'en',
      }),
    ),
    includeFile('chapters/00_Preliminary.typ'),
    show(toc),
    m.lines(
      includeFile('chapters/01_Introduction.typ'),
      includeFile('chapters/02_StateOfTheArt.typ'),
      includeFile('chapters/03_Requirements.typ'),
      includeFile('chapters/04_Design.typ'),
      includeFile('chapters/05_Implementation.typ'),
      includeFile('chapters/06_QualityAssurance.typ'),
      includeFile('chapters/07_Evaluation.typ'),
      includeFile('chapters/08_Conclusion.typ'),
    ),
    show(appendix),
    m.lines(includeFile('chapters/A_ProjectManagement.typ'), includeFile('chapters/B_PersonalReflection.typ')),
    m.lines(m.heading(1, 'Figures'), inline(outline({ title: null, target: where(figure, { kind: image }) }))),
    m.lines(m.heading(1, 'Tables'), inline(outline({ title: null, target: where(figure, { kind: table }) }))),
    m.lines(m.heading(1, 'Listings'), inline(outline({ title: null, target: where(figure, { kind: raw }) }))),
    m.lines(m.heading(1, 'Bibliography'), inline(bibliography({ title: null, style: 'ieee' }, path('refs.yaml')))),
  )
}
