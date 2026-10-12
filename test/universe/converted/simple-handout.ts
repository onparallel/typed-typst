// Converted from test/universe/corpus/simple-handout.typ by scripts/convert-suite.ts — do not edit.
import { doc, external, heading, importPackage, inline, let_, show, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const defineConfig = external('define-config')
  const [fontFamilyDecl, fontFamily] = let_('font-family', {
    SongTi: [{ name: 'Times New Roman', covers: 'latin-in-cjk' }, 'NSimSun'],
    HeiTi: [{ name: 'Arial', covers: 'latin-in-cjk' }, 'SimHei'],
    KaiTi: [{ name: 'Times New Roman', covers: 'latin-in-cjk' }, 'KaiTi'],
    FangSong: [{ name: 'Times New Roman', covers: 'latin-in-cjk' }, 'FangSong'],
    Mono: [{ name: 'DejaVu Sans Mono', covers: 'latin-in-cjk' }, 'SimHei'],
    Math: ['New Computer Modern Math', 'KaiTi'],
  })
  return doc(
    importPackage('@preview/simple-handout:0.2.0', [defineConfig]),
    fontFamilyDecl,
    unsafeRaw.markup`#let (
  ..config,
  /// entry options
  twoside,
  use-fonts,
  /// layouts
  meta,
  doc,
  front-matter,
  main-matter,
  back-matter,
  /// pages
  fonts-display,
  cover,
  preface,
  outline-wrapper,
  notation,
  master-list,
  figure-list,
  table-list,
  equation-list,
  bilingual-bibliography,
) = define-config(
  info: (
    title: "标题",
    subtitle: "副标题",
    authors: (
      (name: "作者", email: "mail@example.com"),
    ),
    version: "0.0.0",
    date: datetime.today(),
  ),
  fonts: font-family,
  twoside: false,
  bibliography: read("refs.bib"),
)`,
    show((it, ctx) => unsafeRaw.code<any>`meta(it)`),
    inline(unsafeRaw.code<any>`fonts-display()`),
    inline(unsafeRaw.code<any>`cover()`),
    show(unsafeRaw.code<any>`doc`),
    show(unsafeRaw.code<any>`front-matter`),
    inline(unsafeRaw.code<any>`preface[]`),
    inline(unsafeRaw.code<any>`outline-wrapper()`),
    show(unsafeRaw.code<any>`main-matter`),
    heading({ depth: 1 }, inline('第一部分')),
    heading({ depth: 2 }, inline('第1.1章')),
    heading({ depth: 3 }, inline('第1.1.1节')),
    show(unsafeRaw.code<any>`back-matter`),
    inline(unsafeRaw.code<any>`notation[
  / D#sub[m]: 预混通道外径 (mm)
]`),
    inline(unsafeRaw.code<any>`figure-list()`),
    inline(unsafeRaw.code<any>`table-list()`),
    inline(unsafeRaw.code<any>`equation-list()`),
    inline(unsafeRaw.code<any>`bilingual-bibliography()`),
  )
}
