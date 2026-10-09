// Converted from test/universe/corpus/touying-liu-nyckel.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  align,
  aqua,
  blocks,
  bottom,
  box,
  center,
  cm,
  contentBlock,
  define,
  doc,
  emph,
  external,
  fr,
  grid,
  horizon,
  image,
  importPackage,
  inline,
  linebreak,
  link,
  lorem,
  m,
  mm,
  path,
  pct,
  place,
  pt,
  raw,
  rect,
  red,
  right,
  set,
  show,
  smartquote,
  space,
  strong,
  sym,
  text,
  top,
  unsafeRaw,
  v,
  white,
} from '../../../src/index.ts'

export default () => {
  const utils = external('utils')
  const liuTheme = external('liu-theme')
  const configColors = define('config-colors')
    .named('primary', T.any, null)
    .named('theme', T.any, null)
    .returns(T.any)
    .external()
  const liuColors = external('liu-colors')
  const titleSlide = define('title-slide').named('extra', T.any, null).returns(T.any).external()
  const textBlock = define('text-block').pos('arg1', T.any).pos('arg2', T.content).returns(T.any).external()
  const footerComment = define('footer-comment')
    .pos('arg1', T.any)
    .named('alignment', T.any, null)
    .named('size', T.any, null)
    .returns(T.any)
    .external()
  const slide = define('slide')
    .pos('arg1', T.content)
    .pos('arg2', T.content)
    .named('composer', T.any, null)
    .returns(T.any)
    .external()
  const pause = external('pause')
  const meanwhile = external('meanwhile')
  const focusSlide = define('focus-slide').pos('arg1', T.any).returns(T.any).external()
  const endSlide = define('end-slide').pos('arg1', T.any).returns(T.any).external()
  const liuTheme_with = define('with')
    .pos('arg1', T.any)
    .named('author', T.content, [])
    .named('title', T.content, [])
    .returns(T.any)
    .external(liuTheme)
  const liuColors_darkblue = external('darkblue', liuColors)
  const utils_fitToHeight = define('fit-to-height')
    .pos('arg1', T.any)
    .pos('arg2', T.content)
    .returns(T.any)
    .external(utils)
  const liuColors_blue = external('blue', liuColors)
  return doc(
    m.lines(
      importPackage('@preview/touying-liu-nyckel:0.1.2', [
        utils,
        liuTheme,
        configColors,
        liuColors,
        titleSlide,
        textBlock,
        footerComment,
        slide,
        pause,
        meanwhile,
        focusSlide,
        endSlide,
      ]),
      unsafeRaw.markup`#import "@preview/touying:0.7.4": utils.fit-to-height`,
    ),
    show(
      liuTheme_with(
        {
          title: inline`Template for LiU-Themed Slides`,
          author: inline`First Last (first.last@liu.se)${linebreak()} Department of Electrical Engineering${linebreak()}
Linköping University${linebreak()} Sweden`,
        },
        configColors({ theme: liuColors_darkblue, primary: liuColors_darkblue }),
      ),
    ),
    inline(titleSlide()),
    m.heading(2, 'Features'),
    m.list(
      m.item([
        'Template for the excellent',
        space,
        link('https://typst.app/universe/package/touying/', 'Touying'),
        space,
        'package for creating presentation slides in Typst. See',
        space,
        link('https://touying-typ.github.io/docs/intro', 'Touying documentation'),
        space,
        'for full functionality, including dynamic content generation.',
      ]),
      m.item([
        'Template mirrors the look and feel of the official Linköping University (LiU) slides provided by the Keynote template.',
      ]),
      m.item([
        'Uses free fonts, defaults to Liberation Serif (pre-installed) and Liberation Sans that can be downloaded and installed on your system.',
      ]),
      m.item(['Include options for configuring using other fonts.']),
      m.item(['Supports Swedish and English languages.']),
      m.item(['See ', link('https://typst.app'), space, 'for more details on Typst.']),
    ),
    m.heading(1, 'Basic Usage'),
    m.lines(m.heading(2, 'Section Slides'), 'The previous slide was generated as a first level heading.'),
    inline`${textBlock('How to create a section slide', inline(space, raw({ block: true, lang: 'typst' }, '= Basic Usage'), space))}
It is possible to add content also to the section slide by adding content directly after the
heading. ${raw({ block: true, lang: 'typst' }, '= Basic Usage\nAdditional content on the section slide')}`,
    m.lines(
      m.heading(2, 'Basic Slides'),
      inline`Basic slides are easily created as a second level heading with content. ${textBlock('How to create a basic slide', inline(space, raw({ block: true, lang: 'typst' }, '== Basic Slides\n\n- This is a bullet point\n- And this is another\n  $\n    sin(x) = sum_(n=0)^infinity (-1)^n / (2 n )! x^(2n)\n  $'), space))}`,
    ),
    m.lines(
      m.heading(2, 'Initializing the template'),
      inline`First, import the template ${raw({ block: true, lang: 'typst' }, '#import "@preview/touying-liu-nyckel:0.1.3": *')}
then initialize the template with the ${raw('liu-theme')} function, setting up the title page
${raw({ block: true, lang: 'typst' }, '#show: liu-theme.with(\n  title: "Presentation Title",\n  author: [\n    Firstname Lastname (first.last\\@liu.se)\\\n    Department of XYZ\\\n    Linköping University\n  ])')}`,
    ),
    m.lines(
      m.heading(2, 'Template options'),
      inline`The full list of options with their default values are ${raw({ block: true, lang: 'typst' }, '  title: "A Title",  // Main title\n  subtitle: none,  // Subtitle below main title\n  author: "An Author",  // Author\n  lang: "en",  // Language, "en" or "sv"\n  handout: false,  // If true, dynamic content is flattened for handouts\n  title-font: ("Liberation Sans", "Libertinus Sans", "Helvetica"),\n  body-font: ("Liberation Sans", "Libertinus Sans", "Helvetica"),\n  header-font: ("Liberation Serif", "Libertinus Serif", "Georgia"),\n  math-font: "New Computer Modern Math",\n  title-background: image("assets/backgrounds/background_01.jpg"),\n  progress-bar: true,  // If true, progress bar is shown at section slides\n  size: 20pt,  // Base font size')}
${raw('title-background')} can be ${raw('none')}, ${raw('image')} (see utility functions), a
${raw('color')}, or a ${raw('gradient')}.`,
    ),
    m.lines(
      m.heading(2, 'Color Themes'),
      inline(
        grid(
          { columns: [fr(1), fr(1)] },
          unsafeRaw.code<any>`fit-to-height(100%, prescale-width: 1100%, [
    Colors from the LiU graphical profile is predefined\\
    #box(fill: liu-colors.blue, width: 1.5cm, height: 1.5cm)
    #box(fill: liu-colors.turquoise, width: 1.5cm, height: 1.5cm)
    #box(fill: liu-colors.green, width: 1.5cm, height: 1.5cm)
    #box(fill: liu-colors.orange, width: 1.5cm, height: 1.5cm)
    #box(fill: liu-colors.purple, width: 1.5cm, height: 1.5cm)
    #box(fill: liu-colors.yellow, width: 1.5cm, height: 1.5cm)
    #box(fill: liu-colors.gray, width: 1.5cm, height: 1.5cm)
    #box(fill: liu-colors.darkblue, width: 1.5cm, height: 1.5cm)
    \`\`\`typst
    #let liu-colors = (
      "blue": rgb("#00b9e7"),
      "turquoise": rgb("#17c7d2"),
      "green": rgb("#00cfb5"),
      "orange": rgb("#ff6442"),
      "purple": rgb("#8981d3"),
      "yellow": rgb("#fdef5d"),
      "gray": rgb("#6a7e91"),
      "darkblue": rgb(0, 153, 199),
    )
    \`\`\`
    Change the color scheme in the template, e.g.,
    \`\`\`typst
    config-colors(theme: liu-colors.green,
                  primary: liu-colors.gray)
    \`\`\`
  ])`,
          utils_fitToHeight(
            pct(100),
            blocks(
              m.lines(
                inline(align(center, text({ size: pt(25) }, 'Color options'))),
                m.list(
                  m.item(['The two main color options are', space, raw('theme'), space, 'and', space, raw('primary')]),
                  m.item([
                    raw('theme'),
                    space,
                    'sets the main color scheme, used for example for the title page, sectioning slide backgrounds',
                  ]),
                  m.item([
                    raw('primary'),
                    space,
                    'is used for example for',
                    space,
                    strong(inline`bold`),
                    space,
                    'text',
                  ]),
                  m.item([
                    raw('block'),
                    space,
                    'is used for the background of',
                    space,
                    raw('text-block'),
                    space,
                    '(defaults to',
                    space,
                    raw('theme'),
                    space,
                    'color)',
                  ]),
                  m.item([
                    raw('section'),
                    space,
                    'is used for the background of sectioning slides (defaults to',
                    space,
                    raw('theme'),
                    space,
                    'color)',
                  ]),
                ),
              ),
            ),
          ),
        ),
      ),
    ),
    m.lines(
      m.heading(2, 'Template Fonts'),
      m.list(
        m.item(['The template, by default, uses Liberation Serif and Liberation Sans fonts']),
        m.item(['All fonts are directly available on ', link('https://typst.app')]),
        m.item([
          'If you run Typst locally, Liberation Serif is pre-installed but Liberation Sans need to be separately installed.',
        ]),
        m.item([
          'You can easily configure the template with other fonts, for example',
          space,
          link('https://fonts.google.com/specimen/Lora', 'Lora'),
          space,
          'and',
          space,
          link('https://fonts.google.com/specimen/Outfit', 'Outfit'),
          space,
          'makes a nice pair (both freely available on ',
          link('https://fonts.google.com'),
          '):',
          space,
          raw({ block: true, lang: 'typst' }, '  header-font: "Lora"\n  body-font: "Outfit"\n'),
        ]),
        m.item([
          'If you runTypst locally, see ',
          link('https://github.com/typst/typst'),
          ', then there is an excellent extension',
          space,
          link('https://marketplace.visualstudio.com/items?itemName=myriad-dreamin.tinymist', 'TinyMist'),
          space,
          'for',
          space,
          link('https://code.visualstudio.com', 'Visual Studio Code'),
          space,
          'usable under MacOS, Windows, and Linux.',
        ]),
      ),
    ),
    m.lines(
      m.heading(2, 'Font installation instructions'),
      m.enum(
        m.item([
          'The Liberation fonts can be downloaded from ',
          link('https://github.com/liberationfonts/liberation-fonts'),
        ]),
        m.item([
          'Go to the',
          space,
          link('https://github.com/liberationfonts/liberation-fonts/releases/tag/2.1.5', 'Releases'),
          space,
          'page and download the latest version, currently',
          space,
          raw('liberation-fonts-ttf-2.1.5.tar.gz'),
          ', and extract.',
        ]),
        m.item(
          m.lines(
            'Locate the TTF files in the extracted folder and install them on your system',
            m.list(
              m.item([
                strong(inline`MacOS`),
                space,
                sym.dash.en,
                space,
                'Locate the TTF-files in Finder, select them all, right-click and select open in FontBook. Then click',
                space,
                smartquote({ double: true }),
                emph(inline`Install Font`),
                smartquote({ double: true }),
                '.',
              ]),
              m.item([
                strong(inline`Windows`),
                space,
                sym.dash.en,
                space,
                'Locate the TTF-files in File Explorer, select them all, and right-click and select',
                space,
                smartquote({ double: true }),
                emph(inline`Install`),
                smartquote({ double: true }),
                '.',
              ]),
              m.item([
                strong(inline`Linux/Ubuntu`),
                ': Copy the TTF-files to',
                space,
                raw('~/.local/share/fonts/'),
                space,
                'and run',
                space,
                linebreak(),
                space,
                raw('fc-cache -fv'),
                space,
                'in the terminal to update the font cache.',
              ]),
            ),
          ),
        ),
      ),
    ),
    m.lines(
      m.heading(2, 'Utililty functions'),
      inline(
        align(
          horizon,
          textBlock(
            'Available utility functions',
            blocks(
              m.list(
                m.item([raw('title-slide'), space, '- create the title page as defined in the template']),
                m.item([raw('focus-slide'), space, '- create a slide with a single focus item']),
                m.item([raw('footer-comment'), space, '- Puts a comment, e.g., a literature reference, in the footer']),
                m.item([raw('text-box'), space, '- A simple boxed expression']),
                m.item([
                  raw('text-block'),
                  space,
                  '- A box like this one with a heading. Similar to the beamer environment',
                  space,
                  raw('block'),
                ]),
                m.item([raw('end-slide'), space, '- A simple end-of-slides page']),
                m.item([
                  raw('background-image'),
                  space,
                  '- Access to template predefined background images, 01-13 available',
                ]),
              ),
            ),
          ),
        ),
      ),
    ),
    m.lines(
      m.heading(1, 'Example slides'),
      'A few slides with examples on how to make slides and use the utility functions',
    ),
    m.lines(
      m.heading(2, 'Slide with columns - the grid command'),
      inline(
        grid(
          { columns: [fr(1), fr(2)] },
          rect({ width: pct(100), height: pct(100), fill: aqua }),
          rect({ width: pct(100), height: pct(100), fill: aqua }),
        ),
        space,
        footerComment(
          { alignment: right, size: pt(20) },
          'This is a footer comment, can be aligned left, center, and right',
        ),
      ),
    ),
    m.lines(
      m.heading(2, 'Another way to do slides with columns'),
      inline(
        slide(
          { composer: [fr(2), fr(1)] },
          inline(space, rect({ width: pct(100), height: pct(100), fill: aqua }), space),
          inline(space, rect({ width: pct(100), height: pct(100), fill: aqua }), space),
        ),
      ),
    ),
    m.lines(
      m.heading(2, 'Slide with bulllets and an image'),
      inline(
        grid(
          { columns: [fr(1), fr(1)], gutter: mm(10) },
          blocks(
            m.list(
              m.item(['The famous blue marble photo from NASA (Public Domain)']),
              m.item(['Photograph of Earth taken on December 7, 1972']),
            ),
          ),
          image(path('blue_marble.jpg')),
        ),
        space,
        footerComment({ size: pt(18) }, inline(link('https://en.wikipedia.org/wiki/The_Blue_Marble'))),
      ),
    ),
    m.heading(2, 'Slide that needs vertical scaling to fit (alt. 1)'),
    inline(unsafeRaw.code<any>`fit-to-height(98%, [
  - Utilize the touying-utility function \`fit-to-height\` to scale the content to fit the full slide height
    \`\`\`typst
    #fit-to-height(100%, [slide content to be scaled])

    \`\`\`
    You may also want to use the argument \`prescale-width\` to get the result you want.
  - Requires
    \`\`\`typst
    #import "@preview/touying:0.7.4": utils.fit-to-height
    \`\`\`
    See documentation on https://touying-typ.github.io/docs/utilities/fit-to for more details.
  - Expressions for $sin(x)$
    $
      sin(x) = x product_(n=1)^infinity (1 - x^2 / (n^2 pi^2))
      = sum_(n=0)^infinity (-1)^n / (2 n + 1)! x^(2n + 1)
    $
  - A bullet point
])`),
    m.heading(2, 'Slide that needs vertical scaling to fit (alt. 2)'),
    inline(
      contentBlock(
        blocks(
          m.lines(
            set(text, { size: pt(20) }),
            m.list(
              m.item([
                'Alternatively, just change the text size for the particular slide. But make sure to scope it so that you only change the font size for the specific slide',
                space,
                raw(
                  { block: true, lang: 'typst' },
                  '#[ // start a scope\n  #set text(size: 18pt)\n  // slide content\n]',
                ),
              ]),
              m.item([
                'Expressions for',
                space,
                unsafeRaw.math`sin(x)`,
                space,
                unsafeRaw.math.block`sin(x) = x product_(n=1)^infinity (1 - x^2 / (n^2 pi^2))
      = sum_(n=0)^infinity (-1)^n / (2 n + 1)! x^(2n + 1)`,
              ]),
              m.item(['A bullet point']),
              m.item(['A bullet point']),
            ),
          ),
        ),
      ),
    ),
    m.lines(
      m.heading(2, 'Dynamic slides'),
      inline`${grid(
        { columns: [fr(1), fr(1)] },
        blocks(
          m.lines(
            m.list(
              m.item([
                'With',
                space,
                raw('#pause'),
                ',',
                space,
                raw('#only'),
                ',',
                space,
                raw('#uncover'),
                ', and',
                space,
                raw('#meanwhile'),
                space,
                'you can add dynamic to your slides',
              ]),
            ),
            inline(pause),
            m.list(m.item(['See ', link('https://touying-typ.github.io/docs/intro/'), space, 'for documentation.'])),
            inline(pause),
            m.list(
              m.item([
                'set the',
                space,
                raw('handout'),
                space,
                'option to the template to',
                space,
                text({ fill: red }, raw('true')),
                space,
                'to remove the dynamic content in the PDF, e.g., for distributing slide printouts.',
              ]),
            ),
          ),
        ),
        blocks(
          m.list(
            m.item([
              'This is also possible in math formulas',
              space,
              unsafeRaw.math.block`sin(x) & = pause x product_(n=1)^infinity (1 - x^2 / (n^2 pi^2)) \\
               & pause = sum_(n=0)^infinity (-1)^n / (2 n + 1)! x^(2n + 1)`,
            ]),
          ),
        ),
      )} ${v(fr(1))}
${meanwhile} Some text ${pause} comes later${pause}, some later${pause}, and some comes last
${pause} ${pause} ${place({ dx: mm(0), dy: mm(-5) }, add(bottom, right), box({ stroke: pt(0), width: cm(8), height: cm(5), fill: liuColors_blue, radius: mm(5) }, blocks(m.lines(set(align, { alignment: add(center, horizon) }), set(text, { fill: white, size: pt(25) }), 'Final step in animation!'))))}`,
    ),
    inline(v(fr(1))),
    m.lines(
      m.heading(2, 'Random Placement of Images'),
      m.list(
        m.item([
          'Any content, e.g., image or text can be randomly',
          space,
          linebreak(),
          space,
          'placed using the',
          space,
          raw('place'),
          space,
          'function.',
          linebreak(),
          space,
          box(
            { width: pct(63) },
            inline(
              space,
              raw(
                { block: true, lang: 'typst' },
                '#place(top + right, dx: 0mm, dy: 0mm,\n    image("blue_marble.jpg", height: 72%))',
              ),
            ),
          ),
        ]),
        m.item([
          'Details on arguments for the function on',
          linebreak(),
          space,
          link('https://typst.app/docs/reference/layout/place/'),
        ]),
        m.item(['For example, you can wrap text around the image']),
        m.item([lorem(8)]),
        m.item([lorem(12)]),
        m.item([lorem(24)]),
      ),
    ),
    inline(place({ dx: mm(0), dy: mm(-5) }, add(top, right), image({ height: pct(72) }, path('blue_marble.jpg')))),
    inline(
      focusSlide(
        text(
          { font: 'New Computer Modern', size: pt(35) },
          inline(space, emph(inline`This is an important message`), space),
        ),
      ),
    ),
    inline(titleSlide({ extra: place({ dy: mm(13) }, add(bottom, right), inline`Title slide with some extra text`) })),
    inline(endSlide('liu.se')),
  )
}
