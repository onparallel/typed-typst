// Converted from test/universe/corpus/gibz-script.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  blocks,
  center,
  define,
  doc,
  external,
  fr,
  horizon,
  importPackage,
  inline,
  left,
  lorem,
  m,
  raw,
  right,
  show,
  space,
  strong,
  sym,
  table,
} from '../../../src/index.ts'

export default () => {
  const gibzScript = external('gibz-script')
  const gibzIpaCriterion = define('gibz-ipa-criterion')
    .pos('arg1', T.any)
    .pos('arg2', T.any)
    .pos('arg3', T.any)
    .pos('arg4', T.content)
    .pos('arg5', T.content)
    .pos('arg6', T.content)
    .pos('arg7', T.content)
    .named('active-level', T.any, null)
    .named('feedback', T.content, [])
    .returns(T.any)
    .external()
  const gibzScript_with = define('with')
    .named('documentTitle', T.any, null)
    .named('language', T.any, null)
    .named('moduleNumber', T.any, null)
    .named('moduleTitle', T.any, null)
    .returns(T.any)
    .external(gibzScript)
  return doc(
    importPackage('@preview/gibz-script:0.2.0', [gibzScript, gibzIpaCriterion]),
    show(gibzScript_with({ moduleNumber: '000', moduleTitle: 'Modultitel', documentTitle: 'Skript', language: 'de' })),
    m.heading(1, 'Intro'),
    'Hello world!',
    m.heading(1, 'IPA-Kriterium Vorschau'),
    inline(
      gibzIpaCriterion(
        {
          activeLevel: 3,
          feedback: inline`${space}Gute Grundstruktur. Der Abschnitt zu Quellen und Reflexion sollte noch präziser gegliedert
werden.${space}`,
        },
        'Doc01',
        'Gliederung',
        'Wie ist die Dokumentation gegliedert? Gibt es eine klar unterscheidbare Trennung von Inhalt und Struktur?',
        blocks(
          m.enum(
            m.item([
              'Es ist klar, dass es keine Unterschiede gibt. Es soll auch deutlich unterscheidbar vom Standard-Inhalt sein.',
            ]),
            m.item(['ebenso', sym.dots.h]),
            m.item(['schliesslich solle alles einfach gut sein :-)']),
          ),
        ),
        inline`${space}Die Dokumentation ist mehrheitlich klar und gut gegliedert, mit kleinen Lücken.${space}`,
        inline`${space}Die Gliederung ist teilweise vorhanden, aber wichtige Inhalte fehlen oder sind unklar.${space}`,
        inline`${space}Keine erkennbare Struktur oder Dokumentation.${space}`,
      ),
    ),
    m.lines(m.heading(2, 'Listen und Aufzählungen'), inline(lorem(40))),
    m.enum(
      m.item([lorem(4)]),
      m.item([lorem(4), space, lorem(21)]),
      m.item([lorem(6)]),
      m.item([lorem(26)]),
      m.item([lorem(8)]),
    ),
    inline(lorem(40)),
    m.list(
      { tight: false },
      m.item([lorem(4)]),
      m.item([lorem(21)]),
      m.item([lorem(6)]),
      m.item([lorem(26)]),
      m.item([lorem(8)]),
    ),
    m.heading(2, 'Tabellen Vorschau'),
    inline(
      table(
        { columns: [fr(2), fr(1), fr(1)] },
        table.header(inline`Kriterium`, inline`Wert`, inline`Status`),
        inline`Layout`,
        inline`0.2.0`,
        inline`OK`,
        inline`Listen/Enum`,
        inline`kein Blocksatz`,
        inline`OK`,
        inline`IPA-Kriterium`,
        inline`aktiv`,
        inline`OK`,
      ),
    ),
    inline(
      table(
        {
          columns: [fr(1), fr(1), fr(1), fr(1)],
          align: [add(left, horizon), add(right, horizon), add(right, horizon), add(center, horizon)],
        },
        table.header(inline`Position`, inline`Plan`, inline`Ist`, inline`Δ`),
        inline`Entwicklung`,
        inline`24 h`,
        inline`22 h`,
        inline`−2 h`,
        inline`Testing`,
        inline`12 h`,
        inline`13 h`,
        inline`+1 h`,
        inline`Dokumentation`,
        inline`8 h`,
        inline`9 h`,
        inline`+1 h`,
      ),
    ),
    m.heading(1, 'Inline Code'),
    inline`A variable always has three parts: a ${strong(inline`data type`)} (for example ${raw('bool')},
${raw('int')}), a ${strong(inline`name`)}, and, optionally, a ${strong(inline`starting value`)}.
The data type decides which values are even allowed — more on that in the next chapter.`,
  )
}
