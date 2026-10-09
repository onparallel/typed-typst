// Converted from test/suite/corpus/cite-supplements-and-ibid.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  bibliography,
  bytes,
  doc,
  inline,
  label,
  let_,
  page,
  path,
  pt,
  ref,
  set,
  strong,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const [styleDecl, style] = let_(
    'style',
    bytes(unsafeRaw.code<any>`\`\`\`xml
  <?xml version="1.0" encoding="utf-8"?>
  <style xmlns="http://purl.org/net/xbiblio/csl" version="1.0" class="note" default-locale="pl-PL">
    <info>
      <title>Example citation style</title>
      <id>http://www.example.com/</id>
    </info>
    <macro name="locator">
      <group delimiter=" ">
        <label variable="locator" form="short"/>
        <text variable="locator"/>
      </group>
    </macro>

    <citation>
      <sort>
        <key variable="title"/>
      </sort>
      <layout>
        <choose>
          <if position="first">
            <group delimiter=", ">
              <text variable="title"/>
              <text macro="locator"/>
            </group>
          </if>
          <else-if position="ibid-with-locator">
            <group delimiter=", ">
              <text term="ibid"/>
              <text macro="locator"/>
            </group>
          </else-if>
          <else-if position="ibid">
            <text term="ibid"/>
          </else-if>
          <else-if position="subsequent">
            <group delimiter=", ">
              <text variable="title"/>
              <text macro="locator"/>
            </group>
          </else-if>
        </choose>
      </layout>
    </citation>

    <bibliography>
      <sort>
        <key variable="title"/>
      </sort>
      <layout>
        <text variable="title"/>
      </layout>
    </bibliography>
  </style>
  \`\`\`.text`),
  )
  return doc(
    set(page, { width: pt(300) }),
    inline`Par 1 ${ref(label('arrgh'))}`,
    inline`Par 2 ${ref({ supplement: inline`p. 5-8` }, label('arrgh'))}`,
    inline`Par 3 ${ref({ supplement: inline`p. 5-8` }, label('arrgh'))}`,
    inline`Par 4 ${ref({ supplement: inline`p. 9-10` }, label('arrgh'))}`,
    inline`Par 5 ${ref({ supplement: inline(strong(inline`p. 9-10`)) }, label('arrgh'))}`,
    inline`Par 6 ${ref({ supplement: inline(strong(inline`p. 9-10`)) }, label('arrgh'))}`,
    styleDecl,
    inline(bibliography({ style: style }, path('/assets/bib/works.bib'))),
  )
}
