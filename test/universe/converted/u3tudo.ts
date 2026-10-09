// Converted from test/universe/corpus/u3tudo.typ by scripts/convert-suite.ts — do not edit.
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
  mm,
  outline,
  pagebreak,
  path,
  show,
  space,
} from '../../../src/index.ts'

export default () => {
  const thesis = external('thesis')
  const mainmatter = define('mainmatter').pos('arg1', T.content).returns(T.any).external()
  const appendix = define('appendix').returns(T.any).external()
  const backmatter = define('backmatter').returns(T.any).external()
  const thesis_with = define('with')
    .named('author', T.any, null)
    .named('binding-correction', T.any, null)
    .named('birthdate', T.any, null)
    .named('birthplace', T.any, null)
    .named('city', T.any, null)
    .named('date', T.any, null)
    .named('defense-date', T.any, null)
    .named('degree', T.any, null)
    .named('examination-committee-chair', T.any, null)
    .named('faculty', T.any, null)
    .named('first-corrector', T.any, null)
    .named('line-numbers', T.any, null)
    .named('logo', T.any, null)
    .named('phd-representative', T.any, null)
    .named('second-corrector', T.any, null)
    .named('submission-date', T.any, null)
    .named('title', T.any, null)
    .named('tucolor', T.any, null)
    .named('two-sided', T.any, null)
    .named('university', T.any, null)
    .returns(T.any)
    .external(thesis)
  return doc(
    importPackage('@preview/u3tudo:0.2.0', [thesis, mainmatter, appendix, backmatter]),
    show(
      thesis_with({
        title: 'Title of the PhD Thesis',
        author: 'Your Name',
        birthdate: '01.01.1990',
        birthplace: 'Hometown',
        date: 'August 2025',
        faculty: 'Fakultät Physik',
        university: 'Technische Universität Dortmund',
        city: 'Dortmund',
        degree: 'Dr. rer. nat.',
        firstCorrector: 'Prof. Dr. First Reviewer',
        secondCorrector: 'Prof. Dr. Second Reviewer',
        examinationCommitteeChair: 'Prof. Dr. Committee Chair',
        phdRepresentative: 'Dr. PhD Representative',
        submissionDate: '1. August 2025',
        defenseDate: '1. October 2025',
        tucolor: true,
        bindingCorrection: mm(12),
        twoSided: false,
        lineNumbers: true,
        logo: null,
      }),
    ),
    includeFile('content/00_abstract.typ'),
    inline(pagebreak(), space, outline({ title: inline`Contents` })),
    inline(
      mainmatter(blocks(m.lines(includeFile('content/01_introduction.typ'), includeFile('content/02_chapter.typ')))),
    ),
    inline(appendix()),
    includeFile('content/appendix.typ'),
    inline(backmatter()),
    inline(bibliography({ title: inline`References`, style: 'ieee' }, path('references.bib'))),
    includeFile('content/acknowledgements.typ'),
  )
}
