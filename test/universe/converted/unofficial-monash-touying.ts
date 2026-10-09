// Converted from test/universe/corpus/unofficial-monash-touying.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  align,
  block,
  blocks,
  center,
  cm,
  datetime,
  define,
  doc,
  em,
  external,
  fr,
  grid,
  horizon,
  image,
  importPackage,
  inline,
  let_,
  m,
  path,
  pct,
  raw,
  set,
  show,
  space,
  text,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const monashTheme = external('monash-theme')
  const configInfo = define('config-info')
    .named('author', T.content, [])
    .named('date', T.any, null)
    .named('institution', T.content, [])
    .named('short-title', T.content, [])
    .named('subtitle', T.content, [])
    .named('title', T.content, [])
    .returns(T.any)
    .external()
  const showMonashFrames = external('show-monash-frames')
  const titleSlide = define('title-slide').returns(T.any).external()
  const monashBlueWash = external('monash-blue-wash')
  const monashOrange = external('monash-orange')
  const monashFrameRule = external('monash-frame-rule')
  const monashBlue = external('monash-blue')
  const definition = define('definition').pos('arg1', T.content).pos('arg2', T.content).returns(T.any).external()
  const theorem = define('theorem').pos('arg1', T.content).pos('arg2', T.content).returns(T.any).external()
  const proof = define('proof').pos('arg1', T.content).pos('arg2', T.content).returns(T.any).external()
  const note = define('note').pos('arg1', T.content).pos('arg2', T.content).returns(T.any).external()
  const warning = define('warning').pos('arg1', T.content).pos('arg2', T.content).returns(T.any).external()
  const slide = define('slide').pos('arg1', T.content).returns(T.any).external()
  const monashTheme_with = define('with')
    .pos('arg1', T.any)
    .named('titlegraphic', T.any, null)
    .returns(T.any)
    .external(monashTheme)
  const [monashTitlegraphicDecl, monashTitlegraphic] = let_(
    'monash-titlegraphic',
    image({ width: pct(100), height: pct(100), fit: 'cover' }, path('assets/monash-presentation/background/bg-02.png')),
  )
  return doc(
    importPackage('@preview/unofficial-monash-touying:0.1.2', [
      monashTheme,
      configInfo,
      showMonashFrames,
      titleSlide,
      monashBlueWash,
      monashOrange,
      monashFrameRule,
      monashBlue,
      definition,
      theorem,
      proof,
      note,
      warning,
      slide,
    ]),
    set(text, { font: ['Arial', 'New Computer Modern'] }),
    monashTitlegraphicDecl,
    show(
      monashTheme_with(
        { titlegraphic: monashTitlegraphic },
        configInfo({
          title: inline`Unofficial Monash Touying`,
          shortTitle: inline`Monash Touying`,
          subtitle: inline`Academic presentation starter`,
          author: inline`Your Name`,
          institution: inline`Monash University`,
          date: datetime.today(),
        }),
      ),
    ),
    show(showMonashFrames),
    inline(titleSlide()),
    m.heading(1, 'Overview'),
    m.heading(2, 'Why This Starter'),
    inline`This package wraps Touying's authoring model. Use headings for sections and slides, and use
the exported Monash-inspired theme and academic frame environments.`,
    m.list(
      m.item(['Use headings to create sections and slides.']),
      m.item(['Use', space, raw('#slide'), space, 'when you want manual slide control.']),
      m.item(['Use presentation features such as', space, raw('#pause'), space, 'directly.']),
      m.item([
        'Use',
        space,
        raw('toc: false'),
        space,
        'in',
        space,
        raw('monash-theme.with(...)'),
        space,
        'if you do not want the automatic outline after the title slide.',
      ]),
    ),
    m.heading(2, 'A Typical Research Slide'),
    'Use compact claims, short evidence, and one visual emphasis point per slide.',
    inline(
      grid(
        { columns: [fr(1), fr(1)], gutter: cm(1) },
        blocks(
          m.list(m.item(['State the problem.']), m.item(['Name the method.']), m.item(['Report the key result.'])),
        ),
        inline(
          space,
          block(
            {
              width: pct(100),
              height: em(4.6),
              fill: monashBlueWash,
              stroke: { left: { paint: monashOrange, thickness: monashFrameRule } },
              inset: { x: em(0.75), y: em(0.6) },
            },
            inline(
              space,
              align(
                add(center, horizon),
                inline(
                  space,
                  text(
                    { fill: monashBlue, weight: 'bold' },
                    inline`${space}Replace this panel with a figure, table, or quote.${space}`,
                  ),
                  space,
                ),
              ),
              space,
            ),
          ),
          space,
        ),
      ),
    ),
    m.heading(1, 'Academic Frames'),
    m.heading(2, 'Theorem-Like Content'),
    inline(
      definition(
        inline`Loss Function`,
        inline`${space}A loss function maps a prediction and target to a scalar penalty: ${unsafeRaw.math`"loss": cal(Y) times cal(Y) -> RR`}.${space}`,
      ),
    ),
    inline(
      theorem(
        inline`Convergence Sketch`,
        inline`${space}If ${unsafeRaw.math`f`} is convex and ${unsafeRaw.math`L`}-smooth, gradient descent
with a suitable step size satisfies ${unsafeRaw.math`f(x_t) - f(x^*) = O(1 / t)`}.${space}`,
      ),
    ),
    inline(proof(inline`Sketch`, inline`${space}Apply the theorem assumptions and simplify.${space}`)),
    m.heading(2, 'Notes and Warnings'),
    inline(
      note(
        inline`Usage`,
        inline`${space}Use notes for implementation details, assumptions, or presentation reminders.${space}`,
      ),
    ),
    inline(
      warning(
        inline`Scope`,
        inline`${space}Keep slide claims narrow enough that the supporting evidence fits on the same slide
or the next one.${space}`,
      ),
    ),
    m.heading(1, 'Code'),
    m.heading(2, 'Code'),
    inline(raw({ block: true, lang: 'python' }, 'def mse(y, pred):\n    return ((y - pred) ** 2).mean()')),
    inline`Inline code such as ${raw('#slide')} is styled consistently with fenced code blocks.`,
    m.heading(2, 'Closing Checklist'),
    m.list(
      m.item(['Replace the title metadata.']),
      m.item(['Add or remove sections.']),
      m.item(['Swap in approved title graphics and logos when appropriate.']),
      m.item(['Run', space, raw('typst compile main.typ'), space, 'before presenting.']),
    ),
    m.heading(2, 'Closing'),
    inline(
      slide(
        inline(
          space,
          align(
            add(center, horizon),
            inline(space, text({ size: em(1.6), fill: monashBlue, weight: 'bold' }, inline`Thank you`), space),
          ),
          space,
        ),
      ),
    ),
  )
}
