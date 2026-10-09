// Typst 0.15.1 test suite: tests/suite/introspection/counter.typ, case counter-display-at.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test displaying counter at a given location.
#set heading(numbering: "1.1")

= One
#figure(
  numbering: (..nums) => numbering(
    "1.a",
    ..((counter(heading).get().first(),) + nums.pos()),
  ),
  caption: [A blah]
)[BLAH] <blah>

= Two
#context [
  #let fig = query(<blah>).first()
  // Displaying at the figure's location is correct.
  #fig.counter.display(at: fig.location()) \
  // The manual version does not provide the correct context for resolving the
  // heading counter.
  #numbering(fig.numbering, ..fig.counter.at(fig.location())) \
  // Displaying with the numbering, but at the current location works, but does
  // not give a useful result.
  #fig.counter.display(fig.numbering) \
]
