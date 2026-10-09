// Converted from test/universe/corpus/signal-resume.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, em, external, importPackage, inline, link, show, space } from '../../../src/index.ts'

export default () => {
  const resume = external('resume')
  const resume_with = define('with')
    .named('contact', T.any, null)
    .named('education', T.any, null)
    .named('experience', T.any, null)
    .named('featured-sections', T.any, null)
    .named('headline', T.any, null)
    .named('list-spacing', T.any, null)
    .named('name', T.any, null)
    .named('sections', T.any, null)
    .named('skills', T.any, null)
    .named('summary', T.content, [])
    .returns(T.any)
    .external(resume)
  return doc(
    importPackage('@preview/signal-resume:0.1.1', [resume]),
    show(
      resume_with({
        name: 'Alex Morgan',
        headline: 'Backend-Focused Full-Stack & Platform Engineer',
        listSpacing: em(0.9),
        contact: [
          'City, Country',
          link('tel:+15550100', inline`+1 555 0100`),
          link('mailto:alex.morgan@example.com', inline`alex.morgan@example.com`),
          link('https://www.linkedin.com/in/alex-morgan', inline`linkedin.com/in/alex-morgan`),
        ],
        summary: inline`${space}Backend-focused full-stack engineer with a track record of turning ambiguous product
requirements into reliable systems, reusable infrastructure, and foundations that help teams
deliver faster.${space}`,
        skills: [
          { label: 'Languages & Frameworks', items: ['TypeScript', 'JavaScript', 'Node.js', 'React'] },
          { label: 'Backend', items: ['REST APIs', 'Microservices', 'Event-driven systems', 'SDK development'] },
          { label: 'Data', items: ['PostgreSQL', 'Redis', 'Data modeling'] },
          {
            label: 'Engineering',
            items: ['System design', 'Platform engineering', 'Performance optimization', 'Testing'],
          },
        ],
        experience: [
          {
            company: 'Northstar Security',
            role: 'Software Engineer',
            location: 'Remote',
            dates: 'Jun 2023–Present',
            description: null,
            bullets: [
              inline`Delivered a new security product from early requirements through production in partnership with
backend, product, QA, and design peers.`,
              inline`Built reusable backend and frontend foundations that supported multiple product workflows without
one-off implementations.`,
              inline`Resolved high-impact on-call incidents by tracing failures across services, data access, and
production infrastructure.`,
              inline`Created shared SDKs and developer tooling that helped other engineering teams adopt platform
capabilities consistently.`,
            ],
          },
          {
            company: 'Atlas Cloud',
            role: 'Full-Stack Developer',
            location: 'City, Country',
            dates: 'Jan 2020–May 2023',
            description: null,
            bullets: [
              inline`Built data integrations, APIs, and customer-facing workflows for a growing cloud platform.`,
              inline`Improved shared data models and UI patterns, reducing duplicated implementation across product
teams.`,
            ],
          },
        ],
        featuredSections: [],
        education: [],
        sections: [
          {
            title: 'Education',
            kind: 'labeled',
            items: [{ label: 'Example University', value: 'B.Sc., Computer Science, 2016–2020' }],
          },
        ],
      }),
    ),
  )
}
