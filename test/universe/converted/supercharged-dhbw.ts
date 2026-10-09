// Converted from test/universe/corpus/supercharged-dhbw.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  auto,
  bibliography,
  cite,
  cm,
  datetime,
  define,
  doc,
  external,
  figure,
  fr,
  horizon,
  image,
  importFile,
  importPackage,
  inline,
  label,
  labelled,
  linebreak,
  lorem,
  m,
  pagebreak,
  path,
  pct,
  pt,
  raw,
  ref,
  show,
  space,
  strong,
  table,
  text,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const superchargedDhbw = external('supercharged-dhbw')
  const acr = define('acr').pos('arg1', T.any).returns(T.any).external()
  const acrlpl = define('acrlpl').pos('arg1', T.any).returns(T.any).external()
  const acrs = define('acrs').pos('arg1', T.any).returns(T.any).external()
  const gls = define('gls').pos('arg1', T.any).returns(T.any).external()
  const sourcecode = define('sourcecode').pos('arg1', T.content).returns(T.any).external()
  const acronyms = external('acronyms')
  const glossary = external('glossary')
  const superchargedDhbw_with = define('with')
    .named('acronyms', T.any, null)
    .named('at-university', T.any, null)
    .named('authors', T.any, null)
    .named('bibliography', T.any, null)
    .named('date', T.any, null)
    .named('glossary', T.any, null)
    .named('language', T.any, null)
    .named('supervisor', T.any, null)
    .named('title', T.any, null)
    .named('university', T.any, null)
    .named('university-location', T.any, null)
    .named('university-short', T.any, null)
    .returns(T.any)
    .external(superchargedDhbw)
  return doc(
    m.lines(
      importPackage('@preview/supercharged-dhbw:3.5.0', [superchargedDhbw, acr, acrlpl, acrs, gls, sourcecode]),
      importFile('acronyms.typ', [acronyms]),
      importFile('glossary.typ', [glossary]),
    ),
    show(
      superchargedDhbw_with({
        title: 'Exploration of Typst for the Composition of a University Thesis',
        authors: [
          {
            name: 'Max Mustermann',
            studentId: '7654321',
            course: 'TIS21',
            courseOfStudies: 'IT-Security',
            company: { name: 'YXZ GmbH', postCode: '70435', city: 'Stuttgart' },
          },
          {
            name: 'Juan Pérez',
            studentId: '1234567',
            course: 'TIM21',
            courseOfStudies: 'Mobile Computer Science',
            company: { name: 'ABC S.L.', postCode: '08005', city: 'Barcelona', country: 'Spain' },
          },
        ],
        acronyms: acronyms,
        atUniversity: false,
        bibliography: bibliography(path('sources.bib')),
        date: datetime.today(),
        glossary: glossary,
        language: 'en',
        supervisor: { company: 'John Appleseed' },
        university: 'Cooperative State University Baden-Württemberg',
        universityLocation: 'Ravensburg Campus Friedrichshafen',
        universityShort: 'DHBW',
      }),
    ),
    m.heading(1, 'Introduction'),
    inline(lorem(100)),
    inline(lorem(100)),
    inline(lorem(100)),
    m.heading(1, 'Examples'),
    inline(lorem(30)),
    m.heading(2, 'Acronyms'),
    inline`Use the ${raw('acr')} function to insert acronyms, which looks like this ${acr('HTTP')}.`,
    inline`${acrlpl('API')} are used to define the interaction between different software systems.`,
    inline`${acrs('REST')} is an architectural style for networked applications.`,
    m.heading(2, 'Glossary'),
    inline`Use the ${raw('gls')} function to insert glossary terms, which looks like this:`,
    inline`A ${gls('Vulnerability')} is a weakness in a system that can be exploited.`,
    m.heading(2, 'Lists'),
    'Create bullet lists or numbered lists.',
    m.list(m.item(['This']), m.item(['is a']), m.item(['bullet list'])),
    m.enum(m.item(['It also']), m.item(['works with']), m.item(['numbered lists!'])),
    m.heading(2, 'Figures and Tables'),
    'Create figures or tables like this:',
    m.heading(3, 'Figures'),
    inline(figure({ caption: 'Image Example' }, image({ width: cm(4) }, path('assets/ts.svg')))),
    m.heading(3, 'Tables'),
    inline(
      labelled(
        figure(
          { caption: 'Table Example' },
          table(
            { columns: [fr(1), pct(50), auto], inset: pt(10), align: horizon },
            table.header(inline(), inline(strong(inline`Area`)), inline(strong(inline`Parameters`))),
            text('cylinder.svg'),
            unsafeRaw.math.block`pi h (D^2 - d^2) / 4`,
            inline`${space}${unsafeRaw.math`h`}: height ${linebreak()} ${unsafeRaw.math`D`}: outer radius ${linebreak()}
${unsafeRaw.math`d`}: inner radius${space}`,
            text('tetrahedron.svg'),
            unsafeRaw.math.block`sqrt(2) / 12 a^3`,
            inline`${unsafeRaw.math`a`}: edge length`,
          ),
        ),
        label('table'),
      ),
    ),
    m.heading(2, 'Code Snippets'),
    'Insert code snippets like this:',
    inline(
      figure(
        { caption: 'Codeblock Example' },
        sourcecode(
          inline(
            raw(
              { block: true, lang: 'ts' },
              'const ReactComponent = () => {\n  return (\n    <div>\n      <h1>Hello World</h1>\n    </div>\n  );\n};\n\nexport default ReactComponent;',
            ),
          ),
        ),
      ),
    ),
    inline(pagebreak()),
    m.heading(2, 'References'),
    inline`Cite like this ${cite({ form: 'prose' }, label('iso18004'))}. Or like this ${ref(label('iso18004'))}.`,
    inline`You can also reference by adding ${raw('<ref>')} with the desired name after figures or headings.`,
    inline`For example this ${ref(label('table'))} references the table on the previous page.`,
    m.heading(1, 'Conclusion'),
    inline(lorem(100)),
    inline(lorem(120)),
    inline(lorem(80)),
  )
}
