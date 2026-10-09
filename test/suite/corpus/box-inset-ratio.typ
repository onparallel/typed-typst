// Typst 0.15.1 test suite: tests/suite/layout/container.typ, case box-inset-ratio, attributes: paged empty.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#let body-width = 10pt
#context for inset in range(10).map(n => n / 10) {
  // If there's infinite available space, then:
  // ```
  // measured-width = body-width + measured-width × inset.
  // ```
  // (not counting truncation errors)
  let (width: measured-width) = measure(
    box(
      // Outset should not affect inset.
      outset: 137pt,
      inset: (left: 100% * inset),
      block(width: body-width)
    ),
    width: auto,
  )
  assert.eq(measured-width, body-width / (1 - inset))
}
