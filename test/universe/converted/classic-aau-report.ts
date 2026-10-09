// Converted from test/universe/corpus/classic-aau-report.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  define,
  doc,
  external,
  importFile,
  importPackage,
  includeFile,
  inline,
  lorem,
  m,
  outline,
  path,
  show,
  space,
} from '../../../src/index.ts'

export default () => {
  const appendix = external('appendix')
  const backmatter = external('backmatter')
  const chapters = external('chapters')
  const mainmatter = external('mainmatter')
  const project = external('project')
  const initGlossary = external('init-glossary')
  const noteOutline = define('note-outline').returns(T.any).external()
  const glossary = define('glossary').named('title', T.any, null).returns(T.any).external()
  const initGlossary_with = define('with')
    .pos('arg1', T.any)
    .named('term-links', T.any, null)
    .returns(T.any)
    .external(initGlossary)
  const project_with = define('with')
    .named('dk', T.any, null)
    .named('en', T.any, null)
    .named('meta', T.any, null)
    .returns(T.any)
    .external(project)
  return doc(
    m.lines(
      importPackage('@preview/classic-aau-report:0.3.2', [appendix, backmatter, chapters, mainmatter, project]),
      importFile('setup/macros.typ', [initGlossary, noteOutline, glossary]),
    ),
    inline(
      show(
        initGlossary_with(
          { termLinks: true },
          {
            PBL: 'Problem Based Learning',
            web: { short: 'WWW', long: 'World Wide Web' },
            LTS: { short: 'LTS', long: 'Labelled Transition System', plural: 'LTSs' },
          },
        ),
      ),
    ),
    show(
      project_with({
        meta: {
          projectGroup: 'CS-xx-DAT-y-zz',
          participants: ['Alice', 'Bob', 'Chad'],
          supervisors: 'John McClane',
          fieldOfStudy: 'Computer Science',
        },
        en: { title: 'An Awesome Project', theme: 'Writing a project in Typst', abstract: inline(lorem(50)) },
        dk: { title: 'Et Fantastisk Projekt', theme: 'Et projekt i Typst', abstract: inline(lorem(50)) },
      }),
    ),
    inline(outline({ depth: 2 })),
    inline(noteOutline()),
    m.lines(show(mainmatter), includeFile('chapters/introduction.typ')),
    m.lines(show(chapters), includeFile('chapters/problem-analysis.typ'), includeFile('chapters/custom-macros.typ')),
    m.lines(show(backmatter), includeFile('chapters/conclusion.typ')),
    inline(
      glossary({ title: 'List of Acronyms' }),
      space,
      bibliography({ title: 'References' }, path('references.bib')),
    ),
    m.lines(show(appendix), includeFile('appendices/scripting.typ')),
  )
}
