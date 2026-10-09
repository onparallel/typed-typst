// Converted from test/universe/corpus/quizst.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, external, importPackage, json, let_, path, show } from '../../../src/index.ts'

export default () => {
  const quiz = external('quiz')
  const quiz_with = define('with')
    .named('highlight-answer', T.any, null)
    .named('json-data', T.any, null)
    .returns(T.any)
    .external(quiz)
  const [json_dataDecl, json_data] = let_('json_data', json(path('input/example.json')))
  return doc(
    importPackage('@preview/quizst:0.3.2', [quiz]),
    json_dataDecl,
    show(quiz_with({ highlightAnswer: true, jsonData: json_data })),
  )
}
