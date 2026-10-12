// Typst 0.15.1 test suite: tests/suite/text/raw.typ, case raw-syntaxes.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(width: 180pt)
#set text(6pt)
#set raw(syntaxes: "/assets/syntaxes/SExpressions.sublime-syntax")

```sexp
(defun factorial (x)
  (if (zerop x)
    ; with a comment
    1
    (* x (factorial (- x 1)))))
```
