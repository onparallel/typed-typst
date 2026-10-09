// Converted from test/universe/corpus/appreciated-letter.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, external, importPackage, inline, linebreak, lorem, show, space } from '../../../src/index.ts'

export default () => {
  const letter = external('letter')
  const letter_with = define('with')
    .named('date', T.content, [])
    .named('name', T.content, [])
    .named('recipient', T.content, [])
    .named('sender', T.content, [])
    .named('subject', T.content, [])
    .returns(T.any)
    .external(letter)
  return doc(
    importPackage('@preview/appreciated-letter:0.1.0', [letter]),
    show(
      letter_with({
        sender: inline`${space}Jane Smith, Universal Exports, 1 Heavy Plaza, Morristown, NJ 07964${space}`,
        recipient: inline`${space}Mr. John Doe ${linebreak()} Acme Corp. ${linebreak()} 123 Glennwood Ave ${linebreak()}
Quarto Creek, VA 22438${space}`,
        date: inline`Morristown, June 9th, 2023`,
        subject: inline`Revision of our Producrement Contract`,
        name: inline`Jane Smith ${linebreak()} Regional Director`,
      }),
    ),
    'Dear Joe,',
    inline(lorem(99)),
    'Best,',
  )
}
