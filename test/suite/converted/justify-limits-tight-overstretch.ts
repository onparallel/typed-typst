// Converted from test/suite/corpus/justify-limits-tight-overstretch.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  add,
  aqua,
  box,
  codeBlock,
  define,
  doc,
  em,
  fr,
  inline,
  let_,
  linebreak,
  lorem,
  m,
  par,
  pct,
  pt,
  set,
  text,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const [itDecl, it] = let_('it', add(lorem(3), linebreak({ justify: true })))
  const [spacerDecl, spacer] = let_('spacer', box({ width: fr(1), height: pt(5), fill: aqua }))
  return doc(
    m.lines(
      set(par, { justify: true }),
      set(text, { hyphenate: false }),
      unsafeRaw.markup`#let with-limits(..args, body) = {
  set par(justification-limits: args.named())
  body
}`,
    ),
    m.lines(itDecl, spacerDecl),
    inline(it),
    inline(unsafeRaw.code<any>`with-limits(
  spacing: (min: 100%, max: 100%),
  tracking: (min: 0em, max: 0em),
  it
)`),
    inline(unsafeRaw.code<any>`with-limits(
  spacing: (min: 100%, max: 100%),
  tracking: (min: 0em, max: 0.05em),
  it
)`),
    inline(unsafeRaw.code<any>`with-limits(
  spacing: (min: 100%, max: 150%),
  tracking: (min: 0em, max: 5em),
  it
)`),
    inline(codeBlock([set(par, { justificationLimits: { tracking: { min: em(0), max: em(5) } } })], it)),
    inline(
      codeBlock(
        [
          set(par, { justificationLimits: { tracking: { min: em(0), max: em(5) } } }),
          set(par, { justificationLimits: { spacing: { min: pct(100), max: pct(100) } } }),
        ],
        it,
      ),
    ),
  )
}
