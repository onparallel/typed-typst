// Converted from test/universe/corpus/scarif.typ by scripts/convert-suite.ts — do not edit.
import {
  T,
  define,
  doc,
  external,
  heading,
  importPackage,
  inline,
  path,
  pt,
  raw,
  read,
  show,
} from '../../../src/index.ts'

export default () => {
  const s = external('s')
  const s_template = external('template', s)
  const s_title = define('title').pos('arg1', T.any).named('sub-title', T.any, null).returns(T.any).external(s)
  const s_raw = define('raw').pos('arg1', T.any).returns(T.any).external(s)
  const s_image = define('image').pos('arg1', T.any).named('height', T.any, null).returns(T.any).external(s)
  return doc(
    importPackage('@preview/scarif:0.1.0', s),
    show(s_template),
    inline(s_title({ subTitle: 'A Modern Typst Template' }, 'Scarif')),
    heading({ depth: 1 }, inline('What is Scarif?')),
    'Scarif is a beautifully designed Typst template that brings tropical elegance to your documents. Drawing design inspiration from the official Typst documentation website, it combines sophisticated typography with curated color gradients to create stunning layouts. The name itself is inspired by a breathtaking planet from a famous sci-fi universe.',
    heading({ depth: 1 }, inline('Examples')),
    heading({ depth: 2 }, inline('Code snippets')),
    inline`The ${s_raw('scarif.raw()')} function displays code blocks with elegant styling. It wraps code
in a rounded container with subtle shadows, making snippets stand out while maintaining visual
harmony.`,
    inline(s_raw(raw({ block: true, lang: 'typ' }, '#let add(a, b) = a + b'))),
    heading({ depth: 2 }, inline('Images')),
    inline`The ${s_raw('scarif.image()')} function enhances images with polished styling. It applies rounded
corners and soft shadows while optimizing width for maximum impact:`,
    inline(s_image({ height: pt(290) }, read({ encoding: null }, path('beach.jpg')))),
  )
}
