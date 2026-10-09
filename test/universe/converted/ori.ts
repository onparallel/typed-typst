// Converted from test/universe/corpus/ori.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  datetime,
  define,
  doc,
  external,
  figure,
  heading,
  importPackage,
  inline,
  label,
  labelled,
  lineSpace,
  link,
  m,
  math,
  pct,
  raw,
  rect,
  ref,
  set,
  show,
  space,
  strong,
  sym,
} from '../../../src/index.ts'

export default () => {
  const numbly = define('numbly').pos('arg1', T.any).named('default', T.any, null).returns(T.any).external()
  const ori = external('ori')
  const threeLineTable = define('three-line-table').pos('arg1', T.content).returns(T.any).external()
  const md = define('md').pos('arg1', T.any).returns(T.any).external()
  const definition = define('definition').pos('arg1', T.content).named('title', T.any, null).returns(T.any).external()
  const theorem = define('theorem').pos('arg1', T.content).named('title', T.any, null).returns(T.any).external()
  const lemma = define('lemma').pos('arg1', T.content).returns(T.any).external()
  const proposition = define('proposition').pos('arg1', T.content).returns(T.any).external()
  const emphBlock = define('emph-block').pos('arg1', T.content).returns(T.any).external()
  const quoteBlock = define('quote-block').pos('arg1', T.content).returns(T.any).external()
  const remarkBlock = define('remark-block').pos('arg1', T.content).returns(T.any).external()
  const noteBlock = define('note-block').pos('arg1', T.content).returns(T.any).external()
  const tipBlock = define('tip-block').pos('arg1', T.content).returns(T.any).external()
  const importantBlock = define('important-block').pos('arg1', T.content).returns(T.any).external()
  const warningBlock = define('warning-block').pos('arg1', T.content).returns(T.any).external()
  const cautionBlock = define('caution-block').pos('arg1', T.content).returns(T.any).external()
  const ori_with = define('with')
    .named('author', T.any, null)
    .named('date', T.any, null)
    .named('semester', T.any, null)
    .named('subject', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(ori)
  return doc(
    importPackage('@preview/ori:0.2.5', [
      numbly,
      ori,
      threeLineTable,
      md,
      definition,
      theorem,
      lemma,
      proposition,
      emphBlock,
      quoteBlock,
      remarkBlock,
      noteBlock,
      tipBlock,
      importantBlock,
      warningBlock,
      cautionBlock,
    ]),
    m.lines(
      set(heading, { numbering: numbly({ default: '1.1  ' }, '{1:一}、') }),
      set(math.equation, { numbering: '(1)' }),
    ),
    show(
      ori_with({
        title: '文档标题',
        author: '作者',
        subject: 'Ori in Typst',
        semester: '2025 春',
        date: datetime.today(),
      }),
    ),
    m.heading(1, '快速开始'),
    '要开始使用此模板，你需要',
    m.enum(
      { tight: false },
      m.item(
        m.lines(
          '安装必须的字体包，包括：',
          m.list(
            m.item([link('https://github.com/IBM/plex', inline(strong(inline`IBM Plex Sans, Mono`)))]),
            m.item([link('https://github.com/notofonts/noto-cjk', inline(strong(inline`Noto Serif CJK SC`)))]),
          ),
        ),
      ),
      m.item([
        '导入模板，并在文档开头设置参数，包括标题、作者、课程或主题、学期、时间；',
        lineSpace,
        raw(
          { block: true, lang: 'typ' },
          '#import "@preview/ori:0.2.5": *\n\n#show: ori.with(\n  title: "文档标题",\n  author: "张三",\n  subject: "Ori in Typst",\n  semester: "2025 春",\n  date: datetime.today(),\n)',
        ),
      ]),
    ),
    m.heading(1, '使用'),
    m.heading(2, '特殊参数'),
    m.list(
      m.item([raw('size'), '：字体大小，默认为', space, raw('11pt'), '；']),
      m.item([raw('screen-size'), '：屏幕字体大小，默认为', space, raw('11pt'), '；']),
      m.item([raw('maketitle'), '：是否生成标题页，默认为', space, raw('false'), '；']),
      m.item([raw('makeoutline'), '：是否生成目录，默认为', space, raw('false'), '；']),
      m.item([raw('outline-depth'), '：目录的深度，默认为', space, raw('2'), '；']),
      m.item([
        raw('first-line-indent'),
        '：首行缩进，如果设置为',
        space,
        raw('auto'),
        '，则会开启自动缩进，缩进量为',
        space,
        raw('2em'),
        '；',
      ]),
      m.item([
        raw('media'),
        '：媒体类型，可选值为',
        space,
        raw('"screen"'),
        space,
        '和',
        space,
        raw('"print"'),
        '，前者边距较小，适合屏幕显示；后者边距较大，适合打印。默认值为',
        space,
        raw('"print"'),
        '；',
      ]),
      m.item([raw('lang'), '：语言，默认为', space, raw('"zh"'), '；']),
      m.item([raw('region'), '：地区，默认为', space, raw('"cn"'), '。']),
    ),
    m.heading(2, '三线表'),
    inline`基于 ${link('https://github.com/OrangeX4/typst-tablem', inline(strong(inline`Tablem 包`)))}，提供了简单好用的三线表功能，如${ref(label('three-line-table'))}。`,
    inline(
      raw(
        { block: true, lang: 'typ' },
        '#figure(\n  three-line-table[\n    | Substance             | Subcritical °C | Supercritical °C |\n    | --------------------- | -------------- | ---------------- |\n    | Hydrochloric Acid     | 12.0           | 92.1             |\n    | Sodium Myreth Sulfate | 16.6           | 104              |\n    | Potassium Hydroxide   | 24.7           | <                |\n  ],\n  caption: "三线表示例"\n) <three-line-table>',
      ),
    ),
    inline(
      labelled(
        [
          figure(
            { caption: '三线表示例' },
            threeLineTable(inline`${space}| Substance | Subcritical °C | Supercritical °C | | ${sym.dash.em}${sym.dash.em}${sym.dash.em}${sym.dash.em}${sym.dash.em}${sym.dash.em}${sym.dash.em}
| ${sym.dash.em}${sym.dash.em}${sym.dash.em}${sym.dash.em}${sym.dash.en} | ${sym.dash.em}${sym.dash.em}${sym.dash.em}${sym.dash.em}${sym.dash.em}-
| | Hydrochloric Acid | 12.0 | 92.1 | | Sodium Myreth Sulfate | 16.6 | 104 | | Potassium Hydroxide
| 24.7 | < |${space}`),
          ),
          space,
        ],
        label('three-line-table'),
      ),
    ),
    m.heading(2, 'Markdown 渲染'),
    inline`基于 ${link('https://github.com/SabrinaJewson/cmarker.typ', inline(strong(inline`Cmarker 包`)))}
和 ${link('https://github.com/mitex-rs/mitex', inline(strong(inline`MiTeX 包`)))}，支持 Markdown 渲染，包括数学公式，如：`,
    inline(
      raw(
        { block: true, lang: 'typ' },
        '#md(````markdown\n  支持 **加粗**、*斜体*、~~删除线~~、[链接](https://typst.com)、LaTeX 数学公式 $\\max_{x \\in X} f(x)$ 等 Markdown 语法。\n````)',
      ),
    ),
    inline(
      rect(
        { width: pct(100) },
        md(
          raw(
            { block: true, lang: 'markdown' },
            '  支持 **加粗**、*斜体*、~~删除线~~、[链接](https://typst.com)、LaTeX 数学公式 $\\max_{x \\in X} f(x)$ 等 Markdown 语法。',
          ),
        ),
      ),
    ),
    m.heading(2, '定理环境'),
    inline`基于 ${link('https://github.com/OrangeX4/typst-theorion', inline(strong(inline`Theorion 包`)))}，我们可以创建${ref(label('definition'))}、${ref(label('theorem'))}、${ref(label('lemma'))}
和${ref(label('proposition'))} 等定理环境。`,
    inline(
      labelled([definition({ title: 'Typst 定义' }, inline`${space}定义内容。${space}`), space], label('definition')),
    ),
    inline(labelled([theorem({ title: 'Typst 定理' }, inline`${space}定理内容。${space}`), space], label('theorem'))),
    inline(labelled([lemma(inline`${space}引理内容。${space}`), space], label('lemma'))),
    inline(labelled([proposition(inline`${space}命题内容。${space}`), space], label('proposition'))),
    inline(emphBlock(inline`${space}强调内容。${space}`)),
    inline(quoteBlock(inline`${space}引用内容。${space}`)),
    inline(remarkBlock(inline`${space}注解内容。${space}`)),
    inline(noteBlock(inline`${space}在快速浏览时也应该注意的重要信息。${space}`)),
    inline(tipBlock(inline`${space}帮助更好使用的可选建议信息。${space}`)),
    inline(importantBlock(inline`${space}为了成功使用必须了解的关键信息。${space}`)),
    inline(warningBlock(inline`${space}可能存在风险，需要立即注意的关键信息。${space}`)),
    inline(cautionBlock(inline`${space}可能带来负面后果的提醒信息。${space}`)),
    m.heading(1, '自定义'),
    m.heading(2, '标题编号'),
    inline`可以使用 ${raw('numbly')} 包设置标题编号样式：`,
    inline(raw({ block: true, lang: 'typ' }, '#set heading(numbering: numbly("{1:一}、", default: "1.1  "))')),
    inline`参数中，${raw('{*:1}')} 的 ${raw('*')} 代表标题的级别，${raw('1')} 代表标题的格式。${raw('{1:一}、')} 代表一级标题的格式为 ${raw('一、')}，并且设置了默认格式 ${raw('1.1  ')}。`,
    inline`${strong(inline`注意`)}，本模板默认去除了标题 numbering 后的空格，所以在设置标题编号时请注意空格的使用。如 ${raw('"1.1  "')} 的末尾有两个空格，这样在标题编号后会有两个空格。`,
    m.heading(2, '字体'),
    inline`先在终端 / 命令行输入 ${raw({ lang: 'bash' }, 'typst fonts')} 查看当前可用的字体，以在文档开头加入 ${raw('font')} 参数修改字体设置以及使用的字体：`,
    inline(
      raw(
        { block: true, lang: 'typ' },
        '#let font = (\n  main: "IBM Plex Sans",\n  mono: "IBM Plex Mono",\n  cjk: "Noto Serif SC",\n  emph-cjk: "KaiTi",\n  math: "New Computer Modern Math",\n  math-cjk: "Noto Serif SC",\n)\n\n#show: ori.with(\n  // ... 保持原有的参数\n  font: font,\n)',
      ),
    ),
  )
}
