// Converted from test/universe/corpus/bubble.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  datetime,
  define,
  doc,
  external,
  figure,
  image,
  importPackage,
  inline,
  label,
  labelled,
  lorem,
  m,
  pagebreak,
  path,
  raw,
  ref,
  show,
} from '../../../src/index.ts'

export default () => {
  const bubble = external('bubble')
  const bubble_with = define('with')
    .named('affiliation', T.any, null)
    .named('author', T.any, null)
    .named('class', T.any, null)
    .named('date', T.any, null)
    .named('logo', T.any, null)
    .named('other', T.any, null)
    .named('subtitle', T.any, null)
    .named('title', T.any, null)
    .named('year', T.any, null)
    .returns(T.any)
    .external(bubble)
  return doc(
    importPackage('@preview/bubble:0.2.2', [bubble]),
    show(
      bubble_with({
        title: 'Bubble template',
        subtitle: 'Simple and colorful template',
        author: 'hzkonor',
        affiliation: 'University',
        date: datetime.today().display(),
        year: 'Year',
        class: 'Class',
        other: ['Made with Typst', 'https://typst.com'],
        logo: image(path('logo.png')),
      }),
    ),
    m.heading(1, 'Introduction'),
    'This is a simple template that can be used for a report.',
    m.lines(m.heading(1, 'Features'), m.heading(2, 'Colorful items')),
    inline`The main color can be set with the ${raw('main-color')} property, which affects inline code,
lists, links and important items. For example, the words highlight and important are highlighted
!`,
    m.list(m.item(['These bullet']), m.item(['points']), m.item(['are colored'])),
    m.enum(m.item(['It also']), m.item(['works with']), m.item(['numbered lists!'])),
    m.heading(2, 'Customized items'),
    inline`Figures are customized but this is settable in the template file. You can of course reference
them : ${ref(label('ref'))}.`,
    inline(
      labelled(
        figure(
          { caption: inline`Code example` },
          raw({ block: true, lang: 'rust' }, 'fn main() {\n  println!("Hello Typst!");\n}'),
        ),
        label('ref'),
      ),
    ),
    inline(pagebreak()),
    m.heading(1, 'Enjoy !'),
    inline(lorem(100)),
  )
}
