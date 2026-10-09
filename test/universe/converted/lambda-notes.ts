// Converted from test/universe/corpus/lambda-notes.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  blue,
  codeBlock,
  define,
  doc,
  external,
  green,
  heading,
  importPackage,
  inline,
  label,
  labelled,
  link,
  m,
  orange,
  raw,
  ref,
  show,
  space,
  strong,
  table,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const lambdaNotes = external('lambda-notes')
  const note = define('note').pos('arg1', T.content).returns(T.any).external()
  const callout = define('callout')
    .pos('arg1', T.content)
    .named('color', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external()
  const algorithmFigure = define('algorithm-figure').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const Procedure = define('Procedure')
    .pos('arg1', T.any)
    .pos('arg2', T.any)
    .pos('arg3', T.any)
    .returns(T.any)
    .external()
  const Call = define('Call').pos('arg1', T.any).pos('arg2', T.content).returns(T.any).external()
  const For = define('For').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const Comment = define('Comment').pos('arg1', T.content).returns(T.any).external()
  const Assign = define('Assign').pos('arg1', T.content).pos('arg2', T.content).returns(T.any).external()
  const lambdaNotes_with = define('with')
    .named('author', T.any, null)
    .named('color', T.any, null)
    .named('date', T.any, null)
    .named('keywords', T.any, null)
    .named('subject', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(lambdaNotes)
  return doc(
    importPackage('@preview/lambda-notes:0.1.0', [
      lambdaNotes,
      note,
      callout,
      algorithmFigure,
      Procedure,
      Call,
      For,
      Comment,
      Assign,
    ]),
    show(
      lambdaNotes_with({
        title: 'Algorithms and Data Structures',
        author: 'Your Name',
        date: 'Fall 2026',
        subject: 'Lecture notes',
        keywords: ['algorithms', 'data structures', 'computer science'],
        color: blue,
      }),
    ),
    m.heading(1, 'Introduction'),
    inline`These are example notes generated from the ${strong(inline`lambda-notes`)} template. They show
off headings, notes, callouts, tables, code, algorithms, and cross-references.`,
    inline`Jump ahead to the ${ref(label('sorting'))} section, or check out an external link like ${link('https://typst.app', inline`the Typst website`)}.`,
    inline(
      note(inline`${space}This is a plain ${strong(inline`note`)} block — use it for asides that don't need a
color.${space}`),
    ),
    inline(
      callout(
        { title: 'Tip', color: green },
        inline`${space}Use ${raw('callout')} with a ${raw('color')} and an optional ${raw('title')} to highlight
tips, warnings, or definitions.${space}`,
      ),
    ),
    inline(
      callout(
        { title: 'Definition', color: orange },
        inline`${space}A ${strong(inline`graph`)} is a pair ${unsafeRaw.math`(V, E)`} of vertices and edges.${space}`,
      ),
    ),
    m.heading(2, 'Comparing approaches'),
    inline(
      table(
        { columns: 3 },
        inline(strong(inline`Approach`)),
        inline(strong(inline`Time`)),
        inline(strong(inline`Space`)),
        inline`Brute force`,
        inline(unsafeRaw.math`O(n^2)`),
        inline(unsafeRaw.math`O(1)`),
        inline`Divide & conquer`,
        inline(unsafeRaw.math`O(n log n)`),
        inline(unsafeRaw.math`O(n)`),
        inline`Dynamic programming`,
        inline(unsafeRaw.math`O(n)`),
        inline(unsafeRaw.math`O(n)`),
      ),
    ),
    inline(
      raw(
        { block: true, lang: 'python' },
        'def fibonacci(n: int) -> int:\n    a, b = 0, 1\n    for _ in range(n):\n        a, b = b, a + b\n    return a',
      ),
    ),
    inline(labelled(heading({ depth: 1 }, inline('Sorting algorithms')), label('sorting'))),
    m.heading(2, 'Heapsort'),
    inline(
      algorithmFigure(
        'Heapsort',
        codeBlock(
          [],
          Procedure(
            'HEAPSORT',
            ['A', 'n'],
            codeBlock([
              Call('BUILD-MAX-HEAP', inline`A, n`),
              For(
                unsafeRaw.math`i=n "DOWNTO" 2`,
                codeBlock([
                  Comment(inline`Exchange ${unsafeRaw.math`A[1]`} with ${unsafeRaw.math`A[i]`}`),
                  Assign(inline`A.heap-size`, inline`A.heap.size-1`),
                  Call('MAX-HEAPIFY', inline`A, 1`),
                ]),
              ),
            ]),
          ),
        ),
      ),
    ),
    inline`Heapsort runs in ${unsafeRaw.math`O(n log n)`} time on a sorted array of size ${unsafeRaw.math`n`}.`,
  )
}
