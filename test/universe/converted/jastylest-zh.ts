// Converted from test/universe/corpus/jastylest-zh.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  call,
  define,
  doc,
  emph,
  external,
  importPackage,
  inline,
  let_,
  link,
  m,
  outline,
  raw,
  show,
  space,
  strong,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const article = external('article')
  const template = define('template')
    .named('author', T.any, null)
    .named('code-font-size', T.any, null)
    .named('font-size', T.any, null)
    .named('office', T.content, [])
    .named('title', T.content, [])
    .returns(T.any)
    .external()
  const noindent = define('noindent').pos('arg1', T.content).returns(T.any).external()
  const zh = define('zh').pos('arg1', T.any).returns(T.any).external()
  const zihao = external('zihao')
  const removeCjkBreakSpace = external('remove-cjk-break-space')
  const [patternDecl, [article_2, textsf]] = let_(
    ['article', 'textsf'],
    template({
      fontSize: zh(-4),
      codeFontSize: zh(-5),
      title: inline`jastylest-zh使用说明`,
      office: inline`天朝理工大学 中文排版专业`,
      author: 'Mike Unknown',
    }),
  )
  return doc(
    m.lines(
      importPackage('@preview/jastylest-zh:0.1.2', [article, template, noindent]),
      inline(
        importPackage('@preview/pointless-size:0.1.1', [zh, zihao]),
        space,
        importPackage('@preview/cjk-unbreak:0.1.1', [removeCjkBreakSpace]),
      ),
    ),
    inline(show(removeCjkBreakSpace)),
    m.lines(patternDecl, show(article_2)),
    inline(outline()),
    m.lines(m.heading(1, '格式设定'), 'jastylest是一个日文排版模板。jastylest-zh是基于中文排版特性优化的jastylest。'),
    '样式和标题的设置在上方，可以自行更改。',
    m.lines(m.heading(2, '字体'), '默认字体为STIX Two Text/Math、Fira Sans/Mono和思源宋体/黑体。您也可以自行修改。'),
    inline(
      emph(inline`斜体的默认中文字体是 FandolKai（需自行上传），您也可以自行在上方配置中更改。Fandol系列字体可以在 ${link('https://ctan.org/pkg/fandol')}
中下载。`),
    ),
    m.lines(
      m.heading(1, '特殊功能'),
      inline`Typst在汉字和English之间插入了微小的空格。然而，行内公式${unsafeRaw.math`a b`}和汉字之间，以及行内代码${raw('ab')}和汉字之间${strong(inline`默认`)}没有任何间隙。我们实施了一种方法来避免这种情况。现在行内公式/代码与汉字之间会有微小的空格。`,
    ),
    inline`如果插入连字符，例如 ${unsafeRaw.math`beta`}-胡萝卜素，则不会出现间隙。我们还在半宽圆括号的两端添加了间隙。例如：排版(typesetting)。`,
    '我们还为中英文混排的情况优化了引号。现在你可以在西文排版中使用ASCII“智能引号”，在中文排版中用中文输入法打出引号。破折号和省略号未能被优化。',
    inline(
      call(
        textsf,
        inline`使用 ${raw({ lang: 'typ' }, '#textsf[]')} 让被括号包裹的部分使用无衬线字体。${emph(inline`在这里使用italic也可以。`)}`,
      ),
    ),
    inline(noindent(inline`使用 ${raw({ lang: 'typ' }, '#noindent[]')} 让被括号包裹的部分取消缩进。`)),
  )
}
