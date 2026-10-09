// Converted from test/universe/corpus/sano-presentation-template.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  blocks,
  define,
  doc,
  em,
  external,
  grid,
  importPackage,
  inline,
  lorem,
  m,
  raw,
  show,
  smartquote,
  space,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const sano = external('sano')
  const configInfo = define('config-info')
    .named('author', T.content, [])
    .named('title', T.content, [])
    .returns(T.any)
    .external()
  const titleSlide = define('title-slide').pos('arg1', T.content).returns(T.any).external()
  const touyingReducer = external('touying-reducer')
  const sanoColors = external('sano-colors')
  const only = define('only').pos('arg1', T.any).pos('arg2', T.content).returns(T.any).external()
  const sano_with = define('with').pos('arg1', T.any).returns(T.any).external(sano)
  return doc(
    importPackage('@preview/sano-presentation-template:1.0.0', [
      sano,
      configInfo,
      titleSlide,
      touyingReducer,
      sanoColors,
      only,
    ]),
    show(
      sano_with(configInfo({ title: inline`Title for your awesome presentation in Typst`, author: inline`Your Name` })),
    ),
    inline(
      titleSlide(inline`${space}Write a small and descriptive description for your presentation. You can have more than
a sentence and it still looks awesome.${space}`),
    ),
    m.heading(1, 'Show your heading text for new sections in big and coloured format.'),
    m.heading(2, 'Grids to split your content'),
    inline(
      grid(
        { columns: 2, gutter: em(2) },
        blocks(
          m.list(
            m.item(['This slide type is ideal for comparing content.']),
            m.item(['For example, a column can contain an image or chart.']),
            m.item([
              'Thanks to Touying',
              smartquote({ double: false }),
              's package integration, we can, for example, reveal Fletcher diagrams piece by piece.',
            ]),
            m.item([
              'Just like in this graph, node',
              space,
              smartquote({ double: true }),
              'd',
              smartquote({ double: true }),
              space,
              'has now been revealed.',
            ]),
          ),
        ),
        inline(
          space,
          unsafeRaw.code<any>`{
    import "@preview/fletcher:0.5.7" as fletcher: node, edge
    let fletcher-diagram = touying-reducer.with(reduce: fletcher.diagram, cover: fletcher.hide)

    let nodes = ("a", "e", "f", "g")
    let coords = ((1, 0), (2, 1), (0, 2), (3, 2))
    let edges = (
      ("a", "e"),
      ("a", "f"),
      ("f", "e"),
      ("f", "g"),
      ("e", "g"),
    )

    fletcher-diagram({
      for (i, n) in nodes.enumerate() {
        node(coords.at(i), n, name: n, stroke: 0.5pt, shape: "circle")
      }
      for (from, to) in edges {
        edge(label(from), label(to), "-")
      }}, {
      node((1, 1), "d", name: "d", stroke: 0.5pt, shape: "circle" , fill: sano-colors.white)
      edge(label("a"), label("d"), "-")
      edge(label("d"), label("e"), "-")
    })
  }`,
          space,
        ),
      ),
    ),
    m.heading(2, 'Hello, template user'),
    inline`You can use ${raw('#only("num-")[...]')} to create slides that flows better.`,
    m.lines(
      m.list(m.item([lorem(20)])),
      inline(only('2-', blocks(m.list(m.item([lorem(20)])))), space, only('3-', blocks(m.list(m.item([lorem(20)]))))),
    ),
  )
}
