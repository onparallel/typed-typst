// Converted from test/universe/corpus/unofficial-sdu-thesis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  align,
  bibliography,
  black,
  blocks,
  call,
  center,
  contentBlock,
  define,
  doc,
  em,
  external,
  figure,
  fr,
  gray,
  h,
  image,
  importPackage,
  inline,
  label,
  labelled,
  let_,
  linebreak,
  lorem,
  m,
  pagebreak,
  path,
  pct,
  raw,
  rect,
  ref,
  rgb,
  show,
  space,
  strong,
  sym,
  symbol,
  text,
  unsafeRaw,
  white,
} from '../../../src/index.ts'

export default () => {
  const doc_2 = external('doc')
  const appendix = external('appendix')
  const mainmatter = external('mainmatter')
  const documentclass = define('documentclass')
    .named('if-mentor-anonymous', T.any, null)
    .named('info', T.any, null)
    .returns(T.any)
    .external()
  const tablex = define('tablex')
    .rest('args', T.any)
    .named('caption', T.content, [])
    .named('columns', T.any, null)
    .named('header', T.any, null)
    .named('label-name', T.any, null)
    .named('supplement', T.any, null)
    .returns(T.any)
    .external()
  const algox = define('algox')
    .pos('arg1', T.any)
    .named('caption', T.content, [])
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
      doc_3,
      cover,
      declare,
      appendix_2,
      outline_2,
      mainmatter_2,
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
        title: 'XXXX毕业论文',
        name: '渐入佳境Groove',
        id: '20XXXXXXXXXX',
        school: 'XXXX学院',
        major: 'XXXX',
        grade: '20XX级',
        mentor: 'MENTORNAME',
        time: '20XX年X月XX日',
      },
      ifMentorAnonymous: false,
    }),
  )
  return doc(
    inline(
      importPackage('@preview/unofficial-sdu-thesis:1.0.0', [
        doc_2,
        appendix,
        mainmatter,
        documentclass,
        tablex,
        algox,
      ]),
    ),
    patternDecl,
    show(doc_3),
    inline(call(cover)),
    inline(
      call(abstract, {
        body: inline`${space}中文摘要应将学位论文的内容要点简短明了地表达出来，一般约300~800个汉字，字体为宋体小四号。内容应包括目的与意义、研究内容与方法以及研究结论等。
同时需要突出论文的新论点、新见解或创造性成果，语言力求精炼。注意：中英文摘要和中英文关键词，要一一对应。${space}`,
        keywords: ['关键词1', '关键词2', '关键词3', '关键词4', '关键词5'],
        bodyEn: inline`${space}This dissertation explores innovative approaches in artificial intelligence applications.
The research methodology combines theoretical analysis with practical experiments, resulting
in novel insights and frameworks. The findings contribute significantly to the field, offering
potential solutions for real-world implementation. The study highlights original perspectives
and creative outcomes, demonstrating both academic rigor and practical relevance.${space}`,
        keywordsEn: ['dissertation', 'dissertation format', 'standardization', 'template'],
      }),
    ),
    inline(call(outline_2)),
    show(mainmatter_2),
    m.heading(1, '绪', h(em(2)), '论'),
    m.heading(2, '二级标题'),
    '山東大學本科畢業論文（設計）Typst模板。',
    m.heading(3, '三级标题'),
    inline`本文...`,
    m.heading(3, '三级标题'),
    inline`许多年后 ${ref(label('toshev_deeppose_2014'))}，见 ${ref(label('img:image2'))}，奥雷里亚诺·布恩迪亚上校站在行刑队面前，准会想起父亲带他去见识冰块的那个遥远的下午。`,
    inline`Many years later, as he faced the firing squad ${ref(label('stumberg_dmvio_2022'))} , Colonel
Aureliano Buendía was to remember that distant afternoon when his father took him to discover
ice.`,
    '当时的马孔多是一个二十户人家的村落，泥巴和芦苇盖成的房屋沿河岸排开，河水清澈，沿着遍布光滑的石头的河床流淌，那些石头洁白而巨大，像是史前的蛋。',
    'At that time Macondo was a village of twenty adobe houses, built on the bank of a river of clear water that ran along a bed of polished stones, which were white and enormous, like prehistoric eggs.',
    inline`这片土地如此年轻 ${ref(label('lee_groundmovingplatformbased_2016'))} ${ref(label('choi_pose2mesh_2021'))}
${ref(label('kim_realtime_2015'))}，许多事物都还没有名字 ，提到的时候需要用手指指点点。`,
    inline`The world was so recent that many things lacked names, and in order ${ref(label('bay_surf_2006'))}
to indicate them it was necessary to point.`,
    m.heading(1, '本科毕业论文写作规范'),
    inline`${strong(inline`养成良好的写作习惯`)}：`,
    m.list(
      { tight: false },
      m.item(['写作过程中，及时保存并备份文档，特别是当版本有较大更新时。']),
      m.item([
        '为突出显示、方便修改，成文时，全文中所有与序号有关的章节号、图号、表号、式号、文献号、附录号等，均用',
        text({ fill: rgb('c00000') }, inline`深红色`),
        '（',
        text({ fill: gray, font: 'Courier New' }, inline`rgb:C00000`),
        '）标注。',
      ]),
    ),
    m.heading(2, '正文写作规范'),
    m.heading(3, '正文字体规范'),
    m.enum(
      { tight: false },
      m.item(
        [strong(inline`正文字体字号`), '：'],
        m.list(
          { tight: false },
          m.item(['中文使用小四号宋体']),
          m.item(['外文字母（英文字母、希腊字母等）和数字使用小四号 Times New Roman 字体']),
        ),
      ),
      m.item(
        [strong(inline`图表名称字体字号`), '：'],
        m.list(
          { tight: false },
          m.item(['中文使用五号宋体']),
          m.item(['外文字母和数字使用五号 Times New Roman 字体']),
          m.item(['图表名称需加粗并居中对齐']),
        ),
      ),
      m.item(
        [strong(inline`标点符号使用规则`), '：'],
        m.list(
          { tight: false },
          m.item(['中文句子使用中文标点符号']),
          m.item(['英文句子使用英文标点符号']),
          m.item(['全文括号、引号、波浪号等统一使用 Times New Roman 字体：']),
          m.item(['英文摘要和参考文献中，英文标点符号后需空一格（段落最后一个标点符号除外）']),
        ),
      ),
    ),
    m.heading(2, '二级标题'),
    inline`本组织...`,
    m.heading(3, '三级标题'),
    inline`本文将...`,
    m.heading(1, '图表格式'),
    m.heading(2, '图格式'),
    inline(
      labelled(
        figure(
          { supplement: inline`图`, caption: inline`Albert Einstein` },
          image({ width: pct(50) }, path('img/AlbertEinstein.png')),
        ),
        label('Einstein'),
      ),
    ),
    inline`如${ref(label('img:Einstein'))} 所示，这是爱因斯坦。`,
    m.heading(2, '表格格式'),
    inline`这里展示了一张数据表格，见${ref(label('tbl:这张表格的label'))}`,
    inline(unsafeRaw.code<any>`tablex(
  header: (
    [感应频率 #linebreak() (kHz)],
    [感应发生器功率 #linebreak() (%×80kW)],
    [工件移动速度 #linebreak() (mm/min)],
    [感应圈与零件间隙 #linebreak() (mm)],
  ),
  columns: (1fr, 1fr, 1fr, 1fr),
  // colnum: 4,被弃用的特性
  caption: [这是一个表格示例],
  label-name: "这张表格的label",
  ..for i in range(10) {
    ([250], [88], [5900], [1.65])
  },
)`),
    inline`同时，见${ref(label('tbl:包含两位科学家的表'))} 所示，这是另外两位科学家的照片，他们分别是香农和冯诺伊曼。这一部分的内容主要用于帮助认识${raw('tablex')}的用法。`,
    inline(
      tablex(
        {
          columns: [fr(1), fr(1)],
          caption: inline`两位科学家`,
          labelName: '包含两位科学家的表',
          header: [
            inline`Claude Elwood Shannon ${linebreak()} 克勞德·夏農`,
            inline`John von Neumann ${linebreak()} 約翰·馮·諾伊曼`,
          ],
        },
        figure({ supplement: inline`图` }, image({ width: pct(50) }, path('img/ClaudeElwoodShannon.png'))),
        figure({ supplement: inline`图` }, image({ width: pct(50) }, path('img/John von Neumann.png'))),
      ),
    ),
    m.heading(2, '公式格式'),
    inline`我要引用 ${ref(label('eqt:equation'))}。`,
    inline(
      labelled(
        unsafeRaw.math
          .block`1 / mu nabla^2 Alpha - j omega sigma Alpha - nabla(1/mu) times (nabla times Alpha) + J_0 = 0`,
        label('equation'),
      ),
    ),
    m.heading(2, '算法格式'),
    inline`我要引用 ${ref(label('algo:algorithm'))}`,
    inline(
      rect(
        { width: pct(50), height: em(5), fill: black },
        inline(
          space,
          align(
            unsafeRaw.code<any>`center + alignment.horizon`,
            inline(space, text({ fill: white }, inline`填充: width:50%, height:5em`), space),
          ),
          space,
        ),
      ),
    ),
    inline(
      contentBlock(
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
      ),
    ),
    m.heading(1, '总结与展望'),
    '总结全文并展望。主要撰写论文工作的结论、创新点、不足之处、进一步研究展望等内容，不宜插入图表。',
    m.heading(2, '工作总结'),
    inline(lorem(20)),
    m.heading(2, '不足之处与进一步研究展望'),
    inline(lorem(20)),
    m.lines(
      m.heading(3, '不足之处与进一步研究展望'),
      inline`笑死笑死笑死笑死笑死
${lorem(20)}`,
    ),
    m.heading(4, '不足之处与进一步研究展望'),
    inline(lorem(20)),
    inline(call(bib, { bibfunc: bibliography(path('ref.bib')) })),
    inline(
      call(
        acknowledgement,
        inline`${space}表达真情实感即可。
（致谢部分切勿照搬，本部分内容也在论文查重范围之内）
（格式：宋体，Times New Roman小四号字，两边对齐，首行缩进2个字符，行距23磅，字符间距为“标准”）${space}`,
      ),
    ),
    show(appendix_2),
    m.heading(1, '附', h(em(2)), '录'),
    '“附录”二字黑体小二号加粗居中，中间空4个空格；内容为宋体小四号、首行缩进两字符、1.5倍行距。对于不宜放在正文中，但有参考价值的内容，可放附录中。例如，重复测试的实验结果图表，篇幅较大的图、表、数学式的推演、编写的算法、程序代码段等。注意：正文文字统领图表式、文献、附录。所有的附录均应在正文文字中提及。',
    m.heading(2, '附图示例'),
    inline(
      labelled(
        figure(
          { supplement: inline`附图`, caption: inline`Lenna` },
          image({ width: pct(70) }, path('./img/appendix/Lenna.png')),
        ),
        label('image2'),
      ),
    ),
    '这里可以记录文字描述。',
    inline(
      labelled(
        figure(
          { supplement: inline`附图`, caption: inline`Sierpinski pyramid` },
          image({ width: pct(70) }, path('./img/appendix/Sierpinski_pyramid.jpg')),
        ),
        label('image4'),
      ),
    ),
    inline`${sym.dots.h}${sym.dots.h}`,
    inline(
      labelled(
        figure(
          { supplement: inline`附图`, caption: inline`Sigmoid function` },
          image({ width: pct(100) }, path('./img/appendix/Sigmoid.svg')),
        ),
        label('image3'),
      ),
    ),
    inline(pagebreak()),
    m.heading(2, '附表示例'),
    inline`这是一个示例附表 ${ref(label('tbl:续表示例'))}`,
    inline(
      tablex(
        {
          columns: [fr(1), fr(1), fr(1)],
          caption: inline`用于构成十进倍数和分数单位的词头`,
          supplement: '附表',
          labelName: '续表示例',
          header: [inline`所表示的因数`, inline`词头名称`, inline`词头符号`],
        },
        inline(unsafeRaw.math`10^18`),
        inline`艾${symbol('[')}可萨${symbol(']')}`,
        inline`E`,
        inline(unsafeRaw.math`10^15`),
        inline`拍${symbol('[')}它${symbol(']')}`,
        inline`P`,
        inline(unsafeRaw.math`10^12`),
        inline`太${symbol('[')}拉${symbol(']')}`,
        inline`T`,
        inline(unsafeRaw.math`10^9`),
        inline`吉${symbol('[')}咖${symbol(']')}`,
        inline`G`,
        inline(unsafeRaw.math`10^6`),
        inline`兆`,
        inline`M`,
        inline(unsafeRaw.math`10^3`),
        inline`千`,
        inline`k`,
        inline(unsafeRaw.math`10^2`),
        inline`百`,
        inline`H`,
        inline(unsafeRaw.math`10^1`),
        inline`十`,
        inline`da`,
        inline(unsafeRaw.math`10^-1`),
        inline`分`,
        inline`d`,
        inline(unsafeRaw.math`10^-2`),
        inline`厘`,
        inline`c`,
        inline(unsafeRaw.math`10^-3`),
        inline`毫`,
        inline`m`,
        inline(unsafeRaw.math`10^-6`),
        inline`微`,
        inline`H`,
        inline(unsafeRaw.math`10^-9`),
        inline`纳${symbol('[')}诺${symbol(']')}`,
        inline`n`,
        inline(unsafeRaw.math`10^-12`),
        inline`皮${symbol('[')}可${symbol(']')}`,
        inline`P`,
        inline(unsafeRaw.math`10^-15`),
        inline`飞${symbol('[')}母托${symbol(']')}`,
        inline`f`,
        inline(unsafeRaw.math`10^-18`),
        inline`阿${symbol('[')}托${symbol(']')}`,
        inline`a`,
        inline(unsafeRaw.math`10^-6`),
        inline`微`,
        inline`H`,
        inline(unsafeRaw.math`10^-9`),
        inline`纳${symbol('[')}诺${symbol(']')}`,
        inline`n`,
        inline(unsafeRaw.math`10^-12`),
        inline`皮${symbol('[')}可${symbol(']')}`,
        inline`P`,
        inline(unsafeRaw.math`10^-15`),
        inline`飞${symbol('[')}母托${symbol(']')}`,
        inline`f`,
        inline(unsafeRaw.math`10^-18`),
        inline`阿${symbol('[')}托${symbol(']')}`,
        inline`a`,
        inline(unsafeRaw.math`10^-6`),
        inline`微`,
        inline`H`,
        inline(unsafeRaw.math`10^-9`),
        inline`纳${symbol('[')}诺${symbol(']')}`,
        inline`n`,
        inline(unsafeRaw.math`10^-12`),
        inline`皮${symbol('[')}可${symbol(']')}`,
        inline`P`,
        inline(unsafeRaw.math`10^-15`),
        inline`飞${symbol('[')}母托${symbol(']')}`,
        inline`f`,
        inline(unsafeRaw.math`10^-18`),
        inline`阿${symbol('[')}托${symbol(']')}`,
        inline`a`,
      ),
    ),
  )
}
