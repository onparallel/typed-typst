// Converted from test/universe/corpus/modern-hfut-report.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  blocks,
  define,
  doc,
  figure,
  importPackage,
  inline,
  m,
  pt,
  raw,
  show,
  strong,
  sym,
  table,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const hfutReport = define('hfut-report')
    .pos('arg1', T.any)
    .named('author', T.any, null)
    .named('class', T.any, null)
    .named('date', T.any, null)
    .named('department', T.any, null)
    .named('major', T.any, null)
    .named('show-abstract', T.any, null)
    .named('show-appendix', T.any, null)
    .named('show-contents', T.any, null)
    .named('show-cover', T.any, null)
    .named('show-references', T.any, null)
    .named('student-id', T.any, null)
    .named('supervisor', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external()
  const abstract = define('abstract').pos('arg1', T.content).named('keywords', T.any, null).returns(T.any).external()
  const references = define('references').pos('arg1', T.content).returns(T.any).external()
  const appendix = define('appendix').pos('arg1', T.content).returns(T.any).external()
  return doc(
    importPackage('@preview/modern-hfut-report:0.1.1', [hfutReport, abstract, references, appendix]),
    show((doc_2, ctx) =>
      hfutReport(
        {
          title: '数据结构与算法',
          department: '计算机与信息学院',
          major: '计算机科学与技术',
          class: '计算机2023-1班',
          author: '张三',
          studentId: '2023114514',
          supervisor: '李四',
          date: 'today',
          showCover: true,
          showAbstract: true,
          showContents: true,
          showReferences: true,
          showAppendix: true,
        },
        doc_2,
      ),
    ),
    inline(
      abstract(
        { keywords: ['关键词1', '关键词 2', '关键词 3'] },
        blocks(inline`本课程设计主要研究...`, inline`通过本次课程设计，深入理解了...`, inline`实验结果表明...`),
      ),
    ),
    m.heading(1, '引言'),
    inline`本课程设计的目的是${sym.dots.h}${sym.dots.h}`,
    m.heading(2, '研究背景'),
    inline`随着${sym.dots.h}${sym.dots.h}的发展，${sym.dots.h}${sym.dots.h}`,
    m.heading(2, '研究目标'),
    m.lines(
      '本课程设计的主要目标包括：',
      m.enum(
        m.numbered(1, [sym.dots.h, sym.dots.h]),
        m.numbered(2, [sym.dots.h, sym.dots.h]),
        m.numbered(3, [sym.dots.h, sym.dots.h]),
      ),
    ),
    m.heading(1, '相关技术介绍'),
    m.heading(2, '基本概念'),
    inline`${sym.dots.h}${sym.dots.h}`,
    m.heading(2, '技术原理'),
    m.heading(3, '算法复杂度分析'),
    inline`对于${strong(inline`排序算法`)}，我们通常用大O记号来表示其时间复杂度。例如，快速排序的平均时间复杂度为：`,
    inline(unsafeRaw.math.block`T(n) = O(n log n)`),
    inline`其中，${unsafeRaw.math`n`} 表示待排序元素的个数。`,
    m.heading(1, '算法设计'),
    m.heading(2, '总体设计'),
    '算法的基本执行流程如下图所示：',
    inline(
      figure(
        { caption: '算法执行流程图' },
        unsafeRaw.code<any>`{
    import "@preview/fletcher:0.5.8" as fletcher: diagram, edge, node
    diagram(
      node-stroke: 1pt,
      edge-stroke: 1pt,
      node((0, 0), [输入数据], corner-radius: 2pt),
      edge("-|>"),
      node((1, 0), [数据处理], corner-radius: 2pt),
      edge("-|>"),
      node((2, 0), [核心算法], corner-radius: 2pt),
      edge("-|>"),
      node((3, 0), [输出结果], corner-radius: 2pt),
    )
  }`,
      ),
    ),
    m.heading(2, '详细设计'),
    m.heading(3, '模块一'),
    inline`${sym.dots.h}${sym.dots.h}`,
    m.heading(3, '模块二'),
    inline`${sym.dots.h}${sym.dots.h}`,
    m.heading(1, '算法实现'),
    m.heading(2, '开发环境'),
    m.lines(
      '本系统的开发环境如下：',
      m.list(
        m.item(['操作系统：', sym.dots.h, sym.dots.h]),
        m.item(['开发工具：', sym.dots.h, sym.dots.h]),
        m.item(['编程语言：', sym.dots.h, sym.dots.h]),
      ),
    ),
    m.heading(2, '核心代码'),
    inline(
      raw(
        { block: true, lang: 'python' },
        '# Sample Code\ndef example_function():\n    print("Hello, HFUT!")\n    return True',
      ),
    ),
    m.heading(2, '关键技术'),
    inline`${sym.dots.h}${sym.dots.h}`,
    m.heading(1, '测试与分析'),
    m.heading(2, '测试方案'),
    inline`${sym.dots.h}${sym.dots.h}`,
    m.heading(2, '测试结果'),
    '测试结果如表所示：',
    inline(
      figure(
        { caption: '测试结果表' },
        table(
          { columns: 4, stroke: pt(0.5) },
          inline`测试项目`,
          inline`期望结果`,
          inline`实际结果`,
          inline`是否通过`,
          inline`功能测试1`,
          inline`...`,
          inline`...`,
          inline`...`,
          inline`功能测试2`,
          inline`...`,
          inline`...`,
          inline`...`,
          inline`性能测试`,
          inline`...`,
          inline`...`,
          inline`...`,
        ),
      ),
    ),
    m.heading(2, '结果分析'),
    inline`${sym.dots.h}${sym.dots.h}`,
    m.heading(1, '总结与展望'),
    m.heading(2, '工作总结'),
    inline`通过本次课程设计，我${sym.dots.h}${sym.dots.h}`,
    m.heading(2, '存在问题'),
    m.lines(
      '在实现过程中，发现以下问题：',
      m.enum(m.numbered(1, [sym.dots.h, sym.dots.h]), m.numbered(2, [sym.dots.h, sym.dots.h])),
    ),
    m.heading(2, '改进方向'),
    m.lines(
      '未来可以从以下方面进行改进：',
      m.enum(m.numbered(1, [sym.dots.h, sym.dots.h]), m.numbered(2, [sym.dots.h, sym.dots.h])),
    ),
    inline(
      references(
        blocks(
          m.enum(
            { tight: false },
            m.numbered(1, ['作者1, 作者2. 文献标题[J]. 期刊名称, 年份, 卷(期): 页码.']),
            m.numbered(2, ['作者. 书籍标题[M]. 出版地: 出版社, 年份.']),
            m.numbered(3, ['作者. 网页标题[EB/OL]. 网址, 访问日期.']),
          ),
        ),
      ),
    ),
    inline(
      appendix(
        blocks(
          m.heading(2, '附录A：完整代码'),
          inline(raw({ block: true, lang: 'python' }, '# Complete Code')),
          m.heading(2, '附录B：测试数据'),
          inline`${sym.dots.h}${sym.dots.h}`,
        ),
      ),
    ),
  )
}
