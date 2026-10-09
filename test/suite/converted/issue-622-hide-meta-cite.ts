// Converted from test/suite/corpus/issue-622-hide-meta-cite.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  bibliography,
  cite,
  doc,
  hide,
  inline,
  label,
  linebreak,
  path,
  pt,
  ref,
  set,
  space,
  text,
} from '../../../src/index.ts'

export default () => {
  return doc(
    set(cite, { style: 'chicago-shortened-notes' }),
    inline`A pirate. ${ref(label('arrgh'))} ${linebreak()} ${set(text, { size: pt(2) })} ${hide(inline`${space}A ${ref(label('arrgh'))} pirate. ${bibliography(path('/assets/bib/works.bib'))}${space}`)}`,
  )
}
