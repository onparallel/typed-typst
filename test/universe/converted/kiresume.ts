// Converted from test/universe/corpus/kiresume.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, importPackage, inline, m, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const resume = define('resume').pos('arg1', T.any).returns(T.any).external()
  return doc(
    m.lines(
      importPackage('@preview/kiresume:0.1.17', [resume]),
      inline(unsafeRaw.code<any>`resume(..json("config.example.json"))`),
    ),
  )
}
