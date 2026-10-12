// Typst 0.15.1 test suite: tests/suite/model/list.typ, case list-marker-bare-hyphen.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test that bare hyphen doesn't lead to cycles and crashes.
#set list(marker: [-])
- Bare hyphen is
- a bad marker
