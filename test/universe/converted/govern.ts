// Converted from test/universe/corpus/govern.typ by scripts/convert-suite.ts — do not edit.
import {
  T,
  datetime,
  define,
  doc,
  document,
  external,
  heading,
  importPackage,
  inline,
  label,
  labelled,
  m,
  ref,
  set,
  show,
  space,
} from '../../../src/index.ts'

export default () => {
  const govern = external('govern')
  const govern_with = define('with').named('draft', T.any, null).returns(T.any).external(govern)
  return doc(
    importPackage('@preview/govern:0.2.1', [govern]),
    set(document, {
      title: 'Bylaws of Carbophile Group',
      author: 'The General Assembly',
      date: datetime({ year: 1970, month: 1, day: 1 }),
    }),
    show(govern_with({ draft: false })),
    heading({ depth: 1 }, inline('Organization')),
    heading({ depth: 2 }, inline('Name')),
    'The name of this organization shall be Carbophile Group.',
    heading({ depth: 2 }, inline('Object')),
    'The object of this organization shall be to advance cybersecurity in Croatia up to international standards.',
    heading({ depth: 1 }, inline('Members')),
    heading({ depth: 2 }, inline('Eligibility')),
    'Any natural person shall be eligible for membership.',
    heading({ depth: 2 }, inline('Admission')),
    m.enum(
      m.item([
        'Except as provided in',
        space,
        ref(label('founding')),
        ', all members shall be admitted by the General Assembly.',
      ]),
      m.item(['Admission shall require a two-thirds vote.']),
    ),
    heading({ depth: 2 }, inline('Resignation')),
    m.enum(
      m.item(['To resign, a member shall submit a written resignation to the Secretary.']),
      m.item([
        'The Secretary shall present the resignation at the next regular meeting, at which point it shall take effect.',
      ]),
      m.item(['An officer shall resign from office before resigning from membership.']),
    ),
    inline(labelled(heading({ depth: 2 }, inline('Founding Members')), label('founding'))),
    m.enum(
      m.item([
        'Signatories of the fiscal sponsorship agreement between Carbophile Group and The Hack Foundation shall be granted membership.',
      ]),
      m.item(['This membership shall not be affected by the termination of the agreement.']),
      m.item(['They shall be considered regular members in every aspect, including removal.']),
    ),
  )
}
