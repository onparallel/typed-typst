/**
 * Suite cases that are known not to pass, in the format of test/universe/known-failures.ts.
 * Each tests how Typst's parser handles whitespace and comments (trivia) inside markup, by
 * comparing the content it builds with `test(…)`; the conversion writes the same document
 * without the trivia, so the content differs by a space element.
 */
import type { KnownFailures } from '../../scripts/known-failures.ts'

const trivia = {
  status: 'error',
  cause: 'source-form',
  evidence: 'The assertion failure in the conversion shows the same content but for a space element.',
  revisit: 'Only if the converter ever keeps the whitespace and comments of markup.',
} as const

export const knownFailures: KnownFailures = {
  'heading-trailing-whitespace': {
    ...trivia,
    reason:
      'Compares `[= h  ]` and `[= h  /**/  <g>]` with headings built in code: whether the spaces after a heading ' +
      'are a space element. The conversion writes the headings without the trailing spaces and comments.',
  },
  'list-indent-bracket-nesting': {
    ...trivia,
    reason:
      'Compares lists whose items are indented inside `[…]` blocks with the same lists written plainly; the ' +
      'conversion writes both plainly, without the line breaks and indentation that make the space elements.',
  },
  'list-indent-trivia-nesting': {
    ...trivia,
    reason:
      'Compares lists indented with comments between the markers (`/**/- b`) with the same lists written ' +
      'plainly; the conversion drops the comments and the whitespace around them.',
  },
}
