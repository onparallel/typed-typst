// Typst Universe template @preview/wired-ieee:1.0.1, main.typ.
// By its authors, MIT (https://typst.app/universe/package/wired-ieee).
#import "@preview/wired-ieee:1.0.1": ieee

#show: ieee.with(
  title: [],
  abstract: [],
  index-terms: ("",),
  authors: (
    (
      name: "",
      department: [],
      organization: [],
      location: [],
      email: "",
    ),
  ),
  bibliography: bibliography("refs.bib"),
  lang: "en",
)

= Introduction
