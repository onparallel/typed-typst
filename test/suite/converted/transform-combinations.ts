// Converted from test/suite/corpus/transform-combinations.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { block, deg, doc, inline, pt, rect, rotate, space } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      block(
        inline(
          space,
          rect({ width: pt(10), height: pt(10) }),
          space,
          block(
            { inset: pt(10) },
            inline(
              space,
              rect({ width: pt(10), height: pt(10) }),
              space,
              rotate(
                deg(45),
                block(
                  { inset: pt(10) },
                  inline(
                    space,
                    block(
                      { inset: pt(10) },
                      inline`${space}${rect({ width: pt(10), height: pt(10) })} Hello world ${rect({ width: pt(10), height: pt(10), radius: pt(10) })}
${rotate(deg(45), block({ inset: pt(10) }, inline(space, rect({ width: pt(10), height: pt(10), radius: pt(10) }), space, rect({ width: pt(10), height: pt(10), radius: pt(10) }), space)))}${space}`,
                    ),
                    space,
                  ),
                ),
              ),
              space,
            ),
          ),
          space,
        ),
      ),
    ),
  )
}
