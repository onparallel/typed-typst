// Converted from test/universe/corpus/modern-nenu-thesis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  bibliography,
  blocks,
  call,
  center,
  cite,
  contentBlock,
  datetime,
  define,
  doc,
  external,
  figure,
  heading,
  horizon,
  image,
  importPackage,
  inline,
  label,
  labelled,
  let_,
  linebreak,
  link,
  lorem,
  m,
  pagebreak,
  path,
  pct,
  pt,
  raw,
  ref,
  show,
  space,
  strong,
  table,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const thesis = define('thesis')
    .named('anonymous', T.any, null)
    .named('bibliography', T.any, null)
    .named('degree', T.any, null)
    .named('doctype', T.any, null)
    .named('info', T.any, null)
    .named('print', T.any, null)
    .named('twoside', T.any, null)
    .returns(T.any)
    .external()
  const kouhu = define('kouhu')
    .named('builtin-text', T.any, null)
    .named('length', T.any, null)
    .named('offset', T.any, null)
    .returns(T.any)
    .external()
  const codly = define('codly').named('languages', T.any, null).returns(T.any).external()
  const codlyInit = external('codly-init')
  const noCodly = define('no-codly').pos('arg1', T.content).returns(T.any).external()
  const codlyLanguages = external('codly-languages')
  const codlyInit_with = define('with').returns(T.any).external(codlyInit)
  const [
    patternDecl,
    [
      twoside,
      doc_2,
      preface,
      mainmatter,
      appendix,
      fontsDisplayPage,
      cover,
      committeePage,
      declPage,
      abstract,
      abstractEn,
      bilingualBibliography,
      outlinePage,
      listOfFigures,
      listOfTables,
      notation,
      acknowledgement,
      publication,
      decision,
    ],
  ] = let_(
    [
      'twoside',
      'doc',
      'preface',
      'mainmatter',
      'appendix',
      'fonts-display-page',
      'cover',
      'committee-page',
      'decl-page',
      'abstract',
      'abstract-en',
      'bilingual-bibliography',
      'outline-page',
      'list-of-figures',
      'list-of-tables',
      'notation',
      'acknowledgement',
      'publication',
      'decision',
    ],
    thesis({
      doctype: 'master',
      degree: 'academic',
      anonymous: false,
      twoside: false,
      print: false,
      info: {
        title: ['毕业论文中文题目', '有一点长有一点长有一点长有一点长有一点长有一点长'],
        titleEn: 'Analysis of the genetic diversity within and between the XX population revealed by AFLP marker',
        grade: '20XX',
        studentId: '1234567890',
        author: '张三',
        authorEn: 'San Zhang',
        secretLevel: '无',
        secretLevelEn: 'Unclassified',
        department: '信息科学与技术学院',
        departmentEn: 'School of Information Science and Technology',
        discipline: '计算机科学与技术',
        disciplineEn: 'Computer Science and Technology',
        major: '计算机科学',
        majorEn: 'Computer Science',
        field: '人工智能',
        fieldEn: 'Artificial Intelligence',
        supervisor: ['李四', '教授'],
        supervisorEn: 'Professor My Supervisor',
        submitDate: datetime.today(),
        reviewers: [
          { name: '张三', workplace: '工作单位', evaluation: '总体评价' },
          { name: '李四', workplace: '工作单位', evaluation: '总体评价' },
          { name: '王五', workplace: '工作单位', evaluation: '总体评价' },
          { name: '赵六', workplace: '工作单位', evaluation: '总体评价' },
          { name: '孙七', workplace: '工作单位', evaluation: '总体评价' },
        ],
        committeeMembers: [
          { name: '张三', workplace: '工作单位', title: '职称' },
          { name: '李四', workplace: '工作单位', title: '职称' },
          { name: '王五', workplace: '工作单位', title: '职称' },
          { name: '赵六', workplace: '工作单位', title: '职称' },
          { name: '孙七', workplace: '工作单位', title: '职称' },
        ],
      },
      bibliography: bibliography.with(path('ref.bib')),
    }),
  )
  return doc(
    m.lines(
      importPackage('@preview/modern-nenu-thesis:0.1.1', [thesis]),
      importPackage('@preview/kouhu:0.2.0', [kouhu]),
      importPackage('@preview/codly:1.3.0', [codly, codlyInit, noCodly]),
      importPackage('@preview/codly-languages:0.1.8', [codlyLanguages]),
    ),
    m.lines(show(codlyInit_with()), inline(codly({ languages: codlyLanguages }))),
    patternDecl,
    unsafeRaw.markup`#show: doc.with()`,
    inline(call(cover)),
    inline(call(committeePage)),
    inline(call(declPage)),
    show(preface),
    inline(
      call(
        abstract,
        { keywords: ['我', '就是', '测试用', '关键词'] },
        blocks(
          inline(kouhu({ builtinText: 'zhufu', length: 100 })),
          inline(kouhu({ builtinText: 'zhufu', length: 60 })),
        ),
      ),
    ),
    inline(
      call(
        abstractEn,
        {
          keywords: [
            'I',
            'am',
            'just',
            'a',
            'test',
            'keyword',
            'which',
            'is',
            'quite',
            'long',
            'really',
            'very',
            'long',
            'indeed',
            'to',
            'test',
          ],
        },
        blocks(inline(lorem(100)), inline(lorem(50))),
      ),
    ),
    inline(call(outlinePage)),
    inline(call(listOfFigures)),
    inline(call(listOfTables)),
    inline(
      call(
        notation,
        blocks(
          m.terms(
            m.term(['DFT'], ['密度泛函理论 (Density functional theory)']),
            m.term(['DMRG'], ['密度矩阵重正化群密度矩阵重正化群密度矩阵重正化群 (Density-Matrix Reformation-Group)']),
          ),
        ),
      ),
    ),
    show(mainmatter),
    m.heading(1, '绪 论'),
    m.heading(2, '列表'),
    m.heading(3, '有序列表'),
    m.enum(
      m.item([kouhu({ builtinText: 'aspirin', length: 10 })]),
      m.item(
        m.lines(
          inline(kouhu({ builtinText: 'aspirin', offset: 2, length: 10 })),
          m.enum(
            m.item([kouhu({ builtinText: 'aspirin', offset: 3, length: 5 })]),
            m.item([kouhu({ builtinText: 'aspirin', offset: 3, length: 10 })]),
            m.item([kouhu({ builtinText: 'aspirin', offset: 3, length: 15 })]),
          ),
        ),
      ),
    ),
    m.heading(3, '无序列表'),
    m.list(
      m.item([kouhu({ builtinText: 'zhufu', length: 15 })]),
      m.item(
        m.lines(
          inline(kouhu({ builtinText: 'zhufu', offset: 2, length: 15 })),
          m.list(
            m.item([kouhu({ builtinText: 'zhufu', offset: 3, length: 15 })]),
            m.item([kouhu({ builtinText: 'zhufu', offset: 3, length: 15 })]),
            m.item([kouhu({ builtinText: 'zhufu', offset: 6, length: 15 })]),
          ),
        ),
      ),
    ),
    m.heading(3, '术语（', raw('Latex'), ' ', '中的段落）'),
    m.terms(
      m.term(['simp'], [kouhu({ builtinText: 'simp', length: 15 })]),
      m.term(['阿司匹林'], [kouhu({ builtinText: 'aspirin', length: 60 })]),
    ),
    m.heading(2, '代码'),
    inline`行内代码我们使用 \`\` 将其括起来，这与 ${raw('Markdown')} 中的语法一致`,
    inline`行间代码， 也就是代码块，其语法与 ${raw('Markdown')} 中一致，例如：`,
    inline(raw('\n```typ\n  #let a = 1\n```\n')),
    '其表现为，此时发现代码块的表现很差，且无法引用',
    inline(noCodly(inline(space, raw({ block: true, lang: 'typ' }, '#let a = 1'), space))),
    inline`因此，这里我们使用包 ${raw('codly')} 来美化代码块，并将其放入到下文的图表中，进行引用，${raw('@lst:<key>')} 来引用代码块，例如下面的代码，我们使用语句 ${raw('@lst:fib-fn-py')}
来引用，即${ref(label('lst:fib-fn-py'))}`,
    inline(
      labelled(
        figure(
          { caption: 'Python 实现的斐波那契函数' },
          inline(
            space,
            raw(
              { block: true, lang: 'py' },
              'def fib(n):\n  if n <= 1:\n    return n\n  return fib(n - 1) + fib(n - 2)',
            ),
            space,
          ),
        ),
        label('fib-fn-py'),
      ),
    ),
    inline`关于 ${raw('codly')} 的更多用法请阅读${link('https://typst.app/universe/package/codly', inline`参考文档`)}`,
    m.heading(2, '图表'),
    m.heading(3, '表格'),
    inline`在这里引用表格，例如三线表：${ref(label('tbl:three-line-table'))}`,
    inline`我们使用 ${raw('@tbl:<label>')} 来进行表的引用，其中 ${raw('<label>')} 是跟在表格后的标签，使用尖括号括起来`,
    inline(
      labelled(
        figure(
          { caption: inline`三线表示例` },
          table(
            { align: add(center, horizon), columns: 4, stroke: null },
            table.hline({ stroke: pt(1.5) }),
            inline`x`,
            inline`y`,
            inline`z`,
            inline`t`,
            table.hline({ stroke: pt(1) }),
            inline`11`,
            inline`5 ms`,
            inline`3`,
            inline`0.7`,
            inline`3000`,
            inline`80 ms`,
            inline`1111`,
            inline`0.9`,
            table.hline({ stroke: pt(1.5) }),
          ),
        ),
        label('three-line-table'),
      ),
    ),
    m.heading(3, '图片'),
    inline`我们可以插入图片，也可以修改图片的展示大小，引用图片，例如${ref(label('fig:ida-star-50'))}, ${ref(label('fig:ida-star-20'))}`,
    inline`我们通过函数 ${raw('#figure')} 来表示一个图片，在其中通过 ${raw('image')} 函数来导入一张图片，格式可以是 ${raw('png')}, ${raw('svg')}
${raw('jpg')} 等常见格式，可以通过 ${raw('width')} 等参数来调整图片的大小和位置。例如，${raw('width: 50%')} 表示图片宽度为页面宽度的 50%，${raw('height: auto')}
表示高度自适应，${raw('align: center')} 表示图片居中显示。`,
    inline`我们使用 ${raw('@fig:<label>')} 来进行表的引用，其中 ${raw('<label>')} 是跟在图片后的标签，使用尖括号括起来，例如下面的${ref(label('fig:ida-star-20'))}，我们使用命令 ${raw('@fig:ida-star-20')}
即可引用。`,
    inline(
      labelled(
        figure(
          { caption: inline`IDA* 算法示例， 50% 比例缩放` },
          image({ width: pct(50) }, path('fig/ida-star-1.png')),
        ),
        label('ida-star-50'),
      ),
    ),
    inline(
      labelled(
        figure(
          { caption: inline`IDA* 算法示例， 20% 比例缩放` },
          image({ width: pct(20) }, path('fig/ida-star-1.png')),
        ),
        label('ida-star-20'),
      ),
    ),
    m.heading(3, '子图'),
    inline`暂时无法实现子图，可以使用 ${link('https://app.diagrams.net/', inline`Draw.io`)} 等网站绘制完子图，然后导出一个大图，贴到论文中。`,
    m.heading(2, '数学公式'),
    '数学公式分为行内公式与行间公式，其中，行内公式不会出现编号和引用，行间公式可以会在最右侧显示编号，并且可以引用。',
    inline`例如，这是一个简单的行内公式 ${unsafeRaw.math`sum_(i=1)^n a_i`}，这是一个复杂的行内公式：${unsafeRaw.math`U(H, t, p) = product^p_(j=1)product_k e^((-i H_k t)/n), H = sum_k H_k`}`,
    inline`下面是一个行间公式，我们可以通过将其编号为 ${raw('<nabla>')}，然后通过 ${raw('@eqt:nabla')} 来引用，例如${ref(label('eqt:nabla'))}`,
    inline(labelled(unsafeRaw.math.block`nabla L = partial L / partial x`, label('nabla'))),
    inline`${ref(label('eqt:sgd-demo'))} 是一个复杂的行间公式，这里我们使用 ${raw('&')} 作为锚点进行对齐，这与 ${raw('Latex')} 中是一致的，区别是我们不需要写 ${raw('\\begin{aligned}')}
与 ${raw('\\end{aligned}')} ${labelled(
      unsafeRaw.math.block`(w^((i+1)), b^((i+1))) & = (w^((i)), b^((i))) - alpha nabla "Loss"(
                             w^((i)), b^((i))
                           ) \\
                         & = (w^((i)), b^((i))) - alpha (
                             (partial "Loss")(partial w), (partial "Loss")(partial b)
                           ) \\
                         & = (w^((i)), b^((i))) - alpha (
                           1 / N sum^N_(j=1)x_j(b^((i)) + w^((i)T)x_j - y_j), \\
                         &                                                    & 1 / N sum^N_(j=1)(b^((i))+w^((i)T)x_j - y_j)
                                                                                )`,
      label('sgd-demo'),
    )}`,
    m.heading(2, '参考文献的引用'),
    inline`我们通过 ${raw('.bib')} 文件来导入参考文献，文件名可以任意选择，通过选项：${raw('bibliography: bibliography.with("ref.bib")')}
进行导入，这里我们只需要将 网站上赋值的 ${raw('biblatex')} 引用赋值粘贴到 ${raw('ref.bib')} 中即可。`,
    inline`随后，通过 ${raw('#cite(<key>)')} 进行引用，其中 ${raw('key')} 是在 ${raw('.bib')} 中设置的键。`,
    inline`在示例中，我们可以引用 ${raw('ref.bib')} 文件中的内容，例如《Deep Learning》${cite(label('goodfellow2016deep'))}，引用2${cite(label('丁文祥2000'))}`,
    inline`当然，我们也可以通过简单的方式，${raw('@key')} 的语法糖即可引用，例如上述的《Deep Learning》${ref(label('goodfellow2016deep'))}，引用2${ref(label('丁文祥2000'))}`,
    inline`或者可以像这样引用参考文献：图书${contentBlock(inline(ref(label('蒋有绪1998'))))}和会议${contentBlock(inline(ref(label('中国力学学会1990'))))}。`,
    inline`在 ${raw('ref.bib')} 中，如${ref(label('lst:ref-demo'))} 所示，引用的部分条目为：`,
    inline(
      labelled(
        figure(
          { caption: '参考文献bib文件部分示例' },
          inline(
            space,
            raw(
              { block: true, lang: 'bib' },
              '@article{丁文祥2000,\n  title={数字革命与竞争国际化},\n  author={丁文祥},\n  journal={中国青年报},\n  year={2000},\n  month={11-20},\n  number={15}\n}\n\n@book{goodfellow2016deep,\n  title = {Deep learning},\n  author = {Goodfellow, Ian and Bengio, Yoshua and Courville, Aaron and Bengio, Yoshua},\n  volume = {1},\n  year = {2016},\n  publisher = {MIT Press}\n}',
            ),
            space,
          ),
        ),
        label('ref-demo'),
      ),
    ),
    inline`第一行的内容即为引用所需的 ${raw('key')}。`,
    m.heading(1, '正文'),
    m.heading(2, '正文子标题'),
    m.heading(3, '正文子子标题'),
    '正文内容',
    m.heading(1, '术语'),
    inline`${strong(inline`需要注意，标题只支持到四级标题，但目录不支持显示四级标题`)}，如果需要四级标题，最好请使用术语，也就是：`,
    inline`${linebreak()} 术语（term）`,
    m.heading(1, '手动分页'),
    inline`使用 ${raw('#pagebreak()')} 手动分页
${pagebreak()}`,
    inline(call(bilingualBibliography, { full: true })),
    show(appendix),
    m.heading(1, '附录标题'),
    inline`第一个附录，引用${ref(label('app:appendixB'))}`,
    inline(labelled(heading({ depth: 1 }, inline('第二个附录')), label('app:appendixB'))),
    '附录不允许有子标题',
    inline`附录内容，这里也可以加入图片，例如${ref(label('fig:appendix-img'))}。`,
    inline(
      labelled(
        [figure({ caption: inline`图片测试` }, image({ width: pct(20) }, path('fig/ida-star-2.png'))), space],
        label('appendix-img'),
      ),
    ),
    inline(
      call(
        acknowledgement,
        blocks(
          inline(kouhu({ builtinText: 'zhufu', length: 200 })),
          inline(kouhu({ builtinText: 'zhufu', length: 100 })),
        ),
      ),
    ),
  )
}
