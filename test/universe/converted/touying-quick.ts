// Converted from test/universe/corpus/touying-quick.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, external, importPackage, show } from '../../../src/index.ts'

export default () => {
  const touyingQuick = external('touying-quick')
  const bgsky = external('bgsky')
  const defaultInfo = external('default-info')
  const defaultStyles = external('default-styles')
  const defaultNames = external('default-names')
  const touyingQuick_with = define('with')
    .named('bgimg', T.any, null)
    .named('heading-idx', T.any, null)
    .named('info', T.any, null)
    .named('lang', T.any, null)
    .named('names', T.any, null)
    .named('styles', T.any, null)
    .named('subtitle', T.any, null)
    .named('theme', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(touyingQuick)
  return doc(
    importPackage('@preview/touying-quick:0.5.0', [touyingQuick, bgsky, defaultInfo, defaultStyles, defaultNames]),
    show(
      touyingQuick_with({
        title: '',
        subtitle: '',
        headingIdx: true,
        bgimg: bgsky,
        theme: 'blue',
        info: defaultInfo,
        styles: defaultStyles,
        names: defaultNames,
        lang: 'en',
      }),
    ),
  )
}
