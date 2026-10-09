// Converted from test/universe/corpus/minimal-presentation.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  blocks,
  blue,
  cm,
  define,
  doc,
  external,
  figure,
  image,
  importPackage,
  inline,
  label,
  labelled,
  lorem,
  m,
  path,
  pct,
  ref,
  rgb,
  show,
  space,
} from '../../../src/index.ts'

export default () => {
  const project = external('project')
  const columnsContent = define('columns-content')
    .pos('arg1', T.content)
    .pos('arg2', T.content)
    .returns(T.any)
    .external()
  const setMainColor = define('set-main-color').pos('arg1', T.any).returns(T.any).external()
  const project_with = define('with')
    .named('author', T.any, null)
    .named('cover', T.any, null)
    .named('date', T.any, null)
    .named('index-title', T.any, null)
    .named('lang', T.any, null)
    .named('logo', T.any, null)
    .named('logo-light', T.any, null)
    .named('main-color', T.any, null)
    .named('sub-title', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(project)
  return doc(
    importPackage('@preview/minimal-presentation:0.7.0', [project, columnsContent, setMainColor]),
    show(
      project_with({
        title: 'Minimalist presentation template',
        subTitle: 'This is where your presentation begins',
        author: 'Flavio Barisi',
        date: '10/08/2023',
        indexTitle: 'Contents',
        logo: image(path('./logo.svg')),
        logoLight: image(path('./logo_light.svg')),
        cover: image(path('./image_1.jpg')),
        mainColor: rgb('#E30512'),
        lang: 'it',
      }),
    ),
    m.heading(1, 'This is a section'),
    m.heading(2, 'This is a slide title'),
    inline(lorem(10)),
    m.list(
      m.item(
        m.lines(
          inline(lorem(10)),
          m.list(
            m.item([lorem(10)]),
            m.item([lorem(10)]),
            m.item([lorem(10), space, ref(label('harry')), space, ref(label('electronic')), '.']),
          ),
        ),
      ),
    ),
    m.heading(2, 'One column image'),
    inline(
      labelled(
        [figure({ caption: inline`An image` }, image({ height: cm(10.5) }, path('image_1.jpg'))), space],
        label('image_label'),
      ),
    ),
    m.heading(2, 'Two columns image'),
    inline(
      columnsContent(
        inline(
          space,
          labelled(
            [figure({ caption: inline`An image` }, image({ width: pct(100) }, path('image_1.jpg'))), space],
            label('image_label_1'),
          ),
          space,
        ),
        inline(
          space,
          labelled(
            [figure({ caption: inline`An image` }, image({ width: pct(100) }, path('image_1.jpg'))), space],
            label('image_label_2'),
          ),
          space,
        ),
      ),
    ),
    m.heading(2, 'Two columns'),
    inline(
      columnsContent(
        blocks(m.list(m.item([lorem(10)]), m.item([lorem(10)]), m.item([lorem(10)]))),
        inline(
          space,
          labelled(
            [figure({ caption: inline`An image` }, image({ width: pct(100) }, path('image_1.jpg'))), space],
            label('image_label_3'),
          ),
          space,
        ),
      ),
    ),
    m.heading(1, 'This is a section'),
    m.heading(2, 'This is a slide title'),
    inline(lorem(10)),
    m.heading(1, 'This is a section'),
    m.heading(2, 'This is a slide title'),
    inline(lorem(10)),
    m.heading(1, 'This is a section'),
    m.heading(2, 'This is a slide title'),
    inline(lorem(10)),
    m.heading(1, 'This is a very v v v v v v v v v v v v v v v v v v v v long section'),
    m.heading(2, 'This is a very v v v v v v v v v v v v v v v v v v v v long slide title'),
    m.heading(1, 'Subtitle test'),
    m.heading(2, 'Slide title'),
    inline(lorem(50)),
    m.heading(3, 'Slide subtitle 1'),
    inline(lorem(50)),
    m.heading(3, 'Slide subtitle 2'),
    inline(lorem(50)),
    m.heading(2, 'Slide title 2'),
    inline(lorem(50)),
    m.heading(3, 'Slide subtitle 3'),
    inline(lorem(50)),
    m.heading(3, 'Slide subtitle 4'),
    inline(lorem(50)),
    inline(setMainColor(blue)),
    m.heading(1, 'You can change color'),
    m.heading(2, 'Slide title'),
    inline(lorem(50)),
    inline(bibliography(path('bibliography.yaml'))),
  )
}
