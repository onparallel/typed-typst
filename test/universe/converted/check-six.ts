// Converted from test/universe/corpus/check-six.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, external, importPackage, inline, rgb, show, space } from '../../../src/index.ts'

export default () => {
  const checklist = external('checklist')
  const section = define('section')
    .pos('arg1', T.any)
    .pos('arg2', T.content)
    .named('color', T.any, null)
    .named('keep-together', T.any, null)
    .named('numbered', T.any, null)
    .named('subtitle', T.any, null)
    .returns(T.any)
    .external()
  const item = define('item').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const caution = define('caution').pos('arg1', T.content).returns(T.any).external()
  const sub_2 = define('sub').pos('arg1', T.content).returns(T.any).external()
  const note = define('note').pos('arg1', T.content).returns(T.any).external()
  const warn = define('warn').pos('arg1', T.content).returns(T.any).external()
  const checklist_with = define('with')
    .named('accent', T.any, null)
    .named('footer', T.any, null)
    .named('paper', T.any, null)
    .named('subtitle', T.any, null)
    .named('title', T.any, null)
    .named('version', T.any, null)
    .returns(T.any)
    .external(checklist)
  return doc(
    importPackage('@preview/check-six:0.1.0', [checklist, section, item, caution, sub_2, note, warn]),
    show(
      checklist_with({
        title: 'Cessna 152 Checklist',
        subtitle: 'For flight simulation use only',
        paper: 'a4',
        accent: rgb('#1b3a6b'),
        version: '1.0',
        footer: 'Cessna 152 - Normal Procedures',
      }),
    ),
    inline(
      section(
        'Preflight Inspection',
        inline(
          space,
          item('Ignition', 'OFF'),
          space,
          item('Master Switch', 'ON'),
          space,
          item('Fuel Quantity', 'CHECK'),
          space,
          item('Flaps', '30°'),
          space,
          item('Master Switch', 'OFF'),
          space,
          item('Weight and Balance', 'CHECK'),
          space,
          item('Engine and Pitot Covers', 'REMOVE'),
          space,
          item('Wheel Chocks', 'PULLED'),
          space,
          item('Outside Inspection', 'PERFORM'),
          space,
        ),
      ),
    ),
    inline(
      section(
        'Before Starting Engine',
        inline(
          space,
          item('Preflight Inspection', 'COMPLETE'),
          space,
          item('Parking Brake', 'SET'),
          space,
          item('Fuel Shutoff Valve', 'ON'),
          space,
          item('Radios & Electronic Equipment', 'OFF'),
          space,
          item('Circuit Breakers', 'CHECK IN'),
          space,
        ),
      ),
    ),
    inline(
      section(
        'Starting the Engine',
        inline(
          space,
          item('Mixture', 'RICH'),
          space,
          item('Carb Heat', 'COLD'),
          space,
          item('Primer', 'AS REQ (up to 3 strokes)'),
          space,
          item('Throttle', 'OPEN 1/2 inch'),
          space,
          item('Master Switch (BAT & ALT)', 'ON'),
          space,
          item('Beacon', 'ON'),
          space,
          item('Ignition', 'START then BOTH'),
          space,
          item('Throttle', '1,000 RPM'),
          space,
          item('Oil Pressure', 'CHECK'),
          space,
          caution(
            inline`${space}If no oil pressure is indicating within 30 seconds, shut down the engine immediately.${space}`,
          ),
          space,
          item('Ammeter', 'CHECK'),
          space,
        ),
      ),
    ),
    inline(
      section(
        { keepTogether: true },
        'Engine Runup',
        inline(
          space,
          item('Parking Brake', 'SET'),
          space,
          item('Throttle', '~ 1,700 RPM'),
          space,
          item('Magneto Check', 'LEFT, RIGHT, BOTH'),
          space,
          sub_2(inline`Verify max drop = 125 RPM & max diff = 50 RPM`),
          space,
          item('Carb Heat Check', 'ON, then OFF'),
          space,
          note(inline`Verify RPM decreases and increases again.`),
          space,
          item('Suction Gage', 'GREEN RANGE'),
          space,
          item('Throttle', '~ 1,000 RPM'),
          space,
        ),
      ),
    ),
    inline(
      section(
        { numbered: true, subtitle: 'Short form, without cold-start details' },
        'Quick Start-Up',
        inline(
          space,
          item('Batt. Switch', 'MAIN POWER'),
          space,
          item('Parking Brake', 'ON'),
          space,
          item('Jet Fuel Starter', 'START 2'),
          space,
          item('Internal & External Lights', 'AS NEEDED'),
          space,
          item('Canopy', 'Closed, Sealed & Locked'),
          space,
          item('ENG', 'IDLE at 20% RPM'),
          space,
          warn(inline`Only continue once ENG RPM has reached 65%.`),
          space,
          item('Altimeter', 'ELEC'),
          space,
          item('Avionics', 'ALL ON, INS NORM'),
          space,
          item('Ejection Seat', 'ARMED'),
          space,
        ),
      ),
    ),
    inline(
      section(
        { color: rgb('#c0202a') },
        'Emergency - Engine Failure',
        inline(
          space,
          item('Airspeed', '65 KIAS'),
          space,
          item('Mixture', 'IDLE CUTOFF'),
          space,
          item('Fuel Shutoff Valve', 'OFF'),
          space,
          item('Ignition', 'OFF'),
          space,
          item('Master Switch', 'OFF'),
          space,
          item('Flaps', 'AS REQUIRED'),
          space,
        ),
      ),
    ),
    inline(
      section(
        'Collection of all Elements in this Template',
        inline(
          space,
          item('This is a regular Item', 'It really is!'),
          space,
          sub_2(inline`This is a sub-item, which can be used to add additional information to the parent item.`),
          space,
          note(inline`This is a note`),
          space,
          warn(inline`This is a warning`),
          space,
          caution(inline`This is a caution field`),
          space,
        ),
      ),
    ),
  )
}
