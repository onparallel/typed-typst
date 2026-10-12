// Typst Universe template @preview/tufted:0.1.1, config.typ.
// By its authors, MIT (https://typst.app/universe/package/tufted).
#import "@preview/tufted:0.1.1"

#let template = tufted.tufted-web.with(
  header-links: (
    "/": "Home",
    "/docs/": "Docs",
    "/blog/": "Blog",
    "/cv/": "CV",
  ),
  title: "Tufted",
)
