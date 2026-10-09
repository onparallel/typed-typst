// Converted from test/universe/corpus/calmly-touying.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  auto,
  blocks,
  datetime,
  define,
  doc,
  em,
  external,
  fr,
  h,
  importPackage,
  inline,
  linebreak,
  luma,
  m,
  pt,
  raw,
  show,
  space,
  strong,
  sym,
  table,
  unsafeRaw,
  v,
} from '../../../src/index.ts'

export default () => {
  const calmly = external('calmly')
  const configInfo = define('config-info')
    .named('author', T.content, [])
    .named('date', T.any, null)
    .named('institution', T.content, [])
    .named('subtitle', T.content, [])
    .named('title', T.content, [])
    .returns(T.any)
    .external()
  const titleSlide = define('title-slide').returns(T.any).external()
  const sectionSlide = define('section-slide')
    .pos('arg1', T.content)
    .named('show-progress', T.any, null)
    .returns(T.any)
    .external()
  const highlightBox = define('highlight-box')
    .pos('arg1', T.content)
    .named('title', T.any, null)
    .returns(T.any)
    .external()
  const alert = define('alert').pos('arg1', T.content).returns(T.any).external()
  const twoCol = define('two-col').pos('arg1', T.content).pos('arg2', T.content).returns(T.any).external()
  const alertBox = define('alert-box').pos('arg1', T.content).named('title', T.any, null).returns(T.any).external()
  const exampleBox = define('example-box').pos('arg1', T.content).named('title', T.any, null).returns(T.any).external()
  const themedBlock = define('themed-block')
    .pos('arg1', T.content)
    .named('title', T.any, null)
    .returns(T.any)
    .external()
  const algorithmBox = define('algorithm-box')
    .pos('arg1', T.content)
    .named('title', T.any, null)
    .returns(T.any)
    .external()
  const threeCol = define('three-col')
    .pos('arg1', T.content)
    .pos('arg2', T.content)
    .pos('arg3', T.content)
    .returns(T.any)
    .external()
  const endingSlide = define('ending-slide')
    .named('contact', T.any, null)
    .named('subtitle', T.content, [])
    .named('title', T.content, [])
    .returns(T.any)
    .external()
  const calmly_with = define('with').pos('arg1', T.any).returns(T.any).external(calmly)
  return doc(
    importPackage('@preview/calmly-touying:0.2.0', [
      calmly,
      configInfo,
      titleSlide,
      sectionSlide,
      highlightBox,
      alert,
      twoCol,
      alertBox,
      exampleBox,
      themedBlock,
      algorithmBox,
      threeCol,
      endingSlide,
    ]),
    show(
      calmly_with(
        configInfo({
          title: inline`Your Presentation Title`,
          subtitle: inline`Conference or Event Name`,
          author: inline`Your Name`,
          date: datetime.today(),
          institution: inline`Your Institution`,
        }),
      ),
    ),
    inline(titleSlide()),
    inline(sectionSlide(inline`Introduction`)),
    m.heading(2, 'Motivation'),
    inline(
      highlightBox(
        { title: 'Research Question' },
        inline`${space}What problem are you solving, and why does it matter?${space}`,
      ),
    ),
    inline(v(em(0.8))),
    m.list(
      m.item(['Provide context and background']),
      m.item(['State the gap in existing work']),
      m.item([alert(inline`Highlight`), space, 'the key challenge']),
    ),
    inline(v(fr(1))),
    m.heading(2, 'Approach'),
    inline(v(fr(1))),
    inline(
      twoCol(
        inline(
          space,
          alertBox({ title: 'Existing Methods' }, inline`${space}Describe limitations of prior approaches.${space}`),
          space,
        ),
        inline(
          space,
          exampleBox({ title: 'Our Contribution' }, inline`${space}Explain what your work adds.${space}`),
          space,
        ),
      ),
    ),
    inline(v(fr(2))),
    inline(sectionSlide(inline`Methods`)),
    m.heading(2, 'Algorithm'),
    'Code blocks get automatic syntax highlighting matched to your color theme:',
    inline(
      raw(
        { block: true, lang: 'python' },
        'def gradient_descent(f, x0, lr=0.01):\n    x = x0\n    for _ in range(1000):\n        x -= lr * grad(f, x)\n    return x',
      ),
    ),
    inline(
      themedBlock(
        { title: 'Complexity' },
        inline`${space}Time: ${unsafeRaw.math`O(n dot T)`} where ${unsafeRaw.math`T`} is the number of iterations.${space}`,
      ),
    ),
    m.heading(2, 'Pseudocode'),
    inline(
      algorithmBox(
        { title: 'Algorithm 1: Gradient Descent' },
        blocks(
          inline`${strong(inline`Input:`)} Function ${unsafeRaw.math`f`}, initial point ${unsafeRaw.math`x_0`},
learning rate ${unsafeRaw.math`eta`} ${linebreak()} ${strong(inline`Output:`)} Approximate minimizer
${unsafeRaw.math`x^*`}`,
          inline`1: ${unsafeRaw.math`x <- x_0`} ${linebreak()} 2: ${strong(inline`for`)} ${unsafeRaw.math`t = 1, 2, dots, T`}
${strong(inline`do`)} ${linebreak()} 3: ${h(em(1))} ${unsafeRaw.math`g <- nabla f(x)`} ${linebreak()}
4: ${h(em(1))} ${unsafeRaw.math`x <- x - eta dot g`} ${linebreak()} 5: ${strong(inline`end for`)}
${linebreak()} 6: ${strong(inline`return`)} ${unsafeRaw.math`x`}`,
        ),
      ),
    ),
    inline(v(fr(1))),
    m.heading(2, 'Formulation'),
    inline(v(fr(1))),
    inline(
      twoCol(
        blocks(
          'The objective function:',
          inline(unsafeRaw.math.block`min_theta L(theta) = -1/n sum_(i=1)^n log p(x_i | theta)`),
        ),
        blocks(
          inline(strong(inline`Key variables`)),
          m.list(
            m.item([unsafeRaw.math`theta`, space, sym.dash.em, space, 'model parameters']),
            m.item([unsafeRaw.math`x_i`, space, sym.dash.em, space, 'observed data points']),
            m.item([unsafeRaw.math`n`, space, sym.dash.em, space, 'sample size']),
          ),
        ),
      ),
    ),
    inline(v(fr(2))),
    inline(sectionSlide({ showProgress: true }, inline`Results`)),
    m.heading(2, 'Comparison'),
    inline(v(fr(1))),
    inline(
      table(
        { columns: [fr(1), auto, auto, auto], stroke: add(pt(0.5), luma(200)), inset: pt(8) },
        table.header(
          inline(strong(inline`Method`)),
          inline(strong(inline`Precision`)),
          inline(strong(inline`Recall`)),
          inline(strong(inline`F1`)),
        ),
        inline`Baseline`,
        inline`0.72`,
        inline`0.68`,
        inline`0.70`,
        inline`Improved`,
        inline`0.85`,
        inline`0.81`,
        inline`0.83`,
        inline(strong(inline`Ours`)),
        inline(strong(inline`0.91`)),
        inline(strong(inline`0.89`)),
        inline(strong(inline`0.90`)),
      ),
    ),
    inline(v(fr(2))),
    inline(sectionSlide(inline`Conclusion`)),
    m.heading(2, 'Summary'),
    inline(
      threeCol(
        blocks(inline(strong(inline`Problem`)), 'Clearly defined the research gap.'),
        blocks(inline(strong(inline`Method`)), 'Proposed a novel approach with formal guarantees.'),
        blocks(inline(strong(inline`Result`)), 'Achieved state-of-the-art on standard benchmarks.'),
      ),
    ),
    inline(v(em(1))),
    inline(
      alertBox(
        { title: 'Future Work' },
        blocks(m.list(m.item(['Extend to larger-scale datasets']), m.item(['Explore alternative architectures']))),
      ),
    ),
    inline(v(fr(1))),
    inline(
      endingSlide({
        title: inline`Thank You`,
        subtitle: inline`Questions?`,
        contact: ['your.email@example.com', 'github.com/yourusername'],
      }),
    ),
  )
}
