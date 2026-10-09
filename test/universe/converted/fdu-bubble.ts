// Converted from test/universe/corpus/fdu-bubble.typ by scripts/convert-suite.ts — do not edit.
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
  space,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const bubble = external('bubble')
  const codly = define('codly').named('header', T.content, []).returns(T.any).external()
  const bubble_with = define('with')
    .named('affiliation', T.any, null)
    .named('author', T.any, null)
    .named('class', T.any, null)
    .named('date', T.any, null)
    .named('logo', T.any, null)
    .named('main-color', T.any, null)
    .named('other', T.any, null)
    .named('subtitle', T.any, null)
    .named('title', T.any, null)
    .named('year', T.any, null)
    .returns(T.any)
    .external(bubble)
  return doc(
    importPackage('@preview/fdu-bubble:0.1.0', [bubble, codly]),
    show(
      bubble_with({
        title: 'Bubble template',
        subtitle: 'Simple and colorful template',
        author: 'david',
        affiliation: '复旦大学',
        date: datetime.today().display(),
        year: 'Year',
        class: 'Class',
        other: ['Made with Typst', 'https://typst.app'],
        mainColor: '0E419C',
        logo: image(path('pics/logo.png')),
      }),
    ),
    m.heading(1, 'Introduction'),
    'This is a simple template that can be used for a report.',
    inline(
      codly({ header: inline`hello.cpp` }),
      space,
      raw(
        { block: true, lang: 'cpp' },
        '#include <iostream>\nusing namespace std;\n\nint main() {\n  cout << "hello world!";\n}',
      ),
    ),
    m.heading(1, 'Features'),
    m.heading(2, 'Colorful items'),
    inline`The main color can be set with the ${raw('main-color')} property, which affects inline code,
lists, links, and important items. For example, the words highlight and important are highlighted.`,
    m.list(m.item(['These bullet']), m.item(['points']), m.item(['are colored'])),
    m.enum(m.item(['It also']), m.item(['works with']), m.item(['numbered lists!'])),
    m.heading(2, 'Customized items'),
    inline`Figures are customized but this is settable in the template file. You can of course reference
them: ${ref(label('ref'))}.`,
    inline(
      labelled(
        figure(
          { caption: inline`Code example` },
          raw({ block: true, lang: 'rust' }, 'fn main() {\n  println!("Hello Typst!");\n}'),
        ),
        label('ref'),
      ),
    ),
    inline(lorem(300)),
    inline(pagebreak()),
    m.heading(1, 'Enjoy!'),
    inline(lorem(100)),
    m.heading(1, '中文字体测试'),
    '以下是中文测试。',
    inline(unsafeRaw.math.block`(a + b)^2 = a^2 + 2 a b + b^2`),
  )
}
