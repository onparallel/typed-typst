// Converted from test/universe/corpus/clari-docs.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  blocks,
  datetime,
  define,
  doc,
  emph,
  external,
  importPackage,
  inline,
  linebreak,
  link,
  m,
  pt,
  raw,
  show,
  space,
  strong,
  sub,
  sym,
  unsafeRaw,
  white,
} from '../../../src/index.ts'

export default () => {
  const clariDocs = external('clari-docs')
  const titleSlide = define('title-slide')
    .named('author', T.any, null)
    .named('date', T.any, null)
    .named('institution', T.any, null)
    .named('subtitle', T.content, [])
    .named('title', T.any, null)
    .returns(T.any)
    .external()
  const overviewSlide = define('overview-slide').returns(T.any).external()
  const sectionSlide = define('section-slide').pos('arg1', T.content).returns(T.any).external()
  const slide = define('slide')
    .pos('arg1', T.content)
    .named('outlined', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external()
  const callout = define('callout').pos('arg1', T.content).named('type', T.any, null).returns(T.any).external()
  const cols = define('cols').pos('arg1', T.content).pos('arg2', T.content).returns(T.any).external()
  const infoV = define('info-v').pos('arg1', T.content).named('title', T.any, null).returns(T.any).external()
  const focusSlide = define('focus-slide').pos('arg1', T.content).returns(T.any).external()
  const blankSlide = define('blank-slide').pos('arg1', T.content).returns(T.any).external()
  const infoH = define('info-h').pos('arg1', T.content).named('title', T.any, null).returns(T.any).external()
  const framed = define('framed').pos('arg1', T.content).named('title', T.any, null).returns(T.any).external()
  const highlightBox = define('highlight-box').pos('arg1', T.content).returns(T.any).external()
  const codeBlock_2 = define('code-block')
    .pos('arg1', T.content)
    .named('theme', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external()
  const quoteBlock = define('quote-block')
    .pos('arg1', T.content)
    .named('author', T.any, null)
    .named('source', T.any, null)
    .returns(T.any)
    .external()
  const definition = define('definition').pos('arg1', T.any).pos('arg2', T.content).returns(T.any).external()
  const theorem = define('theorem')
    .pos('arg1', T.content)
    .named('number', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external()
  const proof = define('proof').pos('arg1', T.content).returns(T.any).external()
  const lemma = define('lemma')
    .pos('arg1', T.content)
    .named('number', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external()
  const corollary = define('corollary')
    .pos('arg1', T.content)
    .named('number', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external()
  const stepList = define('step-list')
    .pos('arg1', T.content)
    .pos('arg2', T.content)
    .pos('arg3', T.content)
    .pos('arg4', T.content)
    .pos('arg5', T.content)
    .returns(T.any)
    .external()
  const comparison = define('comparison')
    .pos('arg1', T.content)
    .pos('arg2', T.content)
    .named('left-title', T.any, null)
    .named('right-title', T.any, null)
    .returns(T.any)
    .external()
  const dataTable = define('data-table')
    .pos('arg1', T.any)
    .pos('arg2', T.any)
    .named('caption', T.any, null)
    .returns(T.any)
    .external()
  const mathEq = define('math-eq').pos('arg1', T.content).named('numbered', T.any, null).returns(T.any).external()
  const mathAligned = define('math-aligned')
    .pos('arg1', T.content)
    .pos('arg2', T.content)
    .pos('arg3', T.content)
    .pos('arg4', T.content)
    .returns(T.any)
    .external()
  const physEq = define('phys-eq')
    .pos('arg1', T.content)
    .named('derivation', T.any, null)
    .named('label', T.any, null)
    .named('unit', T.any, null)
    .returns(T.any)
    .external()
  const chemEq = define('chem-eq')
    .pos('arg1', T.content)
    .pos('arg2', T.content)
    .named('arrow-type', T.any, null)
    .named('conditions', T.content, [])
    .returns(T.any)
    .external()
  const siValue = define('si-value')
    .pos('arg1', T.any)
    .pos('arg2', T.any)
    .named('uncertainty', T.any, null)
    .returns(T.any)
    .external()
  const constantsTable = define('constants-table').pos('arg1', T.any).returns(T.any).external()
  const pinEq = define('pin-eq')
    .pos('arg1', T.content)
    .pos('arg2', T.content)
    .pos('arg3', T.content)
    .pos('arg4', T.content)
    .returns(T.any)
    .external()
  const functionDef = define('function-def')
    .pos('arg1', T.any)
    .pos('arg2', T.any)
    .pos('arg3', T.any)
    .pos('arg4', T.content)
    .returns(T.any)
    .external()
  const derivativeDisplay = define('derivative-display')
    .pos('arg1', T.any)
    .pos('arg2', T.any)
    .named('label', T.any, null)
    .named('order', T.any, null)
    .returns(T.any)
    .external()
  const integralDisplay = define('integral-display')
    .pos('arg1', T.any)
    .named('label', T.any, null)
    .named('lower', T.any, null)
    .named('upper', T.any, null)
    .named('var', T.any, null)
    .returns(T.any)
    .external()
  const limitDisplay = define('limit-display')
    .pos('arg1', T.any)
    .pos('arg2', T.any)
    .pos('arg3', T.any)
    .named('label', T.any, null)
    .returns(T.any)
    .external()
  const barChart = define('bar-chart')
    .pos('arg1', T.any)
    .named('x-label', T.any, null)
    .named('y-label', T.any, null)
    .returns(T.any)
    .external()
  const endSlide = define('end-slide').pos('arg1', T.content).named('title', T.any, null).returns(T.any).external()
  const clariDocs_with = define('with')
    .named('back-color', T.any, null)
    .named('category', T.any, null)
    .named('font', T.any, null)
    .named('font-size', T.any, null)
    .named('show-page-numbers', T.any, null)
    .named('show-progress', T.any, null)
    .named('theme', T.any, null)
    .returns(T.any)
    .external(clariDocs)
  return doc(
    importPackage('@preview/clari-docs:0.1.0', [
      clariDocs,
      titleSlide,
      overviewSlide,
      sectionSlide,
      slide,
      callout,
      cols,
      infoV,
      focusSlide,
      blankSlide,
      infoH,
      framed,
      highlightBox,
      codeBlock_2,
      quoteBlock,
      definition,
      theorem,
      proof,
      lemma,
      corollary,
      stepList,
      comparison,
      dataTable,
      mathEq,
      mathAligned,
      physEq,
      chemEq,
      siValue,
      constantsTable,
      pinEq,
      functionDef,
      derivativeDisplay,
      integralDisplay,
      limitDisplay,
      barChart,
      endSlide,
    ]),
    show(
      clariDocs_with({
        category: 'allrounder',
        theme: 'ocean',
        font: 'Fira Sans',
        fontSize: pt(20),
        showPageNumbers: true,
        showProgress: true,
        backColor: white,
      }),
    ),
    inline(
      titleSlide({
        title: 'clari-docs',
        subtitle: inline`A comprehensive Typst slide template`,
        author: 'Your Name',
        date: datetime.today(),
        institution: 'Your Institution',
      }),
    ),
    inline(overviewSlide()),
    inline(sectionSlide(inline`Slide Types`)),
    inline(
      slide(
        { title: 'Standard Slide', outlined: true },
        blocks(
          inline`The standard ${raw('slide')} function is your workhorse.`,
          m.list(
            m.item(['Use', space, raw('title:'), space, 'for a colored header bar']),
            m.item(['Set', space, raw('outlined: true'), space, 'to register in the overview']),
            m.item(['Use', space, raw('subtitle:'), space, 'for an optional sub-header']),
          ),
          inline(
            callout(
              { type: 'tip' },
              inline`${space}Combine ${raw('section-slide')} + ${raw('slide(outlined: true)')} to build a navigable
table of contents automatically.${space}`,
            ),
          ),
        ),
      ),
    ),
    inline(
      slide(
        blocks(
          inline`A slide ${strong(inline`without`)} a title gives you the full content area.`,
          inline(
            cols(
              inline(
                space,
                infoV(
                  { title: 'Left Column' },
                  inline`${space}Great for side-by-side content, comparisons, or image + text layouts.${space}`,
                ),
                space,
              ),
              inline(
                space,
                infoV(
                  { title: 'Right Column' },
                  inline`${space}Use ${raw('#cols[...][...]')} for equal-width columns, or pass ${raw('columns: (2fr, 1fr)')}
for custom ratios.${space}`,
                ),
                space,
              ),
            ),
          ),
        ),
      ),
    ),
    inline(focusSlide(inline`${space}Use ${raw('#focus-slide')} for ${emph(inline`key takeaways`)}.${space}`)),
    inline(
      blankSlide(
        blocks(
          inline`A ${raw('#blank-slide')} gives you an unadorned canvas.`,
          'Perfect for full-bleed images, diagrams, or any custom layout you want to build from scratch without the header bar.',
        ),
      ),
    ),
    inline(sectionSlide(inline`Content Components`)),
    inline(
      slide(
        { title: 'Callout Boxes', outlined: true },
        inline(
          space,
          callout({ type: 'note' }, inline`This is a ${strong(inline`note`)} callout — great for supplementary info.`),
          space,
          callout({ type: 'tip' }, inline`This is a ${strong(inline`tip`)} callout — use for best practices.`),
          space,
          callout({ type: 'warning' }, inline`This is a ${strong(inline`warning`)} callout — flag caution points.`),
          space,
          callout({ type: 'important' }, inline`This is an ${strong(inline`important`)} callout — must-know info.`),
          space,
        ),
      ),
    ),
    inline(
      slide(
        { title: 'More Callout Types' },
        blocks(
          inline(
            callout({ type: 'danger' }, inline`This is a ${strong(inline`danger`)} callout — critical errors.`),
            space,
            callout({ type: 'success' }, inline`This is a ${strong(inline`success`)} callout — positive outcomes.`),
          ),
          'Callouts are great for drawing attention without losing context.',
        ),
      ),
    ),
    inline(
      slide(
        { title: 'Info Blocks' },
        blocks(
          inline(
            infoV(
              { title: 'Vertical Info Block' },
              inline`${space}The title sits on top in a colored bar. Body content flows naturally below.${space}`,
            ),
          ),
          inline(
            infoH(
              { title: 'Horizontal Info Block' },
              inline`${space}The title is a compact left label. Content stretches to the right — good for key-value
style info.${space}`,
            ),
          ),
        ),
      ),
    ),
    inline(
      slide(
        { title: 'Framed Boxes' },
        blocks(
          inline(framed(inline`A plain framed box — subtle background, rounded corners.`)),
          inline(
            framed(
              { title: 'Framed with Title' },
              inline`${space}A framed box with a colored title bar. Great for definitions, important formulas, or
highlighted notes.${space}`,
            ),
          ),
          inline(
            highlightBox(
              inline`${space}${raw('#highlight-box')} is the simplest highlight — no title, just color.${space}`,
            ),
          ),
        ),
      ),
    ),
    inline(
      slide(
        { title: 'Code Blocks' },
        blocks(
          inline(
            codeBlock_2(
              { title: 'hello.py' },
              inline(
                space,
                raw(
                  { block: true, lang: 'python' },
                  'def greet(name: str) -> str:\n    return f"Hello, {name}!"\n\nprint(greet("World"))',
                ),
                space,
              ),
            ),
          ),
          inline(
            codeBlock_2(
              { title: 'slide.typ', theme: 'light' },
              inline(
                space,
                raw({ block: true, lang: 'typst' }, '#slide(title: "My Slide")[\n  - Point one\n  - Point two\n]'),
                space,
              ),
            ),
          ),
        ),
      ),
    ),
    inline(
      slide(
        { title: 'Quotes & Definitions' },
        blocks(
          inline(
            quoteBlock(
              { author: 'Donald Knuth', source: 'The Art of Computer Programming' },
              inline`${space}Beware of bugs in the above code; I have only proved it correct, not tried it.${space}`,
            ),
          ),
          inline(
            definition(
              'Algorithm',
              inline`A finite sequence of well-defined instructions for solving a class of problems.`,
            ),
          ),
        ),
      ),
    ),
    inline(
      slide(
        { title: 'Math Concept Boxes' },
        blocks(
          inline(
            theorem(
              { title: 'Pythagorean Theorem', number: '1' },
              inline`${space}In a right triangle with legs ${unsafeRaw.math`a`}, ${unsafeRaw.math`b`} and hypotenuse
${unsafeRaw.math`c`}: ${unsafeRaw.math.block`a^2 + b^2 = c^2`}${space}`,
            ),
          ),
          inline(
            proof(inline`${space}Consider a square with side ${unsafeRaw.math`a + b`} and four congruent right triangles
inside... The area argument yields ${unsafeRaw.math`c^2 = a^2 + b^2`}. ${sym.square}${space}`),
          ),
        ),
      ),
    ),
    inline(
      slide(
        { title: 'Lemmas & Corollaries' },
        blocks(
          inline(
            lemma(
              { title: 'Triangle Inequality', number: '2' },
              inline`${space}For any vectors ${unsafeRaw.math`bold(u), bold(v)`}: ${unsafeRaw.math.block`norm(bold(u) + bold(v)) <= norm(bold(u)) + norm(bold(v))`}${space}`,
            ),
          ),
          inline(
            corollary(
              { title: 'Norm Bound', number: '1' },
              inline`${space}As a direct consequence, ${unsafeRaw.math`norm(bold(u) - bold(v)) >= |norm(bold(u)) - norm(bold(v))|`}.${space}`,
            ),
          ),
        ),
      ),
    ),
    inline(
      slide(
        { title: 'Step Lists' },
        inline(
          space,
          stepList(
            inline`Import the package and configure ${raw('#show: clari-docs.with(...)')}`,
            inline`Add a ${raw('#title-slide(...)')} as your cover`,
            inline`Use ${raw('#section-slide[...]')} to divide your content`,
            inline`Fill slides with content and components`,
            inline`Compile with ${raw('typst compile main.typ')}`,
          ),
          space,
        ),
      ),
    ),
    inline(
      slide(
        { title: 'Comparison Layout' },
        inline(
          space,
          comparison(
            { leftTitle: 'Pros', rightTitle: 'Cons' },
            blocks(
              m.list(
                m.item(['Fast compilation']),
                m.item(['Typst is type-safe']),
                m.item(['Clean, expressive syntax']),
                m.item(['Great math support']),
              ),
            ),
            blocks(
              m.list(
                m.item(['Smaller ecosystem vs. LaTeX']),
                m.item(['Some packages still maturing']),
                m.item(['Limited IDE support (improving)']),
              ),
            ),
          ),
          space,
        ),
      ),
    ),
    inline(
      slide(
        { title: 'Data Tables' },
        inline(
          space,
          dataTable(
            { caption: 'Sample performance metrics' },
            ['Model', 'Accuracy', 'F1 Score', 'Latency'],
            [
              ['Baseline', '72.3%', '0.71', '12 ms'],
              ['ResNet-50', '89.1%', '0.88', '45 ms'],
              ['ViT-B/16', '91.5%', '0.91', '110 ms'],
              ['Ours', '93.8%', '0.93', '38 ms'],
            ],
          ),
          space,
        ),
      ),
    ),
    inline(sectionSlide(inline`Image Layouts`)),
    inline(
      slide(
        { title: 'Image Layout Options', outlined: true },
        blocks(
          'clari-docs provides five image placement modes:',
          inline(
            stepList(
              inline`${raw('#img-full(src)')} — fills the entire slide`,
              inline`${raw('#img-left(src)[content]')} — image left, text right`,
              inline`${raw('#img-right(src)[content]')} — image right, text left`,
              inline`${raw('#img-top(src)[content]')} — image top, text below`,
              inline`${raw('#img-bottom(src)[content]')} — text above, image below`,
            ),
          ),
          inline`Replace ${raw('src')} with your image path (relative to ${raw('main.typ')}).`,
        ),
      ),
    ),
    inline(sectionSlide(inline`Mathematics & Science`)),
    inline(
      slide(
        { title: 'Equation Display', outlined: true },
        blocks(
          inline`Use ${raw('#math-eq')} for a beautifully boxed display equation:`,
          inline(mathEq({ numbered: true }, inline(unsafeRaw.math.block`E = m c^2`))),
          inline(
            mathEq(
              { numbered: true },
              inline(space, unsafeRaw.math.block`integral_0^infinity e^(-x^2) dif x = sqrt(pi) / 2`, space),
            ),
          ),
        ),
      ),
    ),
    inline(
      slide(
        { title: 'Aligned Equations' },
        blocks(
          inline`Group related equations with ${raw('#math-aligned')}:`,
          inline(
            mathAligned(
              inline(unsafeRaw.math.block`nabla dot bold(E) &= rho / epsilon_0`),
              inline(unsafeRaw.math.block`nabla dot bold(B) &= 0`),
              inline(unsafeRaw.math.block`nabla times bold(E) &= -(partial bold(B)) / (partial t)`),
              inline(
                unsafeRaw.math
                  .block`nabla times bold(B) &= mu_0 bold(J) + mu_0 epsilon_0 (partial bold(E)) / (partial t)`,
              ),
            ),
          ),
        ),
      ),
    ),
    inline(
      slide(
        { title: 'Physics Equations' },
        blocks(
          inline(
            physEq(
              { label: "Newton's Law of Gravitation", unit: '[N]' },
              inline(unsafeRaw.math.block`F = G (m_1 m_2) / r^2`),
            ),
          ),
          inline(
            physEq(
              { label: 'Schrödinger Equation', derivation: true },
              inline(unsafeRaw.math.block`i ℏ (partial Psi) / (partial t) = hat(H) Psi`),
            ),
          ),
        ),
      ),
    ),
    inline(
      slide(
        { title: 'Chemical Equations' },
        blocks(
          inline(
            chemEq(
              { conditions: inline`Δ, catalyst` },
              inline`2H${sub(inline`2`)} + O${sub(inline`2`)}`,
              inline`2H${sub(inline`2`)}O`,
            ),
          ),
          inline(
            chemEq(
              { arrowType: 'equilibrium', conditions: inline`450°C, 200 atm, Fe` },
              inline`N${sub(inline`2`)} + 3H${sub(inline`2`)}`,
              inline`2NH${sub(inline`3`)}`,
            ),
          ),
        ),
      ),
    ),
    inline(
      slide(
        { title: 'SI Values & Constants' },
        blocks(
          inline`Inline SI values with ${raw('#si-value')}:`,
          inline`Speed of light: ${siValue('299 792 458', 'm·s⁻¹')} ${linebreak()} Planck constant: ${siValue({ uncertainty: '±0.001 × 10⁻³⁴' }, '6.626 × 10⁻³⁴', 'J·s')}
${linebreak()} Boltzmann constant: ${siValue('1.380 649 × 10⁻²³', 'J·K⁻¹')}`,
          inline(
            constantsTable([
              {
                symbol: inline(unsafeRaw.math`c`),
                name: 'Speed of light',
                value: inline(unsafeRaw.math`2.998 times 10^8`),
                unit: 'm·s⁻¹',
              },
              {
                symbol: inline(unsafeRaw.math`h`),
                name: 'Planck constant',
                value: inline(unsafeRaw.math`6.626 times 10^(-34)`),
                unit: 'J·s',
              },
              {
                symbol: inline(unsafeRaw.math`k_B`),
                name: 'Boltzmann constant',
                value: inline(unsafeRaw.math`1.381 times 10^(-23)`),
                unit: 'J·K⁻¹',
              },
              {
                symbol: inline(unsafeRaw.math`N_A`),
                name: 'Avogadro constant',
                value: inline(unsafeRaw.math`6.022 times 10^(23)`),
                unit: 'mol⁻¹',
              },
            ]),
          ),
        ),
      ),
    ),
    inline(
      slide(
        { title: 'Annotated Equations' },
        inline(
          space,
          pinEq(
            inline(unsafeRaw.math.block`F = m dot a`),
            inline`${unsafeRaw.math`F`} — net force applied to the object`,
            inline`${unsafeRaw.math`m`} — mass of the object`,
            inline`${unsafeRaw.math`a`} — resulting acceleration`,
          ),
          space,
        ),
      ),
    ),
    inline(
      slide(
        { title: 'Function Definitions' },
        inline(
          space,
          functionDef(
            'f',
            unsafeRaw.math`RR^n`,
            unsafeRaw.math`RR`,
            inline`${space}${unsafeRaw.math.block`f(bold(x)) = bold(w)^T bold(x) + b`} where ${unsafeRaw.math`bold(w) in RR^n`}
is the weight vector and ${unsafeRaw.math`b in RR`} is the bias.${space}`,
          ),
          space,
        ),
      ),
    ),
    inline(
      slide(
        { title: 'Calculus Display' },
        blocks(
          inline(derivativeDisplay({ order: 2, label: 'Second derivative' }, unsafeRaw.math`f`, unsafeRaw.math`x`)),
          inline(
            integralDisplay(
              {
                var: unsafeRaw.math`x`,
                lower: unsafeRaw.math`a`,
                upper: unsafeRaw.math`b`,
                label: 'Definite integral',
              },
              unsafeRaw.math`f(x)`,
            ),
          ),
          inline(
            limitDisplay(
              { label: 'Fundamental limit' },
              unsafeRaw.math`(sin x) / x`,
              unsafeRaw.math`x`,
              unsafeRaw.math`0`,
            ),
          ),
        ),
      ),
    ),
    inline(
      slide(
        { title: 'Bar Chart Example' },
        inline(
          space,
          barChart({ xLabel: 'Category', yLabel: 'Score (%)' }, [
            { label: 'A', value: 85 },
            { label: 'B', value: 92 },
            { label: 'C', value: 71 },
            { label: 'D', value: 96 },
            { label: 'E', value: 78 },
          ]),
          space,
        ),
      ),
    ),
    inline(sectionSlide(inline`Colour Themes`)),
    inline(
      slide(
        { title: 'Available Themes', outlined: true },
        blocks(
          inline`Pass any theme name to ${raw('clari-docs.with(theme: ...)')}:`,
          inline(
            cols(
              inline(
                space,
                stepList(
                  inline`${raw('"ocean"')} — deep blue (simple default)`,
                  inline`${raw('"midnight"')} — navy (professional default)`,
                  inline`${raw('"forest"')} — forest green`,
                  inline`${raw('"teal"')} — teal (allrounder default)`,
                  inline`${raw('"sunset"')} — deep red`,
                ),
                space,
              ),
              inline(
                space,
                stepList(
                  inline`${raw('"amber"')} — warm amber`,
                  inline`${raw('"rose"')} — rose/magenta`,
                  inline`${raw('"lavender"')} — purple`,
                  inline`${raw('"slate"')} — slate (math default)`,
                  inline`${raw('"charcoal"')} — near-black`,
                ),
                space,
              ),
            ),
          ),
          inline`Or pass any ${raw('rgb(...)')} color directly!`,
        ),
      ),
    ),
    inline(
      endSlide(
        { title: 'Thank You' },
        inline`${space}Questions? ${linebreak()} ${link('https://github.com/Joe02exe/clari-slides')}${space}`,
      ),
    ),
  )
}
