// Converted from test/universe/corpus/ucph-nielsine-touying.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  align,
  bibliography,
  blocks,
  center,
  cite,
  datetime,
  define,
  deg,
  doc,
  external,
  footnote,
  fr,
  gradient,
  horizon,
  importPackage,
  inline,
  label,
  let_,
  m,
  pagebreak,
  path,
  pt,
  raw,
  set,
  show,
  space,
  text,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const uc = external('uc')
  const ty = external('ty')
  const th = external('th')
  const th_showTheorion = external('show-theorion', th)
  const th_setInheritedLevels = define('set-inherited-levels').pos('arg1', T.any).returns(T.any).external(th)
  const uc_ucphMetropolisTheme = define('ucph-metropolis-theme')
    .rest('args', T.any)
    .named('language', T.any, null)
    .returns(T.any)
    .external(uc)
  const ty_configInfo = define('config-info')
    .named('author', T.content, [])
    .named('date', T.any, null)
    .named('institution', T.content, [])
    .named('logo', T.any, null)
    .named('subtitle', T.content, [])
    .named('title', T.content, [])
    .returns(T.any)
    .external(ty)
  const uc_titleSlide = define('title-slide').returns(T.any).external(uc)
  const th_importantBlock = define('important-block')
    .pos('arg1', T.content)
    .named('fill', T.any, null)
    .returns(T.any)
    .external(th)
  const uc_slide = define('slide')
    .rest('args', T.any)
    .named('align', T.any, null)
    .named('composer', T.any, null)
    .returns(T.any)
    .external(uc)
  const uc_focusSlide = define('focus-slide')
    .pos('arg1', T.content)
    .named('fill', T.any, null)
    .returns(T.any)
    .external(uc)
  const uc_showColorPallette = define('show-color-pallette').returns(T.any).external(uc)
  const [myGradientDecl, myGradient] = let_(
    'my-gradient',
    gradient.linear(
      { angle: deg(45) },
      unsafeRaw.code<any>`uc.colors.ucph-dark.red`,
      unsafeRaw.code<any>`uc.colors.ucph-dark.blue`,
    ),
  )
  return doc(
    m.lines(
      importPackage('@preview/ucph-nielsine-touying:0.1.3', uc),
      importPackage('@preview/touying:0.6.3', ty),
      importPackage('@preview/theorion:0.5.0', th),
      unsafeRaw.markup`#import th.cosmos.clouds as thc`,
    ),
    set(text, { font: 'Fira Sans', weight: 'light' }),
    m.lines(show(th_showTheorion), inline(th_setInheritedLevels(0))),
    show(
      uc_ucphMetropolisTheme.with(
        { language: 'en' },
        ty_configInfo({
          title: inline`Title`,
          subtitle: inline`Subtitle`,
          author: inline`Authors`,
          date: datetime.today(),
          institution: inline`University of Copenhagen`,
          logo: unsafeRaw.code<any>`uc.logos.seal`,
        }),
      ),
    ),
    inline(uc_titleSlide()),
    m.lines(m.heading(1, 'First section'), m.heading(2, 'First slide'), 'Wow, this is a slide.'),
    m.lines(
      m.heading(1, 'Examples'),
      m.heading(2, 'Example with', ' ', raw('theorion'), ': OLS estimator'),
      inline(
        unsafeRaw.code<any>`thc.definition()[
  The OLS estimator
  $
    hat(bold(beta)) = (bold(X)^T bold(X))^(-1) bold(X)^T bold(y)
  $
]`,
        space,
        th_importantBlock(
          { fill: unsafeRaw.code<any>`uc.colors.ucph-dark.red` },
          blocks(m.list(m.item(['This is very important.']), m.item(['Remember this.']))),
        ),
      ),
      m.heading(2, 'Third slide'),
      inline(
        uc_slide(
          { align: add(center, horizon), composer: [fr(1), fr(1)] },
          inline`${space}First column.${space}`,
          inline`${space}Second column. ${cite({ form: 'prose' }, label('schelling1971dynamic'))}${footnote('a footnote')}${space}`,
        ),
      ),
    ),
    inline(uc_focusSlide(inline`${space}Wake up!${space}`)),
    m.lines(
      myGradientDecl,
      inline(uc_focusSlide({ fill: myGradient }, inline`${space}Wake up with a gradient!${space}`)),
    ),
    m.lines(
      m.heading(1, 'Colors'),
      m.heading(2, 'Color scheme'),
      inline`Colors of the University of Copenhagen can be retrieved by specifying: ${raw({ block: true, lang: 'typ' }, '#import "@preview/ucph-nielsine-touying:0.1.3" as uc\n// Darks\nuc.colors.ucph-dark.red // the default dark red color of UCPH\n// Medium\nuc.colors.ucph-medium // ...\n// Light\nuc.colors.ucph-light // ...\n')}
${pagebreak()}`,
    ),
    inline(align(center, uc_showColorPallette())),
    m.lines(
      m.heading(2, 'References'),
      inline(
        uc_slide(
          blocks(
            m.lines(
              set(text, { size: pt(14) }),
              inline(bibliography({ style: 'harvard-cite-them-right', title: null }, path('bibliography.bib'))),
            ),
          ),
        ),
      ),
    ),
  )
}
