// Converted from test/universe/corpus/minimal-unilim-thesis.typ by scripts/convert-suite.ts — do not edit.
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
  let_,
  m,
  par,
  path,
  pt,
  set,
  show,
  space,
  text,
  yaml,
} from '../../../src/index.ts'

export default () => {
  const title_2 = external('title')
  const unilimThesisTemplate = external('unilim-thesis-template')
  const unilimThesisTemplate_with = define('with')
    .pos('arg1', T.any)
    .pos('arg2', T.any)
    .pos('arg3', T.any)
    .pos('arg4', T.any)
    .pos('arg5', T.any)
    .pos('arg6', T.any)
    .pos('arg7', T.any)
    .pos('arg8', T.any)
    .pos('arg9', T.any)
    .returns(T.any)
    .external(unilimThesisTemplate)
  const [epigraDecl, epigra] = let_('epigra', {
    citation: inline`${space}Security is a state of mind, not a product.${space}`,
    author: inline`${space}Edward Snowden${space}`,
  })
  const [acknowDecl, acknow] = let_('acknow', includeFile('parts/acknowlegments.typ'))
  const [introDecl, intro] = let_('intro', includeFile('parts/introduction.typ'))
  const [myContentDecl, myContent] = let_('my-content', includeFile('parts/content.typ'))
  const [conclusionDecl, conclusion] = let_('conclusion', includeFile('parts/conclusion.typ'))
  const [glossaryDecl, glossary] = let_('glossary', includeFile('parts/glossary.typ'))
  const [appendixDecl, appendix] = let_('appendix', includeFile('parts/appendix.typ'))
  const [dataDecl, data_2] = let_('data', yaml(path('./template.yml')))
  const [biblioDecl, biblio] = let_('biblio', bibliography({ title: null }, path('my-biblio.bib')))
  return doc(
    importPackage('@preview/minimal-unilim-thesis:0.1.1', [title_2, unilimThesisTemplate]),
    m.lines(set(par, { justify: true }), set(text, { font: 'Arial', size: pt(14) }), epigraDecl),
    m.lines(acknowDecl, introDecl, myContentDecl, conclusionDecl, glossaryDecl, appendixDecl, dataDecl),
    biblioDecl,
    show(unilimThesisTemplate_with(data_2, epigra, acknow, intro, myContent, conclusion, biblio, glossary, appendix)),
  )
}
