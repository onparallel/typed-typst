// Converted from test/universe/corpus/vivid-cv.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  define,
  doc,
  external,
  image,
  importPackage,
  inline,
  let_,
  linebreak,
  m,
  path,
  pt,
  show,
  space,
  strong,
} from '../../../src/index.ts'

export default () => {
  const resume = external('resume')
  const faIcon = define('fa-icon').pos('arg1', T.any).returns(T.any).external()
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
    .named('dates', T.any, null)
    .named('degree', T.any, null)
    .named('institution', T.any, null)
    .named('location', T.any, null)
    .returns(T.any)
    .external()
  const project = define('project')
    .named('dates', T.any, null)
    .named('name', T.any, null)
    .named('url', T.any, null)
    .returns(T.any)
    .external()
  const resume_with = define('with')
    .named('about-below', T.content, [])
    .named('about-beside', T.content, [])
    .named('about-title', T.any, null)
    .named('author', T.any, null)
    .named('author-font-size', T.any, null)
    .named('birthdate', T.any, null)
    .named('custom', T.any, null)
    .named('email', T.any, null)
    .named('font', T.any, null)
    .named('font-size', T.any, null)
    .named('github', T.any, null)
    .named('header-color', T.any, null)
    .named('heading-color', T.any, null)
    .named('icon', T.any, null)
    .named('lang', T.any, null)
    .named('linkedin', T.any, null)
    .named('location', T.any, null)
    .named('name-color', T.any, null)
    .named('nb-lines-override', T.any, null)
    .named('paper', T.any, null)
    .named('personal-site', T.any, null)
    .named('phone', T.any, null)
    .named('photo', T.any, null)
    .named('photo-border', T.any, null)
    .named('photo-size', T.any, null)
    .named('reference', T.any, null)
    .named('show-photo', T.any, null)
    .named('text-color', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(resume)
  const [nameDecl, name] = let_('name', 'Loïc Fontaine')
  const [jobTitleDecl, jobTitle] = let_('job-title', 'Full-stack Software Engineer')
  const [locationDecl, location_2] = let_('location', 'City, Country')
  const [emailDecl, email] = let_('email', 'you@example.com')
  const [githubDecl, github] = let_('github', 'loicfontaine')
  const [linkedinDecl, linkedin] = let_('linkedin', 'loicfontaine-suisse')
  const [phoneDecl, phone] = let_('phone', '+1 234 567 890')
  const [personalSiteDecl, personalSite] = let_('personal-site', 'lfontaine.ch')
  const [birthdateDecl, birthdate] = let_('birthdate', '1990-01-01')
  return doc(
    m.lines(
      importPackage('@preview/vivid-cv:0.2.0', [resume, faIcon, work, datesHelper, edu, project]),
      importPackage('@preview/fontawesome:0.6.2', [faIcon]),
    ),
    m.lines(
      nameDecl,
      jobTitleDecl,
      locationDecl,
      emailDecl,
      githubDecl,
      linkedinDecl,
      phoneDecl,
      personalSiteDecl,
      birthdateDecl,
    ),
    show(
      resume_with({
        author: name,
        title: jobTitle,
        location: location_2,
        email: email,
        github: github,
        linkedin: linkedin,
        phone: phone,
        personalSite: personalSite,
        birthdate: birthdate,
        custom: [
          { text: 'Youtube Channel', icon: faIcon('youtube'), link: 'https://example.com' },
          { text: 'Twitter', icon: faIcon('twitter'), link: 'https://example.com' },
        ],
        showPhoto: true,
        photo: image(path('photo.jpg')),
        photoSize: pt(140),
        aboutTitle: 'About me',
        aboutBeside: inline`${space}Write a short intro paragraph here. Keep it to 2–3 sentences so it sits neatly beside
your photo. Use this space to summarize your experience, skills and career goals. Make it specific
to the type of roles you're applying for.${space}`,
        aboutBelow: inline`${space}A second paragraph that spans the full page width, below the photo row. Use this for
overflow from the first paragraph, or to add a complementary statement.${space}`,
        reference: 'References available upon request',
        headerColor: '#06332a',
        nameColor: '#ffdf2b',
        headingColor: '#303f3c',
        textColor: '#303f3c',
        photoBorder: '#ffffff',
        font: 'Noto Sans',
        authorFontSize: pt(20),
        fontSize: pt(10),
        paper: 'a4',
        lang: 'en',
        icon: true,
        nbLinesOverride: 3,
      }),
    ),
    m.lines(
      m.heading(2, 'Skills'),
      inline`${strong(inline`Languages:`)} TypeScript/JavaScript, Python, PHP, SQL ${linebreak()} ${strong(inline`Frontend:`)}
Vue.js, React.js, Tailwind CSS, REST APIs ${linebreak()} ${strong(inline`Backend & Cloud:`)}
Node.js, Laravel, MySQL, Google Cloud, AWS ${linebreak()} ${strong(inline`Tools:`)} Docker,
CI/CD, Git, Agile, UI/UX ${linebreak()} ${strong(inline`Languages:`)} English (native), French
(B2), German (A2)`,
    ),
    m.heading(2, 'Work Experience'),
    m.lines(
      inline(
        work({
          title: 'Senior Software Engineer',
          location: 'San Francisco, CA',
          company: 'Acme Corp',
          dates: datesHelper({ startDate: 'Jan 2023', endDate: 'Present' }),
        }),
      ),
      m.list(
        m.item(['Led development of a microservices platform handling 10k req/s']),
        m.item(['Mentored 3 junior engineers and introduced weekly code reviews']),
      ),
    ),
    m.lines(
      inline(
        work({
          title: 'Software Engineer',
          location: 'Remote',
          company: 'Startup Inc.',
          dates: datesHelper({ startDate: 'Jun 2021', endDate: 'Dec 2022' }),
        }),
      ),
      m.list(
        m.item(['Built a full-stack SaaS product from scratch using Vue.js and Laravel']),
        m.item(['Reduced page load times by 40% through caching and query optimisation']),
      ),
    ),
    m.heading(2, 'Education'),
    m.lines(
      inline(
        edu({
          institution: 'University of Example',
          location: 'Geneva, Switzerland',
          dates: datesHelper({ startDate: 'Sept 2018', endDate: 'Jun 2021' }),
          degree: 'BSc Computer Science',
        }),
      ),
      m.list(m.item(['Graduated with honours']), m.item(['Thesis on distributed systems and consensus algorithms'])),
    ),
    m.heading(2, 'Projects'),
    m.lines(
      inline(
        project({
          name: 'My Open Source Tool',
          url: 'github.com/yourusername/my-tool',
          dates: datesHelper({ startDate: '2022', endDate: 'Present' }),
        }),
      ),
      m.list(m.item(['A CLI tool for automating deployment workflows; 300+ GitHub stars'])),
    ),
  )
}
