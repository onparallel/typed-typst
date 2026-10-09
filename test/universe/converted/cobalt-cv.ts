// Converted from test/universe/corpus/cobalt-cv.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  align,
  auto,
  blocks,
  center,
  cm,
  data,
  define,
  doc,
  document,
  em,
  emph,
  fr,
  grid,
  heading,
  importPackage,
  inline,
  left,
  let_,
  line,
  linebreak,
  link,
  m,
  page,
  parbreak,
  pct,
  pt,
  rgb,
  right,
  set,
  show,
  space,
  text,
  unsafeRaw,
  upper,
  where,
} from '../../../src/index.ts'

export default () => {
  const faIcon = define('fa-icon').pos('arg1', T.any).named('font', T.any, null).returns(T.any).external()
  const [nameDecl, name] = let_('name', 'Jane Doe')
  const [accentDecl, accent] = let_('accent', rgb('#002366'))
  const [sidebarFillDecl, sidebarFill] = let_('sidebar-fill', rgb('#eef0f5'))
  const [sansFontDecl, sansFont] = let_('sans-font', 'Noto Sans')
  const [serifFontDecl, serifFont] = let_('serif-font', 'Noto Serif')
  const [colRatioDecl, colRatio] = let_('col-ratio', data([fr(3), fr(7)]))
  const resumeTitle = define('resume-title')
    .returns(T.any)
    .body((p) =>
      text({ font: serifFont, tracking: em(0.1), weight: 500, size: pt(28), fill: accent }, inline(upper(name))),
    )
  const experience = define('experience')
    .pos('company', T.any)
    .pos('role', T.any)
    .pos('location', T.any)
    .pos('dates', T.any)
    .pos('bullets', T.any)
    .body((p) =>
      blocks(
        m.heading(2, text({ fill: accent }, inline(p['company']))),
        inline(
          grid(
            { columns: [fr(1), fr(1)], align: [left, right] },
            inline(space, emph(inline(p['role'])), space),
            inline(space, emph(inline`${p['location']} | ${p['dates']}`), space),
          ),
        ),
        inline(unsafeRaw.code<any>`for bullet in bullets {
    [- #bullet]
  }`),
      ),
    )
  const education = define('education')
    .pos('institution', T.any)
    .pos('location', T.any)
    .pos('dates', T.any)
    .pos('degrees', T.any)
    .body((p) =>
      blocks(
        m.heading(2, p['institution']),
        inline`${p['location']} | ${p['dates']} ${linebreak()} ${unsafeRaw.code<any>`for degree in degrees {
    [ #text(weight: "bold")[#degree] \\ ]
  }`}`,
      ),
    )
  const skillCategory = define('skill-category')
    .pos('category', T.any)
    .pos('items', T.any)
    .body((p) => blocks(m.heading(2, p['category']), inline(unsafeRaw.code<any>`items.join(" | ")`)))
  return doc(
    importPackage('@preview/fontawesome:0.6.0', [faIcon]),
    inline(
      nameDecl,
      space,
      accentDecl,
      space,
      sidebarFillDecl,
      space,
      sansFontDecl,
      space,
      serifFontDecl,
      space,
      colRatioDecl,
    ),
    m.lines(
      set(document, { title: inline(upper(name)) }),
      set(text, { size: pt(10) }),
      show(where(heading, { level: 1 }), set(text, { font: sansFont, tracking: em(0.1), weight: 500, fill: accent })),
      show(where(heading, { level: 2 }), set(text, { size: pt(12) })),
    ),
    set(page, { margin: { top: cm(1), left: cm(1), right: cm(1), bottom: cm(1) } }),
    resumeTitle.decl,
    experience.decl,
    education.decl,
    skillCategory.decl,
    inline(
      align(
        center,
        inline(
          space,
          resumeTitle(),
          space,
          set(text, { size: pt(10) }),
          space,
          grid(
            { columns: [fr(1), fr(1), fr(1), fr(1)], align: center },
            inline(
              space,
              text({ fill: accent }, inline(faIcon({ font: 'Font Awesome 7 Free Solid' }, 'globe'))),
              space,
              link('https://yourwebsite.com', inline`yourwebsite.com`),
              space,
            ),
            inline(
              space,
              text({ fill: accent }, inline(faIcon({ font: 'Font Awesome 7 Free Solid' }, 'envelope'))),
              space,
              link('mailto:your.email@gmail.com', inline`your.email@gmail.com`),
              space,
            ),
            inline(
              space,
              text({ fill: accent }, inline(faIcon({ font: 'Font Awesome 7 Brands' }, 'github'))),
              space,
              link('https://github.com/yourusername', inline`yourusername`),
              space,
            ),
            inline(
              space,
              text({ fill: accent }, inline(faIcon({ font: 'Font Awesome 7 Brands' }, 'linkedin'))),
              space,
              link('https://linkedin.com/in/yourusername', inline`yourusername`),
              space,
            ),
          ),
          space,
        ),
      ),
    ),
    inline(line({ length: pct(100), stroke: accent })),
    'Software engineer with a focus on building reliable, scalable backend systems and a strong foundation in distributed computing. Experienced across the full stack, from data pipelines and APIs to frontend interfaces, with a track record of delivering impactful systems in fast-moving environments. MS in Computer Science from Stanford University.',
    inline(line({ length: pct(100), stroke: accent })),
    inline(
      grid(
        { columns: colRatio, rows: auto, fill: [sidebarFill, null], inset: pt(5), columnGutter: cm(0.5) },
        blocks(
          m.heading(1, upper('Education')),
          inline(education('Stanford University', 'Stanford, CA', "Sept '18 – June '20", ['MS in Computer Science'])),
          inline(
            education('University of Michigan', 'Ann Arbor, MI', "Sept '14 – May '18", [
              'BS in Computer Science',
              'BS in Mathematics',
            ]),
          ),
          inline(line({ stroke: { dash: 'dashed', paint: accent }, length: pct(90) })),
          m.heading(1, upper('Skills')),
          inline(
            skillCategory('Languages', ['Python', 'Go', 'TypeScript', 'Rust', 'Java', 'C++']),
            space,
            skillCategory('Frameworks', ['FastAPI', 'gRPC', 'PyTorch', 'React', 'Django']),
            space,
            skillCategory('Tooling', ['uv', 'ruff', 'mypy', 'pytest', 'Webpack']),
            space,
            skillCategory('Databases', ['Postgres', 'Redis', 'Elasticsearch', 'DynamoDB']),
            space,
            skillCategory('DevOps', ['Docker', 'Kubernetes', 'Helm', 'GitHub Actions', 'Terraform']),
          ),
          parbreak(),
        ),
        blocks(
          m.heading(1, upper('Work Experience')),
          inline(
            experience(
              'Stripe',
              'Senior Software Engineer, Payments Infrastructure',
              'San Francisco, CA',
              'Aug 2022 – Present',
              [
                'Architected a distributed rate-limiting service handling over 500K requests per second, reducing fraudulent transaction volume by 34% across all payment flows.',
                'Led a team of four engineers to redesign the payment retry pipeline, cutting failed payment recovery time from 48 hours to under 6 hours and recovering an estimated \\$12M annually.',
                'Drove adoption of internal observability tooling across three teams, reducing mean time to detection for production incidents by 40%.',
                'Served as technical lead for a real-time fraud scoring microservice integrating gradient-boosted and neural network models, deployed across 12 global regions.',
                'Onboarded and mentored five engineers, establishing code review standards and internal documentation practices adopted org-wide.',
              ],
            ),
          ),
          inline(
            experience('Airbnb', 'Software Engineer, Search & Ranking', 'San Francisco, CA', 'July 2020 – July 2022', [
              "Built and maintained ranking models for Airbnb's core search pipeline, improving booking conversion rate by 8% through feature engineering and A/B experimentation.",
              'Owned the real-time feature computation service powering search ranking, reducing p99 latency from 180ms to 55ms through caching and query optimization.',
              'Co-authored an internal paper on listless search personalization adopted as a standard approach across the ranking team.',
              'Redesigned the search index update pipeline to support near-real-time listing availability, reducing stale search results by 60% during peak booking periods.',
            ]),
          ),
          inline(
            experience(
              'Microsoft',
              'Software Engineering Intern, Azure Networking',
              'Redmond, WA',
              'May 2019 – Aug 2019',
              [
                'Implemented a distributed tracing system for internal Azure networking services, enabling engineers to diagnose cross-region latency regressions 3× faster.',
                'Contributed to the design and rollout of a load balancing algorithm that improved throughput by 22% under peak traffic conditions.',
              ],
            ),
          ),
          inline(
            experience(
              'Stanford University',
              'Research Assistant, Systems Lab',
              'Stanford, CA',
              'Sept 2018 – June 2020',
              [
                'Researched fault-tolerant consensus protocols for geo-distributed systems, publishing findings at OSDI 2020 on reducing leader election overhead in high-latency networks.',
                'Teaching assistant for CS 149: Parallel Computing, holding weekly office hours and developing course materials for a class of 200 students.',
              ],
            ),
          ),
          parbreak(),
        ),
      ),
    ),
    inline(line({ length: pct(100), stroke: accent })),
  )
}
