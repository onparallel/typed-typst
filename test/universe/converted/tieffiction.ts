// Converted from test/universe/corpus/tieffiction.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, datetime, define, doc, emph, external, importPackage, inline, m, show, space } from '../../../src/index.ts'

export default () => {
  const book = external('book')
  const startBeforeMain = external('start-before-main')
  const startMain = external('start-main')
  const book_with = define('with')
    .named('author', T.any, null)
    .named('blurb', T.content, [])
    .named('date', T.any, null)
    .named('dedication', T.content, [])
    .named('edition', T.any, null)
    .named('isbn', T.any, null)
    .named('license', T.any, null)
    .named('publisher', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(book)
  return doc(
    importPackage('@preview/tieffiction:0.2.1', [book, startBeforeMain, startMain]),
    show(
      book_with({
        title: 'The Wonderful House',
        author: ['Jochen Garak', 'Lena Tauchner'],
        publisher: 'Tief Fiction Press',
        date: datetime({ year: 2026, month: 2, day: 3 }),
        isbn: '978-1-23456-789-7',
        edition: 1,
        dedication: inline(emph(inline`For the readers who never sleep.`)),
        blurb: inline`${space}A quiet town. A locked attic. A letter written in ink that refuses to dry. When Mara
finds the key, the house begins to remember her.${space}`,
        license: 'cc-by-nc-sa',
      }),
    ),
    show(startBeforeMain),
    m.heading(1, 'Authors Notes'),
    inline`This is displayed differently and doesn't count to the chapter count!`,
    show(startMain),
    m.heading(1, 'The Door That Stayed Shut'),
    'The latch was warm. Mara counted to three, pressed, and the hallway breathed.',
  )
}
