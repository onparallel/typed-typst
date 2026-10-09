// Converted from test/universe/corpus/rirekisho-ofa.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, importPackage, inline, let_ } from '../../../src/index.ts'

export default () => {
  const rirekisho = define('rirekisho').pos('arg1', T.any).returns(T.any).external()
  const [dataDecl, data_2] = let_('data', {
    documentDate: 'YYYY年MM月DD日現在',
    nameKana: 'シメイ（フリガナ）',
    name: '氏名',
    birthDate: 'YYYY年MM月DD日（満XX歳）',
    address: '都道府県・市区町村・番地',
    phone: '電話番号',
    history: [
      { year: 'YYYY', month: 'MM', detail: '学歴・職歴の項目' },
      { year: 'YYYY', month: 'MM', detail: '学歴・職歴の項目' },
      { year: 'YYYY', month: 'MM', detail: '学歴・職歴の項目' },
      { year: 'YYYY', month: 'MM', detail: '学歴・職歴の項目' },
      { year: 'YYYY', month: 'MM', detail: '学歴・職歴の項目' },
    ],
    qualifications: [
      { year: 'YYYY', month: 'MM', detail: '免許・資格' },
      { year: 'YYYY', month: 'MM', detail: '免許・資格' },
      { year: 'YYYY', month: 'MM', detail: '免許・資格' },
    ],
    motivation: '応募先に合わせて、志望動機・アピールポイントを記入します。',
    preferences: '希望条件がある場合のみ記入します。',
  })
  return doc(importPackage('@preview/rirekisho-ofa:0.1.0', [rirekisho]), dataDecl, inline(rirekisho(data_2)))
}
