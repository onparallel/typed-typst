// Converted from test/universe/corpus/jiangcai-jufe-master-thesis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  align,
  bibliography,
  center,
  contentBlock,
  datetime,
  define,
  doc,
  em,
  external,
  figure,
  footnote,
  h,
  heading,
  image,
  importPackage,
  inline,
  label,
  labelled,
  linebreak,
  lorem,
  m,
  path,
  pct,
  ref,
  right,
  set,
  show,
  space,
  unsafeRaw,
  v,
  where,
} from '../../../src/index.ts'

export default () => {
  const cover = define('cover')
    .named('zh-title1', T.content, [])
    .named('zh-title2', T.content, [])
    .returns(T.any)
    .external()
  const declaration = define('declaration').returns(T.any).external()
  const typesetFore = external('typeset-fore')
  const abstract = define('abstract')
    .named('en-abstract', T.any, null)
    .named('zh-abstract', T.any, null)
    .returns(T.any)
    .external()
  const kouhu = define('kouhu')
    .named('builtin-text', T.any, null)
    .named('indices', T.any, null)
    .named('length', T.any, null)
    .returns(T.any)
    .external()
  const multiOutline = define('multi-outline').returns(T.any).external()
  const typesetBack = external('typeset-back')
  const tlt = define('tlt').pos('arg1', T.any).returns(T.any).external()
  return doc(
    importPackage('@preview/jiangcai-jufe-master-thesis:0.1.0', [
      cover,
      declaration,
      typesetFore,
      abstract,
      kouhu,
      multiOutline,
      typesetBack,
      tlt,
    ]),
    inline(cover({ zhTitle1: inline`论文`, zhTitle2: inline`标题` })),
    inline(declaration()),
    m.lines(
      show(typesetFore),
      inline(
        abstract({ zhAbstract: kouhu({ builtinText: 'aspirin', indices: 1, length: 100 }), enAbstract: lorem(50) }),
      ),
    ),
    inline(multiOutline()),
    m.lines(show(typesetBack), inline(labelled(heading({ depth: 1 }, inline('绪论')), label('first')))),
    m.heading(2, '研究背景与意义'),
    inline(
      kouhu({ builtinText: 'aspirin', indices: 1, length: 20 }),
      space,
      lorem(10),
      space,
      kouhu({ builtinText: 'aspirin', indices: 2, length: 10 }),
    ),
    m.heading(3, '文献评述'),
    inline(
      kouhu({ builtinText: 'aspirin', indices: 1, length: 20 }),
      space,
      lorem(10),
      space,
      kouhu({ builtinText: 'aspirin', indices: 2, length: 10 }),
    ),
    m.heading(3, 'Test'),
    'Context.',
    m.heading(1, '理论基础'),
    inline(
      kouhu({ builtinText: 'aspirin', indices: 1, length: 20 }),
      space,
      lorem(10),
      space,
      kouhu({ builtinText: 'aspirin', indices: 2, length: 40 }),
    ),
    m.heading(2, '概念定义'),
    inline(
      kouhu({ builtinText: 'aspirin', indices: 1, length: 20 }),
      space,
      lorem(10),
      space,
      kouhu({ builtinText: 'aspirin', indices: 2, length: 10 }),
    ),
    m.heading(3, '研究内容'),
    inline(
      kouhu({ builtinText: 'aspirin', indices: 1, length: 20 }),
      space,
      lorem(10),
      space,
      kouhu({ builtinText: 'aspirin', indices: 2, length: 10 }),
    ),
    m.heading(4, '四级标题'),
    inline(
      kouhu({ builtinText: 'aspirin', indices: 1, length: 20 }),
      space,
      lorem(10),
      space,
      kouhu({ builtinText: 'aspirin', indices: 2, length: 40 }),
    ),
    m.heading(5, '五级标题'),
    inline(
      kouhu({ builtinText: 'aspirin', indices: 1, length: 20 }),
      space,
      lorem(10),
      space,
      kouhu({ builtinText: 'aspirin', indices: 2, length: 10 }),
      space,
      unsafeRaw.code({
        body: figure({ caption: inline`论文流程图` }, image({ width: pct(90) }, path('./imgs/论文流程图.png'))),
      })<'content'>`[#body<图2.1>]`,
    ),
    m.heading(1, '数据集构建'),
    m.heading(2, '数据清洗'),
    inline`数据清洗流程图如下${contentBlock(inline(ref(label('图3.1'))))}所示
${unsafeRaw.code({ body: figure({ caption: inline`数据清洗流程图` }, image({ width: pct(90) }, path('./imgs/数据清洗流程图.png'))) })<'content'>`[#body<图3.1>]`}
注：如有需要可对图片进行注释说明。`,
    '图片来源：如需对图片来源进行说明，请参照此格式。',
    inline(linebreak()),
    inline`脚注${footnote(inline`脚注文本`)}`,
    m.heading(1, '模型构建'),
    inline`${kouhu({ builtinText: 'aspirin', indices: 2, length: 50 })} ${unsafeRaw.code({ body: figure({ caption: inline`筛分粒度组成` }, tlt(path('./tables/筛分粒度组成.xlsx'))) })<'content'>`[#body<表1>]`}
注：如有需要可对表格进行注释说明。`,
    inline`数据来源：如需对${contentBlock(inline(ref(label('表1'))))}来源进行说明，参照此格式${ref(label('刘星2014恶意代码的函数调用图相似性分析'))}。`,
    m.heading(1, '实证分析'),
    '公式格式问题',
    '行间公式。',
    inline(labelled(unsafeRaw.math.block`x + y = z`, label('test'))),
    inline(kouhu({ builtinText: 'aspirin', indices: 2, length: 20 }), ref(label('test'))),
    inline(unsafeRaw.math.block`t f i d f(w, d) = n_w / n_d dot log N / (N_w + 1)`),
    inline(kouhu({ builtinText: 'aspirin', indices: 2, length: 20 })),
    inline(unsafeRaw.math.block`n_w / n_d dot log N / (N_w + 1)`),
    inline(kouhu({ builtinText: 'aspirin', indices: 2, length: 20 })),
    inline`使用Word自带公式书写行内公式 ${unsafeRaw.math`x + y = z`}。`,
    m.heading(1, '实际案例研究'),
    m.heading(1, '结论与展望'),
    m.lines(
      show(where(heading, { level: 1 }), set(align, { alignment: center })),
      set(heading, { level: 1, numbering: null }),
      inline(bibliography({ style: 'gb-7714-2015-numeric', title: inline`参 考 文 献` }, path('./refs.bib'))),
    ),
    m.lines(m.heading(1, '附录'), inline(kouhu({ builtinText: 'aspirin', indices: 2, length: 50 }))),
    m.lines(
      m.heading(1, '致', h(em(2)), '谢'),
      inline`${kouhu({ builtinText: 'aspirin', indices: 2, length: 100 })} ${v(em(2))} ${set(align, { alignment: right })}
姓名${h(em(2))}`,
    ),
    inline(datetime.today().display('[year]年[month padding:none]月')),
  )
}
