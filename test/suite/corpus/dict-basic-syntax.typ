// Typst 0.15.1 test suite: tests/suite/foundations/dict.typ, case dict-basic-syntax.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).

// Empty
#(:)

// Two pairs and string key.
#let dict = (normal: 1, "spacy key": 2)
#dict

#test(dict.normal, 1)
#test(dict.at("spacy key"), 2)
