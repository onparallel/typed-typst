// Converted from test/universe/corpus/gloat.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  blocks,
  datetime,
  define,
  doc,
  external,
  importPackage,
  inline,
  link,
  m,
  show,
  strong,
} from '../../../src/index.ts'

export default () => {
  const cv = external('cv')
  const edu = define('edu')
    .named('date', T.any, null)
    .named('degrees', T.any, null)
    .named('gpa', T.any, null)
    .named('institution', T.any, null)
    .named('location', T.any, null)
    .returns(T.any)
    .external()
  const exp = define('exp')
    .named('details', T.content, [])
    .named('end', T.any, null)
    .named('location', T.any, null)
    .named('org', T.any, null)
    .named('role', T.any, null)
    .named('start', T.any, null)
    .returns(T.any)
    .external()
  const award = define('award')
    .named('date', T.any, null)
    .named('from', T.any, null)
    .named('name', T.any, null)
    .returns(T.any)
    .external()
  const paper = define('paper')
    .named('authors', T.any, null)
    .named('journal', T.any, null)
    .named('pages', T.any, null)
    .named('published', T.any, null)
    .named('title', T.any, null)
    .named('vol', T.any, null)
    .returns(T.any)
    .external()
  const cv_with = define('with')
    .named('address', T.any, null)
    .named('author', T.any, null)
    .named('contacts', T.any, null)
    .returns(T.any)
    .external(cv)
  return doc(
    importPackage('@preview/gloat:0.1.0', [cv, edu, exp, award, paper]),
    show(
      cv_with({
        author: 'Jacky Cao',
        address: 'Chicago IL, US',
        contacts: [
          inline(link('mailto:email@domain', inline`jcao@uchicago.edu`)),
          inline(link('your-website-url', inline`jc.ao`)),
          inline(link('https://github.com/user', inline`gh/jcao`)),
          inline(link('https://www.linkedin.com/in/user/', inline`in/jcao`)),
        ],
      }),
    ),
    m.heading(1, 'Education'),
    inline(
      edu({
        institution: 'Harvard University',
        location: 'Cambridge MA, US',
        gpa: '3.97',
        degrees: [inline`Ph.D. Physics`],
        date: datetime({ year: 2023, month: 4, day: 28 }),
      }),
    ),
    inline(
      edu({
        institution: 'Wellesley College',
        location: 'Wellesley MA, US',
        gpa: '4.00',
        degrees: [inline`B.A. Psychology & Physics`],
        date: datetime({ year: 2017, month: 5, day: 14 }),
      }),
    ),
    m.heading(1, 'Research Experience'),
    inline(
      exp({
        role: 'Postdoctoral Researcher',
        org: 'University of Chicago, Kadanoff Center for Theoretical Physics - Lab of Léon Foucalt',
        location: 'Chicago IL, US',
        start: datetime({ year: 2023, month: 10, day: 11 }),
        end: 'Present',
        details: blocks(
          m.list(
            m.item(['Led and mentored a subgroup of 3 graduate students in quantum field theory.']),
            m.item(['Organized weekly meetings and curated papers for the Kadanoff Center journal club.']),
            m.item(['Developed an original research project to deconvolute the de Broglie waveforms of electrons.']),
          ),
        ),
      }),
    ),
    inline(
      exp({
        role: 'Research Assistant',
        org: 'Harvard University, Department of Physics - Lab of Joseph Fourier Lab',
        location: 'Cambridge MA, US',
        start: datetime({ year: 2017, month: 10, day: 11 }),
        end: datetime({ year: 2023, month: 5, day: 20 }),
        details: blocks(
          m.list(
            m.item([
              'Developed a signal processing pipeline to analyze ECG data from thousands of patients in minutes.',
            ]),
            m.item([
              'Translated three signal processing tools from MATLAB to python, increasing processing speed tenfold.',
            ]),
            m.item([
              'Developed an image processing package for deconvoluting time-varying fluorescence microscopy signals.',
            ]),
          ),
        ),
      }),
    ),
    inline(
      exp({
        role: 'Research Intern',
        org: 'Wellesley College, Department of Physics - Lab of John Muradeli',
        location: 'Wellesley MA, US',
        start: datetime({ year: 2014, month: 9, day: 15 }),
        end: datetime({ year: 2017, month: 5, day: 4 }),
        details: blocks(
          m.list(
            m.item([
              'Developed an implementation of the synchrosqueeze algorithm for gpu-accelerated signal processing.',
            ]),
            m.item(['Created a discrete signal processing pipeline in python to identify abrupt changes in audio.']),
            m.item(['Presented weekly progress updates at lab meetings.']),
          ),
        ),
      }),
    ),
    m.heading(1, 'Awards'),
    inline(
      award({
        date: datetime({ year: 2023, month: 12, day: 5 }),
        name: 'MPS-Ascend Postdoctoral Research Fellowship',
        from: 'National Science Foundation',
      }),
    ),
    inline(
      award({
        date: datetime({ year: 2017, month: 3, day: 4 }),
        name: 'NSF Graduate Research Fellowship Program',
        from: 'National Science Foundation',
      }),
    ),
    inline(
      award({
        date: datetime({ year: 2015, month: 4, day: 4 }),
        name: 'Campus Research Fellowship',
        from: 'Wellesley College',
      }),
    ),
    m.heading(1, 'Publications'),
    inline(
      paper({
        authors: [inline(strong(inline`Cao J`)), inline`Foucalt L`],
        title: 'Beyond the Quantum Manifold',
        journal: 'Physics Letters B',
        published: datetime({ year: 2025, month: 3, day: 17 }),
        vol: 862,
        pages: 139301,
      }),
    ),
    inline(
      paper({
        authors: [inline(strong(inline`Cao J`)), inline`Fourier J`],
        title: 'Waves all the way down: signal processing in 2025',
        journal: 'Physics Letters B',
        vol: 858,
        pages: 138736,
        published: datetime({ year: 2021, month: 6, day: 12 }),
      }),
    ),
    inline(
      paper({
        authors: [inline(strong(inline`Cao J`)), inline`Smith I`, inline`Ng V`, inline`Muradeli J`],
        title: 'A method for time-aware deconvolution of brainwaves',
        journal: 'Signal Processing',
        published: datetime({ year: 2017, month: 6, day: 3 }),
        vol: 212,
        pages: 109153,
      }),
    ),
    inline(
      paper({
        authors: [inline`Karamazov I`, inline(strong(inline`Cao J`)), inline`Muradeli J`],
        title: "I'm not coming up with more than three paper names",
        published: datetime({ year: 2015, month: 7, day: 30 }),
      }),
    ),
  )
}
