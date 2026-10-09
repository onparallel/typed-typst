// Converted from test/universe/corpus/mousse-notes.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  blocks,
  define,
  div,
  doc,
  document,
  emph,
  external,
  figure,
  footnote,
  heading,
  importPackage,
  inline,
  label,
  labelled,
  let_,
  linebreak,
  link,
  lorem,
  m,
  mm,
  page,
  raw,
  ref,
  set,
  show,
  smallcaps,
  space,
  unsafeRaw,
  upper,
} from '../../../src/index.ts'

export default () => {
  const style = external('style')
  const titlePage = define('title-page')
    .named('primary', T.any, null)
    .named('secondary', T.any, null)
    .named('subtitle', T.any, null)
    .returns(T.any)
    .external()
  const epigraph = define('epigraph')
    .pos('arg1', T.content)
    .named('attribution', T.content, [])
    .returns(T.any)
    .external()
  const definition = define('definition').pos('arg1', T.content).returns(T.any).external()
  const proposition = define('proposition').pos('arg1', T.content).returns(T.any).external()
  const proof = define('proof').pos('arg1', T.content).returns(T.any).external()
  const example = define('example').pos('arg1', T.content).returns(T.any).external()
  const solution = define('solution').pos('arg1', T.content).returns(T.any).external()
  const theorem = define('theorem').pos('arg1', T.content).named('name', T.any, null).returns(T.any).external()
  const [mousseDecl, mousse] = let_('mousse', smallcaps(inline`Mousse`))
  return doc(
    importPackage('@preview/mousse-notes:2.0.1', [
      style,
      titlePage,
      epigraph,
      definition,
      proposition,
      proof,
      example,
      solution,
      theorem,
    ]),
    set(document, { title: inline`WUNK 101`, author: 'John Student' }),
    set(page, { height: mm(215.9), width: div(mm(279.4), 2) }),
    show(style),
    inline(
      titlePage({
        subtitle: upper(inline`Introduction to Wunkematics`),
        primary: upper(
          inline`${space}Lectures delivered by ${linebreak()} ${emph(inline`Jonathan Bingus`)} ${linebreak()}${space}`,
        ),
        secondary: upper(inline`University of Ipsum ${linebreak()} Fall 2026`),
      }),
    ),
    m.heading(1, 'The Pond'),
    inline(
      epigraph(
        { attribution: inline`Jonathan Bingus` },
        inline`${space}This is a tremendously inspirational quote that sets the tone of this course; truly,
one of the epigraphs of all time.${space}`,
      ),
    ),
    m.heading(2, 'Introduction'),
    'We begin our study of wunk analysis by investigating the pond. The pond is a central structure in applied wunkebra, because of its use in telecommunications and biology. Intuitively, a pond can be compared to a body of water (as in the usual sense of the word); it comprises a liquid medium, and it may contain objects within the medium.',
    inline(
      definition(
        blocks(
          m.lines(
            inline`A ${emph(inline`pond`)} is a set of wunks ${unsafeRaw.math`P`} along with a ${emph(inline`medium element`)}
${unsafeRaw.math`M`} that satisfies the following properties (pond axioms):`,
            m.enum(
              m.item([
                'For all distinct wunks',
                space,
                unsafeRaw.math`w_1, w_2 in P`,
                space,
                'such that both',
                space,
                unsafeRaw.math`w_1`,
                space,
                'and',
                space,
                unsafeRaw.math`w_2`,
                space,
                'are fish, if',
                space,
                unsafeRaw.math`w_1`,
                space,
                'is dancing, then',
                space,
                unsafeRaw.math`w_2`,
                space,
                'is not dancing.',
                footnote(
                  inline`${space}Informally, this axiom is often stated as "two fish may not dance in the same pond."${space}`,
                ),
                space,
                '(Fish axiom)',
              ]),
              m.item([
                'For each wunk',
                space,
                unsafeRaw.math`w in P`,
                ', there exists an anti-wunk',
                space,
                unsafeRaw.math`overline(w) in P`,
                space,
                'such that the combination of',
                space,
                unsafeRaw.math`w`,
                space,
                'and',
                space,
                unsafeRaw.math`overline(w)`,
                space,
                'results in annihilation, i.e.',
                space,
                unsafeRaw.math`w overline(w) = M`,
                '. (Anti-wunk axiom)',
              ]),
            ),
          ),
        ),
      ),
    ),
    inline`The most commonly used pond is ${unsafeRaw.math`PP_1`}, where the medium ${unsafeRaw.math`M`}
is water, and the wunks are acidic (${unsafeRaw.math`A`}) and basic (${unsafeRaw.math`B`}) fish:
${unsafeRaw.math.block`A = {a_1, a_2, ...}, quad B = {b_1, b_2, ...}, \\
  PP_1 = A union B.`}`,
    inline(
      proposition(inline`The set ${unsafeRaw.math`PP_1`} is a pond.`),
      space,
      proof(
        blocks(
          m.lines(
            inline`We show that ${unsafeRaw.math`PP_1`} satisfies the pond axioms.`,
            m.enum(
              m.item(['This part of the proof has been left as an exercise to the reader.']),
              m.item([
                'For acidic wunks, the basic wunk is the anti-wunk, and vice-versa. The combination of an acidic and basic wunk produces water, which is by definition the medium of',
                space,
                unsafeRaw.math`PP_1`,
                '. Therefore,',
                space,
                unsafeRaw.math`PP_1`,
                space,
                'is a pond.',
                space,
                unsafeRaw.math`qed`,
              ]),
            ),
          ),
        ),
      ),
    ),
    m.heading(2, 'WunkPy'),
    inline`The WunkPy library provides many convenient utilities for working with wunks. See ${ref(label('lst_pond'))}
for a usage example.`,
    inline(
      labelled(
        [
          figure(
            { caption: inline`Initializing a pond in WunkPy` },
            raw(
              { block: true, lang: 'python' },
              'from wunkpy import Pond, Wunk\n\np = Pond()\nfor w in (Wunk(dancing=True), Wunk(dancing=False)):\n  p.add(w)',
            ),
          ),
          space,
        ],
        label('lst_pond'),
      ),
    ),
    m.heading(2, 'Examples'),
    inline(
      example(inline`${space}Suppose we construct a pond chain of length ${unsafeRaw.math`n in NN`}, where each pond
is isomorphic to ${unsafeRaw.math`PP_1`}. Alice (at pond 1) makes a fish other than ${unsafeRaw.math`f_1`}
dance. What does Bob (observing pond ${unsafeRaw.math`n`}) see with his fish? Notably, does
fish ${unsafeRaw.math`f_n`} annihilate or stop dancing?${space}`),
    ),
    inline(
      solution(inline`${space}We examine the cases where ${unsafeRaw.math`n`} is even, and ${unsafeRaw.math`n`} is
odd. Using proof by I said so, the statement holds. ${unsafeRaw.math`qed`}${space}`),
    ),
    inline(labelled(heading({ depth: 1 }, inline('Guide to Mousse')), label('ch_guide'))),
    mousseDecl,
    m.heading(2, 'Introduction'),
    inline`${mousse} is a template intended for writing lecture notes, specifically intended for use in
STEM courses. Each Typst file is supposed to represent a complete textbook for an individual
course. ${mousse}'s design is inspired by old-ish math books. The name of the template itself
is just a random French word, because French sounds fancy. For up-to-date information, see the
source code of this template at ${link('https://github.com/dogeystamp/mousse-notes')}.`,
    inline`${mousse} is intended to be batteries-included, and provides tools you might need to write notes,
e.g. Theorem and Example environments. This chapter shows by example how to use the functions
provided in ${mousse}. Please reference the source code of this document while reading to see
how the functions are used.`,
    inline(labelled(heading({ depth: 2 }, inline('Document Structure')), label('sec_struct'))),
    inline`In ${mousse}, first level headings (${raw('=')}) represent chapters. Second and third level
headings (${raw('==')}, ${raw('===')}) are sections and subsections. As always, you can reference
sections and chapters using normal Typst methods: ${ref(label('sec_struct'))}, ${ref(label('ch_guide'))}.`,
    m.lines(m.heading(3, 'Subsection'), 'This is what a subsection looks like.'),
    m.heading(4, 'Subsubsection'),
    'And a subsubsection.',
    m.heading(2, 'Math Equations'),
    inline`Math equations look like this: ${unsafeRaw.math.block`1 + 1 = 2`} When you add a label to an
equation, it gains a number: ${labelled([unsafeRaw.math.block`1 + 1 = 2`, space], label('eq_important'))}
You can then reference the equation with the label, e.g. see ${ref(label('eq_important'))}.`,
    m.heading(2, 'Indent control'),
    inline`Due to limitations with Typst, ${footnote(inline`See: ${link('https://github.com/typst/typst/issues/3206')}`)}
you can not break a paragraph after a display math equation or any other block element. That
is, after a block element, there will never be an indent. ${mousse} provides a workaround for
this which lets you add an indent. This feature applies to display math, theorem environments,
and figures.`,
    inline(unsafeRaw.math.block`1 + 1 = 2`),
    inline`If you add a blank line after an equation, it will give an indent to the next paragraph. ${unsafeRaw.math.block`1 + 1 = 2`}
If you don't, it will consider the following text to be part of the same paragraph, so no indent
will be added.`,
    inline`The method used to provide this feature is hacky, and it may break in future releases of the
Typst compiler or no longer be necessary. A notable limitation is that it can't recurse into
containers like ${raw('#block')}, or even ${raw('#set')} and ${raw('#show')}. Because of this,
you must keep the ${raw('#show: style')} rule after any other ${raw('#set')} or ${raw('#show')}
rules, otherwise it will break.`,
    m.heading(2, 'Theorem Environments'),
    inline`${mousse} provides the ${raw('theorem()')}, ${raw('proposition()')}, ${raw('lemma()')}, ${raw('corollary()')},
${raw('definition()')}, ${raw('example()')}, ${raw('solution()')}, ${raw('proof()')} and ${raw('remark()')}
environments by default. You can also create your own; see the source code in ${raw('src/_theorems.typ')}
to see how to do that.`,
    inline`Here are some examples of using theorems. You can make unnamed theorems: ${theorem(inline`${space}For all ${unsafeRaw.math`x in RR`}, we have something.${space}`)}
You can set a name: ${theorem({ name: 'Pythagorean' }, inline`${space}Bla bla bla ${unsafeRaw.math`a^2 + b^2 = c^2`}.${space}`)}
You can reference theorems (see ${ref(label('thm_bla'))}): ${labelled([theorem(inline`For all ${unsafeRaw.math`x in CC`}, we have something.`), space], label('thm_bla'))}`,
    inline`For proofs, you must add ${raw('$qed$')} by yourself. In ${mousse}, ${raw('$qed$')} is intended
to be next the the content, rather than at the end of the line. For example: ${proof(inline(space, lorem(20), space, unsafeRaw.math`qed`, space))}`,
    m.heading(2, 'Further Configuration'),
    inline`${mousse} is an opinionated template, and offers no configuration options. The recommended way
for you to change the style of the template is to fork the repository. (If you make an improvement
that can benefit all users of this template, please consider making a PR.)`,
    inline`The Typst compiler does not usually have large breaking changes, so you should be able to use
your fork indefinitely without having to backport changes from the upstream ${mousse} package.`,
  )
}
