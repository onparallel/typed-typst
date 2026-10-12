// Typst 0.15.1 test suite: tests/suite/text/raw.typ, case raw-highlight-typm-idents.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Highlighting identifiers, field accesses and function calls in math
#set page(width: auto)
```typm
hello
hello-world
hello()
box[]
hello.world
hello.world()
hello-world()
hello_world()
hello.my.world()
emph(hello.my.world())
emph(hello.my().world)
emph(hello.my().world())
emph (hello.my().world())
#hello
#hello()
#hello.world
#hello.world()
#box[]
```
