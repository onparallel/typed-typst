// Typst Universe template @preview/vocabulo:0.2.0, main.typ.
// By its authors, MIT (https://typst.app/universe/package/vocabulo).
#import "@preview/vocabulo:0.2.0": *

#let words = (
  ("hello", "hallo"),
  ("goodbye", "auf Wiedersehen"),
)

#show: vocabulo(words, ("English", "German"))
