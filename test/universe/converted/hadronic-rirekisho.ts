// Converted from test/universe/corpus/hadronic-rirekisho.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, cm, define, doc, em, end, external, h, importPackage, inline, show, space } from '../../../src/index.ts'

export default () => {
  const _____ = external('履歴書設定')
  const ____ = define('基本情報')
    .named('写真', T.any, null)
    .named('名', T.any, null)
    .named('名読み', T.any, null)
    .named('姓', T.any, null)
    .named('姓読み', T.any, null)
    .named('年齢', T.any, null)
    .named('現住所', T.any, null)
    .named('生年月日', T.any, null)
    .named('連絡先', T.any, null)
    .returns(T.any)
    .external()
  const _____2 = define('学歴職歴').named('学歴', T.any, null).named('職歴', T.any, null).returns(T.any).external()
  const ___ = define('資格欄').named('資格', T.any, null).returns(T.any).external()
  const _____3 = define('志望動機').pos('arg1', T.content).named('height', T.any, null).returns(T.any).external()
  const _____4 = define('本人希望').pos('arg1', T.content).named('height', T.any, null).returns(T.any).external()
  const ____2 = define('署名欄').named('signature', T.any, null).returns(T.any).external()
  const ______with = define('with')
    .named('date_style', T.any, null)
    .named('margin', T.any, null)
    .named('paper', T.any, null)
    .returns(T.any)
    .external(_____)
  return doc(
    importPackage('@preview/hadronic-rirekisho:0.1.0', [_____, ____, _____2, ___, _____3, _____4, ____2]),
    show(______with({ paper: 'a4', margin: cm(1.5), date_style: '和暦' })),
    inline(
      ____({
        姓: '山田',
        名: '太郎',
        姓読み: 'やまだ',
        名読み: 'たろう',
        生年月日: '平成2年1月1日',
        年齢: 36,
        現住所: {
          郵便番号: '100-0001',
          住所: '東京都 千代田区 千代田 1番1号',
          ふりがな: 'とうきょうと ちよだく ちよだ',
          電話: '090-0000-0000',
          メール: 'taro.yamada@example.com',
        },
        連絡先: '同上',
        写真: null,
      }),
    ),
    inline(
      _____2({
        学歴: [
          { 年: '平成21', 月: '4', 内容: '○○大学 △△学部 入学' },
          { 年: '平成25', 月: '3', 内容: '○○大学 △△学部 卒業' },
        ],
        職歴: [
          { 年: '平成25', 月: '4', 内容: '株式会社○○ 入社' },
          { 年: '', 月: '', 内容: inline`以上${h(em(8))}`, align: end },
        ],
      }),
    ),
    inline(___({ 資格: [{ 年: '平成24', 月: '11', 内容: '普通自動車第一種運転免許 取得' }] })),
    inline(
      _____3(
        { height: cm(5) },
        inline`${space}貴社の事業内容に強く興味を持ち、これまでの経験を活かして貢献したいと考え志望しました。${space}`,
      ),
    ),
    inline(_____4({ height: cm(2.5) }, inline`${space}貴社の規程に従います。${space}`)),
    inline(____2({ signature: null })),
  )
}
