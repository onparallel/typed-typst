// Converted from test/universe/corpus/linked-cv.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  blocks,
  data,
  define,
  doc,
  em,
  external,
  image,
  importPackage,
  inline,
  left,
  lorem,
  m,
  par,
  path,
  pct,
  pt,
  right,
  set,
  show,
  spread,
  table,
  text,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const linkedCv = external('linked-cv')
  const colours = external('colours')
  const typography = external('typography')
  const components = external('components')
  const frame = external('frame')
  const linkedCv_with = define('with')
    .named('accent-colour', T.any, null)
    .named('firstname', T.any, null)
    .named('fonts', T.any, null)
    .named('lastname', T.any, null)
    .named('socials', T.any, null)
    .returns(T.any)
    .external(linkedCv)
  const colours_accent = external('accent', colours)
  const typography_summary = define('summary').pos('arg1', T.any).returns(T.any).external(typography)
  const components_section = define('section').pos('arg1', T.any).returns(T.any).external(components)
  const components_employerInfo = define('employer-info')
    .pos('arg1', T.any)
    .named('duration', T.any, null)
    .named('name', T.any, null)
    .returns(T.any)
    .external(components)
  const frame_connectedFrames = define('connected-frames')
    .pos('arg1', T.any)
    .pos('arg2', T.any)
    .pos('arg3', T.any)
    .returns(T.any)
    .external(frame)
  const components_workstream = define('workstream')
    .named('tech-stack', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(components)
  const typography_tableHeader = external('table-header', typography)
  return doc(
    importPackage('@preview/linked-cv:0.1.0', [linkedCv, colours, typography, components, frame]),
    show(
      linkedCv_with({
        firstname: 'Your',
        lastname: 'Name',
        socials: {
          email: 'hello@example.com',
          mobile: '01234 567890',
          github: 'your-github-username',
          linkedin: 'your-linkedin-username',
        },
        accentColour: colours_accent,
        fonts: { headings: 'Roboto', body: 'Source Sans Pro' },
      }),
    ),
    m.lines(set(text, { size: pt(8), hyphenate: false }), set(par, { justify: true, leading: em(0.52) })),
    inline(typography_summary(lorem(35))),
    inline(components_section('Experience')),
    inline(
      components_employerInfo({ name: 'OpenAI', duration: ['01-2023', 'current'] }, image(path('img/squircle.svg'))),
    ),
    inline(
      frame_connectedFrames(
        'company-id',
        {
          title: 'Lead Software Engineer',
          duration: ['01-2023', 'current'],
          body: blocks(
            m.lines(
              inline(
                components_workstream({
                  title: 'Project Name',
                  techStack: ['python', 'typescript', 'react', 'postgresql'],
                }),
              ),
              m.list(m.item([lorem(15)]), m.item([lorem(35)]), m.item([lorem(25)])),
            ),
          ),
        },
        {
          title: 'Software Engineer',
          duration: ['01-2023', 'current'],
          body: blocks(
            m.lines(
              inline(
                components_workstream({
                  title: 'Project Name',
                  techStack: ['python', 'typescript', 'react', 'postgresql'],
                }),
              ),
              m.list(m.item([lorem(40)]), m.item([lorem(20)]), m.item([lorem(30)])),
            ),
          ),
        },
      ),
    ),
    inline(components_section('Qualifications')),
    inline(
      table(
        { columns: [pct(30), pct(15), pct(15), pct(40)], align: [left, left, left, right], stroke: null },
        spread(data(['Qualification', 'Grade', 'Date', 'Institution']).map(typography_tableHeader)),
        table.hline({ stroke: unsafeRaw.code<any>`0.5pt + colours.gray.lighten(60%)` }),
        spread(unsafeRaw.code<any>`(for item in (
    ("Mathematics", "1st", "—", "University of Exeter"),
    ("Machine Learning", "—", "09-2023", "Microsoft Azure"),
    ("Artificial Intelligence", "98%", "02-2025", "OpenAI"),
  ) {
    components.qualification(..item)
  })`),
      ),
    ),
  )
}
