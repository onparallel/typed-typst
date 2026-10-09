// Converted from test/universe/corpus/butterick-resume.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  align,
  center,
  codeBlock,
  context,
  counter,
  define,
  doc,
  em,
  emph,
  external,
  here,
  importPackage,
  inches,
  inline,
  linebreak,
  link,
  m,
  page,
  pt,
  set,
  show,
  space,
  sym,
  text,
  unsafeRaw,
  upper,
} from '../../../src/index.ts'

export default () => {
  const template = external('template')
  const introduction = define('introduction')
    .named('details', T.content, [])
    .named('name', T.content, [])
    .returns(T.any)
    .external()
  const twoGrid = define('two-grid')
    .named('left', T.content, [])
    .named('right', T.content, [])
    .returns(T.any)
    .external()
  return doc(
    importPackage('@preview/butterick-resume:0.1.1', [template, introduction, twoGrid]),
    show(template),
    set(page, {
      footer: codeBlock(
        [set(align, { alignment: center }), set(text, { font: 'Source Sans 3', size: pt(10), tracking: em(0.1) })],
        context((ctx) =>
          upper(
            inline`Argon Résumé --- Page ${here(ctx).page()} of ${unsafeRaw.code<any>`counter(page).final().first()`}`,
          ),
        ),
      ),
      footerDescent: inches(0.75),
    }),
    inline(
      introduction({
        name: inline`Trixie B. Argon`,
        details: inline`${space}5419 Hollywood Blvd Ste. C731, Los Angeles CA 90027 ${linebreak()} ${link('tel:+13235551435', inline`(323) 555 1435`)}
${link('mailto:trixieargon@gmail.com')}${space}`,
      }),
    ),
    m.lines(
      m.heading(1, 'Education'),
      inline(twoGrid({ left: inline`UCLA Anderson School of Management`, right: inline`2011--13` })),
      m.list(
        m.item(['Cumulative GPA: 3.98']),
        m.item(['Academic interests: real-estate financing, criminal procedure, corporations']),
        m.item(['Henry Murtaugh Award']),
      ),
    ),
    m.lines(
      inline(twoGrid({ left: inline`Hartford University`, right: inline`2003--07` })),
      m.list(
        m.item(['B.A.', space, emph(inline`summa cum laude`), ', Economics']),
        m.item(['Extensive coursework in Astrophysics, Statistics']),
        m.item(['Van Damme Scholarship']),
      ),
    ),
    m.lines(
      m.heading(1, 'Business experience'),
      inline(
        twoGrid({ left: inline`Boxer Bedley & Ball Capital Advisors`, right: inline`2008--11` }),
        space,
        emph(inline`Equity analyst`),
      ),
      m.list(
        m.item(['Performed independent research on numerous American industries, including:']),
        m.item(['Steelmaking, croquet, semiotics, and butterscotch manufacturing']),
        m.item(['Led company in equities analyzed in two quarters']),
      ),
    ),
    m.lines(
      m.heading(1, 'Other work experience'),
      inline(
        twoGrid({ left: inline`Proximate Cause`, right: inline`2007--08` }),
        space,
        emph(inline`Assistant to the director`),
      ),
      m.list(
        m.item(['Helped devise fundraising campaigns for this innovative nonprofit']),
        m.item(['Handled lunch orders and general errands']),
      ),
    ),
    m.lines(
      inline(
        twoGrid({ left: inline`Hot Topic`, right: inline`2004--06` }),
        space,
        emph(inline`${space}Retail-sales associate${space}`),
      ),
      m.list(
        m.item(['Top in-store sales associate in seven out of eight quarters']),
        m.item(['Inventory management']),
        m.item(['Training and recruiting']),
      ),
    ),
  )
}
