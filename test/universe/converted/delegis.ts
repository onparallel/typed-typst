// Converted from test/universe/corpus/delegis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  define,
  doc,
  em,
  external,
  image,
  importPackage,
  inline,
  lorem,
  m,
  outline,
  path,
  show,
  sym,
  v,
} from '../../../src/index.ts'

export default () => {
  const delegis = external('delegis')
  const unnumbered = define('unnumbered')
    .pos('arg1', T.content)
    .named('level', T.any, null)
    .named('outlined', T.any, null)
    .returns(T.any)
    .external()
  const s = external('s')
  const section = define('section').pos('arg1', T.content).pos('arg2', T.content).returns(T.any).external()
  const delegis_with = define('with')
    .named('abbreviation', T.any, null)
    .named('draft', T.any, null)
    .named('in-effect', T.any, null)
    .named('logo', T.any, null)
    .named('resolution', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(delegis)
  return doc(
    importPackage('@preview/delegis:0.4.0', [delegis, unnumbered, s, section]),
    show(
      delegis_with({
        title: 'Vereinsordnung zu ABCDEF',
        abbreviation: 'ABCDEFVO',
        resolution: '3. Beschluss des Vorstands vom 24.01.2024',
        inEffect: '24.01.2024',
        draft: false,
        logo: image({ alt: 'WüSpace e. V.' }, path('wuespace.jpg')),
      }),
    ),
    inline(unnumbered({ level: 1, outlined: false }, inline`Vorbemerkung`)),
    'Fußnoten dienen als redaktionelle Anmerkungen oder Interpretationshilfen und sind nicht selbst Teil der Beschlussfassung.',
    inline(v(em(2))),
    inline(outline()),
    inline(unnumbered(inline`Präambel`)),
    inline(lorem(30)),
    m.heading(1, 'Allgemeiner Teil'),
    '§ 1 Grundlegendes',
    inline`(1) ${lorem(20)}`,
    m.lines(
      inline`(2) ${s}${sym.space.nobreak}${lorem(10)} ${s}${sym.space.nobreak}${lorem(10)} ${s}${sym.space.nobreak}Das
beinhaltet`,
      m.enum(
        m.item(['Listenelemente,']),
        m.item(
          m.lines(
            'weitere Listenelemente, wie zum Beispiel',
            m.enum(m.item(['Kind-Listenelemente,']), m.item(['weitere Kind-Listenelemente, sowie'])),
          ),
        ),
        m.item(['ein letztes Listenelement.']),
      ),
    ),
    '§ 2 Bestimmungen',
    inline(lorem(30)),
    m.heading(1, 'Spezieller Teil'),
    '§ 2a Ergänzende Bestimmungen',
    inline`(1) ${lorem(5)}`,
    inline`(2) ${s}${sym.space.nobreak}${lorem(3)} ${s}${sym.space.nobreak}${lorem(8)}`,
    inline(section(inline`§ 3`, inline`Administrator*innen`)),
    inline(lorem(30)),
  )
}
