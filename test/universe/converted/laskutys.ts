// Converted from test/universe/corpus/laskutys.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  datetime,
  define,
  doc,
  em,
  image,
  importPackage,
  inline,
  let_,
  linebreak,
  path,
  yaml,
} from '../../../src/index.ts'

export default () => {
  const invoice = define('invoice')
    .pos('arg1', T.any)
    .named('bic', T.any, null)
    .named('date', T.any, null)
    .named('footnotes', T.content, [])
    .named('iban', T.any, null)
    .named('lang', T.any, null)
    .named('logo', T.any, null)
    .named('recipient', T.any, null)
    .named('seller', T.any, null)
    .returns(T.any)
    .external()
  const [dataDecl, data_2] = let_('data', yaml(path('data.yaml')))
  return doc(
    importPackage('@preview/laskutys:1.1.0', [invoice]),
    dataDecl,
    inline(
      invoice(
        {
          date: datetime({ year: 2025, month: 9, day: 30 }),
          logo: image({ height: em(4) }, path('logo.svg')),
          iban: 'FI2112345600000785',
          bic: 'NDEAFIHH',
          seller: {
            name: 'Yritys Oy',
            businessId: '1234567-8',
            address: inline`Talousosasto${linebreak()} PL 12${linebreak()} 00100 Helsinki`,
          },
          recipient: { name: 'Kuluttaja Nimi', address: inline`Kotikatu 1${linebreak()} 00100 Helsinki` },
          lang: 'fi',
          footnotes: inline`Company Oy, Phone: +358 123 4567, Email: sales.person@company.com`,
        },
        data_2,
      ),
    ),
  )
}
