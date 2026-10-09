// Converted from test/universe/corpus/jastylest.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  define,
  doc,
  external,
  importPackage,
  inline,
  m,
  outline,
  raw,
  show,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const jastylest = external('jastylest')
  const jastylest_article = define('article').returns(T.any).external(jastylest)
  const jastylest_title = define('title')
    .named('author', T.content, [])
    .named('office', T.content, [])
    .named('title', T.content, [])
    .named('titlepage', T.any, null)
    .returns(T.any)
    .external(jastylest)
  return doc(
    m.lines(importPackage('@preview/jastylest:0.2.0', jastylest), unsafeRaw.markup`#import jastylest.katex-font: *`),
    show(jastylest_article.with()),
    inline(
      jastylest_title({
        titlepage: false,
        title: inline`jarticleの使い方`,
        office: inline`電気通信大学 情報・ネットワーク工学専攻`,
        author: inline`raygo`,
      }),
    ),
    inline(outline()),
    m.lines(
      m.heading(1, 'スタイル設定'),
      inline`${raw({ lang: 'typst' }, '#show: jastylest.article.with("ここに設定") ')}
のようにして、スタイルやタイトルを設定できます。`,
    ),
    m.lines(
      m.heading(2, 'フォント'),
      inline`フォントはデフォルトでNew Computer Modern・Harano Aji Mincho・Arial・Hrano Aji Gothicが設定されています。各自インストールしてもらうか、設定で変更してください。数式の一部はKaTeXフォントを使用しています。インストールをしない場合は${raw('katex-font')}は使用できません。
${unsafeRaw.math.block`cal(M) scr(A) frak(T) H`}`,
    ),
    m.lines(
      m.heading(1, '機能'),
      inline`Typstの機能で日本語とEnglishの間には微妙な隙間が入ります。しかし、数式${unsafeRaw.math`a b`}では隙間が入りません。これはTypstの仕様です。これを無理やり回避する実装を行っています。`,
    ),
    inline`${unsafeRaw.math`beta`}-簡約など、ハイフンを入れると隙間が入りません。また、半角(丸括弧)の両端にも隙間を入れました。`,
  )
}
