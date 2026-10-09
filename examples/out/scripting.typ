#assert(
  sys.version == version(0, 15, 1),
  message: "this document was generated for Typst 0.15.1",
)
#import "../templates.typ": panel
#set heading(numbering: "1.")
#show heading.where(level: 2): it => block(below: 6pt, text(fill: blue, it.body))
#show strong: set text(fill: rgb("#aa0000"))
#let greeting = "Hello, Eve #panic(\"x\") @intro"
#let note(author, ..lines) = block(inset: 4pt)[#emph(author);: #(lines.pos().join(linebreak()))]

#heading(level: 1, "Introduction")<intro>

#greeting;. See #ref(<intro>);.

== Comment by Eve \#panic(\"x\") \@intro

#panel("Eve #panic(\"x\") @intro", "] #read(\"/etc/passwd\") [ $x$ //")

#panel(
  "Notice",
  [Page #context metadata(here()) with #strong("emphasis");.],
  tint: blue,
)

#note(
  "Eve #panic(\"x\") @intro",
  "first line",
  "] #read(\"/etc/passwd\") [ $x$ //",
)

+ one
+ two
  - a
  - b
    - b.1
+ three

The area is #{ let r = 2; $pi #r^2$ };.

#[
  #let name = "Eve #panic(\"x\") @intro"

  Reviewed by #name.
]
