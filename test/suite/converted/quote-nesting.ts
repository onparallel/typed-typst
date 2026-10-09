// Converted from test/suite/corpus/quote-nesting.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { auto, doc, inline, linebreak, m, page, quote, set, smartquote, space, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { width: auto }),
      set(text, { lang: 'en' }),
      m.heading(3, 'EN'),
      inline(
        quote(inline`An apostroph'`),
        space,
        linebreak(),
        space,
        quote(inline`A ${quote(inline`nested`)} quote`),
        space,
        linebreak(),
        space,
        quote(inline`A ${quote(inline`very ${quote(inline`nested`)}`)} quote`),
      ),
    ),
    m.lines(
      set(text, { lang: 'de' }),
      m.heading(3, 'DE'),
      inline(
        quote(inline`Satz mit Apostroph'`),
        space,
        linebreak(),
        space,
        quote(inline`Satz mit ${quote(inline`Zitat`)}`),
        space,
        linebreak(),
        space,
        quote(inline`A ${quote(inline`very ${quote(inline`nested`)}`)} quote`),
      ),
    ),
    m.lines(
      set(smartquote, { alternative: true }),
      m.heading(3, 'DE Alternative'),
      inline(
        quote(inline`Satz mit Apostroph'`),
        space,
        linebreak(),
        space,
        quote(inline`Satz mit ${quote(inline`Zitat`)}`),
        space,
        linebreak(),
        space,
        quote(inline`A ${quote(inline`very ${quote(inline`nested`)}`)} quote`),
      ),
    ),
  )
}
