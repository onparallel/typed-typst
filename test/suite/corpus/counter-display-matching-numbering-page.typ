// Typst 0.15.1 test suite: tests/suite/introspection/counter.typ, case counter-display-matching-numbering-page.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Counter display should use the page numbering at the location.
#set page(numbering: "(i)", margin: (bottom: 20pt))
#metadata(none) <first>
Second page:
#context counter(page).display(at: <second>)

#set page(
  numbering: "A",
  footer: align(center, {
    "Page: "
    context counter(page).display()
  }),
)
#metadata(none) <second>
First page:
#context counter(page).display(at: <first>)
