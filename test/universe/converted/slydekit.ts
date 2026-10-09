// Converted from test/universe/corpus/slydekit.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  align,
  bibliography,
  blocks,
  bottom,
  calc,
  center,
  cm,
  codeBlock,
  context,
  data,
  define,
  dict,
  doc,
  em,
  external,
  fr,
  grid,
  heading,
  image,
  importPackage,
  inline,
  label,
  labelled,
  let_,
  link,
  lorem,
  m,
  path,
  pct,
  place,
  raw,
  ref,
  right,
  show,
  space,
  sym,
  table,
  times,
  top,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const cetz = external('cetz')
  const lq = external('lq')
  const slydekit = external('slydekit')
  const titleSlide = external('title-slide')
  const tableofcontents = external('tableofcontents')
  const pause = external('pause')
  const uncover = define('uncover')
    .pos('arg1', T.content)
    .named('from', T.any, null)
    .named('to', T.any, null)
    .returns(T.any)
    .external()
  const only = define('only').pos('arg1', T.any).pos('arg2', T.content).returns(T.any).external()
  const boxeq = external('boxeq')
  const itemByItem = define('item-by-item').pos('arg1', T.content).returns(T.any).external()
  const meanwhile = external('meanwhile')
  const track = define('track').pos('arg1', T.content).returns(T.any).external()
  const alternatives = define('alternatives')
    .pos('arg1', T.content)
    .pos('arg2', T.content)
    .pos('arg3', T.content)
    .returns(T.any)
    .external()
  const renderAnimation = define('render-animation')
    .rest('args', T.any)
    .named('from', T.any, null)
    .returns(T.any)
    .external()
  const codeReveal = define('code-reveal')
    .pos('arg1', T.content)
    .named('hide-lines', T.any, null)
    .named('highlight-lines', T.any, null)
    .returns(T.any)
    .external()
  const slide = define('slide')
    .pos('arg1', T.any)
    .pos('arg2', T.content)
    .named('steps', T.any, null)
    .returns(T.any)
    .external()
  const drawReveal = define('draw-reveal').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const animLabel = define('anim-label').pos('arg1', T.any).named('step', T.any, null).returns(T.any).external()
  const linkBox = define('link-box').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const infoBox = define('info-box').pos('arg1', T.content).returns(T.any).external()
  const tipBox = define('tip-box').pos('arg1', T.content).returns(T.any).external()
  const warningBox = define('warning-box').pos('arg1', T.content).returns(T.any).external()
  const importantBox = define('important-box').pos('arg1', T.content).returns(T.any).external()
  const proofBox = define('proof-box').pos('arg1', T.content).returns(T.any).external()
  const questionBox = define('question-box').pos('arg1', T.content).returns(T.any).external()
  const codeBox = define('code-box').pos('arg1', T.content).returns(T.any).external()
  const focusSlide = define('focus-slide').pos('arg1', T.content).returns(T.any).external()
  const appendix = external('appendix')
  const cell = external('cell')
  const slydekit_with = define('with')
    .named('author', T.any, null)
    .named('contact', T.any, null)
    .named('date', T.any, null)
    .named('institution', T.any, null)
    .named('lang', T.any, null)
    .named('slide-logo', T.any, null)
    .named('subtitle', T.any, null)
    .named('title', T.any, null)
    .named('title-logo', T.any, null)
    .returns(T.any)
    .external(slydekit)
  const cetz_canvas = define('canvas').pos('arg1', T.any).returns(T.any).external(cetz)
  const lq_diagram = define('diagram')
    .pos('arg1', T.any)
    .pos('arg2', T.any)
    .named('title', T.content, [])
    .named('width', T.any, null)
    .named('xlabel', T.any, null)
    .named('ylabel', T.any, null)
    .returns(T.any)
    .external(lq)
  const lq_plot = define('plot')
    .pos('arg1', T.any)
    .pos('arg2', T.any)
    .named('label', T.content, [])
    .named('mark', T.any, null)
    .returns(T.any)
    .external(lq)
  const [derivationDecl, derivation] = let_(
    'derivation',
    inline`${space}We start from the identity. ${pause} Apply the substitution ${unsafeRaw.math`u = x^2`}.
${pause} Integrate term by term. ${pause} And simplify the result.${space}`,
  )
  const [xsDecl, xs] = let_('xs', data([0, 1, 2, 3, 4]))
  return doc(
    m.lines(
      importPackage('@preview/slydekit:0.5.0', [
        slydekit,
        titleSlide,
        tableofcontents,
        pause,
        uncover,
        only,
        boxeq,
        itemByItem,
        meanwhile,
        track,
        alternatives,
        renderAnimation,
        codeReveal,
        slide,
        drawReveal,
        animLabel,
        linkBox,
        infoBox,
        tipBox,
        warningBox,
        importantBox,
        proofBox,
        questionBox,
        codeBox,
        focusSlide,
        appendix,
        cell,
      ]),
      importPackage('@preview/cetz:0.5.2', cetz),
      unsafeRaw.markup`#import "@preview/fletcher:0.5.8" as fletcher: diagram, node, edge`,
      importPackage('@preview/lilaq:0.6.0', lq),
    ),
    show(
      slydekit_with({
        title: 'Slydekit',
        subtitle: 'An example of a presentation template using Typst',
        author: 'John Doe',
        date: '2024-06-01',
        institution: 'Typst university',
        contact: 'john.doe@univ.typst.fr',
        lang: 'en',
        titleLogo: [image({ height: cm(2.5) }, path('images/slydekit-full.svg'))],
        slideLogo: image({ height: cm(1.25) }, path('images/slydekit-mini.svg')),
      }),
    ),
    inline(titleSlide),
    inline(tableofcontents),
    m.heading(1, 'Animations'),
    m.heading(2, 'Pause, uncover and only'),
    inline`Introduction, ${pause} always visible.`,
    inline(uncover({ from: 3, to: 4 }, inline`A point that is only visible on slides 3 and 4.`)),
    inline(only(5, inline`A final note that appears, without reserving space, only at the very end.`)),
    inline(unsafeRaw.math.block`y = f(x) #uncover(from: 3, $= x^2 + 2x + 1$)`),
    inline(unsafeRaw.math.block`#boxeq($E = m c^2$)`),
    m.heading(2, 'Item-by-item'),
    inline(
      itemByItem(blocks(m.list(m.item(['First argument']), m.item(['Second argument']), m.item(['Third argument'])))),
    ),
    m.heading(2, 'Meanwhile'),
    'First',
    inline(pause),
    'Second',
    inline(meanwhile),
    'Third',
    inline(pause),
    'Fourth',
    m.heading(2, 'Track'),
    inline(
      grid(
        { columns: [fr(1), fr(1)], align: top, columnGutter: em(1) },
        track(blocks(inline`First point ${pause}`, inline`Second point ${pause}`, 'Third point')),
        track(blocks(inline`First parallel ${pause}`, 'Second parallel')),
      ),
    ),
    m.heading(2, 'Alternatives'),
    inline`${alternatives(inline`Ann`, inline`Bob`, inline`Christopher`)} likes ${alternatives(inline`chocolate`, inline`strawberry`, inline`vanilla`)}
ice cream.`,
    m.heading(2, 'Reusable animations - Main animation'),
    derivationDecl,
    inline(renderAnimation(1, 2, derivation)),
    m.heading(2, 'Reusable animations - A side note'),
    inline`The chain rule states that ${unsafeRaw.math`(f compose g)' = (f' compose g) dot g'`}.`,
    m.heading(2, 'Reusable animations - Back to main animation'),
    inline(renderAnimation({ from: 3 }, derivation)),
    m.heading(2, 'Code animation'),
    inline(
      codeReveal(
        { highlightLines: dict({ '2': 2, '4': 3 }), hideLines: dict({ '3': 2, '4': 3 }) },
        inline(
          space,
          raw(
            { block: true, lang: 'python' },
            'def fib(n):\n    if n <= 1:\n        return n\n    return fib(n-1) + fib(n-2)',
          ),
          space,
        ),
      ),
    ),
    m.heading(1, 'Drawings animation'),
    inline(
      slide(
        { steps: 5 },
        'CeTZ integration',
        inline(
          space,
          context((ctx) =>
            codeBlock(
              [],
              align(
                center,
                inline(
                  space,
                  cetz_canvas(unsafeRaw.code<any>`{
        import cetz.draw: *
        let reveal-cetz = draw-reveal.with(hide-fn: cetz.draw.hide.with(bounds: true))

        // Always visible
        circle((0, 0))

        // Visible only at step 2
        reveal-cetz(2, line((0, 0), (2, 1)))

        // Visible from step 3, emulate uncover(from: 3)
        reveal-cetz(from: 3, rect((3, 0), (4, 1)))

        // Visible between steps 3 and 5 inclusive, emulate uncover(from: 3, to: 5)
        reveal-cetz(from: 3, to: 5, {
          circle((5, 0), radius: 0.5, fill: blue)
          circle((6.5, 0), radius: 0.5, fill: green)
          }
        )

        // Visible only at steps 2 and 4
        reveal-cetz(2, 4, line((0, 2), (2, 3)))
      }`),
                  space,
                ),
              ),
            ),
          ),
          space,
        ),
      ),
    ),
    inline(
      slide(
        { steps: 2 },
        'Fletcher integration',
        inline(
          space,
          unsafeRaw.code<any>`context {
    let reveal-fletcher = draw-reveal.with(hide-fn: fletcher.hide.with(bounds: true))
    diagram(
      node-stroke: .1em,
      node-fill: gradient.radial(blue.lighten(80%), blue, center: (30%, 20%), radius: 80%),
      spacing: 4em,
      edge((-1,0), "r", "-|>", \`open(path)\`, label-pos: 0, label-side: center),
      node((0,0), \`reading\`, radius: 2em),
      edge((0,0), (0,0), \`read()\`, "--|>", bend: 130deg),

      reveal-fletcher(from: 2, edge(\`read()\`, "-|>")),

      node((1,0), \`eof\`, radius: 2em),
      reveal-fletcher(from: 2, edge(\`close()\`, "-|>")),
      node((2,0), \`closed\`, radius: 2em, extrude: (-2.5, 0)),
      edge((0,0), (2,0), \`close()\`, "-|>", bend: -40deg),
    )
  }`,
          space,
        ),
      ),
    ),
    inline(
      slide(
        { steps: 2 },
        'Lilaq integration',
        blocks(
          xsDecl,
          inline(
            align(
              center,
              inline(
                context((ctx_3) =>
                  codeBlock(
                    [],
                    lq_diagram(
                      {
                        title: inline`Precious data`,
                        xlabel: unsafeRaw.math`x`,
                        ylabel: unsafeRaw.math`y`,
                        width: pct(80),
                      },
                      lq_plot({ mark: 's', label: inline`A` }, xs, [3, 5, 4, 2, 3]),
                      drawReveal(
                        2,
                        lq_plot({ mark: 'o', label: inline`B` }, xs, (x) => add(times(2, calc.cos(x)), 3)),
                      ),
                    ),
                  ),
                ),
              ),
            ),
          ),
        ),
      ),
    ),
    m.heading(1, 'Links and references'),
    m.heading(2, 'Animated slide labels'),
    inline`Pause the animation at this point ${pause} and assign a label to the current sub-slide.`,
    inline(animLabel({ step: 1 }, label('my-label'))),
    m.heading(2),
    inline`Come back to the labeled sub-slide ${raw('#anim-label(<my-label>, step: 1)')} using this ${link(label('my-label'), 'link')}.`,
    inline(labelled(heading({ depth: 2 }, inline('References', ' ', sym.dash.en, ' ', 'Root slide')), label('s:root'))),
    inline(lorem(10), ref(label('knuth'))),
    m.list(
      m.item(
        m.lines('First point', m.list(m.item(m.lines('A nested point', m.list(m.item(['A deeply nested point'])))))),
      ),
    ),
    m.enum(m.item(['First point']), m.item(['Second point'])),
    inline`Slide ${ref(label('s:root'))}, slide ${ref(label('s:target'))}`,
    inline(lorem(10)),
    inline(place({ dy: em(1) }, add(bottom, right), linkBox(label('s:target'), 'Go to target slide'))),
    inline(
      labelled(heading({ depth: 2 }, inline('References', ' ', sym.dash.en, ' ', 'Target slide')), label('s:target')),
    ),
    inline(lorem(25)),
    inline(place(add(right, bottom), linkBox(label('s:root'), 'Go to root slide'))),
    m.heading(1, 'Callout boxes'),
    m.heading(2, 'Information, tip and warning boxes'),
    inline(infoBox(inline(space, lorem(10), space))),
    inline(tipBox(inline(space, lorem(10), space))),
    inline(warningBox(inline(space, lorem(10), space))),
    m.heading(2, 'Important and proof boxes'),
    inline(importantBox(inline(space, lorem(10), space))),
    inline(proofBox(inline(space, lorem(10), space))),
    m.heading(2, 'Question and code boxes'),
    inline(questionBox(inline(space, lorem(10), space))),
    inline(codeBox(inline(space, lorem(10), space))),
    inline(labelled(heading({ depth: 2 }, inline('Bibliography')), label('hide-toc'))),
    inline(bibliography(path('ref.bib'))),
    inline(focusSlide(inline`This is a focus slide!`)),
    show(appendix),
    inline(tableofcontents),
    m.heading(1, 'Appendix'),
    inline(labelled(heading({ depth: 2 }, inline('Table')), label('s:table'))),
    inline(
      align(
        center,
        inline(
          space,
          table(
            { columns: 3 },
            table.header(inline`Substance`, inline`Subcritical °C`, inline`Supercritical °C`),
            inline`Hydrochloric Acid`,
            inline`12.0`,
            inline`92.1`,
            inline`Sodium Myreth Sulfate`,
            inline`16.6`,
            inline`104`,
            inline`Potassium Hydroxide`,
            table.cell({ colspan: 2 }, inline`24.7`),
          ),
          space,
        ),
      ),
    ),
    inline(lorem(25)),
    m.heading(2, 'Second appendix'),
    inline(lorem(25)),
    m.heading(1, 'Another appendix'),
    m.heading(2, lorem(2)),
    inline(lorem(25)),
    inline(titleSlide),
  )
}
