// Typst 0.15.1 test suite: tests/suite/layout/inline/linebreak.typ, case issue-5235-linebreak-optimized-without-justify.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(width: 207pt, margin: 15pt)
#set text(11pt)

#set par(linebreaks: "simple")
Some texts feature many longer
words. Those are often exceedingly
challenging to break in a visually
pleasing way.

#set par(linebreaks: "optimized")
Some texts feature many longer
words. Those are often exceedingly
challenging to break in a visually
pleasing way.
