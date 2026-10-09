// Typst 0.15.1 test suite: tests/suite/text/raw.typ, case issue-6961-tab-crlf-raw-indent.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#let snippet = (
  ```
  A
    BC
    D
  ```
)

#raw(
  snippet.text.replace("  ", "\t").replace("\n", "\r\n"),
  block: true,
)
