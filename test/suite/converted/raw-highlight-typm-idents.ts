// Converted from test/suite/corpus/raw-highlight-typm-idents.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { auto, doc, inline, m, page, raw, set } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { width: auto }),
      inline(
        raw(
          { block: true, lang: 'typm' },
          'hello\nhello-world\nhello()\nbox[]\nhello.world\nhello.world()\nhello-world()\nhello_world()\nhello.my.world()\nemph(hello.my.world())\nemph(hello.my().world)\nemph(hello.my().world())\nemph (hello.my().world())\n#hello\n#hello()\n#hello.world\n#hello.world()\n#box[]',
        ),
      ),
    ),
  )
}
