// Typst 0.15.1 test suite: tests/suite/introspection/query.typ, case query-within, attributes: paged html bundle.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// We also want to test in bundle mode to ensure the inner introspector
// correctly forwards the stuff.
#show: it => context if target() == "bundle" {
  document("main.pdf", it)
} else {
  it
}

#let test-selector(selector, ref) = context {
  test(query(selector).map(e => e.body), ref)
}

= #emph[Hi *there*]

What's *up* with *you?*

#figure([Empty], caption: [A *nice* *rect*])

// Test that the within query gracefully handles a case where an insertion
// immediately precedes the end tag.
#quote(footnote[_Hello_])

#context [
  #let loc = here()
  *Local* bold *text*
  #test-selector(
    selector(strong).within(loc),
    ([Local], [text]),
  )
]

#test-selector(
  selector(strong).within(par),
  ([up], [you?], [Local], [text]),
)

#test-selector(
  selector(strong).within(selector.or(heading, emph, figure)),
  ([there], [nice], [rect]),
)

#test-selector(
  selector(strong).within(emph).within(heading),
  ([there],),
)

#test-selector(
  selector(strong).within(heading).within(emph),
  ([there],),
)

#test-selector(
  selector(strong).within(selector(heading).within(emph)),
  (),
)

#test-selector(
  selector.within(emph, quote),
  ([Hello],),
)
