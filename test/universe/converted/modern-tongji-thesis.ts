// Converted from test/universe/corpus/modern-tongji-thesis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  blocks,
  define,
  doc,
  external,
  importFile,
  importPackage,
  includeFile,
  inline,
  let_,
  m,
  pagebreak,
  read,
  set,
  show,
  space,
  unsafePath,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const thesis = external('thesis')
  const newpage = define('newpage').named('twoside', T.any, null).returns(T.any).external()
  const makereferences = define('makereferences').returns(T.any).external()
  const appendix = define('appendix').pos('arg1', T.content).named('humanities', T.any, null).returns(T.any).external()
  const school = external('school')
  const major = external('major')
  const id = external('id')
  const student = external('student')
  const advisor = external('advisor')
  const title_2 = external('title')
  const subtitle = external('subtitle')
  const titleEnglish = external('title-english')
  const subtitleEnglish = external('subtitle-english')
  const date = external('date')
  const infotype = external('infotype')
  const infoabstract = external('infoabstract')
  const infodrawings = external('infodrawings')
  const infowordcount = external('infowordcount')
  const infothesiswords = external('infothesiswords')
  const infomaterials = external('infomaterials')
  const abstractTitle = external('abstract-title')
  const abstractSubtitle = external('abstract-subtitle')
  const abstractTitleEnglish = external('abstract-title-english')
  const abstractSubtitleEnglish = external('abstract-subtitle-english')
  const abstract = external('abstract')
  const keywords = external('keywords')
  const abstractEnglish = external('abstract-english')
  const keywordsEnglish = external('keywords-english')
  const thesis_with = define('with')
    .named('abstract', T.any, null)
    .named('abstract-english', T.any, null)
    .named('abstract-subtitle', T.any, null)
    .named('abstract-subtitle-english', T.any, null)
    .named('abstract-title', T.any, null)
    .named('abstract-title-english', T.any, null)
    .named('advisor', T.any, null)
    .named('bib-content', T.any, null)
    .named('date', T.any, null)
    .named('field', T.any, null)
    .named('fontset', T.any, null)
    .named('id', T.any, null)
    .named('infoabstract', T.any, null)
    .named('infodrawings', T.any, null)
    .named('infomaterials', T.any, null)
    .named('infothesiswords', T.any, null)
    .named('infotype', T.any, null)
    .named('infowordcount', T.any, null)
    .named('keywords', T.any, null)
    .named('keywords-english', T.any, null)
    .named('major', T.any, null)
    .named('school', T.any, null)
    .named('student', T.any, null)
    .named('subtitle', T.any, null)
    .named('subtitle-english', T.any, null)
    .named('title', T.any, null)
    .named('title-english', T.any, null)
    .named('twoside', T.any, null)
    .returns(T.any)
    .external(thesis)
  const [fieldDecl, field] = let_('field', 'science')
  const [fontsetDecl, fontset] = let_('fontset', 'fandol')
  const [bibPathDecl, bibPath] = let_('bib-path', 'ref.bib')
  const [twosideDecl, twoside] = let_('twoside', false)
  return doc(
    m.lines(
      importPackage('@preview/modern-tongji-thesis:0.2.0', [thesis, newpage, makereferences, appendix]),
      importFile('chapters/metadata.typ', [
        school,
        major,
        id,
        student,
        advisor,
        title_2,
        subtitle,
        titleEnglish,
        subtitleEnglish,
        date,
        infotype,
        infoabstract,
        infodrawings,
        infowordcount,
        infothesiswords,
        infomaterials,
        abstractTitle,
        abstractSubtitle,
        abstractTitleEnglish,
        abstractSubtitleEnglish,
      ]),
      importFile('chapters/00_abstract.typ', [abstract, keywords, abstractEnglish, keywordsEnglish]),
    ),
    set(pagebreak, { weak: true }),
    m.lines(fieldDecl, fontsetDecl, bibPathDecl, twosideDecl),
    show(
      thesis_with({
        school: school,
        major: major,
        id: id,
        student: student,
        advisor: advisor,
        title: title_2,
        subtitle: subtitle,
        titleEnglish: titleEnglish,
        subtitleEnglish: subtitleEnglish,
        date: date,
        abstract: abstract,
        keywords: keywords,
        abstractEnglish: abstractEnglish,
        keywordsEnglish: keywordsEnglish,
        infotype: infotype,
        infoabstract: infoabstract,
        infodrawings: infodrawings,
        infowordcount: infowordcount,
        infothesiswords: infothesiswords,
        infomaterials: infomaterials,
        abstractTitle: abstractTitle,
        abstractSubtitle: abstractSubtitle,
        abstractTitleEnglish: abstractTitleEnglish,
        abstractSubtitleEnglish: abstractSubtitleEnglish,
        field: field,
        fontset: fontset,
        bibContent: read(unsafePath(bibPath)),
        twoside: twoside,
      }),
    ),
    m.lines(includeFile('chapters/01_intro.typ'), inline(newpage({ twoside: twoside }))),
    m.lines(includeFile('chapters/02_math.typ'), inline(newpage({ twoside: twoside }))),
    m.lines(includeFile('chapters/03_reference.typ'), inline(newpage({ twoside: twoside }))),
    m.lines(includeFile('chapters/04_figure.typ'), inline(newpage({ twoside: twoside }))),
    m.lines(includeFile('chapters/05_conclusion.typ'), inline(newpage({ twoside: twoside }))),
    inline(makereferences(), space, newpage({ twoside: twoside })),
    inline(
      appendix(
        { humanities: unsafeRaw.code<any>`field == "humanities"` },
        blocks(includeFile('chapters/appendix.typ')),
      ),
      space,
      newpage({ twoside: twoside }),
    ),
    includeFile('chapters/acknowledgments.typ'),
  )
}
