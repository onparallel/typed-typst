// Converted from test/universe/corpus/hitec.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  call,
  datetime,
  define,
  doc,
  emph,
  external,
  importPackage,
  inline,
  let_,
  link,
  m,
  raw,
  show,
  smartquote,
  space,
  strong,
  sym,
} from '../../../src/index.ts'

export default () => {
  const doc_2 = external('doc')
  const titlePage = external('title-page')
  const titleBlock = external('title-block')
  const documentclass = define('documentclass')
    .named('author', T.any, null)
    .named('company', T.content, [])
    .named('confidential', T.content, [])
    .named('date', T.any, null)
    .named('double-sided', T.any, null)
    .named('print', T.any, null)
    .named('title', T.content, [])
    .returns(T.any)
    .external()
  const [
    patternDecl,
    [title_2, author, company, confidential, date, doubleSided, print, doc_3, titlePage_2, titleBlock_2],
  ] = let_(
    ['title', 'author', 'company', 'confidential', 'date', 'double-sided', 'print', 'doc', 'title-page', 'title-block'],
    documentclass({
      title: inline`The HITEC template`,
      author: 'Brian Li',
      company: inline`The Company, Ltd`,
      confidential: inline`${sym.bar.h} Unlimited Distribution ${sym.bar.h}`,
      date: datetime.today(),
      doubleSided: true,
      print: true,
    }),
  )
  return doc(
    importPackage('@preview/hitec:0.1.0', [doc_2, titlePage, titleBlock, documentclass]),
    patternDecl,
    show(doc_3),
    inline(call(titleBlock_2)),
    m.heading(1, 'The General Idea'),
    'This short paper is a demonstration of what documents written with this class look like.',
    inline`The template is a Typst adaptation of the classic ${link('https://ctan.org/pkg/hitec', inline`LaTeX HITEC class`)}.
As the original author points out, most available templates ${emph(inline`smell too academic`)}
for industrial technical documents. This template aims to provide a clean and simple layout
for technical documents in the hi-tech industry.`,
    'The year is no longer 2001. Typst, as a newcomer in the typesetting world, is quite friendly to package maintainers, not to mention the powerful coding assistance that LLMs provide. Therefore, this template is expected to be more maintainable and extensible than its LaTeX counterpart.',
    m.heading(1, 'Hitec vs Hitec'),
    'This template achieves the same functions and layout style as the original LaTeX HITEC class and amends a few details to better suit modern technical documents. Here are some of the differences:',
    m.list(
      m.item([
        strong(inline`Simplified title block and title page commands.`),
        space,
        'Instead of adding',
        space,
        raw('titlepage'),
        space,
        'as an argument when calling',
        space,
        raw('documentclass'),
        ', as in the original LaTeX class, this template implements both features as functions that you can call as needed.',
      ]),
      m.item([
        strong(inline`Supports multiple authors.`),
        space,
        'You can now add multiple authors by passing an array of strings to the',
        space,
        raw('author'),
        space,
        'argument. Just don',
        smartquote({ double: false }),
        't squeeze an army into it, the header will look messy.',
      ]),
      m.item([
        strong(inline`Updated default fonts.`),
        space,
        'The default fonts are updated to',
        space,
        raw('TeX Gyre Heros'),
        space,
        'for the main text, whereas the original LaTeX class uses',
        space,
        raw('Helvetica'),
        '. This change is made because only the former is available in the web app. The difference is minor anyway.',
      ]),
      m.item([
        strong(inline`More versatility provided by Typst.`),
        space,
        'The date format in the title is customizable. You can also customize other layout styles by using the',
        space,
        raw('#set'),
        space,
        'or',
        space,
        raw('#show'),
        space,
        'commands. Look them up in the documentation. The possibilities are endless.',
      ]),
    ),
    m.heading(1, 'Layout'),
    inline`The layout of the document starts with setting up the ${raw('documentclass')}, which defines
the metadata and layout styles. The layout styles are then applied by calling the ${raw('#show: doc')}
command. Any custom layout styles should be added after that command, or they might be overwritten.`,
    m.heading(2, 'Page Size'),
    inline`The template uses ${raw('A4')} as its page size; you can specify a different ${link('https://typst.app/docs/reference/layout/page#parameters-paper', inline`paper size string`)}
using:`,
    inline(raw({ block: true, lang: 'typst' }, '#set page(paper: "us-letter")')),
    m.heading(2, 'Title'),
    inline`The title block (without a page break) and title page can be added by calling the ${raw('#title-block()')}
and ${raw('#title-page()')} functions, respectively.`,
    inline`The date format in the title is customizable via the ${raw('date-format')} argument. The format
string uses the same syntax as the ${raw('datetime.display()')} function. ${raw({ block: true, lang: 'typst' }, '#title-block(\n  date-format: "[day] [month repr:short] [year]",\n)')}`,
    m.heading(2, 'Margins'),
    inline`The template uses two sets of margins for ordinary text and for headings, thanks to the ${raw('wideblock')}
function provided by the ${raw('marginalia')} package. The ordinary text has a larger binding
margin to allow for hole punching, whereas the headings have equal margins on both sides to
maintain symmetry. You can customize the even/odd margins by setting the ${raw('double-sided')}
argument in the ${raw('documentclass')} function, or disable double-sided layout by setting
the ${raw('print')} argument to ${raw('false')}.`,
    inline`Notes or figures can be placed in the binding margin. However, it requires the user to manually
import the ${raw('marginalia')} package, and be aware that the experience is unstable and elements
might not appear correctly.`,
    m.heading(1, 'Summary'),
    'The rework of this template is only a small step toward inheriting the rich legacy of the LaTeX package ecosystem. I genuinely hope that Typst will grow into a mature typesetting system with a vibrant community.',
  )
}
