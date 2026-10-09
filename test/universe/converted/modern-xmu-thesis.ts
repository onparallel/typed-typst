// Converted from test/universe/corpus/modern-xmu-thesis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  align,
  bibliography,
  blocks,
  blue,
  box,
  call,
  center,
  codeBlock,
  datetime,
  define,
  doc,
  em,
  emph,
  external,
  figure,
  footnote,
  h,
  horizon,
  image,
  importPackage,
  inline,
  label,
  labelled,
  let_,
  link,
  ltr,
  m,
  metadata,
  mm,
  path,
  pct,
  pt,
  raw,
  ref,
  show,
  space,
  stack,
  strong,
  table,
  text,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const lq = external('lq')
  const documentclass = define('documentclass')
    .named('info', T.any, null)
    .named('twoside', T.any, null)
    .returns(T.any)
    .external()
  const LaTeX = external('LaTeX')
  const zebraw = define('zebraw').pos('arg1', T.content).named('lang', T.any, null).returns(T.any).external()
  const lq_linspace = define('linspace').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external(lq)
  const lq_diagram = define('diagram')
    .pos('arg1', T.any)
    .named('title', T.content, [])
    .named('xlabel', T.any, null)
    .named('ylabel', T.any, null)
    .returns(T.any)
    .external(lq)
  const lq_plot = define('plot').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external(lq)
  const diagram = define('diagram').pos('arg1', T.any).named('cell-size', T.any, null).returns(T.any).external()
  const edge = external('edge')
  const node = external('node')
  const pseudocodeList = define('pseudocode-list')
    .pos('arg1', T.content)
    .named('booktabs', T.any, null)
    .returns(T.any)
    .external()
  const [
    patternDecl,
    [
      twoside,
      doc_2,
      preface,
      mainmatter,
      appendix,
      cover,
      integrity,
      acknowledgement,
      abstract,
      abstractEn,
      outlinePage,
      outlinePageEn,
      bilingualBibliography,
    ],
  ] = let_(
    [
      'twoside',
      'doc',
      'preface',
      'mainmatter',
      'appendix',
      'cover',
      'integrity',
      'acknowledgement',
      'abstract',
      'abstract-en',
      'outline-page',
      'outline-page-en',
      'bilingual-bibliography',
    ],
    documentclass({
      twoside: true,
      info: {
        title: ['基于 Typst 的', '厦门大学本科毕业论文模板'],
        titleEn: 'An XMU Undergraduate Thesis Template\nPowered by Typst',
        grade: '20XX',
        studentId: '1234567890',
        author: '张三',
        department: '某学院',
        major: '某专业',
        supervisor: ['李四', '教授'],
        submitDate: datetime.today(),
      },
    }),
  )
  const hyperlink = define('hyperlink')
    .pos('dest', T.any)
    .pos('body', T.any)
    .returns(T.any)
    .body((p) =>
      link(
        p['dest'],
        text({ fill: blue }, box({ stroke: { bottom: add(pt(0.5), blue) }, outset: { bottom: em(0.175) } }, p['body'])),
      ),
    )
  const [xDecl, x] = let_('x', lq_linspace(0, 10))
  return doc(
    importPackage('@preview/modern-xmu-thesis:0.2.2', [documentclass]),
    patternDecl,
    show(doc_2),
    inline(call(cover)),
    inline(call(integrity)),
    show(preface),
    inline(
      call(
        acknowledgement,
        blocks(
          '致谢语应以简短的文字对课题研究与论文撰写过程中曾直接给予帮助的人员（例如指导教师、答疑教师及其他人员）表示自己的谢意。如果本模板对你有所帮助，你也可以将其作为致谢的一部分。',
          hyperlink.decl,
          inline`感谢 ${hyperlink('https://qm.qq.com/q/NAtT7gF5ys', inline`Typst 非官方中文交流群`)}的群友们在作者编写本模板时提供的帮助，让我在编写模板时少走了很多弯路。`,
        ),
      ),
    ),
    inline(
      call(
        abstract,
        { keywords: ['本科毕业论文', '厦门大学', 'Typst'] },
        blocks(
          importPackage('@preview/metalogo:1.2.0', [LaTeX]),
          inline`本模板参考${link('https://github.com/nju-lug/modern-nju-thesis', inline`南京大学学位论文模板 modern-nju-thesis`)}与${link('https://github.com/F5Soft/xmu-template', inline`厦门大学本科毕业论文 ${LaTeX} 模版`)}，并根据《厦门大学本科毕业论文（设计）规范》${ref(label('XMUThesisStandard'))}
进行制作。`,
          inline`本模版提供高清封面、诚信承诺书、中英文摘要环境、中英文目录自动生成、附录环境、参考文献环境、致谢环境等。本模板通过 Typst
字体 fallback 功能，适配了 Windows 和 macOS 系统的字体，将以思源黑体/宋体、Windows 自带黑体/宋体、macOS
自带黑体/宋体的优先级使用编译环境中存在的字体。`,
          '建议使用前先完整浏览本模板中的所有内容，以完整地了解使用模板的方法与 Typst 的基础用法。',
        ),
      ),
    ),
    inline(
      call(
        abstractEn,
        { keywords: ['Undergraduate Thesis', 'Xiamen University', 'Typst'] },
        blocks(
          importPackage('@preview/metalogo:1.2.0', [LaTeX]),
          inline`This template is based on ${link('https://github.com/nju-lug/modern-nju-thesis', inline`modern-nju-thesis`)}
template and ${link('https://github.com/F5Soft/xmu-template', inline`Xiamen University Undergraduate Thesis ${LaTeX} Template`)},
and is created according to the ${emph(inline`Xiamen University Undergraduate Dissertation (Design) Specification`)}${ref(label('XMUThesisStandard'))}.`,
          inline`This template provides high-resolution cover, integrity commitment letter, Chinese and English
abstract environments, automatic generation of Chinese and English tables of contents, appendix
environment, reference environment, acknowledgment environment, etc. Through Typst's font fallback
feature, this template adapts fonts for Windows and macOS systems, using Source Han Sans/Serif,
Windows built-in Sans/Serif, and macOS built-in Sans/Serif fonts in order of priority based
on what fonts are available in the compilation environment.`,
          'It is recommended to fully browse all the content in this template before use to fully understand how to use the template and the basic usage of Typst.',
        ),
      ),
    ),
    inline(call(outlinePage)),
    inline(call(outlinePageEn)),
    show(mainmatter),
    m.heading(1, '使用说明', metadata({ en: 'Introduction' })),
    m.heading(2, '环境配置', metadata({ en: 'Environment Setup' })),
    inline`首先，需要配置好 Typst 环境，这里推荐使用 Web APP${footnote(inline`${link('https://typst.app/')} ，中国大陆地区可以正常访问。`)}
在线编辑或 VSCode + Tinymist 插件本地编辑。`,
    m.heading(3, '在线编辑', metadata({ en: 'Editing Online' })),
    'Web App 有些类似于 Overleaf，提供了在线编辑和编译的功能，适合不想在本地安装 VSCode 的用户。但是 Web App 并没有安装本地 Windows 或 MacOS 所拥有的字体，所以字体上可能存在差异，需要自行手动上传用到的字体。并且 Web App 是全英文页面，因此更推荐本地编辑。',
    '只需在 Web App 中选择 「Start from template」，在弹出窗口中选择「modern-xmu-thesis」，即可在线创建模板并使用。',
    m.heading(3, '本地编辑', metadata({ en: 'Editing Locally' })),
    inline`VSCode + Tinymist 需要先在官网${footnote(inline(link('https://code.visualstudio.com/download')))}上下载安装 VSCode，随后在右侧的「扩展/Extension」中搜索 Tinymist 进行安装。`,
    '在 VSCode 中按下「Ctrl + Shift + P」打开命令界面，输入「Typst: Show available Typst templates (gallery) for picking up a template」打开 Tinymist 提供的模板列表，然后从里面找到 modern-xmu-thesis，点击「+」号即可创建对应的论文模板。',
    '最后用 VS Code 打开生成的目录，打开 thesis.typ 文件，并按下「Ctrl + K, V」进行实时编辑和预览。',
    m.heading(2, '编译', metadata({ en: 'Compiling' })),
    '在 Web App 中，编辑完毕后，点击左上角的「File」按钮，选择「Export」中的「PDF」，即可下载编译得到的 PDF 文件。',
    '在 VSCode 中，编辑完毕后，按下「Ctrl + Shift + P」打开命令界面，输入「Typst: Export the Opened File as PDF」，即可导出编译得到的 PDF 文件。',
    m.heading(2, '使用模板', metadata({ en: 'Using the Template' })),
    inline`本模版根据《厦门大学本科毕业论文（设计）规范》${ref(label('XMUThesisStandard'))} 制作，使用时无需考虑各种格式指令，只需设置好章节标题，填充摘要、附录、参考文献、致谢等内容即可。`,
    '如果需要自定义部分样式，目前需要阅读源码中的注释来对一些函数传入的参数进行修改。如果有一定 Typst 基础，也可以 Fork 本模板的仓库，进行本地修改和编译。',
    m.heading(1, '使用示例', metadata({ en: 'Usage Examples' })),
    m.heading(2, '二级标题', metadata({ en: 'Section (English Ver.)' })),
    '一级标题（章）总会另起一页。',
    m.heading(3, '三级标题', metadata({ en: 'Subsection (English Ver.)' })),
    inline(importPackage('@preview/zebraw:0.6.3', [zebraw])),
    inline`使用${ref(label('lst:创建各级标题'))} 来创建带英文元数据的各级标题。`,
    inline(
      unsafeRaw.code({
        body: figure(
          { kind: raw, caption: inline`创建各级标题` },
          zebraw(
            { lang: false },
            inline(
              space,
              raw(
                { block: true, lang: 'typst' },
                '= 一级标题#metadata((en: "Chapter"))\n== 二级标题#metadata((en: "Section"))\n=== 三级标题#metadata((en: "Subsection"))',
              ),
              space,
            ),
          ),
        ),
      })<'content'>`[#body<创建各级标题>]`,
    ),
    m.heading(4, '四级标题', metadata({ en: 'Subsubsection (English Ver.)' })),
    inline`《厦门大学本科毕业论文（设计）规范》中要求一般不使用四级标题，因此如果未设置 ${raw('outline-page')} 中的 depth 参数，四级标题将不会显示在目录中。`,
    m.heading(2, '列表', metadata({ en: 'List' })),
    m.heading(3, '有序列表', metadata({ en: 'Ordered List' })),
    m.enum(
      m.item(['有序列表项一']),
      m.item(m.lines('有序列表项二', m.enum(m.item(['有序子列表项一']), m.item(['有序子列表项二'])))),
    ),
    m.heading(3, '无序列表', metadata({ en: 'Unordered List' })),
    m.list(
      m.item(['无序列表项一']),
      m.item(m.lines('无序列表项二', m.list(m.item(['无序子列表项一']), m.item(['无序子列表项二'])))),
    ),
    m.heading(3, '术语列表', metadata({ en: 'Glossary List' })),
    m.terms(m.term(['术语一'], ['术语解释']), m.term(['术语二'], ['术语解释'])),
    m.heading(2, '图表', metadata({ en: 'Figures and Tables' })),
    inline`引用${ref(label('tbl:timing'))}，引用${ref(label('tbl:timing-tlt'))}，以及${ref(label('fig:xmu-logo'))}。引用图表时，表格和图片分别需要加上 ${raw('tbl:')}和${raw('fig:')}
前缀才能正常显示编号。`,
    inline(
      align(
        center,
        stack(
          { dir: ltr },
          inline(
            space,
            labelled(
              [
                figure(
                  {
                    caption: inline`常规表${footnote(inline`《厦门大学本科毕业论文（设计）规范》中要求表格应优先采用三线表`)}`,
                  },
                  table(
                    { align: add(center, horizon), columns: 4 },
                    inline`t`,
                    inline`1`,
                    inline`2`,
                    inline`3`,
                    inline`y`,
                    inline`0.3s`,
                    inline`0.4s`,
                    inline`0.8s`,
                  ),
                ),
                space,
              ],
              label('timing'),
            ),
            space,
          ),
          inline(space, h(pt(50)), space),
          inline(
            space,
            labelled(
              [
                figure(
                  { caption: inline`三线表` },
                  table(
                    { columns: 4, stroke: null },
                    table.hline({ stroke: pt(1) }),
                    inline`t`,
                    inline`1`,
                    inline`2`,
                    inline`3`,
                    table.hline({ stroke: pt(0.75) }),
                    inline`y`,
                    inline`0.3s`,
                    inline`0.4s`,
                    inline`0.8s`,
                    table.hline({ stroke: pt(1) }),
                  ),
                ),
                space,
              ],
              label('timing-tlt'),
            ),
            space,
          ),
        ),
      ),
    ),
    inline(
      labelled(
        [figure({ caption: inline`厦门大学校徽` }, image({ width: pct(20) }, path('images/xmu-logo.svg'))), space],
        label('xmu-logo'),
      ),
    ),
    m.heading(3, '数学绘图', metadata({ en: 'Plotting' })),
    inline`一般而言，建议将绘图部分放在 Python 或 MATLAB 或其他软件中进行，在论文中使用其导出的图像。Typst 也有一些合适的包用于绘图，例如较老的「cetz-plot${footnote(inline(link('https://typst.app/universe/package/cetz-plot')))}」与较新的「lilaq${footnote(inline(link('https://typst.app/universe/package/lilaq')))}」包。此处用 lilaq 包进行简单的绘图演示。`,
    inline(
      figure(
        { caption: inline`数学绘图示例` },
        codeBlock([
          importPackage('@preview/lilaq:0.3.0', lq),
          xDecl,
          lq_diagram(
            {
              title: inline`${unsafeRaw.math`sin x`} 的函数图像`,
              xlabel: unsafeRaw.math`x`,
              ylabel: unsafeRaw.math`y`,
            },
            lq_plot(x, unsafeRaw.code<any>`x.map(x => calc.sin(x))`),
          ),
        ]),
      ),
    ),
    m.heading(3, '画图', metadata({ en: 'Drawing' })),
    inline`对于复杂的图形，建议使用「所见即所得」式的绘图工具绘制图形并导入到论文中。Typst 有一些用于画图的包，最基础的是「cetz${footnote(inline(link('https://typst.app/universe/package/cetz')))}」，类似于 LaTeX 中的 tikz 包；此外还有专注于流程图绘制的「fletcher${footnote(inline(link('https://typst.app/universe/package/fletcher')))}」包。此处用 fletcher 包进行简单的画图演示。`,
    inline(
      figure(
        { caption: inline`流程图示例` },
        codeBlock([
          importPackage('@preview/fletcher:0.5.8', [diagram, edge, node]),
          diagram(
            { cellSize: mm(15) },
            unsafeRaw.math.block`G edge(f, ->) edge("d", pi, ->>) & im(f) \\
        G slash ker(f) edge("ur", tilde(f), "hook-->")`,
          ),
        ]),
      ),
    ),
    m.heading(2, '公式', metadata({ en: 'Formulas' })),
    inline`可以像 Markdown 一样写行内公式 ${unsafeRaw.math`x + y`}，以及带编号的行间公式：`,
    inline(labelled([unsafeRaw.math.block`phi.alt := (1 + sqrt(5)) / 2.`, space], label('ratio'))),
    inline`${h(em(-2))} 引用数学公式需要加上 ${raw('eqt:')} 前缀，则由${ref(label('eqt:ratio'))}，我们有：`,
    inline(unsafeRaw.math.block`F_n = floor(1 / sqrt(5) phi.alt^n).`),
    inline`${h(em(-2))} 我们也可以通过 ${raw('<->')} 标签来标识该行间公式不需要编号`,
    inline(labelled([unsafeRaw.math.block`y = integral_1^2 x^2 dif x,`, space], label('-'))),
    inline`${h(em(-2))} 而后续数学公式仍然能正常编号：`,
    inline(unsafeRaw.math.block`F_n = floor(1 / sqrt(5) phi.alt^n).`),
    inline`比较不幸的是，由于 Typst 的排版结构问题，如果你不想在行间公式后新起一段，你需要手动在行间公式的后一行开头添加负缩进。你也可以使用目前${footnote(inline`指 2025 年 5 月 17 日`)}尚不完善且未正式发布的改进版 indenta 包${footnote(inline(link('https://github.com/ParaN3xus/typst-snippets/tree/main/indenta')))}来实现如下的效果：`,
    inline(
      zebraw(
        { lang: false },
        inline(
          space,
          raw(
            { block: true, lang: 'typst' },
            '$ sin^2 x + cos^2 x = 1 $\n这段不会首行缩进。\n\n$ sin^2 x + cos^2 x = 1 $\n\n与上面的行间公式间有空行，这段会首行缩进。',
          ),
          space,
        ),
      ),
    ),
    m.heading(2, '代码与伪代码', metadata({ en: 'Codes and Pseudocodes' })),
    inline`如果只是简单地展示代码，只需要使用 「\`\`\`」将代码进行包裹即可，这与 Markdown 的语法一致。Typst 的代码块支持语法高亮，就像${ref(label('lst:code'))}
一样。引用时需要加上 ${raw('lst:')} 前缀。如果需要对代码块进行一定美化，就像${ref(label('lst:创建各级标题'))} 一样，则可以使用「zebraw${footnote(inline(link('https://typst.app/universe/package/zebraw')))}」包进行美化。`,
    inline(
      labelled(
        [
          figure({ caption: inline`代码块示例` }, raw({ block: true, lang: 'py' }, 'def add(x, y):\n  return x + y')),
          space,
        ],
        label('code'),
      ),
    ),
    inline`对于展示算法使用的伪代码，可以使用「lovelace${footnote(inline(link('https://typst.app/universe/package/lovelace')))}」包绘制。`,
    inline(
      figure(
        { kind: 'algorithm', supplement: inline`算法`, caption: inline`伪代码示例` },
        codeBlock([
          importPackage('@preview/lovelace:0.3.0', [pseudocodeList]),
          pseudocodeList(
            { booktabs: true },
            blocks(
              m.lines(
                m.list(
                  m.item([strong(inline`Function`), space, 'DFS(G,', space, unsafeRaw.math`v`, ')']),
                  m.item(['Input: 图 G = (V, E) 和起始顶点', space, unsafeRaw.math`v`]),
                  m.item(['Output: 图 G 的深度优先遍历序列']),
                ),
                m.enum(
                  m.item(['标记顶点', space, unsafeRaw.math`v`, space, '为已访问']),
                  m.item(['将', space, unsafeRaw.math`v`, space, '加入遍历序列']),
                  m.item(
                    m.lines(
                      inline`${strong(inline`for`)} ${strong(inline`each`)} 顶点 ${unsafeRaw.math`w in`} Adj[${unsafeRaw.math`v`}]
${strong(inline`do`)}`,
                      m.enum(
                        m.item(
                          m.lines(
                            inline`${strong(inline`if`)} ${unsafeRaw.math`w`} 未被访问 ${strong(inline`then`)}`,
                            m.enum(m.item(['递归调用 DFS(G,', space, unsafeRaw.math`w`, ')'])),
                          ),
                        ),
                        m.item([strong(inline`end`), space, strong(inline`if`)]),
                      ),
                    ),
                  ),
                  m.item([strong(inline`end`), space, strong(inline`for`)]),
                ),
              ),
            ),
          ),
        ]),
      ),
    ),
    m.heading(2, '参考文献', metadata({ en: 'References' })),
    '参考文献使用 BibTeX 格式的 .bib 文件，根据规范使用 GB/T 7714－2005《文后参考文献著录规则》进行编排。',
    inline`你可以像引用其他标签一样引用参考文献，例如${raw('@Madje_Typst')}${ref(label('Madje_Typst'))}。`,
    inline(unsafeRaw.code<any>`if twoside {
  set page(header: none, footer: none)
  pagebreak(weak: true, to: "odd")
}`),
    inline(call(bilingualBibliography, { bibliography: bibliography.with(path('ref.bib')) })),
    inline(unsafeRaw.code<any>`if twoside {
  set page(header: none, footer: none)
  pagebreak(weak: true, to: "odd")
}`),
    show(appendix),
    m.heading(1, '附录', metadata({ en: 'Appendix' })),
    m.heading(2, '附表', metadata({ en: 'Tables' })),
    inline`这里放一些附录的内容，例如表格或其他说明。如${ref(label('tbl:appendix-table'))}。制作模板时间精力有限，因此附录不会自动编号。如需编号为「附录 A」，请手动添加。`,
    inline(
      labelled(
        [
          figure(
            { caption: inline`附录表格示例` },
            table(
              { columns: 4, stroke: null },
              table.hline({ stroke: pt(1) }),
              inline`t`,
              inline`1`,
              inline`2`,
              inline`3`,
              table.hline({ stroke: pt(0.75) }),
              inline`y`,
              inline`0.3s`,
              inline`0.4s`,
              inline`0.8s`,
              table.hline({ stroke: pt(1) }),
            ),
          ),
          space,
        ],
        label('appendix-table'),
      ),
    ),
    '附录中图表和公式编号均以大写字母开头，区别于正文部分的编号。',
    inline(
      unsafeRaw.math.block`1 / pi = (2 sqrt(2)) / (99^2) sum_(k=0)^oo ((4k)!) / (k!^4) (26390k + 1103) / (396^(4k))`,
    ),
    m.heading(
      2,
      '厦门大学本科毕业论文（设计）规范摘要',
      metadata({ en: 'Abstract of Xiamen University Undergraduate Dissertation (Design) Specification' }),
    ),
    m.list(
      { tight: false },
      m.item(['毕业论文（设计）一般包括：前置部分、正文、参考文献、附录 4 个部分。']),
      m.item([
        '题目应简洁、明确、有概括性，避免使用不常见的缩略词、缩写字。中文题目一般不宜超过 20 个字，必要时可增加副标题。英文题目应与中文题目内容相同。',
      ]),
      m.item([
        '主修专业毕业论文（设计）封面使用 160g 白色双胶纸，辅修封面为 160g 浅黄色皮纹纸。内页均为 A4 规格 80g 双胶纸。',
      ]),
      m.item(['章的标题占2行，标题以外的文字为1.5倍行距。']),
      m.item(['上边距和左边距应留 25mm 以上间隙，下边距和右边距应分别留 20mm 以上间隙。']),
      m.item([
        '每页须加“页眉”和“页码”。奇数页页眉内容为当前章名，如“第一章 绪论”。偶数页页眉内容为论文题目。学位论文的页码，正文、参考文献、附录部分用阿拉伯数字连续编码并居中，前置部分用罗马数字单独连续编码居中（封面除外）。',
      ]),
      m.item(['封面中文标题：二号黑体']),
      m.item(['封面英文标题：三号 Times New Roman 加粗']),
      m.item(['中文摘要标题：小三号黑体']),
      m.item(['中文关键词标题：小四号黑体']),
      m.item(['中文摘要、关键词内容：小四号宋体']),
      m.item(['英文摘要标题：小三号 Times New Roman 加粗']),
      m.item(['英文关键词标题：小四号 Times New Roman 加粗']),
      m.item(['英文摘要、关键词内容：小四号 Times New Roman']),
      m.item(['中文目录标题：小三号黑体']),
      m.item(['中文目录中章的标题：四号黑体']),
      m.item(['中文目录中节的标题：小四号黑体']),
      m.item(['中文目录中三级标题：小四号宋体']),
      m.item(['英文目录标题：小三号 Times New Roman 加粗']),
      m.item(['英文目录中章的标题：四号 Times New Roman 加粗']),
      m.item(['英文目录中节的标题：小四号 Times New Roman 加粗']),
      m.item(['英文目录中三级标题：小四号 Times New Roman']),
      m.item(['章的标题：小三号黑体']),
      m.item(['节的标题：四号黑体']),
      m.item(['三级标题：小四号黑体']),
      m.item(['正文：小四号宋体']),
      m.item(['页眉：小五号宋体']),
      m.item(['页码：小五号 Times New Roman']),
      m.item(['注释内容：小五号宋体']),
      m.item(['表格、图的标题、单位、表头：五号宋体加粗']),
      m.item(['表格内容：五号宋体']),
      m.item(['表格、图的资料来源：小五号宋体']),
      m.item(['参考文献标题：小三号黑体']),
      m.item(['中文参考文献表：五号宋体']),
      m.item(['英文参考文献表：五号 Times New Roman']),
      m.item(['附录标题：小三号黑体']),
      m.item(['致谢标题：小三号黑体']),
      m.item(['致谢内容：小四号宋体']),
    ),
    '对于中英文混杂的内容，中文的字体若是用宋体，英文的字体则采用 Times New Roman；中文的字体若是黑体，英文的字体则采用 Arial。',
  )
}
