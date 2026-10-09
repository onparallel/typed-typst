// Converted from test/universe/corpus/habaneraa-one-page-resume-zh.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  blocks,
  call,
  define,
  doc,
  emph,
  importPackage,
  inline,
  let_,
  link,
  m,
  pt,
  raw,
  rgb,
  space,
  strong,
  underline,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const setupStyles = define('setup-styles')
    .named('accent-color', T.any, null)
    .named('element-spaciness', T.any, null)
    .named('font-size', T.any, null)
    .returns(T.any)
    .external()
  const [patternDecl, [resumeHeader, resumeEntry]] = let_(
    ['resume-header', 'resume-entry'],
    setupStyles({ accentColor: rgb('#179299'), fontSize: pt(12), elementSpaciness: 1.3 }),
  )
  return doc(
    importPackage('@preview/habaneraa-one-page-resume-zh:0.1.0', [setupStyles]),
    patternDecl,
    unsafeRaw.markup`#show: resume-header.with(
  author: "你的名字",
  basic-info: ([求职意向 / 学历 / 政治面貌 / 性别年龄籍贯等],),
  telephone: "138-0000-0000",
  email: "you@example.com",
  github-id: "your-id",
)`,
    m.lines(
      m.heading(1, '小节标题'),
      inline(
        call(
          resumeEntry,
          { title: '第一个简历项', subtitle: '文本1', date: '文本2' },
          blocks(
            m.list(
              m.item(['这是一个基于 Typst 的中文简历模板']),
              m.item(['极简，自由书写，轻松排版，高度定制']),
              m.item([
                '多种文本样式：',
                emph(inline`强调`),
                space,
                ';',
                space,
                strong(inline`高亮`),
                space,
                ';',
                space,
                raw('monospaced'),
                space,
                ';',
                space,
                underline(inline`下划线`),
                space,
                ';',
                space,
                link('https://github.com', inline`超链接`),
              ]),
            ),
          ),
        ),
      ),
    ),
  )
}
