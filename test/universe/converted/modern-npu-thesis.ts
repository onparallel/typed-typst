// Converted from test/universe/corpus/modern-npu-thesis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  align,
  bibliography,
  blocks,
  center,
  datetime,
  define,
  doc,
  em,
  external,
  figure,
  fr,
  grid,
  horizon,
  image,
  importPackage,
  inline,
  label,
  labelled,
  let_,
  m,
  parbreak,
  path,
  pct,
  pt,
  raw,
  ref,
  space,
  sym,
  table,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const algorithm = define('algorithm')
    .named('input', T.content, [])
    .named('output', T.content, [])
    .named('steps', T.any, null)
    .named('title', T.content, [])
    .returns(T.any)
    .external()
  const algorithmRef = define('algorithm-ref').pos('arg1', T.any).returns(T.any).external()
  const nwpuThesis = external('nwpu-thesis')
  const nwpuThesis_with = define('with').pos('arg1', T.any).returns(T.any).external(nwpuThesis)
  const [thesisConfigDecl, thesisConfig] = let_('thesis-config', {
    doctype: 'master',
    degree: 'professional',
    anonymous: false,
    coloredCover: true,
    info: {
      title: ['基于 Typst 的', '西北工业大学学位论文'],
      titleEn: 'First Line \n              Second Line',
      studentId: '2023123456',
      clc: 'TP311.1',
      author: '航小天',
      authorEn: 'Xiaotian Hang',
      department: '计算机学院',
      major: '计算机科学与技术',
      majorEn: 'Computer Science and Technology',
      supervisor: ['张三', '教授'],
      supervisorEn: 'San Zhang',
      submitDate: { year: 2026, month: 3 },
      reviewers: [
        { name: 'xxx', title: '教授', unit: '西北工业大学（明评示例）' },
        { name: '全盲评阅', title: '无', unit: '无（盲评示例）' },
      ],
      defenceCommittee: {
        date: datetime({ year: 2026, month: 3, day: 9 }),
        chairman: { name: '赵某某', title: '教授', unit: '西北工业大学' },
        members: [
          { name: '钱某某', title: '教授', unit: '西安交通大学' },
          { name: '孙某某', title: '教授', unit: '西安电子科技大学' },
          { name: '周某某', title: '教授', unit: '西北工业大学' },
          { name: '吴某某', title: '副教授', unit: '西北工业大学' },
        ],
        secretary: { name: '郑某某', title: '讲师', unit: '西北工业大学' },
      },
    },
    bibliography: bibliography.with(path('ref.bib')),
    abstract: inline`${space}中文摘要内容。中文摘要一般应说明研究工作目的、实验方法、结果和最终结论等，而重点是结果和结论。摘要中不用图、表、化学结构式、非公知公用的符号和术语。${space}`,
    keywords: ['关键词一', '关键词二', '关键词三', '关键词四'],
    funding: '本研究得到某某基金（编号：   ）资助。',
    abstractEn: inline`${space}English abstract content. The abstract should generally explain the purpose, experimental
methods, results, and final conclusions of the research, with emphasis on the results and conclusions.${space}`,
    keywordsEn: ['Keyword1', 'Keyword2', 'Keyword3', 'Keyword4'],
    fundingEn: 'The present work is supported by the XXX（Project No.xxx）',
    appendix: blocks(
      m.lines(m.heading(1), '附录是学位论文主体的补充，并不是必需的。'),
      '附录编号依次编为附录A、附录B。附录标题各占一行，按一级标题编排。每一个附录一般应另起一页编排，如果有多个较短的附录，也可接排。',
    ),
    acknowledgement: inline`${space}致谢是作者对该文章的形成作过贡献的组织或个人予以感谢的文字记载，语言要诚恳、恰当、简短。致谢内容可以包括但不限于：国家科学基金、资助研究工作的奖学金基金、合同单位、资助或支持的企业、组织或个人；协助完成研究工作和提供便利条件的组织或个人；在研究工作中提出建议和提供帮助的人；给予转载和引用权的资料、图片、文献、研究和调查的所有者；其他应感谢的组织和个人。${space}`,
    academicAchievements: inline`${space}不同类型的成果列表书写格式与参考文献相同。对于学术论文，如已发表的被EI或SCI收录，应标明收录号；SCI论文一般应标注发表当年的影响因子；对已录用但尚未发表的学术论文，请注明是否EI或SCI刊源。${space}`,
    scanDeclaration: image(path('images/声明.pdf')),
  })
  const [thesisBodyDecl, thesisBody] = let_(
    'thesis-body',
    blocks(
      parbreak(),
      m.heading(1, '绪论'),
      m.heading(2, '研究背景'),
      'XXX',
      m.heading(3, '研究意义'),
      '研究意义内容。',
      m.heading(3, '研究现状'),
      '研究现状内容。',
      m.heading(2, '研究内容'),
      '研究内容概述。',
      m.heading(2, '图表测试'),
      inline`引用${ref(label('tbl:timing-tlt'))}，以及${ref(label('fig:test'))}。引用图表时，表格和图片分别需要加上 ${raw('tbl:')}和${raw('fig:')}
前缀才能正常显示编号。`,
      inline(
        labelled(
          [
            figure(
              { caption: inline`三线表` },
              table(
                {
                  columns: [fr(1), fr(1), fr(1), fr(1)],
                  stroke: null,
                  inset: { x: em(0.3), y: em(0.4) },
                  align: add(center, horizon),
                },
                table.hline({ y: 0, stroke: pt(1.5) }),
                table.header(inline`t`, inline`1`, inline`2`, inline`3`),
                table.hline({ y: 1, stroke: pt(0.5) }),
                inline`y`,
                inline`0.3s`,
                inline`0.4s`,
                inline`0.8s`,
                table.hline({ y: 2, stroke: pt(1.5) }),
              ),
            ),
            space,
          ],
          label('timing-tlt'),
        ),
      ),
      inline(
        labelled(
          [
            figure(
              { caption: inline`复杂三线表示例：聚合物基复合材料的性能` },
              table(
                {
                  columns: [fr(1.25), fr(1), fr(1), fr(1), fr(1)],
                  stroke: null,
                  inset: { x: em(0.3), y: em(0.4) },
                  align: add(center, horizon),
                },
                table.hline({ y: 0, stroke: pt(1.5) }),
                table.cell({ rowspan: 2 }, inline`材料`),
                table.cell({ colspan: 2 }, inline`碳/环氧`),
                table.cell({ colspan: 2 }, inline`玻璃/环氧`),
                table.hline({ y: 1, start: 1, stroke: pt(0.5) }),
                inline`纵向`,
                inline`横向`,
                inline`纵向`,
                inline`横向`,
                table.hline({ y: 2, stroke: pt(0.5) }),
                inline`模量，GPa`,
                inline`181`,
                inline`10.3`,
                inline`38.6`,
                inline`8.3`,
                inline`压缩强度，MPa`,
                inline`1500`,
                inline`246`,
                inline`610`,
                inline`118`,
                inline`拉伸强度，MPa`,
                inline`1500`,
                inline`40`,
                inline`1062`,
                inline`31`,
                table.hline({ y: 5, stroke: pt(1.5) }),
              ),
            ),
            space,
          ],
          label('composite-performance'),
        ),
      ),
      inline(
        labelled(
          [figure({ caption: inline`图片测试` }, image({ width: pct(45) }, path('images/博士论文封面.jpg'))), space],
          label('test'),
        ),
      ),
      '图片之间的文字',
      inline(
        labelled(
          [
            figure(
              { caption: inline`总图标题` },
              grid(
                { columns: [fr(1), fr(1)], gutter: em(1) },
                align(
                  center,
                  inline`${space}${image({ width: pct(60) }, path('images/博士论文封面.jpg'))} (a) 第一个子图说明${space}`,
                ),
                align(
                  center,
                  inline`${space}${image({ width: pct(60) }, path('images/博士论文封底.jpg'))} (b) 第二个子图说明${space}`,
                ),
              ),
            ),
            space,
          ],
          label('fig-main'),
        ),
      ),
      inline(
        labelled(
          [
            figure(
              { caption: inline`总图标题` },
              grid(
                { columns: [fr(1), fr(1)], rows: [pt(200), pt(200)], gutter: em(1) },
                align(
                  center,
                  inline`${space}${image({ width: pct(50) }, path('images/专硕论文封面.jpg'))} (a) 第一个子图说明${space}`,
                ),
                align(
                  center,
                  inline`${space}${image({ width: pct(50) }, path('images/专硕论文封底.jpg'))} (b) 第二个子图说明${space}`,
                ),
                align(
                  center,
                  inline`${space}${image({ width: pct(50) }, path('images/学硕论文封面.jpg'))} (c) 第三个子图说明${space}`,
                ),
                align(
                  center,
                  inline`${space}${image({ width: pct(50) }, path('images/学硕论文封底.jpg'))} (d) 第四个子图说明${space}`,
                ),
              ),
            ),
            space,
          ],
          label('fig-main'),
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
      m.heading(2, '算法示例'),
      inline`下面给出采用单独算法编号的三线表风格算法示例，见${algorithmRef(label('alg:binary-search'))}。`,
      inline(
        labelled(
          [
            algorithm({
              title: inline`二分查找算法`,
              input: inline`有序数组 ${unsafeRaw.math`A`}，目标值 target。`,
              output: inline`目标值下标，不存在则返回 ${sym.minus}1。`,
              steps: [
                inline`left := 0`,
                inline`right := len(A) - 1`,
                inline`while left <= right do`,
                inline`${space}mid := floor((left + right) / 2)`,
                inline`${space}if A.at(mid) == target`,
                inline`${space}return mid`,
                inline`${space}else if A.at(mid) < target`,
                inline`${space}left := mid + 1`,
                inline`${space}else`,
                inline`${space}right := mid - 1`,
                inline`return ${sym.minus}1`,
              ],
            }),
            space,
          ],
          label('alg:binary-search'),
        ),
      ),
      m.heading(2, '参考文献'),
      inline`可以像这样引用参考文献${ref(label('蒋有绪1998'))}，引用两个以上的文献时，文献之间用逗号分隔，如${ref(label('WHO1970'))} ${ref(label('张志祥1998'))}，引用三个以上的文献 ${ref(label('河北绿洲2001'))}
${ref(label('李炳穆2000'))} ${ref(label('丁文祥2000'))}。`,
      m.heading(1, '研究方法'),
      m.heading(2, '方法概述'),
      '方法概述内容。',
      m.heading(2, '实验设计'),
      '实验设计内容。',
    ),
  )
  return doc(
    inline`﻿${importPackage('@preview/modern-npu-thesis:0.1.0', [algorithm, algorithmRef, nwpuThesis])}`,
    thesisConfigDecl,
    thesisBodyDecl,
    m.lines(unsafeRaw.markup`#show: nwpu-thesis.with(..thesis-config)`, inline(thesisBody)),
  )
}
