// Typst 0.15.1 test suite: tests/suite/model/bibliography.typ, case bibliography-indent-par.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Ensure that an indent-based bibliography does not produce paragraphs.
#show par: highlight

@Zee04
@keshav2007read

#bibliography("/assets/bib/works_too.bib", style: "mla")
