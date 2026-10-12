// Typst 0.15.1 test suite: tests/suite/model/bibliography.typ, case bibliography-before-content.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test unconventional order.
#set page(width: 200pt)
#bibliography(
  "/assets/bib/works.bib",
  title: [Works to be cited],
  style: "chicago-author-date",
)
#line(length: 100%)

As described by #cite(<netwok>, form: "prose"),
the net-work is a creature of its own.
This is close to piratery! @arrgh
And quark! @quark
