// Converted from test/universe/corpus/bye-ubc.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  blocks,
  define,
  doc,
  external,
  importPackage,
  includeFile,
  inline,
  label,
  lorem,
  m,
  path,
  raw,
  ref,
  show,
  space,
} from '../../../src/index.ts'

export default () => {
  const thesis = external('thesis')
  const thesis_with = define('with')
    .named('abstract', T.any, null)
    .named('acknowledgments', T.any, null)
    .named('additional-committee', T.any, null)
    .named('appendices', T.content, [])
    .named('author', T.any, null)
    .named('bibliography', T.any, null)
    .named('campus', T.any, null)
    .named('dedication', T.any, null)
    .named('degree', T.any, null)
    .named('examining-committee', T.any, null)
    .named('glossary', T.any, null)
    .named('lay-summary', T.any, null)
    .named('list-of-symbols', T.any, null)
    .named('month', T.any, null)
    .named('preface', T.any, null)
    .named('previous-degrees', T.any, null)
    .named('program', T.any, null)
    .named('title', T.content, [])
    .named('year', T.any, null)
    .returns(T.any)
    .external(thesis)
  return doc(
    importPackage('@preview/bye-ubc:0.2.3', [thesis]),
    show(
      thesis_with({
        title: inline`${space}Advanced Studies on the Optimization of Thesis Title Generation Algorithms for Maximum
Perceived Depth and Minimum Reviewer Scrutiny${space}`,
        author: 'Daniel Duque',
        previousDegrees: [],
        degree: 'Doctor of Philosophy',
        program: 'Physics',
        campus: 'Vancouver',
        month: 'October',
        year: '2026',
        examiningCommittee: [
          {
            name: 'John Doe',
            title: 'Research Scientist',
            department: 'Physical Sciences Division',
            institution: 'TRIUMF',
            role: 'Research Co-supervisor',
          },
          {
            name: 'Jane Doe',
            title: 'Professor',
            department: 'Department of Chemistry',
            institution: 'UBC',
            role: 'Academic Co-supervisor',
          },
        ],
        additionalCommittee: [],
        abstract: includeFile('./preliminary_pages/abstract.typ'),
        laySummary: includeFile('./preliminary_pages/lay_summary.typ'),
        preface: includeFile('./preliminary_pages/preface.typ'),
        listOfSymbols: null,
        glossary: null,
        acknowledgments: includeFile('./preliminary_pages/acknowledgments.typ'),
        dedication: null,
        bibliography: bibliography(path('refs.bib')),
        appendices: blocks(
          m.lines(m.heading(1, 'First'), inline(lorem(100))),
          m.lines(m.heading(1, 'Second'), inline(lorem(100))),
        ),
      }),
    ),
    m.lines(
      m.heading(1, 'Introduction'),
      inline`This is the actual body of your thesis. You can write it here, but it is recommended to write
each chapter in a separate file and include them using the ${raw('include "./path/to/chapter.typ"')}
keyword.`,
    ),
    inline`Like ${ref(label('lorem2025'))} said: ${lorem(15)}`,
  )
}
