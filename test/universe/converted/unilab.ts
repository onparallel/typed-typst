// Converted from test/universe/corpus/unilab.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  define,
  doc,
  external,
  image,
  importPackage,
  inline,
  lorem,
  m,
  path,
  set,
  show,
  text,
} from '../../../src/index.ts'

export default () => {
  const labreport = define('labreport')
    .pos('arg1', T.any)
    .named('course-name', T.any, null)
    .named('exper-date', T.any, null)
    .named('exper-name', T.any, null)
    .named('exper-no', T.any, null)
    .named('faculty', T.any, null)
    .named('handin-date', T.any, null)
    .named('logos', T.any, null)
    .named('student-name', T.any, null)
    .named('student-no', T.any, null)
    .returns(T.any)
    .external()
  const principles = external('principles')
  const apparatus = external('apparatus')
  const procedure = external('procedure')
  const data_2 = external('data')
  const analysis = external('analysis')
  return doc(
    importPackage('@preview/unilab:0.0.4', [labreport, principles, apparatus, procedure, data_2, analysis]),
    set(text, { lang: 'zh' }),
    show((doc_2, ctx) =>
      labreport(
        {
          courseName: lorem(3),
          experName: lorem(5),
          experDate: '2024-03-26',
          handinDate: '2024-04-02',
          experNo: 6,
          studentName: '张三',
          studentNo: 2020200111,
          faculty: '物理学院',
          logos: [image(path('./school-logo.svg')), image(path('./school-text.svg'))],
        },
        doc_2,
      ),
    ),
    inline(principles),
    m.list(m.item([lorem(12)]), m.item([lorem(18)]), m.item([lorem(9)])),
    inline(apparatus),
    m.list(m.item([lorem(6)]), m.item([lorem(3)]), m.item([lorem(5)])),
    inline(principles),
    inline(lorem(50)),
    inline(procedure),
    inline(lorem(56)),
    inline(data_2),
    inline(lorem(62)),
    inline(analysis),
    inline(lorem(48)),
    m.heading(1, '其他标题'),
    inline(lorem(10)),
  )
}
