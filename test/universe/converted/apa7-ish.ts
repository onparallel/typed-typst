// Converted from test/universe/corpus/apa7-ish.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, external, importPackage, inline, label, m, pagebreak, show } from '../../../src/index.ts'

export default () => {
  const conf = external('conf')
  const orcid = external('orcid')
  const conf_with = define('with')
    .named('abstract', T.content, [])
    .named('anonymous', T.any, null)
    .named('authors', T.any, null)
    .named('date', T.any, null)
    .named('documenttype', T.any, null)
    .named('funding', T.content, [])
    .named('keywords', T.content, [])
    .named('subtitle', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(conf)
  return doc(
    importPackage('@preview/apa7-ish:0.3.0', [conf, orcid]),
    show(
      conf_with({
        title: 'An Intriguing Title',
        subtitle: 'Subtitle',
        documenttype: 'Research Article',
        anonymous: false,
        authors: [
          {
            name: 'First Last',
            email: 'email@example.com',
            affiliation: 'University of Instances',
            postal: 'Address String',
            orcid: '0000-1111-1111-1111',
            corresponding: true,
          },
          {
            name: 'First Last',
            affiliation: ['University of Instances', 'University of Examples'],
            orcid: '0000-1111-1111-1111',
          },
        ],
        abstract: inline`Abstract goes here`,
        date: 'May 20, 2025',
        keywords: inline`informative, keywords`,
        funding: inline`Funding Statement`,
      }),
    ),
    m.heading(1, 'Introduction'),
    'Start writing here.',
    inline(pagebreak()),
    m.lines(
      m.heading(1, 'Declaration of Interest Statement'),
      inline`${label('declaration-of-interest-statement')} The authors report there are no competing interests
to declare.`,
    ),
    inline(pagebreak()),
  )
}
