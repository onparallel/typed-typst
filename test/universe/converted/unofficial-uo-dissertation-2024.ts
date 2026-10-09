// Converted from test/universe/corpus/unofficial-uo-dissertation-2024.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  align,
  assume,
  bibliography,
  blue,
  bottom,
  center,
  counter,
  define,
  doc,
  document,
  em,
  external,
  importFile,
  importPackage,
  inches,
  includeFile,
  inline,
  linebreak,
  link,
  m,
  page,
  pagebreak,
  par,
  path,
  pt,
  set,
  show,
  space,
  text,
  underline,
  unsafeRaw,
  upper,
  v,
} from '../../../src/index.ts'

export default () => {
  const applyUoStyle = define('apply-uo-style').pos('arg1', T.any).returns(T.any).external()
  const dissertationTitle = external('dissertation-title')
  const authorName = external('author-name')
  const degreeName = external('degree-name')
  const majorName = external('major-name')
  const committeeChair = external('committee-chair')
  const committeeCochair = external('committee-cochair')
  const committeeAdvisor = external('committee-advisor')
  const committeeMember1 = external('committee-member-1')
  const committeeMember2 = external('committee-member-2')
  const institutionalRep = external('institutional-rep')
  const term = external('term')
  const year = external('year')
  const copyrightOption = external('copyright-option')
  return doc(
    inline(
      importPackage('@preview/unofficial-uo-dissertation-2024:1.0.0', [applyUoStyle]),
      space,
      importFile('metadata.typ', [
        dissertationTitle,
        authorName,
        degreeName,
        majorName,
        committeeChair,
        committeeCochair,
        committeeAdvisor,
        committeeMember1,
        committeeMember2,
        institutionalRep,
        term,
        year,
        copyrightOption,
      ]),
    ),
    set(document, { title: dissertationTitle, author: authorName }),
    show((doc_2, ctx) => applyUoStyle(doc_2)),
    show(link, (it, ctx_2) => text({ fill: blue }, underline(it))),
    m.lines(
      set(page, { numbering: null }),
      inline(
        align(
          center,
          inline`${space}${v(inches(0.25))} ${set(par, { leading: em(2) })} ${text({ size: pt(12) }, assume<'str'>(upper(dissertationTitle)))}
${v(inches(0.25))} by ${v(inches(0.25))} ${upper(authorName)} ${v(inches(0.5))} A dissertation
accepted and approved in partial fulfillment of the ${linebreak()} requirements for the degree
of ${degreeName} in ${majorName} ${v(inches(0.5))} Dissertation Committee: ${linebreak()} ${committeeChair},
Chair ${linebreak()} ${unsafeRaw.code<any>`if committee-cochair != none [#committee-cochair, Co-Chair \\ ]`}
${unsafeRaw.code<any>`if committee-advisor != none [#committee-advisor, Advisor \\ ]`} ${committeeMember1},
Core Member ${linebreak()} ${committeeMember2}, Core Member ${linebreak()} ${institutionalRep},
Institutional Representative ${v(inches(0.5))} University of Oregon ${v(inches(0.25))} ${term}
${year}${space}`,
        ),
      ),
    ),
    inline(
      pagebreak(),
      space,
      set(page, { numbering: '1', numberAlign: add(center, bottom) }),
      space,
      counter(page).update(2),
      space,
      v(inches(4)),
      space,
      align(
        center,
        inline(
          space,
          unsafeRaw.code<any>`if copyright-option == "standard" [
    #sym.copyright #year #author-name
  ] else if copyright-option == "cc-by" [
    #sym.copyright #year #author-name
    #v(0.5em)
    This work is openly licensed via 
    #link("https://creativecommons.org/licenses/by/4.0/")[CC BY 4.0].
    #v(0.5em)
    #image("prefatory/cc-badges/cc-by.png", width: 88pt)
  ] else if copyright-option == "cc-by-sa" [
    #sym.copyright #year #author-name
    #v(0.5em)
    This work is openly licensed via 
    #link("https://creativecommons.org/licenses/by-sa/4.0/")[CC BY-SA 4.0].
    #v(0.5em)
    #image("prefatory/cc-badges/cc-by-sa.png", width: 88pt)
  ] else if copyright-option == "cc-by-nc" [
    #sym.copyright #year #author-name
    #v(0.5em)
    This work is openly licensed via 
    #link("https://creativecommons.org/licenses/by-nc/4.0/")[CC BY-NC 4.0].
    #v(0.5em)
    #image("prefatory/cc-badges/cc-by-nc.png", width: 88pt)
  ] else if copyright-option == "cc-by-nc-sa" [
    #sym.copyright #year #author-name
    #v(0.5em)
    This work is openly licensed via 
    #link("https://creativecommons.org/licenses/by-nc-sa/4.0/")[CC BY-NC-SA 4.0].
    #v(0.5em)
    #image("prefatory/cc-badges/cc-by-nc-sa.png", width: 88pt)
  ] else if copyright-option == "cc-by-nd" [
    #sym.copyright #year #author-name
    #v(0.5em)
    This work is openly licensed via 
    #link("https://creativecommons.org/licenses/by-nd/4.0/")[CC BY-ND 4.0].
    #v(0.5em)
    #image("prefatory/cc-badges/cc-by-nd.png", width: 88pt)
  ] else if copyright-option == "cc-by-nc-nd" [
    #sym.copyright #year #author-name
    #v(0.5em)
    This work is openly licensed via 
    #link("https://creativecommons.org/licenses/by-nc-nd/4.0/")[CC BY-NC-ND 4.0].
    #v(0.5em)
    #image("prefatory/cc-badges/cc-by-nc-nd.png", width: 88pt)
  ]`,
          space,
        ),
      ),
    ),
    m.lines(
      includeFile('prefatory/abstract.typ'),
      inline(
        includeFile('prefatory/cv.typ'),
        space,
        includeFile('prefatory/acknowledgments.typ'),
        space,
        includeFile('prefatory/dedication.typ'),
      ),
    ),
    includeFile('prefatory/toc.typ'),
    inline(
      includeFile('prefatory/list-of-figures.typ'),
      space,
      includeFile('prefatory/list-of-tables.typ'),
      space,
      includeFile('prefatory/list-of-schemes.typ'),
    ),
    inline(
      pagebreak(),
      space,
      set(par, { firstLineIndent: inches(0.5) }),
      space,
      includeFile('chapters/chapter-1.typ'),
      space,
      includeFile('chapters/chapter-2.typ'),
      space,
      includeFile('chapters/chapter-3.typ'),
      space,
      includeFile('chapters/chapter-4.typ'),
    ),
    includeFile('appendices/appendix.typ'),
    m.lines(
      set(par, { firstLineIndent: pt(0), leading: em(1) }),
      inline(
        pagebreak(),
        space,
        align(center, inline(space, text({ size: pt(12) }, inline`REFERENCES CITED`), space)),
        space,
        v(inches(0.5)),
      ),
    ),
    inline(bibliography({ title: null, style: 'american-physics-society' }, path('references.bib'))),
  )
}
