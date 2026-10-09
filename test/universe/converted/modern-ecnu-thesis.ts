// Converted from test/universe/corpus/modern-ecnu-thesis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  bibliography,
  blocks,
  bottom,
  call,
  center,
  contentBlock,
  datetime,
  define,
  doc,
  em,
  emph,
  enum_,
  external,
  figure,
  footnote,
  heading,
  horizon,
  image,
  importPackage,
  inline,
  label,
  labelled,
  let_,
  link,
  lorem,
  m,
  par,
  parbreak,
  path,
  pct,
  pt,
  raw,
  ref,
  set,
  show,
  smartquote,
  space,
  table,
  top,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const documentclass = define('documentclass')
    .named('bibliography', T.any, null)
    .named('degree', T.any, null)
    .named('doctype', T.any, null)
    .named('info', T.any, null)
    .named('twoside', T.any, null)
    .returns(T.any)
    .external()
  const indent = external('indent')
  const noIndent = external('no-indent')
  const wordCountCjk = external('word-count-cjk')
  const totalWords = external('total-words')
  const bilingualFigure = define('bilingual-figure')
    .pos('arg1', T.any)
    .named('caption', T.any, null)
    .named('caption-en', T.any, null)
    .named('caption-position', T.any, null)
    .named('kind', T.any, null)
    .named('manual-number', T.any, null)
    .returns(T.any)
    .external()
  const kouhu = define('kouhu')
    .named('builtin-text', T.any, null)
    .named('length', T.any, null)
    .returns(T.any)
    .external()
  const [
    patternDecl,
    [
      twoside,
      doc_2,
      preface,
      mainmatter,
      mainmatterEnd,
      appendix,
      fontsDisplayPage,
      cover,
      declPage,
      committee,
      abstract,
      abstractEn,
      bilingualBibliography,
      outlinePage,
      listOfFigures,
      listOfTables,
      notation,
      acknowledgement,
      academicIntegrity,
    ],
  ] = let_(
    [
      'twoside',
      'doc',
      'preface',
      'mainmatter',
      'mainmatter-end',
      'appendix',
      'fonts-display-page',
      'cover',
      'decl-page',
      'committee',
      'abstract',
      'abstract-en',
      'bilingual-bibliography',
      'outline-page',
      'list-of-figures',
      'list-of-tables',
      'notation',
      'acknowledgement',
      'academic-integrity',
    ],
    documentclass({
      doctype: 'master',
      degree: 'academic',
      twoside: false,
      info: {
        title: ['基于 Typst 的', '华东师范大学学位论文'],
        titleEn: 'Typst Thesis Template for\nEast China Normal University',
        grade: '20XX',
        studentId: '31415926536',
        author: '张三',
        authorEn: 'San Zhang',
        department: ['信息学部', '计算机科学与技术学院'],
        departmentEn: 'School of Computer Science and Technology\nFaculty of Information',
        major: '某专业',
        majorEn: 'Computer Science',
        field: '某方向',
        fieldEn: 'XX Field',
        supervisor: ['李四', '教授'],
        supervisorEn: ['Prof.', 'Si Li'],
        submitDate: datetime.today(),
        secretLevel: '',
        clc: '',
        committeeMembers: ['赵六', '教授', '华东师范大学', '主席'],
      },
      bibliography: bibliography.with(path('ref.bib')),
    }),
  )
  return doc(
    importPackage('@preview/modern-ecnu-thesis:0.3.0', [
      documentclass,
      indent,
      noIndent,
      wordCountCjk,
      totalWords,
      bilingualFigure,
    ]),
    patternDecl,
    unsafeRaw.markup`#show: doc.with(fix-cjk: true)`,
    inline(
      call(cover, {
        titleLineLength: pt(320),
        titleLineLengthEn: pt(300),
        metaInfoLineLength: pt(200),
        metaInfoLineLengthEn: pt(230),
      }),
    ),
    inline(call(declPage)),
    inline(call(committee)),
    show(preface),
    inline(
      call(
        abstract,
        { keywords: ['天行健', '君子以', '自强', '不息'] },
        inline`${space}滚滚长江东逝水，浪花淘尽英雄。是非成败转头空。青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢。古今多少事，都付笑谈中。${space}`,
      ),
    ),
    inline(call(abstractEn, { keywords: ['To', 'be', 'or', 'not', 'to', 'be'] }, inline(space, lorem(100), space))),
    inline(call(outlinePage, { outlined: false })),
    inline(call(listOfFigures)),
    inline(call(listOfTables)),
    inline(
      call(
        notation,
        blocks(
          m.terms(
            m.term(['DFT'], ['密度泛函理论 (Density functional theory)']),
            m.term(['DMRG'], ['密度矩阵重正化群密度矩阵重正化群密度矩阵重正化群 (Density-Matrix Reformation-Group)']),
            m.term(['RAII'], ['资源获取即初始化 (Resource Acquisition Is Initialization)']),
          ),
        ),
      ),
    ),
    unsafeRaw.markup`#show: mainmatter.with(
  caption-mode: "standard", // caption 模式，standard 或 bilingual
)`,
    show(wordCountCjk),
    m.heading(1, '导　论'),
    m.heading(2, '列表'),
    m.heading(3, '无序列表'),
    '这里是一些无序列表示例：',
    m.list(
      m.item(['无序列表项一']),
      m.item(m.lines('无序列表项二', m.list(m.item(['无序子列表项一']), m.item(['无序子列表项二'])))),
    ),
    m.heading(3, '有序列表'),
    '这里是一些有序列表示例：',
    m.enum(
      m.item(['有序列表项一']),
      m.item(m.lines('有序列表项二', m.enum(m.item(['有序子列表项一']), m.item(['有序子列表项二'])))),
    ),
    m.heading(3, '术语列表'),
    m.terms(m.term(['术语一'], ['术语解释']), m.term(['术语二'], ['术语解释'])),
    m.heading(2, '图表'),
    m.heading(2, '常规图表'),
    inline`引用${ref(label('tbl:timing'))}，引用${ref(label('tbl:timing-tlt'))}，以及${ref(label('fig:ecnu-logo'))}。引用图表时，表格和图片分别需要加上 ${raw('tbl:')}和${raw('fig:')}
前缀才能正常显示编号。`,
    inline(
      labelled(
        [
          figure(
            { caption: inline`常规表` },
            inline(
              space,
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
              space,
            ),
          ),
          space,
        ],
        label('timing'),
      ),
    ),
    inline(
      labelled(
        [
          figure(
            { caption: inline`三线表` },
            inline(
              space,
              table(
                { columns: 4, stroke: null },
                table.hline(),
                inline`t`,
                inline`1`,
                inline`2`,
                inline`3`,
                table.hline({ stroke: pt(0.5) }),
                inline`y`,
                inline`0.3s`,
                inline`0.4s`,
                inline`0.8s`,
                table.hline(),
              ),
              space,
            ),
          ),
          space,
        ],
        label('timing-tlt'),
      ),
    ),
    inline`你可以使用 figure 的 ${raw('placement')} 属性 ${footnote(inline`${space}需要 Typst 版本 >= 0.12.0：${link('https://github.com/typst/typst/releases/tag/v0.12.0')}。${space}`)}
来设置类似的浮动图表位置。可用的值有 ${raw('top')}、${raw('bottom')} 与 ${raw('none')}，分别对应 LaTeX 中的 t、b 与 h。若要实现类似 LaTeX 中 ${raw('p')}
属性的整页图表，可结合 ${raw('pagebreak()')} 函数与图片上下的 ${raw('h(1fr)')} 来实现。`,
    inline(
      labelled(
        [
          figure(
            { placement: top, caption: inline`顶部浮动图片。A floating figure at the top.` },
            inline(space, image({ width: pct(20) }, path('images/ecnu-emblem.svg')), space),
          ),
          space,
        ],
        label('ecnu-logo'),
      ),
    ),
    m.heading(2, '中英双语图表'),
    inline(noIndent),
    inline`本模板支持中英双语的图表标题功能。双语图表的详细使用说明请参见文档 ${raw('README.md')}。以下展示几个基本示例:`,
    inline(
      bilingualFigure(
        {
          kind: 'figure',
          captionPosition: bottom,
          caption: '双语图片标题',
          captionEn: 'Bilingual Figure Caption',
          manualNumber: '1.1',
        },
        image({ width: pct(20) }, path('images/ecnu-emblem.svg')),
      ),
    ),
    inline(
      bilingualFigure(
        {
          kind: 'table',
          captionPosition: top,
          caption: '双语表标题',
          captionEn: 'Bilingual Table Caption',
          manualNumber: '1.1',
        },
        table(
          { columns: 4, stroke: null },
          table.hline(),
          inline`t`,
          inline`1`,
          inline`2`,
          inline`3`,
          table.hline({ stroke: pt(0.5) }),
          inline`y`,
          inline`0.3s`,
          inline`0.4s`,
          inline`0.8s`,
          table.hline(),
        ),
      ),
    ),
    m.heading(2, '数学公式'),
    inline`可以像 Markdown 一样写行内公式 ${unsafeRaw.math`x + y`}，以及带编号的行间公式：`,
    inline(labelled([unsafeRaw.math.block`phi.alt := (1 + sqrt(5)) / 2`, space], label('ratio'))),
    inline`引用数学公式需要加上 ${raw('eqt:')} 前缀，则由${ref(label('eqt:ratio'))}，我们有：`,
    inline(unsafeRaw.math.block`F_n = floor(1 / sqrt(5) phi.alt^n)`),
    inline`我们也可以通过 ${raw('<->')} 标签来标识该行间公式不需要编号`,
    inline(labelled([unsafeRaw.math.block`y = integral_1^2 x^2 dif x`, space], label('-'))),
    '而后续数学公式仍然能正常编号。',
    inline(unsafeRaw.math.block`F_n = floor(1 / sqrt(5) phi.alt^n)`),
    inline(labelled(heading({ depth: 2 }, inline('引用')), label('sec:ref'))),
    inline`可以像这样引用参考文献：图书 ${contentBlock(inline(ref(label('蒋有绪1998'))))} 和会议 ${contentBlock(inline(ref(label('中国力学学会1990'))))}，或者引用段落：${ref(label('sec:ref'))}。`,
    m.heading(2, '代码块'),
    inline`代码块支持语法高亮。引用时需要加上 ${raw('lst:')} ${ref(label('lst:code'))}`,
    inline(
      labelled(
        [
          figure(
            { caption: inline`代码块` },
            inline(
              space,
              raw(
                { block: true, lang: 'cpp' },
                '#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << "Hello, world!" << endl;\n    return 0;\n}',
              ),
              space,
            ),
          ),
          space,
        ],
        label('code'),
      ),
    ),
    m.heading(2, '缩进'),
    inline`模板的所有段落默认都有首行缩进。如果需要取消缩进，可以使用 ${raw('#no-indent')}。若需手动缩进，可以使用 ${raw('#indent')}。`,
    inline`${noIndent} 比如，这是一个没有首行缩进的段落。`,
    m.heading(2, '中文字符的换行'),
    inline`模板启用了 CJK 字符的换行修复。启用该修复后，你
可以在源
代码中
任意
换
行
，
模板输出时不会把中文源码里的换行转为空格，而只把西文内的换行转换为空格（this is an example）。这是一个实验性的功能，在启用该修复后，Tinymist 的定位功能会失效，在少数情况下也可能去除不应去掉的空格。你可以将 ${raw('#show: doc.with(fix-cjk: true)')}
一行修改为 ${raw('#show: doc.with(fix-cjk: false)')} 来禁用该修复。`,
    m.heading(2, '字数统计'),
    inline`正文与附录的的总字数为：${totalWords}。你也可以使用以下命令来使用 ${raw('typst')} 命令行统计字数 / 字符数：`,
    inline(
      raw(
        { block: true, lang: 'bash' },
        "typst query thesis.typ '<total-words>' 2>/dev/null --field value --one\ntypst query thesis.typ '<total-characters>' 2>/dev/null --field value --one",
      ),
    ),
    m.heading(1, '正　文'),
    m.lines(importPackage('@preview/kouhu:0.1.0', [kouhu]), inline(kouhu({ builtinText: 'zhufu', length: 1348 }))),
    m.heading(2, '正文子标题'),
    m.heading(3, '正文子子标题'),
    inline(
      contentBlock(
        blocks(
          m.lines(
            set(enum_, { numbering: '1)', indent: em(0.75) }),
            m.enum(m.item(['自定义列表编号与缩进']), m.item(['自定义列表编号与缩进'])),
          ),
        ),
      ),
    ),
    inline(unsafeRaw.code<any>`if twoside {
  pagebreak() + " "
}`),
    inline(call(bilingualBibliography, { full: true, style: './gb-t-7714-2015-numeric-nosup.csl' })),
    inline(
      call(
        acknowledgement,
        blocks(
          parbreak(),
          inline(emph(inline`感谢以下模板提供的参考：`)),
          m.list(
            m.item([
              link('https://github.com/nju-lug/modern-nju-thesis', inline`modern-nju-thesis`),
              space,
              'by',
              space,
              link('https://github.com/Orangex4', inline`OrangeX4`),
            ]),
            m.item([
              link('https://github.com/YijunYuan/ECNU-Undergraduate-LaTeX', inline`ECNU-Undergraduate-LaTeX`),
              space,
              'by',
              space,
              link('https://github.com/YijunYuan', inline`YijunYuan`),
            ]),
            m.item([
              link(
                'https://www.overleaf.com/latex/templates/hua-dong-shi-fan-da-xue-shuo-shi-lun-wen-mo-ban-2023/ctvnwyqtsbbz',
                inline`华东师范大学硕士论文模板-2023`,
              ),
              space,
              'by ivyee17',
            ]),
            m.item([
              link(
                'https://github.com/ECNU-ICA/ECNU_graduation_thesis_template',
                inline`ECNU_graduation_thesis_template`,
              ),
              space,
              'by',
              space,
              link('https://github.com/ECNU-ICA', inline`ECNU-ICA`),
            ]),
            m.item([
              link(
                'https://github.com/DeepTrial/ECNU-Dissertations-Latex-Template',
                inline`ECNU-Dissertations-Latex-Template`,
              ),
              space,
              'by',
              space,
              link('https://github.com/DeepTrial', inline`Karl Xing`),
            ]),
          ),
        ),
      ),
    ),
    inline(unsafeRaw.code<any>`if twoside {
  pagebreak() + " "
}`),
    unsafeRaw.markup`#show: appendix.with(reset-counter: false)`,
    m.heading(1, '附录'),
    m.heading(2, '附录子标题'),
    m.heading(3, '附录子子标题'),
    inline`附录内容，这里也可以加入图片，例如${ref(label('fig:appendix-img'))}。`,
    inline(
      labelled(
        [
          figure(
            { caption: inline`图片测试` },
            inline(space, image({ width: pct(20) }, path('images/ecnu-emblem.svg')), space),
          ),
          space,
        ],
        label('appendix-img'),
      ),
    ),
    m.heading(1, '攻读硕/博士学位期间科研情况'),
    inline(
      contentBlock(
        blocks(
          m.lines(set(enum_, { numbering: '[1]' }), set(par, { justify: false })),
          m.enum(
            m.item([
              'J. von Neumann,',
              space,
              smartquote({ double: true }),
              'First draft of a report on the EDVAC,',
              smartquote({ double: true }),
              space,
              'IEEE Annals of the History of Computing, vol. 15, no. 4, pp. 27–75, 1993, doi: 10.1109/85.238389.',
            ]),
            m.item([
              'A. M. Turing,',
              space,
              smartquote({ double: true }),
              'On Computable Numbers, with an Application to the Entscheidungsproblem,',
              smartquote({ double: true }),
              space,
              'Proceedings of the London Mathematical Society, vol. s2-42, no. 1, pp. 230–265, 1937, doi: 10.1112/plms/s2-42.1.230.',
            ]),
          ),
        ),
      ),
    ),
  )
}
