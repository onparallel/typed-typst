// Typst 0.15.1 test suite: tests/suite/text/raw.typ, case raw-trimming.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Trimming.

// Space between "rust" and "let" is trimmed.
The keyword ```rust let```.

// Trimming depends on number backticks.
(``) \
(` untrimmed `) \
(``` trimmed` ```) \
(``` trimmed ```) \
(``` trimmed```) \
