// A hand-written template; examples/scripting.ts declares its `panel` function.
#let panel(caption, body, tint: gray) = block(
  width: 100%,
  inset: 6pt,
  stroke: 0.5pt + tint,
  [#strong(caption) \ #body],
)
