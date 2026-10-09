// Converted from test/universe/corpus/october.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  datetime,
  define,
  doc,
  external,
  importPackage,
  m,
  page,
  pct,
  pt,
  set,
  show,
  text,
} from '../../../src/index.ts'

export default () => {
  const calendar = external('calendar')
  const calendar_with = define('with').named('year', T.any, null).returns(T.any).external(calendar)
  return doc(
    importPackage('@preview/october:1.0.1', [calendar]),
    m.lines(set(page, { flipped: true, margin: pct(8), paper: 'a4' }), set(text, { size: pt(14) })),
    show(calendar_with({ year: datetime.today().year() })),
  )
}
