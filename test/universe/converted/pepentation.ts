// Converted from test/universe/corpus/pepentation.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  blocks,
  define,
  doc,
  em,
  external,
  importPackage,
  inline,
  lorem,
  m,
  raw,
  show,
  strong,
  text,
} from '../../../src/index.ts'

export default () => {
  const setupPresentation = external('setup-presentation')
  const sectionSlide = define('section-slide')
    .named('subtitle', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external()
  const definition = define('definition').pos('arg1', T.content).returns(T.any).external()
  const warning = define('warning').pos('arg1', T.content).returns(T.any).external()
  const remark = define('remark').pos('arg1', T.content).returns(T.any).external()
  const hint = define('hint').pos('arg1', T.content).returns(T.any).external()
  const setupPresentation_with = define('with')
    .named('footer', T.any, null)
    .named('header', T.any, null)
    .named('locale', T.any, null)
    .named('table-of-contents', T.any, null)
    .named('title-slide', T.any, null)
    .returns(T.any)
    .external(setupPresentation)
  return doc(
    importPackage('@preview/pepentation:0.3.0', [setupPresentation, sectionSlide, definition, warning, remark, hint]),
    show(
      setupPresentation_with({
        titleSlide: {
          enable: true,
          title: 'Long version of the title',
          authors: ['LastName1 FirstName1', 'LastName2 FirstName2'],
          institute: 'University of SWAG',
        },
        footer: { enable: true, title: 'Title', institute: 'USWAG', authors: ['Author1', 'Author2', 'Author3'] },
        tableOfContents: 'detailed',
        header: true,
        locale: 'EN',
      }),
    ),
    m.heading(1, 'Section Name'),
    m.heading(2, 'Slide Title'),
    'This is a slide with a title',
    inline(lorem(100)),
    m.heading(2),
    'This is slide with no title',
    inline(lorem(100)),
    inline(sectionSlide({ title: 'Math', subtitle: 'Simple example of math presentation' })),
    m.heading(2, 'Greatest common divisor'),
    inline(
      text(
        { size: em(0.95) },
        blocks(
          inline(
            definition(
              blocks(
                inline(strong(inline`Definition – Euclid's algorithm`)),
                inline`The function ${raw('gcd(a, b)')} returns the greatest common divisor of two integers.`,
              ),
            ),
          ),
          inline(
            warning(
              blocks(
                inline(strong(inline`Warning – undefined case`)),
                inline`${raw('gcd(a, 0)')} is fine, but ${raw('gcd(0, 0)')} is mathematically undefined. Your implementation
should reject or handle this explicitly`,
              ),
            ),
          ),
          inline(
            remark(
              blocks(
                inline(strong(inline`Remark – symmetry property`)),
                inline`${raw('gcd(a, b)')} should always equal ${raw('gcd(b, a)')}. You can use this to test your implementation`,
              ),
            ),
          ),
          inline(
            hint(
              blocks(
                inline(strong(inline`Hint – simplifying fractions with gcd`)),
                inline`Once ${raw('gcd(a,b)')} works, you can reduce fractions to lowest terms`,
              ),
            ),
          ),
        ),
      ),
    ),
  )
}
