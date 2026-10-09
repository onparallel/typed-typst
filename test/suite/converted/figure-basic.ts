// Converted from test/suite/corpus/figure-basic.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  cm,
  doc,
  figure,
  image,
  inline,
  label,
  labelled,
  m,
  pad,
  page,
  path,
  pt,
  ref,
  set,
  space,
  table,
} from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(page, { width: pt(150) }), set(figure, { numbering: 'I' })),
    inline`We can clearly see that ${ref(label('fig-cylinder'))} and ${ref(label('tab-complex'))} are relevant
in this context.`,
    inline(
      labelled(
        [figure({ caption: inline`The basic table.` }, table({ columns: 2 }, inline`a`, inline`b`)), space],
        label('tab-basic'),
      ),
    ),
    inline(
      labelled(
        [
          figure(
            { caption: inline`The basic shapes.`, numbering: 'I' },
            pad(
              { y: pt(-6) },
              image({ alt: 'Sketch of white standing cylinder', height: cm(2) }, path('/assets/images/cylinder.svg')),
            ),
          ),
          space,
        ],
        label('fig-cylinder'),
      ),
    ),
    inline(
      labelled(
        [
          figure(
            { caption: inline`The complex table.` },
            table({ columns: 3 }, inline`a`, inline`b`, inline`c`, inline`d`, inline`e`, inline`f`),
          ),
          space,
        ],
        label('tab-complex'),
      ),
    ),
  )
}
