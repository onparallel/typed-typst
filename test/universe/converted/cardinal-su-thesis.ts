// Converted from test/universe/corpus/cardinal-su-thesis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  datetime,
  define,
  doc,
  external,
  figure,
  heading,
  image,
  importPackage,
  includeFile,
  inline,
  linebreak,
  m,
  outline,
  path,
  pt,
  show,
  space,
  table,
  where,
} from '../../../src/index.ts'

export default () => {
  const thesis = external('thesis')
  const frontMatter = external('front-matter')
  const mainBody = external('main-body')
  const appendix = external('appendix')
  const thesis_with = define('with')
    .named('author', T.any, null)
    .named('date', T.any, null)
    .named('degree', T.any, null)
    .named('department', T.any, null)
    .named('title', T.any, null)
    .named('title-display', T.content, [])
    .returns(T.any)
    .external(thesis)
  return doc(
    importPackage('@preview/cardinal-su-thesis:0.1.0', [thesis, frontMatter, mainBody, appendix]),
    show(
      thesis_with({
        title: 'An Example Dissertation Demonstrating the Template',
        titleDisplay: inline`An Example Dissertation ${linebreak()} Demonstrating the Template`,
        author: 'Your Full Name',
        date: datetime({ year: 2026, month: 6, day: 15 }),
        degree: 'phd',
        department: 'Your Department',
      }),
    ),
    show(frontMatter),
    includeFile('chapters/00_front_matter.typ'),
    inline(outline({ title: inline`Contents`, depth: 3, indent: pt(0) })),
    inline(outline({ title: inline`List of Figures`, target: where(figure, { kind: image }) })),
    inline(outline({ title: inline`List of Tables`, target: where(figure, { kind: table }) })),
    show(mainBody),
    m.lines(
      includeFile('chapters/01_introduction.typ'),
      includeFile('chapters/02_writing_a_chapter.typ'),
      includeFile('chapters/03_conclusions.typ'),
    ),
    show(appendix),
    includeFile('appendices/A_supplementary.typ'),
    inline(
      heading({ level: 1, numbering: null }, inline`References`),
      space,
      bibliography({ title: null, style: 'nature' }, path('refs.bib')),
    ),
  )
}
