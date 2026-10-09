// Typst 0.15.1 test suite: tests/suite/foundations/content.typ, case content-at-default, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test .at() default values for content.
#test(auto, [a].at("doesn't exist", default: auto))
