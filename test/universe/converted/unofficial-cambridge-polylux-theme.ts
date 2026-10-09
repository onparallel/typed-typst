// Converted from test/universe/corpus/unofficial-cambridge-polylux-theme.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  align,
  blocks,
  define,
  doc,
  em,
  external,
  horizon,
  image,
  importPackage,
  inline,
  m,
  page,
  parbreak,
  path,
  pt,
  raw,
  right,
  set,
  text,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const toolbox = external('toolbox')
  const logo = external('logo')
  const slide = define('slide').pos('arg1', T.content).named('type', T.any, null).returns(T.any).external()
  const toolbox_slideNumber = external('slide-number', toolbox)
  const logo_update = define('update').pos('arg1', T.any).returns(T.any).external(logo)
  return doc(
    m.lines(
      importPackage('@preview/polylux:0.4.0', [toolbox]),
      importPackage('@preview/unofficial-cambridge-polylux-theme:0.0.1', [logo, slide]),
      unsafeRaw.markup`#import "@preview/mannot:0.3.1": *`,
      unsafeRaw.markup`#import "@preview/fletcher:0.5.8" as fletcher: diagram, edge, node`,
    ),
    set(page, {
      paper: 'presentation-16-9',
      footer: align(right, text({ size: em(0.8) }, toolbox_slideNumber)),
      margin: { bottom: em(2), rest: em(1) },
    }),
    inline(logo_update(image(path('example-logo.svg')))),
    inline(
      slide(
        { type: 'title' },
        blocks(set(align, { alignment: horizon }), m.heading(1, 'An example presentation'), 'Matthew Ord'),
      ),
    ),
    inline(
      slide(
        blocks(
          m.heading(1, 'Outline'),
          m.lines(
            'There are five types of slides in this presentation:',
            m.list(
              m.item(['Standard slides with a dark blue background']),
              m.item(['Light slides with a light blue background']),
              m.item(['Title slides']),
              m.item(['Two alternate slide styles']),
            ),
            inline`These can be created using the ${raw('#slide')} command with the appropriate type parameter.`,
          ),
          parbreak(),
        ),
      ),
    ),
    inline(
      slide(
        { type: 'light' },
        blocks(
          m.heading(2, 'Light Slide Example'),
          inline`This is an example of a light slide with a light blue header. ${set(text, { size: pt(12) })}
${raw({ block: true, lang: 'typst' }, '// Create a title slide\n#slide(type: "title", [\n  = Welcome to the Presentation\n])\n// Create a standard slide\n#slide(type: "standard", [\n  == Standard Slide Example\n  This is an example of a standard slide with a dark blue header.\n])\n// Create a light slide\n#slide(type: "light", [\n  == Light Slide Example\n  This is an example of a light slide with a light blue header.\n])')}`,
          parbreak(),
        ),
      ),
    ),
    inline(
      slide(
        { type: 'alt1' },
        blocks(m.heading(2, 'Alternate Slide Example'), 'This is an alternate slide style.', parbreak()),
      ),
    ),
    inline(
      slide(
        { type: 'alt2' },
        blocks(m.heading(2, 'Another Alternate Slide Example'), 'This is another alternate slide style.', parbreak()),
      ),
    ),
  )
}
