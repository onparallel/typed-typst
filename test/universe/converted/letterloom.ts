// Converted from test/universe/corpus/letterloom.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, datetime, define, doc, external, importPackage, inline, show, space } from '../../../src/index.ts'

export default () => {
  const letterloom = external('letterloom')
  const letterloom_with = define('with')
    .named('closing', T.any, null)
    .named('date', T.any, null)
    .named('from-address', T.content, [])
    .named('from-name', T.any, null)
    .named('salutation', T.any, null)
    .named('signatures', T.any, null)
    .named('subject', T.any, null)
    .named('to-address', T.content, [])
    .named('to-name', T.any, null)
    .returns(T.any)
    .external(letterloom)
  return doc(
    importPackage('@preview/letterloom:3.0.2', [letterloom]),
    show(
      letterloom_with({
        fromName: "Sender's Name",
        fromAddress: inline`${space}Sender's Address${space}`,
        toName: "Receiver's Name",
        toAddress: inline`${space}Receiver's Address${space}`,
        date: datetime.today().display('[day padding:zero] [month repr:long] [year repr:full]'),
        salutation: "Dear Receiver's Name,",
        subject: 'Subject',
        closing: 'Yours sincerely,',
        signatures: [{ name: "Sender's Name" }],
      }),
    ),
  )
}
