// Converted from test/universe/corpus/modern-bnu-course-paper.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  align,
  bibliography,
  call,
  center,
  contentBlock,
  datetime,
  define,
  doc,
  external,
  figure,
  h,
  horizon,
  image,
  importPackage,
  inline,
  label,
  labelled,
  let_,
  linebreak,
  ltr,
  m,
  path,
  pct,
  pt,
  raw,
  ref,
  show,
  space,
  stack,
  sym,
  table,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const documentclass = define('documentclass')
    .named('bibliography', T.any, null)
    .named('info', T.any, null)
    .named('twoside', T.any, null)
    .returns(T.any)
    .external()
  const indent = external('indent')
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
      abstract,
      bilingualBibliography,
      outlinePage,
      notation,
      acknowledgement,
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
      'abstract',
      'bilingual-bibliography',
      'outline-page',
      'notation',
      'acknowledgement',
    ],
    documentclass({
      twoside: false,
      info: {
        title: ['基于Typst的北京师范大学课程论文模板', ''],
        titleEn: 'Beijing Normal University course paper template based on Typst',
        grade: '2024',
        studentId: '202422017xxx',
        author: '张　三',
        authorEn: 'Zhang San',
        department: '未来设计学院',
        departmentEn: 'School of Airtifi',
        major: '美术与书法',
        majorEn: 'Art and calligraphy',
        supervisor: ['李　四', '教　授', '未来设计学院'],
        supervisorEn: 'Professor My Supervisor',
        submitDate: datetime.today(),
      },
      bibliography: bibliography.with(path('ref.bib')),
    }),
  )
  return doc(
    importPackage('@preview/modern-bnu-course-paper:0.1.0', [documentclass, indent]),
    patternDecl,
    show(doc_2),
    inline(
      call(
        abstract,
        { keywords: ['这里', '就是', '测试用', '关键词'] },
        inline`${space}不加注释和评论的简要陈述就是摘要。摘要应具有独立性和自含性，即不阅读论文的全文，就能获得必要的信息。摘要一般应说明研究工作的目的、方法、结果和结论等，应突出论文的创新点。课程论文的摘要请控制字数，尽可能简介。${space}`,
      ),
    ),
    show(mainmatter),
    m.heading(1, '导 论'),
    m.heading(2, '列 表'),
    m.heading(3, '无序列表'),
    m.list(m.item(['无序列表项一']), m.item(['无序列表项二'])),
    m.heading(3, '有序列表'),
    m.enum(m.item(['有序列表项一']), m.item(['有序列表项二'])),
    m.heading(3, '术语列表'),
    m.terms(m.term(['术语一'], ['术语解释']), m.term(['术语二'], ['术语解释'])),
    m.heading(2, '图表'),
    inline`引用${ref(label('tbl:timing'))}，引用${ref(label('tbl:timing-tlt'))}，以及${ref(label('fig:nju-logo'))}。引用图表时，表格和图片分别需要加上 ${raw('tbl:')}和${raw('fig:')}
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
                  { caption: inline`常规表` },
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
                  { caption: inline`三线表（一般使用）` },
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
      linebreak(),
      space,
      labelled(
        [figure({ caption: inline`图片测试` }, image({ width: pct(50) }, path('images/bnu-emblem.svg'))), space],
        label('nju-logo'),
      ),
    ),
    inline`${indent} 图片（如${ref(label('fig:nju-logo'))}）、公式、表格后另起一段请使用 ${raw('\\#indent')}`,
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
    inline`可以像这样引用参考文献：图书${contentBlock(inline(ref(label('蒋有绪1998'))))}和会议${ref(label('中国力学学会1990'))}。`,
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
    m.heading(1, '材料与方法'),
    m.heading(2, '数据集'),
    m.heading(2, '实验设计'),
    m.heading(1, '结果'),
    m.lines(m.heading(1, '讨论'), inline`Conclusion and Future Work...`),
    inline`Limitations of the study...`,
    inline(call(bilingualBibliography, { full: true })),
    inline(call(mainmatterEnd)),
  )
}
