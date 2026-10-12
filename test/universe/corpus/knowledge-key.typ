// Typst Universe template @preview/knowledge-key:1.0.2, main.typ.
// By its authors, MIT-0 (https://typst.app/universe/package/knowledge-key).
#import "@preview/knowledge-key:1.0.2": *

#show: knowledge-key.with(
  title: [Title],
  authors: "Author1, Author2"
)

#include "sections/01-introduction.typ"
#include "sections/02-devops-with-gitlab.typ"
#include "sections/03-terraform.typ"
