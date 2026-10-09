// Converted from test/universe/corpus/steady-rvl-slides.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  blocks,
  define,
  doc,
  external,
  fr,
  grid,
  importPackage,
  inches,
  inline,
  m,
  show,
  space,
  strong,
  sym,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const rvlTheme = external('rvl-theme')
  const configInfo = define('config-info')
    .named('date', T.any, null)
    .named('paper_authors', T.content, [])
    .named('paper_venue', T.content, [])
    .named('presenter', T.content, [])
    .named('title', T.content, [])
    .returns(T.any)
    .external()
  const rvlDate = define('rvl-date').pos('arg1', T.any).returns(T.any).external()
  const rvlTitleSlide = define('rvl-title-slide').returns(T.any).external()
  const rvlTheme_with = define('with').pos('arg1', T.any).named('footer', T.any, null).returns(T.any).external(rvlTheme)
  return doc(
    importPackage('@preview/steady-rvl-slides:0.1.0', [rvlTheme, configInfo, rvlDate, rvlTitleSlide]),
    show(
      rvlTheme_with(
        { footer: unsafeRaw.code<any>`self => self.info.institution` },
        configInfo({
          title: inline`Paper Title`,
          presenter: inline`Your Name`,
          paper_authors: inline`First Author, Second Author, Third Author, et al.`,
          paper_venue: inline`ICRA 2026`,
          date: rvlDate('2026-05-03'),
        }),
      ),
    ),
    inline(rvlTitleSlide()),
    m.lines(
      m.heading(1, 'Introduction'),
      m.heading(2, 'Outline'),
      m.list(m.item(['Motivation']), m.item(['Method']), m.item(['Experiment']), m.item(['Conclusion'])),
    ),
    m.lines(
      m.heading(2, 'Motivation'),
      'This theme follows the PPTX geometry:',
      m.list(
        m.item(['Title at top-left']),
        m.item(['Content starts lower (PPT-like)']),
        m.item(['Bottom blue bar + top-right logo']),
        m.item(['Footer: date | center text | page number']),
      ),
    ),
    m.lines(m.heading(1, 'Method'), m.heading(2, 'System Overview'), m.list(m.item([sym.dots.h]))),
    m.lines(
      m.heading(1, 'Experiment'),
      m.heading(2, 'Results'),
      inline(
        grid(
          { columns: [fr(1), fr(1)], gutter: inches(0.35) },
          blocks(
            m.lines(
              inline(strong(inline`Setup`)),
              m.list(m.item(['Dataset:', space, sym.dots.h]), m.item(['Metrics:', space, sym.dots.h])),
            ),
          ),
          blocks(
            m.lines(
              inline(strong(inline`Results`)),
              m.list(m.item(['Accuracy:', space, sym.dots.h]), m.item(['Latency:', space, sym.dots.h])),
            ),
          ),
        ),
      ),
    ),
    m.lines(
      m.heading(1, 'Conclusion'),
      m.heading(2, 'Conclusion'),
      m.list(m.item(['Summary']), m.item(['Future work'])),
    ),
  )
}
