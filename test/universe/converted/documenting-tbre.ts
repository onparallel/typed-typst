// Converted from test/universe/corpus/documenting-tbre.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  contentBlock,
  datetime,
  define,
  doc,
  external,
  figure,
  image,
  importPackage,
  includeFile,
  inline,
  label,
  labelled,
  let_,
  linebreak,
  link,
  m,
  path,
  pct,
  pt,
  raw,
  ref,
  show,
  space,
  sym,
  table,
  unsafeRaw,
  v,
} from '../../../src/index.ts'

export default () => {
  const template = external('template')
  const appendix = external('appendix')
  const abbrev = define('abbrev').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const template_with = define('with')
    .named('author', T.any, null)
    .named('auto-pagebreak', T.any, null)
    .named('changelog', T.any, null)
    .named('date', T.any, null)
    .named('doc-id', T.any, null)
    .named('doc-type', T.any, null)
    .named('email', T.any, null)
    .named('references', T.any, null)
    .named('reviewers', T.any, null)
    .named('show-abbreviations', T.any, null)
    .named('show-contents', T.any, null)
    .named('show-lists', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(template)
  const [authorNameDecl, authorName] = let_('author-name', 'YOUR_NAME')
  const [authorEmailDecl, authorEmail] = let_('author-email', 'YOUR_EMAIL')
  return doc(
    importPackage('@preview/documenting-tbre:0.1.0', [template, appendix, abbrev]),
    unsafeRaw.markup`#let creds-string = sys.inputs.at("credentials", default: none)`,
    m.lines(authorNameDecl, authorEmailDecl),
    inline(unsafeRaw.code<any>`if creds-string != none {
  let parsed = json(bytes(creds-string))
  author-name = parsed.name
  author-email = parsed.email
}`),
    show(
      template_with({
        title: 'TBRe Documentation Template',
        docType: 'Documentation',
        author: authorName,
        email: authorEmail,
        date: datetime({ day: 30, month: 4, year: 2002 }),
        reviewers: [],
        docId: 'TBRe-2026-001',
        changelog: includeFile('changelog.typ'),
        references: bibliography(path('refs.bib')),
        showAbbreviations: true,
        showContents: true,
        showLists: true,
        autoPagebreak: true,
      }),
    ),
    m.heading(1, 'Formatting Guidelines'),
    inline`When first mentioning an abbreviation use the ${raw('abbrev')} function to log it and show it
in the text. For example ${abbrev('TBRe', 'Team Bath Racing Electric')}. You can set ${raw('inline: false')}
to only log it without showing the full form in the text.`,
    m.heading(2, 'Figures'),
    m.heading(3, 'Graphs'),
    inline`Each should have its own caption, containing a brief description of the content. You should
place each figure/table and the accompanying caption in a textbox, convert to a frame, and position
appropriately. Do not use a border, and position the figure or table as close as possible to
the first reference in the document. Figure ${ref(label('ga-figure'))} shows an example.`,
    inline(
      figure(
        {
          caption: inline`Stress-strain behavior for Nomex honeycomb core material. Shows failure at around 300N/12.1mm,
rubbish. Try to keep labels and axes readable, and use a consistent style across all figures.`,
        },
        image(path('images/nomex_core_stress_strain_relation.png')),
      ),
    ),
    inline`Figures should always be mentioned in the text by referring to their figure number ${sym.dash}
don't expect the reader to know automatically which figure you are talking about. It is usually
good style to place figures and tables at the top of the page (but not on page 1). If the top
of the page is not suitable, the bottom of the page can also be good. Positioning the figures
is best done when the text of the document is finished.`,
    m.heading(3, 'Graphics'),
    inline`Try to reduce file sizes of graphics as much as possible to prevent the repository from becoming
too large. Ideally use ${link('https://git-lfs.com/', raw('git-lfs'))} to manage large files
in git by running the following commands:`,
    inline(
      raw(
        { block: true, lang: 'sh' },
        'git lfs install\ngit lfs track "*.png" "*.jpg" "*.jpeg" "*.svg"\ngit add .gitattributes\ngit commit -m "Track image files with git-lfs"',
      ),
    ),
    inline`Image figures can be scaled as needed by adjusting the parameters of the ${raw('#image')} function.
With referencing done via tags like ${raw('@ga-figure')} referring to ${raw('<ga-figure>')},
which will automatically update the figure number if you add more figures before it.`,
    inline(
      labelled(
        [
          figure(
            { caption: inline`A screenshot of the General Assembly for a meeting in March 2026` },
            image(path('./images/ga_2026_mar.png')),
          ),
          space,
        ],
        label('ga-figure'),
      ),
    ),
    inline(v(pt(6))),
    m.heading(3, 'Tables'),
    inline`For tables ensure that they are clearly laid out and easy to read. If they are too large to
fit on the page, consider breaking them up into multiple tables, or including them in the appendix
instead. Each table should have a caption describing its content, and should be referenced in
the text by its table number. An example of a table figure is shown in ${ref(label('speed-table'))}.`,
    inline(
      labelled(
        [
          figure(
            {
              caption: inline`Caption text for the figure describing the tabular data, font size can be adjusted for larger
tables to ensure data fits ${v(pt(6))}`,
              kind: table,
            },
            table(
              { columns: [pct(30), pct(30)] },
              inline`Distance (m)`,
              inline`Velocity (${unsafeRaw.math`"ms"^(-1)`})`,
              inline`100`,
              inline`1.24`,
              inline`150`,
              inline`4.35`,
              inline`200`,
              inline`6.76`,
              inline`250`,
              inline`8.00`,
            ),
          ),
          space,
        ],
        label('speed-table'),
      ),
    ),
    m.heading(2, 'Equations'),
    inline`The Typst syntax for equations is similar to LaTex but more intuitive with fewer backslashes
and less syntax bloat, if you don't know the symbol it is usually its name in plain english.
Alternatively you can use the vscode Typst extension to draw the symbol you need. Remember to
define the quantities in the equation, and punctuate appropriately. An example is`,
    inline(
      unsafeRaw.math
        .block`d/ (d t) ( (partial cal(L)) / (partial dot(q)_r)) - (partial cal(L)) / (partial dot(q)_r) = Q_r #h(2pt) , #h(10pt) r = 1,2, dots.c #h(2pt) n`,
    ),
    inline`which is the Lagrangian equation of motion ${ref(label('jazar2025vehicle'))}, where ${unsafeRaw.math`cal(L)`}
is the Lagrangian, ${unsafeRaw.math`t`} is time, ${unsafeRaw.math`q_r`} are the generalized
coordinates, and ${unsafeRaw.math`Q_r`} are the generalized forces. Note the comma, to punctuate
the equation within the text. Note also that variables should have the same appearance (font)
in equations and in the main text.`,
    m.heading(2, 'Referencing'),
    inline`When referencing figures, tables, equations, sections, etc. use the ${raw('@')} symbol followed
by the tag you have assigned to the figure/table/section. For example, ${raw('@ga-figure')}
will reference the figure tagged with ${raw('<ga-figure>')}. This will automatically update
the reference number as sections/figures/references are added. You can tag any element with
${raw('<tag-name>')} to create a reference point for it.`,
    inline`At the end of the document, but before the appendix, a bibliography can be included using the
${raw('bibliography')} function as shown which will pull in references from the specified .bib
file. The default format is "ieee", but other formats are also available. You can also set ${raw('title: none')}
to hide the bibliography title. The ${raw('full: true')} option will show all references in
the .bib file, even if they are not cited in the text.`,
    inline(bibliography({ title: 'References', full: true }, path('refs.bib'))),
    show(appendix),
    m.heading(1, 'Appendix'),
    'Appendices can be in single column format, which makes it much easier to include code snippets, etc. But make sure that everything is clearly readable, and that the main text of the report explains what is in the appendices, and why you have included them.',
    inline(linebreak()),
    inline(
      raw(
        { block: true, lang: 'cpp' },
        '#include <iostream>\n#include <cmath>\n#include <vector>\n\nint main() {\n  std::vector<double> x = {1.0, 2.0, 3.0, 4.0, 5.0};\n  std::vector<double> y = {1.0, 4.0, 9.0, 16.0, 25.0};\n\n  for (int i = 0; i < x.size(); i++) {\n    std::cout << x[i] << " " << y[i] << std::endl;\n  }\n\n  return 0;\n}\n',
      ),
    ),
    inline(labelled([contentBlock(inline()), space], label('end-appendix'))),
  )
}
