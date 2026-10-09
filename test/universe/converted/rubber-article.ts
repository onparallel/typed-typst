// Converted from test/universe/corpus/rubber-article.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  cm,
  colbreak,
  columns,
  datetime,
  define,
  doc,
  external,
  figure,
  importPackage,
  inches,
  inline,
  lorem,
  m,
  rect,
  show,
  space,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const article = external('article')
  const maketitle = define('maketitle')
    .named('authors', T.any, null)
    .named('date', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external()
  const vspace = external('vspace')
  const shortcap = define('shortcap').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const balance = define('balance').pos('arg1', T.any).returns(T.any).external()
  const ctable = define('ctable')
    .pos('arg1', T.content)
    .pos('arg2', T.content)
    .pos('arg3', T.content)
    .pos('arg4', T.any)
    .named('cols', T.any, null)
    .returns(T.any)
    .external()
  const appendix = external('appendix')
  const figOutline = define('fig-outline').returns(T.any).external()
  const tabOutline = define('tab-outline').returns(T.any).external()
  const article_with = define('with')
    .named('cols', T.any, null)
    .named('eq-chapterwise', T.any, null)
    .named('eq-numbering', T.any, null)
    .named('header-display', T.any, null)
    .named('header-title', T.any, null)
    .named('lang', T.any, null)
    .named('page-margins', T.any, null)
    .named('page-paper', T.any, null)
    .returns(T.any)
    .external(article)
  const appendix_with = define('with').named('title', T.any, null).returns(T.any).external(appendix)
  return doc(
    importPackage('@preview/rubber-article:0.5.2', [
      article,
      maketitle,
      vspace,
      shortcap,
      balance,
      ctable,
      appendix,
      figOutline,
      tabOutline,
    ]),
    show(
      article_with({
        cols: null,
        eqChapterwise: true,
        eqNumbering: '(1.1)',
        headerDisplay: true,
        headerTitle: 'The Title of the Paper',
        lang: 'en',
        pageMargins: inches(1.75),
        pagePaper: 'us-letter',
      }),
    ),
    inline(
      maketitle({
        title: 'The Title of the Paper',
        authors: ['Authors Name'],
        date: datetime.today().display('[day]. [month repr:long] [year]'),
      }),
    ),
    m.lines(m.heading(1, 'Introduction'), inline`${lorem(50)} Here is the paragraph spacing with default settings.`),
    inline`${lorem(60)} Here the vspace function is used to add some space between paragraphs on demand
to`,
    inline(
      vspace,
      space,
      lorem(100),
      space,
      unsafeRaw.math.block`x_(1,2) = (-b plus.minus sqrt(b^2 - 4 a c))/ (2 a)`,
      space,
      lorem(100),
    ),
    m.lines(m.heading(2, 'In this paper'), inline(lorem(70))),
    inline(
      figure(
        { caption: shortcap(inline`A short caption of the image`, inline(lorem(30))) },
        rect({ width: cm(4), height: cm(3) }),
      ),
    ),
    inline(lorem(20)),
    m.lines(m.heading(3, 'Contributions'), inline(lorem(40))),
    inline(lorem(40)),
    m.lines(m.heading(1, 'Related Work'), inline(balance(columns(2, inline(lorem(200)))))),
    inline(unsafeRaw.math.block`y = k x + d`, space, lorem(50)),
    inline(
      figure(
        { caption: shortcap('Short caption', 'This is a custom table') },
        unsafeRaw.code<any>`ctable(cols: "l|cr", [A], [B], [C], ..range(1, 16).map(str))`,
      ),
    ),
    inline(colbreak(), space, show(appendix_with({ title: 'Appendix' }))),
    m.lines(m.heading(1, 'Appendix 1'), inline(lorem(35))),
    m.lines(m.heading(2, 'Some more details'), inline(lorem(20))),
    inline(figOutline(), space, tabOutline()),
  )
}
