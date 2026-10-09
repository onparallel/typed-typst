// Converted from test/universe/corpus/charged-vde.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  define,
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
  pct,
  ref,
  show,
  space,
  table,
  top,
} from '../../../src/index.ts'

export default () => {
  const chargedVde = external('charged-vde')
  const chargedVde_with = define('with')
    .named('abstract', T.content, [])
    .named('affiliations', T.any, null)
    .named('authors', T.any, null)
    .named('email', T.content, [])
    .named('lang', T.any, null)
    .named('title', T.content, [])
    .returns(T.any)
    .external(chargedVde)
  return doc(
    importPackage('@preview/charged-vde:1.0.0', [chargedVde]),
    show(
      chargedVde_with({
        title: inline`Test`,
        authors: [
          { name: 'Max Mustermann', affiliation: '1' },
          { name: 'Erika Musterfrau', affiliation: '1,2' },
        ],
        affiliations: [
          { id: '1', name: 'University' },
          { id: '2', name: 'Company' },
        ],
        email: inline`{max,erika}@university.de, erika@company.de`,
        lang: 'en',
        abstract: inline(lorem(100)),
      }),
    ),
    m.lines(inline(labelled(heading({ depth: 1 }, inline('Introduction')), label('intro'))), inline(lorem(150))),
    m.heading(2, 'Subsection'),
    inline`In ${ref(label('intro'))} we discussed already a lot. ${lorem(150)}`,
    m.heading(1, 'Tables'),
    inline`${ref(label('tab'))} shows a table ${lorem(150)}`,
    inline(
      labelled(
        [
          figure(
            { caption: inline`Caption`, placement: top },
            table(
              { columns: 3 },
              table.header(inline`Substance`, inline`Subcritical °C`, inline`Supercritical °C`),
              inline`Hydrochloric Acid`,
              inline`12.0`,
              inline`92.1`,
              inline`Sodium Myreth Sulfate`,
              inline`16.6`,
              inline`104`,
              inline`Potassium Hydroxide`,
              table.cell({ colspan: 2 }, inline`24.7`),
            ),
          ),
          space,
        ],
        label('tab'),
      ),
    ),
    m.lines(
      m.heading(2, 'Subsection'),
      inline(lorem(200)),
      m.heading(3, 'Subsubsection'),
      inline(lorem(100)),
      m.heading(3, 'Subsubsection'),
      inline(lorem(100)),
    ),
    m.lines(m.heading(1, 'Pictures'), inline(lorem(100))),
    inline(
      figure({ caption: inline`A curious figure.`, placement: top }, image({ width: pct(100) }, path('image.jpg'))),
    ),
    m.lines(
      inline(labelled(heading({ depth: 1 }, inline('Acknowledgements')), label('nonumber'))),
      inline`The paper ${ref(label('henpat_19'))} is a very interesting paper. ${lorem(50)}`,
    ),
    inline(bibliography(path('library.bib'))),
  )
}
