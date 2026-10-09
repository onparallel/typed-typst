// Converted from test/suite/corpus/query-list-of-figures.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  cm,
  context,
  doc,
  figure,
  image,
  inline,
  m,
  page,
  path,
  pct,
  rect,
  set,
  show,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  return doc(
    set(page, { paper: 'a8', numbering: '1 / 1', margin: { bottom: cm(1), rest: cm(0.5) } }),
    m.lines(set(figure, { numbering: 'I' }), show(figure, set(image, { width: pct(80) }))),
    m.lines(
      m.heading(1, 'List of Figures'),
      inline(unsafeRaw.code<any>`context {
  let elements = query(selector(figure).after(here()))
  for it in elements [
    Figure
    #counter(figure).display(at: it.location()):
    #it.caption.body
    #box(width: 1fr, repeat[.])
    #counter(page).at(it.location()).first() \\
  ]
}`),
    ),
    inline(figure({ caption: inline`Cylinder` }, image({ width: pct(50) }, path('/assets/images/cylinder.svg')))),
    inline(
      figure(
        { kind: image, supplement: 'Figure', caption: inline`Stand-in text` },
        rect(inline`Just some stand-in text`),
      ),
    ),
    inline(figure({ caption: inline`Tetrahedron` }, image({ width: pct(50) }, path('/assets/images/tetrahedron.svg')))),
  )
}
