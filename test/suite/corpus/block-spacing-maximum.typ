// Typst 0.15.1 test suite: tests/suite/layout/container.typ, case block-spacing-maximum.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// While we're at it, test the larger block spacing wins.
#set block(spacing: 0pt)
#show raw: set block(spacing: 15pt)
#show list: set block(spacing: 2.5pt)

```rust
fn main() {}
```

- List

Paragraph
