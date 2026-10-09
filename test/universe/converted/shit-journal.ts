// Converted from test/universe/corpus/shit-journal.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  define,
  doc,
  external,
  figure,
  image,
  importPackage,
  inline,
  label,
  labelled,
  m,
  path,
  pct,
  ref,
  show,
  space,
  strong,
  symbol,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const paper = external('paper')
  const conftables = define('conftables')
    .pos('arg1', T.content)
    .pos('arg2', T.content)
    .pos('arg3', T.content)
    .pos('arg4', T.content)
    .pos('arg5', T.content)
    .pos('arg6', T.content)
    .pos('arg7', T.content)
    .pos('arg8', T.content)
    .pos('arg9', T.content)
    .named('caption', T.content, [])
    .returns(T.any)
    .external()
  const paper_with = define('with')
    .named('abstract', T.content, [])
    .named('affiliations', T.any, null)
    .named('authors', T.any, null)
    .named('corres-email', T.any, null)
    .named('corres-name', T.any, null)
    .named('funding', T.any, null)
    .named('impact', T.content, [])
    .named('keywords', T.content, [])
    .named('title', T.any, null)
    .returns(T.any)
    .external(paper)
  return doc(
    importPackage('@preview/shit-journal:0.1.0', [paper, conftables]),
    m.lines(
      show(
        paper_with({
          title: '这里是论文的中文标题，请替换为您的研究题目',
          authors: [
            { name: '第一作者', marks: '1' },
            { name: '第二作者', marks: '2' },
            { name: '第三作者', marks: '1，*' },
          ],
          affiliations: [
            { id: '1', name: '第一单位，城市，国家' },
            { id: '2', name: '第二单位，城市，国家' },
          ],
          corresName: '第三作者',
          corresEmail: 'author@example.com',
          funding: '本研究由某某基金资助（项目编号：XXXXXXX）',
          abstract: inline`${space}摘要应简洁概括论文的内容，并涵盖以下要点。目的：用通俗易懂的语言简要陈述所研究的问题或议题。结果：简要总结研究的结果和发现。结论：对研究结果给出简短的总结性评述。摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要摘要。${space}`,
          keywords: inline`${space}关键词一，关键词二，关键词三，关键词四，关键词五。${space}`,
          impact: inline`${space}概括本文报告的研究工作的主要发现。${space}`,
        }),
      ),
      m.heading(1, 'INTRODUCTION / 引言'),
      inline`本文研究了某某问题${ref(label('ref1'))} 。近年来，随着某某技术的快速发展，该领域受到了广泛关注。然而，目前仍存在诸多挑战，例如某某问题尚未得到有效解决。本文提出了一种新的方法来解决上述问题。`,
    ),
    '引言部分应包含以下内容：研究背景与动机、相关工作综述、本文的主要贡献以及论文的组织结构。引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言引言。',
    m.lines(
      m.heading(1, 'RESULTS / 结果'),
      inline`本节展示实验结果。${ref(label('tablename'))} 和${ref(label('figurename'))} 分别展示了定量和定性结果。`,
    ),
    m.lines(
      inline`实验结果表明，所提出的方法在多个评价指标上均优于现有的基线方法。具体而言，在指标一上提升了X${symbol('%')}，在指标二上提升了Y${symbol('%')}。结果结果结果结果结果结果结果结果结果结果结果结果结果结果结果结果结果结果结果结果结果结果结果结果结果结果。`,
      m.heading(1, 'DISCUSSION / 讨论'),
      '本节对实验结果进行讨论与分析。讨论讨论讨论讨论讨论讨论讨论讨论讨论讨论讨论讨论讨论讨论讨论讨论讨论讨论讨论讨论讨论讨论讨论讨论讨论讨论讨论讨论讨论讨论讨论讨论讨论。',
    ),
    m.lines(
      m.heading(2, 'Equations / 公式'),
      inline`公式应连续编号，编号用括号括起来并靠右对齐，如${ref(label('equationname'))} 所示。`,
    ),
    inline(
      labelled(
        [
          unsafeRaw.math.block`integral_0^(r_2) F(r, phi) d r d phi &= [sigma r_2 \\/ (2 mu_0)] \\
  & #h(-6em) integral_0^(+oo) exp(-lambda |z_j - z_i|) lambda^(-1) J_1(lambda r_2) J_0(lambda r_1) d lambda`,
          space,
        ],
        label('equationname'),
      ),
    ),
    m.lines(
      '请确保公式中的符号在公式出现之前或紧随其后进行定义。讨论讨论讨论讨论讨论讨论讨论讨论讨论讨论讨论讨论讨论讨论讨论。',
      m.heading(1, 'CONCLUSION / 结论'),
      '本文提出了一种用于解决某某问题的新方法。实验结果表明，所提方法在多个基准数据集上取得了优异的性能。主要贡献总结如下：',
    ),
    '第一，提出了某某创新方法；第二，设计了某某实验验证方案；第三，在某某数据集上验证了方法的有效性。',
    '未来工作将进一步探索该方法在更多场景中的应用。结论结论结论结论结论结论结论结论结论结论结论结论结论结论结论。',
    inline(
      labelled(
        [
          conftables(
            { caption: inline`各方法在基准数据集上的性能比较。粗体表示最优结果。` },
            inline`方法A`,
            inline`85.2`,
            inline`90.1`,
            inline`方法B`,
            inline`87.5`,
            inline`91.3`,
            inline`本文方法`,
            inline(strong(inline`92.1`)),
            inline(strong(inline`95.6`)),
          ),
          space,
        ],
        label('tablename'),
      ),
    ),
    m.lines(
      m.heading(1, 'MATERIALS AND METHODS / 材料与方法'),
      inline`本节介绍实验所使用的材料与方法。材料与方法材料与方法材料与方法材料与方法材料与方法材料与方法材料与方法材料与方法材料与方法材料与方法材料与方法材料与方法材料与方法。
${labelled([figure({ caption: inline`示例图片说明。请在此处描述图片的内容和意义。` }, image({ width: pct(100) }, path('img/fig1.png'))), space], label('figurename'))}`,
    ),
    m.lines(
      m.heading(1, '补充材料'),
      '补充材料部分的简要说明。如有补充材料，请在此引导读者了解补充材料的内容。',
      m.heading(1, '致谢'),
      '致谢内容。感谢某某机构和个人对本研究的支持与帮助。',
    ),
  )
}
