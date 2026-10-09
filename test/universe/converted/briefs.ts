// Converted from test/universe/corpus/briefs.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  cm,
  define,
  doc,
  external,
  importPackage,
  inline,
  linebreak,
  m,
  set,
  show,
  space,
  strong,
  text,
  v,
} from '../../../src/index.ts'

export default () => {
  const letter = external('letter')
  const letter_with = define('with')
    .named('information-extra', T.content, [])
    .named('location', T.any, null)
    .named('recipient', T.content, [])
    .named('sender', T.any, null)
    .named('subject', T.content, [])
    .returns(T.any)
    .external(letter)
  return doc(
    importPackage('@preview/briefs:0.4.0', [letter]),
    m.lines(
      set(text, { lang: 'de' }),
      show(
        letter_with({
          sender: [inline`Hilfsorganisation e.V.`, inline`Spendengasse 12`, inline`12345 Helfershausen`],
          recipient: inline`${space}Frau${linebreak()} Erika Mustermann${linebreak()} Rathausplatz 37${linebreak()} 67890
Waldhausen${space}`,
          informationExtra: inline`${space}${linebreak()} Tel.: 01234 5678910${space}`,
          location: 'Helfershausen',
          subject: inline(strong(inline`Vielen Dank für Ihre Spende`)),
        }),
      ),
    ),
    'Sehr geehrte Frau Mustermann,',
    'wir bedanken uns herzlich für Ihre großzügige Spende an unseren Verein. Durch Ihre Unterstützung können wir weiterhin wichtige soziale Projekte durchführen und Menschen in Not helfen.',
    'Vielen Dank für Ihr Vertrauen und Ihre Mithilfe!',
    inline`${v(cm(0.5))} Mit freundlichen Grüßen`,
    'Hilfsorganisation e.V.',
  )
}
