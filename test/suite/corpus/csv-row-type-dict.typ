// Typst 0.15.1 test suite: tests/suite/loading/csv.typ, case csv-row-type-dict, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test reading CSV data with dictionary rows enabled.
#let data = csv("/assets/data/zoo.csv", row-type: dictionary)
#test(data.len(), 3)
#test(data.at(0).Name, "Debby")
#test(data.at(2).Weight, "150kg")
#test(data.at(1).Species, "Tiger")
