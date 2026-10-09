// Converted from test/universe/corpus/chatter.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  blocks,
  define,
  doc,
  emph,
  importPackage,
  inline,
  let_,
  linebreak,
  m,
  parbreak,
  show,
  space,
} from '../../../src/index.ts'

export default () => {
  const conf = define('conf').pos('arg1', T.any).named('title', T.content, []).returns(T.any).external()
  const log = define('log').pos('arg1', T.content).named('number-lines', T.any, null).returns(T.any).external()
  const say = define('say').pos('arg1', T.any).pos('arg2', T.content).returns(T.any).external()
  const [aDecl, a] = let_('a', 'Sam')
  const [dDecl, d] = let_('d', 'Dog')
  return doc(
    inline(
      importPackage('@preview/chatter:0.1.0', [conf, log, say]),
      space,
      show((doc_2, ctx) => conf({ title: inline`My assignment ${linebreak()} name` }, doc_2)),
    ),
    m.lines(aDecl, dDecl),
    inline(
      log(
        { numberLines: 3 },
        blocks(
          'Exercitation est dolore irure velit labore id. Eiusmod sit voluptate dolor aliqua exercitation ex sint laborum qui duis qui velit. Ipsum sint pariatur do fugiat excepteur et enim ipsum aliqua exercitation occaecat. Lorem est',
          inline(
            say(
              a,
              inline`Magna elit laboris tempor velit tempor irure aliqua. If you give me a star on github that would
legit make my day`,
            ),
          ),
          inline(
            say(
              a,
              inline`Magna elit laboris tempor velit tempor irure aliqua. Total giberish incoming: blaoieanasrotie
aens tua oarsteoka u aoskt oasotekaarsotqkusk akeskt aoaosetkaole saoisetakk`,
            ),
          ),
          inline(emph(inline`(Magna elit laboris tempor velit tempor irure aliqua.)`)),
          inline(
            say(
              d,
              inline`Could a brotha cop a bone sam? Kinda weird that I just switched from lorem ipsum to a fragment
of a story, but you're reading it so who's really to blame?`,
            ),
          ),
          inline(
            say(
              a,
              inline`Magna elit laboris tempor velit tempor irure aliqua. Total giberish incoming: blaoieanasrotie
aens tua oarsteoka u aoskt oasotekaarsotqkusk akeskt aoaosetkaole saoisetakk`,
            ),
          ),
          parbreak(),
        ),
      ),
    ),
  )
}
