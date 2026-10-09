// Converted from test/universe/corpus/classy-german-invoice.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, datetime, define, doc, em, image, importPackage, path, show } from '../../../src/index.ts'

export default () => {
  const invoice = define('invoice')
    .pos('arg1', T.any)
    .pos('arg2', T.any)
    .pos('arg3', T.any)
    .pos('arg4', T.any)
    .pos('arg5', T.any)
    .pos('arg6', T.any)
    .named('kleinunternehmer', T.any, null)
    .named('vat', T.any, null)
    .returns(T.any)
    .external()
  return doc(
    importPackage('@preview/classy-german-invoice:0.3.2', [invoice]),
    show(
      invoice(
        { vat: 0.19, kleinunternehmer: true },
        '2023-001',
        datetime({ year: 2024, month: 9, day: 3 }),
        [
          {
            description: 'The first service provided. The first service provided. The first service provided',
            price: 200,
          },
          { description: 'The second service provided', price: 150.2 },
        ],
        {
          name: 'Kerstin Humm',
          street: 'Straße der Privatsphäre und Stille 1',
          zip: '54321',
          city: 'Potsdam',
          tax_nr: '12345/67890',
          signature: image({ width: em(5) }, path('example_signature.png')),
        },
        { name: 'Erika Mustermann', street: 'Musterallee', zip: '12345', city: 'Musterstadt' },
        {
          name: 'Todd Name',
          bank: 'Deutsche Postbank AG',
          iban: 'DE89370400440532013000',
          bic: 'PBNKDEFF',
          gender: { account_holder: 'Kontoinhaberin' },
        },
      ),
    ),
  )
}
