// Converted from test/suite/corpus/text-font-covers-reflection.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, context, define, doc, inline, m, regex, set, text, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    m.lines(
      set(text, { font: { name: 'Ubuntu', covers: 'latin-in-cjk' } }),
      inline(context((ctx) => test(unsafeRaw.code<any>`text.font`, { name: 'ubuntu', covers: 'latin-in-cjk' }))),
    ),
    m.lines(
      set(text, { font: { name: 'Ubuntu', covers: regex('\\d') } }),
      inline(context((ctx_2) => test(unsafeRaw.code<any>`text.font`, { name: 'ubuntu', covers: regex('\\d') }))),
    ),
    m.lines(
      set(text, { font: [{ name: 'Ubuntu', covers: regex('\\d') }, 'IBM Plex Serif'] }),
      inline(
        context((ctx_3) =>
          test(unsafeRaw.code<any>`text.font`, [{ name: 'ubuntu', covers: regex('\\d') }, 'ibm plex serif']),
        ),
      ),
    ),
  )
}
