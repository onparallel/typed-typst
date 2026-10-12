// Converted from test/universe/corpus/labtyp.typ by scripts/convert-suite.ts — do not edit.
import { T, define, doc, heading, importPackage, inline, m, raw } from '../../../src/index.ts'

export default () => {
  const lablist = define('lablist').returns(T.any).external()
  const lab = define('lab').pos('arg1', T.any).pos('arg2', T.any).pos('arg3', T.any).returns(T.any).external()
  const mset = define('mset').named('values', T.any, null).returns(T.any).external()
  return doc(
    importPackage('@preview/labtyp:0.1.0', [lablist, lab, mset]),
    inline(
      mset({ values: { title: 'The title of the document', author: 'Jane Doe', date: '2025-07-31', newlab: 'more' } }),
    ),
    m.lines(
      heading({ depth: 1 }, inline(raw('labtyp'))),
      inline`${raw('labtyp')} is for labeling text documents like dialogue threads or legal documents for
precise citing.`,
    ),
    m.lines(
      heading({ depth: 1 }, inline('Example')),
      inline`This is what a labelled document looks like in typst: ${raw({ block: true, lang: 'typst' }, '#mset(values: (\n  title: "The title of the document", \n  author: "Jane Doe", \n  date: "2025-07-31",\n  newlab: "more"))\n=== A labelled dialogue\n#mset(values:(date:"2025-07-1", author:"X"))\nX: #lab("mail1","Can you get some rice and coffee on the way home","email by X to Y")\n#mset(values:(date:"2025-07-2", author:"Y"))\nY: #lab("mail2","Sorry, I didn\'t check my mail.. ","reply by Y to X")\n= List of Labels\n#lablist()')}`,
      heading({ depth: 2 }, inline('Rendered')),
      'Below the same dialogue rendered:',
    ),
    m.lines(
      heading({ depth: 3 }, inline('A labelled dialogue')),
      inline`${mset({ values: { date: '2025-07-1', author: 'X' } })} X: ${lab('mail1', 'Can you get some rice and coffee on the way home', 'email by X to Y')}`,
    ),
    inline(mset({ values: { date: '2025-07-2', author: 'Y' } })),
    inline`Y: ${lab('mail2', "Sorry, I didn't check my mail.. ", 'reply by Y to X')}`,
    m.lines(heading({ depth: 1 }, inline('List of Labels')), inline(lablist())),
  )
}
