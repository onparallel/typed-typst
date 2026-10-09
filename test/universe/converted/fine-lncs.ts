// Converted from test/universe/corpus/fine-lncs.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  bibliography,
  bottom,
  define,
  doc,
  external,
  figure,
  footnote,
  image,
  importPackage,
  inline,
  label,
  labelled,
  left,
  let_,
  m,
  path,
  pt,
  raw,
  ref,
  show,
  space,
  sym,
  table,
  text,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const author = define('author')
    .pos('arg1', T.any)
    .named('insts', T.any, null)
    .named('oicd', T.any, null)
    .returns(T.any)
    .external()
  const institute = define('institute')
    .pos('arg1', T.any)
    .named('addr', T.any, null)
    .named('email', T.any, null)
    .named('url', T.any, null)
    .returns(T.any)
    .external()
  const lncs = external('lncs')
  const proof = define('proof').pos('arg1', T.content).returns(T.any).external()
  const theorem = define('theorem').pos('arg1', T.content).returns(T.any).external()
  const lncs_with = define('with')
    .named('abstract', T.content, [])
    .named('acknowledgements', T.content, [])
    .named('authors', T.any, null)
    .named('bibliography', T.any, null)
    .named('interests', T.content, [])
    .named('keywords', T.any, null)
    .named('thanks', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(lncs)
  const [inst_princDecl, inst_princ] = let_(
    'inst_princ',
    institute({ addr: 'Princeton NJ 08544, USA' }, 'Princeton University'),
  )
  const [inst_springerDecl, inst_springer] = let_(
    'inst_springer',
    institute(
      {
        addr: 'Tiergartenstr. 17, 69121 Heidelberg, Germany',
        email: 'lncs@springer.com',
        url: 'http://www.springer.com/gp/computer-science/lncs',
      },
      'Springer Heidelberg',
    ),
  )
  const [inst_abcDecl, inst_abc] = let_(
    'inst_abc',
    institute(
      { addr: 'Rupert-Karls-University Heidelberg, Heidelberg, Germany', email: '{abc,lncs}@uni-heidelberg.de' },
      'ABC Institute',
    ),
  )
  return doc(
    importPackage('@preview/fine-lncs:0.6.5', [author, institute, lncs, proof, theorem]),
    m.lines(inst_princDecl, inst_springerDecl, inst_abcDecl),
    show(
      lncs_with({
        title: 'Contribution Title',
        thanks: 'Supported by organization x.',
        authors: [
          author({ insts: inst_princ, oicd: '0000-1111-2222-3333' }, 'First-Name Author'),
          author({ insts: [inst_springer, inst_abc], oicd: '1111-2222-3333-4444' }, 'Second Author'),
          author({ insts: inst_abc, oicd: '2222-3333-4444-5555' }, 'Third Author'),
        ],
        abstract: inline`${space}The abstract should briefly summarize the contents of the paper in 15--250 words.${space}`,
        keywords: ['First keyword', 'Second keyword', 'Another keyword'],
        acknowledgements: inline`${space}A bold run-in heading in small font size at the end of the paper is used for general
acknowledgments ${footnote(inline`If EquinOCS, our proceedings submission system, is used, then the disclaimer can be provided
directly in the system.`)}, for example: This study was funded by X (grant number Y).${space}`,
        interests: inline`${space}It is now necessary to declare any competing interests or to specifically state that
the authors have no competing interests. Please place the statement with a bold run-in heading
in small font size beneath the (optional) acknowledgments4, for example: The authors have no
competing interests to declare that are relevant to the content of this article. Or: Author
A has received research grants from Company W. Author B has received a speaker honorarium from
Company X and owns stock in Company Y. Author C is a member of committee Z${space}`,
        bibliography: bibliography(path('refs.bib')),
      }),
    ),
    m.lines(m.heading(1, 'First Section'), m.heading(2, 'A Subsection Sample')),
    'Please note that the first paragraph of a section or subsection is not indented. The first paragraph that follows a table, figure, equation etc. does not need an indent, either.',
    'Subsequent paragraphs, however, are indented.',
    m.lines(
      m.heading(3, 'Sampling Heading (Third Level)'),
      'Only two levels of headings should be numbered. Lower level headings remain unnumbered; they are formatted as run-in headings.',
    ),
    m.lines(
      m.heading(4, 'Sample Heading (Fourth Level)'),
      inline`The contribution should contain no more than four levels of headings. ${ref(label('heading_styles'))}
gives a summary of all heading levels.`,
    ),
    inline(
      labelled(
        [
          figure(
            { caption: inline`Table Captions should be placed above the tables` },
            inline(
              space,
              table(
                { columns: 3, align: add(left, bottom) },
                table.hline(),
                inline`Heading level`,
                inline`Example`,
                inline`Font size and style`,
                table.hline(),
                inline`Title (centered)`,
                text({ weight: 'bold', size: pt(14) }, 'Lecture Notes'),
                inline`14 point, bold`,
                inline`1st-level heading`,
                text({ weight: 'bold', size: pt(12) }, inline`Introduction`),
                inline`12 point, bold`,
                inline`2nd-level heading`,
                text({ weight: 'bold', size: pt(10) }, inline`Printing Area`),
                inline`10 point, bold`,
                inline`3rd-level heading`,
                inline`${text({ weight: 'bold', size: pt(10) }, inline`Run-in Heading in Bold.`)} Text follows.`,
                inline`10 point, bold`,
                inline`4th-level heading`,
                inline`${text({ style: 'italic', size: pt(10) }, inline`Lowest Level Heading`)} Text follows.`,
                inline`10 point, italic`,
                table.hline(),
              ),
              space,
            ),
          ),
          space,
        ],
        label('heading_styles'),
      ),
    ),
    inline`Displayed equations are centered and set on a separate line. ${unsafeRaw.math.block`x + y = z`}`,
    inline`Please try to avoid rasterized images for line-art diagrams and schemas. When- ever possible,
use vector graphics instead (see ${ref(label('image_fig'))}).`,
    inline(
      labelled(
        [
          figure(
            {
              caption: inline`A figure caption is always placed below the illustration. Please note that short captions are
centered, while long ones are justified by the macro package automatically.`,
            },
            image(path('fig1.svg')),
          ),
          space,
        ],
        label('image_fig'),
      ),
    ),
    inline(
      theorem(inline`This is a sample theorem. The run-in heading is set in bold, while the following text appears
in italics. ${raw('definition')}, ${raw('lemma')}, ${raw('proposition')}, and ${raw('corollary')}
are styled the same way.`),
    ),
    inline(
      proof(inline`Proofs, examples, and remarks have the initial word in italics, while the following text appears
in normal font.`),
    ),
    inline`For citations of references, we prefer the use of square brackets and consecutive numbers. Citations
using labels or the author/year convention are also acceptable. The following bibliography provides
a sample reference list with entries for journal articles ${ref(label('PAPER:1'))}, a book ${ref(label('BOOK:2'))},
and a homepage ${ref(label('WEBSITE:1'))}. Multiple citations are grouped ${ref(label('BOOK:2'))}${ref(label('ARTICLE:1'))}${ref(label('BOOK:1'))}.`,
  )
}
