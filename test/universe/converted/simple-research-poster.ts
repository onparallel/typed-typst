// Converted from test/universe/corpus/simple-research-poster.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  call,
  define,
  doc,
  external,
  grid,
  image,
  importFile,
  importPackage,
  inline,
  let_,
  m,
  pad,
  page,
  par,
  path,
  pct,
  pt,
  set,
  show,
  space,
  strong,
  sym,
  text,
} from '../../../src/index.ts'

export default () => {
  const poster = external('poster')
  const posterSection = external('poster-section')
  const baseColors = external('base-colors')
  const boldColor = external('bold-color')
  const section1 = external('section1')
  const section2 = external('section2')
  const section3 = external('section3')
  const section4 = external('section4')
  const section5 = external('section5')
  const section6 = external('section6')
  const section7 = external('section7')
  const acknowledgements = external('acknowledgements')
  const references = external('references')
  const poster_with = define('with')
    .named('author', T.any, null)
    .named('base-colors', T.any, null)
    .named('logo', T.any, null)
    .named('subtitle', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(poster)
  const posterSection_with = define('with')
    .named('base-colors', T.any, null)
    .named('title-style', T.any, null)
    .returns(T.any)
    .external(posterSection)
  const baseColors_bgcolor2 = external('bgcolor2', baseColors)
  const [coloredPosterSectionDecl, coloredPosterSection] = let_(
    'colored-poster-section',
    posterSection_with({
      baseColors: baseColors,
      titleStyle: text.with({ size: pt(30), weight: 'extrabold', fill: baseColors_bgcolor2 }),
    }),
  )
  return doc(
    m.lines(
      importPackage('@preview/simple-research-poster:0.2.0', [poster, posterSection]),
      importFile('colors.typ', [baseColors, boldColor]),
      importFile('sections.typ', [
        section1,
        section2,
        section3,
        section4,
        section5,
        section6,
        section7,
        acknowledgements,
        references,
      ]),
    ),
    set(page, { paper: 'a1', flipped: true, margin: pct(0) }),
    m.lines(
      show(
        poster_with({
          title: text(
            { size: pt(58), weight: 'extrabold' },
            inline`Applied Cryonics: How I Slept Through the 21st Century`,
          ),
          author: text({ size: pt(40) }, inline`Philip J. Fry and Turanga Leela --- Advisor: Bender B. Rodriguez`),
          subtitle: text({ size: pt(28) }, inline`College of New New York`),
          logo: image({ height: pct(120) }, path('assets/logo.png')),
          baseColors: baseColors,
        }),
      ),
      coloredPosterSectionDecl,
    ),
    m.lines(set(text, { size: pt(17) }), set(par, { justify: true }), show(strong, set(text, { fill: boldColor }))),
    inline(
      pad(
        { top: pt(20), x: pt(70) },
        grid(
          { columns: 3, inset: pt(35), gutter: pt(30) },
          inline(
            space,
            call(coloredPosterSection, inline`Section 1`, inline(section1)),
            space,
            call(coloredPosterSection, { fill: true }, inline`Section 2`, inline(section2)),
            space,
          ),
          inline(
            space,
            call(coloredPosterSection, inline`Section 3`, inline(section3)),
            space,
            call(coloredPosterSection, { fill: true }, inline`Section 4`, inline(section4)),
            space,
            call(coloredPosterSection, inline`Section 5`, inline(section5)),
            space,
          ),
          inline(
            space,
            call(coloredPosterSection, { fill: true }, inline`Section 6`, inline(section6)),
            space,
            call(coloredPosterSection, inline`Section 7`, inline(section7)),
            space,
            call(coloredPosterSection, { fill: true }, inline`Acknowledgements`, inline(acknowledgements)),
            space,
            call(coloredPosterSection, inline`References`, inline(references)),
            space,
          ),
        ),
      ),
    ),
  )
}
