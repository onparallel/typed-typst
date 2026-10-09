// Converted from test/universe/corpus/playwright.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  blocks,
  define,
  doc,
  external,
  importPackage,
  inline,
  linebreak,
  m,
  show,
  space,
  sym,
} from '../../../src/index.ts'

export default () => {
  const playwright = external('playwright')
  const dialogue = define('dialogue')
    .pos('arg1', T.any)
    .pos('arg2', T.content)
    .named('parenthetical', T.any, null)
    .returns(T.any)
    .external()
  const action = define('action').pos('arg1', T.content).returns(T.any).external()
  const playwright_with = define('with')
    .named('authors', T.any, null)
    .named('contact', T.content, [])
    .named('descriptor', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(playwright)
  return doc(
    importPackage('@preview/playwright:0.1.0', [playwright, dialogue, action]),
    show(
      playwright_with({
        title: 'The Streetcar of Doom',
        descriptor: 'A Thriller in One Act',
        authors: ['Jon Doe', 'Jane Doe', 'Janus Doe'],
        contact: blocks(
          'Contact:',
          'Janus Doe',
          '451 Farenheit Drive',
          'Lake Mead, NV XXXXX',
          inline`janusdoe@mail.com ${linebreak()} ${linebreak()} ${linebreak()} ${linebreak()} ${linebreak()}
${sym.copyright} All Rights Reserved. 2025`,
        ),
      }),
    ),
    m.lines(m.heading(1, 'Act I'), m.heading(2, 'Scene 1')),
    inline(
      dialogue(
        { parenthetical: 'off' },
        'miles',
        inline`${space}Booyyyyysss... Where are the lot of ya. Don't you know this is streetcar gang territory?
Why is yous loitering off in the middle of nowhere${space}`,
      ),
    ),
    inline(action(inline`Enter MILES, left.`)),
    inline(dialogue('miles', inline`${space}Oh come on! Where could all of you be${space}`)),
    inline(
      dialogue(
        { parenthetical: 'running' },
        'rigby',
        inline`${space}I'm here boss. Phew! that was a long trek.${space}`,
      ),
    ),
    inline(
      dialogue(
        { parenthetical: 'angry' },
        'miles',
        inline`${space}Trek? Now where the hell has yous been? And where are the rest of you?${space}`,
      ),
    ),
    inline(
      action(
        inline`${space}Enter JACOB, GRUNDY, JUNIOR, right. They all run onto stage and stumble upon each other${space}`,
      ),
    ),
    inline(
      dialogue(
        { parenthetical: 'eyeing down the rest of the gang' },
        'miles',
        inline`${space}Ah.. That's where you've been huh. Now would any of you like to be so brave as to tell
me just WHAT have you idiots been upto? ${action(inline`staring at JUNIOR`)} You, come on then,
open yer trap!${space}`,
      ),
    ),
    m.heading(2, 'Scene 2'),
    inline(dialogue('narrator', inline`${space}Something else could go here, complete your own story${space}`)),
  )
}
