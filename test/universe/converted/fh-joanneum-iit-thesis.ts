// Converted from test/universe/corpus/fh-joanneum-iit-thesis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  define,
  doc,
  external,
  image,
  importFile,
  includeFile,
  inline,
  linebreak,
  lorem,
  m,
  pagebreak,
  path,
  pct,
  show,
  space,
} from '../../../src/index.ts'

export default () => {
  const registerGlossary = define('register-glossary').pos('arg1', T.any).returns(T.any).external()
  const makeGlossary = external('make-glossary')
  const thesis = define('thesis')
    .pos('arg1', T.any)
    .named('abstract-en', T.content, [])
    .named('abstract-ge', T.content, [])
    .named('author', T.any, null)
    .named('biblio', T.any, null)
    .named('draft', T.any, null)
    .named('keywords', T.any, null)
    .named('language', T.any, null)
    .named('logo', T.any, null)
    .named('show-list-of', T.any, null)
    .named('study', T.any, null)
    .named('submission-date', T.any, null)
    .named('subtitle', T.any, null)
    .named('supervisor', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external()
  const todo = define('todo').pos('arg1', T.content).returns(T.any).external()
  const glsEntries = external('gls-entries')
  return doc(
    importFile('chapters/global.typ', [registerGlossary, makeGlossary, thesis, todo]),
    m.lines(
      importFile('chapters/glossary-definitions.typ', [glsEntries]),
      inline(registerGlossary(glsEntries), space, show(makeGlossary)),
    ),
    show((doc_2, ctx) =>
      thesis(
        {
          draft: true,
          logo: image({ width: pct(32) }, path('./figures/logo.svg')),
          study: 'swd',
          language: 'en',
          title: '<title>',
          subtitle: '<subtitle>',
          supervisor: '<supervisor>',
          author: '<author>',
          submissionDate: '<submission_date>',
          abstractGe: inline(
            space,
            lorem(180),
            linebreak(),
            space,
            todo(inline`TODO: Die Kurzfassung sollte das gesamte Werk enthalten, also das spannende Problem, den gewählten
– neuartigen – Lösungsansatz und natürlich vor allem die erreichten Resultate.`),
            space,
          ),
          abstractEn: inline(
            space,
            lorem(180),
            linebreak(),
            space,
            todo(inline`TODO: Write the abstract in English and in German, called Kurzfassung. Describe in about 250
to 350 words the problem, the innovation, the method, the results and implications.`),
            space,
          ),
          keywords: ['FHJ', 'IIT', 'thesis', 'template'],
          showListOf: ['listings', 'tables', 'figures'],
          biblio: bibliography({ style: path('./biblio.csl') }, path('biblio.bib')),
        },
        doc_2,
      ),
    ),
    m.lines(includeFile('./chapters/1-intro.typ'), inline(pagebreak())),
    m.lines(includeFile('./chapters/2-related.typ'), inline(pagebreak())),
    m.lines(includeFile('./chapters/3-background.typ'), inline(pagebreak())),
    m.lines(includeFile('./chapters/4-concept.typ'), inline(pagebreak())),
    m.lines(includeFile('./chapters/5-implementation.typ'), inline(pagebreak())),
    m.lines(includeFile('./chapters/6-evaluation.typ'), inline(pagebreak())),
    m.lines(includeFile('./chapters/7-conclusion.typ'), inline(pagebreak())),
    m.lines(includeFile('./chapters/glossary.typ'), inline(pagebreak())),
  )
}
