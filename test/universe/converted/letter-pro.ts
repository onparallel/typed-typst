// Converted from test/universe/corpus/letter-pro.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  cm,
  define,
  doc,
  external,
  fr,
  importPackage,
  inline,
  linebreak,
  link,
  m,
  set,
  show,
  space,
  strong,
  text,
  v,
} from '../../../src/index.ts'

export default () => {
  const letterSimple = external('letter-simple')
  const letterSimple_with = define('with')
    .named('annotations', T.content, [])
    .named('date', T.any, null)
    .named('recipient', T.content, [])
    .named('reference-signs', T.any, null)
    .named('sender', T.any, null)
    .named('subject', T.any, null)
    .returns(T.any)
    .external(letterSimple)
  return doc(
    importPackage('@preview/letter-pro:3.0.0', [letterSimple]),
    set(text, { lang: 'de' }),
    show(
      letterSimple_with({
        sender: {
          name: 'Anja Ahlsen',
          address: 'Deutschherrenufer 28, 60528 Frankfurt',
          extra: inline`${space}Telefon: ${link('tel:+4915228817386', inline`+49 152 28817386`)}${linebreak()} E-Mail:
${link('mailto:aahlsen@example.com', inline`aahlsen@example.com`)}${linebreak()}${space}`,
        },
        annotations: inline`Einschreiben - Rückschein`,
        recipient: inline`${space}Finanzamt Frankfurt${linebreak()} Einkommenssteuerstelle${linebreak()} Gutleutstraße
5${linebreak()} 60329 Frankfurt${space}`,
        referenceSigns: [[inline`Steuernummer`, inline`333/24692/5775`]],
        date: '12. November 2014',
        subject: 'Einspruch gegen den ESt-Bescheid',
      }),
    ),
    'Sehr geehrte Damen und Herren,',
    'die von mir bei den Werbekosten geltend gemachte Abschreibung für den im vergangenen Jahr angeschafften Fotokopierer wurde von Ihnen nicht berücksichtigt. Der Fotokopierer steht in meinem Büro und wird von mir ausschließlich zu beruflichen Zwecken verwendet.',
    'Ich lege deshalb Einspruch gegen den oben genannten Einkommensteuerbescheid ein und bitte Sie, die Abschreibung anzuerkennen.',
    'Anbei erhalten Sie eine Kopie der Rechnung des Gerätes.',
    inline`Mit freundlichen Grüßen ${v(cm(1))} Anja Ahlsen`,
    m.lines(inline(v(fr(1)), space, strong(inline`Anlagen:`)), m.list(m.item(['Rechnung']))),
  )
}
