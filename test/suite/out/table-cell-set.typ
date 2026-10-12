#set table.cell(align: center)
#show table.cell: it => (it.align, it.fill, it.inset)
#set table.cell(inset: 20pt)

#table(
  row-gutter: 5pt,
  align: left,
  "A",
  table.cell(align: right, "B"),
  table.cell(fill: aqua, "B"),
)
