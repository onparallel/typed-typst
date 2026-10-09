// Converted from test/suite/corpus/xml.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, data, define, doc, inline, let_, m, path, xml } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const [dataDecl, data_2] = let_('data', xml(path('/assets/data/hello.xml')))
  const [dataFromPathDecl, dataFromPath] = let_('data-from-path', xml(path('/assets/data/hello.xml')))
  return doc(
    m.lines(
      dataDecl,
      inline(
        test(data_2, [
          {
            namespace: null,
            tag: 'data',
            attrs: data({}),
            children: [
              '\n  ',
              { namespace: null, tag: 'hello', attrs: { name: 'hi' }, children: ['1'] },
              '\n  ',
              {
                namespace: null,
                tag: 'data',
                attrs: data({}),
                children: [
                  '\n    ',
                  { namespace: null, tag: 'hello', attrs: data({}), children: ['World'] },
                  '\n    ',
                  { namespace: null, tag: 'hello', attrs: data({}), children: ['World'] },
                  '\n  ',
                ],
              },
              '\n',
            ],
          },
        ]),
      ),
    ),
    m.lines(dataFromPathDecl, inline(test(dataFromPath, data_2))),
  )
}
