// Converted from test/suite/corpus/content-fields-complex.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, inline, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const compute = define('compute')
    .pos('equation', T.any)
    .rest('vars', T.any)
    .returns(T.any)
    .body(
      (p) => unsafeRaw.code<any>`{
  let vars = vars.named()
  let f(elem) = {
    let func = elem.func()
    if elem.has("text") {
      let text = elem.text
      if regex("^\\\\d+$") in text {
        int(text)
      } else if text in vars {
        int(vars.at(text))
      } else {
        panic("unknown math variable: " + text)
      }
    } else if func == math.attach {
      let value = f(elem.base)
      if elem.has("t") {
        value = calc.pow(value, f(elem.t))
      }
      value
    } else if elem.has("children") {
      elem
        .children
        .filter(v => v != [ ])
        .split($+$.body)
        .map(xs => xs.fold(1, (prod, v) => prod * f(v)))
        .fold(0, (sum, v) => sum + v)
    }
  }
  let result = f(equation.body)
  [With ]
  vars
    .pairs()
    .map(((name, value)) => $#symbol(name) = value$)
    .join(", ", last: " and ")
  [ we have:]
  $ equation = result $
}`,
    )
  return doc(compute.decl, inline(compute({ x: 2, y: 3 }, unsafeRaw.math`x y + y^2`)))
}
