// Converted from test/universe/corpus/lacy-ubc-math-project.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  define,
  doc,
  external,
  figure,
  image,
  importFile,
  importPackage,
  inline,
  label,
  link,
  m,
  page,
  path,
  pct,
  raw,
  ref,
  set,
  show,
  space,
  sym,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const markscheme = external('markscheme')
  const setup = external('setup')
  const theme = external('theme')
  const qns = define('qns').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const question = define('question').rest('args', T.any).named('point', T.any, null).returns(T.any).external()
  const solution = define('solution').rest('args', T.any).named('label', T.any, null).returns(T.any).external()
  const groupName = external('group-name')
  const config = external('config')
  const alexConquitlam = external('alex-conquitlam')
  const janeDoe = define('jane-doe').pos('arg1', T.content).pos('arg2', T.content).returns(T.any).external()
  const setup_with = define('with')
    .pos('arg1', T.any)
    .pos('arg2', T.any)
    .named('config', T.any, null)
    .named('group', T.any, null)
    .returns(T.any)
    .external(setup)
  const theme_ubcLight = external('ubc-light', theme)
  return doc(
    m.lines(
      importPackage('@preview/lacy-ubc-math-project:0.2.0', [markscheme, setup, theme, qns, question, solution]),
      importFile('config.typ', [groupName, config, alexConquitlam, janeDoe]),
      unsafeRaw.markup`#import markscheme as m: markit`,
      set(page, { foreground: unsafeRaw.code<any>`m.foreground-marking` }),
    ),
    show(
      setup_with(
        { group: groupName, config: [theme_ubcLight, config] },
        alexConquitlam,
        janeDoe(inline`MISSING:${space}`, inline`NP`),
      ),
    ),
    m.heading(1, 'The Problem'),
    inline(
      qns(
        question(
          { point: 5 },
          inline`${space}Hey, there's a cool math problem, let's solve it! ${figure({ caption: inline`${space}Madeline's math problem (image credit: ${link('https://example.com', inline`Badeline`)}).${space}` }, image({ width: pct(80), height: pct(25), fit: 'stretch' }, path('assets/madeline-math.jpg')))}${space}`,
          solution(
            { label: 'fair' },
            inline(
              space,
              unsafeRaw.code<any>`markit(m.r(2)[this is a marking])[
        You can do it. By this reasoning I get 2 points, and I am labeled \`\`\`typ <sn:fair>\`\`\`!
      ]`,
              space,
            ),
          ),
        ),
        question(
          inline`${space}I do not have a point myself, but my sub-question have point, and I get the sum of theirs!${space}`,
          question(
            { point: 1 },
            inline`The point is...`,
            solution(
              inline`${space}...that you try solving ${ref(label('qs:1'))} (${raw({ lang: 'typ' }, '@qs:1')}), learn
something along the way.${space}`,
              question(
                { point: 99 },
                inline`${space}I am worth 99 points, but my parent question had explicitly stated that it is worth
1 point.${space}`,
                solution(inline`${space}The marking of ${ref({ supplement: inline`that` }, label('sn:fair'))} (${raw({ lang: 'typ' }, '@sn:fair[that]')})
sure sounds fair.${space}`),
              ),
            ),
          ),
          question(
            inline`${space}Take a look at the ${link('https://github.com/lace-wing/lacy-ubc-math-project/blob/master/manual.pdf', inline`manual`)}
there if you are lost or want advanced stuff!${space}`,
            solution(inline(space, unsafeRaw.math.block`#markit(m.c(6), $42^T$) #<eq:me>`, space)),
          ),
        ),
      ),
    ),
  )
}
