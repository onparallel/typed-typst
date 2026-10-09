// Converted from test/suite/corpus/query-complex.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  codeBlock,
  context,
  define,
  doc,
  figure,
  heading,
  inline,
  label,
  labelled,
  m,
  query,
  selector,
  space,
  unsafeRaw,
  where,
} from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const testSelector = define('test-selector')
    .pos('selector', T.any)
    .pos('ref', T.any)
    .returns(T.any)
    .body((p) =>
      context((ctx) => codeBlock([], test(query(ctx, p['selector']).map(unsafeRaw.code<any>`e => e.body`), p['ref']))),
    )
  return doc(
    m.lines(
      m.heading(1, 'A'),
      m.heading(2, 'B'),
      inline(
        figure({ kind: 'cat', supplement: inline`Other` }, inline`Cat`),
        space,
        heading({ level: 3, outlined: false }, inline`D`),
      ),
      inline(labelled(heading({ depth: 1 }, inline('E')), label('first'))),
      inline(
        figure({ kind: 'frog', supplement: null }, inline`Frog`),
        space,
        labelled([figure({ kind: 'giraffe', supplement: null }, inline`Giraffe`), space], label('second')),
        space,
        labelled([figure({ kind: 'cat', supplement: inline`Other` }, inline`GiraffeCat`), space], label('second')),
      ),
      m.heading(1, 'H'),
      inline(figure({ kind: 'iguana', supplement: null }, inline`Iguana`)),
      m.heading(2, 'I'),
    ),
    testSelector.decl,
    inline(
      testSelector(unsafeRaw.code<any>`heading.where(level: 1).or(heading.where(level: 3))`, [
        inline`A`,
        inline`D`,
        inline`E`,
        inline`H`,
      ]),
    ),
    inline(testSelector(selector(heading).and(where(heading, { outlined: false })), [inline`D`])),
    inline(
      testSelector(
        unsafeRaw.code<any>`heading.where(level: 1).or(
    heading.where(level: 3),
    figure.where(kind: "frog"),
  )`,
        [inline`A`, inline`D`, inline`E`, inline`Frog`, inline`H`],
      ),
    ),
    inline(
      testSelector(
        unsafeRaw.code<any>`heading.where(level: 1).or(
    heading.where(level: 2),
    figure.where(kind: "frog"),
    figure.where(kind: "cat"),
  )`,
        [inline`A`, inline`B`, inline`Cat`, inline`E`, inline`Frog`, inline`GiraffeCat`, inline`H`, inline`I`],
      ),
    ),
    inline(testSelector(unsafeRaw.code<any>`figure.where(kind: "dog").or(heading.where(level: 3))`, [inline`D`])),
    inline(testSelector(unsafeRaw.code<any>`figure.where(kind: "dog").or(figure.where(kind: "fish"))`, [])),
    inline(
      testSelector(unsafeRaw.code<any>`heading.where(level: 1).or(heading.where(level: 1))`, [
        inline`A`,
        inline`E`,
        inline`H`,
      ]),
    ),
    inline(testSelector(unsafeRaw.code<any>`figure.where(kind: "cat").and(figure.where(kind: "frog"))`, [])),
    inline(
      testSelector(
        selector(heading)
          .before(label('first'))
          .or(selector(figure).before(label('first'))),
        [inline`A`, inline`B`, inline`Cat`, inline`D`, inline`E`],
      ),
    ),
    inline(
      testSelector(
        unsafeRaw.code<any>`heading.where(level: 2)
    .after(<first>)
    .or(selector(figure).after(<first>))`,
        [inline`Frog`, inline`Giraffe`, inline`GiraffeCat`, inline`Iguana`, inline`I`],
      ),
    ),
    inline(
      testSelector(
        unsafeRaw.code<any>`figure.where(kind: "cat")
    .and(figure.where(supplement: [Other]))
    .after(<first>)`,
        [inline`GiraffeCat`],
      ),
    ),
    inline(
      testSelector(
        unsafeRaw.code<any>`heading.where(level: 2)
    .or(heading.where(level: 3))
    .and(heading.where(level: 2).or(heading.where(level: 1)))`,
        [inline`B`, inline`I`],
      ),
    ),
    inline(
      testSelector(
        unsafeRaw.code<any>`heading.where(level: 2)
    .or(heading.where(level: 3), heading.where(level:1))
    .and(
      heading.where(level: 2).or(heading.where(level: 1)),
      heading.where(level: 3).or(heading.where(level: 1)),
    )`,
        [inline`A`, inline`E`, inline`H`],
      ),
    ),
    inline(
      testSelector(
        unsafeRaw.code<any>`heading.where(level: 1).before(<first>)
    .or(heading.where(level: 3).before(<first>))
    .and(
      heading.where(level: 1).before(<first>)
        .or(heading.where(level: 2).before(<first>))
    )`,
        [inline`A`, inline`E`],
      ),
    ),
    inline(
      testSelector(
        unsafeRaw.code<any>`heading.where(level: 1).before(<first>, inclusive: false)
    .or(selector(figure).after(<first>))
    .and(figure.where(kind: "iguana").or(
      figure.where(kind: "frog"),
      figure.where(kind: "cat"),
      heading.where(level: 1).after(<first>),
    ))`,
        [inline`Frog`, inline`GiraffeCat`, inline`Iguana`],
      ),
    ),
  )
}
