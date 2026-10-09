// Converted from test/universe/corpus/lambda.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  bibliography,
  cm,
  colbreak,
  counter,
  define,
  doc,
  external,
  figure,
  heading,
  importPackage,
  inline,
  label,
  labelled,
  luma,
  m,
  path,
  pct,
  raw,
  rect,
  ref,
  set,
  show,
  space,
  str,
  table,
} from '../../../src/index.ts'

export default () => {
  const abbr = external('abbr')
  const thesis = external('thesis')
  const noteBlock = define('note-block').pos('arg1', T.content).named('title', T.any, null).returns(T.any).external()
  const abbr_showRule = external('show-rule', abbr)
  const abbr_make = define('make').pos('arg1', T.any).returns(T.any).external(abbr)
  const thesis_with = define('with')
    .named('abstract', T.content, [])
    .named('accepted', T.any, null)
    .named('affiliations', T.any, null)
    .named('authors', T.any, null)
    .named('co-supervisor', T.any, null)
    .named('columns', T.any, null)
    .named('cover', T.any, null)
    .named('date', T.any, null)
    .named('defended', T.any, null)
    .named('degree', T.any, null)
    .named('department', T.any, null)
    .named('doi', T.any, null)
    .named('email', T.any, null)
    .named('faculty', T.any, null)
    .named('header-footer', T.any, null)
    .named('keywords', T.any, null)
    .named('license', T.any, null)
    .named('location', T.any, null)
    .named('logo', T.any, null)
    .named('major', T.any, null)
    .named('published', T.any, null)
    .named('show-abstract', T.any, null)
    .named('show-outline', T.any, null)
    .named('submission-text', T.any, null)
    .named('submitted', T.any, null)
    .named('supervisor', T.any, null)
    .named('title', T.any, null)
    .named('university', T.any, null)
    .returns(T.any)
    .external(thesis)
  return doc(
    importPackage('@preview/lambda:0.1.1', [thesis, noteBlock]),
    m.lines(
      importPackage('@preview/abbr:0.3.1', abbr),
      show(abbr_showRule),
      inline(abbr_make(['DOC', 'dissolved organic carbon'])),
    ),
    show(
      thesis_with({
        title: 'A Concise, Descriptive Title for Your Thesis or Article',
        authors: [
          { name: 'Ada Lovelace', affils: [1] },
          { name: 'Alan Turing', affils: [1, 2] },
        ],
        affiliations: [
          { id: 1, text: 'Department of Example Studies, University of Somewhere' },
          { id: 2, text: 'Institute for Further Research' },
        ],
        degree: 'Master of Science',
        major: 'Example Studies',
        department: 'Department of Example Studies',
        faculty: 'Faculty of Science',
        university: 'University of Somewhere',
        location: 'Somewhere',
        date: 'June 2026',
        submissionText: 'Submitted in partial fulfilment of the requirements for the',
        supervisor: 'Prof. Grace Hopper',
        coSupervisor: 'Dr. Katherine Johnson',
        logo: null,
        email: ['ada.lovelace@example.edu'],
        doi: null,
        submitted: null,
        defended: null,
        accepted: null,
        published: null,
        license:
          'Unrestricted use, distribution, and reproduction is permitted in any medium, provided the original author and source are credited.',
        abstract: inline`${space}Replace this paragraph with your abstract. It is shown in a tinted box at the top of
the first content page. Summarise the question, approach, and main findings in a few sentences.
The acronym ${ref(label('DOC'))} will expand on first use.${space}`,
        keywords: 'keyword one, keyword two, keyword three',
        cover: true,
        showAbstract: true,
        showOutline: true,
        headerFooter: true,
        columns: 2,
      }),
    ),
    m.heading(1, 'Introduction'),
    inline`Replace this text with your introduction. You can cite sources like ${ref(label('example2024'))}
and cross-reference figures such as ${ref(label('fig:example'))}. Headings are numbered automatically
and appear in the table of contents.`,
    inline(
      labelled(
        [
          figure(
            { caption: inline`A placeholder figure. Replace the ${raw('rect')} with ${raw('image("figure.png")')}.` },
            rect({ width: pct(100), height: cm(4), fill: luma(240), stroke: null }),
          ),
          space,
        ],
        label('fig:example'),
      ),
    ),
    m.heading(2, 'Background'),
    m.heading(3, 'A Sub-subsection'),
    inline(
      noteBlock(
        { title: 'Note' },
        inline`${space}Use ${raw('note-block')} to highlight an aside, definition, or callout. Omit the title
for an untitled box.${space}`,
      ),
    ),
    m.heading(1, 'Methods'),
    m.heading(1, 'Results'),
    m.heading(1, 'Discussion'),
    m.heading(1, 'Conclusion'),
    inline(colbreak(), space, bibliography({ style: 'apa' }, path('refs.bib'))),
    inline(
      colbreak(),
      space,
      set(figure, { numbering: (n) => add('S', str(n)) }),
      space,
      counter(figure).update(0),
      space,
      counter(table).update(0),
      space,
      set(heading, { numbering: null }),
    ),
    m.heading(1, 'Appendix'),
    m.heading(2, 'Supplementary Information'),
    'Supplementary figures and tables go here.',
  )
}
