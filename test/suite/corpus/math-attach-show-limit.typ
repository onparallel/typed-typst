// Typst 0.15.1 test suite: tests/suite/math/attach.typ, case math-attach-show-limit, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Show and let rules for limits and scripts
#let eq = $ ∫_a^b iota_a^b $
#eq
#show "∫": math.limits
#show math.iota: math.limits.with(inline: false)
#eq
$iota_a^b$
