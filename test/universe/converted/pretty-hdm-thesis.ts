// Converted from test/universe/corpus/pretty-hdm-thesis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  auto,
  bibliography,
  cm,
  datetime,
  define,
  doc,
  external,
  figure,
  fr,
  horizon,
  image,
  importFile,
  importPackage,
  inline,
  label,
  let_,
  linebreak,
  link,
  lorem,
  m,
  pagebreak,
  path,
  pct,
  pt,
  ref,
  show,
  space,
  strong,
  table,
  text,
  unsafeRaw,
  yaml,
} from '../../../src/index.ts'

export default () => {
  const prettyHdmThesis = external('pretty-hdm-thesis')
  const gls = define('gls').pos('arg1', T.any).returns(T.any).external()
  const glspl = external('glspl')
  const abstractDe = external('abstract-de')
  const abstractEn = external('abstract-en')
  const acronyms = external('acronyms')
  const glossary = external('glossary')
  const prettyHdmThesis_with = define('with')
    .pos('arg1', T.any)
    .pos('arg2', T.any)
    .named('abstract-de', T.any, null)
    .named('abstract-en', T.any, null)
    .named('acknowledgements', T.any, null)
    .named('acronyms', T.any, null)
    .named('bib', T.any, null)
    .named('declaration-of-authorship', T.any, null)
    .named('figure-outline', T.any, null)
    .named('glossary', T.any, null)
    .named('table-outline', T.any, null)
    .returns(T.any)
    .external(prettyHdmThesis)
  const [metadataDecl, metadata_2] = let_('metadata', yaml(path('metadata.yaml')))
  const [acknowledgementsDecl, acknowledgements] = let_(
    'acknowledgements',
    inline`${space}I'd like to thank caffeine for getting me through many many MANY nights writing all
of this${space}`,
  )
  return doc(
    m.lines(
      importPackage('@preview/pretty-hdm-thesis:0.1.1', [prettyHdmThesis]),
      importPackage('@preview/glossarium:0.5.9', [gls, glspl]),
    ),
    m.lines(
      importFile('abstract.typ', [abstractDe, abstractEn]),
      importFile('acronyms.typ', [acronyms]),
      importFile('glossary.typ', [glossary]),
    ),
    metadataDecl,
    acknowledgementsDecl,
    show(
      prettyHdmThesis_with(
        {
          bib: bibliography(path('sources.bib')),
          glossary: glossary,
          acronyms: acronyms,
          abstractDe: abstractDe,
          abstractEn: abstractEn,
          acknowledgements: acknowledgements,
          declarationOfAuthorship: true,
          tableOutline: true,
          figureOutline: true,
        },
        metadata_2,
        datetime.today(),
      ),
    ),
    m.heading(1, 'Introduction'),
    m.heading(2, 'Topic A'),
    inline(lorem(75)),
    inline(lorem(50)),
    m.heading(2, 'Topic B'),
    inline(lorem(150)),
    m.lines(inline(pagebreak({ weak: true })), m.heading(1, 'Another Heading')),
    inline(lorem(300)),
    m.heading(2, 'Sub Heading'),
    inline(lorem(150)),
    m.heading(1, 'Functions'),
    m.heading(2, 'Citations'),
    inline`Citing a thing here ${ref(label('iso18004'))}`,
    m.heading(2, 'Referencing Glossary Items'),
    inline`Like this: ${gls('kuleuven')}`,
    m.heading(2, 'Figures'),
    inline(
      figure(
        {
          caption: inline`${space}Image Example (${link('https://www.freepik.com/author/freepik/icons/kawaii-lineal_46#from_element=resource_detail', inline`Icon by Freepik`)})${space}`,
        },
        image({ width: cm(4) }, path('assets/example.png')),
      ),
    ),
    m.heading(2, 'Tables'),
    inline(
      figure(
        { caption: 'Table Example' },
        table(
          { columns: [fr(1), pct(50), auto], inset: pt(10), align: horizon },
          table.header(inline(), inline(strong(inline`Area`)), inline(strong(inline`Parameters`))),
          text('cylinder.svg'),
          unsafeRaw.math.block`pi h (D^2 - d^2) / 4`,
          inline`${space}${unsafeRaw.math`h`}: height ${linebreak()} ${unsafeRaw.math`D`}: outer radius ${linebreak()}
${unsafeRaw.math`d`}: inner radius${space}`,
          text('tetrahedron.svg'),
          unsafeRaw.math.block`sqrt(2) / 12 a^3`,
          inline`${unsafeRaw.math`a`}: edge length`,
        ),
      ),
    ),
  )
}
