// Converted from test/universe/corpus/unified-uia-thesis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  blocks,
  cm,
  define,
  doc,
  em,
  external,
  figure,
  fr,
  grid,
  image,
  importPackage,
  includeFile,
  inline,
  label,
  labelled,
  m,
  pagebreak,
  path,
  pct,
  raw,
  ref,
  show,
  space,
  table,
  toml,
  unsafeRaw,
  v,
} from '../../../src/index.ts'

export default () => {
  const define_2 = define('define').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const report = external('report')
  const report_with = define('with')
    .named('appendices', T.any, null)
    .named('frontmatter', T.any, null)
    .named('meta', T.any, null)
    .named('references', T.any, null)
    .returns(T.any)
    .external(report)
  return doc(
    importPackage('@preview/unified-uia-thesis:0.1.0', [define_2, report]),
    show(
      report_with({
        meta: toml(path('meta.toml')),
        frontmatter: includeFile('frontmatter.typ'),
        references: bibliography(path('references.yml')),
        appendices: includeFile('appendices.typ'),
      }),
    ),
    m.heading(1, 'Introduction'),
    'These are the examples from the original LaTeX template, converted to Typst.',
    m.lines(
      m.heading(2, 'Some Typst examples'),
      m.heading(3, 'Using the Bibliography'),
      inline`This is an example of how to use the bibliography and citations. Cite to Einstein ${ref(label('einstein'))},
or something else ${ref(label('dirac'))}.`,
    ),
    m.lines(m.heading(4, 'Appendices'), inline`You can also reference an appendix, like ${ref(label('appendix-1'))}.`),
    m.lines(m.heading(3, 'Writing Mathematics'), 'This is some examples of how to write math in Typst.'),
    inline`${labelled([unsafeRaw.math.block`y(x) = (sin x)/e^x`, space], label('example'))} We can refer
to the equation by using the label, like this: ${ref(label('example'))}`,
    inline`We can choose whether to number the equation or not, omitting a label will result in a non-numbered
equation: ${unsafeRaw.math.block`y(x) = (sin x)/e^x`}`,
    inline`Lastly, we can write inline math: ${unsafeRaw.math`y = a dot x + b`}`,
    m.lines(m.heading(3, 'Programming Code'), inline`Inline MATLAB code: ${raw('variabel = max(input)')}`),
    inline`MATLAB code in section ${figure({ caption: 'Some code' }, raw({ block: true, lang: 'matlab' }, '  for i = 1 : 10\n  % write code here\n  end'))}`,
    m.lines(
      inline(pagebreak()),
      m.heading(3, 'Inserting Tables'),
      inline`${labelled([figure({ caption: 'The table caption' }, table({ columns: 2 }, 'Variable', 'Value', unsafeRaw.math`theta`, unsafeRaw.math`10`, unsafeRaw.math`omega`, unsafeRaw.math`40`)), space], label('table1'))}
This table can be referred to by using the label, like this: ${ref(label('table1'))}.`,
    ),
    m.lines(
      m.heading(3, 'Including Figures'),
      inline`${labelled([figure({ caption: 'The figure caption' }, image({ width: pct(70) }, path('UIA_no.svg'))), space], label('image-label'))}
This figure can be referred to by using the label, like this: ${ref(label('image-label'))}.`,
    ),
    m.lines(
      m.heading(3, 'Multicolumn'),
      inline(
        grid(
          { columns: [fr(1), fr(1)], gutter: cm(1) },
          blocks(
            'Text to describe for example a photo. Here we can write really long sentences just to prove the concept of the minipage, which is that the text will follow the width of the minipage that we have specified.',
            inline`In this case, each column has the same width, using the best unit of all time: the ${raw('fr')}
unit, with a ${raw('1cm')} gutter between the columns: ${raw({ block: true, lang: 'typst' }, '#grid(\n  columns: (1fr, 1fr),\n  gutter: 1cm,\n  // content')}`,
            inline`We don't have to manually position this text, but if you wanted to, you could use the command
${raw('#v()')} with the amount to shift by, like ${raw('#v(1cm)')} or ${raw('#v(1fr)')} ${v(em(2))}
Here's some text that's after a ${raw('#v(2em)')}.`,
          ),
          image(path('UIA_no.svg')),
        ),
      ),
    ),
    m.lines(
      m.heading(3, 'Using the Glossary'),
      inline`To add entries to a glossary after the contents, use the ${raw('define()')} function where you
use the word first, or where it's most suitable to define it. Here is a ${define_2('definition', 'A statement of the exact meaning of a word, especially in a dictionary.')},
defined using: ${raw({ block: true, lang: 'typ' }, '#define("definition", "A statement of the exact meaning of a word, especially in a dictionary."')}`,
    ),
  )
}
