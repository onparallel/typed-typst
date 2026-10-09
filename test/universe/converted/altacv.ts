// Converted from test/universe/corpus/altacv.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, dict, doc, external, importPackage, inline, let_, space } from '../../../src/index.ts'

export default () => {
  const alta = define('alta').pos('arg1', T.any).named('preferences', T.any, null).returns(T.any).external()
  const avatarPlaceholder = external('avatar-placeholder')
  const [cvDecl, cv] = let_(
    'cv',
    dict({
      basics: {
        name: 'Seán Ó Murchú',
        label: 'Senior Software Engineer',
        summary: inline`${space}Backend engineer with eight years of experience designing distributed, event-driven
systems. Specialises in functional programming, observability, and developer experience.${space}`,
        email: 'sean@example.com',
        phone: '+353 1 555 0100',
        location: 'Tallaght, Dublin',
        url: 'https://seanomurchu.dev',
        image: avatarPlaceholder,
        profiles: [
          { network: 'GitHub', username: 'seanomurchu', url: 'https://github.com/seanomurchu' },
          { network: 'LinkedIn', username: 'seanomurchu', url: 'https://linkedin.com/in/seanomurchu' },
        ],
      },
      focusAreas: [inline`Distributed systems and functional programming.`],
      work: [
        dict({
          name: 'Acme Corp',
          url: 'https://acme.example.com',
          position: 'Senior Software Engineer',
          location: 'Dublin, Ireland',
          startDate: '2022-01',
          summary: inline`Platform team lead. Owns the event-sourcing stack.`,
          highlights: [
            inline`Migrated a customer-facing monolith to event-driven services, halving p99 latency.`,
            inline`Rolled out an event-sourcing platform now used by four product teams.`,
          ],
        }),
        dict({
          name: 'Liffey Labs',
          position: 'Software Engineer',
          location: 'Remote',
          startDate: '2019-06',
          endDate: '2022-01',
          highlights: [
            inline`Shipped the first version of a SaaS product alongside a two-person team.`,
            inline`Built the CI/CD pipeline that scaled the engineering org from 3 to 15.`,
          ],
        }),
        dict({
          name: 'Grand Canal Systems',
          position: 'Software Engineer',
          location: 'Dublin, Ireland',
          startDate: '2017-09',
          endDate: '2019-06',
          highlights: [inline`Led the migration of services from VMs to Kubernetes.`],
        }),
      ],
      skills: [
        { name: 'Languages', keywords: ['Scala', 'Haskell', 'Go'] },
        { name: 'Infra', keywords: ['Kafka', 'AWS', 'Kubernetes'] },
      ],
      languages: [
        { language: 'English', fluency: 'Native' },
        { language: 'Irish', fluency: 'Professional Working' },
      ],
      education: [
        dict({
          institution: 'Tallaght Institute of Technology',
          url: 'https://example.edu/tit',
          studyType: 'M.Sc. in Computer Science',
          startDate: '2015',
          endDate: '2017',
        }),
      ],
      certificates: [
        {
          name: 'Certified Kubernetes Administrator',
          issuer: 'CNCF',
          date: '2023-09',
          url: 'https://www.cncf.io/training/certification/cka/',
        },
        {
          name: 'Certified Kubernetes Application Developer',
          issuer: 'CNCF',
          date: '2024-04',
          url: 'https://www.cncf.io/training/certification/ckad/',
        },
      ],
      awards: [
        {
          title: 'Best Paper — Distributed Systems Track',
          awarder: 'EuroSys',
          date: '2024-09',
          url: 'https://example.com/eurosys',
        },
      ],
      publications: [
        dict({
          name: 'Event Sourcing in Practice',
          publisher: 'Personal Blog',
          releaseDate: '2024-06-15',
          url: 'https://example.com/posts/event-sourcing',
        }),
      ],
      projects: [
        dict({
          name: 'open-source: kafka-idempotent',
          url: 'https://example.com/projects/kafka-idempotent',
          description: 'Small Scala library for idempotent consumers.',
          startDate: '2023-04',
          keywords: ['Scala', 'Kafka', 'OSS'],
          highlights: [inline`Underpins the awarded EuroSys paper above.`],
        }),
      ],
      volunteer: [
        dict({
          organization: 'CoderDojo Dublin',
          position: 'Mentor',
          startDate: '2020-09',
          highlights: [inline`Weekly mentoring sessions for 10–14 year-olds learning to code.`],
        }),
      ],
      interests: [
        { name: 'Music', keywords: ['Trad', 'Jazz'] },
        { name: 'Sport', keywords: ['Hurling', 'Climbing'] },
      ],
    }),
  )
  const [preferencesDecl, preferences] = let_(
    'preferences',
    dict({ imagePosition: 'center', imageStackOrder: 'above', headerTextAlign: 'center' }),
  )
  return doc(
    inline(importPackage('@preview/altacv:1.6.0', [alta, avatarPlaceholder])),
    cvDecl,
    preferencesDecl,
    inline(alta({ preferences: preferences }, cv)),
  )
}
