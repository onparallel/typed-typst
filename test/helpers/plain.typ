// Plain text of content, for comparing what a document shows with the data
// that went in. Whitespace that the printer adds around block content (a
// newline after `[` and before `]`) gives `space` elements at the edges of a
// sequence; those are dropped.
#let plain(c) = {
  let space = [ ].func()
  if type(c) == str { return c }
  if type(c) != content { return repr(c) }
  let f = c.func()
  // `text`, and `symbol` (what a markup escape like `\#` gives).
  if c.has("text") and type(c.text) == str { return c.text }
  if f == space { return " " }
  if f == linebreak { return "\n" }
  if f == parbreak { return "" }
  if c.has("children") {
    let ch = c.children
    if ch.len() > 0 and ch.first().func() == space { ch = ch.slice(1) }
    if ch.len() > 0 and ch.last().func() == space { ch = ch.slice(0, -1) }
    return ch.map(plain).join("", default: "")
  }
  if c.has("body") { return plain(c.body) }
  if c.has("child") { return plain(c.child) }
  "<" + repr(f) + ">"
}
