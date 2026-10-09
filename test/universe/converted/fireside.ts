// Converted from test/universe/corpus/fireside.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, external, importPackage, inline, linebreak, lorem, show, space } from '../../../src/index.ts'

export default () => {
  const fireside = external('fireside')
  const fireside_with = define('with')
    .named('from-details', T.content, [])
    .named('title', T.content, [])
    .named('to-details', T.content, [])
    .returns(T.any)
    .external(fireside)
  return doc(
    importPackage('@preview/fireside:1.0.0', [fireside]),
    show(
      fireside_with({
        title: inline`Anakin ${linebreak()} Skywalker`,
        fromDetails: inline`${space}Appt. x, ${linebreak()} Mos Espa, ${linebreak()} Tatooine ${linebreak()} anakin@example.com
${linebreak()} +999 xxxx xxx${space}`,
        toDetails: inline`${space}Sheev Palpatine ${linebreak()} 500 Republica, ${linebreak()} Ambassadorial Sector, Senate
District, ${linebreak()} Galactic City, ${linebreak()} Coruscant${space}`,
      }),
    ),
    'Dear Emperor,',
    inline`I'm applying for an internship in ${lorem(100)}`,
    inline(lorem(80)),
    inline(lorem(95)),
    'Sincerely,',
    'Mr. Skywalker',
  )
}
