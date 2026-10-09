// Converted from test/universe/corpus/touying-simpres.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  blocks,
  call,
  cite,
  datetime,
  define,
  doc,
  emph,
  external,
  figure,
  heading,
  importPackage,
  inline,
  label,
  let_,
  m,
  parbreak,
  path,
  pt,
  raw,
  set,
  show,
  space,
  strong,
  sym,
  text,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const cetz = external('cetz')
  const configInfo = define('config-info')
    .named('author', T.content, [])
    .named('date', T.any, null)
    .named('institution', T.content, [])
    .named('subtitle', T.content, [])
    .named('title', T.content, [])
    .returns(T.any)
    .external()
  const touyingReducer = external('touying-reducer')
  const slide = define('slide')
    .pos('arg1', T.content)
    .named('footer', T.any, null)
    .named('show-level-one', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external()
  const touyingSimpres = external('touying-simpres')
  const titleSlide = define('title-slide').pos('arg1', T.content).returns(T.any).external()
  const outlineSlide = define('outline-slide').named('depth', T.any, null).returns(T.any).external()
  const focusSlide = define('focus-slide').pos('arg1', T.content).returns(T.any).external()
  const touyingSimpres_with = define('with')
    .pos('arg1', T.any)
    .named('aspect-ratio', T.any, null)
    .named('footer', T.content, [])
    .named('show-level-one', T.any, null)
    .returns(T.any)
    .external(touyingSimpres)
  const touyingReducer_with = define('with')
    .named('cover', T.any, null)
    .named('reduce', T.any, null)
    .returns(T.any)
    .external(touyingReducer)
  const cetz_canvas = external('canvas', cetz)
  const [cetzCanvasDecl, cetzCanvas] = let_(
    'cetz-canvas',
    touyingReducer_with({ reduce: cetz_canvas, cover: unsafeRaw.code<any>`cetz.draw.hide.with(bounds: true)` }),
  )
  return doc(
    m.lines(
      importPackage('@preview/touying:0.7.4', [configInfo, touyingReducer, slide]),
      importPackage('@preview/cetz:0.5.2', cetz),
      importPackage('@preview/touying-simpres:0.2.0', [
        touyingSimpres,
        configInfo,
        touyingReducer,
        titleSlide,
        outlineSlide,
        focusSlide,
        slide,
      ]),
    ),
    m.lines(show(raw, set(text, { size: pt(12) })), show(figure.caption, set(text, { size: pt(10) }))),
    show(
      touyingSimpres_with(
        { aspectRatio: '16-9', footer: inline(datetime.today().display('[year]-[month]-[day]')), showLevelOne: false },
        configInfo({
          title: inline`The "Simpres" slide template`,
          subtitle: inline`Presentation Template for Education and Business`,
          author: inline`thy0s`,
          date: datetime.today(),
          institution: inline`Funk Town State University`,
        }),
      ),
    ),
    cetzCanvasDecl,
    inline(titleSlide(inline())),
    inline(outlineSlide({ depth: 2 })),
    m.heading(1, 'Example Slides'),
    m.heading(2, 'Bullet Points'),
    m.list(
      { tight: false },
      m.item([
        'Networks are a collection of interconnected, autonomous computing devices',
        space,
        cite(label('tanenbaum-2021')),
      ]),
      m.item(
        [strong(inline`Also pay attention to this bold text!`)],
        m.list(m.item([emph(inline`This here is also important...`)])),
      ),
    ),
    m.lines(
      m.heading(2, 'A CeTZ Figure'),
      inline(
        figure(
          { caption: inline`Fully built RPL-DODAG ${cite(label('dodag-figure'))}` },
          call(
            cetzCanvas,
            unsafeRaw.code<any>`{
    import cetz.draw: *

    let darkgray = luma(20%)

    let objects = (
      (pos: (0, 0), name: "n0", fill: black, text: "0", textfill: white),
      (pos: (-3, -3), name: "n1", fill: none, text: "1", textfill: darkgray),
      (pos: (4, -3), name: "n2", fill: none, text: "1", textfill: darkgray),
      (pos: (1, -5), name: "n3", fill: none, text: "2", textfill: darkgray),
      (pos: (5, -8), name: "n4", fill: none, text: "2", textfill: darkgray),
      (pos: (-4.5, -7.5), name: "n5", fill: none, text: "2", textfill: darkgray),
      (pos: (1.5, -9), name: "n6", fill: none, text: "3", textfill: darkgray),
      (pos: (8, -11),  name: "n7", fill: none, text: "3", textfill: darkgray),
    )

    for obj in objects {
      circle(obj.pos, radius: (.75, .75), fill: obj.fill, name: obj.name)
        content(
          obj.pos, 
          text(size: 14pt, fill: obj.textfill)[#obj.text]
        )
    }

    let dag_edge = line.with(
      stroke: (paint: black, thickness: 3pt),
      mark: (end: "triangle", length: 0.2),
    )

    dag_edge("n2", "n0")
    dag_edge("n1", "n0")
    dag_edge("n3", "n1")
    dag_edge("n3", "n2")
    dag_edge("n5", "n1")
    dag_edge("n6", "n3")
    dag_edge("n6", "n4")
    dag_edge("n4", "n2")
    dag_edge("n7", "n4")
  }`,
          ),
        ),
      ),
    ),
    inline(focusSlide(inline`WATCH OUT`)),
    inline(
      slide(
        { footer: 'Override the default footer if necessary.', showLevelOne: true, title: 'Mixing it Up' },
        blocks(
          parbreak(),
          m.list(
            { tight: false },
            m.item(['Show the section heading for individual slides with', space, raw('show-level-one: true')]),
            m.item([
              strong(inline`Or`),
              space,
              'you can show it for all slides when configuring the theme',
              sym.dots.h,
            ]),
          ),
          inline(
            raw(
              { block: true, lang: 'typst' },
              '  #show: touying-simprpes.with(\n    aspect-ratio: "16-9",\n    lang: "en",\n    font: "Source Sans 3",\n    font-raw: "Source Code Pro"\n    text-size: 22pt,\n    text-size-raw: 11pt,\n    show-level-one: false,\n    footer: [#datetime.today().display("[year]-[month]-[day]")], \n    config-info(\n      title: [The "Simpres" slide template],\n      subtitle: [Presentation Template for Education and Business],\n      author: [Computer Science Department],\n      date: datetime.today(),\n      institution: [Funk Town State University],\n    ),\n  )\'',
            ),
          ),
        ),
      ),
    ),
    inline(
      heading({ outlined: true, depth: 1 }, inline`References`),
      space,
      slide(
        { showLevelOne: false, title: 'Literature and Figure', footer: '' },
        inline(bibliography({ title: null }, path('refs.yaml'))),
      ),
    ),
  )
}
