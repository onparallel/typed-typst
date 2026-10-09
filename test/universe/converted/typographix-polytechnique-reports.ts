// Converted from test/universe/corpus/typographix-polytechnique-reports.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  auto,
  datetime,
  define,
  doc,
  document,
  em,
  external,
  heading,
  importPackage,
  inline,
  let_,
  linebreak,
  lorem,
  m,
  outline,
  pagebreak,
  set,
  show,
  smartquote,
  space,
  text,
} from '../../../src/index.ts'

export default () => {
  const template = external('template')
  const template_apply = define('apply')
    .named('despair-mode', T.any, null)
    .named('first-line-indent-all', T.any, null)
    .returns(T.any)
    .external(template)
  const template_cover = define('cover')
    .pos('arg1', T.any)
    .pos('arg2', T.any)
    .pos('arg3', T.any)
    .pos('arg4', T.any)
    .named('logo', T.any, null)
    .named('logo-horizontal', T.any, null)
    .named('subtitle', T.any, null)
    .returns(T.any)
    .external(template)
  const template_applyHeaderFooter = define('apply-header-footer')
    .named('short-title', T.any, null)
    .returns(T.any)
    .external(template)
  const template_appendix = define('appendix').named('title', T.any, null).returns(T.any).external(template)
  const [titleDecl, title_2] = let_('title', inline`Rapport de stage en entreprise ${linebreak()} sur plusieurs lignes`)
  const [subtitleDecl, subtitle] = let_('subtitle', 'Un sous-titre pour expliquer ce titre')
  const [logoDecl, logo] = let_('logo', null)
  const [logoHorizontalDecl, logoHorizontal] = let_('logo-horizontal', true)
  const [shortTitleDecl, shortTitle] = let_('short-title', 'Rapport de stage')
  const [authorDecl, author] = let_('author', 'Rémi Germe')
  const [dateStartDecl, dateStart] = let_('date-start', datetime({ year: 2024, month: 6, day: 5 }))
  const [dateEndDecl, dateEnd] = let_('date-end', datetime({ year: 2024, month: 9, day: 5 }))
  const [despairModeDecl, despairMode] = let_('despair-mode', false)
  const [firstLineIndentAllDecl, firstLineIndentAll] = let_('first-line-indent-all', auto)
  return doc(
    importPackage('@preview/typographix-polytechnique-reports:0.2.1', template),
    m.lines(
      titleDecl,
      subtitleDecl,
      inline(
        logoDecl,
        space,
        logoHorizontalDecl,
        space,
        shortTitleDecl,
        space,
        authorDecl,
        space,
        dateStartDecl,
        space,
        dateEndDecl,
        space,
        despairModeDecl,
        space,
        firstLineIndentAllDecl,
      ),
    ),
    set(text, { lang: 'fr' }),
    m.lines(
      set(document, { title: title_2, author: author, date: datetime.today() }),
      show(template_apply.with({ despairMode: despairMode, firstLineIndentAll: firstLineIndentAll })),
    ),
    inline(
      template_cover(
        { subtitle: subtitle, logo: logo, logoHorizontal: logoHorizontal },
        title_2,
        author,
        dateStart,
        dateEnd,
      ),
      space,
      pagebreak(),
    ),
    inline(
      heading({ level: 1, numbering: null, outlined: false }, inline`Remerciements`),
      space,
      lorem(250),
      space,
      pagebreak(),
    ),
    inline(
      heading({ level: 1, numbering: null, outlined: false }, inline`Executive summary`),
      space,
      lorem(300),
      space,
      pagebreak(),
    ),
    inline(outline({ title: inline`Template contents`, indent: em(1), depth: 2 })),
    show(template_applyHeaderFooter.with({ shortTitle: shortTitle })),
    inline(heading({ level: 1, numbering: null }, inline`Introduction`), space, lorem(400), space, pagebreak()),
    m.heading(1, 'Premier titre'),
    m.heading(2, 'Un sous-titre'),
    inline(lorem(30)),
    m.heading(3, 'Un détail pas si inutile'),
    m.heading(4, 'Halte au sketch'),
    inline(lorem(20)),
    m.heading(3, 'Encore un autre décidément'),
    inline(lorem(120)),
    m.heading(4, 'Il en faut toujours plus'),
    inline(lorem(80)),
    m.lines(
      m.heading(2, 'L', smartquote({ double: false }), 'inspiration se fait rare'),
      inline`Ne pas oublier d'expirer surtout. ${lorem(20)}`,
    ),
    inline(lorem(35)),
    inline(pagebreak()),
    m.heading(1, 'Deuxième partie'),
    inline(lorem(300)),
    inline(pagebreak()),
    m.lines(m.heading(1, 'Troisième axe'), inline`Parce qu'on a beaucoup de choses à dire et qu'on en a gros.`),
    inline(pagebreak()),
    inline(heading({ level: 1, numbering: null }, inline`Conclusion`), space, lorem(200)),
    m.lines(
      inline(pagebreak(), space, show(template_appendix.with({ title: 'Annexe' }))),
      m.heading(1, 'Fiche d', smartquote({ double: false }), 'évaluation du stagiaire'),
      inline`Yeah j'ai eu que des A partout trop bien, je suis un.e super stagiaire.`,
    ),
  )
}
