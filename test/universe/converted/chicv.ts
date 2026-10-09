// Converted from test/universe/corpus/chicv.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  cm,
  codeBlock,
  define,
  doc,
  fr,
  h,
  heading,
  inline,
  line,
  linebreak,
  link,
  lorem,
  m,
  page,
  par,
  pct,
  pt,
  set,
  show,
  strong,
  sym,
  text,
  underline,
  v,
} from '../../../src/index.ts'

export default () => {
  const chiline = define('chiline')
    .returns(T.any)
    .body((p) => codeBlock([v(pt(-3)), line({ length: pct(100) }), v(pt(-5))]))
  return doc(
    show(heading, set(text, { font: 'Linux Biolinum' })),
    show(link, underline),
    set(page, { margin: { x: cm(0.9), y: cm(1.3) } }),
    set(par, { justify: true }),
    chiline.decl,
    m.heading(1, 'Alex Chi'),
    inline`skyzh@cmu.edu | ${link('https://github.com/skyzh', inline`github.com/skyzh`)} | ${link('https://skyzh.dev', inline`skyzh.dev`)}`,
    m.lines(m.heading(2, 'Education'), inline(chiline())),
    m.lines(
      inline`${link('https://typst.app/', inline(strong(inline(lorem(2)))))} ${h(fr(1))} 2333/23 -- 2333/23
${linebreak()} ${lorem(5)} ${h(fr(1))} ${lorem(2)} ${linebreak()}`,
      m.list(m.item([lorem(10)])),
    ),
    m.lines(
      inline`${strong(inline(lorem(2)))} ${h(fr(1))} 2333/23 -- 2333/23 ${linebreak()} ${lorem(5)} ${h(fr(1))}
${lorem(2)} ${linebreak()}`,
      m.list(m.item([lorem(10)])),
    ),
    m.lines(m.heading(2, 'Work Experience'), inline(chiline())),
    m.lines(
      inline`${strong(inline(lorem(2)))} ${h(fr(1))} 2333/23 -- 2333/23 ${linebreak()} ${lorem(5)} ${h(fr(1))}
${lorem(2)} ${linebreak()}`,
      m.list(m.item([lorem(20)]), m.item([lorem(30)]), m.item([lorem(40)])),
    ),
    m.lines(
      inline`${strong(inline(lorem(2)))} ${h(fr(1))} 2333/23 -- 2333/23 ${linebreak()} ${lorem(5)} ${h(fr(1))}
${lorem(2)} ${linebreak()}`,
      m.list(m.item([lorem(20)]), m.item([lorem(30)]), m.item([lorem(40)])),
    ),
    m.lines(m.heading(2, 'Projects'), inline(chiline())),
    m.lines(
      inline`${strong(inline(lorem(2)))} ${h(fr(1))} 2333/23 -- 2333/23 ${linebreak()} ${lorem(5)} ${h(fr(1))}
${lorem(2)} ${linebreak()}`,
      m.list(m.item([lorem(20)]), m.item([lorem(30)]), m.item([lorem(40)])),
    ),
    m.lines(
      inline`${strong(inline(lorem(2)))} ${h(fr(1))} 2333/23 -- 2333/23 ${linebreak()} ${lorem(5)} ${h(fr(1))}
${lorem(2)} ${linebreak()}`,
      m.list(m.item([lorem(20)]), m.item([lorem(30)]), m.item([lorem(40)])),
    ),
  )
}
