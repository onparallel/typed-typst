// Converted from test/universe/corpus/malos-book-style.typ by scripts/convert-suite.ts — do not edit.
import {
  T,
  define,
  doc,
  document,
  external,
  heading,
  importPackage,
  inline,
  link,
  outline,
  set,
  show,
  smartquote,
  text,
} from '../../../src/index.ts'

export default () => {
  const book = external('book')
  const book_with = define('with').named('subtitle', T.content, []).returns(T.any).external(book)
  return doc(
    importPackage('@preview/malos-book-style:1.0.0', [book]),
    set(text, { lang: 'en' }),
    set(document, { title: inline`Example Book`, author: 'Malo' }),
    show(book_with({ subtitle: inline`Using Malo's Book Style` })),
    inline(outline()),
    inline`This is an example document using Malo's Book Style.`,
    heading({ depth: 1 }, inline('About Malo', smartquote({ double: false }), 's Book Style')),
    heading({ depth: 2 }, inline('Headings')),
    'First level headings are styled like chapter titles. Second level headings are highly visible and draw attention, while lower level headings are styled more subtly.',
    heading({ depth: 2 }, inline('Page Header')),
    'Page headers display the document title and the last chapter title.',
    heading({ depth: 2 }, inline('Inherited Features from Malo', smartquote({ double: false }), 's Presets')),
    inline`Malo's Book Style is based on ${link('https://typst.app/universe/package/malos-presets', inline`Malo's Presets`)}
and inherits features such as font and paragraph configuration, asterism dividers, and more.`,
  )
}
