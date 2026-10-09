// Converted from test/universe/corpus/bubble-sysu.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, external, importPackage, show } from '../../../src/index.ts'

export default () => {
  const report = external('report')
  const report_with = define('with')
    .named('class', T.any, null)
    .named('major', T.any, null)
    .named('school', T.any, null)
    .named('student', T.any, null)
    .named('subtitle', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(report)
  return doc(
    importPackage('@preview/bubble-sysu:0.1.0', [report]),
    show(
      report_with({
        title: '实验一：词法分析',
        subtitle: '编译原理实验报告',
        student: { name: '张三', id: '23330101' },
        school: '计算机学院',
        major: '计算机科学与技术',
        class: '计八班',
      }),
    ),
  )
}
