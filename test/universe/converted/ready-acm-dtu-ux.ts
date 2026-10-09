// Converted from test/universe/corpus/ready-acm-dtu-ux.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  blocks,
  colbreak,
  define,
  doc,
  emph,
  external,
  figure,
  heading,
  image,
  importPackage,
  inline,
  label,
  labelled,
  lorem,
  m,
  parbreak,
  path,
  pct,
  ref,
  show,
  space,
  strong,
  sym,
} from '../../../src/index.ts'

export default () => {
  const project = external('project')
  const appendix = define('appendix').pos('arg1', T.content).returns(T.any).external()
  const project_with = define('with')
    .named('abstract', T.content, [])
    .named('authors', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(project)
  return doc(
    importPackage('@preview/ready-acm-dtu-ux:0.1.0', [project, appendix]),
    show(
      project_with({
        title: 'One AR to rule them all',
        authors: [
          {
            name: 'Joe Author',
            email: 's______@student.dtu.dk',
            affiliation: 'Technical University of Denmark',
            postal: 'Lyngby',
          },
          {
            name: 'Jack Author',
            email: 's______@student.dtu.dk',
            affiliation: 'Technical University of Denmark',
            postal: 'Lyngby',
          },
          {
            name: 'William Author',
            email: 's______@student.dtu.dk',
            affiliation: 'Technical University of Denmark',
            postal: 'Lyngby',
          },
          {
            name: 'Averell Author',
            email: 's______@student.dtu.dk',
            affiliation: 'Technical University of Denmark',
            postal: 'Lyngby',
          },
        ],
        abstract: inline(),
      }),
    ),
    m.lines(
      m.heading(1, 'Introduction (JoA, JaA)'),
      inline`This Typst project serves as an ACM SIG Proceedings boilerplate specifically for ${emph(inline`02266 - UX Design Prototyping`)}
and ${emph(inline`02266 - User Experience Engineering`)}.`,
    ),
    'Make a copy of the project and edit it as needed.',
    m.lines(
      m.heading(1, 'Related work (WA, AA)'),
      inline`To cite sources and manage references, one should add them to the bibliography.bib and reference
them in the document ${ref(label('elements-of-value'))} ${ref(label('klein2013ux'))}.`,
    ),
    inline`For internal cross-referencing, one should use labels as seen in ${ref(label('sec:section4'))}.`,
    m.lines(
      inline(labelled(heading({ depth: 1 }, inline('Scoping (WA, AA)')), label('sec:section3'))),
      inline`What we decided to focus on was ...`,
    ),
    inline`If you followed a "what do we need to find out", "how (what method) should we use" and "what
was the outcome" feel free to report it this way also for the scoping / sketching / prototyping
/ ideation / problem definition phase.`,
    inline(labelled(heading({ depth: 1 }, inline('Iteration #1 (JoA, WA, AA)')), label('sec:section4'))),
    inline`${strong(inline`What`)}: In this iteration we wanted to ... our hypothesis/research question/intention
was ...`,
    inline`${strong(inline`How`)}: The methods we used were ... we built ...`,
    inline`${strong(inline`Results/outcome`)}: The results of our testing/validation ... see appendix for
details ... I`,
    inline`${strong(inline`stuff`)}: Based on our results, we learned that ... we changed ... we will therefore
...`,
    inline`Images are included as follows and referenced with ${ref(label('fig:example'))}. ${labelled([figure({ caption: inline`Change in appearance in third iteration` }, image({ width: pct(70) }, path('images/example-image.png'))), space], label('fig:example'))}`,
    inline`In addition to the snippet above, check also in ${ref(label('appendix:wireframes'))}`,
    inline(labelled(heading({ depth: 1 }, inline('Iteration #2 (JoA, WA, AA)')), label('sec:section5'))),
    inline`${strong(inline`What`)}: In this iteration we wanted to ... our hypothesis/research question/intention
was ...`,
    inline`${strong(inline`How`)}: The methods we used were ... we built ...`,
    inline`${strong(inline`Results/outcome`)}: The results of our testing/validation ... see appendix for
details ... I`,
    inline`${strong(inline`stuff`)}: Based on our results, we learned that ... we changed ... we will therefore
...`,
    m.lines(m.heading(1, 'Discussion (AA)'), inline(lorem(62))),
    m.lines(m.heading(1, 'Conclusion (WA, JA)'), inline(lorem(72))),
    m.heading(1, 'Contributions'),
    inline(bibliography(path('bibliography/bibliography.bib'))),
    inline(colbreak()),
    inline(
      appendix(
        blocks(
          inline(labelled(heading({ depth: 1 }, inline('Landing Page (final)')), label('appendix:landing-page'))),
          inline(
            labelled(heading({ depth: 1 }, inline('Lean Business Model Canvas (final)')), label('appendix:canvas')),
          ),
          inline(labelled(heading({ depth: 1 }, inline('User Story Map (final)')), label('appendix:usm'))),
          inline(labelled(heading({ depth: 1 }, inline('Wireframes (final)')), label('appendix:wireframes'))),
          inline(labelled(heading({ depth: 1 }, inline('Validation (final)')), label('appendix:validation'))),
          inline(
            labelled(heading({ depth: 1 }, inline('Landing Page (iteration #3)')), label('appendix:landing-page-3')),
          ),
          inline(
            labelled(
              heading({ depth: 1 }, inline('Lean Business Model Canvas (iteration #3)')),
              label('appendix:canvas-3'),
            ),
          ),
          inline(labelled(heading({ depth: 1 }, inline('User Story Map (iteration #3)')), label('appendix:usm-3'))),
          inline(labelled(heading({ depth: 1 }, inline('Wireframes (iteration #3)')), label('appendix:wireframes-3'))),
          inline(labelled(heading({ depth: 1 }, inline('Validation (iteration #3)')), label('appendix:validation-3'))),
          parbreak(),
        ),
      ),
    ),
  )
}
