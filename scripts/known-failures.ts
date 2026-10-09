/** The cases of a corpus that are known not to pass (`test/<set>/known-failures.ts`). */

export type Status = 'pass' | 'type-error' | 'differs' | 'throws' | 'error' | 'original-error' | 'unsupported'

export interface KnownFailure {
  /** The status the case has; another one fails the check. */
  status: Exclude<Status, 'pass'>
  /**
   * - `source-form`: the conversion is right, but the original writes something in a form the
   *   library prints differently, and the document shows the difference.
   * - `library-gap`: the API cannot express the document yet.
   * - `converter-gap`: the converter does not translate it yet.
   * - `unexplained`: not understood yet.
   */
  cause: 'source-form' | 'library-gap' | 'converter-gap' | 'unexplained'
  /** What differs and why. */
  reason: string
  /** How the reason was checked. */
  evidence?: string
  /** What would make the case pass, or what to look at next. */
  revisit: string
}

export type KnownFailures = Readonly<Record<string, KnownFailure>>

/**
 * The problems of a run against the known failures: a case that does not pass and is not
 * listed, a listed one that fails differently, and a listed one that passes now.
 */
export function checkKnown(
  results: Readonly<Record<string, { status: Status; detail?: string }>>,
  known: KnownFailures,
): string[] {
  const problems: string[] = []
  for (const [name, r] of Object.entries(results)) {
    const k = known[name]
    if (r.status === 'pass') {
      if (k) problems.push(`${name} passes now: remove it from known-failures.ts`)
    } else if (!k) problems.push(`${name}: ${r.status}${r.detail ? ` (${r.detail})` : ''}, not a known failure`)
    else if (k.status !== r.status) problems.push(`${name}: ${r.status}, known as ${k.status}`)
  }
  for (const name of Object.keys(known))
    if (!(name in results)) problems.push(`${name} is a known failure but was not checked`)
  return problems
}
