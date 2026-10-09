// Converted from test/universe/corpus/metropolyst.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  blocks,
  datetime,
  define,
  doc,
  external,
  fr,
  importPackage,
  inline,
  link,
  m,
  pt,
  raw,
  rgb,
  show,
  space,
  strong,
  text,
} from '../../../src/index.ts'

export default () => {
  const metropolystTheme = external('metropolyst-theme')
  const configInfo = define('config-info')
    .named('author', T.content, [])
    .named('date', T.any, null)
    .named('institution', T.content, [])
    .named('subtitle', T.content, [])
    .named('title', T.content, [])
    .returns(T.any)
    .external()
  const titleSlide = define('title-slide').returns(T.any).external()
  const slide = define('slide')
    .pos('arg1', T.content)
    .pos('arg2', T.content)
    .named('composer', T.any, null)
    .returns(T.any)
    .external()
  const focusSlide = define('focus-slide').pos('arg1', T.content).returns(T.any).external()
  const alert = define('alert').pos('arg1', T.content).returns(T.any).external()
  const metropolystTheme_with = define('with').pos('arg1', T.any).returns(T.any).external(metropolystTheme)
  return doc(
    importPackage('@preview/metropolyst:0.1.0', [metropolystTheme, configInfo, titleSlide, slide, focusSlide, alert]),
    show(
      metropolystTheme_with(
        configInfo({
          title: inline`Your Presentation Title`,
          subtitle: inline`Optional Subtitle`,
          author: inline`Your Name`,
          date: datetime.today(),
          institution: inline`Your Institution`,
        }),
      ),
    ),
    inline(titleSlide()),
    m.heading(1, 'Introduction'),
    m.heading(2, 'Getting Started'),
    'This presentation uses the Metropolyst theme with default settings:',
    m.list(
      m.item([strong(inline`Aspect ratio:`), space, '16:9']),
      m.item([strong(inline`Fonts:`), space, 'Fira Sans throughout']),
      m.item([strong(inline`Accent color:`), space, 'Orange (#eb811b)']),
      m.item([strong(inline`Header background:`), space, 'Dark teal (#23373b)']),
    ),
    m.lines(
      m.heading(2, 'Example of two-column layout'),
      inline(
        slide(
          { composer: [fr(3), fr(2)] },
          blocks(
            m.lines(m.heading(3, 'The first column is wider than the second'), 'Because the code for the layout is'),
            inline(
              raw(
                { block: true, lang: 'typst' },
                '#slide(composer: (3fr, 2fr))[\n  First column content\n][\n  Second column content\n]',
              ),
            ),
          ),
          blocks(
            m.lines(m.heading(3, 'For equal width columns'), 'You can instead do'),
            inline(
              raw({ block: true, lang: 'typst' }, '#slide[\n  First column content\n][\n  Second colum content\n]'),
            ),
          ),
        ),
      ),
    ),
    inline(focusSlide(inline`${space}This is a focus slide for emphasis!${space}`)),
    m.heading(
      2,
      'Configuration options, and a long slide title with font size automatically scaled to fit on one line',
    ),
    inline`These are the default styles for ${strong(inline`bold`)}, ${alert(inline`alert`)}, and ${link('https://typst.app', inline`hyperlink`)}
text.`,
    inline`View the ${link('https://github.com/benzipperer/metropolyst', inline`documentation`)} for all
configuration options.`,
    m.heading(3, 'Example'),
    inline(
      raw(
        { block: true, lang: 'typst' },
        '#show: metropolyst-theme.with(\n  font: ("Roboto",),                       // Modern sans-serif\n  font-size: 22pt,                         // Slightly larger text\n  accent-color: rgb("#10b981"),            // Emerald accent\n  hyperlink-color: rgb("#0ea5e9"),         // Sky blue links\n  header-background-color: rgb("#0f172a"), // Slate dark header\n)\n#set strong(delta: 300)                    // Bolder bold text',
      ),
    ),
    inline(
      text(
        { font: 'Roboto', size: pt(22) },
        inline`These are the custom styles for ${text({ weight: 'bold' }, inline(strong(inline`bold`)))}, ${text({ fill: rgb('#10b981') }, inline`alert`)},
and ${link('https://typst.app', inline(text({ fill: rgb('#0ea5e9') }, inline`hyperlink`)))}
text.`,
      ),
    ),
  )
}
