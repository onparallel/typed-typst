// Converted from test/universe/corpus/tuwien-geo-masterthesis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  align,
  bibliography,
  cite,
  cm,
  counter,
  csv,
  define,
  doc,
  em,
  external,
  figure,
  heading,
  horizon,
  image,
  importFile,
  importPackage,
  inline,
  label,
  labelled,
  left,
  let_,
  link,
  m,
  math,
  outline,
  path,
  pct,
  raw,
  rect,
  ref,
  set,
  show,
  space,
  strong,
  table,
  text,
  unsafeRaw,
  where,
} from '../../../src/index.ts'

export default () => {
  const defaultInfo = external('default-info')
  const thesis = external('thesis')
  const makeTitlePage = define('make-title-page').pos('arg1', T.any).returns(T.any).external()
  const makeDeclaration = define('make-declaration').pos('arg1', T.any).returns(T.any).external()
  const makeAbstract = define('make-abstract')
    .named('de', T.content, [])
    .named('en', T.content, [])
    .returns(T.any)
    .external()
  const ctable = define('ctable')
    .pos('arg1', T.content)
    .pos('arg2', T.any)
    .pos('arg3', T.any)
    .pos('arg4', T.content)
    .pos('arg5', T.any)
    .named('cols', T.any, null)
    .named('header-rows', T.any, null)
    .returns(T.any)
    .external()
  const registerGlossary = define('register-glossary').pos('arg1', T.any).returns(T.any).external()
  const entryList = external('entry-list')
  const makeGlossary = external('make-glossary')
  const printGlossary = define('print-glossary').pos('arg1', T.any).returns(T.any).external()
  const thesis_with = define('with').named('info', T.any, null).returns(T.any).external(thesis)
  const [dataDecl, data_2] = let_('data', csv(path('data.csv')))
  return doc(
    m.lines(
      importPackage('@preview/tuwien-geo-masterthesis:0.1.0', [
        defaultInfo,
        thesis,
        makeTitlePage,
        makeDeclaration,
        makeAbstract,
      ]),
      importPackage('@preview/rubber-article:0.5.2', [ctable]),
      importFile('utils.typ', [registerGlossary, entryList, makeGlossary, printGlossary]),
    ),
    unsafeRaw.markup`#let info = (
  ..default-info,
  lang: "de", // "de" | "en"
  title: "Master Thesis Title",
  author: "Martina Müller",
  student-id: "01234567",
  faculty: "Fakultät für Mathematik und Geoinformation",
  supervisor: "Title Dr. Name Surname",
  co-supervisor: "Univ.-Ass. Dr. Name Surname",
  cooperation: "(in Zusammenarbeit mit XYZ)",
  eq-numbering: "(1)",

  // if you are affiliated with TU Wien insert the TU Wien and Department Logos
  // https://www.tuwien.at/mg/geo/downloads/logo
  logo-left: [], // image("path/to/tu-wien-logo.svg", height: 2.5cm),
  logo-right: [], // image("path/to/department-logo.svg", height: 2.5cm),

  // degree: "Master",             // "Diplomarbeit" | "Master" | "Bachelor"
  // thesis-type-label: "CUSTOM",  // override computed degree label
)`,
    m.lines(
      show(thesis_with({ info: unsafeRaw.code<any>`info` })),
      inline(registerGlossary(entryList), space, show(makeGlossary)),
    ),
    inline(makeTitlePage(unsafeRaw.code<any>`info`)),
    inline(makeDeclaration(unsafeRaw.code<any>`info`)),
    inline(
      makeAbstract({
        en: inline`Replace this with your English abstract.`,
        de: inline`Ersetzen Sie diesen Text durch Ihre deutsche Kurzfassung.`,
      }),
    ),
    inline(
      outline(),
      space,
      outline({ target: where(figure, { kind: image }), title: inline`List of Figures` }),
      space,
      outline({ target: where(figure, { kind: table }), title: inline`List of Tables` }),
    ),
    m.lines(
      m.heading(1, 'Introduction'),
      inline`Update your personal details and thesis info in the ${raw('info')} dictionary at the top of
this file. Each chapter can be placed in its own ${raw('.typ')} file and included via ${raw('#include "1_introduction.typ"')}.`,
    ),
    m.lines(
      m.heading(2, 'Examples'),
      m.heading(3, 'Citation'),
      inline`Citation in parenthesis ${ref(label('Doe2000'))} or ${cite({ form: 'prose' }, label('Doe2000'))}`,
    ),
    m.lines(
      m.heading(3, 'Abbreviation'),
      inline`At the first occurrence, ${ref(label('eop'))} is expanded; in subsequent instances, only the
abbreviation is displayed automatically: ${ref(label('eop'))}. All abbreviations must be defined
in the ${raw('entry-list')} in ${raw('utils.typ')}. Only those acronyms explicitly referenced
in the text will appear in the list of abbreviations.`,
    ),
    m.lines(
      m.heading(3, 'Table'),
      inline`Reference to ${ref(label('tab-example'))}. Tables are automatically positioned by Typst.`,
    ),
    m.lines(
      dataDecl,
      inline(
        labelled(
          figure(
            { caption: inline`Caption of the table.` },
            text(
              { size: em(0.85) },
              unsafeRaw.code<any>`ctable(
    cols: "|c|ccccccc|ccc|c|",
    header-rows: 2,
    [*Example 1*],
    table.cell(colspan: 7, align: left)[*Example 2*],
    table.cell(colspan: 3, align: left)[*Example 3*],
    [*Example 4*],
    ..data.flatten(),
  )`,
            ),
          ),
          label('tab-example'),
        ),
      ),
    ),
    m.lines(
      m.heading(3, 'Figure'),
      inline`${ref(label('fig-tu-logo'))} shows the TU Wien logo. Figures are automatically positioned by
Typst.`,
    ),
    inline(
      labelled(
        figure(
          { caption: inline`TU Wien logo.` },
          rect({ width: pct(40), height: cm(3) }, align(horizon, inline`Image of the TU Wien Logo`)),
        ),
        label('fig-tu-logo'),
      ),
    ),
    m.lines(
      m.heading(3, 'Mathematical formulas'),
      inline`Mathematical formulas may appear directly within a sentence, for example ${unsafeRaw.math`sum_(k=1)^(infinity) 1 / k^2 = pi/2`},
or they can be displayed separately from the surrounding text as ${unsafeRaw.math.block`sum_(k=1)^infinity 1/k^2 = pi / 2`}`,
    ),
    inline`Alternatively, the expression may be presented as a numbered equation: ${set(math.equation, { numbering: '(1)' })}
${labelled([unsafeRaw.math.block`sum_(k=1)^infinity 1/k^2 = pi / 6`, space], label('eq-basel'))}`,
    m.lines(m.heading(3, 'Hyperlink'), inline`Webpage of ${link('https://www.tuwien.at/', 'TU Wien')}`),
    m.heading(3, 'Bullet Lists'),
    m.list(m.item(['Foo']), m.item(['Bar']), m.item(['Baz'])),
    m.enum(m.item(['Foo']), m.item(['Bar']), m.item(['Baz'])),
    m.lines(m.heading(1, 'Literature review / Theoretical background'), 'State of the art.'),
    m.lines(m.heading(1, 'Methodology'), 'The methodology used.'),
    m.lines(m.heading(1, 'Results'), 'The results of the thesis.'),
    m.lines(m.heading(1, 'Discussion'), 'The discussion of the thesis.'),
    m.lines(m.heading(1, 'Conclusion and outlook'), 'Conclusion and outlook.'),
    inline(bibliography({ style: 'apa' }, path('refs.bib'))),
    inline`${heading({ numbering: null }, inline`AI usage`)} List all generative AI tools used, and specify
where, how and when they were applied.`,
    inline(heading({ numbering: null }, inline`Abbreviations`), space, printGlossary(entryList)),
    inline`${counter(heading).update(0)} ${heading({ numbering: 'A.i.' }, inline`Appendix`)} Additional
material.`,
  )
}
