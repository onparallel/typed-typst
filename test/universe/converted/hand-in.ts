// Converted from test/universe/corpus/hand-in.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, external, importPackage, m, math, raw, set, show, text } from '../../../src/index.ts'

export default () => {
  const assignment = external('assignment')
  const assignment_with = define('with')
    .named('student', T.any, null)
    .named('subject', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(assignment)
  return doc(
    importPackage('@preview/hand-in:1.1.0', [assignment]),
    m.lines(
      set(text, { font: 'TeX Gyre Pagella', lang: 'en', region: 'au' }),
      show(math.equation, set(text, { font: 'New Computer Modern Math' })),
    ),
    show(
      assignment_with({
        title: 'Assignment 1',
        student: { name: 'Typst Guy', id: 1550003495 },
        subject: { name: 'Writing with Typst', code: 'TYP101' },
      }),
    ),
    m.lines(
      m.heading(1, 'Question 1'),
      'Which of the following are block equations in Typst?',
      m.enum(
        m.item([raw({ lang: 'typ' }, '$ $')]),
        m.item([raw({ lang: 'typ' }, '$ /* */ $')]),
        m.item([raw({ block: true, lang: 'typ' }, '$//\n$')]),
      ),
    ),
    m.lines(m.heading(2, 'Answer'), 'I thought this was an introductory Typst course!'),
  )
}
