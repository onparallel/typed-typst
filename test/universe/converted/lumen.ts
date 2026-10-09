// Converted from test/universe/corpus/lumen.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, image, importPackage, inline, m, page, path, pct, set, text } from '../../../src/index.ts'

export default () => {
  const cover = define('cover')
    .named('aca-year', T.any, null)
    .named('body-font', T.any, null)
    .named('co-supervisor', T.any, null)
    .named('co-supervisor-role', T.any, null)
    .named('faculty-logo', T.any, null)
    .named('faculty-logo-width', T.any, null)
    .named('field-en', T.any, null)
    .named('field-fr', T.any, null)
    .named('font-scale', T.any, null)
    .named('fund-logo', T.any, null)
    .named('fund-logo-width', T.any, null)
    .named('jury1', T.any, null)
    .named('jury2', T.any, null)
    .named('jury3', T.any, null)
    .named('jury4', T.any, null)
    .named('jury5', T.any, null)
    .named('jury6', T.any, null)
    .named('jury7', T.any, null)
    .named('lab', T.any, null)
    .named('name', T.any, null)
    .named('subtitle', T.any, null)
    .named('supervisor', T.any, null)
    .named('supervisor-role', T.any, null)
    .named('title', T.any, null)
    .named('title-font', T.any, null)
    .returns(T.any)
    .external()
  return doc(
    importPackage('@preview/lumen:0.1.3', [cover]),
    m.lines(set(page, { paper: 'a4' }), inline(set(text, { lang: 'fr' }))),
    inline(
      cover({
        facultyLogo: image(path('logos/archi.png')),
        facultyLogoWidth: pct(75),
        titleFont: 'IBM Plex Sans',
        title: '[Titre de la thèse]',
        subtitle: '[Facultatif: sous-titre de la thèse]',
        bodyFont: 'IBM Plex Serif',
        name: '[Prénom NOM]',
        fieldEn: '[Diploma]',
        fieldFr: '[Diplôme]',
        acaYear: '20[..]-20[..]',
        supervisor: '[du/de la] Professeur[e] [Prénom NOM]',
        supervisorRole: '[promoteur/promotrice]',
        coSupervisor: '[du/de la] Professeur[e] [Prénom NOM]',
        coSupervisorRole: '[co-promoteur/promotrice]',
        lab: '[facultatif: unité de recherche]',
        jury1: 'Prénom NOM (Université libre de Bruxelles, Président·e)',
        jury2: 'Prénom NOM ([Université], Sécretaire)',
        jury3: 'Prénom NOM ([Université])',
        jury4: 'Prénom NOM ([Université])',
        jury5: null,
        jury6: null,
        jury7: null,
        fundLogo: image(path('logos/FNRS-fr.png')),
        fundLogoWidth: pct(90),
        fontScale: 1,
      }),
    ),
  )
}
