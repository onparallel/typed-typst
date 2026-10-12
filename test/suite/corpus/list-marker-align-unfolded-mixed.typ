// Typst 0.15.1 test suite: tests/suite/model/list.typ, case list-marker-align-unfolded-mixed.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Verify whether overriding vertical alignment causes horizontal alignment to
// be inherited from the context.
#set align(center)
#set list(
  marker-align: top,
  marker: {
    // Artificially cause markers to have a different width.
    counter("b").step()
    context {
      "1" * counter("b").get().first()
    }
  }
)

- abc
- abc
- abc
