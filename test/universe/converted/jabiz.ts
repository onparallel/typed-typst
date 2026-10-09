// Converted from test/universe/corpus/jabiz.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  align,
  blocks,
  blue,
  box,
  define,
  doc,
  external,
  importPackage,
  inline,
  left,
  linebreak,
  link,
  m,
  red,
  rgb,
  set,
  show,
  space,
  text,
} from '../../../src/index.ts'

export default () => {
  const jabiz = external('jabiz')
  const jabiz_with = define('with')
    .named('contact', T.content, [])
    .named('date', T.content, [])
    .named('from', T.any, null)
    .named('ketsugo', T.content, [])
    .named('kigaki', T.content, [])
    .named('title', T.content, [])
    .named('to', T.content, [])
    .named('tougo', T.content, [])
    .returns(T.any)
    .external(jabiz)
  const warn = define('warn')
    .pos('it', T.any)
    .returns(T.any)
    .body((p) => text({ fill: rgb(red), weight: 'bold' }, p['it']))
  return doc(
    importPackage('@preview/jabiz:0.1.3', [jabiz]),
    m.lines(warn.decl, show(link, set(text, { fill: blue }))),
    show(
      jabiz_with({
        date: inline`${space}2025年6月 10日 初版${linebreak()} 2025年6月13日 更新${space}`,
        to: inline`株式会社〇〇 ${linebreak()} 営業部　山田 太郎 様`,
        from: box(
          align(
            left,
            inline`${space}株式会社△△${linebreak()}
営業部　佐藤 花子${linebreak()}
〒000-0000　東京都港区赤坂0-0-0${linebreak()} TEL: 03-0000-0000${space}`,
          ),
        ),
        title: inline`ビジネス文書テンプレートjabizのご案内`,
        tougo: inline`拝啓`,
        ketsugo: inline`敬具`,
        kigaki: blocks(
          m.enum(
            m.numbered(1, ['開催日時：2025年6月30日（火）14:00～']),
            m.numbered(2, ['開催場所：△△ホール 3階 会議室']),
            m.numbered(3, ['参加方法：', warn(inline`別紙申込用紙にてお申し込みください`)]),
            m.numbered(4, ['詳細情報： ', link('https://github.com/kimushun1101/typst-jabiz')]),
          ),
        ),
        contact: inline`${space}お問い合わせ先:${linebreak()}
株式会社△△${linebreak()}
営業部 第1課　鈴木 一郎${linebreak()} TEL: 03-0000-0000${linebreak()} E-MAIL: suzuki-ichiro@example.com${linebreak()}${space}`,
      }),
    ),
    inline`初夏の候、貴社ますますご清栄のこととお慶び申し上げます。
平素は格別のご高配を賜り、厚く御礼申し上げます。`,
    inline`さて、このたび下記の通り新製品発表会を開催する運びとなりました。
つきましてはご多用の折、誠に恐縮ではございますが、ぜひご出席賜りますようお願い申し上げます。`,
  )
}
