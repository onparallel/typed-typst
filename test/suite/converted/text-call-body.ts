// Converted from test/suite/corpus/text-call-body.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { blue, doc, external, inline, linebreak, red, space, teal, text } from '../../../src/index.ts'

export default () => {
  const forest = external('forest')
  return doc(
    inline(
      text('Text'),
      space,
      linebreak(),
      space,
      text({ fill: red }, 'Text'),
      space,
      linebreak(),
      space,
      text({ font: 'Ubuntu', fill: blue }, 'Text'),
      space,
      linebreak(),
      space,
      text({ font: 'IBM Plex Serif', fill: teal }, inline`Text`),
      space,
      linebreak(),
      space,
      text({ font: 'New Computer Modern', fill: forest }, inline`Text`),
      space,
      linebreak(),
    ),
  )
}
