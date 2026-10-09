// Converted from test/universe/corpus/rectangles-polylux.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  align,
  aqua,
  block,
  blocks,
  center,
  define,
  doc,
  external,
  figure,
  importPackage,
  inline,
  lorem,
  m,
  pct,
  pt,
  raw,
  set,
  show,
  space,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const rectanglesTheme = external('rectangles-theme')
  const titleSlide = define('title-slide').returns(T.any).external()
  const outlineSlide = define('outline-slide').named('highlight-section', T.any, null).returns(T.any).external()
  const slide = define('slide')
    .pos('arg1', T.content)
    .named('new-section', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external()
  const rectanglesTheme_with = define('with')
    .named('aspect-ratio', T.any, null)
    .named('authors', T.any, null)
    .named('date', T.any, null)
    .named('subtitle', T.any, null)
    .named('text-size', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(rectanglesTheme)
  return doc(
    importPackage('@preview/rectangles-polylux:0.1.0', [rectanglesTheme, titleSlide, outlineSlide, slide]),
    show(
      rectanglesTheme_with({
        aspectRatio: '16-9',
        title: 'Title',
        subtitle: 'Subtitle',
        authors: ['Me', 'Myself', 'And I'],
        date: '19 January 2038',
        textSize: pt(20),
      }),
    ),
    inline(titleSlide()),
    inline(outlineSlide({ highlightSection: 'Introduction' })),
    inline(
      slide(
        { title: 'Introduction', newSection: 'Introduction' },
        blocks(
          m.list(
            m.item(['Here are some bullet points.']),
            m.item(['They also use the accent color.']),
            m.item([lorem(5)]),
          ),
        ),
      ),
    ),
    inline(
      slide(
        { title: 'Figures', newSection: 'Examples' },
        blocks(
          m.lines(
            set(align, { alignment: center }),
            inline(
              figure(
                { supplement: inline`Figure`, caption: inline`Here, we have a beautiful image!` },
                block(
                  { fill: aqua, width: pct(55), height: pct(70) },
                  inline`${space}Replace me with an ${raw({ lang: 'typst' }, '#image()')}!${space}`,
                ),
              ),
            ),
          ),
        ),
      ),
    ),
    inline(
      slide(
        { title: 'Math' },
        inline`${space}${unsafeRaw.math`e^(i pi) = -1`}, where ${unsafeRaw.math.block`e^x = exp(x)
    = sum_(n=0)^infinity (x^n)/(n!)
    = lim_(n arrow infinity) (1 + x/n)^n.`}${space}`,
      ),
    ),
    inline(
      slide(
        { title: 'Listings' },
        blocks(
          inline`Here is an implementation of ${raw('fibonacci')} in Python:`,
          inline(
            raw(
              { block: true, lang: 'python' },
              'def fibonacci(n):\n  if n < 0:\n    return None\n  if n == 0 or n == 1:\n    return n\n  return fibonacci(n-1) + fibonacci(n-2)',
            ),
          ),
        ),
      ),
    ),
  )
}
