// Typst 0.15.1 test suite: tests/suite/scripting/loop.typ, case loop-break-join-in-nested-blocks.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Should output `Hello World 🌎`.
#for _ in range(10) {
  [Hello ]
  [World #{
    [🌎]
    break
  }]
}
