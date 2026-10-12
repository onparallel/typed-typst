// Typst 0.15.1 test suite: tests/suite/text/raw.typ, case issue-5760-disable-cjk-latin-spacing-in-raw.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).

```typ
#let hi = "你好world"
```

#show raw: set text(cjk-latin-spacing: auto)
```typ
#let hi = "你好world"
```
