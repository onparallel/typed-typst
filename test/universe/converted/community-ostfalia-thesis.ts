// Converted from test/universe/corpus/community-ostfalia-thesis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, external, importFile, includeFile, inline, m, show, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const makeGlossary = external('make-glossary')
  const registerGlossary = define('register-glossary').pos('arg1', T.any).returns(T.any).external()
  const thesis = external('thesis')
  const option = external('option')
  const doc_2 = external('doc')
  const dataPage = external('data-page')
  const summaryPage = external('summary-page')
  const professor = external('professor')
  const expert = external('expert')
  const school = external('school')
  const date = external('date')
  const tableof = external('tableof')
  const logos = external('logos')
  const gloss = external('gloss')
  const i18n = define('i18n').pos('arg1', T.any).named('lang', T.any, null).returns(T.any).external()
  const bib = external('bib')
  const appendix = external('appendix')
  const make_bibliography = define('make_bibliography')
    .named('bib', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external()
  const entryList = external('entry-list')
  const make_glossary = define('make_glossary')
    .named('gloss', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external()
  const thesis_with = define('with')
    .named('data-page', T.any, null)
    .named('date', T.any, null)
    .named('doc', T.any, null)
    .named('expert', T.any, null)
    .named('logos', T.any, null)
    .named('option', T.any, null)
    .named('professor', T.any, null)
    .named('school', T.any, null)
    .named('summary-page', T.any, null)
    .named('tableof', T.any, null)
    .returns(T.any)
    .external(thesis)
  const option_lang = external('lang', option)
  return doc(
    m.lines(
      importFile('/metadata.typ', [
        makeGlossary,
        registerGlossary,
        thesis,
        option,
        doc_2,
        dataPage,
        summaryPage,
        professor,
        expert,
        school,
        date,
        tableof,
        logos,
        gloss,
        i18n,
        bib,
        appendix,
      ]),
      importFile('/tail/bibliography.typ', [
        makeGlossary,
        registerGlossary,
        thesis,
        option,
        doc_2,
        dataPage,
        summaryPage,
        professor,
        expert,
        school,
        date,
        tableof,
        logos,
        gloss,
        i18n,
        make_bibliography,
        bib,
        appendix,
      ]),
      importFile('/tail/glossary.typ', [
        makeGlossary,
        registerGlossary,
        entryList,
        thesis,
        option,
        doc_2,
        dataPage,
        summaryPage,
        professor,
        expert,
        school,
        date,
        tableof,
        logos,
        make_glossary,
        gloss,
        i18n,
        bib,
        appendix,
      ]),
      show(makeGlossary),
      inline(registerGlossary(entryList)),
    ),
    show(
      thesis_with({
        option: option,
        doc: doc_2,
        dataPage: dataPage,
        summaryPage: summaryPage,
        professor: professor,
        expert: expert,
        school: school,
        date: date,
        tableof: tableof,
        logos: logos,
      }),
    ),
    m.lines(
      includeFile('/main/00-acknowledgements.typ'),
      includeFile('/main/01-abstract.typ'),
      includeFile('/main/02-introduction.typ'),
      includeFile('/main/03-analysis.typ'),
      includeFile('/main/04-design.typ'),
      includeFile('/main/05-implementation.typ'),
      includeFile('/main/06-validation.typ'),
      includeFile('/main/07-conclusion.typ'),
    ),
    inline(make_glossary({ gloss: gloss, title: i18n({ lang: option_lang }, 'gloss-title') })),
    inline(make_bibliography({ bib: bib, title: i18n({ lang: option_lang }, 'bib-title') })),
    inline(unsafeRaw.code<any>`if appendix == true {[
  #counter(heading).update(0)
  #set heading(numbering:"A")
  #include "/tail/a-appendix.typ"
]}`),
  )
}
