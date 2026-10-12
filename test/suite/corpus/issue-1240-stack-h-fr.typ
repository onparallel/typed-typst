// Typst 0.15.1 test suite: tests/suite/layout/stack.typ, case issue-1240-stack-h-fr.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// This issue is sort of horrible: When you write `h(1fr)` in a `stack` instead
// of directly `1fr`, things go awry. To fix this, we now transparently detect
// h/v children.
#stack(dir: ltr, [a], 1fr, [b], 1fr, [c])
#stack(dir: ltr, [a], h(1fr), [b], h(1fr), [c])
