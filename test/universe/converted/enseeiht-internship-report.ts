// Converted from test/universe/corpus/enseeiht-internship-report.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  codeBlock,
  define,
  doc,
  heading,
  image,
  importPackage,
  inline,
  label,
  lorem,
  m,
  outline,
  pagebreak,
  path,
  pt,
  rect,
  ref,
  show,
  strong,
  sym,
  where,
  yellow,
} from '../../../src/index.ts'

export default () => {
  const cover = define('cover')
    .pos('arg1', T.any)
    .named('abstract', T.any, null)
    .named('author', T.any, null)
    .named('logo-company', T.any, null)
    .named('logo-company-header', T.any, null)
    .named('logo-school', T.any, null)
    .named('logo-school-header', T.any, null)
    .named('subject', T.content, [])
    .named('subtitle', T.content, [])
    .named('title', T.content, [])
    .named('tutors', T.any, null)
    .returns(T.any)
    .external()
  const c = define('c')
    .pos('body', T.any)
    .named('fill', T.any, yellow)
    .returns(T.any)
    .body((p) => codeBlock([], rect({ fill: p['fill'], inset: pt(8) }, inline(strong(inline(p['body']))))))
  return doc(
    importPackage('@preview/enseeiht-internship-report:0.1.0', [cover]),
    m.lines(
      show((doc_2, ctx) =>
        cover(
          {
            title: inline`PFE - Rapport de Stage en Entreprise`,
            subtitle: inline`Nom du Stage`,
            subject: inline`Sujet du Stage, consigne, etc...`,
            author: {
              name: 'Victor Marti',
              job: 'DevOps',
              affiliation: 'Enseeiht',
              email: 'victor.marti564d@gmail.com',
              date: '17 Août 2025 - 17 Septembre 2025',
            },
            tutors: [
              { name: 'Tuteur Ecole', affiliation: 'Enseeiht', email: 'tuteur.ecole@toulouse-inp.fr' },
              { name: 'Tuteur Entreprise', affiliation: 'Example', email: 'tuteur.entreprise@example.com' },
            ],
            abstract: lorem(80),
            logoCompany: image({ height: pt(40) }, path('./asset/placeholder.png')),
            logoSchool: image({ height: pt(40) }, path('./asset/placeholder.png')),
            logoCompanyHeader: image({ height: pt(15) }, path('./asset/placeholder.png')),
            logoSchoolHeader: image({ height: pt(15) }, path('./asset/placeholder.png')),
          },
          doc_2,
        ),
      ),
      show(where(heading, { level: 1 }), (it, ctx_2) => codeBlock([pagebreak(), it])),
      inline(outline({ title: inline`Sommaire` })),
    ),
    c.decl,
    m.heading(1, 'Remerciements'),
    m.lines(
      inline`Voici comment faire des sources : kubernetes ${ref(label('k8s'))} virtualbox ${ref(label('virtualbox'))}`,
      m.heading(1, 'Introduction'),
    ),
    m.heading(2, 'Contexte et Enjeux'),
    inline(bibliography(path('sources.yml'))),
  )
}
