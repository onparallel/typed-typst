// Converted from test/universe/corpus/gallus-hsg.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  define,
  doc,
  document,
  external,
  importFile,
  importPackage,
  includeFile,
  m,
  path,
  read,
  set,
  show,
} from '../../../src/index.ts'

export default () => {
  const thesis = external('thesis')
  const title_2 = external('title')
  const author = external('author')
  const language = external('language')
  const subtitle = external('subtitle')
  const type_2 = external('type')
  const professor = external('professor')
  const matriculationNumber = external('matriculation-number')
  const submissionDate = external('submission-date')
  const thesis_with = define('with')
    .named('abstract', T.any, null)
    .named('acknowledgement', T.any, null)
    .named('appendix', T.any, null)
    .named('author', T.any, null)
    .named('bibliography-as-bytes', T.any, null)
    .named('bibliography-style', T.any, null)
    .named('language', T.any, null)
    .named('matriculation-number', T.any, null)
    .named('professor', T.any, null)
    .named('submission-date', T.any, null)
    .named('subtitle', T.any, null)
    .named('title', T.any, null)
    .named('type', T.any, null)
    .named('writing-aids-directory', T.any, null)
    .returns(T.any)
    .external(thesis)
  return doc(
    m.lines(
      importPackage('@preview/gallus-hsg:1.1.0', [thesis]),
      importFile('./metadata.typ', [
        title_2,
        author,
        language,
        subtitle,
        type_2,
        professor,
        matriculationNumber,
        submissionDate,
      ]),
    ),
    set(document, { title: title_2, author: author }),
    show(
      thesis_with({
        language: language,
        title: title_2,
        subtitle: subtitle,
        type: type_2,
        professor: professor,
        author: author,
        matriculationNumber: matriculationNumber,
        submissionDate: submissionDate,
        abstract: includeFile('./content/abstract.typ'),
        acknowledgement: includeFile('./content/acknowledgement.typ'),
        writingAidsDirectory: includeFile('./content/writing-aids-directory.typ'),
        appendix: includeFile('./content/appendix.typ'),
        bibliographyAsBytes: read({ encoding: null }, path('./bibliography.bib')),
        bibliographyStyle: 'apa',
      }),
    ),
    m.lines(includeFile('./content/01-content.typ'), includeFile('./content/02-content.typ')),
  )
}
