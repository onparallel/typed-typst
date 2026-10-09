// Converted from test/universe/corpus/modern-um-thesis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  blocks,
  call,
  codeBlock,
  datetime,
  define,
  dict,
  doc,
  em,
  emph,
  external,
  figure,
  footnote,
  fr,
  grid,
  heading,
  importPackage,
  inline,
  label,
  labelled,
  let_,
  linebreak,
  link,
  lorem,
  m,
  outline,
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
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const doc_2 = external('doc')
  const frontmatter = external('frontmatter')
  const mainmatter = external('mainmatter')
  const appendix = external('appendix')
  const abstract = external('abstract')
  const outlineImage = external('outline-image')
  const outlineTable = external('outline-table')
  const outlineTableImage = external('outline-table-image')
  const documentclass = define('documentclass')
    .named('date', T.any, null)
    .named('doctype', T.any, null)
    .named('double-sided', T.any, null)
    .named('info', T.any, null)
    .named('lang', T.any, null)
    .named('print', T.any, null)
    .returns(T.any)
    .external()
  const num = define('num').pos('arg1', T.any).returns(T.any).external()
  const unit = define('unit').pos('arg1', T.any).returns(T.any).external()
  const qty = define('qty').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const numrange = define('numrange').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const qtyrange = define('qtyrange').pos('arg1', T.any).pos('arg2', T.any).pos('arg3', T.any).returns(T.any).external()
  const ii = external('ii')
  const ee = external('ee')
  const ppi = external('ppi')
  const theorem = define('theorem').pos('arg1', T.content).named('title', T.content, []).returns(T.any).external()
  const proof = define('proof').pos('arg1', T.content).returns(T.any).external()
  const bf = external('bf')
  const subfigure = define('subfigure')
    .pos('arg1', T.any)
    .named('caption', T.content, [])
    .named('label', T.any, null)
    .returns(T.any)
    .external()
  const toprule = external('toprule')
  const midrule = external('midrule')
  const bottomrule = external('bottomrule')
  const canvas = define('canvas').pos('arg1', T.any).returns(T.any).external()
  const draw = external('draw')
  const plot = external('plot')
  const codlyInit = external('codly-init')
  const totalWords = external('total-words')
  const wordCount = external('word-count')
  const codlyInit_with = define('with').returns(T.any).external(codlyInit)
  const [
    patternDecl,
    [
      doctype,
      date,
      lang,
      info,
      doubleSided,
      doc_3,
      frontmatter_2,
      mainmatter_2,
      appendix_2,
      abstract_2,
      cover,
      declare,
      outlineImage_2,
      outlineTable_2,
      outlineTableImage_2,
    ],
  ] = let_(
    [
      'doctype',
      'date',
      'lang',
      'info',
      'double-sided',
      'doc',
      'frontmatter',
      'mainmatter',
      'appendix',
      'abstract',
      'cover',
      'declare',
      'outline-image',
      'outline-table',
      'outline-table-image',
    ],
    documentclass({
      doctype: 'master',
      date: datetime.today(),
      lang: 'en',
      doubleSided: true,
      print: true,
      info: dict({
        'title-en': inline`Title of Thesis`,
        'title-zh': inline`论文标题`,
        'title-pt': inline`Título da Tese`,
        'author-en': inline`Name of Author`,
        'author-zh': inline`作者姓名`,
        'author-pt': inline`Nome do Autor`,
        'degree-en': inline`Degree Title`,
        'degree-zh': inline`学位名称`,
        'degree-pt': inline`Doutorado`,
        'academic-unit-en': inline`Name of Academic Unit`,
        'academic-unit-zh': inline`学术单位名称`,
        'academic-unit-pt': inline`Nome da Unidade Acadêmica`,
        'supervisor-en': inline`Name of Supervisor`,
        'supervisor-zh': inline`导师姓名`,
        'supervisor-pt': inline`Nome do Supervisor`,
        'co_supervisor-en': inline`Name of Co-Supervisor`,
        'co_supervisor-zh': inline`共同导师姓名`,
        'co_supervisor-pt': inline`Nome do Co-Supervisor`,
        'department-en': inline`Name of Department`,
        'department-zh': inline`系名称`,
        'department-pt': inline`Nome do Departamento`,
      }),
    }),
  )
  const subfig = define('subfig')
    .pos('body', T.any)
    .returns(T.any)
    .body((p) =>
      codeBlock(
        [],
        canvas(unsafeRaw.code<any>`{
    import draw: *
    set-style(stroke: 0.4pt)

    rect((0, 0), (4, 3), name: "border", fill: gray)
    line("border.north-west", "border.south-east")
    line("border.north-east", "border.south-west")
    line("border.north", "border.south")
    line("border.east", "border.west")
    content("border.center", text(size: 2cm, font: "Noto Sans")[#body])
  }`),
      ),
    )
  return doc(
    importPackage('@preview/modern-um-thesis:0.1.1', [
      doc_2,
      frontmatter,
      mainmatter,
      appendix,
      abstract,
      outlineImage,
      outlineTable,
      outlineTableImage,
      documentclass,
      num,
      unit,
      qty,
      numrange,
      qtyrange,
      ii,
      ee,
      ppi,
      theorem,
      proof,
      bf,
      subfigure,
      toprule,
      midrule,
      bottomrule,
    ]),
    m.lines(
      importPackage('@preview/cetz:0.4.2', [canvas, draw]),
      importPackage('@preview/cetz-plot:0.1.3', [plot]),
      importPackage('@preview/codly:1.3.0', [codlyInit]),
      unsafeRaw.markup`#import "@preview/codly-languages:0.1.8": *`,
      unsafeRaw.markup`#import "@preview/fletcher:0.5.8" as fletcher: diagram, edge, node`,
      importPackage('@preview/wordometer:0.1.5', [totalWords, wordCount]),
    ),
    patternDecl,
    show(doc_3),
    inline(call(cover)),
    inline(call(declare)),
    inline(
      call(
        abstract_2,
        blocks(
          inline`The Faculty requires an Abstract for a master's or doctoral thesis. It must be in both submitted
copies and must follow the format given in the sample. The title of the thesis must appear exactly
as it does on the Title Page. The name of your Supervisor must appear in full with his or her
appropriate academic title (no professional titles may be used) and the name of the program
authorized to offer the degree.`,
          'The text of the Abstract must be one-and-one-half or double-spaced and must conform to margin requirements.',
          'All abstracts must not exceed 350 words or 35 lines (this requirement is inline with the requirement of Dissertation Abstracts International so that your abstract could be published in full there if necessary).',
          'It is requested by the publisher that the Abstract not include formulas, diagrams, or symbols. Should a formula, diagram, or symbol be essential to the text in the Abstract, it may not be handwritten. If Greek letters of the alphabet are to be used, they must be clearly inscribed.',
        ),
      ),
    ),
    show(frontmatter_2),
    inline(outline()),
    inline(call(outlineImage_2)),
    inline(call(outlineTable_2)),
    show(mainmatter_2),
    show(codlyInit_with()),
    inline(show(wordCount)),
    inline(labelled(heading({ depth: 1 }, inline('Introduction')), label('introduction'))),
    'This is a sample document of the University of Macau (UM) Typst thesis template.',
    inline(labelled(heading({ depth: 2 }, inline('Second level heading')), label('2nd-level-heading'))),
    inline(labelled(heading({ depth: 3 }, inline('Third level heading')), label('3rd-level-heading'))),
    inline(labelled(heading({ depth: 4 }, inline('Fourth level heading')), label('4th-level-heading'))),
    inline(lorem(100)),
    inline(labelled(heading({ depth: 2 }, inline('Footnotes')), label('footnotes'))),
    inline`Footnotes contain additional textual material or references to specific citations in the text.${footnote(inline`When citing literature, give as much information on the page where the citation is made as is
consistent with publication practice in the field of research. Footnotes, Chapter Notes, or
End Notes do not take the place of a Bibliography or List of References.`)}`,
    inline(labelled(heading({ depth: 2 }, inline('Font')), label('font'))),
    'The University of Macau (UM) is a comprehensive research-oriented public university of international standing. Since her establishment in 1981, UM has been dedicated to providing a multifaceted education through our unique educational model and residential college system and in accordance with the university motto: Humanity, Integrity, Propriety, Wisdom and Sincerity.',
    inline(
      strong(inline`In recent years, UM has been taking initiatives for a comprehensive and structural reform and
entered a new era of unprecedented growth. We are pleased to see that our progress is being
recognised globally as listed in the Times Higher Education World University Rankings and through
our growing partnership with top academic institutions both at home and abroad. Locally, UM
is the first institution to be awarded the Medal of Merit-Education by the Macao SAR government
in recognition of the efforts and contributions of the university’s staff and students. We are
confident that the rising reputation of UM will enable us to scale new heights in the international
academic circles.`),
    ),
    inline(
      emph(inline`On behalf of UM, I would like to invite you to browse our website to get a better sense of our
academic programmes and latest development. Also, I would like to welcome you to visit our gorgeous
campus where you can see our strengths and advantages, interact with us, and experience the
uniqueness of the UM community.`),
    ),
    inline(labelled(heading({ depth: 1 }, inline('Math And Citations')), label('math-and-citations'))),
    inline(labelled(heading({ depth: 2 }, inline('Math')), label('math'))),
    inline(labelled(heading({ depth: 3 }, inline('Numbers and Units')), label('numbers-and-units'))),
    inline`Numbers and units support are provided by ${raw('unify')}:`,
    m.list(
      m.item([num('12 345.678 90')]),
      m.item([num('0.3e45')]),
      m.item([unit('kg m s^-1')]),
      m.item([unit('um'), space, unsafeRaw.math`unit("um")`]),
      m.item([unit('ohm'), space, unsafeRaw.math`unit("ohm")`]),
      m.item([qty('0.13', 'mm')]),
      m.item([numrange('10', '20')]),
      m.item([qtyrange('10', '20', 'celsius')]),
    ),
    'Typst also has special syntax and library functions to typeset mathematical formulas.',
    m.list(m.item([unsafeRaw.math`1 plus.minus 2 ii`]), m.item([unsafeRaw.math`1.654 times 2.34 times 3.430`])),
    inline(
      labelled(
        heading({ depth: 3 }, inline('Mathematical Symbols And Formulas')),
        label('mathematical-symbols-and-formulas'),
      ),
    ),
    inline`According to ${ref(label('ISO_math'))}, an explicitly defined function not depending on the
context is printed in upright type, e.g. ${unsafeRaw.math`sin`}, ${unsafeRaw.math`exp`}, ${unsafeRaw.math`ln`},
${unsafeRaw.math`Gamma`}.`,
    inline`While mathematical constants, the values of which never change, are printed in upright type,
e.g. ${unsafeRaw.math`ee = num("2.718281828") dots`}; ${unsafeRaw.math`ppi = num("3.141592") dots`};
${unsafeRaw.math`ii^2 = -1`}.`,
    inline`Well-defined operators are also printed in upright type, e.g. ${unsafeRaw.math`div`}, ${unsafeRaw.math`partial`}
in ${unsafeRaw.math`partial x`} and each ${unsafeRaw.math`dif`} in ${unsafeRaw.math`(dif f)/(dif x)`}.`,
    'Formulas should be centered on a new line. Each formula should be numbered sequentially by chapter, with the number aligned to the right.',
    inline(unsafeRaw.math.block`ee^(ii ppi) + 1 = 0`),
    inline(unsafeRaw.math.block`(dif^2 u)/(dif t^2) = integral f(x) dif x`),
    'The end of the formula needs punctuation, whether a comma or a period, depending on the following sentence.',
    inline(unsafeRaw.math.block`(2h)/ppi integral_0^infinity sin(omega delta)/omega cos(omega x) dif omega
  = cases(
    h", " & abs(x) < delta ",",
    h/2", " & x=plus.minus delta",",
    0", " & abs(x) > delta "."
  )`),
    inline`When the formula is long, it is best to break the line at the equal sign "=".`,
    inline(unsafeRaw.math.block`& I(X_3; X_4) - I(X_3; X_4 | X_1) - I(X_3; X_4 | X_2) \\
  = & [I(X_3; X_4) - I(X_3; X_4 | X_1)] - I(X_3; X_4 | accent(X, tilde)_2) \\
  = & I(X_1; X_3; X_4) - I(X_3; X_4 | accent(X, tilde)_2).`),
    inline`If breaking the line at the equal sign is difficult to achieve, you can also break the line
at the ${unsafeRaw.math`+`}, ${unsafeRaw.math`-`}, ${unsafeRaw.math`times`}, ${unsafeRaw.math`div`}
operators. When breaking the line, the operator should only be written in front of the broken
line and not repeated.`,
    inline(unsafeRaw.math
      .block`1/2 Delta(f_(i j)f^(i j)) = 2(sum_(i<j) chi_(i j) (sigma_i - sigma_j)^2 + f^(i j) gradient_j gradient_i (Delta f)\\
    + gradient_k f_(i j) gradient^k f^(i j) + f^(i j) f^k [2 gradient_i R_(j k) - gradient_k R_(i j)]).`),
    inline(labelled(heading({ depth: 3 }, inline('Theorems')), label('theorems'))),
    inline`${raw('Theorion')} is used in this template to set up environments for theorems, lemmas, and
propositions.`,
    inline`${ref(label('theorem'))} is an example for a theorem:`,
    inline(
      labelled(
        [
          theorem(
            { title: inline`Residue theorem` },
            blocks(
              inline`Let ${unsafeRaw.math`U`} be a simply connected open subset of the complex plane containing a
finite list of points ${unsafeRaw.math`a_1, dots, a_n, U_0 = U without {a_1, dots, a_n}`} and
a function ${unsafeRaw.math`f`} holomorphic on ${unsafeRaw.math`U_0`}. Letting ${unsafeRaw.math`gamma`}
be a closed rectifiable curve in ${unsafeRaw.math`U_0`}, and denoting the residue of ${unsafeRaw.math`f`}
at each point ${unsafeRaw.math`a_k`} by ${unsafeRaw.math`"Res"(f, a_k)`} and the winding number
of ${unsafeRaw.math`gamma`} around ${unsafeRaw.math`a_k`} by ${unsafeRaw.math`upright(*I*)(gamma, a_k)`},
the line integral of ${unsafeRaw.math`f`} around ${unsafeRaw.math`gamma`} is equal to ${unsafeRaw.math`2 ppi ii`}
times the sum of residues, each counted as many times as ${unsafeRaw.math`gamma`} winds around
the respective point:`,
              inline(unsafeRaw.math.block`integral.cont_gamma f(z) dif z
    = 2 ppi ii sum_(k=1)^n upright(I)(gamma, a_k) "Res"(f, a_k).`),
              inline`If ${unsafeRaw.math`gamma`} is a positively oriented simple closed curve, ${unsafeRaw.math`upright(I)(gamma, a_k)`}
is 1 if ${unsafeRaw.math`a_k`} is in the interior of ${unsafeRaw.math`gamma`} and 0 if not,
therefore`,
              inline(unsafeRaw.math.block`integral.cont_gamma f(z) dif z
    = 2 ppi ii sum "Res"(f, a_k).`),
              inline`with the sum over those ${unsafeRaw.math`a_k`} inside ${unsafeRaw.math`gamma`}.`,
              inline`Proof of ${ref(label('theorem'))}.`,
              inline(
                proof(
                  inline`${space}First, according to ...${linebreak()} Next, we have ...${linebreak()} Finally, ...${space}`,
                ),
              ),
            ),
          ),
          space,
        ],
        label('theorem'),
      ),
    ),
    inline(labelled(heading({ depth: 2 }, inline('Notation Of References')), label('notation-of-references'))),
    'When citing literature, give as much information on the page where the citation is made as is consistent with publication practice in the field of research.',
    inline`A Bibliography or List of References is a comprehensive list of all sources used by the author
and is required at the end of each thesis, appearing immediately after the text. For master's
thesis, the Faculty will accept any recognized format. Whereas for doctoral thesis, either the
MLA${ref(label('mla'))} or APA${ref(label('apa'))} style should be used.`,
    inline(labelled(heading({ depth: 1 }, inline('Illustrations')), label('illustrations'))),
    inline`The term ${emph(inline`illustrations`)} refers to informational material that illustrates and
enhances the text. Figures, Maps, and tables are all examples of illustrations and are either
inserted throughout the text, appearing as soon as possible after the references to them have
been made, or grouped at the end of each chapter. Whichever method you choose, you must use
it consistently for all the figures, tables, or other illustrations included.`,
    inline(labelled(heading({ depth: 2 }, inline('Figures')), label('figures'))),
    'Figures may include photographs (original or photocopied), charts, diagrams, graphs, and drawings. If original photographs are used, they must be included in both copies. They must all be listed in the preliminary pages in a List of Figures. Figure numbers and captions appear below the figure.',
    inline`Typst has a built-in ${raw('figure')} function for inserting figures, which supports various
image formats, including PNG, JPEG, PDF, and SVG.`,
    inline(labelled(heading({ depth: 3 }, inline('Single Figure')), label('single-figure'))),
    inline`A simple example of inserting a single figure is shown in ${ref(label('fig:single-figure'))}.`,
    inline(
      labelled(
        [
          figure(
            { caption: inline`Energy distribution as a function of radial distance.` },
            canvas(unsafeRaw.code<any>`{
    import draw: *

    let csv_data = csv("assets/energy-distrib.csv", row-type: dictionary)
    let points = csv_data.map(row => (float(row.radial), float(row.energy)))
    let style = (stroke: none, fill: black)

    plot.plot(
      size: (9, 6),
      x-label: [$r$ (#unit("mm"))],
      y-label: [Energy (#unit("W/m^3"))],
      x-min: 0,
      x-max: 7,
      y-min: -1000,
      y-max: 11000,

      {
        plot.add(points, mark: "square", style: style)
        plot.annotate(
          content((2.4, 4000), $q_v=(sigma omega^2 abs(bf(A))^2)/2$),
        )
      },
    )
  }`),
          ),
          space,
        ],
        label('fig:single-figure'),
      ),
    ),
    inline(labelled(heading({ depth: 3 }, inline('Multiple Figures')), label('multiple-figures'))),
    subfig.decl,
    inline`A simple example of inserting multiple figures is shown in ${ref(label('fig:multiple-figures-single-numbering'))}.
These two horizontally aligned subfigures share a single figure counter and do not have individual
subfigure titles.`,
    inline(
      labelled(
        [figure({ caption: inline`Caption` }, grid({ columns: [fr(1), fr(1)] }, subfig('A'), subfig('B'))), space],
        label('fig:multiple-figures-single-numbering'),
      ),
    ),
    inline`If the figures are independent and do not share a common figure counter, then you can use the
${raw('grid')} function, as shown in ${ref(label('fig:multiple-figures-multiple-numbering-a'))}
and ${ref(label('fig:multiple-figures-multiple-numbering-b'))}.`,
    inline(
      grid(
        { columns: [fr(1), fr(1)] },
        inline(
          labelled(
            [figure({ caption: inline`Caption for figure A` }, subfig('A')), space],
            label('fig:multiple-figures-multiple-numbering-a'),
          ),
        ),
        inline(
          labelled(
            [figure({ caption: inline`Caption for figure B` }, subfig('B')), space],
            label('fig:multiple-figures-multiple-numbering-b'),
          ),
        ),
      ),
    ),
    inline`If you want to create a single figure with multiple subfigures, you can use the ${raw('subfigure')}
function, as shown in ${ref(label('fig:multiple-figures-subfig-numbering-a'))} and ${ref(label('fig:multiple-figures-subfig-numbering-b'))}.`,
    inline(
      labelled(
        [
          figure(
            { caption: inline`Caption for subfigures A and B` },
            grid(
              { columns: [fr(1), fr(1)] },
              subfigure(
                { caption: inline`Caption for figure A`, label: label('fig:multiple-figures-subfig-numbering-a') },
                subfig('A'),
              ),
              subfigure(
                { caption: inline`Caption for figure B`, label: label('fig:multiple-figures-subfig-numbering-b') },
                subfig('B'),
              ),
            ),
          ),
          space,
        ],
        label('fig:multiple-figures-subfig-numbering'),
      ),
    ),
    inline(labelled(heading({ depth: 2 }, inline('Tables')), label('tables'))),
    inline(labelled(heading({ depth: 3 }, inline('Basic Tables')), label('basic-tables'))),
    'Tables contain information placed in a columnar arrangement and are the only illustrations numbered and captioned above.',
    inline`An example of a simple three line table is shown in ${ref(label('tab:simple'))}.`,
    inline(
      labelled(
        [
          figure(
            { caption: inline`An elegant three-line table` },
            table(
              { columns: 3 },
              toprule,
              table.header(
                table.cell({ colspan: 2 }, inline`Item`),
                table.hline({ end: 2, stroke: em(0.05) }),
                inline(),
                inline`Animal`,
                inline`Description`,
                inline`Price ($)`,
              ),
              midrule,
              inline`Gnat`,
              inline`per gram`,
              inline`13.65`,
              inline(),
              inline`each`,
              inline`0.01`,
              inline`Gnu`,
              inline`stuffed`,
              inline`92.50`,
              inline`Emu`,
              inline`stuffed`,
              inline`33.33`,
              inline`Armadillo`,
              inline`frozen`,
              inline`8.99`,
              bottomrule,
            ),
          ),
          space,
        ],
        label('tab:simple'),
      ),
    ),
    inline(labelled(heading({ depth: 3 }, inline('Complex Tables')), label('complex-tables'))),
    inline(emph(inline`To be implemented`)),
    inline(labelled(heading({ depth: 2 }, inline('Algorithms')), label('algorithms'))),
    inline(emph(inline`To be implemented`)),
    inline(labelled(heading({ depth: 2 }, inline('Code Blocks')), label('code-blocks'))),
    inline`Though Typst has built-in support for code blocks, it is recommended not to put large blocks
of code directly in the thesis document. If necessary, you can use the ${raw('codly')} package
to insert code blocks with syntax highlighting.`,
    inline(
      raw(
        { block: true, lang: 'C' },
        '#include <stdio.h>\n#include <unistd.h>\n#include <sys/types.h>\n#include <sys/wait.h>\nint main() {\n  pid_t pid;\n  switch ((pid = fork())) {\n    case -1:\n      printf("fork failed\\n");\n      break;\n    case 0:\n      /* child calls exec */\n      execl("/bin/ls", "ls", "-l", (char*)0);\n      printf("execl failed\\n");\n      break;\n    default:\n      /* parent uses wait to suspend execution until child finishes */\n      wait((int*)0);\n      printf("is completed\\n");\n    break;\n  }\n  return 0;\n}',
      ),
    ),
    inline(labelled(heading({ depth: 1 }, inline('Conclusion')), label('conclusion'))),
    'This chapter concludes the thesis.',
    inline(bibliography({ full: true, style: 'apa' }, path('./refs.bib'))),
    show(appendix_2),
    inline(labelled(heading({ depth: 1 }, inline('Maxwell Equations')), label('maxwell-equations'))),
    inline`For the two-dimensional case, the polarization vectors are as follows: ${unsafeRaw.math.block`bf(E) = E_z(r, theta) hat(bf(z)),`}
${labelled([unsafeRaw.math.block`bf(H) = H_r(r, theta) hat(bf(r)) + H_theta(r, theta) hat(bold(theta)).`, space], label('polarization-vectors'))}`,
    inline`Taking the curl of ${ref(label('eqt:polarization-vectors'))}: ${unsafeRaw.math.block`nabla times bf(E) = 1 / r (partial E_z) / (partial theta) hat(bf(r)) - (partial E_z) / (partial r) hat(bold(theta)),`}
${unsafeRaw.math.block`nabla times bf(H) = [1 / r partial / (partial r) (r H_theta) - 1 / r (partial H_r) / (partial theta)] hat(bf(z)).`}`,
    inline`Since ${unsafeRaw.math`macron(macron(mu))`} is diagonal in cylindrical coordinates, the curl
of the electric field ${unsafeRaw.math`bf(E)`} in Maxwell's equations is: ${unsafeRaw.math.block`nabla times bf(E) = upright(i) omega bf(B),`}
${unsafeRaw.math.block`1 / r (partial E_z) / (partial theta) hat(bf(r)) - (partial E_z) / (partial r) hat(bold(theta)) = upright(i) omega mu_r H_r hat(bf(r)) + upright(i) omega mu_theta H_theta hat(bold(theta)).`}`,
    inline`Therefore, the components of ${unsafeRaw.math`bf(H)`} can be written as: ${unsafeRaw.math.block`H_r = 1 / (ii omega mu_r) 1 / r (partial E_z) / (partial theta),`}
${unsafeRaw.math.block`H_theta = 1 / (ii omega mu_theta) 1 / r (partial E_z) / (partial r).`}`,
    inline`Similarly, since ${unsafeRaw.math`macron(macron(epsilon.alt))`} is diagonal in cylindrical coordinates,
the curl of the magnetic field ${unsafeRaw.math`bf(H)`} in Maxwell's equations is: ${unsafeRaw.math.block`nabla times bf(H) = -ii omega bf(D),`}
${unsafeRaw.math.block`[1 / r partial / (partial r) (r H_theta) - 1 / r (partial H_r) / (partial theta)] hat(bf(z)) = -ii omega macron(macron(epsilon.alt)) bf(E) = -ii omega epsilon.alt_z E_z hat(bf(z)),`}
${unsafeRaw.math.block`1 / r partial / (partial r)(r H_theta) - 1 / r (partial H_r) / (partial theta) = -ii omega epsilon.alt_z E_z.`}`,
    inline`From this, we obtain the wave equation for ${unsafeRaw.math`E_z`}: ${unsafeRaw.math.block`1 / (mu_theta epsilon.alt_z) 1 / r partial / (partial r) (r (partial E_z) / (partial r)) + 1 / (mu_r epsilon.alt_z) 1 / r^2 (partial^2 E_z) / (partial theta^2) + omega^2 E_z = 0.`}`,
    inline(labelled(heading({ depth: 1 }, inline('Flow Charts')), label('flow-charts'))),
    inline`The ${raw('fletcher')} package provides support for creating diagrams with arrows, including
flow charts shown in ${ref(label('fig:flow-chart'))}${footnote(inline(link('https://github.com/Jollywatt/typst-fletcher/blob/main/docs/readme-examples/2-flowchart-trap.typ')))}
and state diagrams shown in ${ref(label('fig:state-diagram'))}${footnote(inline(link('https://github.com/Jollywatt/typst-fletcher/blob/main/docs/readme-examples/3-state-machine.typ')))}.`,
    inline(
      labelled(
        [
          figure(
            { caption: inline`Flow chart` },
            unsafeRaw.code<any>`{
    import fletcher.shapes: diamond
    diagram(
      node-stroke: 1pt,
      node((0, 0), [Start], corner-radius: 2pt, extrude: (0, 3)),
      edge("-|>"),
      node(
        (0, 1),
        align(center)[
          Hey, wait,\\ this flowchart\\ is a trap!
        ],
        shape: diamond,
      ),
      edge("d,r,u,l", "-|>", [Yes], label-pos: 0.1),
    )
  }`,
          ),
          space,
        ],
        label('fig:flow-chart'),
      ),
    ),
    inline(
      labelled(
        [
          figure(
            { caption: inline`State diagram` },
            unsafeRaw.code<any>`{
    set text(10pt)
    diagram(
      node-stroke: .1em,
      node-fill: gradient.radial(blue.lighten(80%), blue, center: (30%, 20%), radius: 80%),
      spacing: 4em,
      edge((-1, 0), "r", "-|>", \`open(path)\`, label-pos: 0, label-side: center),
      node((0, 0), \`reading\`, radius: 2em),
      edge(\`read()\`, "-|>"),
      node((1, 0), \`eof\`, radius: 2em),
      edge(\`close()\`, "-|>"),
      node((2, 0), \`closed\`, radius: 2em, extrude: (-2.5, 0)),
      edge((0, 0), (0, 0), \`read()\`, "--|>", bend: 130deg),
      edge((0, 0), (2, 0), \`close()\`, "-|>", bend: -40deg),
    )
  }`,
          ),
          space,
        ],
        label('fig:state-diagram'),
      ),
    ),
  )
}
