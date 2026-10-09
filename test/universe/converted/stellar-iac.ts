// Converted from test/universe/corpus/stellar-iac.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  define,
  doc,
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
  path,
  ref,
  show,
  space,
  table,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const project = external('project')
  const project_with = define('with')
    .named('abstract', T.content, [])
    .named('authors', T.any, null)
    .named('header', T.content, [])
    .named('keywords', T.any, null)
    .named('organizations', T.any, null)
    .named('paper-code', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(project)
  return doc(
    importPackage('@preview/stellar-iac:0.5.0', [project]),
    show(
      project_with({
        paperCode: 'IAC-25-A1.2.3',
        title: 'Title of the paper',
        authors: [
          {
            name: 'John A. Doe',
            email: 'john.doe@example.edu',
            affiliation: 'Northbridge University',
            corresponding: true,
          },
          { name: 'Jane B. Smith', email: 'jane.smith@example.org', affiliation: 'Western Institute of Technology' },
        ],
        organizations: [
          {
            name: 'Northbridge University',
            display:
              'Department of Computer Science, Northbridge University, 123 Academic Road, Springfield, USA 12345',
          },
          {
            name: 'Western Institute of Technology',
            display:
              'Department of Mechanical Engineering, Western Institute of Technology, 456 Research Avenue, Metropolis, USA 67890',
          },
        ],
        keywords: ['Keyword 1', 'Keyword 2', 'Keyword 3'],
        header: inline(lorem(20)),
        abstract: inline(lorem(200)),
      }),
    ),
    inline(heading({ numbering: null }, inline`Nomenclature`), space, lorem(40)),
    inline(heading({ numbering: null }, inline`Acronyms/Abbreviations`), space, lorem(40)),
    m.lines(m.heading(1, 'Introduction'), inline(lorem(40))),
    m.lines(m.heading(2, 'Subsection headings'), inline(lorem(40))),
    m.lines(m.heading(3, 'Sub-subsection headings'), inline(lorem(40))),
    inline(unsafeRaw.math.block`arrow(F)_g = - G (m times m_E) / R_E^2 arrow(i)_r = m arrow(g)_(t a)`),
    m.heading(2, 'Figure'),
    inline`You can reference figures like this ${ref(label('fig:randomized-sine-cosine'))}.`,
    inline(
      labelled(
        [
          figure(
            {
              caption: inline`Randomized variations of sine and cosine waveforms over time. The blue curve represents a sine
wave with random noise added, while the green curve represents a similarly modified cosine wave.`,
            },
            image(path('img/randomized-sine-cosine.png')),
          ),
          space,
        ],
        label('fig:randomized-sine-cosine'),
      ),
    ),
    m.heading(2, 'Table'),
    inline`You can reference tables like this ${ref(label('table:sample-data'))}.`,
    inline(
      labelled(
        [
          figure(
            {
              caption: inline`Sample data of various parameters for ${unsafeRaw.math`alpha`}, ${unsafeRaw.math`beta`}, ${unsafeRaw.math`gamma`},
and ${unsafeRaw.math`delta`}`,
            },
            table(
              { columns: 5 },
              table.header(
                inline(),
                inline(unsafeRaw.math`alpha`),
                inline(unsafeRaw.math`beta`),
                inline(unsafeRaw.math`gamma`),
                inline(unsafeRaw.math`delta`),
              ),
              inline`Parameter A`,
              inline`3.21`,
              inline`1.57`,
              inline`0.89`,
              inline`4.76`,
              inline`Parameter B`,
              inline`0.123`,
              inline`0.456`,
              inline`0.789`,
              inline`0.234`,
            ),
          ),
          space,
        ],
        label('table:sample-data'),
      ),
    ),
    m.heading(1, 'Cite the references'),
    inline`Indicate references like this ${ref(label('doe2023techniques'))}. Or like this ${ref(label('doe2023techniques'))}
${ref(label('johnson2019renewable'))}.`,
    m.lines(m.heading(1, 'Results'), inline(lorem(40))),
    m.lines(m.heading(1, 'Discussion'), inline(lorem(40))),
    m.lines(m.heading(1, 'Conclusion'), inline(lorem(20))),
    inline(heading({ numbering: null }, inline`Acknowledgements`), space, lorem(20)),
    inline(heading({ numbering: null }, inline`Appendix A. Title of appendix`), space, lorem(20)),
    inline(heading({ numbering: null }, inline`Appendix B. Title of appendix`)),
    inline(
      bibliography(
        { title: 'References', style: 'american-institute-of-aeronautics-and-astronautics' },
        path('references.bib'),
      ),
    ),
  )
}
