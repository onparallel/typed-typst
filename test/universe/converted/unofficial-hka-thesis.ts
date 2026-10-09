// Converted from test/universe/corpus/unofficial-hka-thesis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  align,
  auto,
  bibliography,
  blocks,
  box,
  cite,
  cm,
  define,
  doc,
  document,
  external,
  fr,
  grid,
  image,
  importFile,
  importPackage,
  includeFile,
  inline,
  left,
  m,
  pagebreak,
  path,
  pt,
  right,
  set,
  show,
  space,
  unsafePath,
} from '../../../src/index.ts'

export default () => {
  const openTitlePage = define('open-title-page').named('settings', T.any, null).returns(T.any).external()
  const finishTitlePage = define('finish-title-page')
    .named('advisor', T.any, null)
    .named('author', T.any, null)
    .named('degree', T.any, null)
    .named('matriculation-number', T.any, null)
    .named('place-of-work', T.any, null)
    .named('program', T.any, null)
    .named('settings', T.any, null)
    .named('start-date', T.any, null)
    .named('submission-date', T.any, null)
    .named('subtitle', T.any, null)
    .named('supervisor', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external()
  const preface = external('preface')
  const listings = define('listings').named('abbreviations', T.any, null).returns(T.any).external()
  const mainBody = external('main-body')
  const appendix = define('appendix').pos('arg1', T.content).returns(T.any).external()
  const abbreviations = external('abbreviations')
  const titleEnglish = external('title-english')
  const author = external('author')
  const degree = external('degree')
  const program = external('program')
  const subtitleEnglish = external('subtitle-english')
  const matriculationNumber = external('matriculation-number')
  const placeOfWork = external('place-of-work')
  const supervisor = external('supervisor')
  const advisor = external('advisor')
  const startDate = external('start-date')
  const submissionDate = external('submission-date')
  const settings = external('settings')
  const makeGlossary = external('make-glossary')
  const registerGlossary = define('register-glossary').pos('arg1', T.any).returns(T.any).external()
  const preface_with = define('with').named('settings', T.any, null).returns(T.any).external(preface)
  const settings_citationStyle = external('citation-style', settings)
  const mainBody_with = define('with').named('settings', T.any, null).returns(T.any).external(mainBody)
  return doc(
    m.lines(
      importPackage('@preview/unofficial-hka-thesis:1.0.2', [
        openTitlePage,
        finishTitlePage,
        preface,
        listings,
        mainBody,
        appendix,
      ]),
      importFile('abbreviations.typ', [abbreviations]),
      importFile('settings/metadata.typ', [
        titleEnglish,
        author,
        degree,
        program,
        subtitleEnglish,
        matriculationNumber,
        placeOfWork,
        supervisor,
        advisor,
        startDate,
        submissionDate,
      ]),
      importFile('settings/settings.typ', [settings]),
      importPackage('@preview/glossarium:0.5.9', [makeGlossary, registerGlossary]),
    ),
    m.lines(show(makeGlossary), inline(registerGlossary(abbreviations))),
    m.lines(
      set(document, { title: titleEnglish, author: author }),
      inline(
        openTitlePage({ settings: settings }),
        space,
        grid(
          { columns: [fr(1), auto, pt(15), auto] },
          align(left, inline(space, image({ height: cm(1.5) }, path('/logo/company.svg')), space)),
          align(right, inline(space, image({ height: cm(1) }, path('/logo/hka_text.svg')), space)),
          box({ width: auto }),
          align(right, inline(space, image({ height: cm(1) }, path('/logo/hka_horizontal.svg')), space)),
        ),
      ),
    ),
    inline(
      finishTitlePage({
        settings: settings,
        degree: degree,
        program: program,
        title: titleEnglish,
        subtitle: subtitleEnglish,
        author: author,
        matriculationNumber: matriculationNumber,
        placeOfWork: placeOfWork,
        supervisor: supervisor,
        advisor: advisor,
        startDate: startDate,
        submissionDate: submissionDate,
      }),
    ),
    show(preface_with({ settings: settings })),
    set(cite, { style: unsafePath(settings_citationStyle) }),
    m.lines(includeFile('supplementary/statutoryDeclaration.typ'), inline(pagebreak())),
    m.lines(includeFile('supplementary/abstract.typ'), inline(pagebreak())),
    m.lines(includeFile('supplementary/abstractGerman.typ'), inline(pagebreak())),
    inline(listings({ abbreviations: abbreviations })),
    show(mainBody_with({ settings: settings })),
    includeFile('chapters/1_introduction.typ'),
    includeFile('chapters/2_foundations.typ'),
    inline(pagebreak(), space, bibliography(path('bibliography/thesis.bib'))),
    inline(appendix(blocks(includeFile('chapters/A1_Material.typ'), includeFile('chapters/A2_Transcripts.typ')))),
  )
}
