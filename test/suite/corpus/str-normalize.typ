// Typst 0.15.1 test suite: tests/suite/foundations/str.typ, case str-normalize, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test the `normalize` method.
#test("e\u{0301}".normalize(form: "nfc"), "é")
#test("é".normalize(form: "nfd"), "e\u{0301}")
#test("ſ\u{0301}".normalize(form: "nfkc"), "ś")
#test("ſ\u{0301}".normalize(form: "nfkd"), "s\u{0301}")
