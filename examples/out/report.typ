#set page(paper: "a4", margin: (x: 20mm, y: 25mm), numbering: "1 / 1")
#set text(size: 10pt, lang: "en")
#set par(justify: true)
#show heading.where(level: 1): set text(weight: "bold", size: 16pt)
#show link: it => text(fill: rgb("#2B6CB0"), it)
#let card(name, value, note: []) = block(
  width: 100%,
  breakable: false,
  stroke: 0.5pt + rgb("#A0AEC0"),
  inset: 3mm,
  grid(
    rows: (auto, 12mm, auto),
    row-gutter: 2mm,
    strong(name),
    text(size: 18pt, value),
    note,
  ),
)

= Q3 2026-0042 \#\@x \$z\$

Prepared by #strong("ACME Ltd. *b* _e_ [x] <l>");. Full data at #link("https://example.com/r?id=1", "the dashboard");.

#table(
  columns: (1fr, auto),
  align: (left, right),
  stroke: 0.5pt + rgb("#A0AEC0"),
  table.header(strong("Region"), strong("Revenue")),
  "North #1",
  "1,200 €",
  "O'Brien \\ \"q\" @ 24/7",
  "300 €",
)

- Scope
- Sources
  - Sales ledger
  - Survey

#grid(
  columns: (1fr, 1fr),
  gutter: 10mm,
  card("Growth", "+12%", note: "] #panic(\"x\") ["),
  card("Churn", "-3%", note: "// not a comment"),
)

#metadata(("regions": ("North #1", "O'Brien \\ \"q\" @ 24/7")))<regions>
