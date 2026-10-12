// Typst 0.15.1 test suite: tests/suite/model/list.typ, case list-indent-trivia-nesting, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test indent nesting behavior with odd trivia (comments and spaces). The
// comments should _not_ affect the nesting. Only the final column matters.

#let indented = [
- a
 /**/- b
/**/ - c
   /*spanning
     multiple
      lines */ - d
    - e
/**/       - f
/**/  - g
]

#let item = list.item
#let manual = {
  [ ]
  item({
    [a]
    [ ]
    item[b]
    [ ]; [ ]
    item({
      [c]
      [ ]; [ ]
      item[d]
    })
    [ ]
    item({
      [e]
      [ ]; [ ]
      item[f]
      [ ]; [ ]
      item[g]
    })
  })
  [ ]
}

#test(indented, manual)
