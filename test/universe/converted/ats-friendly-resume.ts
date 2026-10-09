// Converted from test/universe/corpus/ats-friendly-resume.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  center,
  define,
  doc,
  external,
  importPackage,
  inline,
  let_,
  m,
  pt,
  show,
  strong,
} from '../../../src/index.ts'

export default () => {
  const resume = external('resume')
  const work = define('work')
    .named('company', T.any, null)
    .named('dates', T.any, null)
    .named('location', T.any, null)
    .named('role', T.any, null)
    .named('tech-used', T.any, null)
    .returns(T.any)
    .external()
  const datesUtil = define('dates-util')
    .named('end-date', T.any, null)
    .named('start-date', T.any, null)
    .returns(T.any)
    .external()
  const project = define('project')
    .named('dates', T.any, null)
    .named('name', T.any, null)
    .named('tech-used', T.any, null)
    .named('url', T.any, null)
    .returns(T.any)
    .external()
  const edu = define('edu')
    .named('dates', T.any, null)
    .named('degree', T.any, null)
    .named('institution', T.any, null)
    .named('location', T.any, null)
    .returns(T.any)
    .external()
  const resume_with = define('with')
    .named('author', T.any, null)
    .named('author-font-size', T.any, null)
    .named('author-position', T.any, null)
    .named('color-enabled', T.any, null)
    .named('font', T.any, null)
    .named('font-size', T.any, null)
    .named('github', T.any, null)
    .named('lang', T.any, null)
    .named('linkedin', T.any, null)
    .named('location', T.any, null)
    .named('paper', T.any, null)
    .named('personal-info-position', T.any, null)
    .named('portfolio', T.any, null)
    .named('text-color', T.any, null)
    .returns(T.any)
    .external(resume)
  const [nameDecl, name] = let_('name', 'Ban Gueco')
  const [locationDecl, location_2] = let_('location', 'Gotham, Philippines')
  const [linkedinDecl, linkedin] = let_('linkedin', 'linkedin.com/in/example')
  const [githubDecl, github] = let_('github', 'github.com/aybangueco')
  const [portfolioDecl, portfolio] = let_('portfolio', 'aybangueco.vercel.app')
  return doc(
    importPackage('@preview/ats-friendly-resume:0.1.1', [resume, work, datesUtil, project, edu]),
    m.lines(nameDecl, locationDecl, linkedinDecl, githubDecl, portfolioDecl),
    show(
      resume_with({
        author: name,
        authorPosition: center,
        location: location_2,
        linkedin: linkedin,
        github: github,
        portfolio: portfolio,
        personalInfoPosition: center,
        colorEnabled: false,
        textColor: '#000080',
        font: 'New Computer Modern',
        paper: 'us-letter',
        authorFontSize: pt(20),
        fontSize: pt(10),
        lang: 'en',
      }),
    ),
    m.lines(
      m.heading(2, 'Technical Skills'),
      m.list(
        m.item([strong(inline`Programming Languages`), ': TypeScript, JavaScript, Go, Bash, HTML, CSS']),
        m.item([strong(inline`Web Technologies`), ': React, Next.js, Sveltekit, Node.js, Express, Bun, Hono']),
        m.item([strong(inline`DevOps & Tools`), ': Postman, Docker, Git, Github Actions']),
      ),
    ),
    m.heading(2, 'Experience'),
    m.lines(
      inline(
        work({
          company: 'Nimble Labs',
          role: 'Full Stack Developer',
          dates: datesUtil({ startDate: 'Sep 2021', endDate: 'Present' }),
          location: 'Manila, Philippines',
        }),
      ),
      m.list(
        m.item([
          'Designed and maintained full-stack web applications using React and Hono, serving internal and external clients.',
        ]),
        m.item([
          'Built and integrated REST/GraphQL APIs for cross-service communication, improving data reliability and developer productivity.',
        ]),
        m.item(['Reduced API response times by 40% through query optimization and edge caching with Bun.']),
        m.item([
          'Collaborated with product and design teams to deliver responsive dashboards and analytics tools for customer operations.',
        ]),
      ),
    ),
    m.lines(
      inline(
        work({
          company: 'AstraTech Solutions',
          role: 'Senior Software Engineer',
          dates: datesUtil({ startDate: 'Sep 1999', endDate: 'Aug 2021' }),
          techUsed: 'React | TypeScript | Node.js',
          location: 'Manila, Philippines',
        }),
      ),
      m.list(
        m.item([
          'Led migration from legacy systems to a modern TypeScript/Node.js backend, enabling quicker feature delivery and improved maintainability.',
        ]),
        m.item([
          'Developed monitoring and telemetry tooling to surface application health and performance metrics in real time.',
        ]),
        m.item([
          'Implemented CI/CD pipelines using GitHub Actions and Docker, reducing deployment time and rollback incidents.',
        ]),
        m.item([
          'Mentored junior engineers and established code review and testing best practices across the engineering team.',
        ]),
      ),
    ),
    m.heading(2, 'Projects'),
    m.lines(
      inline(
        project({
          name: 'FleetOps Manager',
          dates: datesUtil({ startDate: 'Sep 2002', endDate: 'Mar 2003' }),
          techUsed: 'React | TypeScript | Node.js',
          url: 'github.com/aybangueco/fleetops',
        }),
      ),
      m.list(
        m.item([
          'Architected a centralized platform for managing vehicle configurations, maintenance schedules, and upgrade histories.',
        ]),
        m.item([
          'Built telemetry dashboards for diagnostics and real-time alerts, increasing uptime and lowering maintenance costs.',
        ]),
        m.item([
          'Created RESTful APIs for logistics partners and internal tooling with robust authentication and role-based access.',
        ]),
      ),
    ),
    m.lines(
      inline(
        project({
          name: 'CityWatch Incident Tracker',
          dates: datesUtil({ startDate: 'Jan 2020', endDate: 'Dec 2020' }),
          techUsed: 'Next.js | Go | PostgreSQL',
          url: 'github.com/aybangueco/citywatch',
        }),
      ),
      m.list(
        m.item(['Developed an incident reporting and response coordination system for municipal operations.']),
        m.item(['Implemented analytics dashboards to track response times, incident trends, and resource allocation.']),
        m.item([
          'Deployed production workloads via Docker and GitHub Actions, improving release safety and observability.',
        ]),
      ),
    ),
    m.heading(2, 'Education'),
    inline(
      edu({
        institution: 'Metropolitan University',
        location: 'Manila, Philippines',
        degree: 'Bachelor of Science in Computer Science',
        dates: datesUtil({ startDate: 'Sep 2021', endDate: 'Jul 2025' }),
      }),
    ),
  )
}
