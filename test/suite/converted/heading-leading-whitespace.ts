// Converted from test/suite/corpus/heading-leading-whitespace.typ by scripts/convert-suite.ts — do not edit.
import { T, blocks, define, doc, heading, inline, space } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.content).pos('arg2', T.content).returns(T.any).external()
  return doc(
    inline(
      test(blocks(heading({ depth: 1 }, inline('h'))), blocks(heading({ depth: 1 }, inline('h')))),
      space,
      test(blocks(heading({ depth: 1 }, inline('h'))), blocks(heading({ depth: 1 }, inline('h')))),
      space,
      test(blocks(heading({ depth: 1 }, inline('h'))), blocks(heading({ depth: 1 }, inline('h')))),
    ),
  )
}
