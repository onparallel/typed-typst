// Converted from test/universe/corpus/resumania.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  blocks,
  datetime,
  define,
  doc,
  external,
  float,
  importPackage,
  inline,
  let_,
  m,
  show,
  smartquote,
  space,
  sym,
} from '../../../src/index.ts'

export default () => {
  const contactSection = define('contact-section')
    .named('email', T.any, null)
    .named('github', T.any, null)
    .named('linkedin', T.any, null)
    .named('location', T.any, null)
    .named('phone', T.any, null)
    .returns(T.any)
    .external()
  const phone = define('phone').pos('arg1', T.any).returns(T.any).external()
  const email = define('email').pos('arg1', T.any).returns(T.any).external()
  const urlLink = define('url-link')
    .pos('arg1', T.any)
    .pos('arg2', T.any)
    .named('name', T.any, null)
    .returns(T.any)
    .external()
  const name = external('name')
  const location_2 = define('location').pos('arg1', T.content).returns(T.any).external()
  const education = define('education')
    .named('institution', T.any, null)
    .named('kind', T.any, null)
    .named('location', T.any, null)
    .named('scale', T.any, null)
    .named('score', T.any, null)
    .named('study', T.any, null)
    .named('timeframe', T.any, null)
    .returns(T.any)
    .external()
  const educationSection = define('education-section')
    .named('masters', T.any, null)
    .named('undergrad', T.any, null)
    .returns(T.any)
    .external()
  const work = define('work')
    .pos('arg1', T.content)
    .named('company', T.any, null)
    .named('location', T.any, null)
    .named('position', T.any, null)
    .named('timeframe', T.any, null)
    .returns(T.any)
    .external()
  const workSection = define('work-section').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const projectSection = define('project-section').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const project = define('project')
    .pos('arg1', T.content)
    .named('timeframe', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external()
  const skillsSection = define('skills-section').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const skillset = define('skillset').rest('args', T.any).returns(T.any).external()
  const resume = external('resume')
  const resume_with = define('with').pos('arg1', T.any).named('sections', T.any, null).returns(T.any).external(resume)
  const [authorDecl, author] = let_('author', 'Your Name')
  const [contactsDecl, contacts] = let_(
    'contacts',
    contactSection({
      phone: phone('+0 (123) 555-0123'),
      email: email('your.name@example.com'),
      linkedin: urlLink({ name: 'LinkedIn' }, 'example', 'https://linkedin.com'),
      github: urlLink({ name: 'GitHub' }, 'example', 'https://github.com'),
      location: location_2(inline`Your Location`),
    }),
  )
  const [educationDecl, education_2] = let_(
    'education',
    educationSection({
      masters: education({
        institution: 'Some School',
        location: 'Anywhere',
        kind: 'M.S.',
        study: 'Mechanical Engineering',
        timeframe: datetime({ year: 2042, month: 4, day: 2 }),
        score: 3.44,
        scale: float(4),
      }),
      undergrad: education({
        institution: 'Another School',
        location: 'The other place',
        kind: 'B.S.',
        study: 'Physics',
        timeframe: datetime({ year: 2041, month: 4, day: 1 }),
        score: 3.11,
        scale: float(4),
      }),
    }),
  )
  const [workDecl, work_2] = let_(
    'work',
    workSection(
      work(
        {
          company: 'Some Company',
          location: 'Anywhere',
          position: 'Mechanical Designer',
          timeframe: { start: datetime({ year: 2045, month: 8, day: 8 }), end: 'Present' },
        },
        blocks(
          m.list(
            m.item(['Designed parts to go on aircraft for the future.']),
            m.item([
              'Ran simulations to ensure parts would meet factors of safety so the final product could pass standards.',
            ]),
            m.item([
              'Worked with customers to generate specifications and requirements for the aircraft and its features.',
            ]),
          ),
        ),
      ),
      work(
        {
          company: 'A Different Company',
          location: 'Somewhere Else',
          position: 'Mechanical Engineer Intern',
          timeframe: {
            start: datetime({ year: 2040, month: 6, day: 1 }),
            end: datetime({ year: 2040, month: 8, day: 20 }),
          },
        },
        blocks(
          m.list(
            m.item([
              'Performed calculations and simulations for structural elements to a space elevator that could carry 2 tons of payload.',
            ]),
            m.item([
              'Provided feedback to other engineers regarding the physics behind a space elevator and material requirements so it doesn',
              smartquote({ double: false }),
              't berak.',
            ]),
          ),
        ),
      ),
    ),
  )
  const [projectsDecl, projects] = let_(
    'projects',
    projectSection(
      project(
        { title: 'Automatic Pancake Flipper', timeframe: 2044 },
        blocks(
          m.list(
            m.item(['Created a machine that automatically flips pancakes']),
            m.item(['Used open-source computer vision libraries to control when the pancakes flip.']),
            m.item(['Added input for how brown the panacakes should be.']),
            m.item(['Designed and fabricated everything for the pancake flipper.']),
            m.item(['Collected visual data from more than 123 pancake-making sessions to feed the visual model.']),
          ),
        ),
      ),
      project(
        { title: 'Automatic Pancake Maker', timeframe: 2043 },
        blocks(
          m.list(
            m.item(['Created a machine that automatically makes pancake batter.']),
            m.item(['Used math', sym.trademark, space, 'to control the robotic arm that picks ingredients.']),
            m.item([
              'Added a user interface that allows specifying levels of fluffiness, alternate ingredients such as blueberries and bananas, and an',
              space,
              smartquote({ double: true }),
              'experiment',
              smartquote({ double: true }),
              space,
              'mode where it just randomly makes something.',
            ]),
          ),
        ),
      ),
    ),
  )
  const [skillsDecl, skills] = let_(
    'skills',
    skillsSection(
      skillset('Simulation', 'Simulation Software 1', 'Simulation Design', 'FEA Software'),
      skillset('Software', 'Office Suite', 'CAD Software'),
    ),
  )
  return doc(
    importPackage('@preview/resumania:1.0.0', [
      contactSection,
      phone,
      email,
      urlLink,
      name,
      location_2,
      education,
      educationSection,
      work,
      workSection,
      projectSection,
      project,
      skillsSection,
      skillset,
      resume,
    ]),
    authorDecl,
    contactsDecl,
    educationDecl,
    workDecl,
    projectsDecl,
    skillsDecl,
    show(resume_with({ sections: [contacts, education_2, work_2, projects, skills] }, author)),
  )
}
