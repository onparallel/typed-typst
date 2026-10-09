// Converted from test/suite/corpus/transform-tex-logo.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  box,
  codeBlock,
  doc,
  h,
  inline,
  let_,
  linebreak,
  m,
  move,
  pct,
  pt,
  scale,
  text,
  times,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const [sizeDecl, size] = let_('size', pt(11))
  const [texDecl, tex] = let_(
    'tex',
    codeBlock([
      inline`T`,
      h(times(-0.14, size)),
      box(move({ dy: times(0.22, size) }, inline`E`)),
      h(times(-0.12, size)),
      inline`X`,
    ]),
  )
  const [xetexDecl, xetex] = let_(
    'xetex',
    codeBlock([
      inline`X`,
      h(times(-0.14, size)),
      box(scale({ x: pct(-100) }, move({ dy: times(0.26, size) }, inline`E`))),
      h(times(-0.14, size)),
      inline`T`,
      h(times(-0.14, size)),
      box(move({ dy: times(0.26, size) }, inline`E`)),
      h(times(-0.12, size)),
      inline`X`,
    ]),
  )
  return doc(
    m.lines(sizeDecl, texDecl),
    xetexDecl,
    m.lines(
      unsafeRaw.markup`#set text(font: "New Computer Modern", size)`,
      inline`Neither ${tex}, ${linebreak()} nor ${xetex}!`,
    ),
  )
}
