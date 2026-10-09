// Converted from test/universe/corpus/summy.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, external, importPackage, includeFile, m, pt, set, show, text } from '../../../src/index.ts'

export default () => {
  const cheatsheet = external('cheatsheet')
  const cheatsheet_with = define('with')
    .named('authors', T.any, null)
    .named('column-gutter', T.any, null)
    .named('font-size', T.any, null)
    .named('line-skip', T.any, null)
    .named('num-columns', T.any, null)
    .named('numbered-units', T.any, null)
    .named('title', T.any, null)
    .named('write-title', T.any, null)
    .named('x-margin', T.any, null)
    .named('y-margin', T.any, null)
    .returns(T.any)
    .external(cheatsheet)
  return doc(
    importPackage('@preview/summy:0.1.0', [cheatsheet]),
    set(text, { font: 'Helvetica' }),
    show(
      cheatsheet_with({
        title: 'Cheatsheet Title',
        authors: 'Authors',
        writeTitle: false,
        fontSize: pt(5.5),
        lineSkip: pt(5.5),
        xMargin: pt(30),
        yMargin: pt(30),
        numColumns: 5,
        columnGutter: pt(4),
        numberedUnits: false,
      }),
    ),
    m.lines(
      includeFile('units/00-general-formula.typ'),
      includeFile('units/01-lorem-ipsum.typ'),
      includeFile('units/02-lorem-ipsum.typ'),
      includeFile('units/03-lorem-ipsum.typ'),
      includeFile('units/04-lorem-ipsum.typ'),
      includeFile('units/05-lorem-ipsum.typ'),
    ),
  )
}
