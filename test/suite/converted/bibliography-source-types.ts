// Converted from test/suite/corpus/bibliography-source-types.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { bibliography, bytes, doc, heading, inline, let_, m, path, raw, show, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const [srcDecl, src] = let_('src', raw({ block: true, lang: 'yaml' }, 'hi:\n  type: Book'))
  return doc(
    srcDecl,
    m.lines(
      show(heading, null),
      inline(
        bibliography([
          path('/assets/bib/works.bib'),
          path('/assets/bib/works_too.bib'),
          bytes(unsafeRaw.code<any>`src.text`),
        ]),
      ),
    ),
  )
}
