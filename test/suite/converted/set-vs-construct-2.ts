// Converted from test/suite/corpus/set-vs-construct-2.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { cm, doc, external, inline, list, m, pt, rect, set, space, sym } from '../../../src/index.ts'

export default () => {
  const conifer = external('conifer')
  return doc(
    m.lines(
      set(list, { marker: inline`>` }),
      inline(
        list(
          { marker: inline`--` },
          inline(space, rect({ width: cm(2), fill: conifer, inset: pt(4) }, list(inline`A`)), space),
        ),
      ),
    ),
  )
}
