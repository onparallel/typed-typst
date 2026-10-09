// Converted from test/universe/corpus/innovative-skoltech-slides.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  align,
  bibliography,
  blocks,
  center,
  data,
  datetime,
  define,
  doc,
  em,
  external,
  figure,
  footnote,
  fr,
  grid,
  horizon,
  importPackage,
  includeFile,
  inline,
  label,
  labelled,
  let_,
  link,
  m,
  path,
  pt,
  raw,
  ref,
  show,
  smallcaps,
  space,
  strong,
  symbol,
  unsafeRaw,
  v,
} from '../../../src/index.ts'

export default () => {
  const skoltech = external('skoltech')
  const skoltech_with = define('with')
    .named('appendix', T.any, null)
    .named('authors', T.any, null)
    .named('aux', T.any, null)
    .named('bibliography', T.any, null)
    .named('date', T.any, null)
    .named('keywords', T.any, null)
    .named('title', T.content, [])
    .returns(T.any)
    .external(skoltech)
  const [loraDecl, lora] = let_('lora', smallcaps(inline`LoRA`))
  const [lotrDecl, lotr] = let_('lotr', smallcaps(inline`LoTR`))
  const seeIt = define('see-it')
    .pos('href', T.any)
    .named('supplement', T.any, inline`it`)
    .returns(T.any)
    .body((p) => footnote(inline`See ${p['supplement']} at ${link(p['href'], raw(p['href']))}.`))
  return doc(
    importPackage('@preview/innovative-skoltech-slides:0.8.0', [skoltech]),
    show(
      skoltech_with({
        title: inline`Low-Rank Adaptation`,
        authors: {
          name: inline`Daniel Bershatsky`,
          role: inline`second-year PhD, CDSE`,
          institution: 'Skoltech',
          comment: null,
        },
        keywords: ['Skoltech', 'LoRA', 'LoTR'],
        date: datetime({ year: 2025, month: 3, day: 17 }),
        bibliography: bibliography(path('main.bib')),
        appendix: null,
        aux: data({}),
      }),
    ),
    m.lines(loraDecl, lotrDecl),
    m.heading(1, 'LoRA'),
    m.heading(2, lora, ': Low-Rank Adaptation'),
    inline`${lora} ${ref(label('hu2021lora'))} represents an update to a particular weight matrix (kernel)
in additive form where the first term ${unsafeRaw.math`W`} is frozen original weights and the
second one is low-rank correction ${unsafeRaw.math`delta W = B A^top`}. Linear layer with ${lora}
adapter acts as follows`,
    inline(
      labelled(
        [
          unsafeRaw.math.block`Y
  & = X (W^top + alpha A B^top) + bb(1)_N b^top \\
  & = op("Aff")(X) + alpha X A B^top,`,
          space,
        ],
        label('lora'),
      ),
    ),
    inline`where ${unsafeRaw.math`bb(1)_N`} is a vector of ${unsafeRaw.math`N`} ones. Matrices ${unsafeRaw.math`A in RR^(n_"in" times r)`}
and ${unsafeRaw.math`B in RR^(n_"out" times r)`} are of rank ${unsafeRaw.math`r << n`}.`,
    inline`${v(pt(8))} ${strong(inline`NB`)} Number of parmeters to fit ${unsafeRaw.math`2 n r`} instead
of ${unsafeRaw.math`n^2`} in full fine-tuning.`,
    inline(
      v({ weak: true }, pt(8)),
      space,
      align(add(center, horizon), blocks('Repeated pattern: can we exploit it?', 'Can we do generally better?')),
    ),
    m.heading(1, 'LoTR'),
    m.heading(2, lotr, ': Tensorized Low-Rank Adaptation'),
    seeIt.decl,
    inline`${ref(label('bershatsky2024lotr'))} ${seeIt({ supplement: inline`public repo` }, 'https://github.com/daskol/lotr')}
acts on a set of its similarly shaped matrices ${unsafeRaw.math`cal(W) =
{W_alpha}`}, rank ${unsafeRaw.math`r`} ${lotr}${symbol('-')}adaptation is a 3-tensor of corrections
${unsafeRaw.math`delta
cal(W)`} s.t. the ${unsafeRaw.math`s`}-th linear layer acts on input ${unsafeRaw.math`X in RR^(N times d)`}
as`,
    inline(unsafeRaw.math.block`Y = op("Aff")(X) + alpha X A G_s B^top,
  space.quad alpha in RR,`),
    inline`where ${unsafeRaw.math`A in RR^(d times r)`} and ${unsafeRaw.math`B in RR^(d times r)`} are
shared among all layers in training time while square matrix ${unsafeRaw.math`S_s in RR^(r times r)`}
is specific to the ${unsafeRaw.math`s`}-th layer. Number of adjustable parameters is ${unsafeRaw.math`|cal(W)|r^2 + 2 r d`}.`,
    inline(
      v(em(1)),
      space,
      grid(
        { columns: [fr(1), fr(1)] },
        blocks(
          m.heading(3, 'Byproducts'),
          'While working on the project, we published some ancillary work on GitHub.',
          m.list(m.item([raw('gridy')]), m.item([raw('mpl-typst')]), m.item([raw('typst-templates')])),
        ),
        inline(space, v(em(1)), space, figure(includeFile('/fig/lotr-heatmap.typ')), space),
      ),
    ),
    m.heading(2, 'GLUE Performance'),
    inline`${lotr} performs better than ${lora} on large models with respect to number of parameters.`,
    inline(labelled([figure({ caption: null }, includeFile('tab/lotr-glue.typ')), space], label('lotr-glue'))),
  )
}
