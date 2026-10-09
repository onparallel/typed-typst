// Converted from test/universe/corpus/modern-shu-thesis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  blocks,
  call,
  contentBlock,
  define,
  doc,
  em,
  external,
  figure,
  h,
  image,
  importPackage,
  inline,
  label,
  labelled,
  let_,
  linebreak,
  m,
  parbreak,
  path,
  pct,
  raw,
  ref,
  show,
  space,
  strong,
  sym,
  unsafeRaw,
  v,
} from '../../../src/index.ts'

export default () => {
  const documentclass = define('documentclass').named('info', T.any, null).returns(T.any).external()
  const algox = define('algox')
    .pos('arg1', T.any)
    .named('caption', T.content, [])
    .named('label-name', T.any, null)
    .returns(T.any)
    .external()
  const tablex = define('tablex')
    .pos('arg1', T.any)
    .named('caption', T.content, [])
    .named('colnum', T.any, null)
    .named('columns', T.any, null)
    .named('header', T.any, null)
    .named('label-name', T.any, null)
    .returns(T.any)
    .external()
  const pseudocode = define('pseudocode')
    .pos('arg1', T.any)
    .pos('arg2', T.content)
    .pos('arg3', T.any)
    .pos('arg4', T.content)
    .pos('arg5', T.content)
    .pos('arg6', T.any)
    .pos('arg7', T.content)
    .pos('arg8', T.any)
    .pos('arg9', T.any)
    .pos('arg10', T.any)
    .pos('arg11', T.content)
    .pos('arg12', T.any)
    .pos('arg13', T.any)
    .pos('arg14', T.any)
    .pos('arg15', T.content)
    .pos('arg16', T.any)
    .pos('arg17', T.content)
    .pos('arg18', T.content)
    .returns(T.any)
    .external()
  const noNumber = external('no-number')
  const ind = external('ind')
  const ded = external('ded')
  const [
    patternDecl,
    [
      info,
      doc_2,
      cover,
      declare,
      appendix,
      outline_2,
      mainmatter,
      conclusion,
      abstract,
      bib,
      acknowledgement,
      underCover,
    ],
  ] = let_(
    [
      'info',
      'doc',
      'cover',
      'declare',
      'appendix',
      'outline',
      'mainmatter',
      'conclusion',
      'abstract',
      'bib',
      'acknowledgement',
      'under-cover',
    ],
    documentclass({
      info: {
        title: '基于Typst的上海大学毕业论文模板',
        school: '计算机工程与科学',
        major: '计算机科学与技术',
        student_id: '21123456',
        name: '张三',
        supervisor: '李四教授',
        date: '1000-2000',
      },
    }),
  )
  return doc(
    importPackage('@preview/modern-shu-thesis:0.3.3', [documentclass, algox, tablex]),
    patternDecl,
    m.lines(show(doc_2), inline(call(cover), space, call(declare))),
    inline(
      call(
        abstract,
        {
          keywords: ['学位论文', '论文格式', '规范化', '模板'],
          keywordsEn: ['dissertation', 'dissertation format', 'standardization', 'template'],
        },
        blocks(
          '摘要的内容需作者简要介绍本论文的主要内容主要为本人所完成的工作和创新点。',
          '……',
          '(注：标题黑体小二号，正文宋体小四，行距20磅)',
        ),
        blocks(
          'The content of the abstract requires the author to briefly introduce the main content of this paper, mainly for my work and innovation.',
          '…….',
          '(Times New Roman，小四号，行距20磅)',
        ),
      ),
    ),
    inline(call(outline_2)),
    show(mainmatter),
    m.heading(1, '绪论'),
    m.heading(2, '引言'),
    inline`学位论文${sym.dots.h}${sym.dots.h}`,
    m.heading(3, '三级标题'),
    inline`${sym.dots.h}${sym.dots.h}`,
    m.heading(4, '四级标题'),
    inline`${sym.dots.h}${sym.dots.h}`,
    m.heading(2, '本文研究主要内容'),
    inline`本文${sym.dots.h}${sym.dots.h}`,
    m.heading(2, '本文研究意义'),
    inline`本文${sym.dots.h}${sym.dots.h}`,
    m.heading(2, '本章小结'),
    inline`本文${sym.dots.h}${sym.dots.h}`,
    m.heading(1, '格式要求'),
    inline`正文各章节应拟标题，每章结束后应另起一页。标题要简明扼要，不应使用标点符号。各章、节、条的层次，可以按照“1……、1.1……、1.1.1……”标识，条以下具体款项的层次依次按照“1.1.1.1”或“（1）”、“①”等标识。各学院根据实际情况，可自行规定层次格式，但学院之内建议格式统一，以清晰无误为准${ref(label('liu_survey_2024'))}。`,
    '正文是毕业论文的主体和核心部分，不同学科专业和不同的选题可以有不同的写作方式。正文一般包括以下几个方面。',
    m.lines(
      m.heading(2, '引言或背景'),
      '引言是论文正文的开端，引言应包括毕业论文选题的背景、目的和意义；对国内外研究现状和相关领域中已有的研究成果的简要评述；介绍本项研究工作研究设想、研究方法或实验设计、理论依据或实验基础；涉及范围和预期结果等。要求言简意赅，注意不要与摘要雷同或成为摘要的注解。',
    ),
    m.lines(
      m.heading(2, '主体'),
      '论文主体是毕业论文的主要部分，必须言之成理，论据可靠，严格遵循本学科国际通行的学术规范。在写作上要注意结构合理、层次分明、重点突出，章节标题、公式图表符号必须规范统一。论文主体的内容根据不同学科有不同的特点，一般应包括以下几个方面：',
      m.enum(
        m.item(['毕业设计（论文）总体方案或选题的论证；']),
        m.item([
          '毕业设计（论文）各部分的设计实现，包括实验数据的获取、数据可行性及有效性的处理与分析、各部分的设计计算等；',
        ]),
        m.item(['对研究内容及成果的客观阐述，包括理论依据、创新见解、创造性成果及其改进与实际应用价值等；']),
        m.item([
          '论文主体的所有数据必须真实可靠，自然科学论文应推理正确、结论清晰；人文和社会学科的论文应把握论点正确、论证充分、论据可靠，恰当运用系统分析和比较研究的方法进行模型或方案设计，注重实证研究和案例分析，根据分析结果提出建议和改进措施等。',
        ]),
      ),
    ),
    m.lines(
      m.heading(2, '结论'),
      '结论是毕业论文的总结，是整篇论文的归宿。应精炼、准确、完整。着重阐述自己的创造性成果及其在本研究领域中的意义、作用，还可进一步提出需要讨论的问题和建议。',
    ),
    m.heading(1, '图表格式'),
    m.lines(
      m.heading(2, '图格式'),
      inline(
        labelled(
          figure(
            { kind: 'image', supplement: inline`图`, caption: inline`Energy distribution along radial` },
            image({ width: pct(70) }, path('figures/energy-distribution.png')),
          ),
          label('image'),
        ),
      ),
    ),
    inline(v(em(1.5))),
    inline`如 ${ref(label('img:image'))} 所示，${sym.dots.h}${sym.dots.h}`,
    m.lines(m.heading(2, '表格格式'), inline`我们来看 ${ref(label('tbl:table'))}，`),
    inline`可以续表: ${linebreak()} ${linebreak()} ${linebreak()}`,
    inline(unsafeRaw.code<any>`tablex(
  ..for i in range(15) {
    ([250], [88], [5900], [1.65])
  },
  header: (
    [感应频率 #linebreak() (kHz)],
    [感应发生器功率 #linebreak() (%×80kW)],
    [工件移动速度 #linebreak() (mm/min)],
    [感应圈与零件间隙 #linebreak() (mm)],
  ),
  columns: (1fr, 1fr, 1fr, 1fr),
  colnum: 4,
  caption: [66666666],
  label-name: "table",
)`),
    m.heading(2, '公式格式'),
    inline`我要引用 ${ref(label('eqt:equation'))}。`,
    inline(
      labelled(
        unsafeRaw.math
          .block`1 / mu nabla^2 Alpha - j omega sigma Alpha - nabla(1/mu) times (nabla times Alpha) + J_0 = 0`,
        label('equation'),
      ),
    ),
    m.lines(m.heading(2, '算法格式'), inline`我要引用 ${ref(label('algo:algorithm'))}`),
    inline`算法也可以续：
${v(em(10))} ${contentBlock(
      blocks(
        m.lines(
          importPackage('@preview/lovelace:0.2.0', [pseudocode, noNumber, ind, ded]),
          inline(
            algox(
              { labelName: 'algorithm', caption: inline`欧几里得辗转相除` },
              pseudocode(
                noNumber,
                inline`${h(em(-1.25))} ${strong(inline`input:`)} integers ${unsafeRaw.math`a`} and ${unsafeRaw.math`b`}`,
                noNumber,
                inline`${h(em(-1.25))} ${strong(inline`output:`)} greatest common divisor of ${unsafeRaw.math`a`} and
${unsafeRaw.math`b`}`,
                inline(strong(inline`while`), space, unsafeRaw.math`a != b`, space, strong(inline`do`)),
                ind,
                inline(strong(inline`if`), space, unsafeRaw.math`a > b`, space, strong(inline`then`)),
                ind,
                unsafeRaw.math`a <- a - b`,
                ded,
                inline(strong(inline`else`)),
                ind,
                unsafeRaw.math`b <- b - a`,
                ded,
                inline(strong(inline`end`)),
                ded,
                inline(strong(inline`end`)),
                inline(strong(inline`return`), space, unsafeRaw.math`a`),
              ),
            ),
          ),
        ),
      ),
    )}`,
    inline`也可以直接插入代码：
${algox({ labelName: 'algorithm-1', caption: inline`欧几里得辗转相除C++实现` }, inline(space, raw({ block: true, lang: 'cpp' }, '#include <bits/stdc++.h>\nusing namespace std;\nint gcd(int a, int b) {\n  while (a != b) {\n    if (a > b) a -= b;\n    else b -= a;\n  }\n  return a;\n}'), space))}`,
    m.heading(2, '本章小结'),
    '本章介绍了……',
    inline(
      call(
        conclusion,
        inline`${space}结论是毕业论文的总结，是整篇论文的归宿。应精炼、准确、完整。着重阐述自己的创造性成果及其在本研究领域中的意义、作用，还可进一步提出需要讨论的问题和建议。${space}`,
      ),
    ),
    inline(call(bib, { bibfunc: bibliography(path('ref.bib')) })),
    show(appendix),
    m.heading(1, '附录格式'),
    '论文附录依次用大写字母“附录A、附录B、附录C……”表示，附录内的分级序号可采用“附A1、附A1.1、附A1.1.1”等表示，图、表、公式均依此类推为“图A1、表A1、式（A1）”等。包含以下内容：',
    '（1）代码、图表、标准、手册等数据；',
    '（2）未发表过的一手文献；',
    '（3）公式推导与证明、调查表等；',
    '（4）辅助性教学工具或表格；',
    '（5）其他需要展示或说明的内容',
    '……',
    '（标题黑体小二号，内容Times New Roman/宋体，小四号，行距20磅）',
    m.heading(2, '测试1'),
    inline`${labelled(figure({ kind: 'image', supplement: inline`图`, caption: inline`Energy distribution along radial` }, image({ width: pct(70) }, path('figures/energy-distribution.png'))), label('image2'))}
${sym.dots.h}${sym.dots.h}`,
    m.heading(3, '测试1.1'),
    inline(
      labelled(
        figure(
          { kind: 'image', supplement: inline`图`, caption: inline`Energy distribution along radial` },
          image({ width: pct(70) }, path('figures/energy-distribution.png')),
        ),
        label('image3'),
      ),
    ),
    m.lines(
      m.heading(1, '测试2'),
      inline(
        labelled(
          figure(
            { kind: 'image', supplement: inline`图`, caption: inline`Energy distribution along radial` },
            image({ width: pct(70) }, path('figures/energy-distribution.png')),
          ),
          label('image4'),
        ),
      ),
    ),
    inline`${sym.dots.h}${sym.dots.h}`,
    inline(
      call(
        acknowledgement,
        { location: '上海大学' },
        blocks(
          '表达真情实感即可。',
          '（致谢部分切勿照搬，本部分内容也在论文查重范围之内）',
          '（格式：宋体，Times New Roman小四号字，两边对齐，首行缩进2个字符，行距23磅，字符间距为“标准”）',
          parbreak(),
        ),
      ),
    ),
    inline(call(underCover)),
  )
}
