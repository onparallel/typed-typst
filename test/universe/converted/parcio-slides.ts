// Converted from test/universe/corpus/parcio-slides.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  blocks,
  cm,
  define,
  doc,
  em,
  external,
  figure,
  footnote,
  fr,
  grid,
  image,
  importPackage,
  inline,
  label,
  labelled,
  linebreak,
  link,
  lorem,
  m,
  math,
  path,
  pct,
  raw,
  ref,
  set,
  show,
  space,
  strong,
  text,
  unsafePath,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const parcioTheme = external('parcio-theme')
  const titleSlide = define('title-slide')
    .named('extra', T.content, [])
    .named('logo', T.any, null)
    .named('subtitle', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external()
  const ovguFinLogo = external('ovgu-fin-logo')
  const outlineSlide = define('outline-slide')
    .named('new-section', T.any, null)
    .named('show-title', T.any, null)
    .returns(T.any)
    .external()
  const slide = define('slide')
    .pos('arg1', T.content)
    .named('new-section', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external()
  const subpar = external('subpar')
  const parcioTable = define('parcio-table')
    .pos('arg1', T.any)
    .pos('arg2', T.content)
    .pos('arg3', T.content)
    .pos('arg4', T.content)
    .pos('arg5', T.content)
    .pos('arg6', T.content)
    .pos('arg7', T.content)
    .pos('arg8', T.content)
    .pos('arg9', T.content)
    .pos('arg10', T.content)
    .pos('arg11', T.content)
    .pos('arg12', T.content)
    .pos('arg13', T.content)
    .named('columns', T.any, null)
    .returns(T.any)
    .external()
  const todo = define('todo').pos('arg1', T.any).returns(T.any).external()
  const bibSlide = define('bib-slide').pos('arg1', T.any).returns(T.any).external()
  const subpar_grid = define('grid')
    .pos('arg1', T.any)
    .pos('arg2', T.any)
    .pos('arg3', T.any)
    .pos('arg4', T.any)
    .named('caption', T.any, null)
    .named('columns', T.any, null)
    .named('label', T.any, null)
    .returns(T.any)
    .external(subpar)
  return doc(
    m.lines(
      importPackage('@preview/parcio-slides:0.2.0', [
        parcioTheme,
        titleSlide,
        ovguFinLogo,
        outlineSlide,
        slide,
        subpar,
        parcioTable,
        todo,
        bibSlide,
      ]),
      show(parcioTheme),
    ),
    inline(
      titleSlide({
        title: 'Title',
        subtitle: 'Subtitle',
        logo: image({ width: cm(9.8) }, unsafePath(ovguFinLogo)),
        extra: blocks(
          m.lines(
            set(text, { size: em(0.825) }),
            inline`Faculty of Computer Science${linebreak()} Otto von Guericke University Magdeburg`,
          ),
        ),
      }),
    ),
    inline(outlineSlide({ showTitle: true, newSection: 'Introduction' })),
    inline(
      slide(
        { title: 'Template', newSection: 'Introduction' },
        blocks(
          m.list(
            m.item([
              'This presentation template is available at',
              space,
              link('https://github.com/xkevio/parcio-typst'),
              space,
              'and consists of Sections 1 to 4.',
            ]),
          ),
        ),
      ),
    ),
    inline(
      slide(
        { title: 'Figures' },
        blocks(
          m.lines(
            inline(
              subpar_grid(
                { caption: 'Test', columns: 2, label: label('fig1') },
                figure(
                  { caption: 'Left' },
                  inline(space, image({ alt: 'Blue OVGU logo', width: pct(75) }, unsafePath(ovguFinLogo)), space),
                ),
                label('fig1a'),
                figure(
                  { caption: 'Right' },
                  inline(space, image({ alt: 'Blue OVGU logo', width: pct(75) }, unsafePath(ovguFinLogo)), space),
                ),
                label('fig1b'),
              ),
              space,
              linebreak(),
            ),
            m.list(
              m.item([
                'You can refer to the subfigures (Figures',
                space,
                ref({ supplement: inline() }, label('fig1a')),
                space,
                'and',
                space,
                ref({ supplement: inline() }, label('fig1b')),
                ') or the figure (',
                ref(label('fig1')),
                ').',
              ]),
            ),
          ),
        ),
      ),
    ),
    inline(
      slide(
        { title: 'References', newSection: 'Background' },
        blocks(
          m.list(
            m.item([
              'You can comfortably reference literature',
              space,
              ref(label('DuweLMSF0B020')),
              space,
              footnote(inline`This is a footnote.`),
            ]),
          ),
        ),
      ),
    ),
    inline(
      slide(
        { title: 'Tables' },
        blocks(
          inline(
            labelled(
              figure(
                { caption: 'Caption' },
                parcioTable(
                  { columns: 3 },
                  4,
                  inline(strong(inline`Header 1`)),
                  inline(strong(inline`Header 2`)),
                  inline(strong(inline`Header 3`)),
                  inline`Row 1`,
                  inline`Row 1`,
                  inline`Row 1`,
                  inline`Row 2`,
                  inline`Row 2`,
                  inline`Row 2`,
                  inline`Row 3`,
                  inline`Row 3`,
                  inline`Row 3`,
                ),
              ),
              label('tbl'),
            ),
          ),
          m.list(m.item(['You can also refer to tables (', ref(label('tbl')), ')'])),
        ),
      ),
    ),
    inline(
      slide(
        { title: 'Math' },
        blocks(
          inline(
            unsafeRaw.math
              .block`(partial T) / (partial x)(0, t) = (partial T) / (partial x)(L, t) = 0\\ "where" forall t > 0 "with" L = "length".`,
          ),
          inline(linebreak()),
          inline(
            figure(
              { caption: 'Lots of fun math!', kind: math.equation },
              inline(
                space,
                unsafeRaw.math`&sum_(k = 0)^n pi dot k \\
    <=> &sum_(k = 1)^n pi dot k \\
    <=> &sum_(k = 2)^n (pi dot k) + pi`,
                space,
              ),
            ),
          ),
        ),
      ),
    ),
    inline(
      slide(
        { title: 'Listings', newSection: 'Evaluation' },
        blocks(
          inline(
            labelled(
              figure(
                { caption: 'Caption' },
                inline(
                  space,
                  raw(
                    { block: true, lang: 'c' },
                    'printf("Hello World\\n");\n\n// Comment\nfor (int i = 0; i < m; i++) {\n    for (int j = 0; j < n; j++) {\n        sum += \'a\';\n    }\n}',
                  ),
                  space,
                ),
              ),
              label('lst'),
            ),
          ),
          m.list(
            m.item([
              'You can also refer to listings (',
              ref(label('lst')),
              ') and use',
              space,
              raw('inline code'),
              '!',
            ]),
          ),
        ),
      ),
    ),
    inline(
      slide(
        { title: 'Columns' },
        inline(
          space,
          grid(
            { columns: [fr(1), fr(1)], columnGutter: em(1) },
            blocks(m.list(m.item(['Slides can be split into columns']))),
            inline(
              space,
              raw(
                { block: true, lang: 'c' },
                'printf("Hello World\\n");\n\n// Comment\nfor (int i = 0; i < m; i++) {\n    for (int j = 0; j < n; j++) {\n        sum += \'a\';\n    }\n}',
              ),
              space,
            ),
          ),
          space,
        ),
      ),
    ),
    inline(slide({ title: 'Todos', newSection: 'Conclusion' }, inline(space, todo('FIXME'), space, lorem(125), space))),
    inline(
      bibSlide(
        bibliography({ title: null, style: path('bibliography/apalike.csl') }, path('bibliography/presentation.bib')),
      ),
    ),
  )
}
