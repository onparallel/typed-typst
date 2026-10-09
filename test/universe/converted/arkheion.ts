// Converted from test/universe/corpus/arkheion.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  auto,
  bibliography,
  center,
  cite,
  define,
  doc,
  external,
  figure,
  image,
  importPackage,
  inline,
  label,
  labelled,
  link,
  lorem,
  m,
  math,
  path,
  pct,
  pt,
  raw,
  ref,
  set,
  show,
  space,
  strong,
  table,
  underline,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const arkheion = external('arkheion')
  const arkheionAppendices = external('arkheion-appendices')
  const arkheion_with = define('with')
    .named('abstract', T.any, null)
    .named('authors', T.any, null)
    .named('date', T.any, null)
    .named('keywords', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(arkheion)
  return doc(
    importPackage('@preview/arkheion:0.1.2', [arkheion, arkheionAppendices]),
    m.lines(
      show(
        arkheion_with({
          title: 'Typst Template for arXiv',
          authors: [
            { name: 'Author 1', email: 'user@domain.com', affiliation: 'Company', orcid: '0000-0000-0000-0000' },
            { name: 'Author 2', email: 'user@domain.com', affiliation: 'Company' },
          ],
          abstract: lorem(55),
          keywords: ['First keyword', 'Second keyword', 'etc.'],
          date: 'May 16, 2023',
        }),
      ),
      set(cite, { style: 'chicago-author-date' }),
      show(link, underline),
    ),
    m.lines(m.heading(1, 'Introduction'), inline(lorem(60))),
    m.lines(m.heading(1, 'Heading: first level'), inline(lorem(20))),
    m.lines(m.heading(2, 'Heading: second level'), inline(lorem(20))),
    m.heading(3, 'Heading: third level'),
    m.lines(m.heading(4, 'Paragraph'), inline(lorem(20))),
    inline(lorem(20)),
    m.heading(1, 'Math'),
    inline`${strong(inline`Inline:`)} Let ${unsafeRaw.math`a`}, ${unsafeRaw.math`b`}, and ${unsafeRaw.math`c`}
be the side lengths of right-angled triangle. Then, we know that: ${unsafeRaw.math`a^2 + b^2 = c^2`}`,
    inline(strong(inline`Block without numbering:`)),
    inline(
      math.equation(
        { block: true, numbering: null },
        inline(space, unsafeRaw.math.block`sum_(k=1)^n k = (n(n+1)) / 2`, space),
      ),
    ),
    inline(strong(inline`Block with numbering:`)),
    inline`As shown in ${ref(label('equation'))}.`,
    inline(labelled([unsafeRaw.math.block`sum_(k=1)^n k = (n(n+1)) / 2`, space], label('equation'))),
    m.lines(
      inline(strong(inline`More information:`)),
      m.list(m.item([link('https://typst.app/docs/reference/math/equation/')])),
    ),
    m.heading(1, 'Citation'),
    inline`You can use citations by using the ${raw('#cite')} function with the key for the reference and
adding a bibliography. Typst supports BibLateX and Hayagriva.`,
    inline(raw({ block: true, lang: 'typst' }, '#bibliography("bibliography.bib")')),
    inline`Single citation ${ref(label('Vaswani2017AttentionIA'))}. Multiple citations ${ref(label('Vaswani2017AttentionIA'))}
${ref(label('hinton2015distilling'))}. In text ${cite({ form: 'prose' }, label('Vaswani2017AttentionIA'))}`,
    m.lines(
      inline(strong(inline`More information:`)),
      m.list(
        m.item([link('https://typst.app/docs/reference/meta/bibliography/')]),
        m.item([link('https://typst.app/docs/reference/meta/cite/')]),
      ),
    ),
    m.heading(1, 'Figures and Tables'),
    inline(
      labelled(
        [
          figure(
            { caption: inline(lorem(5)) },
            table(
              { align: center, columns: [auto, auto], rowGutter: [pt(2), auto], stroke: pt(0.5), inset: pt(5) },
              inline`header 1`,
              inline`header 2`,
              inline`cell 1`,
              inline`cell 2`,
              inline`cell 3`,
              inline`cell 4`,
            ),
          ),
          space,
        ],
        label('table'),
      ),
    ),
    inline(
      labelled(
        [figure({ caption: inline(lorem(7)) }, image({ width: pct(30) }, path('image.png'))), space],
        label('figure'),
      ),
    ),
    inline(strong(inline`More information`)),
    m.list(
      m.item([link('https://typst.app/docs/reference/meta/figure/')]),
      m.item([link('https://typst.app/docs/reference/layout/table/')]),
    ),
    m.heading(1, 'Referencing'),
    inline`${ref(label('figure'))} ${lorem(10)}, ${ref(label('table'))}.`,
    inline(strong(inline`More information:`)),
    m.list(m.item([link('https://typst.app/docs/reference/meta/ref/')])),
    m.heading(1, 'Lists'),
    inline(strong(inline`Unordered list`)),
    m.list(m.item([lorem(10)]), m.item([lorem(8)])),
    inline(strong(inline`Numbered list`)),
    m.enum(m.item([lorem(10)]), m.item([lorem(8)]), m.item([lorem(12)])),
    m.lines(
      inline(strong(inline`More information:`)),
      m.list(
        m.item([link('https://typst.app/docs/reference/layout/enum/')]),
        m.item([link('https://typst.app/docs/reference/meta/cite/')]),
      ),
    ),
    inline(bibliography(path('bibliography.bib'))),
    m.lines(show(arkheionAppendices), m.heading(1)),
    m.heading(2, 'Appendix section'),
    inline(lorem(100)),
  )
}
