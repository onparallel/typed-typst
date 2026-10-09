// Converted from test/universe/corpus/basic-report.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, cm, define, doc, image, importPackage, inline, lorem, m, path, show } from '../../../src/index.ts'

export default () => {
  const basicReport = define('basic-report')
    .pos('arg1', T.any)
    .named('affiliation', T.any, null)
    .named('author', T.any, null)
    .named('compact-mode', T.any, null)
    .named('doc-category', T.any, null)
    .named('doc-title', T.any, null)
    .named('language', T.any, null)
    .named('logo', T.any, null)
    .returns(T.any)
    .external()
  return doc(
    importPackage('@preview/basic-report:0.5.0', [basicReport]),
    show((it, ctx) =>
      basicReport(
        {
          docCategory: 'Betriebsanleitung',
          docTitle: 'Raketenstart für Dummies',
          author: 'Daniel Düsentrieb',
          affiliation: 'MouseTec, Entenhausen',
          logo: image({ width: cm(2) }, path('assets/aerospace-engineering.png')),
          language: 'de',
          compactMode: true,
        },
        it,
      ),
    ),
    m.heading(1, 'Einleitung'),
    inline(lorem(120)),
    inline(lorem(150)),
    m.heading(2, 'Fluggeräte'),
    inline(lorem(100)),
    m.heading(3, 'Raketen – Eine Übersicht'),
    inline(lorem(80)),
    m.heading(1, 'Dein erster Raketenstart'),
    inline(lorem(150)),
    m.heading(2, 'Wie du in die Rakete einsteigst'),
    inline(lorem(90)),
    m.heading(2, 'Das Cockpit'),
    inline(lorem(120)),
    m.heading(3, 'Die wichtigsten Knöpfe und Hebel'),
    inline(lorem(50)),
  )
}
