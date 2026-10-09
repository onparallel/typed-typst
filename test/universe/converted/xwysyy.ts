// Converted from test/universe/corpus/xwysyy.typ by scripts/convert-suite.ts — do not edit.
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
  m,
  raw,
  show,
  strong,
} from '../../../src/index.ts'

export default () => {
  const xwysyyPre = external('xwysyy-pre')
  const configInfo = define('config-info')
    .named('author', T.any, null)
    .named('date', T.any, null)
    .named('institution', T.any, null)
    .named('subtitle', T.content, [])
    .named('title', T.content, [])
    .returns(T.any)
    .external()
  const titleSlide = define('title-slide').returns(T.any).external()
  const outlineSlide = define('outline-slide').returns(T.any).external()
  const textbox = define('textbox').pos('arg1', T.content).pos('arg2', T.content).returns(T.any).external()
  const red_2 = define('red').pos('arg1', T.content).returns(T.any).external()
  const yellow_2 = define('yellow').pos('arg1', T.content).returns(T.any).external()
  const endSlide = define('end-slide')
    .named('body', T.content, [])
    .named('title', T.content, [])
    .returns(T.any)
    .external()
  const xwysyyPre_with = define('with')
    .pos('arg1', T.any)
    .named('theme', T.any, null)
    .returns(T.any)
    .external(xwysyyPre)
  return doc(
    importPackage('@preview/xwysyy:0.5.0', [
      xwysyyPre,
      configInfo,
      titleSlide,
      outlineSlide,
      textbox,
      red_2,
      yellow_2,
      endSlide,
    ]),
    show(
      xwysyyPre_with(
        { theme: 'sky' },
        configInfo({
          title: inline`xwysyy Starter Deck`,
          subtitle: inline`Academic slides in Typst`,
          author: ' ',
          date: datetime.today(),
          institution: ' ',
        }),
      ),
    ),
    inline(titleSlide()),
    inline(outlineSlide()),
    m.heading(1, 'Motivation'),
    m.heading(2, 'One Minute Setup'),
    inline`Use ${raw('typst init @preview/xwysyy:0.5.0')} to create this deck, then edit ${raw('main.typ')}.`,
    inline(
      textbox(
        blocks(
          inline(strong(inline`Reusable components`)),
          inline`${raw('textbox')}, ${red_2(inline`red highlights`)}, ${yellow_2(inline`yellow highlights`)},
tables, code blocks, and touying animations share one theme.`,
        ),
        blocks(
          inline(strong(inline`Theme control`)),
          inline`Switch built-in themes with ${raw('theme: "sunset"')} or pass a custom color dictionary directly.`,
        ),
      ),
    ),
    inline(endSlide({ title: inline`Thank You!`, body: inline`Questions?` })),
  )
}
