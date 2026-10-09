// Converted from test/universe/corpus/scholia.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  cm,
  define,
  doc,
  external,
  importPackage,
  inline,
  label,
  labelled,
  m,
  ref,
  show,
  space,
  strong,
} from '../../../src/index.ts'

export default () => {
  const scholia = external('scholia')
  const cover = define('cover')
    .pos('arg1', T.any)
    .named('author', T.any, null)
    .named('date', T.any, null)
    .named('subtitle', T.any, null)
    .returns(T.any)
    .external()
  const keyword = define('keyword').pos('arg1', T.content).returns(T.any).external()
  const note = define('note').pos('arg1', T.content).returns(T.any).external()
  const definition = define('definition').pos('arg1', T.content).pos('arg2', T.content).returns(T.any).external()
  const fillin = define('fillin').named('width', T.any, null).returns(T.any).external()
  const theorem = define('theorem')
    .pos('arg1', T.content)
    .pos('arg2', T.content)
    .pos('arg3', T.content)
    .returns(T.any)
    .external()
  const proof = define('proof').pos('arg1', T.content).returns(T.any).external()
  const TODO = define('TODO').pos('arg1', T.content).returns(T.any).external()
  const example = define('example').pos('arg1', T.content).pos('arg2', T.content).returns(T.any).external()
  const yourturn = define('yourturn').pos('arg1', T.content).returns(T.any).external()
  const workspace = define('workspace').named('n', T.any, null).returns(T.any).external()
  const recall = define('recall').pos('arg1', T.content).returns(T.any).external()
  const remark = define('remark').pos('arg1', T.content).returns(T.any).external()
  const scholia_with = define('with').returns(T.any).external(scholia)
  return doc(
    importPackage('@preview/scholia:0.1.0', [
      scholia,
      cover,
      keyword,
      note,
      definition,
      fillin,
      theorem,
      proof,
      TODO,
      example,
      yourturn,
      workspace,
      recall,
      remark,
    ]),
    show(scholia_with()),
    inline(cover({ subtitle: 'A one-line subtitle', author: 'Your Name', date: '2026' }, 'Your Notebook')),
    m.heading(1, 'First Course'),
    inline`${keyword(inline`The big idea`)}, in a sentence, before the machinery.`,
    inline(
      note(inline`${space}Intuition first: say what this is really about, in your own words. This layer is written
to be ${strong(inline`read`)} — the formal layer below is written to be ${strong(inline`filled`)}.${space}`),
    ),
    inline(
      labelled(
        [
          definition(
            inline`a term`,
            inline`${space}State the object, but leave the key clause blank: closed under ${fillin({ width: cm(2.5) })}.${space}`,
          ),
          space,
        ],
        label('def:thing'),
      ),
    ),
    inline(
      labelled(
        [
          theorem(
            inline`attribution`,
            inline`source`,
            inline`${space}State the result in full; later you can refer back to ${ref(label('def:thing'))}.${space}`,
          ),
          space,
        ],
        label('thm:main'),
      ),
    ),
    inline(
      proof(
        inline`${space}Sketch the moves: (i) the first; (ii) the second. Leave the crux as ${TODO(inline`the step that makes it work`)}.${space}`,
      ),
    ),
    inline(
      example(
        inline`a worked instance`,
        inline`${space}Show the computation once, so the reader has a model to imitate.${space}`,
      ),
    ),
    inline(yourturn(inline`${space}Now restage the example as your own computation. ${workspace({ n: 3 })}${space}`)),
    inline(recall(inline`A question to park in the margin.`), space, remark(inline`An aside that doesn't need a box.`)),
  )
}
