// Converted from test/universe/corpus/sleiden-lei.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  box,
  define,
  doc,
  document,
  external,
  gradient,
  importPackage,
  inline,
  let_,
  m,
  pct,
  set,
  show,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const slides = external('slides')
  const titlePresentation = define('title-presentation')
    .named('date', T.content, [])
    .named('name', T.content, [])
    .named('place', T.content, [])
    .named('title', T.any, null)
    .returns(T.any)
    .external()
  const onlyText = define('only-text')
    .named('body', T.content, [])
    .named('title', T.content, [])
    .returns(T.any)
    .external()
  const textAndImageEqual = define('text-and-image-equal')
    .named('body', T.content, [])
    .named('image', T.any, null)
    .named('title', T.content, [])
    .returns(T.any)
    .external()
  const index = define('index').returns(T.any).external()
  const textDominant = define('text-dominant').returns(T.any).external()
  const imageDominant = define('image-dominant').returns(T.any).external()
  const onlyImage = define('only-image').returns(T.any).external()
  const textAnd4Images = define('text-and-4-images').returns(T.any).external()
  const textAnd2Images = define('text-and-2-images').returns(T.any).external()
  const titleClosure = define('title-closure').returns(T.any).external()
  const slides_with = define('with').named('lang', T.any, null).returns(T.any).external(slides)
  const [titleDecl, title_2] = let_('title', inline`This is the title of my presentation!`)
  return doc(
    importPackage('@preview/sleiden-lei:1.0.0', [
      slides,
      titlePresentation,
      onlyText,
      textAndImageEqual,
      index,
      textDominant,
      imageDominant,
      onlyImage,
      textAnd4Images,
      textAnd2Images,
      titleClosure,
    ]),
    m.lines(show(slides_with({ lang: 'en' })), titleDecl, set(document, { title: title_2 })),
    inline(
      titlePresentation({
        title: title_2,
        name: inline`Firstname Lastname`,
        place: inline`Leiden`,
        date: inline`2026-02-16`,
      }),
    ),
    inline(
      onlyText({
        title: inline`I can change the title of a slide like this`,
        body: inline`The content of the slide goes here`,
      }),
    ),
    inline(
      textAndImageEqual({
        title: inline`Here's a slide with text and and an image`,
        body: inline`This is the text of the slide`,
        image: box(
          { width: pct(100), height: pct(100), fill: unsafeRaw.code<any>`gradient.linear(..color.map.rainbow)` },
          inline`Here's where I would put my image`,
        ),
      }),
    ),
    inline(index()),
    inline(textDominant()),
    inline(imageDominant()),
    inline(onlyImage()),
    inline(textAnd4Images()),
    inline(textAnd2Images()),
    inline(titleClosure()),
  )
}
