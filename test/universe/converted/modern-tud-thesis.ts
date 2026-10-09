// Converted from test/universe/corpus/modern-tud-thesis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, datetime, define, doc, external, importPackage, inline, m, show, space, table } from '../../../src/index.ts'

export default () => {
  const modernTudThesis = external('modern-tud-thesis')
  const noteFigure = define('note-figure')
    .pos('arg1', T.any)
    .named('caption', T.any, null)
    .named('note', T.any, null)
    .returns(T.any)
    .external()
  const backmatter = external('backmatter')
  const declarationOfOriginality = define('declaration-of-originality').pos('arg1', T.content).returns(T.any).external()
  const appendix = external('appendix')
  const modernTudThesis_with = define('with')
    .named('abstract', T.any, null)
    .named('authors', T.any, null)
    .named('chair', T.any, null)
    .named('faculty', T.any, null)
    .named('submissionplace', T.any, null)
    .named('supervisors', T.any, null)
    .named('target', T.any, null)
    .named('thesis-type', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(modernTudThesis)
  return doc(
    importPackage('@preview/modern-tud-thesis:1.0.0', [
      modernTudThesis,
      noteFigure,
      backmatter,
      declarationOfOriginality,
      appendix,
    ]),
    show(
      modernTudThesis_with({
        target: 'print',
        title: 'Title of your paper',
        thesisType: 'Master thesis',
        faculty: 'Faculty of example',
        chair: 'Chair of example',
        authors: [
          {
            name: 'Surname, Name',
            birthdate: datetime({ year: 2000, month: 1, day: 1 }),
            birthplace: 'Dresden',
            course: 'Example Course',
          },
        ],
        supervisors: ['Prof. Dr.-Ing. First Supervisor '],
        submissionplace: 'Dresden',
        abstract: 'Abstract',
      }),
    ),
    m.lines(
      m.heading(1, 'Main content'),
      inline(
        noteFigure({ caption: 'A and B', note: 'Source: Own table' }, table({ columns: 2 }, inline`A`, inline`B`)),
      ),
    ),
    show(backmatter),
    inline(declarationOfOriginality(inline(space))),
    show(appendix),
  )
}
