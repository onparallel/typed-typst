// Converted from test/suite/corpus/figure-localization-ru.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { cm, doc, figure, inline, polygon, set, text } from '../../../src/index.ts'

export default () => {
  return doc(
    set(text, { lang: 'ru' }),
    inline(figure({ caption: inline`Пятиугольник` }, polygon.regular({ size: cm(1), vertices: 8 }))),
  )
}
