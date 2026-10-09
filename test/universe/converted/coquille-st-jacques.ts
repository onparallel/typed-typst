// Converted from test/universe/corpus/coquille-st-jacques.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  define,
  doc,
  emph,
  external,
  image,
  importPackage,
  inline,
  linebreak,
  m,
  path,
  pct,
  raw,
  show,
  space,
  strong,
} from '../../../src/index.ts'

export default () => {
  const courseTemplate = external('course-template')
  const def = define('def').pos('arg1', T.content).returns(T.any).external()
  const key = define('key').pos('arg1', T.content).returns(T.any).external()
  const warn = define('warn').pos('arg1', T.content).returns(T.any).external()
  const ex = define('ex').pos('arg1', T.content).returns(T.any).external()
  const analogy = define('analogy').pos('arg1', T.content).returns(T.any).external()
  const schema = define('schema').pos('arg1', T.any).pos('arg2', T.content).returns(T.any).external()
  const keyhint = define('keyhint').pos('arg1', T.content).returns(T.any).external()
  const qcmQ = define('qcm-q')
    .pos('arg1', T.any)
    .pos('arg2', T.content)
    .named('lines', T.any, null)
    .named('options', T.any, null)
    .returns(T.any)
    .external()
  const courseTemplate_with = define('with')
    .named('author', T.any, null)
    .named('cover-background', T.any, null)
    .named('cover-metadata', T.content, [])
    .named('cover-subtitle', T.any, null)
    .named('cover-title', T.content, [])
    .named('eyebrow', T.content, [])
    .named('show-toc', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(courseTemplate)
  return doc(
    importPackage('@preview/coquille-st-jacques:0.1.0', [
      courseTemplate,
      def,
      key,
      warn,
      ex,
      analogy,
      schema,
      keyhint,
      qcmQ,
    ]),
    show(
      courseTemplate_with({
        title: 'Titre de votre cours',
        author: 'Votre nom',
        eyebrow: inline`MATIÈRE — NIVEAU`,
        coverTitle: inline`Titre principal ${linebreak()} sur deux lignes`,
        coverSubtitle: "Une phrase d'accroche",
        coverMetadata: inline`Contexte · classe · établissement`,
        coverBackground: image({ width: pct(100), height: pct(100), fit: 'cover' }, path('cover.png')),
        showToc: true,
      }),
    ),
    m.heading(1, 'Premier chapitre'),
    inline`Voici un paragraphe d'introduction. La syntaxe Typst est très proche de ce qu'on écrit naturellement
: ${strong(inline`gras`)}, ${emph(inline`italique`)}, ${raw('monospace')}.`,
    inline(
      def(inline`${space}${strong(inline`Terme nouveau`)} — la définition tient en une phrase claire et accessible
au niveau visé.${space}`),
    ),
    inline(key(inline`${space}Le point essentiel à retenir, en une ou deux phrases.${space}`)),
    m.heading(2, 'Une sous-partie'),
    inline(warn(inline`${space}Attention à ne pas confondre ce concept avec un autre proche.${space}`)),
    inline(ex(inline`${space}Un exemple concret tiré de la vie courante, qui ancre la notion.${space}`)),
    inline(analogy(inline`${space}Une comparaison qui aide à comprendre, par image mentale.${space}`)),
    m.heading(1, 'Deuxième chapitre'),
    'Pour insérer un schéma avec une légende :',
    inline(schema(image({ width: pct(100) }, path('schema.png')), inline`Schéma — décrivez ici ce que l'on voit`)),
    inline(
      keyhint(inline`${space}La clé de compréhension globale : ce qu'il faut « voir » pour que toute la suite devienne
évidente.${space}`),
    ),
    m.heading(1, 'Auto-test'),
    inline(
      qcmQ(
        { options: [inline`Choix A`, inline`Choix B`, inline`Choix C`] },
        1,
        inline`Une question avec choix multiple ?`,
      ),
    ),
    inline(qcmQ({ lines: 3 }, 2, inline`Une question à réponse libre.`)),
    inline(qcmQ(3, inline`Une question d'observation, sans cadre de réponse.`)),
  )
}
