// Converted from test/universe/corpus/sci-brain-slides.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  define,
  doc,
  external,
  float,
  importPackage,
  inline,
  let_,
  m,
  pt,
  space,
  text,
  times,
  unsafeRaw,
  v,
} from '../../../src/index.ts'

export default () => {
  const setup = define('setup').named('text-size', T.any, null).named('theme', T.any, null).returns(T.any).external()
  const sizes = external('sizes')
  const layouts = external('layouts')
  const gadgets = external('gadgets')
  const configInfo = external('config-info')
  const titleSlide = define('title-slide').returns(T.any).external()
  const focusSlide = define('focus-slide').pos('arg1', T.content).returns(T.any).external()
  const [deckDecl, deck] = let_(
    'deck',
    setup({
      theme: unsafeRaw.code<any>`sys.inputs.at("theme", default: "academic")`,
      textSize: times(float(unsafeRaw.code<any>`sys.inputs.at("text-size", default: "20")`), pt(1)),
    }),
  )
  return doc(
    importPackage('@preview/sci-brain-slides:0.1.0', [
      setup,
      sizes,
      layouts,
      gadgets,
      configInfo,
      titleSlide,
      focusSlide,
    ]),
    m.lines(
      deckDecl,
      unsafeRaw.markup`#let sizes = deck.sizes`,
      unsafeRaw.markup`#let pal = deck.palette`,
      unsafeRaw.markup`#let (spread, twocol, hero, cards) = deck.layouts`,
      unsafeRaw.markup`#let (figbox,) = deck.gadgets`,
    ),
    unsafeRaw.markup`#show: deck.theme.with(config-info(
  title: [Finding structure in noise],
  subtitle: [What repeated measurements can tell us],
  author: [Your name],
  institution: [Your lab / Your institution],
  date: [Conference · 2026],
))`,
    inline(titleSlide()),
    m.lines(
      m.heading(2, 'How precisely can we measure the signal?'),
      inline(unsafeRaw.code<any>`twocol([
  *One measurement*
  #v(12pt)
  #block(width: 100%, height: 3em)[#align(center + horizon)[$ x_i = mu + epsilon_i $]]
  #v(12pt)
  A fixed signal $mu$, disturbed by zero-mean noise $epsilon_i$.
], [
  *The sample mean*
  #v(12pt)
  #block(width: 100%, height: 3em)[#align(center + horizon)[$ hat(mu) = 1/N sum_(i=1)^N x_i $]]
  #v(12pt)
  How much uncertainty remains after averaging $N$ measurements?
])`),
    ),
    m.lines(
      m.heading(2, 'Averaging reduces independent noise'),
      inline(unsafeRaw.code<any>`hero[
  #text(sizes.xlarge, fill: pal.accent_deep)[$ "SE"(hat(mu)) = sigma / sqrt(N) $]
  #v(20pt)
  Independent samples, each with variance $sigma^2$.
  #v(14pt)
  Their variances add: $"Var"(hat(mu)) = sigma^2 / N$.
]`),
    ),
    m.lines(
      m.heading(2, 'Four times the samples halves the error'),
      inline(unsafeRaw.code<any>`spread(
  figbox([Standard error / $sigma$], [
    #grid(columns: (auto, 1fr, auto), column-gutter: 14pt, row-gutter: 20pt,
      align: horizon,
      [$N = 1$],  rect(width: 100%, height: 26pt, fill: pal.primary, stroke: none), [1.00],
      [$N = 4$],  rect(width: 50%, height: 26pt, fill: pal.primary, stroke: none), [0.50],
      [$N = 16$], rect(width: 25%, height: 26pt, fill: pal.primary, stroke: none), [0.25],
    )
  ], caption: [Model prediction for independent samples.]),
  [Each twofold improvement in precision costs four times as many samples.
   #v(18pt)
   More data helps, with diminishing returns.],
)`),
    ),
    m.lines(
      m.heading(2, 'Shared errors can survive averaging'),
      inline(
        unsafeRaw.code<any>`cards([
  *Independent errors*
  #v(12pt)
  #block(width: 100%, height: 2.5em)[#align(center + horizon)[$ "SE"(hat(mu)) = sigma / sqrt(N) $]]
  #v(12pt)
  Different errors cancel in the average.
], [
  *Identical errors*
  #v(12pt)
  #block(width: 100%, height: 2.5em)[#align(center + horizon)[$ "SE"(hat(mu)) = sigma $]]
  #v(12pt)
  Every sample carries the same error.
])`,
        space,
        v(pt(18)),
        space,
        unsafeRaw.code<any>`text(sizes.caption, fill: pal.text_soft)[Identical errors are the limiting case of perfect positive correlation.]`,
      ),
    ),
    inline(focusSlide(inline`Check the noise before collecting more samples.`)),
  )
}
