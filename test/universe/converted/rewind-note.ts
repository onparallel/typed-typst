// Converted from test/universe/corpus/rewind-note.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  define,
  doc,
  external,
  highlight,
  importPackage,
  inline,
  link,
  m,
  raw,
  show,
  space,
  strong,
} from '../../../src/index.ts'

export default () => {
  const rewindTheme = external('rewind-theme')
  const serifFonts = external('serif-fonts')
  const cover = define('cover')
    .named('author', T.any, null)
    .named('subtitle', T.content, [])
    .named('title', T.content, [])
    .returns(T.any)
    .external()
  const rewindTheme_with = define('with').named('font-family', T.any, null).returns(T.any).external(rewindTheme)
  return doc(
    importPackage('@preview/rewind-note:0.1.0', [rewindTheme, serifFonts, cover]),
    show(rewindTheme_with({ fontFamily: serifFonts })),
    inline(
      cover({
        title: inline`这是一篇使用${highlight(inline`Typst`)}写的小红书笔记`,
        subtitle: inline`Typst 小红书模板`,
        author: '@reina',
      }),
    ),
    m.heading(1, '什么是 Typst？'),
    inline`Typst 是一款新兴的排版系统，被称为 ${highlight(inline`LaTeX 的现代替代品`)}。它由两位德国开发者创建，目标是解决 LaTeX 学习曲线陡峭、编译速度慢的问题。`,
    '如果你曾经被 LaTeX 的报错信息折磨过，或者等待编译等到怀疑人生，那 Typst 绝对值得一试。',
    m.heading(2, '为什么选择 Typst？'),
    m.enum(
      { tight: false },
      m.numbered(1, [strong(inline`编译速度超快`), '：增量编译，实时预览，告别漫长等待。改一个字，瞬间看到效果。']),
      m.numbered(2, [strong(inline`语法简洁直观`), '：比 LaTeX 更易学，比 Markdown 更强大。上手只需要几分钟。']),
      m.numbered(3, [strong(inline`错误提示友好`), '：不再面对一堆看不懂的报错信息。Typst 会告诉你哪里错了、怎么改。']),
      m.numbered(4, [strong(inline`内置脚本语言`), '：可编程的排版，自定义无限可能。想要什么样式，自己写就行。']),
      m.numbered(5, [strong(inline`现代化工具链`), '：原生支持包管理、在线编辑、协作功能。']),
    ),
    m.heading(2, 'Typst vs LaTeX'),
    'LaTeX 诞生于 1984 年，历史悠久但语法繁琐。写一个简单的文档都需要记住大量的命令和包。',
    'Typst 吸取了现代编程语言的优点，让排版变得像写代码一样优雅。语法设计参考了 Rust、Python 等现代语言。',
    m.heading(3, '语法对比'),
    inline`LaTeX 写个加粗：${raw('\\textbf{加粗}')}`,
    inline`Typst 写个加粗：${raw('*加粗*')}`,
    'LaTeX 插入图片：',
    inline(
      raw(
        { block: true, lang: 'latex' },
        '\\begin{figure}\n  \\includegraphics{img.png}\n  \\caption{图片标题}\n\\end{figure}',
      ),
    ),
    'Typst 插入图片：',
    inline(raw({ block: true, lang: 'typst' }, '#figure(\n  image("img.png"),\n  caption: [图片标题]\n)')),
    '简单，直接，符合直觉。',
    m.heading(3, '编译速度'),
    'LaTeX 编译一个 100 页的文档可能需要几十秒甚至几分钟。',
    'Typst 编译同样的文档只需要毫秒级别。而且支持增量编译，只重新渲染改动的部分。',
    m.heading(2, 'Typst 的生态'),
    '虽然 Typst 还很年轻，但生态发展迅速：',
    m.list(
      m.item([strong(inline`Typst Universe`), '：官方包管理平台，已有数百个社区包']),
      m.item([
        strong(inline`在线编辑器`),
        '：',
        link('https://typst.app', inline`typst.app`),
        space,
        '提供免费的在线编辑环境',
      ]),
      m.item([strong(inline`Tinymist`), '：强大的 LSP 实现，为 VS Code / Neovim 等编辑器提供智能补全、实时预览']),
      m.item([strong(inline`中文支持`), '：原生支持 CJK 字符，不需要额外配置']),
    ),
    m.heading(1, '关于这个模板'),
    inline`这是一个专为 ${highlight(inline`小红书风格`)} 设计的 Typst 模板。`,
    '为什么要做这个模板？因为小红书的图文笔记很火，但每次都要用设计软件排版太麻烦了。有了这个模板，直接写 Typst 代码就能生成精美的小红书风格图片。',
    m.heading(2, '特性一览'),
    m.list(
      m.item(['📐', space, strong(inline`标准比例`), '：3:5 小红书画布尺寸']),
      m.item(['🎨', space, strong(inline`可配置主题`), '：字体、颜色、间距随心调']),
      m.item(['📝', space, strong(inline`标题装饰`), '：自动美化的多级标题样式']),
      m.item(['🖼️', space, strong(inline`封面组件`), '：一行代码生成精美封面']),
      m.item(['💻', space, strong(inline`代码高亮`), '：深色背景的代码块样式']),
      m.item(['✨', space, strong(inline`高亮文本`), '：小红书风格的黄色高亮']),
    ),
    m.heading(2, '模板结构'),
    inline(
      raw(
        { block: true },
        'typst-rednote/\n├── lib.typ           # 统一导出入口\n├── core/\n│   └── constants.typ # 字体、颜色等常量\n└── themes/\n    ├── rednote.typ   # 主题函数\n    ├── cover.typ     # 封面组件\n    └── styles.typ    # 标题和代码样式',
      ),
    ),
    m.heading(2, '如何使用？'),
    m.heading(3, '基础用法'),
    inline(raw({ block: true, lang: 'typst' }, '#import "lib.typ": *\n\n#show: rednote-theme\n\n= 标题\n正文内容...')),
    m.heading(3, '自定义配置'),
    inline(
      raw(
        { block: true, lang: 'typst' },
        '#show: rednote-theme.with(\n  font-family: serif-fonts,\n  bg-color: rgb("#fff0f0"),\n  accent-color: rgb("#ff6b6b"),\n)',
      ),
    ),
    m.heading(3, '添加封面'),
    inline(
      raw(
        { block: true, lang: 'typst' },
        '#cover(\n  image-content: image("cover.png"),\n  title: "你的标题",\n  subtitle: "副标题",\n  author: "@你的ID",\n)',
      ),
    ),
    m.heading(2, '可配置参数'),
    m.list(
      m.item([raw('font-family'), '：字体族，默认无衬线']),
      m.item([raw('bg-color'), '：背景色，默认米白色']),
      m.item([raw('text-color'), '：文字颜色，默认深灰']),
      m.item([raw('highlight-color'), '：高亮色，默认浅黄']),
      m.item([raw('accent-color'), '：强调色，默认小红书红']),
    ),
    m.heading(1, '写在最后'),
    'Typst 代表了排版工具的未来方向：简洁、快速、现代。',
    '如果你厌倦了 LaTeX 的繁琐，又觉得 Word 不够专业，不妨试试 Typst。',
    '这个小红书模板只是一个开始，希望能帮助更多人发现 Typst 的魅力。',
    m.heading(2, '相关链接'),
    m.list(
      m.item(['Typst 官网：', link('https://typst.app')]),
      m.item(['Tinymist：', link('https://github.com/Myriad-Dreamin/tinymist')]),
      m.item(['本模板仓库：', link('https://github.com/ri-nai/typst-rednote')]),
    ),
    m.heading(2, '致谢'),
    '感谢以下项目的启发和帮助：',
    m.list(
      m.item([link('https://typst.app', inline`Typst`), space, '- 让排版变得简单']),
      m.item([link('https://github.com/Myriad-Dreamin/tinymist', inline`Tinymist`), space, '- 优秀的 Typst LSP']),
      m.item([link('https://github.com/typst/packages', inline`Typst Packages`), space, '- 丰富的社区生态']),
    ),
    '快来试试吧 ✨',
  )
}
