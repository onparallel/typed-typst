// Converted from test/universe/corpus/calligraphics.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, blocks, define, doc, external, importPackage, inline, lorem, m, space, strong } from '../../../src/index.ts'

export default () => {
  const resume = define('resume')
    .pos('arg1', T.content)
    .pos('arg2', T.content)
    .named('author', T.any, null)
    .returns(T.any)
    .external()
  const asideSkillItem = define('aside-skill-item').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const resumeEntry = define('resume-entry')
    .named('date', T.any, null)
    .named('description', T.any, null)
    .named('location', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external()
  const resumeItem = define('resume-item').pos('arg1', T.content).returns(T.any).external()
  const githubLink = define('github-link').pos('arg1', T.any).returns(T.any).external()
  const LaTeX = external('LaTeX')
  return doc(
    m.lines(
      importPackage('@preview/calligraphics:1.0.0', [resume, asideSkillItem, resumeEntry, resumeItem, githubLink]),
      importPackage('@preview/metalogo:1.2.0', [LaTeX]),
      inline(
        resume(
          {
            author: {
              firstname: 'Jane',
              lastname: 'Doe',
              email: 'contact@example.org',
              phone: '+336 66 66 66 66',
              address: 'City, Country',
              github: 'Github',
              positions: ['Job researcher'],
            },
          },
          blocks(
            m.heading(1, 'Skills'),
            inline(asideSkillItem('Languages', [strong(inline`English`), 'French', 'German'])),
            inline(
              asideSkillItem('Programming languages', ['C', 'C++', 'Rust']),
              space,
              asideSkillItem('Tools', ['Git', 'JJ', LaTeX, 'Typst', 'RenderDoc', 'Linux']),
            ),
            m.lines(
              m.heading(1, 'Internship'),
              inline(
                resumeEntry({
                  title: 'Old internship',
                  location: 'Been there',
                  date: '2021',
                  description: 'Done that',
                }),
              ),
            ),
            m.lines(
              m.heading(1, 'Hobbies'),
              m.list({ tight: false }, m.item(['Talking to the wind']), m.item(['Looking inside'])),
            ),
          ),
          blocks(
            m.lines(
              m.heading(1, 'Experiences'),
              inline(
                resumeEntry({
                  title: 'Third work experience',
                  location: 'Other Place',
                  date: '2023 - 2026',
                  description: 'Building more stuff',
                }),
                space,
                resumeItem(blocks(m.list(m.item([lorem(7)]), m.item([lorem(9)]), m.item([lorem(13)])))),
              ),
            ),
            inline(
              resumeEntry({
                title: 'Second work experience',
                location: 'Other Place',
                date: '2022 - 2023',
                description: 'Building stuff',
              }),
              space,
              resumeItem(blocks(m.list(m.item([lorem(15)]), m.item([lorem(10)])))),
            ),
            inline(
              resumeEntry({
                title: 'First work experience',
                location: 'Place',
                date: '2020 - 2022',
                description: 'Researching stuff',
              }),
              space,
              resumeItem(inline(space, lorem(20), space)),
            ),
            m.lines(
              m.heading(1, 'Education'),
              inline(
                resumeEntry({
                  title: 'Diploma',
                  location: 'Some university',
                  date: '2017 - 2020',
                  description: 'Studying more advanced stuff',
                }),
                space,
                resumeItem(
                  blocks(
                    m.list(
                      m.item(['Math stuff']),
                      m.item(['Computer stuff']),
                      m.item(['Physics stuff']),
                      m.item(['Humanities stuff']),
                    ),
                  ),
                ),
              ),
            ),
            inline(
              resumeEntry({
                title: 'Older diploma',
                location: 'Location',
                date: '2016 - 2017',
                description: 'Studying stuff',
              }),
              space,
              resumeItem(inline(space, lorem(10), space)),
            ),
            m.heading(1, 'Projects'),
            inline(
              resumeEntry({
                title: 'Project',
                date: '',
                location: githubLink('project-page'),
                description: 'Maintainer of great project',
              }),
              space,
              resumeItem(inline(space, lorem(30), space)),
            ),
            inline(
              resumeEntry({
                title: 'Contribution to other great project',
                date: '',
                location: githubLink('pull-request'),
                description: 'Added stuff',
              }),
              space,
              resumeItem(inline(space, lorem(20), space)),
            ),
            inline(
              resumeEntry({
                title: 'Old Project',
                date: '',
                location: githubLink('project-page'),
                description: 'Maintainer of old project',
              }),
              space,
              resumeItem(inline(space, lorem(20), space)),
            ),
          ),
        ),
      ),
    ),
  )
}
