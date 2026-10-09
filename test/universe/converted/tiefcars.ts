// Converted from test/universe/corpus/tiefcars.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, blocks, define, doc, external, importPackage, inline, link, m, show, strong } from '../../../src/index.ts'

export default () => {
  const singlePageLayout = external('single-page-layout')
  const tiefcars = external('tiefcars')
  const tiefcars_with = define('with').named('theme', T.any, null).returns(T.any).external(tiefcars)
  const singlePageLayout_with = define('with')
    .named('subtitle-text', T.content, [])
    .named('title', T.content, [])
    .returns(T.any)
    .external(singlePageLayout)
  return doc(
    importPackage('@preview/tiefcars:0.2.1', [singlePageLayout, tiefcars]),
    show(tiefcars_with({ theme: 'tng' })),
    show(
      singlePageLayout_with({
        title: inline`TiefCARS`,
        subtitleText: blocks(
          inline`The best way to imitate an LCARS interface with Typst (as it's, as far as I know, the only way
currently)`,
          m.lines('Current features:', m.list(m.item(['One page']), m.item(['Headaches']), m.item(['Easy start']))),
        ),
      }),
    ),
    inline`Welcome to ${strong(inline`TiefCARS`)}, the worst way to format your documents to look like
a futuristic Screen!`,
    inline`Build your own magic stuff with TiefCARS, now for free at ${link('https://github.com/Tiefseetauchner/TiefCARS')}!
Make your own documents now!`,
    '(Version 0.2.1, less buggy but still)',
  )
}
