// Typst 0.15.1 test suite: tests/suite/loading/csv.typ, case csv.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test reading CSV data.
#set page(width: auto)
#let data = csv("/assets/data/zoo.csv")
#let cells = data.at(0).map(strong) + data.slice(1).flatten()
#table(columns: data.at(0).len(), ..cells)

// Test reading through path type.
#let data-from-path = csv(path("/assets/data/zoo.csv"))
#test(data-from-path, data)
