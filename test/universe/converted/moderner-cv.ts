// Converted from test/universe/corpus/moderner-cv.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  blocks,
  define,
  doc,
  external,
  importPackage,
  inline,
  lorem,
  m,
  pt,
  show,
  space,
  sym,
  text,
} from '../../../src/index.ts'

export default () => {
  const modernerCv = external('moderner-cv')
  const cvEntry = define('cv-entry')
    .pos('arg1', T.content)
    .named('date', T.content, [])
    .named('employer', T.content, [])
    .named('title', T.content, [])
    .returns(T.any)
    .external()
  const cvEntryMultiline = define('cv-entry-multiline')
    .pos('arg1', T.content)
    .named('date', T.content, [])
    .named('employer', T.content, [])
    .named('title', T.content, [])
    .returns(T.any)
    .external()
  const cvDoubleItem = define('cv-double-item')
    .pos('arg1', T.content)
    .pos('arg2', T.content)
    .pos('arg3', T.content)
    .pos('arg4', T.content)
    .returns(T.any)
    .external()
  const cvLine = define('cv-line').pos('arg1', T.content).pos('arg2', T.content).returns(T.any).external()
  const cvListDoubleItem = define('cv-list-double-item')
    .pos('arg1', T.content)
    .pos('arg2', T.content)
    .returns(T.any)
    .external()
  const modernerCv_with = define('with')
    .named('lang', T.any, null)
    .named('name', T.any, null)
    .named('social', T.any, null)
    .returns(T.any)
    .external(modernerCv)
  return doc(
    importPackage('@preview/moderner-cv:0.2.1', [
      modernerCv,
      cvEntry,
      cvEntryMultiline,
      cvDoubleItem,
      cvLine,
      cvListDoubleItem,
    ]),
    show(
      modernerCv_with({
        name: 'Jane Doe',
        lang: 'en',
        social: {
          email: 'jane.doe@example.com',
          github: 'jane-doe',
          linkedin: 'jane-doe',
          website: ['link', 'https://example.me', 'example.me'],
          address: 'Test Street 1, 12345 Example City',
        },
      }),
    ),
    m.heading(1, 'Education'),
    inline(
      cvEntry(
        { date: inline`2021 -- 2024`, title: inline`M.Sc. Ophiology`, employer: inline`Cobra Creek College` },
        inline`3.9/4.0`,
      ),
      space,
      cvEntry(
        { date: inline`2018 -- 2021`, title: inline`B.Sc. Herpetology`, employer: inline`Serpentis University` },
        inline`4.0/4.0`,
      ),
    ),
    m.heading(1, 'Experience'),
    inline(
      cvEntryMultiline(
        {
          date: inline`6/2024 -- Present`,
          employer: inline`Cobra Collective`,
          title: inline`Founder and Lead Developer`,
        },
        blocks(
          m.lines(inline(text({ style: 'italic' }, inline(lorem(10)))), m.list(m.item([lorem(6)]), m.item([lorem(4)]))),
        ),
      ),
      space,
      cvEntryMultiline(
        { date: inline`4/2022 -- 7/2023`, employer: inline`The Snake Company`, title: inline`Snake Specialist` },
        inline(text({ size: pt(10) }, lorem(25))),
      ),
      space,
      cvEntryMultiline(
        { date: inline`4/2022 -- 7/2023`, employer: inline`Viper Ventures`, title: inline`Working Student` },
        inline(text({ size: pt(10) }, lorem(30))),
      ),
    ),
    m.heading(1, 'Programming Skills'),
    inline(
      cvDoubleItem(
        inline`${space}Languages${space}`,
        inline`${space}Python${space}`,
        inline`${space}Technologies${space}`,
        inline`${space}Conda, Boa, Rattler-build${space}`,
      ),
    ),
    m.heading(1, 'Languages'),
    inline(
      cvDoubleItem(inline`English`, inline`Native`, inline`French`, inline`Fluent`),
      space,
      cvLine(inline`Dutch`, inline`Advanced`),
    ),
    m.heading(1, 'Hobbies'),
    inline(cvListDoubleItem(inline`Snake Spotting`, inline`Collecting Venom`)),
  )
}
