// Converted from test/universe/corpus/orionotes.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  blocks,
  define,
  doc,
  external,
  importPackage,
  inline,
  m,
  path,
  show,
} from '../../../src/index.ts'

export default () => {
  const orionotes = external('orionotes')
  const orionotes_with = define('with')
    .named('appendix', T.any, null)
    .named('authors', T.any, null)
    .named('bib', T.any, null)
    .named('date', T.any, null)
    .named('degree', T.content, [])
    .named('front-image', T.any, null)
    .named('preface', T.content, [])
    .named('professors', T.any, null)
    .named('title', T.content, [])
    .named('university', T.content, [])
    .returns(T.any)
    .external(orionotes)
  return doc(
    importPackage('@preview/orionotes:0.1.0', [orionotes]),
    show(
      orionotes_with({
        title: inline`Title of your work`,
        authors: ['Your name'],
        professors: ['Your professors name'],
        date: 'Academic Year',
        university: inline`Your university`,
        degree: inline`Your degree`,
        frontImage: null,
        preface: inline`The preface to your notes`,
        appendix: {
          enabled: true,
          title: 'Appendices',
          body: blocks(m.lines(m.heading(1, 'Example'), 'Here go the appendices.')),
        },
        bib: bibliography(path('example.bib')),
      }),
    ),
  )
}
