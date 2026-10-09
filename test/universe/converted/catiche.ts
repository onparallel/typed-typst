// Converted from test/universe/corpus/catiche.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, external, importPackage, inline, let_, lorem, m, show } from '../../../src/index.ts'

export default () => {
  const report = external('report')
  const makeGlossary = external('make-glossary')
  const registerGlossary = define('register-glossary').pos('arg1', T.any).returns(T.any).external()
  const gls = external('gls')
  const glspl = external('glspl')
  const report_with = define('with')
    .named('abstracts', T.any, null)
    .named('acknowledgments', T.any, null)
    .named('author', T.any, null)
    .named('glossary', T.any, null)
    .named('lang', T.any, null)
    .named('supervisors', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(report)
  const [entryListDecl, entryList] = let_('entry-list', [
    { key: 'ulille', short: 'ulille', long: 'University of Lille', description: 'The university of Lille.' },
  ])
  return doc(
    m.lines(
      importPackage('@preview/catiche:0.1.0', [report]),
      importPackage('@preview/glossarium:0.5.10', [makeGlossary, registerGlossary, gls, glspl]),
    ),
    show(makeGlossary),
    entryListDecl,
    inline(registerGlossary(entryList)),
    show(
      report_with({
        lang: 'en',
        title: 'My super internship',
        author: ['Porco Rosso', 'Master génie logiciel', '2024 - 2026', 'porco.rosso.etu@univ-lille.fr'],
        supervisors: [
          ['Fio Piccolo', 'Aircraft manufacturer', 'Milan', 'fio.piccolo@univ-lille.fr'],
          ['Donal Curtis', 'Airplane pilot', 'United States', 'donald.curtis@univ-lille.fr'],
        ],
        acknowledgments: 'Thank you all!',
        abstracts: {
          abstract: 'That was an insane internship!',
          abstractTranslated: { lang: 'fr', content: "C'était un stage incroyable !" },
        },
        glossary: entryList,
      }),
    ),
    m.lines(m.heading(1, 'Introduction'), inline(lorem(500))),
  )
}
