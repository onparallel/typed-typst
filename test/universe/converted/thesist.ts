// Converted from test/universe/corpus/thesist.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  counter,
  define,
  doc,
  external,
  heading,
  image,
  importPackage,
  includeFile,
  inline,
  m,
  path,
  set,
  show,
  space,
} from '../../../src/index.ts'

export default () => {
  const thesis = external('thesis')
  const setFigureNumbering = external('set-figure-numbering')
  const thesis_with = define('with')
    .named('appendix-style', T.any, null)
    .named('author', T.any, null)
    .named('chairperson', T.any, null)
    .named('chapter-style', T.any, null)
    .named('co-supervisor', T.any, null)
    .named('committee-members', T.any, null)
    .named('cover-image', T.any, null)
    .named('date', T.any, null)
    .named('degree', T.any, null)
    .named('extra-page', T.any, null)
    .named('hide-abstract-en', T.any, null)
    .named('hide-abstract-pt', T.any, null)
    .named('hide-acknowledgments', T.any, null)
    .named('hide-algorithm-list', T.any, null)
    .named('hide-code-list', T.any, null)
    .named('hide-committee', T.any, null)
    .named('hide-declaration', T.any, null)
    .named('hide-figure-list', T.any, null)
    .named('hide-outline', T.any, null)
    .named('hide-table-list', T.any, null)
    .named('included-content', T.any, null)
    .named('lang', T.any, null)
    .named('no-pagebreaks', T.any, null)
    .named('pic-mode', T.any, null)
    .named('printable', T.any, null)
    .named('second-logo', T.any, null)
    .named('string-before-degree', T.any, null)
    .named('subtitle', T.any, null)
    .named('supervisor', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(thesis)
  const setFigureNumbering_with = define('with')
    .named('new-format', T.any, null)
    .returns(T.any)
    .external(setFigureNumbering)
  return doc(
    importPackage('@preview/thesist:1.1.0', [thesis, setFigureNumbering]),
    show(
      thesis_with({
        lang: 'en',
        coverImage: image(path('Images/default-alameda.jpg')),
        title: 'This is the Title of the Thesis and it is a very Big Title covering More than One Line',
        subtitle: 'This is the Thesis Subtitle if Necessary',
        author: 'The Full Name of the Author Goes Here',
        degree: 'Name of the Degree Here',
        supervisor: 'Prof. Full Name of Supervisor',
        coSupervisor: 'Prof. Full Name of Co-supervisor',
        chairperson: 'Prof. Full Name of the Chairperson',
        committeeMembers: [
          'Prof. Full Name of First Committee Member',
          'Dr. Full Name of Second Committee Member',
          'Eng. Full Name of Third Committee Member',
        ],
        date: 'Month 20XX',
        chapterStyle: 'fancy',
        appendixStyle: 'simple',
        picMode: false,
        stringBeforeDegree: null,
        hideCommittee: false,
        hideDeclaration: false,
        hideAcknowledgments: false,
        hideAbstractEn: false,
        hideAbstractPt: false,
        hideOutline: false,
        hideFigureList: false,
        hideTableList: false,
        hideAlgorithmList: false,
        hideCodeList: false,
        noPagebreaks: false,
        secondLogo: null,
        extraPage: null,
        printable: false,
        includedContent: [
          includeFile('Beginning/Acknowledgments.typ'),
          includeFile('Beginning/Abstract-en.typ'),
          includeFile('Beginning/Keywords-en.typ'),
          includeFile('Beginning/Abstract-pt.typ'),
          includeFile('Beginning/Keywords-pt.typ'),
          includeFile('Beginning/Glossary.typ'),
        ],
      }),
    ),
    m.lines(includeFile('Chapters/0-Quick-guide.typ'), includeFile('Chapters/1-Introduction.typ')),
    inline(bibliography({ style: 'ieee' }, path('refs.bib'))),
    m.lines(
      set(heading, { numbering: 'A.1' }),
      inline(counter(heading).update(0), space, show(setFigureNumbering_with({ newFormat: 'A.1' }))),
    ),
    m.lines(includeFile('Chapters/Appendix-A.typ'), includeFile('Chapters/Appendix-B.typ')),
  )
}
