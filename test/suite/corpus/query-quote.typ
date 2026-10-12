// Typst 0.15.1 test suite: tests/suite/introspection/query.typ, case query-quote.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test quoting a query.

#quote[ABC] & #quote[EFG]

#context query(selector(quote).before(here())).first()

#quote(block: true)[HIJ]
#quote(block: true)[KLM]

#context query(selector(quote).before(here())).last()

#quote[NOP] <nop>

#context query(<nop>).first()
