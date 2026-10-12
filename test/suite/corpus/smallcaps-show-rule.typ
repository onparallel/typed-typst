// Typst 0.15.1 test suite: tests/suite/text/smallcaps.typ, case smallcaps-show-rule.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// There is no dedicated smallcaps font in typst-dev-assets, so we just use some
// other font to test this show rule.
#show smallcaps: set text(font: "PT Sans")
#smallcaps[Smallcaps]

#show smallcaps: set text(fill: red)
#smallcaps[Smallcaps]
