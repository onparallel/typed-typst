// Typst Universe template @preview/hand-in:1.1.0, main.typ.
// By its authors, MIT-0 (https://typst.app/universe/package/hand-in).
#import "@preview/hand-in:1.1.0": assignment

#set text(font: "TeX Gyre Pagella", lang: "en", region: "au")
#show math.equation: set text(font: "New Computer Modern Math")

#show: assignment.with(
  title: "Assignment 1",
  student: (
    name: "Typst Guy",
    id: 1550003495,
  ),
  subject: (
    name: "Writing with Typst",
    code: "TYP101",
  ),
)

= Question 1
Which of the following are block equations in Typst?
+ ```typ $ $```
+ ```typ $ /* */ $```
+ ```typ $//
  $```

== Answer
I thought this was an introductory Typst course!
