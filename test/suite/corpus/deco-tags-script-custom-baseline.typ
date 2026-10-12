// Typst 0.15.1 test suite: tests/suite/pdftags/deco.typ, case deco-tags-script-custom-baseline, attributes: pdftags pdfstandard(ua-1).
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// NOTE: the baseline shift values attribute is inverted.
#set sub(baseline: 2.5pt)
#set super(baseline: -9.5pt)
#sub[sub]
#super[super]
