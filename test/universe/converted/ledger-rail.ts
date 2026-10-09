// Converted from test/universe/corpus/ledger-rail.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, dict, doc, external, importPackage, inline, show, space, strong } from '../../../src/index.ts'

export default () => {
  const invoice = external('invoice')
  const invoice_with = define('with')
    .named('bill-to', T.any, null)
    .named('company', T.any, null)
    .named('credit', T.any, null)
    .named('currency', T.any, null)
    .named('due-note', T.any, null)
    .named('footer', T.any, null)
    .named('items', T.any, null)
    .named('meta', T.any, null)
    .named('number', T.any, null)
    .named('payment', T.any, null)
    .named('rail', T.any, null)
    .named('rail-footer', T.any, null)
    .named('status', T.any, null)
    .named('subtitle', T.any, null)
    .named('tagline', T.any, null)
    .named('tax', T.any, null)
    .returns(T.any)
    .external(invoice)
  return doc(
    importPackage('@preview/ledger-rail:0.1.0', [invoice]),
    show(
      invoice_with({
        company: 'Acme Studio',
        tagline: 'Brand & digital design',
        rail: [
          {
            title: 'From',
            body: [
              inline(strong(inline`Acme Studio LLC`)),
              '48 Mercer Street',
              'Brooklyn, NY 11201',
              'hello@acme.example',
              '+1 (718) 555-0164',
            ],
          },
          {
            title: 'Record',
            steps: [
              { date: 'Mar 3', label: 'Invoice issued', done: true },
              { date: 'Mar 4', label: 'Delivered by email', done: true },
              { date: 'Mar 12', label: 'Reminder scheduled' },
              { date: 'Mar 17', label: 'Payment due' },
            ],
          },
          {
            title: 'Project',
            rows: dict({ Engagement: 'Phase 2 of 3', 'PO reference': 'NW-4471', Currency: 'USD' }),
            note: 'Spring 2025 rebrand: identity, packaging and launch campaign.',
          },
          {
            title: 'On account',
            rows: dict({ 'INV-2025-031': '$6,400.00', 'Retainer remaining': '$0.00' }),
            note: 'INV-2025-031 paid in full Feb 4, 2025.',
          },
          {
            title: 'Terms',
            body: inline`${space}Net 14 from the issue date. Overdue balances accrue 1.5% per month. Final artwork and
production files release on payment in full.${space}`,
          },
          {
            title: 'Queries',
            body: [inline(strong(inline`Dana Whitfield`)), 'Studio Director', 'dana@acme.example', '+1 (718) 555-0164'],
          },
        ],
        railFooter: ['acme.example', 'Registered in New York'],
        number: 'INV-2025-042',
        subtitle: 'Northwind Coffee Roasters',
        status: 'Sent',
        meta: { Issued: 'March 3, 2025', Due: 'March 17, 2025', Terms: 'Net 14', Period: 'Feb 1 – 28, 2025' },
        billTo: {
          name: 'Maya Chen',
          role: 'Operations Director, Northwind Coffee Roasters',
          address: ['1204 NW Flanders St', 'Portland, OR 97209', 'maya@northwind.example'],
        },
        items: [
          {
            description: 'Brand identity system',
            detail: 'Logo suite, colour palette, typography standards',
            quantity: 1,
            price: 4800,
          },
          {
            description: 'Packaging design',
            detail: '12 oz and 2 lb bags, dielines and print spec',
            quantity: 3,
            price: 950,
          },
          {
            description: 'Art direction',
            detail: 'Launch campaign photography, two shoot days',
            quantity: 2,
            price: 600,
          },
          {
            description: 'Brand guidelines',
            detail: '40-page usage manual, print and screen',
            quantity: 1,
            price: 1250,
          },
          {
            description: 'Print production management',
            detail: 'Press check and two proof rounds',
            quantity: 1,
            price: 850,
          },
          {
            description: 'Wholesale sell sheet',
            detail: 'Two-sided, six SKUs, press-ready artwork',
            quantity: 2,
            price: 420,
          },
          {
            description: 'Typeface licensing',
            detail: 'Three weights, desktop and web, five seats, at cost',
            quantity: 1,
            price: 1150,
          },
          {
            description: 'Launch microsite',
            detail: 'Single page, built and handed to your developer',
            quantity: 1,
            price: 1600,
          },
          {
            description: 'Photography licensing',
            detail: 'Per image, three-year commercial use, at cost',
            quantity: 12,
            price: 85,
          },
        ],
        currency: '$',
        credit: { label: 'Retainer applied', amount: 3000, note: 'Received Feb 4, 2025' },
        tax: { label: 'Sales tax (NY 8.875%)', rate: 0.08875 },
        dueNote: 'Payable by March 17, 2025',
        payment: [
          {
            title: 'Bank transfer',
            body: [
              inline(strong(inline`Mercer Trust`)),
              'Routing 021555014',
              'Account 7894 5612 3',
              'SWIFT on request',
            ],
          },
          {
            title: 'Card',
            body: [
              'Visa, Mastercard, Amex',
              inline`A ${strong(inline`2.9%`)} processing fee is added at checkout`,
              'Receipt issued automatically',
            ],
          },
          {
            title: 'Pay online',
            body: [
              inline(strong(inline`pay.acme.example/042`)),
              inline`Reference ${strong(inline`INV-2025-042`)}`,
              'Apple Pay and bank debit accepted',
            ],
          },
        ],
        footer: 'Acme Studio LLC · 48 Mercer Street, Brooklyn, NY 11201',
      }),
    ),
    inline`Quote ${strong(inline`INV-2025-042`)} on every remittance so the payment is applied to the right
account. Questions on any line above go to Dana Whitfield, Studio Director, at ${strong(inline`dana@acme.example`)}.`,
  )
}
