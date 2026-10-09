// Converted from test/universe/corpus/cetramed-polylux.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, blocks, define, doc, external, importPackage, inline, m, show } from '../../../src/index.ts'

export default () => {
  const cetramed = external('cetramed')
  const slide = define('slide').pos('arg1', T.content).returns(T.any).external()
  const cetramed_setup = external('setup', cetramed)
  const cetramed_titleSlide = define('title-slide')
    .named('extra', T.content, [])
    .named('group', T.content, [])
    .named('subtitle', T.content, [])
    .named('title', T.content, [])
    .returns(T.any)
    .external(cetramed)
  return doc(
    m.lines(
      importPackage('@preview/polylux:0.4.0', [slide]),
      importPackage('@preview/cetramed-polylux:0.1.0', cetramed),
    ),
    show(cetramed_setup),
    inline(
      cetramed_titleSlide({
        group: inline`Name of group`,
        title: inline`Title of presentation`,
        subtitle: inline`The subtitle`,
        extra: inline`Name of speaker, Date`,
      }),
    ),
    inline(
      slide(
        blocks(
          m.heading(1, 'Title of slide'),
          'some content',
          m.list(m.item(['with']), m.item(m.lines('bullet', m.list(m.item(['points']))))),
        ),
      ),
    ),
  )
}
