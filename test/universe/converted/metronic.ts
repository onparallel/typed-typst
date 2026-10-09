// Converted from test/universe/corpus/metronic.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  blocks,
  define,
  doc,
  external,
  importPackage,
  inline,
  linebreak,
  m,
  pt,
  rgb,
  show,
  space,
  v,
} from '../../../src/index.ts'

export default () => {
  const theme = define('theme')
    .named('accent-color', T.any, null)
    .named('background-color', T.any, null)
    .returns(T.any)
    .external()
  const resumePage = external('resume-page')
  const medium = define('medium').pos('arg1', T.any).returns(T.any).external()
  const contact = define('contact')
    .named('email', T.any, null)
    .named('linkedin', T.any, null)
    .named('location', T.any, null)
    .named('phone', T.any, null)
    .named('website', T.any, null)
    .named('x', T.any, null)
    .returns(T.any)
    .external()
  const section = define('section')
    .pos('arg1', T.any)
    .pos('arg2', T.content)
    .named('icon', T.any, null)
    .returns(T.any)
    .external()
  const small = define('small').pos('arg1', T.content).returns(T.any).external()
  const tags = define('tags').rest('args', T.any).returns(T.any).external()
  const resumePage_with = define('with').named('sidebar', T.content, []).returns(T.any).external(resumePage)
  return doc(
    importPackage('@preview/metronic:1.1.0', [theme, resumePage, medium, contact, section, small, tags]),
    inline(theme({ accentColor: rgb('61B7AE'), backgroundColor: rgb('F2F0EF') })),
    show(
      resumePage_with({
        sidebar: blocks(
          m.heading(1, 'Jane Doe'),
          inline(medium('Business Development Manager')),
          inline(v(pt(5))),
          'Strategic business leader with proven expertise in market expansion and revenue growth.',
          'Skilled in building partnerships, developing client relationships, and driving organizational success through innovative solutions.',
          'Passionate about sustainable business practices and team development.',
          inline(v(pt(5))),
          inline(
            contact({
              phone: '555-0123',
              linkedin: 'janedoe',
              email: 'jane.doe@email.com',
              location: 'Chicago, USA',
              website: 'janedoe.com',
              x: 'janedoe',
            }),
          ),
          inline(v(pt(5))),
          inline(
            section(
              { icon: 'university' },
              'Education',
              inline(
                space,
                small(
                  blocks(
                    inline`MBA, Business Administration ${linebreak()} Business School (2015-2017)`,
                    inline`BA, International Relations ${linebreak()} State University (2010-2014)`,
                  ),
                ),
                space,
              ),
            ),
          ),
          inline(
            section(
              { icon: 'check-double' },
              'Skills',
              blocks(
                m.heading(3, 'Core Competencies'),
                inline(v(pt(5))),
                inline(
                  tags(
                    'Strategy',
                    'Leadership',
                    'Negotiations',
                    'Market Analysis',
                    'Client Relations',
                    'Public Speaking',
                    'Business Development',
                    'MS Word',
                    'Data analytics',
                  ),
                ),
                m.heading(3, 'Industries'),
                inline(v(pt(5))),
                inline(
                  tags(
                    'Retail',
                    'Finance',
                    'Consulting',
                    'Healthcare',
                    'Technology',
                    'Education',
                    'Real Estate',
                    'Marketing',
                    'Operations',
                    'Sales',
                    'Human Resources',
                    'Digital',
                  ),
                ),
              ),
            ),
          ),
        ),
      }),
    ),
    inline(
      section(
        { icon: 'briefcase' },
        'Professional Experience',
        blocks(
          m.lines(m.heading(3, 'Business Development Director'), 'Global Solutions Inc. - 2023-Present'),
          'Leading strategic growth initiatives and managing key client relationships across multiple regions. Focus on developing new market opportunities and enhancing existing partnerships.',
          m.lines(
            'Key Achievements:',
            m.list(
              m.item(['Increased regional revenue by 45% through strategic partnerships']),
              m.item(['Led team of 12 business development managers']),
              m.item(['Launched successful market entry in 3 new territories']),
              m.item(['Developed and implemented client retention program']),
              m.item(['Streamlined operational processes']),
              m.item(['Mentored junior team members']),
            ),
          ),
          inline(
            tags('Strategic Planning', 'Team Leadership', 'Market Analysis', 'Client Relations', 'Revenue Growth'),
          ),
          inline(v(pt(10))),
          m.lines(m.heading(3, 'Senior Business Manager'), 'Innovation Partners - 2020-2023'),
          'Managed portfolio of key accounts while developing and executing business growth strategies. Led cross-functional teams in implementing innovative solutions for clients.',
          'Notable Achievements:',
          m.list(
            m.item(['Successfully managed $20M client portfolio']),
            m.item(['Developed new business vertical generating 30% growth']),
            m.item(['Led organizational change management initiatives']),
            m.item(['Established strategic partnerships with industry leaders']),
            m.item(['Implemented customer success program']),
          ),
          inline(
            tags('Account Management', 'Business Strategy', 'Change Management', 'Client Relations', 'Revenue Growth'),
          ),
        ),
      ),
    ),
  )
}
