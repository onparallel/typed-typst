// Converted from test/universe/corpus/meridian-cv.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  blocks,
  cm,
  define,
  doc,
  em,
  external,
  h,
  importPackage,
  inline,
  let_,
  link,
  m,
  pt,
  show,
  smartquote,
  space,
} from '../../../src/index.ts'

export default () => {
  const resume = external('resume')
  const masthead = define('masthead')
    .named('accent-color', T.any, null)
    .named('author', T.any, null)
    .named('contact', T.content, [])
    .named('profession', T.any, null)
    .returns(T.any)
    .external()
  const cvSection = define('cv-section').pos('arg1', T.any).named('accent-color', T.any, null).returns(T.any).external()
  const meridianEntry = define('meridian-entry')
    .pos('arg1', T.content)
    .named('dates', T.any, null)
    .named('location', T.any, null)
    .named('meta', T.any, null)
    .named('subtitle', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external()
  const meridianLanguage = define('meridian-language')
    .named('language', T.any, null)
    .named('level', T.any, null)
    .returns(T.any)
    .external()
  const resume_with = define('with')
    .named('author', T.any, null)
    .named('font', T.any, null)
    .named('font-size', T.any, null)
    .named('margin', T.any, null)
    .named('paper', T.any, null)
    .returns(T.any)
    .external(resume)
  const [accentDecl, accent] = let_('accent', '#33475a')
  return doc(
    importPackage('@preview/meridian-cv:0.1.0', [resume, masthead, cvSection, meridianEntry, meridianLanguage]),
    accentDecl,
    show(
      resume_with({
        author: 'Ines Moreau',
        font: 'Libertinus Serif',
        fontSize: pt(10.5),
        paper: 'a4',
        margin: cm(1.5),
      }),
    ),
    inline(
      masthead({
        author: 'Ines Moreau',
        profession: 'Research Fellow in Epidemiology',
        accentColor: accent,
        contact: inline`${space}i.moreau@example.ac.uk ${h(em(0.6))} | ${h(em(0.6))} +44 117 496 0233 ${h(em(0.6))}
| ${h(em(0.6))} Bristol, UK ${h(em(0.6))} | ${h(em(0.6))} ${link('https://example.ac.uk/moreau', inline`example.ac.uk/moreau`)}${space}`,
      }),
    ),
    inline(cvSection({ accentColor: accent }, 'Research Interests')),
    'Infectious disease modelling, with a focus on how surveillance data behaves when it is incomplete. Recent work has been on estimating transmission from testing streams that were never designed to be representative, and on making those estimates legible to the people who commission them.',
    inline(cvSection({ accentColor: accent }, 'Appointments')),
    inline(
      meridianEntry(
        {
          title: 'Research Fellow',
          subtitle: 'Population Health Sciences, University of Bristol',
          dates: '2022 - Present',
          location: 'Bristol, UK',
        },
        blocks(
          m.list(
            m.item([
              'Lead modeller on a five-year NIHR programme covering respiratory surveillance in England, coordinating four analysts across two sites.',
            ]),
            m.item([
              'Developed the reweighting method now used to correct the programme',
              smartquote({ double: false }),
              's community testing estimates for differential participation.',
            ]),
            m.item(['Supervise two PhD students and one research assistant.']),
          ),
        ),
      ),
    ),
    inline(
      meridianEntry(
        {
          title: 'Postdoctoral Researcher',
          subtitle: 'MRC Biostatistics Unit, University of Cambridge',
          dates: '2019 - 2022',
          location: 'Cambridge, UK',
        },
        blocks(
          m.list(
            m.item([
              'Built the nowcasting pipeline that fed weekly reporting-delay corrections into national situational awareness.',
            ]),
            m.item([
              'Co-authored the unit',
              smartquote({ double: false }),
              's guidance on communicating uncertainty in short-term forecasts, adopted across three subsequent programmes.',
            ]),
          ),
        ),
      ),
    ),
    inline(cvSection({ accentColor: accent }, 'Education')),
    inline(
      meridianEntry(
        {
          title: 'PhD Epidemiology',
          subtitle: 'London School of Hygiene and Tropical Medicine',
          dates: '2015 - 2019',
          location: 'London, UK',
          meta: 'Thesis: Estimating transmission from partially observed testing data',
        },
        inline(),
      ),
    ),
    inline(
      meridianEntry(
        {
          title: 'MSc Medical Statistics',
          subtitle: 'University of Leeds',
          dates: '2014 - 2015',
          location: 'Leeds, UK',
        },
        inline(),
      ),
    ),
    inline(cvSection({ accentColor: accent }, 'Selected Publications')),
    inline(
      meridianEntry(
        {
          title: 'Reweighting non-representative community testing streams',
          subtitle: 'Moreau I, Achebe N, Lindqvist P',
          dates: '2024',
          meta: 'Epidemiology and Infection, 152, e44',
        },
        inline(),
      ),
    ),
    inline(
      meridianEntry(
        {
          title: 'Reporting delay and the shape of the epidemic curve',
          subtitle: 'Moreau I, Hartley S',
          dates: '2022',
          meta: 'Statistics in Medicine, 41(18), 3502',
        },
        inline(),
      ),
    ),
    inline(
      meridianEntry(
        {
          title: 'Communicating uncertainty in short-term epidemic forecasts',
          subtitle: 'Hartley S, Moreau I, Okonjo A',
          dates: '2021',
          meta: 'Journal of the Royal Statistical Society A, 184(3), 891',
        },
        inline(),
      ),
    ),
    inline(cvSection({ accentColor: accent }, 'Grants and Awards')),
    inline(
      meridianEntry(
        {
          title: 'NIHR Advanced Fellowship',
          subtitle: 'National Institute for Health and Care Research',
          dates: '2023',
          meta: 'GBP 1.1M, principal investigator',
        },
        inline(),
      ),
    ),
    inline(
      meridianEntry(
        { title: 'Early Career Prize', subtitle: 'Royal Statistical Society, Medical Section', dates: '2021' },
        inline(),
      ),
    ),
    inline(cvSection({ accentColor: accent }, 'Teaching')),
    inline(
      meridianEntry(
        {
          title: 'Statistical Modelling for Public Health',
          subtitle: 'MSc module lead, University of Bristol',
          dates: '2023 - Present',
        },
        inline(),
      ),
    ),
    inline(
      meridianEntry(
        {
          title: 'Introduction to Infectious Disease Modelling',
          subtitle: 'Short course convenor, Bristol Medical School',
          dates: '2022 - Present',
        },
        inline(),
      ),
    ),
    inline(cvSection({ accentColor: accent }, 'Service')),
    inline(meridianEntry({ title: 'Associate Editor', subtitle: 'Epidemics', dates: '2023 - Present' }, inline())),
    inline(
      meridianEntry(
        {
          title: 'Reviewer',
          subtitle: 'Lancet Public Health, Statistics in Medicine, Epidemics',
          dates: '2020 - Present',
        },
        inline(),
      ),
    ),
    inline(cvSection({ accentColor: accent }, 'Languages')),
    inline(
      meridianLanguage({ language: 'French', level: 'Native' }),
      space,
      meridianLanguage({ language: 'English', level: 'Fluent' }),
      space,
      meridianLanguage({ language: 'Portuguese', level: 'Conversational' }),
    ),
  )
}
