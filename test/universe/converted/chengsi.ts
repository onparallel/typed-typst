// Converted from test/universe/corpus/chengsi.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  bibliography,
  cite,
  define,
  doc,
  emph,
  external,
  fr,
  importFile,
  importPackage,
  inline,
  label,
  labelled,
  let_,
  link,
  m,
  path,
  raw,
  ref,
  show,
  space,
  strong,
  table,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const notes = external('notes')
  const environments = define('environments').named('config', T.any, null).returns(T.any).external()
  const config = external('config')
  const notes_with = define('with').named('config', T.any, null).returns(T.any).external(notes)
  const [demoDecl, demo] = let_(
    'demo',
    add(config, {
      title: '澄思使用手册',
      subtitle: 'Chengsi Guide',
      author: '澄思 · Chengsi',
      description: inline`用法、配色与排版的完整说明，末尾附一份示例笔记。`,
    }),
  )
  const [envDecl, env] = let_('env', environments({ config: demo }))
  const ip = define('ip')
    .pos('x', T.any)
    .pos('y', T.any)
    .returns(T.any)
    .body((p) => unsafeRaw.math`lr(chevron.l #x, #y chevron.r)`)
  return doc(
    m.lines(importPackage('@preview/chengsi:0.1.2', [notes, environments]), importFile('config.typ', [config])),
    m.lines(
      demoDecl,
      envDecl,
      unsafeRaw.markup`#let epigraph = env.epigraph`,
      unsafeRaw.markup`#let appendix = env.appendix`,
      ip.decl,
      show(notes_with({ config: demo })),
    ),
    m.heading(1, '开始使用'),
    inline(unsafeRaw.code<any>`epigraph(author: [孔子], source: [《论语·卫灵公》])[
  工欲善其事，必先利其器。
]`),
    '澄思是一份给长期书写准备的数学笔记模板。中英混排、封面与目录、定理与证明、章首题辞、代码片段、参考文献共用同一套版式，三套配色只换颜色不改规则，且不依赖任何第三方包。',
    m.heading(2, '模板有什么'),
    m.list(
      m.item(['封面、目录与页眉页码；封面不出现页码，目录用罗马数字，正文从 1 开始。']),
      m.item(['定义、定理、引理、命题、推论、例题、练习、证明、札记，共九种环境。']),
      m.item(['章首题辞：单行引文自动右对齐，需要换行时自动左对齐，支持中英对照。']),
      m.item(['代码块：语言标识、标题栏、可选行号，长代码自然跨页且行号不重置。']),
      m.item(['参考文献：数字编号、点击跳转、悬挂编号；外部链接带细下划线。']),
    ),
    inline`三种配色共享全部版式规则：字体、字号、间距、编号和分页完全一致，默认仍是原版青绿 ${raw('teal')}。`,
    m.heading(2, '初始化项目'),
    '要求 Typst 0.15.0 或更新版本。运行：',
    inline(
      raw(
        { block: true, lang: 'sh' },
        'typst init @preview/chengsi:0.1.2 my-notes\ncd my-notes\ntypst compile main.typ',
      ),
    ),
    inline`初始化之后需要你动手的只有三样：${raw('config.typ')} 填标题、作者与字体，${raw('main.typ')} 写正文，${raw('references.bib')}
管文献。`,
    m.heading(2, '最小的入口文件'),
    inline(
      raw(
        { block: true, lang: 'typst' },
        '#import "@preview/chengsi:0.1.2": notes, environments\n#let config = (title: "数学笔记", author: "你的名字", cover: false, toc: false)\n#let env = environments(config: config)\n#show: notes.with(config: config)\n\n= 实数\n#(env.theorem)(title: [平方非负])[\n  对任意 $x in RR$，有 $x^2 >= 0$。\n]',
      ),
    ),
    inline`四条语句就能得到一份可以编译的笔记：前两条取来模板与配置，第三条创建环境，第四条 ${raw('notes')} 之后才真正开始。${raw('#show: notes.with(...)')}
是分界线，之前是准备，之后是正文，目录会从这个位置往后编排。`,
    m.heading(2, '文件结构'),
    inline(
      table(
        { columns: [fr(1), fr(2.6)] },
        table.header(inline`文件 / File`, inline`作用 / Role`),
        inline(raw('main.typ')),
        inline`正文入口。章节、公式、环境的书写都在这里。`,
        inline(raw('config.typ')),
        inline`配置字典。日常只改这一个文件即可。`,
        inline(raw('references.bib')),
        inline`文献库。只有被引用过的条目才会出现在文末。`,
        inline(raw('lib.typ')),
        inline`公开入口，导出 ${raw('notes')}、${raw('environments')}、${raw('defaults')}、${raw('themes')}。`,
        inline(raw('template.typ')),
        inline`版式实现：封面、目录、页眉、标题与环境样式。`,
        inline(raw('themes.typ')),
        inline`三套配色定义，键为 ${raw('teal')}、${raw('indigo')}、${raw('sepia')}。`,
        inline(raw('styles/')),
        inline`代码高亮配色，每种主题一个 ${raw('.tmTheme')} 文件。`,
      ),
    ),
    inline`迁移模板时请把 ${raw('styles/')} 一并复制：${raw('template.typ')} 会按下沉主题读取对应的高亮文件。`,
    m.heading(2, '三个公开函数'),
    inline`${raw('notes(config: (:), body)')} 应用整体版式，${raw('environments(config: (:))')} 返回环境字典，两者应当收到同一个配置字典。此外 ${raw('defaults')}
是包默认值字典，${raw('themes')} 是以 ${raw('teal')}、${raw('indigo')}、${raw('sepia')} 为键的配色字典，需要派生自己的版本时可以直接读取。`,
    m.heading(2, '许可与署名'),
    inline`代码、主题文件、文档以及 ${raw('template/')} 中原创的示例内容采用 ${link('https://github.com/zhaozigu/typst-chengsi-template/blob/main/LICENSE', inline`MIT-0`)}
许可，可以自由使用、修改与分发，无需保留署名或许可文本。示例里明确标注来源的古典引文与书目信息不主张为本项目原创，项目也不分发第三方字体或书籍全文。`,
    m.heading(1, '常用配置'),
    inline(unsafeRaw.code<any>`epigraph(author: [老子], source: [《道德经·第二十二章》])[
  少则得，多则惑。
]`),
    inline`所有配置都写在 ${raw('config.typ')} 的一个字典里，然后用一句 ${raw('#import')} 交给模板：`,
    inline(raw({ block: true, lang: 'typst' }, '#import "config.typ": config')),
    inline`没有填写的项使用包默认值，也就是 ${raw('defaults')} 里的那一份。写错字段名会直接报错而不是被悄悄忽略——宁可编译失败，也不想一条配置静默失效。`,
    m.heading(2, '封面与目录'),
    inline`${raw('title')}、${raw('subtitle')}、${raw('description')} 决定封面的主标题、副标题与引言；${raw('author')}、${raw('institution')}、${raw('date')}、${raw('edition')}
决定封面页脚的作者、机构、日期与卷次，其中日期是手写的文本，不会自动填今天。${raw('cover')} 与 ${raw('toc')} 是各自独立的开关，短笔记可以把两者都关掉。`,
    inline`${raw('lang')} 取 ${raw('"zh"')}、${raw('"en"')} 或 ${raw('"bilingual"')}，它决定自动生成的目录标题与环境名称，不会替你翻译正文。${raw('toc-depth: 2')}
控制目录深度，${raw('toc-title: auto')} 时按 ${raw('lang')} 生成标题，也可直接传 ${raw('[目次]')} 这样的内容块。`,
    inline`页眉显示当前页所属章节。标题很长时容易被页码挤窄，可以用简短的章节名称并设置 ${raw('running-title')}。`,
    m.heading(2, '编号'),
    inline`定义、定理、引理、命题、推论和练习共用一条${strong(inline`全文连续`)}的序列（定义 1、定理 2、练习 3 ……）；例题另有一条序列（例 1、例 2 ……）；行间公式再有一条独立的全文连续编号。三条序列都不按章重置。${raw('none')}
可以分别关掉它们：`,
    inline(
      raw(
        { block: true, lang: 'typst' },
        'theorem-numbering: "1",   // 定义、定理、引理、命题、推论、练习\nexample-numbering: "1",   // 例题\nequation-numbering: "(1)", // 行间公式\ntheorem-numbering: none,  // 全部关闭',
      ),
    ),
    '关闭编号之后不要再对相应对象使用交叉引用。从 0.1.0 升级时请注意：例题不再占用定理序列，后续环境的编号会相应变化。',
    m.heading(2, '页面、字号与间距'),
    inline`${raw('paper')} 与 ${raw('margin')} 控制纸张与页边距。${raw('leading')} 是同一段落内部的行间距，${raw('paragraph-spacing')}
是段落之间的距离，两者分开控制。${raw('heading-before')} 与 ${raw('heading-after')} 管二级及更深层标题的前后留白，一级章标题下方的留白由 ${raw('chapter-after')}
单独负责，不受 ${raw('heading-after')} 影响。`,
    inline`标题字号分三级可调：${raw('chapter-label-size')} 是章首“章节 / CHAPTER”标识的字号，${raw('chapter-title-size')}、${raw('section-title-size')}、${raw('subsection-title-size')}
分别对应一级、二级和三级以下的标题。公式默认随周围文字缩放（${raw('math-scale: 98%')}），${raw('equation-spacing')} 控制行间公式的上下留白，${raw('environment-title-gap')}
给所有环境的标题与正文之间再补一点空隙。`,
    m.heading(2, '速查表'),
    inline(
      table(
        { columns: [fr(1.6), fr(2.2)] },
        table.header(inline`配置项 / Key`, inline`作用 / Purpose`),
        inline`${raw('title')}, ${raw('subtitle')}, ${raw('description')}`,
        inline`封面主标题、副标题和引言`,
        inline`${raw('author')}, ${raw('institution')}`,
        inline`作者与机构`,
        inline`${raw('date')}, ${raw('edition')}`,
        inline`日期与卷次；日期为手写文本`,
        inline(raw('lang')),
        inline`${raw('"zh"')}、${raw('"en"')} 或 ${raw('"bilingual"')}；只影响自动生成的环境名`,
        inline`${raw('cover')}, ${raw('toc')}`,
        inline`独立开关封面与目录`,
        inline`${raw('toc-depth: 2')}, ${raw('toc-title: auto')}`,
        inline`目录深度与自定义目录标题`,
        inline(raw('chapter-break: true')),
        inline`一级标题是否另起一页；短笔记可关闭`,
        inline(raw('heading-numbering: "1.1"')),
        inline`标题编号格式；${raw('none')} 关闭`,
        inline(raw('equation-numbering: "(1)"')),
        inline`行间公式编号；${raw('none')} 关闭`,
        inline(raw('theorem-numbering: "1"')),
        inline`定义、定理、引理、命题、推论、练习的共用编号`,
        inline(raw('example-numbering: "1"')),
        inline`例题的独立编号`,
        inline`${raw('paper: "a4"')}, ${raw('margin')}`,
        inline`纸张与页边距`,
        inline`${raw('font-size: 10.5pt')}, ${raw('leading: 0.8em')}`,
        inline`正文字号与段内行间距`,
        inline(raw('paragraph-spacing: 1.2em')),
        inline`段落之间的间距，与 ${raw('leading')} 分别控制`,
        inline`${raw('heading-before')}, ${raw('heading-after')}`,
        inline`二级及更深层标题前后的间距`,
        inline`${raw('chapter-label-size')}, ${raw('chapter-title-size')}`,
        inline`章首标识与一级章标题字号`,
        inline`${raw('section-title-size')}, ${raw('subsection-title-size')}`,
        inline`二级节标题与三级以下标题字号`,
        inline`${raw('accent')}, ${raw('tint')}`,
        inline`强调色与环境浅底色`,
        inline`${raw('rule')}, ${raw('cover-paper')}`,
        inline`细线色与封面底色`,
        inline`${raw('ink')}, ${raw('muted')}`,
        inline`正文色与次要文字色`,
        inline`${raw('headers')}, ${raw('page-numbers')}`,
        inline`页眉与页码`,
        inline(raw('running-title')),
        inline`页眉左侧的短标题，长章节名可在此缩短`,
      ),
    ),
    inline`表中是包的默认值。初始化得到的 ${raw('config.typ')} 用了更宽松的一组：${raw('paragraph-spacing: 1.5em')}、${raw('heading-after: 1.5em')}、${raw('chapter-label-size: 15pt')}、${raw('chapter-title-size: 25pt')}、${raw('section-title-size: 15pt')}。`,
    m.heading(2, '两套现成组合'),
    '随堂速记：不要封面与目录，章节连排，环境名用中文。',
    inline(raw({ block: true, lang: 'typst' }, 'cover: false,\ntoc: false,\nchapter-break: false,\nlang: "zh",')),
    '黑白打印：保留全部结构，只把颜色换成灰阶。',
    inline(
      raw(
        { block: true, lang: 'typst' },
        'accent: rgb("333333"),\ntint: rgb("F7F7F7"),\nrule: rgb("D8D8D8"),\ncover-paper: white,',
      ),
    ),
    m.heading(1, '配色主题'),
    inline(unsafeRaw.code<any>`epigraph(
  author: [Claude Monet], source: [attributed],
  italic: true,
  translation: [颜色是我日复一日的痴迷、欢愉与折磨。（译文）],
)[Color is my day-long obsession, joy and torment.]`),
    inline`三套配色共享同一份版式代码，切换只改 ${raw('config.typ')} 里的一行，然后重新编译：`,
    inline(raw({ block: true, lang: 'typst' }, 'theme: "indigo",')),
    inline(
      table(
        { columns: [fr(1), fr(2), fr(1.2)] },
        table.header(inline`主题名 / Theme`, inline`配色 / Palette`, inline`强调色 / Accent`),
        inline(raw('"teal"')),
        inline`原版青绿，暖白封面`,
        inline(raw('#22645E')),
        inline(raw('"indigo"')),
        inline`冷调靛蓝，浅蓝灰封面`,
        inline(raw('#45578B')),
        inline(raw('"sepia"')),
        inline`暖调赭棕，米色封面`,
        inline(raw('#855C35')),
      ),
    ),
    inline`主题只改变颜色：封面、正文与次要文字、各级标题、题辞、定理底色、细线、链接、引用、代码背景与语法高亮。字体、字号、间距、编号与分页规则完全不动，默认仍是原版 ${raw('teal')}。`,
    m.heading(2, '覆盖单个颜色'),
    '显式写出的颜色优先于主题。例如保留靛蓝的整体关系，只把强调色调深：',
    inline(raw({ block: true, lang: 'typst' }, 'theme: "indigo",\naccent: rgb("334477"),')),
    inline`${raw('link-color')} 与 ${raw('citation-color')} 保持 ${raw('auto')} 时跟随强调色，也可以分别指定。不需要自定义时，请把 ${raw('config.typ')}
末尾那几个颜色项留成注释，否则它们会覆盖所选主题。`,
    m.heading(2, '迁移时要带上什么'),
    inline`配色在 ${raw('themes.typ')}，代码高亮在 ${raw('styles/quiet.tmTheme')}、${raw('styles/indigo.tmTheme')}、${raw('styles/sepia.tmTheme')}。${raw('code-theme: auto')}
会自动匹配所选主题，${raw('none')} 则彻底关闭高亮；手动指定的代码主题优先于配色主题。`,
    inline`完全自定义代码配色时，可以直接编辑 ${raw('styles/quiet.tmTheme')}，或者在配置里传入自己的主题文件：`,
    inline(raw({ block: true, lang: 'typst' }, 'code-theme: read("my-theme.tmTheme", encoding: none),')),
    m.heading(1, '字体'),
    inline(unsafeRaw.code<any>`epigraph(
  author: [Eric Gill], source: [An Essay on Typography, 1931],
  italic: true,
  translation: [字形是实在的物，不是物的图画。（译文）],
)[Letters are things, not pictures of things.]`),
    inline(
      table(
        { columns: [fr(1), fr(1.5), fr(2.3)] },
        table.header(inline`用途 / Use`, inline`默认字体 / Font`, inline`选择理由 / Why`),
        inline`英文正文`,
        inline`Libertinus Serif`,
        inline`字面开阔，有书籍感，带真正的斜体`,
        inline`中文正文`,
        inline`Noto Serif SC`,
        inline`宋体结构，适合长篇中文阅读`,
        inline`标题`,
        inline`Noto Sans SC`,
        inline`与正文形成清晰层次`,
        inline`数学公式`,
        inline`New Computer Modern Math`,
        inline`独立的 OpenType 数学字体，支持复杂公式`,
        inline`代码`,
        inline`DejaVu Sans Mono`,
        inline`清晰的等宽字符`,
      ),
    ),
    m.heading(2, '安装与后备'),
    inline`默认字体都是开源字体，项目不分发字体文件。Typst 网页编辑器可以直接使用它们；本地命令行内置了 Libertinus、New Computer Modern 和 DejaVu，中文还需要自己安装 ${link('https://fonts.google.com/noto/specimen/Noto+Serif+SC', inline`Noto Serif SC`)}
与 ${link('https://fonts.google.com/noto/specimen/Noto+Sans+SC', inline`Noto Sans SC`)}。`,
    inline`字体放在固定目录时用 ${raw('--font-path')} 指定：`,
    inline(raw({ block: true, lang: 'sh' }, 'typst compile --font-path /path/to/fonts main.typ')),
    '请留意编译警告，缺失字体会影响排版效果：Typst 会退回后备字体，行宽与重心都会变。',
    m.heading(2, '换成自己的'),
    inline`五个用途分别对应 ${raw('font-latin')}、${raw('font-cjk')}、${raw('font-heading')}、${raw('font-math')}、${raw('font-code')}，都可以单独替换。换成别的数学字体时请确认它支持 OpenType
MATH，否则积分、求和与大括号会退化为普通字形。`,
    m.heading(1, '数学环境与交叉引用'),
    inline(unsafeRaw.code<any>`epigraph(
  author: [Bertrand Russell], source: [The Study of Mathematics, 1902],
  italic: true,
  translation: [数学若以正当的方式看待，不仅拥有真理，也拥有至高的美。（译文）],
)[Mathematics, rightly viewed, possesses not only truth, but supreme beauty.]`),
    inline`${raw('env')} 提供 ${raw('definition')}、${raw('theorem')}、${raw('lemma')}、${raw('proposition')}、${raw('corollary')}、${raw('example')}、${raw('exercise')}、${raw('proof')}、${raw('remark')}、${raw('epigraph')}。前七种可以编号、加 ${raw('title')}、挂标签；证明和札记不编号，标题按 ${raw('lang')}
自动生成。`,
    inline(
      table(
        { columns: [fr(1.3), fr(2.5)] },
        table.header(inline`环境 / Environment`, inline`样式 / Appearance`),
        inline`定理`,
        inline`浅色底与细强调线，突出核心结论`,
        inline`定义`,
        inline`强调名称和编号，无底色`,
        inline`引理、命题、推论`,
        inline`无底色，配浅色细线`,
        inline`例题、练习`,
        inline`无底色、无边框，深色标题`,
        inline`证明、札记`,
        inline`较轻的标题，保持与上下文连贯`,
      ),
    ),
    m.heading(2, '编号与标签'),
    inline`定义一个对象时把标签写在正文末尾，引用时写 ${raw('@')} 加上标签名，编号由模板维护：`,
    inline(
      raw(
        { block: true, lang: 'typst' },
        '#(env.definition)(title: [连续 / Continuity])[\n  称 $f$ 在 $x_0$ 处连续，若对任意 $epsilon > 0$ 存在 $delta > 0$，\n  当 $abs(x-x_0) < delta$ 时 $abs(f(x)-f(x_0)) < epsilon$。\n] <def-cont>\n\n#(env.theorem)(title: [四则运算保持连续性])[\n  若 $f,g$ 在 $x_0$ 处连续，则 $f+g$ 与 $f g$ 也在此处连续。\n] <thm-cont-arith>\n\n#(env.proof)[\n  由 @def-cont 分别取 $delta_1, delta_2$，取较小者再用三角不等式合并。\n]',
      ),
    ),
    '上面这段源码排出来是这样的：',
    inline(
      labelled(
        [
          unsafeRaw.code<any>`(env.definition)(title: [连续 / Continuity])[
  称 $f$ 在 $x_0$ 处连续，若对任意 $epsilon > 0$ 存在 $delta > 0$，
  当 $abs(x-x_0) < delta$ 时 $abs(f(x)-f(x_0)) < epsilon$。
]`,
          space,
        ],
        label('def-cont'),
      ),
    ),
    inline(
      labelled(
        [
          unsafeRaw.code<any>`(env.theorem)(title: [四则运算保持连续性])[
  若 $f,g$ 在 $x_0$ 处连续，则 $f+g$ 与 $f g$ 也在此处连续。
]`,
          space,
        ],
        label('thm-cont-arith'),
      ),
    ),
    inline(unsafeRaw.code<any>`(env.proof)[
  由 @def-cont 分别取 $delta_1, delta_2$，取较小者再用三角不等式合并。
]`),
    inline`标签名不要与 ${raw('.bib')} 里的条目 key 重名。可以给常用环境绑定短名称，之后写 ${raw('#theorem(...)')} 就够了：`,
    inline(raw({ block: true, lang: 'typst' }, '#let theorem = env.theorem\n#let proof = env.proof')),
    m.heading(2, '取消单个公式编号'),
    '公式默认带编号。想要某一行不参与编号，临时包一层：',
    inline(raw({ block: true, lang: 'typst' }, '#math.equation(block: true, numbering: none)[$ e^(i pi) + 1 = 0 $]')),
    m.heading(2, '拆分成文件'),
    inline`长篇笔记可以把章节放进单独文件，在 ${raw('#show: notes.with(...)')} 之后 include：`,
    inline(raw({ block: true, lang: 'typst' }, '#include "chapters/analysis.typ"')),
    inline`被 include 的文件若要用 ${raw('env')}，应自己 import 模板与配置并创建环境，不要再次调用 ${raw('#show: notes')}。环境本身允许自然跨页，标题会尽量与随后的正文留在一起；证明末尾附一个空心方块。`,
    m.heading(1, '章首题辞'),
    inline(unsafeRaw.code<any>`epigraph(source: [《左传·襄公二十五年》])[
  言之无文，行而不远。
]`),
    inline`在 ${raw('= 章节标题')} 之后、正文之前插入题辞即可。默认占正文宽度的 72%，靠右放在页面上，使用较深灰色的小号衬线字。单行短题辞连同署名整体右对齐；一旦需要换行就自动改为左对齐，署名紧接其下。中英对照时，只要原文与译文都能各自容纳在一行，同样保持右对齐。`,
    '题辞不计入目录，也不占用编号；没有题辞的章节不需要任何额外设置。',
    m.heading(2, '基本写法'),
    inline`${raw('main.typ')} 已经绑定了 ${raw('#let epigraph = env.epigraph')}。新建入口文件时，记得在创建 ${raw('env')}
之后加上这一行。`,
    inline(
      raw(
        { block: true, lang: 'typst' },
        '= 极限与连续\n\n#epigraph(author: [孔子], source: [《论语·为政》])[\n  学而不思则罔，思而不学则殆。\n]\n\n这里开始写本章正文。',
      ),
    ),
    inline`${raw('author')} 与 ${raw('source')} 都可以省略，${raw('source')} 支持内容块，可以放书名、页码甚至 ${raw('#link(...)')}。引文本身想收进文献表却不显示编号时，像示例那样补一句 ${raw('#cite(<analects>, form: none)')}
即可。`,
    m.heading(2, '中英对照'),
    inline`英文原文可设 ${raw('italic: true')}，中文译文用 ${raw('translation')} 传入并保持正体。模板不会自动生成引号或译文，标点由你控制。`,
    m.heading(2, '调整外观'),
    inline`全局外观在 ${raw('config.typ')} 中修改：`,
    inline(
      raw(
        { block: true, lang: 'typst' },
        'epigraph-width: 72%,\nepigraph-size: 9.5pt,\nepigraph-align: right,      // left / center / right\nepigraph-text-align: auto,  // auto 按排版宽度选；也可强制 left / right\nepigraph-color: rgb("505D60"),\nchapter-after: 4mm,         // 章标题下方留白\nepigraph-after: 8mm,        // 题辞与正文之间留白',
      ),
    ),
    inline`单条题辞可以覆盖宽度、整体位置与区内文字对齐：${raw('placement')} 控制整个引文区放在哪里，${raw('text-align')} 控制区内的文字与署名靠哪边。`,
    inline(
      raw(
        { block: true, lang: 'typst' },
        '#epigraph(width: 85%, placement: center, text-align: left, author: [作者], source: [书名])[\n  在这里填写引文。\n]',
      ),
    ),
    inline`题辞作为一个整体分页，适合几行短引文，署名不会与引文分离。长篇摘录请放进正文或 ${raw('remark')} 环境。`,
    m.heading(1, '代码'),
    inline(unsafeRaw.code<any>`epigraph(
  author: [Harold Abelson], source: [《计算机程序的构造和解释》],
  italic: true,
  translation: [程序写出来是给人读的，顺便能让机器跑起来。（译文）],
)[Programs must be written for people to read, and only incidentally for machines to execute.]`),
    '带语言标记的代码围栏可以直接使用。代码块为浅灰底、细分隔线、语言标识与等宽字，中文注释有中文字体后备；关键字、字符串、数值与注释用克制的青、棕、紫、灰区分。样式只负责展示，不会运行代码。',
    m.heading(2, '三种常见语言'),
    inline(
      raw(
        { block: true, lang: 'python' },
        'import numpy as np\nA = np.array([[2, 1], [1, 2]])\nprint(np.linalg.eigvalsh(A))',
      ),
    ),
    inline(raw({ block: true, lang: 'julia' }, 'using LinearAlgebra\nA = [2 1; 1 2]\nprintln(eigvals(Symmetric(A)))')),
    inline(raw({ block: true, lang: 'matlab' }, 'A = [2 1; 1 2];\ndisp(eig(A));')),
    inline`${raw('python')}、${raw('julia')}、${raw('matlab')} 三种语言已在本机编译验证。也可以使用 Typst 原生支持的其他标记，例如 ${raw('bash')}、${raw('json')}、${raw('rust')}、${raw('typ')}。代码块的语言栏还支持 ${raw('mathematica')}、${raw('wolfram')}
与 ${raw('wl')}，分别显示为 Mathematica 与 Wolfram Language；是否与 Typst 的语法高亮对应，取决于 Typst 对该语言标记的支持。没有标记的代码块仍有样式，只是不做高亮。`,
    inline`行内代码用单反引号，例如 ${raw('')} ${raw('np.array')} ${raw('')}，显示为浅底标签，字号与正文一致。`,
    m.heading(2, '标题与行号'),
    inline`需要文件名或行号时，用 ${raw('env.code')} 把代码块包起来：`,
    inline(
      raw(
        { block: true, lang: 'typst' },
        '#(env.code)(title: [projection.jl], numbers: true)[\n```julia\nusing LinearAlgebra\nu = [1.0, 1.0]\nprintln(dot(u, u))\n```\n]',
      ),
    ),
    inline`也可以先绑定 ${raw('#let code = env.code')}，之后写 ${raw('#code(...)')}。${raw('title')} 是右上角的标题，${raw('numbers')}
决定这一个块是否显示行号。行号由原始代码行生成，不会插入源代码；多行字符串与注释保留连续的语法高亮状态。较长代码可以自然跨页，行号不会因翻页重置，标题栏只在开头出现一次。`,
    inline`外部文件可以这样插入，同样可以再包一层 ${raw('env.code')}：`,
    inline(raw({ block: true, lang: 'typst' }, '#raw(read("scripts/demo.py"), lang: "python", block: true)')),
    '长行会按可用宽度排版，但建议自己在合理位置断行，尤其是长字符串和长路径。',
    m.heading(2, '相关配置'),
    inline(
      table(
        { columns: [fr(1.2), fr(2.6)] },
        table.header(inline`配置项 / Key`, inline`默认值与用途 / Default and purpose`),
        inline(raw('font-code')),
        inline`${raw('"DejaVu Sans Mono"')}，代码字体`,
        inline(raw('code-size')),
        inline`${raw('9pt')}，代码块字号`,
        inline(raw('code-inline-size')),
        inline`${raw('1em')}，行内代码字号；${raw('1em')} 表示与正文同号`,
        inline(raw('code-leading')),
        inline`${raw('0.55em')}，代码行间距`,
        inline(raw('code-fill')),
        inline`${raw('rgb("F4F6F5")')}，代码背景色`,
        inline(raw('code-header')),
        inline`${raw('true')}，语言栏；显式传入标题时仍显示标题栏`,
        inline(raw('code-line-numbers')),
        inline`${raw('false')}，全局行号开关`,
        inline(raw('code-tab-size')),
        inline`${raw('4')}，制表符宽度`,
        inline(raw('code-theme')),
        inline`${raw('auto')} 跟随项目主题，${raw('none')} 关闭高亮`,
      ),
    ),
    inline`行内代码跟随同一套颜色，字号与正文一致，可用 ${raw('code-inline-size')} 单独调整。语法高亮与语言支持基于 Typst 的 ${raw('raw')} 接口，没有额外的 Python、Julia 或 MATLAB 排版依赖。`,
    m.heading(1, '参考文献与链接'),
    inline(
      unsafeRaw.code<any>`epigraph(author: [孔子], source: [《论语·述而》])[
  述而不作，信而好古。
]`,
      space,
      cite({ form: null }, label('analects')),
    ),
    '正文里默认使用数字引用，点击编号即可跳到文末条目。参考文献独立成页，用较小字号、悬挂编号与舒展的行距，并以不编号的标题进入目录。外部网址和 DOI 使用强调色的细下划线；目录、定理与文献的内部跳转不加下划线。',
    m.heading(2, '引用与文献表'),
    inline(
      raw(
        { block: true, lang: 'typst' },
        '进一步阅读可参见 @axler2024。\n关于内积空间，参见 #cite(<axler2024>, supplement: [第 6 章])。\n多篇文献可以连续引用：@axler2024 @strang2010。\n\n// 文末只放一次，不必另写“= 参考文献”。\n#bibliography("references.bib")',
      ),
    ),
    inline`本手册末尾已经调用文献表。正文中的引用 key 必须与 ${raw('.bib')} 中的条目对应，也不要与定理等对象的标签重名。`,
    inline`默认只列出实际引用的条目。想列出整个资料库，用 ${raw('#bibliography("references.bib", full: true)')}；想把某一条收进文献表却不在正文显示编号，用 ${raw('#cite(<analects>, form: none)')}——本页的题辞来源就是这样处理的。`,
    m.heading(2, '添加条目'),
    inline`沿用下面的结构即可，也可以从文献管理软件导出 BibLaTeX 的 ${raw('.bib')} 文件：`,
    inline(
      raw(
        { block: true, lang: 'bibtex' },
        '@book{axler2024,\n  author = {Axler, Sheldon},\n  title = {Linear Algebra Done Right},\n  edition = {4},\n  publisher = {Springer},\n  date = {2024},\n  doi = {10.1007/978-3-031-41026-0},\n  url = {https://linear.axler.net/}\n}',
      ),
    ),
    inline`${raw('doi')} 填标识符，${raw('url')} 填完整网址；在线资料可以加 ${raw('urldate = {2026-09-06}')} 记录你实际访问的日期。显示哪些字段由所选引用格式决定，例如存在 DOI 时可能就不再显示 URL。模板不会改写作者、排序或编号规则。`,
    inline`示例中的 ${ref(label('axler2024'))} 元数据取自 ${link('https://link.springer.com/book/10.1007/978-3-031-41026-0', inline`Springer 书籍页`)}，${ref(label('strang2010'))}
取自 ${link('https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/', inline`MIT OpenCourseWare`)}。请把示例资料替换或补充为自己实际使用的来源。`,
    m.heading(2, '超链接'),
    '普通链接直接使用 Typst 原生语法，推荐给长网址起个易读的名字：',
    inline(
      raw(
        { block: true, lang: 'typst' },
        '#link("https://linear.axler.net/")[教材主页]\n#link("https://doi.org/10.1007/978-3-031-41026-0")[电子版 DOI]',
      ),
    ),
    inline`例如 ${link('https://linear.axler.net/', inline`教材主页`)} 与 ${link('https://doi.org/10.1007/978-3-031-41026-0', inline`电子版 DOI`)}，两者都只在文外侧留出一条细线。`,
    m.heading(2, '相关配置'),
    inline(
      table(
        { columns: [fr(1.35), fr(2.45)] },
        table.header(inline`配置项 / Key`, inline`默认值与用途 / Default and purpose`),
        inline(raw('bibliography-style')),
        inline`${raw('"ieee"')}，数字编号；也可用 ${raw('"apa"')} 或 ${raw('"gb-7714-2015-numeric"')}`,
        inline(raw('bibliography-title')),
        inline`${raw('auto')}，按 ${raw('lang')} 生成；也可传 ${raw('[主要参考资料]')}`,
        inline(raw('bibliography-new-page')),
        inline`${raw('true')}，参考文献另起一页；短笔记可设为 ${raw('false')}`,
        inline(raw('bibliography-size')),
        inline`${raw('9.5pt')}，文献条目字号`,
        inline(raw('bibliography-spacing')),
        inline`${raw('1.1em')}，条目之间的间距`,
        inline`${raw('link-color')}, ${raw('citation-color')}`,
        inline`${raw('auto')}，跟随强调色；也可分别指定`,
        inline(raw('link-underline')),
        inline`${raw('true')}，只给外部链接加细下划线`,
      ),
    ),
    inline`切换引用格式后，文内引用与文末文献会一起更新。作者年份格式还可以用 ${raw('#cite(<axler2024>, form: "prose")')} 生成叙述式引用。多文件项目中的 ${raw('.bib')}
路径相对于调用 ${raw('bibliography')} 的文件。`,
    m.heading(1, '示例：分析与代数'),
    inline(unsafeRaw.code<any>`epigraph(author: [荀子], source: [《荀子·劝学》])[
  不积跬步，无以至千里；不积小流，无以成江海。
]`),
    '前面八章讲的是模板的用法，本章是一份完整的示例笔记：题辞、九种环境、表格、三种语言的代码与参考文献都在里面出现了一遍。开始写自己的内容时，可以把这一章留作骨架，前面的说明删掉即可。',
    m.heading(2, '极限与连续'),
    inline(
      unsafeRaw.code<any>`epigraph(author: [孔子], source: [《论语·为政》])[
  学而不思则罔，思而不学则殆。
]`,
      space,
      cite({ form: null }, label('analects')),
    ),
    '数学分析的起点，是把“无限接近”转化为可以检验的语言。本节从数列极限出发，记录定义、直觉与证明之间的联系。',
    inline(emph(inline`The art of analysis begins with making approximation precise.`)),
    m.heading(3, '数列的收敛'),
    inline(
      labelled(
        [
          unsafeRaw.code<any>`(env.definition)(title: [数列极限 / Limit of a sequence])[
  设 $(a_n)$ 为实数列。若存在 $L in RR$，使得对任意 $epsilon > 0$，
  都存在 $N in NN$，当 $n >= N$ 时有 $abs(a_n - L) < epsilon$，
  则称 $(a_n)$ 收敛于 $L$，记作 $a_n -> L$。
]`,
          space,
        ],
        label('def-limit'),
      ),
    ),
    inline`量词的先后顺序是定义的核心：${unsafeRaw.math`N`} 可以依赖 ${unsafeRaw.math`epsilon`}，但不应依赖后续选取的 ${unsafeRaw.math`n`}。`,
    inline(
      labelled(
        [
          unsafeRaw.code<any>`(env.theorem)(title: [极限的唯一性 / Uniqueness])[
  若实数列 $(a_n)$ 收敛，则它的极限唯一。
]`,
          space,
        ],
        label('thm-unique'),
      ),
    ),
    inline(unsafeRaw.code<any>`(env.proof)[
  假设 $a_n -> L$ 且 $a_n -> M$，但 $L != M$。
  取 $epsilon = abs(L-M)/3$，由 @def-limit，对充分大的 $n$ 有
  $ abs(L-M) <= abs(L-a_n) + abs(a_n-M) < 2/3 abs(L-M). $ <eq-unique>
  这与 $abs(L-M) > 0$ 矛盾，故 $L=M$。
]`),
    m.heading(3, '从定义到估计'),
    inline(unsafeRaw.code<any>`(env.example)(title: [$1/n -> 0$])[
  给定 $epsilon > 0$，取整数 $N > 1/epsilon$。对任意 $n >= N$，
  有 $abs(1/n - 0) <= 1/N < epsilon$，因此极限为 $0$。
]`),
    inline(unsafeRaw.code<any>`(env.remark)[
  证明中的关键是先写出目标不等式，再反推 $N$ 的选择。
  式 @eq-unique 则展示了三角不等式如何把两个局部估计连接起来。
]`),
    m.heading(2, '内积与正交'),
    inline(unsafeRaw.code<any>`epigraph(
  author: [Isaac Newton], source: [Letter to Robert Hooke, 1676],
  italic: true,
  translation: [如果我看得更远，那是因为我站在巨人的肩上。（译文）],
)[If I have seen further it is by standing on the sholders of Giants.]`),
    inline`内积使向量空间具有长度与角度。投影把抽象的几何直觉转化为可计算的表达式。进一步阅读可参见 Axler 的教材 ${ref(label('axler2024'))} 和 Strang 的课程 ${ref(label('strang2010'))}。`,
    m.heading(3, '内积空间'),
    inline(unsafeRaw.code<any>`(env.definition)(title: [实内积 / Real inner product])[
  实向量空间 $V$ 上的内积 $ip(x,y)$ 是一个对称双线性型，
  且满足 $ip(x,x) >= 0$，等号当且仅当 $x=0$。
  由此定义范数 $norm(x) = sqrt(ip(x,x))$。
]`),
    inline(
      labelled(
        [
          unsafeRaw.code<any>`(env.theorem)(title: [Cauchy–Schwarz 不等式])[
  对任意 $x,y in V$，有
  $ abs(ip(x,y)) <= norm(x) norm(y). $ <eq-cs>
  等号成立当且仅当 $x,y$ 线性相关。
]`,
          space,
        ],
        label('thm-cs'),
      ),
    ),
    inline(unsafeRaw.code<any>`(env.proof)[
  当 $y=0$ 时显然成立。若 $y != 0$，对任意 $t in RR$，
  $ 0 <= norm(x-t y)^2
      = norm(x)^2 - 2t ip(x,y) + t^2 norm(y)^2. $
  取 $t = ip(x,y) / norm(y)^2$，整理即得 @eq-cs。
  等号成立恰好对应 $x=t y$。
]`),
    m.heading(3, '正交投影'),
    inline`若 ${unsafeRaw.math`u_1, dots, u_k`} 是子空间 ${unsafeRaw.math`W`} 的一组标准正交基，则
${labelled([unsafeRaw.math.block`op("proj")_W(x) = sum_(i=1)^k ip(x,u_i) u_i.`, space], label('eq-proj'))}`,
    inline(unsafeRaw.code<any>`(env.corollary)(title: [最佳逼近 / Best approximation])[
  令 $p = op("proj")_W(x)$，则对任意 $w in W$，
  $ norm(x-w)^2 = norm(x-p)^2 + norm(p-w)^2 >= norm(x-p)^2. $
]`),
    inline(unsafeRaw.code<any>`(env.remark)[
  @thm-cs 控制内积的大小；@thm-unique 则控制极限的歧义。
  自动引用会保留对象名称与编号，点击即可跳转。
]`),
    m.heading(2, '计算、练习与回顾'),
    m.heading(3, '二项式与上升阶乘'),
    inline`对于正整数 ${unsafeRaw.math`j,k`}，二项式系数可以写成
${unsafeRaw.math.block`binom(k+j-1, k) = frac(j(j+1)(j+2) dots.h.c (j+k-1), k!).`}`,
    inline`固定 ${unsafeRaw.math`k`} 后，它是关于 ${unsafeRaw.math`j`} 的 ${unsafeRaw.math`k`} 次多项式。例如
${unsafeRaw.math.block`binom(j+2, 3) &= (j(j+1)(j+2))/6 \\
                  &= j^3/6 + j^2/2 + j/3.`}`,
    inline(unsafeRaw.code<any>`(env.lemma)(title: [首项系数])[
  多项式 $j(j+1) dots.h.c (j+k-1)$ 是首一多项式，
  因此 $binom(k+j-1,k)$ 关于 $j$ 的首项系数为 $1/k!$。
]`),
    m.heading(3, '矩阵与分段函数'),
    inline`公式使用独立的数学字体，矩阵、黑板粗体与积分符号保持一致。
${unsafeRaw.math.block`A = mat(2, 1; 1, 2), quad
  f(x) = cases(x^2 & "if " x >= 0, -x & "if " x < 0).`}`,
    inline(unsafeRaw.code<any>`(env.exercise)(title: [从计算到解释])[
  + 求矩阵 $A$ 的特征值与一组标准正交特征向量。
  + 用 @eq-proj 将 $(1,0)$ 投影到 $W = op("span")((1,1))$。
  + 直接从定义证明：若 $a_n -> a$、$b_n -> b$，则 $a_n+b_n -> a+b$。
]`),
    m.heading(3, '一页回顾'),
    inline(
      table(
        { columns: [fr(1.05), fr(1.7), fr(1.25)] },
        table.header(inline`概念 / Concept`, inline`关键表达 / Key idea`, inline`方法 / Method`),
        inline`极限`,
        inline(unsafeRaw.math`forall epsilon > 0, exists N`),
        inline`控制误差`,
        inline`内积`,
        inline(unsafeRaw.math`abs(ip(x,y)) <= norm(x) norm(y)`),
        inline`二次型非负`,
        inline`投影`,
        inline(unsafeRaw.math`x-p perp W`),
        inline`正交分解`,
      ),
    ),
    inline(unsafeRaw.code<any>`(env.remark)(title: [下一步 / Next steps])[
  每次记录一个定义、一条核心结论，以及一个能暴露误解的反例。
  留下问题，往往比抄下答案更有价值。
  也可从 #link("https://linear.axler.net/")[作者提供的教材主页]继续阅读。
]`),
    m.heading(2, '数值实验'),
    inline`用三种语言计算同一个正交投影：令 ${unsafeRaw.math`x=(1,0)`}、${unsafeRaw.math`u=(1,1)`}，
则 ${unsafeRaw.math`p = (x dot u)/(u dot u) u = (1/2,1/2)`}。计算是检验直觉的一种方式。`,
    m.heading(3, 'Python'),
    inline(
      raw(
        { block: true, lang: 'python' },
        'import numpy as np\n\n# Project x onto the span of u\nx = np.array([1.0, 0.0])\nu = np.array([1.0, 1.0])\np = (x @ u) / (u @ u) * u\nassert np.allclose(p, [0.5, 0.5])\nprint("projection:", p)',
      ),
    ),
    m.heading(3, 'Julia'),
    inline(unsafeRaw.code<any>`(env.code)(title: [projection.jl], numbers: true)[
\`\`\`julia
using LinearAlgebra

# 向量在一维子空间上的投影
x = [1.0, 0.0]
u = [1.0, 1.0]
p = dot(x, u) / dot(u, u) * u
@assert p ≈ [0.5, 0.5]
println("projection: ", p)
\`\`\`
]`),
    m.heading(3, 'MATLAB'),
    inline(
      raw(
        { block: true, lang: 'matlab' },
        "% Project a column vector\nx = [1; 0];\nu = [1; 1];\np = (u' * x) / (u' * u) * u;\nassert(norm(p - [0.5; 0.5]) < 1e-12);\ndisp('projection:');\ndisp(p);",
      ),
    ),
    inline`三种写法都对应 ${ref(label('eq-proj'))}；用 ${raw('assert')} 检查结果，用 ${raw('p')} 保存投影向量。`,
    inline(unsafeRaw.code<any>`appendix([图片与题注])[

本章本身就是用 \`env.appendix\` 起的附录：编号改用 A、B、C，标识行写「附录 / APPENDIX」，小节编号为 A.1。补充材料另起一章写在文末即可。

图片用 Typst 原生的 \`figure\` 插入，编号与题注交给模板：

\`\`\`typst
#figure(image("assets/plot_1.png", width: 74%),
  caption: [概率随 $n$ 的变化 / Probability versus $n$]) <fig-probability>
\`\`\`

路径相对于当前 \`.typ\` 文件，\`assets/\` 是模板自带的资源目录。排出来是这样：

#figure(
  image("assets/plot_1.png", width: 74%),
  caption: [概率随 $n$ 的变化 / Probability versus $n$],
) <fig-probability>

题注居中排在图片下方：编号用强调色加粗，正文用小号灰色字，与定理环境的标题共用同一套字体。图片与题注作为整体分页；省略 \`caption\` 就只留图片，也不占编号；写 @fig-probability 即可引用。表格套进 \`figure\` 会得到表题与独立的表编号。

== 相关配置

#table(
  columns: (1.35fr, 2.45fr),
  table.header([配置项 / Key], [默认值与用途 / Default and purpose]),
  [\`appendix-numbering\`], [\`"A.1"\`，附录章的编号格式；\`"A"\` 则只给章编号],
  [\`figure-caption-size\`], [\`9pt\`，图片与表格的题注字号],
  [\`figure-caption-color\`], [\`auto\`，跟随 \`muted\`；也可直接指定颜色],
)

]`),
    inline(unsafeRaw.code<any>`appendix([更新日志])[

澄思各版本的变更记录，按发布时间倒序排列。版本号与包管理器上的 \`@preview/chengsi\` 一致。

== 0.1.2

- 新增 \`appendix\` 附录环境：附录改用 A、B、C 独立编号，由 \`appendix-numbering\` 控制；章标识行写「附录 / APPENDIX」，且不影响其后正文章节的编号。
- 统一图片与表格的题注版式：图居中，编号用强调色，正文为小号灰色字排在下方，通过 \`figure-caption-size\` 与 \`figure-caption-color\` 配置。中英双语文档里引用显示为「图 / Figure 1」「表 / Table 1」，且图与题注不会被分页拆开。
- 扩充随包模板：新增「图片与题注」附录、\`template/assets/\` 中的示例插图，以及新配置项的相关说明。
- 行内代码改用正文字号（原先固定 \`0.85em\`），不再比周围文字显小；新增 \`code-inline-size\` 选项（默认 \`1em\`）可按项目调整。

== 0.1.1

- 例题改用独立计数器，编号格式由 \`example-numbering\` 配置；其余类定理环境继续共用 \`theorem-numbering\`。
- 新增可配置项：段间距、标题前后的间距，以及章节标识、章／节／小节标题的字号。
- 调大了默认的段落与标题间距、章标识字号，并同步更新随包模板的配置：留白更宽松、标题更大。
- 代码块语言标签新增 Mathematica 与 Wolfram Language。

== 0.1.0

澄思（Chengsi）的第一个正式版本。

- 中文、英文与中英双语的数学环境。
- 封面、目录、章首题辞、交叉引用与参考文献。
- 青绿、靛蓝、暖赭棕三套配色，配套的语法高亮主题。
- 完整示例：分析、线性代数与数值实验。

]`),
    inline(bibliography(path('references.bib'))),
  )
}
