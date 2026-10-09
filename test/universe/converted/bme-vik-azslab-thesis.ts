// Converted from test/universe/corpus/bme-vik-azslab-thesis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  codeBlock,
  define,
  doc,
  external,
  fr,
  horizon,
  importPackage,
  includeFile,
  inline,
  let_,
  m,
  path,
  pt,
  set,
  show,
  space,
  spread,
  table,
  text,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const thesis = external('thesis')
  const frontMatter = external('front-matter')
  const mainMatter = external('main-matter')
  const backMatter = external('back-matter')
  const appendix = external('appendix')
  const genaiDeclaration = external('genai-declaration')
  const genAiNamesAll = external('gen-ai-names-all')
  const genAiPrompt = define('gen-ai-prompt').returns(T.any).external()
  const genAiAllPercentage = define('gen-ai-all-percentage').returns(T.any).external()
  const genAiAllText = define('gen-ai-all-text').returns(T.any).external()
  const thesis_with = define('with')
    .named('authors', T.any, null)
    .named('lang', T.any, null)
    .named('supervisors', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(thesis)
  const genaiDeclaration_with = define('with').pos('arg1', T.any).returns(T.any).external(genaiDeclaration)
  const genAiNamesAll_at = define('at').pos('arg1', T.any).returns(T.any).external(genAiNamesAll)
  const [langDecl, lang] = let_('lang', 'hu')
  const [genAiNamesDecl, genAiNames] = let_('gen-ai-names', genAiNamesAll_at(lang))
  return doc(
    m.lines(
      importPackage('@preview/bme-vik-azslab-thesis:1.0.0', [
        thesis,
        frontMatter,
        mainMatter,
        backMatter,
        appendix,
        genaiDeclaration,
        genAiNamesAll,
        genAiPrompt,
        genAiAllPercentage,
        genAiAllText,
      ]),
      inline(includeFile('content/guideline.typ'), space, includeFile('content/project.typ')),
    ),
    inline(langDecl),
    show(
      thesis_with({
        authors: 'Gipsz Jakab',
        lang: lang,
        supervisors: ['Dr. Első konzulens', 'Második konzulens'],
        title: 'Elektronikus Terelők',
      }),
    ),
    m.lines(show(frontMatter), includeFile('content/abstract.typ')),
    show(mainMatter),
    m.lines(
      includeFile('content/introduction.typ'),
      includeFile('content/typst-tools.typ'),
      includeFile('content/thesis-format.typ'),
      includeFile('content/template-usage.typ'),
    ),
    m.lines(show(backMatter), includeFile('content/acknowledgement.typ')),
    inline(bibliography(path('bibliography/bib.bib'))),
    m.lines(show(appendix), includeFile('content/appendices.typ')),
    m.lines(show(genaiDeclaration_with(true)), inline(genAiNamesDecl)),
    inline(
      codeBlock(
        [show(table.cell, set(text, { size: pt(10) }))],
        table(
          { columns: [fr(1.3), fr(1), fr(1), fr(1)], stroke: pt(0.5), align: horizon },
          table.header(
            unsafeRaw.code<any>`gen-ai-names.titles.types`,
            unsafeRaw.code<any>`gen-ai-names.titles.names`,
            unsafeRaw.code<any>`gen-ai-names.titles.sections`,
            unsafeRaw.code<any>`gen-ai-names.titles.usage`,
          ),
          unsafeRaw.code<any>`gen-ai-names.literature`,
          inline(),
          inline(),
          inline(),
          spread(genAiPrompt()),
          unsafeRaw.code<any>`gen-ai-names.codegen`,
          inline(),
          inline(),
          inline(),
          spread(genAiPrompt()),
          unsafeRaw.code<any>`gen-ai-names.ideas`,
          inline(),
          inline(),
          inline(),
          spread(genAiPrompt()),
          unsafeRaw.code<any>`gen-ai-names.outline`,
          inline(),
          inline(),
          inline(),
          spread(genAiPrompt()),
          unsafeRaw.code<any>`gen-ai-names.textblocks`,
          inline(),
          inline(),
          inline(),
          spread(genAiPrompt()),
          unsafeRaw.code<any>`gen-ai-names.figures`,
          inline(),
          inline(),
          inline(),
          spread(genAiPrompt()),
          unsafeRaw.code<any>`gen-ai-names.plots`,
          inline(),
          inline(),
          inline(),
          spread(genAiPrompt()),
          unsafeRaw.code<any>`gen-ai-names.presentation`,
          inline(),
          inline(),
          inline(),
          spread(genAiPrompt()),
          unsafeRaw.code<any>`gen-ai-names.others`,
          inline(),
          inline(),
          inline(),
          spread(genAiPrompt()),
          spread(genAiAllPercentage()),
          genAiAllText(),
        ),
      ),
    ),
  )
}
