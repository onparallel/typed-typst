// Converted from test/universe/corpus/min-writing.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  define,
  doc,
  document,
  emph,
  external,
  importPackage,
  inline,
  m,
  pagebreak,
  raw,
  rect,
  set,
  show,
  space,
  strong,
  sym,
} from '../../../src/index.ts'

export default () => {
  const writing = external('writing')
  const boxed = define('boxed').pos('arg1', T.content).returns(T.any).external()
  const mermaid = define('mermaid').pos('arg1', T.any).returns(T.any).external()
  const figure_2 = define('figure')
    .pos('arg1', T.any)
    .named('caption', T.any, null)
    .named('source', T.any, null)
    .returns(T.any)
    .external()
  return doc(
    importPackage('@preview/min-writing:0.1.0', [writing, boxed, mermaid, figure_2]),
    set(document, {
      title: 'Minimal Writings',
      author: 'mayconfmelo',
      description: inline`${space}This example is in quick-note mode, where all content appears on a single, narrow page.
It can also be set to classic paginated mode.${space}`,
    }),
    show(writing),
    '[TOC]',
    m.heading(1, 'Syntax'),
    '|= Unnumbered level 1',
    '|== Unnumbered level 2',
    '|=== Unnumbered level 3',
    '|==== Unnumbered level 4',
    '|===== Unnumbered level 5',
    '|====== Unnumbered level 6',
    inline`${strong(inline`Strong`)} ${emph(inline`Emphasis`)} ${raw('Monospaced')} =Marked= ::Boxed::
:::Underline::: ${sym.space.nobreak}${sym.space.nobreak}Strikethrough${sym.space.nobreak}${sym.space.nobreak}
[^This is a footnote]`,
    inline`This is an """inline quotation""".`,
    inline`> This is a block quotation. > --- Attribution`,
    inline`| ${strong(inline`Centered`)} | ${strong(inline`Left`)} | ${strong(inline`Right`)} | ${strong(inline`None`)}
| | :${sym.dash.em}${sym.dash.em}${sym.dash.en}: | :${sym.dash.em}${sym.dash.em}${sym.dash.en}
| ${sym.dash.em}${sym.dash.em}: | ${sym.dash.em}${sym.dash.em} | | AAAA | AAAA | AAAA | AAAA
| | AAA | AAA | AAA | AAA |`,
    'This is a paragraph. \\\\ This is another paragraph. \\\\\\ This is in another page (when paged)',
    inline(raw({ block: true, lang: 'mermaid' }, 'graph TD\n    A[Start] --> B[Finish]')),
    inline`${sym.dash.em}${sym.dash.en}`,
    m.list(
      m.item(['[ ] Item']),
      m.item(['[X] Item']),
      m.item(['[/] Item']),
      m.item(['[-] Item']),
      m.item(['[!] Item']),
    ),
    m.heading(1, 'Commands'),
    inline(boxed(inline`Boxed`)),
    inline(mermaid(raw({ block: true }, '  graph TD\n    A[Start] --> B[End]'))),
    inline(figure_2({ caption: 'Caption', source: 'Source' }, rect())),
    inline(pagebreak()),
  )
}
