// Typst 0.15.1 test suite: tests/suite/text/raw.typ, case raw-highlight-rust.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(width: auto)

```rust
/// A state machine.
#[derive(Debug)]
enum State<'a> { A(u8), B(&'a str) }

fn advance(state: State<'_>) -> State<'_> {
    unimplemented!("state machine")
}
```
