// Converted from test/universe/corpus/remetente.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  define,
  doc,
  emph,
  external,
  importPackage,
  inline,
  linebreak,
  lorem,
  pt,
  rgb,
  show,
  space,
  text,
} from '../../../src/index.ts'

export default () => {
  const letter = external('letter')
  const letter_with = define('with')
    .named('date', T.content, [])
    .named('first-page-header', T.any, null)
    .named('header-band-content', T.any, null)
    .named('recipient-address', T.content, [])
    .named('sender-address', T.content, [])
    .named('signature', T.content, [])
    .named('subject', T.content, [])
    .returns(T.any)
    .external(letter)
  return doc(
    importPackage('@preview/remetente:0.2.0', [letter]),
    show(
      letter_with({
        senderAddress: inline`${space}Sender's Name ${linebreak()} ${emph(inline`${space}1 Example Street ${linebreak()} Sampleton, Sampleshire ${linebreak()} WX1 2YZ${space}`)}${space}`,
        recipientAddress: inline`${space}Recipient's Name ${linebreak()} ${emph(inline`${space}2 Somewhere Avenue ${linebreak()} Somewhereton ${linebreak()} AB8 9CD${space}`)}${space}`,
        date: inline`4 October 1905`,
        subject: inline`Very important subject matter`,
        signature: inline`Sender's Name`,
        headerBandContent: text({ fill: rgb('#2B58A2'), weight: 'bold', size: pt(20) }, inline`Logo`),
        firstPageHeader: true,
      }),
    ),
    'Dear Mr. Recipient,',
    inline(lorem(99)),
    'Sincerely,',
  )
}
