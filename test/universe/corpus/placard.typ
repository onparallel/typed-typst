// Typst Universe template @preview/placard:0.1.0, main.typ.
// By its authors, MIT (https://typst.app/universe/package/placard).

#import "@preview/placard:0.1.0": card, placard

#show: placard.with(
  title: "Poster Title",
  authors: ("Author 1", "Author 2"),
  margin: (top: 3cm),

  footer: (
    content: [Institute XYZ],
  ),
)

#card(title: "Abstract")[
  #lorem(55)

]

#colbreak()

#card(title: "Methodology")[
  #lorem(20)
]
