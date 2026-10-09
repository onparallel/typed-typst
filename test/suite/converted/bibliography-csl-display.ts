// Converted from test/suite/corpus/bibliography-csl-display.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { bibliography, bytes, doc, inline, let_, raw, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const [styleDecl, style] = let_(
    'style',
    raw(
      { block: true, lang: 'csl' },
      '  <?xml version="1.0" encoding="utf-8"?>\n  <style xmlns="http://purl.org/net/xbiblio/csl" class="in-text" version="1.0">\n    <info>\n      <title>Test</title>\n      <id>test</id>\n    </info>\n    <citation collapse="citation-number">\n      <layout>\n        <text variable="citation-number"/>\n      </layout>\n    </citation>\n    <bibliography>\n      <layout>\n        <text variable="title" font-style="italic" />\n        <text variable="citation-number" display="left-margin" prefix="|" suffix="|" />\n        <group display="indent">\n          <text term="by" suffix=" " />\n          <!-- This left-margin attribute is ignored because it is in a container. -->\n          <names variable="author" display="left-margin" />\n        </group>\n        <group display="block" prefix="(" suffix=")">\n          <text term="edition" suffix=" " text-case="capitalize-first" />\n          <date variable="issued"><date-part name="year"/></date>\n        </group>\n      </layout>\n    </bibliography>\n  </style>',
    ),
  )
  const [bibDecl, bib] = let_(
    'bib',
    raw(
      { block: true, lang: 'bib' },
      '  @article{entry1,\n    title={Title 1},\n    author={Author 1},\n    year={2021},\n  }',
    ),
  )
  return doc(
    styleDecl,
    bibDecl,
    inline(
      bibliography(
        { style: bytes(unsafeRaw.code<any>`style.text`), title: null, full: true },
        bytes(unsafeRaw.code<any>`bib.text`),
      ),
    ),
  )
}
