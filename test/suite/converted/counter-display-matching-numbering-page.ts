// Converted from test/suite/corpus/counter-display-matching-numbering-page.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  align,
  center,
  codeBlock,
  context,
  counter,
  doc,
  inline,
  label,
  labelled,
  m,
  metadata,
  page,
  pt,
  set,
  space,
} from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { numbering: '(i)', margin: { bottom: pt(20) } }),
      inline`${labelled([metadata(null), space], label('first'))} Second page: ${context((ctx) => counter(page).display(ctx, { at: label('second') }))}`,
    ),
    m.lines(
      set(page, {
        numbering: 'A',
        footer: align(center, codeBlock(['Page: ', context((ctx_2) => counter(page).display(ctx_2))])),
      }),
      inline`${labelled([metadata(null), space], label('second'))} First page: ${context((ctx_3) => counter(page).display(ctx_3, { at: label('first') }))}`,
    ),
  )
}
