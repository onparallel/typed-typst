// Converted from test/suite/corpus/figure-theorem.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  align,
  doc,
  emph,
  figure,
  inline,
  label,
  labelled,
  m,
  page,
  pt,
  raw,
  set,
  show,
  space,
  start,
  unsafeRaw,
  where,
} from '../../../src/index.ts'

export default () => {
  return doc(
    show(
      where(figure, { kind: 'theorem' }),
      (it, ctx) => unsafeRaw.code<any>`{
  set align(start)
  let name = none
  if not it.caption == none {
    name = [ #emph(it.caption.body)]
  } else {
    name = []
  }

  let title = none
  if not it.numbering == none {
    title = it.supplement
    if not it.numbering == none {
      title += " " +  it.counter.display(it.numbering)
    }
  }
  title = strong(title)
  pad(
    top: 0em, bottom: 0em,
    block(
      fill: green.lighten(90%),
      stroke: 1pt + green,
      inset: 10pt,
      width: 100%,
      radius: 5pt,
      breakable: false,
      [#title#name#h(0.1em):#h(0.2em)#it.body#v(0.5em)]
    )
  )
}`,
    ),
    m.lines(
      set(page, { width: pt(150) }),
      inline(
        labelled(
          [
            figure(
              { supplement: 'Theorem', kind: 'theorem', caption: "Pythagoras' theorem.", numbering: '1' },
              unsafeRaw.math`a^2 + b^2 = c^2`,
            ),
            space,
          ],
          label('fig-formula'),
        ),
      ),
    ),
    inline(
      labelled(
        [
          figure(
            { supplement: 'Theorem', kind: 'theorem', caption: "Another Pythagoras' theorem.", numbering: null },
            unsafeRaw.math`a^2 + b^2 = c^2`,
          ),
          space,
        ],
        label('fig-formula'),
      ),
    ),
    inline(
      figure(
        { caption: inline`Hello world in ${emph(inline`rust`)}` },
        raw({ block: true, lang: 'rust' }, 'fn main() {\n  println!("Hello!");\n}'),
      ),
    ),
  )
}
