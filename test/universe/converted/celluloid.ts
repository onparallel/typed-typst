// Converted from test/universe/corpus/celluloid.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  define,
  doc,
  external,
  importPackage,
  inline,
  linebreak,
  lorem,
  m,
  show,
  space,
} from '../../../src/index.ts'

export default () => {
  const screenplay = external('screenplay')
  const scene = define('scene')
    .pos('arg1', T.content)
    .pos('arg2', T.content)
    .pos('arg3', T.content)
    .returns(T.any)
    .external()
  const intro = define('intro').pos('arg1', T.content).returns(T.any).external()
  const dialogue = define('dialogue')
    .pos('arg1', T.content)
    .pos('arg2', T.content)
    .named('paren', T.any, null)
    .returns(T.any)
    .external()
  const parenthetical = define('parenthetical').pos('arg1', T.any).returns(T.any).external()
  const moreDialogue = define('more-dialogue').pos('arg1', T.content).returns(T.any).external()
  const transition = define('transition').pos('arg1', T.content).returns(T.any).external()
  const titleOver = define('title-over').pos('arg1', T.content).returns(T.any).external()
  const action = define('action').pos('arg1', T.content).returns(T.any).external()
  const screenplay_with = define('with')
    .pos('arg1', T.content)
    .named('author', T.content, [])
    .named('contact', T.content, [])
    .returns(T.any)
    .external(screenplay)
  return doc(
    m.lines(
      importPackage('@preview/celluloid:0.1.0', [
        screenplay,
        scene,
        intro,
        dialogue,
        parenthetical,
        moreDialogue,
        transition,
        titleOver,
        action,
      ]),
      show(
        screenplay_with(
          {
            author: inline`John Doe`,
            contact: inline`${space}John Doe${linebreak()} 123 Hickory Street${linebreak()} Chicago, IL 12345${linebreak()}
john.doe@example.com${space}`,
          },
          inline`Lorem Ipsum`,
        ),
      ),
    ),
    inline(scene(inline`int`, inline`a place`, inline`day`)),
    inline`We introduce a character ${intro(inline`Jimminy`)}.`,
    inline(lorem(50)),
    inline(dialogue(inline`Jimminy`, inline(parenthetical(lorem(5)), space, lorem(10)))),
    inline(lorem(10)),
    inline(moreDialogue(inline(lorem(2)))),
    inline(lorem(107)),
    inline(
      transition(inline`intercut with`),
      space,
      scene(inline`int`, inline`somewhere elese`, inline`day`),
      space,
      lorem(50),
    ),
    inline(titleOver(inline`Disco City, 1978`)),
    inline(dialogue({ paren: 'O.S.' }, inline`Jimminy`, inline(parenthetical(lorem(5)), space, lorem(400)))),
    inline(lorem(50)),
    inline`${action(inline`A thing`)} Happens suddenly ${action(inline`A character`)} Looks on, helpless.`,
  )
}
