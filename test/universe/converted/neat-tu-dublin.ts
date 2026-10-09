// Converted from test/universe/corpus/neat-tu-dublin.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  auto,
  bibliography,
  black,
  block,
  blocks,
  define,
  doc,
  emph,
  external,
  figure,
  fr,
  heading,
  image,
  importFile,
  importPackage,
  inline,
  label,
  labelled,
  left,
  linebreak,
  link,
  lorem,
  m,
  pagebreak,
  parbreak,
  path,
  pt,
  raw,
  ref,
  right,
  show,
  space,
  strong,
  table,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const template = external('template')
  const info = define('info').pos('arg1', T.content).named('title', T.any, null).returns(T.any).external()
  const danger = define('danger').pos('arg1', T.content).named('title', T.any, null).returns(T.any).external()
  const subfigure = define('subfigure')
    .rest('args', T.any)
    .named('caption', T.content, [])
    .named('columns', T.any, null)
    .named('label', T.any, null)
    .named('placement', T.any, null)
    .named('prefix', T.any, null)
    .returns(T.any)
    .external()
  const tip = define('tip').pos('arg1', T.content).named('title', T.any, null).returns(T.any).external()
  const widetable = define('widetable')
    .pos('arg1', T.any)
    .pos('arg2', T.content)
    .pos('arg3', T.content)
    .pos('arg4', T.content)
    .pos('arg5', T.content)
    .pos('arg6', T.content)
    .pos('arg7', T.content)
    .pos('arg8', T.content)
    .pos('arg9', T.content)
    .pos('arg10', T.content)
    .named('columns', T.any, null)
    .returns(T.any)
    .external()
  const ac = define('ac').pos('arg1', T.any).returns(T.any).external()
  const acp = define('acp').pos('arg1', T.any).returns(T.any).external()
  const equation = define('equation').pos('arg1', T.any).returns(T.any).external()
  const paragraph = define('paragraph').pos('arg1', T.content).named('title', T.any, null).returns(T.any).external()
  const acr = define('acr').pos('arg1', T.any).returns(T.any).external()
  const faq = define('faq').pos('arg1', T.content).returns(T.any).external()
  const success = define('success').pos('arg1', T.content).returns(T.any).external()
  const definition = define('definition').pos('arg1', T.content).returns(T.any).external()
  const theorem = define('theorem').pos('arg1', T.content).returns(T.any).external()
  const proof = define('proof').pos('arg1', T.content).pos('arg2', T.content).returns(T.any).external()
  const abbreviations = external('abbreviations')
  const template_with = define('with')
    .named('abbreviations', T.any, null)
    .named('abstract', T.any, null)
    .named('abstract-alignment', T.any, null)
    .named('acknowledgments', T.content, [])
    .named('appendix-ai', T.any, null)
    .named('authors', T.any, null)
    .named('bib', T.any, null)
    .named('chapter-alignment', T.any, null)
    .named('course', T.content, [])
    .named('course-code', T.content, [])
    .named('declaration-signature', T.any, null)
    .named('department', T.content, [])
    .named('is-thesis', T.any, null)
    .named('subtitle', T.content, [])
    .named('supervisors', T.any, null)
    .named('thesis-type', T.content, [])
    .named('title', T.content, [])
    .named('university', T.content, [])
    .returns(T.any)
    .external(template)
  return doc(
    m.lines(
      importPackage('@preview/neat-tu-dublin:1.0.0', [
        template,
        info,
        danger,
        subfigure,
        tip,
        widetable,
        ac,
        acp,
        equation,
        paragraph,
        acr,
        faq,
        success,
        definition,
        theorem,
        proof,
      ]),
      importFile('abbreviations.typ', [abbreviations]),
    ),
    show(
      template_with({
        title: inline`Neat-TU-Dublin`,
        subtitle: inline`A Typst template for TU Dublin reports`,
        department: inline`School of Computer Science`,
        courseCode: inline`TU123`,
        course: inline`BSc in Special Course`,
        university: inline`Technological University Dublin`,
        authors: [{ name: 'Max Mustermann', num: 'C12345678' }],
        supervisors: ['Dr. Serious Person'],
        declarationSignature: './template/figures/signature.png',
        isThesis: true,
        thesisType: inline`Project Report`,
        abbreviations: abbreviations,
        abstractAlignment: left,
        chapterAlignment: right,
        bib: bibliography(path('bibliography.bib')),
        abstract: lorem(200),
        acknowledgments: inline(lorem(50)),
        appendixAi: {
          reportWriting: ['No AI was used to create this template!', 'But you might use AI for yours.'],
          research: [],
          design: [],
          coding: [],
          other: [],
        },
      }),
    ),
    m.heading(1, 'Welcome to Neat-TU-Dublin!'),
    inline`${strong(inline`Neat-TU-Dublin`)} is a template for academic writing, designed for theses, dissertations,
and reports at TU Dublin.`,
    inline(
      info(
        { title: 'About Neat-TU-Dublin' },
        inline`${space}Neat-TU-Dublin is built from Angelo Nazzaro's ${link('https://github.com/angelonazzaro/typxidian', inline`Typxidian`)}
template${ref(label('typxidian'))}. It draws its colour palette from TU Dublin's brand guidelines.${space}`,
      ),
    ),
    'The purpose of this document is to act both as a showcase and as documentation of the template.',
    m.lines(
      inline(labelled(heading({ depth: 2 }, inline('Bundled Packages')), label('sec:packages'))),
      'Neat-TU-Dublin comes with the following packages pre-included:',
    ),
    m.list(
      m.item([raw('cetz:0.4.2'), ';']),
      m.item([raw('cetz-plot:0.1.3'), ';']),
      m.item([raw('booktabs:0.0.4'), ';']),
      m.item([raw('wrap-it:0.1.1'), ';']),
      m.item([raw('subpar:0.2.2'), ';']),
      m.item([raw('fontawesome:0.6.0'), ';']),
      m.item([raw('decasify:0.11.3'), ';']),
      m.item([raw('codly:1.3.0'), ';']),
      m.item([raw('codly-languages:0.1.10'), ';']),
      m.item(['a custom local version of', space, raw('acrostiche'), '.']),
    ),
    m.lines(
      inline`Optional dependency in ${raw('dependencies.typ')}:`,
      m.list(m.item([raw('plotsy-3d:0.2.1'), space, '(currently commented out).'])),
    ),
    'All functionalities can be accessed directly from the template.',
    inline(
      danger(
        { title: 'Working with Chapters' },
        inline`${space}Typst does not currently support ${emph(inline`textual inclusion`)}, meaning that you
can use only dependencies directly imported in the current file. For this reason, if you plan
to split your document into standalone chapters, you must include the package in each file to
access its functions.`,
      ),
    ),
    m.heading(2, 'Template Structure'),
    inline`The template separates each chapter (first level heading) with one or two blank pages. Each
new chapter starts on an odd page. You may customize the 'Chapter' supplement by overwriting
the ${raw('chapter-supplement')} parameter.`,
    inline`Neat-TU-Dublin offers two chapter heading styles: "basic" and "wonderland". You can set it by
setting the ${raw('chapter-style')} parameter. Below there is a comparison between the two styles:
${subfigure({ columns: [fr(1), fr(1)], caption: inline`Basic vs Wonderland chapter heading styles.` }, figure({ caption: inline`Basic style.` }, block({ stroke: add(pt(1), black) }, image(path('./figures/basic.png')))), figure({ caption: inline`Wonderland style.` }, block({ stroke: add(pt(1), black) }, image(path('./figures/wonderland.png')))))}`,
    inline`You can customize the alignment of first-level headings (including table of contents) through
the ${raw('chapter-alignment')} parameter. The abstract, introduction and acknowledgment page
headings can be aligned through the ${raw('abstract-alignment')} parameter.`,
    m.heading(3, 'Front Matter'),
    'This section is dedicated to explaining how to customize the front matter of the template.',
    m.heading(4, 'Cover Page'),
    inline`The cover page is highly customizable and supports an ${emph(inline`authors-only`)} view and
a ${emph(inline`supervisors`)} view.`,
    inline`The authors-only view is designed for reports, notes and similar documents, while the supervisors
view is intended for more formal documents such as theses and dissertations. Both views are
displayed in ${ref(label('fig:viewmodes'))}.`,
    inline(
      subfigure(
        {
          columns: [fr(1), fr(1)],
          placement: auto,
          caption: inline`Cover page view modes.`,
          label: label('fig:viewmodes'),
        },
        figure(
          { caption: inline`Authors only view.` },
          block({ stroke: add(pt(1), black) }, image(path('./figures/authors-view.png'))),
        ),
        figure(
          { caption: inline`Supervisors view.` },
          block({ stroke: add(pt(1), black) }, image(path('./figures/supervisors-view.png'))),
        ),
      ),
    ),
    m.lines(
      inline`The authors-only view is triggered when the ${raw('supervisors')} parameter is left empty. The
${raw('authors')} parameter can be either an array of strings or an array of dictionaries. In
the latter case, fields will be displayed in insertion order. Fields are discarded. ${parbreak()}
Additional customization can be done via the following parameters:`,
      m.list(
        m.item([raw('university'), ': name of the university - Defaults to TU Dublin;']),
        m.item([raw('logo'), ': university logo (defaults to', space, raw('src/figures/logo.svg'), ');']),
        m.item([raw('logo-width'), ': logo width (defaults to', space, raw('150pt'), ');']),
        m.item([raw('department'), ': the department name (defaults to', space, raw('none'), ');']),
        m.item([raw('course'), ': the course you are enlisted to (defaults to', space, raw('none'), ');']),
        m.item([
          raw('course-code'),
          ': the CAO course code you are enlisted to (defaults to',
          space,
          raw('none'),
          ');',
        ]),
        m.item([
          raw('is-thesis'),
          ': if',
          space,
          raw('true'),
          ', the thesis type is emphasized on the cover (defaults to',
          space,
          raw('false'),
          ');',
        ]),
        m.item([
          raw('thesis-type'),
          ': arbitrary string that will be displayed in uppercase above the title (defaults to',
          space,
          raw('none'),
          ').',
        ]),
      ),
    ),
    m.heading(4, 'Declaration'),
    inline`Since most reports in TU Dublin require a declaration, the text has already been added. To sign
this, you must populate the ${raw('declaration-signature')} parameter.`,
    inline`${linebreak()} The date under the signature and the cover page are filled by today's date automatically,
but can be set through the ${raw('date')} parameter.`,
    m.heading(4, 'Miscellaneous'),
    inline`You can add additional content before the main body by passing the ${raw('abstract')}, ${raw('quote')},
${raw('introduction')} and ${raw('acknowledgments')} parameters. If populated, the template
will add these pages ${emph(inline`before`)} the table of contents. The title alignment for
these pages can be customized through the ${raw('abstract-alignment')} parameter.`,
    inline`Additionally, you can populate ${raw('before-content')} and ${raw('after-content')} to add ${emph(inline`any`)}
additional content ${emph(inline`before`)} the abstract and ${emph(inline`after`)} the bibliography.
For AI usage disclosure, use the ${raw('appendix-ai')} template argument with the sections ${raw('report-writing')},
${raw('research')}, ${raw('design')}, ${raw('coding')}, and ${raw('other')}. ${pagebreak()}`,
    m.heading(3, 'Fonts'),
    inline`You can customize both the main font and math font through the ${raw('font')} and ${raw('math-font')}
parameters respectively. Also, you can set custom font sizes by passing a dictionary to the
${raw('font-sizes')} parameter. The default font sizes used are the following: ${raw({ block: true, lang: 'typ' }, '#let sizes = (\n  chapter: 26pt,\n  section: 18pt,\n  subsection: 16pt,\n  subsubsection: 14pt,\n  subsubsubsection: 12pt,\n  body: 11pt,\n)')}
Note that the dictionary passed to the ${raw('font-sizes')} parameter must have the same fields
as above.`,
    m.heading(3, 'Links, citations and References'),
    inline`You can customize links, citations and references appearance. Citations are customizable through
the ${raw('citation-style')} and ${raw('cite-color')} parameters. For links and references you
can customize their color through the ${raw('link-color')} and ${raw('ref-color')} parameters
respectively.`,
    m.heading(3, 'Table of Contents and Numbering'),
    inline`Figures, tables, equations and custom environments numbering is dependent on the current chapter.
For instance, a figure under the first chapter will be numbered as 'Figure 1.x' and so on. The
counter resets on each chapter.`,
    inline`The table of contents contains dynamic list of figures, tables, definitions and theorems meaning
that they will be rendered only if there is at least one element. ${pagebreak()}`,
    m.heading(1, 'Custom Environments'),
    inline(
      tip(
        { title: 'Referencing' },
        inline`${space}All custom environments listed in this chapter are referenceable like any other figure
environment.${space}`,
      ),
    ),
    m.heading(2, 'SubFigures'),
    inline`Neat-TU-Dublin uses the ${raw('subpar')} package (${ref(label('sec:packages'))}). To ensure
consistent numbering of subfigures, you must use the ${raw('subfigure(...args)')} function.
Its use is the same as ${raw('subpar.grid()')}. For instance, the following code: ${raw({ block: true, lang: 'typ' }, '#subfigure(\n  columns: (1fr, 2fr),\n  figure(\n    image("./figures/dog.jpg"),\n    caption: [This is a dog.]\n  ),\n  <dog>,\n  figure(\n    image("./figures/cat.jpg"),\n    caption: [This is a cat.]\n  ),\n  <cat>,\n  caption: [This is a figure with subfigures.],\n  label: <fig:example>\n)')}
will output the following subfigure:`,
    inline(
      subfigure(
        { columns: [fr(1), fr(2)], caption: inline`This is a figure with subfigures.`, label: label('fig:example') },
        figure({ caption: inline`This is a dog.` }, image({ width: pt(100) }, path('./figures/dog.jpg'))),
        label('dog'),
        figure({ caption: inline`This is a cat.` }, image({ width: pt(200) }, path('./figures/cat.jpg'))),
        label('cat'),
      ),
    ),
    m.heading(2, 'Wide Tables'),
    inline`Use ${raw('widetable(..args)')} for full-width styled tables. It wraps ${raw('table')} and adds
a final spanning row so the table reliably occupies the full text width.`,
    inline`Typst tables do not fill the width of the page by default. The ${raw('widetable()')} method
can be used for pre-styled tables that take up the full width of the page and alternate highlighted
rows for easier visibility.`,
    inline(
      raw(
        { block: true, lang: 'typ' },
        '#figure(\n  widetable(\n    columns: (1fr, 2fr, 1fr),\n    table.header([Component], [Purpose], [Source]),\n    [Cover page], [Generates the title page layout], [pages/cover.typ],\n    [Table of contents], [Renders TOC entries up to depth 3], [pages/toc.typ],\n    [AI appendix], [Prints grouped AI prompt disclosures], [pages/appendixAi.typ],\n  ),\n  caption: [Example wide table in Neat-TU-Dublin.],\n  kind: table,\n  supplement: [Table],\n)',
      ),
    ),
    inline(
      figure(
        { caption: inline`Example wide table in Neat-TU-Dublin.`, kind: table, supplement: inline`Table` },
        widetable(
          { columns: [fr(1), fr(2), fr(1)] },
          table.header(inline`Component`, inline`Purpose`, inline`Source`),
          inline`Cover page`,
          inline`Generates the title page layout`,
          inline`pages/cover.typ`,
          inline`Table of contents`,
          inline`Renders TOC entries up to depth 3`,
          inline`pages/toc.typ`,
          inline`AI appendix`,
          inline`Prints grouped AI prompt disclosures`,
          inline`pages/appendixAi.typ`,
        ),
      ),
    ),
    m.lines(
      m.heading(2, 'Code Blocks'),
      inline`Due to the inclusion of the ${raw('codly')} packages, code blocks are improved from standard
Typst ones. Certain syntax highlighting is supported, as well as line numbers. Refer to the
${link('https://typst.app/universe/package/codly/', 'Codly Docs')} for how to use these fully.`,
    ),
    m.heading(2, 'Acronyms'),
    'The custom version of Acrostiche developed for Typxidian and included in Neat-TU-Dublin allows you to define acronyms and then consume them later, which hyperlink to the relevant abbreviation in the table of abbreviations.',
    inline`The first time an acronym appears, i.e. ${ac('UI')}, it appears fully and provides the acronym.
In future occurrences, ${ac('UI')}, it uses just the acronym with a link to the table. If you
create an array in the abbreviations, you can add support for acronym plurals, i.e. ${acp('UI')}.`,
    inline`The bullet pointing only occurs if it can match the words to the abbreviation, for example,
${ac('2FA')} will not bold as the word ${raw('two')} can not be connected to the number ${raw('2')},
the remainder of Acrostiche's features are supported.`,
    m.lines(
      m.heading(2, 'No Numbered Equations'),
      inline`Sometimes you have the need to write block equations with no numbering. Neat-TU-Dublin provides
a built-in function so that you don't have to manually set the numbering to ${raw('none')} when
writing such equations. All you have to do is call the ${raw('equation(content, numbering: false)')}
function. For instance, ${raw('#equation($ sigma(x) = frac(1,1 + exp(-x)) $)')} will display:`,
    ),
    inline(equation(unsafeRaw.math.block`sigma(x) = frac(1, 1 + exp(-x))`)),
    m.heading(2, 'Paragraphs'),
    inline`The ${raw('paragraph(body, title: "", kind: "par", supplement: "Paragraph")')} function
mimics LaTeX's ${raw('\\paragraph{}')} command. For instance, the following code: ${raw({ block: true, lang: 'typ' }, '#paragraph([This is a paragraph], title: "LaTeX like paragraph")')}`,
    inline(
      paragraph(
        { title: 'LaTeX like paragraph' },
        inline`This is a paragraph. This is still a paragraph: ${lorem(25)} Still a paragraph!!`,
      ),
      space,
      pagebreak(),
    ),
    m.heading(2, 'Text and Math Callouts'),
    inline`As anticipated, Neat-TU-Dublin's parent, Typxidian is inspired by Obsidian. The main Obsidian
callouts are available in the template through the following functions: ${raw('info')}, ${raw('danger')},
${raw('success')}, ${raw('tip')}, ${raw('faq')}.`,
    inline`All functions share the same signature, we will report only the ${raw('info')} signature: ${raw({ block: true, lang: 'typ' }, '    title: "Info",\n    icon: fa-icon("info-circle"),\n    fill: colors.info.bg.saturate(5%),\n    title-color: colors.info.title,\n    supplement: [Info],')}
Below is a showcase of each callout:`,
    inline(
      info(
        blocks(
          inline(lorem(25)),
          inline(unsafeRaw.math.block`x + y = integral_0^inf x y d x`),
          inline`${acr('AI')}: ${lorem(10)}`,
        ),
      ),
      space,
      faq(
        blocks(
          inline(lorem(25)),
          inline(unsafeRaw.math.block`x + y = integral_0^inf x y d x`),
          inline`${acr('ML')}: ${lorem(10)}`,
        ),
      ),
      space,
      tip(
        blocks(
          inline(lorem(25)),
          inline(unsafeRaw.math.block`x + y = integral_0^inf x y d x`),
          inline`${acr('ANN')}: ${lorem(10)}`,
        ),
      ),
      space,
      success(
        blocks(
          inline(lorem(25)),
          inline(unsafeRaw.math.block`x + y = integral_0^inf x y d x`),
          inline`${acr('AF')}: ${lorem(10)}`,
        ),
      ),
      space,
      danger(
        blocks(inline(lorem(25)), inline(unsafeRaw.math.block`x + y = integral_0^inf x y d x`), inline(lorem(10))),
      ),
    ),
    inline`Neat-TU-Dublin also provides math callouts, mimicking "Alice in a Differentiable Wonderland"
boxes. Specifically, you can use: ${raw('definition')}, ${raw('theorem')} and ${raw('proof')}
callouts. The ${raw('definition')} and ${raw('theorem')} callouts share the same signature:
${raw({ block: true, lang: 'typ' }, '  body,\n  title: "Definition",\n  supplement: [Definition.],')}
while the proof box replaces the ${raw('title')} parameter with the ${raw('of')} parameter to
reference the corresponding theorem.`,
    inline(definition(blocks(inline(lorem(20)), inline(unsafeRaw.math.block`x + y = 1`)))),
    inline(
      labelled([theorem(blocks(inline(lorem(20)), inline(unsafeRaw.math.block`x + y = 1`))), space], label('th-1')),
    ),
    inline(proof(blocks(inline(lorem(20)), inline(unsafeRaw.math.block`x + y = 1`)), inline(ref(label('th-1'))))),
    m.lines(
      m.heading(2, 'Appendix Subsection'),
      inline`Depending on the ${raw('chapter-numbering')} parameter, the appendix will show the relative
numbering for sections automatically.`,
    ),
    inline`The environment also handles the template's page header so to avoid showing a ghost chapter
in the title. This is visible on the top of the ${ref(label('appendix_subsubsection'))} page,
where an example of how to correctly show the numbering for subfigures is also given.`,
    inline(pagebreak()),
    inline`When using the ${raw('#figure')} environment, the template automatically takes care of the numbering.
The ${raw('#subfigure')} environment however requires additional help, as it uses ${raw('subpar.grid')}
underneath which is not aware of the prefix change.`,
    inline`To correctly display a ${raw('#subfigure')} so that its numbering is coherent with the chapter,
one must pass the "prefix" parameter (using ${ref(label('fig:example'))} as reference):`,
    inline`${raw({ block: true, lang: 'typ' }, '#subfigure(\n  columns: (1fr, 2fr),\n  figure(\n    image("./figures/dog.jpg"),\n    caption: [This is a dog.]\n  ),\n  <dog>,\n  figure(\n    image("./figures/cat.jpg"),\n    caption: [This is a cat.]\n  ),\n  <cat>,\n  prefix: "A",\n  caption: [This is a figure with subfigures.],\n  label: <fig:example2>\n)')}
will output the following subfigure having coherent prefix with the Appendix:`,
    inline(
      subfigure(
        {
          columns: [fr(1), fr(2)],
          prefix: 'A',
          caption: inline`This is a figure with subfigures, but in the Appendix.`,
          label: label('fig:example2'),
        },
        figure({ caption: inline`This is a dog.` }, image({ width: pt(100) }, path('./figures/dog.jpg'))),
        label('dog'),
        figure({ caption: inline`This is a cat.` }, image({ width: pt(200) }, path('./figures/cat.jpg'))),
        label('cat'),
      ),
    ),
    inline(linebreak()),
    inline`The ${raw('prefix')} parameter allows figures, tables and similar environments to also be correctly
displayed in the Table of Contents.`,
    inline(pagebreak()),
    m.lines(
      inline(labelled(heading({ depth: 3 }, inline('Appendix Subsubsection')), label('appendix_subsubsection'))),
      'Example of a subsubsection and of the page header being appropriately set for the Appendix environment.',
    ),
  )
}
