// Typst 0.15.1 test suite: tests/suite/scripting/ops.typ, case ops-binary-decimal-int, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Operations between decimal and integer.
#test(decimal("2359.123456789123456789001234") + 2, decimal("2361.123456789123456789001234"))
#test(decimal("2359.123456789123456789001234") - 2, decimal("2357.123456789123456789001234"))
#test(decimal("2359.123456789123456789001234") * 2, decimal("4718.246913578246913578002468"))
#test(decimal("2359.123456789123456789001234") / 2, decimal("1179.561728394561728394500617"))
