// Converted from test/universe/corpus/silver-dev-cv.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  blocks,
  define,
  doc,
  document,
  external,
  importPackage,
  inline,
  m,
  set,
  show,
  space,
} from '../../../src/index.ts'

export default () => {
  const cv = external('cv')
  const section = define('section').pos('arg1', T.any).returns(T.any).external()
  const descript = define('descript').pos('arg1', T.content).returns(T.any).external()
  const sectionsep = external('sectionsep')
  const job = define('job')
    .named('date', T.any, null)
    .named('description', T.content, [])
    .named('institution', T.content, [])
    .named('location', T.any, null)
    .named('position', T.any, null)
    .returns(T.any)
    .external()
  const onelineTitleItem = define('oneline-title-item')
    .named('content', T.content, [])
    .named('title', T.any, null)
    .returns(T.any)
    .external()
  const project = define('project')
    .named('date', T.content, [])
    .named('description', T.content, [])
    .named('title', T.content, [])
    .returns(T.any)
    .external()
  const education = define('education')
    .named('date', T.any, null)
    .named('institution', T.content, [])
    .named('location', T.any, null)
    .named('major', T.content, [])
    .returns(T.any)
    .external()
  const cv_with = define('with')
    .named('address', T.any, null)
    .named('contacts', T.any, null)
    .named('continue-header', T.any, null)
    .named('date', T.any, null)
    .named('font-type', T.any, null)
    .named('lastupdated', T.any, null)
    .named('name', T.any, null)
    .named('pagecount', T.any, null)
    .returns(T.any)
    .external(cv)
  return doc(
    importPackage('@preview/silver-dev-cv:1.0.2', [
      cv,
      section,
      descript,
      sectionsep,
      job,
      onelineTitleItem,
      project,
      education,
    ]),
    show(
      cv_with({
        fontType: 'PT Serif',
        continueHeader: 'false',
        name: 'Victor Vigon',
        address: 'Buenos Aires, Argentina',
        lastupdated: 'true',
        pagecount: 'true',
        date: '2024-07-03',
        contacts: [
          { text: 'LinkedIn', link: 'https://www.example.com' },
          { text: 'Github', link: 'https://www.github.com' },
          { text: 'victor.vigon@example.com', link: 'mailto:123@example.com' },
        ],
      }),
    ),
    inline(
      section(inline`About Me`),
      space,
      descript(inline`I'm a product-minded backend engineer with deep expertise in Fintech and operations and team
leadership. I excel in high-growth high-expectations environments and handle pre and post-product
market fit software products.`),
    ),
    inline(
      sectionsep,
      space,
      section('Experience'),
      space,
      job({
        position: 'Back End Developer',
        institution: inline`Nutbank`,
        location: 'Argentina',
        date: '2020-2024',
        description: blocks(
          m.list(
            { tight: false },
            m.item([
              'Led a team of four engineers to build a 0-1 product feature that helped users onboard on our application without needing to deposit funds. This involved working with payment railways, onboarding product testing, and owning the entire product pipeline.',
            ]),
            m.item([
              'Designed and developed a new microservices architecture that helped scale our backend services from a 100QPS / 1% failure rate service to a 1000QPS / 0.01% failure rate. This involved infrastructure work as well as hands-on internal libraries design.',
            ]),
            m.item([
              'Worked alongside the product team to improve the onboarding experience at the company, increasing our signup rate by 15% with a downstream impact of 1.5MM/yr revenue.',
            ]),
          ),
        ),
      }),
    ),
    inline(
      job({
        position: 'Back End Developer',
        institution: inline`Mercat Libre`,
        location: 'Argentina',
        date: '2018-2020',
        description: blocks(
          m.list(
            { tight: false },
            m.item([
              'Worked in the MercatPago area in a multidisciplinary team with UX Writers and designers, project and product management and technical leadership in an Agile team organization. Shipped features that impacted more than 1 Million DAU.',
            ]),
            m.item([
              'We developed product features for financial applications. Responsibilities include writing unit tests, testing applications, code reviewing, collaborating with product to refine features. The products and pipelines worked managed over 5 Million USD daily volume.',
            ]),
          ),
        ),
      }),
    ),
    inline(
      section('Skills'),
      space,
      onelineTitleItem({ title: 'Skills', content: inline`Golang, Python, Java, SQL, JavaScript, React, AWS` }),
    ),
    inline(
      sectionsep,
      space,
      section('Projects'),
      space,
      project({
        title: inline`MercadoCat.com`,
        date: inline`2019`,
        description: inline`Built an online platform to connect rescue shelters with pet-adopters. More than 100 pets adopted
through MercadoCat`,
      }),
    ),
    inline(
      sectionsep,
      space,
      section('Education'),
      space,
      education({
        institution: inline`University of Buenos Aires`,
        major: inline`Software Engineering`,
        date: '2015-2018',
        location: 'Argentina',
      }),
    ),
    set(document, { author: 'silver', title: 'Silver CV Template' }),
  )
}
