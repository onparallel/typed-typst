// Converted from test/universe/corpus/muddy-mit-thesis.typ by scripts/convert-suite.ts — do not edit.
import {
  T,
  auto,
  bibliography,
  cm,
  define,
  doc,
  external,
  figure,
  heading,
  image,
  importPackage,
  includeFile,
  inline,
  lorem,
  luma,
  outline,
  path,
  pt,
  rect,
  show,
  space,
  table,
  where,
} from '../../../src/index.ts'

export default () => {
  const mitthesis = external('mitthesis')
  const startAppendix = define('start-appendix').returns(T.any).external()
  const tracked = external('tracked')
  const mitthesis_with = define('with')
    .named('abstract-body', T.any, null)
    .named('acceptors', T.any, null)
    .named('authors', T.any, null)
    .named('cc-license', T.any, null)
    .named('degree-month', T.any, null)
    .named('degree-year', T.any, null)
    .named('degrees', T.any, null)
    .named('institution', T.any, null)
    .named('readers', T.any, null)
    .named('supervisors', T.any, null)
    .named('thesis-date', T.any, null)
    .named('title', T.content, [])
    .returns(T.any)
    .external(mitthesis)
  return doc(
    importPackage('@preview/muddy-mit-thesis:0.2.0', [mitthesis, startAppendix, tracked]),
    show(
      mitthesis_with({
        title: inline`The Atomic Theory as Applied To Gases, with Some Experiments on the Viscosity of Air`,
        authors: [{ name: 'Silas W. Holman', department: 'Department of Physics', prevDegrees: [] }],
        degrees: [{ name: 'Bachelor of Science in Physics', department: 'Department of Physics' }],
        supervisors: [
          { name: 'Edward C. Pickering', title: 'Professor of Physics', department: 'Department of Physics' },
        ],
        readers: [
          {
            name: 'Marcus Gavius Apicius',
            title: 'Professor of Cooking Arts',
            department: 'Department of Food Science',
          },
          {
            name: 'Marie-Antoine Carême',
            title: 'Professor of Haute Cuisine',
            department: 'Department of Food Science',
          },
          { name: 'Miles Gloriosus', title: 'Professor of Personal Pronouns', department: 'Department of Rhetoric' },
        ],
        acceptors: [
          {
            name: 'Tertius Castor',
            department: 'Professor of Log Dams',
            title: 'Graduate Officer, Department of Research',
          },
        ],
        degreeMonth: 'June',
        degreeYear: '1876',
        thesisDate: 'May 18, 1876',
        institution: 'Massachusetts Institute of Technology',
        ccLicense: null,
        abstractBody: includeFile('abstract.typ'),
      }),
    ),
    includeFile('acknowledgments.typ'),
    includeFile('biography.typ'),
    inline(outline({ title: inline`Contents`, indent: pt(0) })),
    inline(
      heading({ level: 2, numbering: null }, inline`List of Figures`),
      space,
      outline({ title: null, target: where(figure, { kind: image }), indent: auto }),
    ),
    inline(
      heading({ level: 2, numbering: null }, inline`List of Tables`),
      space,
      outline({ title: null, target: where(figure, { kind: table }), indent: auto }),
    ),
    heading({ depth: 1 }, inline('Theoretical Background')),
    includeFile('chapter1.typ'),
    heading({ depth: 1 }, inline('Experimental Results')),
    heading({ depth: 2 }, inline('Apparatus and Methods')),
    inline(lorem(80)),
    heading({ depth: 3 }, inline('The Viscosity Apparatus')),
    inline(lorem(60)),
    heading({ depth: 3 }, inline('Calibration Procedure')),
    inline(lorem(50)),
    heading({ depth: 2 }, inline('Measurements and Analysis')),
    inline(lorem(70)),
    inline(
      figure(
        { caption: inline`Viscosity of air as a function of temperature.`, kind: image },
        rect({ width: cm(8), height: cm(5.5), fill: luma(210), stroke: pt(0.5) }),
      ),
    ),
    heading({ depth: 3 }, inline('Sources of Error')),
    inline(lorem(55)),
    heading({ depth: 2 }, inline('Discussion')),
    inline(lorem(65)),
    inline(startAppendix()),
    includeFile('appendixa.typ'),
    includeFile('appendixb.typ'),
    inline(bibliography({ style: 'ieee', title: inline`References` }, path('mitthesis-sample.bib'))),
  )
}
