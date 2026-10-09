// Converted from test/universe/corpus/aero-check.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, external, importPackage, inline, show, space } from '../../../src/index.ts'

export default () => {
  const checklist = external('checklist')
  const topic = define('topic').pos('arg1', T.any).pos('arg2', T.content).returns(T.any).external()
  const section = define('section').pos('arg1', T.any).pos('arg2', T.content).returns(T.any).external()
  const step = define('step').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const checklist_with = define('with').named('title', T.any, null).returns(T.any).external(checklist)
  return doc(
    importPackage('@preview/aero-check:0.1.1', [checklist, topic, section, step]),
    show(checklist_with({ title: 'Title' })),
    inline(topic('Topic', inline(space, section('Section', inline(space, step('Step', 'Check'), space)), space))),
  )
}
