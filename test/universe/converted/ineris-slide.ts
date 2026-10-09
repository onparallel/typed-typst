// Converted from test/universe/corpus/ineris-slide.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  blocks,
  datetime,
  define,
  doc,
  external,
  importPackage,
  inline,
  lorem,
  m,
  page,
  set,
  show,
  table,
} from '../../../src/index.ts'

export default () => {
  const configInfo = define('config-info')
    .named('author', T.content, [])
    .named('date', T.any, null)
    .named('subtitle', T.content, [])
    .named('title', T.content, [])
    .returns(T.any)
    .external()
  const slide = define('slide').pos('arg1', T.content).named('title', T.content, []).returns(T.any).external()
  const inerisSlideshow = external('ineris-slideshow')
  const titleSlide = define('title-slide').returns(T.any).external()
  const outlineSlide = define('outline-slide').returns(T.any).external()
  const styledTable = define('styled-table')
    .pos('arg1', T.any)
    .pos('arg2', T.content)
    .pos('arg3', T.content)
    .pos('arg4', T.content)
    .pos('arg5', T.content)
    .pos('arg6', T.content)
    .pos('arg7', T.content)
    .pos('arg8', T.content)
    .pos('arg9', T.content)
    .named('columns', T.any, null)
    .returns(T.any)
    .external()
  const focusBlock = define('focus-block').pos('arg1', T.any).pos('arg2', T.content).returns(T.any).external()
  const shadowBlock = define('shadow-block').pos('arg1', T.content).returns(T.any).external()
  const matrixSlide = define('matrix-slide')
    .pos('arg1', T.content)
    .pos('arg2', T.content)
    .pos('arg3', T.content)
    .pos('arg4', T.content)
    .named('columns', T.any, null)
    .named('rows', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external()
  const focusSlide = define('focus-slide').pos('arg1', T.content).returns(T.any).external()
  const inerisSlideshow_with = define('with')
    .pos('arg1', T.any)
    .named('aspect-ratio', T.any, null)
    .returns(T.any)
    .external(inerisSlideshow)
  return doc(
    m.lines(
      importPackage('@preview/touying:0.6.1', [configInfo, slide]),
      importPackage('@preview/ineris-slide:0.1.0', [
        inerisSlideshow,
        configInfo,
        titleSlide,
        outlineSlide,
        slide,
        styledTable,
        focusBlock,
        shadowBlock,
        matrixSlide,
        focusSlide,
      ]),
    ),
    show(
      inerisSlideshow_with(
        { aspectRatio: '16-9' },
        configInfo({
          title: inline`Objet du document`,
          subtitle: inline`Sous-titre`,
          author: inline`FH`,
          date: datetime.today(),
        }),
      ),
    ),
    inline(titleSlide()),
    inline(outlineSlide()),
    m.heading(1, 'Titre de la partie'),
    inline(
      slide(
        { title: inline`Lorem ipsum dolor sit amet` },
        blocks(m.lines(set(page, { columns: 3 }), inline(lorem(80)))),
      ),
    ),
    m.lines(
      m.heading(2, 'Nouvelle diapositive'),
      'Texte racine',
      m.list(
        m.item(
          m.lines(
            'Texte de niveau 1',
            m.list(
              m.item(
                m.lines(
                  'Texte de niveau 2',
                  m.list(m.item(m.lines('Texte de niveau 3', m.list(m.item(['Texte de niveau 4']))))),
                ),
              ),
            ),
          ),
        ),
      ),
    ),
    m.heading(1, 'Blocs spéciaux'),
    m.lines(
      m.heading(2, 'Tableaux'),
      inline(
        styledTable(
          { columns: 4 },
          table.header(
            inline`Source`,
            inline`Année`,
            inline`Valeurs seuils aiguës (mg/L)`,
            inline`Valeurs seuils chroniques (mg/L)`,
          ),
          inline`US EPA`,
          inline`1998`,
          inline`860`,
          inline`230`,
          inline`Canada (BC)`,
          inline`2003`,
          inline`600`,
          inline`150`,
        ),
      ),
    ),
    m.lines(m.heading(2, 'Blocs'), inline(focusBlock('Attention', inline`Ceci est important`))),
    inline(shadowBlock(inline`L'ombre capte la lumière`)),
    m.lines(
      m.heading(1, 'Diapositives spéciales'),
      inline(
        matrixSlide(
          { title: 'Plusieurs volets', columns: 2, rows: 4 },
          inline(lorem(20)),
          inline(lorem(20)),
          inline(lorem(20)),
          inline(lorem(20)),
        ),
      ),
    ),
    inline(focusSlide(inline`Merci de votre attention`)),
  )
}
