// Converted from test/universe/corpus/strangelion.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  cite,
  counter,
  define,
  doc,
  external,
  importFile,
  importPackage,
  includeFile,
  inline,
  label,
  m,
  outline,
  page,
  pagebreak,
  path,
  set,
  show,
  space,
} from '../../../src/index.ts'

export default () => {
  const template = define('template')
    .pos('arg1', T.any)
    .named('author', T.any, null)
    .named('class', T.any, null)
    .named('college', T.any, null)
    .named('course-id', T.any, null)
    .named('course-name', T.any, null)
    .named('date', T.any, null)
    .named('head', T.any, null)
    .named('info-order', T.any, null)
    .named('major', T.any, null)
    .named('school', T.any, null)
    .named('school-semester', T.any, null)
    .named('student-id', T.any, null)
    .named('supervisor', T.any, null)
    .named('title', T.any, null)
    .named('title-en', T.any, null)
    .returns(T.any)
    .external()
  const conf = external('conf')
  const conf_head = external('head', conf)
  const conf_title = external('title', conf)
  const conf_titleEn = external('title-en', conf)
  const conf_schoolSemester = external('school-semester', conf)
  const conf_school = external('school', conf)
  const conf_courseId = external('course-id', conf)
  const conf_courseName = external('course-name', conf)
  const conf_college = external('college', conf)
  const conf_author = external('author', conf)
  const conf_studentId = external('student-id', conf)
  const conf_class = external('class', conf)
  const conf_major = external('major', conf)
  const conf_supervisor = external('supervisor', conf)
  const conf_date = external('date', conf)
  const conf_infoOrder = external('info-order', conf)
  return doc(
    m.lines(importPackage('@preview/strangelion:0.1.0', [template]), importFile('config.typ', [conf])),
    show((doc_2, ctx) =>
      template(
        {
          head: conf_head,
          title: conf_title,
          titleEn: conf_titleEn,
          schoolSemester: conf_schoolSemester,
          school: conf_school,
          courseId: conf_courseId,
          courseName: conf_courseName,
          college: conf_college,
          author: conf_author,
          studentId: conf_studentId,
          class: conf_class,
          major: conf_major,
          supervisor: conf_supervisor,
          date: conf_date,
          infoOrder: conf_infoOrder,
        },
        doc_2,
      ),
    ),
    m.lines(set(page, { numbering: 'I' }), inline(counter(page).update(1))),
    includeFile('content/abstract.typ'),
    inline(pagebreak(), space, outline({ title: '目录', depth: 3 }), space, pagebreak()),
    m.lines(set(page, { numbering: '1' }), inline(counter(page).update(1))),
    m.lines(
      includeFile('content/chapter1.typ'),
      includeFile('content/chapter2.typ'),
      includeFile('content/chapter3.typ'),
      includeFile('content/chapter4.typ'),
      includeFile('content/chapter5.typ'),
      includeFile('content/chapter6.typ'),
    ),
    inline(cite({ form: null }, label('ref1')), space, cite({ form: null }, label('ref2'))),
    inline(pagebreak()),
    inline(bibliography({ title: '参考文献', style: 'gb-7714-2015-numeric' }, path('references.bib'))),
  )
}
