// Converted from test/universe/corpus/chef-cookbook.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  blocks,
  codeBlock,
  define,
  dict,
  doc,
  external,
  importPackage,
  inline,
  m,
  rgb,
  set,
  show,
  text,
} from '../../../src/index.ts'

export default () => {
  const cookbook = external('cookbook')
  const recipe = define('recipe')
    .pos('arg1', T.any)
    .named('cook-time', T.any, null)
    .named('cuisine', T.any, null)
    .named('description', T.content, [])
    .named('ingredients', T.any, null)
    .named('instructions', T.any, null)
    .named('notes', T.any, null)
    .named('prep-time', T.any, null)
    .named('servings', T.any, null)
    .named('tags', T.any, null)
    .named('utensils', T.any, null)
    .returns(T.any)
    .external()
  const cookbook_with = define('with')
    .named('accent-color', T.any, null)
    .named('author', T.any, null)
    .named('custom-dicts', T.any, null)
    .named('lang', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(cookbook)
  return doc(
    importPackage('@preview/chef-cookbook:0.3.0', [cookbook, recipe]),
    show(
      cookbook_with({
        title: 'Modern Kitchen',
        author: 'Gourmet Studio',
        accentColor: rgb('#D9534F'),
        lang: 'en',
        customDicts: {
          cz: {
            chapter: 'Kapitola',
            collection: 'Sbírka od ',
            contents: 'Obsah',
            ingredients: 'INGREDIENCE',
            utensils: 'NÁČINÍ',
            chefsNote: 'POZNÁMKA ŠÉFKUCHAŘE',
            note: 'POZNÁMKA',
            preparations: 'PŘÍPRAVA',
          },
        },
      }),
    ),
    m.heading(1, 'Starters'),
    inline(
      recipe(
        {
          description: inline`A comforting, velvety soup that captures the essence of late summer harvest. Perfect for chilly
evenings.`,
          cuisine: 'American',
          tags: ['soup', 'vegetarian', 'comfort food', 'roasted'],
          servings: '4 bowls',
          prepTime: '15m',
          cookTime: '40m',
          ingredients: [
            { amount: '1 kg', name: 'Roma tomatoes, halved' },
            { amount: '1 head', name: 'Garlic, top sliced off' },
            { amount: '1/2 cup', name: 'Fresh basil leaves' },
            { amount: '1 cup', name: 'Vegetable broth' },
            'Olive oil',
            'Salt & pepper',
          ],
          utensils: ['Large baking sheet', 'Parchment paper', 'Blender or immersion blender', 'Ladle'],
          instructions: dict({
            Roasting: blocks(
              m.enum(
                m.item([
                  'Preheat oven to 200°C (400°F). Line a large baking sheet with parchment paper. Place tomatoes cut-side up on the baking sheet.',
                ]),
                m.item([
                  'Drizzle everything generously with olive oil and season with salt and pepper. Roast for 40-45 minutes.',
                ]),
              ),
            ),
            'Blending & Serving': blocks(
              m.enum(
                m.item([
                  'Squeeze the roasted garlic cloves out of their skins. Transfer the tomatoes and garlic to a blender.',
                ]),
                m.item(['Blend until smooth. Stir in heavy cream if using for extra richness.']),
                m.item(['Serve hot with crusty bread.']),
              ),
            ),
          }),
          notes: 'For a vegan version, use coconut milk instead of heavy cream.',
        },
        'Roasted Tomato Basil Soup',
      ),
    ),
    m.heading(1, 'Mains'),
    inline(
      codeBlock(
        [set(text, { lang: 'de' })],
        recipe(
          {
            description: inline`Ein einfaches und elegantes Gericht, das die Frische des Lachses mit einer aromatischen Zitronen-Dill-Marinade
kombiniert. Perfekt für den Sommer!`,
            cuisine: 'Deutsch',
            tags: ['Fisch', 'Grillen', 'Sommer', 'Leicht'],
            servings: '2 Filets',
            prepTime: '10 Min.',
            cookTime: '15 Min.',
            ingredients: ['2 Lachsfilets', '2 EL Olivenöl', '1 EL frischer Dill', '1 Zitrone, in Scheiben'],
            utensils: ['Grillpfanne oder Grill', 'Silikonpinsel', 'Grillzange'],
            instructions: {
              Marinade: blocks(
                m.enum(
                  m.item([
                    'Heizen Sie den Grill auf mittlere bis hohe Hitze vor. Bestreichen Sie die Lachsfilets mit Olivenöl.',
                  ]),
                ),
              ),
              Grillen: blocks(
                m.enum(
                  m.item([
                    'Legen Sie den Lachs mit der Hautseite nach unten auf den Grill. Ca. 6–8 Minuten ohne Bewegung grillen.',
                  ]),
                  m.item(['Vorsichtig wenden und weitere 2–4 Minuten grillen.']),
                ),
              ),
              Servieren: blocks(
                m.enum(m.item(['Mit frischen Zitronenscheiben und Kräutern garnieren und servieren.'])),
              ),
            },
            notes: 'Achten Sie darauf, den Lachs nicht zu lange zu garen.',
          },
          'Gegrillter Lachs mit Zitronen-Dill-Marinade',
        ),
      ),
    ),
    inline(
      codeBlock(
        [set(text, { lang: 'cz' })],
        recipe(
          {
            description: inline`Klasické české jídlo, které je oblíbené mezi dětmi i dospělými. Křupavý smažený sýr podávaný
s hranolkami a tatarskou omáčkou.`,
            cuisine: 'Česká',
            tags: ['smažené', 'sýr', 'klasika', 'rychlé'],
            servings: '4 porce',
            prepTime: '15 min.',
            cookTime: '10 min.',
            ingredients: [
              '4 plátky tvrdého sýra (např. eidam)',
              '1 hrnek strouhanky',
              '2 vejce',
              'Olej na smažení',
              'Hranolky a tatarská omáčka k podávání',
            ],
            instructions: blocks(
              m.enum(
                m.item([
                  'Plátky sýra obalte nejprve ve strouhance, poté v rozšlehaných vejcích a znovu ve strouhance.',
                ]),
                m.item(['V hluboké pánvi rozehřejte olej a smažte sýr dozlatova z obou stran.']),
                m.item(['Podávejte horké s hranolkami a tatarskou omáčkou.']),
              ),
            ),
            notes: 'Pro extra křupavost můžete sýr před smažením zamrazit na 30 minut.',
          },
          'Smažený sýr s hranolkami',
        ),
      ),
    ),
  )
}
