// Converted from test/universe/corpus/touying-au-community.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  datetime,
  define,
  doc,
  external,
  importPackage,
  inline,
  m,
  raw,
  show,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const touyingAuCommunity = external('touying-au-community')
  const configInfo = define('config-info')
    .named('author', T.content, [])
    .named('date', T.any, null)
    .named('department', T.content, [])
    .named('institution', T.content, [])
    .named('subtitle', T.content, [])
    .named('title', T.content, [])
    .returns(T.any)
    .external()
  const today = external('today')
  const titleSlide = define('title-slide').returns(T.any).external()
  const pause = external('pause')
  const meanwhile = external('meanwhile')
  const endSlide = define('end-slide').returns(T.any).external()
  const touyingAuCommunity_with = define('with')
    .pos('arg1', T.any)
    .named('aspect-ratio', T.any, null)
    .named('include-agenda', T.any, null)
    .named('include-sections', T.any, null)
    .named('variant', T.any, null)
    .returns(T.any)
    .external(touyingAuCommunity)
  return doc(
    importPackage('@preview/touying-au-community:0.2.0', [
      touyingAuCommunity,
      configInfo,
      today,
      titleSlide,
      pause,
      meanwhile,
      endSlide,
    ]),
    show(
      touyingAuCommunity_with(
        { aspectRatio: '16-9', includeSections: true, includeAgenda: true, variant: 'blue' },
        configInfo({
          title: inline`A custom presentation theme for Aarhus University`,
          subtitle: inline`Built with Touying`,
          author: inline`John Doe`,
          date: datetime.today(),
          institution: inline`Aarhus University`,
          department: inline`Department of Engineering`,
        }),
      ),
    ),
    inline(titleSlide()),
    m.heading(1, 'This is a section'),
    m.heading(2, 'This is a subsection (Also used as slide titles)'),
    'We can write something as expected.',
    inline(pause),
    inline`and the ${raw('#pause()')} function also works.`,
    m.heading(2, 'Here is another slide'),
    inline`We can write some math: ${unsafeRaw.math.block`1 + 1 = pause 4`} ${meanwhile}`,
    inline`and the ${raw('pause')} function works inside!`,
    inline(endSlide()),
  )
}
