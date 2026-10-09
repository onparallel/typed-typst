// Converted from test/suite/corpus/label-dynamic-show-set.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  blue,
  doc,
  inline,
  label,
  labelled,
  m,
  red,
  set,
  show,
  space,
  strong,
  text,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(show(label('red'), set(text, { fill: red })), show(label('blue'), set(text, { fill: blue }))),
    inline(
      strong(inline`A`),
      space,
      labelled([strong(inline`B`), space], label('red')),
      space,
      strong(inline`C`),
      space,
      unsafeRaw.code<any>`label("bl" + "ue")`,
      space,
      strong(inline`D`),
    ),
  )
}
