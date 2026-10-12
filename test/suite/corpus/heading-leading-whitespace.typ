// Typst 0.15.1 test suite: tests/suite/model/heading.typ, case heading-leading-whitespace, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test that leading whitespace and comments don't matter.
#test[= h][=        h]
#test[= h][=   /**/  /**/   h]
#test[= h][=   /*
comment spans lines
*/   h]
