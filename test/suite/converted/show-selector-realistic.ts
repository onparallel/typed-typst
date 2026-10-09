// Converted from test/suite/corpus/show-selector-realistic.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  block,
  box,
  codeBlock,
  doc,
  h,
  heading,
  inline,
  m,
  move,
  pt,
  set,
  show,
  text,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  return doc(
    show(heading, (it, ctx) =>
      block(
        codeBlock([
          set(text, { size: pt(10) }),
          box(move({ dy: pt(-1) }, inline`📖`)),
          h(pt(5)),
          unsafeRaw.code<any>`if it.level == 1 {
    underline(text(1.25em, blue, it.body))
  } else {
    text(red, it.body)
  }`,
        ]),
      ),
    ),
    m.lines(m.heading(1, 'Task 1'), 'Some text.'),
    m.lines(m.heading(2, 'Subtask'), 'Some more text.'),
    m.lines(m.heading(1, 'Task 2'), 'Another text.'),
  )
}
