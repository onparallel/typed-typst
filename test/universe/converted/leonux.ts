// Converted from test/universe/corpus/leonux.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  blocks,
  define,
  doc,
  external,
  footnote,
  importPackage,
  inline,
  label,
  linebreak,
  m,
  path,
  ref,
  rgb,
  show,
  space,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const setup = external('setup')
  const titlepage = define('titlepage').returns(T.any).external()
  const content_2 = define('content').named('title', T.any, null).returns(T.any).external()
  const section = define('section').named('title', T.any, null).returns(T.any).external()
  const slide = define('slide').pos('arg1', T.content).named('title', T.any, null).returns(T.any).external()
  const myBlock = define('my-block').pos('arg1', T.content).named('title', T.any, null).returns(T.any).external()
  const later = external('later')
  const references = define('references').pos('arg1', T.content).named('title', T.any, null).returns(T.any).external()
  const setup_with = define('with')
    .named('author', T.any, null)
    .named('date', T.any, null)
    .named('institute', T.any, null)
    .named('primary', T.any, null)
    .named('ratio', T.any, null)
    .named('subtitle', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(setup)
  return doc(
    importPackage('@preview/leonux:1.1.0', [setup, titlepage, content_2, section, slide, myBlock, later, references]),
    show(
      setup_with({
        ratio: '16-9',
        primary: rgb('137C24'),
        title: 'Title of the presentation',
        subtitle: 'Subtitle of the presentation',
        date: 'April 9, 2025',
        author: 'Name',
        institute: 'Institute',
      }),
    ),
    inline(titlepage()),
    inline(content_2({ title: 'Content' })),
    inline(section({ title: 'Probability' })),
    inline(
      slide(
        { title: 'Name of the slide' },
        blocks(
          m.lines(
            m.list(
              m.item(['Some content']),
              m.item([
                'Some citation',
                space,
                ref(label('ref')),
                space,
                'of Leonux',
                space,
                footnote('Leonux - minimalistic typst slides'),
              ]),
            ),
            inline(
              myBlock(
                { title: 'Definition: Law of large numbers' },
                inline`${space}${unsafeRaw.math.block`forall epsilon > 0: lim_(n -> infinity) P(|r_n - p| <= epsilon) = 1`}
Or in words: For large ${unsafeRaw.math`n`} applies: ${unsafeRaw.math`p approx r_n`}.${space}`,
              ),
            ),
          ),
          inline`This text will be shown on the first and second subslide. ${linebreak()} ${show(later)} This
text will only be shown on the second subslide.`,
        ),
      ),
    ),
    inline(references({ title: 'References' }, inline(space, bibliography(path('bibliography.bib')), space))),
  )
}
