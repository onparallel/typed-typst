// Converted from test/universe/corpus/elegant-culsc-record.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  blocks,
  codeBlock,
  columns,
  define,
  doc,
  em,
  external,
  figure,
  footnote,
  fr,
  grid,
  heading,
  importPackage,
  inline,
  label,
  labelled,
  m,
  pagebreak,
  path,
  pt,
  raw,
  ref,
  set,
  show,
  space,
  strong,
  sym,
  text,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const culscRecord = external('culsc-record')
  const noindent = define('noindent').pos('arg1', T.content).returns(T.any).external()
  const cal = external('cal')
  const bb = external('bb')
  const notag = define('notag').pos('arg1', T.any).returns(T.any).external()
  const nabla = external('nabla')
  const partial = external('partial')
  const LaTeX = external('LaTeX')
  const zh = define('zh').pos('arg1', T.any).returns(T.any).external()
  const printBib = define('print-bib')
    .named('bib-number-align', T.any, null)
    .named('bib-number-gutter', T.any, null)
    .named('bibliography', T.any, null)
    .named('full', T.any, null)
    .named('gbpunctwidth', T.any, null)
    .named('uppercase-english-names', T.any, null)
    .returns(T.any)
    .external()
  const culscRecord_with = define('with')
    .named('end-day', T.any, null)
    .named('end-month', T.any, null)
    .named('end-time', T.any, null)
    .named('end-year', T.any, null)
    .named('math-fontset', T.any, null)
    .named('serial', T.any, null)
    .named('session', T.any, null)
    .named('start-day', T.any, null)
    .named('start-month', T.any, null)
    .named('start-time', T.any, null)
    .named('start-year', T.any, null)
    .named('text-fontset', T.any, null)
    .returns(T.any)
    .external(culscRecord)
  const threeLineTable = define('three-line-table').pos('arg1', T.content).returns(T.any).external()
  return doc(
    importPackage('@preview/elegant-culsc-record:0.11.0', [
      culscRecord,
      noindent,
      cal,
      bb,
      notag,
      nabla,
      partial,
      LaTeX,
      zh,
      printBib,
    ]),
    show(
      culscRecord_with({
        textFontset: 'windows',
        mathFontset: 'recommend',
        session: '十一',
        serial: '01',
        startYear: '2026',
        startMonth: '01',
        startDay: '21',
        startTime: '08:00',
        endYear: '2026',
        endMonth: '01',
        endDay: '30',
        endTime: '12:30',
      }),
    ),
    inline(
      noindent(
        blocks(
          inline(strong(inline`注意：`)),
          '1、“序号”是实验记录的顺序，1、2、3等，不是团队编号。',
          '2、所有上传材料中请勿出现团队编号、任何学校名称和姓名。',
          '3、避免出现明确的实验材料采样和保存地点，比如xx菌种保存在xx学校菌种库，xx材料从xx学校采集获得。',
          '4、避免出现过多的实验过程照片，比如穿着xx学校实验服的学生，贴有xx学校固定资产的实验仪器，有xx学校抬头的实验记录纸。',
          '5、避免出现团队成员合照、正面照片、指导老师照片。',
          '6、参考文献中的姓名学校没有关系。',
          '7、实验记录内容没有格式要求。',
          '（撰写实验记录时请删除这段话）',
        ),
      ),
    ),
    m.heading(1, '实验目的'),
    inline`本次实验旨在探究${sym.dots.h}${sym.dots.h}`,
    m.heading(1, '实验材料'),
    m.list(m.item(['试剂：', sym.dots.h, sym.dots.h]), m.item(['仪器：', sym.dots.h, sym.dots.h])),
    m.heading(1, '实验步骤'),
    m.enum(m.item(['取样', sym.dots.h, sym.dots.h]), m.item(['离心', sym.dots.h, sym.dots.h])),
    m.heading(1, '实验结果'),
    m.heading(2, '本模板只提供了基本的布局排版、国标格式数学公式及国标格式参考文献的支持'),
    inline(labelled(heading({ depth: 3 }, inline('布局排版与 MS Word 的对应关系')), label('layout'))),
    '下述宋体、黑体均指代中易系列下的效果。',
    '文档网格：只指定行网格，每页 46 行。',
    '一级标题：四号加粗宋体、段前 0.5 行、段后 0 行。',
    '其他级标题：小四号加粗宋体、无段前段后距离、1.25 倍行距。',
    '正文：小四号宋体、无段前段后距离、1.25 倍行距。',
    '题注：五号宋体，段后 1.75 磅、1.2 倍行距。',
    m.heading(3, '公式的书写与引用'),
    inline`公式一般有编号，如${ref(label('eq:example'))}：`,
    inline(
      labelled(
        unsafeRaw.math
          .block`cal(F){f(x)} = hat(f)(omega) = 1/sqrt(2pi) integral_(-infinity)^(+infinity) f(x) e^(-i omega x) dif x, quad omega in bb(R).`,
        label('eq:example'),
      ),
    ),
    inline`如果不需要编号，可以使用 ${raw({ lang: 'typ' }, '#notag()')} 函数包围，如下式：`,
    inline(
      notag(
        unsafeRaw.math
          .block`nabla times bold(E) = -(partial bold(B)) / (partial t), quad nabla dot bold(B) = 0, quad bold(E), bold(B) in bb(R)^3,`,
      ),
    ),
    inline(noindent(inline`${space}这类公式不能添加标签，故不能被引用，否则会报错。${space}`)),
    m.heading(3, '参考文献采用 GB/T 7714—2015 格式规范，通过', ' ', raw('.bib'), ' ', '文件管理文献源'),
    inline`像这样引用文献${ref(label('美国妇产科医师学会2010'))}，也可以引用多个${ref(label('praetzellis2011'))}${ref(label('汪昂1881'))}、${ref(label('钱学森2001'))}${ref(label('中国职工教育研究会1985'))}${ref(label('雷光春2012'))}、${ref(label('praetzellis2011'))}${ref(label('雷光春2012'))}。`,
    '由于 Typst 的原生文献工具 Hayagriva 尚不完善，因此有部分文献类型需要手动处理，主要是标准[S]、报纸[N]及汇编[G]，还有一些罕用的情况，如连续出版物[J]（常见的期刊文献本质上是连续出版物的析出文献）。',
    inline`详细的处理方法参考示例 ${raw('ref-01.bib')} 文件中的注释即可，已尽可能地考虑对 Zotero 和 ${LaTeX} 宏包 biblatex-gb7714-2015 的兼容性，迁移过去后可以比较快速地修改为正确的格式。`,
    '此外，基于 citegeist 的国标格式参考文献包 gb7714-bilingual 正在蓬勃发展，如果未来发展成熟，本模板会及时切换到更完善的方案，Typst 未来可期！',
    m.heading(1, '实验总结'),
    inline`建议在项目中建立多个文件夹分别管理各个实验，例如将第一个实验的文件放在 ${raw('\\01\\')} 目录下，实验文件命名为 ${raw('experiment-01.typ')}，文献源命名为 ${raw('ref-01.bib')}。`,
    inline(
      raw(
        { block: true },
        'project/\n├── 01/\n│   ├── experiment-01.typ\n│   └── ref-01.bib\n├── 02/\n│   ├── experiment-02.typ\n│   └── ref-02.bib\n├── 03/\n│   ├── experiment-03.typ\n│   └── ref-03.bib\n⋮\n└── 0n/\n    ├── experiment-0n.typ\n    └── ref-0n.bib',
      ),
    ),
    inline`测试是否跟 MS Word 中按照${ref(label('layout'))} 设置后的效果相同，即每页可容纳 34 行正文文本。`,
    inline(pagebreak()),
    inline(
      noindent(
        inline(
          space,
          unsafeRaw.code<any>`for i in range(1, 35) [
    第#i 行\\
  ]`,
          space,
        ),
      ),
    ),
    inline(pagebreak()),
    m.heading(1, '实验反思'),
    '本模板预设了数个平台的字体配置，具体如下所示：',
    importPackage('@preview/tablem:0.3.0', [threeLineTable]),
    inline(
      figure(
        { caption: inline`culsc-record 模板中预设字体集的具体设置` },
        codeBlock(
          [set(text, { size: pt(10) })],
          threeLineTable(inline`${space}|平台 |宋体 |黑体 |西文字体 |数学主字体|数学文本字体| |Windows|中易宋体|中易黑体|Times New Roman|Cambria Math|对应的西文字体 + 宋体|
|macOS |华文宋体|华文黑体|Times New Roman|STIX Two Math|^| |Web App|思源宋体|思源黑体|TeX Gyre Termes|TeX Gyre
Termes Math|^| |${raw('"recommend"')}|--|--|--|XITS Math|Windows 下的配置|${space}`),
        ),
      ),
    ),
    inline`Web App 和 ${raw('"recommend"')} 下的数学字体有回退机制，具体如下代码所示：`,
    inline(
      grid(
        { columns: [fr(1), fr(1)] },
        inline(
          space,
          text(
            { size: pt(8) },
            inline(
              space,
              raw(
                { block: true, lang: 'typst' },
                '  recommend: (\n      main: (\n        "XITS Math",\n        "TeX Gyre Termes Math",\n        "STIX Two Math",\n        "New Computer Modern Math",\n      ),\n      text: (\n        "Times New Roman",\n        "SimSun"\n      ),\n      blackboard: (\n        "TeX Gyre Termes Math",\n        "New Computer Modern Math",\n        "XITS Math",\n        "STIX Two Math",\n      ),\n      calligraphic: (\n        "XITS Math",\n        "New Computer Modern Math",\n        "TeX Gyre Termes Math",\n        "STIX Two Math",\n      ),\n      integral: (\n        "Euler Math",\n        "TeX Gyre Termes Math",\n        "XITS Math",\n        "STIX Two Math",\n        "New Computer Modern Math",\n      ),\n    ),',
              ),
              space,
            ),
          ),
          space,
        ),
        inline(
          space,
          text(
            { size: pt(9.5) },
            inline(
              space,
              raw(
                { block: true, lang: 'typst' },
                '    web: (\n      main: (\n        "TeX Gyre Termes Math",\n        "STIX Two Math",\n        "New Computer Modern Math",\n      ),\n      text: (\n        "TeX Gyre Termes",\n        "Noto Serif CJK SC"\n      ),\n      blackboard: (\n        "TeX Gyre Termes Math",\n        "New Computer Modern Math",\n        "STIX Two Math",\n      ),\n      calligraphic: (\n        "New Computer Modern Math",\n        "TeX Gyre Termes Math",\n        "STIX Two Math",\n      ),\n      integral: (\n        "TeX Gyre Termes Math",\n        "STIX Two Math",\n        "New Computer Modern Math",\n      ),\n    ),',
              ),
              space,
            ),
          ),
          space,
        ),
      ),
    ),
    inline`如欲使用 ${raw('"recommend"')} 数学字体集，请自行安装这些字体${footnote(inline`模板所预设的数学字体都是免费且开源的。`)}。
${show(columns.with(2))} ${text({ size: zh(5) }, inline(space, printBib({ bibliography: bibliography.with(path('ref-example.bib')), full: true, gbpunctwidth: 'full', uppercaseEnglishNames: true, bibNumberGutter: em(1), bibNumberAlign: 'right' }), space))}`,
  )
}
