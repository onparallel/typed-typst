// Converted from test/suite/corpus/quote-nesting.typ by scripts/convert-suite.ts — do not edit.
import {
  auto,
  doc,
  heading,
  inline,
  linebreak,
  m,
  page,
  quote,
  set,
  smartquote,
  space,
  text,
} from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { width: auto }),
      set(text, { lang: 'en' }),
      heading({ depth: 3 }, inline('EN')),
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
      heading({ depth: 3 }, inline('DE')),
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
      heading({ depth: 3 }, inline('DE Alternative')),
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
