// Typst 0.15.1 test suite: tests/suite/text/raw.typ, case raw-line.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(width: 200pt)

```rs
fn main() {
    println!("Hello, world!");
}
```

#show raw.line: it => {
  box(stack(
    dir: ltr,
    box(width: 15pt)[#it.number],
    it.body,
  ))
  linebreak()
}

```rs
fn main() {
    println!("Hello, world!");
}
```
