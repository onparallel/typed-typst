// Converted from test/universe/corpus/structured-mse-thesis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  define,
  doc,
  external,
  figure,
  importPackage,
  inline,
  label,
  lorem,
  m,
  pagebreak,
  path,
  raw,
  ref,
  show,
  space,
} from '../../../src/index.ts'

export default () => {
  const appendix = external('appendix')
  const reportTemplate = external('report-template')
  const reportTemplate_with = define('with')
    .named('author', T.any, null)
    .named('company', T.any, null)
    .named('confidential', T.any, null)
    .named('orientation', T.any, null)
    .named('teacher', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(reportTemplate)
  return doc(
    importPackage('@preview/structured-mse-thesis:0.1.1', [appendix, reportTemplate]),
    show(
      reportTemplate_with({
        title: 'Example Report',
        author: 'John Doe',
        orientation: 'Computer Science',
        teacher: 'Alice Smith',
        company: 'Tartempion SA',
        confidential: true,
      }),
    ),
    m.lines(m.heading(1, 'Introduction'), inline`Reference ${ref(label('reference'))}`),
    inline(
      figure({ caption: 'JavaScript example' }, raw({ lang: 'js', block: true }, "Console.log('Hello, world!');\n")),
    ),
    inline(
      pagebreak(),
      space,
      bibliography({ full: true, style: 'ieee' }, path('bibliography.bib')),
      space,
      pagebreak(),
    ),
    show(appendix),
    m.lines(m.heading(1, 'Proofs'), inline(lorem(100))),
  )
}
