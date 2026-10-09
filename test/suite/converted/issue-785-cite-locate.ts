// Converted from test/suite/corpus/issue-785-cite-locate.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  bibliography,
  context,
  doc,
  figure,
  heading,
  here,
  image,
  inline,
  label,
  labelled,
  m,
  outline,
  page,
  pagebreak,
  path,
  pt,
  rect,
  ref,
  set,
  show,
  where,
} from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(page, { width: pt(180) }), set(heading, { numbering: '1.' })),
    inline(outline({ title: inline`Figures`, target: where(figure, { kind: image }) })),
    inline(pagebreak()),
    m.lines(
      inline(labelled(heading({ depth: 1 }, inline('Introduction')), label('intro'))),
      inline(
        figure(
          { caption: inline`A pirate ${ref(label('arrgh'))} in ${ref(label('intro'))}` },
          rect({ height: pt(10) }),
        ),
      ),
    ),
    inline(context((ctx) => inline`Citation ${ref(label('distress'))} on page ${here(ctx).page()}`)),
    m.lines(
      show(bibliography, null),
      inline(bibliography({ style: 'chicago-shortened-notes' }, path('/assets/bib/works.bib'))),
    ),
  )
}
