// Typst 0.15.1 test suite: tests/suite/model/heading.typ, case heading-syntax-at-start.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Heading vs. no heading.

// Parsed as headings if at start of the context.
/**/ = Level 1
#[== Level 2]
#box[=== Level 3]

// Not at the start of the context.
No = heading

// Escaped.
\= No heading
