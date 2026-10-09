// Converted from test/universe/corpus/agregyst.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  define,
  doc,
  document,
  emph,
  external,
  importPackage,
  inline,
  label,
  m,
  path,
  read,
  ref,
  set,
  show,
  space,
  strong,
  sym,
  text,
  title,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const tableau = external('tableau')
  const dev = define('dev').pos('arg1', T.content).returns(T.any).external()
  const recap = define('recap').returns(T.any).external()
  const item = define('item')
    .pos('arg1', T.any)
    .pos('arg2', T.content)
    .named('summary', T.content, [])
    .returns(T.any)
    .external()
  return doc(
    importPackage('@preview/agregyst:1.2.0', [tableau, dev, recap, item]),
    m.lines(set(text, { lang: 'fr' }), set(document, { title: inline`Titre de la leçon` }), show(tableau)),
    inline(title()),
    m.heading(1, 'Première partie'),
    m.heading(2, 'Première sous-partie', ' ', ref(label('TOR'))),
    inline(item('Définition', inline`${space}Un ${emph(inline`mot`)} est...${space}`)),
    inline(
      unsafeRaw.code({
        body: item(
          'Theorème',
          inline`${space}${strong(inline`Lemme de l'étoile.`)} Soit ${unsafeRaw.math`u`} un mot...${space}`,
        ),
      })<'content'>`[#body<th:étoile>]`,
    ),
    inline(
      item(
        { summary: inline`Utilité du ${ref(label('th:étoile'))}` },
        'Remarque',
        inline`${space}Le ${ref(label('th:étoile'))} est utile pour...${space}`,
      ),
    ),
    m.heading(2, 'Deuxième sous-partie', ' ', ref(label('NAN'))),
    inline(
      dev(inline(space, item('Exemple', inline`${space}Le ${emph(inline`langage de Dyck`)} est...${space}`), space)),
    ),
    m.heading(1, 'Deuxième partie'),
    inline`...`,
    inline(recap()),
    inline(bibliography(read({ encoding: null }, path('bib.yaml')))),
  )
}
