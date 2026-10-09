// Typst 0.15.1 test suite: tests/suite/introspection/counter.typ, case counter-basic-1.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Count with string key.
#let mine = counter("mine!")

Final: #context mine.final().at(0) \
#mine.step()
First: #context mine.display() \
#mine.update(7)
#context mine.display("1 of 1", both: true) \
#mine.step()
#mine.step()
Second: #context mine.display("I")
#mine.update(n => n * 2)
#mine.step()
