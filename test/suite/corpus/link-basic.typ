// Typst 0.15.1 test suite: tests/suite/model/link.typ, case link-basic, attributes: paged html pdftags pdfstandard(ua-1).
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Link syntax.
https://example.com/

// Link with body.
#link("https://typst.org/")[Some text text text]

// With line break.
This link appears #link("https://google.com/")[in the middle of] a paragraph.

// Certain prefixes are trimmed when using the `link` function.
Contact #link("mailto:hi@typst.app") or
call #link("tel:123") for more information.
