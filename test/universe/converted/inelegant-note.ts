// Converted from test/universe/corpus/inelegant-note.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  blocks,
  define,
  doc,
  external,
  importPackage,
  includeFile,
  inline,
  path,
  show,
  space,
} from '../../../src/index.ts'

export default () => {
  const coverEnvironment = define('cover-environment')
    .named('author', T.any, null)
    .named('cover-image', T.any, null)
    .named('subtitle', T.any, null)
    .named('title', T.content, [])
    .returns(T.any)
    .external()
  const overall = external('overall')
  const frontMatter = define('front-matter').pos('arg1', T.content).returns(T.any).external()
  const myOutline = define('my-outline').returns(T.any).external()
  const mainMatter = external('main-matter')
  const partPage = define('part-page').pos('arg1', T.any).returns(T.any).external()
  const appendix = define('appendix').pos('arg1', T.content).returns(T.any).external()
  const myBibliography = define('my-bibliography').pos('arg1', T.any).returns(T.any).external()
  return doc(
    importPackage('@preview/inelegant-note:0.9.1', [
      coverEnvironment,
      overall,
      frontMatter,
      myOutline,
      mainMatter,
      partPage,
      appendix,
      myBibliography,
    ]),
    inline(
      coverEnvironment({
        title: inline`书籍或笔记模板`,
        subtitle: 'Book or Notebook Template',
        author: '你',
        coverImage: null,
      }),
    ),
    inline(show(overall)),
    inline(frontMatter(blocks(includeFile('content/pre.typ'), inline(myOutline())))),
    inline(show(mainMatter)),
    inline(partPage('部分演示')),
    includeFile('content/ch1.typ'),
    includeFile('content/ch2.typ'),
    inline(partPage('参数说明')),
    includeFile('content/ca1.typ'),
    inline(appendix(inline(space, myBibliography(bibliography(path('./refs.bib'))), space))),
  )
}
