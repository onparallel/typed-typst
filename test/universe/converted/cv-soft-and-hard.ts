// Converted from test/universe/corpus/cv-soft-and-hard.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  align,
  auto,
  bibliography,
  blocks,
  center,
  contentBlock,
  define,
  doc,
  document,
  emph,
  external,
  fr,
  importPackage,
  inline,
  label,
  left,
  linebreak,
  link,
  m,
  pagebreak,
  path,
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
} from '../../../src/index.ts'

export default () => {
  const styling = external('styling')
  const section = define('section').pos('arg1', T.any).named('note', T.any, null).returns(T.any).external()
  const entry = define('entry').pos('arg1', T.content).pos('arg2', T.content).returns(T.any).external()
  const subsection = external('subsection')
  const rust = external('rust')
  const cpp = external('cpp')
  const python = external('python')
  const typstLogo = external('typst-logo')
  const hugo = external('hugo')
  const typescript = external('typescript')
  return doc(
    importPackage('@preview/cv-soft-and-hard:0.1.0', [
      styling,
      section,
      entry,
      subsection,
      rust,
      cpp,
      python,
      typstLogo,
      hugo,
      typescript,
    ]),
    m.lines(set(document, { author: 'Jonas Pleyer', title: 'CV Jonas Pleyer' }), show(styling)),
    inline(
      align(
        center,
        blocks(
          m.lines(
            m.heading(1, 'Jonas Pleyer - Curriculum Vitae', linebreak()),
            inline`Stefan-Meier Str. 30, 79104 Freiburg${linebreak()} ${link('https://jonas.pleyer.org', 'jonas.pleyer.org')}
| ${link('https://www.github.com/jonaspleyer', 'github.com/jonaspleyer')} | ${link('mailto:jonas.dev@pleyer.org', 'jonas.dev@pleyer.org')}
| ${link('tel:+491785430064', '+49 178 5430064')}`,
          ),
        ),
      ),
    ),
    inline`${section('Profile')} Software engineer and computational scientist with expertise in Rust and
Python. I build high-quality software for scientific computing and contribute actively to the
Rust open-source ecosystem. I enjoy working in teams that emphasize functionality and reliability
and use excellent tooling.`,
    inline(
      section('Experience'),
      space,
      entry(
        blocks(
          m.lines(
            inline`${strong(inline`Doctoral Candidate`)} (${emph(inline`University of Freiburg`)})`,
            m.list(
              m.item(['Study of cellular systems via computational models']),
              m.item(['Developed and maintained agent-based simulation framework', space, raw('cellular_raza')]),
              m.item(['Contributed to Open Source projects']),
              m.item(['Published peer-reviewed software and scientific papers and reviewed papers']),
            ),
          ),
        ),
        inline(emph(inline`since 08/2021`)),
      ),
    ),
    inline(
      entry(
        blocks(
          m.lines(
            inline`${strong(inline`Research Asistant - Tutor`)} (${emph(inline`University of Freiburg`)})`,
            m.list(m.item(['Weekly tutorials in Physics, Mathematics and Systems Biology, exams, lectures'])),
          ),
        ),
        inline(emph(inline`since 04/2020`)),
      ),
    ),
    inline(
      entry(
        blocks(
          m.lines(
            inline`${strong(inline`Supervisor iGEM`)} (${emph(inline`CIBBS, Freiburg`)})`,
            m.list(m.item(['Mentored students in scientific modeling, website and science communication'])),
          ),
        ),
        inline(emph(inline`05/2023 - 09/2024`)),
      ),
    ),
    inline(
      entry(
        blocks(
          m.lines(
            inline`${strong(inline`Research Assistant`)} (${emph(inline`Fraunhofer Institute ISE, Freiburg`)})`,
            m.list(m.item(['Uncertainty estimation for heat pumps, eco-label validation and assignment'])),
          ),
        ),
        inline(emph(inline`02/2020 - 04/2021`)),
      ),
    ),
    inline(
      entry(
        blocks(
          m.lines(
            inline`${strong(inline`Internship`)} (${emph(inline`SAP, Walldorf`)})`,
            m.list(m.item(['Natural Language Processing, Data Analysis'])),
          ),
        ),
        inline(emph(inline`08/2017 - 10/2017`)),
      ),
    ),
    inline(
      section('Education'),
      space,
      entry(
        inline`${space}${strong(inline`University of Freiburg`)}${linebreak()} Doctoral Candidate (Computational
Systems Biology)${linebreak()} MSc. Physics (Theoretical Physics & Mathematics),${linebreak()}
${text({ size: pt(9) }, inline`Thesis: "${emph(inline`Zero Values of the TOV Equation`)}" (Prof. Nadine Große)`)}${space}`,
        inline(linebreak(), space, emph(inline`since 08/2021${linebreak()} ${linebreak()} 04/2020-07/2021`), space),
      ),
      space,
      entry(
        inline`${space}${strong(inline`Heidelberg University`)}${linebreak()} MSc. Physics${linebreak()} Bsc.
Physics${linebreak()} ${text(
          { size: pt(9) },
          inline`Thesis: "${emph(inline`About Topological Tunneling Configurations, the Anharmonic Oscillator${linebreak()} and the
Functional Renormalization Group`)}" (Prof. Jan Pawlowski)`,
        )}${space}`,
        inline(linebreak(), space, emph(inline`04/2018-04/2020${linebreak()} 09/2013-03/2018`), space),
      ),
      space,
      entry(
        inline`${strong(inline`Ottheinrich-Gymnasium, Wiesloch`)} (High School)`,
        inline(emph(inline`09/2005-06/2013`)),
      ),
    ),
    inline(
      section({ note: 'In descending order of skill level' }, 'Skills'),
      space,
      table(
        {
          align: left,
          columns: [auto, fr(1)],
          stroke: null,
          rowGutter: pt(0),
          columnGutter: pt(5),
          inset: { left: pt(0), top: pt(2) },
        },
        text({ weight: 600 }, 'Programming Languages'),
        inline`Rust, Python, C++, C, Javascript, Bash`,
        text({ weight: 600 }, 'Development Tools'),
        inline`Git, GitHub Actions, Linux, Make, CMake, GitLab CI/CD`,
        text({ weight: 600 }, 'Documentation & Publishing'),
        inline`Hugo, Typst, LaTeX, Sphinx, HTML, CSS`,
      ),
    ),
    inline(pagebreak()),
    inline(
      section({ note: 'In descending order of project size' }, 'Selected Projects'),
      space,
      entry(
        blocks(
          m.lines(
            inline`${strong(inline(link('https://cellular-raza.com', raw('cellular_raza'))))} - ${emph(inline`Agent-based Simulation Framework`)}
${rust} ${python} ${hugo}${linebreak()}`,
            m.list(
              m.item(['Written with generics and custom templates for performance and flexibility']),
              m.item([
                'Dedicated documentation, examples & guides (',
                link('https://cellular-raza.com', 'cellular-raza.com'),
                ')',
              ]),
              m.item(['Peer-reviewed and published', space, ref(label('Pleyer2025'))]),
            ),
          ),
        ),
        inline(emph(inline`08/2022`)),
      ),
    ),
    inline(
      entry(
        blocks(
          m.lines(
            inline`${strong(inline(link('https://github.com/jonaspleyer/cr_mech_coli', raw('cr_mech_coli'))))}
- ${emph(inline`Modeling of Rod-shaped Bacteria`)} ${rust} ${python}${linebreak()}`,
            m.list(
              m.item([
                'Uses',
                space,
                link('https://cellular-raza.com', 'cellular_raza'),
                space,
                link('https://docs.rs/ndarray/latest/ndarray/', 'ndarray'),
                space,
                link('https://docs.rs/nalgebra/latest/nalgebra/', 'nalgebra'),
                space,
                'in Rust backend,',
                space,
                link('https://numpy.org/', 'numpy'),
                ',',
                space,
                link('https://scipy.org/', 'scipy'),
                ',',
                space,
                link('https://matplotlib.org/', 'matplotlib'),
                ',',
                space,
                link('https://docs.pyvista.org/index.html', 'pyvista'),
                space,
                'for analysis and visualization and',
                space,
                link('https://pyo3.rs', 'pyo3'),
                space,
                'with',
                space,
                link('https://github.com/PyO3/maturin', 'maturin'),
                space,
                'to generate Python bindings',
              ]),
            ),
          ),
        ),
        inline(emph(inline`10/2024`)),
      ),
    ),
    inline(
      entry(
        blocks(
          m.lines(
            inline`${strong(inline(link('https://github.com/jonaspleyer/peace-of-posters', raw('peace-of-posters'))))}
- ${emph(inline`Create Scientific Posters in Typst`)} ${typstLogo} ${hugo}${linebreak()}`,
            m.list(
              m.item([
                '81 stars, 9 contributors at',
                space,
                link('https://github.com/jonaspleyer/peace-of-posters', 'github.com/jonaspleyer/peace-of-posters'),
              ]),
            ),
          ),
        ),
        inline(emph(inline`10/2023`)),
      ),
    ),
    inline(
      entry(
        blocks(
          m.lines(
            inline`${strong(inline(link('https://github.com/jonaspleyer/approx-derive', raw('approx-derive'))))}
- ${emph(inline`Derive macros for the approx crate`)} ${rust}`,
            m.list(
              m.item([
                unsafeRaw.math`approx 1000`,
                space,
                'weekly downloads at',
                space,
                link('https://crates.io/crates/approx-derive', 'crates.io/crates/approx-derive'),
              ]),
            ),
          ),
        ),
        inline(space, emph(inline`05/2024`), space),
      ),
    ),
    inline(
      entry(
        blocks(
          m.lines(
            inline`${strong(inline(link('https://github.com/jonaspleyer/crate2bib', raw('crate2bib'))))} - ${emph(inline`BibTeX Generator for Rust crates`)}
${rust} ${python}${linebreak()}`,
            m.list(
              m.item([
                'Rust library, CLI tool, webapp (',
                link('https://jonaspleyer.github.io/crate2bib/', 'jonaspleyer.github.io/crate2bib/'),
                ') & Python package',
              ]),
              m.item([
                'Uses',
                space,
                raw('async'),
                space,
                'methods to query',
                space,
                link('https://crates.io', 'crates.io'),
                space,
                'and',
                space,
                link('https://github.com/', 'github.com'),
                ',',
                space,
                link('https://webassembly.org/', 'Wasm'),
                space,
                'with',
                space,
                link('https://dioxuslabs.com', 'dioxus'),
                space,
                'to create the webapp and',
                space,
                link('https://pyo3.rs', 'pyo3'),
                space,
                'with',
                space,
                link('https://github.com/PyO3/maturin', 'maturin'),
                space,
                'to create Python bindings.',
              ]),
            ),
          ),
        ),
        inline(emph(inline`02/2025`)),
      ),
    ),
    inline(
      entry(
        blocks(
          m.lines(
            inline`${strong(inline(link('https://github.com/jonaspleyer/vtk-rs', raw('vtk-rs'))))} - ${emph(inline`Rust Bindings for VTK`)}
${rust} ${cpp}${linebreak()}`,
            m.list(
              m.item([
                'Goal: Rust bindings for Visualization Toolkit (VTK)',
                space,
                raw('C++'),
                space,
                'library (in early development)',
              ]),
              m.item([
                'Uses',
                space,
                link('https://cmake.org', raw('cmake')),
                ',',
                space,
                link('https://cxx.rs', raw('cxxbridge')),
                space,
                'and',
                space,
                link('https://github.com/dgobbi/WrapVTK', raw('WrapVTK')),
                space,
                'for automatic generation of bindings',
              ]),
            ),
          ),
        ),
        inline(emph(inline`05/2025`)),
      ),
    ),
    inline(
      section({ note: 'In chronological order' }, 'Publications'),
      space,
      contentBlock(
        blocks(
          m.lines(
            set(text, { size: pt(10) }),
            inline(
              bibliography({ title: null, style: path('chicago-author-date.csl'), full: true }, path('citations.bib')),
            ),
          ),
        ),
      ),
    ),
    inline(pagebreak()),
    inline(
      section('Further Commitment'),
      space,
      entry(
        inline`${space}${strong(inline`Badminton`)}${linebreak()} Trainer license level B+C${linebreak()} FT
Freiburg 1844 honorary Trainer of Children and Adults${linebreak()} TSG Wiesloch honorary Trainer
of Children and Adults${space}`,
        inline(
          space,
          linebreak(),
          space,
          emph(inline`2018/2019`),
          linebreak(),
          space,
          emph(inline`since 01/2020`),
          linebreak(),
          space,
          emph(inline`2016 - 2019`),
          space,
        ),
      ),
    ),
    inline(
      entry(
        blocks(
          m.lines(
            inline(strong(inline`KjG Wiesloch`), linebreak()),
            m.list(
              m.item(['Honorary member for two week camp in hometown']),
              m.item(['Approx. 90 Kids from age 6 to 17 and 30 volunteers']),
              m.item(['Camp director from 2020 to 2021.']),
            ),
          ),
        ),
        inline(space, emph(inline`10/2011 - 01/2024`), linebreak(), space),
      ),
    ),
    inline(
      entry(
        inline`${space}${strong(inline`FIRST LEGO League (FLL)`)}${linebreak()} 7th in Germany${linebreak()}
3rd in Germany, 8th in Europe${space}`,
        inline(
          space,
          emph(inline`2008 - 2011`),
          linebreak(),
          space,
          emph(inline`2011`),
          linebreak(),
          space,
          emph(inline`2010`),
          space,
        ),
      ),
    ),
  )
}
