// Typst 0.15.1 test suite: tests/suite/loading/cbor.typ, case cbor-encode-bytes, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#let value = bytes("Typst")
#test(cbor(cbor.encode(value)), value)
