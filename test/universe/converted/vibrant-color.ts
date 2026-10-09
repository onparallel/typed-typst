// Converted from test/universe/corpus/vibrant-color.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  datetime,
  define,
  doc,
  emph,
  highlight,
  importPackage,
  inline,
  link,
  m,
  overline,
  show,
  space,
  strike,
  strong,
  sub,
  super_,
  underline,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const vibrantColor = define('vibrant-color')
    .pos('arg1', T.any)
    .named('authors', T.any, null)
    .named('date', T.any, null)
    .named('description', T.any, null)
    .named('lang', T.any, null)
    .named('sub-authors', T.any, null)
    .named('subject', T.any, null)
    .named('theme', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external()
  const warning = define('warning').pos('arg1', T.any).returns(T.any).external()
  const info = define('info').pos('arg1', T.any).returns(T.any).external()
  const comment = define('comment').pos('arg1', T.any).returns(T.any).external()
  return doc(
    importPackage('@preview/vibrant-color:0.2.1', [vibrantColor, warning, info, comment]),
    show((doc_2, ctx) =>
      vibrantColor(
        {
          theme: 'green-theme',
          title: 'My Report',
          authors: ['DOE John', 'SMITH Alice'],
          lang: 'fr',
          subAuthors: 'TEAM 1',
          description: 'This is an example of how to use this template.',
          date: datetime({ day: 10, month: 3, year: 2025 }),
          subject: 'Mathematics',
        },
        doc_2,
      ),
    ),
    m.heading(1, 'Title 1'),
    m.heading(2, 'Title 2'),
    m.heading(3, 'Title 3'),
    m.heading(4, 'Title 4'),
    inline`You can ${strike(inline`strike text`)}, put it in ${strong(inline`bold`)}, int italic, or ${strong(inline(emph(inline`both`)))}.
Subtext ${sub(inline`too`)}, super ${super_(inline`text`)} also, ${underline(inline`underline`)}
some, ${overline(inline`overline`)} others and ${highlight(inline`highlight`)} in the color
of the theme. Equations are supported too, like ${unsafeRaw.math`a^2 + b^2 = c^2`}.`,
    'Summary is made automatically, bibliography too as long as you specify a bib-yaml file. Customs blocks and a customized code block are available with the functions below.',
    inline(warning('Warning block, to warn about something important.')),
    inline(info('Info block, to inform about something.')),
    inline(comment('Comment block, to add a comment.')),
    inline`Quote, image, table, footnote, custom caption, reference and many more are available and customized
to this template : please refer to the official documentation or ${link('https://github.com/SHAfoin/shafoin-typst-template/blob/main/example/example.typ', inline`${space}this example${space}`)}
of everything in this template for more information.`,
  )
}
