// Converted from test/universe/corpus/folklore.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  blocks,
  define,
  doc,
  external,
  importPackage,
  inline,
  lorem,
  m,
  show,
  space,
  sym,
} from '../../../src/index.ts'

export default () => {
  const setup = external('setup')
  const authorNotes = define('author-notes').pos('arg1', T.content).returns(T.any).external()
  const majorBreak = external('major-break')
  const setup_with = define('with')
    .named('blank-pages-after-toc', T.any, null)
    .named('copyright-page', T.content, [])
    .named('preface', T.content, [])
    .named('work-author', T.content, [])
    .named('work-title', T.content, [])
    .returns(T.any)
    .external(setup)
  return doc(
    importPackage('@preview/folklore:0.2.0', [setup, authorNotes, majorBreak]),
    show(
      setup_with({
        workTitle: inline`example book with some long title`,
        workAuthor: inline`ex. author`,
        copyrightPage: inline`${space}Made with love---as per yuʒ.${space}`,
        blankPagesAfterToc: 1,
        preface: blocks(
          inline`This is a book! It's made for the physical page, so view with even spreads in your PDF viewer
of choice. Each page is half-letter sized by default.`,
          'I hope you like it! :3',
        ),
      }),
    ),
    m.heading(1, 'chapter one'),
    inline(
      authorNotes(
        blocks(
          inline`These boxes are nice if authors have notes at the end or beginning of chapters that you'd like
to keep in.`,
          'Notice how chapters start on the recto side of the spread by default.',
        ),
      ),
    ),
    inline(lorem(150)),
    inline(authorNotes(inline`${space}This is an example of an author's note at the end of a chapter.${space}`)),
    m.heading(
      1,
      'chapter two has a really super crazy long title because this is an edge case that pops up every once in a while',
    ),
    inline(
      authorNotes(
        blocks(
          inline`Alright, super long author's note. Lorem ipsum, go!`,
          inline(lorem(100)),
          inline(lorem(100)),
          inline(lorem(100)),
          inline(lorem(100)),
        ),
      ),
    ),
    inline(lorem(200)),
    inline(authorNotes(inline`Notice how the header doesn't show up on chapter pages, and does otherwise.`)),
    m.heading(1, 'chapter three'),
    inline(lorem(200)),
    inline(majorBreak),
    inline(lorem(150)),
    inline(lorem(180)),
    m.heading(1, 'chapter four'),
    inline`And that's all, folks!`,
  )
}
