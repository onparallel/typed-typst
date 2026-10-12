// Typst 0.15.1 test suite: tests/suite/introspection/state.typ, case state-multiple-calls-same-key.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Try same key with different initial value.
#context state("key", 2).get()
#state("key").update(x => x + 1)
#context state("key", 2).get()
#context state("key", 3).get()
#state("key").update(x => x + 1)
#context state("key", 2).get()
