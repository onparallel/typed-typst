// Converted from test/universe/corpus/slydst.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  block,
  define,
  doc,
  em,
  external,
  importPackage,
  inline,
  lorem,
  m,
  orange,
  outline,
  pct,
  raw,
  set,
  show,
  silver,
  space,
  strong,
  sym,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const slides = external('slides')
  const definition = define('definition').pos('arg1', T.content).named('title', T.any, null).returns(T.any).external()
  const theorem = define('theorem')
    .pos('arg1', T.content)
    .named('fill-header', T.any, null)
    .named('radius', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external()
  const lemma = define('lemma').pos('arg1', T.content).named('title', T.any, null).returns(T.any).external()
  const corollary = define('corollary').pos('arg1', T.content).named('title', T.any, null).returns(T.any).external()
  const slides_with = define('with')
    .named('authors', T.any, null)
    .named('subslide-numbering', T.any, null)
    .named('subtitle', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(slides)
  return doc(
    importPackage('@preview/slydst:0.1.5', [slides, definition, theorem, lemma, corollary]),
    show(
      slides_with({
        title: 'Slydst: Slides in Typst',
        subtitle: 'A Simple Package',
        authors: 'Gaspard Lambrechts',
        subslideNumbering: '(i)',
      }),
    ),
    show(raw, set(block, { fill: silver.lighten(pct(65)), width: pct(100), inset: em(1) })),
    m.heading(2, 'Outline'),
    inline(outline()),
    m.heading(1, 'Usage'),
    m.heading(2, 'Setup'),
    'To start, just use the following preamble.',
    inline(
      raw(
        { block: true, lang: 'typst' },
        '#import "@preview/slydst:0.1.5": *\n\n#show: slides.with(\n  title: "Insert your title here", // Required\n  subtitle: none,\n  date: none,\n  authors: (),\n  layout: "medium",\n  ratio: 4/3,\n  title-color: none,\n  subslide-numbering: none,\n)\n\nInsert your content here.',
      ),
    ),
    m.heading(2, 'Content'),
    m.list(
      m.item([strong(inline`Level-one headings`), space, 'corresponds to new sections.']),
      m.item([strong(inline`Level-two headings`), space, 'corresponds to new slides.']),
      m.item([
        'Blank space can be filled with',
        space,
        strong(inline`vertical spaces`),
        space,
        'like',
        space,
        raw('#v(1fr)'),
        '.',
      ]),
    ),
    inline(
      raw(
        { block: true, lang: 'typst' },
        '== Outline\n\n#outline()\n\n= First section\n\n== First slide\n\n#figure(image("figure.png", width: 60%), caption: "Caption")\n\n#v(1fr)\n\n#lorem(20)',
      ),
    ),
    inline`...and longer slides can be automatically numbered.`,
    m.heading(3, 'Subsubtitles'),
    'Note that level-three headings do not break pages.',
    m.heading(1, 'Components'),
    m.heading(2, 'Definitions, theorems and others'),
    inline(definition({ title: 'An interesting definition' }, inline(space, lorem(10), space))),
    inline(
      theorem(
        { title: 'An interesting theorem', fillHeader: orange.lighten(pct(65)), radius: em(0.2) },
        inline`${space}Let ${unsafeRaw.math`p(x, y)`} a probability distribution, we have, ${unsafeRaw.math.block`p(x, y) &= p(x) p(y | x).`}${space}`,
      ),
    ),
    inline(lemma({ title: 'An interesting lemma' }, inline(space, lorem(20), space))),
    inline(corollary({ title: 'An interesting corollary' }, inline(space, lorem(30), space))),
    m.heading(1, 'Summary'),
    m.heading(2, 'Summary'),
    m.list(
      m.item(['Slydst provides simple static slides.']),
      m.item(['Slides are named according to the headings.']),
      m.item(['Some more components are available.']),
    ),
  )
}
