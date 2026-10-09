// Converted from test/universe/corpus/tud-corporate-design-slides.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  align,
  blocks,
  define,
  doc,
  em,
  emph,
  external,
  figure,
  horizon,
  importPackage,
  inline,
  lorem,
  m,
  pct,
  rect,
  set,
  show,
  strong,
  text,
  white,
} from '../../../src/index.ts'

export default () => {
  const tudSlides = external('tud-slides')
  const titleSlide = external('title-slide')
  const slide = define('slide').pos('arg1', T.content).returns(T.any).external()
  const tudGradient = external('tud-gradient')
  const sectionSlide = define('section-slide')
    .named('subtitle', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external()
  const tudSlides_with = define('with')
    .named('author', T.any, null)
    .named('lang', T.any, null)
    .named('location-occasion', T.any, null)
    .named('organizational-unit', T.any, null)
    .named('subtitle', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(tudSlides)
  return doc(
    importPackage('@preview/tud-corporate-design-slides:0.2.0', [
      tudSlides,
      titleSlide,
      slide,
      tudGradient,
      sectionSlide,
    ]),
    show(
      tudSlides_with({
        title: 'Presentation templates',
        subtitle: 'Corporate design rules - Guidelines for using the template and ensuring accessibility',
        author: 'Firstname Lastname',
        organizationalUnit: 'Directorate 7 - Strategy and Communication',
        locationOccasion: 'Location or occasion of the presentation',
        lang: 'en',
      }),
    ),
    inline(titleSlide),
    inline(
      slide(blocks(m.heading(1, 'Slide title'), m.list(m.item([lorem(3)]), m.item([lorem(5)]), m.item([lorem(2)])))),
    ),
    inline(slide(blocks(m.heading(1, 'Slide title'), inline(lorem(30))))),
    inline(
      slide(
        blocks(
          m.heading(1, emph(inline`Slide title`), ' ', strong(inline`for`), ' ', 'a slide with a figure'),
          inline(
            figure(
              { caption: 'Figure caption' },
              rect(
                { width: pct(80), height: pct(80), radius: em(0.25), fill: tudGradient },
                blocks(
                  m.lines(set(text, { fill: white, weight: 'bold' }), inline(align(horizon, inline`"Hello, world!"`))),
                ),
              ),
            ),
          ),
        ),
      ),
    ),
    inline(sectionSlide({ title: 'Section title', subtitle: 'Section subtitle' })),
    inline(
      slide(
        blocks(
          m.heading(1, 'Slide title'),
          m.list(m.item([lorem(4)]), m.item([emph(inline(lorem(2)))]), m.item([lorem(3)])),
        ),
      ),
    ),
  )
}
