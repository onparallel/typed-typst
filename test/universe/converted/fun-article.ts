// Converted from test/universe/corpus/fun-article.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, external, importPackage, inline, m, raw, show, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const appendix = external('appendix')
  const funArticle = external('fun-article')
  const funArticle_with = define('with')
    .named('abstract', T.any, null)
    .named('affiliations', T.any, null)
    .named('authors', T.any, null)
    .named('significance', T.content, [])
    .named('title', T.any, null)
    .returns(T.any)
    .external(funArticle)
  return doc(
    importPackage('@preview/fun-article:0.2.0', [appendix, funArticle]),
    show(
      funArticle_with({
        title: 'When Good Ideas Wear Comfortable Shoes',
        authors: [
          { name: 'Ada Lovelace', affils: '1', orcid: '0000-0000-0000-0000', isCorresponding: true },
          { name: 'Grace Hopper', affils: '2' },
        ],
        affiliations: [
          { id: '*', name: 'Corresponding author: ada@example.com' },
          { id: '1', name: 'Department of Curious Systems, Example University' },
          { id: '2', name: 'Institute for Practical Imagination' },
        ],
        abstract:
          'This article demonstrates a compact two-column research layout with a drop-cap abstract, author metadata, affiliations, running headers, and a significance note. It is intended as a lightweight starting point for papers that want a formal structure with a warmer editorial voice.',
        significance: inline`${space}Use the significance note for the shortest possible statement of why the work matters.${space}`,
      }),
    ),
    m.heading(1, 'Introduction'),
    'Fun Article is a small research-paper template for writing concise articles with a two-column body, a prominent abstract, and a highlighted significance statement. It keeps the page economical while leaving enough visual character for essays, working papers, and short reports.',
    'The template accepts structured author data, affiliation markers, ORCID identifiers, and a configurable page size. The body is ordinary Typst content, so equations, figures, tables, references, and appendices work as they do in any other document.',
    m.heading(2, 'A Compact Section'),
    'Use headings to divide the article into ordinary sections. The template sets restrained heading styles and a comfortable body measure for dense text.',
    inline`You can include mathematics inline, such as ${unsafeRaw.math`a^2 + b^2 = c^2`}, or display equations
when the argument needs room:`,
    inline(unsafeRaw.math.block`f(x) = integral_0^x exp(-t^2) dif t`),
    m.heading(1, 'Methods'),
    inline`Replace this sample text with your article. The initialized project imports the published package
with an absolute package import, so it will keep compiling when created with ${raw('typst init')}.`,
    m.heading(1, 'Conclusion'),
    'The template is intentionally small: import it, fill in the metadata, and write the article.',
    show(appendix),
    m.heading(1, 'Optional Notes'),
    inline`Appendices use lettered headings after the ${raw('appendix')} show rule.`,
  )
}
