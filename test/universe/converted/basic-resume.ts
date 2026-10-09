// Converted from test/universe/corpus/basic-resume.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  define,
  doc,
  external,
  importPackage,
  inline,
  left,
  let_,
  link,
  m,
  show,
  smartquote,
  space,
  strong,
  symbol,
} from '../../../src/index.ts'

export default () => {
  const resume = external('resume')
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
    .named('dates', T.any, null)
    .named('name', T.any, null)
    .named('role', T.any, null)
    .named('url', T.any, null)
    .returns(T.any)
    .external()
  const extracurriculars = define('extracurriculars')
    .named('activity', T.any, null)
    .named('dates', T.any, null)
    .returns(T.any)
    .external()
  const resume_with = define('with')
    .named('accent-color', T.any, null)
    .named('author', T.any, null)
    .named('author-position', T.any, null)
    .named('email', T.any, null)
    .named('font', T.any, null)
    .named('github', T.any, null)
    .named('linkedin', T.any, null)
    .named('location', T.any, null)
    .named('paper', T.any, null)
    .named('personal-info-position', T.any, null)
    .named('personal-site', T.any, null)
    .named('phone', T.any, null)
    .returns(T.any)
    .external(resume)
  const [nameDecl, name] = let_('name', 'Stephen Xu')
  const [locationDecl, location_2] = let_('location', 'San Diego, CA')
  const [emailDecl, email] = let_('email', 'stxu@hmc.edu')
  const [githubDecl, github] = let_('github', 'github.com/stuxf')
  const [linkedinDecl, linkedin] = let_('linkedin', 'linkedin.com/in/stuxf')
  const [phoneDecl, phone] = let_('phone', '+1 (xxx) xxx-xxxx')
  const [personalSiteDecl, personalSite] = let_('personal-site', 'stuxf.dev')
  return doc(
    importPackage('@preview/basic-resume:0.2.9', [resume, edu, datesHelper, work, project, extracurriculars]),
    m.lines(nameDecl, locationDecl, emailDecl, githubDecl, linkedinDecl, phoneDecl, personalSiteDecl),
    show(
      resume_with({
        author: name,
        location: location_2,
        email: email,
        github: github,
        linkedin: linkedin,
        phone: phone,
        personalSite: personalSite,
        accentColor: '#26428b',
        font: 'New Computer Modern',
        paper: 'us-letter',
        authorPosition: left,
        personalInfoPosition: left,
      }),
    ),
    m.heading(2, 'Education'),
    m.lines(
      inline(
        edu({
          institution: 'Harvey Mudd College',
          location: 'Claremont, CA',
          dates: datesHelper({ startDate: 'Aug 2023', endDate: 'May 2027' }),
          degree: "Bachelor's of Science, Computer Science and Mathematics",
        }),
      ),
      m.list(
        m.item([
          'Cumulative GPA: 4.0',
          symbol('/'),
          '4.0 | Dean',
          smartquote({ double: false }),
          's List, Harvey S. Mudd Merit Scholarship, National Merit Scholarship',
        ]),
        m.item([
          'Relevant Coursework: Data Structures, Program Development, Microprocessors, Abstract Algebra I: Groups and Rings, Linear Algebra, Discrete Mathematics, Multivariable & Single Variable Calculus, Principles and Practice of Comp Sci',
        ]),
      ),
    ),
    m.heading(2, 'Work Experience'),
    m.lines(
      inline(
        work({
          title: 'Subatomic Shepherd and Caffeine Connoisseur',
          location: 'Atomville, CA',
          company: "Microscopic Circus, Schrodinger's University",
          dates: datesHelper({ startDate: 'May 2024', endDate: 'Present' }),
        }),
      ),
      m.list(
        m.item(['Played God with tiny molecules, making them dance to uncover the secrets of the universe']),
        m.item([
          'Convinced high-performance computers to work overtime without unions, reducing simulation time by 50%',
        ]),
        m.item(['Wowed a room full of nerds with pretty pictures of invisible things and imaginary findings']),
      ),
    ),
    m.lines(
      inline(
        work({
          title: 'AI Wrangler and Code Ninja',
          location: 'Silicon Mirage, CA',
          company: 'Organic Stupidity Startup',
          dates: datesHelper({ startDate: 'Dec 2023', endDate: 'Mar 2024' }),
        }),
      ),
      m.list(
        m.item([
          'Taught robots to predict when (and how much!) humans will empty their wallets at the doctor',
          smartquote({ double: false }),
          's office',
        ]),
        m.item([
          'Developed HIPAA-compliant digital signatures, because doctors',
          smartquote({ double: false }),
          space,
          'handwriting wasn',
          smartquote({ double: false }),
          't illegible enough already',
        ]),
        m.item(['Turned spaghetti code into a gourmet dish, making other interns drool with envy']),
      ),
    ),
    m.lines(
      inline(
        work({
          title: 'Digital Playground Architect',
          location: 'The Cloud',
          company: 'Pixels & Profit Interactive',
          dates: datesHelper({ startDate: 'Jun 2020', endDate: 'May 2023' }),
        }),
      ),
      m.list(
        m.item(['Scaled user base from 10 to 2000+, accidentally becoming a small wealthy nation in the process']),
        m.item(['Crafted Bash scripts so clever they occasionally made other engineers weep with joy']),
        m.item(['Automated support responses, reducing human interaction to a level that would make introverts proud']),
        m.item(['Built a documentation site that actually got read, breaking the ancient RTFM curse']),
      ),
    ),
    m.lines(
      inline(
        work({
          title: 'Code Conjurer Intern',
          location: 'Silicon Suburb, CA',
          company: 'Bits & Bytes Consulting',
          dates: datesHelper({ startDate: 'Jun 2022', endDate: 'Aug 2022' }),
        }),
      ),
      m.list(
        m.item(['Developed a cross-platform mobile app that turned every user into a potential paparazzi']),
        m.item([
          'Led a security overhaul, heroically saving the company from the menace of',
          space,
          smartquote({ double: true }),
          'password123',
          smartquote({ double: true }),
        ]),
      ),
    ),
    m.heading(2, 'Projects'),
    m.lines(
      inline(
        project({
          name: 'Hyperschedule',
          role: 'Maintainer',
          dates: datesHelper({ startDate: 'Nov 2023', endDate: 'Present' }),
          url: 'hyperschedule.io',
        }),
      ),
      m.list(
        m.item(
          m.lines(
            'Maintain open-source scheduler used by 7000+ users at the Claremont Consortium with TypeScript, React and MongoDB',
            m.list(
              m.item([
                'Manage PR reviews, bug fixes, and coordinate with college for releasing scheduling data and over $1500 of yearly funding',
              ]),
            ),
          ),
        ),
        m.item([
          'Ensure 99.99% uptime during peak loads of 1M daily requests during course registration through redundant servers',
        ]),
      ),
    ),
    m.heading(2, 'Extracurricular Activities'),
    m.lines(
      inline(
        extracurriculars({
          activity: 'Capture The Flag Competitions',
          dates: datesHelper({ startDate: 'Jan 2021', endDate: 'Present' }),
        }),
      ),
      m.list(
        m.item([
          'Founder of Les Amateurs (',
          link('https://amateurs.team', inline`amateurs.team`),
          '), currently ranked #4 US, #33 global on CTFTime (2023: #4 US, #42 global)',
        ]),
        m.item(
          m.lines(
            'Organized AmateursCTF 2023 and 2024, with 1000+ teams solving at least one challenge and $2000+ in cash prizes',
            m.list(
              m.item([
                'Scaled infrastructure using GCP, Digital Ocean with Kubernetes and Docker; deployed custom software on fly.io',
              ]),
            ),
          ),
        ),
        m.item([
          'Qualified for DEFCON CTF 32 and CSAW CTF 2023, two of the most prestigious cybersecurity competitions globally',
        ]),
      ),
    ),
    m.lines(
      m.heading(2, 'Skills'),
      m.list(
        m.item([
          strong(inline`Programming Languages`),
          ': JavaScript, Python, C/C++, HTML/CSS, Java, Bash, R, Flutter, Dart',
        ]),
        m.item([
          strong(inline`Technologies`),
          ': React, Astro, Svelte, Tailwind CSS, Git, UNIX, Docker, Caddy, NGINX, Google Cloud Platform',
        ]),
      ),
    ),
  )
}
