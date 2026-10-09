/**
 * Templates that are known not to pass, each with the status it has, why, and
 * what would change it. `scripts/check-converted.ts --universe --check` fails
 * when any other template does not pass, when one of these fails differently,
 * and when one of these passes (then remove it from here).
 */
import type { KnownFailures } from '../../scripts/known-failures.ts'

export const knownFailures: KnownFailures = {
  'orange-book': {
    status: 'differs',
    cause: 'source-form',
    reason:
      'The original writes a bare URL (`the License at https://…`), which Typst lexes with the space inside the ' +
      'text before the link; the library prints `#link("…")`, after a space element. The template\'s ' +
      '`show link: it => [⏎ #set text(…) ⏎ #it ⏎]` adds a space on each side of a link, which merges with a ' +
      'space element but not with a space inside text: the original shows two spaces before the URL, the ' +
      'conversion one (2.75pt vs 5.5pt).',
    evidence:
      'Writing `#link("…")` in the original gives a PDF identical to the conversion; printing the bare URL in the ' +
      'conversion gives one identical to the original.',
    revisit: 'If the printer writes `link(url)` as a bare URL where that is safe.',
  },
  'soviet-matrix': {
    status: 'differs',
    cause: 'source-form',
    reason:
      'The game reads each character of the body of `#show: game.with(…)` as a move, and a space as a tick ' +
      'of the clock. In the original the body is the blank line, the comment and the line break after it, ' +
      'which Typst turns into `parbreak, space`: one tick. The conversion keeps no comments or trailing ' +
      'whitespace, so its body is empty: no tick, and the board differs (−2 vs 0).',
    evidence:
      'The body as Typst gives it, queried with `#show: body => metadata(body)`: `[parbreak, space]` with the ' +
      "comment, `parbreak` without it (which is why deleting the comment changes the original's PDF), " +
      'empty in the conversion.',
    revisit: 'Only if the API or the converter ever keeps whitespace that a document ends with.',
  },
}
