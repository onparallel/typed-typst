// Typst 0.15.1 test suite: tests/suite/model/heading.typ, case heading-show-where.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test styling.
#show heading.where(level: 5): it => block(
  text(font: "Roboto", fill: eastern, it.body + [!])
)

= Heading
===== Heading 🌍
#heading(level: 5)[Heading]
