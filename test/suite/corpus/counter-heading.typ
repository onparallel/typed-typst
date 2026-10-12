// Typst 0.15.1 test suite: tests/suite/introspection/counter.typ, case counter-heading.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Count headings.
#set heading(numbering: "1.a.")
#show heading: set text(10pt)
#counter(heading).step()

= Alpha
In #context counter(heading).display()
== Beta

#set heading(numbering: none)
= Gamma
#heading(numbering: "I.")[Delta]

At Beta, it was #context {
  let it = query(heading).find(it => it.body == [Beta])
  counter(heading).display(at: it.location())
}
