// Converted from test/universe/corpus/exp-resume.typ by scripts/convert-suite.ts — do not edit.
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
  smartquote,
  space,
} from '../../../src/index.ts'

export default () => {
  const resume = external('resume')
  const summary = define('summary').pos('arg1', T.content).returns(T.any).external()
  const edu = define('edu')
    .named('dates', T.any, null)
    .named('degree', T.any, null)
    .named('institution', T.any, null)
    .named('location', T.any, null)
    .returns(T.any)
    .external()
  const datesHelper = define('dates-helper')
    .named('end-date', T.any, null)
    .named('start-date', T.any, null)
    .returns(T.any)
    .external()
  const work = define('work')
    .named('company', T.any, null)
    .named('dates', T.any, null)
    .named('location', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external()
  const project = define('project')
    .named('links', T.any, null)
    .named('name', T.any, null)
    .named('technologies', T.any, null)
    .returns(T.any)
    .external()
  const certificates = define('certificates')
    .named('date', T.any, null)
    .named('issuer', T.any, null)
    .named('name', T.any, null)
    .named('url', T.any, null)
    .named('url-text', T.any, null)
    .returns(T.any)
    .external()
  const extracurriculars = define('extracurriculars')
    .named('activity', T.any, null)
    .named('dates', T.any, null)
    .returns(T.any)
    .external()
  const skills = define('skills').named('category', T.any, null).named('items', T.any, null).returns(T.any).external()
  const resume_with = define('with')
    .named('accent-color', T.any, null)
    .named('author', T.any, null)
    .named('author-position', T.any, null)
    .named('email', T.any, null)
    .named('email-text', T.any, null)
    .named('font', T.any, null)
    .named('github', T.any, null)
    .named('github-text', T.any, null)
    .named('linkedin', T.any, null)
    .named('linkedin-text', T.any, null)
    .named('location', T.any, null)
    .named('paper', T.any, null)
    .named('personal-info-position', T.any, null)
    .named('personal-site', T.any, null)
    .named('personal-site-text', T.any, null)
    .named('phone', T.any, null)
    .named('section-content-inset', T.any, null)
    .returns(T.any)
    .external(resume)
  const [nameDecl, name] = let_('name', 'John Doe')
  const [locationDecl, location_2] = let_('location', 'Null Island, AT')
  const [emailDecl, email] = let_('email', 'john.doe@example.com')
  const [emailTextDecl, emailText] = let_('email-text', 'john.doe[at]email.com')
  const [githubDecl, github] = let_('github', 'github.com/johndoe')
  const [githubTextDecl, githubText] = let_('github-text', 'gh/johndoe')
  const [linkedinDecl, linkedin] = let_('linkedin', 'linkedin.com/in/johndoe')
  const [linkedinTextDecl, linkedinText] = let_('linkedin-text', 'in/johndoe')
  const [phoneDecl, phone] = let_('phone', '+1 (555) 010-0101')
  const [personalSiteDecl, personalSite] = let_('personal-site', 'johndoe.dev')
  const [personalSiteTextDecl, personalSiteText] = let_('personal-site-text', 'johndoe.dev')
  return doc(
    importPackage('@preview/exp-resume:0.1.2', [
      resume,
      summary,
      edu,
      datesHelper,
      work,
      project,
      certificates,
      extracurriculars,
      skills,
    ]),
    m.lines(
      nameDecl,
      locationDecl,
      emailDecl,
      emailTextDecl,
      githubDecl,
      githubTextDecl,
      linkedinDecl,
      linkedinTextDecl,
      phoneDecl,
      personalSiteDecl,
      personalSiteTextDecl,
    ),
    show(
      resume_with({
        author: name,
        location: location_2,
        email: email,
        emailText: emailText,
        github: github,
        githubText: githubText,
        linkedin: linkedin,
        linkedinText: linkedinText,
        phone: phone,
        personalSite: personalSite,
        personalSiteText: personalSiteText,
        accentColor: '#000000',
        font: 'New Computer Modern',
        paper: 'us-letter',
        authorPosition: center,
        personalInfoPosition: center,
        sectionContentInset: pt(0),
      }),
    ),
    m.heading(2, 'Summary'),
    inline(
      summary(inline`Engineer who ships reliable systems, writes boringly good docs, and consults rubber ducks before
merging.`),
    ),
    m.heading(2, 'Education'),
    m.lines(
      inline(
        edu({
          institution: 'University of Hypothetical Sciences',
          location: 'Null Island, AT',
          dates: datesHelper({ startDate: 'Aug 2019', endDate: 'May 2023' }),
          degree: 'B.S. Computer Science',
        }),
      ),
      m.list(m.item(['GPA: 3.9/4.0 | Coursework: Algorithms, Distributed Systems, Databases'])),
    ),
    m.heading(2, 'Experience'),
    m.lines(
      inline(
        work({
          title: 'Senior Bug Whisperer',
          location: 'Remote',
          company: 'Infinite Loop Inc.',
          dates: datesHelper({ startDate: 'Jul 2023', endDate: 'Present' }),
        }),
      ),
      m.list(
        m.item(['Built reliable services and cut deploy anxiety with predictable CI']),
        m.item(['Wrote runbooks so clear that on-call stopped being a contact sport']),
      ),
    ),
    m.lines(
      inline(
        work({
          title: 'Software Engineering Intern',
          location: 'Byteburg, CA',
          company: 'Stack Overflow Overflow',
          dates: datesHelper({ startDate: 'May 2022', endDate: 'Aug 2022' }),
        }),
      ),
      m.list(m.item(['Shipped internal tools and turned a 12-step release into one command'])),
    ),
    m.heading(2, 'Projects'),
    m.lines(
      inline(
        project({
          name: 'RubberDuckDB',
          technologies: 'Go, SQLite, gRPC',
          links: [
            { url: 'github.com/johndoe/rubberduckdb', text: 'Github' },
            { url: 'rubberduckdb.johndoe.dev', text: 'Live' },
          ],
        }),
      ),
      m.list(m.item(['Toy database with snapshots, polite errors, and too many duck puns'])),
    ),
    m.lines(
      inline(
        project({
          name: 'CommitMessageGenerator',
          technologies: 'Python, FastAPI, Redis',
          links: [{ url: 'github.com/johndoe/commit-msg-gen', text: 'Github' }],
        }),
      ),
      m.list(
        m.item([
          'Generates commit messages from',
          space,
          smartquote({ double: true }),
          'fix typo',
          smartquote({ double: true }),
          space,
          'to Shakespearean tragedy',
        ]),
      ),
    ),
    m.heading(2, 'Certificates'),
    inline(
      certificates({
        name: 'Certified Cloud Whisperer',
        issuer: 'Example Institute',
        url: 'example.com/cert/cloud',
        urlText: 'Credential',
        date: 'Jun 2024',
      }),
    ),
    inline(certificates({ name: 'Kubernetes Trouble Tourist', issuer: 'CNCF Fan Club', date: 'Jan 2023' })),
    m.heading(2, 'Activities'),
    m.lines(
      inline(
        extracurriculars({
          activity: 'Open Source Mentoring Collective',
          dates: datesHelper({ startDate: 'Jan 2022', endDate: 'Present' }),
        }),
      ),
      m.list(m.item(['Mentored newcomers and reviewed first-time contributor PRs'])),
    ),
    m.heading(2, 'Skills'),
    inline(skills({ category: 'Languages', items: 'Python, Go, TypeScript, SQL, Bash' })),
    inline(skills({ category: 'Technologies', items: 'FastAPI, React, PostgreSQL, Redis, Docker, Kubernetes' })),
    inline(skills({ category: 'Tools', items: 'Linux, GitHub Actions, Neovim, rubber ducks' })),
  )
}
