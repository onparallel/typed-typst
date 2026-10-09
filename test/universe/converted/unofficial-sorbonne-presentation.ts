// Converted from test/universe/corpus/unofficial-sorbonne-presentation.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  blocks,
  datetime,
  define,
  doc,
  external,
  importPackage,
  inline,
  m,
  raw,
  show,
  space,
} from '../../../src/index.ts'

export default () => {
  const template = external('template')
  const slide = define('slide').pos('arg1', T.content).named('title', T.any, null).returns(T.any).external()
  const focusSlide = define('focus-slide').pos('arg1', T.content).returns(T.any).external()
  const endingSlide = define('ending-slide')
    .named('contact', T.any, null)
    .named('subtitle', T.content, [])
    .named('title', T.content, [])
    .returns(T.any)
    .external()
  const template_with = define('with')
    .named('affiliation', T.content, [])
    .named('author', T.content, [])
    .named('date', T.any, null)
    .named('show-outline', T.any, null)
    .named('subtitle', T.content, [])
    .named('title', T.content, [])
    .returns(T.any)
    .external(template)
  return doc(
    importPackage('@preview/unofficial-sorbonne-presentation:0.5.0', [template, slide, focusSlide, endingSlide]),
    show(
      template_with({
        title: inline`Presentation Title`,
        subtitle: inline`Subtitle or Context`,
        author: inline`Your Name`,
        affiliation: inline`Your Laboratory / Department`,
        date: datetime.today().display(),
        showOutline: true,
      }),
    ),
    m.heading(1, 'Introduction'),
    inline(
      slide(
        { title: 'Welcome' },
        blocks(
          'This is a sample presentation using the Example / Laboratory / AP-HP theme.',
          m.list(
            m.item(['Respects institutional visual identities.']),
            m.item([
              'Built on top of',
              space,
              raw('presentate'),
              space,
              'and',
              space,
              raw('navigator'),
              space,
              'packages.',
            ]),
            m.item(['Supports Dark Mode (', raw('dark-mode: true'), space, 'in configuration).']),
          ),
        ),
      ),
    ),
    m.heading(1, 'First Part'),
    m.heading(2, 'Key Concepts'),
    inline(
      slide(
        blocks(
          m.lines(
            'You can use numbered and bulleted lists:',
            m.enum(
              m.item(['First important point']),
              m.item(m.lines('Second crucial point', m.list(m.item(['Technical detail'])))),
            ),
          ),
        ),
      ),
    ),
    inline(
      focusSlide(inline`${space}"Focus" slides are designed for impactful messages or major transitions.${space}`),
    ),
    m.heading(1, 'Conclusion'),
    inline(
      endingSlide({
        title: inline`Thank you for your attention!`,
        subtitle: inline`Any questions?`,
        contact: ['first.name@sorbonne-universite.fr', 'github.com/username'],
      }),
    ),
  )
}
