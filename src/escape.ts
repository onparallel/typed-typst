/**
 * Escaping of data into Typst source.
 *
 * Both escapers keep the printed source on one line: control characters and
 * every character that Typst treats as a line break become `\u{…}`.
 */

/** Characters that break a line in Typst source, besides the C0 controls. */
const LINE_BREAKS = new Set([0x7f, 0x85, 0x2028, 0x2029])

function isControl(cp: number): boolean {
  return cp < 0x20 || LINE_BREAKS.has(cp)
}

function unicodeEscape(cp: number): string {
  return `\\u{${cp.toString(16)}}`
}

function assertWellFormed(s: string): void {
  if (!s.isWellFormed()) {
    throw new TypeError(
      'Typst cannot represent a string with a lone surrogate (half of a UTF-16 pair); fix the data, or replace it with str.toWellFormed()',
    )
  }
}

/** A Typst string literal (`"…"`) whose value is exactly `s`. */
export function strLiteral(s: string): string {
  assertWellFormed(s)
  let out = '"'
  for (const ch of s) {
    const cp = ch.codePointAt(0)!
    if (ch === '\\') out += '\\\\'
    else if (ch === '"') out += '\\"'
    else if (isControl(cp)) out += unicodeEscape(cp)
    else out += ch
  }
  return out + '"'
}

/**
 * Characters with a meaning anywhere in markup, always escaped with a backslash.
 * An escape is an element of its own (`a\-b` is three, `a-b` one), which
 * changes word counts and the tagged PDF, so `/`, `-`, `=` and `+` are escaped
 * only where they mean something, and `{`, `}` and `>`, which mean nothing in
 * markup, never.
 */
const MARKUP_SPECIAL = new Set('\\#$*_`@~\'"')

/**
 * Markup text that shows exactly `s`.
 *
 * `s` is printed at the start of a markup run and at its end, so a leading or
 * trailing space is escaped (an unescaped one would be indentation or would be
 * trimmed), and so is the dot of a leading `1.` (an enum marker).
 */
export function markupText(
  s: string,
  atStart: boolean,
  atEnd: boolean,
  term = false,
  spaceBefore = false,
  /** Which characters are prose: there, quotes, `--`, `---` and `...` print as they are, for Typst's typography. */
  prose: readonly boolean[] = [],
): string {
  assertWellFormed(s)
  const chars = Array.from(s)
  const leadingDigits = atStart ? (/^\d+/.exec(s)?.[0].length ?? 0) : 0
  // A term (`/ term: description`) ends at its first colon, even inside brackets.
  const brackets = !term && balancedBrackets(chars)
  // One piece per character, joined at the end: reading back a growing string (`out[i]`) makes V8
  // flatten it on every character, which is quadratic.
  const out: string[] = []
  // Whether the previous character printed as a token of its own: an escape (`\]`, `\u{1}`), a prose
  // quote or shorthand.
  let escaped = false
  for (let i = 0; i < chars.length; i++) {
    let piece: string
    const ch = chars[i]!
    // Prose: Typst makes quotes smart quotes and `--`, `---`, `...` dashes and an ellipsis; none is
    // syntax. A run counts only when all of it is prose, and only as a whole (`----` stays escaped).
    if (prose[i]) {
      // A quote and a shorthand are tokens of their own: what follows starts a token (`"-1"` would be
      // a minus sign), as after an escape.
      if (ch === "'" || ch === '"') {
        out.push(ch)
        escaped = true
        continue
      }
      if ((ch === '-' || ch === '.') && chars[i - 1] !== ch) {
        let j = i
        while (chars[j] === ch) j++
        const run = j - i
        if ((ch === '-' ? run === 2 || run === 3 : run === 3) && prose.slice(i, j).every(Boolean)) {
          out.push(ch.repeat(run))
          escaped = true
          i = j - 1
          continue
        }
      }
    }
    const cp = ch.codePointAt(0)!
    const next = chars[i + 1]
    if (isControl(cp)) {
      piece = unicodeEscape(cp)
    } else if (MARKUP_SPECIAL.has(ch) || (term && ch === ':')) {
      piece = '\\' + ch
    } else if (ch === '[' || ch === ']') {
      // Brackets that pair up within the text nest like a content block's and stay text; a lone one
      // could close or open a block.
      piece = brackets ? ch : '\\' + ch
    } else if (ch === '<') {
      // A label (`<name>`) or a shorthand (`<-`), unless a space follows; at the end, what follows is unknown.
      piece = next !== undefined && /\s/u.test(next) ? '<' : '\\<'
    } else if (ch === '-') {
      // A list (`- ` at the start of a line), the shorthands `--`, `-?` and `-1` (a minus after a space).
      // At the end of the text the next node is no text (texts are merged): a space, an element, a
      // label, a rule, raw text or an equation, none of which makes a shorthand with it.
      const meaningful =
        (i === 0 && (atStart || next === undefined)) ||
        next === '-' ||
        next === '?' ||
        // `-` before a number (Typst's char::is_numeric: `1`, `٣`, `²`, `½`) where it starts a token: at
        // the start, after a space, a colon, a bracket (`[a]-1`) or an escape (`\u{1}-1`).
        (next !== undefined && /[\p{N}\p{Cn}]/u.test(next) && (i === 0 || escaped || /[\s:[\]]/u.test(chars[i - 1]!)))
      piece = meaningful ? '\\-' : '-'
    } else if (ch === '=' || ch === '+') {
      // A heading (`== `) or an enum item (`+ `) only at the start of a line, before a space or the
      // end (`++14`, `=x` stay text).
      let marker = atStart && i === 0
      if (marker) {
        let j = i + 1
        while (ch === '=' && chars[j] === '=') j++
        marker = chars[j] === undefined || /\s/u.test(chars[j]!)
      }
      piece = marker ? '\\' + ch : ch
    } else if (ch === '/') {
      // An escape is an element of its own (`GB\/T` is three), so `/` is escaped only where it means
      // something: a comment (`//`, `/*`), a term (`/ ` at the start of a line), or at the end, where
      // what follows is unknown.
      const meaningful = (atStart && i === 0) || i === chars.length - 1 || chars[i + 1] === '/' || chars[i + 1] === '*'
      piece = meaningful ? '\\/' : '/'
    } else if (ch === '.') {
      // `1.` is an enum marker only before a space or at the end, where what follows is unknown.
      const enumMarker = leadingDigits > 0 && i === leadingDigits && (next === undefined || /\s/u.test(next))
      const ellipsis = chars[i - 1] === '.' || chars[i + 1] === '.'
      piece = enumMarker || ellipsis ? '\\.' : '.'
    } else if (ch === ' ') {
      const edge = ((atStart || spaceBefore) && i === 0) || (atEnd && i === chars.length - 1)
      // Typst collapses a run of spaces, so only the first one is literal.
      piece = edge || chars[i - 1] === ' ' ? unicodeEscape(cp) : ' '
    } else if (/\s/u.test(ch)) {
      // Other whitespace may collapse or be trimmed too.
      piece = unicodeEscape(cp)
    } else {
      piece = ch
    }
    out.push(piece)
    escaped = piece.startsWith('\\')
  }
  return out.join('')
}

/** Whether the brackets of a text pair up (`[x]`, `a [b [c]]`), never closing one that is not open. */
function balancedBrackets(chars: readonly string[]): boolean {
  let depth = 0
  for (const ch of chars) {
    if (ch === '[') depth++
    else if (ch === ']' && --depth < 0) return false
  }
  return depth === 0
}

// ---------------------------------------------------------------------------
// Numbers.

function assertFinite(n: number): void {
  if (!Number.isFinite(n)) throw new RangeError(`Typst has no literal for ${n}`)
}

/** An integer literal. */
export function intLiteral(n: number): string {
  if (!Number.isSafeInteger(n)) throw new RangeError(`expected an integer, got ${n}`)
  return String(n)
}

/** An integer beyond JS numbers (`9223372036854775800n`): Typst's ints are 64-bit. */
export function bigintLiteral(n: bigint): string {
  if (n < -(2n ** 63n) || n >= 2n ** 63n) throw new RangeError(`${n} does not fit in a Typst int (64 bits)`)
  // `-9223372036854775808` is the negation of a literal past the int range, which Typst reads as a float.
  return n === -(2n ** 63n) ? '(-9223372036854775807 - 1)' : String(n)
}

/** A float literal; integral values get a `.0` so that they stay floats. */
export function floatLiteral(n: number): string {
  assertFinite(n)
  const s = String(n).replace('e+', 'e')
  return /[.e]/.test(s) ? s : `${s}.0`
}

/** A decimal without exponent, for values with a unit (`1e-3pt` is not a literal). */
export function plainDecimal(n: number): string {
  assertFinite(n)
  const s = String(n)
  const m = /^(-?)(\d+)(?:\.(\d+))?e([+-]\d+)$/.exec(s)
  if (!m) return s
  const [, sign, int, frac = '', exp] = m
  const digits = int! + frac
  const point = int!.length + Number(exp)
  if (point <= 0) return `${sign}0.${'0'.repeat(-point)}${digits}`
  if (point >= digits.length) return sign + digits + '0'.repeat(point - digits.length)
  return `${sign}${digits.slice(0, point)}.${digits.slice(point)}`
}

/** The literal for a number whose Typst type is decided by its value. */
export function numberLiteral(n: number, kind?: 'int' | 'float'): string {
  if (kind === 'int') return intLiteral(n)
  if (kind === 'float') return floatLiteral(n)
  return Number.isSafeInteger(n) ? intLiteral(n) : floatLiteral(n)
}

// ---------------------------------------------------------------------------
// Names.

const KEYWORDS = new Set([
  'none',
  'auto',
  'true',
  'false',
  'not',
  'and',
  'or',
  'let',
  'set',
  'show',
  'context',
  'if',
  'else',
  'for',
  'in',
  'while',
  'break',
  'continue',
  'return',
  'import',
  'include',
  'as',
  // `_` alone is the placeholder of a destructuring pattern, not a name.
  '_',
])

/** Throws unless `name` is a Typst identifier that is not a keyword. */
export function assertIdent(name: string): string {
  if (!/^[\p{XID_Start}_][\p{XID_Continue}-]*$/u.test(name) || KEYWORDS.has(name)) {
    throw new TypeError(
      `not a Typst identifier: ${JSON.stringify(name)} (letters, digits, _ and -, not starting with a digit or -, and not a keyword)`,
    )
  }
  return name
}

/** Throws unless `name` can follow a dot (`sym.and`): an identifier, where keywords are names too. */
export function assertFieldName(name: string): string {
  if (!/^[\p{XID_Start}_][\p{XID_Continue}-]*$/u.test(name))
    throw new TypeError(`not a Typst field name: ${JSON.stringify(name)}`)
  return name
}

/**
 * Whether `<name>` is label syntax. ASCII only: the label syntax takes Unicode's identifier characters,
 * of the Unicode version Typst was built with, and JS may know more of them (a label from data with a
 * newer letter would not close).
 */
export function isLabelName(name: string): boolean {
  // The label syntax starts only at an identifier character: `<.a>` is text, `#f(<.a>)` an error.
  return /^[A-Za-z0-9_-][A-Za-z0-9_\-.:]*$/.test(name)
}

export function assertLabelName(name: string): string {
  if (!isLabelName(name)) {
    throw new TypeError(
      `not a valid label name to attach in markup: ${JSON.stringify(name)} (ASCII letters, digits, _, -, . and : only)`,
    )
  }
  return name
}

/**
 * Throws unless `name`, a key of an object (named arguments), is an ASCII identifier: Unicode's
 * identifier characters change between versions, and JS may know more of them than Typst. (A key of a
 * dictionary prints as a string instead.)
 */
export function assertKeyName(name: string): string {
  if (!/^[A-Za-z_][A-Za-z0-9_-]*$/.test(assertIdent(name)))
    throw new TypeError(`not an ASCII identifier, as a named argument must be: ${JSON.stringify(name)}`)
  return name
}

/** `topEdge` → `top-edge`. */
export function kebab(name: string): string {
  // Only camelCase becomes kebab-case; other keys (`GRAD`, a font axis) stay as they are.
  if (!/^[a-z][a-zA-Z0-9]*$/.test(name)) return name
  return name.replace(/[A-Z]/g, (c) => '-' + c.toLowerCase())
}
