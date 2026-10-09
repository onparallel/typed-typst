// Converted from test/universe/corpus/ijimai.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  cm,
  data,
  define,
  doc,
  em,
  external,
  figure,
  fr,
  horizon,
  image,
  importPackage,
  inline,
  label,
  labelled,
  linebreak,
  lorem,
  m,
  path,
  pct,
  pt,
  ref,
  show,
  space,
  spread,
  strong,
  table,
  toml,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const ijimai = external('ijimai')
  const readRaw = define('read-raw').pos('arg1', T.any).returns(T.any).external()
  const Eq = define('Eq').pos('arg1', T.content).returns(T.any).external()
  const noIndent = define('no-indent').pos('arg1', T.content).returns(T.any).external()
  const ijimai_with = define('with')
    .named('bibliography', T.any, null)
    .named('config', T.any, null)
    .named('read', T.any, null)
    .returns(T.any)
    .external(ijimai)
  return doc(
    m.lines(
      importPackage('@preview/ijimai:3.0.0', [ijimai, readRaw, Eq, noIndent]),
      show(
        ijimai_with({
          config: toml(path('paper.toml')),
          bibliography: 'bibliography.yaml',
          read: (path_2) => readRaw(path_2),
        }),
      ),
    ),
    m.lines(
      m.heading(1, 'Introduction'),
      inline`Typst is a new markup-based typesetting system for the sciences. It is designed to be an alternative
both to advanced tools like LaTeX and simpler tools like Word and Google Docs. Our goal with
Typst is to build a typesetting tool that is highly capable and a pleasure to use ${ref(label('Madje2022'))}
${ref(label('Haug2022'))}. An axes is shown in ${ref(label('axes'))}.`,
    ),
    inline(
      labelled(
        [
          figure(
            { caption: inline`Coordinate system used in the problem` },
            image({ width: pct(69) }, path('axes.svg')),
          ),
          space,
        ],
        label('axes'),
      ),
    ),
    m.lines(
      m.heading(2, 'Subsection title'),
      inline`${lorem(55)} ${Eq(inline(ref(label('field'))))} is a concise form for the Einstein field equations.`,
    ),
    inline(labelled([unsafeRaw.math.block`G_(mu nu) + Lambda g_(mu nu) = kappa T_(mu nu)`, space], label('field'))),
    m.lines(
      inline(noIndent(inline`where:`)),
      m.list(
        m.item([unsafeRaw.math`G_(mu nu)`, space, 'is the Einstein tensor, and']),
        m.item([unsafeRaw.math`T_(mu nu)`, space, 'is the stress–energy tensor.']),
      ),
    ),
    inline(
      labelled(
        [
          figure(
            { caption: inline`Timing Results` },
            table(
              { columns: [fr(1), em(9), cm(4)], inset: pt(3), align: horizon },
              table.header(spread(data([inline(), inline`Volume`, inline`Parameters`]).map(strong))),
              image({ width: cm(0.8) }, path('cylinder.svg')),
              unsafeRaw.math.block`pi h (D^2 - d^2) / 4`,
              inline`${space}${unsafeRaw.math`h`}: height ${linebreak()} ${unsafeRaw.math`D`}: outer radius ${linebreak()}
${unsafeRaw.math`d`}: inner radius${space}`,
              image({ width: cm(0.8) }, path('tetrahedron.svg')),
              unsafeRaw.math.block`sqrt(2) / 12 a^3`,
              inline`${unsafeRaw.math`a`}: edge length`,
            ),
          ),
          space,
        ],
        label('ppt'),
      ),
    ),
    m.heading(1, 'CRediT authorship contribution statement'),
    m.lines(
      m.heading(1, 'Data statement'),
      'State the availability of the data used in the research. If data is not available, provide the reason. Providing access to data increases transparency, encourages trust and facilitates reproducing results.',
    ),
    m.lines(
      m.heading(1, 'Declaration of conflicts of interest'),
      'A conflict of interest (COI) refers to situations where any authors’ circumstance could influence the content and conclusions of their article. Disclosing COI is crucial to maintain transparency and trust in academic publishing, allowing to assess potential biases and the integrity of the research. If there are no conflicts of interest to declare, authors should state “No conflict of interest exists” or “We have no conflict of interest to declare”.',
    ),
    m.lines(
      m.heading(1, 'Acknowledgment'),
      'In this section you can thank all those who have helped in undertaking the research work. We advise to express your gratitude in a concise way and to avoid strong emotive language.',
    ),
    'Funding: Regarding funding sources, it is compulsory to disclose any funding sources for the research and/or preparation of the article. Indicate the funding agency(ies) and the code(s) of the project(s) under which the research leading to the published work was carried out. If no funding has been provided for the research, include the following sentence: “This research did not receive funding”.',
  )
}
