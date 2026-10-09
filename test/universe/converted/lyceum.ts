// Converted from test/universe/corpus/lyceum.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  auto,
  block,
  blocks,
  codeBlock,
  color,
  context,
  datetime,
  define,
  deg,
  doc,
  em,
  emph,
  external,
  heading,
  importPackage,
  inline,
  left,
  let_,
  lorem,
  m,
  mm,
  outline,
  par,
  pct,
  pt,
  raw,
  set,
  show,
  space,
  strong,
  text,
  unsafeRaw,
  v,
  where,
} from '../../../src/index.ts'

export default () => {
  const FRONT_MATTER = external('FRONT-MATTER')
  const BODY_MATTER = external('BODY-MATTER')
  const APPENDIX = external('APPENDIX')
  const BACK_MATTER = external('BACK-MATTER')
  const FRONT_MATTER_with = define('with')
    .named('affiliated', T.any, null)
    .named('authors', T.any, null)
    .named('date', T.any, null)
    .named('editors', T.any, null)
    .named('keywords', T.any, null)
    .named('lang-name', T.any, null)
    .named('location', T.any, null)
    .named('page-binding', T.any, null)
    .named('page-fill', T.any, null)
    .named('page-margin', T.any, null)
    .named('page-size', T.any, null)
    .named('publisher', T.any, null)
    .named('text-font', T.any, null)
    .named('text-size', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(FRONT_MATTER)
  const BODY_MATTER_with = define('with')
    .pos('arg1', T.any)
    .pos('arg2', T.any)
    .named('ship-part-page', T.any, null)
    .returns(T.any)
    .external(BODY_MATTER)
  const APPENDIX_with = define('with')
    .pos('arg1', T.any)
    .pos('arg2', T.any)
    .named('ship-part-page', T.any, null)
    .returns(T.any)
    .external(APPENDIX)
  const BACK_MATTER_with = define('with')
    .pos('arg1', T.any)
    .named('ship-part-page', T.any, null)
    .returns(T.any)
    .external(BACK_MATTER)
  const [TEXT_SIZEDecl, TEXT_SIZE] = let_('TEXT-SIZE', pt(11))
  return doc(
    importPackage('@preview/lyceum:0.1.0', [FRONT_MATTER, BODY_MATTER, APPENDIX, BACK_MATTER]),
    TEXT_SIZEDecl,
    show(
      FRONT_MATTER_with({
        title: { title: 'Igneous Rocks', subtitle: 'The Hard Science', sep: ' - ' },
        authors: [
          {
            givenName: 'Evelyn D.',
            name: 'Crump',
            affiliation: 'Rocks Hard Research Group',
            email: 'crumped@rockshard.org.far',
            location: 'Rich Mines, Faraway Country',
          },
          {
            preffix: 'Sir.',
            givenName: 'Effie J.',
            name: 'Hitchcock',
            suffix: 'Jr.',
            affiliation: 'Hard University',
            email: 'hitchcockej@hard.edu.far',
            location: 'Rockbridge, Faraway Country',
          },
        ],
        editors: ['Cenhelm, Erwin'],
        publisher: 'Lyceum Publisher',
        location: 'Lyceum City, Faraway Country',
        affiliated: { illustrator: ['Revaz Sopheap'], organizer: 'Darko Sergej' },
        keywords: ['igneous', 'rocks', 'geology'],
        date: datetime({ year: 2024, month: 9, day: 13 }),
        pageSize: { width: mm(155), height: mm(230) },
        pageMargin: { inside: mm(30), rest: mm(25) },
        pageBinding: left,
        pageFill: color.hsl(deg(45), pct(15), pct(85)),
        textFont: ['EB Garamond', 'Libertinus Serif'],
        textSize: TEXT_SIZE,
        langName: 'en',
      }),
    ),
    m.heading(1, 'Preface'),
    inline`Here goes the book preface. ${lorem(50)}`,
    show(where(outline.entry, { level: 1 }), (it, ctx) => codeBlock([v({ weak: true }, pt(12)), strong(it)])),
    m.heading(1, 'Contents'),
    inline(outline({ title: null, target: where(heading, { level: 1 }), indent: auto })),
    show(BODY_MATTER_with({ shipPartPage: false }, TEXT_SIZE, 'Chapter')),
    m.heading(1, 'Introduction'),
    inline(lorem(520)),
    inline(unsafeRaw.math.block`e = m c^2`),
    m.heading(2, 'Sub-Section'),
    inline(lorem(530)),
    m.heading(2, 'Sub-Section'),
    inline(lorem(530)),
    m.heading(1, 'Methodology'),
    inline(lorem(750)),
    m.heading(2, 'Sub-Section'),
    inline(lorem(730)),
    show(APPENDIX_with({ shipPartPage: true }, TEXT_SIZE, 'Appendix')),
    m.heading(1, 'Tables of Properties'),
    inline(lorem(50)),
    show(BACK_MATTER_with({ shipPartPage: false }, TEXT_SIZE)),
    m.heading(1, 'Citing This Book'),
    inline`The following is the ${emph(inline`auto-generated`)}, self bibliography database entry for the
${strong(inline(raw('hayagriva')))} manager:`,
    inline(
      block(
        { width: pct(100) },
        blocks(
          m.lines(
            unsafeRaw.markup`#let self-bib = context query(<self-bib-entry>).first().value`,
            set(par, { leading: em(0.5) }),
            inline(
              text(
                { font: 'Inconsolata', size: pt(9), weight: 'bold' },
                inline(space, unsafeRaw.code<any>`self-bib`, space),
              ),
            ),
          ),
        ),
      ),
    ),
  )
}
