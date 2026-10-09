// Typst 0.15.1 test suite: tests/suite/text/raw.typ, case issue-2259-raw-color-overwrite.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test that the color of a raw block is not overwritten
#show raw: set text(fill: blue)

`Hello, World!`

```rs
fn main() {
    println!("Hello, World!");
}
```
