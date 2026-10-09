// Typst 0.15.1 test suite: tests/suite/pdftags/list.typ, case list-tags-terms-label-with-parbreak, attributes: pdftags.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// This currently produces an empty paragraph, because terms label is moved out
// of the broken paragraph when constructing the PDF list structure. This only
// happens when tags are broken up, so it's not *that* bad.
/ A #parbreak() A: 1
/ B: 2
