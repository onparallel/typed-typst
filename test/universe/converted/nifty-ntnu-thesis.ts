// Converted from test/universe/corpus/nifty-ntnu-thesis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  block,
  blocks,
  cite,
  define,
  doc,
  emph,
  external,
  figure,
  footnote,
  fr,
  heading,
  image,
  importPackage,
  inline,
  label,
  labelled,
  let_,
  link,
  m,
  path,
  pct,
  raw,
  ref,
  show,
  space,
  strong,
  sym,
  symbol,
  table,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const niftyNtnuThesis = external('nifty-ntnu-thesis')
  const subfigure = define('subfigure')
    .pos('arg1', T.any)
    .pos('arg2', T.any)
    .pos('arg3', T.any)
    .pos('arg4', T.any)
    .named('caption', T.content, [])
    .named('columns', T.any, null)
    .named('label', T.any, null)
    .returns(T.any)
    .external()
  const grad = external('grad')
  const pdv = external('pdv')
  const appendix = external('appendix')
  const niftyNtnuThesis_with = define('with')
    .named('abstract-en', T.content, [])
    .named('abstract-no', T.content, [])
    .named('authors', T.any, null)
    .named('bibliography', T.any, null)
    .named('chapters-on-odd', T.any, null)
    .named('figure-index', T.any, null)
    .named('listing-index', T.any, null)
    .named('short-author', T.any, null)
    .named('short-title', T.content, [])
    .named('table-index', T.any, null)
    .named('title', T.content, [])
    .named('titlepage', T.any, null)
    .returns(T.any)
    .external(niftyNtnuThesis)
  const appendix_with = define('with').named('chapters-on-odd', T.any, null).returns(T.any).external(appendix)
  const [chaptersOnOddDecl, chaptersOnOdd] = let_('chapters-on-odd', false)
  return doc(
    m.lines(
      importPackage('@preview/nifty-ntnu-thesis:0.1.3', [niftyNtnuThesis, subfigure, grad, pdv, appendix]),
      chaptersOnOddDecl,
      show(
        niftyNtnuThesis_with({
          title: inline`An NTNU Thesis typst template`,
          shortTitle: inline(),
          authors: ['Anders Andersen'],
          shortAuthor: 'Andersen et. al.',
          titlepage: true,
          chaptersOnOdd: chaptersOnOdd,
          bibliography: bibliography(path('thesis.bib')),
          figureIndex: { enabled: true, title: 'Figures' },
          tableIndex: { enabled: true, title: 'Tables' },
          listingIndex: { enabled: true, title: 'Code listings' },
          abstractEn: inline`${space}The ${raw('nifty-ntnu-thesis')} template is a typst port of the ${raw('ntnuthesis')}
LaTeX class. It can be used for theses at all levels – bachelor, master and PhD – and is available
in English (British and American) and Norwegian (Bokmål and Nynorsk). This document is ment
to serve (i) as a description of the document class, (ii) as an example of how to use it, and
(iii) as a thesis template.${space}`,
          abstractNo: inline`${space}Malen ${raw('nifty-ntnu-thesis')} er en typst-oversettelse av LaTeX-klassen ${raw('ntnuthesis')}.
Den er tilrettelagt for avhandlinger på alle nivåer – bachelor, master og PhD – og er tilgjengelig
på både norsk (bokmål og nynorsk) og engelsk (britisk og amerikansk). Dette dokumentet er ment
å tjene (i) som en beskrivelse av dokumentklassen, (ii) som et eksempel på bruken av den, og
(iii) som en mal for avhandlingen.${space}`,
        }),
      ),
    ),
    m.lines(
      inline(labelled(heading({ depth: 1 }, inline('Introduction')), label('introduction'))),
      inline`The original ${raw('ntnuthesis')} template was created by the CoPCSE ${footnote(inline(link('https://www.ntnu.no/wiki/display/copcse/Community+of+Practice+in+Computer+Science+Education+Home')))}
as a template applicable for theses at all study levels. It is closely based on the standard
LaTeX ${raw('report')} document class as well as previous thesis templates. This typst port
aims to replicate the look of the LaTeX template in typst.`,
    ),
    'The purpose of the present document is threefold. It should serve (i) as a description of the document class, (ii) as an example of how to use it, and (iii) as a thesis template.',
    m.lines(
      inline(labelled(heading({ depth: 1 }, inline('Using the Template')), label('chap:usage'))),
      inline(labelled(heading({ depth: 2 }, inline('Thesis Setup')), label('sec:setup'))),
      inline`The document class is initialized by calling ${raw({ lang: 'typst' }, '#show: nifty-ntnu-thesis.with()')}
at the beginning of your ${raw('.typ')} file. Currently it only supports english. The ${raw('nifty-ntnu-thesis')}
function has a number of options you can set, most of which will be described in this document.
The rest will be documented in this templates repository.`,
    ),
    inline`The titlepage at the beginning of this document is a placeholder to be used when writing the
thesis. This should be removed before handing in the thesis, by settting ${raw('titlepage: false')}.
Instead the official NTNU titlepage for the corresponding thesis type should be added as described
on Innsida.${footnote(inline`see ${link('https://innsida.ntnu.no/wiki/-/wiki/English/Finalizing+the+bachelor+and+master+thesis')}
for bachelor and master, and ${link('https://innsida.ntnu.no/wiki/-/wiki/English/Printing+your+thesis')}
for PhD.`)}`,
    m.lines(
      inline(labelled(heading({ depth: 2 }, inline('Title, Author, and Date')), label('title-author-and-date'))),
      inline`The title of your thesis should be set by changing the ${raw('title')} parameter of the template.
The title will appear on the titlepage as well as in the running header of the even numbered
pages. If the title is too long for the header, you can use ${raw('short-title')} to set a version
for the header.`,
    ),
    inline`The authors should be listed with full names in the ${raw('authors')} parameter. This is an
array, with multiple authors separated by a comma. As with the title, you can use ${raw('short-author')}
to set a version for the header.`,
    inline`Use ${raw('date')} to set the date of the document. It will only appear on the temporary title
page. To keep track of temporary versions, it can be a good idea to use ${raw('date: datetime.today()')}
while working on the thesis.`,
    m.lines(
      inline(labelled(heading({ depth: 2 }, inline('Page Layout')), label('page-layout'))),
      'The document class is designed to work with twosided printing. This means that all chapters start on odd (right hand) pages, and that blank pages are inserted where needed to make sure this happens. However, since the theses are very often read on displays, the margins are kept the same on even and odd pages in order to avoid that the page is jumping back and forth upon reading.',
    ),
    inline`By default this is turned off. You can turn it on by setting ${raw('chapters-on-odd: false')}
at the top of the file.`,
    m.lines(
      inline(labelled(heading({ depth: 2 }, inline('Structuring Elements')), label('structuring-elements'))),
      'The standard typst headings are supported, and are set using =.',
    ),
    inline(labelled(heading({ depth: 3 }, inline('This is a level 3 heading')), label('this-is-a-subsection'))),
    inline(labelled(heading({ depth: 4 }, inline('This is level 4 heading')), label('this-is-a-subsubsection'))),
    inline(labelled(heading({ depth: 5 }, inline('This is a level 5 heading')), label('this-is-a-paragraph'))),
    'Headings up to level 3 will be included in the table of contents, whereas the lower level structuring elements will not appear there. Don’t use too many levels of headings; how many are appropriate, will depend on the size of the document. Also, don’t use headings too frequently.',
    inline`Make sure that the chapter and section headings are correctly capitalised depending on the language
of the thesis, e.g., '${emph(inline`Correct Capitalisation of Titles in English`)}' vs. '${emph(inline`Korrekt staving av titler på norsk`)}'.`,
    inline`Simple paragraphs are the lowest structuring elements and should be used the most. They are
made by leaving one (or more) blank line(s) in the ${raw('.typ')} file. In the typeset document
they will appear indented and with no vertical space between them.`,
    m.lines(
      inline(labelled(heading({ depth: 2 }, inline('Lists')), label('lists'))),
      'Numbered and unnumbered lists are used just as in regular typst, but are typeset somewhat more densely and with other labels. Unnumbered list:',
    ),
    m.list(
      { tight: false },
      m.item(['first item']),
      m.item(
        ['second item'],
        m.list(
          { tight: false },
          m.item(['first subitem']),
          m.item(
            ['second subitem'],
            m.list({ tight: false }, m.item(['first subsubitem']), m.item(['second subsubitem'])),
          ),
        ),
      ),
      m.item(['last item']),
    ),
    'Numbered list:',
    m.enum(
      { tight: false },
      m.item(['first item']),
      m.item(
        ['second item'],
        m.enum(
          { tight: false },
          m.item(['first subitem']),
          m.item(
            ['second subitem'],
            m.enum({ tight: false }, m.item(['first subsubitem']), m.item(['second subsubitem'])),
          ),
        ),
      ),
      m.item(['last item']),
    ),
    m.lines(
      inline(labelled(heading({ depth: 2 }, inline('Figures')), label('figures'))),
      inline`Figures are added using ${raw({ lang: 'typst' }, '#figure()')}. An example is shown in ${link(label('fig:mapNTNU'), inline`2.1`)}.
By default figures are placed in the flow, exactly where it was specified. To change this set
the ${raw({ lang: 'placement' }, '')} option to either ${raw('top')}, ${raw('bottom')}, or ${raw('auto')}.
To add an image, use ${raw({ lang: 'typst' }, '#image()')} and set the ${raw('height')} or ${raw('width')}
to include the graphics file. If the caption consists of a single sentence fragment (incomplete
sentence), it should not be punctuated.`,
    ),
    inline(
      labelled(
        [
          figure(
            { caption: inline`${space}The map shows the three main campuses of NTNU.${space}` },
            image({ width: pct(50) }, path('figures/kart_student.png')),
          ),
          space,
        ],
        label('fig:mapNTNU'),
      ),
    ),
    inline`For figures compsed of several sub-figures, the ${raw('subpar')} module has been used. To use
it, use the function ${raw({ lang: 'typst' }, '#subfigure()')}. See ${link(label('fig:subfig'), inline`2.2`)}
with ${link(label('sfig:a'), inline`${symbol('[')}sfig:a${symbol(']')}`)} for an example.`,
    inline(
      subfigure(
        {
          columns: [fr(1), fr(1)],
          caption: inline`A figure composed of two sub-figures. It has a long caption in order to demonstrate how that
is typeset.${space}`,
          label: label('fig:subfig'),
        },
        figure({ caption: inline`First sub-figure` }, image({ width: pct(100) }, path('figures/kart_student.png'))),
        label('sfig:a'),
        figure({ caption: inline`Second sub-figure` }, image({ width: pct(100) }, path('figures/kart_student.png'))),
        label('sfig:b'),
      ),
      space,
      raw(
        { block: true, lang: 'typst' },
        '#subfigure(\n  figure(image("figures/kart_student.png", width: 100%),\n    caption: [First sub-figure]), <sfig:a>,\n  figure(image("figures/kart_student.png", width: 100%),\n    caption: [Second sub-figure]), <sfig:b>,\n    columns: (1fr, 1fr),\n   caption: [A figure composed of two sub-figures. It has a long caption in order to demonstrate how that is typeset.\n  ], label: <fig:subfig>\n)',
      ),
    ),
    m.lines(
      inline(labelled(heading({ depth: 2 }, inline('Tables')), label('tables'))),
      inline`Tables are added using ${raw({ lang: 'typst' }, '#table()')}, wrapped in a ${raw({ lang: 'typst' }, '#figure()')}
to allow referencing. An example is given in ${ref(label('tab:example1'))}. If the caption consists
of a single sentence fragment (incomplete sentence), it should not be punctuated.`,
    ),
    inline`${labelled([figure({ caption: inline`A simple, manually formatted example table` }, table({ stroke: null, columns: 2 }, table.hline(), table.header(inline(strong(inline`age`)), inline(strong(inline`IQ`))), table.hline(), inline`10`, inline`110`, inline`20`, inline`120`, inline`30`, inline`145`, inline`40`, inline`120`, inline`50`, inline`100`, table.hline())), space], label('tab:example1'))}
Tables can also be automatically generated from CSV files ${footnote(link('https://typst.app/docs/reference/data-loading/csv/'))}.`,
    m.lines(
      inline(labelled(heading({ depth: 2 }, inline('Listings')), label('listings'))),
      inline`Code listings are are also wrapped in a ${raw({ lang: 'typst' }, '#figure()')}. Code listings
are defined by using three ${raw('`backticks`')}. The programming language can also be provided.
See the typst documentation for details. The code is set with the monospace font, and the font
size is reduced to allow for code lines up to at least 60 characters without causing line breaks.
If the caption consists of a single sentence fragment (incomplete sentence), it should not be
punctuated.`,
    ),
    inline(
      labelled(
        figure(
          { caption: 'Python code in typst' },
          inline(
            space,
            raw(
              { block: true, lang: 'python' },
              'import numpy as np\nimport matplotlib.pyplot as plt\n\nx = np.linspace(0, 1)\ny = np.sin(2 * np.pi * x)\n\nplt.plot(x, y)\nplt.show()',
            ),
            space,
          ),
        ),
        label('lst:python'),
      ),
      space,
      labelled(
        figure(
          { caption: 'C++ code in typst' },
          inline(
            space,
            raw(
              { block: true, lang: 'cpp' },
              '#include <iostream>\nusing namespace std;\n\nint main()\n{\n  cout << "Hello, World!" << endl;\n  return 0;\n}',
            ),
          ),
        ),
        label('lst:cpp'),
      ),
    ),
    m.lines(
      inline(labelled(heading({ depth: 2 }, inline('Equations')), label('equations'))),
      inline`Equations are typeset as normally in typst. It is common to consider equations part of the surrounding
sentences, and include punctuation in the equations accordingly, e.g., ${labelled([unsafeRaw.math.block`f (x) = integral_1^x 1 / y thin d y = ln x thin .`, space], label('logarithm'))}
For more advanced symbols like, e.g., ${unsafeRaw.math`grad, pdv(x,y)`}, the ${raw('physica')}
module is preloaded. As you can see, the simple math syntax makes typst very easy to use.`,
      inline(labelled(heading({ depth: 2 }, inline('Fonts')), label('fonts'))),
      'Charter at 11pt with the has been selected as the main font for the thesis template. For code examples, the monospaced font should be used – for this, a scaled version of the DejaVu Sans Mono to match the main font is preselected.',
    ),
    m.lines(
      inline(labelled(heading({ depth: 2 }, inline('Cross References')), label('sec:crossref'))),
      inline`Cross references are inserted using ${raw('=')} in typst. For examples on usage, see ${ref(label('sec:crossref'))}
in ${ref(label('chap:usage'))}, ${ref(label('tab:example1'))} ${ref(label('fig:mapNTNU'))},
${ref(label('logarithm'))}, ${ref(label('lst:cpp'))} and ${link(label('app:additional'), inline`Appendix A`)}.`,
    ),
    m.lines(
      inline(labelled(heading({ depth: 2 }, inline('Bibliography')), label('bibliography'))),
      inline`The bibliography is typeset as in standard typst. It is added in the initializing function as
such: ${raw({ lang: 'typst' }, 'bibliography: bibliography("thesis.bib")')}. With this setup,
using ${raw('@')} will give a number only${sym.space.nobreak}${ref(label('landes1951scrutiny'))},
and ${raw({ lang: 'typst' }, '#cite(, form: "prose") ')} will give author and number like
this: ${cite({ form: 'prose' }, label('landes1951scrutiny'))}.`,
    ),
    m.lines(
      inline(labelled(heading({ depth: 2 }, inline('Appendices')), label('appendices'))),
      inline`Additional material that does not fit in the main thesis but may still be relevant to share,
e.g., raw data from experiments and surveys, code listings, additional plots, pre-project reports,
project agreements, contracts, logs etc., can be put in appendices. Simply issue the command
${raw({ lang: 'typst' }, '#show: appendix')} in the main ${raw('.typst')} file, and then the
following chapters become appendices. See ${link(label('app:additional'), inline`Appendix A`)}
for an example.`,
    ),
    m.lines(
      inline(labelled(heading({ depth: 1 }, inline('Thesis Structure')), label('thesis-structure'))),
      'The following is lifted more or less directly from the original template.',
    ),
    'The structure of the thesis, i.e., which chapters and other document elements that should be included, depends on several factors such as the study level (bachelor, master, PhD), the type of project it describes (development, research, investigation, consulting), and the diversity (narrow, broad). Thus, there are no exact rules for how to do it, so whatever follows should be taken as guidelines only.',
    'A thesis, like any book or report, can typically be divided into three parts: front matter, body matter, and back matter. Of these, the body matter is by far the most important one, and also the one that varies the most between thesis types.',
    m.lines(
      inline(labelled(heading({ depth: 2 }, inline('Front Matter')), label('sec:frontmatter'))),
      'The front matter is everything that comes before the main part of the thesis. It is common to use roman page numbers for this part to indicate this. The minimum required front matter consists of a title page, abstract(s), and a table of contents. A more complete front matter, in a typical order, is as follows.',
    ),
    m.terms(
      { tight: false },
      m.term(
        ['Title page', symbol(':')],
        [
          block(inline`${space}The title page should, at minimum, include the thesis title, authors and a date. A more
complete title page would also include the name of the study programme, and possibly the thesis
supervisor(s). See ${link(label('sec:setup'), inline`2.1`)}.${space}`),
        ],
      ),
      m.term(
        ['Abstracts', symbol(':')],
        [
          block(inline`${space}The abstract should be an extremely condensed version of the thesis. Think one sentence
with the main message from each of the chapters of the body matter as a starting point. ${cite({ form: 'prose' }, label('landes1951scrutiny'))}
have given some very nice instructions on how to write a good abstract. A thesis from a Norwegian
Univeristy should contain abstracts in both Norwegian and English irrespectively of the thesis
language (typically with the thesis language coming first).${space}`),
        ],
      ),
      m.term(
        ['Dedication', symbol(':')],
        [
          block(inline`${space}If you wish to dedicate the thesis to someone (increasingly common with increasing study
level), you may add a separate page with a dedication here. Since a dedication is a personal
statement, no template is given. Design it according to your preference.${space}`),
        ],
      ),
      m.term(
        ['Acknowledgements', symbol(':')],
        [
          block(inline`${space}If there is someone who deserves a 'thank you', you may add acknowledgements here. If
so, make it an unnumbered chapter.${space}`),
        ],
      ),
      m.term(
        ['Table of contents', symbol(':')],
        [
          block(inline`${space}A table of contents should always be present in a document at the size of a thesis.
It is generated automatically using the ${raw('outline()')} command. The one generated by this
document class also contains the front matter and unnumbered chapters.${space}`),
        ],
      ),
      m.term(
        ['List of figures', symbol(':')],
        [
          block(inline`${space}If the thesis contains many figures that the reader might want to refer back to, a list
of figures can be included here. It is generated using ${raw('outline()')}.${space}`),
        ],
      ),
      m.term(
        ['List of tables', symbol(':')],
        [
          block(inline`${space}If the thesis contains many tables that the reader might want to refer back to, a list
of tables can be included here. It is generated using ${raw('outline()')}.${space}`),
        ],
      ),
      m.term(
        ['List of code listings', symbol(':')],
        [
          block(inline`${space}If the thesis contains many code listings that the reader might want to refer back to,
a list of code listings can be included here. It is generated using ${raw('outline()')}.${space}`),
        ],
      ),
      m.term(
        ['Other lists', symbol(':')],
        [
          block(inline`${space}If there are other list you would like to include, this would be a good place. Examples
could be lists of definitions, theorems, nomenclature, abbreviations, glossary etc.${space}`),
        ],
      ),
      m.term(
        ['Preface or Foreword', symbol(':')],
        [
          block(inline`${space}A preface or foreword is a good place to make other personal statements that do not
fit whithin the body matter. This could be information about the circumstances of the thesis,
your motivation for choosing it, or possibly information about an employer or an external company
for which it has been written. Add this in the initializing function of this template.${space}`),
        ],
      ),
    ),
    m.lines(
      inline(labelled(heading({ depth: 2 }, inline('Body Matter')), label('body-matter'))),
      inline`The body matter consists of the main chapters of the thesis. It starts the Arabic page numbering
with page${sym.space.nobreak}1. There is a great diversity in the structure chosen for different
thesis types. Common to almost all is that the first chapter is an introduction, and that the
last one is a conclusion followed by the bibliography.`,
    ),
    m.lines(
      inline(labelled(heading({ depth: 3 }, inline('Development Project')), label('sec:development'))),
      inline`For many bachelor and some master projects in computer science, the main task is to develop
something, typically a software prototype, for an 'employer' (e.g., an external company or a
research group). A thesis describing such a project is typically structured as a software development
report whith more or less the following chapters:`,
    ),
    m.terms(
      { tight: false },
      m.term(
        ['Introduction', symbol(':')],
        [
          block(inline`${space}The introduction of the thesis should take the reader all the way from the big picture
and context of the project to the concrete task that has been solved in the thesis. A nice skeleton
for a good introduction was given by ${cite({ form: 'prose' }, label('claerbout1991scrutiny'))}:
${emph(inline`review–claim–agenda`)}. In the review part, the background of the project is covered.
This leads up to your claim, which is typically that some entity (software, device) or knowledge
(research questions) is missing and sorely needed. The agenda part briefly summarises how your
thesis contributes.${space}`),
        ],
      ),
      m.term(
        ['Requirements', symbol(':')],
        [
          block(inline`${space}The requirements chapter should lead up to a concrete description of both the functional
and non-functional requirements for whatever is to be developed at both a high level (use cases)
and lower levels (low level use cases, requirements). If a classical waterfall development process
is followed, this chapter is the product of the requirement phase. If a more agile model like,
e.g., SCRUM is followed, the requirements will appear through the project as, e.g., the user
stories developed in the sprint planning meetings.${space}`),
        ],
      ),
      m.term(
        ['Technical design', symbol(':')],
        [
          block(inline`${space}The technical design chapter describes the big picture of the chosen solution. For a
software development project, this would typically contain the system arcitechture (client-server,
cloud, databases, networking, services etc.); both how it was solved, and, more importantly,
why this architecture was chosen.${space}`),
        ],
      ),
      m.term(
        ['Development Process', symbol(':')],
        [
          block(inline`${space}In this chapter, you should describe the process that was followed. It should cover
the process model, why it was chosen, and how it was implemented, including tools for project
management, documentation etc. Depending on how you write the other chapters, there may be good
reasons to place this chapters somewhere else in the thesis.${space}`),
        ],
      ),
      m.term(
        ['Implementation', symbol(':')],
        [
          block(inline`${space}Here you should describe the more technical details of the solution. Which tools were
used (programming languages, libraries, IDEs, APIs, frameworks, etc.). It is a good idea to
give some code examples. If class diagrams, database models etc. were not presented in the technical
design chapter, they can be included here.${space}`),
        ],
      ),
      m.term(
        ['Deployment', symbol(':')],
        [
          block(inline`${space}This chapter should describe how your solution can be deployed on the employer’s system.
It should include technical details on how to set it up, as well as discussions on choices made
concerning scalability, maintenance, etc.${space}`),
        ],
      ),
      m.term(
        ['Testing and user feedback', symbol(':')],
        [
          block(inline`${space}This chapter should describe how the system was tested during and after development.
This would cover everything from unit testing to user testing; black-box vs. white-box; how
it was done, what was learned from the testing, and what impact it had on the product and process.${space}`),
        ],
      ),
      m.term(
        ['Discussion', symbol(':')],
        [
          block(inline`${space}Here you should discuss all aspect of your thesis and project. How did the process work?
Which choices did you make, and what did you learn from it? What were the pros and cons? What
would you have done differently if you were to undertake the same project over again, both in
terms of process and product? What are the societal consequences of your work?${space}`),
        ],
      ),
      m.term(
        ['Conclusion', symbol(':')],
        [
          block(inline`${space}The conclusion chapter is usually quite short – a paragraph or two – mainly summarising
what was achieved in the project. It should answer the ${emph(inline`claim`)} part of the introduction.
It should also say something about what comes next ('future work').${space}`),
        ],
      ),
      m.term(
        ['Bibliography', symbol(':')],
        [
          block(inline`${space}The bibliography should be a list of quality-assured peer-reviewed published material
that you have used throughout the work with your thesis. All items in the bibliography should
be referenced in the text. The references should be correctly formatted depending on their type
(book, journal article, conference publication, thesis etc.). The bibliography should not contain
links to arbitrary dynamic web pages where the content is subject to change at any point of
time. Such links, if necessary, should rather be included as footnotes throughout the document.
The main point of the bibliography is to back up your claims with quality-assured material that
future readers will actually be able to retrieve years ahead.${space}`),
        ],
      ),
    ),
    m.lines(
      inline(labelled(heading({ depth: 3 }, inline('Research Project')), label('sec:resesarch'))),
      'For many master and some bachelor projects in computer science, the main task is to gain knew knowledge about something. A thesis describing such a project is typically structed as an extended form of a scientific paper, following the so-called IMRaD (Introduction, Method, Results, and Discussion) model:',
    ),
    m.terms(
      { tight: false },
      m.term(
        ['Introduction', symbol(':')],
        [block(inline`${space}See ${link(label('sec:development'), inline`3.2.1`)}.${space}`)],
      ),
      m.term(
        ['Background', symbol(':')],
        [
          block(inline`${space}Research projects should always be based on previous research on the same and/or related
topics. This should be described as a background to the thesis with adequate bibliographical
references. If the material needed is too voluminous to fit nicely in the review part of the
introduction, it can be presented in a separate background chapter.${space}`),
        ],
      ),
      m.term(
        ['Method', symbol(':')],
        [
          block(inline`${space}The method chapter should describe in detail which activities you undertake to answer
the research questions presented in the introduction, and why they were chosen. This includes
detailed descriptions of experiments, surveys, computations, data analysis, statistical tests
etc.${space}`),
        ],
      ),
      m.term(
        ['Results', symbol(':')],
        [
          block(inline`${space}The results chapter should simply present the results of applying the methods presented
in the method chapter without further ado. This chapter will typically contain many graphs,
tables, etc. Sometimes it is natural to discuss the results as they are presented, combining
them into a 'Results and Discussion' chapter, but more often they are kept separate.${space}`),
        ],
      ),
      m.term(
        ['Discussion', symbol(':')],
        [block(inline`${space}See ${link(label('sec:development'), inline`3.2.1`)}.${space}`)],
      ),
      m.term(
        ['Conclusion', symbol(':')],
        [block(inline`${space}See ${link(label('sec:development'), inline`3.2.1`)}.${space}`)],
      ),
      m.term(
        ['Bibliography', symbol(':')],
        [block(inline`${space}See ${link(label('sec:development'), inline`3.2.1`)}.${space}`)],
      ),
    ),
    m.lines(
      inline(labelled(heading({ depth: 3 }, inline('Monograph PhD Thesis')), label('sec:monograph'))),
      inline`Traditionally, it has been common to structure a PhD thesis as a single book – a ${emph(inline`monograph`)}.
If the thesis is in the form of one single coherent research project, it can be structured along
the lines of ${link(label('sec:resesarch'), inline`3.2.2`)}. However, for such a big work that
a PhD thesis constitutes, the tasks undertaken are often more diverse, and thus more naturally
split into several smaller research projects as follows:`,
    ),
    m.terms(
      { tight: false },
      m.term(
        ['Introduction', symbol(':')],
        [
          block(inline`${space}The introduction would serve the same purpose as for a smaller research project described
in ${link(label('sec:development'), inline`3.2.1`)}, but would normally be somewhat more extensive.
The ${emph(inline`agenda`)} part should inform the reader about the structure of the rest of
the document, since this may vary significantly between theses.${space}`),
        ],
      ),
      m.term(
        ['Background', symbol(':')],
        [
          block(inline`${space}Where as background chapters are not necessarily needed in smaller works, they are almost
always need in PhD thesis. They may even be split into several chapters if there are significantly
different topics to cover. See ${link(label('sec:resesarch'), inline`3.2.2`)}.${space}`),
        ],
      ),
      m.term(
        ['Main chapters', symbol(':')],
        [
          block(
            blocks(
              'Each main chapter can be structured more or less like a scientific paper. Depending on how much is contained in the introduction and background sections, the individual introduction and background sections can be significantly reduced or even omitted completely.',
              m.list(
                { tight: false },
                m.item(['(Introduction)']),
                m.item(['(Background)']),
                m.item(['Method']),
                m.item(['Results']),
                m.item(['Discussion']),
                m.item(['Conclusion']),
              ),
            ),
          ),
        ],
      ),
      m.term(
        ['Discussion', symbol(':')],
        [
          block(inline`${space}In addition to the discussions within each of the individual chapters, the contribution
of the thesis ${emph(inline`as a whole`)} should be thoroughly discussed here.${space}`),
        ],
      ),
      m.term(
        ['Conclusion', symbol(':')],
        [
          block(inline`${space}In addition to the conclusions of each of the individual chapters, the overall conclusion
of the thesis, and how the different parts contribute to it, should be presented here. The conclusion
should answer to the research questions set out in the main introduction. See also ${link(label('sec:development'), inline`3.2.1`)}.${space}`),
        ],
      ),
      m.term(
        ['Bibliography', symbol(':')],
        [block(inline`${space}See ${link(label('sec:development'), inline`3.2.1`)}.${space}`)],
      ),
    ),
    m.lines(
      inline(labelled(heading({ depth: 3 }, inline('Compiled PhD Thesis')), label('sec:compiledphd'))),
      'Instead of writing up the PhD thesis as a monograph, compiled PhD theses (also known as stapler theses, sandwich theses, integrated theses, PhD by published work) consisting of reproductions of already published research papers are becoming increasingly common. At least some of the papers should already have been accepted for publication at the time of submission of the thesis, and thus have been through a real quality control by peer review.',
    ),
    m.terms(
      { tight: false },
      m.term(
        ['Introduction', symbol(':')],
        [block(inline`${space}See ${link(label('sec:monograph'), inline`3.2.3`)}.${space}`)],
      ),
      m.term(
        ['Background', symbol(':')],
        [block(inline`${space}See ${link(label('sec:monograph'), inline`3.2.3`)}.${space}`)],
      ),
      m.term(
        ['Main contributions', symbol(':')],
        [
          block(inline`${space}This chapter should sum up ${emph(inline`and integrate`)} the contribution of the thesis
as a whole. It should not merely be a listing of the abstracts of the individual papers – they
are already available in the attached papers, and, as such, not needed here.${space}`),
        ],
      ),
      m.term(
        ['Discussion', symbol(':')],
        [block(inline`${space}See ${link(label('sec:monograph'), inline`3.2.3`)}.${space}`)],
      ),
      m.term(
        ['Conclusion', symbol(':')],
        [block(inline`${space}See ${link(label('sec:monograph'), inline`3.2.3`)}.${space}`)],
      ),
      m.term(
        ['Bibliography', symbol(':')],
        [block(inline`${space}See ${link(label('sec:development'), inline`3.2.1`)}.${space}`)],
      ),
      m.term(
        ['Paper I', symbol(':')],
        [
          block(inline`${space}First included paper with main contributions. It can be included verbatim as a PDF.
The publishers PDF should be used if the copyright permits it. This should be checked with the
SHERPA/RoMEO database${footnote(inline(link('http://sherpa.ac.uk/romeo/index.php')))} or with
the publisher. Even when it is no general permission by the publisher, you may write and ask
for one.${space}`),
        ],
      ),
      m.term(['Paper II', symbol(':')], [block(inline`${space}etc.${space}`)]),
    ),
    m.lines(
      inline(labelled(heading({ depth: 2 }, inline('Back Matter')), label('back-matter'))),
      inline`Material that does not fit elsewhere, but that you would still like to share with the readers,
can be put in appendices. See ${link(label('app:additional'), inline`5`)}.`,
    ),
    m.lines(
      inline(labelled(heading({ depth: 1 }, inline('Conclusion')), label('conclusion'))),
      inline`You definitely should use the ${raw('nifty-ntnu-thesis')} typst template for your thesis.`,
    ),
    m.lines(
      show(appendix_with({ chaptersOnOdd: chaptersOnOdd })),
      inline(labelled(heading({ depth: 1 }, inline('Additional Material')), label('app:additional'))),
      inline`Additional material that does not fit in the main thesis but may still be relevant to share,
e.g., raw data from experiments and surveys, code listings, additional plots, pre-project reports,
project agreements, contracts, logs etc., can be put in appendices. Simply issue the command
${raw('#show: appendix')} in the main ${raw('.typ')} file, and make one chapter per appendix.`,
    ),
  )
}
