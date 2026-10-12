// Typst 0.15.1 test suite: tests/suite/visualize/rect.typ, case issue-3264-rect-negative-dimensions.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Negative dimensions
#rect(width: -1cm, fill: gradient.linear(red, blue))[Reverse left]

#rect(width: 1cm, fill: gradient.linear(red, blue))[Left]

#align(center, rect(width: -1cm, fill: gradient.linear(red, blue))[Reverse center])

#align(center, rect(width: 1cm, fill: gradient.linear(red, blue))[Center])

#align(right, rect(width: -1cm, fill: gradient.linear(red, blue))[Reverse right])

#align(right, rect(width: 1cm, fill: gradient.linear(red, blue))[Right])
