// Converted from test/universe/corpus/screen-scripted.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  align,
  black,
  blocks,
  box,
  center,
  datetime,
  define,
  doc,
  external,
  importPackage,
  inches,
  inline,
  let_,
  linebreak,
  m,
  pad,
  pct,
  show,
  space,
  symbol,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const scripted = external('scripted')
  const character = define('character').rest('args', T.any).returns(T.any).external()
  const slugline = define('slugline')
    .pos('arg1', T.content)
    .pos('arg2', T.content)
    .pos('arg3', T.content)
    .returns(T.any)
    .external()
  const dialogue = define('dialogue').pos('arg1', T.content).pos('arg2', T.content).returns(T.any).external()
  const dualDialogue = define('dual-dialogue').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const d = define('d').pos('arg1', T.content).pos('arg2', T.content).returns(T.any).external()
  const sl = define('sl').pos('arg1', T.content).pos('arg2', T.content).pos('arg3', T.content).returns(T.any).external()
  const t = define('t').pos('arg1', T.content).returns(T.any).external()
  const scripted_with = define('with')
    .named('authors', T.any, null)
    .named('config', T.any, null)
    .named('date', T.any, null)
    .named('info', T.content, [])
    .named('title', T.any, null)
    .named('version', T.any, null)
    .returns(T.any)
    .external(scripted)
  const [patternDecl, [char1, char1Fl]] = let_(['char1', 'char1-fl'], character('Peter', 'Griffin'))
  const [patternDecl_2, [char2, char2Fl, char2Full]] = let_(
    ['char2', 'char2-fl', 'char2-full'],
    character('Lois', 'Patrice', 'Griffin'),
  )
  const [patternDecl_3, [char3, char3Fl]] = let_(['char3', 'char3-fl'], character('Chris', 'Griffin'))
  const [patternDecl_4, [char4, char4Fl]] = let_(['char4', 'char4-fl'], character('Robert', 'Loggia'))
  return doc(
    importPackage('@preview/screen-scripted:0.1.0', [scripted, character, slugline, dialogue, dualDialogue, d, sl, t]),
    show(
      scripted_with({
        title: 'Stuck Behind Robert Loggia',
        authors: 'Seth Macfarlane',
        date: datetime({ month: 8, day: 20, year: 2026 }),
        version: '0.0.1',
        info: inline`${space}probablysethsemail@domain.com ${linebreak()} (555) 555-5555${space}`,
        config: { checkStrict: true, boldSlugs: true, dialogueCont: true, slugDashes: 'single', contStr: "CONT'D" },
      }),
    ),
    m.lines(
      patternDecl,
      patternDecl_2,
      patternDecl_3,
      patternDecl_4,
      unsafeRaw.markup`#let (char5) = character("Meg")`,
    ),
    inline(slugline(inline`int`, inline`living room`, inline`day`)),
    inline`${char1}, ${char2}, and ${char3} sit on the family sofa. Meg quickly enters.`,
    inline(
      dialogue(
        inline(unsafeRaw.code<any>`char5`),
        inline`${space}Mom? Dad? I decided I want a big party this year with all my friends. And maybe a band.
Is that cool?${space}`,
      ),
    ),
    inline(
      dualDialogue(
        dialogue(inline(char1), inline`${space}(mumbling) ${linebreak()} Yeah, sure${symbol('.')}..${space}`),
        dialogue(inline(char2), inline`${space}(mumbling) ${linebreak()} Yeah, sure${symbol('.')}.. Why not?${space}`),
      ),
    ),
    inline(
      dialogue(
        inline(unsafeRaw.code<any>`char5`),
        inline`${space}(excited) ${linebreak()} Oh thanks guys, you're the best!${space}`,
      ),
    ),
    'Meg runs away in excitement.',
    inline(dialogue(inline(char2), inline`${space}What's she talking about, a party for what?${space}`)),
    inline(
      dialogue(
        inline(char1),
        inline`${space}I don't know. She have her period or something? She getting married?${space}`,
      ),
    ),
    inline(
      dialogue(
        inline(char2),
        inline`${space}No, if she was getting married we probably would've seen a guy around, right?${space}`,
      ),
    ),
    inline(dialogue(inline(char1), inline`${space}Sound reasoning.${space}`)),
    inline(
      dialogue(
        inline(char3),
        inline`${space}You guys, it's ${unsafeRaw.code<any>`char5`}'s birthday next week.${space}`,
      ),
    ),
    inline(
      dialogue(
        inline(char2),
        inline`${space}(gasps) ${linebreak()} Oh my god it is! ${char1} we got to put together a party!${space}`,
      ),
    ),
    inline(
      dialogue(
        inline(char1),
        inline`${space}Aw man, I hate kids birthday parties. It's going to be worse than that time when I got
stuck behind ${char4Fl} at the airport.${space}`,
      ),
    ),
    inline(slugline(inline`int`, inline`airport`, inline`day`)),
    inline`${char4Fl} at the front of the line checks his bags in at the airport. ${char1} is next in line
to him. An attendant is assisting ${char4Fl}.`,
    inline(dialogue(inline`Attendant`, inline`${space}May I have your name please?${space}`)),
    inline(dialogue(inline(char4Fl), inline`${space}Robert Loggia.${space}`)),
    inline(dialogue(inline`Attendant`, inline`${space}Can you spell that for me?${space}`)),
    inline(
      box(
        { stroke: black, width: pct(100) },
        inline(
          space,
          align(
            center,
            inline(
              space,
              pad(
                { top: inches(3), bottom: inches(3), left: inches(1), right: inches(1) },
                inline`${space}This awkward space is added to showcase the auto-dialogue break feature.${space}`,
              ),
              space,
            ),
          ),
          space,
        ),
      ),
    ),
    inline(
      dialogue(
        inline(char4Fl),
        blocks(
          inline`Certainly. That's ${char4Fl}. ${linebreak()}`,
          inline`'R', as in "Robert Loggia". ${linebreak()} 'O', as in "Oh my god, it's Robert Loggia". ${linebreak()}
'B', as in "By god, that's Robert Loggia". ${linebreak()} 'E', as in "Everybody loves Robert
Loggia". ${linebreak()} 'R', as in "Robert Loggia". ${linebreak()} 'T', as in "Tim, look over
there, it's Robert Loggia". ${linebreak()}`,
          inline`Space. ${linebreak()}`,
          inline`'L', as in "Look, it's Robert Loggia"!`,
        ),
      ),
    ),
    inline(d(inline(char1), inline`${space}Ugh${symbol('.')}..${space}`)),
    inline(
      sl(inline`e`, inline`griffin house`, inline`d`),
      space,
      t(inline`cut to`),
      space,
      sl(inline`i`, inline`kitchen`, inline`d`),
    ),
    'Stewie prepares mail to be sent out while Brian reads the newspaper.',
  )
}
