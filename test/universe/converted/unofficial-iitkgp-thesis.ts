// Converted from test/universe/corpus/unofficial-iitkgp-thesis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  align,
  blocks,
  center,
  define,
  doc,
  emph,
  external,
  figure,
  fr,
  heading,
  horizon,
  image,
  importPackage,
  inline,
  label,
  labelled,
  lorem,
  luma,
  m,
  mm,
  pagebreak,
  parbreak,
  path,
  pct,
  pt,
  raw,
  rect,
  ref,
  set,
  show,
  space,
  strong,
  table,
  text,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const iitkgpThesis = external('iitkgp-thesis')
  const iitkgpThesis_with = define('with')
    .named('abbreviations', T.any, null)
    .named('abstract', T.content, [])
    .named('acknowledgment', T.content, [])
    .named('author', T.any, null)
    .named('certificate-text', T.content, [])
    .named('date', T.any, null)
    .named('declaration-text', T.content, [])
    .named('degree', T.any, null)
    .named('department', T.any, null)
    .named('figures-outline', T.any, null)
    .named('logo', T.any, null)
    .named('report-type', T.any, null)
    .named('rollno', T.any, null)
    .named('supervisor', T.any, null)
    .named('tables-outline', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(iitkgpThesis)
  return doc(
    importPackage('@preview/unofficial-iitkgp-thesis:0.1.0', [iitkgpThesis]),
    show(
      iitkgpThesis_with({
        title: 'Your Project Title Goes Here: A Comprehensive Study and Analysis',
        author: 'Student Name',
        rollno: '21CHXXXXX',
        supervisor: 'Prof. Supervisor Name',
        department: 'Chemical Engineering',
        degree: 'Dual Degree (B.Tech. + M.Tech.)',
        reportType: 'M.Tech. Project–II (CH57004)',
        date: 'April 26, 2026',
        logo: image({ width: mm(80) }, path('Images/logo.svg')),
        certificateText: inline`${space}This is to certify that the thesis report entitled ${strong(inline`Your Project Title Goes Here: A Comprehensive Study and Analysis`)},
submitted by ${strong(inline`Student Name`)} (Roll Number: ${emph(inline`21CHXXXXX`)}), a Dual
Degree student of ${strong(inline`Chemical Engineering`)}, Indian Institute of Technology Kharagpur,
towards partial fulfilment of the requirements for the award of the Dual Degree (B.Tech. + M.Tech.),
is a record of bona fide work carried out by him under my supervision and guidance during the
Spring Semester, 2025–26.${space}`,
        declarationText: blocks(
          '(a) The work contained in this report has been done by me under the guidance of my supervisor.',
          '(b) The work has not been submitted to any other Institute for any degree or diploma.',
          '(c) I have conformed to the norms and guidelines given in the Ethical Code of Conduct of the Institute.',
          '(d) Wherever I have used materials (data, theoretical analysis, figures, and text) from other sources, I have given due credit to them by citing them in the text of the thesis and giving their details in the references. Further, I have taken permission from the copyright owners of the sources, wherever necessary.',
        ),
        abstract: blocks(
          'This is a placeholder for your abstract. The abstract should be a concise summary of your research, covering the background, methodology, key findings, and conclusions.',
          inline(lorem(120)),
          parbreak(),
        ),
        acknowledgment: blocks(
          inline`I would like to express my sincere gratitude to my supervisor, ${strong(inline`Prof. Supervisor Name`)},
for their invaluable guidance, continuous encouragement, and insightful suggestions throughout
the course of this project.`,
          inline(lorem(50)),
        ),
        figuresOutline: true,
        tablesOutline: true,
        abbreviations: [
          ['IIT', 'Indian Institute of Technology'],
          ['KGP', 'Kharagpur'],
          ['GUI', 'Graphical User Interface'],
          ['API', 'Application Programming Interface'],
          ['CFD', 'Computational Fluid Dynamics'],
        ],
      }),
    ),
    m.heading(1, 'Introduction'),
    m.lines(
      m.heading(2, 'Background'),
      inline`The introduction chapter sets the stage for your research. Here, you define the context of your
problem and why it is important to study. ${lorem(80)}`,
    ),
    m.lines(
      m.heading(2, 'Problem Statement'),
      inline`Clearly define the problem you are trying to solve. ${lorem(60)}`,
    ),
    m.lines(
      m.heading(2, 'Objectives'),
      'The primary objectives of this project are:',
      m.enum(
        m.item(['To investigate the fundamental properties of the proposed system.']),
        m.item(['To develop a computational model to simulate the behavior.']),
        m.item(['To validate the model against experimental data.']),
        m.item(['To optimize the parameters for maximum efficiency.']),
      ),
    ),
    m.heading(1, 'Literature Review'),
    m.lines(
      m.heading(2, 'Overview of Existing Methods'),
      inline`A thorough literature review discusses what has already been done in your field. ${lorem(100)}`,
    ),
    inline`As shown in previous studies, the relationship can be summarized effectively, but gaps still
remain. ${lorem(50)}`,
    m.lines(
      m.heading(2, 'Research Gap'),
      inline`Identify the gap in the current literature that your project aims to address. ${lorem(70)}`,
    ),
    m.heading(1, 'Methodology'),
    m.lines(
      m.heading(2, 'Theoretical Framework'),
      'Describe the theoretical basis of your work. This section often contains mathematical equations.',
    ),
    'The governing equation for the system can be expressed as:',
    inline(unsafeRaw.math.block`f(x) = integral_0^infinity e^(-t) t^(x-1) d t`),
    inline`Where ${unsafeRaw.math`f(x)`} represents the gamma function, and ${unsafeRaw.math`t`} is the
integration variable.`,
    m.lines(
      m.heading(2, 'Experimental Setup'),
      inline`Describe your experimental or computational setup. Below is an example of an embedded image
from the ${raw('Images')} folder.`,
    ),
    inline(
      labelled(
        [
          figure(
            { caption: inline`Schematic representation of the experimental setup and work plan used in this study.` },
            image({ width: pct(80) }, path('Images/work_plan.svg')),
          ),
          space,
        ],
        label('fig-setup'),
      ),
    ),
    inline`As seen in ${ref(label('fig-setup'))}, the setup consists of several interconnected modules.`,
    m.heading(1, 'Results and Discussion'),
    m.lines(
      m.heading(2, 'Performance Analysis'),
      inline`Discuss your findings here. Present your data using tables and graphs. ${lorem(60)}`,
    ),
    inline(
      labelled(
        [
          figure(
            { caption: inline`Summary of performance metrics across different test iterations.` },
            table(
              {
                columns: [fr(1), fr(1), fr(1), fr(1.2)],
                inset: pt(8),
                align: center,
                fill: unsafeRaw.code<any>`(_, row) => if row == 0 { luma(220) } else { white }`,
                stroke: pt(0.5),
              },
              table.header(
                inline(strong(inline`Sample ID`)),
                inline(strong(inline`Parameter A`)),
                inline(strong(inline`Parameter B`)),
                inline(strong(inline`Efficiency (%)`)),
              ),
              inline`Test-01`,
              inline`45.2`,
              inline`9.6`,
              inline`88.4`,
              inline`Test-02`,
              inline`48.1`,
              inline`9.8`,
              inline`91.2`,
              inline`Test-03`,
              inline`42.9`,
              inline`9.5`,
              inline`86.7`,
              inline(strong(inline`Average`)),
              inline(strong(inline`45.4`)),
              inline(strong(inline`9.6`)),
              inline(strong(inline`88.7`)),
            ),
          ),
          space,
        ],
        label('tab-results'),
      ),
    ),
    inline`The results detailed in ${ref(label('tab-results'))} indicate a strong correlation between Parameter
A and overall efficiency.`,
    m.lines(m.heading(2, 'Sensitivity Analysis'), inline(lorem(80))),
    inline(
      labelled(
        [
          figure(
            { caption: inline`Effect of varying parameters on the system's output.` },
            rect(
              { width: pct(70), height: pt(200), fill: luma(240), stroke: add(pt(1), luma(150)) },
              blocks(
                m.lines(
                  set(align, { alignment: add(center, horizon) }),
                  inline(text({ fill: luma(100) }, inline`Placeholder for Data Plot / Chart`)),
                ),
              ),
            ),
          ),
          space,
        ],
        label('fig-plot'),
      ),
    ),
    m.heading(1, 'Conclusion and Future Work'),
    m.lines(m.heading(2, 'Conclusion'), inline`Summarize the main findings of your thesis. ${lorem(100)}`),
    m.lines(
      m.heading(2, 'Future Work'),
      'Suggest potential avenues for future research based on your findings.',
      m.list(
        m.item(['Expanding the computational model to include multi-physics interactions.']),
        m.item(['Conducting long-term durability tests under real-world conditions.']),
        m.item(['Developing a user-friendly software tool for automated analysis.']),
      ),
    ),
    inline(pagebreak({ weak: true }), space, heading({ level: 1, numbering: null }, inline`References`)),
  )
}
