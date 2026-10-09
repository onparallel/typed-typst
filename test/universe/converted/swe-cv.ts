// Converted from test/universe/corpus/swe-cv.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  align,
  block,
  center,
  cm,
  define,
  doc,
  em,
  external,
  fr,
  grid,
  importPackage,
  inline,
  left,
  let_,
  linebreak,
  link,
  m,
  page,
  path,
  pt,
  right,
  set,
  space,
  text,
  unsafeRaw,
  yaml,
} from '../../../src/index.ts'

export default () => {
  const section = define('section').pos('arg1', T.content).returns(T.any).external()
  const expHeader = external('exp-header')
  const projectHeader = external('project-header')
  const [configurationDecl, configuration] = let_('configuration', yaml(path('configuration.yaml')))
  return doc(
    m.lines(
      configurationDecl,
      importPackage('@preview/swe-cv:1.0.0', [section, expHeader, projectHeader]),
      set(page, { margin: { left: cm(1.5), right: cm(1.5), top: cm(2), bottom: cm(2) } }),
      set(text, { size: pt(9) }),
    ),
    inline(
      grid(
        { columns: [fr(1), fr(1), fr(1)] },
        align(
          left,
          inline(
            space,
            link(unsafeRaw.code<any>`configuration.header.email`),
            space,
            linebreak(),
            space,
            unsafeRaw.code<any>`configuration.header.phone`,
            space,
            linebreak(),
            space,
          ),
        ),
        align(
          center,
          inline(
            space,
            text({ weight: 'semibold', size: em(2) }, inline(unsafeRaw.code<any>`configuration.header.name`)),
            space,
            linebreak(),
            space,
            link(
              unsafeRaw.code<any>`configuration.header.website`,
              inline(unsafeRaw.code<any>`configuration.header.websiteDisplayName`),
            ),
            space,
          ),
        ),
        align(
          right,
          inline(
            space,
            unsafeRaw.code<any>`configuration.header.github`,
            space,
            linebreak(),
            space,
            unsafeRaw.code<any>`configuration.header.linkedin`,
            space,
            linebreak(),
            space,
          ),
        ),
      ),
    ),
    inline(
      section(inline`Education`),
      space,
      unsafeRaw.code<any>`for ed in configuration.education [
  #exp-header((left: ed.location, center: ed.name, right: ed.date))
  - #ed.degree
]`,
    ),
    inline(block({ below: em(1) })),
    inline(
      section(inline`Employment`),
      space,
      unsafeRaw.code<any>`for exp in configuration.employment [
  #exp-header((left: exp.location, center: exp.company, right: exp.date))
  #for responsibility in exp.responsibilities [
    - #responsibility
  ]
]`,
    ),
    inline(block({ below: em(1) })),
    inline(
      section(inline`Projects`),
      space,
      unsafeRaw.code<any>`for project in configuration.projects [
  #project-header((title: project.title, website: project.website))
  #for contribution in project.contributions [
    - #contribution
  ]
]`,
    ),
    inline(block({ below: em(1) })),
    m.lines(
      inline(section(inline`Technical Skills`)),
      m.list(
        m.item([
          'Languages:',
          space,
          unsafeRaw.code<any>`for skill in configuration.skills.languages [
  #skill,
]`,
        ]),
        m.item([
          'Frameworks and libraries:',
          space,
          unsafeRaw.code<any>`for skill in configuration.skills.frameworks [
  #skill,
]`,
        ]),
        m.item([
          'Tools:',
          space,
          unsafeRaw.code<any>`for skill in configuration.skills.tools [
  #skill,
]`,
        ]),
      ),
    ),
  )
}
