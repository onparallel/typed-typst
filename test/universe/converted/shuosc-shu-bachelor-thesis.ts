// Converted from test/universe/corpus/shuosc-shu-bachelor-thesis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  bibliography,
  blocks,
  call,
  contentBlock,
  csv,
  data,
  define,
  doc,
  em,
  external,
  fr,
  h,
  heading,
  horizon,
  image,
  importPackage,
  inline,
  label,
  labelled,
  left,
  let_,
  linebreak,
  link,
  m,
  pagebreak,
  parbreak,
  path,
  pct,
  pt,
  raw,
  ref,
  rgb,
  show,
  space,
  strong,
  sym,
  table,
  text,
  underline,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const documentclass = define('documentclass')
    .named('citation', T.any, null)
    .named('fonts', T.any, null)
    .named('info', T.any, null)
    .named('math-level', T.any, null)
    .named('outline-compact', T.any, null)
    .named('title-line-length', T.any, null)
    .returns(T.any)
    .external()
  const algox = define('algox')
    .pos('arg1', T.any)
    .named('breakable', T.any, null)
    .named('caption', T.content, [])
    .named('label-name', T.any, null)
    .returns(T.any)
    .external()
  const tablex = define('tablex')
    .rest('args', T.any)
    .named('alignment', T.any, null)
    .named('breakable', T.any, null)
    .named('caption', T.content, [])
    .named('columns', T.any, null)
    .named('header', T.any, null)
    .named('label-name', T.any, null)
    .returns(T.any)
    .external()
  const citex = define('citex')
    .pos('arg1', T.any)
    .named('form', T.any, null)
    .named('style', T.any, null)
    .named('sup', T.any, null)
    .returns(T.any)
    .external()
  const imagex = define('imagex')
    .rest('args', T.any)
    .named('caption', T.content, [])
    .named('columns', T.any, null)
    .named('label-name', T.any, null)
    .named('placement', T.any, null)
    .returns(T.any)
    .external()
  const subimagex = define('subimagex')
    .pos('arg1', T.any)
    .named('caption', T.any, null)
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
  const mi = define('mi').pos('arg1', T.any).returns(T.any).external()
  const mitex = define('mitex').pos('arg1', T.any).returns(T.any).external()
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
      fonts,
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
      'fonts',
    ],
    documentclass({
      info: {
        title: '基于Typst的上海大学毕业论文模板',
        school: '计算机工程与科学',
        major: '计算机科学与技术',
        student_id: '21123456',
        name: '张三',
        supervisor: '李四教授',
        date: '2048年2月31日起5月32日止',
      },
      fonts: { fallback: false, songti: [{ name: 'Times New Roman', covers: 'latin-in-cjk' }, '簡宋'] },
      titleLineLength: pt(260),
      mathLevel: 2,
      outlineCompact: false,
      citation: { func: bibliography(path('ref.bib')), full: false, sup: true },
    }),
  )
  const [resultDecl, result] = let_('result', csv({ delimiter: ',' }, path('data/heros.csv')))
  const [colorsDecl, colors] = let_(
    'colors',
    data([
      rgb(214, 38, 40, 255),
      rgb(43, 160, 43, 255),
      rgb(158, 216, 229, 255),
      rgb(114, 158, 206, 255),
      rgb(204, 204, 91, 255),
      rgb(255, 186, 119, 255),
      rgb(147, 102, 188, 255),
      rgb(30, 119, 181, 255),
      rgb(188, 188, 33, 255),
      rgb(255, 127, 12, 255),
      rgb(196, 175, 214, 255),
    ]),
  )
  const [resultsDecl, results] = let_('results', csv({ delimiter: ',' }, path('data/nyuv2.csv')))
  return doc(
    importPackage('@preview/shuosc-shu-bachelor-thesis:1.0.0', [
      documentclass,
      algox,
      tablex,
      citex,
      imagex,
      subimagex,
    ]),
    patternDecl,
    inline(fonts, space, show(doc_2)),
    inline(call(cover)),
    inline(
      call(declare, {
        authorSign: image(path('figures/sign.png')),
        supervisorSign: image(path('figures/sign.png')),
        date: null,
      }),
    ),
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
    m.heading(1, '章节一'),
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
    '正文各章节应拟标题，每章结束后应另起一页。标题要简明扼要，不应使用标点符号。各章、节、条的层次，可以按照“1……、1.1……、1.1.1……”标识，条以下具体款项的层次依次按照“1.1.1.1”或“（1）”、“①”等标识。各学院根据实际情况，可自行规定层次格式，但学院之内建议格式统一，以清晰无误为准。',
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
      m.heading(3, '单张图片'),
      inline(
        imagex(
          { caption: inline`示例图片`, labelName: 'image1', placement: null },
          image({ width: pct(70) }, path('figures/energy-distribution.png')),
        ),
      ),
    ),
    m.lines(
      m.heading(3, '多个子图'),
      inline(
        imagex(
          { columns: 2, caption: inline`示例子图`, labelName: 'image2', placement: null },
          subimagex(
            { caption: '子图a', labelName: 'sub1' },
            image({ width: pct(70) }, path('figures/energy-distribution.png')),
          ),
          subimagex(image({ width: pct(70) }, path('figures/energy-distribution.png'))),
          subimagex(image({ width: pct(70) }, path('figures/energy-distribution.png'))),
          subimagex(image({ width: pct(70) }, path('figures/energy-distribution.png'))),
        ),
      ),
    ),
    inline(pagebreak()),
    m.heading(2, '表格格式'),
    inline`表格可以在换页的时候自然断开并显示“续表xxxx”，如果需要令表显示在整页中，请将表中的${raw('breakable')}设置为${raw('false')}。`,
    inline(unsafeRaw.code<any>`tablex(
  ..for i in range(5) {
    ([250], [88], [5900], [1.65])
  },
  header: (
    [感应频率 #linebreak() (kHz)],
    [感应发生器功率 #linebreak() (%×80kW)],
    [工件移动速度 #linebreak() (mm/min)],
    [感应圈与零件间隙 #linebreak() (mm)],
  ),
  columns: (1fr, 1fr, 1fr, 1fr),
  caption: [示例表格],
  label-name: "table1",
  breakable: true,
)`),
    m.heading(2, '公式格式'),
    inline(
      labelled(
        unsafeRaw.math
          .block`1 / mu nabla^2 Alpha - j omega sigma Alpha - nabla(1 / mu) times (nabla times Alpha) + J_0 = 0`,
        label('equation'),
      ),
    ),
    inline`${h(em(-2))}其中${unsafeRaw.math`mu`}是材料的磁导率，${unsafeRaw.math`sigma`}是材料的电导率，${unsafeRaw.math`omega`}是电磁波的角频率，${unsafeRaw.math`Alpha`}是电磁场的矢量位，${unsafeRaw.math`J_0`}是电流密度。使用${raw({ lang: 'typst' }, '#h(-2em)')}取消这一行前面的缩进。`,
    inline(pagebreak()),
    m.lines(
      m.heading(2, '算法格式'),
      inline`算法和表格一样也是换页的时候自然断开并显示“续算法xxxx”。
${contentBlock(
  blocks(
    m.lines(
      importPackage('@preview/lovelace:0.2.0', [pseudocode, noNumber, ind, ded]),
      inline(
        algox(
          { labelName: 'algorithm', caption: inline`欧几里得辗转相除`, breakable: true },
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
    ),
    inline`也可以直接插入代码：
${algox({ caption: inline`欧几里得辗转相除C++实现` }, inline(space, raw({ block: true, lang: 'cpp' }, '#include <bits/stdc++.h>\nusing namespace std;\nint gcd(int a, int b) {\n  while (a != b) {\n    if (a > b) a -= b;\n    else b -= a;\n  }\n  return a;\n}'), space))}`,
    m.heading(1, '引用格式'),
    m.heading(2, '常规引用'),
    inline(
      tablex(
        {
          header: [inline`引用对象`, inline`效果`, inline`原始代码`],
          columns: [fr(1), fr(1), fr(1)],
          caption: inline`常规引用示例表`,
        },
        inline`表格`,
        inline`我要引用${ref(label('tbl:table1'))}`,
        inline(raw({ lang: 'typst' }, '我要引用@tbl:table')),
        table.cell({ rowspan: 2, align: horizon }, inline`图片`),
        inline`我要引用${ref(label('img:image1'))}`,
        inline(raw({ lang: 'typst' }, '我要引用@img:image1')),
        inline`我要引用${ref(label('img:image2:sub1'))}`,
        inline(raw({ lang: 'typst' }, '我要引用@img:subfigures1:test')),
        inline`算法`,
        inline`我要引用${ref(label('algo:algorithm'))}`,
        inline(raw({ lang: 'typst' }, '我要引用@algo:algorithm')),
        inline`公式`,
        inline`我要引用${ref(label('eqt:equation'))}`,
        inline(raw({ lang: 'typst' }, '我要引用@eqt:equation')),
      ),
    ),
    inline`另一种函数引用方法: ${raw({ lang: 'typst' }, '#ref(<img:image1>)')}`,
    inline(labelled(heading({ depth: 2 }, inline('章节引用')), label('main_test'))),
    inline`我要引用${ref(label('main_test'))}：${raw({ lang: 'typst' }, '我要引用@main_test ')}`,
    inline`我要引用${ref(label('appendix1'))}：${raw({ lang: 'typst' }, '我要引用#ref(<appendix1>)')}`,
    m.lines(
      m.heading(2, '页面引用'),
      inline`请注意${ref({ form: 'page' }, label('jump'))} 的${raw({ lang: 'typst' }, '#bib')}函数，它会因为${raw('citation.full')}参数变化而发生变化。`,
    ),
    inline(pagebreak()),
    m.heading(2, '文献引用'),
    inline(
      tablex(
        {
          header: [inline`引用对象`, inline`效果`, inline`原始代码`],
          alignment: add(left, horizon),
          columns: [fr(1), fr(1.5), fr(2)],
          caption: inline`文献引用示例表`,
          labelName: 'table2',
        },
        inline`句子末尾引用`,
        inline`Typst很厉害${ref(label('liu_survey_2024'))}`,
        inline(raw({ lang: 'typst' }, 'Typst很厉害@liu_survey_2024')),
        inline`句子末尾引用`,
        inline`Typst很厉害${citex(label('test'))}`,
        inline(raw({ lang: 'typst' }, 'Typst很厉害#citex(<test>)')),
        inline`句子内部引用`,
        inline`文献${citex({ sup: false }, label('liu_survey_2024'))}说Typst很厉害`,
        text(
          { size: em(0.7) },
          inline(raw({ lang: 'typst' }, '文献#citex(<liu_survey_2024>,sup:false) 说Typst很厉害')),
        ),
        table.hline({ stroke: pt(0.2) }),
        inline`用别的格式的引用(自行查阅参数)`,
        inline`${citex({ style: 'future-science', form: 'prose' }, label('liu_survey_2024'))}${linebreak()}
这些人说的`,
        text(
          { size: em(0.8) },
          inline(
            raw(
              { block: true, lang: 'typst' },
              '#citex(<liu_survey_2024>,style: "future-science", form:"prose")\n\\ 这些人说的',
            ),
          ),
        ),
      ),
    ),
    inline`当${raw('citation')}中的${raw('sup')}为${raw('true')}的时候，所有的不标注${raw('sup')}的引用默认不为右上标；当${raw('citation')}中的${raw('sup')}为${raw('true')}的时候，所有的不标注${raw('sup')}的引用默认为右上标。`,
    inline`使用别的格式时${raw('sup')}失效。`,
    m.heading(1, '高级格式'),
    m.heading(2, '数据表格'),
    m.lines(
      '无论是LaTex还是Word，将大量的数据制作成表格往往是一个非常复杂的过程。更何况这些实验数据日后可能还会变更，那么又要对表格的部分内容进行调整（比如加粗数据最大的那一项），这里给出一个制作数据表格的快捷方法，大致的流程是：',
      m.enum(
        m.item(['将数据保存为CSV格式（Excel等均支持该格式）；']),
        m.item(['使用Typst读取；']),
        m.item(['排版并处理数据。']),
      ),
      inline`${ref(label('tbl:data1'))}是一个简单的例子：`,
    ),
    inline(unsafeRaw.code<any>`{
  // 读取文件，分隔符可以为分号
  let result = csv("data/heros.csv", delimiter: ",")

  // 获取列数
  let m = result.at(0).len()

  // 获取表头
  let head = result.at(0)

  // 获取数据部分
  let data = result.slice(1)

  tablex(
    ..data.flatten(), // 将数据展平
    header: head, // 显示表头
    columns: m, // 设置列数
    caption: [超级英雄能力表],
    label-name: "data1",
  )
}`),
    inline`${ref(label('tbl:data2'))}是一个更复杂的例子：`,
    colorsDecl,
    inline(
      unsafeRaw.code<any>`{
  let results = csv("data/nyuv2.csv", delimiter: ",")
  let m = results.at(0).len()
  let head = results.at(0)

  // 将中间的标签旋转90度
  for y in range(m - 3) {
    head.at(y + 2) = rotate(
      90deg,
      stack(dir: ltr, box(fill: colors.at(y), inset: 4pt), head.at(y + 2)),
      reflow: true,
    )
  }
  let data = results.slice(1)

  // 将数据中的最大项找出并加粗
  for y in range(1, m) {
    // 去除非数据元素
    let col_num = data.map(row => row.at(y)).filter(it => it.contains(regex("\\d")))

    // 找出最大值
    let max_val = col_num.map(float).reduce(calc.max)

    // 加粗最大值
    data = data.map(row => {
      let item = row.at(y)
      if item.contains(regex("\\d")) and float(item) == max_val {
        row.at(y) = [#strong(item)]
      }
      row
    })
  }
  tablex(
    table.vline(x: 2, stroke: 0.2pt),
    table.vline(x: m - 1, stroke: 0.2pt),
    ..data.flatten(),
    header: head,
    columns: (15%, 7%, ..(auto,) * 11, 8%),
    caption: [主流模型在NYUv2数据集下的性能表现],
    label-name: "data2",
  )
}`,
      space,
      pagebreak(),
    ),
    m.heading(2, '流程图绘制'),
    inline`使用${link('https://typst.app/universe/package/fletcher', underline(inline`Fletcher`))}可以绘制流程图，点击横线处链接查看使用文档。`,
    inline(imagex({ caption: inline`Fletcher示例` }, image(path('figures/fletcher.png')))),
    inline(pagebreak()),
    m.heading(2, '复杂图形绘制'),
    inline`Fletcher是基于${link('https://typst.app/universe/package/cetz', underline(inline`CeTZ`))}的，CeTZ可以绘制更复杂的图形，点击横线处链接查看使用文档。`,
    inline(imagex({ caption: inline`CeTZ示例` }, image(path('figures/cetz.png')))),
    inline(pagebreak()),
    m.lines(
      m.heading(2, 'LaTex公式'),
      inline`如果你不习惯Typst的公式，可以使用${link('https://typst.app/universe/package/mitex', underline(inline`MiTex`))}，点击横线处链接查看使用文档。`,
    ),
    importPackage('@preview/mitex:0.2.6', [mi, mitex]),
    inline`行内公式如下：${mi('x')} 或 ${mi(inline`y`)}。`,
    inline`块级公式如${ref(label('eqt:equation1'))}：
${labelled(mitex(raw('\n  \\newcommand{\\f}[2]{#1f(#2)}\n  \\f\\relax{x} = \\int_{-\\infty}^\\infty\n    \\f\\hat\\xi\\,e^{2 \\pi i \\xi x}\n    \\,d\\xi\n')), label('equation1'))}`,
    inline(
      call(
        conclusion,
        inline`${space}结论是毕业论文的总结，是整篇论文的归宿。应精炼、准确、完整。着重阐述自己的创造性成果及其在本研究领域中的意义、作用，还可进一步提出需要讨论的问题和建议。${space}`,
      ),
    ),
    inline(labelled(call(bib), label('jump'))),
    show(appendix),
    inline(labelled(heading({ depth: 1 }, inline('附录格式')), label('appendix1'))),
    '论文附录依次用大写字母“附录A、附录B、附录C……”表示，附录内的分级序号可采用“附A1、附A1.1、附A1.1.1”等表示，图、表、公式均依此类推为“图A1、表A1、式（A1）”等。包含以下内容：',
    '（1）代码、图表、标准、手册等数据；',
    '（2）未发表过的一手文献；',
    '（3）公式推导与证明、调查表等；',
    '（4）辅助性教学工具或表格；',
    '（5）其他需要展示或说明的内容',
    '……',
    '（标题黑体小二号，内容Times New Roman/宋体，小四号，行距20磅）',
    inline(
      call(
        acknowledgement,
        { location: '上海大学', date: null },
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
