// Converted from test/universe/corpus/typographix-polytechnique-slides.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  align,
  center,
  cm,
  define,
  div,
  doc,
  external,
  fr,
  grid,
  horizon,
  importPackage,
  inline,
  linebreak,
  m,
  outline,
  pct,
  pt,
  rect,
  red,
  show,
  smartquote,
  strong,
  table,
  text,
  unsafeRaw,
  v,
} from '../../../src/index.ts'

export default () => {
  const template = external('template')
  const template_apply = define('apply')
    .named('frame-theme', T.any, null)
    .named('h1-theme', T.any, null)
    .named('ratio', T.any, null)
    .returns(T.any)
    .external(template)
  const template_cover = define('cover')
    .named('date', T.any, null)
    .named('speaker', T.any, null)
    .named('theme', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(template)
  return doc(
    importPackage('@preview/typographix-polytechnique-slides:0.2.0', template),
    show(template_apply.with({ ratio: div(16, 9), h1Theme: 'light', frameTheme: 'light' })),
    inline(template_cover({ title: 'Soutenance de stage', speaker: 'Rémi Germe', date: '22/08/2025', theme: 'dark' })),
    inline(outline({ title: 'Sommaire' })),
    m.heading(1, 'Branchez-vous'),
    m.heading(2, 'Introduction'),
    m.list(
      m.item(['On va être impactant']),
      m.item(['Faut toujours 3 points']),
      m.item([
        'J',
        smartquote({ double: false }),
        'ai appris ça en semcom (j',
        smartquote({ double: false }),
        'ai validé)',
      ]),
    ),
    inline`${v(cm(1))} Un espace vertical pour aérer le tout. Et maintenant une grille avec deux éléments
(ici, des tableaux):`,
    inline(
      grid(
        { columns: [fr(1), fr(1)], align: add(horizon, center) },
        table(
          { columns: [fr(2), fr(1), fr(1)], inset: pt(20) },
          inline(strong(inline`Volume horaire`)),
          inline(strong(inline`Fun`)),
          inline(strong(inline`Ennui`)),
          inline`au moins 3h par jour`,
          inline`oui`,
          inline`non`,
          inline`au moins 7h par jour`,
          table.cell({ colspan: 2 }, rect({ fill: red, width: pct(100) })),
        ),
        table(
          { stroke: (x, y) => unsafeRaw.code<any>`if y == 0 { (bottom: 1pt) } else { none }` },
          inline(strong(inline`Top cinq des gares`)),
          inline`L'Argentière-la-Bessée`,
          inline`Paris Gare de Lyon`,
          inline`Cassis`,
          inline`Saint-Pierre des Corps`,
          inline`Montparnasse`,
        ),
      ),
    ),
    m.heading(1, 'CHARGEZ'),
    m.lines(
      m.heading(2, 'Un titre vraiment long', ' ', linebreak(), ' ', 'sur plusieurs lignes'),
      inline`${v(div(pt(65), 2))} Mon dieu, qu'ai-je fait ?`,
    ),
    m.heading(2, 'Conclusion'),
    inline(align(add(center, horizon), text({ size: pt(40) }, 'Waouh on a bien bossé.'))),
    inline(align(center, text({ fill: unsafeRaw.code<any>`template.PALETTE.gold` }, 'Merci de votre attention.'))),
  )
}
