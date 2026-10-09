// Converted from test/universe/corpus/casson-uom-thesis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  cite,
  define,
  doc,
  emph,
  external,
  figure,
  heading,
  horizon,
  image,
  importPackage,
  inline,
  label,
  labelled,
  link,
  lorem,
  m,
  pagebreak,
  path,
  pct,
  pt,
  quote,
  raw,
  ref,
  show,
  space,
  symbol,
  table,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const uomThesis = external('uom-thesis')
  const uomAppendix = external('uom-appendix')
  const uomThesis_with = define('with')
    .named('abstract', T.content, [])
    .named('acknowledgements', T.content, [])
    .named('author', T.any, null)
    .named('departmentordivision', T.any, null)
    .named('faculty', T.any, null)
    .named('font', T.any, null)
    .named('fontsize', T.any, null)
    .named('publications', T.content, [])
    .named('school', T.any, null)
    .named('title', T.any, null)
    .named('year', T.any, null)
    .returns(T.any)
    .external(uomThesis)
  return doc(
    importPackage('@preview/casson-uom-thesis:0.1.1', [uomThesis, uomAppendix]),
    show(
      uomThesis_with({
        title:
          'A data reduction algorithm incorporating a low power continuous wavelet transform for use in wearable electroencephalography systems',
        author: 'Alexander J. Casson',
        faculty: 'Science and Engineering',
        school: 'School of Engineering',
        departmentordivision: 'Department of Electrical and Electronic Engineering',
        abstract: inline`Abstract goes here`,
        publications: inline`Publications go here.`,
        acknowledgements: inline`Acknowledgements go here.`,
        year: '2024',
        font: 'times',
        fontsize: pt(11),
      }),
    ),
    m.lines(m.heading(1, 'Introduction'), inline(lorem(60))),
    m.lines(inline(pagebreak()), m.heading(1, 'Literature review'), m.heading(2, 'Introduction'), inline(lorem(60))),
    m.lines(
      m.heading(2, 'Example display items'),
      inline`This is an example of providing a cross-reference to ${ref(label('sec:really_good_work'))}.
Similarly, this is an example cross-reference to a sub-section, ${ref(label('sec:content'))}.`,
    ),
    inline`This is an example of adding references ${ref(label('ref:jCAS09'))} ${ref(label('ref:jCAS09a'))}
${ref(label('ref:jCAS10'))}. If you want the author name, or similar, you can use: ${cite({ form: 'author' }, label('ref:jCAS09'))}
in ${cite({ form: 'year' }, label('ref:jCAS09'))} introduced a really good idea. (This is for
when you primarily use numbered citations, but occasionally need an author’s name. If using
author names as the reference everywhere, change style=ieee in the biblatex setup above to whatever
reference style you want, and then just use the cite command.)`,
    inline`For adding ${emph(inline`emphasis`)} use the emph command or underscores such as ${emph(inline`emphasis`)}.`,
    inline`An example table is given in ${ref(label('table:example_tabular'))}. Note that the headings
are inside a table.header environment to tell screen readers which cells are headers and which
cells have the table content. Also, at the moment the template only adds the top horizontal
line to the table. The others are added by hand in the table definition below. Ideally the template
should detect the end of the header, and the end of the table, and add these horizontal lines
automatically, but this doesn't work yet. ${labelled(figure({ caption: inline`Probe results for design A.` }, table({ columns: 5 }, table.hline({ stroke: pt(1.5) }), table.header(table.cell({ align: horizon, rowspan: 2 }, inline`Participant`), table.cell({ colspan: 2 }, inline`Number (%)`), table.cell({ colspan: 2 }, inline`Duration (%)`), inline`Prime dresses`, inline`Non-prime dresses`, inline`Prime dresses`, inline`Non-prime dresses`), table.hline({ stroke: pt(1.5) }), inline`1`, inline`33.33`, inline`33.91`, inline`20.83`, inline`18.42`, inline`2`, inline`13.04`, inline`17.50`, inline`04.93`, inline`07.62`, inline`3`, inline`22.73`, inline`20.10`, inline`13.00`, inline`08.20`, inline`4`, inline`31.34`, inline`21.88`, inline`10.57`, inline`11.09`, inline`5`, inline`08.47`, inline`19.32`, inline`03.04`, inline`09.73`, table.hline(), inline`Mean`, inline`16.4`, inline`16.5`, inline`07.8`, inline`07.5`, inline`Standard deviation`, inline`09.7`, inline`06.6`, inline`05.4`, inline`03.3`, table.hline({ stroke: pt(1.5) }))), label('table:example_tabular'))}`,
    inline`This is an example equation in text ${unsafeRaw.math`2 sin omega t`}. ${ref(label('equ:example_equation'))}
is an example of a displayed equation.`,
    inline(labelled([unsafeRaw.math.block`a^2 + b^2 = c^2`, space], label('equ:example_equation'))),
    inline`Note that numbers are displayed differently in the text depending on how they are entered. Compare
for example 123456 vs. ${unsafeRaw.math`123456`}. Entering numbers directly, such as 1955, should
be used for ${emph(inline`text mode`)} numbers. That is, those representing text (dates, page
numbers, and similar). Numbers representing maths, or variables or similar, should be entered
inside $ $ so they are typeset in the same way as they appear in an equation. (This requires
a bit of discipline, but helps ensure consistent use of number styles throughout.)`,
    inline`This is an example of a quote in text ${quote({ attribution: cite(label('ref:jCAS10')) }, inline`The electroencephalogram (EEG) is a classic non-invasive method for measuring a person’s brainwaves`)}.
Below is an example of a displayed quote.`,
    inline(
      quote(
        { block: true, attribution: cite(label('ref:jCAS10')) },
        inline`${space}Electrodes are placed on the scalp to detect the microvolt-sized signals that result
from synchronized neuronal activity within the brain.${space}`,
      ),
    ),
    inline`${ref(label('fig:uom_logo'))} is an example figure. Sub-figures are not currently supported
by the temp;ate. There is an example commented out below which uses the subpar package, however
the way subpar re-labels the captions is incompatible with how they've been re-labelled already
in the template. The commented out example gets relatively close to being correct, but isn't
perfect. This will need to be re-visited in a future release.`,
    inline(
      labelled(
        [
          figure(
            {
              caption: inline`${space}Example figure. Full caption goes here. Often a short caption in ${symbol('[')}${symbol(']')}
is used as well as the main caption to keep the list of figures tidy; it gets messy if there
are long captions going over more than one line.${space}`,
            },
            image({ width: pct(30), alt: 'Put short description for screen readers here' }, path('image.svg')),
          ),
          space,
        ],
        label('fig:uom_logo'),
      ),
    ),
    inline`An example code listing is given below. Code in the body of the text can be included as ${raw('for')}
or ${raw('while')} or ${raw('main')}. This is just using the built in Typst functionality which
is fairly limited. Could look at ${link('https://typst.app/universe/package/codly/')} or similar
to give more functionality such as line numbers, ability to link to a piece of code, and similar.`,
    inline(
      labelled(
        [
          raw(
            { block: true, lang: 'python' },
            'import numpy as np\n\ndef my_filter(in,f_obj):\n    y = filter(f_obj,in)\n\n    return y',
          ),
          space,
        ],
        label('code:example'),
      ),
    ),
    m.lines(m.heading(2, 'Summary'), inline(lorem(60))),
    m.lines(
      inline(pagebreak()),
      inline(labelled(heading({ depth: 1 }, inline('Really good work')), label('sec:really_good_work'))),
      m.heading(2, 'Introduction'),
      inline(lorem(60)),
    ),
    m.lines(inline(labelled(heading({ depth: 2 }, inline('Content')), label('sec:content'))), inline(lorem(60))),
    m.lines(m.heading(3, 'Introduction'), inline(lorem(60))),
    m.lines(m.heading(3, 'Detail'), inline(lorem(60))),
    m.lines(m.heading(3, 'More detail'), inline(lorem(60))),
    m.lines(m.heading(3, 'Summary'), inline(lorem(60))),
    m.lines(m.heading(2, 'Summary'), inline(lorem(60))),
    m.lines(inline(pagebreak()), m.heading(1, 'Conclusions'), inline(lorem(60))),
    inline(pagebreak(), space, bibliography({ style: 'ieee', title: 'References' }, path('references.yml'))),
    m.lines(
      inline(pagebreak(), space, show(uomAppendix)),
      inline(labelled(heading({ depth: 1 }, inline('First Appendix')), label('first-appendix'))),
      inline(labelled(heading({ depth: 2 }, inline('Section in Appendix')), label('section-in-appendix'))),
      inline(
        labelled(
          [
            figure(
              { caption: inline`${space}Example figure in Appendix.${space}` },
              image({ width: pct(30), alt: 'Put short description for screen readers here' }, path('image.svg')),
            ),
            space,
          ],
          label('fig:uom_logo2'),
        ),
      ),
    ),
    m.lines(
      inline(pagebreak()),
      inline(labelled(heading({ depth: 1 }, inline('Second Appendix')), label('second-appendix'))),
      inline(labelled(heading({ depth: 2 }, inline('Section in Appendix')), label('section-in-appendix-1'))),
    ),
  )
}
