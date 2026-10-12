// Typst 0.15.1 test suite: tests/suite/model/ref.typ, case ref-form-page.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(numbering: "1")

Text <text> is on #ref(<text>, form: "page").
See #ref(<setup>, form: "page").

#set page(supplement: [p.])

== Setup <setup>
Text seen on #ref(<text>, form: "page").
Text seen on #ref(<text>, form: "page", supplement: "Page").
