// Converted from test/suite/corpus/ref-supplements.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  cm,
  doc,
  figure,
  heading,
  image,
  inline,
  label,
  labelled,
  m,
  math,
  path,
  ref,
  set,
  space,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(heading, { numbering: '1.', supplement: inline`Chapter` }),
      set(math.equation, { numbering: '(1)', supplement: inline`Eq.` }),
    ),
    m.lines(
      m.heading(1, 'Intro'),
      inline(
        labelled(
          [
            figure(
              { caption: inline`A cylinder.`, supplement: 'Fig' },
              image({ height: cm(1) }, path('/assets/images/cylinder.svg')),
            ),
            space,
          ],
          label('fig1'),
        ),
      ),
    ),
    inline(
      labelled(
        [
          figure(
            { caption: inline`A tiger.`, supplement: 'Tig' },
            image({ height: cm(1) }, path('/assets/images/tiger.jpg')),
          ),
          space,
        ],
        label('fig2'),
      ),
    ),
    inline(labelled([unsafeRaw.math.block`A = 1`, space], label('eq1'))),
    m.lines(
      set(math.equation, { supplement: null }),
      inline(labelled([unsafeRaw.math.block`A = 1`, space], label('eq2'))),
    ),
    inline`${ref(label('fig1'))}, ${ref(label('fig2'))}, ${ref(label('eq1'))}, (${ref(label('eq2'))})`,
    m.lines(
      set(ref, { supplement: null }),
      inline`${ref(label('fig1'))}, ${ref(label('fig2'))}, ${ref(label('eq1'))}, ${ref(label('eq2'))}`,
    ),
  )
}
