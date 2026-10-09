// Converted from test/universe/corpus/peace-of-posters.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  auto,
  bibliography,
  block,
  blocks,
  circle,
  cite,
  cm,
  colbreak,
  columns,
  define,
  doc,
  em,
  external,
  figure,
  fr,
  image,
  importPackage,
  inline,
  label,
  let_,
  linebreak,
  link,
  m,
  page,
  path,
  pct,
  pt,
  raw,
  red,
  ref,
  set,
  space,
  sym,
  table,
  text,
  unsafeRaw,
  white,
} from '../../../src/index.ts'

export default () => {
  const pop = external('pop')
  const pop_setPosterLayout = define('set-poster-layout').pos('arg1', T.any).returns(T.any).external(pop)
  const pop_layoutA0 = external('layout-a0', pop)
  const pop_setTheme = define('set-theme').pos('arg1', T.any).returns(T.any).external(pop)
  const pop_uniFr = external('uni-fr', pop)
  const pop_updatePosterLayout = define('update-poster-layout')
    .named('spacing', T.any, null)
    .returns(T.any)
    .external(pop)
  const pop_titleBox = define('title-box')
    .pos('arg1', T.any)
    .named('authors', T.any, null)
    .named('institutes', T.any, null)
    .named('keywords', T.any, null)
    .named('logo', T.any, null)
    .returns(T.any)
    .external(pop)
  const pop_columnBox = define('column-box')
    .pos('arg1', T.content)
    .named('body-box-args', T.any, null)
    .named('heading', T.any, null)
    .named('heading-box-args', T.any, null)
    .named('stretch-to-next', T.any, null)
    .returns(T.any)
    .external(pop)
  const pop_bottomBox = define('bottom-box').pos('arg1', T.content).returns(T.any).external(pop)
  const [boxSpacingDecl, boxSpacing] = let_('box-spacing', em(1.2))
  return doc(
    importPackage('@preview/peace-of-posters:0.6.0', pop),
    m.lines(
      set(page, { margin: cm(1), paper: 'a0' }),
      inline(
        pop_setPosterLayout(pop_layoutA0),
        space,
        pop_setTheme(pop_uniFr),
        space,
        set(text, { size: unsafeRaw.code<any>`pop.layout-a0.at("body-size")` }),
        space,
        boxSpacingDecl,
        space,
        set(columns, { gutter: boxSpacing }),
        space,
        set(block, { spacing: boxSpacing }),
        space,
        pop_updatePosterLayout({ spacing: boxSpacing }),
      ),
    ),
    inline(
      pop_titleBox(
        {
          authors: 'Jonas Pleyer¹',
          institutes: '¹Freiburg Center for Data-Analysis and Modelling',
          keywords: 'Peace, Dove, Poster, Science',
          logo: circle({ fill: white, inset: pt(-10) }, image(path('peace-dove.png'))),
        },
        'Peace of Posters Template',
      ),
    ),
    inline(
      columns(
        2,
        blocks(
          inline(
            pop_columnBox(
              { heading: 'Columbidae' },
              blocks(
                inline`'Columbidae is a bird family consisting of doves and pigeons. It is the only family in the order
Columbiformes.' ${cite(label('wiki:Columbidae'))}`,
                inline(
                  figure(
                    {
                      caption: inline`${space}Pink-necked green pigeon ${cite(label('wiki:File:Treron_vernans_male_-_Kent_Ridge_Park.jpg'))}.${space}`,
                    },
                    inline(space, image({ width: pct(40) }, path('Treron_vernans_male_-_Kent_Ridge_Park.jpg')), space),
                  ),
                ),
              ),
            ),
          ),
          m.lines(
            unsafeRaw.markup`#let hba = pop.uni-fr.heading-box-args`,
            inline(
              unsafeRaw.code<any>`hba.insert("stroke", (paint: gradient.linear(green, red, blue), thickness: 10pt))`,
            ),
          ),
          m.lines(
            unsafeRaw.markup`#let bba = pop.uni-fr.body-box-args`,
            inline(
              unsafeRaw.code<any>`bba.insert("inset", 30pt)`,
              space,
              unsafeRaw.code<any>`bba.insert("stroke", (paint: gradient.linear(green, red, blue), thickness: 10pt))`,
            ),
          ),
          inline(
            pop_columnBox(
              {
                heading: 'Biological Information',
                headingBoxArgs: unsafeRaw.code<any>`hba`,
                bodyBoxArgs: unsafeRaw.code<any>`bba`,
              },
              blocks(
                inline(
                  table(
                    {
                      columns: [auto, fr(1)],
                      inset: cm(0.5),
                      stroke: (x, y) => unsafeRaw.code<any>`if y >= 0 { (bottom: 0.2pt + black) }`,
                    },
                    inline`Domain`,
                    inline`Eukaryota`,
                    inline`Kingdom`,
                    inline`Animalia`,
                    inline`Phylum`,
                    inline`Chordata`,
                    inline`Class`,
                    inline`Aves`,
                    inline`Clade`,
                    inline`Columbimorphae`,
                    inline`Order`,
                    inline`Columbiformes`,
                    inline`Family`,
                    inline`Columbidae`,
                    inline`Type genus`,
                    inline`Columba`,
                  ),
                ),
                inline`This box is styled differently compared to the others. To make such changes persistent across
the whole poster, we can use these functions: ${raw({ block: true, lang: 'typst' }, '#pop.update-poster-layout(...)\n#pop.update-theme()')}`,
              ),
            ),
          ),
          inline(
            pop_columnBox(
              { heading: 'Peace of Posters Documentation' },
              inline`${space}You can find more information on the documentation site under ${text({ fill: red }, inline(space, link('https://jonaspleyer.github.io/peace-of-posters/', inline`${space}jonaspleyer.github.io/peace-of-posters/${space}`), space))}.${space}`,
            ),
          ),
          inline(colbreak()),
          inline(
            pop_columnBox(
              { heading: 'General Relativity' },
              inline`${space}Einstein's brilliant theory of general relativity starts with the field equations ${cite(label('Einstein1916'))}.
${unsafeRaw.math.block`G_(mu nu) + Lambda g_(mu nu) = kappa T_(mu nu)`} However, they have nothing
to do with doves.${space}`,
            ),
          ),
          inline(
            pop_columnBox(
              { heading: 'Peace be with you' },
              inline(
                space,
                figure(
                  {
                    caption: inline`${space}'Doves [...] are used in many settings as symbols of peace, freedom or love. Doves appear
in the symbolism of Judaism, Christianity, Islam and paganism, and of both military and pacifist
groups.' ${cite(label('wiki:Doves_as_symbols'))}.${space}`,
                  },
                  inline(space, image(path('peace-dove.png')), space),
                ),
                space,
              ),
            ),
          ),
          inline(
            pop_columnBox(
              { heading: 'Etymology' },
              inline`${space}Pigeon is a French word that derives from the Latin pīpiō, for a 'peeping' chick, while
dove is an ultimately Germanic word, possibly referring to the bird's diving flight. The English
dialectal word culver appears to derive from Latin columba ${cite(label('wiki:Online_Etymology_Dictionary'))}.
A group of doves is called a "dule", taken from the French word deuil ('mourning') ${ref(label('Lipton1991-qa'))}.${space}`,
            ),
          ),
          inline(pop_columnBox(inline(space, bibliography(path('bibliography.bib')), space))),
          inline(
            pop_columnBox(
              { heading: 'Fill space with a box', stretchToNext: true },
              inline`${space}Notice that this box would not fill the entire space up to the bottom of the page but
we can stretch it such that it does so anyway.${space}`,
            ),
          ),
        ),
      ),
    ),
    inline(
      pop_bottomBox(inline`${space}Bottom Boxes are displayed at the bottom of a page. ${linebreak()} Download more RAM:
${link('https://www.youtube.com/watch?v=dQw4w9WgXcQ')}${space}`),
    ),
  )
}
