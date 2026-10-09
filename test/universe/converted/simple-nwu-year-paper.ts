// Converted from test/universe/corpus/simple-nwu-year-paper.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  define,
  doc,
  external,
  figure,
  fr,
  heading,
  horizon,
  image,
  importPackage,
  inline,
  label,
  labelled,
  let_,
  linebreak,
  lorem,
  m,
  path,
  pct,
  pt,
  ref,
  show,
  space,
  strong,
  table,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const template = external('template')
  const template_with = define('with')
    .named('doc-show-cover', T.any, null)
    .named('doc-show-en-abstract', T.any, null)
    .named('doc-show-outline', T.any, null)
    .named('doc-show-zh-abstract', T.any, null)
    .named('font-sans', T.any, null)
    .named('font-serif', T.any, null)
    .named('meta-bib-path', T.any, null)
    .named('meta-department', T.content, [])
    .named('meta-en-abstract', T.any, null)
    .named('meta-en-keywords', T.any, null)
    .named('meta-grade', T.any, null)
    .named('meta-lang', T.any, null)
    .named('meta-major', T.content, [])
    .named('meta-stu-name', T.content, [])
    .named('meta-stu-number', T.any, null)
    .named('meta-tch-name', T.content, [])
    .named('meta-title', T.content, [])
    .named('meta-zh-abstract', T.any, null)
    .named('meta-zh-keywords', T.any, null)
    .returns(T.any)
    .external(template)
  const [zhAbstractDecl, zhAbstract] = let_(
    'zh-abstract',
    inline`${space}本文设计并实现了一个基于 Typst 的西北大学学年论文排版系统。针对传统排版工具排版效率低、配置复杂的问题，本模板利用 Typst 的高效编译特性，构建了符合学校规范的学术论文排版流水线。
通过对封面、摘要、正文以及参考文献生命周期的统一拦截管理，实现了章内图表公式联动编号、全自动目录生成以及跨平台的双轨字体回退机制。实际测试表明，该系统能够显著提升论文撰写效率，保证排版格式的严格合规。${space}`,
  )
  const [enAbstractDecl, enAbstract] = let_(
    'en-abstract',
    inline`${space}This paper designs and implements an academic year paper typesetting system for Northwest
University based on Typst. Aiming at the problems of low efficiency and complex configuration
of traditional typesetting tools, this template utilizes the efficient compilation characteristics
of Typst to build a typesetting pipeline that complies with university regulations. Through
the unified interception and management of the lifecycles of the cover, abstract, main body,
and bibliography, it realizes chapter-independent numbering of figures, tables, and formulas.${space}`,
  )
  return doc(
    importPackage('@preview/simple-nwu-year-paper:0.1.0', [template]),
    zhAbstractDecl,
    enAbstractDecl,
    show(
      template_with({
        docShowCover: true,
        docShowZhAbstract: true,
        docShowEnAbstract: true,
        docShowOutline: true,
        fontSerif: ['Times New Roman', 'Source Han Serif', 'SimSun', 'STSong'],
        fontSans: ['Arial', 'Source Han Sans', 'Microsoft YaHei', 'SimHei'],
        metaLang: 'zh',
        metaTitle: inline`基于 Typst 的西北大学学年论文${linebreak()} 排版系统设计与实现`,
        metaStuName: inline`张三`,
        metaStuNumber: '2026000001',
        metaTchName: inline`李四 教授`,
        metaDepartment: inline`计算机科学与技术学院`,
        metaMajor: inline`软件工程`,
        metaGrade: '2026级',
        metaZhAbstract: zhAbstract,
        metaZhKeywords: [inline`Typst 论文`, inline`西北大学`, inline`自动化排版`, inline`开源模板`],
        metaEnAbstract: enAbstract,
        metaEnKeywords: [
          inline`Typst Template`,
          inline`Northwest University`,
          inline`Typesetting`,
          inline`Academic Paper`,
        ],
        metaBibPath: '/template/ref.bib',
      }),
    ),
    m.lines(
      inline(labelled(heading({ depth: 1 }, inline('引言')), label('introduction'))),
      '这是你的第一章引言内容。借助于 Typst 强大的实时编译特性，我们可以极其丝滑地进行学术论文的排版工作。',
    ),
    m.lines(
      m.heading(2, '研究背景与意义'),
      '这是二级标题。在高校中，学年论文与毕业论文的格式审查往往耗费了师生大量的精力。开发一套符合规范的 Typst 模板具有重要的现实意义。',
    ),
    m.lines(m.heading(3, '国内外研究现状'), inline`这是三级标题。这里是一段长文本测试。 ${lorem(200)}`),
    m.lines(m.heading(1, '核心架构设计'), '这是第二章。用来测试多章节的一级标题，以及图表公式的章内联动编号效果。'),
    m.lines(
      m.heading(2, '数学公式重置测试'),
      inline`我们在这里插入一个数学公式，它应该被自动编号为 (2.1)：
${unsafeRaw.math.block`E = m c^2`}`,
    ),
    inline`再来一个行内公式测试 ${unsafeRaw.math`a^2 + b^2 = c^2`}，以及紧接着的块级公式，它应该自动递增为 (2.2)：
${unsafeRaw.math.block`P(A|B) = (P(B|A) P(A)) / P(B)`}`,
    m.lines(
      m.heading(2, '图表联动编号测试'),
      inline`测试一张图片的插入与自动编号（预期为：图 2-1）：
${labelled([figure({ caption: inline`校徽样式测试` }, image({ width: pct(40) }, path('assets/logo.png'))), space], label('nwu-logo'))}`,
    ),
    inline`测试一个表格的插入与自动编号（预期为：表 2-1）：
${labelled([figure({ caption: inline`排版工具性能对比测试表` }, table({ columns: [fr(1), fr(1), fr(1)], inset: pt(10), align: horizon }, inline(strong(inline`项目`)), inline(strong(inline`传统排版 (Word)`)), inline(strong(inline`本模板 (Typst)`)), inline`编译速度`, inline`慢 / 易卡顿`, inline`毫秒级实时预览`, inline`格式合规`, inline`需手动调整，易错`, inline`底层强约束`, inline`公式输入`, inline`极其繁琐`, inline`优雅语法`)), space], label('compare-table'))}`,
    m.lines(m.heading(1, '系统实现与测试'), '这是第三章。在这里我们可以测试交叉引用（References）是否正常。'),
    inline`如${ref(label('introduction'))} 所述，本系统的核心设计在于自动化。我们可以通过标签轻松引用图表，例如查看${ref(label('nwu-logo'))}
展现的视觉效果，或者参考${ref(label('compare-table'))} 中的数据对比。`,
    inline(lorem(500)),
  )
}
