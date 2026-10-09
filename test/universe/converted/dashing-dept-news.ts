// Converted from test/universe/corpus/dashing-dept-news.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  align,
  auto,
  blocks,
  define,
  doc,
  external,
  figure,
  fr,
  grid,
  image,
  importPackage,
  inline,
  linebreak,
  link,
  lorem,
  m,
  pad,
  path,
  pct,
  pt,
  quote,
  rect,
  right,
  show,
  space,
  strong,
  sym,
  text,
  white,
} from '../../../src/index.ts'

export default () => {
  const newsletter = external('newsletter')
  const article = define('article').pos('arg1', T.content).returns(T.any).external()
  const newsletter_with = define('with')
    .named('edition', T.content, [])
    .named('hero-image', T.any, null)
    .named('publication-info', T.content, [])
    .named('title', T.content, [])
    .returns(T.any)
    .external(newsletter)
  return doc(
    importPackage('@preview/dashing-dept-news:0.1.1', [newsletter, article]),
    show(
      newsletter_with({
        title: inline`Chemistry Department`,
        edition: inline`${space}March 18th, 2023 ${linebreak()} Purview College${space}`,
        heroImage: { image: image(path('newsletter-cover.jpg')), caption: inline`Award-wining science` },
        publicationInfo: inline`${space}The Dean of the Department of Chemistry. ${linebreak()} Purview College, 17 Earlmeyer
D, Exampleville, TN 59341. ${linebreak()} ${link('mailto:newsletter@chem.purview.edu')}${space}`,
      }),
    ),
    m.lines(
      m.heading(1, 'The Sixtus Award goes to Purview'),
      inline`It's our pleasure to announce that our department has recently been awarded the highly-coveted
Sixtus Award for Excellence in Chemical Research. This is a massive achievement for our department,
and we couldn't be prouder.`,
    ),
    inline(
      quote(
        { block: true, attribution: inline`Prof. Herzog` },
        inline`${space}Our Lab has synthesized the most elements of them all.${space}`,
      ),
    ),
    'The Sixtus Award is a prestigious recognition given to institutions that have demonstrated exceptional performance in chemical research. The award is named after the renowned chemist Sixtus Leung, who made significant contributions to the field of organic chemistry.',
    inline`This achievement is a testament to the hard work, dedication, and passion of our faculty, students,
and staff. Our department has consistently produced groundbreaking research that has contributed
to the advancement of the field of chemistry, and we're honored to receive this recognition.`,
    'The award will be presented to our department in a formal ceremony that will take place on May 15th, 2023. We encourage all members of our department to join us in celebrating this achievement.',
    inline(
      article(
        blocks(
          m.lines(
            m.heading(1, 'Guest lecture from Dr. Elizabeth Lee'),
            'Elizabeth Lee, a leading researcher in the field of biochemistry, spoke about her recent work on the development of new cancer treatments using small molecule inhibitors, and the lecture was very well-attended by both students and faculty.',
          ),
          inline`In case you missed it, there's a recording on ${link('http://purview.edu/lts/2023-lee', inline`EDGARP`)}.`,
        ),
      ),
    ),
    inline(
      article(
        blocks(
          m.lines(m.heading(1, 'Safety first'), 'Next Tuesday, there will be a Lab Safety Training.'),
          inline`These trainings are crucial for ensuring that all members of the department are equipped with
the necessary knowledge and skills to work safely in the laboratory. ${strong(inline`Attendance is mandatory.`)}`,
        ),
      ),
    ),
    inline(
      figure(
        { caption: inline`Our new department rectangle` },
        rect({ width: pct(100), height: pt(80), fill: white, stroke: pt(1) }),
      ),
    ),
    inline(
      article(
        blocks(
          m.lines(
            m.heading(1, 'Tigers win big'),
            inline(
              text(
                { weight: 'bold', font: 'Syne' },
                pad(
                  { x: pt(12) },
                  grid(
                    { columns: [fr(1), auto, fr(1)], rowGutter: pt(8) },
                    text({ size: pt(32) }, align(right, inline`12`)),
                    text({ size: pt(32) }, inline`---`),
                    text({ size: pt(32) }, inline`4`),
                    align(right, inline`Tigers`),
                    null,
                    inline`Eagles`,
                  ),
                ),
              ),
            ),
          ),
          inline`Another great game on the path to win the League. ${linebreak()} Go tigers!`,
        ),
      ),
    ),
    m.lines(m.heading(2, 'Another Success'), inline(lorem(20))),
    inline(lorem(20)),
  )
}
