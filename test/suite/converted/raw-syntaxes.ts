// Converted from test/suite/corpus/raw-syntaxes.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, m, page, path, pt, raw, set, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { width: pt(180) }),
      set(text, { size: pt(6) }),
      set(raw, { syntaxes: path('/assets/syntaxes/SExpressions.sublime-syntax') }),
    ),
    inline(
      raw(
        { block: true, lang: 'sexp' },
        '(defun factorial (x)\n  (if (zerop x)\n    ; with a comment\n    1\n    (* x (factorial (- x 1)))))',
      ),
    ),
  )
}
