// Typst 0.15.1 test suite: tests/suite/foundations/eval.typ, case eval-path-resolve-in-show-rule.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#show raw: it => eval(it.text, mode: "markup")

```
#show emph: image("/assets/images/tiger.jpg", width: 50%)
_Tiger!_
```
