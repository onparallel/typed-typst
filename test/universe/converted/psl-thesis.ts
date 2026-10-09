// Converted from test/universe/corpus/psl-thesis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  cm,
  codeBlock,
  counter,
  define,
  doc,
  em,
  external,
  figure,
  heading,
  image,
  importFile,
  importPackage,
  includeFile,
  inline,
  let_,
  lorem,
  m,
  outline,
  page,
  pagebreak,
  path,
  pt,
  set,
  show,
  space,
  strong,
  table,
  text,
  unsafeRaw,
  v,
  where,
} from '../../../src/index.ts'

export default () => {
  const colors = external('colors')
  const pslThesisCovers = external('psl-thesis-covers')
  const makeGlossary = external('make-glossary')
  const registerGlossary = define('register-glossary').pos('arg1', T.any).returns(T.any).external()
  const printGlossary = define('print-glossary').pos('arg1', T.any).returns(T.any).external()
  const gls = external('gls')
  const glspl = external('glspl')
  const pslThesisCovers_with = define('with')
    .named('abstracts', T.any, null)
    .named('author', T.content, [])
    .named('date', T.content, [])
    .named('doctoral-school', T.any, null)
    .named('institute', T.content, [])
    .named('institute-logo', T.any, null)
    .named('jury', T.any, null)
    .named('keywords', T.any, null)
    .named('specialty', T.content, [])
    .named('title', T.content, [])
    .returns(T.any)
    .external(pslThesisCovers)
  const [glossaryDecl, glossary] = let_('glossary', [{ key: 'phd', short: 'PhD', long: 'philosophiæ doctor' }])
  return doc(
    m.lines(
      importFile('helpers.typ', [colors]),
      importPackage('@preview/psl-thesis:0.1.0', [pslThesisCovers]),
      importPackage('@preview/glossarium:0.5.3', [makeGlossary, registerGlossary, printGlossary, gls, glspl]),
      show(makeGlossary),
    ),
    glossaryDecl,
    inline(registerGlossary(glossary)),
    set(text, { lang: 'fr', font: 'Montserrat', size: pt(11) }),
    m.lines(
      set(heading, { numbering: '1.1' }),
      inline(
        counter('chapter').update(0),
        space,
        show(where(heading, { level: 1 }), (it, ctx) =>
          codeBlock([
            pagebreak({ to: 'odd', weak: true }),
            unsafeRaw.code<any>`if it.numbering != none {
    counter("chapter").step()
    set text(size: 36pt)
    [Chapter]
    h(0.5em)
    text(context counter("chapter").display(), fill: colors.accent, size: 58pt, weight: "bold")
    h(0.5em)
  }`,
            v(em(0)),
            text({ size: pt(36), weight: 'light' }, it.body),
            v(em(1)),
          ]),
        ),
      ),
    ),
    show(
      pslThesisCovers_with({
        title: inline`Recherches sur les substances radioactives`,
        author: inline`Marie Skłodowska-Curie`,
        date: inline`le 25 juin 1903`,
        doctoralSchool: { name: inline`Faculté des sciences`, number: inline`123` },
        institute: inline`à la Faculté des Sciences de Paris`,
        instituteLogo: image({ height: cm(3.5) }, path('./institute-logo.svg')),
        specialty: inline`Sciences Physiques`,
        jury: [
          { firstname: 'Name', lastname: 'Surname', title: 'PhD, Affiliation', role: 'President' },
          { firstname: 'Name', lastname: 'Surname', title: 'PhD, Affiliation', role: 'Referee' },
          { firstname: 'Name', lastname: 'Surname', title: 'PhD, Affiliation', role: 'Referee' },
          { firstname: 'Name', lastname: 'Surname', title: 'MD, PhD, Affiliation', role: 'Member' },
          { firstname: 'Name', lastname: 'Surname', title: 'PhD, Affiliation', role: 'PhD supervisor' },
        ],
        abstracts: { fr: lorem(128), en: lorem(128) },
        keywords: { fr: lorem(4), en: lorem(4) },
      }),
    ),
    inline(counter(page).update(1), space, set(page, { numbering: 'i' })),
    includeFile('content/front/acknowledgments.typ'),
    show(where(outline.entry, { level: 1 }), (it_2, ctx_2) => codeBlock([v({ weak: true }, pt(12)), strong(it_2)])),
    inline(outline({ title: 'Table of contents' })),
    inline(outline({ title: 'Figures', target: where(figure, { kind: figure }) })),
    inline(outline({ title: 'Tables', target: where(figure, { kind: table }) })),
    inline(heading({ level: 1, numbering: null }, 'Glossary'), space, printGlossary(glossary)),
    inline(counter(page).update(1), space, set(page, { numbering: '1' })),
    m.lines(
      includeFile('content/chapters/ch1.typ'),
      includeFile('content/back/conclusion.typ'),
      includeFile('content/back/publications.typ'),
    ),
    inline(bibliography({ title: 'Bibliography', style: 'ieee' }, path('bibliography.bib'))),
  )
}
