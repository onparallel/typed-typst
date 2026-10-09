// Converted from test/universe/corpus/malos-presets.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  align,
  blocks,
  center,
  contentBlock,
  context,
  divider,
  doc,
  document,
  external,
  footnote,
  importPackage,
  inline,
  link,
  lorem,
  m,
  math,
  outline,
  raw,
  set,
  show,
  text,
  title,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const presets = external('presets')
  return doc(
    importPackage('@preview/malos-presets:1.5.0', [presets]),
    set(text, { lang: 'en' }),
    set(document, { title: inline`Example Document Using Malo's Presets`, author: 'Malo' }),
    show(presets),
    inline(title()),
    inline(align(center, unsafeRaw.code<any>`context document.author.join(linebreak())`)),
    inline(outline()),
    m.heading(1, 'Fonts'),
    inline`Titles and headings use Libertinus Sans to contrast with the main text, which is typeset in
Libertinus Serif with raw text in Inconsolata. Mathematics are laid out in New Computer Modern
Math with Computer Modern-style blackboard bold: ${unsafeRaw.math`QQ`}, ${unsafeRaw.math`RR`}.
This can be disabled to use AMS blackboard bold instead with the show-set rule ${raw({ lang: 'typc' }, 'show math.equation: set text(features: (ss03: 0))')}:
${contentBlock(blocks(m.lines(show(math.equation, set(text, { features: { ss03: 0 } })), inline`${unsafeRaw.math`QQ`}, ${unsafeRaw.math`RR`}.`)))}`,
    m.heading(1, 'Paragraphs & Dividers'),
    'Paragraphs are justified, with character-level justification enabled. Dividers use asterisms.',
    inline(lorem(80)),
    inline(divider()),
    inline(lorem(70)),
    m.heading(1, 'Lists'),
    m.lines(
      'Lists use en dashes as markers:',
      m.list(m.item(['First item.']), m.item(['Second item.']), m.item(['Third item.'])),
    ),
    m.heading(1, 'Footnotes'),
    inline`Footnote entries have minor styling adjustments.${footnote(inline`Notably, the footnote number is not displayed in superscript in the entry.`)}`,
    m.heading(1, 'Links'),
    inline`External links, such as to ${link('https://example.com/')} are underlined.`,
  )
}
