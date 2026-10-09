// Converted from test/suite/corpus/columns-rtl.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { box, cm, columns, doc, eastern, external, inline, m, page, pt, set, text } from '../../../src/index.ts'

export default () => {
  const conifer = external('conifer')
  return doc(
    m.lines(
      set(page, { height: cm(3.25), width: cm(7.05), columns: 2 }),
      set(text, { lang: 'ar', font: ['Noto Sans Arabic', 'Libertinus Serif'] }),
      set(columns, { gutter: pt(30) }),
    ),
    inline`${box({ fill: conifer, height: pt(8), width: pt(6) })} وتحفيز العديد من التفاعلات الكيميائية.
(DNA) من أهم الأحماض النووية التي تُشكِّل إلى جانب كل من البروتينات والليبيدات والسكريات المتعددة
${box({ fill: eastern, height: pt(8), width: pt(6) })} الجزيئات الضخمة الأربعة الضرورية للحياة.`,
  )
}
