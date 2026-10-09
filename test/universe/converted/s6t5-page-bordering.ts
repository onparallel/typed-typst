// Converted from test/universe/corpus/s6t5-page-bordering.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  align,
  auto,
  blocks,
  bottom,
  codeBlock,
  context,
  counter,
  define,
  doc,
  external,
  fr,
  importPackage,
  inline,
  left,
  let_,
  m,
  page,
  pt,
  set,
  show,
  space,
  sym,
  table,
  text,
  where,
} from '../../../src/index.ts'

export default () => {
  const s6t5PageBordering = external('s6t5-page-bordering')
  const s6t5PageBordering_with = define('with')
    .named('expand', T.any, null)
    .named('footer', T.any, null)
    .named('header', T.any, null)
    .named('margin', T.any, null)
    .named('space-bottom', T.any, null)
    .named('space-top', T.any, null)
    .named('stroke-footer', T.any, null)
    .named('stroke-header', T.any, null)
    .returns(T.any)
    .external(s6t5PageBordering)
  const [headerDecl, header] = let_(
    'header',
    codeBlock(
      [
        set(align, { alignment: bottom }),
        show(where(table.cell, { y: 0 }), set(align, { alignment: left })),
        set(text, { weight: 'bold' }),
      ],
      table(
        { stroke: { y: null }, columns: [fr(0.8), fr(1.4), fr(0.8)], rows: fr(1) },
        table.hline(),
        inline`Document ID`,
        inline`Title`,
        inline`page`,
        inline`PREFIX-12345678`,
        inline`Product Specification document`,
        inline(
          space,
          context((ctx) => counter(page).display(ctx, { both: true }, '1 / 1')),
          space,
        ),
      ),
    ),
  )
  const [footerDecl, footer] = let_(
    'footer',
    codeBlock(
      [set(text, { weight: 'bold' })],
      table(
        { stroke: { y: null }, columns: [fr(0.8), fr(1.4), fr(0.8)], rows: fr(1) },
        inline`PREFIX-12345678`,
        inline`Product Specification document`,
        inline(
          space,
          context((ctx_2) => counter(page).display(ctx_2, { both: true }, '1 / 1')),
          space,
        ),
        table.hline(),
      ),
    ),
  )
  return doc(
    headerDecl,
    m.lines(
      footerDecl,
      importPackage('@preview/s6t5-page-bordering:1.0.0', [s6t5PageBordering]),
      show(
        s6t5PageBordering_with({
          margin: { left: pt(30), right: pt(30), top: pt(60), bottom: pt(60) },
          expand: pt(15),
          spaceTop: pt(15),
          spaceBottom: pt(15),
          strokeHeader: null,
          strokeFooter: null,
          header: header,
          footer: footer,
        }),
      ),
    ),
    m.heading(1, 'Scope'),
    'This specification applies to a product.',
    m.heading(1, 'Model'),
    m.lines('Target is below.', m.list(m.item(['[type1]']), m.item(['[type2]']), m.item(['[type3]']))),
    m.lines(
      m.heading(1, 'Document History'),
      inline(
        table(
          { columns: [auto, auto, auto, fr(1)] },
          inline`Version`,
          inline`Date`,
          inline`Author`,
          inline`Modification`,
          inline`1.0.1`,
          inline`yyyy/mm/dd`,
          inline`Shumpei Tanaka`,
          blocks(
            m.list(
              m.item(['fix', space, sym.space.nobreak, sym.space.nobreak, sym.space.nobreak]),
              m.item(['add aaa']),
            ),
          ),
          inline`1.0.0`,
          inline`yyyy/mm/dd`,
          inline`Shumpei Tanaka`,
          blocks(m.list(m.item(['first vertion']))),
        ),
      ),
    ),
  )
}
