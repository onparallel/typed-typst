// Typst 0.15.1 test suite: tests/suite/scripting/get-rule.typ, case get-rule-figure-caption-collision, attributes: paged empty.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// We have one collision: `figure.caption` could be both the element and a get
// rule for the `caption` field, which is settable. We always prefer the
// element. It's unfortunate, but probably nobody writes
// `set figure(caption: ..)` anyway.
#test(type(figure.caption), function)
#context test(type(figure.caption), function)
