// Converted from test/universe/corpus/upb-corporate-design-slides.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  blocks,
  datetime,
  define,
  doc,
  em,
  external,
  grid,
  importPackage,
  inline,
  linebreak,
  lorem,
  m,
  parbreak,
  show,
  smartquote,
  space,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const upbTheme = external('upb-theme')
  const configInfo = define('config-info')
    .named('author', T.content, [])
    .named('date', T.any, null)
    .named('lang', T.any, null)
    .named('subtitle', T.content, [])
    .named('title', T.content, [])
    .named('title-short', T.content, [])
    .returns(T.any)
    .external()
  const titleSlide = define('title-slide').pos('arg1', T.content).returns(T.any).external()
  const only = define('only').pos('arg1', T.any).pos('arg2', T.content).returns(T.any).external()
  const touyingReducer = external('touying-reducer')
  const pause = external('pause')
  const upbColors = external('upb-colors')
  const components = external('components')
  const upbTheme_with = define('with').pos('arg1', T.any).named('footer', T.any, null).returns(T.any).external(upbTheme)
  return doc(
    importPackage('@preview/upb-corporate-design-slides:0.1.3', [
      upbTheme,
      configInfo,
      titleSlide,
      only,
      touyingReducer,
      pause,
      upbColors,
      components,
    ]),
    show(
      upbTheme_with(
        {
          footer: unsafeRaw.code<any>`self => self.info.title-short + [ $dot$ ] + self.info.author + [ $dot$ ] + self.info.date.display("[day].[month].[year]")`,
        },
        configInfo({
          title: inline`Touying Theme ${linebreak()} im Corporate Design der UPB`,
          titleShort: inline`Titel der Präsentation`,
          subtitle: inline`Subtitle`,
          author: inline`Authors`,
          date: datetime.today(),
          lang: 'de',
        }),
      ),
    ),
    inline(titleSlide(inline(space, lorem(40), space))),
    m.heading(1, 'Trennseite mit Nummerierung oben rechts, sollte ausschließlich für Hauptkapitel verwendet werden.'),
    m.heading(2, 'Überschrift für eine Inhaltsfolie', ' ', linebreak(), ' ', 'maximal zwei Zeilen'),
    inline(lorem(25)),
    m.list(m.item(['Tabellen']), m.item(['Diagramme']), m.item(['SmartArts']), m.item(['Videos & Grafiken'])),
    inline(lorem(20)),
    m.heading(2, 'Folie mit zwei Spalten'),
    inline(
      grid(
        { columns: 2, gutter: em(2) },
        blocks(
          parbreak(),
          m.heading(3, 'Beschreibung'),
          m.lines(
            m.list(
              m.item(['Dieser Folientyp ist ideal für die Gegenüberstellung von Inhalten.']),
              m.item(['Beispielsweise kann eine Spalte ein Bild oder Diagramm enthalten.']),
              m.item([
                'Dank Touying',
                smartquote({ double: false }),
                's Package Integration können wir beispielsweise Fletcher-Diagramme Stück für Stück aufdecken.',
              ]),
            ),
            inline(
              only(
                '2-',
                blocks(
                  m.list(
                    m.item([
                      'So wie in diesem Graphen nun Knoten',
                      space,
                      smartquote({ double: true }),
                      'd',
                      smartquote({ double: true }),
                      space,
                      'aufgedeckt wurde.',
                    ]),
                  ),
                ),
              ),
            ),
          ),
          parbreak(),
        ),
        blocks(
          parbreak(),
          m.heading(3, 'Fletcher-Diagramm'),
          inline(unsafeRaw.code<any>`{
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
    }}, pause, {
    node((1, 1), "d", name: "d", stroke: 0.5pt, shape: "circle" , fill: upb-colors.himmelblau-40)
    edge(label("a"), label("d"), "-")
    edge(label("d"), label("e"), "-")
  })
}`),
          parbreak(),
        ),
      ),
    ),
    m.lines(
      m.heading(2, 'Verfügbare Farben'),
      inline(unsafeRaw.code<any>`{
  import table: cell

  let cells = ()
  for (name, color) in upb-colors {
    cells.push(cell(
      fill: color,
      text(fill: if color.components().sum() > 280% {black} else {white}, name)
    ))
  }

  block(
    width: 92%,
    height: 82%,
    table(
      columns: (1fr, 1fr, 1fr, 1fr, 1fr,),
      rows: (1fr, 1fr, 1fr, 1fr, 1fr, 1fr, 1fr,),
      align: center+horizon,
      ..cells,
    )
  )
}`),
    ),
  )
}
