// Typst 0.15.1 test suite: tests/suite/loading/json.typ, case json, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test reading JSON data.
#let data = json("/assets/data/zoo.json")
#test(data.len(), 3)
#test(data.at(0).name, "Debby")
#test(data.at(2).weight, 150)

// Test reading through path type.
#let data-from-path = json(path("/assets/data/zoo.json"))
#test(data-from-path, data)
