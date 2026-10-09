// Converted from test/universe/corpus/mahou-cv.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  black,
  codeBlock,
  define,
  doc,
  importPackage,
  inline,
  let_,
  lorem,
  pct,
  pt,
  rgb,
  show,
  space,
  stack,
} from '../../../src/index.ts'

export default () => {
  const cv = define('cv')
    .pos('arg1', T.any)
    .pos('arg2', T.any)
    .pos('arg3', T.any)
    .pos('arg4', T.any)
    .returns(T.any)
    .external()
  const item = define('item')
    .pos('arg1', T.any)
    .pos('arg2', T.content)
    .named('caption', T.any, null)
    .returns(T.any)
    .external()
  const label_2 = define('label').pos('arg1', T.any).pos('arg2', T.content).returns(T.any).external()
  const progressBar = define('progress-bar').pos('arg1', T.any).returns(T.any).external()
  const section = define('section').pos('arg1', T.any).pos('arg2', T.content).returns(T.any).external()
  const setTheme = define('set-theme').pos('arg1', T.any).returns(T.any).external()
  const [themeDecl, theme] = let_('theme', {
    color: { accent: rgb('#E16B8C'), header: { accent: rgb('#64363C'), body: black } },
  })
  const [mainDecl, main] = let_(
    'main',
    section(
      'Educational Background',
      inline(
        space,
        label_2(
          '2012, 6 mths',
          inline(space, item({ caption: 'University of Hong Kong' }, 'B.S. in Computer Science', inline(lorem(32)))),
        ),
        space,
      ),
    ),
  )
  const [asideDecl, aside] = let_(
    'aside',
    codeBlock([
      section(
        'Contact',
        inline(
          space,
          label_2('Home', inline`Hong Kong, China`),
          space,
          label_2('Email', inline`contact@me.com`),
          space,
        ),
      ),
      section(
        'Technology Stack',
        inline(
          space,
          label_2(
            'Web',
            inline(
              space,
              stack(
                { spacing: pt(7) },
                item({ caption: 'Blazor' }, '.NET', inline(progressBar(pct(100)))),
                item('Express + React', inline(progressBar(pct(50)))),
              ),
              space,
            ),
          ),
          space,
          label_2('Desktop', inline(space, item('WPF', inline(progressBar(pct(75)))), space)),
          space,
          label_2(
            'Other',
            inline(
              space,
              item('Gaming', inline`Unity, Godot`),
              space,
              item('Graphics', inline`Illustrator, Photoshop`),
              space,
            ),
          ),
          space,
        ),
      ),
    ]),
  )
  return doc(
    importPackage('@preview/mahou-cv:0.1.0', [cv, item, label_2, progressBar, section, setTheme]),
    themeDecl,
    inline(setTheme(theme)),
    mainDecl,
    asideDecl,
    show(cv('Nanami Nakano', 'developer', main, aside)),
  )
}
