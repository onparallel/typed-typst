// Converted from test/universe/corpus/iarticle.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  blocks,
  cm,
  define,
  doc,
  external,
  figure,
  importPackage,
  inline,
  label,
  m,
  path,
  pt,
  raw,
  rect,
  ref,
  show,
  space,
  strong,
  sym,
  table,
} from '../../../src/index.ts'

export default () => {
  const iarticle = external('iarticle')
  const appendix = define('appendix').pos('arg1', T.content).returns(T.any).external()
  const iarticle_with = define('with')
    .named('abstract', T.content, [])
    .named('authors', T.any, null)
    .named('lang', T.any, null)
    .named('title', T.content, [])
    .returns(T.any)
    .external(iarticle)
  return doc(
    importPackage('@preview/iarticle:0.1.1', [iarticle, appendix]),
    show(
      iarticle_with({
        lang: 'en',
        title: inline`iarticle---an i18n-capable template inspired by LaTeX article/report`,
        authors: ['Your Name'],
        abstract: inline`${space}iarticle provides two localized Typst templates, ${raw('iarticle')} and ${raw('ireport')},
mirroring the LaTeX ${raw('article')}/${raw('report')} distinction. This starter page is a quick
tour - replace it with your own document.${space}`,
      }),
    ),
    m.heading(1, 'Two templates'),
    inline`${raw('iarticle')} (this one) is flat: it starts at "section", has no chapters, no forced page
breaks, and no automatic table of contents. It's meant for papers and other short documents.`,
    inline`${raw('ireport')} is structured: "chapter" is the top level and each one starts a new page,
sections nest under it, and a table of contents is included by default. Import it the same way,
just with ${raw('ireport')} in place of ${raw('iarticle')}:`,
    inline(
      raw(
        { block: true, lang: 'typst' },
        '#import "@preview/iarticle:0.1.1": ireport\n#show: ireport.with(lang: "ja", title: "...")',
      ),
    ),
    m.heading(2, 'Supported locales'),
    inline`Chapter/section/appendix labels, figure/table captions, and the abstract/contents/references
headings are all localized based on ${raw('lang')}:`,
    inline(
      figure(
        {
          caption: inline`${space}${raw('region')} is also accepted and forwarded to Typst's own ${raw('text')} state,
but doesn't currently pick between locales - neither ${raw('en')} nor ${raw('ja')} is script-ambiguous
the way e.g. Chinese would be.${space}`,
        },
        table(
          { columns: 3 },
          inline(strong(inline`lang`)),
          inline(strong(inline`locale`)),
          inline(strong(inline`l10n file`)),
          inline`en`,
          inline`en`,
          inline(raw('l10n/en.typ')),
          inline`ja`,
          inline`ja`,
          inline(raw('l10n/ja.typ')),
        ),
      ),
    ),
    inline(
      figure(
        {
          caption: inline`${space}Figure/table captions like this one are localized automatically (${raw('show figure.where(kind: ..): set figure(supplement: ..)')})
- replace this rectangle with a real image.${space}`,
        },
        rect({ width: cm(4), height: cm(2.5), stroke: pt(0.5) }),
      ),
    ),
    m.heading(1, 'Fonts'),
    inline`${raw('serif-font')}/${raw('sans-font')} default to ${raw('auto')}: a Latin base, plus a Japanese
CJK addition for ${raw('lang: "ja"')} only - so an English document doesn't warn about missing
Japanese fonts, but a Japanese one does if none are found. Override either at the call site
if your system has different fonts installed.`,
    inline(
      appendix(
        blocks(
          m.heading(1, 'Learn more'),
          inline`This is ${raw('appendix(..)')}: it relabels level-1 headings from "Section" to "Appendix" and
switches numbering to letters. For more detail than fits on this page, see ${raw('README.md')},
the fuller examples in ${raw('samples/')}, and ${raw('l10n/')} for the string tables themselves.`,
          inline`For example, here's a citation, just to demonstrate the mechanism: ${ref(label('knuth1984'))}.
See also ${ref(label('tufte2001'))} for a second one.`,
        ),
      ),
    ),
    inline(bibliography(path('refs.bib'))),
  )
}
