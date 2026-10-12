// Converted from test/universe/corpus/ttuile.typ by scripts/convert-suite.ts — do not edit.
import {
  T,
  align,
  aqua,
  black,
  blocks,
  blue,
  center,
  codeBlock,
  data,
  datetime,
  define,
  doc,
  eastern,
  em,
  external,
  figure,
  footnote,
  fr,
  fuchsia,
  gray,
  green,
  grid,
  heading,
  importPackage,
  inline,
  label,
  labelled,
  let_,
  lime,
  linebreak,
  lorem,
  m,
  maroon,
  math,
  navy,
  olive,
  orange,
  pagebreak,
  pt,
  purple,
  red,
  ref,
  set,
  show,
  silver,
  space,
  spread,
  square,
  strong,
  teal,
  times,
  unsafeRaw,
  white,
  yellow,
} from '../../../src/index.ts'

export default () => {
  const ttuile = external('ttuile')
  const appendix = define('appendix')
    .pos('arg1', T.content)
    .named('lbl', T.any, null)
    .named('title', T.content, [])
    .returns(T.any)
    .external()
  const appendicesSection = define('appendices-section')
    .named('appendices', T.any, null)
    .named('outlined', T.any, null)
    .named('pagebreak-after-outline', T.any, null)
    .returns(T.any)
    .external()
  const ttuile_with = define('with')
    .named('authors', T.any, null)
    .named('footer-left', T.content, [])
    .named('footer-right', T.any, null)
    .named('group', T.any, null)
    .named('headline', T.any, null)
    .named('outlined', T.any, null)
    .returns(T.any)
    .external(ttuile)
  const [listeCouleursDecl, listeCouleurs] = let_(
    'liste-couleurs',
    data([
      black,
      gray,
      silver,
      white,
      navy,
      blue,
      aqua,
      teal,
      eastern,
      purple,
      fuchsia,
      maroon,
      red,
      orange,
      yellow,
      olive,
      green,
      lime,
    ]),
  )
  const [couleursDecl, couleurs] = let_(
    'couleurs',
    grid(
      { columns: times(9, [fr(1)]), rows: 2, rowGutter: em(1) },
      spread(
        listeCouleurs.map((c) =>
          codeBlock(
            [],
            square({
              size: pt(45),
              fill: c,
              stroke: unsafeRaw.code({
                c,
              })<any>`if (black, navy, maroon).contains(c) { 1.2pt + silver } else { 1.2pt }`,
            }),
          ),
        ),
      ),
    ),
  )
  const [rrDecl, rr] = let_('rr', unsafeRaw.math`thin \\u{1f98f} thin`)
  const [bbDecl, bb] = let_('bb', unsafeRaw.math`thin \\u{1f37b} thin`)
  const [llDecl, ll] = let_('ll', unsafeRaw.math`thin \\u{1f3ee} thin`)
  const [annexe1Decl, annexe1] = let_(
    'annexe-1',
    appendix(
      { title: inline(lorem(5)), lbl: label('annexe-1') },
      blocks(
        inline(lorem(50)),
        inline(
          align(
            center,
            blocks(
              inline(strong(inline`95% of people cannot solve this!`), space, rrDecl, space, bbDecl, space, llDecl),
              inline(
                codeBlock(
                  [set(math.equation, { numbering: null })],
                  unsafeRaw.math.block`ll / (bb + rr) + bb / (ll + rr) + rr / (ll + bb) = 4`,
                ),
              ),
              inline(
                strong(
                  inline`Can you find positive whole values for ${unsafeRaw.math`ll`}, ${unsafeRaw.math`bb`} and ${unsafeRaw.math`rr`}?`,
                ),
              ),
            ),
          ),
        ),
        inline(lorem(45)),
      ),
    ),
  )
  return doc(
    importPackage('@preview/ttuile:0.2.0', [ttuile, appendix, appendicesSection]),
    show(
      ttuile_with({
        headline: { lead: inline`Compte rendu de TP n°1 :`, title: inline`« ${lorem(8)} »` },
        authors: ['Theresa Tungsten', 'Jean Dupont', 'Eugene Deklan'],
        group: 'TD0',
        footerLeft: inline`Poste n°0`,
        footerRight: datetime.today().display('[day]/[month]/[year]'),
        outlined: true,
      }),
    ),
    heading({ depth: 1 }, inline(lorem(1))),
    inline(lorem(30)),
    m.list(m.item([lorem(30)]), m.item([lorem(25)])),
    inline(unsafeRaw.math.block`E = m c^2 + "AI"`),
    inline(lorem(28), space, footnote(inline(lorem(27)))),
    inline(codeBlock([], times(2, linebreak()))),
    listeCouleursDecl,
    couleursDecl,
    inline(figure({ caption: inline(lorem(10)) }, couleurs)),
    inline(pagebreak()),
    inline(labelled(heading({ depth: 1 }, inline(lorem(10))), label('h1'))),
    heading({ depth: 2 }, inline(lorem(7))),
    inline(lorem(26)),
    inline(ref(label('annexe-1')), space, lorem(10)),
    heading({ depth: 2 }, inline(lorem(2))),
    inline(lorem(18)),
    heading({ depth: 3 }, inline(lorem(6))),
    inline(lorem(45), space, linebreak(), space, lorem(35)),
    heading({ depth: 4 }, inline(lorem(1))),
    inline(lorem(30)),
    inline(
      math.equation(
        { numbering: null, block: true },
        unsafeRaw.math.block`tilde(cal(T)) =
    mat(
      delim: "|",
      1, 2, ..., 10;
      2, 2, ..., 10;
      dots.v, dots.v, dots.down, dots.v;
      10, 10, ..., 10;
      gap: #0.3em
    )`,
      ),
    ),
    inline(lorem(45)),
    heading({ depth: 4 }, inline(lorem(5))),
    inline(lorem(50), space, linebreak(), space, lorem(23)),
    annexe1Decl,
    inline(appendicesSection({ appendices: [annexe1], outlined: true, pagebreakAfterOutline: false })),
  )
}
