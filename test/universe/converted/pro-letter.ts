// Converted from test/universe/corpus/pro-letter.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, emph, external, importPackage, inline, show, strong } from '../../../src/index.ts'

export default () => {
  const proLetter = external('pro-letter')
  const proLetter_with = define('with')
    .named('attachments', T.any, null)
    .named('date', T.any, null)
    .named('notary-page', T.any, null)
    .named('recipient', T.any, null)
    .named('sender', T.any, null)
    .named('signer', T.any, null)
    .named('subject', T.any, null)
    .returns(T.any)
    .external(proLetter)
  return doc(
    importPackage('@preview/pro-letter:0.1.1', [proLetter]),
    show(
      proLetter_with({
        sender: {
          name: 'Alexandra Bloom',
          street: '123 Blueberry Lane',
          city: 'Wonderland',
          state: 'NA',
          zip: '56789',
          phone: '+1-555-987-6543',
          email: 'alex@bloomworld.net',
        },
        recipient: {
          company: 'Fantasy Finance Faucets',
          attention: 'Treasury Team',
          street: '456 Dreamscape Ave',
          city: 'Fabletown',
          state: 'IM',
          zip: '12345',
        },
        date: 'January 15, 2025',
        subject: 'Account Closure Request',
        signer: 'Alexandra Bloom',
        attachments: 'Fae Council Closure Order.',
        notaryPage: true,
      }),
    ),
    'I am writing to formally request the closure of the enchanted vault at Fantasy Finance Faucets held in my name, Alexandra Bloom.',
    'Attached is the official Fae Council Closure Order for your verification and records.',
    inline`The account is identified by the vault number: ${strong(inline`12345FAE`)}.`,
    inline`As the rightful owner, I ${emph(inline`authorize the closure of the aforementioned vault`)}
and ${emph(inline`request that all enchanted funds be redirected to the Fae Council Reserve`)}.
Please find the necessary details for the transfer enclosed.`,
    'Thank you for your prompt attention to this magical matter.',
  )
}
