// Converted from test/universe/corpus/modernpro-cv.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  blocks,
  define,
  doc,
  external,
  importPackage,
  inline,
  let_,
  m,
  show,
  space,
  sym,
} from '../../../src/index.ts'

export default () => {
  const cv = external('cv')
  const section = define('section').pos('arg1', T.any).returns(T.any).external()
  const summary = define('summary').pos('arg1', T.content).returns(T.any).external()
  const sectionGap = external('section-gap')
  const experience = define('experience')
    .named('date', T.any, null)
    .named('details', T.content, [])
    .named('institution', T.content, [])
    .named('location', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external()
  const education = define('education')
    .named('date', T.any, null)
    .named('description', T.content, [])
    .named('institution', T.content, [])
    .named('location', T.any, null)
    .named('major', T.content, [])
    .returns(T.any)
    .external()
  const entry = define('entry')
    .named('location', T.content, [])
    .named('meta', T.content, [])
    .named('right', T.any, null)
    .named('title', T.content, [])
    .returns(T.any)
    .external()
  const detailLine = define('detail-line')
    .named('content', T.content, [])
    .named('title', T.any, null)
    .returns(T.any)
    .external()
  const referenceList = define('reference-list').named('references', T.any, null).returns(T.any).external()
  const references = external('references')
  const cv_with = define('with').named('profile', T.any, null).returns(T.any).external(cv)
  const [profileDecl, profile] = let_('profile', {
    name: inline`Your Name`,
    role: inline`Your Current Role`,
    address: inline`City, Country`,
    contacts: [
      { text: inline`name@candidate.invalid`, link: 'mailto:name@candidate.invalid' },
      { text: inline`site.candidate.invalid`, link: 'https://site.candidate.invalid' },
      { text: inline`Fictional ID${sym.space.nobreak}0000-0000`, link: 'https://registry.example.invalid/0000-0000' },
    ],
  })
  return doc(
    m.lines(
      importPackage('@preview/modernpro-cv:2.1.2', [
        cv,
        section,
        summary,
        sectionGap,
        experience,
        education,
        entry,
        detailLine,
        referenceList,
        references,
      ]),
      profileDecl,
    ),
    show(cv_with({ profile: profile })),
    inline(
      section('Research Profile'),
      space,
      summary(inline`${space}One or two sentences on the question that connects your work and the methods you use
to answer it.${space}`),
      space,
      sectionGap,
    ),
    inline(
      section('Academic Appointments'),
      space,
      experience({
        title: 'Your Position',
        institution: inline`Institution, Department`,
        location: 'City, Country',
        date: '2023-present',
        details: blocks(m.list(m.item(['One line on what you lead, build, or supervise.']))),
      }),
      space,
      sectionGap,
    ),
    inline(
      section('Education'),
      space,
      education({
        institution: inline`University`,
        major: inline`PhD in Your Field`,
        date: '2016-2020',
        location: 'City, Country',
        description: inline`Thesis: your thesis title.`,
      }),
      space,
      sectionGap,
    ),
    inline(
      section('Selected Publications'),
      space,
      entry({ title: inline`Paper title`, right: '2025', meta: inline`Author list, Journal Name 8(2)` }),
      space,
      sectionGap,
    ),
    inline(
      section('Research Funding'),
      space,
      entry({
        title: inline`Grant title`,
        right: '2024-2027',
        meta: inline`Funder; your role`,
        location: inline`Amount`,
      }),
      space,
      sectionGap,
    ),
    inline(
      section('Teaching and Service'),
      space,
      detailLine({ title: 'Teaching', content: inline`Courses you lead and supervision you provide.` }),
      space,
      detailLine({ title: 'Service', content: inline`Committees, review work, and outreach.` }),
      space,
      sectionGap,
    ),
    inline(
      section('References'),
      space,
      referenceList({
        references: [
          {
            name: 'Referee Name',
            position: 'Their Role',
            department: 'Department',
            institution: 'Institution',
            address: 'City, Country',
            email: 'referee.one@referee.invalid',
          },
          {
            name: 'Second Referee',
            position: 'Their Role',
            department: 'Department',
            institution: 'Institution',
            address: 'City, Country',
            email: 'referee.two@referee.invalid',
          },
        ],
      }),
    ),
  )
}
