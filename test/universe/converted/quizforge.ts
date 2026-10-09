// Converted from test/universe/corpus/quizforge.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, cm, define, doc, external, importPackage, inline, m, show, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const quiz = external('quiz')
  const m_2 = define('m').pos('arg1', T.any).returns(T.any).external()
  const explain = define('explain').pos('arg1', T.content).returns(T.any).external()
  const blank = define('blank').pos('arg1', T.content).returns(T.any).external()
  const answer = define('answer')
    .pos('arg1', T.any)
    .pos('arg2', T.content)
    .named('rubric', T.content, [])
    .returns(T.any)
    .external()
  const quiz_with = define('with')
    .named('answer-grid', T.any, null)
    .named('course', T.any, null)
    .named('date', T.any, null)
    .named('duration', T.any, null)
    .named('id', T.any, null)
    .named('sets', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(quiz)
  return doc(
    importPackage('@preview/quizforge:0.1.0', [quiz, m_2, explain, blank, answer]),
    show(
      quiz_with({
        id: 'my-quiz-1',
        course: 'CS 101: My Course',
        title: 'Quiz 1',
        date: '2026-01-15',
        duration: '60 minutes',
        sets: ['A', 'B'],
        answerGrid: true,
      }),
    ),
    m.heading(1, 'Multiple Choice'),
    'Choose the single best answer.',
    m.enum(
      m.item(
        m.lines(
          inline`${m_2(2)} What is ${unsafeRaw.math`2 + 2`}?`,
          m.list(m.item(['3']), m.item(['✓ 4']), m.item(['5']), m.item(['None of the above'])),
          inline(explain(inline`Basic arithmetic.`)),
        ),
      ),
    ),
    m.heading(1, 'Fill in the Blanks'),
    m.enum(m.item([m_2(1), space, 'The capital of France is', space, blank(inline`Paris`), '.'])),
    m.heading(1, 'Long Answers'),
    m.enum(
      m.item([
        m_2(4),
        space,
        'Explain your favorite theorem.',
        space,
        answer(
          { rubric: inline`+2 statement; +2 significance.` },
          cm(6),
          inline`A model answer, shown only in the key.`,
        ),
      ]),
    ),
  )
}
