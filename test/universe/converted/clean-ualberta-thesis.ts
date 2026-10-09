// Converted from test/universe/corpus/clean-ualberta-thesis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  blocks,
  define,
  doc,
  external,
  importPackage,
  includeFile,
  inline,
  m,
  path,
  raw,
  show,
  space,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const thesis = external('thesis')
  const appendices = define('appendices').pos('arg1', T.content).returns(T.any).external()
  const thesis_with = define('with')
    .named('abbreviations', T.content, [])
    .named('abstract', T.content, [])
    .named('acknowledgements', T.content, [])
    .named('author', T.any, null)
    .named('dedication', T.content, [])
    .named('degree', T.any, null)
    .named('department', T.any, null)
    .named('glossary', T.content, [])
    .named('preface', T.content, [])
    .named('specialization', T.any, null)
    .named('symbols', T.content, [])
    .named('title', T.any, null)
    .named('year', T.any, null)
    .returns(T.any)
    .external(thesis)
  return doc(
    importPackage('@preview/clean-ualberta-thesis:0.1.0', [thesis, appendices]),
    show(
      thesis_with({
        title: 'Your Thesis Title',
        author: 'First Middle Last',
        degree: 'Master of Science',
        department: 'Department of Mechanical Engineering',
        year: 2026,
        specialization: null,
        abstract: inline`${space}Replace this paragraph with your thesis abstract. State the research problem, approach,
principal findings, and contribution. The abstract must be no longer than 700 words and must
not contain citations, tables, figures, or unexplained abbreviations. Its double spacing is
supplied by the template.${space}`,
        preface: inline`${space}Replace this paragraph with a preface appropriate to your own work. Describe your contributions
and any collaboration, previously published material, ethics approvals, artificial intelligence
use, and funding as applicable under the current GPS requirements. Have your supervisor review
the final statement. This sample does not make any declarations about your research.${space}`,
        dedication: inline`Replace this text with your dedication, or set ${raw('dedication: none')}.`,
        acknowledgements: inline`${space}Replace this text with your acknowledgements, or set ${raw('acknowledgements: none')}.${space}`,
        symbols: blocks(
          m.terms(
            m.term([unsafeRaw.math`x`], ['Illustrative input value.']),
            m.term([unsafeRaw.math`y`], ['Illustrative response value.']),
          ),
        ),
        abbreviations: blocks(m.terms(m.term(['GPS'], ['Graduate and Postdoctoral Studies.']))),
        glossary: blocks(m.terms(m.term(['Model'], ['A representation used to describe a relationship or process.']))),
      }),
    ),
    includeFile('chapters/introduction.typ'),
    includeFile('chapters/methods.typ'),
    includeFile('chapters/conclusion.typ'),
    inline(bibliography({ title: inline`Bibliography`, style: 'ieee' }, path('references.bib'))),
    inline(appendices(blocks(includeFile('appendices/supporting-material.typ')))),
  )
}
