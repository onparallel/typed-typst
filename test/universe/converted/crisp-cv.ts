// Converted from test/universe/corpus/crisp-cv.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  blocks,
  define,
  doc,
  emph,
  external,
  importPackage,
  inches,
  inline,
  link,
  m,
  pt,
  show,
  space,
} from '../../../src/index.ts'

export default () => {
  const cv = external('cv')
  const skills = define('skills')
    .pos('arg1', T.any)
    .pos('arg2', T.any)
    .pos('arg3', T.any)
    .pos('arg4', T.any)
    .pos('arg5', T.any)
    .returns(T.any)
    .external()
  const record = define('record')
    .pos('arg1', T.content)
    .named('location', T.any, null)
    .named('primary', T.any, null)
    .named('secondary', T.any, null)
    .named('timespan', T.any, null)
    .returns(T.any)
    .external()
  const badge = define('badge').pos('arg1', T.any).returns(T.any).external()
  const cv_with = define('with')
    .named('config', T.any, null)
    .named('contact', T.any, null)
    .named('links', T.any, null)
    .named('name', T.any, null)
    .returns(T.any)
    .external(cv)
  return doc(
    importPackage('@preview/crisp-cv:1.0.0', [cv, skills, record, badge]),
    show(
      cv_with({
        name: 'John Doe',
        contact: ['1847 Maple Crescent, Ottawa', '+1 (613) 555-1337', link('mailto:john.doe@mailbox.ca')],
        links: [
          link('https://gitlab.com/jdoe', inline`gitlab.com/jdoe`),
          link('https://linkedin.com/in/johndoe', inline`linkedin.com/in/johndoe`),
        ],
        config: { paper: 'a4', pageMargin: inches(0.6), font: 'Source Sans Pro', fontSize: pt(11), showFooter: true },
      }),
    ),
    m.lines(
      m.heading(1, 'Skills'),
      inline(
        skills(
          [
            'Natural Languages',
            inline`English ${emph(inline`(native)`)}, French ${emph(inline`(professional)`)}, Spanish ${emph(inline`(basic)`)}`,
          ],
          ['Programming Languages', 'Rust, Java, Python, TypeScript, JavaScript, C/C++'],
          ['Technologies', 'Git, Kubernetes, Ansible, PostgreSQL, Redis'],
          [
            'Security',
            'Application Security, Threat Modeling, IAM, Delegated Authorization, SSDLC, Supply Chain Security, Post-Quantum Cryptography',
          ],
          ['Project Management', 'GitLab, GitHub, Jira, Confluence, Agile Development / Scrum'],
        ),
      ),
    ),
    m.lines(
      m.heading(1, 'Professional Experience'),
      inline(
        record(
          {
            primary: 'Senior Security Software Engineer',
            secondary: 'Cipher & Sons Security Consulting Ltd.',
            location: 'Toronto, ON, Canada',
            timespan: 'April 2022 - Present',
          },
          blocks(
            m.list(
              m.item(['Designed and implemented secure backend services in Rust and Java for enterprise customers.']),
              m.item(['Led threat modeling workshops during architecture reviews.']),
              m.item(['Introduced automated SAST and dependency scanning into CI/CD pipelines.']),
              m.item(['Performed security code reviews and mentored developers on secure coding practices.']),
              m.item(['Coordinated responsible vulnerability disclosure with client engineering teams.']),
            ),
          ),
        ),
      ),
    ),
    inline(
      record(
        {
          primary: 'Application Security Engineer',
          secondary: 'NullPointer Insurance Group',
          location: 'Dublin, Ireland',
          timespan: 'August 2019 - March 2022',
        },
        blocks(
          m.lines(
            m.list(
              m.item(['Embedded security into agile development teams.']),
              m.item(['Built internal tooling for vulnerability management using Python.']),
              m.item(['Conducted penetration testing of web applications and REST APIs.']),
              m.item(['Reduced critical security findings by introducing secure coding guidelines.']),
            ),
            inline(badge('References available upon request')),
          ),
        ),
      ),
    ),
    inline(
      record(
        {
          primary: 'Software Engineer',
          secondary: 'ByteShield Technologies',
          location: 'Cork, Ireland',
          timespan: 'July 2017 - July 2019',
        },
        blocks(
          m.list(
            m.item(['Developed Java microservices for cloud-hosted applications.']),
            m.item(['Implemented authentication and authorization features using OAuth2 and OIDC.']),
            m.item(['Automated testing and deployment workflows using GitLab CI.']),
          ),
        ),
      ),
    ),
    inline(
      record(
        {
          primary: 'Security Software Engineering Intern',
          secondary: 'Hack to the Future Labs',
          location: 'Galway, Ireland',
          timespan: 'May 2016 - August 2016',
        },
        blocks(
          m.list(
            m.item(['Assisted in developing internal security assessment tools.']),
            m.item(['Documented security findings for customer reports.']),
          ),
        ),
      ),
    ),
    m.lines(
      m.heading(1, 'Education'),
      inline(
        record(
          {
            primary: 'Bachelor of Science in Computer Science',
            secondary: 'University College Cork',
            location: 'Cork, Ireland',
            timespan: '2013 - 2017',
          },
          blocks(
            m.list(
              m.item(['Focus: Software Engineering and Computer Security']),
              m.item([
                'Final Year Project:',
                space,
                emph(inline`Static Analysis Techniques for Detecting Security Vulnerabilities in Web Applications`),
              ]),
            ),
          ),
        ),
      ),
    ),
    inline(
      record(
        {
          primary: 'Leaving Certificate',
          secondary: "St. Brendan's Community College",
          location: 'Cork, Ireland',
          timespan: '2013',
        },
        inline(),
      ),
    ),
  )
}
