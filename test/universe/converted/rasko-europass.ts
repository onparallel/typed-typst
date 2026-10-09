// Converted from test/universe/corpus/rasko-europass.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  blocks,
  define,
  doc,
  external,
  importPackage,
  inline,
  m,
  show,
  smartquote,
  space,
  strong,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const cvEntry = define('cv-entry')
    .named('date-end', T.any, null)
    .named('date-start', T.any, null)
    .named('description', T.content, [])
    .named('location', T.any, null)
    .named('organization', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external()
  const europassCv = external('europass-cv')
  const l = external('l')
  const europassCv_with = define('with')
    .named('address', T.any, null)
    .named('author', T.any, null)
    .named('city', T.any, null)
    .named('comm-skills', T.content, [])
    .named('country', T.any, null)
    .named('date-of-birth', T.any, null)
    .named('digital-skills', T.content, [])
    .named('driving-licence', T.any, null)
    .named('education', T.any, null)
    .named('email', T.any, null)
    .named('gender', T.any, null)
    .named('job-skills', T.content, [])
    .named('lang', T.any, null)
    .named('mother-tongue', T.any, null)
    .named('name', T.any, null)
    .named('nationality', T.any, null)
    .named('org-skills', T.content, [])
    .named('other-languages', T.any, null)
    .named('phone', T.any, null)
    .named('photo', T.any, null)
    .named('photo-alt', T.any, null)
    .named('postal-code', T.any, null)
    .named('signature-date', T.any, null)
    .named('signature-place', T.any, null)
    .named('title', T.any, null)
    .named('work-experience', T.any, null)
    .returns(T.any)
    .external(europassCv)
  return doc(
    importPackage('@preview/rasko-europass:1.0.0', [cvEntry, europassCv, l]),
    show(
      europassCv_with({
        lang: 'en',
        title: 'Curriculum Vitae — Mario Rossi',
        author: 'Mario Rossi',
        name: 'Mario Rossi',
        photo: 'assets/photo-placeholder.svg',
        photoAlt: unsafeRaw.code<any>`l("en").at("photo-alt")`,
        address: 'Via Roma 42',
        postalCode: '00100',
        city: 'Rome',
        country: 'Italy',
        phone: '+39 333 1234567',
        email: 'mario.rossi@email.it',
        nationality: 'Italian',
        dateOfBirth: '15/03/1990',
        gender: 'male',
        workExperience: [
          cvEntry({
            dateStart: 'Jan 2021',
            dateEnd: 'Present',
            title: 'Senior Software Engineer',
            organization: 'Tech Solutions S.p.A.',
            location: 'Milan, Italy',
            description: blocks(
              m.list(
                m.item(['Designed and developed cloud-native microservices on AWS (Lambda, ECS, SQS)']),
                m.item(['Coordinated an Agile team of six developers, with code review and mentoring']),
                m.item(['Migrated the legacy monolithic architecture towards an event-driven architecture']),
                m.item(['Reduced deployment times by 40% through CI/CD pipelines with GitHub Actions']),
              ),
            ),
          }),
          cvEntry({
            dateStart: 'Sep 2018',
            dateEnd: 'Dec 2020',
            title: 'Software Developer',
            organization: 'Digital Innovators S.r.l.',
            location: 'Turin, Italy',
            description: blocks(
              m.list(
                m.item(['Full-stack development of web applications with React, TypeScript and Node.js']),
                m.item(['Designed and optimised PostgreSQL databases for high-concurrency systems']),
                m.item(['Built RESTful APIs documented with OpenAPI/Swagger']),
                m.item(['Drove the migration of the entire codebase from JavaScript to TypeScript']),
              ),
            ),
          }),
          cvEntry({
            dateStart: 'Mar 2016',
            dateEnd: 'Aug 2018',
            title: 'Junior Developer',
            organization: 'WebAgency Creative',
            location: 'Rome, Italy',
            description: blocks(
              m.list(
                m.item(['Developed responsive websites with HTML5, CSS3, JavaScript and WordPress']),
                m.item(['Collaborated with the design team on UI/UX interface implementation']),
                m.item(['Maintained and updated existing websites for over 30 clients']),
              ),
            ),
          }),
        ],
        education: [
          cvEntry({
            dateStart: '2013',
            dateEnd: '2015',
            title: 'MSc in Computer Engineering',
            organization: 'Politecnico di Milano',
            location: 'Milan, Italy',
            description: blocks(
              m.list(
                m.item(['Final grade: 110/110 with honours']),
                m.item([
                  'Thesis:',
                  space,
                  smartquote({ double: true }),
                  'Distributed architectures for real-time data stream processing',
                  smartquote({ double: true }),
                ]),
                m.item(['Specialisation in Software Systems and Architectures']),
              ),
            ),
          }),
          cvEntry({
            dateStart: '2010',
            dateEnd: '2013',
            title: 'BSc in Computer Engineering',
            organization: 'Sapienza University of Rome',
            location: 'Rome, Italy',
            description: blocks(
              m.list(
                m.item(['Final grade: 108/110']),
                m.item(['Core subjects: Algorithms, Databases, Computer Networks, Operating Systems']),
              ),
            ),
          }),
        ],
        motherTongue: 'Italian',
        otherLanguages: [
          { lang: 'English', listening: 'C1', reading: 'C1', interaction: 'B2', production: 'B2', writing: 'C1' },
          { lang: 'French', listening: 'B1', reading: 'B2', interaction: 'A2', production: 'A2', writing: 'B1' },
          { lang: 'Spanish', listening: 'A2', reading: 'A2', interaction: 'A2', production: 'A1', writing: 'A1' },
        ],
        digitalSkills: blocks(
          m.list(
            m.item([strong(inline`Languages:`), space, 'TypeScript/JavaScript, Python, Java, SQL, Rust']),
            m.item([
              strong(inline`Cloud & DevOps:`),
              space,
              'AWS (Lambda, ECS, S3, RDS, SQS), Docker, Kubernetes, Terraform, CI/CD (GitHub Actions, GitLab CI)',
            ]),
            m.item([strong(inline`Frameworks:`), space, 'React, Next.js, Node.js, Express, FastAPI, Spring Boot']),
            m.item([strong(inline`Databases:`), space, 'PostgreSQL, MongoDB, Redis, DynamoDB']),
            m.item([strong(inline`Tools:`), space, 'Git, Linux, VS Code, Jira, Confluence, Figma']),
          ),
        ),
        commSkills: blocks(
          m.list(
            m.item([
              'Strong communication skills developed through team leadership and collaboration with international stakeholders',
            ]),
            m.item([
              'Experience presenting technical projects to non-technical audiences and training junior developers',
            ]),
            m.item(['Negotiation skills gained in project management and client-facing roles']),
          ),
        ),
        orgSkills: blocks(
          m.list(
            m.item(['Management of software projects with Agile/Scrum methodology (certified Scrum Master)']),
            m.item(['Ability to plan and prioritise activities across multiple concurrent projects']),
            m.item(['Organisation of technical workshops and company-wide knowledge-sharing sessions']),
          ),
        ),
        jobSkills: blocks(
          m.list(
            m.item(['Design of distributed software architectures and microservices']),
            m.item(['Requirements analysis and technical documentation']),
            m.item(['Code review and mentoring of junior developers']),
            m.item(['Performance optimisation of highly scalable systems']),
          ),
        ),
        drivingLicence: 'Category B',
        signaturePlace: 'Rome',
        signatureDate: '15 September 2025',
      }),
    ),
  )
}
