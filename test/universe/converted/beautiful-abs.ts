// Converted from test/universe/corpus/beautiful-abs.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  define,
  doc,
  external,
  fr,
  importPackage,
  inline,
  m,
  space,
  strong,
  table,
  text,
} from '../../../src/index.ts'

export default () => {
  const ie = external('ie')
  const eg = external('eg')
  const etal = external('etal')
  const perse = external('perse')
  const qed = external('qed')
  const aka = external('aka')
  const st = external('st')
  const dh = external('dh')
  const ua = external('ua')
  const zb = external('zb')
  const pex = external('pex')
  const customab = define('customab').pos('arg1', T.any).returns(T.any).external()
  return doc(
    importPackage('@preview/beautiful-abs:0.1.0', [ie, eg, etal, perse, qed, aka, st, dh, ua, zb, pex, customab]),
    m.heading(1, 'General Usage'),
    inline`This is an example usage of ${ie} or ${eg}. It places half a space in between the parts of the
abbreviation.`,
    inline(
      text({ style: 'italic' }, add(add('It also works with italic styles: ', ie), ' ... ')),
      space,
      text({ weight: 'bold' }, add('or bold texts: ', eg)),
    ),
    m.heading(1, 'Existing Abbreviations'),
    inline(
      table(
        { columns: [fr(1), fr(2), fr(1), fr(1)] },
        table.header(
          inline(strong(inline`Abbreviation`)),
          inline(strong(inline`Long Form`)),
          inline(strong(inline`Function`)),
          inline(strong(inline`Language`)),
        ),
        inline(eg),
        inline`exempli gratia`,
        inline`#eg`,
        inline`Latin`,
        inline(etal),
        inline`et alia`,
        inline`#etal`,
        inline`Latin`,
        inline(ie),
        inline`id est`,
        inline`#ie`,
        inline`Latin`,
        inline(perse),
        inline`per se`,
        inline`#perse`,
        inline`Latin`,
        inline(qed),
        inline`quod erat demonstrandum`,
        inline`#qed`,
        inline`Latin`,
        inline(aka),
        inline`also known as`,
        inline`#aka`,
        inline`English`,
        inline(st),
        inline`such that`,
        inline`#st`,
        inline`English`,
        inline(dh),
        inline`das heißt`,
        inline`#dh`,
        inline`German`,
        inline(ua),
        inline`unter anderem`,
        inline`#ua`,
        inline`German`,
        inline(zb),
        inline`zum Beispiel`,
        inline`#zb`,
        inline`German`,
        inline(pex),
        inline`per exemple`,
        inline`#pex`,
        inline`French`,
      ),
    ),
    m.heading(1, 'Custom Abbreviations'),
    inline`In case there is more, you can use: ${customab(['a.', 'b.', 'c.'])}`,
  )
}
