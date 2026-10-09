#set grid.cell(align: center)
#show grid.cell: it => (it.align, it.fill, it.inset)
#set grid.cell(inset: 20pt)

#grid(
  row-gutter: 5pt,
  align: left,
  "A",
  grid.cell(align: right, "B"),
  grid.cell(fill: aqua, "B"),
)
