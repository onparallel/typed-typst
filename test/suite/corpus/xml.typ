// Typst 0.15.1 test suite: tests/suite/loading/xml.typ, case xml, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test reading XML data.
#let data = xml("/assets/data/hello.xml")
#test(data, ((
  namespace: none,
  tag: "data",
  attrs: (:),
  children: (
    "\n  ",
    (namespace: none, tag: "hello", attrs: (name: "hi"), children: ("1",)),
    "\n  ",
    (
      namespace: none,
      tag: "data",
      attrs: (:),
      children: (
        "\n    ",
        (namespace: none, tag: "hello", attrs: (:), children: ("World",)),
        "\n    ",
        (namespace: none, tag: "hello", attrs: (:), children: ("World",)),
        "\n  ",
      ),
    ),
    "\n",
  ),
),))

// Test reading through path type.
#let data-from-path = xml(path("/assets/data/hello.xml"))
#test(data-from-path, data)
