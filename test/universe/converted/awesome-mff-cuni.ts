// Converted from test/universe/corpus/awesome-mff-cuni.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, bibliography, define, doc, importPackage, includeFile, inline, m, path, show } from '../../../src/index.ts'

export default () => {
  const mffCuniThesis = define('mff-cuni-thesis')
    .pos('arg1', T.any)
    .named('abstract', T.any, null)
    .named('abstract-cs', T.any, null)
    .named('author', T.any, null)
    .named('department', T.any, null)
    .named('department-cs', T.any, null)
    .named('keywords', T.any, null)
    .named('keywords-cs', T.any, null)
    .named('study-program', T.any, null)
    .named('study-program-cs', T.any, null)
    .named('supervisor', T.any, null)
    .named('thesis-title', T.any, null)
    .named('thesis-title-cs', T.any, null)
    .named('thesis-type', T.any, null)
    .returns(T.any)
    .external()
  return doc(
    m.lines(
      importPackage('@preview/awesome-mff-cuni:0.1.0', [mffCuniThesis]),
      show((doc_2, ctx) =>
        mffCuniThesis(
          {
            thesisType: 'Master',
            author: 'Awesome Author',
            thesisTitle: 'Thesis Title',
            department: 'Department',
            supervisor: 'prof. RNDr. Cool Supervisor',
            studyProgram: 'Study Program',
            abstract: 'Abstract... long long',
            keywords: 'kew, words',
            thesisTitleCs: 'Název práce',
            departmentCs: 'Katedra',
            studyProgramCs: 'Studijní program',
            abstractCs: 'Abstrakt, ale česky :)',
            keywordsCs: 'klíčová, slova',
          },
          doc_2,
        ),
      ),
    ),
    m.heading(1, 'Introduction'),
    m.lines(includeFile('chapter1.typ'), includeFile('chapter2.typ')),
    inline(bibliography(path('bibliography.yaml'))),
  )
}
