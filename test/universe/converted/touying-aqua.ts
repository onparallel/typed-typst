// Converted from test/universe/corpus/touying-aqua.typ by scripts/convert-suite.ts — do not edit.
import { doc, external, heading, importPackage, inline, m, show, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const themes = external('themes')
  const configInfo = external('config-info')
  return doc(
    m.lines(importPackage('@preview/touying:0.8.0', [themes, configInfo]), unsafeRaw.markup`#import themes.aqua: *`),
    show(unsafeRaw.code<any>`aqua-theme.with(
  aspect-ratio: "16-9",
  config-info(
    title: [Start Your Writing in Touying],
    subtitle: [Subtitle],
    author: [Author],
    date: datetime.today(),
    institution: [Institution],
  ),
)`),
    inline(unsafeRaw.code<any>`title-slide()`),
    inline(unsafeRaw.code<any>`outline-slide()`),
    heading({ depth: 1 }, inline('The Section')),
    heading({ depth: 2 }, inline('Slide Title')),
    'Slide content.',
  )
}
