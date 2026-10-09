// Converted from test/universe/corpus/pesha.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  blocks,
  define,
  doc,
  external,
  importPackage,
  inline,
  link,
  lorem,
  m,
  pagebreak,
  show,
  sym,
} from '../../../src/index.ts'

export default () => {
  const pesha = external('pesha')
  const experience = define('experience')
    .pos('arg1', T.content)
    .named('location', T.any, null)
    .named('place', T.any, null)
    .named('time', T.content, [])
    .named('title', T.any, null)
    .returns(T.any)
    .external()
  const pesha_with = define('with')
    .named('address', T.any, null)
    .named('contacts', T.any, null)
    .named('footer-text', T.content, [])
    .named('name', T.any, null)
    .returns(T.any)
    .external(pesha)
  return doc(
    importPackage('@preview/pesha:0.4.0', [pesha, experience]),
    show(
      pesha_with({
        name: 'Trixie B. Argon',
        address: '5419 Hollywood Blvd Ste c731, Los Angeles, CA 90027',
        contacts: [inline`(323) 555 1435`, inline(link('mailto:trixieargon@gmail.com'))],
        footerText: inline`Argon Résumé --- Page${sym.space}`,
      }),
    ),
    m.lines(
      m.heading(3, 'Education'),
      inline(
        experience(
          { place: 'UCLA Anderson School of Management', time: inline`2011--13` },
          blocks(
            m.list(
              m.item(['Cumulative GPA: 3.98']),
              m.item(['Academic interests: real-estate financing, criminal procedure, corporations']),
              m.item(['Henry Murtaugh Award']),
            ),
          ),
        ),
      ),
    ),
    inline(
      experience(
        { place: 'Hartford University', time: inline`2003--07` },
        blocks(
          m.list(
            m.item(['B.A. summa cum laude, Economics']),
            m.item(['Extensive coursework in Astrophysics, Statistics']),
            m.item(['Van Damme Scholarship']),
          ),
        ),
      ),
    ),
    m.lines(
      m.heading(3, 'Business Experience'),
      inline(
        experience(
          {
            place: 'Boxer Bedley & Ball Capital Advisors',
            title: 'Equity analyst',
            time: inline`01/2008--05/2011`,
            location: 'New York City, USA',
          },
          blocks(
            m.list(
              m.item(['Performed independent research on numerous American industries, including:']),
              m.item(['Steelmaking, croquet, semiotics, and butterscotch manufacturing']),
              m.item(['Led company in equities analyzed in two quarters']),
            ),
            inline(lorem(20)),
            inline(lorem(20)),
          ),
        ),
      ),
    ),
    m.lines(
      m.heading(3, 'Other Work Experience'),
      inline(
        experience(
          { place: 'Proximate Cause', title: 'Assistant to the director', time: inline`2007--08` },
          blocks(
            m.list(
              m.item(['Helped devise fundraising campaigns for this innovative nonprofit']),
              m.item(['Handled lunch orders and general errands']),
            ),
          ),
        ),
      ),
    ),
    inline(
      experience(
        { place: 'Hot Topic', title: 'Retail-sales associate', time: inline`02/2004--10/2006` },
        blocks(
          m.list(
            m.item(['Top in-store sales associate in seven out of eight quarters']),
            m.item(['Inventory management']),
            m.item(['Training and recruiting']),
          ),
        ),
      ),
    ),
    inline(pagebreak()),
    m.lines(m.heading(3, lorem(2)), inline(lorem(55))),
  )
}
