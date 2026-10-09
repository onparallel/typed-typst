// Typst 0.15.1 test suite: tests/suite/math/delimited.typ, case math-lr-mid-size, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test mid when lr size is set.
#show: it => context {
  set page(width: auto) if target() == "paged"
  it
}

$ lr({ A mid(|) integral }) quad
  lr(size: #1em, { A mid(|) integral }) quad
  lr(size: #(1em+20%), { A mid(|) integral }) \

  lr(] A mid(|) integral ]) quad
  lr(size: #1em, ] A mid(|) integral ]) quad
  lr(size: #(1em+20%), ] A mid(|) integral ]) \

  lr(( A mid(|) integral ]) quad
  lr(size: #1em, ( A mid(|) integral ]) quad
  lr(size: #(1em+20%), ( A mid(|) integral ]) $
