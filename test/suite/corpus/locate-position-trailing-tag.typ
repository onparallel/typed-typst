// Typst 0.15.1 test suite: tests/suite/introspection/locate.typ, case locate-position-trailing-tag.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test locating the position of a tag with no following content.
#context test(here().position().y, 10pt)
#box[]
#v(10pt)
#context test(here().position().y, 20pt)
