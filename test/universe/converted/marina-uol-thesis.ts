// Converted from test/universe/corpus/marina-uol-thesis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, blocks, define, doc, external, importPackage, inline, lorem, m, show, space } from '../../../src/index.ts'

export default () => {
  const thesis = external('thesis')
  const thesis_thesis = define('thesis')
    .named('date', T.any, null)
    .named('degree', T.any, null)
    .named('header-text', T.any, null)
    .named('name', T.any, null)
    .named('programme', T.any, null)
    .named('school', T.any, null)
    .named('studentid', T.any, null)
    .named('supervisor', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(thesis)
  const thesis_acknowledgements = define('acknowledgements').pos('arg1', T.content).returns(T.any).external(thesis)
  const thesis_abstract = define('abstract').pos('arg1', T.content).returns(T.any).external(thesis)
  const thesis_appendix = define('appendix').pos('arg1', T.content).returns(T.any).external(thesis)
  return doc(
    importPackage('@preview/marina-uol-thesis:1.0.0', thesis),
    show(
      thesis_thesis.with({
        title: 'Space Ranger or Martian? Cultural Differences Across Extraterrestrial Colonies',
        name: 'Juno Teo Minh',
        studentid: 'JUN20082024',
        degree: 'MSc',
        programme: 'Cultural Studies',
        school: 'School of Journalism',
        supervisor: 'Dr Winston S. Paceape',
        headerText: 'Masters Thesis',
        date: 2024,
      }),
    ),
    inline(thesis_acknowledgements(inline(space, lorem(200), space))),
    inline(thesis_abstract(inline(space, lorem(200), space))),
    m.lines(
      m.heading(1, 'Introduction'),
      inline(lorem(100)),
      m.heading(2, 'Aims'),
      inline(lorem(100)),
      m.heading(2, 'Background'),
      inline(lorem(100)),
    ),
    m.lines(m.heading(1, 'Lucheng Interstellar'), m.heading(2, 'Project Red Promise'), inline(lorem(100))),
    inline(
      thesis_appendix(
        blocks(
          m.lines(m.heading(1, 'Martian Colony Schematics'), inline(lorem(100))),
          m.lines(m.heading(1, 'Shipment Manifest'), inline(lorem(100))),
        ),
      ),
    ),
  )
}
