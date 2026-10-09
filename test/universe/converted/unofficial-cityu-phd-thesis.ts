// Converted from test/universe/corpus/unofficial-cityu-phd-thesis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  define,
  doc,
  importPackage,
  inline,
  label,
  labelled,
  let_,
  m,
  ref,
  space,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const graduateGeneral = define('graduate-general')
    .named('info', T.any, null)
    .named('twoside', T.any, null)
    .returns(T.any)
    .external()
  const [infoDecl, info] = let_('info', {
    univEn: 'CITY UNIVERSITY OF HONG KONG',
    univZh: '香港城市大學',
    title: ['一二三', '四五六'],
    titleEn: ['abc', 'def'],
    author: '七八九',
    authorEn: 'ghi',
    surname: '八九',
    firstname: '七',
    department: 'Department of Electrical Engineering',
    departmentZh: '電機工程系',
    degree: 'PhD',
    submitDate: '二零九九年五月',
    submitDateEn: 'May, 2099',
    supervisor: ['jkl', 'mno'],
    superdep: ['Department of Electrical Engineering', 'pqr'],
    superunvi: ['City University of Hong Kong', 'stu'],
    panels: ['abc', 'de'],
    paneldep: ['fhi', 'jk'],
    panelunvi: ['lmn', 'op'],
    examiner: ['abc', 'de'],
    examinerdep: ['fhi', 'jk'],
    examinerunvi: ['lmn', 'op'],
    isjoint: false,
  })
  const [docDecl, doc_2] = let_('doc', graduateGeneral({ info: info, twoside: true }))
  return doc(
    m.lines(
      importPackage('@preview/unofficial-cityu-phd-thesis:1.0.0', [graduateGeneral]),
      unsafeRaw.markup`#import graduate-general: *`,
    ),
    infoDecl,
    m.lines(docDecl, unsafeRaw.markup`#show: doc.style`),
    unsafeRaw.markup`#show: frontmatter`,
    inline(labelled([unsafeRaw.code<any>`doc.pages.cover`, space], label('mzt:no-header-footer'))),
    unsafeRaw.markup`#let individual = doc.pages.individual`,
    inline(unsafeRaw.code<any>`individual("Abstract")[
  #h(2em)
  testing
]`),
    inline(
      unsafeRaw.code<any>`doc.pages.panel-exam`,
      space,
      unsafeRaw.code<any>`individual("Acknowledgements")[
  testing
]`,
    ),
    inline(
      unsafeRaw.code<any>`doc.pages.outline`,
      space,
      unsafeRaw.code<any>`doc.pages.figure-outline`,
      space,
      unsafeRaw.code<any>`doc.pages.table-outline`,
    ),
    unsafeRaw.markup`#show: mainmatter`,
    m.lines(
      m.heading(1, 'Testing Section'),
      m.heading(2, 'Testing Subsection'),
      inline`testing sentence with ref ${ref(label('testref'))}.`,
    ),
    inline(unsafeRaw.code<any>`individual("References", outlined: true)[
  #bibliography("ref.bib", style: "ieee", title: none)
]`),
    inline(unsafeRaw.code<any>`individual("Publications", outlined: true)[
  testing
]`),
  )
}
