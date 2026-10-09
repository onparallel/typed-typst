// Converted from test/suite/corpus/raw-highlight-html.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { auto, doc, inline, page, raw, set } from '../../../src/index.ts'

export default () => {
  return doc(
    set(page, { width: auto }),
    inline(
      raw(
        { block: true, lang: 'html' },
        '<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="utf-8">\n  </head>\n  <body>\n    <h1>Topic</h1>\n    <p>The Hypertext Markup Language.</p>\n    <script>\n      function foo(a, b) {\n        return a + b + "string";\n      }\n    </script>\n  </body>\n</html>',
      ),
    ),
  )
}
