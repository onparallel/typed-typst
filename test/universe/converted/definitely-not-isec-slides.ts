// Converted from test/universe/corpus/definitely-not-isec-slides.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  blocks,
  define,
  doc,
  emph,
  external,
  fr,
  h,
  importPackage,
  inline,
  label,
  linebreak,
  m,
  path,
  raw,
  ref,
  rgb,
  show,
  space,
  strong,
  top,
} from '../../../src/index.ts'

export default () => {
  const definitelyNotIsecTheme = external('definitely-not-isec-theme')
  const tugrazLogo = external('tugraz-logo')
  const configInfo = define('config-info')
    .named('authors', T.any, null)
    .named('download-qr', T.any, null)
    .named('extra', T.content, [])
    .named('footer', T.content, [])
    .named('subtitle', T.content, [])
    .named('title', T.content, [])
    .returns(T.any)
    .external()
  const configCommon = define('config-common').named('handout', T.any, null).returns(T.any).external()
  const configColors = define('config-colors').named('primary', T.any, null).returns(T.any).external()
  const titleSlide = define('title-slide').returns(T.any).external()
  const slide = define('slide').pos('arg1', T.content).named('title', T.content, []).returns(T.any).external()
  const quoteBlock = define('quote-block').pos('arg1', T.content).returns(T.any).external()
  const split = define('split').pos('arg1', T.content).pos('arg2', T.content).returns(T.any).external()
  const cblock = define('cblock').pos('arg1', T.content).named('title', T.content, []).returns(T.any).external()
  const note = define('note').pos('arg1', T.any).returns(T.any).external()
  const definitelyNotIsecTheme_with = define('with')
    .pos('arg1', T.any)
    .pos('arg2', T.any)
    .pos('arg3', T.any)
    .named('aspect-ratio', T.any, null)
    .named('institute', T.content, [])
    .named('logo', T.content, [])
    .named('progress-bar', T.any, null)
    .named('slide-alignment', T.any, null)
    .returns(T.any)
    .external(definitelyNotIsecTheme)
  return doc(
    importPackage('@preview/definitely-not-isec-slides:1.1.0', [
      definitelyNotIsecTheme,
      tugrazLogo,
      configInfo,
      configCommon,
      configColors,
      titleSlide,
      slide,
      quoteBlock,
      split,
      cblock,
      note,
    ]),
    show(
      definitelyNotIsecTheme_with(
        {
          aspectRatio: '16-9',
          slideAlignment: top,
          progressBar: true,
          institute: inline`isec.tugraz.at`,
          logo: inline(tugrazLogo),
        },
        configInfo({
          title: inline`Long Paper Title ${linebreak()} with One to Three Lines`,
          subtitle: inline`An optional short subtitle`,
          authors: [inline(strong(inline`First Author`)), inline`Second Author`, inline`Third Author`],
          extra: inline`SomeConf 2026`,
          footer: inline`First Author, Second Author, Third Author ${h(fr(1))} ${raw('firstname.lastname@tugraz.at')}`,
          downloadQr: '',
        }),
        configCommon({ handout: false }),
        configColors({ primary: rgb('e4154b') }),
      ),
    ),
    inline(titleSlide()),
    inline(
      slide(
        { title: inline`First Slide` },
        blocks(
          inline(
            quoteBlock(
              inline`${space}Use this block for a clear statement about the core concept of the slide${space}`,
            ),
          ),
          inline`Then, you can decompose the idea or present graphics ${ref(label('emg26template'))}:`,
          inline(
            split(
              inline(
                space,
                cblock({ title: inline`Advantages` }, blocks(m.list(m.item(['A']), m.item(['B']), m.item(['C'])))),
                space,
              ),
              inline(
                space,
                cblock({ title: inline`Disadvantages` }, blocks(m.list(m.item(['A']), m.item(['B']), m.item(['C'])))),
                space,
              ),
            ),
          ),
          inline`Furthermore, you can add inline ${emph(inline(raw('pdfpc')))} notes.${note('Here I am!')}`,
        ),
      ),
    ),
    inline(slide({ title: inline`Bibliography` }, inline(space, bibliography(path('bibliography.bib')), space))),
  )
}
