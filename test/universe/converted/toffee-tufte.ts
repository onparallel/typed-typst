// Converted from test/universe/corpus/toffee-tufte.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  align,
  aqua,
  bibliography,
  block,
  blocks,
  bottom,
  define,
  doc,
  eastern,
  em,
  emph,
  external,
  figure,
  heading,
  horizon,
  importPackage,
  inline,
  label,
  labelled,
  link,
  luma,
  m,
  outline,
  path,
  pct,
  pt,
  raw,
  rect,
  ref,
  set,
  show,
  space,
  strong,
  sym,
  symbol,
  teal,
  top,
  v,
  where,
} from '../../../src/index.ts'

export default () => {
  const template = external('template')
  const sidenote = define('sidenote')
    .pos('arg1', T.content)
    .named('dy', T.any, null)
    .named('numbered', T.any, null)
    .returns(T.any)
    .external()
  const sidecite = define('sidecite').pos('arg1', T.any).returns(T.any).external()
  const wideblock = define('wideblock').pos('arg1', T.content).returns(T.any).external()
  const template_with = define('with')
    .named('abstract', T.content, [])
    .named('authors', T.any, null)
    .named('bib', T.any, null)
    .named('title', T.content, [])
    .returns(T.any)
    .external(template)
  const sidenote_with = define('with').named('numbered', T.any, null).returns(T.any).external(sidenote)
  return doc(
    importPackage('@preview/toffee-tufte:0.1.1', [template, sidenote, sidecite, wideblock]),
    show(
      template_with({
        title: inline`${raw('toffee-tufte 0.1.1')}: An opinionated Tufte-inspired template for scientific reports`,
        authors: 'Jian Wei Cheong',
        abstract: inline`${space}This template was inspired by the style of Edward Tufte's handouts and books. By keeping
the large right margin for sidenotes, but changing the design language, this template aims to
maintain the practicality of a sidenote-centric document, while having a more familiar look
for scientific and engineering fields. This document covers the usage guide of this template.${space}`,
        bib: bibliography(path('main.bib')),
      }),
    ),
    inline(sidenote({ dy: em(1.5), numbered: false }, inline(outline({ depth: 2 })))),
    m.lines(
      inline(labelled(heading({ depth: 1 }, inline('Usage Guide')), label('sec:usage-guide'))),
      m.heading(2, 'Motivation'),
    ),
    inline`Famous for his works on information design and data visualization, ${link('https://en.wikipedia.org/wiki/Edward_Tufte', inline`Edward Tufte`)}'s
handout design is lauded for having well-set typography with a clean and elegant look. Its design
and style is a favorite of many, and has been replicated in various typesetting programs${sidenote(inline`See ${link('https://www.overleaf.com/latex/templates/example-of-the-tufte-handout-style/ysjghcrgdrnz', inline`LaTeX`)},
${link('https://bookdown.org/yihui/rmarkdown/tufte-handouts.html', inline`R Markdown`)}, ${link('https://github.com/fredguth/tufte-inspired', inline`Quarto`)},
and ${link('https://typst.app/universe/package/tufte-memo', inline`Typst itself`)}.`)}.`,
    inline`However, some design choices, ${emph(inline`in my opinion`)}, lead to less information clarity${sidenote(inline`E.g., the use of ${emph(inline`italics`)} instead of ${strong(inline`bold`)} for section headings.`)}
and density. Furthermore, its design language might be atypical and unfamiliar to scientists
and engineers, different from those in published literature, or those in common LaTeX or Typst
templates.`,
    'This template aims to provide the practical advantages of the Tufte-inspired layout, while keeping the more familiar design language for scientific documents with a focus on information clarity and density.',
    m.heading(2, 'Options'),
    inline`To use this template, simply import it and set the options with a ${raw('show')} rule:`,
    inline(
      raw(
        { block: true, lang: 'typst' },
        '#import "@preview/toffee-tufte:0.1.1": *\n#show: template.with(\n  title: [This is a title],\n  authors: "John Doe",\n)',
      ),
    ),
    m.lines(
      inline`These are the 11 options${sidenote(inline`All of which are optional.`)} and their default values:`,
      m.enum(
        m.item([raw('title: content | none = none'), ',']),
        m.item([raw('authors: array | none | str = none'), ',']),
        m.item([
          raw('date: str ='),
          space,
          symbol('<'),
          'todays date',
          symbol('>'),
          sidenote(inline`The date is automatically set to be the current date in "21 September 2025" format.`),
          ',',
        ]),
        m.item([raw('abstract: none = none'), ',']),
        m.item([raw('toc: bool = false'), ',']),
        m.item([raw('full: bool | state = false'), ',']),
        m.item([raw('header: bool | true'), ',']),
        m.item([raw('footer: bool | true'), ',']),
        m.item([raw('header-content: none = none'), ',']),
        m.item([raw('footer-content: none = none'), ',']),
        m.item([raw('bib: [bib content] | none = none'), ',']),
      ),
    ),
    m.heading(3, 'Title block'),
    inline`An example of the title block is shown at the start of this document. ${raw('title')}, ${raw('author')},
${raw('date')}, ${raw('abstract')}, and table of contents will be shown in the title block.
Keeping the default options means that only ${raw('date')} will be printed, which can be overwritten
or disabled by setting for example ${raw('date: "01-02-06"')} or ${raw('date: none')}, respectively.`,
    inline`For multiple authors, they must be placed in an ${raw('array')}, e.g., ${raw('authors: ("John Doe", "Jane Doe")')},
which will result in "John Doe and Jane Doe"${sidenote(inline`For 3 or more authors, the ${link('https://en.wikipedia.org/wiki/Serial_comma', inline`serial/Oxford comma`)}
will be used.`)}. If this formatting is not desired, one can combine the names in a single string
in the desired format, e.g., ${raw('authors: "John Doe & Jane Doe"')}.`,
    inline`Note that any missing options${sidenote(inline`Or ${raw('date: none')} for ${raw('date')}.`)}
will not create a blank line in the title block, but setting them as an empty string ${raw('""')}
would.`,
    m.heading(3, 'Table of contents', ' ', sym.dash.em, ' ', raw('toc')),
    inline`Table of contents is disabled by default, but can be activated with ${raw('toc: true')}. It
will be placed right after the abstract in the title block, with up till ${raw('depth: 2')}.`,
    inline`One can also place the table of contents at the side margin as shown at the first page with${sidenote(inline`Here, we used the function ${raw('sidenote')} that comes with this template. Refer to Sec.${sym.space.nobreak}${ref(label('sec:sidenote'))}
for details on this function.`)}:`,
    inline(raw({ block: true, lang: 'typst' }, '#sidenote(numbered: false)[#outline(depth: 3)]')),
    m.heading(3, 'Full width', ' ', sym.dash.em, ' ', raw('full')),
    inline`In addition to the default Tufte-style format as shown in this document, this template also
provides the option to become a full width document by setting ${raw('full: true')}. Doing so
will turn all contents placed in the right margin to footnotes automatically.`,
    m.heading(3, 'Headers and footers'),
    inline`By default, as shown in this document, the page header contains the title, author, and date,
while the footer contains just the page number. These can be turned off with ${raw('header: false')}
and ${raw('footer: false')}. Custom header and footer contents can also be provided with ${raw('header-content')}
and ${raw('footer-content')}.`,
    m.heading(3, 'Bibliography', ' ', sym.dash.em, ' ', raw('bib')),
    inline`The ${raw('bib')} option takes a ${raw('bibliography("file.bib")')} function for citations
and is simply for convenience. It creates a "Bibliography" section at the end of the document
in full width.`,
    m.heading(2, 'Functions'),
    inline`This template provides three functions: ${raw('#sidenote()')}, ${raw('#sidecite()')}, and ${raw('#wideblock()')},
which are modifications of functions made by ${link('https://noahgula.com/', inline`Noah Gula`)}
for his ${raw('tufte-memo')} template ${sidecite(label('tufte-memo2024'))}. These functions
rely on the ${raw('drafting')} package by Nathan Jessurun and ${link('https://t1ng.dk/', inline`Jens Tinggaard`)}
${sidecite(label('drafting2025'))}.`,
    inline(
      labelled(
        heading({ depth: 3 }, inline('Sidenote', ' ', sym.dash.em, ' ', raw('#sidenote()'))),
        label('sec:sidenote'),
      ),
    ),
    inline(
      block(
        { fill: luma(pct(95)), radius: pt(4), inset: pt(5) },
        blocks(
          'A sidenote.',
          inline`Places a sidenote at the right margin. If ${raw('full')} template option is set to ${raw('true')},
becomes a footnote instead.`,
          m.list(
            m.item([raw('dy: auto | length = auto'), space, 'Vertical offset.']),
            m.item([raw('numbered: bool = true'), space, 'Insert a superscript number.']),
            m.item([raw('body: content'), space, 'Required. The content of the sidenote.']),
          ),
        ),
      ),
    ),
    'Sidenotes can be placed easily with',
    inline(raw({ block: true, lang: 'typst' }, '#sidenote[This is a sidenote content.]')),
    inline`For example, this sidenote${sidenote({ dy: em(-2) }, inline`This is an example sidenote.`)}
was placed as follows:`,
    inline(
      raw(
        { block: true, lang: 'typst' },
        'For example, this sidenote#sidenote(dy: -2em)[This is an example sidenote.] was placed as follows:',
      ),
    ),
    inline`Different types of content can also be placed in with the ${raw('#sidenote()')} function, e.g.,
figures, tables, or code blocks.`,
    inline(
      sidenote(
        { dy: em(-10), numbered: false },
        blocks(
          'Likewise, this sidenote without numbering can be placed by:',
          inline(
            raw(
              { block: true, lang: 'typst' },
              '#sidenote(numbered: false)[Likewise, this sidenote without numbering can be placed by:]',
            ),
          ),
        ),
      ),
    ),
    inline`${v(em(-1.5))} For example, this is a sidenote figure:`,
    inline(
      raw(
        { block: true, lang: 'typst' },
        '#sidenote(numbered: false)[\n  #figure(\n    rect(width: 100%, height: 10em, fill: aqua),\n    caption: [This is an example sidenote figure.],\n  )\n]',
      ),
    ),
    inline(
      sidenote(
        { dy: em(-12.5), numbered: false },
        inline(
          space,
          figure(
            { caption: inline`This is an example sidenote figure.` },
            rect(
              { width: pct(100), height: em(10), fill: aqua },
              inline(space, align(horizon, 'This is a sidenote figure.'), space),
            ),
          ),
          space,
        ),
      ),
    ),
    'For figures in the main text, it is also possible to position their caption as a sidenote with',
    inline(
      raw(
        { block: true, lang: 'typst' },
        '#set figure.caption(position: top)\n#show figure.caption.where(position: top): sidenote.with(numbered: false)',
      ),
      space,
      set(figure.caption, { position: top }),
      space,
      show(where(figure.caption, { position: top }), sidenote_with({ numbered: false })),
    ),
    m.lines(
      set(figure.caption, { position: top }),
      inline(
        figure(
          { caption: inline`This is an example sidenote figure caption.` },
          rect(
            { width: pct(50), height: em(7), fill: teal },
            inline(space, align(horizon, 'This is a figure with its caption as a sidenote.'), space),
          ),
        ),
        space,
        set(figure.caption, { position: bottom }),
      ),
    ),
    inline(
      labelled(
        heading({ depth: 3 }, inline('Sidenote citation', ' ', sym.dash.em, ' ', raw('#sidecite()'))),
        label('sec:sidecite'),
      ),
    ),
    inline(
      block(
        { fill: luma(pct(95)), radius: pt(4), inset: pt(5) },
        blocks(
          'A sidenote citation.',
          inline`Places a sidenote at the right margin. If ${raw('full')} template option is set to ${raw('true')},
becomes a footnote instead. Only display when ${raw('bibliography')} is defined.`,
          m.list(
            m.item([raw('dy: auto | length = auto'), space, 'Vertical offset.']),
            m.item([raw('form: none | str = "normal"'), space, 'Form of in-text citation.']),
            m.item([raw('style: [csl] | auto | bytes | str = auto'), space, 'Citation style.']),
            m.item([raw('supplement: content | none = none'), space, 'Citation supplement.']),
            m.item([raw('key: cite-label'), space, 'Required. The citation key.']),
          ),
        ),
      ),
    ),
    inline`We have already seen some of the sidenote citations above. For example, here we cite the famous
EPR paper ${sidecite(label('EinsteinEPR1935'))} as a sidenote.`,
    'Which is cited simply by',
    inline(
      raw(
        { block: true, lang: 'typst' },
        'For example, here we cite the famous EPR paper #sidecite(<EinsteinEPR1935>) as a sidenote.',
      ),
    ),
    inline`The citations will automatically be added to the Bibliography at the end of the document, and
of course, ${raw('bibliography')} must be defined for this function to work${sidenote(inline`Recall that it can also be defined with the ${raw('bibfile')} template option.`)}.`,
    inline`The usual ${raw('form')}, ${raw('style')}, and ${raw('supplement')} for citations can be fed
to the function for more customizability.`,
    inline(
      labelled(
        heading({ depth: 3 }, inline('Wideblock', ' ', sym.dash.em, ' ', raw('#wideblock()'))),
        label('sec:wideblock'),
      ),
    ),
    inline(
      block(
        { fill: luma(pct(95)), radius: pt(4), inset: pt(5) },
        blocks(
          'Wideblock',
          'Wrapped content will span the full width of the page.',
          m.list(m.item([raw('content: content | none'), space, 'Required. The content to span the full width.'])),
        ),
      ),
    ),
    inline(
      wideblock(
        blocks(
          inline`The ${raw('#wideblock()')} function simply ensures that the wrapped content span the full width
of the document, spilling over to the right margin, e.g., this paragraph. It is not affected
by the ${raw('full')} template option; both ${raw('full: true')} and ${raw('full: false')} gives
the same result. Though of course, in the case of ${raw('full: true')}, there is no need to
use ${raw('#wideblock()')}.`,
          inline`${raw('#wideblock()')} can also be used on figures. For example,`,
          inline(
            raw(
              { block: true, lang: 'typst' },
              '#wideblock[\n  #figure(\n    rect(width: 100%, height: 10em, fill: eastern),\n    caption: [This is a full width figure.],\n  )\n]',
            ),
            space,
            figure(
              { caption: inline`This is a full width figure.` },
              rect(
                { width: pct(100), height: em(10), fill: eastern },
                inline(space, align(horizon, 'This is a full width figure.'), space),
              ),
            ),
          ),
        ),
      ),
    ),
  )
}
