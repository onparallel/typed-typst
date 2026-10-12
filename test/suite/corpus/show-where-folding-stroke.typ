// Typst 0.15.1 test suite: tests/suite/styling/show-where.typ, case show-where-folding-stroke.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test again that folding is taken into account.
#set rect(width: 40pt, height: 10pt)
#set rect(stroke: blue)
#set rect(stroke: 2pt)

#{
  show rect.where(stroke: blue): "Not Triggered"
  rect()
}
#{
  show rect.where(stroke: 2pt): "Not Triggered"
  rect()
}
#{
  show rect.where(stroke: 2pt + blue): "Triggered"
  rect()
}
