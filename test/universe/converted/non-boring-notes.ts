// Converted from test/universe/corpus/non-boring-notes.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, datetime, define, doc, external, importPackage, inline, m, show, space, sym } from '../../../src/index.ts'

export default () => {
  const template = external('template')
  const template_with = define('with')
    .named('abstract', T.content, [])
    .named('authors', T.any, null)
    .named('cols', T.any, null)
    .named('creation_date', T.any, null)
    .named('description', T.content, [])
    .named('h1_prefix', T.any, null)
    .named('paper_size', T.any, null)
    .named('short_title', T.any, null)
    .named('subtitle', T.content, [])
    .named('text_lang', T.any, null)
    .named('title', T.content, [])
    .returns(T.any)
    .external(template)
  return doc(
    importPackage('@preview/non-boring-notes:0.2.0', [template]),
    show(
      template_with({
        title: inline`Document Title`,
        subtitle: inline`Optional Subtitle`,
        short_title: 'Notes',
        description: inline`Document description`,
        abstract: inline`${space}Your abstract or brief summary goes here.${space}`,
        creation_date: datetime.today(),
        authors: [{ name: 'Your Name', link: 'https://example.com' }],
        paper_size: 'us-letter',
        cols: 1,
        h1_prefix: 'lecture',
        text_lang: 'en',
      }),
    ),
    m.heading(1, 'Introduction'),
    inline`Start writing your notes here...`,
  )
}
