// Typst 0.15.1 test suite: tests/suite/model/bibliography.typ, case bibliography-grid-par.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Ensure that a grid-based bibliography does not produce paragraphs.
#show par: highlight

@Zee04
@keshav2007read

#bibliography("/assets/bib/works_too.bib")
