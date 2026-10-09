// Converted from test/suite/corpus/raw-syntaxes-types.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { add, bytes, doc, m, path, raw, set, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    unsafeRaw.markup`#let sublime-syntax = \`\`\`yaml
%YAML 1.2
\`\`\`.text + "\\n---\\n" + \`\`\`yaml
name: lang
file_extensions:
  - a
scope: source
contexts:
  main:
    - match: ''
\`\`\`.text`,
    m.lines(
      set(raw, { syntaxes: path('/assets/syntaxes/SExpressions.sublime-syntax') }),
      set(raw, { syntaxes: path('/assets/syntaxes/SExpressions.sublime-syntax') }),
      set(raw, {
        syntaxes: [path('/assets/syntaxes/SExpressions.sublime-syntax'), bytes(unsafeRaw.code<any>`sublime-syntax`)],
      }),
    ),
  )
}
