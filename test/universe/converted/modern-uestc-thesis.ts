// Converted from test/universe/corpus/modern-uestc-thesis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  blocks,
  counter,
  define,
  doc,
  external,
  importPackage,
  includeFile,
  inline,
  let_,
  m,
  page,
  pagebreak,
  path,
  show,
  space,
} from '../../../src/index.ts'

export default () => {
  const globalConf = external('global-conf')
  const declaration = define('declaration').returns(T.any).external()
  const abstract = define('abstract')
    .named('abstract-cn', T.any, null)
    .named('abstract-en', T.any, null)
    .named('keywords', T.content, [])
    .named('keywords-en', T.content, [])
    .returns(T.any)
    .external()
  const toc = define('toc').returns(T.any).external()
  const listOfFigures = define('list-of-figures').returns(T.any).external()
  const listOfTables = define('list-of-tables').returns(T.any).external()
  const acknowledgements = define('acknowledgements').named('content', T.content, []).returns(T.any).external()
  const references = define('references').pos('arg1', T.any).returns(T.any).external()
  const globalConf_with = define('with')
    .named('author', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(globalConf)
  const [abstract_cnDecl, abstract_cn] = let_('abstract_cn', inline`${space}这是中文摘要${space}`)
  const [abstract_enDecl, abstract_en] = let_('abstract_en', inline`This is English Abstract${space}`)
  return doc(
    importPackage('@preview/modern-uestc-thesis:1.0.0', [
      globalConf,
      declaration,
      abstract,
      toc,
      listOfFigures,
      listOfTables,
      acknowledgements,
      references,
    ]),
    show(globalConf_with({ title: '论文标题', author: 'Devin' })),
    inline(declaration()),
    m.lines(abstract_cnDecl, abstract_enDecl),
    inline(
      abstract({
        abstractCn: abstract_cn,
        keywords: inline`关键词1，关键词2，关键词3`,
        abstractEn: abstract_en,
        keywordsEn: inline`Keywords1, Keywords2, Keywords3`,
      }),
    ),
    inline(toc()),
    inline(listOfFigures()),
    inline(listOfTables()),
    inline(counter(page).update(1)),
    m.lines(
      includeFile('chapters/chapter1.typ'),
      inline(
        pagebreak(),
        space,
        includeFile('chapters/chapter2.typ'),
        space,
        pagebreak(),
        space,
        includeFile('chapters/chapter3.typ'),
        space,
        pagebreak(),
        space,
        includeFile('./chapters/chapter4.typ'),
      ),
    ),
    inline(
      acknowledgements({
        content: blocks(
          '感谢我的导师在研究过程中给予的悉心指导和帮助。导师渊博的学识、严谨的治学态度和宽广的视野给我留下了深刻的印象，对我的学术成长有着深远的影响。',
          '感谢课题组的所有老师和同学们在研究过程中给予的宝贵建议和热心帮助。',
          '感谢D公司提供的研究数据和调研机会，感谢公司相关负责人在实地调研过程中给予的支持和帮助。',
          '最后，感谢我的家人在攻读硕士学位期间给予的理解、鼓励和支持，让我能够全身心投入到学习和研究中。',
        ),
      }),
    ),
    inline(
      references(bibliography({ title: inline`参考文献`, style: 'gb-7714-2015-numeric' }, path('references.bib'))),
    ),
    includeFile('./chapters/appendix.typ'),
  )
}
