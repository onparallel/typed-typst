// Converted from test/universe/corpus/guided-resume-starter-cgc.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  blocks,
  define,
  doc,
  external,
  importPackage,
  inline,
  link,
  m,
  show,
  space,
  strong,
} from '../../../src/index.ts'

export default () => {
  const resume = external('resume')
  const edu = define('edu')
    .named('date', T.any, null)
    .named('degrees', T.any, null)
    .named('gpa', T.any, null)
    .named('institution', T.any, null)
    .named('location', T.any, null)
    .returns(T.any)
    .external()
  const skills = define('skills').pos('arg1', T.any).returns(T.any).external()
  const exp = define('exp')
    .named('date', T.any, null)
    .named('details', T.content, [])
    .named('location', T.any, null)
    .named('project', T.any, null)
    .named('role', T.any, null)
    .named('summary', T.any, null)
    .returns(T.any)
    .external()
  const resume_with = define('with')
    .named('author', T.any, null)
    .named('contacts', T.any, null)
    .named('location', T.any, null)
    .returns(T.any)
    .external(resume)
  return doc(
    importPackage('@preview/guided-resume-starter-cgc:2.0.0', [resume, edu, skills, exp]),
    show(
      resume_with({
        author: 'Dr. Emmit "Doc" Brown',
        location: 'Hill Valley, CA',
        contacts: [
          inline(link('mailto:sample_resume@chaoticgood.computer', inline`Email`)),
          inline(link('https://chaoticgood.computer', inline`Website`)),
          inline(link('https://github.com/spelkington', inline`GitHub`)),
          inline(link('https://linkedin.com/in/spelkington', inline`LinkedIn`)),
        ],
      }),
    ),
    m.lines(
      m.heading(1, 'Education'),
      inline(
        edu({
          institution: 'University of California, Berkeley',
          date: 'Aug 1953',
          location: 'Berkeley, CA',
          degrees: [['Ph.D.', 'Theoretical Physics']],
        }),
      ),
    ),
    inline(
      edu({
        institution: 'University of Colombia',
        date: 'Aug 1948',
        gpa: '3.9 of 4.0, Summa Cum Laude',
        degrees: [
          ["Bachelor's of Science", 'Nuclear Engineering'],
          ['Minors', 'Automobile Design, Arabic'],
          ['Focus', 'Childcare, Education'],
        ],
      }),
    ),
    m.lines(
      m.heading(1, 'Skills'),
      inline(
        skills([
          [
            'Expertise',
            [
              inline`Theoretical Physics`,
              inline`Time Travel`,
              inline`Nuclear Material Management`,
              inline`Student Mentoring`,
            ],
          ],
          ['Software', [inline`AutoDesk CAD`, inline`Delorean OS`, inline`Windows 1`]],
          ['Languages', [inline`C++`, inline`C Language`, inline`MatLab`, inline`Punch Cards`]],
        ]),
      ),
    ),
    m.lines(
      m.heading(1, 'Experience'),
      inline(
        exp({
          role: 'Theoretical Physics Consultant',
          project: "Doc Brown's Garage",
          date: 'June 1953 - Oct 2015',
          location: 'Hill Valley, CA',
          summary: 'Specializing in development of time travel devices and student tutoring',
          details: blocks(
            m.list(
              m.item([
                'Lead development of time travel devices, resulting in the ability to travel back and forth through time',
              ]),
              m.item([
                'Managed and executed a budget of $14 million dollars gained from an unexplained family fortune',
              ]),
              m.item([
                'Oversaw QA testing for time travel devices, minimizing risk of maternal time-travel related incidents',
              ]),
            ),
          ),
        }),
      ),
    ),
    inline(
      exp({
        role: 'Teaching Assistant',
        project: 'University of Colombia, Wernher von Braun Lab',
        date: 'Oct 1949 - June 1953',
        summary: "Integrating German scientists' curriculi for undergraduate audiences",
        details: blocks(
          m.list(
            m.item(['Assisted in designing physics course structure and assignments in English, Spanish and German']),
            m.item(['Designed confidential rocket designs used in NASA Space Race initiatives and the Apollo Program']),
            m.item([
              'Developed and executed university DEI initiatives and onboarding programs for transfer professors',
            ]),
          ),
        ),
      }),
    ),
    m.lines(
      m.heading(1, 'Projects'),
      inline(
        exp({
          role: link('https://www.imdb.com/title/tt0088763/', inline`The Delorean`),
          project: "Doc Brown's Garage",
          date: 'May 1954 - June 1985',
          summary: 'A stylish and fully-featured vehicle capable of time travel - with mixed results',
          details: blocks(
            m.list(
              m.item([
                'Designed vehicle modifications allowing for time travel and',
                space,
                strong(inline`37% increased cup holder capacity`),
              ]),
              m.item(['Ethically sourced materials from various international Colombian and Libyan providers']),
              m.item(['Coordinated business relationships with potential clients and interested parties']),
            ),
          ),
        }),
      ),
    ),
    inline(
      exp({
        role: "Doc Brown's Mega Cup-o-Matic",
        project: "Doc Brown's Garage",
        date: 'October 1949 - June 1953',
        details: blocks(
          m.list(
            m.item(['Filed a patent for a new type of car cupholder, for storing cups of nuclear material up to 1L']),
            m.item([
              'Developed nuclear hazard procedures for high school students interested in time and nuclear physics',
            ]),
          ),
        ),
      }),
    ),
    m.lines(
      m.heading(1, 'Volunteering'),
      inline(
        exp({
          role: 'Student Advisor',
          project: "Doc's Kidz After-School Child Care Service",
          date: 'May 1954 - June 1985',
          summary: 'Giving random highschoolers hands-on experience in live nuclear engineering',
          details: blocks(
            m.list(
              m.item(['Created community initiative to teach local student(s) about the wonders of nuclear physics']),
              m.item([
                'Provided interesting time travel research opportunities for students to add to their college applications',
              ]),
            ),
          ),
        }),
      ),
    ),
  )
}
