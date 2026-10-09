// Converted from test/universe/corpus/pollux.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  blocks,
  box,
  cm,
  colbreak,
  columns,
  define,
  doc,
  em,
  external,
  importPackage,
  inline,
  linebreak,
  m,
  math,
  page,
  parbreak,
  set,
  show,
  space,
  text,
  unsafeRaw,
  v,
} from '../../../src/index.ts'

export default () => {
  const setTheme = define('set-theme').pos('arg1', T.any).returns(T.any).external()
  const steelBlue = external('steel-blue')
  const setPosterLayout = define('set-poster-layout').pos('arg1', T.any).returns(T.any).external()
  const layoutA0 = external('layout-a0')
  const titleBox = define('title-box')
    .pos('arg1', T.any)
    .named('authors', T.any, null)
    .named('institutes', T.any, null)
    .returns(T.any)
    .external()
  const columnBox = define('column-box').pos('arg1', T.content).named('heading', T.any, null).returns(T.any).external()
  const bottomBox = define('bottom-box').pos('arg1', T.content).returns(T.any).external()
  return doc(
    importPackage('@preview/pollux:0.1.0', [
      setTheme,
      steelBlue,
      setPosterLayout,
      layoutA0,
      titleBox,
      columnBox,
      bottomBox,
    ]),
    inline(setTheme(steelBlue)),
    m.lines(set(page, { margin: cm(0), paper: 'a0' }), inline(setPosterLayout(layoutA0))),
    set(columns, { gutter: em(2) }),
    show(math.equation, set(text, { font: 'New Computer Modern Math' })),
    inline(
      titleBox(
        { authors: 'Author Name¹, Co-Author²', institutes: '¹First Affiliation, ²Second Affiliation' },
        'Research Poster Template',
      ),
      space,
      v(cm(-1)),
    ),
    inline(
      box(
        { inset: cm(2) },
        inline(
          space,
          columns(
            2,
            blocks(
              parbreak(),
              inline(
                columnBox(
                  { heading: 'Introduction' },
                  blocks(
                    m.lines(
                      'This template demonstrates a two-column research poster layout with:',
                      m.list(
                        m.item(['Summary of objectives and background']),
                        m.item(['Model definition using mathematical equations']),
                        m.item(['Bulleted methods and results']),
                      ),
                    ),
                  ),
                ),
              ),
              inline(v(em(5))),
              inline(
                columnBox(
                  { heading: 'Method' },
                  blocks(
                    inline`We assume a linear model for input vectors ${unsafeRaw.math`x in RR^d`}:`,
                    inline(unsafeRaw.math.block`f(x; W, b) = W x + b, quad W in RR^(k times d), b in RR^k.`),
                    inline`The loss function is squared error with ${unsafeRaw.math`ell_2`} regularization: ${unsafeRaw.math.block`cal(L)(W,b) = 1/n sum_(i=1)^n norm(y_i - f(x_i; W,b))_2^2 + lambda norm(W)_F^2.`}`,
                    inline`Optimization updates using gradient descent with learning rate ${unsafeRaw.math`eta`}: ${unsafeRaw
                      .math.block`W <- W - eta nabla_W cal(L), quad 
    b <- b - eta nabla_b cal(L).`}`,
                  ),
                ),
              ),
              inline(colbreak()),
              inline(
                columnBox(
                  { heading: 'Experiments' },
                  blocks(
                    m.lines(
                      inline`Dataset: Synthetic data (${unsafeRaw.math`n = 10^4`}, ${unsafeRaw.math`d = 32`}). Training conditions:`,
                      m.list(
                        m.item(['Learning rate:', space, unsafeRaw.math`eta = 10^(-2)`]),
                        m.item(['Regularization:', space, unsafeRaw.math`lambda = 10^(-3)`]),
                        m.item(['Epochs: 50']),
                      ),
                    ),
                    m.lines(
                      'Results summary:',
                      m.list(
                        m.item(['Epochs to convergence: 18']),
                        m.item(['MSE:', space, unsafeRaw.math`1.23 times 10^(-2)`]),
                      ),
                    ),
                  ),
                ),
              ),
              inline(v(em(5))),
              inline(
                columnBox(
                  { heading: 'Conclusion' },
                  blocks(
                    m.list(
                      m.item(['Stable learning achieved with linear model and simple regularization']),
                      m.item(['Future improvements: nonlinear features and dropout']),
                      m.item(['Data augmentation and outlier robustness remain open challenges']),
                    ),
                  ),
                ),
              ),
              inline(v(em(5))),
              inline(
                columnBox(
                  { heading: 'References' },
                  inline`${space}[1] Goodfellow et al., Deep Learning, MIT Press, 2016. ${linebreak()} [2] Hastie et
al., Elements of Statistical Learning, Springer, 2009.${space}`,
                ),
              ),
              parbreak(),
            ),
          ),
          space,
        ),
      ),
    ),
    inline(bottomBox(inline`${space}Here is the bottom box. Write anything you want to write here.${space}`)),
  )
}
