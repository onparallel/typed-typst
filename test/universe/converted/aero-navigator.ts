// Converted from test/universe/corpus/aero-navigator.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, external, importPackage, show } from '../../../src/index.ts'

export default () => {
  const aeroNavigator = external('aero-navigator')
  const aeroNavigator_with = define('with')
    .named('callsign', T.any, null)
    .named('departure', T.any, null)
    .named('notes', T.any, null)
    .named('type', T.any, null)
    .named('waypoint', T.any, null)
    .named('waypoints', T.any, null)
    .returns(T.any)
    .external(aeroNavigator)
  return doc(
    importPackage('@preview/aero-navigator:0.1.0', [aeroNavigator]),
    show(
      aeroNavigator_with({
        callsign: '24-8569',
        type: 'SLG2',
        departure: 'YHEC',
        waypoint: false,
        waypoints: '',
        notes: true,
      }),
    ),
  )
}
