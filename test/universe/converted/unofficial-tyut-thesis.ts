// Converted from test/universe/corpus/unofficial-tyut-thesis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  align,
  auto,
  blocks,
  blue,
  call,
  center,
  cite,
  cm,
  contentBlock,
  data,
  datetime,
  define,
  doc,
  em,
  enum_,
  external,
  figure,
  grid,
  h,
  horizon,
  image,
  importPackage,
  inline,
  label,
  labelled,
  let_,
  linebreak,
  link,
  ltr,
  m,
  pagebreak,
  par,
  parbreak,
  path,
  pct,
  pt,
  raw,
  read,
  ref,
  set,
  show,
  smallcaps,
  space,
  stack,
  strong,
  table,
  text,
  ttb,
  underline,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const documentclass = define('documentclass').named('info', T.any, null).returns(T.any).external()
  const initGb7714 = external('init-gb7714')
  const codlyInit = external('codly-init')
  const algo = define('algo')
    .pos('arg1', T.content)
    .named('parameters', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external()
  const i = external('i')
  const d = external('d')
  const comment = define('comment').pos('arg1', T.content).returns(T.any).external()
  const codlyInit_with = define('with').returns(T.any).external(codlyInit)
  const initGb7714_with = define('with')
    .pos('arg1', T.any)
    .named('style', T.any, null)
    .named('version', T.any, null)
    .returns(T.any)
    .external(initGb7714)
  const [
    patternDecl,
    [
      doc_2,
      cover,
      decl,
      abstract,
      abstractEn,
      preface,
      outlinePage,
      mainmatter,
      gloss,
      makeGlossaryTable,
      bibliography_2,
      multicite,
      acknowledgement,
      twoside,
      appendix,
    ],
  ] = let_(
    [
      'doc',
      'cover',
      'decl',
      'abstract',
      'abstract-en',
      'preface',
      'outline-page',
      'mainmatter',
      'gloss',
      'make-glossary-table',
      'bibliography',
      'multicite',
      'acknowledgement',
      'twoside',
      'appendix',
    ],
    documentclass({
      info: {
        title: ['基于 Typst 的太原理工大学论文模板', '——非官方版本'],
        titleEn: ' A Typst Template for TYUT Thesis - Unofficial Edition',
        author: '爱因斯坦',
        studentId: '11001101010086',
        department: 'XX学院',
        session: '20XX',
        major: 'XX专业',
        class: 'XX班',
        supervisor: ['张三', '教授'],
        submitDate: datetime.today(),
      },
    }),
  )
  return doc(
    m.lines(
      importPackage('@preview/unofficial-tyut-thesis:0.2.2', [documentclass]),
      importPackage('@preview/gb7714-bilingual:0.2.3', [initGb7714]),
      inline(
        importPackage('@preview/codly:1.3.0', [codlyInit]),
        space,
        importPackage('@preview/algo:0.3.6', [algo, i, d, comment]),
      ),
    ),
    patternDecl,
    m.lines(show(doc_2), inline(show(codlyInit_with()), space, call(cover))),
    show(initGb7714_with({ style: 'numeric', version: '2025' }, read(path('references.bib')))),
    inline(call(decl)),
    show(preface),
    inline(
      call(
        makeGlossaryTable,
        data([
          {
            key: 'urllc',
            short: 'URLLC',
            long: 'Ultra-Reliable and Low Latency Communications',
            description: '超可靠低延迟通信',
          },
          { key: 'api', short: 'API', long: 'Application Program Interface', description: '应用程序接口' },
          { key: 'tyut', short: 'TYUT', long: 'Taiyuan University of Technology', description: '太原理工大学' },
          { key: 'yolo', short: 'YOLO', long: 'You Only Look Once', description: '' },
        ]),
      ),
    ),
    inline(
      call(
        abstract,
        { keywords: ['Typst', 'TYUT', 'Template', 'Thesis', '毕业论文'] },
        blocks(
          inline`本项目是基于 Typst 制作的一款适用于${call(gloss, 'tyut')}本科毕设论文的模板，注意此模板不是${call(gloss, 'tyut')}官方模板，因此有不被承认的风险，请谨慎使用。`,
          inline`使用本项目需要具备基本的 Typst 使用知识，学习大概需要1小时，需要阅读${link('https://typst.app/docs/tutorial', inline(text({ fill: blue }, inline(underline(inline`官方入门教程`)))))}。`,
        ),
      ),
    ),
    inline(
      call(
        abstractEn,
        { keywords: ['Typst', 'TYUT', 'Template', 'Thesis'] },
        blocks(
          'This project is based on Typst to produce a template for undergraduate BSc thesis of Taiyuan University of Technology, note that it is an unofficial template, so there exists the risk of not being recognized, please use with caution.',
          inline`Using this project requires basic knowledge of using Typst, which takes about 1 hour to learn
and requires reading ${link('https://typst.app/docs/tutorial', inline(text({ fill: blue }, inline(underline(inline`Official Getting Started Tutorial`)))))}.`,
        ),
      ),
    ),
    inline(call(outlinePage)),
    inline(pagebreak()),
    show(mainmatter),
    m.lines(m.heading(1, '绪论'), m.heading(2, '基本书写')),
    inline`直接输入文字即可。需要注意，如果两行之间没有空行，
像现在这样，会自动合并为一行。如果需要换行，
则需要多打一个空行。`,
    '像现在这样。',
    m.lines(m.heading(2, '无序列表'), '可以通过以下方式添加无续列表：'),
    m.list(m.item(['表项1']), m.item(m.lines('表项2', m.list(m.item(['表项3']), m.item(['表项4']))))),
    m.heading(2, '有序列表'),
    '通过以下方式添加有续列表：',
    m.enum(
      m.item(['表项1']),
      m.item(m.lines('表项2', m.enum(m.item(['表项3']), m.item(['表项4'])))),
      m.item(['表项5']),
    ),
    '使用如下方式更改有续列表的编号样式：',
    inline(
      contentBlock(
        blocks(
          m.lines(
            set(enum_, { numbering: 'A.a)' }),
            m.enum(
              m.item(['表项1']),
              m.item(m.lines('表项2', m.enum(m.item(['表项3']), m.item(['表项4'])))),
              m.item(['表项5']),
            ),
          ),
        ),
      ),
    ),
    '或者更复杂的自定义方案：',
    inline(
      contentBlock(
        inline(
          space,
          enum_(
            { numbering: 'A.' },
            enum_.item(1, inline`表项1`),
            enum_.item(
              2,
              inline`表项2 ${enum_({ numbering: unsafeRaw.code<any>`(..nums) => "B." + numbering("a)", ..nums)` }, enum_.item(1, inline`表项3`), enum_.item(2, inline`表项4`))}${space}`,
            ),
            enum_.item(3, inline`表项5`),
          ),
          space,
        ),
      ),
    ),
    m.heading(2, '术语'),
    inline`如果论文中出现缩写，推荐使用 gloss 工具进行管理，先将相关内容放入文档开头处的 make-glossary-table 中，之后再使用，例如，第一次出现${call(gloss, 'urllc')}时，会写出对应的中文内容、英文全称和缩写，之后再出现
${call(gloss, 'urllc')}时，则只出现缩写。再举一个例子：${call(gloss, 'api')}应当是全称，${call(gloss, 'api')}和${call(gloss, 'api')}应当只显示缩写。如果术语没有中文翻译，则可以使其 description 为空字符串，例如${call(gloss, 'yolo')}，第一次出现时只显示全称，之后再出现则只显示缩写，如${call(gloss, 'yolo')}。`,
    inline`如果引用了列表中没有出现的术语，则会出现红色警告，例如：${call(gloss, 'vanet')}`,
    m.heading(2, '图片和表格'),
    inline`引用${ref(label('tbl:timing'))}，引用${ref(label('tbl:timing-tlt'))}，以及${ref(label('fig:some-figure'))}。引用图表时，表格和图片分别需要加上 ${raw('tbl:')}和${raw('fig:')}
前缀才能正常显示编号。图片、表格以及引用的标签，尽量不要添加编号信息，以真正的内容作为标签。比如，${raw('<root-solver-equation>')} 是一个好标签，${raw('<equation-5>')}
是一个糟糕的标签。`,
    inline(
      align(
        center,
        stack(
          { dir: ltr },
          inline(
            space,
            labelled(
              [
                figure(
                  { caption: inline`常规表` },
                  table(
                    { align: add(center, horizon), columns: 4 },
                    inline`t`,
                    inline`1`,
                    inline`2`,
                    inline`3`,
                    inline`y`,
                    inline`0.3s`,
                    inline`0.4s`,
                    inline`0.8s`,
                  ),
                ),
                space,
              ],
              label('timing'),
            ),
            space,
          ),
          inline(space, h(pt(50)), space),
          inline(
            space,
            labelled(
              [
                figure(
                  { caption: inline`三线表` },
                  table(
                    { columns: 4, stroke: null },
                    table.hline(),
                    inline`t`,
                    inline`1`,
                    inline`2`,
                    inline`3`,
                    table.hline({ stroke: pt(0.5) }),
                    inline`y`,
                    inline`0.3s`,
                    inline`0.4s`,
                    inline`0.8s`,
                    table.hline(),
                  ),
                ),
                space,
              ],
              label('timing-tlt'),
            ),
            space,
          ),
        ),
      ),
    ),
    inline`如果图片太大导致空白区域太大，可以添加${raw('placement')}选项，比如${ref(label('fig:some-figure'))} 所展示的用法。`,
    inline(
      labelled(
        [
          figure(
            { numbering: null, placement: auto, caption: inline`图片测试` },
            image({ width: pct(50) }, path('imgs/author-signature.jpg')),
          ),
          space,
        ],
        label('some-figure'),
      ),
    ),
    inline(
      labelled(
        [
          figure(
            { caption: inline`多图示例`, placement: auto },
            blocks(
              m.lines(
                set(text, { font: ['Times New Roman', 'SimHei'], size: pt(10) }),
                set(stack, { dir: ttb, spacing: em(0.5) }),
                set(image, { height: cm(2) }),
                inline(
                  grid(
                    { columns: 2, gutter: em(1) },
                    stack(image(path('imgs/author-signature.jpg')), inline`(a) 子图1`),
                    stack(image(path('imgs/author-signature.jpg')), inline`(b) 子图2`),
                    stack(image(path('imgs/author-signature.jpg')), inline`(c) 子图3`),
                    stack(image(path('imgs/author-signature.jpg')), inline`(d) 子图4`),
                  ),
                ),
              ),
            ),
          ),
          space,
        ],
        label('multiple-figures'),
      ),
    ),
    inline`${ref(label('fig:multiple-figures'))} 是一个多图合并的例子。`,
    m.heading(2, '引用'),
    inline`直接引用相关 ${raw('bib')} 文件中的条目即可，如这里引用了${ref(label('deepLearn'))}。中文引用${ref(label('蒋有绪1998'))}
也可以正常显示。引用会按照出现的顺序自动编号，因此，尽量不要在引用的标签中加入序号信息。例如，${raw('ref6')} 是一个糟糕的引用标签，${raw('<Strange2012>')}
则是一个不错的引用标签。默认引用为上标形式，如果想要采用非上标形式，则需要这样：另见${cite({ form: 'prose' }, label('deepLearn'))}的详细分析。引用也可以添加作者，比如：${cite({ form: 'author' }, label('蒋有绪1998'))}在${cite({ form: 'prose' }, label('蒋有绪1998'))}中，提出了重要的理论框架。`,
    inline`当需要在同一个地方引用多个文献时，需要使用 ${raw('multicite')} 函数，如${call(multicite, '蒋有绪1998', 'deepLearn', '中国力学学会1990')}，此时，引用会自动进行合并，如果不是连续的序号，则会自动断开，如${call(multicite, 'deepLearn', '中国力学学会1990')}。此外，如果需要非上标形式，则可以：${call(multicite, { form: 'prose' }, '蒋有绪1998', 'deepLearn', '中国力学学会1990')}。需要注意的是，${raw('multicite')}
不支持直接引用作者，即 ${raw('form')} 字段不支持 ${raw('author')} 选项。`,
    m.heading(1, '数学公式与代码'),
    m.heading(2, '数学公式示例'),
    inline`我们可以利用求根公式来得到一般形式的一元二次方程：${unsafeRaw.math`a x^2 + b x + c = 0`} 的解，其具体内容为（如果不希望公式后边段落有缩进，可以使用以下方式临时关闭）：`,
    inline(
      labelled(
        [unsafeRaw.math.block`x_(1,2) = (-b plus.minus sqrt(b^2 - 4 a c)) / (2 a),`, space],
        label('root-finder'),
      ),
    ),
    inline(
      contentBlock(
        blocks(
          m.lines(
            set(par, { firstLineIndent: em(0) }),
            inline`其中， ${unsafeRaw.math`a, b`} 和 ${unsafeRaw.math`c`} 为原始方程的系数。根据${ref(label('eqt:root-finder'))}, 可以看到，每个一元二次方程，都有两个解，不过有时候两个根可能相等，有时候可能会出现复数根。`,
          ),
        ),
      ),
    ),
    inline`根据相关公式，我们可以得到 ${unsafeRaw.math`e^x`} 的泰勒展示：`,
    inline(unsafeRaw.math.block`e^x= sum_(i=0)^oo x^i / i!.`),
    inline`如果某个公式不需要编号，可以加入 ${raw('<->')} 标签。如：`,
    inline(labelled([unsafeRaw.math.block`integral.cont sqrt(x^2+y^2) dif x dif y.`, space], label('-'))),
    '但是后续公式会自动继续编号：',
    inline(unsafeRaw.math.block`e^(i pi) + 1 = 0.`),
    inline`更多数学公式内容，参考${text({ fill: blue }, inline(underline(inline(link('https://typst.app/docs/reference/math/', inline(strong(inline`官方文档`)))))))}。也可使用${text({ fill: blue }, inline(underline(inline(link('https://typerino.com/', inline(strong(inline`在线公式编辑器`)))))))}进行公式编辑。`,
    m.heading(2, '代码'),
    m.heading(3, '原始效果'),
    inline`行内代码块需要包裹在反引号内，如 ${raw('http')}，块级代码则需要以三个反引号包裹，后面加上语言名称（可选），如${ref(label('lst:cpp-code'))}
所示。
如果需要引用代码，需要加上${raw('lst')}，如这里引用了${ref(label('lst:cpp-code'))}。`,
    inline(
      labelled(
        [
          figure(
            { placement: auto, caption: inline`代码块展示` },
            raw(
              { block: true, lang: 'cpp' },
              '#include <vector>\n#include <iostream>\nusing std::cout;\nusing std::endl;\nusing std::vector;\n\nint main() {\n  vector<int> v{10, 3};\n  for (auto i : v) {\n    cout << i << endl;\n  }\n  return 0;\n}',
            ),
          ),
          space,
        ],
        label('cpp-code'),
      ),
    ),
    m.heading(4, '四级标题不会出现在目录中'),
    '这是四级标题下的内容。',
    m.heading(3, '伪代码'),
    inline`伪代码可以用 ${raw('algo')} 库，如${ref(label('alg:fib'))} 所示。`,
    inline(
      labelled(
        [
          figure(
            { caption: inline`斐波那契数列`, kind: 'algo', supplement: '算法' },
            algo(
              { title: 'Fib', parameters: ['n'] },
              inline`${space}if ${unsafeRaw.math`n < 0`}:${i}${linebreak()} return null${d}${linebreak()} if ${unsafeRaw.math`n = 0`}
or ${unsafeRaw.math`n = 1`}:${i} ${comment(inline`you can also`)}${linebreak()} return ${unsafeRaw.math`n`}${d}
${comment(inline`添加 comments!`)}${linebreak()} return ${smallcaps('Fib')}${unsafeRaw.math`(n-1) +`}
${smallcaps('Fib')}${unsafeRaw.math`(n-2)`}${space}`,
            ),
          ),
          space,
        ],
        label('fib'),
      ),
    ),
    inline`从${ref(label('alg:fib'))} 中可以看到，斐波那契数列可以用递归的方式进行计算。`,
    inline(call(bibliography_2)),
    inline(
      call(
        acknowledgement,
        blocks(
          '作者在设计（论文）期间都是在×××教授全面、具体指导下完成进行的。×老师渊博的学识、敏锐的思维、民主而严谨的作风使学生受益非浅，并终生难忘。',
          '感谢×××副教授等在毕业设计工作中给予的帮助。',
          '感谢我的学友和朋友对我的关心和帮助。',
          parbreak(),
        ),
      ),
    ),
    show(appendix),
    inline(unsafeRaw.code<any>`if twoside {
  pagebreak() + " "
}`),
    m.heading(1, '关于网络演算的基本说明'),
    m.heading(2, '到达曲线的说明'),
    inline(
      labelled(
        [unsafeRaw.math.block`lr(chevron.l f, alpha chevron.r) = sup_(0 <= t <= s) [f(x-t) + f(t) <= alpha]`, space],
        label('appendix-equation'),
      ),
    ),
    inline(
      labelled(
        [figure({ caption: inline`附录图片` }, image(path('imgs/author-signature.jpg'))), space],
        label('appendix-figure'),
      ),
    ),
    '再试试表格。',
    inline(
      labelled(
        [
          figure(
            { caption: inline`附录表格` },
            table({ align: center, columns: 3 }, inline`a`, inline`b`, inline`c`, inline`d`, inline`e`, inline`f`),
          ),
          space,
        ],
        label('appendix-table'),
      ),
    ),
    inline`附录中的公式引用：${ref(label('eqt:appendix-equation'))}，附录中的图片引用：${ref(label('fig:appendix-figure'))}，附录中的表格引用：${ref(label('tbl:appendix-table'))}。`,
    m.heading(1, '一些证明细节'),
    m.heading(2, '另外的数学公式'),
    inline(labelled([unsafeRaw.math.block`integral_(-oo)^oo x dif x = 0`, space], label('appendix-equation2'))),
    inline(
      labelled(
        [figure({ caption: inline`附录图片` }, image(path('imgs/author-signature.jpg'))), space],
        label('appendix-figure2'),
      ),
    ),
    inline`附录中的公式引用：${ref(label('eqt:appendix-equation2'))}，附录中的图片引用：${ref(label('fig:appendix-figure2'))}.`,
  )
}
