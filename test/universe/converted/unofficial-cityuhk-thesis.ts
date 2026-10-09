// Converted from test/universe/corpus/unofficial-cityuhk-thesis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  define,
  doc,
  external,
  importPackage,
  includeFile,
  let_,
  m,
  path,
  show,
} from '../../../src/index.ts'

export default () => {
  const thesis = external('thesis')
  const thesis_with = define('with')
    .named('abstract', T.any, null)
    .named('ack', T.any, null)
    .named('author', T.any, null)
    .named('bib', T.any, null)
    .named('date', T.any, null)
    .named('degree', T.any, null)
    .named('dept', T.any, null)
    .named('examiners', T.any, null)
    .named('extras', T.any, null)
    .named('panel-members', T.any, null)
    .named('supervisor', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(thesis)
  const [titleDecl, title_2] = let_('title', {
    en: 'A Discussion on Higher Education Development in Hong Kong',
    zh: '論香港高等教育的發展',
  })
  const [authorDecl, author] = let_('author', {
    firstname: 'Tai Man',
    surname: 'Chan',
    firstnameZh: '大文',
    surnameZh: '陳',
  })
  const [deptDecl, dept] = let_('dept', { en: 'Department of Public Policy', zh: '公共政策學系' })
  const [degreeDecl, degree] = let_('degree', { en: 'Doctor of Philosophy', zh: '哲學博士學位', abbr: 'PhD' })
  const [dateDecl, date] = let_('date', { en: 'July 2021', zh: '二零二一年七月' })
  const [supervisorDecl, supervisor] = let_('supervisor', {
    title: 'Prof.',
    firstname: 'Name',
    surname: 'Surname',
    dept: 'Department of Computer Science',
    university: 'City University of Hong Kong',
  })
  const [panelMembersDecl, panelMembers] = let_('panel-members', [
    {
      title: 'Prof.',
      firstname: 'Name',
      surname: 'Surname',
      dept: 'Department of Computer Science',
      university: 'City University of Hong Kong',
    },
    {
      title: 'Prof.',
      firstname: 'Name',
      surname: 'Surname',
      dept: 'Department of Computer Science',
      university: 'City University of Hong Kong',
    },
  ])
  const [examinersDecl, examiners] = let_('examiners', [
    {
      title: 'Prof.',
      firstname: 'Name',
      surname: 'Surname',
      dept: 'Department of Computer Science',
      university: 'City University of Hong Kong',
    },
    {
      title: 'Prof.',
      firstname: 'Name',
      surname: 'Surname',
      dept: 'Department of Computer Science',
      university: 'City University of Hong Kong',
    },
  ])
  const [abstractDecl, abstract] = let_('abstract', includeFile('front-pages/abstract.typ'))
  const [ackDecl, ack] = let_('ack', includeFile('front-pages/acknowledgement.typ'))
  const [extraSectionsDecl, extraSections] = let_('extra-sections', null)
  return doc(
    importPackage('@preview/unofficial-cityuhk-thesis:0.1.0', [thesis]),
    titleDecl,
    authorDecl,
    deptDecl,
    degreeDecl,
    dateDecl,
    supervisorDecl,
    panelMembersDecl,
    examinersDecl,
    m.lines(abstractDecl, ackDecl),
    extraSectionsDecl,
    show(
      thesis_with({
        title: title_2,
        author: author,
        dept: dept,
        degree: degree,
        date: date,
        supervisor: supervisor,
        panelMembers: panelMembers,
        examiners: examiners,
        abstract: abstract,
        ack: ack,
        bib: bibliography({ style: 'nature', title: 'References' }, path('thesis.bib')),
        extras: extraSections,
      }),
    ),
    includeFile('chapters/chapter1.typ'),
    includeFile('chapters/chapter2.typ'),
  )
}
