/** A data-driven report: page setup, preamble, heading, table, nested list, user-defined cards, labelled metadata. */
import {
  add,
  auto,
  block,
  data,
  define,
  doc,
  fr,
  grid,
  heading,
  inline,
  label,
  labelled,
  left,
  link,
  m,
  metadata,
  mm,
  page,
  par,
  pct,
  pt,
  rgb,
  right,
  set,
  show,
  strong,
  T,
  table,
  text,
  where,
} from '../src/index.ts'

export interface Report {
  title: string
  author: string
  url: string
  rows: { region: string; revenue: string }[]
  highlights: { name: string; value: string; note: string }[]
}

const gray = rgb('#A0AEC0')

/** A summary card, defined once in the document and called per highlight. */
export const card = define('card')
  .pos('name', T.content)
  .pos('value', T.content)
  .named('note', T.content, [])
  .body(({ name, value, note }) =>
    block(
      { width: pct(100), inset: mm(3), stroke: add(pt(0.5), gray), breakable: false },
      grid({ rows: [auto, mm(12), auto], rowGutter: mm(2) }, strong(name), text({ size: pt(18) }, value), note),
    ),
  )

export const report = (r: Report) =>
  doc(
    set(page, { paper: 'a4', margin: { x: mm(20), y: mm(25) }, numbering: '1 / 1' }),
    set(text, { size: pt(10), lang: 'en' }),
    set(par, { justify: true }),
    show(where(heading, { level: 1 }), set(text, { size: pt(16), weight: 'bold' })),
    show(link, (it) => text({ fill: rgb('#2B6CB0') }, it)),
    card.decl,
    m.heading(1, r.title),
    inline('Prepared by ', strong(r.author), '. Full data at ', link(r.url, 'the dashboard'), '.'),
    table(
      { columns: [fr(1), auto], stroke: add(pt(0.5), gray), align: [left, right] },
      table.header(strong('Region'), strong('Revenue')),
      ...r.rows.flatMap((row) => [row.region, row.revenue]),
    ),
    m.list('Scope', m.item('Sources', m.list('Sales ledger', 'Survey'))),
    grid(
      { columns: [fr(1), fr(1)], gutter: mm(10) },
      ...r.highlights.map((h) => card({ note: h.note }, h.name, h.value)),
    ),
    labelled(metadata(data({ regions: r.rows.map((row) => row.region) })), label('regions')),
  )

/** Data with every character that markup or code could misread. */
export const hostile: Report = {
  title: 'Q3 2026-0042 #@x $z$',
  author: 'ACME Ltd. *b* _e_ [x] <l>',
  url: 'https://example.com/r?id=1',
  rows: [
    { region: 'North #1', revenue: '1,200 €' },
    { region: 'O\'Brien \\ "q" @ 24/7', revenue: '300 €' },
  ],
  highlights: [
    { name: 'Growth', value: '+12%', note: '] #panic("x") [' },
    { name: 'Churn', value: '-3%', note: '// not a comment' },
  ],
}
