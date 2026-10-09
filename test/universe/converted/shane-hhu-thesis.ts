// Converted from test/universe/corpus/shane-hhu-thesis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  align,
  bibliography,
  blocks,
  center,
  cm,
  codeBlock,
  define,
  doc,
  external,
  figure,
  grid,
  heading,
  horizon,
  image,
  importPackage,
  inline,
  label,
  labelled,
  linebreak,
  link,
  lorem,
  m,
  parbreak,
  path,
  pt,
  raw,
  ref,
  set,
  show,
  space,
  strong,
  sym,
  table,
  text,
  unsafeRaw,
  where,
} from '../../../src/index.ts'

export default () => {
  const bachelorConf = define('bachelor-conf')
    .pos('arg1', T.any)
    .named('advisors', T.any, null)
    .named('author', T.any, null)
    .named('cn-abstract', T.content, [])
    .named('cn-keywords', T.any, null)
    .named('date', T.any, null)
    .named('en-abstract', T.content, [])
    .named('en-keywords', T.any, null)
    .named('form', T.any, null)
    .named('major', T.any, null)
    .named('reader', T.any, null)
    .named('school', T.any, null)
    .named('subject', T.any, null)
    .named('thesis-name', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external()
  const thanks = define('thanks').pos('arg1', T.content).returns(T.any).external()
  const appendix = external('appendix')
  const code = define('code').pos('arg1', T.any).returns(T.any).external()
  const hhuBibliography = define('hhu-bibliography')
    .named('bibliography', T.any, null)
    .named('full', T.any, null)
    .returns(T.any)
    .external()
  const translationBilingual = define('translation-bilingual')
    .named('abstract', T.any, null)
    .named('authors', T.any, null)
    .named('content', T.any, null)
    .named('keywords', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external()
  return doc(
    importPackage('@preview/shane-hhu-thesis:0.6.0', [
      bachelorConf,
      thanks,
      appendix,
      code,
      hhuBibliography,
      translationBilingual,
    ]),
    show((doc_2, ctx) =>
      bachelorConf(
        {
          author: { CN: '李华', EN: 'Li Hua', ID: '2162510220', YEAR: '2021级' },
          advisors: { CN: '张三', EN: 'Zhang San' },
          thesisName: {
            CN: '本科毕业论文',
            EN: inline`${space}BACHELOR'S DEGREE THESIS ${linebreak()} OF HOHAI UNIVERSITY${space}`,
            heading: '河海大学本科毕业论文',
          },
          title: {
            CN: inline`植物对泥沙沉降规律的影响研究`,
            EN: inline`${space}Study on the influence of plants on ${linebreak()} sediment deposition${space}`,
          },
          school: { CN: '河海大学', EN: 'Hohai University' },
          form: 'thesis',
          major: '自动化',
          subject: 'subject',
          reader: '李四 副教授',
          date: '二〇二四年五月',
          cnAbstract: inline`${space}由于泥沙与水流的相互作用，使得河流发生演变，因此泥沙特性与水流特性均是河流动力学的重要研究课题。当水流中含有植物时，水流的紊动特性会发生明显的改变，从而引起泥沙的一些特性如沉速发生改变。本文以实验为基础，结合理论分析，研究了在静水条件下刚性植物对泥沙沉速的影响，同时在水槽中通过改变流量来研究在恒定均匀流条件下非淹没植物对泥沙沉降轨迹的影响，得到如下主要结论：${space}`,
          cnKeywords: ['关键词1', '关键词2'],
          enAbstract: inline`${space}Fluvial river processes evolve over time in response to the constant interaction between
sediment and the water column. If vegetation is present within the water column, the change
in turbulence characteristics will impact the movement of sediment, in particular the settling
velocity. In this paper, the influence of vegetation on the settling velocities of sediment
particles is studied experimentally. The non-submerged vegetation friction factor in steady
uniform flow is considered by under different flume discharge quantities. The main outcomes
can be summarized as follows:${space}`,
          enKeywords: ['Keywords1', 'Keywords2'],
        },
        doc_2,
      ),
    ),
    m.heading(1, '绪论'),
    m.heading(2, '问题的提出及研究意义'),
    inline`泥沙在自然界中的河流中普遍存在着，泥沙含量的不同影响着河流流态，加上各种泥沙特性不同，使得河流泥沙问题更加复杂多变。如广泛分布在黄河流域一带的黄土地质均匀，其粉砂含量占 60%${sym.space.nobreak}70%，缺乏团粒结构，粒间的固结主要依靠硫酸钙质，这种硫酸钙质遇水极易溶解流失，加上黄土孔隙率极高，抗蚀能力很差。`,
    m.heading(3, '问题提出'),
    '近年来，随着环境的日益恶化，人们对生态日益重视，含有植物的水流问题也已经成为河流动力学研究中的热点之一。直观的了解，河渠水流中的植物不仅减少了过水面积，加大了河渠地面的粗糙程度，降低了河渠的行洪能力，加大了两岸的洪灾威胁。',
    m.enum({ tight: false }, m.item(['问题一']), m.item(['问题二'])),
    m.list({ tight: false }, m.item(['point1']), m.item(['point2'])),
    inline(align(center, inline`${sym.dots.h}${sym.dots.h}`)),
    inline(align(center, inline`${sym.dots.h}${sym.dots.h}`)),
    inline(align(center, inline`${sym.dots.h}${sym.dots.h}`)),
    inline(align(center, inline`${sym.dots.h}${sym.dots.h}`)),
    inline(align(center, inline`${sym.dots.h}${sym.dots.h}`)),
    inline(align(center, inline`${sym.dots.h}${sym.dots.h}`)),
    inline(align(center, inline`${sym.dots.h}${sym.dots.h}`)),
    '以上内容为示例文本。',
    m.heading(1, '公式、图文示例'),
    m.heading(2, '公式示例'),
    'Typst 的公式与 LaTeX 写法不同，参见 Typst 官方文档。',
    inline`在 Typst 中，使用 ${raw({ lang: 'typ' }, '$$')} 包裹公式以获得行内公式，在公式内容两侧增加空格以获得块公式。如 ${raw({ lang: 'typ' }, '$alpha + beta = gamma$')}
会获得行内公式 ${unsafeRaw.math`alpha + beta = gamma`}，而加上两侧空格，写成 ${raw({ lang: 'typ' }, '$ alpha + beta = gamma $')}
，就会变成带自动编号的块公式：`,
    inline(
      labelled(
        [
          unsafeRaw.math.block`(gamma s - gamma) times pi D^3/6 = C_D times pi times gamma omega^2/(2g) times D^2/4`,
          space,
        ],
        label('eqexample'),
      ),
    ),
    inline`多行公式可以使用 ${raw('\\ ')} 换行（反斜杠紧跟空格或者反斜杠紧跟换行）。与 LaTeX 类似，${raw('&')} 可以用于声明对齐关系。`,
    inline(
      strong(
        inline`注意：${raw('~')} 在 Typst 的书写环境中是不断行空格。如果需要输入 ${raw('~')} 本身，可能需要转义为 ${raw('\\~')} 输入。`,
      ),
    ),
    inline(
      code(
        raw(
          { block: true, lang: 'typst' },
          '$ E_"ocv" &= 1.229 - 0.85 times 10^(-3) (T_"st" - T_0) \\\n  &+ 4.3085 times 10^(-5) T_"st" [ln(P_H_2/1.01325)+1/2 ln(P_O_2/1.01325)] \n$',
        ),
      ),
    ),
    inline(unsafeRaw.math.block`E_"ocv" &= 1.229 - 0.85 times 10^(-3) (T_"st" - T_0) \\
  &+ 4.3085 times 10^(-5) T_"st" [ln(P_H_2/1.01325)+1/2 ln(P_O_2/1.01325)]`),
    '包含大括号的公式：',
    inline(unsafeRaw.math.block`cases(
  frac(0-V_1,r_"o4") =g_"m3"V_1+frac(V_1-V_X,r_"o3"),
  frac(V_2-0,r_"o1")=-g_"m2"V_2+frac(V_1-V_X,r_"o3")
)`),
    inline(
      strong(
        inline`由于目前实现公式首行空四格的做法是修改对齐方式，故如遇多行公式，请手动为每行公式添加对齐，否则公式的位置将错位。`,
      ),
    ),
    inline`公式引用使用式 1、式 1.1 等，英语文本中用 Eq.1、Eq.1.1 等。在 Typst 中，可以给公式添加 label 再引用。例如引用${ref(label('eqt:eqexample'))}。`,
    inline`请注意，引用公式、图表需要添加相应的前缀，如 ${raw({ lang: 'typ' }, '@tbl:')} ${raw({ lang: 'typ' }, '@fig:')} ${raw({ lang: 'typ' }, '@eqt:')}。`,
    inline(
      code(raw({ block: true, lang: 'typst' }, '$ alpha + beta = gamma $ <eqexample​>\n\n例如引用@eqt:eqexample。')),
    ),
    inline`Typst 默认尝试使用数学方式表现，例如 ${raw({ lang: 'typ' }, '$I=V / R$')} 会显示为 ${unsafeRaw.math`I=V / R`}，有时需要使用转义方式输入斜杠，如 ${raw({ lang: 'typ' }, '$I=V \\/ R$')}。`,
    m.heading(2, '表示例'),
    inline`带编号、表名的表格需要使用 ${raw('#figure')} 包裹，才能自动编号。方式与上方图片相仿，或者查看下面的代码说明。表格本身建议使用函数 ${raw('table')} 、或第三方库 ${raw('tablem')}
库绘制。使用 ${raw('tablem')} 库时，${raw('#figure')} 可能会认为其包裹的内容不是 ${raw('table')} 类型，而编号“图X-X”。可以通过添加 ${raw('kind: table')}
声明这是一个表格。`,
    inline(
      code(
        raw(
          { block: true, lang: 'typst' },
          '#figure(\n  {\n    set table.cell(stroke: (top: 0.5pt, bottom: 0.5pt, left: 0pt, right: 0pt))\n    show table.cell.where(y:0): set text(weight: "bold")\n    table(\n      columns: 6,\n      inset: (\n        x: 25pt,\n        y: 10pt,\n      ),\n      align: center + horizon,\n      // 表格内容\n      table.cell(rowspan: 2)[实验编码], [H], [Q], [J], [B], [$U_*$],\n      [$"cm"$], [$"L/s"$], [$permille$], [$"cm"$], [$"cm/s"$],\n      [w1], [18], [7.56], [0.02], [42], [0.19], \n      [w2], [18], [11.34], [0.07], [42], [0.68], \n      [w3], [18], [15.12], [0.13], [42], [1.27], \n      [w4], [18], [18.9], [0.21], [42], [2.05], \n      [w5], [18], [22.68], [0.28], [42], [2.73]\n    )\n    // text(align: left, [其中：$U_*$为摩阻流速，$U_* = sqrt("JRg")$，（其中R 为水力半径）；J为水力坡降，B为水槽宽度，H为水深。])\n  },\n  caption: "光滑明渠水流实验水力条件",\n)<table1​>',
        ),
      ),
    ),
    inline(
      labelled(
        figure(
          { caption: '光滑明渠水流实验水力条件' },
          codeBlock(
            [
              set(table.cell, { stroke: { top: pt(0.5), bottom: pt(0.5), left: pt(0), right: pt(0) } }),
              show(where(table.cell, { y: 0 }), set(text, { weight: 'bold' })),
            ],
            table(
              { columns: 6, inset: { x: pt(25), y: pt(10) }, align: add(center, horizon) },
              table.cell({ rowspan: 2 }, inline`实验编码`),
              inline`H`,
              inline`Q`,
              inline`J`,
              inline`B`,
              inline(unsafeRaw.math`U_*`),
              inline(unsafeRaw.math`"cm"`),
              inline(unsafeRaw.math`"L/s"`),
              inline(unsafeRaw.math`permille`),
              inline(unsafeRaw.math`"cm"`),
              inline(unsafeRaw.math`"cm/s"`),
              inline`w1`,
              inline`18`,
              inline`7.56`,
              inline`0.02`,
              inline`42`,
              inline`0.19`,
              inline`w2`,
              inline`18`,
              inline`11.34`,
              inline`0.07`,
              inline`42`,
              inline`0.68`,
              inline`w3`,
              inline`18`,
              inline`15.12`,
              inline`0.13`,
              inline`42`,
              inline`1.27`,
              inline`w4`,
              inline`18`,
              inline`18.9`,
              inline`0.21`,
              inline`42`,
              inline`2.05`,
              inline`w5`,
              inline`18`,
              inline`22.68`,
              inline`0.28`,
              inline`42`,
              inline`2.73`,
            ),
          ),
        ),
        label('table1'),
      ),
    ),
    m.heading(3, '图示例'),
    inline`本模板采用按章节编号的方式。如果需要插入带自动编号的图片，需要使用${raw({ lang: 'typ' }, '#figure')}。例如，使用下面的代码插入带编号的图片：`,
    inline(
      code(
        raw(
          { block: true, lang: 'typst' },
          '#figure(\n  image("./assets/24h_rain.png", width: 8.36cm),// 宽度/高度需要自行调整\n  caption: [每小时降水量24小时均值分布图]\n)',
        ),
      ),
    ),
    inline(
      figure({ caption: inline`每小时降水量24小时均值分布图` }, image({ width: cm(9) }, path('./assets/24h_rain.png'))),
    ),
    inline`如一个插图由两个及以上的分图组成，分图用(a)、(b)、(c)等标出，并标出分图名。目前，本模板尚未实现分图的字母自动编号。如需要分图，建议使用 ${raw('#grid')} 来构建。例如：`,
    inline(
      code(
        raw(
          { block: true, lang: 'typst' },
          '#figure(\n  grid(\n    columns: (3.83cm, 3cm, 5.51cm),\n    image("./assets/2-2a.png") + "(a) 速度障碍集合", \n    [],\n    image("./assets/2-2b.png") + "(b) 避免碰撞集合",\n  ),\n  caption: "速度障碍法速度选择"\n)',
        ),
      ),
    ),
    inline(
      figure(
        { caption: '速度障碍法速度选择' },
        grid(
          { columns: [cm(3.83), cm(2.5), cm(5.51)] },
          add(image(path('./assets/2-2a.png')), '(a) 速度障碍集合'),
          inline(),
          add(image(path('./assets/2-2b.png')), '(b) 避免碰撞集合'),
        ),
      ),
    ),
    inline`${raw({ lang: 'typ' }, 'columns')} 中间的参数为两图片的间距，实际使用中，网格划分、网格大小调整需要自行操作。`,
    inline(align(center, inline`${sym.dots.h}${sym.dots.h}`)),
    inline(align(center, inline`${sym.dots.h}${sym.dots.h}`)),
    inline(align(center, inline`${sym.dots.h}${sym.dots.h}`)),
    inline(align(center, inline`${sym.dots.h}${sym.dots.h}`)),
    inline(align(center, inline`${sym.dots.h}${sym.dots.h}`)),
    inline(align(center, inline`${sym.dots.h}${sym.dots.h}`)),
    m.heading(1, '结论'),
    '结论应该观点明确、严谨、完整、准确，文字必须简明扼要，要阐明本人在科研工作中的创造性成果、新见解及其意义，本文成果在本领域中的地位和作用，对存在的问题和不足应做出客观的叙述和提出建议。',
    '应严格区分自己的成果与导师科研成果和前人已有研究的界限。',
    m.heading(2, '为引用文献而添加的章节'),
    inline`参考文献需要使用 bib 格式的引用文献表，再在正文中通过 ${raw({ lang: 'typ' }, '@labelname')} 方式引用。如`,
    inline(
      code(
        raw(
          { block: true, lang: 'typst' },
          '这里有一段话 @kopka2004guide.\n\n引用多个会自动合并 @kopka2004guide @wang2010guide 。',
        ),
      ),
    ),
    inline`里有一段话 ${ref(label('kopka2004guide'))}，引用多个会自动合并 ${ref(label('kopka2004guide'))} ${ref(label('wang2010guide'))}
。`,
    inline`完成上述操作后，${strong(inline`在致谢章节之后！致谢章节之后！致谢章节之后！`)}，添加`,
    inline(
      code(
        raw(
          { block: true, lang: 'typst' },
          '#hhu-bibliography(\n  bibliography: bibliography.with("ref.bib"),\n  full: true\n)',
        ),
      ),
    ),
    inline`就会自动生成参考文献表。模板使用的 ${raw('ref.bib')} 来自 ${link('https://github.com/lucifer1004/pkuthss-typst')}
。`,
    inline`根据要求，河海大学本科毕业论文要求参考文献部分采用 ${raw('GB7714-2005')}。`,
    inline(
      thanks(
        blocks(
          parbreak(),
          '致谢应当作为正文部分的最后一个章节出现。',
          '可以在正文后对本论文学术研究有特别贡献的组织或个人表达谢意：',
          '1、对提供资助或者支持的基金（基金项目应该包括基金名称、项目名称、项目编号、项目负责人、研究起止年月等）、合同单位、企业、组织或者个人；',
          '2、协助完成研究工作或提供便利的组织或个人；',
          '3、给予转载或者引用权的资料、图片、文献、研究设想的所有者。',
          inline`致谢章节应当使用 ${raw({ lang: 'typ' }, '#thanks[内容]')} 显示。`,
          inline`在致谢章节后，请添加 ${raw({ lang: 'typ' }, '#bibliography')} 引用文献表。`,
          inline`参考文献过后，需要使用${raw({ lang: 'typ' }, '#show: appendix')}进入附录部分。`,
          parbreak(),
        ),
      ),
    ),
    inline(hhuBibliography({ bibliography: bibliography.with(path('ref.bib')), full: true })),
    inline(show(appendix)),
    inline(labelled(heading({ depth: 1 }, inline('附录说明')), label('appendix-1'))),
    '如果有必要可以设置附录。该部分包括与论文有关的原始数据明细表，较多的图表，计算程序及说明，过长的公式推导，或取材于复制品而不便于编入正文的材料等。附录一般与论文全文装订在一起，与正文一起编页码。如果附录内容很多，可独立成册。若有多个附录，则按大写英文字母编号排序，如附录 A、附录 B 等，每一个附录均另起一页。附录中的公式及图表编号应冠以附录序号字母加一短划线，如公式（A-2）、图 A-2，表 B-2 等。',
    m.heading(1, '论文翻译'),
    inline(
      translationBilingual({
        title: { CN: inline`论文标题`, EN: inline`Thesis Title` },
        authors: { CN: ['作者1', '作者2', '作者3'], EN: ['author1', 'author2', 'author3'] },
        abstract: { CN: inline(lorem(80)), EN: inline(lorem(80)) },
        keywords: { CN: inline`关键词1, 关键词2, 关键词3`, EN: inline`keywords1, keywords2, keywords3` },
        content: {
          CN: blocks(
            m.lines(m.heading(1, '引言'), '这里写中文正文内容'),
            m.heading(2, '二级标题'),
            m.heading(3, '三级标题'),
            parbreak(),
          ),
          EN: blocks(
            m.lines(m.heading(1, 'Introduction'), inline(lorem(80))),
            m.heading(2, 'Second title'),
            parbreak(),
          ),
        },
      }),
    ),
  )
}
