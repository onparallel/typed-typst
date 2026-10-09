// Converted from test/universe/corpus/touying-aqua.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, external, importPackage, inline, m, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const themes = external('themes')
  const configInfo = external('config-info')
  return doc(
    m.lines(importPackage('@preview/touying:0.8.0', [themes, configInfo]), unsafeRaw.markup`#import themes.aqua: *`),
    unsafeRaw.markup`#show: aqua-theme.with(
  aspect-ratio: "16-9",
  config-info(
    title: [Start Your Writing in Touying],
    subtitle: [Subtitle],
    author: [Author],
    date: datetime.today(),
    institution: [Institution],
  ),
)`,
    inline(unsafeRaw.code<any>`title-slide()`),
    inline(unsafeRaw.code<any>`outline-slide()`),
    m.heading(1, 'The Section'),
    m.heading(2, 'Slide Title'),
    'Slide content.',
  )
}
