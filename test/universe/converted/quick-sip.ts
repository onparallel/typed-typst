// Converted from test/universe/corpus/quick-sip.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, external, importPackage, inline, show, space } from '../../../src/index.ts'

export default () => {
  const QRH = external('QRH')
  const section = define('section').pos('arg1', T.any).pos('arg2', T.content).returns(T.any).external()
  const step = define('step').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const QRH_with = define('with').named('title', T.any, null).returns(T.any).external(QRH)
  return doc(
    importPackage('@preview/quick-sip:0.1.2', [QRH, section, step]),
    show(QRH_with({ title: 'Title' })),
    inline(section('Section title', inline(space, step('Switch', 'Action'), space))),
  )
}
