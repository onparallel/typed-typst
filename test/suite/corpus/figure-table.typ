// Typst 0.15.1 test suite: tests/suite/model/figure.typ, case figure-table.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Testing figures with tables.
#figure(
  table(
    columns: 2,
    [Second cylinder],
    image("/assets/images/cylinder.svg"),
  ),
  caption: "A table containing images."
) <fig-image-in-table>
