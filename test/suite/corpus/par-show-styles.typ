// Typst 0.15.1 test suite: tests/suite/model/par.typ, case par-show-styles.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Variant 2: Prevent recursion by observing a style.
#let revoke = metadata("revoke")
#show par: it => {
  if bibliography.title == revoke { return it }
  set bibliography(title: revoke)
  let p = counter("p")
  par[#p.step()§#context p.display() #it.body]
}

= A

B

C
