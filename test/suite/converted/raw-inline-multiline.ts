// Converted from test/suite/corpus/raw-inline-multiline.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, m, page, pt, raw, set, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(page, { width: pt(180) }), set(text, { size: pt(6) }), set(raw, { lang: 'python' })),
    inline`Inline raws, multiline e.g. ${raw('for i in range(10):\n  # Only this line is a comment.\n  print(i)')}
or otherwise e.g. ${raw('print(j)')}, are colored properly.`,
    inline`Inline raws, multiline e.g. ${raw('\n# Appears blocky due to linebreaks at the boundary.\nfor i in range(10):\n  print(i)\n')}
or otherwise e.g. ${raw('print(j)')}, are colored properly.`,
  )
}
