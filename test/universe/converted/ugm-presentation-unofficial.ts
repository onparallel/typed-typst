// Converted from test/universe/corpus/ugm-presentation-unofficial.typ by scripts/convert-suite.ts — do not edit.
import {
  T,
  blocks,
  define,
  doc,
  em,
  grid,
  heading,
  importPackage,
  inline,
  lorem,
  m,
  parbreak,
  pt,
  show,
  text,
  unsafeRaw,
  v,
} from '../../../src/index.ts'

export default () => {
  const conf = define('conf').pos('arg1', T.any).named('num', T.any, null).returns(T.any).external()
  const quote_2 = define('quote').pos('arg1', T.content).returns(T.any).external()
  const section = define('section').pos('arg1', T.content).returns(T.any).external()
  const slide = define('slide').pos('arg1', T.content).returns(T.any).external()
  const title_2 = define('title').pos('arg1', T.content).returns(T.any).external()
  return doc(
    importPackage('@preview/ugm-presentation-unofficial:0.1.0', [conf, quote_2, section, slide, title_2]),
    show((doc_2, ctx) => conf({ num: 5 }, doc_2)),
    inline(title_2(blocks(m.lines(heading({ depth: 1 }, inline('Hiya Hiya Hiya')), inline(lorem(10)))))),
    inline(section(blocks(m.lines(heading({ depth: 2 }, inline('Mangtap')), inline(lorem(10)))))),
    inline(
      slide(
        blocks(
          m.lines(
            heading({ depth: 3 }, inline('Jadi gini')),
            inline(
              grid(
                blocks(m.list(m.item(['ini kiri'], inline(lorem(40)), inline(lorem(40))))),
                blocks(
                  m.list(
                    m.item(
                      ['ini kanan'],
                      inline(lorem(20)),
                      inline(unsafeRaw.math.block`H = mat(
          (partial^2 f) / (partial x_1 partial x_1), (partial^2 f) / (partial x_1 partial x_2), ..., (partial^2 f) / (partial x_1 partial x_n);
          (partial^2 f) / (partial x_2 partial x_1), (partial^2 f) / (partial x_2 partial x_2), ..., (partial^2 f) / (partial x_2 partial x_n);
          ..., ..., ..., ...;
          (partial^2 f) / (partial x_n partial x_1), (partial^2 f) / (partial x_n partial x_2), ..., (partial^2 f) / (partial x_n partial x_n)
        ) = mat(
          a_11, a_12, ..., a_1n;
          a_21, a_22, ..., a_2n;
          ..., ..., ..., ...;
          a_(n 1), a_(n 2), ..., a_(n n)
        )`),
                      inline(lorem(20)),
                    ),
                  ),
                ),
              ),
            ),
          ),
        ),
      ),
    ),
    inline(
      quote_2(
        blocks(
          inline(
            text(
              { size: pt(20) },
              blocks(inline`${v(em(2))} "Jadi, anunya diiniin, ininya diituin, itunya dianuin"`, '-Si anu-'),
            ),
          ),
          parbreak(),
        ),
      ),
    ),
  )
}
