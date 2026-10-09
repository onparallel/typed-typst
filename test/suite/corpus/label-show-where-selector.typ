// Typst 0.15.1 test suite: tests/suite/foundations/label.typ, case label-show-where-selector.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test labelled headings.
#show heading: set text(10pt)
#show heading.where(label: <intro>): underline

= Introduction <intro>
The beginning.

= Conclusion
The end.
