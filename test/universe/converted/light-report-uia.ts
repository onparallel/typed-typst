// Converted from test/universe/corpus/light-report-uia.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  auto,
  bibliography,
  define,
  doc,
  external,
  figure,
  horizon,
  importPackage,
  inline,
  label,
  lorem,
  m,
  path,
  pt,
  raw,
  ref,
  show,
  strong,
  table,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const report = external('report')
  const report_with = define('with')
    .named('authors', T.any, null)
    .named('course-code', T.any, null)
    .named('course-name', T.any, null)
    .named('date', T.any, null)
    .named('group-name', T.any, null)
    .named('lang', T.any, null)
    .named('references', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(report)
  const codlyInit = external('codly-init')
  const codlyInit_with = define('with').returns(T.any).external(codlyInit)
  return doc(
    importPackage('@preview/light-report-uia:0.1.1', [report]),
    show(
      report_with({
        title: 'New project',
        authors: ['Lars Larsen', 'Lise Lisesen', 'Knut Knutsen'],
        groupName: 'Group 14',
        courseCode: 'IKT123-G',
        courseName: 'Course name',
        date: 'august 2024',
        lang: 'en',
        references: bibliography(path('references.yml')),
      }),
    ),
    m.lines(importPackage('@preview/codly:1.3.0', [codlyInit]), show(codlyInit_with())),
    m.lines(m.heading(1, 'Introduction'), inline(lorem(25))),
    m.lines(
      m.heading(1, 'Examples'),
      m.heading(2, 'Citation'),
      inline`This is something stated from a source ${ref(label('example-source'))}.`,
    ),
    m.lines(
      m.heading(2, 'Tables'),
      inline`Here's a table: ${figure({ caption: inline`Table of numbers` }, table({ columns: [auto, auto], inset: pt(10), align: horizon }, table.header(inline(strong(inline`Letters`)), inline(strong(inline`Number`))), inline`Five`, inline`5`, inline`Eight`, inline`8`))}`,
    ),
    m.lines(
      m.heading(2, 'Code blocks'),
      inline`Here's a rust code block: ${figure({ caption: inline`Epic code` }, raw({ block: true, lang: 'rs' }, 'fn main() {\n    let name = "buddy";\n    let greeting = format!("Hello, {}!", name);\n    println!("{}", greeting);\n}'))}`,
    ),
    m.lines(
      m.heading(2, 'Math'),
      inline`Here's some math: ${unsafeRaw.math.block`integral_0^infinity e^(-x^2) dif x = sqrt(pi) / 2`}
And some more: ${unsafeRaw.math`sigma / theta dot i`}.`,
    ),
  )
}
