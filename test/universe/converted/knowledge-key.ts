// Converted from test/universe/corpus/knowledge-key.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, external, importPackage, includeFile, inline, m, show } from '../../../src/index.ts'

export default () => {
  const knowledgeKey = external('knowledge-key')
  const knowledgeKey_with = define('with')
    .named('authors', T.any, null)
    .named('title', T.content, [])
    .returns(T.any)
    .external(knowledgeKey)
  return doc(
    importPackage('@preview/knowledge-key:1.0.2', [knowledgeKey]),
    show(knowledgeKey_with({ title: inline`Title`, authors: 'Author1, Author2' })),
    m.lines(
      includeFile('sections/01-introduction.typ'),
      includeFile('sections/02-devops-with-gitlab.typ'),
      includeFile('sections/03-terraform.typ'),
    ),
  )
}
