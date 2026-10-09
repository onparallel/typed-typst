// Converted from test/universe/corpus/clean-uoft-thesis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  counter,
  define,
  doc,
  external,
  heading,
  importPackage,
  includeFile,
  inline,
  pagebreak,
  pt,
  show,
  space,
} from '../../../src/index.ts'

export default () => {
  const uoft = external('uoft')
  const uoft_with = define('with')
    .named('abstract', T.any, null)
    .named('acknowledgements', T.any, null)
    .named('author', T.any, null)
    .named('degree', T.any, null)
    .named('department', T.any, null)
    .named('font-size', T.any, null)
    .named('graduation-year', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(uoft)
  return doc(
    importPackage('@preview/clean-uoft-thesis:0.1.1', [uoft]),
    show(
      uoft_with({
        title: 'Title of Thesis',
        author: 'Firstname Lastname',
        department: 'Physiology',
        degree: 'Doctor of Philosophy',
        graduationYear: '2026',
        abstract: includeFile('abstract.typ'),
        acknowledgements: includeFile('acknowledgements.typ'),
        fontSize: pt(12),
      }),
    ),
    includeFile('introduction.typ'),
    inline(pagebreak(), space, includeFile('ch1.typ')),
    inline(pagebreak(), space, includeFile('ch2.typ')),
    inline(pagebreak(), space, includeFile('ch3.typ')),
    inline(pagebreak(), space, includeFile('ch4.typ')),
    inline(pagebreak(), space, includeFile('references.typ')),
    inline(counter(heading).update(0)),
    inline(pagebreak(), space, includeFile('appendix.typ')),
  )
}
