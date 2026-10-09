// Converted from test/universe/corpus/js.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  auto,
  define,
  doc,
  em,
  external,
  importPackage,
  inline,
  m,
  outline,
  pt,
  quote,
  raw,
  regex,
  show,
  space,
  unsafeRaw,
  v,
} from '../../../src/index.ts'

export default () => {
  const js = external('js')
  const maketitle = define('maketitle')
    .named('abstract', T.content, [])
    .named('authors', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external()
  const LaTeX = external('LaTeX')
  const noindent = define('noindent').pos('arg1', T.content).returns(T.any).external()
  const kintou = define('kintou').pos('arg1', T.any).pos('arg2', T.content).returns(T.any).external()
  const ruby = define('ruby').pos('arg1', T.content).pos('arg2', T.content).returns(T.any).external()
  const js_with = define('with')
    .named('baselineskip', T.any, null)
    .named('book', T.any, null)
    .named('cjkheight', T.any, null)
    .named('cols', T.any, null)
    .named('fontsize', T.any, null)
    .named('h1-label-size', T.any, null)
    .named('h1-size', T.any, null)
    .named('h2-size', T.any, null)
    .named('lang', T.any, null)
    .named('lines-per-page', T.any, null)
    .named('non-cjk', T.any, null)
    .named('paper', T.any, null)
    .named('sansfont', T.any, null)
    .named('sansfont-cjk', T.any, null)
    .named('seriffont', T.any, null)
    .named('seriffont-cjk', T.any, null)
    .named('textwidth', T.any, null)
    .returns(T.any)
    .external(js)
  return doc(
    importPackage('@preview/js:0.1.4', [js, maketitle, LaTeX, noindent, kintou, ruby]),
    show(
      js_with({
        lang: 'ja',
        seriffont: 'New Computer Modern',
        seriffontCjk: 'Harano Aji Mincho',
        sansfont: 'Source Sans 3',
        sansfontCjk: 'Harano Aji Gothic',
        paper: 'a4',
        fontsize: pt(10),
        baselineskip: auto,
        textwidth: auto,
        linesPerPage: auto,
        book: false,
        cols: 2,
        nonCjk: regex('[\\u0000-\\u2023]'),
        cjkheight: 0.88,
        h1Size: auto,
        h1LabelSize: auto,
        h2Size: auto,
      }),
    ),
    inline(
      maketitle({
        title: 'Typst日本語用テンプレートjs',
        authors: '奥村 晴彦',
        abstract: inline`${space}p${LaTeX} のjsarticle/jsbookに似た出力をするTypstテンプレートです。自由に修正してお使いください。${space}`,
      }),
    ),
    inline(outline(), space, v(em(1))),
    m.heading(1, 'これは何？'),
    inline`Typst日本語用テンプレートです。(u)p${LaTeX} のjsarticle/jsbook相当品のつもりです。このファイル ${raw('example.typ')} の頭の部分（特に使用フォント）を必要に応じて書き直してお試しください。`,
    inline`冒頭の「目次」は ${raw('#outline()')} で出しています。邪魔ならこの1行を消してください。`,
    inline`${raw('book: true')} にすると書籍用のレイアウトになります。この場合、${LaTeX} の ${raw('\\frontmatter')} に相当するものとして
${raw({ block: true }, '#set heading(numbering: none)\n#set page(numbering: "i")')} ${noindent(inline`${raw('\\mainmatter')} に相当するものとして`)}
${raw({ block: true }, '#pagebreak(weak: true, to: "odd")\n#set heading(numbering: "1.1")\n#counter(page).update(1)\n#set page(numbering: "1")')}
${noindent(inline`${raw('\\backmatter')} に相当するものとして`)} ${raw({ block: true }, '#set heading(numbering: none)')}
${noindent(inline`のような感じにするとよさそうです。`)}`,
    m.heading(1, '数式'),
    inline`慣れないうちは ${LaTeX} で書いて
${raw({ block: true }, 'pandoc in.tex -o out.typ')} ${noindent(inline`でTypstに翻訳すると楽です。`)}`,
    inline(unsafeRaw.math.block`(integral_0^oo (sin x) / sqrt(x) d x)^2
  &= sum_(k = 0)^oo ((2 k)!) / (2^(2 k) (k!)^2) 1 / (2 k + 1) \\
  &= product_(k = 1)^oo (4 k^2) / (4 k^2 - 1) = pi / 2`),
    m.heading(1, 'おまけ'),
    '簡単なマクロもいくつか含めています。例：',
    inline(raw({ block: true }, '#kintou(5em)[超電磁砲]')),
    inline(quote(inline(space, kintou(em(5), inline`超電磁砲`), space))),
    inline(raw({ block: true }, 'とある#ruby[科][か]#ruby[学][がく]の#ruby[超電磁砲][レールガン]')),
    inline(
      quote(
        inline`${space}とある${ruby(inline`科`, inline`か`)}${ruby(inline`学`, inline`がく`)}の${ruby(inline`超電磁砲`, inline`レールガン`)}${space}`,
      ),
    ),
  )
}
