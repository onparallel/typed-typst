// Converted from test/universe/corpus/clean-htl.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, datetime, define, doc, external, importPackage, inline, m, show, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const htlNotes = external('htl-notes')
  const hl = define('hl').pos('arg1', T.content).returns(T.any).external()
  const definition = define('definition').pos('arg1', T.content).returns(T.any).external()
  const remember = define('remember').pos('arg1', T.content).returns(T.any).external()
  const htlNotes_with = define('with')
    .named('class', T.any, null)
    .named('date', T.any, null)
    .named('student', T.any, null)
    .named('subject', T.any, null)
    .named('teacher', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(htlNotes)
  return doc(
    importPackage('@preview/clean-htl:0.1.0', [htlNotes, hl, definition, remember]),
    show(
      htlNotes_with({
        title: 'Thema',
        subject: 'Fach',
        student: 'Vorname Nachname',
        class: '1cHEL',
        teacher: 'Lehrer',
        date: datetime.today(),
      }),
    ),
    m.heading(1, 'Kapitel'),
    inline`Text mit ${hl(inline`Highlight`)}.`,
    inline(unsafeRaw.math.block`R = U / I`),
    inline(definition(inline`Definition`)),
    inline(remember(inline`Merksatz`)),
  )
}
