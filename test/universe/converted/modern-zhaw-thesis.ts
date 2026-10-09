// Converted from test/universe/corpus/modern-zhaw-thesis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  blocks,
  center,
  codeBlock,
  define,
  doc,
  external,
  figure,
  footnote,
  fr,
  heading,
  importFile,
  importPackage,
  includeFile,
  inline,
  label,
  labelled,
  left,
  link,
  m,
  path,
  quote,
  raw,
  ref,
  right,
  show,
  space,
  strong,
  table,
  unsafeRaw,
  where,
} from '../../../src/index.ts'

export default () => {
  const zhawThesis = external('zhaw-thesis')
  const languages = external('languages')
  const callout = define('callout').pos('arg1', T.any).pos('arg2', T.content).returns(T.any).external()
  const myGlossary = external('myGlossary')
  const zhawThesis_with = define('with')
    .named('abstract', T.any, null)
    .named('appendix', T.content, [])
    .named('bibliography', T.any, null)
    .named('cover', T.any, null)
    .named('declaration-of-originality', T.any, null)
    .named('glossary-entries', T.any, null)
    .named('language', T.any, null)
    .returns(T.any)
    .external(zhawThesis)
  const languages_en = external('en', languages)
  return doc(
    m.lines(
      importPackage('@preview/modern-zhaw-thesis:0.4.0', [zhawThesis, languages, callout]),
      importFile('glossary.typ', [myGlossary]),
    ),
    show(
      zhawThesis_with({
        language: languages_en,
        cover: {
          school: 'Engineering',
          institute: 'Institute of Computer Science',
          workType: 'Bachelor thesis',
          title: 'ZHAW Thesis Template',
          authors: ['Alice Müller', 'Bob Schmidt'],
          supervisors: { main: ['Alice Müller', 'Dr. Eve Johnson'] },
          studyProgram: 'Computer Science B.Sc.',
        },
        abstract: {
          keywords: ['template', 'typst', 'zhaw', 'thesis'],
          de: 'Diese Vorlage dient als Demonstration der Funktionen von Typst und der Struktur einer Abschlussarbeit an der ZHAW. Sie umfasst Beispiele für Querverweise, ein Glossar, ein Literaturverzeichnis, mathematische Gleichungen und Codeausschnitte.',
          en: 'This template serves as a demonstration of Typst features and the structure of a thesis at ZHAW. It includes examples of cross-references, a glossary, bibliography, mathematical equations, and code snippets.',
        },
        declarationOfOriginality: { location: 'Zürich' },
        glossaryEntries: myGlossary,
        bibliography: bibliography({ style: 'ieee' }, path('biblio.bib')),
        appendix: blocks(includeFile('appendix.typ')),
      }),
    ),
    inline(labelled(heading({ depth: 1 }, inline('Introduction')), label('intro'))),
    'This document serves as a demo of both Typst features and the template itself.',
    m.heading(2, 'What is Typst?'),
    inline`${link('https://typst.app/', 'Typst')} is a modern typesetting system that combines the simplicity
of Markdown with the power of LaTeX. It allows you to create beautiful documents with ease,
keeping styling separate from content.`,
    m.heading(2, 'Is Typst better than Latex?'),
    m.lines(
      inline`That's subjective, but:`,
      m.list(
        m.item(['it compiles much faster and provides real-time preview (no compilation delays)']),
        m.item(['its syntax is much nicer to write and look at']),
        m.item([
          'it has built-in support for features that require packages in LaTeX (bibliography, cross-references, glossary, code snippets, etc.)',
        ]),
        m.item(['its web editor works better than Overleaf']),
      ),
    ),
    inline(labelled(heading({ depth: 1 }, inline('Features showcase')), label('features'))),
    m.heading(2, 'Glossary, references and labels'),
    inline`Here we have a glossary reference: ${ref(label('iot:long'))}. We can also use the acronym form:
${ref(label('iot:short'))}. See the ${link('https://typst.app/universe/package/glossy/', 'Glossy')}
documentation for more details. Here we refer to a term, not an acronym: ${ref(label('deployment'))}.`,
    inline`Here we refer to a source from our bibliography ${ref(label('garcia2021microservices'))}. Pass
a ${link('https://typst.app/docs/reference/model/bibliography/', inline`${raw('bibliography()')} object`)}
to the ${raw('bibliography:')} parameter to control the file and style.`,
    inline`We can also refer to equations, such as ${ref(label('eq:weights'))}, and figures, such as ${ref(label('tab:results'))}.`,
    inline`Finally, here we refer to a section: ${ref(label('intro'))}.`,
    m.heading(2, 'Quotes, lists, and footnotes'),
    inline(
      quote(
        { attribution: inline`Alan Kay, keynote address` },
        inline`The best way to predict the future is to invent it.`,
      ),
    ),
    m.enum(
      m.item(['Plan the structure of each chapter']),
      m.item(
        m.lines(
          'Write and revise the main text',
          m.enum(
            m.item([
              'Draft each section in a separate file and',
              space,
              raw('#include'),
              space,
              'it from',
              space,
              raw('main.typ'),
            ]),
            m.item(
              m.lines(
                'Keep figures and tables near their first reference',
                m.enum(
                  m.item(['Prefer vector graphics (SVG) for diagrams']),
                  m.item(['Export raster images at sufficient resolution for print']),
                ),
              ),
            ),
          ),
        ),
      ),
      m.item(['Proofread the bibliography and front matter']),
    ),
    inline`Here is a footnote.${footnote(inline`${space}Footnote text is set at the bottom of the page; numbering restarts each page by default
unless you change ${raw('footnote')} rules globally.${space}`)}`,
    m.heading(2, 'Maths'),
    inline(
      labelled(
        [
          unsafeRaw.math.block`f(x) & = sigma(W_L sigma(W_(L-1) dots sigma(W_1 x + b_1) dots + b_(L-1)) + b_L) \\
       & = (sigma dot W_L dot sigma dot W_(L-1) dot dots dot sigma dot W_1)(x, b_1, dots, b_L)`,
          space,
        ],
        label('eq:weights'),
      ),
    ),
    inline`The equation above (${ref(label('eq:weights'))}) shows the forward pass of a neural network
with ${unsafeRaw.math`L`} layers, weights ${unsafeRaw.math`W_i`}, biases ${unsafeRaw.math`b_i`},
and activation function ${unsafeRaw.math`sigma`}.`,
    inline`Equations can also be inline: ${unsafeRaw.math`V_k^* (s) = max_a sum_(s') underbrace(P(s' | s, a), "transition proba") lr((underbrace(r_(t+1), "reward s" arrow "s'") + gamma underbrace(V_(k-1)^* (s'), "precalc. val of s'")), size: #40%)`}.`,
    m.heading(2, 'Figures'),
    'Figures allow to wrap images, tables, code snippets, and more in captions and labels that you can refer to.',
    m.heading(3, 'Tables'),
    inline(
      labelled(
        [
          figure(
            { caption: 'Table with custom alignment' },
            table(
              { columns: 3, align: [left, center, right] },
              inline`Metric`,
              inline`Best Value`,
              inline`Interpretation`,
              inline`Precision`,
              inline`1.0`,
              inline`All predictions are correct`,
              inline`Recall`,
              inline`1.0`,
              inline`All targets are found`,
              inline`${unsafeRaw.math`F_1`} Score`,
              inline`1.0`,
              inline`Perfect balance`,
              inline`False Positive Rate`,
              inline`0.0`,
              inline`No false alarms`,
            ),
          ),
          space,
        ],
        label('tab:metrics'),
      ),
    ),
    inline(
      labelled(
        [
          figure(
            { caption: 'Table that spans full width' },
            codeBlock(
              [show(where(table.cell, { y: 5 }), strong)],
              table(
                { columns: [fr(2), fr(1), fr(1), fr(1), fr(1)], align: [left, center, center, center, center] },
                inline`Approach`,
                inline`Speed`,
                inline`Beauty`,
                inline`Ease`,
                inline`Overall`,
                inline`Word`,
                inline`0.2`,
                inline`0.3`,
                inline`0.7`,
                inline`0.4`,
                inline`LaTeX`,
                inline`0.3`,
                inline`0.9`,
                inline`0.3`,
                inline`0.5`,
                inline`Markdown`,
                inline`0.9`,
                inline`0.4`,
                inline`0.9`,
                inline`0.7`,
                inline`Google Docs`,
                inline`0.7`,
                inline`0.2`,
                inline`0.8`,
                inline`0.6`,
                inline`Typst`,
                inline`0.95`,
                inline`0.98`,
                inline`0.92`,
                inline`0.95`,
              ),
            ),
          ),
          space,
        ],
        label('tab:results'),
      ),
    ),
    m.heading(3, 'Code'),
    inline`${ref(label('code:detection'))} below shows how code snippets look like. This is handled by
the ${link('https://typst.app/universe/package/codly/', 'Codly')} package, which provides many
customisation options.`,
    inline(
      labelled(
        [
          figure(
            { caption: 'Sample code demonstrating syntax highlighting and professional formatting' },
            raw(
              { block: true, lang: 'python' },
              'import numpy as np\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.ensemble import IsolationForest\n\nclass Model:\n    def __init__(self, temp=1):\n        self.scaler = StandardScaler()\n        self.excitement = IsolationForest(\n            temp=temp,\n            random_state=42\n        )',
            ),
          ),
          space,
        ],
        label('code:detection'),
      ),
    ),
    inline(
      callout(
        'In summary',
        blocks(
          'This template showcases:',
          m.enum(
            m.item(['Cross-references to sections, equations, tables, and figures']),
            m.item([
              'Glossary integration with short (',
              ref(label('ML:short')),
              ') and long (',
              ref(label('ntp:long')),
              ') forms',
            ]),
            m.item(['Bibliography citations', space, ref(label('garcia2021microservices'))]),
            m.item(['Mathematical equations with proper labeling']),
            m.item(['Code listings with syntax highlighting']),
            m.item(['Professional tables and figures']),
            m.item(['Block quotes, nested numbered lists, and footnotes']),
          ),
        ),
      ),
    ),
  )
}
