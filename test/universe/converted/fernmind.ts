// Converted from test/universe/corpus/fernmind.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  define,
  doc,
  emph,
  importPackage,
  inline,
  link,
  m,
  quote,
  raw,
  show,
  space,
  strong,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const lightmind = define('lightmind')
    .pos('arg1', T.any)
    .named('allow-page-breaks', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external()
  const frontmatter = define('frontmatter')
    .named('author', T.any, null)
    .named('date', T.any, null)
    .named('tags', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external()
  const mark = define('mark').pos('arg1', T.content).returns(T.any).external()
  const kbd = define('kbd').pos('arg1', T.content).returns(T.any).external()
  const task = define('task').pos('arg1', T.content).named('checked', T.any, null).returns(T.any).external()
  return doc(
    importPackage('@preview/fernmind:0.1.0', [lightmind, frontmatter, mark, kbd, task]),
    show((doc_2, ctx) => lightmind({ title: 'Lightmind 主题文档', allowPageBreaks: false }, doc_2)),
    inline(frontmatter({ title: 'Lightmind 主题文档', author: '作者', date: '2026-05-06', tags: ['示例', '主题'] })),
    m.heading(1, '一级标题'),
    inline`这是正文。${strong(inline`加粗`)}、${emph(inline`斜体`)}、${raw('行内代码')}、${kbd(inline`Ctrl`)} + ${kbd(inline`P`)}、${mark(inline`高亮文本`)}
以及[链接](${link('https://typst.app')})。`,
    m.heading(2, '二级标题'),
    m.list(m.item(['列表项一']), m.item(m.lines('列表项二', m.list(m.item(['嵌套列表项']))))),
    inline(task({ checked: true }, inline`已完成任务`), space, task({ checked: false }, inline`待办任务`)),
    inline(quote({ attribution: 'tip' }, inline`${space}主色绿。用于实用建议、最佳实践。${space}`)),
    inline(quote({ attribution: 'caution' }, inline`${space}砖红调。危险操作或破坏性变更。${space}`)),
    inline(quote(inline`${space}普通引用块。${space}`)),
    inline(
      raw(
        { block: true, lang: 'rust' },
        'fn main() {\n    let vibe = "Mountain Forest";\n    println!("Welcome to {}", vibe);\n}',
      ),
    ),
    inline(unsafeRaw.math.block`E = m c^2`),
  )
}
