// Converted from test/universe/corpus/moin-uni-slides.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  align,
  blocks,
  datetime,
  define,
  doc,
  emoji,
  external,
  figure,
  horizon,
  importPackage,
  inline,
  m,
  outline,
  pt,
  set,
  show,
  space,
  text,
} from '../../../src/index.ts'

export default () => {
  const slide = define('slide').pos('arg1', T.content).returns(T.any).external()
  const toolbox = external('toolbox')
  const theme = external('theme')
  const important = define('important').pos('arg1', T.content).returns(T.any).external()
  const theme_with = define('with')
    .named('author', T.any, null)
    .named('date', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(theme)
  const toolbox_sideBySide = define('side-by-side')
    .pos('arg1', T.content)
    .pos('arg2', T.content)
    .returns(T.any)
    .external(toolbox)
  return doc(
    m.lines(
      importPackage('@preview/polylux:0.4.0', [slide, toolbox]),
      importPackage('@preview/moin-uni-slides:0.1.0', [theme, slide, important, toolbox]),
    ),
    show(theme_with({ title: 'Titel der Präsentation', author: 'Vorname Nachname', date: datetime.today() })),
    inline(
      slide(
        blocks(
          m.lines(
            set(align, { alignment: horizon }),
            inline(text({ size: pt(48), weight: 'bold' }, 'Titel der Präsentation')),
          ),
          inline(text({ size: pt(24) }, 'Untertitel der Präsentation')),
        ),
      ),
    ),
    inline(slide(inline(space, outline({ depth: 1, title: 'Agenda' }), space))),
    inline(
      slide(
        blocks(
          m.lines(
            m.heading(1, 'Überschrift'),
            'Fließtext. Wahrscheinlich sitzen Sie gerade in einer Präsentation und lesen sich diesen Text hier durch. Dabei stellen Sie langsam aber sicher fest, dass dies eigentlich nur ein Blindtext ist und mit Ihrem Produkt überhaupt nichts zu tun hat. Sie fühlen sich ertappt, lesen aber trotzdem unauffällig weiter.',
          ),
          inline(important(inline`Eine farbige Hervorhebung`)),
        ),
      ),
    ),
    inline(
      slide(
        inline(
          space,
          toolbox_sideBySide(
            blocks(
              m.lines(
                m.heading(2, 'Überschrift und Bild'),
                'Fließtext. Wahrscheinlich sitzen Sie gerade in einer Präsentation und lesen sich diesen Text hier durch. Dabei stellen Sie langsam aber sicher fest, dass dies eigentlich nur ein Blindtext ist.',
              ),
              m.lines(
                m.heading(3, 'Eine Zwischenüberschrift'),
                'Wie Sie wissen, hat ein Blindtext eigentlich nur zwei Funktionen.',
              ),
            ),
            inline(space, figure({ caption: inline`Ein Bild mit einem Untertitel` }, emoji.camera), space),
          ),
          space,
        ),
      ),
    ),
  )
}
