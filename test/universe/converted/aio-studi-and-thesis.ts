// Converted from test/universe/corpus/aio-studi-and-thesis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  cm,
  define,
  doc,
  em,
  external,
  heading,
  importFile,
  inline,
  label,
  labelled,
  m,
  pt,
  ref,
  show,
  space,
  unsafePath,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const project = external('project')
  const defaultFont = external('default-font')
  const darkBlue = external('dark-blue')
  const blue_2 = external('blue')
  const darkGrey = external('dark-grey')
  const lightBlue = external('light-blue')
  const bibFile = external('bib-file')
  const additionalStyling = external('additional-styling')
  const gls = define('gls').pos('arg1', T.any).returns(T.any).external()
  const bib = external('bib')
  const todo = define('todo').pos('arg1', T.content).returns(T.any).external()
  const abstract = define('abstract').returns(T.any).external()
  const abbreviations = define('abbreviations').returns(T.any).external()
  const attachements = define('attachements').returns(T.any).external()
  const introduction = define('introduction').returns(T.any).external()
  const summary = define('summary').returns(T.any).external()
  const project_with = define('with')
    .named('abstract', T.any, null)
    .named('authors', T.any, null)
    .named('background-color', T.any, null)
    .named('cover-sheet', T.any, null)
    .named('custom-cover-sheet', T.any, null)
    .named('custom-declaration', T.any, null)
    .named('custom-outlines', T.any, null)
    .named('declaration-on-the-final-thesis', T.any, null)
    .named('depth-toc', T.any, null)
    .named('font', T.any, null)
    .named('font-size', T.any, null)
    .named('h1-spacing', T.any, null)
    .named('hyphenate', T.any, null)
    .named('lang', T.any, null)
    .named('line-spacing', T.any, null)
    .named('list-of-abbreviations', T.any, null)
    .named('list-of-attachements', T.any, null)
    .named('literature-and-bibliography', T.any, null)
    .named('outlines-indent', T.any, null)
    .named('primary-color', T.any, null)
    .named('secondary-color', T.any, null)
    .named('show-list-of-abbreviations', T.any, null)
    .named('show-list-of-figures', T.any, null)
    .named('show-list-of-formulas', T.any, null)
    .named('show-list-of-tables', T.any, null)
    .named('show-list-of-todos', T.any, null)
    .named('side-margins', T.any, null)
    .named('subtitle', T.any, null)
    .named('text-color', T.any, null)
    .named('thesis-compliant', T.any, null)
    .named('title', T.any, null)
    .named('version', T.any, null)
    .returns(T.any)
    .external(project)
  return doc(
    importFile('lib.typ', [
      project,
      defaultFont,
      darkBlue,
      blue_2,
      darkGrey,
      lightBlue,
      bibFile,
      additionalStyling,
      gls,
      bib,
      todo,
    ]),
    m.lines(
      importFile('abstract.typ', [abstract]),
      importFile('abbreviations.typ', [abbreviations]),
      importFile('attachements.typ', [attachements]),
    ),
    m.lines(importFile('chapters/introduction.typ', [introduction]), importFile('chapters/summary.typ', [summary])),
    show(
      project_with({
        lang: 'de',
        authors: [{ name: 'Max Mustermann', id: '12 34 567', email: 'mustermann@email.com' }],
        title: 'Keine Panik!',
        subtitle: 'Mit Typst durchs Studium',
        version: null,
        thesisCompliant: true,
        sideMargins: { left: cm(3.5), right: cm(3.5), top: cm(3.5), bottom: cm(3.5) },
        h1Spacing: em(0.5),
        lineSpacing: em(0.65),
        font: defaultFont,
        fontSize: pt(11),
        hyphenate: false,
        primaryColor: darkBlue,
        secondaryColor: blue_2,
        textColor: darkGrey,
        backgroundColor: lightBlue,
        customCoverSheet: null,
        coverSheet: {
          university: {
            name: 'University of Applied Typst Sciences',
            street: 'Musterstraße 1',
            city: 'D-12345 Musterstadt',
            logo: null,
          },
          employer: { name: 'Arbeitgeber xy', street: 'Musterstraße 2', city: 'D-12345 Musterstadt', logo: null },
          coverImage: null,
          description: inline`${space}Bachelorarbeit zur Erlangung des akademischen Grades Bachelor of Science${space}`,
          faculty: 'Ingenieurwissenschaften',
          programme: 'Typst Sciences',
          semester: 'SoSe2024',
          course: 'Templates with Typst',
          examiner: 'Prof. Dr.-Ing Mustermann',
          submissionDate: '30.07.2024',
        },
        customDeclaration: null,
        declarationOnTheFinalThesis: {
          legalReference: null,
          thesisName: null,
          consentToPublicationInTheLibrary: null,
          genitiveOfUniversity: null,
        },
        abstract: abstract(),
        outlinesIndent: em(1),
        depthToc: 4,
        showListOfFigures: false,
        showListOfAbbreviations: true,
        listOfAbbreviations: { backReferences: true, items: abbreviations() },
        showListOfFormulas: true,
        customOutlines: [{ title: null, custom: null }],
        showListOfTables: true,
        showListOfTodos: true,
        literatureAndBibliography: bibliography({ title: null, style: 'ieee', full: false }, unsafePath(bibFile)),
        listOfAttachements: attachements(),
      }),
    ),
    show(additionalStyling),
    inline(labelled(heading({ depth: 1 }, inline('Einleitung')), label('einleitung'))),
    inline(introduction()),
    m.heading(1, 'Hauptteil'),
    m.heading(2, 'Beispiele'),
    inline(gls('repo-vorlage')),
    inline(ref(label('einleitung'))),
    inline`Siehe ${ref(label('noauthor_bibliography_nodate'))}`,
    inline(unsafeRaw.code<any>`bib.noauthor_citegeist_nodate.fields.title`),
    inline(todo(inline`Das ist ein Beispiel`)),
    inline(labelled(heading({ depth: 1 }, inline('Schluss/Zusammenfassung/Fazit')), label('zusammenfassung'))),
    inline(summary()),
  )
}
