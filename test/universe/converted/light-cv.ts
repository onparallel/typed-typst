// Converted from test/universe/corpus/light-cv.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  define,
  doc,
  external,
  image,
  importFile,
  importPackage,
  inline,
  let_,
  list,
  m,
  pagebreak,
  path,
  show,
  space,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const cv = external('cv')
  const styles = external('styles')
  const faPhone = define('fa-phone').returns(T.any).external()
  const faHome = define('fa-home').named('fill', T.any, null).returns(T.any).external()
  const faLinkedin = define('fa-linkedin').named('fill', T.any, null).returns(T.any).external()
  const faGithub = define('fa-github').named('fill', T.any, null).returns(T.any).external()
  const faXing = define('fa-xing').returns(T.any).external()
  const faEnvelope = define('fa-envelope').named('fill', T.any, null).returns(T.any).external()
  const header = define('header')
    .named('full-name', T.content, [])
    .named('job-title', T.content, [])
    .named('profile-picture', T.any, null)
    .named('socials', T.any, null)
    .named('styles', T.any, null)
    .returns(T.any)
    .external()
  const section = define('section').named('styles', T.any, null).named('title', T.any, null).returns(T.any).external()
  const entry = define('entry')
    .named('company-or-university', T.any, null)
    .named('date', T.any, null)
    .named('description', T.any, null)
    .named('location', T.any, null)
    .named('logo', T.any, null)
    .named('styles', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external()
  const skill = define('skill')
    .named('category', T.any, null)
    .named('skills', T.any, null)
    .named('styles', T.any, null)
    .returns(T.any)
    .external()
  const cv_with = define('with').named('styles', T.any, null).returns(T.any).external(cv)
  const [iconsDecl, icons] = let_('icons', {
    phone: faPhone(),
    homepage: faHome({ fill: unsafeRaw.code<any>`styles.colors.accent` }),
    linkedin: faLinkedin({ fill: unsafeRaw.code<any>`styles.colors.accent` }),
    github: faGithub({ fill: unsafeRaw.code<any>`styles.colors.accent` }),
    xing: faXing(),
    mail: faEnvelope({ fill: unsafeRaw.code<any>`styles.colors.accent` }),
  })
  return doc(
    m.lines(
      importPackage('@preview/light-cv:0.2.1', [
        cv,
        styles,
        faPhone,
        faHome,
        faLinkedin,
        faGithub,
        faXing,
        faEnvelope,
        header,
        section,
        entry,
        skill,
      ]),
      importPackage('@preview/fontawesome:0.6.0', [faPhone, faHome, faLinkedin, faGithub, faXing, faEnvelope]),
      importFile('settings/styles.typ', [styles]),
    ),
    show(cv_with({ styles: styles })),
    iconsDecl,
    inline(
      header({
        styles: styles,
        fullName: inline`John Doe`,
        jobTitle: inline`Software Engineer with a passion for JavaScript`,
        socials: unsafeRaw.code<any>`(
    (
      icon: icons.github,
      text: [JohnDoe],
      link: "https://github.com"
    ),
    (
      icon: icons.homepage,
      text: [johndoe.com],
      link: "johndoe.com"
    ),
    (
      icon: icons.mail,
      text: [john.doe\\@email.com],
      link: "mailto://john.doe@email.com"
    ),
    (
      icon: icons.linkedin,
      text: [John Doe],
      link: "https://linkedin.com/"
    )
  )`,
        profilePicture: image(path('media/avatar.jpeg')),
      }),
    ),
    inline(
      section({ styles: styles, title: 'Professional Experience' }),
      space,
      entry({
        styles: styles,
        title: 'Data Analyst',
        companyOrUniversity: 'BetaSoft Technologies',
        date: '2023 - Today',
        location: 'San Francisco, CA',
        logo: image(path('media/ucla.png')),
        description: list(
          inline`Analyzed large datasets using SQL and Python to extract actionable insights, leading to optimized
marketing strategies and increased revenue`,
          inline`Designed and implemented data visualization dashboards using Tableau, improving data accessibility
and decision-making processes.`,
          inline`Collaborated with stakeholders to define key performance metrics and develop automated reporting
solutions, streamlining data analysis processes`,
        ),
      }),
      space,
      entry({
        styles: styles,
        title: 'Cybersecurity Consultant',
        companyOrUniversity: 'Gamma Systems Inc.',
        date: '2020 - 2022',
        location: ' London, UK',
        logo: image(path('media/ucla.png')),
        description: list(
          inline`Conducted penetration testing and vulnerability assessments for client networks, identifying
and mitigating security risks`,
          inline`Developed and implemented cybersecurity policies and procedures to ensure compliance with industry
standards and regulations`,
          inline`Provided cybersecurity training and awareness programs for employees, reducing the risk of security
incidents due to human error`,
        ),
      }),
    ),
    inline(
      section({ styles: styles, title: 'Education' }),
      space,
      entry({
        styles: styles,
        title: 'Master of Science in Computer Science',
        companyOrUniversity: 'University of California',
        date: '09/2020 - 09/2022',
        location: 'Los Angeles, USA',
        logo: 'media/ucla.png',
        description: list(
          inline`Thesis: Exploring Deep Learning Techniques for Natural Language Understanding in Chatbots`,
          inline`Minor: Mathematics`,
          inline`GPA: 4.0`,
        ),
      }),
      space,
      entry({
        styles: styles,
        title: 'Bachelor of Science in Computer Science',
        companyOrUniversity: 'University of California',
        date: '09/2017 - 09/2020',
        location: 'Los Angeles, USA',
        logo: image(path('media/ucla.png')),
        description: list(
          inline`Thesis: Design and Implementation of a Secure File Sharing System Using Blockchain Technology`,
          inline`Minor: Mathematics`,
          inline`GPA: 3.5`,
        ),
      }),
    ),
    inline(
      section({ styles: styles, title: 'Programming Expertise' }),
      space,
      entry({
        styles: styles,
        title: 'Chatbot for Mental Health Support',
        companyOrUniversity: 'Personal Project',
        date: '2023 - 2024',
        location: '',
        logo: image(path('media/ucla.png')),
        description: list(
          inline`Developed a chatbot using Python and the TensorFlow library for natural language processing`,
          inline`Implemented sentiment analysis to assess the emotional state of users during conversations`,
          inline`Integrated with external APIs to provide resources and guidance for mental health support based
on user responses`,
        ),
      }),
      space,
      entry({
        styles: styles,
        title: 'Smart Home Automation System',
        companyOrUniversity: 'Personal Project',
        date: '2020',
        location: '',
        logo: image(path('media/ucla.png')),
        description: list(
          inline`Designed a smart home automation system using Raspberry Pi and Arduino microcontrollers`,
          inline`Implemented sensors for monitoring temperature, humidity, and motion detection within the home
environment`,
          inline`Developed a web-based dashboard using HTML, CSS, and JavaScript to control and monitor connected
devices remotely`,
        ),
      }),
    ),
    inline(
      pagebreak(),
      space,
      header({
        styles: styles,
        fullName: inline`John Doe`,
        jobTitle: inline`Software Engineer with a passion for JavaScript`,
        socials: unsafeRaw.code<any>`(
    (
      icon: icons.github,
      text: [JohnDoe],
      link: "https://github.com"
    ),
    (
      icon: icons.homepage,
      text: [johndoe.com],
      link: "johndoe.com"
    ),
    (
      icon: icons.mail,
      text: [john.doe\\@email.com],
      link: "mailto://john.doe@email.com"
    ),
    (
      icon: icons.linkedin,
      text: [John Doe],
      link: "https://linkedin.com/"
    )
  )`,
        profilePicture: image(path('media/avatar.jpeg')),
      }),
    ),
    inline(
      section({ styles: styles, title: 'Skills & Interests' }),
      space,
      skill({
        styles: styles,
        category: 'Technology',
        skills: ['Cybersecurity', 'Cloud Computing', 'Internt of Things', 'Svelte'],
      }),
      space,
      skill({
        styles: styles,
        category: 'Languages',
        skills: ['English (native)', 'French (fluent)', 'Chinese (Basics)'],
      }),
      space,
      skill({ styles: styles, category: 'Sports', skills: ['Gym', 'Baseball', 'Cricekt'] }),
      space,
      skill({ styles: styles, category: 'Interests', skills: ['Photography', 'Travel', 'Music'] }),
    ),
  )
}
