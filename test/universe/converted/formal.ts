// Converted from test/universe/corpus/formal.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  define,
  doc,
  em,
  emph,
  external,
  importPackage,
  inline,
  link,
  m,
  show,
  smartquote,
  space,
  sym,
} from '../../../src/index.ts'

export default () => {
  const cvItem = define('cv-item')
    .named('dates', T.content, [])
    .named('location', T.content, [])
    .named('organization', T.content, [])
    .named('organization-note', T.content, [])
    .named('title', T.content, [])
    .named('title-note', T.content, [])
    .returns(T.any)
    .external()
  const formalCv = external('formal-cv')
  const keywordGrid = define('keyword-grid')
    .named('Math', T.any, null)
    .named('Music', T.any, null)
    .named('Other', T.any, null)
    .named('Physics', T.any, null)
    .named('column-gutter', T.any, null)
    .named('n-rows', T.any, null)
    .returns(T.any)
    .external()
  const label_2 = define('label')
    .pos('arg1', T.any)
    .named('dest', T.any, null)
    .named('icon-name', T.any, null)
    .returns(T.any)
    .external()
  const small = define('small').pos('arg1', T.content).returns(T.any).external()
  const summary = define('summary').pos('arg1', T.content).returns(T.any).external()
  const formalCv_with = define('with')
    .named('contacts', T.any, null)
    .named('links', T.any, null)
    .named('location', T.content, [])
    .named('name', T.content, [])
    .named('prefix', T.content, [])
    .named('title', T.content, [])
    .returns(T.any)
    .external(formalCv)
  return doc(
    importPackage('@preview/formal:0.2.0', [cvItem, formalCv, keywordGrid, label_2, small, summary]),
    show(
      formalCv_with({
        name: inline`Albert Einstein`,
        prefix: inline`Dr.`,
        title: inline`Theoretical Physicist. Nobel Laureate`,
        location: inline`Princeton, New Jersey, USA`,
        contacts: [
          label_2({ dest: 'mailto:noreply@einstein.com', iconName: 'envelope' }, 'noreply@einstein.com'),
          label_2({ dest: 'tel:+1-999-XXX-YYYY', iconName: 'phone' }, '+1-999-XXX-YYYY'),
        ],
        links: [
          label_2({ dest: 'https://einstein.com', iconName: 'globe' }, 'Web'),
          link('https://en.wikipedia.org/wiki/Albert_Einstein', 'wikipedia.org'),
          link('https://www.nobelprize.org/prizes/physics/1921/einstein', 'nobelprize.org'),
        ],
      }),
    ),
    inline(
      summary(inline`${space}Theoretical physicist with revolutionary contributions to modern physics spanning over
5 decades. Developed the theory of relativity, explained the photoelectric effect, and made
fundamental contributions to quantum mechanics and statistical mechanics. Nobel Prize laureate
and Fellow of the Royal Society. Dedicated advocate for civil rights, pacifism, and scientific
internationalism.${space}`),
    ),
    m.heading(2, 'Expertise'),
    inline(
      keywordGrid({
        nRows: 5,
        columnGutter: em(0.5),
        Physics: [
          inline`Relativity`,
          inline`Quantum Mechanics`,
          inline`Statistical Mechanics`,
          inline`Cosmology`,
          inline`Field Theory`,
        ],
        Math: [
          inline`Tensors`,
          inline`Differential Geometry`,
          inline`Complex Analysis`,
          inline`Probability Theory`,
          inline`Group Theory`,
        ],
        Music: [inline`Violin`, inline`Piano`, inline`Chamber Music`, inline`Classical Music`],
        Other: [
          inline`Scientific Method`,
          inline`Determinism`,
          inline`Causality`,
          inline`Pacifism`,
          inline`Civil Rights`,
        ],
      }),
    ),
    m.heading(2, 'Experience'),
    m.list(
      { tight: false },
      m.item(
        m.lines(
          inline(
            cvItem({
              title: inline`Professor`,
              organization: inline`Institute for Advanced Study`,
              organizationNote: inline`School of Mathematics`,
              dates: inline`Oct '33 -- Apr '55`,
              location: inline`Princeton, NJ`,
            }),
          ),
          m.list(
            m.item([
              'Developed unified field theory attempting to unify electromagnetic and gravitational forces, laying groundwork for modern theories of everything.',
            ]),
            m.item([
              'Continued work on quantum mechanics foundations, famously challenging quantum theory with the EPR paradox and',
              space,
              smartquote({ double: true }),
              'God does not play dice',
              smartquote({ double: true }),
              space,
              'philosophy.',
            ]),
            m.item([
              'Collaborated with colleagues on cosmological models and contributed to understanding of gravitational phenomena.',
            ]),
          ),
        ),
      ),
      m.item(
        m.lines(
          inline(
            cvItem({
              title: inline`Professor of Theoretical Physics`,
              organization: inline`Princeton University`,
              dates: inline`Oct '33 -- Oct '33`,
              location: inline`Princeton, NJ`,
            }),
          ),
          m.list(m.item(['Brief appointment before joining Institute for Advanced Study.'])),
        ),
      ),
      m.item(
        m.lines(
          inline(
            cvItem({
              title: inline`Professor`,
              organization: inline`Kaiser Wilhelm Institute`,
              organizationNote: inline`Director of Physics`,
              dates: inline`Apr '14 -- Dec '32`,
              location: inline`Berlin, Germany`,
            }),
          ),
          m.list(
            m.item([
              'Formulated general theory of relativity (1915), revolutionizing understanding of gravity, space, and time.',
            ]),
            m.item([
              'Derived field equations describing curvature of spacetime, predicting phenomena later confirmed: gravitational lensing, Mercury',
              smartquote({ double: false }),
              's perihelion precession, gravitational redshift.',
            ]),
            m.item([
              'Received Nobel Prize in Physics (1921) for explanation of photoelectric effect and contributions to theoretical physics.',
            ]),
            m.item([
              'Made contributions to quantum theory including photon concept, wave-particle duality, and Bose-Einstein statistics.',
            ]),
            m.item([
              'Developed cosmological models with cosmological constant, laying foundation for modern Big Bang theory.',
            ]),
          ),
        ),
      ),
      m.item(
        m.lines(
          inline(
            cvItem({
              title: inline`Professor of Theoretical Physics`,
              organization: inline`ETH Zurich`,
              dates: inline`Oct '12 -- Apr '14`,
              location: inline`Zurich, Switzerland`,
            }),
          ),
          m.list(
            m.item(['Continued development of general relativity theory while teaching advanced physics courses.']),
            m.item([
              'Conducted research on specific heats of solids and developed Einstein model for lattice vibrations.',
            ]),
            m.item([
              'Established international reputation leading to invitation to join Prussian Academy of Sciences in Berlin.',
            ]),
          ),
        ),
      ),
      m.item(
        m.lines(
          inline(
            cvItem({
              title: inline`Associate Professor`,
              organization: inline`University of Prague`,
              dates: inline`Apr '11 -- Oct '12`,
              location: inline`Prague, Austria-Hungary`,
            }),
          ),
          m.list(
            m.item([
              'Further developed special relativity applications and began formulating general relativity principles.',
            ]),
            m.item(['Conducted research on statistical mechanics and thermodynamics of radiation.']),
          ),
        ),
      ),
      m.item(
        m.lines(
          inline(
            cvItem({
              title: inline`Assistant Professor`,
              organization: inline`University of Zurich`,
              dates: inline`May '09 -- Apr '11`,
              location: inline`Zurich, Switzerland`,
            }),
          ),
          m.list(
            m.item(['First academic appointment while continuing work at Swiss Patent Office.']),
            m.item(['Published papers on quantum theory of radiation and specific heats.']),
          ),
        ),
      ),
    ),
    m.heading(2, 'Education'),
    m.list(
      { tight: false },
      m.item([
        cvItem({
          title: inline`Physics`,
          titleNote: inline`PhD`,
          organization: inline`University of Zurich`,
          dates: inline`Jan '06`,
        }),
        space,
        small(inline`${emph(inline`Dissertation`)}: A New Determination of Molecular Dimensions`),
      ]),
      m.item([
        cvItem({
          title: inline`Mathematics and Physics`,
          titleNote: inline`Diploma`,
          organization: inline`Swiss Federal Polytechnic`,
          organizationNote: inline`ETH Zurich`,
          dates: inline`Jul '00`,
        }),
        space,
        small(inline`${emph(inline`Thesis`)}: Consequences of Capillarity Phenomena`),
      ]),
    ),
  )
}
