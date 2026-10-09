// Converted from test/universe/corpus/classic-msc-thesis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  align,
  auto,
  bibliography,
  blocks,
  center,
  cm,
  datetime,
  define,
  doc,
  em,
  external,
  fr,
  h,
  horizon,
  importPackage,
  includeFile,
  inline,
  left,
  luma,
  m,
  path,
  pt,
  raw,
  rect,
  show,
  space,
  strong,
  table,
  text,
  unsafeRaw,
  v,
} from '../../../src/index.ts'

export default () => {
  const thesis = external('thesis')
  const abbrevTable = external('abbrev-table')
  const flexCaption = external('flex-caption')
  const thesis_with = define('with')
    .named('abbreviations', T.any, null)
    .named('abstract', T.content, [])
    .named('acknowledgments', T.content, [])
    .named('appendix', T.any, null)
    .named('author', T.any, null)
    .named('bibliography', T.any, null)
    .named('certificate', T.content, [])
    .named('date', T.any, null)
    .named('degree', T.any, null)
    .named('department', T.any, null)
    .named('heading-numbering', T.any, null)
    .named('institute', T.any, null)
    .named('keywords', T.content, [])
    .named('location', T.any, null)
    .named('logo', T.any, null)
    .named('logo-secondary', T.any, null)
    .named('show-list-of-figures', T.any, null)
    .named('show-list-of-tables', T.any, null)
    .named('show-toc', T.any, null)
    .named('supervisor', T.any, null)
    .named('title', T.any, null)
    .named('tutor', T.any, null)
    .named('university', T.any, null)
    .returns(T.any)
    .external(thesis)
  return doc(
    importPackage('@preview/classic-msc-thesis:0.1.0', [thesis, abbrevTable, flexCaption]),
    show(
      thesis_with({
        title: "The Title of Your Master's Thesis",
        author: 'Your Name',
        degree: 'MSc in Your Programme',
        university: 'Name of Your University',
        department: 'Faculty or Department',
        supervisor: 'Dr. Supervisor Name',
        tutor: 'Dr. Tutor Name',
        institute: 'Host Research Institute',
        location: 'City',
        date: datetime.today(),
        logo: rect(
          { width: cm(3.6), height: cm(1.7), stroke: add(pt(0.5), luma(160)), radius: pt(2) },
          inline(
            space,
            align(add(center, horizon), inline(text({ size: pt(8), fill: luma(130) }, inline`University logo`))),
            space,
          ),
        ),
        logoSecondary: rect(
          { width: cm(3.2), height: cm(1.7), stroke: add(pt(0.5), luma(160)), radius: pt(2) },
          inline(
            space,
            align(add(center, horizon), inline(text({ size: pt(8), fill: luma(130) }, inline`Institute logo`))),
            space,
          ),
        ),
        certificate: blocks(
          inline(
            v(fr(1)),
            space,
            align(center, inline(text({ size: pt(18), weight: 'bold' }, inline`Certificate of Direction`))),
            space,
            v(cm(1.2)),
          ),
          inline`${strong(inline`Dr. Tutor Name`)}, as Academic Tutor, and ${strong(inline`Dr. Supervisor Name`)},
as Project Supervisor, hereby certify that this Master's Thesis, entitled "${strong(inline`The Title of Your Master's Thesis`)}",
has been carried out by ${strong(inline`Your Name`)} under their direction and fulfils the requirements
to be submitted and defended for the degree of MSc in Your Programme.`,
          inline`${v(cm(0.4))} City, ${datetime.today().display('[day] [month repr:long] [year]')} ${v(cm(1.4))}`,
          inline(
            align(
              center,
              inline(
                space,
                table(
                  {
                    columns: cm(12),
                    rows: [auto, cm(2.6), auto, cm(2.6), auto, cm(2.6)],
                    stroke: (x, y) => unsafeRaw.code<any>`if calc.odd(y) { (bottom: 0.6pt + black) } else { none }`,
                    align: add(left, horizon),
                    inset: { x: pt(0), top: pt(16), bottom: pt(4) },
                  },
                  inline(
                    strong(inline`Academic Tutor`),
                    space,
                    h(em(0.6)),
                    space,
                    text({ size: pt(10), fill: luma(110) }, inline`Dr. Tutor Name`),
                  ),
                  inline(),
                  inline(
                    strong(inline`Project Supervisor`),
                    space,
                    h(em(0.6)),
                    space,
                    text({ size: pt(10), fill: luma(110) }, inline`Dr. Supervisor Name`),
                  ),
                  inline(),
                  inline(
                    strong(inline`Author`),
                    space,
                    h(em(0.6)),
                    space,
                    text({ size: pt(10), fill: luma(110) }, inline`Your Name`),
                  ),
                  inline(),
                ),
                space,
              ),
            ),
            space,
            v(fr(1)),
          ),
        ),
        acknowledgments: blocks(
          'Use this section to thank the people and institutions that supported your work: your supervisor and tutor, your research group or department, funding bodies, and anyone who helped along the way. Keep it warm but concise — a few short paragraphs are plenty.',
          inline`A second paragraph can acknowledge family and friends. This block is optional: set ${raw('acknowledgments: none')}
in ${raw('main.typ')} to omit it entirely.`,
        ),
        abstract: blocks(
          'The abstract is a self-contained summary of the whole thesis, usually between 200 and 350 words. State the problem and its context, what you did, the main results, and why they matter, in a single unbroken passage that a reader can understand without the rest of the document.',
          'Open with the motivation and the gap your work addresses. Then describe your approach at a high level — enough for the reader to grasp the method without the detail of the Methodology chapter. Close with your principal findings, expressed concretely, and one sentence on their significance. Avoid citations, undefined abbreviations, and figures here; the abstract must stand on its own.',
        ),
        keywords: inline`first keyword, second keyword, third keyword, fourth keyword`,
        abbreviations: [
          ['DNA', 'Deoxyribonucleic Acid'],
          ['API', 'Application Programming Interface'],
          ['SVG', 'Scalable Vector Graphics'],
          ['TSV', 'Tab-Separated Values'],
        ],
        showToc: true,
        showListOfFigures: true,
        showListOfTables: true,
        headingNumbering: true,
        bibliography: bibliography({ style: 'apa' }, path('references.bib')),
        appendix: includeFile('chapters/05-appendix.typ'),
      }),
    ),
    m.lines(
      includeFile('chapters/01-introduction.typ'),
      includeFile('chapters/02-methodology.typ'),
      includeFile('chapters/03-results.typ'),
      includeFile('chapters/04-discussion.typ'),
    ),
  )
}
