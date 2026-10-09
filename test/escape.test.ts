import fc from 'fast-check'
import { describe, expect, it } from 'vitest'
import { assertIdent, assertLabelName, floatLiteral, markupText, plainDecimal, strLiteral } from '../src/escape.ts'
import { typstEval } from './helpers/typst.ts'

const loneSurrogate = fc.integer({ min: 0xd800, max: 0xdfff }).map((cp) => String.fromCharCode(cp))
/** Any well-formed string, with control characters and line separators made likely. */
const anyString = fc.string({
  unit: fc.oneof(
    fc.string({ unit: 'binary', minLength: 1, maxLength: 1 }),
    fc.constantFrom(
      '\\',
      '"',
      '\n',
      '\r',
      '\t',
      '\0',
      '\x7f',
      '\x85',
      '\u2028',
      '\u2029',
      ' ',
      '#',
      '$',
      '[',
      ']',
      '/',
      '.',
      '1',
    ),
  ),
  maxLength: 40,
})

describe('strLiteral', () => {
  it('escapes backslash, quote and controls as \\u{…}', () => {
    expect(strLiteral('a"b\\c\n\u0001\u007f')).toBe('"a\\"b\\\\c\\u{a}\\u{1}\\u{7f}"')
  })

  it('never prints a line break', () => {
    fc.assert(fc.property(anyString, (s) => !/[\n\r\u0085\u2028\u2029]/.test(strLiteral(s))))
  })

  it('throws on a lone surrogate', () => {
    fc.assert(
      fc.property(fc.tuple(anyString, loneSurrogate, anyString), ([a, b, c]) => {
        expect(() => strLiteral(a + b + c)).toThrow(/lone surrogate/)
      }),
    )
  })

  it('round-trips any string through the Typst binary', async () => {
    // One Typst process per batch of strings; fast-check still shrinks the batch.
    await fc.assert(
      fc.asyncProperty(fc.array(anyString, { minLength: 1, maxLength: 60 }), async (strings) => {
        const source = strings.map((s, i) => `#metadata(${strLiteral(s)}) <s${i}>`).join('\n')
        const got = await typstEval(
          source,
          `range(${strings.length}).map(i => query(label("s" + str(i))).first().value)`,
        )
        expect(got).toEqual(strings)
      }),
      { numRuns: 25 },
    )
  })
})

describe('markupText', () => {
  it('escapes every markup character', () => {
    expect(markupText('#x @y $z$ *b* _e_ [x] <l> \\ "q"', true, true)).toBe(
      '\\#x \\@y \\$z\\$ \\*b\\* \\_e\\_ [x] \\<l> \\\\ \\"q\\"',
    )
  })

  it('escapes comments, URLs and shorthands', () => {
    expect(markupText('a//b /*c*/ https://x -- ... ~', false, false)).toBe(
      'a\\//b \\/\\*c\\*/ https:\\//x \\-- \\.\\.\\. \\~',
    )
  })

  it('escapes - = + only where they mean something, and never { } >', () => {
    expect(markupText('state-of-the-art a=b a+b {x} a>b', false, false)).toBe('state-of-the-art a=b a+b {x} a>b')
    expect(markupText('- a', true, false)).toBe('\\- a')
    expect(markupText('= a + b', true, false)).toBe('\\= a + b')
    expect(markupText('+ a', true, false)).toBe('\\+ a')
    expect(markupText('++14/x =x', true, false)).toBe('++14/x =x')
    expect(markupText('== a', true, false)).toBe('\\== a')
    expect(markupText('+', true, true)).toBe('\\+')
    // At the end of a text the next node is not text: a `-` there makes no shorthand.
    expect(markupText('x -1 a--b c-?d e-', false, false)).toBe('x \\-1 a\\--b c\\-?d e-')
    expect(markupText('-x', false, false)).toBe('-x')
    expect(markupText('-1', false, false)).toBe('\\-1')
  })

  it('escapes a slash only where it means something', () => {
    // An escape is an element of its own: `GB\/T` would be three.
    expect(markupText('GB/T 7714', false, false)).toBe('GB/T 7714')
    expect(markupText('/ term', true, false)).toBe('\\/ term')
    expect(markupText('a/', false, false)).toBe('a\\/')
  })

  it('escapes an enum marker only at the start, before a space or the end', () => {
    expect(markupText('12. a', true, false)).toBe('12\\. a')
    expect(markupText('12.', true, true)).toBe('12\\.')
    expect(markupText('12. a', false, false)).toBe('12. a')
    // An escape is an element of its own, which word counters see: `1.5` stays one text.
    expect(markupText('1.5 and 1.1.1 x', true, false)).toBe('1.5 and 1.1.1 x')
  })

  it('escapes brackets only when they do not pair up, and < unless a space follows', () => {
    expect(markupText('[x] a [b [c]]', true, true)).toBe('[x] a [b [c]]')
    expect(markupText('a] b[', true, true)).toBe('a\\] b\\[')
    expect(markupText('[a', true, true)).toBe('\\[a')
    expect(markupText('2 < 3 <l> a<', true, true)).toBe('2 < 3 \\<l> a\\<')
  })

  it('keeps spaces exact', () => {
    expect(markupText(' a  b ', true, true)).toBe('\\u{20}a \\u{20}b\\u{20}')
    expect(markupText('a b', true, true)).toBe('a b')
  })

  it('never prints a line break', () => {
    fc.assert(
      fc.property(
        anyString,
        fc.boolean(),
        fc.boolean(),
        (s, a, b) => !/[\n\r\u0085\u2028\u2029]/.test(markupText(s, a, b)),
      ),
    )
  })
})

describe('numbers and names', () => {
  it('prints floats so that they stay floats', () => {
    expect(floatLiteral(2)).toBe('2.0')
    expect(floatLiteral(1.5e300)).toBe('1.5e300')
    expect(() => floatLiteral(Number.NaN)).toThrow()
  })

  it('prints values with a unit without exponent', () => {
    expect(plainDecimal(1e-7)).toBe('0.0000001')
    expect(plainDecimal(-1.25e-3)).toBe('-0.00125')
    expect(plainDecimal(1e21)).toBe('1000000000000000000000')
    fc.assert(
      fc.property(
        fc.double({ noNaN: true, noDefaultInfinity: true }),
        (n) => Number(plainDecimal(n)) === n || Object.is(n, -0),
      ),
    )
  })

  it('accepts identifiers and labels, rejects the rest', () => {
    expect(assertIdent('row-gutter')).toBe('row-gutter')
    expect(() => assertIdent('let')).toThrow()
    expect(() => assertIdent('a b')).toThrow()
    expect(() => assertIdent('a)')).toThrow()
    expect(() => assertIdent('_')).toThrow()
    expect(assertIdent('_a')).toBe('_a')
    expect(assertLabelName('sec:intro-1.2')).toBe('sec:intro-1.2')
    expect(() => assertLabelName('a>b')).toThrow()
  })
})
