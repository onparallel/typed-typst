// Converted from test/universe/corpus/campanile.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  align,
  bibliography,
  center,
  define,
  doc,
  figure,
  footnote,
  importPackage,
  inline,
  label,
  let_,
  lorem,
  m,
  path,
  pt,
  quote,
  ref,
  show,
  smartquote,
  space,
  strong,
  table,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const signature = define('signature')
    .named('author', T.any, null)
    .named('committee-members', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external()
  const thesis = define('thesis')
    .pos('arg1', T.any)
    .pos('arg2', T.any)
    .named('abstract', T.content, [])
    .named('acknowledgement', T.content, [])
    .named('appendices', T.any, null)
    .named('author', T.any, null)
    .named('committee-members', T.any, null)
    .named('degree', T.any, null)
    .named('field', T.any, null)
    .named('semester', T.any, null)
    .named('title', T.any, null)
    .named('year', T.any, null)
    .returns(T.any)
    .external()
  const [titleDecl, title_2] = let_('title', 'thesis-title')
  const [authorDecl, author] = let_('author', 'thesis-author')
  const [committeeMembersDecl, committeeMembers] = let_('committee-members', [
    { name: 'thesis-chair', role: 'thesis-chair-role' },
    { name: 'thesis-member-1', role: 'thesis-member-1-role' },
  ])
  return doc(
    importPackage('@preview/campanile:0.1.0', [signature, thesis]),
    m.lines(titleDecl, authorDecl, committeeMembersDecl),
    inline(signature({ title: title_2, author: author, committeeMembers: committeeMembers })),
    show((doc_2, ctx) =>
      thesis(
        {
          title: title_2,
          author: author,
          degree: 'thesis-degree',
          field: 'thesis-field',
          committeeMembers: committeeMembers,
          semester: 'Spring',
          year: 2026,
          abstract: inline(lorem(150)),
          acknowledgement: inline(lorem(150)),
          appendices: [inline(lorem(150)), inline(lorem(150))],
        },
        bibliography({ title: inline`References` }, path('references.bib')),
        doc_2,
      ),
    ),
    m.heading(1, 'Prexy Salaam'),
    m.heading(2, 'Faceplate Marginalia'),
    inline`Invasive brag; gait grew Fuji Budweiser penchant walkover pus hafnium financial Galway and punitive
Mekong convict defect dill, opinionate leprosy and grandiloquent? Compulsory Rosa Olin Jackson
${ref(label('pbrt4e'))} and pediatric Jan. Serviceman, endow buoy apparatus.`,
    inline`Forbearance. Bois; blocky crucifixion September.${footnote(inline`${space}Davidson witting and grammatic. Hoofmark and Avogadro ionosphere. Placental bravado
catalytic especial detonate buckthorn Suzanne plastron isentropic? Glory characteristic. Denature?
Pigeonhole sportsman grin historic stockpile. Doctrinaire marginalia and art. Sony tomography.
Aviv censor seventh, conjugal. Faceplate emittance borough airline. Salutary, frequent seclusion
Thoreau touch; known ashy Bujumbura may, assess hadn't servitor. Wash doff, algorithm.${space}`)}`,
    m.heading(3, 'Promenade Exeter'),
    'Inertia breakup Brookline. Hebrew, prexy, and Balfour. Salaam applaud, puff teakettle.',
    inline(
      quote(
        { block: true },
        inline`${space}Ugh servant Eulerian knowledge Prexy Lyman zig wiggly. Promenade adduce. Yugoslavia
piccolo Exeter. Grata entrench sandpiper collocation; seamen northward virgin and baboon Stokes,
hermetic culinary cufflink Dailey transferee curlicue. Camille, Whittaker harness shatter. Novosibirsk
and Wolfe bathrobe pout Fibonacci, baldpate silane nirvana; lithograph robotics. Krakow, downpour
effeminate Volstead?${space}`,
      ),
    ),
    inline`Davidson witting and grammatic. Hoofmark and Avogadro ionosphere. Placental bravado catalytic
especial detonate buckthorn Suzanne plastron isentropic? Glory characteristic. Denature? Pigeonhole
sportsman grin historic stockpile. Doctrinaire marginalia and art. Sony tomography. Aviv censor
seventh, conjugal. Faceplate emittance borough airline. Salutary. Frequent seclusion Thoreau
touch; known ashy Bujumbura may assess hadn't servitor. Wash, Doff, and Algorithm.`,
    inline`Davidson witting and grammatic. Hoofmark and Avogadro ionosphere. Placental bravado catalytic
(${ref({ supplement: inline`Appendix` }, label('appendix-a'))}) especial detonate buckthorn
Suzanne plastron isentropic? Glory characteristic. Denature? Pigeonhole sportsman grin historic
stockpile. Doctrinaire marginalia and art. Sony tomography. Aviv censor seventh, conjugal. Faceplate
emittance borough airline. Salutary. Frequent seclusion Thoreau touch; known ashy Bujumbura
may assess, hadn't servitor. Wash, Doff, Algorithm.`,
    inline(
      figure(
        { kind: table, caption: inline`Pigeonhole sportsman grin historic stockpile.` },
        inline(
          space,
          table(
            { columns: 3, stroke: pt(0.6) },
            inline`1-2-3`,
            inline`yes`,
            inline`no`,
            inline`Multiplan`,
            inline`yes`,
            inline`yes`,
            inline`Wordstar`,
            inline`no`,
            inline`no`,
          ),
          space,
        ),
      ),
    ),
    'Davidson witting and grammatic. Hoofmark and Avogadro ionosphere. Placental bravado catalytic especial detonate buckthorn Suzanne plastron isentropic? Glory characteristic. Denature? Pigeonhole sportsman grin historic stockpile. Doctrinaire marginalia and art. Sony tomography.',
    inline(
      figure(
        { kind: table, caption: inline`Utensil wallaby Juno titanium` },
        inline(
          space,
          table(
            { columns: 5, stroke: pt(0.6) },
            inline(strong(inline`Mitre`)),
            inline(strong(inline`Enchantress`)),
            inline(strong(inline`Hagstrom`)),
            inline(strong(inline`Atlantica`)),
            inline(strong(inline`Martinez`)),
            inline`Arabic`,
            inline`Spicebush`,
            inline`Sapient`,
            inline`Chaos`,
            inline`Conquer`,
            inline`Jail`,
            inline`Syndic`,
            inline`Prevent`,
            inline`Ballerina`,
            inline`Canker`,
            inline`Discovery`,
            inline`Fame`,
            inline`Prognosticate`,
            inline`Corroborate`,
            inline`Bartend`,
            inline`Marquis`,
            inline`Regal`,
            inline`Accusation`,
            inline`Dichotomy`,
            inline`Soprano`,
            inline`Indestructible`,
            inline`Porterhouse`,
            inline`Sofia`,
            inline`Cavalier`,
            inline`Trance`,
            inline`Leavenworth`,
            inline`Hidden`,
            inline`Benedictine`,
            inline`Vivacious`,
            inline`Utensil`,
          ),
          space,
        ),
      ),
    ),
    inline`Aviv censor seventh, conjugal. Faceplate emittance borough airline. Salutary. Frequent seclusion
Thoreau touch; known ashy Bujumbura may, assess, hadn't servitor. Wash ${ref(label('hennessypatterson'))},
Doff, and Algorithm.`,
    inline(
      figure(
        {
          caption: inline`Davidson witting and grammatic. Hoofmark and Avogadro ionosphere. Placental bravado catalytic
especial detonate buckthorn Suzanne plastron isentropic? Glory characteristic. Denature? Pigeonhole
sportsman grin.`,
        },
        inline(space, align(center, inline(unsafeRaw.math.block`alpha`)), space),
      ),
    ),
    inline`Davidson witting and grammatic. Hoofmark and Avogadro ionosphere. Placental bravado catalytic
especial detonate buckthorn Suzanne plastron isentropic? Glory characteristic. Denature? Pigeonhole
sportsman grin historic stockpile. Doctrinaire marginalia and art. Sony tomography. Aviv censor
seventh, conjugal. Faceplate emittance borough airline. ${ref(label('rendering-eq'))} Salutary.
Frequent seclusion Thoreau touch; known ashy Bujumbura may, assess, hadn't servitor. Wash, Doff,
and Algorithm.`,
    inline(
      figure(
        { kind: table, caption: inline`Abeam utensil wallaby Juno titanium` },
        inline(
          space,
          table(
            { columns: 5, stroke: pt(0.6) },
            inline(strong(inline`Mitre`)),
            inline(strong(inline`Enchantress`)),
            inline(strong(inline`Hagstrom`)),
            inline(strong(inline`Atlantica`)),
            inline(strong(inline`Martinez`)),
            inline`Arabic`,
            inline`Spicebush`,
            inline`Sapient`,
            inline`Chaos`,
            inline`Conquer`,
            inline`Jail`,
            inline`Syndic`,
            inline`Prevent`,
            inline`Ballerina`,
            inline`Canker`,
            inline`Discovery`,
            inline`Fame`,
            inline`Prognosticate`,
            inline`Corroborate`,
            inline`Bartend`,
            inline`Marquis`,
            inline`Regal`,
            inline`Accusation`,
            inline`Dichotomy`,
            inline`Soprano`,
            inline`Indestructible`,
            inline`Porterhouse`,
            inline`Sofia`,
            inline`Cavalier`,
            inline`Trance`,
            inline`Leavenworth`,
            inline`Hidden`,
            inline`Benedictine`,
            inline`Vivacious`,
            inline`Utensil`,
          ),
          space,
        ),
      ),
    ),
    m.list(
      m.item([
        'Davidson witting and grammatic. Jukes foundry mesh sting speak, Gillespie, Birmingham Bentley. Hedgehog, swollen McGuire; gnat. Insane Cadillac inborn grandchildren Edmondson branch coauthor swingable? Lap Kenney Gainesville infiltrate. Leap and dump? Spoilage bluegrass. Diesel aboard Donaldson affectionate cod? Vermiculite pemmican labour Greenberg derriere Hindu. Stickle ferrule savage jugging spidery and animism.',
      ]),
      m.item(['Hoofmark and Avogadro ionosphere.']),
      m.item(['Placental bravado catalytic especial detonate buckthorn Suzanne plastron isentropic?']),
      m.item(['Glory characteristic. Denature? Pigeonhole sportsman grin historic stockpile.']),
      m.item(['Doctrinaire marginalia and art. Sony tomography.']),
      m.item(['Aviv censor seventh, conjugal.']),
      m.item(['Faceplate emittance borough airline.']),
      m.item([
        'Salutary. Frequent seclusion Thoreau touch; known ashy Bujumbura may, assess, hadn',
        smartquote({ double: false }),
        't servitor. Wash, Doff, and Algorithm.',
      ]),
    ),
    inline`Davidson witting and grammatic. Hoofmark and Avogadro ionosphere. Placental bravado catalytic
especial detonate buckthorn Suzanne plastron isentropic? Glory characteristic. Denature? Pigeonhole
sportsman grin ${ref({ supplement: inline`p. 45` }, label('rendering-eq'))} historic stockpile.
Doctrinaire marginalia and art. Sony tomography. Aviv censor seventh, conjugal. Faceplate emittance
borough airline. Salutary. Frequent seclusion Thoreau touch; known ashy Bujumbura may, assess,
hadn't servitor. Wash, Doff, and Algorithm.`,
  )
}
