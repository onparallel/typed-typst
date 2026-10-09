// Converted from test/universe/corpus/resume-ofa.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, external, importPackage, inline, m, pt, show, space } from '../../../src/index.ts'

export default () => {
  const resume = external('resume')
  const work = define('work')
    .named('company', T.any, null)
    .named('dates', T.any, null)
    .named('location', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external()
  const datesHelper = define('dates-helper')
    .named('end-date', T.any, null)
    .named('start-date', T.any, null)
    .returns(T.any)
    .external()
  const edu = define('edu')
    .named('consistent', T.any, null)
    .named('dates', T.any, null)
    .named('degree', T.any, null)
    .named('gpa', T.any, null)
    .named('institution', T.any, null)
    .returns(T.any)
    .external()
  const project = define('project')
    .named('dates', T.any, null)
    .named('name', T.any, null)
    .named('org', T.any, null)
    .returns(T.any)
    .external()
  const skills = define('skills').named('category', T.any, null).named('items', T.any, null).returns(T.any).external()
  const language = define('language')
    .named('language', T.any, null)
    .named('proficiency', T.any, null)
    .returns(T.any)
    .external()
  const resume_with = define('with')
    .named('accent-color', T.any, null)
    .named('author', T.any, null)
    .named('email', T.any, null)
    .named('font-size', T.any, null)
    .named('github', T.any, null)
    .named('linkedin', T.any, null)
    .named('location', T.any, null)
    .named('paper', T.any, null)
    .returns(T.any)
    .external(resume)
  return doc(
    importPackage('@preview/resume-ofa:0.1.0', [resume, work, datesHelper, edu, project, skills, language]),
    show(
      resume_with({
        author: 'Jordan Lee',
        email: 'jordan.lee@example.com',
        github: 'github.com/jordan-lee',
        linkedin: 'linkedin.com/in/jordan-lee',
        location: 'Austin, TX',
        accentColor: '#315A7D',
        fontSize: pt(9),
        paper: 'us-letter',
      }),
    ),
    m.heading(2, 'Profile'),
    'Software engineer focused on reliable systems, thoughtful interfaces, and practical automation.',
    m.heading(2, 'Experience'),
    m.lines(
      inline(
        work({
          title: 'Software Engineer',
          company: 'Example Systems',
          dates: datesHelper({ startDate: '2023', endDate: 'Present' }),
          location: 'Austin, TX',
        }),
      ),
      m.list(
        m.item(['Built maintainable services and tooling used by cross-functional engineering teams.']),
        m.item(['Improved delivery workflows through automated testing, observability, and documentation.']),
      ),
    ),
    m.heading(2, 'Education'),
    inline(
      edu({
        degree: 'B.S. in Computer Science',
        institution: 'Example University',
        dates: datesHelper({ startDate: '2019', endDate: '2023' }),
        gpa: 'GPA: 3.9/4.0',
        consistent: true,
      }),
    ),
    m.heading(2, 'Projects'),
    m.lines(
      inline(project({ name: 'Open Source Toolkit', org: 'Community Project', dates: '2022 - 2023' })),
      m.list(m.item(['Created a documented tool that helps users solve a recurring workflow problem.'])),
    ),
    m.heading(2, 'Skills'),
    inline(
      skills({ category: 'Programming', items: 'Python, TypeScript, SQL, Rust' }),
      space,
      skills({ category: 'Tools', items: 'Git, Linux, CI/CD, Testing' }),
    ),
    m.heading(2, 'Languages'),
    inline(
      language({ language: 'English', proficiency: 'Native' }),
      space,
      language({ language: 'Spanish', proficiency: 'Professional' }),
    ),
  )
}
