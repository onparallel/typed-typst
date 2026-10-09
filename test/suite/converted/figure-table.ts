// Converted from test/suite/corpus/figure-table.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, figure, image, inline, label, labelled, path, space, table } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      labelled(
        [
          figure(
            { caption: 'A table containing images.' },
            table({ columns: 2 }, inline`Second cylinder`, image(path('/assets/images/cylinder.svg'))),
          ),
          space,
        ],
        label('fig-image-in-table'),
      ),
    ),
  )
}
