// Converted from test/universe/corpus/simple-ve-thesis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  define,
  doc,
  external,
  importPackage,
  includeFile,
  inline,
  let_,
  lorem,
  m,
  path,
  show,
} from '../../../src/index.ts'

export default () => {
  const template = external('template')
  const template_with = define('with')
    .named('abstract', T.any, null)
    .named('bib', T.any, null)
    .named('candidate', T.any, null)
    .named('co-supervisor', T.any, null)
    .named('course', T.any, null)
    .named('date', T.any, null)
    .named('is-master', T.any, null)
    .named('lang', T.any, null)
    .named('logo', T.any, null)
    .named('supervisor', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(template)
  const [bibDecl, bib] = let_('bib', bibliography(path('./refs.bib')))
  return doc(
    importPackage('@preview/simple-ve-thesis:0.1.0', [template]),
    bibDecl,
    show(
      template_with({
        title: 'Title',
        candidate: { name: 'Nome Cognome', number: '123456' },
        date: '202x/202x',
        course: 'Course name',
        logo: null,
        isMaster: false,
        supervisor: 'Prof. Nome Cognome',
        coSupervisor: 'Prof. Nome Cognome',
        abstract: includeFile('abstract.typ'),
        lang: 'it',
        bib: bib,
      }),
    ),
    m.lines(m.heading(1, 'Introduzione'), inline(lorem(100))),
    m.lines(m.heading(2, 'Parte uno'), inline(lorem(100))),
    m.lines(m.heading(2, 'Parte due'), inline(lorem(300))),
    m.lines(m.heading(1, 'Background'), inline(lorem(100))),
    m.lines(m.heading(2, 'Parte uno'), inline(lorem(100))),
    m.heading(3, 'Parte extra'),
    inline(lorem(100)),
    m.lines(m.heading(2, 'Parte due'), inline(lorem(150))),
    m.lines(m.heading(2, 'Parte tre'), inline(lorem(100))),
    m.lines(m.heading(1, 'Terzo capitolo'), inline(lorem(50))),
    m.lines(m.heading(1, 'Riconoscimenti'), inline(lorem(100))),
  )
}
