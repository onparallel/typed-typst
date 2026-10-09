// Converted from test/universe/corpus/jsume.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, external, importPackage, inches, json, path, pt, show } from '../../../src/index.ts'

export default () => {
  const jsume = external('jsume')
  const jsume_with = define('with')
    .named('bottom-margin', T.any, null)
    .named('font', T.any, null)
    .named('font-size', T.any, null)
    .named('jsume-data', T.any, null)
    .named('lang', T.any, null)
    .named('left-margin', T.any, null)
    .named('nerd-font', T.any, null)
    .named('paper', T.any, null)
    .named('right-margin', T.any, null)
    .named('top-margin', T.any, null)
    .returns(T.any)
    .external(jsume)
  return doc(
    importPackage('@preview/jsume:0.1.0', [jsume]),
    show(
      jsume_with({
        paper: 'a4',
        topMargin: inches(0.3),
        bottomMargin: inches(0.3),
        leftMargin: inches(0.3),
        rightMargin: inches(0.3),
        font: 'Libertinus Serif',
        nerdFont: 'Symbols Nerd Font',
        fontSize: pt(11),
        lang: 'en-US',
        jsumeData: json(path('en-US.jsume.json')),
      }),
    ),
  )
}
