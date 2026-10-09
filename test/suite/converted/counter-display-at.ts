// Converted from test/suite/corpus/counter-display-at.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  blocks,
  context,
  doc,
  figure,
  heading,
  inline,
  label,
  labelled,
  linebreak,
  m,
  numbering,
  set,
  space,
  spread,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  return doc(
    set(heading, { numbering: '1.1' }),
    m.lines(
      m.heading(1, 'One'),
      inline(
        labelled(
          [
            figure(
              {
                numbering: unsafeRaw.code<any>`(..nums) => numbering(
    "1.a",
    ..((counter(heading).get().first(),) + nums.pos()),
  )`,
                caption: inline`A blah`,
              },
              inline`BLAH`,
            ),
            space,
          ],
          label('blah'),
        ),
      ),
    ),
    m.lines(
      m.heading(1, 'Two'),
      inline(
        context((ctx) =>
          blocks(
            m.lines(
              unsafeRaw.markup`#let fig = query(<blah>).first()`,
              inline(
                unsafeRaw.code<any>`fig.counter.display(at: fig.location())`,
                space,
                linebreak(),
                space,
                numbering(
                  unsafeRaw.code<any>`fig.numbering`,
                  spread(unsafeRaw.code<any>`fig.counter.at(fig.location())`),
                ),
                space,
                linebreak(),
                space,
                unsafeRaw.code<any>`fig.counter.display(fig.numbering)`,
                space,
                linebreak(),
              ),
            ),
          ),
        ),
      ),
    ),
  )
}
