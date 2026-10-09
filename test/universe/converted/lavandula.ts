// Converted from test/universe/corpus/lavandula.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  block,
  blocks,
  define,
  doc,
  document,
  emph,
  external,
  highlight,
  image,
  importPackage,
  inline,
  link,
  lorem,
  m,
  par,
  parbreak,
  path,
  pct,
  raw,
  set,
  show,
  space,
  sym,
  text,
} from '../../../src/index.ts'

export default () => {
  const lavandulaTheme = external('lavandula-theme')
  const cv = define('cv')
    .named('main-content', T.content, [])
    .named('sidebar', T.content, [])
    .named('sidebar-position', T.any, null)
    .returns(T.any)
    .external()
  const contactList = define('contact-list').pos('arg1', T.any).returns(T.any).external()
  const sidebarSection = define('sidebar-section')
    .pos('arg1', T.content)
    .named('title', T.any, null)
    .returns(T.any)
    .external()
  const skillGroup = define('skill-group')
    .named('icon', T.any, null)
    .named('icon-solid', T.any, null)
    .named('name', T.any, null)
    .named('skills', T.any, null)
    .returns(T.any)
    .external()
  const skillLevels = define('skill-levels').pos('arg1', T.any).returns(T.any).external()
  const section = define('section').pos('arg1', T.content).named('title', T.any, null).returns(T.any).external()
  const sectionElement = define('section-element')
    .pos('arg1', T.any)
    .named('info', T.content, [])
    .named('title', T.any, null)
    .returns(T.any)
    .external()
  const sizes = external('sizes')
  const iconList = define('icon-list').pos('arg1', T.any).returns(T.any).external()
  const sectionElementAdvanced = define('section-element-advanced')
    .pos('arg1', T.content)
    .named('icon', T.any, null)
    .named('info-top-left', T.any, null)
    .named('info-top-right', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external()
  const faIcon = define('fa-icon').pos('arg1', T.any).returns(T.any).external()
  const sizes_textS2 = external('text-s2', sizes)
  return doc(
    importPackage('@preview/lavandula:0.1.1', [
      lavandulaTheme,
      cv,
      contactList,
      sidebarSection,
      skillGroup,
      skillLevels,
      section,
      sectionElement,
      sizes,
      iconList,
      sectionElementAdvanced,
      faIcon,
    ]),
    show(lavandulaTheme),
    m.lines(set(text, { lang: 'en' }), set(document, { title: 'John Doe (CV)', author: 'John Doe', date: null })),
    inline(
      cv({
        sidebarPosition: 'left',
        sidebar: blocks(
          m.lines(m.heading(1, 'John Doe'), m.heading(4, 'Software Engineer')),
          inline(
            contactList([
              { icon: 'at', iconSolid: true, text: link('mailto:john@doe.com', inline`john@doe.com`) },
              {
                icon: 'linkedin',
                text: link('https://linkedin.com/in/john-doe-818817', inline`linkedin.com/in/john-doe-818817`),
              },
              { icon: 'pencil', text: link('https://blog.johndoe.com/') },
              { icon: 'phone', text: '(123) 456-789' },
            ]),
          ),
          inline(
            sidebarSection(
              { title: 'About me' },
              blocks(
                m.lines(
                  set(par, { justify: true }),
                  show(par, (it, ctx) => block({ width: pct(100) }, it)),
                ),
                inline`Creative and detail-oriented Software Engineer with over ${highlight(inline`5 years of experience`)}
building responsive web applications and dynamic backend services.`,
                inline`Passionate about ${highlight(inline`clean code`)}, ${highlight(inline`user-first design`)},
and ${highlight(inline`scalable solutions`)}. I thrive in fast-paced environments and love collaborating
across teams to bring ideas to life.`,
              ),
            ),
          ),
          inline(
            sidebarSection(
              { title: 'Technical skills' },
              blocks(
                inline(
                  skillGroup({
                    name: 'Frontend Development',
                    icon: 'chrome',
                    skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript', 'React', 'Vue.js'],
                  }),
                ),
                inline(
                  skillGroup({
                    name: 'Backend Development',
                    icon: 'python',
                    skills: ['Node.js', 'Express.js', 'Python', 'PHP', 'Django', 'FastAPI', 'REST', 'GraphQL'],
                  }),
                ),
                inline(
                  skillGroup({
                    name: 'Databases',
                    icon: 'database',
                    skills: [
                      'MySQL',
                      'SQLite',
                      'MongoDB',
                      'Redis',
                      'PostgreSQL',
                      'Sequelize',
                      'TypeORM',
                      'Database design',
                      'Normalization',
                    ],
                  }),
                ),
                inline(
                  skillGroup({
                    name: 'DevOps & Cloud',
                    icon: 'cloud',
                    iconSolid: true,
                    skills: ['GitLab CI/CD', 'AWS', 'EC2', 'Lambda', 'S3', 'CloudWatch', 'Nginx', 'Bash'],
                  }),
                ),
                inline(
                  skillGroup({ name: 'Tools', icon: 'tools', skills: ['Git', 'Docker', 'Figma', 'Jira', 'Typst'] }),
                ),
              ),
            ),
          ),
          inline(
            sidebarSection(
              { title: 'Languages' },
              inline(
                space,
                skillLevels([
                  { icon: image(path('assets/flags/gb.png')), text: 'English', level: pct(100) },
                  { icon: image(path('assets/flags/fr.png')), text: 'French', level: pct(60) },
                ]),
                space,
              ),
            ),
          ),
        ),
        mainContent: blocks(
          inline(
            section(
              { title: 'Experience' },
              blocks(
                inline(
                  sectionElement(
                    {
                      title: 'Senior Full Stack Developer @ Web World Digital',
                      info: inline(emph(inline`2021 --- Current`)),
                    },
                    inline`${space}Part of the Core Web Applications team, leading development efforts on a customer-facing
SaaS platform and collaborating closely with UI/UX designers. ${set(text, { size: sizes_textS2 })}
${iconList([
  { icon: 'wrench', text: inline`Led migration of legacy Angular frontend to modern React stack.` },
  {
    icon: 'rocket',
    text: inline`Architected scalable REST API used by over ${highlight(inline`150K monthly active users`)}.`,
  },
  { icon: 'graduation-cap', text: inline`Mentored junior developers and introduced weekly code review practices.` },
])}${space}`,
                  ),
                ),
                inline(
                  sectionElement(
                    { title: 'Web Developer @ Ultimate Tech Solutions', info: inline(emph(inline`2018 --- 2021`)) },
                    inline`${space}Joined a startup building HIPAA-compliant medical scheduling software. ${set(text, { size: sizes_textS2 })}
${iconList([
  { icon: 'scroll', text: inline`Wrote Python scripts to automate test coverage reports and API contract checks.` },
  { icon: 'react', text: inline`Built UI components using React and Redux, including calendar widgets and modals.` },
  {
    icon: 'shield-halved',
    text: inline`Gained exposure to secure coding practices and healthcare data privacy standards.`,
  },
])}${space}`,
                  ),
                ),
                inline(
                  sectionElement(
                    { title: 'Software Engineering Intern @ Mad Tech', info: inline(emph(inline`2017`)) },
                    lorem(20),
                  ),
                ),
                parbreak(),
              ),
            ),
          ),
          inline(
            section(
              { title: 'Achievements' },
              blocks(
                inline(
                  sectionElement(
                    { title: 'Awards' },
                    blocks(
                      m.lines(
                        set(text, { size: sizes_textS2 }),
                        inline(
                          iconList([
                            {
                              icon: 'trophy',
                              text: inline`${highlight(inline`Winner of Crazy Hackathon (2023)`)}: built a smart application to form campus
study groups based on subject, schedule and location.`,
                            },
                            {
                              icon: 'medal',
                              text: inline`${highlight(inline`OpenAI Hackathon finalist (2022)`)}: team project using AI for real-time
code documentation generation. Helped a nonprofit increase organic traffic by 180% via Next.js
SSR tweaks.`,
                            },
                          ]),
                        ),
                      ),
                    ),
                  ),
                ),
                inline(
                  sectionElement(
                    { title: 'Projects' },
                    blocks(
                      m.lines(
                        set(text, { size: sizes_textS2 }),
                        inline(
                          iconList([
                            {
                              icon: 'pepper-hot',
                              text: inline`MyMealz: a React Native app to plan, share and rate meals (${highlight(inline`10K+ downloads`)}).`,
                            },
                            {
                              icon: 'star',
                              iconSolid: true,
                              text: inline`AI-Powered Portfolio Analyzer: built a tool using GPT-4 API to give feedback on resumes.`,
                            },
                          ]),
                        ),
                      ),
                    ),
                  ),
                ),
                inline(
                  sectionElement(
                    { title: 'Contributions' },
                    blocks(
                      m.lines(
                        set(text, { size: sizes_textS2 }),
                        inline(
                          iconList([
                            {
                              icon: 'github',
                              text: inline`Regular contributor to ${raw('react-hook-form')} and ${raw('is-even')} on GitHub.`,
                            },
                            { icon: 'gitlab', text: inline`Submitted over 40 PRs across 10+ public repositories.` },
                          ]),
                        ),
                      ),
                    ),
                  ),
                ),
              ),
            ),
          ),
          inline(
            section(
              { title: 'Education' },
              blocks(
                inline(
                  sectionElementAdvanced(
                    {
                      title: "Hope's Peak Academy",
                      infoTopLeft: '2018',
                      infoTopRight: 'Paris, France',
                      icon: faIcon('circle-half-stroke'),
                    },
                    blocks(
                      m.lines(
                        set(text, { size: sizes_textS2 }),
                        inline`${emph(inline`B.S. in Computer Science`)} (${highlight(inline`GPA 4.0`)}) ${iconList([
                          {
                            icon: 'graduation-cap',
                            text: inline`Relevant courses: Data Structures, Algorithms, Web Application Development, Computer Networks,
Operating Systems, Databases & Information Systems`,
                          },
                          {
                            icon: 'futbol',
                            text: inline`Activities: Coding Club (President), Ice Skating, Teaching Assistant`,
                          },
                        ])}`,
                      ),
                    ),
                  ),
                ),
                inline(
                  sectionElementAdvanced(
                    { title: 'Certificate in Cloud Architecture', infoTopLeft: '2022' },
                    blocks(
                      m.lines(set(text, { size: sizes_textS2 }), inline(emph(inline`Google Cloud Professional Track`))),
                    ),
                  ),
                ),
              ),
            ),
          ),
        ),
      }),
    ),
  )
}
