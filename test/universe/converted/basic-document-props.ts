// Converted from test/universe/corpus/basic-document-props.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, external, importPackage, inline, lorem, m, show } from '../../../src/index.ts'

export default () => {
  const simplePage = external('simple-page')
  const simplePage_with = define('with')
    .pos('arg1', T.any)
    .pos('arg2', T.any)
    .named('date', T.any, null)
    .named('middle-text', T.any, null)
    .named('numbering', T.any, null)
    .named('supress-mail-link', T.any, null)
    .returns(T.any)
    .external(simplePage)
  return doc(
    m.lines(
      importPackage('@preview/basic-document-props:0.1.0', [simplePage]),
      show(
        simplePage_with(
          { middleText: 'Example GmbH', date: true, numbering: true, supressMailLink: false },
          'Max Mustmann',
          'max.mustermann@example.com',
        ),
      ),
    ),
    m.lines(m.heading(1, 'Titel'), inline(lorem(200))),
  )
}
