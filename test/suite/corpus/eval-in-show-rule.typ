// Typst 0.15.1 test suite: tests/suite/foundations/eval.typ, case eval-in-show-rule.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#show raw: it => text(font: "PT Sans", eval("[" + it.text + "]"))

Interacting
```
#set text(blue)
Blue #move(dy: -0.15em)[🌊]
```
