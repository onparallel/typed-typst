// Converted from test/universe/corpus/gakusyun-doc.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  cm,
  datetime,
  define,
  doc,
  external,
  importPackage,
  inline,
  link,
  m,
  raw,
  show,
  space,
} from '../../../src/index.ts'

export default () => {
  const docu = external('docu')
  const en = define('en').pos('arg1', T.any).returns(T.any).external()
  const docu_with = define('with')
    .named('author', T.any, null)
    .named('blank-page', T.any, null)
    .named('cjk-font', T.any, null)
    .named('column', T.any, null)
    .named('column-of-index', T.any, null)
    .named('date', T.any, null)
    .named('default-size', T.any, null)
    .named('depth-of-index', T.any, null)
    .named('emph-cjk-font', T.any, null)
    .named('index-page', T.any, null)
    .named('lang', T.any, null)
    .named('latin-font', T.any, null)
    .named('margin', T.any, null)
    .named('mono-font', T.any, null)
    .named('numbering', T.any, null)
    .named('paper', T.any, null)
    .named('region', T.any, null)
    .named('show-index', T.any, null)
    .named('show-title', T.any, null)
    .named('subtitle', T.any, null)
    .named('title', T.any, null)
    .named('title-page', T.any, null)
    .returns(T.any)
    .external(docu)
  return doc(
    importPackage('@preview/gakusyun-doc:1.0.0', [docu, en]),
    show(
      docu_with({
        title: '伽库噚文字模板',
        subtitle: '仅适用于演示',
        author: 'Gakusyun',
        showTitle: true,
        titlePage: false,
        blankPage: true,
        showIndex: true,
        indexPage: false,
        columnOfIndex: 1,
        depthOfIndex: 2,
        cjkFont: 'Source Han Serif',
        emphCjkFont: 'FandolKai',
        latinFont: 'New Computer Modern',
        monoFont: 'Maple Mono NF',
        defaultSize: '小四',
        lang: 'zh',
        region: 'cn',
        paper: 'a4',
        margin: { left: cm(1.5), right: cm(1.5), top: cm(1.5), bottom: cm(1.5) },
        date: datetime.today().display('[year]年[month]月[day]日'),
        numbering: '第1页 共1页',
        column: 2,
      }),
    ),
    m.heading(1, '伽库噚文字模板'),
    '这是一个基于Typst的文档模板，支持高度自定义的排版样式。',
    m.heading(1, '主要特点'),
    m.list(m.item(['可自定义字体']), m.item(['自动生成目录']), m.item(['响应式布局']), m.item(['支持超链接'])),
    m.heading(1, '使用方法'),
    m.heading(2, '中文排版'),
    '直接输入中文即可，模板会自动处理中文排版格式，包括首行缩进等。',
    m.heading(2, '英文排版'),
    inline`对于大段英文文字，建议使用 ${raw('#en()')} 函数来确保正确的排版：`,
    inline(raw({ block: true, lang: 'typst' }, '#en("This is an example of English text with proper formatting.")')),
    inline`效果为：
${en('This is an example of English text with proper formatting.')}`,
    m.heading(2, '字体自定义'),
    '您可以在文档开头修改以下参数来自定义字体：',
    inline(
      raw(
        { block: true, lang: 'typst' },
        '#let cjk-font = "你的中文字体"\n#let emph-cjk-font = "你的强调中文字体"\n#let latin-font = "你的西文字体"\n#let mono-font = "你的等宽字体"',
      ),
    ),
    m.heading(2, '超链接'),
    '模板支持超链接，使用斜体加下划线样式：',
    inline(link('https://bilibili.com', inline`BiliBili`), space, link('https://ys.mihoyo.com', inline`原神`)),
    m.heading(2, '代码显示'),
    inline`使用反引号显示 ${raw('inline code')}，或者使用代码块：`,
    inline(raw({ block: true, lang: 'typst' }, '// 这是一个代码块示例\n#let example = "Hello, Typst!"')),
    m.heading(1, '自定义选项'),
    inline`模板支持多种自定义选项，您可以在 ${raw('show: docu.with()')} 中修改：`,
    m.list(
      m.item([raw('title-page'), ': 是否创建独立标题页']),
      m.item([raw('blank-page'), ': 标题页后是否添加空白页']),
      m.item([raw('show-index'), ': 是否显示目录']),
      m.item([raw('column'), ': 正文列数（1或2）']),
      m.item([raw('paper'), ': 纸张大小（a4, a5, letter等）']),
      m.item([raw('default-size'), ': 默认字号']),
    ),
  )
}
