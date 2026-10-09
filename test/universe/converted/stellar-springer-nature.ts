// Converted from test/universe/corpus/stellar-springer-nature.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  align,
  bibliography,
  blocks,
  center,
  cite,
  cm,
  define,
  doc,
  external,
  figure,
  heading,
  horizon,
  importPackage,
  inline,
  label,
  labelled,
  luma,
  m,
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
  table,
  text,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const article = external('article')
  const bmhead = define('bmhead').pos('arg1', T.content).returns(T.any).external()
  const article_with = define('with')
    .named('abstract', T.content, [])
    .named('affiliations', T.any, null)
    .named('authors', T.any, null)
    .named('keywords', T.any, null)
    .named('short-title', T.content, [])
    .named('title', T.content, [])
    .returns(T.any)
    .external(article)
  return doc(
    importPackage('@preview/stellar-springer-nature:0.1.0', [article, bmhead]),
    show(
      article_with({
        title: inline`Article Title`,
        shortTitle: inline`Article Title`,
        authors: [
          { name: 'First Author', affiliations: [1, 2], corresponding: true, email: 'iauthor@gmail.com' },
          {
            name: 'Second Author',
            affiliations: [2, 3],
            equalContrib: 'These authors contributed equally to this work.',
          },
          { name: 'Third Author', affiliations: [1, 2] },
        ],
        affiliations: [
          {
            id: 1,
            department: 'Department',
            institution: 'Organization',
            address: 'Street, City 100190, State, Country',
          },
          {
            id: 2,
            department: 'Department',
            institution: 'Organization',
            address: 'Street, City 10587, State, Country',
          },
          {
            id: 3,
            department: 'Department',
            institution: 'Organization',
            address: 'Street, City 610101, State, Country',
          },
        ],
        abstract: inline`The abstract serves both as a general introduction to the topic and as a brief, non-technical
summary of the main results and their implications. Authors are advised to check the author
instructions for the journal they are submitting to for word limits and if structural elements
like subheadings, citations, or equations are permitted.`,
        keywords: ['keyword1', 'Keyword2', 'Keyword3', 'Keyword4'],
      }),
    ),
    inline(labelled(heading({ depth: 1 }, inline('Introduction')), label('sec1'))),
    inline`The Introduction section, of referenced text ${cite(label('bib1'))} expands on the background
of the work (some overlap with the Abstract is acceptable). The introduction should not include
subheadings.`,
    'Springer Nature does not impose a strict layout as standard however authors are advised to check the individual requirements for the journal they are planning to submit to as there may be journal-level preferences. When preparing your text please also be aware that some stylistic choices are not supported in full text XML (publication version), including coloured font. These will not be replicated in the typeset article if it is accepted.',
    inline(labelled(heading({ depth: 1 }, inline('Results')), label('sec2'))),
    'Sample body text. Sample body text. Sample body text. Sample body text. Sample body text. Sample body text. Sample body text. Sample body text.',
    inline(
      labelled(
        heading({ depth: 1 }, inline('This is an example for first level head', sym.dash.em, 'section head')),
        label('sec3'),
      ),
    ),
    inline(
      labelled(
        heading({ depth: 2 }, inline('This is an example for second level head', sym.dash.em, 'subsection head')),
        label('subsec2'),
      ),
    ),
    inline(
      labelled(
        heading({ depth: 3 }, inline('This is an example for third level head', sym.dash.em, 'subsubsection head')),
        label('subsubsec2'),
      ),
    ),
    'Sample body text. Sample body text. Sample body text. Sample body text. Sample body text. Sample body text. Sample body text. Sample body text.',
    inline(labelled(heading({ depth: 1 }, inline('Equations')), label('sec4'))),
    inline`Equations in Typst can either be inline or display equations. For inline equations use the ${raw('$...$')}
syntax. E.g.: The equation ${unsafeRaw.math`H psi = E psi`} is written via ${raw('$H psi = E psi$')}.`,
    'For display equations (with auto generated equation numbers):',
    inline(
      labelled(
        [
          unsafeRaw.math
            .block`norm(tilde(X)(k))^2 <= (sum_(i=1)^p norm(tilde(Y)_i (k))^2 + sum_(j=1)^q norm(tilde(Z)_j (k))^2) / (p + q)`,
          space,
        ],
        label('eq1'),
      ),
    ),
    'where,',
    inline(
      labelled(
        [
          unsafeRaw.math.block`D_mu &= partial_mu - i g (lambda^a) / 2 A^a_mu \\
  F^a_(mu nu) &= partial_mu A^a_nu - partial_nu A^a_mu + g f^(a b c) A^b_mu A^a_nu`,
          space,
        ],
        label('eq2'),
      ),
    ),
    inline(labelled(heading({ depth: 1 }, inline('Tables')), label('sec5'))),
    'Tables can be inserted via the table and figure environment.',
    inline(
      labelled(
        [
          figure(
            { kind: table, caption: inline`Caption text` },
            table(
              { columns: 4 },
              table.hline({ stroke: pt(1.2) }),
              table.header(
                inline(strong(inline`Column 1`)),
                inline(strong(inline`Column 2`)),
                inline(strong(inline`Column 3`)),
                inline(strong(inline`Column 4`)),
              ),
              table.hline({ stroke: pt(0.5) }),
              inline`row 1`,
              inline`data 1`,
              inline`data 2`,
              inline`data 3`,
              inline`row 2`,
              inline`data 4`,
              inline`data 5`,
              inline`data 6`,
              inline`row 3`,
              inline`data 7`,
              inline`data 8`,
              inline`data 9`,
              table.hline({ stroke: pt(1.2) }),
            ),
          ),
          space,
        ],
        label('tab1'),
      ),
    ),
    inline(labelled(heading({ depth: 1 }, inline('Figures')), label('sec6'))),
    inline`Figures can be inserted via the ${raw('image')} and ${raw('figure')} functions:`,
    inline(
      labelled(
        [
          figure(
            { caption: inline`This is an example figure caption.` },
            rect(
              { width: pct(90), height: cm(4), stroke: add(pt(0.5), luma(180)), fill: luma(245) },
              blocks(
                m.lines(
                  set(align, { alignment: add(center, horizon) }),
                  set(text, { size: pt(8), fill: luma(120) }),
                  '[Replace with your figure]',
                ),
              ),
            ),
          ),
          space,
        ],
        label('fig1'),
      ),
    ),
    inline(labelled(heading({ depth: 1 }, inline('Cross referencing')), label('sec8'))),
    inline`Cross-reference figures, tables, equations, and headings using the ${raw('@label')} syntax.
For example, ${ref(label('fig1'))}, ${ref(label('tab1'))}, and ${ref(label('eq1'))}.`,
    inline(labelled(heading({ depth: 1 }, inline('Methods')), label('sec11'))),
    'Topical subheadings are allowed. Authors must ensure that their Methods section includes adequate experimental and characterization data necessary for others in the field to reproduce their work.',
    inline(labelled(heading({ depth: 1 }, inline('Discussion')), label('sec12'))),
    inline`Discussions should be brief and focused. In some disciplines use of Discussion or 'Conclusion'
is interchangeable. It is not mandatory to use both. Some journals prefer a section 'Results
and Discussion' followed by a section 'Conclusion'. Please refer to Journal-level guidance for
any specific requirements.`,
    inline(labelled(heading({ depth: 1 }, inline('Conclusion')), label('sec13'))),
    'Conclusions may be used to restate your hypothesis or research question, restate your major findings, explain the relevance and the added value of your work, highlight any limitations of your study, describe future directions for research and recommendations.',
    inline(bmhead(inline`Supplementary information`)),
    'If your article has accompanying supplementary file/s please state so here.',
    inline(bmhead(inline`Acknowledgements`)),
    'Acknowledgements are not compulsory. Where included they should be brief. Grant or contribution numbers may be acknowledged.',
    inline(heading({ numbering: null }, inline`Declarations`)),
    m.list(
      m.item([strong(inline`Funding`), ': Not applicable']),
      m.item([strong(inline`Conflict of interest/Competing interests`), ': Not applicable']),
      m.item([strong(inline`Ethics approval and consent to participate`), ': Not applicable']),
      m.item([strong(inline`Consent for publication`), ': Not applicable']),
      m.item([strong(inline`Data availability`), ': Not applicable']),
      m.item([strong(inline`Materials availability`), ': Not applicable']),
      m.item([strong(inline`Code availability`), ': Not applicable']),
      m.item([strong(inline`Author contribution`), ': Not applicable']),
    ),
    inline(bibliography({ title: 'References' }, path('refs.bib'))),
  )
}
