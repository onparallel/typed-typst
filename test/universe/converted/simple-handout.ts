// Converted from test/universe/corpus/simple-handout.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, external, importPackage, inline, let_, m, show, unsafeRaw } from '../../../src/index.ts'

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
    unsafeRaw.markup`#show: doc`,
    unsafeRaw.markup`#show: front-matter`,
    inline(unsafeRaw.code<any>`preface[]`),
    inline(unsafeRaw.code<any>`outline-wrapper()`),
    unsafeRaw.markup`#show: main-matter`,
    m.heading(1, '第一部分'),
    m.heading(2, '第1.1章'),
    m.heading(3, '第1.1.1节'),
    unsafeRaw.markup`#show: back-matter`,
    inline(unsafeRaw.code<any>`notation[
  / D#sub[m]: 预混通道外径 (mm)
]`),
    inline(unsafeRaw.code<any>`figure-list()`),
    inline(unsafeRaw.code<any>`table-list()`),
    inline(unsafeRaw.code<any>`equation-list()`),
    inline(unsafeRaw.code<any>`bilingual-bibliography()`),
  )
}
