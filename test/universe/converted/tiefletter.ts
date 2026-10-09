// Converted from test/universe/corpus/tiefletter.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  define,
  doc,
  external,
  float,
  image,
  importPackage,
  inline,
  linebreak,
  m,
  path,
} from '../../../src/index.ts'

export default () => {
  const invoice = define('invoice')
    .named('after-table-text', T.any, null)
    .named('banner-image', T.any, null)
    .named('bic', T.any, null)
    .named('client', T.any, null)
    .named('footer-middle', T.any, null)
    .named('footer-right', T.content, [])
    .named('iban', T.any, null)
    .named('invoice-date', T.any, null)
    .named('invoice-number', T.any, null)
    .named('items', T.any, null)
    .named('payment-due-date', T.any, null)
    .named('seller', T.any, null)
    .returns(T.any)
    .external()
  const languages = external('languages')
  const selectLanguage = define('select-language').pos('arg1', T.any).returns(T.any).external()
  const languages_deutschAt = external('deutsch-at', languages)
  return doc(
    m.lines(
      importPackage('@preview/tiefletter:0.2.2', [invoice, languages]),
      importPackage('@preview/tieflang:0.1.0', [selectLanguage]),
    ),
    inline(selectLanguage(languages_deutschAt)),
    inline(
      invoice({
        invoiceNumber: '2025-001',
        invoiceDate: '07.04.2025',
        seller: {
          name: 'Tiefseetauchner',
          address: 'Schottenring 12\n1010, Wien',
          uid: 'ATUxxxxxxx',
          email: 'email-address@example.com',
          tel: '+43 123 456 789',
        },
        footerMiddle: null,
        footerRight: inline`GISA Nr.: 12345678${linebreak()} Mitglied der WKÖ und WK Wien`,
        bannerImage: image(path('header.svg')),
        iban: 'AT92 1234 1412 1245 3928',
        bic: 'XXXXXXXXXXX',
        client: {
          genderMarker: 'O',
          fullName: 'Muster GesmbH',
          shortName: 'Aron Schlosser',
          address: 'Liselottenstraße 42c\n6049, Gamsagadorf',
        },
        items: [
          { quantity: 2, description: 'Beispiel 1', unitPrice: float(400) },
          { quantity: 1, description: 'Beispiel 2', unitPrice: float(300) },
          { quantity: 1, description: 'Beispiel 3', unitPrice: float(50), vatRate: 10 },
        ],
        paymentDueDate: '21.04.2025',
        afterTableText: null,
      }),
    ),
  )
}
