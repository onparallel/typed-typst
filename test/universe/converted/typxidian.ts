// Converted from test/universe/corpus/typxidian.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  auto,
  bibliography,
  black,
  block,
  blocks,
  center,
  define,
  doc,
  emph,
  external,
  figure,
  fr,
  heading,
  horizon,
  image,
  importFile,
  importPackage,
  inline,
  label,
  labelled,
  linebreak,
  link,
  lorem,
  m,
  pagebreak,
  parbreak,
  path,
  pct,
  pt,
  quote,
  raw,
  ref,
  right,
  show,
  space,
  strong,
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
  const equation = define('equation').pos('arg1', T.any).returns(T.any).external()
  const paragraph = define('paragraph').pos('arg1', T.content).named('title', T.any, null).returns(T.any).external()
  const acr = define('acr').pos('arg1', T.any).returns(T.any).external()
  const faq = define('faq').pos('arg1', T.content).returns(T.any).external()
  const success = define('success').pos('arg1', T.content).returns(T.any).external()
  const definition = define('definition').pos('arg1', T.content).returns(T.any).external()
  const theorem = define('theorem').pos('arg1', T.content).returns(T.any).external()
  const proof = define('proof').pos('arg1', T.content).pos('arg2', T.content).returns(T.any).external()
  const appendix = external('appendix')
  const abbreviations = external('abbreviations')
  const template_with = define('with')
    .named('abbreviations', T.any, null)
    .named('abstract', T.any, null)
    .named('abstract-alignment', T.any, null)
    .named('academic-year', T.content, [])
    .named('acknowledgments', T.content, [])
    .named('acknowledgments-alignment', T.any, null)
    .named('authors', T.any, null)
    .named('bib', T.any, null)
    .named('chapter-alignment', T.any, null)
    .named('course', T.content, [])
    .named('department', T.content, [])
    .named('is-thesis', T.any, null)
    .named('logo-width', T.any, null)
    .named('quote', T.any, null)
    .named('subtitle', T.content, [])
    .named('supervisors', T.any, null)
    .named('thesis-type', T.content, [])
    .named('title', T.content, [])
    .named('university', T.content, [])
    .returns(T.any)
    .external(template)
  const appendix_with = define('with')
    .named('chapter-numbering', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(appendix)
  return doc(
    m.lines(
      importPackage('@preview/typxidian:1.1.1', [
        template,
        info,
        danger,
        subfigure,
        tip,
        equation,
        paragraph,
        acr,
        faq,
        success,
        definition,
        theorem,
        proof,
        appendix,
      ]),
      importFile('abbreviations.typ', [abbreviations]),
    ),
    show(
      template_with({
        title: inline`TypXidian`,
        subtitle: inline`A template for academic writing written in Typst`,
        department: inline`Department of Computer Science`,
        course: inline`Master of Science (Computer Science)`,
        university: inline`University of Salerno`,
        academicYear: inline`2024-2025`,
        authors: [{ name: 'Mario Rossi', email: 'mario@rossi.it', num: 'Registration Number: XXXX' }],
        supervisors: ['Prof. Giuseppe Verdi', 'Prof. Mario Bianchi'],
        isThesis: true,
        thesisType: inline`master thesis`,
        abbreviations: abbreviations,
        abstractAlignment: center,
        chapterAlignment: right,
        bib: bibliography(path('bibliography.bib')),
        quote: quote({ block: true, quotes: true, attribution: inline`Some wise guy` }, inline(lorem(25))),
        acknowledgments: inline(lorem(50)),
        acknowledgmentsAlignment: add(horizon, center),
        abstract: lorem(200),
        logoWidth: pct(25),
      }),
    ),
    m.heading(1, 'Welcome to TypXidian!'),
    inline`${strong(inline`TypXidian`)} is a template for academic writing, thought for theses, disserations
and reports. It has been developed to be customizable to make it adhere to your specific requirements
with ease.`,
    inline(
      info(
        { title: 'About TypXidian' },
        inline`${space}TypXidian is based, both on color palette and functionalities, on ${link('https://obsidian.md', inline`Obsidian`)}
and "Alice in a Differentiable Wonderland" by Simone Scardapane ${ref(label('scardapane2024alicesadventuresdifferentiablewonderland'))}.
A twin LaTeX version of TypXidian is available at: ${link('https://github.com/robertodr01/LaXidiaN', inline`LaXidiaN`)}.${space}`,
      ),
    ),
    'The purpose of this document is to act both as a showcase and as documentation of the template.',
    m.lines(
      inline(labelled(heading({ depth: 2 }, inline('Bundled Packages')), label('sec:packages'))),
      'TypXidian comes with the following packages pre-included:',
    ),
    m.list(
      m.item([raw('cetz:0.4.2'), ';']),
      m.item([raw('cetz-plot:0.1.3'), ';']),
      m.item([raw('plotsy-3d:0.2.1'), ';']),
      m.item([raw('booktabs:0.0.4'), ';']),
      m.item([raw('wrap-it:0.1.1'), ';']),
      m.item([raw('subpar:0.2.2'), ';']),
      m.item([raw('fontawesome:0.6.0'), ';']),
      m.item([raw('decasify:0.10.1'), ';']),
      m.item(['a', space, emph(inline`custom`), space, 'version of', space, raw('acrostiche:0.6.0'), ';']),
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
    inline`TypXidian offers two chapter heading styles: "basic" and "wonderland". You can set it by setting
the ${raw('chapter-style')} parameter. Below there is a comparison between the two styles: ${subfigure({ columns: [fr(1), fr(1)], caption: inline`Basic vs Wonderland chapter heading styles.` }, figure({ caption: inline`Basic style.` }, block({ stroke: add(pt(1), black) }, image(path('./figures/basic.png')))), figure({ caption: inline`Wonderland style.` }, block({ stroke: add(pt(1), black) }, image(path('./figures/wonderland.png')))))}`,
    inline`You can customize the alignment of first-level headings (including table of contents) through
the ${raw('chapter-alignment')} parameter. The abstract, introductiom and acknowledgment pages
headings can be aligned through the ${raw('abstract-alignment')} parameter.`,
    m.heading(3, 'Front Matter'),
    'This section is dedicated to explaining how to customize the front matter of the template.',
    m.heading(4, 'Cover Page'),
    inline`The cover page is highly customizable and it supports a: ${emph(inline`authors-only`)} view
and ${emph(inline`supervisors`)} view.`,
    inline`The authors-only view is thought for reports, notes and similar documents, while the supervisor
view should be used for more formal documents such as theses and disseratations. Both view are
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
          block({ stroke: add(pt(1), black) }, image(path('./figures/authors-view.png'))),
        ),
      ),
    ),
    m.lines(
      inline`The authors-only view is triggered when the ${raw('supervisor')} parameter is left empty. The
${raw('authors')} parameter can be either an array of strings or an array of dictionaries. In
the latter case, fields will be displayed in insertion order. Fields are discarded. ${parbreak()}
Additional customization can be done via the following parameters:`,
      m.list(
        m.item([raw('university'), ': name of the university;']),
        m.item([raw('logo'), ': university logo (defaults to', space, raw('src/preview/figures/logo.svg'), ');']),
        m.item([raw('logo-width'), ': logo width (defaults to', space, raw('110pt'), ');']),
        m.item([
          raw('academic-year'),
          ': the academic year, e.g.',
          space,
          strong(inline`2024/2025`),
          space,
          '(defaults to',
          space,
          raw('none'),
          ');',
        ]),
        m.item([raw('department'), ': the department name (defaults to', space, raw('none'), ');']),
        m.item([raw('course'), ': the course you are enlisted to (defaults to', space, raw('none'), ');']),
        m.item([
          raw('is-thesis'),
          ': if',
          space,
          raw('true'),
          ', the “AUTHOR(S)” label changes to “CANDIDATE(S)” (defaults to',
          space,
          raw('false'),
          ').',
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
    m.heading(4, 'Miscellaneous'),
    inline`You can add additional content before the main body by passing the ${raw('abstract')}, ${raw('citation')},
${raw('introduction')} and ${raw('acknowledgments')} parameters. If populated, the template
will add these pages ${emph(inline`before`)} the table of contents. The title alignment for
these pages can be customized through the ${raw('abstract-alignment')} parameter.`,
    inline`Additionally, you can populate the ${raw('before-content')} and ${raw('after-content')} parameters
to add ${emph(inline`any`)} additional content ${emph(inline`before`)} the abstract and ${emph(inline`after`)}
the bibliography (e.g., declaration of originality for PhD theses or an appendix).`,
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
    'The table of contents contains dynamic list of figures, tables, definitions and theorems meaning that they will be rendered only if there is at least one element.',
    m.heading(1, 'Custom Environments'),
    inline(
      tip(
        { title: 'Referencing' },
        inline`${space}All custom environments listed in this chapter are referencable like any other figure
enviorment.${space}`,
      ),
    ),
    m.heading(2, 'SubFigures'),
    inline`TypXidian uses the ${raw('subpar')} package (${ref(label('sec:packages'))}). To ensure consistent
numbering of subfigures, you must use the ${raw('subfigure(...args)')} function. Its use is
the same as ${raw('subpar.grid()')}. For instance, the following code: ${raw({ block: true, lang: 'typ' }, '#subfigure(\n  columns: (1fr, 2fr),\n  figure(\n    image("assets/dog.jpg"),\n    caption: [This is a dog.]\n  ),\n  <dog>,\n  figure(\n    image("assets/cat.jpg"),\n    caption: [This is a cat.]\n  ),\n  <cat>,\n  caption: [This is a figure with subfigures.],\n  label: <fig:example>\n)')}
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
    m.lines(
      m.heading(2, 'No Numbered Equations'),
      inline`Sometimes you have the need to write block equations with no numbering. TypXidian provides a
built-in function so that you don't have to manually set the numbering to ${raw('none')} when
writing such equations. All you have to do is call the ${raw('equation(content, numbering: false)')}
function. For instance, ${raw('#equation($ sigma(x) = frac(1,1 + exp(-x)) $)')} will display:`,
    ),
    inline(equation(unsafeRaw.math.block`sigma(x) = frac(1, 1 + exp(-x))`)),
    m.heading(2, 'Paragraphs'),
    inline`The ${raw('paragraph(body, title: "", kind: "par", supplement: "Paragraph")')} function
mimics LaTeX's ${raw('\\paragraph{}')} command. For instance, the following code: ${raw({ block: true, lang: 'typ' }, '#paragraph([This is a paragraph], title: "LaTeX like paragraph")')}`,
    m.lines(
      inline(
        paragraph(
          { title: 'LaTeX like paragraph' },
          inline`This is a paragraph. This is still a pargraph: ${lorem(25)}. Still a paragraph!!`,
        ),
      ),
      m.heading(2, 'Text and Math Callouts'),
    ),
    inline`As anticipated, TypXidian is inspired by Obisidian. All main obsidian's callouts are available
in the template through the following functions: ${raw('info')}, ${raw('danger')}, ${raw('success')},
${raw('tip')}, ${raw('faq')}.`,
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
    inline`TypXidian also provide math callouts, mimicing "Alice in a Differentiable Wonderland" boxes.
Specifically, you can use: ${raw('definition')}, ${raw('theorem')} and ${raw('proof')} callouts.
The ${raw('definition')} and ${raw('theorem')} callouts share the same signature: ${raw({ block: true, lang: 'typ' }, '  body,\n  title: "Definition",\n  supplement: [Definition.],')}
while the proof box replaces the ${raw('title')} parameter with the ${raw('of')} parameter to
reference the correspective theorem.`,
    inline(definition(blocks(inline(lorem(20)), inline(unsafeRaw.math.block`x + y = 1`)))),
    inline(
      labelled([theorem(blocks(inline(lorem(20)), inline(unsafeRaw.math.block`x + y = 1`))), space], label('th-1')),
    ),
    inline(proof(blocks(inline(lorem(20)), inline(unsafeRaw.math.block`x + y = 1`)), inline(ref(label('th-1'))))),
    show(appendix_with({ chapterNumbering: 'A', title: 'Appendix A: Example' })),
    'With the appendix environment, one can add extra information regarding its work.',
    m.lines(
      m.heading(2, 'Appendix Subsection'),
      inline`Depending on the ${raw('chapter_numbering')} parameter, the appendix will show the relative
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
    inline`${raw({ block: true, lang: 'typ' }, '#subfigure(\n  columns: (1fr, 2fr),\n  figure(\n    image("assets/dog.jpg"),\n    caption: [This is a dog.]\n  ),\n  <dog>,\n  figure(\n    image("assets/cat.jpg"),\n    caption: [This is a cat.]\n  ),\n  <cat>,\n  prefix: "A",\n  caption: [This is a figure with subfigures.],\n  label: <fig:example2>\n)')}
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
