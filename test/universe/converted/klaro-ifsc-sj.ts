// Converted from test/universe/corpus/klaro-ifsc-sj.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  define,
  doc,
  heading,
  importPackage,
  inline,
  label,
  labelled,
  lorem,
  m,
  ref,
  show,
  space,
} from '../../../src/index.ts'

export default () => {
  const report = define('report')
    .pos('arg1', T.any)
    .named('authors', T.any, null)
    .named('date', T.any, null)
    .named('subtitle', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external()
  return doc(
    importPackage('@preview/klaro-ifsc-sj:0.1.0', [report]),
    show((doc_2, ctx) =>
      report(
        {
          title: 'Typst IFSC-SJ',
          subtitle: 'Um template para o Typst voltado para',
          authors: ['Gabriel Luiz Espindola Pedro'],
          date: '13 de Setembro de 2023',
        },
        doc_2,
      ),
    ),
    m.lines(
      m.heading(1, 'Soft'),
      m.heading(2, 'Close'),
      m.heading(3, 'Closest'),
      inline(ref(label('hard')), space, lorem(80)),
    ),
    m.heading(2, 'Softest'),
    inline(lorem(80)),
    m.heading(2, 'Softest'),
    inline(lorem(80)),
    inline(labelled(heading({ depth: 1 }, inline('Hard')), label('hard'))),
    inline(lorem(80)),
    m.heading(2, 'Hardest'),
    inline(lorem(80)),
  )
}
