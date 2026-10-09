// Converted from test/universe/corpus/electrocentrale.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  auto,
  blocks,
  cm,
  define,
  doc,
  external,
  figure,
  gray,
  importPackage,
  inline,
  label,
  labelled,
  let_,
  m,
  ref,
  show,
  space,
  sym,
  text,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const tp = external('tp')
  const fontPresets = external('font-presets')
  const t = define('t').pos('arg1', T.any).pos('arg2', T.content).returns(T.any).external()
  const kohm = external('kohm')
  const nf = external('nf')
  const logoEce = define('logo-ece').named('width', T.any, null).returns(T.any).external()
  const callout = define('callout')
    .pos('arg1', T.content)
    .named('title', T.any, null)
    .named('type', T.any, null)
    .returns(T.any)
    .external()
  const e = define('e').pos('arg1', T.any).pos('arg2', T.content).returns(T.any).external()
  const annexes = external('annexes')
  const attention = define('attention').pos('arg1', T.content).returns(T.any).external()
  const tp_with = define('with')
    .named('authors', T.any, null)
    .named('city', T.any, null)
    .named('date', T.any, null)
    .named('draft', T.any, null)
    .named('font', T.any, null)
    .named('groupe', T.any, null)
    .named('lang', T.any, null)
    .named('major', T.any, null)
    .named('promo', T.any, null)
    .named('show-emails', T.any, null)
    .named('show-roles', T.any, null)
    .named('supervisor', T.any, null)
    .named('title', T.any, null)
    .named('tp-num', T.any, null)
    .returns(T.any)
    .external(tp)
  const fontPresets_at = define('at')
    .pos('arg1', T.any)
    .named('default', T.any, null)
    .returns(T.any)
    .external(fontPresets)
  const [langueDecl, langue] = let_('langue', 'fr')
  const [stylePoliceDecl, stylePolice] = let_('style-police', 'latex')
  return doc(
    importPackage('@preview/electrocentrale:0.1.0', [
      tp,
      fontPresets,
      t,
      kohm,
      nf,
      logoEce,
      callout,
      e,
      annexes,
      attention,
    ]),
    inline(langueDecl, space, stylePoliceDecl),
    show(
      tp_with({
        lang: langue,
        title: 'Filtres Actifs et Traitement du Signal',
        tpNum: '1',
        promo: 'ING5',
        major: 'Systèmes Embarqués',
        groupe: 'Groupe 02',
        authors: [
          { name: 'André-Marie AMPÈRE', email: 'ampere@ece.fr', role: 'Électronique analogique' },
          { name: 'Alessandro VOLTA', email: 'volta@ece.fr', role: 'Mesures et banc de test' },
        ],
        supervisor: { name: 'Dr. Jean DUPONT', email: 'jean.dupont@ece.fr' },
        showRoles: true,
        showEmails: true,
        date: auto,
        city: 'Paris',
        draft: false,
        font: fontPresets_at({ default: 'New Computer Modern' }, stylePolice),
      }),
    ),
    m.lines(m.heading(1, 'Première partie : Étude théorique et expérimentale'), m.heading(2, 'Analyse fréquentielle')),
    inline(t(1, inline`Calculer la fonction de transfert théorique du filtre passe-bas actif.`)),
    inline`La fonction de transfert théorique s'exprime par : ${labelled([unsafeRaw.math.block`H(j omega) = - (R_2 / R_1) 1 / (1 + j (omega / omega_0))`, space], label('eq:transfert'))}`,
    inline`Avec ${unsafeRaw.math`R_1 = 10#kohm`}, ${unsafeRaw.math`R_2 = 100#kohm`}, et ${unsafeRaw.math`C_1 = 100#nf`}.
Le banc de test est présenté sur la ${ref(label('fig:logo'))}.`,
    inline(
      labelled([figure({ caption: inline`Logo vectoriel ECE` }, logoEce({ width: cm(5) })), space], label('fig:logo')),
    ),
    inline(
      callout(
        { title: 'Précaution expérimentale', type: 'warning' },
        inline`${space}Vérifier l'alimentation symétrique (+15 V / ${sym.minus}15 V) de l'amplificateur opérationnel
avant la mise sous tension.${space}`,
      ),
    ),
    inline(e(1, inline`Mesure expérimentale du gain et traitement des données.`)),
    inline`Les signaux observés à l'oscilloscope sont illustrés sur la ${ref(label('fig:mesures'))}.`,
    inline(
      labelled(
        [figure({ caption: inline`Résultats expérimentaux` }, logoEce({ width: cm(5) })), space],
        label('fig:mesures'),
      ),
    ),
    m.lines(m.heading(1, 'Méthodologie et recommandations'), m.heading(2, 'Guide de rédaction')),
    inline(
      text(
        { fill: gray },
        blocks(
          m.lines(
            'Pour chaque question, expliciter :',
            m.enum(
              m.item(['Le problème']),
              m.item(['La solution technique']),
              m.item(['Les résultats obtenus']),
              m.item(['La validation critique']),
            ),
          ),
        ),
      ),
    ),
    show(annexes),
    m.heading(1, 'Annexes'),
    inline`Documents volumineux, relevés de mesures brutes ou code source (${attention(inline`pas de code brut dans le corps du rapport`)}).`,
  )
}
