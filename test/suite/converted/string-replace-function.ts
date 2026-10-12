// Converted from test/suite/corpus/string-replace-function.typ by scripts/convert-suite.ts — do not edit.
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
          (m_2) => unsafeRaw.code({ m: m_2 })<any>`{
  str(m.start) + m.text + str(m.end)
}`,
        ),
        '0a11b22c3',
      ),
      space,
      test(
        data('abcd, efgh').replace(regex('\\w+'), (m_3) =>
          codeBlock([], upper(unsafeRaw.code({ m: m_3 })<any>`m.text`)),
        ),
        'ABCD, EFGH',
      ),
      space,
      test(
        data('hello : world').replace(
          regex('^(.+)\\s*(:)\\s*(.+)$'),
          (m_4) => unsafeRaw.code({ m: m_4 })<any>`{
  upper(m.captures.at(0)) + m.captures.at(1) + " " + upper(m.captures.at(2))
}`,
        ),
        'HELLO : WORLD',
      ),
      space,
      test(
        data('hello world, lorem ipsum').replace(
          regex('(\\w+) (\\w+)'),
          (m_5) => unsafeRaw.code({ m: m_5 })<any>`{
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
          (m_6) => unsafeRaw.code({ m: m_6 })<any>`{
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
        data('a123b123c').replace('123', (m_11) =>
          codeBlock(
            [],
            add(add(str(unsafeRaw.code({ m: m_11 })<any>`m.start`), '-'), str(unsafeRaw.code({ m: m_11 })<any>`m.end`)),
          ),
        ),
        'a1-4b5-8c',
      ),
      space,
      test(
        data('halla warld').replace(
          'a',
          (m_12) => unsafeRaw.code({ m: m_12 })<any>`{
  if m.start == 1 { "e" }
  else if m.start == 4 or m.start == 7 { "o" }
}`,
        ),
        'hello world',
      ),
      space,
      test(
        data('aaa').replace('a', (m_13) => str(unsafeRaw.code({ m: m_13 })<any>`m.captures.len()`)),
        '000',
      ),
    ),
  )
}
