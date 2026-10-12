// Typst 0.15.1 test suite: tests/suite/text/raw.typ, case issue-3191-raw-normal-paragraphs-still-shrink.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// In normal paragraphs, spaces should still be shrunk.
// The first line here serves as a reference, while the second
// uses non-breaking spaces to create an overflowing line
// (which should shrink).
~~~~No shrinking here

~~~~The~spaces~on~this~line~shrink
