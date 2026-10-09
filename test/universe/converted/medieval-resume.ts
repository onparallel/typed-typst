// Converted from test/universe/corpus/medieval-resume.typ by scripts/convert-suite.ts — do not edit.
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
  space,
  strong,
  title,
} from '../../../src/index.ts'

export default () => {
  const medievalResume = external('medieval-resume')
  const cvSection = define('cv-section').pos('arg1', T.content).named('title', T.content, []).returns(T.any).external()
  const date = define('date').pos('arg1', T.any).returns(T.any).external()
  const educationHeading = define('education-heading')
    .named('degree', T.content, [])
    .named('department', T.content, [])
    .named('enddate', T.content, [])
    .named('startdate', T.any, null)
    .returns(T.any)
    .external()
  const estimated = external('estimated')
  const jobHeading = define('job-heading')
    .named('company', T.content, [])
    .named('enddate', T.any, null)
    .named('job', T.content, [])
    .named('startdate', T.any, null)
    .returns(T.any)
    .external()
  const project = define('project')
    .named('description', T.content, [])
    .named('project-link', T.any, null)
    .named('startdate', T.any, null)
    .named('title', T.content, [])
    .returns(T.any)
    .external()
  const medievalResume_with = define('with')
    .named('author', T.any, null)
    .named('degree', T.any, null)
    .named('email', T.any, null)
    .named('fonts', T.any, null)
    .named('lang', T.any, null)
    .named('phonenumber', T.any, null)
    .named('website', T.any, null)
    .returns(T.any)
    .external(medievalResume)
  return doc(
    importPackage('@preview/medieval-resume:0.1.0', [
      medievalResume,
      cvSection,
      date,
      educationHeading,
      estimated,
      jobHeading,
      project,
    ]),
    show(
      medievalResume_with({
        author: 'Mx. Example Sample',
        degree: 'Ph. Doc.',
        website: 'https://example.com',
        email: 'example@example.com',
        phonenumber: '+00 123456789',
        lang: 'en',
        fonts: 'sans-serif',
      }),
    ),
    inline(title()),
    inline(
      cvSection(
        { title: inline`Personal Information` },
        blocks(m.terms(m.term(['Birth'], [date('1999-12-31'), ', Null Island']), m.term(['Nationality'], ['Earth']))),
      ),
    ),
    inline(
      cvSection(
        { title: inline`Education` },
        blocks(
          m.lines(
            inline(
              educationHeading({
                department: inline`Department of Computer Science, Electrical Engineering and Information Technology, Stuttgart
University`,
                degree: inline`M.Sc. in Computer Linguistics`,
                startdate: 2020,
                enddate: inline`2023 ${estimated}`,
              }),
            ),
            m.list(
              m.item([
                'Some interesting information about this program (can also be in a normal paragraph instead of a list)',
              ]),
            ),
          ),
        ),
      ),
    ),
    inline(
      cvSection(
        { title: inline`Work and Internships` },
        blocks(
          m.lines(
            inline(
              jobHeading({
                company: inline`Imaginary Company AB`,
                job: inline`Internship software development`,
                startdate: '2023-05-01',
                enddate: '2025-02-03',
              }),
            ),
            m.list(m.item(['Interesting information about the place of work'])),
          ),
        ),
      ),
    ),
    inline(
      cvSection(
        { title: inline`Personal Projects` },
        inline(
          space,
          project({
            projectLink: 'https://example.com/project',
            title: inline`Example Project`,
            startdate: 2022,
            description: inline`An Example project demonstrating an example`,
          }),
          space,
        ),
      ),
    ),
    inline(
      cvSection(
        { title: inline`Strengths` },
        blocks(m.list(m.item([strong(inline`Being an example`)]), m.item([strong(inline`Being a good example`)]))),
      ),
    ),
  )
}
