// Converted from test/universe/corpus/modern-unimib-thesis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  define,
  doc,
  external,
  image,
  importPackage,
  inline,
  label,
  labelled,
  let_,
  lorem,
  m,
  path,
  pct,
  ref,
  show,
  space,
  underline,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const template = external('template')
  const template_with = define('with')
    .named('bib', T.any, null)
    .named('candidate', T.any, null)
    .named('co-supervisor', T.any, null)
    .named('course', T.any, null)
    .named('date', T.any, null)
    .named('department', T.any, null)
    .named('lang', T.any, null)
    .named('logo', T.any, null)
    .named('school', T.any, null)
    .named('supervisor', T.any, null)
    .named('title', T.any, null)
    .named('university', T.any, null)
    .returns(T.any)
    .external(template)
  const [refsDecl, refs] = let_('refs', bibliography(path('refs.bib')))
  return doc(
    importPackage('@preview/modern-unimib-thesis:0.1.1', [template]),
    refsDecl,
    show(
      template_with({
        title: 'Higher Order Quantum Theory, the "Double-Ket" notation',
        candidate: { name: 'Michelino Banfi', number: '123456' },
        date: '2024/2025',
        university: 'Universitá degli studi Milano - Bicocca',
        school: 'Scuola di Scienze',
        department: 'Dipartimento di Fisica',
        course: 'Master Degree in Artificial Intelligence for Science and Technology',
        logo: image({ width: pct(30) }, path('images/logo_unimib.png')),
        supervisor: 'Prof. Luca Manzi',
        coSupervisor: ['Saira Sanchez', 'Prof. Annalisa Di Pasquali'],
        lang: 'en',
        bib: refs,
      }),
    ),
    m.lines(
      m.heading(1, 'Introduction'),
      inline(lorem(100)),
      m.heading(2, 'Subtitle'),
      inline(
        underline(inline`Generalized POVM`),
        space,
        labelled(unsafeRaw.math.block`pi_i equiv sum_(j=0)^i K_j^dagger PP_i K_j`, label('POVM')),
      ),
    ),
    m.lines(inline`${ref(label('POVM'))} are Great!`, m.heading(1, 'Preliminaries'), inline(ref(label('Yoder_2014')))),
    m.lines(m.heading(1, 'Acknowledgments'), inline(lorem(100))),
  )
}
