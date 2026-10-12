// Typst 0.15.1 test suite: tests/suite/model/cite.typ, case cite-group, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
A#[@netwok@arrgh]B \
A@netwok@arrgh B \
A@netwok @arrgh B \
A@netwok @arrgh. B \

A @netwok#[@arrgh]B \
A @netwok@arrgh, B \
A @netwok @arrgh, B \
A @netwok @arrgh. B \

A#[@netwok @arrgh @quark]B. \
A @netwok @arrgh @quark B. \
A @netwok @arrgh @quark, B.

#show bibliography: it => if target() == "html" { it }
#bibliography("/assets/bib/works.bib", style: "american-physics-society")
