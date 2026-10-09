// Converted from test/suite/corpus/pdf-attach.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, path, pdf, space } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      pdf.attach(path('/assets/text/hello.txt')),
      space,
      pdf.attach(
        { relationship: 'supplement', mimeType: 'application/toml', description: 'Information about a secret project' },
        path('/assets/data/details.toml'),
      ),
    ),
  )
}
