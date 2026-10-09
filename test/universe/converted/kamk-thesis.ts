// Converted from test/universe/corpus/kamk-thesis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  blocks,
  datetime,
  define,
  doc,
  external,
  importPackage,
  includeFile,
  inline,
  let_,
  lorem,
  m,
  page,
  parbreak,
  path,
  set,
  show,
  space,
} from '../../../src/index.ts'

export default () => {
  const template = external('template')
  const template_frontmatter = define('frontmatter')
    .named('abstract-en', T.content, [])
    .named('abstract-fi', T.content, [])
    .named('authors', T.any, null)
    .named('date', T.any, null)
    .named('degree-programme', T.any, null)
    .named('degree-programme-en', T.any, null)
    .named('degree-title', T.any, null)
    .named('degree-title-en', T.any, null)
    .named('foreword', T.content, [])
    .named('keywords-en', T.any, null)
    .named('keywords-fi', T.any, null)
    .named('language', T.any, null)
    .named('symbols', T.any, null)
    .named('title', T.any, null)
    .named('title-en', T.any, null)
    .returns(T.any)
    .external(template)
  const template_renderAiUsage = define('render-ai-usage')
    .named('language', T.any, null)
    .named('tools', T.content, [])
    .named('usage', T.content, [])
    .returns(T.any)
    .external(template)
  const template_renderBibliography = define('render-bibliography')
    .named('language', T.any, null)
    .named('source', T.any, null)
    .returns(T.any)
    .external(template)
  const template_renderAppendices = define('render-appendices')
    .named('items', T.any, null)
    .named('language', T.any, null)
    .returns(T.any)
    .external(template)
  const [languageDecl, language] = let_('language', 'fi')
  const [appendixItemsDecl, appendixItems] = let_('appendix-items', [
    { title: 'Sparkin asennus Windows-koneille', content: inline(lorem(140)) },
    { title: 'Toinen esimerkkiliite', content: includeFile('appendices/toinen_liite.typ') },
  ])
  return doc(
    importPackage('@preview/kamk-thesis:0.0.1', template),
    languageDecl,
    show(
      template_frontmatter.with({
        authors: ['Meikäläinen Matti'],
        date: datetime.today(),
        language: language,
        title: 'Opinnäytetyön otsikko suomeksi',
        degreeTitle: 'Tradenomi (AMK)',
        degreeProgramme: 'Tietojenkäsittely',
        keywordsFi: ['aerosolifysiikka', 'avainsana 2', 'avainsana 3'],
        abstractFi: blocks(
          'Tähän tulee opinnäytetyön suomenkielinen tiivistelmä. Typst sallii kappalejakojen tekemisen yksinkertaisesti jättämällä tyhjän rivin tekstien väliin.',
          'Tämä tässä on toinen kappale tiivistelmässä.',
        ),
        titleEn: 'The title of the thesis in English',
        degreeTitleEn: 'Bachelor of Business Administration',
        degreeProgrammeEn: 'Business Information Technology',
        keywordsEn: ['aerosol physics', 'keyword 2', 'keyword 3'],
        abstractEn: blocks(parbreak(), inline(lorem(50)), inline(lorem(30)), inline(lorem(70))),
        foreword: inline`${space}Tähän voit kirjoittaa opinnäytetyön alkusanat, esimerkiksi kiitokset ohjaajalle, toimeksiantajalle
tai muille tahoille.${space}`,
        symbols: [
          ['AMK', 'Ammattikorkeakoulu'],
          ['API', 'Application Programming Interface'],
        ],
      }),
    ),
    m.lines(includeFile('chapters/johdanto.typ'), includeFile('chapters/sivut.typ')),
    inline(
      template_renderAiUsage({
        language: language,
        tools: inline`(Syötä tiedot tähän)`,
        usage: inline`(Kuvaa tähän, mihin tarkoitukseen ja miten tekoälyä on käytetty opinnäytetyössä ja opinnäytetyöprosessin
eri vaiheissa.)`,
      }),
    ),
    inline(template_renderBibliography({ language: language, source: path('references.bib') })),
    set(page, { numbering: null }),
    appendixItemsDecl,
    inline(template_renderAppendices({ language: language, items: appendixItems })),
  )
}
