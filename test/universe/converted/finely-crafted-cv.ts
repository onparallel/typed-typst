// Converted from test/universe/corpus/finely-crafted-cv.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  blocks,
  define,
  doc,
  external,
  footnote,
  image,
  importPackage,
  inline,
  link,
  m,
  path,
  quote,
  show,
  smartquote,
  space,
  strong,
} from '../../../src/index.ts'

export default () => {
  const resume = external('resume')
  const companyHeading = define('company-heading')
    .pos('arg1', T.any)
    .pos('arg2', T.content)
    .named('end', T.any, null)
    .named('icon', T.any, null)
    .named('start', T.any, null)
    .returns(T.any)
    .external()
  const jobHeading = define('job-heading')
    .pos('arg1', T.any)
    .pos('arg2', T.content)
    .named('comment', T.content, [])
    .named('location', T.any, null)
    .returns(T.any)
    .external()
  const schoolHeading = define('school-heading')
    .pos('arg1', T.any)
    .pos('arg2', T.content)
    .named('end', T.any, null)
    .named('icon', T.any, null)
    .named('start', T.any, null)
    .returns(T.any)
    .external()
  const degreeHeading = define('degree-heading').pos('arg1', T.any).pos('arg2', T.content).returns(T.any).external()
  const resume_with = define('with')
    .named('icon-contact-header', T.any, null)
    .named('keywords', T.any, null)
    .named('name', T.any, null)
    .named('tagline', T.any, null)
    .named('thumbnail', T.any, null)
    .returns(T.any)
    .external(resume)
  return doc(
    importPackage('@preview/finely-crafted-cv:0.3.0', [
      resume,
      companyHeading,
      jobHeading,
      schoolHeading,
      degreeHeading,
    ]),
    show(
      resume_with({
        name: 'Amira Patel',
        tagline: 'Innovative marine biologist with 15+ years of experience in ocean conservation and research.',
        keywords: 'marine biology, conservation, research, education, patents',
        iconContactHeader: [
          [image(path('icons/email.svg')), link('mailto:amira.patel@oceandreams.org', 'amira.patel@oceandreams.org')],
          [image(path('icons/phone.svg')), link('tel:+13055557890', '+1-305-555-7890')],
          [image(path('icons/linkedin.svg')), link('https://www.linkedin.com/in/amirapatel/', 'amirapatel')],
        ],
        thumbnail: image(path('assets/my-qr-code.svg')),
      }),
    ),
    m.heading(1, 'Research Philosophy'),
    'My approach to marine biology is rooted in curiosity, collaboration, and conservation. I believe in conducting rigorous scientific research that not only advances our understanding of marine ecosystems but also informs policy decisions to protect our oceans. By fostering interdisciplinary partnerships and engaging with local communities, I strive to create impactful solutions that balance human needs with ecological preservation.',
    m.heading(1, 'Experience'),
    inline(
      companyHeading(
        { start: 'March 2018', end: 'Present', icon: image(path('./icons/earth.svg')) },
        'Global Ocean Institute',
        inline(
          space,
          jobHeading(
            { location: 'Brisbane, Queensland, AU' },
            'Senior Marine Biologist',
            blocks(
              m.list(
                m.item([
                  'Leading a team of 12 researchers in a long-term study on coral reef resilience in changing climates.',
                ]),
                m.item([
                  'Developed an AI-powered system for monitoring fish populations, increasing data accuracy by 40%.',
                ]),
                m.item([
                  'Secured $2.5M in research grants for the institute',
                  smartquote({ double: false }),
                  's sustainable fishing practices initiative.',
                ]),
                m.item(['Mentored 20+ graduate students, with 5 going on to publish in top-tier scientific journals.']),
              ),
            ),
          ),
          space,
        ),
      ),
    ),
    inline(
      companyHeading(
        { start: 'June 2014', end: 'February 2018', icon: image(path('icons/whale.svg')) },
        'OceanTech Solutions',
        inline(
          space,
          jobHeading(
            { location: 'Baltimore, Maryland' },
            'Research Scientist',
            blocks(
              m.list(
                m.item([
                  'Pioneered use of autonomous underwater vehicles for deep-sea exploration, discovering 3 new species.',
                ]),
                m.item([
                  'Collaborated with engineers to develop biodegradable sensors for ocean pollution monitoring.',
                ]),
                m.item([
                  'Presented findings at 15+ international conferences, establishing the company as a leader in marine tech.',
                ]),
              ),
            ),
          ),
          space,
        ),
      ),
    ),
    inline(
      companyHeading(
        { start: 'September 2009', end: 'May 2014', icon: image(path('icons/coral.svg')) },
        'Coral Conservation Alliance',
        inline(
          space,
          jobHeading(
            { location: 'Corpus Christi, Texas' },
            'Conservation Biologist',
            blocks(
              m.list(
                m.item(['Managed a team of 8 in implementing coral restoration techniques across 5 Caribbean sites.']),
                m.item([
                  'Increased local community engagement in conservation efforts by 200% through education programs.',
                ]),
                m.item([
                  'Co-authored a policy brief that influenced the establishment of 3 new marine protected areas.',
                ]),
              ),
            ),
          ),
          space,
        ),
      ),
    ),
    inline(
      companyHeading(
        { start: 'July 2005', end: 'August 2009', icon: image(path('icons/microscope.svg')) },
        'Pacific Marine Research Center',
        inline(
          space,
          jobHeading(
            {
              location: 'San Diego, California',
              comment: inline`Contributed to 7 published studies. ${footnote(inline`Visit ${link('https://amirapatel.org/publications')} for full list of publications.`)}`,
            },
            'Research Assistant',
            inline(),
          ),
          space,
        ),
      ),
    ),
    m.heading(1, 'Patents'),
    inline(
      link(
        'https://patents.google.com/patent/US20230123456A1',
        strong('MARINE BIODIVERSITY MONITORING SYSTEM USING ENVIRONMENTAL DNA (US 20230123456A1)'),
      ),
      space,
      quote(inline`A novel system and method for monitoring marine biodiversity using environmental DNA (eDNA)
sampling and analysis. The invention includes an automated collection device capable of filtering
seawater at various depths, preserving eDNA samples, and transmitting data in real-time.`),
    ),
    m.heading(1, 'Eligibility and Location'),
    m.list(
      m.item([strong(inline`Eligibility:`), space, 'United States Permanent Resident']),
      m.item([strong(inline`Location:`), space, 'Open to remote opportunities or relocation to coastal areas.']),
      m.item([
        strong(inline`Travel Availability:`),
        space,
        'Willing to travel up to 40% for field research and conferences.',
      ]),
    ),
    m.heading(1, 'Education'),
    inline(
      schoolHeading(
        { start: 'Fall 2001', end: 'Spring 2005', icon: image(path('icons/graduation-cap.svg')) },
        'University of California, San Diego',
        inline(space, degreeHeading('Ph.D. in Marine Biology', inline()), space),
      ),
    ),
    inline(
      schoolHeading(
        { start: 'Fall 1997', end: 'Spring 2001', icon: image(path('icons/palm-tree.svg')) },
        'University of Miami',
        inline(space, degreeHeading('B.S. in Marine Science, Minor in Environmental Policy', inline()), space),
      ),
    ),
  )
}
