// Typst 0.15.1 test suite: tests/suite/model/figure.typ, case figure-localization-ru.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test Russian
#set text(lang: "ru")

#figure(
    polygon.regular(size: 1cm, vertices: 8),
    caption: [Пятиугольник],
)
