// Typst 0.15.1 test suite: tests/suite/loading/json.typ, case issue-3363-json-large-number.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Big numbers (larger than what i64 can store) should just lose some precision
// but not overflow
#let bignum = json("/assets/data/big-number.json")
#bignum
