// Converted from test/universe/corpus/inboisu.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  blocks,
  datetime,
  define,
  doc,
  duration,
  em,
  external,
  fr,
  h,
  importPackage,
  inline,
  linebreak,
  list,
  m,
  mm,
  page,
  pct,
  set,
  show,
  space,
  v,
} from '../../../src/index.ts'

export default () => {
  const doc_2 = external('doc')
  const doc_with = define('with')
    .named('billing-text', T.any, null)
    .named('billing-text-below', T.any, null)
    .named('client', T.any, null)
    .named('client-details', T.content, [])
    .named('due-date', T.any, null)
    .named('fonts', T.any, null)
    .named('invoice-details', T.content, [])
    .named('invoice-number', T.any, null)
    .named('invoice-properties', T.any, null)
    .named('items', T.any, null)
    .named('notes', T.content, [])
    .named('notes-outside', T.content, [])
    .named('tax-rate', T.any, null)
    .named('transfer-destination', T.content, [])
    .named('vendor', T.any, null)
    .named('vendor-details', T.content, [])
    .named('vendor-details-below', T.any, null)
    .returns(T.any)
    .external(doc_2)
  return doc(
    importPackage('@preview/inboisu:0.1.0', [doc_2]),
    m.lines(
      set(page, { margin: { x: mm(25), y: mm(20) } }),
      show(
        doc_with({
          client: 'ねこかわ踊り株式会社　御中',
          clientDetails: inline`${space}〒765-4321 ${linebreak()}
大阪府ねこ市ねこ町7-8-9 ${linebreak()}
ねこハイツ309号室 ${linebreak()} TEL 888-888-8888${space}`,
          vendor: '根古　猫音',
          vendorDetails: inline`${space}〒123-4567 ${linebreak()}
東京都千代田区丸の内1-23-45 ${linebreak()}
にゃんにゃんハイツ209号室 ${linebreak()} TEL 123-4567-8901${space}`,
          vendorDetailsBelow: '変なところにねこがいるにゃ～',
          invoiceDetails: inline`${space}ねこねこにゃんにゃん ${linebreak()}
らんらんるー ${linebreak()}
吾輩は猫である${space}`,
          invoiceNumber: 'NEKO-1234-5678',
          billingText: '下記の通りご請求申し上げますにゃ～',
          billingTextBelow: 'どうぞよろしくにゃ～',
          dueDate: add(datetime.today(), duration({ days: 14 })),
          invoiceProperties: { 猫愛: '高め', 犬愛: 'なし' },
          fonts: { titleJa: 'Noto Sans CJK JP', titleEn: 'Noto Sans', bodyJa: 'Noto Sans CJK JP', bodyEn: 'Noto Sans' },
          transferDestination: blocks('ぬこ銀行 にゃん支店', '普通 2929-233-27015', 'カ）ネコ　ネコネ'),
          notes: inline`${space}今後とも何卒よろしくお願いいたしますにゃ～。${space}`,
          notesOutside: blocks(
            inline(list({ marker: '※' }, inline`振込手数料は貴殿にご負担くださいますよう、お願い申し上げまちゅ。`)),
            inline`${v(em(1))} ${h(fr(1))} 発行日時　${datetime.today().display('[year]年[month]月[day]日')}`,
            '以上',
          ),
          items: [
            { name: 'ねこまんま', price: 290000, amount: 23 },
            { name: 'またたび', price: 390000, amount: 99 },
          ],
          taxRate: pct(10),
        }),
      ),
    ),
  )
}
