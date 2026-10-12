#show table.cell: it => "Zz"

#table(
  columns: 2,
  align: left,
  fill: red,
  stroke: blue,
  "AAAAA",
  "BBBBB",
  "A",
  "B",
  table.cell(align: right, "C"),
  "D",
  align(right, "E"),
  "F",
  align(horizon, "G"),
  [A#linebreak();A#linebreak();A],
)
