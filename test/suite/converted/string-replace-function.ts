// Converted from test/suite/corpus/string-replace-function.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  codeBlock,
  data,
  define,
  doc,
  inline,
  regex,
  space,
  str,
  unsafeRaw,
  upper,
} from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline(
      test(
        data('abc').replace(
          regex('[a-z]'),
          unsafeRaw.code<any>`m => {
  str(m.start) + m.text + str(m.end)
}`,
        ),
        '0a11b22c3',
      ),
      space,
      test(
        data('abcd, efgh').replace(
          regex('\\w+'),
          unsafeRaw.code<any>`m => {
  upper(m.text)
}`,
        ),
        'ABCD, EFGH',
      ),
      space,
      test(
        data('hello : world').replace(
          regex('^(.+)\\s*(:)\\s*(.+)$'),
          unsafeRaw.code<any>`m => {
  upper(m.captures.at(0)) + m.captures.at(1) + " " + upper(m.captures.at(2))
}`,
        ),
        'HELLO : WORLD',
      ),
      space,
      test(
        data('hello world, lorem ipsum').replace(
          regex('(\\w+) (\\w+)'),
          unsafeRaw.code<any>`m => {
  m.captures.at(1) + " " + m.captures.at(0)
}`,
        ),
        'world hello, ipsum lorem',
      ),
      space,
      test(
        data('hello world, lorem ipsum').replace(
          { count: 1 },
          regex('(\\w+) (\\w+)'),
          unsafeRaw.code<any>`m => {
  m.captures.at(1) + " " + m.captures.at(0)
}`,
        ),
        'world hello, lorem ipsum',
      ),
      space,
      test(data('123 456').replace(regex('[a-z]+'), 'a'), '123 456'),
    ),
    inline(
      test(
        data('abc').replace('', (m_7) => '-'),
        '-a-b-c-',
      ),
      space,
      test(
        data('abc').replace({ count: 1 }, '', (m_8) => '-'),
        '-abc',
      ),
      space,
      test(
        data('123').replace('abc', (m_9) => ''),
        '123',
      ),
      space,
      test(
        data('123').replace({ count: 2 }, 'abc', (m_10) => ''),
        '123',
      ),
      space,
      test(
        data('a123b123c').replace(
          '123',
          unsafeRaw.code<any>`m => {
  str(m.start) + "-" + str(m.end)
}`,
        ),
        'a1-4b5-8c',
      ),
      space,
      test(
        data('halla warld').replace(
          'a',
          unsafeRaw.code<any>`m => {
  if m.start == 1 { "e" }
  else if m.start == 4 or m.start == 7 { "o" }
}`,
        ),
        'hello world',
      ),
      space,
      test(data('aaa').replace('a', unsafeRaw.code<any>`m => str(m.captures.len())`), '000'),
    ),
  )
}
