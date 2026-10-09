// Converted from test/universe/corpus/exzellenz-tum-thesis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  align,
  bibliography,
  black,
  block,
  blocks,
  blue,
  cite,
  codeBlock,
  counter,
  datetime,
  define,
  doc,
  em,
  external,
  figure,
  footnote,
  heading,
  image,
  importFile,
  importPackage,
  includeFile,
  inline,
  left,
  link,
  lorem,
  m,
  math,
  mm,
  outline,
  page,
  pagebreak,
  par,
  path,
  pt,
  purple,
  raw,
  ref,
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
  const exzellenzTumThesis = external('exzellenz-tum-thesis')
  const inwriting = external('inwriting')
  const draft = external('draft')
  const todo = external('todo')
  const glossary = external('glossary')
  const makeGlossary = external('make-glossary')
  const registerGlossary = define('register-glossary').pos('arg1', T.any).returns(T.any).external()
  const printGlossary = define('print-glossary').pos('arg1', T.any).returns(T.any).external()
  const gls = external('gls')
  const glspl = external('glspl')
  const exzellenzTumThesis_with = define('with')
    .named('abstract-text', T.content, [])
    .named('acknowledgements', T.content, [])
    .named('author', T.any, null)
    .named('degree', T.any, null)
    .named('draft', T.any, null)
    .named('examiner', T.any, null)
    .named('program', T.any, null)
    .named('school', T.any, null)
    .named('show-title-in-header', T.any, null)
    .named('submission-date', T.any, null)
    .named('supervisors', T.any, null)
    .named('title-de', T.any, null)
    .named('title-en', T.any, null)
    .returns(T.any)
    .external(exzellenzTumThesis)
  return doc(
    importPackage('@preview/exzellenz-tum-thesis:0.2.1', [exzellenzTumThesis]),
    m.lines(
      importFile('utils.typ', [inwriting, draft, todo]),
      importFile('glossary.typ', [glossary]),
      importPackage('@preview/glossarium:0.5.10', [makeGlossary, registerGlossary, printGlossary, gls, glspl]),
    ),
    m.lines(
      set(text, { lang: 'en', size: pt(12) }),
      set(text, { ligatures: false }),
      set(text, { font: 'New Computer Modern Sans' }),
    ),
    show(
      exzellenzTumThesis_with({
        degree: 'Master',
        program: 'Informatics',
        school: 'School of Computation, Information and Technology',
        examiner: 'Prof. Dr. Albert Einstein',
        supervisors: ['Claude Elwood Shannon', 'Kurt Gödel'],
        author: 'Max Mustermann',
        titleEn: 'This is the Title of the Thesis',
        titleDe: 'Das ist der Titel der Arbeit',
        abstractText: inline(space, lorem(60), space),
        acknowledgements: blocks(
          inline`These are the acknowledgements. Remove this argument if you don't need them.`,
          'Alternatively, you can list people, institutions or other entities that contributed to the successful completion of this thesis.',
        ),
        submissionDate: datetime.today().display('[day].[month].[year]'),
        showTitleInHeader: true,
        draft: draft,
      }),
    ),
    m.lines(
      set(text, { font: 'New Computer Modern' }),
      show(raw, set(text, { font: 'New Computer Modern Mono' })),
      show(math.equation, set(text, { font: 'New Computer Modern Math' })),
    ),
    m.lines(
      show(where(heading, { level: 3 }), set(text, { size: em(1.05) })),
      show(where(heading, { level: 4 }), set(text, { size: em(1) })),
      show(figure, set(text, { size: em(0.9) })),
      show(figure.caption, set(align, { alignment: left })),
    ),
    m.lines(
      set(par, { leading: em(0.9), firstLineIndent: em(1.8), justify: true, spacing: em(1) }),
      set(table, { inset: pt(6.5) }),
      show(table, set(par, { justify: false })),
      show(figure, (it, ctx) => inline(v(em(1)), space, it, space, v(em(1)))),
    ),
    m.lines(
      show(where(heading, { level: 1 }), set(block, { above: em(1.95), below: em(1) })),
      show(where(heading, { level: 2 }), set(block, { above: em(1.85), below: em(1) })),
      show(where(heading, { level: 3 }), set(block, { above: em(1.75), below: em(1) })),
      show(where(heading, { level: 4 }), set(block, { above: em(1.55), below: em(1) })),
    ),
    show(where(heading, { level: 1 }), (it_2, ctx_2) => inline(space, pagebreak({ weak: true }), space, it_2, space)),
    set(heading, {
      supplement: (it_3) => unsafeRaw.code<any>`{
  if (it.has("depth")) {
    if it.depth == 1 [Chapter]
    else if it.depth == 2 [Section]
    else [Subsection]
  } else {
    [ERROR, this should not happen]
  }
}`,
    }),
    set(cite, { style: 'association-for-computing-machinery' }),
    set(table, { stroke: add(pt(0.5), black) }),
    m.lines(show(ref, set(text, { fill: unsafeRaw.code<any>`color.olive` })), show(link, set(text, { fill: blue }))),
    show(where(outline.entry, { level: 1 }), (it_4, ctx_3) => codeBlock([v({ weak: true }, em(1)), strong(it_4)])),
    m.lines(
      show(cite, set(text, { fill: blue }, { if: inwriting })),
      show(footnote, set(text, { fill: purple }, { if: inwriting })),
      set(cite, { style: 'chicago-author-date' }, { if: inwriting }),
    ),
    m.lines(show(makeGlossary), inline(registerGlossary(glossary))),
    inline(
      outline({
        title: codeBlock([text({ weight: 700, size: em(1.3) }, 'Contents'), v(mm(10))]),
        indent: em(2),
        depth: 3,
      }),
      space,
      pagebreak({ weak: false }),
    ),
    m.lines(
      set(page, { numbering: '1' }),
      inline(
        counter(page).update(1),
        space,
        set(math.equation, { numbering: '(1)' }),
        space,
        set(heading, { numbering: '1.1' }),
      ),
    ),
    includeFile('chapters/1_Introduction.typ'),
    m.lines(set(page, { numbering: 'i' }), inline(counter(page).update(1))),
    includeFile('chapters/Appendix.typ'),
    inline(heading({ numbering: null }, inline`Glossary`), space, printGlossary(glossary)),
    inline(
      heading({ numbering: null }, inline`List of Figures`),
      space,
      outline({ title: null, target: where(figure, { kind: image }) }),
    ),
    inline(
      heading({ numbering: null }, inline`List of Tables`),
      space,
      outline({ title: null, target: where(figure, { kind: table }) }),
    ),
    m.lines(
      set(par, { leading: em(0.7), firstLineIndent: em(0), justify: true }),
      inline(bibliography({ style: 'apa' }, path('items.bib'))),
    ),
  )
}
