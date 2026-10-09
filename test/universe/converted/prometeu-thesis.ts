// Converted from test/universe/corpus/prometeu-thesis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  align,
  bibliography,
  block,
  blocks,
  center,
  cite,
  codeBlock,
  columns,
  contentBlock,
  counter,
  define,
  doc,
  em,
  external,
  figure,
  footnote,
  heading,
  horizon,
  image,
  importPackage,
  includeFile,
  inline,
  label,
  labelled,
  let_,
  linebreak,
  link,
  m,
  math,
  outline,
  page,
  pagebreak,
  path,
  pct,
  raw,
  ref,
  set,
  show,
  space,
  spread,
  table,
  text,
  times,
  unsafeRaw,
  where,
  yaml,
} from '../../../src/index.ts'

export default () => {
  const colors = external('colors')
  const thesis = define('thesis')
    .named('author', T.any, null)
    .named('cover-gray-images', T.any, null)
    .named('cover-images', T.any, null)
    .named('date', T.content, [])
    .named('degree', T.content, [])
    .named('language', T.any, null)
    .named('school', T.content, [])
    .named('supervisors', T.any, null)
    .named('title', T.content, [])
    .returns(T.any)
    .external()
  const makeGlossary = external('make-glossary')
  const registerGlossary = define('register-glossary').pos('arg1', T.any).returns(T.any).external()
  const printGlossary = define('print-glossary')
    .pos('arg1', T.any)
    .named('description-separator', T.content, [])
    .named('disable-back-references', T.any, null)
    .named('show-all', T.any, null)
    .named('user-print-description', T.any, null)
    .named('user-print-title', T.any, null)
    .returns(T.any)
    .external()
  const index = define('index').rest('args', T.any).returns(T.any).external()
  const makeIndex = define('make-index')
    .named('section-title', T.any, null)
    .named('title', T.any, null)
    .named('use-page-counter', T.any, null)
    .returns(T.any)
    .external()
  const colors_pantonecoolgray7 = external('pantonecoolgray7', colors)
  const [acronymsDataDecl, acronymsData] = let_('acronyms-data', yaml(path('acronyms.yml')))
  const [glossaryDataDecl, glossaryData] = let_('glossary-data', yaml(path('glossary.yml')))
  const [showAcronymsDecl, showAcronyms] = let_(
    'show-acronyms',
    printGlossary(
      {
        showAll: true,
        disableBackReferences: true,
        userPrintTitle: unsafeRaw.code<any>`entry => {
    let description = if entry.long != none { h(0.5em) + entry.long + [.] }
    text(weight: "bold", entry.short) + description
  }`,
      },
      acronymsData,
    ),
  )
  const [showGlossaryDecl, showGlossary] = let_(
    'show-glossary',
    printGlossary(
      {
        showAll: true,
        disableBackReferences: true,
        userPrintTitle: unsafeRaw.code<any>`entry => {
    let title = if entry.long == none { entry.short } else { entry.long }
    text(weight: "bold", title) + h(0.5em) + entry.description
  }`,
        userPrintDescription: unsafeRaw.code<any>`entry => if entry.description != none { [.] }`,
        descriptionSeparator: inline(),
      },
      glossaryData,
    ),
  )
  const [filledDecl, filled] = let_('filled', unsafeRaw.math`circle.filled.small`)
  return doc(
    importPackage('@preview/prometeu-thesis:1.1.0', [colors, thesis]),
    show(
      thesis({
        author: "Author's full name",
        title: inline`Title Title Title Title Title Title ${linebreak()} Title Title Title Title Title ${linebreak()}
Title Title Title Title`,
        date: inline`July 2026`,
        supervisors: [inline`Supervisor Name`, inline`Co-Supervisor Name`],
        coverImages: [image(path('logos/uminho/color/UM.jpg')), image(path('logos/uminho/color/EE.jpg'))],
        coverGrayImages: [image(path('logos/uminho/gray/UM.jpg')), image(path('logos/uminho/gray/EE.jpg'))],
        school: inline`School of Engineering`,
        degree: inline`Master's Dissertation in Informatics Engineering`,
        language: 'en',
      }),
    ),
    importPackage('@preview/glossarium:0.5.10', [makeGlossary, registerGlossary, printGlossary]),
    m.lines(
      show(makeGlossary),
      acronymsDataDecl,
      glossaryDataDecl,
      inline(registerGlossary(add(acronymsData, glossaryData))),
    ),
    showAcronymsDecl,
    showGlossaryDecl,
    importPackage('@preview/in-dexter:0.7.2', [index, makeIndex]),
    inline(
      contentBlock(
        blocks(
          m.lines(set(page, { numbering: 'i' }), inline(counter(page).update(2))),
          set(heading, { outlined: false, supplement: null, numbering: null }),
          m.lines(
            includeFile('preamble/copyright.typ'),
            inline(
              pagebreak(),
              space,
              includeFile('preamble/acknowledgements.typ'),
              space,
              pagebreak(),
              space,
              includeFile('preamble/integrity.typ'),
              space,
              pagebreak(),
              space,
              includeFile('preamble/abstract.typ'),
              space,
              pagebreak(),
              space,
              outline(),
              space,
              pagebreak(),
              space,
              outline({ title: inline`List of Figures`, target: where(figure, { kind: image }) }),
              space,
              pagebreak(),
              space,
              outline({ title: inline`List of Tables`, target: where(figure, { kind: table }) }),
              space,
              pagebreak(),
            ),
            m.heading(1, 'Acronyms'),
            inline(showAcronyms, space, pagebreak()),
            m.heading(1, 'Glossary'),
            inline(showGlossary, space, pagebreak()),
          ),
        ),
      ),
    ),
    inline(counter(page).update(1), space, set(heading, { supplement: inline`Chapter`, numbering: '1.1' })),
    m.heading(1, 'Introduction'),
    'Context, motivation, main aims.',
    m.lines(m.heading(1, 'State of the Art'), 'State of the art review; related work.'),
    m.heading(2, 'Citations'),
    inline`Example of a citation: ${ref(label('rustbook'))} or ${cite({ form: 'full' }, label('rustbook'))}.
This entry is in the ${raw('bibliography.yml')} file.`,
    inline`${ref(label('typst'))} also supports the ${ref(label('latex'))} ${raw('.bib')} file format,
${link('https://www.bibtex.org/Format/', inline`BibTeX`)}, but the ${link('https://github.com/typst/hayagriva/blob/main/docs/file-format.md', inline`Hayagriva YAML format`)}
is easier to use.`,
    inline`Check more information about bibliography ${link('https://typst.app/docs/reference/model/bibliography/', inline`here`)}
and ${link('https://typst.app/docs/reference/model/cite/', inline`here`)}.`,
    m.heading(2, 'Mathematical expressions'),
    'The mass-energy equivalence is expressed by the equation',
    inline(
      contentBlock(blocks(m.lines(set(math.equation, { numbering: '(1)' }), inline(unsafeRaw.math.block`E = m c^2`)))),
    ),
    inline`discovered in 1905 by Albert Einstein. In natural units (${unsafeRaw.math`c = 1`}) the formula
expresses the identity ${unsafeRaw.math.block`E = m`}`,
    inline`Check more information about math expressions ${link('https://typst.app/docs/reference/math/equation/', inline`here`)}.`,
    m.heading(2, 'Footnotes'),
    inline`This is a footnote example ${footnote(inline`The quick brown fox jumps over the lazy dog.`)}.`,
    m.heading(2, 'Acronyms and Glossary'),
    inline`Given a set of numbers, there are elementary methods to compute its ${ref(label('gcd:long'))},
which is abbreviated ${ref(label('gcd:short'))}. This process is similar to that used for the
${ref(label('lcm'))}.`,
    inline`The ${ref(label('typst'))} language is specially suitable for documents that include ${ref(label('maths:long'))}.
${ref(label('formula:pl'))} are rendered properly as the Typst syntax is designed to be easy
to understand and use.`,
    inline`This glossary is powered by the ${link('https://typst.app/universe/package/glossarium/', inline`glossarium`)}
package. Check more about it there.`,
    m.heading(2, 'Index'),
    inline`In this example, several keywords ${index(inline`keywords`)} will be used which are important
and deserve to appear in the Index${index(inline`Index`)}.`,
    inline`Terms like generate ${index(inline`generate`)} and some ${index(inline`others`)} will also show
up. Terms in the index can also be nested${index(inline`Index`, inline`nested`)}.`,
    inline`The index is powered by the ${link('https://typst.app/universe/package/in-dexter/', inline`in-dexter`)}
package. Check more about it there.`,
    m.heading(1, 'The problem and its challenges'),
    'The problem and its challenges.',
    m.heading(2, 'Images'),
    'Example of inserting an image as displayed text,',
    inline(align(center, image({ width: pct(10) }, path('logos/uminho/color/UM.jpg')))),
    'or as a figure:',
    inline(
      labelled(
        [
          figure(
            { caption: inline`Logo of the University of Minho` },
            image({ width: pct(30) }, path('logos/uminho/color/UM.jpg')),
          ),
          space,
        ],
        label('uminhologo'),
      ),
    ),
    inline`You can also reference figures like ${ref(label('uminhologo'))}.`,
    m.heading(1, 'Contribution'),
    'Main result(s) and their scientific evidence',
    m.heading(2, 'Introduction'),
    m.heading(2, 'Summary'),
    m.heading(1, 'Applications'),
    'Applications of the main result (examples and case studies)',
    m.heading(2, 'Introduction'),
    m.heading(2, 'Summary'),
    m.heading(1, 'Conclusions and future work'),
    'Conclusions and future work',
    m.heading(2, 'Conclusions'),
    m.heading(2, 'Future work'),
    m.heading(1, 'Planned Schedule'),
    m.heading(2, 'Activities'),
    filledDecl,
    inline(
      figure(
        { caption: inline`Planned Schedule` },
        table(
          { columns: 11 },
          inline`Task`,
          inline`Oct`,
          inline`Nov`,
          inline`Dec`,
          inline`Jan`,
          inline`Feb`,
          inline`Mar`,
          inline`Apr`,
          inline`May`,
          inline`Jun`,
          inline`Jul`,
          inline`Background and ${ref(label('soa:short'))}`,
          filled,
          filled,
          filled,
          inline(),
          inline(),
          inline(),
          inline(),
          inline(),
          inline(),
          inline(),
          inline`${ref(label('pdr:short'))} preparation`,
          inline(),
          filled,
          filled,
          filled,
          inline(),
          inline(),
          inline(),
          inline(),
          inline(),
          inline(),
          inline`Contribution`,
          inline(),
          inline(),
          spread(times([filled], 7)),
          inline(),
          inline`Writing up`,
          inline(),
          inline(),
          inline(),
          inline(),
          inline(),
          inline(),
          spread(times([filled], 4)),
        ),
      ),
    ),
    inline`For more elegant visualisation check some community-made packages like ${link('https://typst.app/universe/package/gantty/', inline`gantty`)}
or ${link('https://typst.app/universe/package/timeliney/', inline`timeliney`)}.`,
    inline(
      contentBlock(
        blocks(
          set(heading, { numbering: null }),
          inline(bibliography({ full: true }, path('bibliography.yml'))),
          m.lines(
            set(heading, { outlined: false }),
            m.heading(1, 'Index'),
            inline(
              columns(
                2,
                makeIndex({
                  title: null,
                  usePageCounter: true,
                  sectionTitle: (letter, counter_2) =>
                    codeBlock([set(text, { weight: 'bold' })], block({ above: em(1.5) }, letter)),
                }),
              ),
            ),
          ),
        ),
      ),
    ),
    inline(
      contentBlock(
        blocks(
          inline(counter(heading).update(0), space, set(heading, { numbering: 'A.1', supplement: inline`Appendix` })),
          includeFile('appendix.typ'),
        ),
      ),
    ),
    set(page, { numbering: null }),
    inline(page({ fill: colors_pantonecoolgray7 }, inline())),
    inline(
      align(
        horizon,
        inline`Place here information about funding, FCT project, etc. in which the work is framed. Leave empty
otherwise.`,
      ),
    ),
  )
}
