// Converted from test/suite/corpus/raw-syntaxes-types.typ by scripts/convert-suite.ts — do not edit.
import { add, bytes, doc, let_, m, path, raw, set, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    let_(
      'sublime-syntax',
      unsafeRaw.code<any>`\`\`\`yaml
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
    )[0],
    m.lines(
      set(raw, { syntaxes: path('/assets/syntaxes/SExpressions.sublime-syntax') }),
      set(raw, { syntaxes: path('/assets/syntaxes/SExpressions.sublime-syntax') }),
      set(raw, {
        syntaxes: [path('/assets/syntaxes/SExpressions.sublime-syntax'), bytes(unsafeRaw.code<any>`sublime-syntax`)],
      }),
    ),
  )
}
