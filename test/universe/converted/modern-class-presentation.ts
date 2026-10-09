// Converted from test/universe/corpus/modern-class-presentation.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  blocks,
  define,
  doc,
  external,
  importPackage,
  inches,
  inline,
  m,
  show,
  space,
  unsafeRaw,
  v,
} from '../../../src/index.ts'

export default () => {
  const deck = external('deck')
  const slide = define('slide')
    .pos('arg1', T.content)
    .named('accent', T.any, null)
    .named('eyebrow', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external()
  const sectionSlide = define('section-slide')
    .named('description', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external()
  const columns_2 = define('columns').pos('arg1', T.content).pos('arg2', T.content).returns(T.any).external()
  const callout = define('callout')
    .pos('arg1', T.content)
    .named('accent', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external()
  const teal_2 = external('teal')
  const coral = external('coral')
  const focusSlide = define('focus-slide')
    .pos('arg1', T.content)
    .named('accent', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external()
  const primary = external('primary')
  const deck_with = define('with')
    .named('author', T.any, null)
    .named('date', T.any, null)
    .named('subtitle', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(deck)
  return doc(
    importPackage('@preview/modern-class-presentation:0.1.0', [
      deck,
      slide,
      sectionSlide,
      columns_2,
      callout,
      teal_2,
      coral,
      focusSlide,
      primary,
    ]),
    show(
      deck_with({
        title: 'Introduction to Linear Models',
        subtitle: 'From observations to predictions',
        author: 'Dr. Ada Lovelace',
        date: 'Spring 2026',
      }),
    ),
    inline(
      slide(
        { title: 'Course Overview' },
        blocks(
          m.list(
            m.item(['We will explore linear relationships in empirical datasets.']),
            m.item(['Learn how to fit lines and evaluate prediction accuracy.']),
          ),
        ),
      ),
    ),
    inline(
      sectionSlide({ title: 'The central question', description: 'How can a line help us make useful predictions?' }),
    ),
    inline(
      slide(
        { title: 'Start with a familiar pattern' },
        inline(
          space,
          columns_2(
            blocks(
              m.list(
                m.item(['Study hours and exam scores often move together.']),
                m.item(['We want a model that describes this relationship clearly.']),
                m.item(['The model should also help estimate an unseen score.']),
              ),
            ),
            inline(
              space,
              callout(
                { title: 'Learning objective', accent: teal_2 },
                inline`${space}By the end of class, you will interpret the slope and intercept of a simple linear model.${space}`,
              ),
              space,
            ),
          ),
          space,
        ),
      ),
    ),
    inline(
      slide(
        { title: 'A model is a useful simplification', eyebrow: 'Key idea', accent: coral },
        blocks(
          inline(
            callout(
              { title: 'Linear model', accent: coral },
              inline(space, unsafeRaw.math.block`y = beta_0 + beta_1 x`, space),
            ),
          ),
          inline`${v(inches(0.26))} The intercept ${unsafeRaw.math`beta_0`} is the predicted outcome at ${unsafeRaw.math`x = 0`}.
The slope ${unsafeRaw.math`beta_1`} describes how the prediction changes as ${unsafeRaw.math`x`}
increases by one unit.`,
        ),
      ),
    ),
    inline(focusSlide({ title: 'Core Takeaway', accent: primary }, inline`All models are wrong, but some are useful.`)),
  )
}
