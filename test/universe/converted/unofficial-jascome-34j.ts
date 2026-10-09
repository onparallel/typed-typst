// Converted from test/universe/corpus/unofficial-jascome-34j.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  blue,
  bottom,
  box,
  cm,
  datetime,
  define,
  doc,
  external,
  figure,
  heading,
  importPackage,
  inline,
  label,
  labelled,
  linebreak,
  link,
  lorem,
  m,
  path,
  pct,
  pt,
  raw,
  red,
  ref,
  rgb,
  set,
  show,
  space,
  table,
  text,
  top,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const appendix = external('appendix')
  const corollary = define('corollary').pos('arg1', T.content).returns(T.any).external()
  const definition = define('definition').pos('arg1', T.any).pos('arg2', T.content).returns(T.any).external()
  const jaconf = external('jaconf')
  const lemma = define('lemma').rest('args', T.any).returns(T.any).external()
  const proof = define('proof').pos('arg1', T.content).pos('arg2', T.content).returns(T.any).external()
  const theorem = define('theorem').pos('arg1', T.any).pos('arg2', T.content).returns(T.any).external()
  const jascome = external('jascome')
  const jascome_with = define('with')
    .named('abstract', T.content, [])
    .named('authors', T.any, null)
    .named('authors-affiliation', T.any, null)
    .named('authors-en', T.any, null)
    .named('date-accept', T.any, null)
    .named('date-publish', T.any, null)
    .named('date-submit', T.any, null)
    .named('keywords', T.any, null)
    .named('number', T.any, null)
    .named('title', T.content, [])
    .named('title-en', T.content, [])
    .named('volume', T.any, null)
    .returns(T.any)
    .external(jascome)
  const redWarn = define('red-warn')
    .pos('it', T.any)
    .returns(T.any)
    .body((p) => text({ fill: rgb(red), weight: 'bold' }, p['it']))
  return doc(
    m.lines(
      importPackage('@preview/jaconf:0.7.1', [appendix, corollary, definition, jaconf, lemma, proof, theorem]),
      importPackage('@preview/unofficial-jascome-34j:1.0.4', [jascome]),
    ),
    show(
      jascome_with({
        title: inline`フィルタ理論を適用した動弾性逆解析による未知量同定`,
        titleEn: inline`IDENTIFICATION OF UNKNOWNS BY ELASTODYNAMIC INVERSE ANALYSIS ${linebreak()} USING FILTERING
THEORY`,
        authors: [inline`新宿 太郎`, inline`東京 次郎`, inline`境界 要子`],
        authorsEn: [inline`Taro SHINJUKU`, inline`Jiro TOKYO`, inline`Yoko KYOKAI`],
        authorsAffiliation: [
          ['生産大学工学部システム工学科', '543-4567', '若里市中央町4-5-6', 'taro@homer.seisan-u.ac.jp'],
          ['構造重工（株）', '380-8553', '新宿市西新宿2-1', 'jiro@hero.kozo-ju.co.jp'],
          ['生産大学大学院工学系研究科', '543-4567', '若里市中央町4-5-6', 'yoko@homer.seisan-u.ac.jp'],
        ],
        keywords: ['Inverse Analysis', 'Identification', 'Boundary Element Method'],
        abstract: inline(lorem(100)),
        dateSubmit: datetime({ year: 2018, month: 9, day: 14 }),
        dateAccept: datetime({ year: 2018, month: 10, day: 26 }),
        datePublish: datetime({ year: 2018, month: 12, day: 1 }),
        volume: 18,
        number: null,
      }),
    ),
    m.lines(redWarn.decl, show(link, set(text, { fill: blue })), show('、', '，'), show('。', '．')),
    m.lines(
      inline(labelled(heading({ depth: 1 }, inline('はじめに')), label('sec:intro'))),
      inline`${redWarn(inline`実用の際には適宜投稿先の規定を必ずご確認ください。`)}
発表論文原稿をPDFでご執筆いただき、学会のホームページにアップロードしてください。
このファイルはこのテンプレートの使い方を示しており、同時に発表論文の見本でもあります。
執筆の時は以下の説明をよく読み、執筆要項に従ったフォーマットでご提出ください。
アップロードしたPDFがそのまま公開されます。
などの説明が書かれるであろうテンプレートを作ってみました。
本稿では、このテンプレートファイルの使い方および Typst による執筆作業の概要について解説します。
この原稿のソースコードは ${link('https://github.com/kimushun1101/typst-jaconf')} で公開しております。
ご要望や修正の提案があれば、Issue や Pull Request でお知らせください。筆者に届く形であればSNSなど他の手段でも構いません。
Typst の概要についてお知りになりたい方は、${link('https://github.com/kimushun1101/How-to-use-typst-for-paper-jp')}
にもスライド形式の資料を用意しておりますので、ぜひこちらもご覧ください。`,
    ),
    inline(labelled(heading({ depth: 1 }, inline('テンプレートファイルの使い方')), label('sec:usage'))),
    m.lines(
      m.heading(2, 'コードの例'),
      inline`数式番号は ${ref(label('eq:system'))} のように数式の右側に、図のタイトルは "${ref(label('fig:quadratic'))} タイトル名"のように図の下部に、表のタイトルは "${ref(label('tab:fonts'))}
タイトル名" のように図の上部につきます。
投稿先に応じてキャプションの言語は日本語や英語で指定されるかと思いますので、指示に従ってください。`,
    ),
    m.lines(
      m.heading(3, '数式'),
      inline`出力例はつぎの通りです。
以下のシステムを考える。
${labelled(
  [
    unsafeRaw.math.block`dot(x) & = A x + B u \\
       y & = C x`,
    space,
  ],
  label('eq:system'),
)}
ここで ${unsafeRaw.math`x in RR^n`} は状態、${unsafeRaw.math`u in RR^m`} は入力、${unsafeRaw.math`y in RR^l`}
は出力、${unsafeRaw.math`A in RR^(n times n)`}、${unsafeRaw.math`B in RR^(n times m)`}。および ${unsafeRaw.math`C in RR^(l times n)`}
は定数行列である。
このシステムに対して、目標値 ${unsafeRaw.math`r(t)`} に対する偏差を ${unsafeRaw.math`e = r - y`} とした以下の PI 制御器を使用する。
${labelled([unsafeRaw.math.block`u = K_P e + K_I integral_0^t e d t`, space], label('eq:PI-controller'))}
ただし、${unsafeRaw.math`K_P`} と ${unsafeRaw.math`K_I`} はそれぞれ比例ゲイン、積分ゲインとする。`,
    ),
    m.lines(
      m.heading(3, '表'),
      inline`表の例は ${ref(label('tab:fonts'))} です。
${labelled([figure({ placement: bottom, caption: inline`フォントの設定` }, table({ columns: 3, stroke: null }, table.header(inline`項目`, inline`サイズ (pt)`, inline`フォント`), table.hline(), inline`タイトル`, inline`16`, inline`ゴシック体`, inline`著者名`, inline`12`, inline`ゴシック体`, inline`章タイトル`, inline`12`, inline`ゴシック体`, inline`節、小節、本文`, inline`10`, inline`明朝体`, inline`参考文献`, inline`9`, inline`明朝体`)), space], label('tab:fonts'))}`,
    ),
    m.lines(
      m.heading(3, '画像'),
      inline`画像の例は ${ref(label('fig:quadratic'))} です。
${labelled([figure({ placement: top, caption: inline`${unsafeRaw.math`x^2`} のグラフ` }, box({ stroke: pt(1), height: cm(5), width: pct(90) })), space], label('fig:quadratic'))}`,
    ),
    m.lines(
      inline(labelled(heading({ depth: 3 }, inline('定理環境')), label('sec:theorem'))),
      inline`以下はtheorem環境の使用例です。
定理などのタイトルフォントを${raw('font-heading')}（見出しのフォント）にしています。
${redWarn(inline`${raw('definition')}, ${raw('lemma')}, ${raw('theorem')}, ${raw('corollary')}, ${raw('proof')}はこのテンプレートで定義している関数です。`)}
${raw({ block: true, lang: 'typ' }, '#import "@preview/jaconf:0.7.1": jaconf, definition, lemma, theorem, corollary, proof, appendix')}
${redWarn(inline`他のテンプレートを使用する際には${link('https://github.com/kimushun1101/typst-jaconf/blob/5862f4fd21b4f00488a56657e198864625d117b8/jaconf-eng/lib.typ#L9-L35', inline`${raw('lib.typ')}のコード`)}を参考に、以下のようにご自身のコード内で定義および有効化をしてください。`)}`,
    ),
    inline(
      raw(
        { block: true, lang: 'typ' },
        '// Theorem environments\n#let thmja = thmplain.with(base: {}, separator: [#h(0.5em)], titlefmt: strong, inset: (top: 0em, left: 0em))\n#let definition = thmja("definition", context{text(font: query(<gothic-font>).first().value)[定義]})\n#let lemma = thmja("lemma", context{text(font: query(<gothic-font>).first().value)[補題]})\n#let theorem = thmja("theorem", context{text(font: query(<gothic-font>).first().value)[定理]})\n#let corollary = thmja("corollary", context{text(font: query(<gothic-font>).first().value)[系]})\n#let proof = thmproof("proof", context{text(font: query(<gothic-font>).first().value)[証明]}, separator: [#h(0.9em)], titlefmt: strong, inset: (top: 0em, left: 0em))\n// Enable packages.\n#show: thmrules.with(qed-symbol: $square$)',
      ),
    ),
    inline(
      labelled(definition('用語 A', inline`${space}用語 A の定義を書きます。${space}`), label('def:definition1')),
      space,
      labelled(lemma(inline`${space}補題を書きます。タイトルは省略することもできます。${space}`), label('lem:lemma1')),
      space,
      labelled(
        lemma('補題 C', inline`${space}補題を書きます。番号は定義や補題ごとに 1 からカウントします。${space}`),
        label('lem:lemma2'),
      ),
      space,
      labelled(theorem('定理 D', inline`${space}ここに定理を書きます。${space}`), label('thm:theorem1')),
      space,
      corollary(
        inline`${space}系を書きます。${ref(label('def:definition1'))} のように、ラベルで参照することもできます。${space}`,
      ),
      space,
      proof(
        inline`${ref(label('thm:theorem1'))} の証明`,
        inline`${space}証明を書きます。証明終了として□印をつけています。${space}`,
      ),
    ),
    m.lines(
      m.heading(3, '引用'),
      inline`引用は "@label" と記述することで、数式であれば${ref(label('eq:system'))}、図であれば${ref(label('fig:quadratic'))}、表であれば${ref(label('tab:fonts'))}、セクションであれば${ref(label('sec:intro'))}、節や項があるセクションであれば${ref(label('sec:theorem'))}、付録セクションであれば${ref(label('appendix:edit'))}、参考文献であれば${ref(label('kimura2015asymptotic'))}
のように表示されます。
参考文献は連続して引用すると ${ref(label('kimura2023doctor'))} ${ref(label('kimura2021control'))} ${ref(label('kimura2020facility'))}
${ref(label('khalil2002control'))} ${ref(label('sugie1999feedback'))} ${ref(label('caamp2025aisuitcase'))}
と表示されます。
文法上では特に規則はありませんが、個人的にはラベルの命名規則として、数式の場合には "eq:" から、図の場合には "fig:" から、表の場合には"tab:" から、セクションの場合には "sec:"
から、付録セクションであれば "appendix:" から始めるようにラベル名を設定しており、参考文献のラベルは "著者名発行年タイトルの最初の単語"で名付けております。`,
    ),
    m.lines(
      inline(labelled(heading({ depth: 1 }, inline('おわりに')), label('sec:conclusion'))),
      inline`対応していただきたい内容や修正していただきたい内容などありましたら、${link('https://github.com/kimushun1101/typst-jaconf', inline`GitHub`)}
を通して、Issues や Pull Requests をいただけますと幸いです。
このテンプレートは日本語論文のために作成しておりますため、日本語での投稿で構いません。
誤字脱字や文法、表現など細かい修正でも大変ありがたいです。`,
    ),
    inline`${heading({ numbering: null }, inline`謝辞`)}
謝辞のように章番号が振られたくない見出しは以下のように設定します。
${raw({ block: true, lang: 'typst' }, '#heading(numbering: none)[謝辞]')}
謝辞のセクションでは、「この研究は☆☆☆の助成を受けて行われました。」や「〇〇〇大学との共同研究です。」
などの文章が書かれることを想定しています。
最後までお読みいただき誠にありがとうございました。`,
    inline(bibliography({ full: false }, path('refs.yml'))),
    show(appendix),
    m.lines(
      inline(labelled(heading({ depth: 1 }, inline('付録の書き方')), label('appendix:edit'))),
      inline`参考文献の後ろに付録を付けたい場合には、
${raw({ block: true, lang: 'typ' }, '  #show: appendix.with(numbering-appendix: "A.1")')}
を追加してください。
その場所に${raw('heading-appendix')}で設定した文字（デフォルトでは「付　録」）が挿入されます。
それ以降の章番号と図表番号が${raw('numbering-appendix')}で設定した体裁で見出しがつきます。
デフォルトである${raw('"A.1"')}ではアルファベット順につきます。`,
    ),
    inline(
      labelled(
        [
          figure(
            { placement: bottom, caption: inline`${unsafeRaw.math`sqrt(x)`} のグラフ` },
            box({ stroke: pt(1), height: cm(5), width: pct(90) }),
          ),
          space,
        ],
        label('fig:appendix'),
      ),
    ),
    inline`${raw('#show: appendix.with(numbering-appendix')}の値を変更する場合には、
${raw('#show: temp.with(')}の引数である${raw('numbering-appendix')}の値も合わせて変更してください。
見出し番号をデフォルトから変更した際にこれを怠ると、付録の番号と${ref(label('appendix:edit'))} のようなラベルの番号の表記が一致しなくなります。`,
    inline`また、${ref(label('sec:theorem'))} に示す定理環境と同様に、
${redWarn(inline`${raw('appendix')}はこのテンプレートで定義している関数です。`)}`,
  )
}
