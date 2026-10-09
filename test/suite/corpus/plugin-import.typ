// Typst 0.15.1 test suite: tests/suite/foundations/plugin.typ, case plugin-import, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#import plugin("/assets/plugins/hello.wasm"): hello, double_it

#test(hello(), bytes("Hello from wasm!!!"))
#test(double_it(bytes("hey!")), bytes("hey!.hey!"))
