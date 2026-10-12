// Typst 0.15.1 test suite: tests/suite/visualize/gradient.typ, case gradient-text-decoration.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set text(fill: gradient.linear(red, blue))

Hello #underline[World]! \
Hello #overline[World]! \
Hello #strike[World]! \
