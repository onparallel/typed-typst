// Converted from test/universe/corpus/modern-swjtu-thesis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  call,
  contentBlock,
  datetime,
  define,
  doc,
  figure,
  importPackage,
  inline,
  label,
  labelled,
  let_,
  m,
  path,
  raw,
  ref,
  show,
  space,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const documentclass = define('documentclass')
    .named('bibliography', T.any, null)
    .named('fonts', T.any, null)
    .named('info', T.any, null)
    .named('twoside', T.any, null)
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
      fontsDisplayPage,
      cover,
      declPage,
      copyright,
      evaluationPage,
      taskPage,
      abstract,
      abstractEn,
      bilingualBibliography,
      outlinePage,
      listOfFigures,
      listOfTables,
      notation,
      acknowledgement,
    ],
  ] = let_(
    [
      'twoside',
      'doc',
      'preface',
      'mainmatter',
      'appendix',
      'fonts-display-page',
      'cover',
      'decl-page',
      'copyright',
      'evaluation-page',
      'task-page',
      'abstract',
      'abstract-en',
      'bilingual-bibliography',
      'outline-page',
      'list-of-figures',
      'list-of-tables',
      'notation',
      'acknowledgement',
    ],
    documentclass({
      twoside: false,
      fonts: {
        宋体: ['Times New Roman', 'SimSun', 'Noto Serif CJK SC', 'Songti SC', 'STSong'],
        黑体: ['Arial', 'SimHei', 'Noto Sans CJK SC', 'PingFang SC', 'STHeiti'],
        楷体: ['Times New Roman', 'KaiTi', 'Noto Serif CJK SC', 'Kaiti SC', 'STKaiti'],
        仿宋: ['Times New Roman', 'FangSong', 'Noto Serif CJK SC', 'Fang Song', 'STFangsong'],
        等宽: ['Courier New', 'Menlo', 'IBM Plex Mono'],
      },
      info: {
        title: '（此处为论文题目，黑体 2 号字）',
        titleEn: 'My Title in English',
        grade: '20XX',
        studentId: '1234567890',
        author: '张三',
        authorEn: 'Ming Xing',
        department: '某学院',
        departmentEn: 'School of Chemistry and Chemical Engineering',
        major: '某专业',
        majorEn: 'Chemistry',
        supervisor: ['李四', '教授'],
        supervisorEn: 'Professor My Supervisor',
        submitDate: datetime.today(),
      },
      bibliography: bibliography.with(path('ref.bib')),
    }),
  )
  return doc(
    inline(importPackage('@preview/modern-swjtu-thesis:0.1.4', [documentclass])),
    patternDecl,
    show(doc_2),
    inline(call(cover)),
    inline(call(declPage)),
    inline(call(copyright)),
    show(preface),
    inline(call(evaluationPage)),
    inline(call(taskPage)),
    inline(call(abstract, { keywords: [] }, inline`${space}（正文略）${space}`)),
    inline(call(abstractEn, { keywords: [] }, inline`${space}（正文略）${space}`)),
    inline(call(outlinePage)),
    show(mainmatter),
    m.heading(1, '导　论'),
    m.heading(2, '列表'),
    m.heading(3, '无序列表'),
    m.list(
      m.item(['无序列表项一']),
      m.item(m.lines('无序列表项二', m.list(m.item(['无序子列表项一']), m.item(['无序子列表项二'])))),
    ),
    m.heading(3, '有序列表'),
    m.enum(
      m.item(['有序列表项一']),
      m.item(m.lines('有序列表项二', m.enum(m.item(['有序子列表项一']), m.item(['有序子列表项二'])))),
    ),
    m.heading(3, '术语列表'),
    m.terms(m.term(['术语一'], ['术语解释']), m.term(['术语二'], ['术语解释'])),
    m.heading(2, '图表'),
    m.heading(2, '数学公式'),
    inline`可以像 Markdown 一样写行内公式 ${unsafeRaw.math`x + y`}，以及带编号的行间公式：`,
    inline(labelled([unsafeRaw.math.block`phi.alt := (1 + sqrt(5)) / 2`, space], label('ratio'))),
    inline`引用数学公式需要加上 ${raw('eqt:')} 前缀，则由${ref(label('eqt:ratio'))}，我们有：`,
    inline(unsafeRaw.math.block`F_n = floor(1 / sqrt(5) phi.alt^n)`),
    inline`我们也可以通过 ${raw('<->')} 标签来标识该行间公式不需要编号`,
    inline(labelled([unsafeRaw.math.block`y = integral_1^2 x^2 dif x`, space], label('-'))),
    '而后续数学公式仍然能正常编号。',
    inline(unsafeRaw.math.block`F_n = floor(1 / sqrt(5) phi.alt^n)`),
    m.heading(2, '参考文献'),
    inline`可以像这样引用参考文献：图书${contentBlock(inline(ref(label('蒋有绪1998'))))}和会议${contentBlock(inline(ref(label('中国力学学会1990'))))}。`,
    m.heading(2, '代码块'),
    inline`代码块支持语法高亮。引用时需要加上 ${raw('lst:')} ${ref(label('lst:code'))}`,
    inline(
      labelled(
        [
          figure({ caption: inline`代码块` }, raw({ block: true, lang: 'py' }, 'def add(x, y):\n  return x + y')),
          space,
        ],
        label('code'),
      ),
    ),
    m.heading(1, '正　文'),
    m.heading(2, '正文子标题'),
    m.heading(3, '正文子子标题'),
    '正文内容',
    inline(unsafeRaw.code<any>`if twoside {
  pagebreak() + " "
}`),
    inline(call(bilingualBibliography, { full: true })),
    inline(
      call(
        acknowledgement,
        inline`${space}感谢 NJU-LUG，提供了原始模板，感谢typst团队，提供了强大的工具，以及所有为这个项目提出过建议的同学们。${space}`,
      ),
    ),
    inline(unsafeRaw.code<any>`if twoside {
  pagebreak() + " "
}`),
    show(appendix),
    m.heading(1, '附录'),
    m.heading(2, '附录子标题'),
    m.heading(3, '附录子子标题'),
  )
}
