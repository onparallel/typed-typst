// Converted from test/universe/corpus/tum-tastic-thesis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  align,
  bibliography,
  blocks,
  doc,
  external,
  heading,
  importFile,
  inline,
  m,
  page,
  pagebreak,
  path,
  right,
  set,
  space,
  text,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const theory = external('theory')
  const introduction = external('introduction')
  const package_2 = external('package')
  const introduction_content = external('content', introduction)
  const theory_content = external('content', theory)
  return doc(
    importFile('packages.typ', [package_2]),
    m.lines(
      unsafeRaw.markup`#import package("abbr") as abbr`,
      unsafeRaw.markup`#import package("tum-tastic-thesis"): dissertation, thesis`,
    ),
    m.lines(unsafeRaw.markup`#show: abbr.show-rule`, inline(unsafeRaw.code<any>`abbr.load("abbreviations.csv")`)),
    m.lines(importFile('theory.typ', theory), importFile('introduction.typ', introduction)),
    unsafeRaw.markup`#show: dissertation.with(
  author-info: (
    name: "Your Name Here",
    group-name: "Your Group Or Chair Here",
    school-name: "Your School Here",
  ),
  title: [Your Title Here],
  subtitle: none,
  degree-name: "Dr. In Something",
  committee-info: (
    chair: "Prof. Chair Here",
    first-evaluator: "Prof. First Evaluator Here",
    second-evaluator: "Prof. Second Evaluator Here",
  ),
  date-submitted: datetime(
    year: 2020,
    month: 10,
    day: 4,
  ),
  date-accepted: datetime(
    year: 2021,
    month: 10,
    day: 4,
  ),
  acknowledgements: [#lorem(100)],
  abstract: [#lorem(100)],
)`,
    inline(introduction_content),
    inline(pagebreak(), space, theory_content),
    set(heading, { numbering: null }),
    set(page, { header: blocks(m.lines(set(text, { style: 'italic' }), inline(align(right, inline`Bibliography`)))) }),
    inline(pagebreak(), space, bibliography(path('bibliography.bib'))),
    set(page, { header: blocks(m.lines(set(text, { style: 'italic' }), inline(align(right, inline`Abbreviations`)))) }),
    inline(pagebreak(), space, unsafeRaw.code<any>`abbr.list()`),
  )
}
