// Converted from test/universe/corpus/etykett.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, csv, define, doc, external, importPackage, inline, let_, mm, path, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const etykett = external('etykett')
  const etykett_labels = define('labels')
    .pos('arg1', T.any)
    .pos('arg2', T.any)
    .named('border', T.any, null)
    .named('sheet', T.any, null)
    .returns(T.any)
    .external(etykett)
  const etykett_sheet = define('sheet')
    .named('columns', T.any, null)
    .named('gutters', T.any, null)
    .named('margins', T.any, null)
    .named('paper', T.any, null)
    .named('rows', T.any, null)
    .returns(T.any)
    .external(etykett)
  const [dataDecl, data_2] = let_('data', csv(path('data.csv')).slice(1))
  return doc(
    importPackage('@preview/etykett:0.1.1', etykett),
    dataDecl,
    unsafeRaw.markup`#let name-label((first-name, last-name)) = [
  #set align(center+horizon)
  #set text(14pt)
  Hello, my name is\\
  #set text(1.4em)
  *#first-name #last-name*
]`,
    inline(unsafeRaw.code<any>`etykett.labels(
  sheet: etykett.sheet(
    paper: "a4",
    margins: (
      top: 14mm,
      bottom: 15mm,
      x: 6mm,
    ),
    gutters: (x: 2.5mm),
    rows: 9,
    columns: 3,
  ),
  // upside-down: true,
  // sublabels: (
  //   rows: 1,
  //   columns: 5,
  // ),
  border: true,

  ..etykett.skip(3),
  ..data.map(name-label),
)`),
  )
}
