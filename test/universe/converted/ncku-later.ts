// Converted from test/universe/corpus/ncku-later.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  define,
  doc,
  external,
  importFile,
  includeFile,
  inline,
  path,
  show,
} from '../../../src/index.ts'

export default () => {
  const whole = external('whole')
  const makeCover = define('make-cover').returns(T.any).external()
  const beginOfRomanPageNum = external('begin-of-roman-page-num')
  const makeOutline = define('make-outline').returns(T.any).external()
  const beginOfArabicPageNum = external('begin-of-arabic-page-num')
  const makeRef = define('make-ref').pos('arg1', T.any).returns(T.any).external()
  return doc(
    importFile('setup.typ', [whole, makeCover, beginOfRomanPageNum, makeOutline, beginOfArabicPageNum, makeRef]),
    inline(show(whole)),
    inline(makeCover()),
    show(beginOfRomanPageNum),
    includeFile('contents/abstract.typ'),
    includeFile('contents/extended-abstract-en.typ'),
    includeFile('contents/acknowledgement.typ'),
    inline(makeOutline()),
    show(beginOfArabicPageNum),
    includeFile('contents/mainmatter.typ'),
    inline(makeRef(bibliography({ title: 'Reference', full: true }, path('ref.bib')))),
    includeFile('contents/appendix.typ'),
  )
}
