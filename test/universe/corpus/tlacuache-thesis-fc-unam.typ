// Typst Universe template @preview/tlacuache-thesis-fc-unam:0.1.2, main.typ.
// By its authors, MIT (https://typst.app/universe/package/tlacuache-thesis-fc-unam).
#import "@preview/tlacuache-thesis-fc-unam:0.1.2": thesis

#show: thesis.with(
  titulo: [Titulo],
  autor: [Autor],
  asesor: [Asesor],
  bibliography: bibliography("references.bib"),
)

#include "capitulo1.typ"
