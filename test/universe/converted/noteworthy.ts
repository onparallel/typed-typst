// Converted from test/universe/corpus/noteworthy.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, external, importPackage, show } from '../../../src/index.ts'

export default () => {
  const noteworthy = external('noteworthy')
  const noteworthy_with = define('with')
    .named('author', T.any, null)
    .named('contact-details', T.any, null)
    .named('date', T.any, null)
    .named('font', T.any, null)
    .named('header-title', T.any, null)
    .named('language', T.any, null)
    .named('paper-size', T.any, null)
    .named('title', T.any, null)
    .named('toc-depth', T.any, null)
    .named('toc-title', T.any, null)
    .named('watermark', T.any, null)
    .returns(T.any)
    .external(noteworthy)
  return doc(
    importPackage('@preview/noteworthy:0.4.0', [noteworthy]),
    show(
      noteworthy_with({
        paperSize: 'a4',
        font: 'New Computer Modern',
        language: 'EN',
        title: 'Title of The Document',
        headerTitle: 'Header Title',
        date: '15/08/1947',
        author: 'Your Name',
        contactDetails: 'https://example.com',
        tocTitle: 'Table of Contents',
        tocDepth: 2,
        watermark: 'DRAFT',
      }),
    ),
  )
}
