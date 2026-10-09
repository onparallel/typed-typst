// Converted from test/universe/corpus/invoice-maker.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, external, image, importPackage, path, show } from '../../../src/index.ts'

export default () => {
  const invoice = external('invoice')
  const invoice_with = define('with')
    .named('banner-image', T.any, null)
    .named('biller', T.any, null)
    .named('delivery-date', T.any, null)
    .named('due-date', T.any, null)
    .named('hourly-rate', T.any, null)
    .named('invoice-id', T.any, null)
    .named('issuing-date', T.any, null)
    .named('items', T.any, null)
    .named('language', T.any, null)
    .named('recipient', T.any, null)
    .returns(T.any)
    .external(invoice)
  return doc(
    importPackage('@preview/invoice-maker:1.1.0', [invoice]),
    show(
      invoice_with({
        language: 'en',
        bannerImage: image(path('banner.png')),
        invoiceId: '2024-03-10t172205',
        issuingDate: '2024-03-10',
        deliveryDate: '2024-02-29',
        dueDate: '2024-03-20',
        biller: {
          name: 'Gyro Gearloose',
          title: 'Inventor',
          company: 'Crazy Inventions Ltd.',
          vatId: 'DL1234567',
          iban: 'DE89370400440532013000',
          address: { country: 'Disneyland', city: 'Duckburg', postalCode: '123456', street: 'Inventor Drive 23' },
        },
        hourlyRate: 100,
        recipient: {
          name: 'Scrooge McDuck',
          title: 'Treasure Hunter',
          vatId: 'DL7654321',
          address: { country: 'Disneyland', city: 'Duckburg', postalCode: '123456', street: 'Killmotor Hill 1' },
        },
        items: [
          { date: '2016-04-03', description: 'Arc reactor', quantity: 1, price: 13000 },
          { date: '2016-04-05', description: 'Flux capacitor', durMin: 0, quantity: 1, price: 27000 },
          { date: '2016-04-07', description: 'Lightsaber', durMin: 0, quantity: 2, price: 3600 },
          { date: '2016-04-08', description: 'Sonic screwdriver', durMin: 0, quantity: 10, price: 800 },
          { date: '2016-04-12', description: 'Assembly', durMin: 160, quantity: 1, price: 53.33 },
        ],
      }),
    ),
  )
}
