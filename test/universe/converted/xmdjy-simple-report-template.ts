// Converted from test/universe/corpus/xmdjy-simple-report-template.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  blocks,
  blue,
  center,
  define,
  doc,
  emph,
  figure,
  highlight,
  image,
  importPackage,
  inline,
  label,
  linebreak,
  m,
  parbreak,
  path,
  pct,
  raw,
  ref,
  space,
  strong,
  sub,
  super_,
  symbol,
  table,
  text,
  unsafeRaw,
  yellow,
} from '../../../src/index.ts'

export default () => {
  const showpage = define('showpage')
    .named('author', T.any, null)
    .named('class', T.any, null)
    .named('college', T.any, null)
    .named('course', T.any, null)
    .named('stdid', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external()
  const reportpage = define('reportpage').pos('arg1', T.content).returns(T.any).external()
  return doc(
    importPackage('@preview/xmdjy-simple-report-template:0.1.0', [showpage, reportpage]),
    inline(
      showpage({
        course: '课程名称',
        college: '学院名',
        author: '名字',
        stdid: '学号',
        title: '实验名',
        class: '班级',
      }),
    ),
    inline(
      reportpage(
        blocks(
          m.lines(
            m.heading(1, '简介'),
            inline`${text({ fill: blue, weight: 'bold' }, inline`Typst`)}是一款轻量级的编程语言，具有markdown类似的语法和相当latex的排版能力，可以用来完成实验报告，同时适合vibe
coding来水平时的作业报告（bushi，为了美观与整齐我设计了这样的一个模板供大家使用`,
          ),
          m.lines(
            m.heading(1, '使用说明'),
            m.heading(2, '常用排版语法'),
            m.list(
              m.item(['标题使用', symbol('='), '、', symbol('='), '=来表示不同级别的标题']),
              m.item([strong(inline`加粗`), space, '/', space, emph(inline`斜体`), '使用*和_来包裹']),
              m.item([highlight({ fill: yellow }, inline`高亮`), '使用 #highlight[] 来高亮文本']),
              m.item([sub(inline`下标`), '和', super_(inline`上标`), '使用 #sub[] 和 #super[] 来表示上下标']),
              m.item(
                m.lines(
                  inline`无序列表使用 ${symbol('-')} 开始，有序列表使用 ${symbol('+')} 开始`,
                  m.enum(m.item(['有序1']), m.item(['有序2'])),
                ),
              ),
            ),
            m.heading(2, '插入图片'),
            inline(figure({ caption: inline`图片的说明` }, image({ width: pct(75) }, path('images/exp.png')))),
          ),
          m.lines(
            m.heading(2, '插入表格'),
            inline(
              figure(
                { caption: inline`表格说明` },
                table(
                  { columns: 3, align: center },
                  inline(strong(inline`阶段`)),
                  inline(strong(inline`研究内容`)),
                  inline(strong(inline`应用`)),
                  inline`content1`,
                  inline`content2`,
                  inline`content3`,
                  inline`111`,
                  inline`222`,
                  inline`333`,
                ),
              ),
            ),
          ),
          m.lines(
            m.heading(2, '代码块'),
            inline(
              raw(
                { block: true, lang: 'cpp' },
                '#include<bits/stdc++.h>\nusing namespace std;\nsigned main(){\n  cout << "code example" << endl;\n  return 0;\n}',
              ),
            ),
          ),
          m.lines(
            m.heading(2, '数学公式'),
            inline`行内公式示例：${unsafeRaw.math`E=m c^2`} ${linebreak()}
行间公式示例：${unsafeRaw.math.block`A = pi r^2`} ${linebreak()}
更复杂一点的：${unsafeRaw.math.block`cal(F)(omega) = integral_(-infinity)^(infinity) f(t) e^(-i omega t) d t`}
${linebreak()}
其他示例：${unsafeRaw.math.block`A = mat(1, 2; 3, 4)  \\ quad sum_(i=1)^n i = (n(n+1)) / 2`} ${linebreak()}`,
          ),
          m.lines(
            m.heading(2, '文献引用'),
            inline`在给出的ref.bib中添加需要引用的文献，然后在文中使用 ${linebreak()} [ICIR2025]Think Then React 动作生成的新思路 ${ref(label('tan2025think'))}
${bibliography({ style: 'gb-7714-2015-numeric', title: '参考文献' }, path('ref.bib'))}`,
          ),
          parbreak(),
        ),
      ),
    ),
  )
}
