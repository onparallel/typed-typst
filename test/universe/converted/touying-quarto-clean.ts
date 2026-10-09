// Converted from test/universe/corpus/touying-quarto-clean.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  define,
  doc,
  em,
  heading,
  importPackage,
  inline,
  label,
  labelled,
  link,
  m,
  raw,
  rgb,
  space,
  sym,
  v,
} from '../../../src/index.ts'

export default () => {
  const titleSlide = define('title-slide')
    .named('authors', T.any, null)
    .named('date', T.content, [])
    .named('subtitle', T.content, [])
    .named('title', T.content, [])
    .returns(T.any)
    .external()
  const alert = define('alert').pos('arg1', T.content).returns(T.any).external()
  const fg = define('fg').pos('arg1', T.content).named('fill', T.any, null).returns(T.any).external()
  const bg = define('bg').pos('arg1', T.content).returns(T.any).external()
  const button = define('button').pos('arg1', T.content).returns(T.any).external()
  return doc(
    importPackage('@preview/touying-quarto-clean:0.2.1', [titleSlide, alert, fg, bg, button]),
    inline(
      titleSlide({
        title: inline`A title`,
        subtitle: inline`A subtitle`,
        authors: [
          {
            name: inline`Your Name`,
            affiliation: inline`Your Institution`,
            email: inline`alias@email.com`,
            orcid: inline`0000-0000-0000-0000`,
          },
          {
            name: inline`Coauthor Name`,
            affiliation: inline`Coauthor Institution`,
            email: inline`coauthor@email.com`,
            orcid: inline`0000-0000-0000-0000`,
          },
        ],
        date: inline`March 16, 2025`,
      }),
    ),
    m.heading(1, 'Section Slide as Header Level 1'),
    m.heading(2, 'Slide Title as Header Level 2'),
    m.heading(3, 'Subtitle as Header Level 3'),
    'You can put any content here, including text, images, tables, code blocks, etc.',
    m.list(m.item(m.lines('first unorder list item', m.list(m.item(['A sub item']))))),
    m.enum(m.item(m.lines('first ordered list item', m.enum(m.item(['A sub item']))))),
    'Next, we’ll brief review some theme-specific components.',
    m.heading(2, 'Additional Theme Functions'),
    m.heading(3, 'Some extra things you can do with the clean theme'),
    'Special classes for emphasis',
    m.list(
      m.item([
        raw('alert()'),
        space,
        'function for default emphasis, e.g.',
        sym.space.nobreak,
        alert(inline`the second accent color`),
        '.',
      ]),
      m.item([
        raw('fg()'),
        space,
        'class for custom color, e.g.',
        sym.space.nobreak,
        fg({ fill: rgb('#5D639E') }, inline`with ${raw('options=\'fill: rgb("#5D639E")\'')}`),
        '.',
      ]),
      m.item([
        raw('bg()'),
        space,
        'class for custom background, e.g.',
        sym.space.nobreak,
        bg(inline`with the default color`),
        '.',
      ]),
    ),
    'Cross-references',
    m.list(
      m.item([
        raw('.button'),
        space,
        'class provides a Beamer-like button, e.g.',
        space,
        link(label('sec-summary'), inline(button(inline`Summary`))),
      ]),
    ),
    m.lines(
      inline(labelled(heading({ depth: 2 }, inline('Summary')), label('sec-summary'))),
      m.heading(3, 'Quarto Clean Typst Theme'),
    ),
    inline`While you can use this theme as a Touying theme, it is designed to be used with ${link('https://quarto.org', inline`Quarto`)}.`,
    m.list(
      m.item([
        'It allows markdown syntax, code execution (R, Python, Julia, etc.), and useful layouts (callouts, columns, etc.)',
      ]),
      m.item(['Quarto gives you the Typst code if you set', space, raw('keep-typ: true')]),
    ),
    inline(v(em(0.5))),
    m.heading(3, 'Longer Quarto Demo'),
    inline`For a more comprehensive Quarto version's demo, see the ${link('https://kazuyanagimoto.com/quarto-slides-typst/slides/quarto-clean-typst/clean.pdf', inline`demo slides`)}
and ${link('https://github.com/kazuyanagimoto/quarto-slides-typst/blob/main/slides/quarto-clean-typst/clean.qmd', inline`code`)}!`,
  )
}
