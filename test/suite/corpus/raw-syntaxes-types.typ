// Typst 0.15.1 test suite: tests/suite/text/raw.typ, case raw-syntaxes-types, attributes: paged empty.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#let sublime-syntax = ```yaml
%YAML 1.2
```.text + "\n---\n" + ```yaml
name: lang
file_extensions:
  - a
scope: source
contexts:
  main:
    - match: ''
```.text

#set raw(syntaxes: "/assets/syntaxes/SExpressions.sublime-syntax")
#set raw(syntaxes: path("/assets/syntaxes/SExpressions.sublime-syntax"))
#set raw(syntaxes: (
  path("/assets/syntaxes/SExpressions.sublime-syntax"),
  bytes(sublime-syntax),
))
