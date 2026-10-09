// Converted from test/universe/corpus/coral-cv.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, external, importPackage, inline, linebreak, m, show, strong } from '../../../src/index.ts'

export default () => {
  const resume = external('resume')
  const work = define('work')
    .named('company', T.any, null)
    .named('dates', T.any, null)
    .named('location', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external()
  const edu = define('edu')
    .named('dates', T.any, null)
    .named('degree', T.any, null)
    .named('institution', T.any, null)
    .named('location', T.any, null)
    .returns(T.any)
    .external()
  const project = define('project')
    .named('dates', T.any, null)
    .named('name', T.any, null)
    .named('role', T.any, null)
    .named('url', T.any, null)
    .returns(T.any)
    .external()
  const datesHelper = define('dates-helper')
    .named('end-date', T.any, null)
    .named('start-date', T.any, null)
    .returns(T.any)
    .external()
  const resume_with = define('with')
    .named('author', T.any, null)
    .named('email', T.any, null)
    .named('font', T.any, null)
    .named('github', T.any, null)
    .named('linkedin', T.any, null)
    .named('location', T.any, null)
    .named('personal-site', T.any, null)
    .named('phone', T.any, null)
    .returns(T.any)
    .external(resume)
  return doc(
    importPackage('@preview/coral-cv:0.1.0', [resume, work, edu, project, datesHelper]),
    show(
      resume_with({
        author: 'YOUR NAME',
        font: 'Libertinus Serif',
        location: 'Auckland, New Zealand',
        email: 'hello@example.com',
        phone: '+64 21 000 0000',
        linkedin: 'linkedin.com/in/your-name',
        github: 'github.com/your-name',
        personalSite: 'yourname.dev',
      }),
    ),
    m.heading(2, 'Profile'),
    'Product-minded professional with experience turning complex problems into clear, useful outcomes. Replace this concise summary with the value you bring to your next role.',
    m.heading(2, 'Experience'),
    m.lines(
      inline(
        work({
          title: 'Senior Product Designer',
          company: 'Studio North',
          location: 'Auckland, NZ',
          dates: datesHelper({ startDate: 'Mar 2022', endDate: 'Present' }),
        }),
      ),
      m.list(
        m.item(['Led end-to-end design for a customer platform used by 30,000+ people.']),
        m.item(['Partnered with engineering and research to reduce onboarding time by 35%.']),
        m.item(['Built a reusable design system that improved consistency across product teams.']),
      ),
    ),
    m.lines(
      inline(
        work({
          title: 'Product Designer',
          company: 'Harbour Digital',
          location: 'Wellington, NZ',
          dates: datesHelper({ startDate: 'Jan 2020', endDate: 'Feb 2022' }),
        }),
      ),
      m.list(m.item(['Shaped digital services from discovery through launch for public and private clients.'])),
    ),
    m.heading(2, 'Education'),
    inline(
      edu({
        institution: 'University of Auckland',
        degree: 'Bachelor of Design',
        location: 'Auckland, NZ',
        dates: '2016 — 2019',
      }),
    ),
    m.heading(2, 'Selected Projects'),
    m.lines(
      inline(project({ name: 'Portfolio website', role: 'Designer & developer', url: 'yourname.dev', dates: '2025' })),
      m.list(m.item(['Designed and built a responsive portfolio to communicate case studies clearly.'])),
    ),
    m.heading(2, 'Skills'),
    inline`${strong(inline`Design:`)} Product strategy, UX research, interaction design, prototyping, design
systems ${linebreak()} ${strong(inline`Tools:`)} Figma, FigJam, Adobe Creative Suite, HTML/CSS,
Git`,
  )
}
