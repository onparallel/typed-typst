// Converted from test/universe/corpus/clean-math-presentation.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  blocks,
  datetime,
  define,
  doc,
  em,
  emph,
  external,
  image,
  importPackage,
  inline,
  label,
  labelled,
  linebreak,
  link,
  m,
  path,
  raw,
  ref,
  show,
  space,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const configInfo = define('config-info')
    .named('affiliations', T.any, null)
    .named('author', T.any, null)
    .named('authors', T.any, null)
    .named('date', T.any, null)
    .named('short-title', T.content, [])
    .named('title', T.content, [])
    .returns(T.any)
    .external()
  const configCommon = define('config-common').named('slide-level', T.any, null).returns(T.any).external()
  const slide = define('slide').pos('arg1', T.content).named('title', T.any, null).returns(T.any).external()
  const pause = external('pause')
  const appendix = external('appendix')
  const cleanMathPresentationTheme = external('clean-math-presentation-theme')
  const titleSlide = define('title-slide').named('logo1', T.any, null).returns(T.any).external()
  const focusSlide = define('focus-slide').pos('arg1', T.content).returns(T.any).external()
  const theorem = define('theorem').pos('arg1', T.content).named('title', T.any, null).returns(T.any).external()
  const proof = define('proof').pos('arg1', T.content).returns(T.any).external()
  const definition = define('definition').pos('arg1', T.content).named('title', T.any, null).returns(T.any).external()
  const cleanMathPresentationTheme_with = define('with')
    .pos('arg1', T.any)
    .pos('arg2', T.any)
    .named('progress-bar', T.any, null)
    .returns(T.any)
    .external(cleanMathPresentationTheme)
  return doc(
    m.lines(
      importPackage('@preview/touying:0.5.5', [configInfo, configCommon, slide, pause, appendix]),
      importPackage('@preview/clean-math-presentation:0.1.1', [
        cleanMathPresentationTheme,
        configInfo,
        configCommon,
        titleSlide,
        slide,
        focusSlide,
        theorem,
        proof,
        pause,
        definition,
        appendix,
      ]),
    ),
    show(
      cleanMathPresentationTheme_with(
        { progressBar: false },
        configInfo({
          title: inline`An example presentation to show how this template can be used`,
          shortTitle: inline`Short title that will be shown in the footer`,
          authors: [
            { name: 'First Author', affiliationId: 1 },
            { name: 'Second Author', affiliationId: 2 },
            { name: 'Third Author', affiliationId: 1 },
          ],
          author: 'Presenting Author',
          affiliations: [
            { id: 1, name: 'Fancy Department, University of Somewhere' },
            { id: 2, name: 'Important Institute, Nice University' },
          ],
          date: datetime({ year: 2024, month: 11, day: 20 }),
        }),
        configCommon({ slideLevel: 2 }),
      ),
    ),
    inline(titleSlide({ logo1: image({ height: em(4.5) }, path('images/logo_placeholder.svg')) })),
    m.heading(1, 'First Section'),
    inline(
      slide(
        { title: 'Using the template' },
        blocks(
          m.lines(
            'To use this template,',
            m.list(
              m.item([
                'import it at the beginning of your presentation like this:',
                space,
                raw('#import "@preview/clean-math-presentation:0.1.1": *'),
              ]),
              m.item(['import touying by', space, raw('#import "@preview/touying:0.5.5": *')]),
              m.item([
                'call the',
                space,
                raw('#show: clean-math-presentation-theme.with()'),
                space,
                'function to set the title, authors, and other information of your presentation.',
              ]),
            ),
          ),
          inline`The title slide can be created with the ${raw('#title-slide()')} command. You can pass a ${raw('background')}
(an image or ${raw('none')}) and up to two logos ${raw('logo1')} and ${raw('logo2')}. ${linebreak()}
The outline can be included, e.g., with ${raw('#components.adaptive-columns(outline(title: none))')}.${linebreak()}
Normal slides can be created with ${raw('#slide()')}. ${linebreak()} A lot of general documentation
about the Touying package can be found ${link('https://touying-typ.github.io/', inline`in the Touying documentation`)}.
The general ${link('https://typst.app/docs/', inline`typst documentation`)} is also helpful.`,
        ),
      ),
    ),
    inline(focusSlide(inline`${space}Focus!${space}`)),
    inline(
      slide(
        { title: 'Theorems' },
        inline`${space}Theorems can be created with the ${raw('#theorem')} command. Similarly, there are ${raw('#proof')},
${raw('#definition')}, ${raw('#example')}, ${raw('#lemma')}, and ${raw('#corollary')}. ${linebreak()}
For example, here is a theorem: ${theorem({ title: 'Important one' }, inline`${space}Using theorems is easy.${space}`)}
${proof(inline`${space}This was very easy, wasn't it?${space}`)} ${pause} A definition already
given by well-known mathematicians ${ref(label('Author1978definition'))} is: ${definition({ title: 'Important stuff' }, inline`${space}${emph(inline`Important stuff`)} is defined as the stuff that is important to me: ${unsafeRaw.math.block`exp(upright(i) pi) + 1 = 0.`}${space}`)}${space}`,
      ),
    ),
    inline(
      slide(
        { title: 'Equations' },
        inline`${space}Equations with a label with a label will be numbered automatically: ${labelled(unsafeRaw.math.block`integral_0^oo exp(-x^2) dif x = pi/2`, label('eq:important'))}
We can then refer to this equation as ${ref(label('eq:important'))}. Equations without a label
will not be numbered: ${unsafeRaw.math.block`sum_(n=1)^oo 1/n^2 = pi^2/6`} Inline math equations
will not break across lines, which can be seen here: ${unsafeRaw.math`a x^2 + b x + c = 0 => x_(1,2) = (-b plus.minus sqrt(b^2 - 4 a c))/(2 a)`}${space}`,
      ),
    ),
    show(appendix),
    m.heading(1, 'References'),
    inline(
      slide({ title: 'References' }, inline(space, bibliography({ title: null }, path('bibliography.bib')), space)),
    ),
  )
}
