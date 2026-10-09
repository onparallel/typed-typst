// Converted from test/universe/corpus/community-fmi-jena-thesis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  blocks,
  define,
  doc,
  external,
  figure,
  heading,
  importFile,
  importPackage,
  inline,
  label,
  labelled,
  let_,
  linebreak,
  link,
  lorem,
  m,
  path,
  raw,
  ref,
  set,
  show,
  sym,
  table,
  text,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const fsu = external('fsu')
  const todo = define('todo').pos('arg1', T.content).returns(T.any).external()
  const customRules = external('custom-rules')
  const fsu_with = define('with')
    .named('abbreviations', T.any, null)
    .named('abstract', T.content, [])
    .named('abstract-german', T.content, [])
    .named('appendix', T.content, [])
    .named('author', T.any, null)
    .named('bibliography', T.any, null)
    .named('cover-english', T.any, null)
    .named('figure-index', T.any, null)
    .named('listing-index', T.any, null)
    .named('preface', T.content, [])
    .named('print', T.any, null)
    .named('table-index', T.any, null)
    .named('title', T.content, [])
    .returns(T.any)
    .external(fsu)
  const [assessorDecl, assessor] = let_('assessor', inline`Prof. Dr. First Person${linebreak()} M.Sc. Second Person`)
  const [degreeDecl, degree] = let_('degree', inline`Bachelor of Science (B.Sc.)`)
  return doc(
    importPackage('@preview/community-fmi-jena-thesis:0.2.0', [fsu, todo]),
    importFile('custom.typ', [customRules]),
    set(text, { lang: 'en', region: 'GB' }),
    m.lines(assessorDecl, degreeDecl),
    show(
      fsu_with({
        title: inline`Title of Your Thesis`,
        author: 'Your Name',
        coverEnglish: {
          faculty: 'Faculty of Mathematics and Computer Science',
          university: 'Friedrich Schiller University Jena',
          typeOfWork: 'Bachelor Thesis',
          academicDegree: degree,
          fieldOfStudy: 'Computer Science',
          authorInfo: '1 April 2001 in Wolkenkuckucksheim, Germany',
          assessor: assessor,
          placeAndSubmissionDate: 'Jena, 1 April 2025',
        },
        abstract: blocks(inline(lorem(80)), inline(todo(inline`Put your actual abstract here.`))),
        abstractGerman: blocks(inline(lorem(80)), inline(todo(inline`Put your German abstract here.`))),
        preface: blocks(inline(lorem(60)), inline(todo(inline`Put your own preface here or remove it.`))),
        appendix: blocks(
          m.lines(
            m.heading(2, 'Use of Generative AI'),
            inline(todo(inline`If permitted by your examiner, document the use of generative AI here.`)),
          ),
          m.lines(m.heading(2, 'Additional Material'), inline(lorem(40))),
        ),
        abbreviations: [
          ['API', 'Application Programming Interface'],
          ['RDF', 'Resource Description Framework'],
          ['WWW', 'World Wide Web'],
        ],
        print: false,
        figureIndex: { enabled: true },
        tableIndex: { enabled: true },
        listingIndex: { enabled: true },
        bibliography: bibliography({ style: 'ieee' }, path('bib.yaml')),
      }),
    ),
    show(customRules),
    inline(labelled(heading({ depth: 1 }, inline('Introduction')), label('introduction'))),
    inline`This template follows the design guidelines for theses at the Faculty of Mathematics and Computer
Science. Abbreviations such as API are written out on their first use and link to the list of
abbreviations; later uses of API only show the short form. Citations work as usual ${ref(label('knuth1984'))}.
Links to ${link('https://typst.app/docs', inline`external websites`)} are marked with a small
circle.`,
    inline(todo(inline`Write your introduction.`)),
    m.lines(m.heading(2, 'Problem'), inline(lorem(120))),
    m.lines(m.heading(2, 'Contribution'), inline(lorem(120))),
    m.heading(1, 'Preliminaries'),
    inline(lorem(80)),
    inline(
      figure(
        { caption: inline`A small example table.` },
        table(
          { columns: 2 },
          inline`Feature`,
          inline`Status`,
          inline`Cover page`,
          inline(sym.checkmark),
          inline`Declaration`,
          inline(sym.checkmark),
        ),
      ),
    ),
    inline(
      figure(
        { caption: inline`A code listing.` },
        raw({ block: true, lang: 'rust' }, 'fn main() {\n    println!("Hello, Jena!");\n}'),
      ),
    ),
    inline(unsafeRaw.math.block`sum_(k=1)^n k = (n(n+1)) / 2`),
    inline(labelled(heading({ depth: 1 }, inline('Conclusion')), label('conclusion'))),
    inline`As discussed in ${ref(label('introduction'))}, ${lorem(60)}`,
  )
}
