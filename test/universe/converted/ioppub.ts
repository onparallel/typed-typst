// Converted from test/universe/corpus/ioppub.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  define,
  dict,
  doc,
  external,
  figure,
  heading,
  image,
  importPackage,
  inline,
  label,
  labelled,
  lorem,
  m,
  path,
  ref,
  show,
  space,
  sym,
  table,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const ioppub = external('ioppub')
  const appendix = external('appendix')
  const ioppub_with = define('with')
    .named('abstract', T.any, null)
    .named('authors', T.any, null)
    .named('institutions', T.any, null)
    .named('keywords', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(ioppub)
  return doc(
    importPackage('@preview/ioppub:0.1.1', [ioppub, appendix]),
    show(
      ioppub_with({
        title: 'Article Title',
        keywords: ['IOP Publishing', 'Typst', 'Template'],
        authors: [
          {
            name: ['John', 'Doe'],
            institutions: ['1'],
            corresponding: true,
            orcid: '0000-0001-2345-6789',
            email: 'john.doe@example.com',
          },
          { name: ['Jane', 'Rue'], institutions: ['2'], orcid: '0000-0001-2345-6789', email: 'jane.rue@example.com' },
        ],
        institutions: dict({
          '1': inline`Department One, Institution One, City One, Country One`,
          '2': inline`Department Two, Institution Two, City Two, Country Two`,
        }),
        abstract:
          'Sample text inserted for illustration. Replace with abstract text. Your abstract should give readers a brief summary of your article. It should concisely describe the contents of your article, and include key terms. It should be informative, accessible and not only indicate the general scope of the article but also state the main results obtained and conclusions drawn. The abstract should be complete in itself; it should not contain undefined abbreviations and no table numbers, figure numbers, references or equations should be referred to. It should be suitable for direct inclusion in abstracting services and should not normally be more than 300 words.',
      }),
    ),
    m.heading(1, 'Introduction'),
    inline(
      lorem(50),
      space,
      labelled(
        unsafeRaw.math.block`f_j^((k+1)) = f_j^((k)) product_i (g_i / sum_l H_(i l) f_l^((k)))^(lambda H_(i j)).`,
        label('eq:intro1'),
      ),
    ),
    inline`Equation ${ref(label('eq:intro1'))} shows an example of an equation in the introduction ${ref(label('a2020'))}.`,
    inline`${lorem(50)}:`,
    m.list(m.item([lorem(10)]), m.item([lorem(10)]), m.item([lorem(10)])),
    inline(lorem(50)),
    m.lines(
      m.heading(2, 'Section'),
      inline`${lorem(40)} ${ref(label('a2020'))} ${ref(label('b2019'))} ${ref(label('c2024'))}.`,
    ),
    m.lines(m.heading(3, 'Subsection'), inline(lorem(40))),
    m.heading(1, 'Methodology'),
    inline(lorem(40)),
    m.lines(m.heading(2, 'Section'), inline`${lorem(150)} (See Fig. ${ref(label('fig:figure1'))}).`),
    inline(
      labelled(
        [
          figure(
            {
              caption: inline`All figures must have a caption. Provide a short description of the figure, including the key
points illustrated by the image. The caption must also reference the source of the figure if
the figure has been reused from elsewhere, including any permission statement required.`,
            },
            image(path('images/typst-logo.svg')),
          ),
          space,
        ],
        label('fig:figure1'),
      ),
    ),
    inline(lorem(100)),
    m.heading(2, 'Section'),
    inline`${lorem(150)} (see Table ${ref(label('tab:table1'))}).`,
    inline(
      labelled(
        [
          figure(
            {
              caption: inline`All tables must have a caption. Provide a short description of the table, including the key
points illustrated by the data.`,
            },
            table(
              { columns: 4 },
              table.header(
                inline`Column heading`,
                inline`Column heading`,
                inline`Column heading`,
                inline`Column heading`,
              ),
              inline`Data Row 1`,
              inline`1.0`,
              inline`1.5`,
              inline`2.0`,
              inline`Data Row 2`,
              inline`2.0`,
              inline`2.5`,
              inline`3.0`,
              inline`Data Row 3`,
              inline`3.0`,
              inline`3.5`,
              inline`4.0`,
              table.hline(),
            ),
          ),
          space,
        ],
        label('tab:table1'),
      ),
    ),
    m.heading(1, 'Results and Discussion'),
    inline`${lorem(150)} (see Fig.${sym.space.nobreak}${ref(label('fig:figure2'))}).`,
    inline(
      labelled(
        [figure({ caption: inline(lorem(20)), scope: 'parent' }, image(path('images/typst-logo.svg'))), space],
        label('fig:figure2'),
      ),
    ),
    m.heading(1, 'Conclusion'),
    inline(lorem(40)),
    m.enum(m.item([lorem(15)]), m.item([lorem(15)])),
    m.lines('Future work will focus on:', m.list(m.item([lorem(10)]), m.item([lorem(10)]))),
    inline(heading({ numbering: null }, inline`Acknowledgments`)),
    'This work was supported by the Example Society Grant No. 12345678. The authors thank Dr. Example Collaborator for helpful discussions.',
    inline(heading({ numbering: null }, inline`Data Availability`)),
    'The data that support the findings of this study are available from the corresponding author upon reasonable request.',
    inline(bibliography({ style: 'institute-of-physics-numeric' }, path('ref.bib'))),
    show(appendix),
    m.heading(1, 'Appendix'),
    inline`${lorem(20)} (see Eq.${sym.space.nobreak}${ref(label('eq:app-eq1'))}).`,
    inline(labelled([unsafeRaw.math.block`y = x^2`, space], label('eq:app-eq1'))),
    m.heading(1, 'Appendix'),
    inline`${lorem(20)} (see Eq.${sym.space.nobreak}${ref(label('eq:app-eq2'))}).`,
    inline(labelled([unsafeRaw.math.block`y = exp(x/(2a))`, space], label('eq:app-eq2'))),
  )
}
