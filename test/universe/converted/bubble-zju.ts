// Converted from test/universe/corpus/bubble-zju.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  blocks,
  datetime,
  define,
  doc,
  external,
  figure,
  importPackage,
  inline,
  label,
  labelled,
  m,
  outline,
  pagebreak,
  raw,
  ref,
  show,
  space,
  unsafeRaw,
  white,
} from '../../../src/index.ts'

export default () => {
  const bubble = external('bubble')
  const bubble_with = define('with')
    .named('affiliation', T.any, null)
    .named('author', T.any, null)
    .named('date', T.any, null)
    .named('subtitle', T.any, null)
    .named('title', T.any, null)
    .named('year', T.any, null)
    .returns(T.any)
    .external(bubble)
  const blob = define('blob')
    .pos('pos', T.any)
    .pos('label', T.any)
    .named('tint', T.any, white)
    .rest('args', T.any)
    .returns(T.any)
    .body(
      (p) => unsafeRaw.code<any>`node(
      pos,
      align(center, label),
      width: 28mm,
      fill: tint.lighten(60%),
      stroke: 1pt + tint.darken(20%),
      ..args,
    )`,
    )
  const circ = define('circ')
    .pos('pos', T.any)
    .named('tint', T.any, white)
    .rest('args', T.any)
    .returns(T.any)
    .body(
      (p) => unsafeRaw.code<any>`node(
      pos,
      align(center, box(baseline: -2pt)[$+$]),
      fill: tint,
      stroke: 1pt + black,
      shape: fletcher_circle,
      radius: 2.5mm,
      ..args,
    )`,
    )
  return doc(
    importPackage('@preview/bubble-zju:0.1.0', [bubble]),
    m.lines(
      unsafeRaw.markup`#import "@preview/note-me:0.5.0": *`,
      unsafeRaw.markup`#import "@preview/fletcher:0.5.8" as fletcher: diagram, edge, node`,
      unsafeRaw.markup`#import fletcher.shapes: circle as fletcher_circle, hexagon, house`,
    ),
    show(
      bubble_with({
        title: '实验二：Typst模板实现',
        subtitle: 'Typst短学期 (Typst101) 实验报告',
        author: '324010XXXX 犬戎',
        affiliation: '浙江大学 计算机科学与技术',
        date: datetime.today().display('[year] 年 [month padding:none] 月 [day padding:none] 日'),
        year: '课程综合实践I (CS1145M), 2025',
      }),
    ),
    inline(outline({ title: '目录' }), space, pagebreak()),
    m.heading(1, '简介'),
    '这是一个简单的浙江大学报告模板，你可以用它来写报告。',
    m.heading(1, '样式'),
    '下面是一些样式的样例。',
    m.heading(2, '列表'),
    '以下是一个无序列表。',
    m.list(m.item(['AVL Tree']), m.item(['Splay Tree']), m.item(['Red-Black Tree']), m.item(['B+ Tree'])),
    '以下是一个有序列表。',
    m.enum(m.numbered(1, ['Alice']), m.numbered(2, ['Bob']), m.numbered(3, ['Charlie']), m.numbered(5, ['Eve'])),
    m.heading(2, '代码块'),
    '这是一个代码块：',
    inline(raw({ block: true, lang: 'rust' }, 'fn main() {\n    println!("Hello, world!");\n}')),
    '在 bubble-zju 的配置中，西文字体使用「JetBrainsMonoNL NF」，中文字体使用「霞鹜文楷屏幕阅读版」。',
    inline(raw({ block: true, lang: 'py' }, 'text = "未甚拔行间，犬戎大充斥"\nprint(text.encode())')),
    inline`这里是一个行内代码块：${raw('text.encode()')}。`,
    m.heading(2, '图表'),
    inline`见 ${ref(label('figure1'))}。`,
    inline(
      labelled(
        figure(
          { caption: inline`Overview of Qwen3 Decoder Layer.` },
          blocks(
            blob.decl,
            circ.decl,
            inline(unsafeRaw.code<any>`diagram(
      spacing: 8pt,
      cell-size: (8mm, 10mm),
      edge-stroke: 1pt,
      edge-corner-radius: 5pt,
      mark-scale: 70%,

      circ((0, 1)),
      edge(),
      blob((0, 2), [Grouped Query\\ Attention], tint: orange),
      blob((0, 3.3), [RMS Norm], tint: yellow, shape: hexagon),
      edge(),
      blob((0, 5), [Input], shape: house.with(angle: 30deg), width: auto, tint: red),

      for x in (-.3, -.1, +.1, +.3) {
        edge((0, 2.8), (x, 2.8), (x, 2), "-|>")
      },
      edge((0, 2.8), (0, 4)),
      edge((0, 4), "r,uuu,l", "--|>"),
      edge((0, 1), (0, 0.35), "rr", (2, 4), "r", (3, 3.3), "-|>"),
      edge((3, 4), "r,uuu,l", "--|>"),

      blob((3, 0), [Output], tint: green),
      edge("<|-"),
      circ((3, 1)),
      edge(),
      blob((3, 2), [Feed\\ Forward], tint: blue),
      edge(),
      blob((3, 3.3), [RMS Norm], tint: yellow, shape: hexagon),
    )`),
          ),
        ),
        label('figure1'),
      ),
    ),
    '该图表使用 fletcher 进行绘制。',
    m.heading(2, '公式'),
    '你可以使用数学公式。',
    m.heading(3, 'Riemann 重排定理'),
    inline`假设 ${unsafeRaw.math`sum_(n=1)^(infinity) a_n`} 是一个条件收敛的无穷级数。对任意的一个实数 ${unsafeRaw.math`C`}，都存在一种从自然数集合到自然数集合的排列 ${unsafeRaw.math`sigma: n arrow.bar sigma(n)`}，使得
${unsafeRaw.math.block`sum_(n=1)^(infinity) a_sigma(n) = C.`}`,
    inline`此外，也存在另一种排列 ${unsafeRaw.math`sigma': n arrow.bar sigma'(n)`}，使得
${unsafeRaw.math.block`sum_(n=1)^(infinity) a_(sigma'(n)) = infinity.`}`,
    inline`类似地，也可以有办法使它的部分和趋于 ${unsafeRaw.math`-infinity`}，或没有任何极限。`,
    '反之，如果级数是绝对收敛的，那么无论怎样重排，它仍然会收敛到同一个值，也就是级数的和。',
  )
}
