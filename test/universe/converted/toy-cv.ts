// Converted from test/universe/corpus/toy-cv.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  blocks,
  cm,
  define,
  doc,
  external,
  fr,
  image,
  importPackage,
  inline,
  let_,
  linebreak,
  m,
  path,
  rgb,
  show,
  smartquote,
  space,
  strong,
  v,
} from '../../../src/index.ts'

export default () => {
  const contactSection = define('contact-section')
    .named('contact-entries', T.any, null)
    .named('i18n', T.any, null)
    .named('main-color', T.any, null)
    .returns(T.any)
    .external()
  const leftSection = define('left-section')
    .pos('arg1', T.content)
    .named('title', T.any, null)
    .returns(T.any)
    .external()
  const cv = external('cv')
  const rightColumnSubtitle = define('right-column-subtitle').pos('arg1', T.any).returns(T.any).external()
  const cvEntry = define('cv-entry')
    .pos('arg1', T.content)
    .named('date', T.any, null)
    .named('subtitle', T.content, [])
    .named('title', T.content, [])
    .returns(T.any)
    .external()
  const cv_with = define('with')
    .named('avatar', T.any, null)
    .named('avatar-size', T.any, null)
    .named('left-content', T.any, null)
    .named('subtitle', T.content, [])
    .named('title', T.any, null)
    .returns(T.any)
    .external(cv)
  const [mainColorDecl, mainColor] = let_('main-color', rgb('#E40019'))
  const [leftContentDecl, leftContent] = let_(
    'left-content',
    inline(
      space,
      contactSection({
        mainColor: mainColor,
        i18n: 'en',
        contactEntries: [
          { logoName: 'envelope', logoLink: 'mailto:john.doe@example.com', logoText: 'john.doe@example.com' },
          {
            logoName: 'github',
            logoLink: 'https://github.com/404',
            logoText: 'GitHub - John Doe',
            logoFont: 'Font Awesome 6 Brands',
          },
          { logoName: 'location-dot', logoText: 'Moon' },
          { logoName: 'phone', logoLink: 'tel:+1234567890', logoText: '+1 234 567 890' },
          {
            logoName: 'linkedin',
            logoLink: 'https://www.linkedin.com/in/johndoe/',
            logoText: 'LinkedIn - John Doe',
            logoFont: 'Font Awesome 6 Brands',
          },
          { logoName: 'globe', logoLink: 'https://johndoe.com', logoText: 'johndoe.com' },
          { logoName: 'car', logoText: 'Driving License' },
          { logoName: 'graduation-cap', logoText: "Master's Degree in Computer Science" },
          { logoText: '20 years old', logoName: 'cake-candles' },
        ],
      }),
      space,
      v(fr(1)),
      space,
      leftSection(
        { title: 'Languages' },
        inline`${space}French (Native)${linebreak()} English (Fluent)${linebreak()} Spanish (Intermediate)${linebreak()}
German (Basic)${space}`,
      ),
      space,
      v(fr(1)),
      space,
      leftSection(
        { title: 'Skills & Knowledge' },
        blocks(
          inline`${strong(inline`Programming tools :`)} Python, JavaScript, Django, Flask, React, Node.js, Docker,
Kubernetes`,
          inline`${strong(inline`Cloud platforms :`)} AWS, Google Cloud Platform, Azure`,
          inline`${strong(inline`Databases :`)} PostgreSQL, MySQL, MongoDB`,
          inline`${strong(inline`Version control :`)} Git, GitHub, GitLab`,
          inline`${strong(inline`Methodologies :`)} Agile, Scrum, DevOps`,
          inline`${strong(inline`Soft skills :`)} Teamwork, Problem-solving, Communication, Adaptability, Time
Management`,
        ),
      ),
      space,
      v(fr(1)),
      space,
      leftSection(
        { title: 'Certifications' },
        inline`${space}Certified Kubernetes Administrator (CKA)${linebreak()} AWS Certified Solutions Architect${linebreak()}
Google Professional Cloud Architect${space}`,
      ),
      space,
      v(fr(1)),
      space,
      leftSection(
        { title: 'Interests' },
        inline`${space}Open Source Contributions, Cloud Computing, Artificial Intelligence, Hiking, Photography${space}`,
      ),
      space,
    ),
  )
  return doc(
    importPackage('@preview/toy-cv:0.1.0', [contactSection, leftSection, cv, rightColumnSubtitle, cvEntry]),
    mainColorDecl,
    leftContentDecl,
    show(
      cv_with({
        title: 'John Doe',
        subtitle: inline`${space}Young graduate in Computer Science from the University of Technology${linebreak()} ${strong(inline`Available from January 2024 for a full-time position`)}${linebreak()}${space}`,
        avatar: image(path('assets/avatar.png')),
        avatarSize: cm(2.2),
        leftContent: leftContent,
      }),
    ),
    inline(
      rightColumnSubtitle('Professional Experience'),
      space,
      cvEntry(
        {
          title: inline`${space}${strong(inline`Developer`)}, Engineering Internship${space}`,
          date: '2020 - Present',
          subtitle: inline`Tech Innovations, Paris, France`,
        },
        blocks(
          m.list(
            m.item(['Developed and maintained web applications using Python and Django.']),
            m.item(['Collaborated with product managers to gather requirements and deliver features.']),
            m.item(['Implemented RESTful APIs and integrated third-party services.']),
          ),
        ),
      ),
    ),
    inline(v(fr(1))),
    inline(
      cvEntry(
        {
          title: inline`${space}${strong(inline`Software Engineer Intern`)}, Summer Internship${space}`,
          date: '2019',
          subtitle: inline`Tech Solutions, San Francisco, CA`,
        },
        blocks(
          m.list(
            m.item(['Assisted in the development of a cloud-based application using Python and Docker.']),
            m.item(['Conducted testing and debugging to ensure software quality.']),
            m.item(['Participated in daily stand-ups and sprint planning meetings.']),
          ),
        ),
      ),
    ),
    inline(v(fr(1))),
    inline(
      cvEntry(
        {
          title: inline`${space}${strong(inline`Junior Developer`)}, Freelance${space}`,
          date: '2018 - 2019',
          subtitle: inline`Self-employed, Remote`,
        },
        blocks(
          m.list(
            m.item(['Developed small-scale web applications for local businesses.']),
            m.item(['Managed project timelines and client communications.']),
            m.item(['Gained experience in full-stack development with a focus on user experience.']),
          ),
        ),
      ),
    ),
    inline(v(fr(1))),
    inline(
      rightColumnSubtitle('Projects'),
      space,
      cvEntry(
        {
          title: inline`${space}${strong(inline`Open Source Contributor`)}, Various Projects${space}`,
          date: '2017 - Present',
          subtitle: inline`GitHub`,
        },
        blocks(
          m.list(
            m.item(['Contributed to multiple open source projects, primarily in Python and JavaScript.']),
            m.item(['Improved documentation and fixed bugs in popular libraries.']),
            m.item(['Engaged with the community through pull requests and issue discussions.']),
          ),
        ),
      ),
    ),
    inline(v(fr(1))),
    inline(
      cvEntry(
        {
          title: inline`${space}${strong(inline`Personal Project`)}, Portfolio Website${space}`,
          date: '2021',
          subtitle: inline`johndoe.com`,
        },
        blocks(
          m.list(
            m.item(['Designed and developed a personal portfolio website to showcase projects and skills.']),
            m.item(['Implemented responsive design principles for optimal viewing on various devices.']),
          ),
        ),
      ),
    ),
    inline(v(fr(1))),
    inline(rightColumnSubtitle('Education')),
    inline(
      cvEntry(
        {
          title: inline(space, strong(inline`Master's Degree in Computer Science`), space),
          date: '2018 - 2020',
          subtitle: inline`University of Technology, Paris, France`,
        },
        blocks(
          m.list(
            m.item(['Specialized in Software Engineering and Cloud Computing.']),
            m.item([
              'Completed a thesis on',
              space,
              smartquote({ double: true }),
              'Scalable Web Applications using Microservices Architecture',
              smartquote({ double: true }),
              '.',
            ]),
          ),
        ),
      ),
    ),
    inline(v(fr(1))),
    inline(
      cvEntry(
        {
          title: inline(space, strong(inline`Bachelor's Degree in Information Technology`), space),
          date: '2015 - 2018',
          subtitle: inline`University of Science, Paris, France`,
        },
        blocks(
          m.list(
            m.item(['Focused on Software Development and Database Management.']),
            m.item(['Engaged in group projects to develop practical software solutions.']),
          ),
        ),
      ),
    ),
    inline(v(fr(1))),
    inline(
      cvEntry(
        {
          title: inline(space, strong(inline`High School Diploma`), space),
          date: '2012 - 2015',
          subtitle: inline`High School of Excellence, Paris, France`,
        },
        blocks(
          m.list(
            m.item(['Graduated with honors in Science and Mathematics.']),
            m.item(['Active member of the coding club and participated in regional competitions.']),
          ),
        ),
      ),
    ),
  )
}
