// Converted from test/suite/corpus/xml-namespaces.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, bytes, data, define, doc, inline, unsafeRaw, xml } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(
        xml(
          bytes(unsafeRaw.code<any>`\`\`\`xml
    <data xmlns="http://example.org" xmlns:foo="urn:foo">
      <hello name="hi">1</hello>
      <foo:hello>World</foo:hello>
    </data>
    \`\`\`.text`),
        ),
        [
          {
            namespace: 'http://example.org',
            tag: 'data',
            attrs: data({}),
            children: [
              '\n  ',
              { namespace: 'http://example.org', tag: 'hello', attrs: { name: 'hi' }, children: ['1'] },
              '\n  ',
              { namespace: 'urn:foo', tag: 'hello', attrs: data({}), children: ['World'] },
              '\n',
            ],
          },
        ],
      ),
    ),
  )
}
