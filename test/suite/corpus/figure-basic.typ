// Typst 0.15.1 test suite: tests/suite/model/figure.typ, case figure-basic, attributes: paged pdftags pdfstandard(ua-1).
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(width: 150pt)
#set figure(numbering: "I")

We can clearly see that @fig-cylinder and
@tab-complex are relevant in this context.

#figure(
  table(columns: 2)[a][b],
  caption: [The basic table.],
) <tab-basic>

#figure(
  pad(y: -6pt, image(alt: "Sketch of white standing cylinder", "/assets/images/cylinder.svg", height: 2cm)),
  caption: [The basic shapes.],
  numbering: "I",
) <fig-cylinder>

#figure(
  table(columns: 3)[a][b][c][d][e][f],
  caption: [The complex table.],
) <tab-complex>
