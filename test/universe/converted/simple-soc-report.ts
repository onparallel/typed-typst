// Converted from test/universe/corpus/simple-soc-report.typ by scripts/convert-suite.ts — do not edit.
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
  importPackage,
  includeFile,
  inline,
  label,
  labelled,
  lorem,
  m,
  path,
  show,
  space,
  strong,
  table,
} from '../../../src/index.ts'

export default () => {
  const report = external('report')
  const report_with = define('with')
    .named('abstract-content', T.content, [])
    .named('academic-year', T.any, null)
    .named('acknowledgement-content', T.content, [])
    .named('advisor', T.any, null)
    .named('appendix-content', T.content, [])
    .named('author-name', T.any, null)
    .named('bibliography', T.any, null)
    .named('deliverables', T.any, null)
    .named('department', T.any, null)
    .named('implementation-software', T.any, null)
    .named('keywords', T.any, null)
    .named('project-id', T.any, null)
    .named('project-title', T.any, null)
    .named('project-type', T.any, null)
    .named('school', T.any, null)
    .named('subject-descriptors', T.any, null)
    .named('university', T.any, null)
    .returns(T.any)
    .external(report)
  return doc(
    m.lines(
      importPackage('@preview/simple-soc-report:0.1.0', [report]),
      show(
        report_with({
          projectType: 'B.Comp. Dissertation',
          authorName: 'Your Name',
          projectTitle: 'Your Title',
          academicYear: '2025/2026',
          projectId: 'H123456',
          advisor: 'Your Advisor',
          deliverables: ['Report: 1 Volume', 'Example Code: 1'],
          abstractContent: blocks(includeFile('frontmatter/abstract.typ')),
          acknowledgementContent: blocks(includeFile('frontmatter/acknowledgements.typ')),
          department: 'Department of Computer Science',
          school: 'School of Computing',
          university: 'National University of Singapore',
          subjectDescriptors: 'D.2.10 Software Engineering: Design',
          keywords: ['Software Engineering', 'Web Development'],
          implementationSoftware: ['Typst 0.13+', 'Git'],
          bibliography: bibliography({ title: 'References', style: 'apa' }, path('cite.bib')),
          appendixContent: blocks(
            m.lines(includeFile('appendices/appendix-a.typ'), includeFile('appendices/appendix-b.typ')),
          ),
        }),
      ),
    ),
    includeFile('chapters/introduction.typ'),
    m.lines(
      inline(labelled(heading({ depth: 1 }, inline('Conclusion')), label('chap:conclusion'))),
      inline(
        lorem(50),
        space,
        labelled(
          [
            figure(
              { caption: inline`An example table` },
              table(
                { columns: 3 },
                table.header(inline(strong(inline`H1`)), inline(strong(inline`H2`)), inline(strong(inline`H3`))),
                inline`B1`,
                inline`B2`,
                inline`B3`,
                inline`C1`,
                inline`C2`,
                inline`C3`,
                inline`D1`,
                inline`D2`,
                inline`D3`,
              ),
            ),
            space,
          ],
          label('table:example-table'),
        ),
      ),
    ),
  )
}
