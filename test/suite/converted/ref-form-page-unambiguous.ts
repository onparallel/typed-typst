// Converted from test/suite/corpus/ref-form-page-unambiguous.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  bibliography,
  doc,
  heading,
  inline,
  label,
  labelled,
  m,
  page,
  path,
  ref,
  set,
  space,
} from '../../../src/index.ts'

export default () => {
  return doc(
    set(page, { numbering: '1' }),
    inline(labelled(heading({ depth: 1 }, inline('Introduction')), label('arrgh'))),
    inline(ref({ form: 'page' }, label('arrgh')), space, bibliography(path('/assets/bib/works.bib'))),
  )
}
