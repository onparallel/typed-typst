// Converted from test/universe/corpus/ilm.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  align,
  bibliography,
  black,
  blocks,
  blue,
  center,
  codeBlock,
  contentBlock,
  datetime,
  define,
  doc,
  em,
  emoji,
  emph,
  external,
  figure,
  h,
  hide,
  horizon,
  importPackage,
  inline,
  label,
  let_,
  linebreak,
  link,
  m,
  math,
  path,
  pt,
  raw,
  ref,
  set,
  show,
  space,
  strong,
  sym,
  table,
  text,
  underline,
  unsafeRaw,
  v,
  where,
} from '../../../src/index.ts'

export default () => {
  const ilm = external('ilm')
  const upper_2 = define('upper').pos('arg1', T.content).returns(T.any).external()
  const blockquote = define('blockquote').pos('arg1', T.content).returns(T.any).external()
  const stdSmallcaps = define('std-smallcaps').pos('arg1', T.content).returns(T.any).external()
  const stdUpper = define('std-upper').pos('arg1', T.content).returns(T.any).external()
  const smallcaps_2 = define('smallcaps').pos('arg1', T.content).returns(T.any).external()
  const ilm_with = define('with')
    .named('abstract', T.content, [])
    .named('authors', T.any, null)
    .named('bibliography', T.any, null)
    .named('date', T.any, null)
    .named('figure-index', T.any, null)
    .named('listing-index', T.any, null)
    .named('preface', T.content, [])
    .named('table-index', T.any, null)
    .named('title', T.content, [])
    .returns(T.any)
    .external(ilm)
  const unit = define('unit')
    .pos('u', T.any)
    .returns(T.any)
    .body((p) => math.display(math.upright(p['u'])))
  const [siTableDecl, siTable] = let_(
    'si-table',
    table(
      { columns: 3 },
      table.header(inline`Quantity`, inline`Symbol`, inline`Unit`),
      inline`length`,
      inline(unsafeRaw.math`l`),
      inline(unit('m')),
      inline`mass`,
      inline(unsafeRaw.math`m`),
      inline(unit('kg')),
      inline`time`,
      inline(unsafeRaw.math`t`),
      inline(unit('s')),
      inline`electric current`,
      inline(unsafeRaw.math`I`),
      inline(unit('A')),
      inline`temperature`,
      inline(unsafeRaw.math`T`),
      inline(unit('K')),
      inline`amount of substance`,
      inline(unsafeRaw.math`n`),
      inline(unit('mol')),
      inline`luminous intensity`,
      inline(unsafeRaw.math`I_v`),
      inline(unit('cd')),
    ),
  )
  const snip = define('snip')
    .pos('cap', T.any)
    .returns(T.any)
    .body((p) =>
      figure(
        { caption: p['cap'] },
        inline(
          space,
          raw(
            { block: true, lang: 'rust' },
            'fn main() {\n    let user = ("Adrian", 38);\n    println!("User {} is {} years old", user.0, user.1);\n\n    // tuples within tuples\n    let employee = (("Adrian", 38), "die Mobiliar");\n    println!("User {} is {} years old and works for {}", employee.0.1, employee.0.1, employee.1);\n}',
          ),
          space,
        ),
      ),
    )
  return doc(
    importPackage('@preview/ilm:2.1.1', [ilm, upper_2, blockquote, stdSmallcaps, stdUpper, smallcaps_2]),
    set(text, { lang: 'en' }),
    show(
      ilm_with({
        title: inline`The Beauty of${linebreak()} Sharing Knowledge`,
        authors: 'Max Mustermann',
        date: datetime({ year: 2024, month: 3, day: 19 }),
        abstract: inline`${space}'Ilm (Urdu: ${text({ lang: 'ur', font: ['Noto Nastaliq Urdu', 'Noto Naskh Arabic'], size: em(0.8) }, inline`عِلْم`)})
is the Urdu term for knowledge. In its general usage, 'ilm may refer to ${emph(inline`knowledge`)}
of any specific thing or any form of ${emph(inline`learning`)}. Subsequently, the term is also
used to refer to various categories of sciences, especially when used in its plural form ('ulum).${space}`,
        preface: inline(
          space,
          align(
            add(center, horizon),
            inline`${space}Thank you for using this template ${emoji.heart} ${linebreak()} I hope you like it ${emoji.face.smile}${space}`,
          ),
          space,
        ),
        bibliography: bibliography(path('refs.bib')),
        figureIndex: { enabled: true },
        tableIndex: { enabled: true },
        listingIndex: { enabled: true },
      }),
    ),
    m.lines(
      m.heading(1, 'Layout'),
      inline`The template uses ${raw('A4')} as its page size, you can specify a different ${link('https://typst.app/docs/reference/layout/page#parameters-paper', inline`paper size string`)}
using:`,
    ),
    inline(raw({ block: true, lang: 'typst' }, '#show: ilm.with(\n  paper-size: "us-letter",\n)')),
    m.lines(
      inline`'Ilm display's its content in the following order:`,
      m.enum(
        m.item(['Cover page (unless disabled)']),
        m.item(['Preface page (if defined)']),
        m.item(['Table of contents (unless disabled)']),
        m.item(['Body (your main content)']),
        m.item(['Appendix (if defined)']),
        m.item(['Bibliography (if defined)']),
        m.item([
          'Indices (if enabled)',
          space,
          sym.dash.em,
          space,
          'index of figures (images), tables, or listings (code blocks)',
        ]),
      ),
    ),
    m.lines(
      m.heading(2, 'Cover'),
      inline`By default, 'Ilm generates a cover/title page with a title, author(s), date, and abstract:`,
    ),
    inline(
      raw(
        { block: true, lang: 'typst' },
        '#show: ilm.with(\n  title: [Your Title],\n  authors: "Author Name",\n  abstract: [Your content goes here],\n)',
      ),
    ),
    inline`Only the ${raw('title')} and ${raw('authors')} fields are necessary; ${raw('date')} (default:
${raw('datetime.today()')}) and ${raw('abstract')} are optional.`,
    m.lines(
      m.heading(3, 'Multiple authors'),
      'You can specify multiple authors by providing an array. Authors will be displayed on separate lines on the cover page, with font size automatically adjusted based on the number of authors:',
    ),
    inline(
      raw(
        { block: true, lang: 'typst' },
        '#show: ilm.with(\n  title: [Your Title],\n  authors: ("John Doe", "Jane Smith", "Max Mustermann"),\n)',
      ),
    ),
    inline`The ${raw('authors')} parameter accepts either a string (single author) or an array of strings
(multiple authors).`,
    m.heading(3, 'Date format'),
    inline`By default, the date is shown in the format: ${raw('MMMM DD, YYYY')}. You can change the date
format by specifying a different format string:`,
    inline(
      raw(
        { block: true, lang: 'typst' },
        '#show: ilm.with(\n  date-format: "[month repr:long] [day padding:zero], [year repr:full]",\n)',
      ),
    ),
    inline`See Typst's ${link('https://typst.app/docs/reference/foundations/datetime/#format', inline`official documentation`)}
for more info on how date format strings are defined.`,
    m.lines(m.heading(3, 'Customizing the cover page'), 'You have full control over the cover page behavior:'),
    inline(
      strong(inline`No cover page:`),
      space,
      raw({ block: true, lang: 'typst' }, '#show: ilm.with(\n  cover-page: none,\n)'),
    ),
    inline(
      strong(inline`Custom cover page:`),
      space,
      raw(
        { block: true, lang: 'typst' },
        '#show: ilm.with(\n  cover-page: [\n    #align(center + horizon)[\n      #text(4em)[*My Custom Title*]\n      #v(2em)\n      #text(2em)[Subtitle]\n      #v(1em)\n      #text(1.2em)[Author Name]\n    ]\n  ],\n)',
      ),
    ),
    inline`When you provide custom content, 'Ilm will automatically wrap it in a ${raw('page()')} for you.
The ${raw('title')}, ${raw('authors')}, ${raw('date')}, and ${raw('abstract')} parameters are
still used for document metadata even when a custom cover page is provided.`,
    inline`${emoji.fire} Tip: if your custom cover page is complex, define it in a separate file and import
it:`,
    inline(raw({ block: true, lang: 'typst' }, '#show: ilm.with(\n  cover-page: [#include "custom-cover.typ"],\n)')),
    m.lines(m.heading(2, 'Preface'), 'The preface content is shown on its own separate page after the cover page.'),
    'You can define it using:',
    inline(
      raw(
        { block: true, lang: 'typst' },
        '#show: ilm.with(\n  preface: [\n    = Preface Heading\n    Your content goes here.\n  ],\n)',
      ),
    ),
    inline`${emoji.fire} Tip: if your preface is quite long then you can define it in a separate file and
import it in the template definition like so:`,
    inline(
      raw(
        { block: true, lang: 'typst' },
        '#show: ilm.with(\n  // Assuming your file is called `preface.typ` and is\n  // located in the same directory as your main Typst file.\n  preface: [#include "preface.typ"],\n)',
      ),
    ),
    m.lines(
      m.heading(2, 'Table of Contents'),
      inline`By default, 'Ilm display a table of contents before the body (your main content). You can disable
this behavior using:`,
    ),
    inline(raw({ block: true, lang: 'typst' }, '#show: ilm.with(\n  table-of-contents: none,\n)')),
    inline`The ${raw('table-of-contents')} option accepts the result of a call to the ${raw('outline()')}
function, so if you want to customize the behavior of table of contents then you can specify
a custom ${raw('outline()')} function:`,
    inline(
      raw({ block: true, lang: 'typst' }, '#show: ilm.with(\n  table-of-contents: outline(title: "custom title"),\n)'),
    ),
    inline`See Typst's ${link('https://typst.app/docs/reference/model/outline/', inline`official documentation`)}
for more information.`,
    m.lines(
      m.heading(2, 'Body'),
      inline`By default, the template will insert a ${link('https://typst.app/docs/reference/layout/pagebreak/', inline`pagebreak`)}
before each chapter, i.e. first-level heading. You can disable this behavior using:`,
    ),
    inline(raw({ block: true, lang: 'typst' }, '#show: ilm.with(\n  chapter-pagebreak: false,\n)')),
    m.lines(m.heading(2, 'Appendices'), 'The template can display different appendix, if you enable and define it:'),
    inline(
      raw(
        { block: true, lang: 'typst' },
        '#show: ilm.with(\n  appendix: (\n    enabled: true,\n    title: "Appendix", // optional\n    heading-numbering-format: "A.1.1.", // optional\n    body: [\n      = First Appendix\n      = Second Appendix\n    ],\n  ),\n)',
      ),
    ),
    inline`The ${raw('title')} and ${raw('heading-numbering-format')} options can be omitted as they are
optional and will default to predefined values.`,
    inline`${emoji.fire} Tip: if your appendix is quite long then you can define it in a separate file
and import it in the template definition like so:`,
    inline(
      raw(
        { block: true, lang: 'typst' },
        '#show: ilm.with(\n  appendix: (\n    enabled: true,\n    // Assuming your file is called `appendix.typ` and is\n    // located in the same directory as your main Typst file.\n    body: [#include "appendix.typ"],\n  ),\n)',
      ),
    ),
    m.lines(
      m.heading(2, 'Bibliography'),
      inline`If your document contains references and you want to display a bibliography/reference listing
at the end of the document but before the indices then you can do so by defining ${raw('bibliography')}
option:`,
    ),
    inline(
      raw(
        { block: true, lang: 'typst' },
        '#show: ilm.with(\n  // Assuming your file is called `refs.bib` and is\n  // located in the same directory as your main Typst file.\n  bibliography: bibliography("refs.bib"),\n)',
      ),
    ),
    inline`The ${raw('bibliography')} option accepts the result of a call to the ${raw('bibliography()')}
function, so if you want to customize the behavior of table of contents then you can do so by
customizing the ${raw('bibliography()')} function that you specify here. See Typst's ${link('https://typst.app/docs/reference/model/bibliography/', inline`official documentation`)}
for more information.`,
    m.lines(
      m.heading(2, 'Indices'),
      'The template also displays an index of figures (images), tables, and listings (code blocks) at the end of the document, if you enable them:',
    ),
    inline(
      raw(
        { block: true, lang: 'typst' },
        '#show: ilm.with(\n  figure-index: (\n    enabled: true,\n    title: "Index of Figures" // optional\n  ),\n  table-index: (\n    enabled: true,\n    title: "Index of Tables" // optional\n  ),\n  listing-index: (\n    enabled: true,\n    title: "Index of Listings" // optional\n  ),\n)',
      ),
    ),
    inline`The ${raw('title')} option can be omitted as it is optional and will default to predefined values.`,
    m.lines(
      m.heading(2, 'Footer'),
      inline`By default, 'Ilm displays page numbers in the footer with alternating alignment (left on even
pages, right on odd pages). If a page does not begin with a chapter, the chapter's name is shown
alongside the page number.`,
    ),
    inline`Look at the page numbering for the current page. It should show "${upper_2(inline`Layout`)}"
next to the page number because the current subheading ${emph(inline`Footer`)} is part of the
${emph(inline`Layout`)} chapter.`,
    inline`When we say chapter, we mean the the first-level or top-level heading which is defined using
a single equals sign (${raw('=')}).`,
    m.lines(
      m.heading(3, 'Customizing page numbering'),
      'You can customize the page numbering style in footer or disable it entirely:',
    ),
    inline(
      strong(inline`Disable page numbering:`),
      space,
      raw({ block: true, lang: 'typst' }, '#show: ilm.with(\n  footer: none,\n)'),
    ),
    inline(
      strong(inline`Different styles:`),
      space,
      raw(
        { block: true, lang: 'typst' },
        '// Alternating sides with chapter name (default)\n#show: ilm.with(\n  footer: "page-number-alternate-with-chapter",\n)\n\n// Left-aligned with chapter name\n#show: ilm.with(\n  footer: "page-number-left-with-chapter",\n)\n\n// Right-aligned with chapter name\n#show: ilm.with(\n  footer: "page-number-right-with-chapter",\n)\n\n// Centered page number only (no chapter name)\n#show: ilm.with(\n  footer: "page-number-center",\n)\n\n// Left-aligned page number only (no chapter name)\n#show: ilm.with(\n  footer: "page-number-left",\n)\n\n// Right-aligned page number only (no chapter name)\n#show: ilm.with(\n  footer: "page-number-right",\n)',
      ),
    ),
    m.lines(
      m.heading(1, 'Text'),
      inline`Typst defaults to English for the language of the text. If you are writing in a different language
then you need to define you language before the 'Ilm template is loaded, i.e. before the ${raw('#show: ilm.with()')}
like so:`,
    ),
    inline(
      raw(
        { block: true, lang: 'typst' },
        '#set text(lang: "de")\n#show: ilm.with(\n  // \'Ilm\'s options defined here.\n)',
      ),
    ),
    inline`By defining the language before the template is loaded, 'Ilm will set title for bibliography
and table of contents as per your language settings as long as you haven't customized it already.`,
    m.lines(
      m.heading(2, 'External links'),
      inline`'Ilm adds a small maroon circle to external (outgoing) links ${link('https://github.com/talal/ilm', inline`like so`)}.`,
    ),
    inline`This acts as a hint for the reader so that they know that a specific text is a hyperlink. This
is far better than ${underline(inline`underlining a hyperlink`)} or making it a ${text({ fill: blue }, inline`different color`)}.
Don't you agree?`,
    inline`If you want to disable this behavior then you can do so by setting the concerning option to
${raw('false')}:`,
    inline(raw({ block: true, lang: 'typst' }, '#show: ilm.with(\n  external-link-circle: false,\n)')),
    m.lines(
      m.heading(2, 'Blockquotes'),
      inline`'Ilm also exports a ${raw('blockquote')} function which can be used to create blockquotes. The
function has one argument: ${raw('body')} of the type content and can be used like so:`,
    ),
    inline(
      raw(
        { block: true, lang: 'typst' },
        '#blockquote[\n  A wizard is never late, Frodo Baggins. Nor is he early. He arrives precisely when he means to.\n  --- Gandalf\n]',
      ),
    ),
    'The above code will render the following:',
    inline(
      blockquote(inline`${space}A wizard is never late, Frodo Baggins. Nor is he early. He arrives precisely when he
means to. --- Gandalf${space}`),
    ),
    m.lines(
      m.heading(2, 'Small- and all caps'),
      inline`'Ilm also exports functions for styling text in small caps and uppercase, namely: ${raw('smallcaps')}
and ${raw('upper')} respectively.`,
    ),
    inline`These functions will overwrite the standard ${link('https://typst.app/docs/reference/text/smallcaps/', inline(raw('smallcaps')))}
and ${link('https://typst.app/docs/reference/text/upper/', inline(raw('upper')))} functions
that Typst itself provides. This behavior is intentional as the functions that 'Ilm exports
fit in better with the rest of the template's styling.`,
    inline`Here is how Typst's own ${stdSmallcaps(inline`smallcaps`)} and ${stdUpper(inline`upper`)} look
compared to the 'Ilm ones:${linebreak()} ${hide(inline`Here is how Typst's own${space}`)} ${smallcaps_2(inline`smallcaps`)}
and ${upper_2(inline`upper`)}`,
    inline`They both look similar, the only difference being that 'Ilm uses more spacing between individual
characters.`,
    inline`If you prefer Typst's default spacing then you can still use it by prefixing ${raw('std-')}
to the functions:`,
    inline(raw({ block: true, lang: 'typst' }, '#std-smallcaps[your content here]\n#std-upper[your content here]')),
    m.lines(
      m.heading(2, 'Tables'),
      inline`In order to increase the focus on table content, we minimize the table's borders by using thin
gray lines instead of thick black ones. Additionally, we use small caps for the header row.
Take a look at the table below:`,
    ),
    m.lines(unit.decl, siTableDecl),
    inline(figure({ caption: inline`'Ilm's styling` }, siTable)),
    inline`For comparison, this is how the same table would look with Typst's default styling:`,
    inline(
      contentBlock(
        blocks(
          m.lines(
            set(table, { inset: pt(5), stroke: add(pt(1), black) }),
            show(where(table.cell, { y: 0 }), (it, ctx) =>
              codeBlock([v(em(0.5)), unsafeRaw.code<any>`h(0.5em) + it.body.text + h(0.5em)`, v(em(0.5))]),
            ),
            inline(figure({ caption: inline`Typst's default styling` }, siTable)),
          ),
        ),
      ),
    ),
    m.lines(
      m.heading(1, 'Code'),
      m.heading(2, 'Custom font and size'),
      inline`'Ilm uses the Iosevka ${ref(label('wikipedia_iosevka'))} font for raw text instead of the default
DejaVu Sans Mono. If Iosevka is not available then the template will fall back to DejaVu Sans
Mono.`,
    ),
    inline(
      contentBlock(
        blocks(
          snip.decl,
          m.lines(
            show(raw, set(text, { font: 'DejaVu Sans Mono' })),
            inline`For comparison, here is what ${raw('code')} in DejaVu Sans Mono looks like: ${snip('Code snippet typeset in DejaVu Sans Mono font')}`,
          ),
          m.lines(
            show(raw, set(text, { font: ['Iosevka', 'DejaVu Sans Mono'] })),
            inline`and here is how the same ${raw('code')} looks in Iosevka: ${snip('Code snippet typeset in Iosevka font')}`,
          ),
        ),
      ),
    ),
    'In the case that both code snippets look identical then it means that Iosevka is not installed on your computer.',
    inline`You can use Typst's default raw text formatting by setting the ${raw('raw-text')} option to
a special string:`,
    inline(raw({ block: true, lang: 'typst' }, '#show: ilm.with(\n  raw-text: "use-typst-default",\n)')),
    'Alternatively, you can specify your own custom font and size using a dictionary:',
    inline(
      raw(
        { block: true, lang: 'typst' },
        '#show: ilm.with(\n  raw-text: (\n    // font takes a list of fonts in order of priority.\n    font: ("JetBrains Mono", "Cascadia Mono"),\n    size: 10pt,\n  ),\n)',
      ),
    ),
  )
}
