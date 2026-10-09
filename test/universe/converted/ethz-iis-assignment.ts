// Converted from test/universe/corpus/ethz-iis-assignment.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  align,
  bibliography,
  black,
  center,
  define,
  doc,
  external,
  figure,
  gray,
  importPackage,
  inline,
  label,
  labelled,
  let_,
  m,
  path,
  pt,
  ref,
  show,
  strong,
  sym,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const timeliney = external('timeliney')
  const assignment = external('assignment')
  const assignment_with = define('with')
    .named('advisors', T.any, null)
    .named('bibliography', T.any, null)
    .named('professors', T.any, null)
    .named('projecttype', T.any, null)
    .named('student', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(assignment)
  const timeliney_milestone = define('milestone')
    .pos('arg1', T.any)
    .named('at', T.any, null)
    .named('style', T.any, null)
    .returns(T.any)
    .external(timeliney)
  const timeliney_timeline = define('timeline')
    .pos('arg1', T.any)
    .named('show-grid', T.any, null)
    .returns(T.any)
    .external(timeliney)
  const [taskStyleDecl, taskStyle] = let_('task-style', { stroke: add(pt(6), gray) })
  const [groupStyleDecl, groupStyle] = let_('group-style', { stroke: add(pt(6), black) })
  const [milestoneStyleDecl, milestoneStyle] = let_('milestone-style', { stroke: { dash: 'dashed' } })
  const ms = define('ms')
    .pos('at', T.any)
    .pos('label', T.any)
    .returns(T.any)
    .body((p) =>
      timeliney_milestone({ at: p['at'], style: milestoneStyle }, align(center, inline(strong(inline(p['label']))))),
    )
  return doc(
    importPackage('@preview/ethz-iis-assignment:1.0.0', [assignment]),
    show(
      assignment_with({
        projecttype: 'master',
        bibliography: bibliography({ style: 'ieee', full: true }, path('references.bib')),
        student: 'Student Name',
        title: 'Master Thesis Title',
        advisors: [
          { name: 'First supervisor', office: 'OAT UXX', mail: 'first.supervisor@iis.ee.ethz.ch' },
          { name: 'Second Supervisor', office: 'OAT UYY', mail: 'second.supervisor@iis.ee.ethz.ch' },
        ],
        professors: [{ name: 'Prof Dr. P. Professor', mail: 'professor@iis.ee.ethz.ch' }],
      }),
    ),
    m.heading(1, 'Introduction'),
    'This section serves to set up the context of the work, but does not include the task.',
    m.heading(1, 'Project Description'),
    inline`The core goal of the project is to ... (1 paragraph)`,
    m.heading(1, 'Milestones'),
    'The following are the milestones that we expect to achieve throughout the project:',
    m.list(
      m.item(['Milestone 1']),
      m.item(['Milestone 2']),
      m.item(m.lines('Milestone 3', m.enum(m.item(['Step 1']), m.item(['Step 2']), m.item(['Step 3'])))),
    ),
    m.heading(2, 'Stretch Goals'),
    'Should the above milestones be reached earlier than expected and you are motivated to do further work, we propose the following stretch goals to aim for:',
    m.list(m.item(['SG 1']), m.item(['SG 2']), m.item(['SG 3'])),
    m.heading(1, 'Project Realization'),
    m.heading(2, 'Time Schedule'),
    inline`The time schedule presented in ${ref(label('fig:time_plan'))} is merely a proposition; it is
primarily intended as a reference and an estimation of the time required for each required step.`,
    importPackage('@preview/timeliney:0.4.0', timeliney),
    m.lines(taskStyleDecl, groupStyleDecl, milestoneStyleDecl, ms.decl),
    inline(
      labelled(
        figure(
          { caption: inline`Proposed time schedule and investment` },
          timeliney_timeline(
            { showGrid: true },
            unsafeRaw.code<any>`{
      import timeliney: *

      headerline(group(..range(14).map(n => strong("W" + str(n + 1)))))

      taskgroup(title: [*Familiarization*], style: group-style, {
        task("Read the paper", (0, 1), style: task-style)
        task("Clone the repository", (1, 2), style: task-style)
      })

      taskgroup(title: [*Development*], style: group-style, {
        task("Implement feature", (2, 4), style: task-style)
        task("Verification", (4, 7), style: task-style)
        task("Backend trials", (7, 11), style: task-style)
        task("Measurements", (10, 13), style: task-style)
      })

      taskgroup(title: [*Finishing*], style: group-style, {
        task("Write report", (12, 13), style: task-style)
        task("Prepare presentation", (13, 14), style: task-style)
      })

      ms(2, "Milestone 1")
      ms(7, "Milestone 2")
      ms(12, "Milestone 3")
    }`,
          ),
        ),
        label('fig:time_plan'),
      ),
    ),
  )
}
