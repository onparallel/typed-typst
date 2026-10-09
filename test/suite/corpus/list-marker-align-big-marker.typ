// Typst 0.15.1 test suite: tests/suite/model/list.typ, case list-marker-align-big-marker.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set list(
  marker: rect(fill: red, width: 10pt, height: 4em),
  marker-align: bottom,
)


#list[]

- abc

- A\ B\ C\ D\ E\ F
