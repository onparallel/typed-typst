// Converted from test/universe/corpus/put-thesis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  define,
  doc,
  external,
  importPackage,
  includeFile,
  inline,
  m,
  outline,
  pagebreak,
  path,
  show,
  space,
} from '../../../src/index.ts'

export default () => {
  const putThesis = external('put-thesis')
  const abstract = define('abstract').pos('arg1', T.content).returns(T.any).external()
  const styledBody = external('styled-body')
  const appendices = external('appendices')
  const putThesis_with = define('with')
    .named('authors', T.any, null)
    .named('book-print', T.any, null)
    .named('lang', T.any, null)
    .named('supervisor', T.any, null)
    .named('title', T.any, null)
    .named('ttype', T.any, null)
    .named('year', T.any, null)
    .returns(T.any)
    .external(putThesis)
  return doc(
    importPackage('@preview/put-thesis:0.1.1', [putThesis, abstract, styledBody, appendices]),
    m.lines(
      show(
        putThesis_with({
          lang: 'en',
          ttype: 'bachelor',
          title: 'Title of the thesis',
          authors: [
            ['First author', 111111],
            ['Second author', 222222],
            ['Third author', 333333],
          ],
          supervisor: 'prof. dr hab. inż. Name',
          year: 2025,
          bookPrint: false,
        }),
      ),
      inline(
        abstract(inline`${space}Write your abstract here.${space}`),
        space,
        outline({ depth: 3 }),
        space,
        pagebreak({ weak: true }),
        space,
        show(styledBody),
      ),
    ),
    m.lines(
      includeFile('chapters/01-introduction.typ'),
      includeFile('chapters/02-literature-review.typ'),
      includeFile('chapters/03-own-work.typ'),
      includeFile('chapters/04-conclusions.typ'),
    ),
    inline(pagebreak({ weak: true }), space, bibliography({ style: 'ieee' }, path('references.bib'))),
    m.lines(show(appendices), includeFile('chapters/05-appendix-a.typ'), includeFile('chapters/06-appendix-b.typ')),
  )
}
