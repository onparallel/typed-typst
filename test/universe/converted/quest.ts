// Converted from test/universe/corpus/quest.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  auto,
  call,
  center,
  define,
  doc,
  em,
  emph,
  external,
  fr,
  grid,
  importPackage,
  inline,
  let_,
  link,
  lorem,
  m,
  right,
  space,
  strong,
  table,
  times,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const solution = external('solution')
  const sentences = external('sentences')
  const blank = external('blank')
  const correctChoice = define('correct-choice').pos('arg1', T.any).returns(T.any).external()
  const correctOption = define('correct-option').pos('arg1', T.any).returns(T.any).external()
  const quest = external('quest')
  const choice = external('choice')
  const solution_with = define('with').pos('arg1', T.any).returns(T.any).external(solution)
  const sentences_with = define('with').pos('arg1', T.any).returns(T.any).external(sentences)
  const blank_with = define('with').pos('arg1', T.any).returns(T.any).external(blank)
  const quest_with = define('with')
    .pos('arg1', T.any)
    .pos('arg2', T.any)
    .pos('arg3', T.any)
    .pos('arg4', T.any)
    .named('dedent', T.any, null)
    .named('lang', T.any, null)
    .named('paper', T.any, null)
    .named('region', T.any, null)
    .named('spacing', T.any, null)
    .returns(T.any)
    .external(quest)
  const [displayDecl, display] = let_('display', true)
  const [solutionDecl, solution_2] = let_('solution', solution_with(display))
  const [sentencesDecl, sentences_2] = let_('sentences', sentences_with(display))
  const [blankDecl, blank_2] = let_('blank', blank_with(display))
  const [correctChoiceDecl, correctChoice_2] = let_('correct-choice', correctChoice(display))
  const [correctOptionDecl, correctOption_2] = let_('correct-option', correctOption(display))
  return doc(
    importPackage('@preview/quest:0.2.0', [solution, sentences, blank, correctChoice, correctOption, quest, choice]),
    m.lines(
      displayDecl,
      solutionDecl,
      sentencesDecl,
      blankDecl,
      correctChoiceDecl,
      correctOptionDecl,
      unsafeRaw.markup`#show: quest.with(
  "My Quiz or Test",
  "Kevin Lin",

  // Automatically generate customized PDFs: https://typst.app/blog/2025/automated-generation
  ..if "name" in sys.inputs { (identity: sys.inputs) },
  // Or specify an identity that will only appear when display = true (for solution guides)
  ..if display { (identity: (name: "Kevin Lin", id: "@kevinlin1")) },
  // An alternative to specifying id is email, as in (name: "Kevin Lin", email: "hello@kevinl.info")

  // Customize default settings (or remove these to accept defaults)
  paper: "us-letter",
  lang: "en",
  region: "US",
  dedent: 1.25em, // Or 1.75em for 2-digit numbering
  spacing: 6em,
)`,
    ),
    m.enum(
      { tight: false },
      m.item([
        'What is the third planet from the Sun in the Solar System?',
        space,
        grid(
          { columns: 4, gutter: em(2) },
          inline`${choice} Mercury`,
          inline`${choice} Venus`,
          inline`${correctChoice_2} Earth`,
          inline`${choice} Mars`,
        ),
      ]),
      m.item([
        'What are the first 50 words in the most commonly-used modern form of the',
        space,
        emph(inline`Lorem ipsum`),
        space,
        'text?',
        space,
        call(sentences_2, 3, inline(lorem(50))),
      ]),
      m.item([
        'Give tight asymptotic runtime bounds for each sorting algorithm as a function of',
        space,
        unsafeRaw.math`N`,
        ', the number of elements to sort. The first row has already been completed for you.',
        space,
        table(
          {
            align: add([right], times([center], 3)),
            columns: add([auto], times([fr(1)], 3)),
            stroke: null,
            gutter: em(1),
          },
          table.header(
            inline(),
            inline(strong(inline`Best Case`)),
            inline(strong(inline`Worst Case`)),
            inline(strong(inline`Overall`)),
          ),
          inline`Insertion sort`,
          unsafeRaw.math`Theta(N)`,
          unsafeRaw.math`Theta(N^2)`,
          unsafeRaw.math`Omega(N), O(N^2)`,
          inline`Selection sort`,
          call(blank_2, fr(1), unsafeRaw.math`Theta(N^2)`),
          call(blank_2, fr(1), unsafeRaw.math`Theta(N^2)`),
          call(blank_2, fr(1), unsafeRaw.math`Theta(N^2)`),
          inline`Merge sort`,
          call(blank_2, fr(1), unsafeRaw.math`Theta(N log N)`),
          call(blank_2, fr(1), unsafeRaw.math`Theta(N log N)`),
          call(blank_2, fr(1), unsafeRaw.math`Theta(N log N)`),
        ),
      ]),
      m.item([
        'Where can I learn more about this Typst package?',
        space,
        call(
          solution_2,
          inline`On GitHub ${link('https://github.com/kevinlin1/quest', inline(strong(inline`@kevinlin1/quest`)))}!`,
        ),
      ]),
    ),
  )
}
