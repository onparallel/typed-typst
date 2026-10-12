// Typst 0.15.1 test suite: tests/suite/layout/flow/place.typ, case place-float-queued.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(height: 180pt)
#set figure(placement: auto)

#figure(rect(height: 60pt), caption: [I])
#figure(rect(height: 40pt), caption: [II])
#figure(rect(), caption: [III])
A
#figure(rect(), caption: [IV])
