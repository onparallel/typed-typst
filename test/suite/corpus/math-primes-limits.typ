// Typst 0.15.1 test suite: tests/suite/math/primes.typ, case math-primes-limits, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test forcefully attaching primes as limits
$ attach(<, t: ') $
$ <^' $
$ attach(<, b: ') $
$ <_' $

$ limits(x)^' $
$ attach(limits(x), t: ') $
