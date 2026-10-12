// Typst 0.15.1 test suite: tests/suite/model/list.typ, case list-par, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Check whether the contents of list items become paragraphs.
#show par: it => if target() != "html" { highlight(it) } else { it }

#block[
  // No paragraphs.
  - Hello
  - World
]

#block[
  - Hello // Paragraphs

    From
  - World // No paragraph because it's a tight list.
]

#block[
  - Hello // Paragraphs either way

    From

    The

  - World // Paragraph because it's a wide list.
]
