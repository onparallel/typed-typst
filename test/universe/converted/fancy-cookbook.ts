// Converted from test/universe/corpus/fancy-cookbook.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, blocks, define, doc, external, importPackage, inline, m, show, space, strong } from '../../../src/index.ts'

export default () => {
  const cookbook = external('cookbook')
  const chapter = define('chapter')
    .pos('arg1', T.content)
    .named('change-palette', T.any, null)
    .returns(T.any)
    .external()
  const palette = external('palette')
  const recipe = define('recipe')
    .pos('arg1', T.content)
    .named('authors', T.content, [])
    .named('cook-time', T.content, [])
    .named('description', T.content, [])
    .named('ingredients', T.any, null)
    .named('instructions', T.any, null)
    .named('prep-time', T.content, [])
    .named('servings', T.any, null)
    .returns(T.any)
    .external()
  const cookbook_with = define('with')
    .named('book-author', T.any, null)
    .named('subtitle', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(cookbook)
  const palette_coral = external('coral', palette)
  return doc(
    importPackage('@preview/fancy-cookbook:2.1.0', [cookbook, chapter, palette, recipe]),
    show(cookbook_with({ title: 'My Cookbook', subtitle: 'little subtitle', bookAuthor: 'Myself' })),
    inline(chapter({ changePalette: palette_coral }, inline`Here it is`)),
    inline(
      recipe(
        {
          description: inline`Not really a recipe`,
          authors: inline`Myself`,
          servings: 6,
          prepTime: inline`2 min`,
          cookTime: inline`10 min`,
          ingredients: blocks(
            m.list(
              m.item([strong(inline`1 l`), space, 'of water']),
              m.item([strong(inline`350 ml`), space, 'of fruit juice']),
            ),
          ),
          instructions: blocks(
            m.enum(m.item(['put all together']), m.item(['shake well']), m.item(['reserve in fridge'])),
          ),
        },
        inline`Simple Recipe`,
      ),
    ),
    inline(
      recipe(
        {
          description: inline`Not really a recipe`,
          authors: inline`Myself`,
          servings: 6,
          prepTime: inline`2 min`,
          cookTime: inline`10 min`,
          ingredients: [
            {
              title: inline`Liquid`,
              items: blocks(
                m.list(
                  m.item([strong(inline`1 l`), space, 'of water']),
                  m.item([strong(inline`350 ml`), space, 'of fruit juice']),
                ),
              ),
            },
            {
              title: inline`Solid`,
              items: blocks(
                m.list(
                  m.item([strong(inline`300 mg`), space, 'of wheat flour']),
                  m.item([strong(inline`12 g`), space, 'of butter']),
                  m.item([strong(inline`150 g`), space, 'of sugar']),
                ),
              ),
            },
          ],
          instructions: [
            {
              title: inline`Liquid`,
              steps: blocks(
                m.enum(m.item(['put all together']), m.item(['shake well']), m.item(['reserve in fridge'])),
              ),
            },
            {
              title: inline`Solid`,
              steps: blocks(
                m.enum(
                  m.item(['Put all together']),
                  m.item(['Mix well']),
                  m.item(['Put everything in the garbage']),
                  m.item(['Call for a pizza']),
                ),
              ),
            },
          ],
        },
        inline`Recipe With Groups`,
      ),
    ),
  )
}
