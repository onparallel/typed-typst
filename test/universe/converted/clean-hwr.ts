// Converted from test/universe/corpus/clean-hwr.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  bibliography,
  black,
  blocks,
  codeBlock,
  contentBlock,
  define,
  doc,
  em,
  external,
  figure,
  footnote,
  h,
  heading,
  image,
  importPackage,
  inline,
  label,
  labelled,
  let_,
  lorem,
  m,
  math,
  pagebreak,
  parbreak,
  path,
  pct,
  pt,
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
  const hwr = external('hwr')
  const acr = define('acr').pos('arg1', T.any).returns(T.any).external()
  const gls = define('gls').pos('arg1', T.any).returns(T.any).external()
  const wordCount = external('word-count')
  const totalWords = external('total-words')
  const hwr_with = define('with')
    .named('acronyms', T.any, null)
    .named('bibliography-object', T.any, null)
    .named('custom-entries', T.any, null)
    .named('figure-index', T.any, null)
    .named('glossary', T.any, null)
    .named('listing-index', T.any, null)
    .named('metadata', T.any, null)
    .named('table-index', T.any, null)
    .named('word-count', T.any, null)
    .returns(T.any)
    .external(hwr)
  const wordCount_with = define('with').named('exclude', T.any, null).returns(T.any).external(wordCount)
  const unit = define('unit')
    .pos('u', T.any)
    .returns(T.any)
    .body((p) => math.display(math.upright(p['u'])))
  const [siTableDecl, siTable] = let_(
    'si-table',
    table(
      { columns: 3 },
      table.header(inline`Quantity`, inline`Symbol`, inline`Unit`),
      inline`Length`,
      inline(unsafeRaw.math`l`),
      inline(unit('m')),
      inline`Mass`,
      inline(unsafeRaw.math`m`),
      inline(unit('kg')),
      inline`Time`,
      inline(unsafeRaw.math`t`),
      inline(unit('s')),
      inline`Electric Current`,
      inline(unsafeRaw.math`I`),
      inline(unit('A')),
      inline`Temperature`,
      inline(unsafeRaw.math`T`),
      inline(unit('K')),
      inline`Substance Amount`,
      inline(unsafeRaw.math`n`),
      inline(unit('mol')),
      inline`Luminous Intensity`,
      inline(unsafeRaw.math`I_v`),
      inline(unit('cd')),
    ),
  )
  return doc(
    importPackage('@preview/clean-hwr:0.2.0', [hwr]),
    m.lines(importPackage('@preview/acrostiche:0.7.0', [acr]), importPackage('@preview/glossarium:0.5.10', [gls])),
    importPackage('@preview/wordometer:0.1.5', [wordCount, totalWords]),
    show(
      hwr_with({
        metadata: {
          title: inline`HWR PTB Template`,
          studentId: '12345678910',
          authors: 'Alice Becker',
          fieldOfStudy: 'Computer Science',
          company: 'Example Company',
          enrollmentYear: '2024',
          semester: '2',
          companySupervisor: 'Prof. Dr. Schwarz',
        },
        customEntries: [
          { key: 'GitHub', value: 'aliceb-quantum', index: 0 },
          { key: 'LinkedIn', value: 'Alice Becker', index: 1 },
        ],
        acronyms: { entries: { QPU: ['Quantum Processing Unit', 'Quantum Processing Units'] } },
        glossary: {
          entries: [
            {
              key: 'quantum_superposition',
              short: 'Superposition',
              long: 'Quantum Superposition',
              description:
                'A fundamental principle of quantum mechanics where a particle can exist in multiple states simultaneously.',
            },
          ],
        },
        bibliographyObject: bibliography(path('refs.bib')),
        figureIndex: { enabled: true },
        tableIndex: { enabled: true },
        listingIndex: { enabled: true, title: 'Index of Code Snippets' },
        wordCount: totalWords,
      }),
    ),
    inline(
      codeBlock(
        [],
        blocks(
          show(wordCount_with({ exclude: where(raw, { block: true }) })),
          m.lines(
            m.heading(1, 'Introduction to Quantum Computing'),
            inline`Quantum computing leverages the principles of quantum mechanics to process information. Unlike
classical bits, which are binary, quantum bits - or ${gls('quantum_superposition')} - can exist
in a ${strong(inline`superposition`)} of states. ${lorem(100)}`,
          ),
          inline`In this report, we explore how ${acr('QPU')}s are used in real-world applications.`,
          inline(pagebreak()),
          m.lines(
            inline(labelled(heading({ depth: 1 }, inline('Practical Implementation at IBM')), label('IBM'))),
            inline`IBM Quantum offers access to real ${acr('QPU')}s over the cloud. This has enabled researchers
and students to experiment with real quantum algorithms${footnote(inline`cf. ${ref(label('Feynman82'))}`)}.`,
          ),
          m.lines(
            m.heading(2, 'Core Concepts'),
            inline`After we talked about IBM in ${ref(label('IBM'))} we will continue with ${lorem(150)}`,
          ),
          m.lines(
            unit.decl,
            siTableDecl,
            inline(
              contentBlock(
                blocks(
                  m.lines(
                    set(table, { inset: pt(5), stroke: add(pt(1), black) }),
                    show(where(table.cell, { y: 0 }), (it, ctx) =>
                      codeBlock([v(em(0.5)), unsafeRaw.code<any>`h(0.5em) + it.body.text + h(0.5em)`, v(em(0.5))]),
                    ),
                    inline(figure({ caption: inline`"SI Base Units"` }, siTable)),
                  ),
                ),
              ),
            ),
          ),
          m.lines(
            m.heading(2, 'Code Example'),
            show(raw, set(text, { font: 'Fira Mono' })),
            'Below is an example of tuple usage in Rust:',
          ),
          inline(
            figure(
              { caption: inline`"Rust code using tuples"` },
              inline(
                space,
                raw(
                  { block: true, lang: 'rust' },
                  'fn main() {\n    let user = ("Alice", 29);\n    println!("User {} is {} years old", user.0, user.1);\n\n    let employee = (("Alice", 29), "IBM Quantum");\n    println!("{} is {} and works for {}", employee.0.0, employee.0.1, employee.1);\n}',
                ),
                space,
              ),
            ),
            space,
            labelled(
              figure(
                { caption: 'Logo of the Berlin School of Economics and Law' },
                image({ width: pct(80) }, path('images/header_logo.png')),
              ),
              label('HWR'),
            ),
          ),
          m.lines(m.heading(2, 'Visualization'), inline(lorem(233))),
          m.lines(m.heading(2, 'Subchapter: Outlook'), inline(lorem(60))),
          parbreak(),
        ),
      ),
    ),
  )
}
