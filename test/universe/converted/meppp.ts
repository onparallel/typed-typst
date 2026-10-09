// Converted from test/universe/corpus/meppp.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  bibliography,
  doc,
  figure,
  grid,
  image,
  inline,
  label,
  labelled,
  let_,
  lorem,
  m,
  path,
  pt,
  ref,
  space,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const [abstractDecl, abstract] = let_(
    'abstract',
    inline`${space}这是摘要。这是摘要。这是摘要。这是摘要。这是摘要。这是摘要。这是摘要。这是摘要。这是摘要。这是摘要。这是摘要。这是摘要。这是摘要。这是摘要。这是摘要。这是摘要。这是摘要。这是摘要。这是摘要。这是摘要。这是摘要。这是摘要。这是摘要。这是摘要。这是摘要。这是摘要。这是摘要。这是摘要。这是摘要。这是摘要。${space}`,
  )
  return doc(
    unsafeRaw.markup`#import ("@preview/meppp:0.2.3"): *`,
    abstractDecl,
    unsafeRaw.markup`#show: doc => meppp-lab-report(
  title: "这是实验标题",
  author: "我是作者",
  info: "这是作者信息",
  abstract: abstract,
  keywords: (
    "this is keyword1",
    "this is keyword2",
  ),
  author-footnote: [2200011000\\@stu.pku.edu.cn; +86 11451419198],
  doc,
)`,
    m.lines(
      m.heading(1, '引言'),
      '这是引言。这是引言。这是引言。这是引言。这是引言。这是引言。这是引言。这是引言。这是引言。这是引言。',
    ),
    m.lines(
      m.heading(1, '实验装置'),
      '这是实验装置。这是实验装置。这是实验装置。这是实验装置。这是实验装置。这是实验装置。这是实验装置。这是实验装置。这是实验装置。这是实验装置。这是实验装置。',
    ),
    m.heading(2, '第一个实验装置'),
    inline(
      labelled(figure({ caption: inline`这是第一个实验装置的示意图` }, image(path('example_fig.png'))), label('img')),
    ),
    '第一个实验装置。第一个实验装置。第一个实验装置。第一个实验装置。第一个实验装置。第一个实验装置。第一个实验装置。第一个实验装置。第一个实验装置。第一个实验装置。第一个实验装置。',
    m.lines(
      m.heading(1, '结果与讨论'),
      inline`结果与讨论。这是结果与讨论。这是结果与讨论。这是结果与讨论。这是结果与讨论。这是结果与讨论。这是结果与讨论。这是结果与讨论。这是结果与讨论。这是结果与讨论。这是结果与讨论。
${figure({ caption: inline`logos` }, grid({ gutter: pt(15), columns: 2 }, unsafeRaw.code<any>`subfigure(pku-logo())`, unsafeRaw.code<any>`subfigure(pku-logo())`, unsafeRaw.code<any>`subfigure(pku-logo())`, unsafeRaw.code<any>`subfigure(pku-logo())`))}`,
    ),
    inline(unsafeRaw.code<any>`meppp-tl-table(
  table(
    columns: 4,
    rows: 2,
    table.header([Item1], [Item2], [Item3], [Item4]),
    [Data1], [Data2], [Data3], [Data4],
  ),
)`),
    inline(lorem(80)),
    m.lines(
      m.heading(1, '结论'),
      inline`这是结论。这是结论。这是结论。这是结论。这是结论。这是结论。这是结论。这是结论。这是结论。这是结论。这是结论。这是结论。这是结论。这是结论。这是结论。这是结论。
${ref(label('kopka2004guide'))}`,
    ),
    m.lines(m.heading(1, '致谢'), inline(lorem(40), space, bibliography(path('example_ref.bib')))),
  )
}
