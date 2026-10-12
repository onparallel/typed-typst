// Typst 0.15.1 test suite: tests/suite/visualize/circle.typ, case circle-beyond-page-width-overflows.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test that sizing a circle beyond the page width correctly overflows the page.
#set page(height: 100pt)
#circle(width: 150%)
