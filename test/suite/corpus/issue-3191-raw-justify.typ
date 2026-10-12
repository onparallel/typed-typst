// Typst 0.15.1 test suite: tests/suite/text/raw.typ, case issue-3191-raw-justify.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Raw blocks should not be justified by default.
```
a b c --------------------
```

#show raw: set par(justify: true)
```
a b c --------------------
```
