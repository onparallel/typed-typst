// Converted from test/universe/corpus/luminar-cv.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  align,
  blocks,
  datetime,
  define,
  doc,
  emph,
  external,
  importPackage,
  inline,
  luma,
  pagebreak,
  pt,
  rgb,
  right,
  show,
  space,
  sym,
  text,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const cv = external('cv')
  const section = define('section').pos('arg1', T.content).named('title', T.content, []).returns(T.any).external()
  const entry = define('entry')
    .pos('arg1', T.content)
    .named('date', T.content, [])
    .named('subtitle', T.content, [])
    .named('title', T.content, [])
    .returns(T.any)
    .external()
  const bodyLink = define('body-link').pos('arg1', T.any).pos('arg2', T.content).returns(T.any).external()
  const publication = define('publication')
    .named('authors', T.content, [])
    .named('doi', T.any, null)
    .named('journal', T.content, [])
    .named('note', T.content, [])
    .named('title', T.content, [])
    .named('year', T.content, [])
    .returns(T.any)
    .external()
  const skill = define('skill').pos('arg1', T.content).named('highlight', T.any, null).returns(T.any).external()
  const languages = define('languages').pos('arg1', T.any).returns(T.any).external()
  const cv_with = define('with')
    .named('bio', T.content, [])
    .named('contact', T.any, null)
    .named('link-color', T.any, null)
    .named('name', T.content, [])
    .named('page-numbering', T.any, null)
    .named('positions', T.any, null)
    .named('skill-highlight-color', T.any, null)
    .returns(T.any)
    .external(cv)
  return doc(
    importPackage('@preview/luminar-cv:0.1.0', [cv, section, entry, bodyLink, publication, skill, languages]),
    show(
      cv_with({
        name: inline`John Doe`,
        positions: [inline`MSc Aerospace Engineering`, inline`Research Assistant`, inline`AIAA Student Member`],
        contact: {
          phone: '+41 79 123 45 67',
          email: 'john.doe@unihelios.ch',
          website: 'johndoe.dev',
          linkedin: 'johndoe',
          github: 'johndoe',
          location: 'Bern, CH',
        },
        bio: inline`Aerospace Engineering graduate student at University of Helios, passionate about computational
fluid dynamics and sustainable aviation.`,
        pageNumbering: true,
        skillHighlightColor: rgb('#135b8f'),
        linkColor: rgb('#135b8f'),
      }),
    ),
    inline(
      section(
        { title: inline`Education` },
        blocks(
          inline(
            entry(
              {
                title: inline`University of Helios — MSc Aerospace Engineering`,
                subtitle: inline`Focus: Computational Fluid Dynamics · GPA 5.8 / 6.0`,
                date: inline`2023 -- present`,
              },
              inline(),
            ),
          ),
          inline(
            entry(
              {
                title: inline`Polytechnic Institute of Varda — BSc Mechanical Engineering`,
                subtitle: inline`Focus: Thermodynamics and Fluid Mechanics · GPA 1.2 (German grading system)`,
                date: inline`2019 -- 2023`,
              },
              inline`${space}Thesis: ${emph(inline`Numerical Simulation of Turbulent Flow over a NACA 0012 Airfoil`)}${space}`,
            ),
          ),
          inline(
            entry(
              { title: inline`Gymnasium Solaris — Abitur`, date: inline`2019` },
              inline`${space}Final grade: 1.0 · Valedictorian · Awarded distinction in Mathematics and Physics${space}`,
            ),
          ),
        ),
      ),
    ),
    inline(
      section(
        { title: inline`Experience` },
        blocks(
          inline(
            entry(
              {
                title: inline`University of Helios — Research Assistant`,
                subtitle: inline`Institute of Fluid Dynamics`,
                date: inline`2024 -- present`,
              },
              inline`${space}Supporting research on high-speed compressible flows in rotating detonation engines.
Developing CFD simulation pipelines in Python and OpenFOAM. Assisting with experimental test
campaigns and data analysis.${space}`,
            ),
          ),
          inline(
            entry(
              {
                title: inline`Aerovaunt AG — Engineering Intern`,
                subtitle: inline`Aerodynamics Department, Bern`,
                date: inline`Summer 2022`,
              },
              inline`${space}Contributed to aerodynamic shape optimisation workflows using simulation tools and MATLAB.
Automated post-processing of simulation results, reducing analysis time by 40%.${space}`,
            ),
          ),
          inline(
            entry(
              {
                title: inline`Polytechnic Institute of Varda — Teaching Assistant`,
                subtitle: inline`Thermodynamics I and II`,
                date: inline`2021 -- 2023`,
              },
              inline`${space}Guided undergraduate students through course material and weekly exercise sessions for
two consecutive semesters.${space}`,
            ),
          ),
        ),
      ),
    ),
    inline(
      section(
        { title: inline`Projects` },
        blocks(
          inline(
            entry(
              {
                title: inline`Autonomous UAV for Search and Rescue`,
                subtitle: inline`Student project — Python, ROS2, Fusion 360`,
                date: inline`2023`,
              },
              inline`${space}Designed and built a fixed-wing UAV capable of autonomous waypoint navigation. Implemented
a custom flight controller in Python using sensor fusion and PID control. Achieved 45-minute
endurance in field tests. ${bodyLink('https://github.com/johndoe/sar-uav', inline`github.com/johndoe/sar-uav`)}${space}`,
            ),
          ),
          inline(
            entry(
              {
                title: inline`CFD Surrogate Model for Airfoil Optimisation`,
                subtitle: inline`Research project — PyTorch, OpenFOAM`,
                date: inline`2024`,
              },
              inline`${space}Trained a neural network surrogate model to predict lift and drag coefficients from
airfoil geometry parameters, achieving 98% accuracy at 1000${unsafeRaw.math`times`} speedup
over full CFD simulations.${space}`,
            ),
          ),
        ),
      ),
    ),
    inline(
      section(
        { title: inline`Awards & Scholarships` },
        blocks(
          inline(
            entry(
              {
                title: inline`Helix Foundation Scholarship`,
                subtitle: inline`Awarded to the top 1% of engineering students nationwide`,
                date: inline`2023 -- present`,
              },
              inline(),
            ),
          ),
          inline(
            entry(
              {
                title: inline`Varda Student Paper Competition — 1st place`,
                subtitle: inline`Polytechnic Institute of Varda Annual Research Awards`,
                date: inline`2023`,
              },
              inline(),
            ),
          ),
          inline(
            entry(
              {
                title: inline`Solaris Physics Prize`,
                subtitle: inline`Awarded by Gymnasium Solaris for outstanding performance in Physics`,
                date: inline`2019`,
              },
              inline(),
            ),
          ),
        ),
      ),
    ),
    inline(pagebreak()),
    inline(
      section(
        { title: inline`Publications` },
        blocks(
          inline(
            publication({
              title: inline`Surrogate Modeling for Transonic Airfoil Optimisation Using Deep Neural Networks`,
              authors: inline`J. Doe, M. Mustermann, A. Smith`,
              journal: inline`Journal of Computational Aerodynamics`,
              year: inline`2024`,
              doi: '10.0000/example',
              note: inline`peer-reviewed`,
            }),
          ),
          inline(
            publication({
              title: inline`Numerical Investigation of Turbulent Boundary Layer Separation on Swept Wings`,
              authors: inline`J. Doe, M. Mustermann`,
              journal: inline`International Journal of Fluid Engineering`,
              year: inline`2023`,
              note: inline`under review`,
            }),
          ),
        ),
      ),
    ),
    inline(
      section(
        { title: inline`Skills` },
        inline(
          space,
          skill({ highlight: true }, inline`Python`),
          space,
          skill({ highlight: true }, inline`C++`),
          space,
          skill({ highlight: true }, inline`OpenFOAM`),
          space,
          skill({ highlight: true }, inline`Ansys Fluent`),
          space,
          skill(inline`PyTorch`),
          space,
          skill(inline`MATLAB`),
          space,
          skill(inline`ROS2`),
          space,
          skill(inline`Fusion 360`),
          space,
          skill(inline`Siemens NX`),
          space,
          skill(inline`LaTeX`),
          space,
          skill(inline`Typst`),
          space,
          skill(inline`Git`),
          space,
        ),
      ),
    ),
    inline(
      section(
        { title: inline`Languages` },
        inline(
          space,
          languages([
            { name: inline`English`, level: inline`native` },
            { name: inline`German`, level: inline`C2` },
            { name: inline`Spanish`, level: inline`B2` },
            { name: inline`French`, level: inline`A2` },
          ]),
          space,
        ),
      ),
    ),
    inline(
      align(
        right,
        inline(
          space,
          text(
            { size: pt(9), fill: luma(100) },
            inline(space, emph(inline`Bern, ${datetime.today().display('[month repr:long] [year]')}`), space),
          ),
          space,
        ),
      ),
    ),
  )
}
