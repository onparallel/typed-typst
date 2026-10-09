// Converted from test/universe/corpus/modern-upc-thesis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  codeBlock,
  contentBlock,
  define,
  doc,
  em,
  external,
  figure,
  h,
  heading,
  image,
  importPackage,
  inline,
  label,
  labelled,
  m,
  page,
  pagebreak,
  path,
  pct,
  raw,
  read,
  ref,
  set,
  show,
  space,
  table,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const documentclass = external('documentclass')
  const makeOutline = define('make-outline').named('title-override', T.content, []).returns(T.any).external()
  const threeLineTable = define('three-line-table')
    .pos('arg1', T.content)
    .pos('arg2', T.content)
    .pos('arg3', T.content)
    .pos('arg4', T.content)
    .pos('arg5', T.content)
    .pos('arg6', T.content)
    .pos('arg7', T.content)
    .pos('arg8', T.content)
    .pos('arg9', T.content)
    .pos('arg10', T.content)
    .pos('arg11', T.content)
    .pos('arg12', T.content)
    .named('columns', T.any, null)
    .named('header', T.any, null)
    .returns(T.any)
    .external()
  const hcell = define('hcell').pos('arg1', T.any).returns(T.any).external()
  const themeApply = external('theme-apply')
  const setupMainmatter = external('setup-mainmatter')
  const frontmatterHeader = external('frontmatter-header')
  const mainmatterHeader = external('mainmatter-header')
  const footerContent = external('footer-content')
  const upcabstractcn = define('upcabstractcn')
    .pos('arg1', T.content)
    .named('cn-subtitle', T.any, null)
    .named('cn-title', T.any, null)
    .named('keywords', T.any, null)
    .returns(T.any)
    .external()
  const upcabstracten = define('upcabstracten')
    .pos('arg1', T.content)
    .named('en-subtitle', T.any, null)
    .named('en-title', T.any, null)
    .named('keywords', T.any, null)
    .returns(T.any)
    .external()
  const upcacknowledgements = define('upcacknowledgements').pos('arg1', T.content).returns(T.any).external()
  const upcoriginality = define('upcoriginality').named('title', T.any, null).returns(T.any).external()
  const upclicense = define('upclicense').returns(T.any).external()
  const appendixEnv = define('appendix-env').pos('arg1', T.content).returns(T.any).external()
  const titlepage = define('titlepage')
    .named('advisor', T.any, null)
    .named('author', T.any, null)
    .named('college', T.any, null)
    .named('date', T.any, null)
    .named('major', T.any, null)
    .named('student-id', T.any, null)
    .named('subtitle', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external()
  const initGb7714 = external('init-gb7714')
  const gb7714Bibliography = define('gb7714-bibliography')
    .named('full-control', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external()
  const documentclass_with = define('with').named('theme', T.any, null).returns(T.any).external(documentclass)
  const themeApply_with = define('with')
    .named('advisor', T.any, null)
    .named('author', T.any, null)
    .named('institute', T.any, null)
    .named('title', T.any, null)
    .named('university', T.any, null)
    .returns(T.any)
    .external(themeApply)
  const initGb7714_with = define('with')
    .pos('arg1', T.any)
    .named('style', T.any, null)
    .named('version', T.any, null)
    .returns(T.any)
    .external(initGb7714)
  return doc(
    m.lines(
      importPackage('@preview/modern-upc-thesis:0.2.0', [
        documentclass,
        makeOutline,
        threeLineTable,
        hcell,
        { item: 'upc-apply', as: themeApply },
        setupMainmatter,
        frontmatterHeader,
        mainmatterHeader,
        footerContent,
        upcabstractcn,
        upcabstracten,
        upcacknowledgements,
        upcoriginality,
        upclicense,
        appendixEnv,
        titlepage,
      ]),
      importPackage('@preview/gb7714-bilingual:0.2.3', [initGb7714, gb7714Bibliography]),
    ),
    show(
      documentclass_with({
        theme: themeApply_with({
          title: '论文标题',
          author: '作者姓名',
          advisor: '导师姓名',
          institute: '学院名称',
          university: '中国石油大学（华东）',
        }),
      }),
    ),
    inline(
      titlepage({
        title: '论文标题',
        subtitle: '副标题（可选）',
        author: '作者姓名',
        studentId: '学号',
        college: '学院',
        major: '专业',
        advisor: '导师姓名',
        date: '2026年6月20日',
      }),
    ),
    m.lines(
      set(page, { header: null, footer: null }),
      inline(upcoriginality({ title: '论文标题' }), space, upclicense(), space, pagebreak()),
    ),
    inline(
      upcabstractcn(
        { keywords: ['关键词1', '关键词2', '关键词3'], cnTitle: '论文标题', cnSubtitle: '副标题（可选）' },
        inline`${space}在此处填写中文摘要内容。摘要应概括论文的研究背景、主要方法、核心结果与结论，字数一般在300–500字左右。${space}`,
      ),
    ),
    inline(
      upcabstracten(
        { keywords: ['keyword1', 'keyword2', 'keyword3'], enTitle: 'English Title', enSubtitle: 'English Subtitle' },
        inline`${space}Write the English abstract here. It should briefly summarize the research background,
methodology, key results, and conclusions of the thesis.${space}`,
      ),
    ),
    m.lines(
      set(page, { header: frontmatterHeader, footer: null }),
      inline(makeOutline({ titleOverride: inline`目${h(em(1))}录` })),
    ),
    show(initGb7714_with({ style: 'numeric', version: '2015' }, read(path('ref.bib')))),
    show(setupMainmatter),
    m.heading(1, '引言'),
    '在此处撰写第一章「引言」。介绍研究背景、研究意义、国内外研究现状以及本文的主要研究内容与组织结构。',
    m.heading(1, '相关技术综述'),
    '在此处撰写第二章「相关技术综述」。综述与本课题相关的基础理论、核心技术与已有研究成果。',
    m.heading(1, '系统设计与实现'),
    '在此处撰写第三章「系统设计与实现」。详细描述系统的总体架构、模块划分、关键算法与实现细节。',
    m.heading(1, '实验与结果分析'),
    '在此处撰写第四章「实验与结果分析」。展示实验设置、测试数据、结果图表与分析讨论。',
    m.heading(2, '图片示例'),
    inline`引用图片${ref(label('fig:logo'))}。图片标题位于图片下方，编号格式为"图 X-Y"。`,
    inline(
      labelled(
        [figure({ caption: inline`校徽示例` }, image({ width: pct(20) }, path('images/logo.pdf'))), space],
        label('fig:logo'),
      ),
    ),
    m.heading(2, '表格示例'),
    inline`引用表格${ref(label('tab:example'))}。表格标题位于表格上方，编号格式为"表 X-Y"。推荐使用模板提供的 ${raw('#three-line-table')}
函数排版三线表。`,
    inline(
      labelled(
        [
          figure(
            { kind: table, caption: inline`实验数据示例` },
            threeLineTable(
              { columns: 4, header: [hcell('参数'), hcell('数值'), hcell('单位'), hcell('备注')] },
              inline`功率密度`,
              inline(unsafeRaw.math`6.37 times 10^3`),
              inline(unsafeRaw.math`W dot "cm"^(-2)`),
              inline`最优值`,
              inline`扫描速度`,
              inline`12`,
              inline(unsafeRaw.math`"mm" slash "s"`),
              inline`标准值`,
              inline`光斑直径`,
              inline`2.5`,
              inline(unsafeRaw.math`"mm"`),
              inline`聚焦后`,
            ),
          ),
          space,
        ],
        label('tab:example'),
      ),
    ),
    m.heading(2, '公式示例'),
    inline`行内公式：${unsafeRaw.math`x + y = z`}。带编号的行间公式如${ref(label('eqt:emc'))} 所示：`,
    inline(labelled([unsafeRaw.math.block`E = m c^2`, space], label('eqt:emc'))),
    m.heading(1, '结论与展望'),
    '在此处撰写第五章「结论与展望」。总结全文工作，指出创新点与不足，并对未来研究方向进行展望。',
    m.heading(2, '参考文献引用示例'),
    inline`可以像这样引用参考文献：专著${contentBlock(inline(ref(label('蒋有绪1998'))))}、期刊${contentBlock(inline(ref(label('李炳穆2000'))))}、英文期刊${contentBlock(inline(ref(label('CHRISTINE1998'))))}以及会议${contentBlock(inline(ref(label('中国力学学会1990'))))}。`,
    inline(
      upcacknowledgements(
        inline`${space}在此向所有在论文撰写与研究过程中给予帮助和支持的老师、同学及家人致以诚挚的感谢。${space}`,
      ),
    ),
    m.lines(
      set(page, { header: frontmatterHeader, footer: footerContent }),
      inline(
        heading({ level: 1, numbering: null, outlined: true }, inline`参考文献`),
        space,
        gb7714Bibliography({
          fullControl: unsafeRaw.code<any>`entries => {
    for e in entries {
      par(justify: true, first-line-indent: 0pt, justification-limits: (tracking: (min: -0.08em, max: 0.08em)))[#box(width: 1.7em, align(left, "[" + str(e.order) + "]"))#e.labeled-rendered]
    }
  }`,
          title: null,
        }),
      ),
    ),
    m.lines(
      set(page, { header: frontmatterHeader, footer: footerContent }),
      inline(
        heading({ level: 1, numbering: null, outlined: true }, inline`附${h(em(1))}录`),
        space,
        appendixEnv(inline`${space}附录内容可放置补充材料，如详细推导、源代码、额外数据表等。${space}`),
      ),
    ),
  )
}
