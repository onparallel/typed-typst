// Converted from test/suite/corpus/page-bleed.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  add,
  blue,
  center,
  cm,
  codeBlock,
  context,
  doc,
  green,
  horizon,
  inline,
  page,
  pct,
  place,
  rect,
  red,
  set,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  return doc(
    set(page, {
      width: cm(3),
      height: cm(3),
      margin: cm(1),
      bleed: cm(1),
      background: rect({ width: pct(100), height: pct(100), fill: green }),
    }),
    inline(
      context((ctx) =>
        codeBlock([
          place(
            add(center, horizon),
            rect({ width: unsafeRaw.code<any>`page.width`, height: unsafeRaw.code<any>`page.height`, fill: red }),
          ),
          place(add(center, horizon), rect({ width: pct(100), height: pct(100), fill: blue })),
        ]),
      ),
    ),
  )
}
