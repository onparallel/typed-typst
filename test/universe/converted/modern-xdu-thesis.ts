// Converted from test/universe/corpus/modern-xdu-thesis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  call,
  cm,
  counter,
  define,
  doc,
  figure,
  importPackage,
  inline,
  let_,
  m,
  page,
  pagebreak,
  rect,
  show,
  space,
  table,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const documentclass = define('documentclass')
    .named('blind', T.any, null)
    .named('degree', T.any, null)
    .named('info', T.any, null)
    .returns(T.any)
    .external()
  const [
    patternDecl,
    [
      doc_2,
      cover,
      titleCn,
      titleEn,
      declaration,
      abstract,
      abstractEn,
      listOfFigures,
      listOfTables,
      notation,
      abbreviations,
      outlinePage,
      mainmatter,
      appendix,
      references,
      acknowledgement,
      bio,
      __,
      ____,
    ],
  ] = let_(
    [
      'doc',
      'cover',
      'title-cn',
      'title-en',
      'declaration',
      'abstract',
      'abstract-en',
      'list-of-figures',
      'list-of-tables',
      'notation',
      'abbreviations',
      'outline-page',
      'mainmatter',
      'appendix',
      'references',
      'acknowledgement',
      'bio',
      '引用',
      '索引题注',
    ],
    documentclass({
      degree: 'professional',
      blind: false,
      info: {
        title: ['基于深度学习的毫米波大规模 MIMO', '信道估计研究'],
        titleEn: ['Deep Learning based Channel Estimation', 'for mmWave Massive MIMO Systems'],
        author: '张三',
        authorEn: 'Zhang San',
        discipline: '电子科学与技术',
        disciplineEn: 'Electronic Science and Technology',
        subdiscipline: '电磁场与微波技术',
        domain: '人工智能',
        domainEn: 'Artificial Intelligence',
        degreeName: '电子信息硕士',
        degreeNameEn: 'Master of Electronic Information',
        supervisor: ['李四', '教授'],
        supervisorEn: ['Li Si', 'Professor'],
        enterpriseSupervisor: ['王五', '高级工程师'],
        enterpriseSupervisorEn: ['Wang Wu', 'Senior Engineer'],
        department: '电子工程学院',
        departmentEn: 'School of Electronic Engineering',
        submitDate: { year: 2025, month: 6 },
        schoolCode: '10701',
        clc: 'TN82',
        studentId: '21011201234',
        secretLevel: '公开',
        abstract: inline`${space}摘要是学位论文内容不加注释和评论的简短陈述，应简明扼要地陈述研究的目的、内容、方法、
成果和结论，重点突出学位论文的创造性成果。本示例用于验证模板排版，实际使用时请替换为
真实摘要内容。硕士学位论文中文摘要字数一般为 1000 字左右。${space}`,
        abstractEn: inline`${space}The Abstract is a brief description of the content of the dissertation without notes
or comments. It represents concisely the research purpose, content, method, results and conclusion
of the thesis, with emphasis on the creative achievements. This sample is used to verify the
template layout; replace it with real content when writing.${space}`,
        keywords: ['深度学习', '毫米波', '大规模 MIMO', '信道估计'],
        keywordsEn: ['deep learning', 'millimeter wave', 'massive MIMO', 'channel estimation'],
        notation: [
          ['α', '路径损耗指数'],
          ['λ', '载波波长'],
          ['f_c', '载波频率'],
          ['T_s', '符号周期'],
        ],
        abbreviations: [
          ['MIMO', 'Multiple-Input Multiple-Output', '多输入多输出'],
          ['OFDM', 'Orthogonal Frequency Division Multiplexing', '正交频分复用'],
          ['SNR', 'Signal-to-Noise Ratio', '信噪比'],
        ],
      },
    }),
  )
  return doc(
    importPackage('@preview/modern-xdu-thesis:0.1.0', [documentclass]),
    patternDecl,
    show(doc_2),
    inline(call(cover)),
    inline(pagebreak({ to: 'odd' }), space, call(titleCn)),
    inline(pagebreak({ to: 'odd' }), space, call(titleEn)),
    inline(pagebreak({ to: 'odd' }), space, call(declaration)),
    inline(pagebreak({ to: 'odd' }), space, counter(page).update(1), space, call(abstract)),
    inline(pagebreak({ to: 'odd' }), space, call(abstractEn)),
    inline(pagebreak({ to: 'odd' }), space, call(listOfFigures)),
    inline(pagebreak({ to: 'odd' }), space, call(listOfTables)),
    inline(pagebreak({ to: 'odd' }), space, call(notation)),
    inline(pagebreak({ to: 'odd' }), space, call(abbreviations)),
    inline(pagebreak({ to: 'odd' }), space, call(outlinePage)),
    unsafeRaw.markup`#show: mainmatter.with(header-title: "西安电子科技大学硕士学位论文")`,
    m.heading(1, '第一章 绪论'),
    inline`随着第五代移动通信系统的商用部署，毫米波频段因其丰富的频谱资源而受到广泛关注。
大规模多输入多输出（MIMO）技术通过在基站侧配置大规模天线阵列，能够显著提升频谱效率
与能量效率。然而，毫米波信道的稀疏性与高维度特性使得传统信道估计方法面临导频开销大、
计算复杂度高等挑战。本文围绕基于深度学习的毫米波大规模 MIMO 信道估计展开研究。`,
    m.heading(2, '研究背景与意义'),
    inline`毫米波频段通常指 30 GHz 至 300 GHz 的电磁波频段，其可用带宽远大于传统微波频段。
但毫米波信号穿透能力弱、路径损耗大，需要借助大规模天线阵列的波束成形增益来补偿。`,
    m.heading(3, '毫米波信道特性'),
    '毫米波信道在角域呈现显著的稀疏性，这一特性为压缩感知类信道估计方法提供了理论基础。',
    m.heading(4, '路径损耗模型'),
    '自由空间路径损耗随频率升高而增大，毫米波频段的路径损耗明显高于微波频段。',
    m.heading(2, '国内外研究现状'),
    '近年来，基于深度学习的信道估计方法得到了广泛研究，主要分为数据驱动与模型驱动两类。',
    m.heading(1, '第二章 系统模型与问题描述'),
    '本章建立毫米波大规模 MIMO 系统的信号模型，并给出信道估计问题的数学描述。',
    m.heading(2, '系统模型'),
    '考虑单基站单用户的毫米波大规模 MIMO 系统，基站配置均匀线性阵列。',
    inline(
      figure(
        { caption: call(____, inline`系统框图`, inline`毫米波大规模 MIMO 系统框图`) },
        rect({ width: cm(5), height: cm(2.5) }),
      ),
    ),
    m.heading(2, '仿真参数'),
    inline(
      figure(
        { caption: inline`仿真参数设置` },
        table(
          { columns: 3 },
          inline`参数`,
          inline`符号`,
          inline`取值`,
          inline`载波频率`,
          inline(unsafeRaw.math`f_c`),
          inline`28 GHz`,
          inline`带宽`,
          inline(unsafeRaw.math`B`),
          inline`500 MHz`,
        ),
      ),
    ),
    m.heading(2, '信道估计问题描述'),
    '接收信号可表示为',
    inline(unsafeRaw.math.block`bold(y) = bold(A) bold(h) + bold(n)`),
    inline`其中 ${unsafeRaw.math`bold(A)`} 为测量矩阵，${unsafeRaw.math`bold(h)`} 为待估计的稀疏信道向量。信道估计的目标是从观测
${unsafeRaw.math`bold(y)`} 中恢复 ${unsafeRaw.math`bold(h)`}${call(__, 1)}。基于压缩感知的方法利用信道的稀疏性${call(__, 2, 3)}，
在减少导频开销的同时保证估计精度。${call(__, 3)} 指出，当测量矩阵满足有限等距性质时，
可以通过求解凸优化问题精确恢复稀疏信号。`,
    inline(pagebreak({ to: 'odd' }), space, call(appendix)),
    inline(pagebreak({ to: 'odd' }), space, call(references)),
    inline(pagebreak({ to: 'odd' }), space, call(acknowledgement)),
    inline(pagebreak({ to: 'odd' }), space, call(bio)),
  )
}
