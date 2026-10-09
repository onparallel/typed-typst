// Converted from test/universe/corpus/minimal-thesis-luebeck.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  datetime,
  define,
  doc,
  external,
  image,
  importPackage,
  includeFile,
  inline,
  label,
  let_,
  m,
  path,
  ref,
  rgb,
  show,
  space,
} from '../../../src/index.ts'

export default () => {
  const abbr = external('abbr')
  const thesis = external('thesis')
  const TODO = define('TODO').pos('arg1', T.content).returns(T.any).external()
  const thesis_with = define('with')
    .named('abbreviations', T.any, null)
    .named('abstract-de', T.any, null)
    .named('abstract-en', T.any, null)
    .named('acknowledgement-text', T.any, null)
    .named('advisor', T.any, null)
    .named('appendix', T.any, null)
    .named('author', T.any, null)
    .named('bib-file', T.any, null)
    .named('company', T.any, null)
    .named('confidentiality-notice', T.any, null)
    .named('dark-color', T.any, null)
    .named('degree', T.any, null)
    .named('institute', T.any, null)
    .named('is-print', T.any, null)
    .named('language', T.any, null)
    .named('light-color', T.any, null)
    .named('make-list-of-figures', T.any, null)
    .named('make-list-of-tables', T.any, null)
    .named('place', T.any, null)
    .named('program', T.any, null)
    .named('slogan-img', T.any, null)
    .named('submission-date', T.any, null)
    .named('supervisor', T.any, null)
    .named('title-english', T.any, null)
    .named('title-german', T.any, null)
    .named('top-left-img', T.any, null)
    .named('top-right-img', T.any, null)
    .named('university', T.any, null)
    .returns(T.any)
    .external(thesis)
  const [isPrintDecl, isPrint] = let_('is-print', false)
  return doc(
    m.lines(
      importPackage('@preview/minimal-thesis-luebeck:0.9.0', [thesis, TODO]),
      importPackage('@preview/abbr:0.3.0', abbr),
    ),
    isPrintDecl,
    show(
      thesis_with({
        titleEnglish: 'Towards Smart Inventions and their Novelty',
        titleGerman: 'Über schlaue Erfindungen und deren Neuartigkeit',
        language: 'en',
        author: 'Findus',
        degree: 'Master',
        submissionDate: datetime.today(),
        institute: 'Institut für schlaue Erfindungen',
        program: 'Tüfteln und Basteln',
        company: "Pettersson's Patentideen",
        university: 'Universität Småland',
        supervisor: 'Pettersson',
        advisor: 'Gustravsson',
        place: 'Lübeck',
        topLeftImg: image(path('images/top-left.png')),
        topRightImg: image(path('images/top-right.png')),
        sloganImg: image(path('images/slogan.png')),
        acknowledgementText: includeFile('texts/acknowledgement.typ'),
        appendix: includeFile('texts/appendix.typ'),
        abstractEn: includeFile('texts/abstract-en.typ'),
        abstractDe: includeFile('texts/abstract-de.typ'),
        confidentialityNotice: includeFile('texts/confidentiality-notice.typ'),
        abbreviations: includeFile('texts/abbreviations.typ'),
        bibFile: bibliography(path('thesis.bib')),
        darkColor: rgb(0, 39, 102),
        lightColor: rgb(0, 145, 247),
        isPrint: isPrint,
        makeListOfFigures: false,
        makeListOfTables: false,
      }),
    ),
    m.lines(
      m.heading(1, 'Fist Chapter'),
      inline(
        TODO(
          inline`${space}Write your thesis here! Just start typing (and citing: ${ref(label('alley1996craft'))}).${space}`,
        ),
      ),
    ),
    includeFile('texts/tutorial.typ'),
  )
}
