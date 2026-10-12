// Typst 0.15.1 test suite: tests/suite/text/lorem.typ, case lorem-pars.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test custom paragraphs with user code.
#set text(8pt)

#{
  let sentences = lorem(59)
    .split(".")
    .filter(s => s != "")
    .map(s => s + ".")

  let used = 0
  for s in sentences {
    if used < 2 {
      used += 1
    } else {
      parbreak()
      used = 0
    }
    s.trim()
    [ ]
  }
}
