// Converted from test/universe/corpus/clean-math-paper.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  black,
  call,
  datetime,
  define,
  doc,
  em,
  external,
  importPackage,
  inline,
  label,
  labelled,
  let_,
  link,
  lorem,
  m,
  path,
  pt,
  raw,
  ref,
  rgb,
  show,
  space,
  text,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const pageArgs = external('page-args')
  const textArgsTitle = external('text-args-title')
  const textArgsAuthors = external('text-args-authors')
  const template = external('template')
  const theorem = define('theorem').pos('arg1', T.content).named('title', T.any, null).returns(T.any).external()
  const proof = define('proof').pos('arg1', T.content).returns(T.any).external()
  const definition = define('definition').pos('arg1', T.content).named('title', T.any, null).returns(T.any).external()
  const question = define('question').pos('arg1', T.content).named('title', T.any, null).returns(T.any).external()
  const myMathblock = define('my-mathblock')
    .named('blocktitle', T.any, null)
    .named('bodyfmt', T.any, null)
    .returns(T.any)
    .external()
  const appendices = external('appendices')
  const pageArgs_insert = define('insert').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external(pageArgs)
  const textArgsTitle_insert = define('insert')
    .pos('arg1', T.any)
    .pos('arg2', T.any)
    .returns(T.any)
    .external(textArgsTitle)
  const textArgsAuthors_insert = define('insert')
    .pos('arg1', T.any)
    .pos('arg2', T.any)
    .returns(T.any)
    .external(textArgsAuthors)
  const template_with = define('with')
    .named('AMS', T.any, null)
    .named('abstract', T.any, null)
    .named('affiliations', T.any, null)
    .named('authors', T.any, null)
    .named('authors-per-row', T.any, null)
    .named('date', T.any, null)
    .named('heading-color', T.any, null)
    .named('keywords', T.any, null)
    .named('link-color', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(template)
  const [dateDecl, date] = let_('date', datetime.today().display('[month repr:long] [day], [year]'))
  const [answerDecl, answer] = let_(
    'answer',
    myMathblock({ blocktitle: 'Answer', bodyfmt: text.with({ style: 'italic' }) }),
  )
  return doc(
    importPackage('@preview/clean-math-paper:0.2.8', [
      pageArgs,
      textArgsTitle,
      textArgsAuthors,
      template,
      theorem,
      proof,
      definition,
      question,
      myMathblock,
      appendices,
    ]),
    dateDecl,
    inline(
      pageArgs_insert('numbering', '1/1'),
      space,
      textArgsTitle_insert('size', em(2)),
      space,
      textArgsTitle_insert('fill', black),
      space,
      textArgsAuthors_insert('size', pt(12)),
    ),
    show(
      template_with({
        title: 'Typst template for mathematical papers',
        authors: [
          { name: 'Author 1', affiliationId: 1, email: 'author1@example.com', orcid: '0000-0000-0000-0000' },
          { name: 'Author 2', affiliationId: '2,*', email: 'author2@example.com' },
        ],
        affiliations: [
          { id: 1, name: 'Affiliation 1, Address 1' },
          { id: 2, name: 'Affiliation 2, Address 2' },
          { id: '*', name: 'Corresponding author' },
        ],
        authorsPerRow: 3,
        date: date,
        headingColor: rgb('#374CA9'),
        linkColor: rgb('#008002'),
        abstract: lorem(30),
        keywords: ['First keyword', 'Second keyword', 'etc.'],
        AMS: ['65M70', '65M12'],
      }),
    ),
    m.lines(m.heading(1, 'Introduction'), inline(lorem(20))),
    m.heading(1, 'Equations'),
    inline`The template uses ${link('https://typst.app/universe/package/i-figured/', inline(raw('i-figured')))}
for labeling equations. Equations will be numbered only if they are labelled. Here is an equation
with a label:`,
    inline(labelled(unsafeRaw.math.block`sum_(k=1)^n k = (n(n+1)) / 2`, label('equation'))),
    inline`We can reference it by ${raw('@eq:label')} like this: ${ref(label('eq:equation'))}, i.e., we
need to prepend the label with ${raw('eq:')}. The number of an equation is determined by the
section it is in, i.e. the first digit is the section number and the second digit is the equation
number within that section.`,
    'Here is an equation without a label:',
    inline(unsafeRaw.math.block`exp(x) = sum_(n=0)^oo (x^n) / n!`),
    'As we can see, it is not numbered.',
    m.heading(1, 'Theorems'),
    inline`The template uses ${link('https://typst.app/universe/package/great-theorems/', inline(raw('great-theorems')))}
for theorems. Here is an example of a theorem:`,
    inline(
      labelled(
        theorem({ title: 'Example Theorem' }, inline`${space}This is an example theorem.${space}`),
        label('th:example'),
      ),
      space,
      proof(inline`${space}This is the proof of the example theorem.${space}`),
    ),
    inline`We also provide ${raw('definition')}, ${raw('lemma')}, ${raw('remark')}, ${raw('example')},
and ${raw('question')}s among others. Here is an example of a definition:`,
    inline(definition({ title: 'Example Definition' }, inline`${space}This is an example definition.${space}`)),
    inline(question({ title: 'Custom mathblock?' }, inline`${space}How do you define a custom mathblock?${space}`)),
    answerDecl,
    inline(
      call(
        answer,
        inline`${space}You can define a custom mathblock like this: ${raw({ block: true, lang: 'typst' }, '#let answer = my-mathblock(\n  blocktitle: "Answer",\n  bodyfmt: text.with(style: "italic"),\n)')}${space}`,
      ),
    ),
    inline`Similar as for the equations, the numbering of the theorems is determined by the section they
are in. We can reference theorems by ${raw('@label')} like this: ${ref(label('th:example'))}.`,
    inline`To get a bibliography, we also add a citation ${ref(label('Cooley65'))}.`,
    inline(lorem(50)),
    inline(bibliography(path('bibliography.bib'))),
    m.lines(show(appendices), m.heading(1)),
    inline`If you have appendices, you can add them after ${raw('#show: appendices')}. The appendices are
started with an empty heading ${raw('=')} and will be numbered alphabetically. Any appendix
can also have different subsections.`,
    m.heading(2, 'Appendix section'),
    inline(lorem(100)),
  )
}
