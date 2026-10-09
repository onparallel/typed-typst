// Typst 0.15.1 test suite: tests/suite/text/raw.typ, case raw-theme-types.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
```typ
#let hi = "Hello World"
```

#set raw(theme: path("/assets/themes/halcyon.tmTheme"))
```typ
#let hi = "Hello World"
```

#set raw(theme: auto)
```typ
#let hi = "Hello World"
```
