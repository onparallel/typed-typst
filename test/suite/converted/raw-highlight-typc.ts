// Converted from test/suite/corpus/raw-highlight-typc.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { auto, doc, inline, m, page, raw, set } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { width: auto }),
      inline(
        raw(
          { block: true, lang: 'typ' },
          '#set hello()\n#set hello()\n#set hello.world()\n#set hello.my.world()\n#let foo(x) = x * 2\n#show heading: func\n#show module.func: func\n#show module.func: it => {}\n#foo(ident: ident)\n#hello\n#hello()\n#box[]\n#hello.world\n#hello.world()\n#hello().world()\n#hello.my.world\n#hello.my.world()\n#hello.my().world\n#hello.my().world()\n#{ hello }\n#{ hello() }\n#{ hello.world() }\n#if foo []',
        ),
      ),
    ),
  )
}
