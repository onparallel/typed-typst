// Converted from test/universe/corpus/neat-cv.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  blocks,
  colbreak,
  define,
  doc,
  em,
  emph,
  external,
  fr,
  image,
  importPackage,
  inline,
  linebreak,
  m,
  pagebreak,
  path,
  rgb,
  set,
  show,
  space,
  text,
  v,
  yaml,
} from '../../../src/index.ts'

export default () => {
  const contactInfo = define('contact-info').returns(T.any).external()
  const cv = external('cv')
  const cvThinSide = define('cv-thin-side').pos('arg1', T.content).pos('arg2', T.content).returns(T.any).external()
  const cvWithSide = define('cv-with-side').pos('arg1', T.content).pos('arg2', T.content).returns(T.any).external()
  const emailLink = define('email-link').pos('arg1', T.any).returns(T.any).external()
  const entry = define('entry')
    .pos('arg1', T.any)
    .named('date', T.any, null)
    .named('institution', T.any, null)
    .named('location', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external()
  const itemPills = define('item-pills').pos('arg1', T.any).returns(T.any).external()
  const itemWithLevel = define('item-with-level')
    .pos('arg1', T.any)
    .pos('arg2', T.any)
    .named('subtitle', T.any, null)
    .returns(T.any)
    .external()
  const publications = define('publications')
    .pos('arg1', T.any)
    .named('highlight-authors', T.any, null)
    .named('max-authors', T.any, null)
    .returns(T.any)
    .external()
  const reference = define('reference')
    .pos('arg1', T.content)
    .named('location', T.any, null)
    .named('name', T.any, null)
    .named('role', T.any, null)
    .returns(T.any)
    .external()
  const socialLinks = define('social-links').returns(T.any).external()
  const thinLabel = define('thin-label').pos('arg1', T.any).returns(T.any).external()
  const thinMetrics = define('thin-metrics').pos('arg1', T.any).returns(T.any).external()
  const cv_with = define('with')
    .named('accent-color', T.any, null)
    .named('author', T.any, null)
    .named('header-color', T.any, null)
    .named('profile-picture', T.any, null)
    .returns(T.any)
    .external(cv)
  return doc(
    importPackage('@preview/neat-cv:1.2.0', [
      contactInfo,
      cv,
      cvThinSide,
      cvWithSide,
      emailLink,
      entry,
      itemPills,
      itemWithLevel,
      publications,
      reference,
      socialLinks,
      thinLabel,
      thinMetrics,
    ]),
    inline(set(text, { lang: 'en' })),
    show(
      cv_with({
        author: {
          firstname: 'Emmett',
          lastname: 'Brown',
          email: 'doc.brown@hillvalley.edu',
          address: inline`1640 Riverside Drive${linebreak()} Hill Valley${linebreak()} California, USA`,
          phone: '(555) 121-1955',
          position: ['Inventor', 'Theoretical Physicist'],
          website: 'https://docbrownlabs.com',
          twitter: 'docbrown1955',
          mastodon: '@docbrown@sciences.social',
          linkedin: 'emmett-brown-hv',
          customLinks: [
            {
              iconName: 'car',
              label: 'DeLorean Time Machine',
              url: 'https://en.wikipedia.org/wiki/DeLorean_time_machine',
            },
            { label: 'Back to the Future', url: 'https://www.backtothefuture.com/' },
          ],
        },
        profilePicture: image(path('profile.png')),
        accentColor: rgb('#4682b4'),
        headerColor: rgb('#35414d'),
      }),
    ),
    inline(
      cvWithSide(
        blocks(
          m.lines(
            m.heading(1, 'About me'),
            'Visionary inventor and theoretical physicist, renowned for pioneering work in time travel, flux capacitor technology, and unconventional scientific research. Adept at creative problem-solving, interdisciplinary collaboration, and pushing the boundaries of known science.',
          ),
          m.lines(
            m.heading(1, 'Interests'),
            m.list(
              m.item(['Temporal Mechanics']),
              m.item(['Quantum Physics']),
              m.item(['Invention & Engineering']),
              m.item(['DeLorean Restoration']),
              m.item(['Science Education']),
            ),
          ),
          m.lines(m.heading(1, 'Contact'), inline(contactInfo())),
          m.lines(m.heading(1, 'Personal'), 'Nationality: American'),
          'Date of birth: 22.03.1920',
          inline(v(fr(1)), space, socialLinks()),
          inline(colbreak()),
          m.lines(
            m.heading(1, 'Languages'),
            inline(
              itemWithLevel({ subtitle: 'Native' }, 'English', 5),
              space,
              itemWithLevel({ subtitle: 'Intermediate' }, 'German', 3),
              space,
              itemWithLevel({ subtitle: 'Basic' }, 'French', 2),
            ),
          ),
          m.lines(
            m.heading(1, 'Physics & Engineering'),
            inline(
              itemWithLevel('Temporal Mechanics', 5),
              space,
              itemWithLevel('Quantum Theory', 4),
              space,
              itemWithLevel('Nuclear Physics', 4),
              space,
              itemWithLevel('Mechanical Engineering', 5),
              space,
              itemWithLevel('Electrical Engineering', 4),
              space,
              itemWithLevel('Automotive Restoration', 3.5),
            ),
          ),
          m.lines(
            m.heading(1, 'Technology'),
            inline(
              itemWithLevel('Flux Capacitor Design', 5),
              space,
              itemWithLevel('Time Machine Construction', 5),
              space,
              itemWithLevel('Robotics', 3),
              space,
              itemWithLevel('Computer Programming', 3),
            ),
          ),
          m.lines(
            m.heading(1, 'Other Skills'),
            inline(
              itemPills([
                'Creative Problem Solving',
                'Scientific Communication',
                'Workshop Safety',
                'Mentoring Young Scientists',
                'Improvisation',
                'Experimental Design',
              ]),
            ),
          ),
        ),
        blocks(
          m.heading(1, 'Education'),
          inline(
            entry(
              {
                title: 'PhD in Physics',
                date: '1951',
                institution: 'California Institute of Technology',
                location: 'Pasadena, CA, USA',
              },
              inline`Dissertation: ${emph(inline`"Theoretical Approaches to Temporal Displacement and Causality"`)}.`,
            ),
          ),
          inline(
            entry(
              { title: 'BSc in Engineering', date: '1943', institution: 'MIT', location: 'Cambridge, MA, USA' },
              inline`Thesis: ${emph(inline`"Practical Applications of High-Voltage Circuits in Experimental Physics"`)}.`,
            ),
          ),
          m.heading(1, 'Professional Experience'),
          inline(
            entry(
              {
                title: 'Independent Inventor & Research Scientist',
                date: '1955 – present',
                institution: 'Hill Valley Laboratory',
                location: 'Hill Valley, CA, USA',
              },
              blocks(
                m.list(
                  m.item(['Invented the Flux Capacitor, enabling practical time travel.']),
                  m.item(['Designed and constructed the DeLorean Time Machine and related temporal devices.']),
                  m.item(['Conducted groundbreaking experiments in temporal mechanics and quantum theory.']),
                  m.item(['Provided scientific mentorship to aspiring inventors and students.']),
                  m.item(['Published theoretical work on paradoxes, causality, and energy transfer.']),
                ),
              ),
            ),
          ),
          inline(
            entry(
              {
                title: 'Science Educator & Public Speaker',
                date: '1960 – present',
                institution: 'Various Institutions',
                location: 'USA & Europe',
              },
              blocks(
                m.list(
                  m.item([
                    'Delivered lectures and demonstrations on physics, engineering, and the ethics of scientific discovery.',
                  ]),
                  m.item(['Organized science fairs and educational outreach for young students.']),
                ),
              ),
            ),
          ),
          inline(
            entry(
              {
                title: 'Lead Research Physicist',
                date: '1955 – 1972',
                institution: 'Pacific Science Institute',
                location: 'San Francisco, CA, USA',
              },
              blocks(
                m.list(
                  m.item([
                    'Led a team of six researchers investigating applied electromagnetism and high-energy particle interactions.',
                  ]),
                  m.item(['Designed experimental apparatus for controlled plasma discharge studies.']),
                  m.item(['Co-authored seven peer-reviewed articles on electromagnetic field theory.']),
                ),
              ),
            ),
          ),
          m.heading(1, 'Academic Experience'),
          inline(
            entry(
              {
                title: 'Visiting Professor: Temporal Physics',
                date: '1985',
                institution: 'Hill Valley University',
                location: 'Hill Valley, CA, USA',
              },
              blocks(
                m.list(
                  m.item(['Developed and taught courses on time travel theory and paradox management.']),
                  m.item(['Supervised student projects on experimental physics and invention.']),
                ),
              ),
            ),
          ),
          inline(
            entry(
              {
                title: 'Adjunct Lecturer: Quantum Theory and Paradoxes',
                date: '1978 – 1984',
                institution: 'California Institute of Technology',
                location: 'Pasadena, CA, USA',
              },
              blocks(
                m.list(
                  m.item(['Lectured on advanced quantum mechanics and paradoxes in theoretical physics.']),
                  m.item(['Organized interdisciplinary seminars on causality and time.']),
                ),
              ),
            ),
          ),
          inline(
            entry(
              {
                title: 'Research Fellow: High-Energy Particle Physics',
                date: '1952 – 1955',
                institution: 'MIT',
                location: 'Cambridge, MA, USA',
              },
              blocks(
                m.list(
                  m.item(['Conducted research on high-voltage circuits and early particle acceleration experiments.']),
                ),
              ),
            ),
          ),
          inline(colbreak()),
          m.heading(1, 'Grants and Awards'),
          inline(
            entry(
              {
                title: 'Lifetime Achievement in Innovation',
                date: '1990',
                institution: 'International Society of Inventors',
                location: 'Geneva, Switzerland',
              },
              'Recognized for a lifetime of inventive contributions to science and engineering.',
            ),
          ),
          inline(
            entry(
              {
                title: 'Best Experimental Demonstration',
                date: '1986',
                institution: 'World Science Congress',
                location: 'London, UK',
              },
              'Awarded for the live demonstration of the DeLorean Time Machine prototype.',
            ),
          ),
          inline(
            entry(
              {
                title: 'Hill Valley Science Achievement Award',
                date: '1985',
                institution: 'Hill Valley Science Society',
                location: 'Hill Valley, CA, USA',
              },
              'Awarded for outstanding contributions to science and innovation in the community.',
            ),
          ),
          inline(
            entry(
              {
                title: 'National Science Foundation Research Grant',
                date: '1979',
                institution: 'National Science Foundation',
                location: 'Washington, D.C., USA',
              },
              'Awarded \\$340,000 for research into practical applications of electromagnetic flux in high-energy temporal systems.',
            ),
          ),
          inline(
            entry(
              {
                title: 'CalTech Outstanding Alumni Award',
                date: '1972',
                institution: 'California Institute of Technology',
                location: 'Pasadena, CA, USA',
              },
              'Recognized for exceptional contributions to applied physics and interdisciplinary innovation.',
            ),
          ),
          m.heading(1, 'Talks'),
          inline(
            entry(
              {
                title: 'From DeLorean to Locomotive: Engineering Time Machines',
                date: '1991',
                institution: 'Society of Inventors Annual Meeting',
                location: 'San Francisco, CA, USA',
              },
              'Panelist on the evolution of time travel technology.',
            ),
          ),
          inline(
            entry(
              {
                title: 'Paradoxes and Causality: Lessons from Time Travel',
                date: '1986',
                institution: 'World Science Congress',
                location: 'London, UK',
              },
              'Invited talk on managing paradoxes and causality in theoretical physics.',
            ),
          ),
          inline(
            entry(
              {
                title: 'The Flux Capacitor: A New Era in Temporal Mechanics',
                date: '1985',
                institution: 'International Physics Symposium',
                location: 'Geneva, Switzerland',
              },
              'Keynote on the invention and implications of the flux capacitor.',
            ),
          ),
          m.heading(1, 'References'),
          inline(
            reference(
              { name: 'Marty McFly', role: 'Musician & Time Traveler', location: 'Hill Valley, CA, USA' },
              inline`${space}Long-term collaborator and field assistant in temporal experiments.${linebreak()} Contact:
${emailLink('marty.mcfly@hillvalley.com')}${space}`,
            ),
          ),
          inline(
            reference(
              { name: 'Clara Clayton', role: 'Science Educator', location: 'Hill Valley, CA, USA' },
              inline`${space}Advisor on science communication and educational outreach.${linebreak()} Contact: ${emailLink('clara.clayton@hillvalley.edu')}${space}`,
            ),
          ),
        ),
      ),
    ),
    inline(pagebreak()),
    inline(
      cvThinSide(
        inline(
          space,
          thinLabel('Bibliography'),
          space,
          v(em(1)),
          space,
          thinMetrics([
            { label: 'i10-index', value: '12' },
            { label: 'h-index', value: '18' },
            { label: 'Citations', value: '423' },
          ]),
          space,
        ),
        blocks(
          m.heading(1, 'Publications'),
          inline(
            publications(
              { highlightAuthors: ['Brown, Emmett', 'Brown, Emmett Lathrop'], maxAuthors: 5 },
              yaml(path('publications.yml')),
            ),
          ),
        ),
      ),
    ),
  )
}
