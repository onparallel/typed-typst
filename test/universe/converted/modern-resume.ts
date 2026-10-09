// Converted from test/universe/corpus/modern-resume.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  blocks,
  colbreak,
  define,
  dict,
  doc,
  external,
  image,
  importPackage,
  inline,
  let_,
  link,
  lorem,
  m,
  path,
  rgb,
  show,
  space,
} from '../../../src/index.ts'

export default () => {
  const modernResume = external('modern-resume')
  const experience = define('experience')
    .named('date-from', T.any, null)
    .named('date-to', T.any, null)
    .named('facility-description', T.any, null)
    .named('label', T.any, null)
    .named('subtitle', T.any, null)
    .named('task-description', T.content, [])
    .named('theme', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external()
  const project = define('project')
    .named('date-from', T.any, null)
    .named('date-to', T.any, null)
    .named('description', T.content, [])
    .named('subtitle', T.any, null)
    .named('theme', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external()
  const pill = define('pill')
    .pos('arg1', T.any)
    .named('fill', T.any, null)
    .named('theme', T.any, null)
    .returns(T.any)
    .external()
  const modernResume_with = define('with')
    .named('author', T.any, null)
    .named('avatar', T.any, null)
    .named('bio', T.any, null)
    .named('contact-options', T.any, null)
    .named('job-title', T.any, null)
    .named('theme', T.any, null)
    .returns(T.any)
    .external(modernResume)
  const [customThemeDecl, customTheme] = let_(
    'custom-theme',
    dict({
      primary: rgb('#313C4E'),
      secondary: rgb('#222A33'),
      accentColor: rgb('#449399'),
      textPrimary: rgb('#000000'),
      textSecondary: rgb('#7C7C7C'),
      textMuted: rgb('#ffffff'),
    }),
  )
  return doc(
    importPackage('@preview/modern-resume:1.0.0', [modernResume, experience, project, pill]),
    customThemeDecl,
    show(
      modernResume_with({
        author: 'John Doe',
        jobTitle: 'Data Scientist',
        bio: lorem(5),
        avatar: image(path('avatar.png')),
        contactOptions: {
          email: link('mailto:john.doe@gmail.com', inline`john.doe@gmail.com`),
          mobile: '+43 1234 5678',
          location: 'Austria',
          linkedin: link('https://www.linkedin.com/in/jdoe', inline`linkedin/jdoe`),
          github: link('https://github.com/jdoe', inline`github.com/jdoe`),
          website: link('https://jdoe.dev', inline`jdoe.dev`),
        },
        theme: customTheme,
      }),
    ),
    m.heading(2, 'Education'),
    inline(
      experience({
        title: "Master's degree",
        subtitle: 'University of Sciences',
        taskDescription: blocks(
          m.list(
            m.item(['Short summary of the most important courses']),
            m.item(['Explanation of master thesis topic']),
          ),
        ),
        dateFrom: '10/2021',
        dateTo: '07/2023',
        label: 'Courses',
        theme: customTheme,
      }),
    ),
    inline(
      experience({
        title: "Bachelor's degree",
        subtitle: 'University of Sciences',
        taskDescription: blocks(
          m.list(
            m.item(['Short summary of the most important courses']),
            m.item(['Explanation of bachelor thesis topic']),
          ),
        ),
        dateFrom: '09/2018',
        dateTo: '07/2021',
        label: 'Courses',
        theme: customTheme,
      }),
    ),
    inline(
      experience({
        title: 'College for Science',
        subtitle: 'College of XY',
        taskDescription: blocks(m.list(m.item(['Short summary of the most important courses']))),
        dateFrom: '09/2018',
        dateTo: '07/2021',
        label: 'Courses',
        theme: customTheme,
      }),
    ),
    m.heading(2, 'Work experience'),
    inline(
      experience({
        title: 'Data Scientist',
        subtitle: 'Some Company',
        facilityDescription: 'Company operating in sector XY',
        taskDescription: blocks(m.list(m.item(['Short summary of your responsibilities']))),
        dateFrom: '08/2021',
        label: 'Achievements/Tasks',
        theme: customTheme,
      }),
    ),
    inline(
      experience({
        title: 'Full Stack Software Engineer',
        subtitle: inline(link('https://www.google.com', inline`Some IT Company`)),
        facilityDescription: 'Company operating in sector XY',
        taskDescription: blocks(m.list(m.item(['Short summary of your responsibilities']))),
        dateFrom: '09/2018',
        dateTo: '07/2021',
        label: 'Achievements/Tasks',
        theme: customTheme,
      }),
    ),
    inline(
      experience({
        title: 'Internship',
        subtitle: inline(link('https://www.google.com', inline`Some IT Company`)),
        facilityDescription: 'Company operating in sector XY',
        taskDescription: blocks(m.list(m.item(['Short summary of your responsibilities']))),
        dateFrom: '09/2015',
        dateTo: '07/2016',
        label: 'Achievements/Tasks',
        theme: customTheme,
      }),
    ),
    inline(colbreak()),
    m.heading(2, 'Skills'),
    inline(
      pill({ fill: true, theme: customTheme }, 'Teamwork'),
      space,
      pill({ fill: true, theme: customTheme }, 'Critical thinking'),
      space,
      pill({ fill: true, theme: customTheme }, 'Problem solving'),
    ),
    m.heading(2, 'Projects'),
    inline(
      project({
        title: inline(link('https://www.google.com', inline`Project 1`)),
        description: blocks(m.list(m.item([lorem(20)]))),
        dateFrom: '08/2022',
        theme: customTheme,
      }),
    ),
    inline(
      project({
        title: 'Project 2',
        subtitle: 'Data Visualization, Data Engineering',
        description: blocks(m.list(m.item([lorem(20)]))),
        dateFrom: '08/2022',
        dateTo: '09/2022',
        theme: customTheme,
      }),
    ),
    m.heading(2, 'Certificates'),
    inline(
      project({
        title: 'Certificate of XY',
        subtitle: 'Issued by authority XY',
        dateFrom: '08/2022',
        dateTo: '09/2022',
        theme: customTheme,
      }),
    ),
    inline(
      project({
        title: 'Certificate of XY',
        subtitle: 'Issued by authority XY',
        dateFrom: '05/2021',
        theme: customTheme,
      }),
    ),
    inline(project({ title: 'Certificate of XY', subtitle: 'Issued by authority XY', theme: customTheme })),
    m.heading(2, 'Languages'),
    inline(pill({ theme: customTheme }, 'German (native)'), space, pill({ theme: customTheme }, 'English (C1)')),
    m.heading(2, 'Interests'),
    inline(
      pill({ theme: customTheme }, 'Maker-culture'),
      space,
      pill({ theme: customTheme }, 'Science'),
      space,
      pill({ theme: customTheme }, 'Sports'),
    ),
  )
}
