// Converted from test/universe/corpus/basic-report.typ by scripts/convert-suite.ts — do not edit.
import { T, cm, define, doc, heading, image, importPackage, inline, lorem, path, show } from '../../../src/index.ts'

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
    heading({ depth: 1 }, inline('Einleitung')),
    inline(lorem(120)),
    inline(lorem(150)),
    heading({ depth: 2 }, inline('Fluggeräte')),
    inline(lorem(100)),
    heading({ depth: 3 }, inline('Raketen – Eine Übersicht')),
    inline(lorem(80)),
    heading({ depth: 1 }, inline('Dein erster Raketenstart')),
    inline(lorem(150)),
    heading({ depth: 2 }, inline('Wie du in die Rakete einsteigst')),
    inline(lorem(90)),
    heading({ depth: 2 }, inline('Das Cockpit')),
    inline(lorem(120)),
    heading({ depth: 3 }, inline('Die wichtigsten Knöpfe und Hebel')),
    inline(lorem(50)),
  )
}
