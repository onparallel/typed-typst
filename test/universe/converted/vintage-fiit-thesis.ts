// Converted from test/universe/corpus/vintage-fiit-thesis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  block,
  define,
  doc,
  em,
  external,
  figure,
  heading,
  importPackage,
  inline,
  label,
  labelled,
  lorem,
  m,
  pad,
  pagebreak,
  path,
  pt,
  raw,
  ref,
  show,
  space,
  strong,
  table,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const fiitThesis = external('fiit-thesis')
  const sectionAppendices = external('section-appendices')
  const fiitThesis_with = define('with')
    .named('abbreviations-outline', T.any, null)
    .named('abstract', T.any, null)
    .named('acknowledgment', T.content, [])
    .named('author', T.any, null)
    .named('figures-outline', T.any, null)
    .named('id', T.any, null)
    .named('lang', T.any, null)
    .named('style', T.any, null)
    .named('supervisor', T.any, null)
    .named('tables-outline', T.any, null)
    .named('thesis', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(fiitThesis)
  return doc(
    importPackage('@preview/vintage-fiit-thesis:1.1.1', [fiitThesis, sectionAppendices]),
    show(
      fiitThesis_with({
        title: 'Moja záverečná práca',
        thesis: 'bp2',
        author: 'Jožko Mrkvička',
        supervisor: 'prof. Jozef Mrkva, PhD.',
        abstract: { sk: lorem(150), en: lorem(150) },
        id: 'FIIT-12345-123456',
        lang: 'sk',
        acknowledgment: inline`I would like to thank my supervisor for all the help and guidance I have received. I would also
like to thank my friends and family for supporting during this work.`,
        abbreviationsOutline: [
          ['SSL', 'Secure socket layer'],
          ['RISC', 'Reduced instruction set computer'],
          ['ISA', 'Instruction set architecture'],
        ],
        figuresOutline: true,
        tablesOutline: true,
        style: 'legacy',
      }),
    ),
    m.heading(1, 'Introduction'),
    inline(lorem(110)),
    inline(lorem(100)),
    inline(lorem(100)),
    inline(lorem(120)),
    m.heading(1, 'Analysis'),
    m.heading(2, 'Intro to analysis'),
    inline(lorem(250)),
    inline(
      labelled(
        [
          figure(
            { caption: inline`Imagine here FIIT logo in SVG file format for reference.` },
            pad(
              em(2),
              block({ fill: unsafeRaw.code<any>`color.aqua`, width: pt(200), height: pt(100), radius: pt(15) }),
            ),
          ),
          space,
        ],
        label('fiit-logo'),
      ),
    ),
    inline(lorem(150)),
    m.heading(1, 'Implementation'),
    inline(lorem(250)),
    inline(
      labelled(
        [
          figure(
            { caption: inline`This is an example of a code listing in your thesis.` },
            inline(raw({ block: true, lang: 'c' }, 'int main()\n{\n    printf("Hello World!\\n");\n    return 0;\n}')),
          ),
          space,
        ],
        label('c-example'),
      ),
    ),
    m.heading(2, 'Citation example'),
    inline`This is an example of how to reference a paper in your thesis ${ref(label('riscv'))}. Appendices
are the chapters that come at the end, you can reference them too! Here's an example: the source
code for this project is recorded in ${ref(label('source-code'))}.`,
    inline(lorem(150)),
    inline(
      labelled(
        [
          figure(
            { caption: inline`This is an example of a table that you can create using Typst.` },
            table(
              { columns: 2 },
              table.header(inline(strong(inline`Left column`)), inline(strong(inline`Right column`))),
              inline`Some label`,
              inline`Some data`,
              inline`Another label`,
              inline`Another data`,
            ),
          ),
          space,
        ],
        label('c-example'),
      ),
    ),
    inline(lorem(200)),
    m.heading(2, 'Another subject'),
    inline(lorem(100)),
    inline(bibliography(path('citations.bib')), space, pagebreak({ weak: true })),
    show(sectionAppendices),
    inline(labelled(heading({ depth: 1 }, inline('Source code')), label('source-code'))),
    inline(lorem(150)),
    inline(labelled(heading({ depth: 1 }, inline('Plan of work')), label('plan-of-work'))),
    inline(pagebreak()),
  )
}
