// Converted from test/universe/corpus/bamdone-rebuttal.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  black,
  blocks,
  blue,
  call,
  define,
  doc,
  external,
  green,
  importPackage,
  inline,
  label,
  labelled,
  let_,
  lorem,
  pct,
  quote,
  raw,
  ref,
  show,
  space,
  sym,
} from '../../../src/index.ts'

export default () => {
  const configure = define('configure')
    .named('new-color', T.any, null)
    .named('point-color', T.any, null)
    .named('response-color', T.any, null)
    .returns(T.any)
    .external()
  const rebuttal = external('rebuttal')
  const reviewer = define('reviewer').returns(T.any).external()
  const rebuttal_with = define('with').named('authors', T.content, []).returns(T.any).external(rebuttal)
  const [patternDecl, [point, response, new_2]] = let_(
    ['point', 'response', 'new'],
    configure({ pointColor: blue.darken(pct(30)), responseColor: black, newColor: green.darken(pct(30)) }),
  )
  return doc(
    importPackage('@preview/bamdone-rebuttal:0.1.2', [configure, rebuttal, reviewer]),
    patternDecl,
    show(rebuttal_with({ authors: inline`First A. Author and Second B. Author` })),
    inline`We thank the reviewers... ${lorem(60)} We hope it is now suitable for inclusion in...`,
    inline`${reviewer()} This reviewers' feedback was...`,
    inline(labelled(call(point, inline`${space}There appears to be an error...${space}`), label('p1'))),
    inline(
      call(
        response,
        blocks(
          inline`${lorem(20)}.`,
          inline`The revised text now reads: ${quote(inline`${space}${lorem(10)} ${call(new_2, inline(lorem(2)))}.${space}`)}`,
        ),
      ),
    ),
    inline(call(point, inline`${space}${lorem(10)}.${space}`)),
    inline(
      call(
        response,
        inline`${space}See response to ${ref(label('pt-p1'))}. Similar to the ${raw('i-figured')} package,
references to labeled ${raw('point')}s must be prefixed by ${raw('pt-')} as in ${raw('@pt-p1')}
which refers to the ${raw('point')} labeled ${raw('<p1>')}.${space}`,
      ),
    ),
    inline`${reviewer()} We generally agree with this reviewer...`,
    inline(call(point, inline`${space}Have you considered...${space}`)),
    inline(call(response, inline`${space}We will address this in a future work...${space}`)),
  )
}
