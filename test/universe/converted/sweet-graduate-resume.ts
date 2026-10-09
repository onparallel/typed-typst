// Converted from test/universe/corpus/sweet-graduate-resume.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  data,
  define,
  doc,
  image,
  importPackage,
  inline,
  let_,
  lorem,
  m,
  path,
  show,
  space,
} from '../../../src/index.ts'

export default () => {
  const preamble = define('preamble').pos('arg1', T.any).returns(T.any).external()
  const header = define('header')
    .pos('arg1', T.any)
    .pos('arg2', T.any)
    .pos('arg3', T.any)
    .pos('arg4', T.any)
    .returns(T.any)
    .external()
  const sectionHeader = define('section-header').pos('arg1', T.any).returns(T.any).external()
  const education = define('education').pos('arg1', T.any).returns(T.any).external()
  const points = define('points').pos('arg1', T.any).returns(T.any).external()
  const dual = define('dual').pos('arg1', T.any).returns(T.any).external()
  const datedSection = define('dated-section')
    .pos('arg1', T.any)
    .pos('arg2', T.any)
    .named('date-end', T.any, null)
    .named('date-start', T.any, null)
    .named('ongoing', T.any, null)
    .named('points', T.any, null)
    .returns(T.any)
    .external()
  const [urlsDecl, urls] = let_('urls', [
    {
      name: 'Codeberg',
      url: 'https://codeberg.org/innocent_zero',
      svg: image(path('svg/codeberg.svg')),
      fa: false,
      brand: false,
      solid: false,
    },
    { name: 'Website', url: 'https://example.com', svg: 'link', fa: true, brand: false, solid: false },
    { name: 'Website', url: 'https://example.com', svg: 'github', fa: true, brand: true, solid: true },
  ])
  const [eduDecl, edu] = let_('edu', [
    { prog: 'Bachelors', school: 'college', grade: '4.0' },
    { prog: 'grad', school: 'school', grade: '4.0' },
  ])
  const [achievementsDecl, achievements] = let_('achievements', data([inline(lorem(30)), inline(lorem(20))]))
  const [skillsDecl, skills] = let_('skills', data([inline(lorem(30)), inline(lorem(20))]))
  const [coursesDecl, courses] = let_(
    'courses',
    data([inline(lorem(4)), inline(lorem(5)), inline(lorem(3)), inline(lorem(2)), inline(lorem(4))]),
  )
  const [internerDecl, interner] = let_('interner', data([inline(lorem(25)), inline(lorem(30))]))
  const [internerDecl_2, interner_2] = let_('interner', data([inline(lorem(25)), inline(lorem(30))]))
  return doc(
    importPackage('@preview/sweet-graduate-resume:0.1.0', [
      preamble,
      header,
      sectionHeader,
      education,
      points,
      dual,
      datedSection,
    ]),
    show((doc_2, ctx) => preamble(doc_2)),
    urlsDecl,
    inline(header('InnocentZero', 'roll', 'school', urls)),
    eduDecl,
    inline(sectionHeader('Education'), space, education(edu)),
    achievementsDecl,
    inline(sectionHeader('Scholastic Achievements'), space, points(achievements)),
    skillsDecl,
    inline(sectionHeader('Major Competitions and Technical Skills'), space, points(skills)),
    coursesDecl,
    inline(sectionHeader('Relevant Coursework'), space, dual(courses)),
    inline(sectionHeader('Professional Experience')),
    m.lines(
      internerDecl,
      inline(
        datedSection(
          { dateStart: 'May 2024', dateEnd: 'Aug 2024', ongoing: false, points: interner },
          'Software Intern',
          'industrial',
        ),
      ),
    ),
    inline(datedSection({ dateStart: 'May 2024', ongoing: true, points: interner }, 'AI Intern', 'research')),
    inline(
      sectionHeader('Projects'),
      space,
      internerDecl_2,
      space,
      datedSection({ points: interner_2 }, 'Cybersecurity Project Maintainer', 'self'),
    ),
  )
}
