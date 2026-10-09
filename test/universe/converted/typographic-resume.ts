// Converted from test/universe/corpus/typographic-resume.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  codeBlock,
  define,
  doc,
  external,
  grid,
  image,
  importPackage,
  inline,
  line,
  link,
  pct,
  pt,
  set,
  show,
  space,
  stack,
  text,
} from '../../../src/index.ts'

export default () => {
  const resume = external('resume')
  const section = define('section')
    .pos('arg1', T.any)
    .pos('arg2', T.any)
    .named('theme', T.any, null)
    .returns(T.any)
    .external()
  const contactEntry = define('contact-entry').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const githubIcon = external('github-icon')
  const phoneIcon = external('phone-icon')
  const emailIcon = external('email-icon')
  const languageEntry = define('language-entry').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const workEntry = define('work-entry')
    .pos('arg1', T.content)
    .named('location', T.any, null)
    .named('organization', T.any, null)
    .named('theme', T.any, null)
    .named('timeframe', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external()
  const defaultTheme = external('default-theme')
  const educationEntry = define('education-entry')
    .pos('arg1', T.content)
    .named('institution', T.any, null)
    .named('timeframe', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external()
  const resume_with = define('with')
    .named('aside', T.any, null)
    .named('bio', T.content, [])
    .named('first-name', T.any, null)
    .named('last-name', T.any, null)
    .named('profession', T.any, null)
    .named('theme', T.any, null)
    .returns(T.any)
    .external(resume)
  const defaultTheme_margin = external('margin', defaultTheme)
  return doc(
    importPackage('@preview/typographic-resume:0.2.0', [
      resume,
      section,
      contactEntry,
      githubIcon,
      phoneIcon,
      emailIcon,
      languageEntry,
      workEntry,
      defaultTheme,
      educationEntry,
    ]),
    show(
      resume_with({
        theme: [],
        firstName: 'Paul',
        lastName: 'Dupont',
        profession: 'Software Engineer',
        bio: inline`${space}Experienced software engineer with a passion for developing innovative programs that
expedite the efficiency and effectiveness of organizational success.`,
        aside: codeBlock([
          section(
            'Contact',
            codeBlock([
              set(image, { width: pt(8) }),
              contactEntry(githubIcon, link('https://github.com/pauldupont/', 'pauldupont')),
              line({ stroke: pt(0.1), length: pct(100) }),
              contactEntry(phoneIcon, link('tel:+33 6 78 90 12 34', '+33 6 78 90 12 34')),
              line({ stroke: pt(0.1), length: pct(100) }),
              contactEntry(emailIcon, link('mailto:pauldupont@example.com', 'pauldupont@example.com')),
            ]),
          ),
          section(
            'Main public contributions',
            codeBlock(
              [set(text, { font: 'Roboto', size: pt(8) })],
              stack(
                { spacing: pt(8) },
                link('https://github.com/tsnobip/typst-typographic-resume', 'tsnobip/typst-typographic-resume'),
                link('https://github.com/typst/typst', 'typst/typst'),
                link('https://github.com/rescript-lang/rescript', 'rescript-lang/rescript'),
                link('https://github.com/pauldupont/devops-toolkit', 'pauldupont/devops-toolkit'),
                link('https://github.com/pauldupont/real-time-chat-app', 'pauldupont/real-time-chat-app'),
              ),
            ),
          ),
          section(
            'Tech Stack',
            codeBlock(
              [set(text, { font: 'Roboto', size: pt(8) })],
              stack(
                { spacing: pt(8) },
                'Python',
                'JavaScript',
                'ReScript',
                'React',
                'Node.js',
                'Django',
                'PostgreSQL',
                'Docker',
                'Kubernetes',
              ),
            ),
          ),
          section(
            'Languages',
            codeBlock([
              languageEntry('English', 'Native'),
              languageEntry('Spanish', 'Fluent'),
              languageEntry('German', 'Intermediate'),
            ]),
          ),
          section(
            'Interests',
            codeBlock(
              [set(text, { size: pt(7) })],
              stack({ spacing: pt(8) }, 'Open Source Contributions', 'Road biking', 'Traveling'),
            ),
          ),
        ]),
      }),
    ),
    inline(
      section(
        { theme: { spaceAbove: pt(0) } },
        'Work Experiences',
        codeBlock([
          workEntry(
            {
              theme: { spaceAbove: pt(0) },
              timeframe: 'Jan 2024 - Today',
              title: 'Senior Software Engineer for local e-commerce platform',
              organization: 'Tech Innovators Inc.',
              location: 'Lyon, FR',
            },
            inline`${space}Led a team of developers to design and implement scalable web applications. Improved
system performance by 30% through code optimization. Mentored junior developers, fostering a
culture of continuous learning. Spearheaded the migration of legacy systems to modern cloud-based
infrastructure.${space}`,
          ),
          workEntry(
            {
              timeframe: 'Oct 2020 - December 2023',
              title: 'Software Engineer',
              organization: 'CodeCraft Solutions',
              location: 'San Francisco, USA',
            },
            inline`${space}Developed and maintained RESTful APIs for client applications. Collaborated with cross-functional
teams to deliver high-quality software. Implemented CI/CD pipelines, reducing deployment times
by 40%. Conducted code reviews to ensure adherence to best practices and coding standards.${space}`,
          ),
          workEntry(
            {
              timeframe: 'Jul 2019 - Oct 2020',
              title: 'Junior Software Engineer',
              organization: 'NextGen Tech',
              location: 'Tbilisi, GE',
            },
            inline`${space}Assisted in the development of e-commerce platforms. Wrote unit tests to ensure code
reliability and maintainability. Participated in agile ceremonies, contributing to sprint planning
and retrospectives. Researched and implemented new tools to improve development workflows.${space}`,
          ),
          workEntry(
            { timeframe: 'Nov 2018 - Jun 2019', title: 'Intern', organization: 'Startup Hub', location: 'Paris, FR' },
            inline`${space}Supported the development team in debugging and testing applications. Gained hands-on
experience with modern web technologies. Created technical documentation for internal tools
and processes. Assisted in the deployment of a new customer-facing web application.${space}`,
          ),
          workEntry(
            {
              timeframe: 'Jun 2017 - Oct 2018',
              title: 'Freelance Developer',
              organization: 'Self-Employed',
              location: 'Remote',
            },
            inline`${space}Designed and developed custom websites for small businesses. Provided technical support
and maintenance for client projects. Built responsive and user-friendly interfaces using modern
web technologies. Managed multiple projects simultaneously, ensuring timely delivery.${space}`,
          ),
          workEntry(
            {
              timeframe: 'Jan 2016 - May 2017',
              title: 'Research Assistant',
              organization: 'École des Mines de St-Étienne',
              location: 'St-Étienne, France',
            },
            inline`${space}Conducted research on algorithms for optimizing large-scale systems. Published findings
in peer-reviewed journals and presented at conferences. Developed prototypes to validate research
concepts. Collaborated with a multidisciplinary team to achieve project goals.${space}`,
          ),
        ]),
      ),
    ),
    inline(
      section(
        'Education',
        grid(
          { columns: 2, columnGutter: defaultTheme_margin },
          educationEntry(
            {
              title: 'MSc in Computer Science',
              institution: 'École des Mines de St-Étienne, FR',
              timeframe: '2014 - 2017',
            },
            inline`Focused on software engineering, algorithms, and data structures.`,
          ),
          educationEntry(
            {
              title: 'PhD in Artificial Intelligence',
              institution: 'Seoul National University, KR',
              timeframe: '2017 - 2021',
            },
            inline`Specialized in machine learning and natural language processing.`,
          ),
        ),
      ),
    ),
  )
}
