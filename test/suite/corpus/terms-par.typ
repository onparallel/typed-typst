// Typst 0.15.1 test suite: tests/suite/model/terms.typ, case terms-par, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Check whether the contents of term list items become paragraphs.
#show par: it => if target() != "html" { highlight(it) } else { it }

// No paragraphs.
#block[
  / Hello: A
  / World: B
]

#block[
  / Hello: A // Paragraphs

    From
  / World: B // No paragraphs because it's a tight term list.
]

#block[
  / Hello: A // Paragraphs

    From

    The

  / World: B // Paragraph because it's a wide term list.
]
