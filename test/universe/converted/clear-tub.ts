// Converted from test/universe/corpus/clear-tub.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  blocks,
  cm,
  datetime,
  define,
  doc,
  em,
  emph,
  external,
  fr,
  image,
  importPackage,
  inline,
  linebreak,
  link,
  m,
  path,
  show,
  space,
  strong,
  sym,
  text,
  unsafeRaw,
  v,
} from '../../../src/index.ts'

export default () => {
  const configInfo = define('config-info')
    .named('author', T.content, [])
    .named('date', T.any, null)
    .named('institution', T.content, [])
    .named('subtitle', T.content, [])
    .named('title', T.content, [])
    .returns(T.any)
    .external()
  const pause = external('pause')
  const speakerNote = define('speaker-note').pos('arg1', T.content).returns(T.any).external()
  const slide = define('slide')
    .pos('arg1', T.content)
    .pos('arg2', T.content)
    .named('composer', T.any, null)
    .returns(T.any)
    .external()
  const tubTheme = external('tub-theme')
  const titleSlide = define('title-slide').returns(T.any).external()
  const outlineSlide = define('outline-slide').returns(T.any).external()
  const alertBox = define('alert-box').pos('arg1', T.content).returns(T.any).external()
  const highlightBox = define('highlight-box').pos('arg1', T.content).returns(T.any).external()
  const slideCite = define('slide-cite').pos('arg1', T.content).returns(T.any).external()
  const tubTheorem = define('tub-theorem').pos('arg1', T.content).returns(T.any).external()
  const tubDefinition = define('tub-definition').pos('arg1', T.content).returns(T.any).external()
  const tubExample = define('tub-example').pos('arg1', T.content).returns(T.any).external()
  const quoteBlock = define('quote-block')
    .pos('arg1', T.content)
    .named('attribution', T.content, [])
    .returns(T.any)
    .external()
  const endingSlide = define('ending-slide')
    .pos('arg1', T.content)
    .named('title', T.content, [])
    .returns(T.any)
    .external()
  const tubGray = external('tub-gray')
  const tubTheme_with = define('with')
    .pos('arg1', T.any)
    .named('aspect-ratio', T.any, null)
    .named('department', T.content, [])
    .named('logo', T.any, null)
    .named('progress-bar', T.any, null)
    .returns(T.any)
    .external(tubTheme)
  return doc(
    m.lines(
      importPackage('@preview/touying:0.6.1', [configInfo, pause, speakerNote, slide]),
      importPackage('@preview/clear-tub:0.2.0', [
        tubTheme,
        configInfo,
        titleSlide,
        outlineSlide,
        pause,
        speakerNote,
        slide,
        alertBox,
        highlightBox,
        slideCite,
        tubTheorem,
        tubDefinition,
        tubExample,
        quoteBlock,
        endingSlide,
        tubGray,
      ]),
    ),
    show(
      tubTheme_with(
        {
          aspectRatio: '16-9',
          department: inline`Faculty of Electrical Engineering and Computer Science`,
          logo: image(path('assets/logos/tu_berlin.svg')),
          progressBar: true,
        },
        configInfo({
          title: inline`Research Methods in Computer Science`,
          subtitle: inline`An Introduction to Academic Presentations`,
          author: inline`Dr. Example Author`,
          date: datetime.today(),
          institution: inline`Technische Universität Berlin`,
        }),
      ),
    ),
    inline(titleSlide()),
    inline(outlineSlide()),
    m.heading(1, 'Introduction'),
    m.heading(2, 'Motivation'),
    m.lines(
      m.list(
        m.item(['Academic presentations communicate research findings effectively']),
        m.item(['A consistent visual identity strengthens institutional recognition']),
        m.item(['This template follows the TU Berlin corporate design guidelines']),
      ),
      inline(pause),
      m.list(
        m.item(['Built on', space, strong(inline`Touying`), ', a modern presentation framework for Typst']),
        m.item(['Supports animations, multi-column layouts, and structured slides']),
      ),
    ),
    m.heading(2, 'Agenda'),
    m.enum(
      m.item(['Introduction and motivation']),
      m.item(['Research methodology']),
      m.item(['Results and discussion']),
      m.item(['Conclusion and future work']),
    ),
    m.heading(1, 'Methodology'),
    m.heading(2, 'Research Approach'),
    'We employ a mixed-methods approach combining:',
    m.enum(
      m.item([
        strong(inline`Quantitative analysis`),
        space,
        sym.dash.em,
        space,
        'statistical evaluation of experimental data',
      ]),
      m.item([strong(inline`Qualitative review`), space, sym.dash.em, space, 'expert assessment of design patterns']),
      m.item([strong(inline`Comparative study`), space, sym.dash.em, space, 'benchmarking against existing solutions']),
    ),
    inline(pause),
    'The methodology follows established best practices in the field.',
    inline(speakerNote(inline`Mention that the methodology was peer-reviewed by two independent experts.`)),
    m.heading(2, 'Comparison of Approaches'),
    inline(
      slide(
        { composer: [fr(1), fr(1)] },
        blocks(
          m.lines(
            m.heading(3, 'Traditional Methods'),
            m.list(
              m.item(['Manual data collection']),
              m.item(['Limited scalability']),
              m.item(['High cost per sample']),
              m.item(['Established validity']),
            ),
          ),
        ),
        blocks(
          m.lines(
            m.heading(3, 'Modern Methods'),
            m.list(
              m.item(['Automated pipelines']),
              m.item(['Horizontally scalable']),
              m.item(['Reduced marginal cost']),
              m.item(['Requires validation']),
            ),
          ),
        ),
      ),
    ),
    m.heading(1, 'Results'),
    m.heading(2, 'Key Findings'),
    inline(
      alertBox(inline`${space}${strong(inline`Main Result:`)} The proposed approach achieves a 35% improvement over
the baseline while maintaining statistical significance (${unsafeRaw.math`p < 0.01`}).${space}`),
    ),
    inline(v(cm(0.5))),
    m.lines(
      'Supporting observations:',
      m.list(
        m.item(['Consistent performance across all test conditions']),
        m.item(['Robust to variations in input parameters']),
        m.item(['Generalizes well to unseen data distributions']),
      ),
    ),
    m.heading(2, 'Detailed Analysis'),
    inline(
      highlightBox(inline`${space}The combination of automated data collection and rigorous statistical testing enables
reproducible research at scale.${space}`),
    ),
    inline(v(cm(0.5))),
    m.lines(
      'The analysis reveals three key factors:',
      m.enum(
        m.item([strong(inline`Data quality`), space, 'has the strongest effect on outcomes']),
        m.item([strong(inline`Sample size`), space, 'matters beyond', space, unsafeRaw.math`n = 100`]),
        m.item([strong(inline`Method selection`), space, 'has diminishing returns after optimization']),
      ),
    ),
    m.heading(2, 'Mathematical Framework'),
    inline`The optimization objective${slideCite(inline`Boyd & Vandenberghe, ${emph(inline`Convex Optimization`)}, Cambridge University Press, 2004.`)}
is defined as:`,
    inline(
      unsafeRaw.math
        .block`min_(theta) cal(L)(theta) = 1/N sum_(i=1)^N ell(f_theta (x_i), y_i) + lambda norm(theta)_2^2`,
    ),
    m.lines(
      'where:',
      m.list(
        m.item([unsafeRaw.math`f_theta`, space, 'is the parameterized model']),
        m.item([unsafeRaw.math`ell`, space, 'is the loss function']),
        m.item([unsafeRaw.math`lambda`, space, 'controls regularization strength']),
      ),
    ),
    m.heading(2, 'Formal Definitions'),
    inline(
      tubTheorem(inline`${space}For any convex function ${unsafeRaw.math`f: RR^n -> RR`}, a local minimum is also a
global minimum.${space}`),
    ),
    inline(v(cm(0.4))),
    inline(
      tubDefinition(inline`${space}A function ${unsafeRaw.math`f`} is ${strong(inline`convex`)} if for all ${unsafeRaw.math`x, y in "dom" f`}
and ${unsafeRaw.math`0 <= theta <= 1`}: ${unsafeRaw.math.block`f(theta x + (1 - theta) y) <= theta f(x) + (1 - theta) f(y)`}${space}`),
    ),
    inline(v(cm(0.4))),
    inline(
      tubExample(inline`${space}The function ${unsafeRaw.math`f(x) = x^2`} is convex on ${unsafeRaw.math`RR`}, since
${unsafeRaw.math`f''(x) = 2 > 0`} everywhere.${space}`),
    ),
    inline(v(cm(0.4))),
    inline(
      quoteBlock(
        { attribution: inline`Albert Einstein` },
        inline`${space}If we knew what it was we were doing, it would not be called research, would it?${space}`,
      ),
    ),
    inline(v(cm(0.5))),
    inline(
      quoteBlock(
        { attribution: inline`Donald Knuth` },
        inline`${space}Premature optimization is the root of all evil.${space}`,
      ),
    ),
    m.heading(1, 'Conclusion'),
    m.heading(2, 'Summary'),
    inline(
      slide(
        { composer: [fr(1), fr(1)] },
        blocks(
          m.lines(
            m.heading(3, 'Contributions'),
            m.list(
              m.item(['Novel methodology for data analysis']),
              m.item(['Open-source implementation']),
              m.item(['Reproducible experimental setup']),
              m.item(['Comprehensive evaluation']),
            ),
          ),
        ),
        blocks(
          m.lines(
            m.heading(3, 'Future Work'),
            m.list(
              m.item(['Extension to larger datasets']),
              m.item(['Cross-domain validation']),
              m.item(['Real-time processing pipeline']),
              m.item(['Community benchmarking']),
            ),
          ),
        ),
      ),
    ),
    inline(
      endingSlide(
        { title: inline`Thank You!` },
        blocks(
          inline(text({ size: em(0.9) }, inline`Dr. Example Author`)),
          inline(v(cm(0.3))),
          inline(
            text(
              { size: em(0.75), fill: tubGray },
              inline`${space}Faculty of Electrical Engineering and Computer Science ${linebreak()} Technische Universität
Berlin ${linebreak()} ${link('mailto:author@tu-berlin.de', inline`author@tu-berlin.de`)}${space}`,
            ),
          ),
          inline(v(cm(0.5))),
          inline(text({ size: em(0.7) }, inline(emph(inline`Questions?`)))),
        ),
      ),
    ),
  )
}
