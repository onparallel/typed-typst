// Converted from test/universe/corpus/modern-scut-thesis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  align,
  blocks,
  box,
  call,
  center,
  define,
  doc,
  em,
  external,
  figure,
  footnote,
  fr,
  gray,
  grid,
  heading,
  image,
  importFile,
  importPackage,
  inline,
  label,
  labelled,
  let_,
  linebreak,
  link,
  luma,
  m,
  pagebreak,
  path,
  pct,
  pt,
  raw,
  rect,
  ref,
  show,
  smartquote,
  space,
  strong,
  text,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const algorithmic = external('algorithmic')
  const bilingualBibliography = define('bilingual-bibliography')
    .named('full', T.any, null)
    .named('source', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external()
  const documentclass = define('documentclass')
    .pos('arg1', T.any)
    .pos('arg2', T.any)
    .pos('arg3', T.any)
    .pos('arg4', T.any)
    .named('equivalent', T.any, null)
    .named('international', T.any, null)
    .named('kind', T.any, null)
    .named('print-ready', T.any, null)
    .returns(T.any)
    .external()
  const __ = external('字号')
  const ____ = external('辅助字体')
  const blind = external('blind')
  const includeAcknowledgement = external('include-acknowledgement')
  const printReady = external('print-ready')
  const twoside = external('twoside')
  const doctype = external('doctype')
  const equivalent = external('equivalent')
  const info = external('info')
  const international = external('international')
  const kind = external('kind')
  const expRounds = external('exp-rounds')
  const expSuccessRate = external('exp-success-rate')
  const expAvgLatency = external('exp-avg-latency')
  const _____ = external('五号', __)
  const [
    patternDecl,
    [
      doc_2,
      preface,
      mainmatter,
      appendix,
      fontsDisplayPage,
      cover,
      declPage,
      abstract,
      abstractEn,
      outlinePage,
      listOfFigures,
      listOfTables,
      notation,
      acknowledgement,
      publications,
      threelineTable,
      theorem,
      lemma,
      corollary,
      definition,
      proposition,
      example,
      remark,
      proof,
      algorithmFigure,
    ],
  ] = let_(
    [
      'doc',
      'preface',
      'mainmatter',
      'appendix',
      'fonts-display-page',
      'cover',
      'decl-page',
      'abstract',
      'abstract-en',
      'outline-page',
      'list-of-figures',
      'list-of-tables',
      'notation',
      'acknowledgement',
      'publications',
      'threeline-table',
      'theorem',
      'lemma',
      'corollary',
      'definition',
      'proposition',
      'example',
      'remark',
      'proof',
      'algorithm-figure',
    ],
    documentclass(
      { printReady: printReady, kind: kind, international: international, equivalent: equivalent },
      doctype,
      twoside,
      blind,
      info,
    ),
  )
  return doc(
    m.lines(
      importPackage('@preview/modern-scut-thesis:0.1.1', [bilingualBibliography, documentclass, __, ____]),
      importPackage('@preview/algorithmic:1.0.7', algorithmic),
      importFile('build.typ', [blind, includeAcknowledgement, printReady, twoside]),
      importFile('info.typ', [doctype, equivalent, info, international, kind]),
      inline(importFile('data.typ', [expRounds, expSuccessRate, expAvgLatency])),
    ),
    patternDecl,
    show(doc_2),
    inline(call(cover)),
    inline(call(declPage)),
    show(preface),
    inline(
      call(
        abstract,
        { keywords: ['关键词一', '关键词二', '关键词三', '关键词四'] },
        blocks(
          inline`摘要是学位论文内容的简短陈述，应体现论文工作的核心思想。
论文摘要应力求语言精练准确。摘要内容应涉及本项科研工作的目的和意义、
研究思想和方法、研究成果和结论。
硕士学位论文的中文摘要一般约 500～800 字，必须突出论文的新见解。`,
          inline`关键词一般为 3～5 个，按词条的外延层次排列（外延大的排在前面）。
关键词之间用分号分开，最后一个关键词后不打标点符号。`,
        ),
      ),
    ),
    inline(
      call(
        abstractEn,
        { keywords: ['Keyword1', 'Keyword2', 'Keyword3', 'Keyword4'] },
        inline`${space}The content of the English abstract and keywords should be consistent with the Chinese
abstract and keywords, conform to English grammar, and be smooth and fluent in wording.${space}`,
      ),
    ),
    inline(call(outlinePage)),
    inline(call(listOfFigures), space, call(listOfTables)),
    inline(
      call(
        notation,
        blocks(
          m.terms(
            m.term([unsafeRaw.math`\\{I\\}`], ['惯性坐标系']),
            m.term([unsafeRaw.math`\\{B\\}`], ['体坐标系']),
            m.term([unsafeRaw.math`bold(q) = [q_0, q_1, q_2, q_3]^sans(T)`], ['单位四元数']),
            m.term([unsafeRaw.math`bold(eta)_q`], ['位姿向量']),
            m.term([unsafeRaw.math`bold(nu) = [u, v, w, p, q, r]^sans(T)`], ['速度向量']),
            m.term([unsafeRaw.math`u, v, w`], ['纵向、横向、垂向速度']),
            m.term([unsafeRaw.math`p, q, r`], ['横滚、俯仰、偏航角速度']),
            m.term([unsafeRaw.math`bold(tau)`], ['控制输入向量']),
            m.term([unsafeRaw.math`bold(M)`], ['惯性矩阵']),
            m.term([unsafeRaw.math`bold(C)(bold(nu))`], ['科里奥利力和向心力矩阵']),
            m.term([unsafeRaw.math`bold(D)(bold(nu))`], ['流体阻尼矩阵']),
            m.term([unsafeRaw.math`bold(g)_q (bold(q))`], ['恢复力向量']),
            m.term([unsafeRaw.math`bold(R)(bold(q))`], ['旋转矩阵']),
            m.term([unsafeRaw.math`bold(J)_q (bold(eta)_q)`], ['运动学变换矩阵']),
            m.term([unsafeRaw.math`m`], ['水下机器人质量']),
            m.term([unsafeRaw.math`bold(I)_b`], ['转动惯量矩阵']),
            m.term([unsafeRaw.math`I_c (bold(x))`], ['观测图像']),
            m.term([unsafeRaw.math`J_c (bold(x))`], ['无退化场景辐射亮度']),
            m.term([unsafeRaw.math`B_c^infinity (bold(x))`], ['无限远处背景光']),
            m.term([unsafeRaw.math`t_c (bold(x))`], ['透射率']),
            m.term([unsafeRaw.math`beta_c`], ['总衰减系数']),
            m.term([unsafeRaw.math`d(bold(x))`], ['场景点到相机的距离']),
            m.term([unsafeRaw.math`bold(x)_0`], ['原始数据样本']),
            m.term([unsafeRaw.math`bold(x)_t`], ['第', space, unsafeRaw.math`t`, space, '步噪声状态']),
            m.term([unsafeRaw.math`T`], ['总扩散步数']),
            m.term([unsafeRaw.math`beta_t`], ['噪声方差调度参数']),
            m.term([unsafeRaw.math`alpha_t`], ['噪声调度参数']),
            m.term([unsafeRaw.math`macron(alpha)_t`], ['累积乘积']),
            m.term([unsafeRaw.math`bold(epsilon)`], ['高斯噪声']),
            m.term([unsafeRaw.math`bold(epsilon)_theta`], ['噪声预测网络']),
            m.term([unsafeRaw.math`hat(bold(x))_0`], ['预测的原始数据']),
            m.term([unsafeRaw.math`sigma_t`], ['随机性参数']),
            m.term([unsafeRaw.math`cal(D)`], ['专家轨迹数据集']),
            m.term([unsafeRaw.math`bold(o)`], ['观测']),
            m.term([unsafeRaw.math`bold(a)`], ['动作']),
            m.term([unsafeRaw.math`pi_theta`], ['策略网络']),
            m.term([unsafeRaw.math`H`], ['预测时域']),
            m.term([unsafeRaw.math`n_("act")`], ['动作预测长度']),
            m.term([unsafeRaw.math`bold(I)_("rgb")`], ['RGB输入图像']),
            m.term([unsafeRaw.math`bold(I)_d`], ['度量深度图像']),
            m.term([unsafeRaw.math`bold(c)`], ['目标条件向量']),
            m.term([unsafeRaw.math`bold(F)`], ['视觉特征图']),
            m.term([unsafeRaw.math`bold(gamma), bold(beta)`], ['特征级线性调制参数']),
            m.term([unsafeRaw.math`bold(F)_("vit")`], ['DinoV2骨干特征']),
          ),
        ),
      ),
    ),
    show(mainmatter),
    m.heading(1, '绪　论'),
    '绪论（或引言）一般作为第一章，是论文主体的开端。绪论的内容应简要说明研究工作的目的、范围、相关领域的前人工作和知识空白、理论基础、研究设想、研究方法和实验设计、预期结果和意义等。应言简意赅，不要与摘要雷同，不要写成摘要的注释。一般教科书中有的知识，在绪论中不必赘述。',
    '学位论文为了反映出作者确已掌握了坚实的基础理论和系统的专门知识，具有开阔的科学视野，对研究方案作了充分论证，因此，有关历史回顾和前人工作的综述分析，以及理论分析等，可以单独成章，用足够的文字叙述。',
    m.heading(2, '研究背景'),
    m.heading(2, '国内外研究现状'),
    inline`引用参考文献时采用顺序编码制，以上标方括号标注，如文献 ${ref(label('蒋有绪1998'))} 所述。`,
    m.heading(1, '正文要求'),
    '论文正文是学位论文的核心部分，占主要篇幅。正文应该结构合理，层次分明，推理严密，重点突出，图表、参考文献规范，内容集中简练，文笔通顺流畅。博士学位论文不少于6万字，硕士学位论文为3～5万字。',
    '对本研究内容及成果应进行较全面、客观的理论阐述，应着重指出本研究内容中的创新、改进与实际应用之处。理论分析中，应将他人研究成果单独书写，并注明出处，不得将其与本人提出的理论分析混淆在一起。',
    '自然科学的论文应推理正确，结论清晰，无科学性错误。',
    m.heading(2, '理论分析'),
    m.heading(3, '基本概念'),
    '（此处填写基本概念和理论阐述。定理、引理、证明等环境的编写方法见第三章。）',
    m.heading(3, '核心算法'),
    '（此处填写算法描述。算法伪代码编写方法见第三章。）',
    m.heading(2, '图表与公式'),
    '每个图均应有图题，图号按章编排，图题置于图下。',
    '表序按章编排，表序与表名之间空一格，表名中不允许使用标点符号，表名后不加标点。表序与表名置于表上。表格采用三线表格式：顶线和底线为粗线，表头下线为细线，无竖线。',
    '公式居中书写，序号按章编排。公式可以是独立编号的行间公式，也可以是前段文字的自然延续——前者公式后留空行另起段，后者则不加空行使后续文字视为同段延续。',
    '图、表、公式的具体 Typst 写法见第三章。',
    m.heading(2, '实验验证'),
    m.heading(3, '实验设计'),
    '（此处填写实验设计方案。）',
    m.heading(2, '结果分析'),
    inline`（此处填写实验结果与分析。实验数据建议统一维护在 ${raw('data.typ')} 中，如：共进行 ${expRounds} 回合实验，成功率 ${expSuccessRate}%，平均延迟 ${expAvgLatency}
ms。写法见第三章「实验数据管理」一节。）`,
    m.heading(2, '本章小结'),
    inline`论文正文各章后应有一节"本章小结"。`,
    m.heading(1, '本模板说明'),
    inline`本章说明如何用本 Typst 模板实现 SCUT 规范中的各项格式。运行环境（安装 Typst、准备字体、创建项目）见仓库 README 的「使用」一节；Typst 的定位与入门资料见 README 的「优势」一节，以及小蓝书${ref(label('raindrop-blue'))}
与 Typst 中文社区导航${ref(label('typst-guide-cn'))}。`,
    m.heading(2, '论文信息'),
    inline`论文题目、作者、学号、导师、学院、专业、日期等元信息统一在项目根目录的 ${raw('info.typ')} 中维护，封面、英文内封、提名页、摘要页与 PDF 元信息均从此读取，正文无需重复填写。其中分类号 ${raw('clc')}
按论文主题对照《中国图书馆分类法》填写，自动渲染于提名页左上角。`,
    inline`学位类型相关变体也在 ${raw('info.typ')} 顶部配置：${raw('doctype')} 选择硕士（${raw('"master"')}）或博士（${raw('"doctor"')}）；${raw('kind: "professional"')}
为专业学位；${raw('international: true')} 为留学生学位论文；${raw('equivalent: true')} 为同等学力申请学位。后三者均作用于盲审封面：专业学位将信息栏改用“学位类别”，同等学力在标题下加括号副题。`,
    m.heading(2, '实验数据管理'),
    inline`实验设置与结果中的数值（回合数、成功率、延迟等）往往在全文中多处出现，写作过程中还会反复修订。建议把这些常量统一定义在项目根目录的 ${raw('data.typ')} 中，正文用变量引用，修改一处即全部更新：`,
    inline(
      figure(
        { caption: inline`实验数据集中管理示例` },
        raw(
          { block: true, lang: 'typ' },
          '// data.typ\n#let exp-rounds = 20       // 实验回合数\n#let exp-success-rate = 92.5 // 成功率 (%)\n\n// 章节文件或 thesis.typ 顶部\n#import "data.typ": *\n\n共进行 #exp-rounds 回合实验，成功率 #exp-success-rate%。',
        ),
      ),
    ),
    inline`常量不限于数值，也可以是数学式（如 ${raw('#let train-lr = $4 times 10^(-4)$')}）或内容块，表格的 ${raw('data')} 参数中同样可以使用。为避免通配导入的名称冲突，建议常量统一加前缀（如 ${raw('exp-')}、${raw('train-')}）。`,
    m.heading(2, '章节标题'),
    inline`正文中 ${raw('=')} 对应章标题，${raw('==')} 对应节标题，${raw('===')} 对应条标题。各层级自动按 SCUT 规范编号（如"第一章"、"1.1"、"1.1.1"）。结论章不加章号，在标题后加 ${raw('<no-numbering>')}
标签即可。`,
    m.heading(2, '可选页面'),
    inline`插图目录、表格目录与符号表为可选页面，${raw('thesis.typ')} 已默认启用，不需要时删除或注释相应调用即可：`,
    m.list(
      m.item([
        strong(inline`插图目录与表格目录`),
        '：',
        raw('#list-of-figures()'),
        space,
        '与',
        space,
        raw('#list-of-tables()'),
        '，位于目录页之后。',
      ]),
      m.item([
        strong(inline`符号表`),
        '：',
        raw('#notation[...]'),
        '，位于正文开始之前，表项写法见',
        space,
        raw('thesis.typ'),
        space,
        '中的示例。',
      ]),
    ),
    inline(labelled(heading({ depth: 2 }, inline('定理环境')), label('sec:theorem'))),
    inline`基于 ${raw('great-theorems')} 包${ref(label('great-theorems'))}。`,
    inline`模板内置定理、引理、推论、定义、命题、例、备注、证明八种环境。
各环境有独立计数器，每章起始处自动重置，序号格式为"章号-序号"。
如需混合计数器（如定理与引理共用），修改 ${raw('utils/theorem.typ')} 中
对应环境的 ${raw('counter')} 参数为同一计数器即可。`,
    inline(
      labelled(
        [
          call(
            theorem,
            inline`${space}设 ${unsafeRaw.math`p`} 为素数，${unsafeRaw.math`p ∤ a`}，则 ${unsafeRaw.math`a^(p-1) ≡ 1 (mod p)`}。${space}`,
          ),
          space,
        ],
        label('thm:fermat'),
      ),
    ),
    inline(
      call(
        lemma,
        inline`${space}若 ${unsafeRaw.math`a ≡ b (mod m)`}，${unsafeRaw.math`c ≡ d (mod m)`}，则
${unsafeRaw.math`a + c ≡ b + d (mod m)`}。${space}`,
      ),
    ),
    inline(call(proof, inline`${space}由同余定义直接可得。${space}`)),
    inline(call(corollary, inline`${space}同余关系对减法也成立。${space}`)),
    inline(
      call(
        definition,
        { title: inline`素数` },
        inline`${space}一个大于 ${unsafeRaw.math`1`} 的自然数，如果除了 ${unsafeRaw.math`1`} 和它自身外，
不能被其他自然数整除，称为素数。${space}`,
      ),
    ),
    inline(
      call(
        proposition,
        inline`${space}若 ${unsafeRaw.math`a`} 和 ${unsafeRaw.math`b`} 互素，则存在整数 ${unsafeRaw.math`x`}、${unsafeRaw.math`y`}
使 ${unsafeRaw.math`a x + b y = 1`}。${space}`,
      ),
    ),
    inline(
      call(
        example,
        inline`${space}设 ${unsafeRaw.math`n = 7`}，${unsafeRaw.math`a = 3`}。由于 ${unsafeRaw.math`7`} 为素数且 ${unsafeRaw.math`7 ∤ 3`}，
由费马小定理得 ${unsafeRaw.math`3^6 ≡ 1 (mod 7)`}。${space}`,
      ),
    ),
    inline(
      call(
        remark,
        inline`${space}素数有无穷多个，这是古希腊数学家欧几里得在《几何原本》中
首次证明的经典结论。${space}`,
      ),
    ),
    inline`引用定理用 ${raw('@thm:fermat')}，渲染为"${ref(label('thm:fermat'))}"。`,
    m.heading(2, '图表'),
    inline`编号与交叉引用基于 ${raw('i-figured')} 包${ref(label('i-figured'))}。`,
    m.heading(3, '三线表'),
    inline`使用 ${raw('threeline-table()')} 封装函数，传入 ${raw('header')} 和 ${raw('data')} 即可：`,
    inline(
      labelled(
        [
          figure(
            { caption: inline`示例表格` },
            call(threelineTable, {
              columns: 3,
              header: [inline`参数`, inline`数值`, inline`单位`],
              data: [
                inline`温度`,
                inline`25`,
                inline`℃`,
                inline`压力`,
                inline`101.3`,
                inline`kPa`,
                inline`时间`,
                inline`60`,
                inline`s`,
              ],
            }),
          ),
          space,
        ],
        label('example-table'),
      ),
    ),
    inline`如需普通表格（如附录中的成果表），直接用 ${raw('table()')} 即可。合并单元格也不需要额外封装，在 ${raw('data')} 中直接使用 ${raw('table.cell(rowspan: 2)[...]')}
或 ${raw('table.cell(colspan: 2)[...]')} 即可。`,
    m.heading(3, '图片'),
    inline`插图用 ${raw('figure')} + ${raw('image')} 或任意图形内容。论文配图建议统一放在项目根目录的 ${raw('images/')} 文件夹中，以相对路径引用，如 ${raw('image("images/fig1.png")')}。多张图可排列成子图，${ref(label('fig:example-figure'))}(a) 用 ${raw('rect')}
等绘图原语绘制，${ref(label('fig:example-figure'))}(b) 用 ${raw('image')} 引入 SVG，${ref(label('fig:example-figure'))}(c) 用 ${raw('image')}
引入位图。子图的 (a)(b)(c) 标签目前需要手写（如本例）；Universe 上的 subpar 包虽提供子图自动编号，但其计数与 i-figured 冲突（子图会被计入正图序号），暂不兼容。
${labelled([figure({ caption: inline`示例：三个子图` }, grid({ columns: [fr(1), fr(1), fr(1)], gutter: em(1) }, inline(space, align(center, box({ width: pct(100), height: pt(100) }, rect({ width: pct(100), height: pct(100), fill: gray.lighten(pct(30)) }))), space, align(center, text({ font: ____, size: _____ }, inline`(a) 左：typst 图形`)), space), inline(space, align(center, box({ width: pct(100), height: pt(100) }, image({ height: pct(100) }, path('images/demo-figure.svg')))), space, align(center, text({ font: ____, size: _____ }, inline`(b) 中：SVG 图片`)), space), inline(space, align(center, box({ width: pct(100), height: pt(100) }, image({ height: pct(100) }, path('images/scut_logo.jpg')))), space, align(center, text({ font: ____, size: _____ }, inline`(c) 右：JPG 图片`)), space))), space], label('example-figure'))}`,
    m.heading(2, '公式'),
    inline`编号与交叉引用基于 ${raw('i-figured')} 包${ref(label('i-figured'))}。`,
    m.heading(3, '独立编号公式'),
    inline`直接写行间公式并加标签，${raw('i-figured')} 自动编号：`,
    inline(labelled([unsafeRaw.math.block`y = a x + b`, space], label('linear'))),
    inline`引用用 ${raw('@eqt:linear')}，渲染为${ref(label('eqt:linear'))}。`,
    m.heading(3, '避免行间公式后另起新段'),
    inline`中文论文中，行间公式有时属于前段文字的延续，此时不应另起段落。
Typst 会把行间公式当作独立 block 断开段落，需手动处理。`,
    inline`${strong(inline`不另起段`)}——段末 ${raw('\\ ')} 换行 + ${raw('#box(width: 100%)')} 包裹公式，后续无缩进：`,
    inline(
      figure(
        { caption: inline`不另起段的源码` },
        raw(
          { block: true, lang: 'typ' },
          '考虑一元二次方程 $a x^2 + b x + c = 0$，其根由求根公式给出： \\\n#box(width: 100%)[$ x = (-b ± sqrt(b^2 - 4 a c)) / (2 a) $]\n当判别式 $b^2 - 4 a c > 0$ 时方程有两个不等实根。',
        ),
      ),
    ),
    inline`考虑一元二次方程 ${unsafeRaw.math`a x^2 + b x + c = 0`}，其根由求根公式给出： ${linebreak()} ${box({ width: pct(100) }, inline(unsafeRaw.math.block`x = (-b ± sqrt(b^2 - 4 a c)) / (2 a)`))}
当判别式 ${unsafeRaw.math`b^2 - 4 a c > 0`} 时方程有两个不等实根。`,
    inline`${strong(inline`另起新段`)}——公式后空行，后续有 2em 首行缩进：`,
    inline(
      figure(
        { caption: inline`另起新段的源码` },
        raw(
          { block: true, lang: 'typ' },
          '考虑一元二次方程 $a x^2 + b x + c = 0$，其根由求根公式给出：\n\n$ x = (-b ± sqrt(b^2 - 4 a c)) / (2 a) $\n\n当判别式 $b^2 - 4 a c > 0$ 时方程有两个不等实根。\n此结论可推广至复数域。',
        ),
      ),
    ),
    inline`考虑一元二次方程 ${unsafeRaw.math`a x^2 + b x + c = 0`}，其根由求根公式给出：`,
    inline(unsafeRaw.math.block`x = (-b ± sqrt(b^2 - 4 a c)) / (2 a)`),
    inline`当判别式 ${unsafeRaw.math`b^2 - 4 a c > 0`} 时方程有两个不等实根。
此结论可推广至复数域。`,
    m.heading(3, '兼容 LaTeX 公式语法'),
    inline`Typst 的公式语法与 LaTeX 不同，例如分式写作 ${raw('frac(a, b)')} 而非 ${raw('\\frac{a}{b}')}，上下标一般无需花括号，直接粘贴 LaTeX 公式源码无法编译。`,
    inline`若希望保留 LaTeX 写法，可用 mitex 包${ref(label('mitex'))} 渲染；套一层数学环境后，公式照常按章编号，也可用 ${raw('@eqt:')} 引用：`,
    inline(
      figure(
        { caption: inline`用 mitex 渲染 LaTeX 公式` },
        raw(
          { block: true, lang: 'typ' },
          '#import "@preview/mitex:0.2.7": mi, mitex\n\n行内公式 #mi(`e^{i \\pi} + 1 = 0`)，行间公式：\n\n$ #mitex(`\\frac{1}{2} + \\sum_{i=1}^{n} x_i`) $ <my-eq>',
        ),
      ),
    ),
    inline`如需把存量 LaTeX 公式一次性转换为 Typst 语法，可使用 tex2typst 转换工具${footnote(inline`tex2typst 提供命令行工具与网页版：${link('https://github.com/qwinsi/tex2typst')}`)}，长期写作建议仍直接使用 Typst 语法。`,
    m.heading(2, '标签与引用'),
    inline`编号与交叉引用基于 ${raw('i-figured')} 包${ref(label('i-figured'))}。`,
    inline`图表标签不加前缀，由 ${raw('i-figured')} 自动生成带前缀的内部标签。引用时加对应前缀：`,
    m.list(
      m.item(['表格', space, raw('@tbl:my-table'), '，如', ref(label('tbl:example-table'))]),
      m.item(['图片', space, raw('@fig:my-figure'), '，如', ref(label('fig:example-figure'))]),
      m.item(['公式', space, raw('@eqt:my-eq'), '，如', ref(label('eqt:linear'))]),
      m.item([
        '章节',
        space,
        raw('@sec:my-section'),
        '，如',
        ref(label('sec:theorem')),
        '（渲染为',
        smartquote({ double: true }),
        '小节 编号',
        smartquote({ double: true }),
        '，Typst 内置中文 supplement）',
      ]),
    ),
    inline`两个容易踩的坑。其一，标签处只写裸名 ${raw('<my-figure>')}，不要写成 ${raw('<fig:my-figure>')}：${raw('i-figured')}
会无条件再套一层前缀变成 ${raw('fig:fig:my-figure')}，引用静默失效。其二，引用渲染自带“图”“表”等补充词，正文写作时不要再手写这类字：写“如 ${ref(label('fig:example-figure'))}
所示”，而不是“如图 ${ref(label('fig:example-figure'))} 所示”（后者会渲染成“如图 图 3-1 所示”）。`,
    inline`引用参考文献用 ${raw('@citation-key')}，标注为上标方括号，如文献 ${ref(label('蒋有绪1998'))} 所述。`,
    m.heading(2, '参考文献'),
    inline`本模板的参考文献按“条目数据与著录样式分离”的思路组织：条目统一维护在项目根目录的 ${raw('ref.bib')}（BibTeX 格式）中，著录格式由模板包内置的 CSL 文件统一控制，当前使用 GB/T
7714—2015 顺序编码双语变体，取自 Zotero 中文社区样式库${ref(label('zotero-chinese-styles'))}，随包分发、不占用项目目录。需要更换样式时（例如要求显示 URL、DOI），在项目里放入自己的 CSL 文件，并在文献表调用前加一行 ${raw('#set bibliography(style: "你的样式.csl")')}
即可覆盖，正文与条目文件均不必改动。`,
    inline`.bib 条目一般不必手工编写：Zotero 等文献管理软件可选中条目导出 BibTeX，配合 Better BibTeX 插件还能固定引用键；中国知网、万方、Google Scholar 等学术网站的论文页面也提供“导出”或“引用”入口，可直接获取 BibTeX 记录，粘贴进 ${raw('ref.bib')}
即可使用。${raw('ref.bib')} 中附有几条英文示例：IEEE 会议论文 ${ref(label('akkaynak2018revised'))} ${ref(label('akkaynak2019seathru'))}、arXiv 预印本 ${ref(label('wolf2025diffusion'))}
${ref(label('chib2023recent'))}，以及作者超过三人的期刊论文 ${ref(label('mitchell2022review'))}。`,
    inline`Typst 的 CSL 引擎只支持单一全局语言环境，无法按条目语言切换“等”与“et al.”（该能力属于 CSL-M 扩展）。本模板用 ${raw('bilingual-bibliography()')}
调用文献列表以绕过这一限制：它对渲染结果做最小字符串替换，检测到的英文条目中“等”替换为“et al.”、“卷 N”替换为“Vol. N”，中文条目保持不变——文末可见 ${ref(label('mitchell2022review'))}
显示“et al.”而中文条目显示“等”。若遇到未预期的排版，可将该调用换回普通的 ${raw('#bibliography("ref.bib", title: "参考文献", full: false)')}。注意文献列表默认只收录被正文引用的条目（${raw('full: false')}），${raw('ref.bib')}
中未被引用的条目不会出现在列表中。`,
    m.heading(2, '代码块'),
    inline`基于 ${raw('zebraw')} 包${ref(label('zebraw'))}，支持行号和语法高亮。学校目前规范（2022 版本）暂无代码块字体要求，这里使用了中文计算机学科教材常见的 Courier
New 及宋体。`,
    inline(
      labelled(
        [
          figure(
            { caption: inline`代码块示例` },
            raw({ block: true, lang: 'py' }, 'def hello(): # 一个 python 函数\n    print("Hello, SCUT!")'),
          ),
          space,
        ],
        label('code-example'),
      ),
    ),
    m.heading(2, '算法伪代码'),
    inline`基于 ${raw('algorithmic')} 包${ref(label('algorithmic'))}。`,
    inline`使用 ${raw('algorithm-figure()')}，自动编号（"算法 2-1"）。
语法模仿 LaTeX algorithmicx，提供 ${raw('If')}/${raw('While')}/${raw('For')}/${raw('Function')}/${raw('Procedure')}
等。`,
    inline`注意不要在章节文件顶层写 ${raw('#import "@preview/algorithmic:1.0.7": *')}：通配导入会把模板封装的中文补充词“算法”覆盖成英文“Algorithm”。像下方示例一样把 ${raw('import')}
写在 ${raw('algorithm-figure')} 的花括号作用域内即可。`,
    inline(
      labelled(
        [
          call(
            algorithmFigure,
            { vstroke: add(pt(0.5), luma(200)) },
            'Binary Search',
            unsafeRaw.code<any>`{
    import algorithmic: *
    Procedure(
      "Binary-Search",
      ("A", "n", "v"),
      {
        Comment[Initialize the search range]
        Assign[$l$][$1$]
        Assign[$r$][$n$]
        LineBreak
        While(
          $l <= r$,
          {
            Assign([mid], FnInline[floor][$(l + r) / 2$])
            IfElseChain(
              $A ["mid"] < v$,
              {
                Assign[$l$][$"mid" + 1$]
              },
              [$A ["mid"] > v$],
              {
                Assign[$r$][$"mid" - 1$]
              },
              Return[mid],
            )
          },
        )
        Return[*null*]
      },
    )
  }`,
          ),
          space,
        ],
        label('alg:binary-search'),
      ),
    ),
    inline`引用用 ${raw('@alg:binary-search')}，渲染为${ref(label('alg:binary-search'))}。`,
    m.heading(2, '脚注'),
    inline`正文中以 ${raw('#footnote[内容]')} 插入脚注，标记跟在所需注释的文字之后。脚注按页重新编号，以辅助字体小字号排版${footnote(inline`这是一个脚注示例。`)}。`,
    m.heading(2, '构建变体'),
    inline`除最终版外，常用构建变体如下。所有开关由项目根目录的 ${raw('build.typ')} 解析命令行输入（${raw('--input')}）控制，不传入任何参数时即为最终版。`,
    inline`${strong(inline`盲审版。`)} 使用 ${raw('--input profile=blind')} 启用盲审，并用 ${raw('--input blind=single|double')}
指定级别（缺省为双盲）。单盲封面保留作者与导师栏；双盲封面只保留论文题目、学科（学位类别）、所在学院与论文提交日期，不输出英文内封、提名页、原创性声明页与致谢，研究成果清单自动切换为匿名表格，PDF 元数据不写入作者；博士论文（两种盲审级别）均在封面后附专家评阅结果处理办法页。`,
    inline(
      raw(
        { block: true, lang: 'shell' },
        'typst compile --input profile=blind --input blind=single thesis.typ thesis-blind-single.pdf',
      ),
    ),
    inline`${strong(inline`印刷版。`)} 使用 ${raw('--input profile=for-print')}，自动为封面、英文内封、提名页与声明页补充空白背面页：`,
    inline(
      raw({ block: true, lang: 'shell' }, 'typst compile --input profile=for-print thesis.typ thesis-for-print.pdf'),
    ),
    inline`${strong(inline`查重版。`)} 查重系统通常只需要正文部分，页码范围由模板自动标记（${raw('<mainmatter-start>')} 由 ${raw('mainmatter')}
布局放置在正文首页，${raw('<backmatter-start>')} 由 ${raw('bilingual-bibliography()')} 放置在参考文献页），并需关闭 PDF 标签以兼容查重系统。分两步完成：先用 ${raw('typst eval')}
查询两个标签所在的页码`,
    inline(
      raw(
        { block: true, lang: 'shell' },
        "typst eval --in thesis.typ 'query(<mainmatter-start>).first().location().page()'\ntypst eval --in thesis.typ 'query(<backmatter-start>).first().location().page()'",
      ),
    ),
    '假设输出分别为 9 和 23，则正文为第 9 至 22 页，代入执行',
    inline(
      raw({ block: true, lang: 'shell' }, 'typst compile --no-pdf-tags --pages 9-22 thesis.typ thesis-for-check.pdf'),
    ),
    'Linux/macOS 用户也可用下面的命令自动完成查询与抽取：',
    inline(
      raw(
        { block: true, lang: 'shell' },
        "start=$(typst eval --in thesis.typ \\\n  'query(<mainmatter-start>).first().location().page()')\nend=$(( $(typst eval --in thesis.typ \\\n  'query(<backmatter-start>).first().location().page()') - 1 ))\ntypst compile --no-pdf-tags --pages \"$start-$end\" thesis.typ thesis-for-check.pdf",
      ),
    ),
    inline`其余开关：${raw('--input twoside=false')} 关闭双面排版；${raw('--input include-acknowledgement=false')}
隐藏致谢页。`,
    inline`需要长期切换到某一变体时，也可直接修改 ${raw('build.typ')} 中对应开关的默认值（如将 ${raw('profile')} 的默认值改为 ${raw('"blind"')}），此后普通编译与编辑器实时预览均按该变体输出。`,
    inline`模板源码仓库另提供封装脚本 ${raw('scripts/build.sh')}（Linux/macOS）与 ${raw('scripts/build.ps1')}（Windows），支持 ${raw('final')}、${raw('blind')}、${raw('for-check')}、${raw('for-print')}
与 ${raw('all')} 子命令，一键产出对应 PDF 到 ${raw('out/')} 目录；这些脚本只是上述 ${raw('--input')} 命令的封装，克隆仓库的用户直接执行脚本即可，如 ${raw('scripts/build.sh blind single')}。`,
    inline(labelled(heading({ depth: 1 }, inline('结　论')), label('no-numbering'))),
    '学位论文的结论单独作为一章排写，但不加章号。',
    '结论是对整个论文主要成果的总结。在结论中应明确指出本研究内容的创造性成果或创新性理论（含新见解、新观点），对其应用前景和社会、经济价值等加以预测和评价，并指出今后进一步在本研究方向进行研究工作的展望与设想。',
    '如果不能导出应有的结论，也可以没有结论而进行必要的讨论。',
    inline(
      pagebreak({ weak: true }),
      space,
      bilingualBibliography({ source: path('ref.bib'), title: '参考文献', full: false }),
    ),
    show(appendix),
    m.heading(1, '附录一'),
    m.heading(2, '附录子标题'),
    '附录内容。',
    inline(call(publications, inline`${space}此处可填写专利、著作、获奖项目等详细内容。${space}`)),
    inline(unsafeRaw.code<any>`if include-acknowledgement {
  acknowledgement[
    致谢内容。感谢指导教师和在学术方面对论文的完成有直接贡献及重要帮助的团体和人士。
  ]
}`),
  )
}
