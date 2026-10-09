// Converted from test/universe/corpus/easy-paper.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  auto,
  bibliography,
  blocks,
  define,
  doc,
  emph,
  external,
  figure,
  footnote,
  image,
  importPackage,
  inline,
  label,
  labelled,
  link,
  m,
  path,
  pct,
  raw,
  ref,
  show,
  space,
  strong,
  table,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const project = external('project')
  const problem = define('problem').pos('arg1', T.content).returns(T.any).external()
  const solution = define('solution').pos('arg1', T.content).returns(T.any).external()
  const summary = define('summary').pos('arg1', T.content).returns(T.any).external()
  const pardiff = external('pardiff')
  const project_with = define('with')
    .named('abstract', T.content, [])
    .named('author', T.any, null)
    .named('date', T.any, null)
    .named('keywords', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(project)
  return doc(
    importPackage('@preview/easy-paper:0.2.2', [project, problem, solution, summary, pardiff]),
    show(
      project_with({
        title: 'EasyPaper 模板使用示例',
        author: '张三',
        date: auto,
        abstract: inline`${space}本文档展示了 EasyPaper 模板的主要功能，包括题目框、解答框、三线表格、数学公式等学术组件。${space}`,
        keywords: ['Typst', '模板', '学术写作'],
      }),
    ),
    m.heading(1, '基本功能'),
    inline`EasyPaper${ref(label('EasyPaper'))} 是基于 SimplePaper${ref(label('SimplePaper'))} 改进的模板，具有单文件设计、系统字体兼容、学术组件丰富等特点。`,
    m.heading(2, '文本格式'),
    m.lines(
      inline`支持 ${strong(inline`粗体`)}、${emph(inline`斜体`)} 和 ${raw('inline code')}。列表功能：`,
      m.list(
        m.item(m.lines('无序列表项', m.list(m.item(m.lines('嵌套项目', m.list(m.item(['嵌套列表采用不同符号']))))))),
      ),
      m.enum(
        m.item(
          m.lines(
            '第二步',
            m.enum(m.item(m.lines('当然你也可以继续嵌套', m.enum(m.item(['再嵌套']))))),
            m.list(m.item(['也可以混合嵌套'])),
          ),
        ),
        m.item(['第三步']),
      ),
    ),
    m.terms(m.term(['定义'], ['你还可以定义一个术语，并给出解释。'])),
    m.heading(2, '代码块'),
    inline(
      raw(
        { block: true, lang: 'python' },
        'def factorial(n):\n    return 1 if n <= 1 else n * factorial(n-1)\nprint(factorial(5))  # 输出: 120',
      ),
    ),
    m.heading(1, '学术组件'),
    m.heading(2, '题目与解答'),
    inline(problem(inline`${space}求 ${unsafeRaw.math`f(x) = x^2 - 4x + 3`} 的最小值。${space}`)),
    inline(
      solution(
        blocks(
          inline`配方得：
${unsafeRaw.math.block`f(x) = (x-2)^2 - 1`}`,
          inline`当 ${unsafeRaw.math`x = 2`} 时，函数取最小值 ${unsafeRaw.math`-1`}。`,
        ),
      ),
    ),
    inline(summary(inline`${space}本题通过配方求解二次函数的最小值，体现了配方在数学问题中的应用。${space}`)),
    m.heading(2, '数学公式'),
    inline`重要公式会自动编号：
${labelled([unsafeRaw.math.block`pardiff(f(x,y), x) = pardiff("", x)((x^2+y^2) / 2) = x`, space], label('eq:partial'))}`,
    inline`辅助公式不编号：
${unsafeRaw.math.block`sin^2(x) + cos^2(x) = 1`}`,
    m.heading(2, '图表功能'),
    inline(
      labelled(
        [
          figure(
            { caption: inline`明代永宁宣抚司及永宁卫疆域图` },
            image({ width: pct(80) }, path('./assets/example.png')),
          ),
          space,
        ],
        label('fig:example'),
      ),
    ),
    inline`表格会自动使用三线表格式：
${labelled([figure({ caption: inline`实验数据表` }, table({ columns: 4 }, inline(strong(inline`项目`)), inline(strong(inline`数值`)), inline(strong(inline`单位`)), inline(strong(inline`备注`)), inline`长度`, inline`10.5`, inline`cm`, inline`注释`, inline`质量`, inline`2.3`, inline`kg`, inline`注释`, inline`温度`, inline`25.0`, inline`°C`, inline`注释`)), space], label('tab:data'))}`,
    inline`下面的文字是引用功能，可以引用${ref(label('fig:example'))}，${ref(label('eq:partial'))} 和${ref(label('tab:data'))}。支持外部${link('https://typst.app', inline`链接`)}和脚注${footnote(inline`这是脚注内容`)}。`,
    inline(bibliography(path('ref.bib'))),
  )
}
