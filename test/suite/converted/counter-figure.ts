// Converted from test/suite/corpus/counter-figure.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { add, counter, doc, emph, figure, image, inline, space, where } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      figure(
        { numbering: 'A', caption: inline`Four 'A's`, kind: image, supplement: 'Figure' },
        inline(emph(inline`AAAA!`)),
      ),
      space,
      figure(
        { numbering: null, caption: inline`Four 'B's`, kind: image, supplement: 'Figure' },
        inline(emph(inline`BBBB!`)),
      ),
      space,
      figure({ caption: inline`Four 'C's`, kind: image, supplement: 'Figure' }, inline(emph(inline`CCCC!`))),
      space,
      counter(where(figure, { kind: image })).update((n) => add(n, 3)),
      space,
      figure({ caption: inline`Four 'D's`, kind: image, supplement: 'Figure' }, inline(emph(inline`DDDD!`))),
    ),
  )
}
