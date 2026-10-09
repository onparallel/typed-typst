// Converted from test/suite/corpus/pdf-attach-bytes.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, path, pdf, read, space } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      pdf.attach(path('hello.txt'), read({ encoding: null }, path('/assets/text/hello.txt'))),
      space,
      pdf.attach(
        { relationship: 'supplement', mimeType: 'text/plain', description: 'A description' },
        path('a_file_name.txt'),
        read({ encoding: null }, path('/assets/text/hello.txt')),
      ),
    ),
  )
}
