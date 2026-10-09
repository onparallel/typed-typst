// Converted from test/suite/corpus/counter-basic-1.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { context, counter, doc, inline, let_, linebreak, times, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const [mineDecl, mine] = let_('mine', counter('mine!'))
  return doc(
    mineDecl,
    inline`Final: ${unsafeRaw.code<any>`context mine.final().at(0)`} ${linebreak()} ${mine.step()} First:
${context((ctx_2) => mine.display(ctx_2))} ${linebreak()} ${mine.update(7)} ${context((ctx_3) => mine.display(ctx_3, { both: true }, '1 of 1'))}
${linebreak()} ${mine.step()} ${mine.step()} Second: ${context((ctx_4) => mine.display(ctx_4, 'I'))}
${mine.update((n) => times(n, 2))} ${mine.step()}`,
  )
}
