// Typst 0.15.1 test suite: tests/suite/foundations/plugin.typ, case plugin-transition, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#let empty = plugin("/assets/plugins/hello-mut.wasm")
#test(str(empty.get()), "[]")

#let hello = plugin.transition(empty.add, bytes("hello"))
#test(str(empty.get()), "[]")
#test(str(hello.get()), "[hello]")

#let world = plugin.transition(empty.add, bytes("world"))
#let hello_you = plugin.transition(hello.add, bytes("you"))

#test(str(empty.get()), "[]")
#test(str(hello.get()), "[hello]")
#test(str(world.get()), "[world]")
#test(str(hello_you.get()), "[hello, you]")

#let hello2 = plugin.transition(empty.add, bytes("hello"))
#test(hello == world, false)
#test(hello == hello2, true)
