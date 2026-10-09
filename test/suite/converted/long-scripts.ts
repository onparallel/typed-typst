// Converted from test/suite/corpus/long-scripts.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, linebreak, sub, super_ } from '../../../src/index.ts'

export default () => {
  return doc(inline`|longscript| ${linebreak()} |${super_({ typographic: true }, inline`longscript`)}| ${linebreak()}
|${super_({ typographic: false }, inline`longscript`)}| ${linebreak()} |${sub({ typographic: true }, inline`longscript`)}|
${linebreak()} |${sub({ typographic: false }, inline`longscript`)}|`)
}
