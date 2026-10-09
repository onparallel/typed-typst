// Typst 0.15.1 test suite: tests/suite/styling/show-text.typ, case show-text-in-other-show.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Replace worlds but only in lists.
#show list: it => [
  #show "World": [🌎]
  #it
]

World
- World
