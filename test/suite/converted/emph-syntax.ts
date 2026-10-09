// Converted from test/suite/corpus/emph-syntax.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { contentBlock, doc, emph, inline, parbreak, strong } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(emph(inline`Emphasized and ${strong(inline`strong`)} words!`)),
    'hello_world Nutzer*innen',
    inline`中文一般使用${strong(inline`粗体`)}或者${emph(inline`楷体`)}来表示强调。`,
    inline`日本語では、${strong(inline`太字`)}や${emph(inline`斜体`)}を使って強調します。`,
    inline`中文中混有${strong(inline`Strong`)}和${emph(inline`Emphasis`)}。`,
    inline(emph(inline`Still ${contentBlock(inline(parbreak(), parbreak()))} emphasized.`)),
  )
}
