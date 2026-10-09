// Converted from test/universe/corpus/silky-slides-insa.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, external, importPackage, inline, m, show, smartquote, text } from '../../../src/index.ts'

export default () => {
  const insaSlides = external('insa-slides')
  const insaColors = external('insa-colors')
  const pause = external('pause')
  const sectionSlide = define('section-slide')
    .pos('arg1', T.content)
    .named('description', T.content, [])
    .returns(T.any)
    .external()
  const insaSlides_with = define('with')
    .named('insa', T.any, null)
    .named('subtitle', T.any, null)
    .named('title', T.any, null)
    .named('title-visual', T.any, null)
    .returns(T.any)
    .external(insaSlides)
  const insaColors_secondary = external('secondary', insaColors)
  const insaColors_primary = external('primary', insaColors)
  return doc(
    importPackage('@preview/silky-slides-insa:0.2.0', [insaSlides, insaColors, pause, sectionSlide]),
    show(
      insaSlides_with({
        title: 'Titre du diaporama',
        titleVisual: null,
        subtitle: 'Sous-titre (noms et prénoms ?)',
        insa: 'rennes',
      }),
    ),
    m.heading(1, 'Titre de section'),
    m.heading(2, 'Titre d', smartquote({ double: false }), 'une slide'),
    m.list(m.item(m.lines('Liste', m.list(m.item(m.lines('dans', m.list(m.item(['une liste'])))))))),
    inline`On peut aussi faire un ${text({ fill: insaColors_secondary }, inline`texte`)} avec les ${text({ fill: insaColors_primary }, inline`couleurs de l'INSA`)}
!`,
    m.heading(2, 'Une autre slide'),
    'Du texte',
    inline(pause),
    'Et un autre texte qui apparaît plus tard !',
    inline(sectionSlide({ description: inline`Avec une petite description` }, inline`Une autre section`)),
    'Coucou',
  )
}
