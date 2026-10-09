// Converted from test/universe/corpus/std-sjtu-doctoral-annual-progress.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  auto,
  bibliography,
  block,
  blocks,
  center,
  define,
  doc,
  em,
  emph,
  enum_,
  external,
  figure,
  footnote,
  fr,
  h,
  heading,
  highlight,
  horizon,
  image,
  importPackage,
  inline,
  label,
  labelled,
  list,
  m,
  pad,
  par,
  path,
  pct,
  pt,
  raw,
  red,
  ref,
  set,
  show,
  space,
  strong,
  table,
  terms,
  text,
  underline,
  unsafeRaw,
  v,
} from '../../../src/index.ts'

export default () => {
  const project = define('project')
    .pos('arg1', T.any)
    .named('date', T.any, null)
    .named('degree-program', T.any, null)
    .named('dissertation-proposal-date', T.any, null)
    .named('dissertation-title', T.any, null)
    .named('enrollment', T.any, null)
    .named('major', T.any, null)
    .named('name', T.any, null)
    .named('school', T.any, null)
    .named('signature-date', T.any, null)
    .named('signature-image', T.any, null)
    .named('signature-text', T.any, null)
    .named('source-of-research-project', T.any, null)
    .named('student-id', T.any, null)
    .named('supervisor', T.any, null)
    .returns(T.any)
    .external()
  const todayDate = external('today-date')
  return doc(
    importPackage('@preview/std-sjtu-doctoral-annual-progress:0.1.0', [project, todayDate]),
    show((body, ctx) =>
      project(
        {
          studentId: '012345678901',
          name: '你的名字',
          supervisor: '你的导师',
          major: '你的专业',
          school: '你的学院',
          enrollment: 'b',
          degreeProgram: 'a',
          date: todayDate,
          dissertationTitle: '我的很长很长很长很长很长很长很长很长很长很长很长很长很长很长的\n很厉害的论文题目',
          sourceOfResearchProject: [1, 3, 5],
          dissertationProposalDate: '2026-01-01',
          signatureImage: 'figures/your_signature.png',
          signatureText: '你的名字',
          signatureDate: todayDate,
        },
        body,
      ),
    ),
    m.heading(
      1,
      '报告正文 Report。',
      text(
        { weight: 'regular', size: pt(12) },
        inline`请阐述开题报告或上次年度进展报告以来学位论文研究工作的进展情况及所取得的阶段性成果，并简述下一年度研究计划，不少于3,000汉字。Please summarize your research
progress and achievements since your dissertation proposal or last annual progress review, as
well as your plan for next step. No less than 2,400 words if written in English.`,
      ),
    ),
    '制作本中期报告 Typst 模板的初衷，是为校友们提供一个比 LaTeX 更轻量、比 Word 更专业的排版方案。',
    m.heading(2, '模板使用指南 (Template Guide)'),
    '本模板已针对上海交通大学年度进展报告的格式规范，深度定制了字体、间距、标题悬挂缩进及参考文献样式。',
    inline(labelled(heading({ depth: 3 }, inline('数学公式 (Mathematics)')), label('math_section'))),
    inline`Typst 采用了类似数学直觉的语法。行内公式直接使用 $ 包裹，如 ${unsafeRaw.math`a^2 + b^2 = c^2`}。`,
    inline`对于复杂的行间公式，可以使用双美元符号：
${unsafeRaw.math.block`cal(F)(omega) = integral_(-infinity)^(infinity) f(t) e^(-i omega t) d t`}`,
    inline`你也可以编写矩阵或多行对齐公式：
${unsafeRaw.math.block`A = mat(1, 2; 3, 4), quad sum_(i=1)^n i = (n(n+1)) / 2`}`,
    m.heading(3, '图像处理与交叉引用 (Images & References)'),
    inline`插入图片建议使用 ${raw('figure')} 环境，这样可以自动生成“图 1”这样的标签并支持自动编号。`,
    inline(
      labelled(
        [figure({ caption: inline`示例图片` }, image({ width: pct(50) }, path('figures/A.png'))), space],
        label('fig_A'),
      ),
    ),
    inline`如 ${ref(label('fig_A'))} 所示，图片会自动居中。在正文中使用 ${raw('@fig_A')} 即可实现自动跳转引用。`,
    m.heading(3, '表格设计 (Tables)'),
    '本模板对表格进行了局部优化，使其更符合中文学术排版的“三线表”或“全框表”风格。',
    inline(
      labelled(
        [
          figure(
            { caption: inline`课题研究详细进度安排表` },
            table(
              { columns: [auto, fr(1), fr(1.5)], stroke: pt(0.5), inset: pt(8), align: add(center, horizon) },
              table.header(
                inline(strong(inline`阶段`)),
                inline(strong(inline`研究内容`)),
                inline(strong(inline`预期成果`)),
              ),
              inline`第一阶段`,
              inline`国内外文献综述与需求分析`,
              inline`提交开题报告定稿`,
              inline`第二阶段`,
              inline`核心算法设计与仿真验证`,
              inline`发表高质量学术论文`,
              inline`第三阶段`,
              inline`实验数据收集与论文撰写`,
              inline`完成学位论文初稿`,
            ),
          ),
          space,
        ],
        label('tab_schedule'),
      ),
    ),
    inline`通过引用 ${ref(label('tab_schedule'))} ，读者可以清晰地了解研究进度。`,
    m.heading(4, '三线表展示'),
    '三线表通常用于展示实验结果或对比数据，其结构简洁明了。',
    inline(
      labelled(
        [
          figure(
            { caption: inline`不同算法性能对比（三线表示例）` },
            table(
              { columns: [auto, fr(1), fr(1), fr(1)], stroke: null, inset: pt(8), align: add(center, horizon) },
              table.hline({ stroke: pt(1.5) }),
              table.header(
                inline(strong(inline`方法`)),
                inline(strong(inline`准确率 (%)`)),
                inline(strong(inline`召回率 (%)`)),
                inline(strong(inline`F1 分数`)),
              ),
              table.hline({ stroke: pt(0.5) }),
              inline`Baseline`,
              inline`85.2`,
              inline`82.1`,
              inline`83.6`,
              inline`Proposed`,
              inline`92.4`,
              inline`90.8`,
              inline`91.6`,
              inline`State-of-art`,
              inline`93.1`,
              inline`91.2`,
              inline`92.1`,
              table.hline({ stroke: pt(1.5) }),
            ),
          ),
          space,
        ],
        label('tab_3line'),
      ),
    ),
    inline`通过引用 ${ref(label('tab_3line'))} 可以看到，三线表取消了所有竖线，使数据阅读更加流畅。`,
    m.heading(3, '参考文献管理 (Bibliography)'),
    inline`本模板集成了 ${raw('gb-7714-2015-numeric')} 标准。你只需要在同级目录下准备一个 ${raw('ref.bib')} 文件。`,
    '引用方式非常简单：',
    m.list(
      m.item(['单个引用：该算法的收敛性已在文献', space, ref(label('ZJSD')), space, '中得到证明。']),
      m.item(['多个引用：目前主流观点支持该结论', space, ref(label('ZJSD')), space, ref(label('SPDZ')), '。']),
    ),
    '参考文献列表会自动根据你的引用顺序生成在文末，并应用左缩进 2 字符的样式。',
    m.heading(3, '章节标签与快速跳转'),
    inline`你可以通过在标题后添加 ${raw('<label_name>')} 来定义标签。`,
    inline`例如，本文档 数学公式 的章节定义为 ${raw('=== 数学公式 <math_section>')}。我们现在可以轻松地通过 ${raw('@math_section')} 跳回该部分 ${ref(label('math_section'))}。`,
    m.heading(3, '常用排版技巧'),
    m.list(
      m.item([strong(inline`加粗`), '：使用', space, raw('*加粗内容*'), space, '.']),
      m.item([emph(inline`斜体`), '：使用', space, raw('_斜体内容_'), '。']),
      m.item([underline(inline`下划线`), '：使用', space, raw('#underline[内容]'), '。']),
      m.item([highlight(inline`高亮`), '：使用', space, raw('#highlight[内容]'), '。']),
      m.item([text({ fill: red }, inline`彩色文字`), '：使用', space, raw('#text(fill: color)[内容]'), '。']),
      m.item([
        '脚注：直接在文中写',
        space,
        raw('#footnote[内容]'),
        space,
        '即可生成',
        footnote(inline`这是一个脚注`),
        '。',
      ]),
    ),
    m.heading(3, '列表'),
    m.lines(
      m.heading(4, '无序列表 (Unordered Lists)'),
      inline`无序列表使用减号 ${raw('-')} 开头。它可以自动处理多级嵌套：`,
    ),
    m.list(
      m.item(m.lines('第一级项目', m.list(m.item(m.lines('第二级嵌套项目', m.list(m.item(['第三级嵌套项目']))))))),
      m.item(['并列的一级项目']),
    ),
    m.lines(
      m.heading(4, '有序列表 (Ordered Lists)'),
      inline`有序列表使用加号 ${raw('+')} 开头，Typst 会自动处理编号逻辑：`,
    ),
    m.enum(
      m.item(['第一项任务：收集很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多很多文献数据。']),
      m.item(
        m.lines(
          '第二项任务：建立数学模型。',
          m.enum(m.item(['子任务 A：参数标定。']), m.item(['子任务 B：灵敏度分析。'])),
        ),
      ),
      m.item(['第三项任务：撰写开题报告。']),
    ),
    m.heading(4, '术语列表 (Term Lists)'),
    inline`术语列表非常适合用于“变量定义”或“名词解释”，使用斜杠 ${raw('/')} 开头：`,
    m.terms(
      m.term([unsafeRaw.math`alpha`], ['显著性水平（Significance Level），通常取 0.05。']),
      m.term(
        [unsafeRaw.math`P_(i,j)`],
        ['表示从状态', space, unsafeRaw.math`i`, space, '转移到状态', space, unsafeRaw.math`j`, space, '的概率。'],
      ),
      m.term(['模型参数'], ['经过多轮实验标定后得到的全局最优参数解。']),
    ),
    m.heading(4, '列表样式自定义'),
    inline`如果你需要自定义列表的符号（例如将圆点改为方框或箭头），可以使用 ${raw('set')} 规则：`,
    inline(
      block(
        blocks(
          m.lines(
            set(list, { marker: [inline`—`, inline`•`] }),
            set(enum_, { numbering: 'a)' }),
            inline(set(terms, { separator: h(em(3)), hangingIndent: em(1) })),
          ),
          m.lines(
            m.list(
              m.item(
                m.lines(inline`这里的符号是长划线 ${raw('—')}`, m.list(m.item(['这里的符号是圆点', space, raw('•')]))),
              ),
            ),
            m.enum(m.item(['这里的编号是 a)'])),
            m.terms(m.term(['自定义术语'], ['术语与解释之间的间距被拉大了。'])),
          ),
        ),
      ),
    ),
    '块外面自动恢复默认',
    m.lines(
      m.list(m.item(['这里的符号回到了圆点'])),
      m.enum(m.item(['这里的编号回到了数字'])),
      m.terms(m.term(['自定义术语'], ['术语与解释之间的间距被恢复了。'])),
    ),
    inline(labelled(heading({ depth: 2 }, inline('进展情况')), label('status'))),
    inline`正如在 ${ref(label('status'))} 中所述，目前该领域的研究正处于快速发展期。`,
    m.heading(2, '现有成果'),
    inline`已经发表了 ${emph(inline`Nature`)} 和 ${emph(inline`Science`)} 各100篇。`,
    inline(
      v(em(2)),
      space,
      text({ weight: 'bold' }, inline`参考文献 References:`),
      space,
      pad(
        { left: em(2) },
        inline(
          space,
          set(par, { firstLineIndent: pt(0) }),
          space,
          bibliography({ title: null, style: 'gb-7714-2015-numeric' }, path('ref.bib')),
          space,
        ),
      ),
    ),
    m.heading(
      1,
      '成果清单 List of Achievements。',
      text(
        { weight: 'regular', size: pt(12) },
        inline`请列出开题报告以来或上次年度进展报告以来新发表的学术论文、授权专利、国际会议论文、专著等成果清单。作者、标题、杂志、卷、期、页码等信息请填写完整。Please provide a list
of academic publications (papers, patents, international academic conference talks, monographs,
etc.) since your dissertation proposal or last annual progress review. Information on author
list, title, journal name, volume, number, and pages shall be complete.`,
      ),
    ),
    m.lines(set(enum_, { indent: em(2) }), m.enum(m.item(['成果1']), m.item(['成果2']))),
  )
}
