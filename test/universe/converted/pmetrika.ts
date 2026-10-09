// Converted from test/universe/corpus/pmetrika.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  align,
  auto,
  bibliography,
  block,
  blocks,
  define,
  doc,
  emph,
  external,
  figure,
  importPackage,
  inline,
  label,
  left,
  link,
  lorem,
  m,
  parbreak,
  path,
  place,
  raw,
  ref,
  show,
  space,
  sym,
  table,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const conf = external('conf')
  const conf_with = define('with')
    .named('abstract', T.any, null)
    .named('keywords', T.any, null)
    .named('section', T.any, null)
    .named('title', T.content, [])
    .returns(T.any)
    .external(conf)
  return doc(
    importPackage('@preview/pmetrika:0.1.0', [conf]),
    show(
      conf_with({
        title: inline`A Typst Template for ${emph(inline`Psychometrika`)}`,
        abstract: lorem(50),
        section: 'application and case studies - original',
        keywords: ['Typst', inline(emph(inline`Psychometrika`)), 'typesetting'],
      }),
    ),
    m.heading(1, 'Start Writing as You Normally Would!'),
    'And they will be styled by the template automatically.',
    inline(lorem(50)),
    m.heading(2, 'Headings Are in Psychometrika Style'),
    inline(
      place(
        { float: true },
        auto,
        block(
          { breakable: false },
          blocks(
            inline(
              align(left, lorem(20)),
              space,
              figure(
                {
                  caption: inline`Most popular languages in October 2025: the fierce battle for second place in TIOBE Index`,
                },
                table(
                  { columns: 5 },
                  table.header(
                    inline`Oct 2025`,
                    inline`Oct 2024`,
                    inline`Programming Language`,
                    inline`Ratings`,
                    inline`Change`,
                  ),
                  inline`1`,
                  inline`1`,
                  inline`Python`,
                  inline`24.45%`,
                  inline`+2.55%`,
                  inline`2`,
                  inline`4`,
                  inline`C`,
                  inline`9.29%`,
                  inline`+0.91%`,
                  inline`3`,
                  inline`2`,
                  inline`C++`,
                  inline`8.84%`,
                  inline`${sym.minus}2.77%`,
                  inline`4`,
                  inline`3`,
                  inline`Java`,
                  inline`8.35%`,
                  inline`${sym.minus}2.15%`,
                  inline`5`,
                  inline`5`,
                  inline`C#`,
                  inline`6.94%`,
                  inline`+1.32%`,
                ),
              ),
            ),
            m.terms(
              m.term(
                ['Note'],
                ['Term lists with a single term named', space, raw('Note'), space, 'will be treated as a figure note.'],
              ),
            ),
            parbreak(),
          ),
        ),
      ),
    ),
    inline(unsafeRaw.math.block`H(X) = -sum_(i=1)^n p(x_i) log_2 p(x_i)`),
    inline`Citations and references displayed in APA style: ${ref(label('delatorreDINAModelParameter2009'))}.`,
    m.heading(1, 'Advanced Styling'),
    'You may want to import some of the predefined style elements:',
    inline(
      raw(
        { block: true, lang: 'typst' },
        '#import "@preview/pmetrika:0.1.0": color-heading\n#text(fill: color-heading)[word]',
      ),
    ),
    inline`When in doublt, consult the ${link('https://github.com/sghng/pmetrika/blob/main/lib.typ', inline`source code`)}
to see how things work.`,
    inline(bibliography(path('refs.bib'))),
    m.heading(1, 'Sections After Bib Are Treated as Appendices'),
    inline(lorem(64)),
  )
}
