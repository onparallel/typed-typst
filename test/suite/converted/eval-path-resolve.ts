// Converted from test/suite/corpus/eval-path-resolve.typ by scripts/convert-suite.ts — do not edit.
import { doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(inline(unsafeRaw.code<any>`eval("image(\\"/assets/images/tiger.jpg\\", width: 50%)")`))
}
