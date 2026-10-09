// Converted from test/universe/corpus/heading-resume.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, external, importPackage, inline, show, space, strong } from '../../../src/index.ts'

export default () => {
  const contact = define('contact').pos('arg1', T.content).named('url', T.any, null).returns(T.any).external()
  const entry = define('entry')
    .pos('arg1', T.content)
    .named('body', T.any, null)
    .named('dates', T.content, [])
    .named('organisation', T.content, [])
    .named('subtitle', T.content, [])
    .returns(T.any)
    .external()
  const entrySection = define('entry-section')
    .pos('arg1', T.content)
    .pos('arg2', T.any)
    .named('compact', T.any, null)
    .named('inline-organisation', T.any, null)
    .returns(T.any)
    .external()
  const resume = external('resume')
  const skill = define('skill').pos('arg1', T.content).pos('arg2', T.content).returns(T.any).external()
  const skillSection = define('skill-section').pos('arg1', T.content).pos('arg2', T.any).returns(T.any).external()
  const resume_with = define('with')
    .named('aside-sections', T.any, null)
    .named('contacts', T.any, null)
    .named('full-sections', T.any, null)
    .named('main-sections', T.any, null)
    .named('name', T.content, [])
    .named('profile', T.content, [])
    .returns(T.any)
    .external(resume)
  return doc(
    importPackage('@preview/heading-resume:0.1.0', [contact, entry, entrySection, resume, skill, skillSection]),
    show(
      resume_with({
        name: inline`Avery Example`,
        contacts: [
          contact(inline`Example City`),
          contact({ url: 'mailto:avery@example.com' }, inline`avery@example.com`),
          contact({ url: 'https://example.com/avery' }, inline`example.com/avery`),
          contact({ url: 'https://example.com/profile' }, inline`professional profile`),
        ],
        profile: inline`${space}Product-minded software engineer who turns complex systems into clear, dependable tools.
Experienced across data products, developer platforms, and collaborative technical leadership.${space}`,
        mainSections: [
          entrySection(inline`Selected Projects`, [
            entry(
              {
                organisation: inline`Independent project`,
                dates: inline`2025–Present`,
                subtitle: inline`data systems · product engineering`,
                body: [
                  inline`Built an accessible workspace for exploring public datasets and documenting repeatable analyses.`,
                  inline`Designed a typed data pipeline with clear provenance, validation, and useful failure messages.`,
                  inline`Worked with early users to simplify onboarding and prioritize high-value workflows.`,
                ],
              },
              inline`Open Data Explorer`,
            ),
            entry(
              {
                organisation: inline`Community technology project`,
                dates: inline`2024–2025`,
                subtitle: inline`offline-first tools · information design`,
                body: [
                  inline`Created a fast offline application for collecting, organizing, and sharing structured observations.`,
                  inline`Reduced sync conflicts through an explicit change model and focused usability testing.`,
                ],
              },
              inline`Field Notes`,
            ),
            entry(
              {
                organisation: inline`Example Systems`,
                dates: inline`2024`,
                subtitle: inline`accessibility · interface architecture`,
                body: [
                  inline`Mapped inconsistent interface patterns and proposed a smaller set of reusable components.`,
                  inline`Paired accessibility findings with practical fixes and clear ownership.`,
                ],
              },
              inline`Design System Audit`,
            ),
          ]),
          skillSection(inline`Skills`, [
            skill(inline`Programming`, inline`Python · Rust · TypeScript · SQL`),
            skill(inline`Methods`, inline`Data modeling · API design · testing · accessibility`),
            skill(inline`Tools`, inline`Linux · Git · containers · continuous integration`),
            skill(inline`Languages`, inline`English · Dutch`),
          ]),
        ],
        asideSections: [
          entrySection({ compact: true }, inline`Education`, [
            entry(
              {
                organisation: inline`Example Institute of Technology`,
                dates: inline`2023–2025`,
                subtitle: inline`Example City`,
                body: inline`${strong(inline`Focus:`)} Human-centered systems and applied machine learning.`,
              },
              inline`MSc Computer Science`,
            ),
            entry(
              {
                organisation: inline`Sample University`,
                dates: inline`2020–2023`,
                subtitle: inline`Sample Town`,
                body: inline`${strong(inline`Activities:`)} Student mentor and open-source contributor.`,
              },
              inline`BSc Information Science`,
            ),
          ]),
          skillSection(inline`Interests`, [
            skill(inline`Practice`, inline`Open source · civic technology`),
            skill(inline`Outside work`, inline`Cycling · printmaking`),
          ]),
          entrySection({ compact: true }, inline`Community`, [
            entry(
              {
                organisation: inline`Example Code Club`,
                dates: inline`2022–Present`,
                body: inline`Monthly project feedback for early-career developers.`,
              },
              inline`Volunteer mentor`,
            ),
          ]),
        ],
        fullSections: [
          entrySection({ compact: true, inlineOrganisation: true }, inline`Experience`, [
            entry(
              {
                organisation: inline`Example Systems`,
                dates: inline`2025–Present`,
                body: [
                  inline`Shipped data-heavy product features with designers, researchers, and customer teams.`,
                  inline`Improved release confidence through focused integration tests and observable services.`,
                ],
              },
              inline`Software Engineer`,
            ),
            entry(
              {
                organisation: inline`Sample Studio`,
                dates: inline`2023–2024`,
                body: [inline`Built internal tools that shortened content review and reduced repetitive manual work.`],
              },
              inline`Developer Intern`,
            ),
            entry(
              {
                organisation: inline`Sample University`,
                dates: inline`2022–2023`,
                body: [inline`Guided small-group programming labs and wrote concise debugging exercises.`],
              },
              inline`Teaching Assistant`,
            ),
          ]),
        ],
      }),
    ),
  )
}
