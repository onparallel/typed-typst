// Converted from test/universe/corpus/g-exam.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  define,
  doc,
  external,
  fr,
  image,
  importPackage,
  inline,
  left,
  path,
  show,
  space,
  unsafeRaw,
  v,
} from '../../../src/index.ts'

export default () => {
  const exam = external('exam')
  const question = define('question').pos('arg1', T.content).named('points', T.any, null).returns(T.any).external()
  const subquestion = define('subquestion')
    .pos('arg1', T.content)
    .named('points', T.any, null)
    .returns(T.any)
    .external()
  const exam_with = define('with')
    .named('clarifications', T.any, null)
    .named('decimal-separator', T.any, null)
    .named('exam-info', T.any, null)
    .named('language', T.any, null)
    .named('question-points-position', T.any, null)
    .named('school', T.any, null)
    .named('show-grade-table', T.any, null)
    .returns(T.any)
    .external(exam)
  return doc(
    importPackage('@preview/g-exam:0.4.5', [exam, question, subquestion]),
    show(
      exam_with({
        school: { name: 'My School', logo: image(path('./logo.png')) },
        examInfo: {
          academicPeriod: 'Academic year 2025/2026',
          academicLevel: '1st Secondary Education',
          academicSubject: 'Mathematics',
          number: '2nd Assessment 1st Exam',
          content: 'Proofs',
          model: 'Model A',
        },
        language: 'en',
        decimalSeparator: ',',
        showGradeTable: true,
        questionPointsPosition: left,
        clarifications:
          'Answer the questions in the spaces provided. If you run out of room for an answer, continue on the back of the page.',
      }),
    ),
    inline(
      question(inline`Given the equation ${unsafeRaw.math`x^n + y^n = z^n`} for ${unsafeRaw.math`(x,y,z)`} and ${unsafeRaw.math`n`}
positive integers.`),
      space,
      subquestion(
        { points: 2 },
        inline`For what values of ${unsafeRaw.math`n`} is the statement in the previous question true?`,
      ),
      space,
      v(fr(1)),
      space,
      subquestion(
        { points: 3 },
        inline`For ${unsafeRaw.math`n=2`} there's a theorem with a special name. What's that name?`,
      ),
      space,
      v(fr(1)),
    ),
    inline`${subquestion(inline`What famous mathematician had an elegant proof for this theorem but there was not enough space
in the margin to write it down?`)}. ${v(fr(1))}`,
    inline`${question({ points: 5 }, inline`Prove that the real part of all non-trivial zeros of the function ${unsafeRaw.math`zeta(z) "is" 1/2`}`)}.
${v(fr(1))}`,
  )
}
