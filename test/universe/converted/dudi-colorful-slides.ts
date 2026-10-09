// Converted from test/universe/corpus/dudi-colorful-slides.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  blocks,
  define,
  doc,
  external,
  importPackage,
  inline,
  let_,
  m,
  pt,
  red,
  rgb,
  show,
  strong,
} from '../../../src/index.ts'

export default () => {
  const styles = external('styles')
  const titleSlide = define('title-slide')
    .pos('arg1', T.content)
    .pos('arg2', T.any)
    .pos('arg3', T.content)
    .pos('arg4', T.content)
    .named('color1', T.any, null)
    .named('color2', T.any, null)
    .returns(T.any)
    .external()
  const color1 = external('color1')
  const color2 = external('color2')
  const slide = define('slide')
    .pos('arg1', T.content)
    .pos('arg2', T.content)
    .pos('arg3', T.content)
    .named('color1', T.any, null)
    .named('color2', T.any, null)
    .named('is-last', T.any, null)
    .returns(T.any)
    .external()
  const [c1Decl, c1] = let_('c1', red)
  const [c2Decl, c2] = let_('c2', rgb('#0a3bac'))
  return doc(
    importPackage('@preview/dudi-colorful-slides:0.1.0', [styles, titleSlide, color1, color2, slide]),
    m.lines(c1Decl, c2Decl),
    show(styles),
    inline(
      titleSlide(
        { color1: c1, color2: c2 },
        inline`Impact of Plant Fluff on Allergy Development`,
        pt(42),
        inline`Name Surname`,
        inline`Study Group`,
      ),
    ),
    inline(
      slide(
        { color1: c1, color2: c2 },
        inline`Problem Statement`,
        blocks(
          m.lines(
            inline(strong(inline`What is plant fluff?`)),
            m.list(
              m.item(['Lightweight fibers from plants (poplar, dandelion)']),
              m.item(['Carrier of pollen and fine particles']),
              m.item(['Active during spring and summer']),
            ),
          ),
        ),
        blocks(
          m.lines(
            inline(strong(inline`Why it matters`)),
            m.list(
              m.item(['Rising number of allergy sufferers worldwide']),
              m.item(['Fluff is a major seasonal allergen']),
              m.item(['Significant impact on quality of life']),
            ),
          ),
        ),
      ),
    ),
    inline(
      slide(
        { color1: c1, color2: c2 },
        inline`Mechanism of Allergic Reaction`,
        blocks(
          m.lines(
            inline(strong(inline`How does fluff trigger allergies?`)),
            m.list(
              m.item(['Inhalation of microscopic pollen particles']),
              m.item(['Immune system recognizes them as threats']),
              m.item(['Histamine release causes inflammation']),
              m.item(['Symptoms: sneezing, itching, swelling']),
            ),
          ),
        ),
        blocks(
          m.lines(
            inline(strong(inline`Allergy vs. Irritation`)),
            m.list(
              m.item(['True allergy: immune response']),
              m.item(['Irritation: mechanical impact']),
              m.item(['Diagnosis: skin tests, blood analysis']),
              m.item(['Important to distinguish for proper treatment']),
            ),
          ),
        ),
      ),
    ),
    inline(
      slide(
        { color1: c1, color2: c2 },
        inline`Types of Allergens`,
        blocks(
          m.lines(
            inline(strong(inline`Plant-based`)),
            m.list(
              m.item(['Tree pollen (birch, poplar)']),
              m.item(['Grass pollen (ragweed, mugwort)']),
              m.item(['Mold spores']),
            ),
          ),
        ),
        blocks(
          m.lines(
            inline(strong(inline`Animal and household`)),
            m.list(m.item(['Pet dander and fur']), m.item(['Dust mites']), m.item(['Cockroaches and other insects'])),
          ),
        ),
      ),
    ),
    inline(
      slide(
        { color1: c1, color2: c2 },
        inline`Statistics`,
        blocks(
          m.lines(
            inline(strong(inline`Key figures`)),
            m.list(
              m.item(['Up to 40% of population affected']),
              m.item(['Annual growth of 5-10%']),
              m.item(['Children more susceptible than adults']),
            ),
          ),
        ),
        blocks(
          m.lines(
            inline(strong(inline`Seasonality and geography`)),
            m.list(
              m.item(['Peak season: April through August']),
              m.item(['Mountain regions: lower fluff levels']),
              m.item(['Industrial zones: higher risk']),
            ),
          ),
        ),
      ),
    ),
    inline(
      slide(
        { color1: c1, color2: c2 },
        inline`Prevention and Treatment`,
        blocks(
          m.lines(
            inline(strong(inline`Prevention`)),
            m.list(
              m.item(['Wear masks during pollen season']),
              m.item(['Keep windows closed, use filtered AC']),
              m.item(['Rinse nose with saline solution']),
              m.item(['Clean home with damp methods']),
            ),
          ),
        ),
        blocks(
          m.lines(
            inline(strong(inline`Treatment`)),
            m.list(
              m.item(['Antihistamine medications']),
              m.item(['Nasal sprays']),
              m.item(['Allergen-specific immunotherapy']),
              m.item(['Consult an allergist']),
            ),
          ),
        ),
      ),
    ),
    inline(
      slide(
        { color1: c1, color2: c2, isLast: true },
        inline`Conclusion`,
        blocks(
          m.lines(
            inline(strong(inline`Key findings`)),
            m.list(
              m.item(['Fluff is a significant allergen']),
              m.item(['Early diagnosis is important']),
              m.item(['Prevention reduces symptoms']),
            ),
          ),
        ),
        blocks(
          m.lines(
            inline(strong(inline`Recommendations`)),
            m.list(
              m.item(['See a specialist']),
              m.item(['Follow precautionary measures']),
              m.item(['Monitor pollen forecasts']),
            ),
          ),
        ),
      ),
    ),
  )
}
