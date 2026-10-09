// Converted from test/universe/corpus/hei-synd-report.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, external, importFile, includeFile, inline, m, show, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const makeGlossary = external('make-glossary')
  const registerGlossary = define('register-glossary').pos('arg1', T.any).returns(T.any).external()
  const report = external('report')
  const option = external('option')
  const doc_2 = external('doc')
  const date = external('date')
  const display = external('display')
  const tableof = external('tableof')
  const fonts = external('fonts')
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
  const report_with = define('with')
    .named('date', T.any, null)
    .named('display', T.any, null)
    .named('doc', T.any, null)
    .named('fonts', T.any, null)
    .named('option', T.any, null)
    .named('tableof', T.any, null)
    .returns(T.any)
    .external(report)
  const option_lang = external('lang', option)
  return doc(
    m.lines(
      importFile('/metadata.typ', [
        makeGlossary,
        registerGlossary,
        report,
        option,
        doc_2,
        date,
        display,
        tableof,
        fonts,
        gloss,
        i18n,
        bib,
        appendix,
      ]),
      importFile('/tail/bibliography.typ', [
        makeGlossary,
        registerGlossary,
        report,
        option,
        doc_2,
        date,
        display,
        tableof,
        fonts,
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
        report,
        option,
        doc_2,
        date,
        display,
        tableof,
        fonts,
        make_glossary,
        gloss,
        i18n,
        bib,
        appendix,
      ]),
      show(makeGlossary),
      inline(registerGlossary(entryList)),
    ),
    show(report_with({ option: option, doc: doc_2, date: date, display: display, tableof: tableof, fonts: fonts })),
    m.lines(
      includeFile('/main/01-intro.typ'),
      includeFile('/main/02-specification.typ'),
      includeFile('/main/03-design.typ'),
      includeFile('/main/04-implementation.typ'),
      includeFile('/main/05-validation.typ'),
      includeFile('/main/06-conclusion.typ'),
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
