// Converted from test/universe/corpus/unofficial-sdu-lab-report.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, datetime, define, doc, external, image, importPackage, path, show } from '../../../src/index.ts'

export default () => {
  const report = external('report')
  const report_with = define('with')
    .named('course', T.any, null)
    .named('lab-date', T.any, null)
    .named('lab-title', T.any, null)
    .named('logo', T.any, null)
    .named('partner', T.any, null)
    .named('student-grade', T.any, null)
    .named('student-group', T.any, null)
    .named('student-name', T.any, null)
    .named('tool-group', T.any, null)
    .returns(T.any)
    .external(report)
  return doc(
    importPackage('@preview/unofficial-sdu-lab-report:0.1.1', [report]),
    show(
      report_with({
        partner: '',
        studentName: '',
        studentGrade: '',
        studentGroup: '',
        course: '',
        labTitle: '',
        labDate: datetime.today(),
        toolGroup: '',
        logo: image(path('sdu-logo.png')),
      }),
    ),
  )
}
