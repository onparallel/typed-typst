/** The corpus check against its list of known failures. */
import { describe, expect, it } from 'vitest'
import { checkKnown, type KnownFailures } from '../scripts/known-failures.ts'

const known: KnownFailures = {
  a: { status: 'differs', cause: 'unexplained', reason: 'r', revisit: 'v' },
}

describe('known failures', () => {
  it('accept a pass and a listed failure with its status', () => {
    expect(checkKnown({ a: { status: 'differs' }, b: { status: 'pass' } }, known)).toEqual([])
  })

  it('report an unlisted failure, a different status, a listed pass and a listed case not checked', () => {
    expect(checkKnown({ a: { status: 'error' }, b: { status: 'throws', detail: 'x' } }, known)).toEqual([
      'a: error, known as differs',
      'b: throws (x), not a known failure',
    ])
    expect(checkKnown({ a: { status: 'pass' } }, known)).toEqual(['a passes now: remove it from known-failures.ts'])
    expect(checkKnown({}, known)).toEqual(['a is a known failure but was not checked'])
  })
})
