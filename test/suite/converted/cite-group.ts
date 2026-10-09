// Converted from test/suite/corpus/cite-group.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  bibliography,
  contentBlock,
  doc,
  inline,
  label,
  linebreak,
  m,
  path,
  ref,
  show,
  space,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  return doc(
    inline`A${contentBlock(inline(ref(label('netwok')), ref(label('arrgh'))))}B ${linebreak()} A${ref(label('netwok'))}${ref(label('arrgh'))}
B ${linebreak()} A${ref(label('netwok'))} ${ref(label('arrgh'))} B ${linebreak()} A${ref(label('netwok'))}
${ref(label('arrgh'))}. B ${linebreak()}`,
    inline`A ${ref(label('netwok'))}${contentBlock(inline(ref(label('arrgh'))))}B ${linebreak()} A ${ref(label('netwok'))}${ref(label('arrgh'))},
B ${linebreak()} A ${ref(label('netwok'))} ${ref(label('arrgh'))}, B ${linebreak()} A ${ref(label('netwok'))}
${ref(label('arrgh'))}. B ${linebreak()}`,
    inline`A${contentBlock(inline(ref(label('netwok')), space, ref(label('arrgh')), space, ref(label('quark'))))}B.
${linebreak()} A ${ref(label('netwok'))} ${ref(label('arrgh'))} ${ref(label('quark'))} B. ${linebreak()}
A ${ref(label('netwok'))} ${ref(label('arrgh'))} ${ref(label('quark'))}, B.`,
    m.lines(
      show(bibliography, (it, ctx) => unsafeRaw.code<any>`if target() == "html" { it }`),
      inline(bibliography({ style: 'american-physics-society' }, path('/assets/bib/works.bib'))),
    ),
  )
}
