// Converted from test/universe/corpus/almost-tud-letter.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  cm,
  datetime,
  define,
  doc,
  external,
  importPackage,
  inline,
  linebreak,
  lorem,
  mm,
  show,
  space,
  v,
} from '../../../src/index.ts'

export default () => {
  const almostTudLetter = external('almost-tud-letter')
  const almostTudLetter_with = define('with')
    .named('date', T.any, null)
    .named('from', T.any, null)
    .named('subject', T.any, null)
    .named('to', T.content, [])
    .returns(T.any)
    .external(almostTudLetter)
  return doc(
    importPackage('@preview/almost-tud-letter:0.1.0', [almostTudLetter]),
    show(
      almostTudLetter_with({
        from: { name: 'Jan Smit', phone: '+31 (0)15 27 12345', email: 'j.smit@tudelft.nl' },
        to: inline`${space}Gerard Joling ${linebreak()} Singer of the year ${linebreak()}${space}`,
        date: datetime.today().display(),
        subject: 'A very important letter',
      }),
    ),
    'Dear Gerard,',
    inline(lorem(60)),
    inline(lorem(100)),
    inline`${v(cm(1))} Best regards, ${v(mm(3))} Dr Jan Smit ${linebreak()} Head of an important department`,
  )
}
