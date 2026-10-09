// Converted from test/universe/corpus/invoice-pro.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  blocks,
  datetime,
  define,
  doc,
  external,
  float,
  importPackage,
  inline,
  m,
  pct,
  pt,
  set,
  show,
  space,
  text,
} from '../../../src/index.ts'

export default () => {
  const invoice = external('invoice')
  const themes = external('themes')
  const locale = external('locale')
  const lineItems = define('line-items').pos('arg1', T.content).returns(T.any).external()
  const bundle = define('bundle')
    .pos('arg1', T.content)
    .pos('arg2', T.content)
    .named('date', T.any, null)
    .named('unit', T.any, null)
    .returns(T.any)
    .external()
  const date = define('date').pos('arg1', T.any).pos('arg2', T.any).pos('arg3', T.any).returns(T.any).external()
  const unit = external('unit')
  const item = define('item')
    .pos('arg1', T.content)
    .named('date', T.any, null)
    .named('description', T.any, null)
    .named('input-gross', T.any, null)
    .named('price', T.any, null)
    .named('quantity', T.any, null)
    .named('tax', T.any, null)
    .named('total', T.any, null)
    .named('unit', T.any, null)
    .returns(T.any)
    .external()
  const discount = define('discount').pos('arg1', T.content).named('amount', T.any, null).returns(T.any).external()
  const apply = define('apply').pos('arg1', T.content).named('tax', T.any, null).returns(T.any).external()
  const tax = external('tax')
  const surcharge = define('surcharge').pos('arg1', T.content).named('amount', T.any, null).returns(T.any).external()
  const paymentGoal = define('payment-goal').named('days', T.any, null).returns(T.any).external()
  const bankDetails = define('bank-details')
    .named('bank', T.any, null)
    .named('bic', T.any, null)
    .named('iban', T.any, null)
    .returns(T.any)
    .external()
  const signature = define('signature').returns(T.any).external()
  const invoice_with = define('with')
    .named('invoice-nr', T.any, null)
    .named('locale', T.any, null)
    .named('recipient', T.any, null)
    .named('sender', T.any, null)
    .named('theme', T.any, null)
    .named('zugferd', T.any, null)
    .returns(T.any)
    .external(invoice)
  const themes_DIN5008 = define('DIN-5008').named('form', T.any, null).returns(T.any).external(themes)
  const locale_deDe = external('de-de', locale)
  const unit_flat = external('flat', unit)
  const unit_h = external('h', unit)
  const tax_vat = define('vat').pos('arg1', T.any).returns(T.any).external(tax)
  const unit_pcs = external('pcs', unit)
  const unit_mo = external('mo', unit)
  const tax_zero = define('zero').returns(T.any).external(tax)
  return doc(
    importPackage('@preview/invoice-pro:0.5.0', [
      invoice,
      themes,
      locale,
      lineItems,
      bundle,
      date,
      unit,
      item,
      discount,
      apply,
      tax,
      surcharge,
      paymentGoal,
      bankDetails,
      signature,
    ]),
    m.lines(
      show(
        invoice_with({
          theme: themes_DIN5008({ form: 'A' }),
          locale: locale_deDe,
          zugferd: 'en16931',
          sender: {
            name: 'Jane Doe',
            address: 'Musterstraße 1',
            city: '12345 Musterstadt',
            taxNr: '123/456/78901',
            vatId: 'DE123456789',
            contact: { name: 'Jane Doe', phone: '+49 123 4567890', email: 'jane.doe@example.com' },
            extra: { Tel: '+49 123 4567890', 'E-Mail': 'jane.doe@example.com' },
          },
          recipient: {
            name: 'Client Corp',
            address: 'Kundenweg 5',
            city: '54321 Kundenstadt',
            vatId: 'DE987654321',
            buyerReference: 'DE123456789-12345-12',
          },
          invoiceNr: '2026-01',
        }),
      ),
      set(text, { size: pt(10) }),
    ),
    inline(
      lineItems(
        blocks(
          inline(
            bundle(
              { date: [date(10, 2, 2026), date(5, 3, 2026)], unit: unit_flat },
              inline`Website Relaunch 2026`,
              blocks(
                inline(
                  item({ price: float(1200), quantity: 1, unit: unit_flat }, inline`Concept & Wireframing`),
                  space,
                  item({ price: float(85), quantity: 15, unit: unit_flat }, inline`UI/UX Design`),
                  space,
                  item({ price: float(95), quantity: 40, unit: unit_h }, inline`Frontend & Backend Development`),
                ),
                inline(discount({ amount: pct(10) }, inline`Package Discount (10% on development services)`)),
                inline(
                  bundle(
                    inline`SEO & Tracking Setup`,
                    inline(
                      space,
                      item({ price: float(90), quantity: 5, unit: unit_h }, inline`Keyword Research & Strategy`),
                      space,
                      item({ price: float(150), quantity: 1 }, inline`Setup Google Analytics & Tag Manager`),
                      space,
                    ),
                  ),
                ),
              ),
            ),
          ),
          inline(
            apply(
              { tax: tax_vat(pct(7)) },
              inline(
                space,
                item({ price: 49.9, quantity: 2, unit: unit_pcs }, inline`Textbook: "Modern Web Design"`),
                space,
              ),
            ),
          ),
          inline(
            item({ price: float(15), quantity: 12, unit: unit_mo, date: datetime.today() }, inline`Premium Hosting`),
          ),
          inline(item({ total: 11.9, inputGross: true, unit: unit_flat }, inline`Domain Registration (.com)`)),
          inline(
            item(
              {
                price: 0,
                tax: tax_zero(),
                description: 'Included service as per framework agreement',
                unit: unit_flat,
              },
              inline`Email Inbox Setup`,
            ),
          ),
          inline(
            discount({ amount: 50 }, inline`Promo Voucher "NEWCUSTOMER50"`),
            space,
            surcharge({ amount: float(15) }, inline`Processing and Service Fee`),
          ),
        ),
      ),
    ),
    inline(paymentGoal({ days: 14 })),
    inline(bankDetails({ bank: 'Musterbank', iban: 'DE07100202005821158846', bic: 'EXAMPLEBICX' })),
    inline(signature()),
  )
}
