// Converted from test/universe/corpus/stagehand.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  auto,
  define,
  doc,
  emph,
  external,
  importPackage,
  inline,
  lorem,
  m,
  pt,
  raw,
  show,
  smallcaps,
  sym,
} from '../../../src/index.ts'

export default () => {
  const stagehand = external('stagehand')
  const speaker = define('speaker')
    .pos('arg1', T.any)
    .named('p', T.any, null)
    .named('t', T.any, null)
    .returns(T.any)
    .external()
  const stageDirection = define('stage-direction')
    .pos('arg1', T.content)
    .named('blocked', T.any, null)
    .returns(T.any)
    .external()
  const prop = define('prop').pos('arg1', T.content).returns(T.any).external()
  const todo = define('todo').pos('arg1', T.content).returns(T.any).external()
  const stagehand_with = define('with')
    .named('authors', T.any, null)
    .named('break-size', T.any, null)
    .named('chapter-settings', T.any, null)
    .named('custom-localization', T.any, null)
    .named('descriptor', T.any, null)
    .named('dramatis-personae', T.any, null)
    .named('font', T.any, null)
    .named('font-size', T.any, null)
    .named('has-footer', T.any, null)
    .named('has-header', T.any, null)
    .named('lang', T.any, null)
    .named('parentheses-mean-stage-directions', T.any, null)
    .named('props', T.any, null)
    .named('speaker-function', T.any, null)
    .named('speaker-layout', T.any, null)
    .named('speakers-in-header', T.any, null)
    .named('title', T.any, null)
    .named('toc', T.any, null)
    .named('todos', T.any, null)
    .returns(T.any)
    .external(stagehand)
  const d = define('d').pos('arg1', T.content).returns(T.any).external()
  const s = define('s').pos('arg1', T.content).named('p', T.any, null).returns(T.any).external()
  const alice = define('alice')
    .named('p', T.any, null)
    .returns(T.any)
    .body((p) => s({ p: p['p'] }, inline`Alice`))
  const bob = define('bob')
    .named('p', T.any, null)
    .returns(T.any)
    .body((p) => s({ p: p['p'] }, inline`Bob`))
  return doc(
    importPackage('@preview/stagehand:0.1.0', [stagehand, speaker, stageDirection, prop, todo]),
    m.lines(
      show(
        stagehand_with({
          title: 'A Template for Theatre',
          descriptor: 'This is not a real play',
          authors: ['Plato', 'Aristotle', 'Nietzsche'],
          lang: 'en',
          font: 'Libertinus Serif',
          fontSize: pt(14),
          toc: true,
          dramatisPersonae: true,
          props: true,
          todos: true,
          speakerLayout: 'fancy',
          speakerFunction: smallcaps,
          breakSize: 900,
          parenthesesMeanStageDirections: true,
          hasHeader: true,
          hasFooter: true,
          speakersInHeader: true,
          customLocalization: null,
          chapterSettings: [
            { title: auto, numbering: 'I', pagebreak: true },
            { title: auto, numbering: '1', pagebreak: true },
          ],
        }),
      ),
      m.heading(1, 'The introduction'),
      m.heading(2, 'The first scene'),
      inline`${speaker(inline`Alice`)} This is a dialogue. ${speaker(inline`Bob`)} Indeed it is. It can go
on for a while. ${lorem(40)} (Alice is growing annoyed at the nonsense) You are annoyed? Good
thing you put that in parentheses, so I can more easily understand in-line stage directions.
${speaker({ p: 'sceptic' }, inline`Alice`)} I'd rather wear my emotions on the sleeve, and put
them right behind my name. ${stageDirection(inline`Bob gestures around. It is a highly complex gesture, that effectively demonstrates the method
of creating blocked stage directions.`)} ${speaker(inline`Bob`)} The command takes an optional
parameter: 'blocked'. If 'blocked' is false, it looks like this: ${stageDirection({ blocked: false }, inline`He gestures around in a surprising lack of parentheses.`)}
${speaker(inline`Alice`)} Instead of having to write "#speaker" and "#stage-direction" all the
time, we can import these names with dedicated aliases: ${importPackage('@preview/stagehand:0.1.0', [
        { item: 'stage-direction', as: d },
        { item: 'speaker', as: s },
      ])}
${d(inline`Alice uses some magic and imports the command with a new name.`)} ${s(inline`Bob`)}
We can also define functions for our names, so we don't have to write them out all the time.
${alice.decl} ${bob.decl} ${alice({ p: 'Relieved' })} This is much better.`,
      m.heading(2, 'Another scene'),
      inline`${d(inline`Alice and Bob appear on stage.`)} ${alice()} We are in a new scene. At the top of
the page our names appear. ${speaker({ t: ['Alice', 'Bob'] }, inline`Both`)} How curious. ${alice()}
Bob appears on top, even though he doesn't have his own line, because he was ${emph(inline`tagged`)}
as a speaker in the line spoken by both of us. ${speaker({ t: false }, 'Loudspeaker')} Please
fasten your seatbelts. ${alice()} The loadspeaker is not a real character, by tagging its line
with "false", we avoid it appearing on top of the page or in the Dramatis Personae. It is more
like a prop, actually. Speaking of which... ${d(inline`Alice takes out her ${prop(inline`screwdriver`)} and disassembles the ${prop(inline`loadspeaker`)}.`)}
${alice()} See what I did there? Scroll down, the props show up in a prop list.`,
      m.heading(1, 'And now?'),
      m.heading(2, 'A last scene'),
      inline`${bob()} There is so much more to do. ${todo(inline`But what exactly??`)} While editing, it
can be useful to have these notes. ${alice()} They also show up at the end of the document,
in their dedicated list. You can click on them, to go back here. ${bob()} There are many options
to play around in the ${raw({ block: true, lang: 'typ' }, '#show: theatre.with(...)')} block
at the start of the page. Almost all of these options are set to their default values, so you
can remove them if you want to. ${todo(inline`Change some default values`)}`,
    ),
  )
}
