// Converted from test/universe/corpus/stv-vub-huisstijl.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, datetime, define, doc, importPackage, inline } from '../../../src/index.ts'

export default () => {
  const vubTitlepage = define('vub-titlepage')
    .named('authors', T.any, null)
    .named('date', T.any, null)
    .named('faculty', T.any, null)
    .named('pretitle', T.any, null)
    .named('promotors', T.any, null)
    .named('subtitle', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external()
  return doc(
    importPackage('@preview/stv-vub-huisstijl:0.1.1', [vubTitlepage]),
    inline(
      vubTitlepage({
        title: 'Title of the thesis',
        subtitle: 'An optional subtitle',
        pretitle:
          'Graduation thesis submitted in partial fulfillment of the requirements for the degree of Master of Science in Mathematics',
        authors: ['Jane Doe'],
        promotors: ['John Smith'],
        faculty: 'Sciences and Bio-Engineering Sciences',
        date: datetime.today().display('[month repr:long] [day], [year]'),
      }),
    ),
  )
}
