// Converted from test/universe/corpus/yuan-resume.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  blocks,
  bottom,
  cm,
  define,
  doc,
  em,
  emph,
  enum_,
  fr,
  grid,
  h,
  hide,
  importPackage,
  inline,
  left,
  line,
  linebreak,
  link,
  m,
  page,
  par,
  pct,
  pt,
  right,
  set,
  smallcaps,
  space,
  strong,
  sym,
  terms,
  text,
} from '../../../src/index.ts'

export default () => {
  const sectionBlock = define('section-block').pos('arg1', T.content).pos('arg2', T.content).returns(T.any).external()
  const eduHeading = define('edu-heading')
    .named('department', T.content, [])
    .named('location', T.content, [])
    .named('role', T.content, [])
    .named('time', T.content, [])
    .returns(T.any)
    .external()
  const projHeading = define('proj-heading')
    .named('institution', T.content, [])
    .named('time', T.content, [])
    .named('title', T.content, [])
    .returns(T.any)
    .external()
  const internHeading = define('intern-heading')
    .named('company', T.content, [])
    .named('location', T.content, [])
    .named('time', T.content, [])
    .returns(T.any)
    .external()
  const award = define('award').named('time', T.content, []).named('title', T.content, []).returns(T.any).external()
  return doc(
    importPackage('@preview/yuan-resume:0.1.0', [sectionBlock, eduHeading, projHeading, internHeading, award]),
    m.lines(
      set(page, { margin: { top: cm(1.2), bottom: cm(2.6), left: cm(1.8), right: cm(2.3) } }),
      set(text, { font: 'Sabon LT Std', size: pt(10) }),
    ),
    inline(
      grid(
        { columns: [fr(3), fr(1)], align: [add(left, bottom), add(right, bottom)] },
        smallcaps(
          inline(
            space,
            text({ font: 'Calluna', size: pt(30) }, inline`Name and Surname`),
            space,
            h(em(1)),
            space,
            text({ font: 'Calluna', size: pt(14.5) }, inline`Ph.D.`),
            space,
          ),
        ),
        inline`${space}(+00) 111-2222-3333 ${linebreak()} email@example.com ${linebreak()} ${link('https://www.example.com')}${space}`,
      ),
    ),
    inline(line({ length: pct(100), stroke: pt(0.4) })),
    inline(
      sectionBlock(
        inline`Education`,
        blocks(
          m.lines(
            inline(
              eduHeading({
                department: inline`Department of Automation, Tsinghua University`,
                location: inline`Beijing, China`,
                role: inline`Ph.D. in Control Science and Engineering`,
                time: inline`2022 - 2028 ${text({ style: 'italic', size: pt(9) }, inline`(expected)`)}`,
              }),
            ),
            m.list(
              m.item(['Advisor: Prof. Xiao Yuan']),
              m.item(['Research area: Operations Research and Machine Learning']),
            ),
          ),
          m.lines(
            inline(
              eduHeading({
                department: inline`Department of Precision Instrument, Tsinghua University`,
                location: inline`Beijing, China`,
                role: inline`B.E. in Measurement and Control Technology and Instrument`,
                time: inline`2018 - 2022`,
              }),
            ),
            m.list(m.item(['GPA: 0.00/4.00, Rank: 64/64.'])),
          ),
        ),
      ),
    ),
    inline(
      sectionBlock(
        inline`Publications`,
        blocks(
          m.lines(
            set(par, { justify: true }),
            set(enum_, { spacing: pt(12) }),
            m.enum(
              m.item([
                strong(inline`Xiao Yuan`),
                ', Hua Li. The Future Urban Transportation Systems: Innovations and Challenges.',
                space,
                emph(inline`Journal of Operations Research and Optimization`),
                ', 2024.',
              ]),
              m.item([
                'Hua Li,',
                space,
                strong(inline`Xiao Yuan`),
                ', John Doe. Optimizing Logistics and Supply Chain Networks Using Machine Learning Techniques.',
                space,
                emph(inline`International Conference on Operations Research and Machine Learning`),
                ', 2023.',
              ]),
              m.item([
                'John Doe,',
                space,
                strong(inline`Xiao Yuan`),
                ', Hua Li. Artificial Intelligence in Healthcare: Transforming Diagnostics and Treatment.',
                space,
                emph(inline`International Conference on HealthTech Innovations`),
                ', 2023.',
              ]),
            ),
          ),
        ),
      ),
    ),
    inline(
      sectionBlock(
        inline`Projects`,
        inline(
          space,
          projHeading({
            title: inline`Advanced Optimization Techniques for Smart Grid Management`,
            institution: inline`National Natural Science Foundation of China (NSFC)`,
            time: inline`2023.01 - 2024.01`,
          }),
          space,
          projHeading({
            title: inline`Optimizing Urban Traffic Flow Using AI-Based Predictive Models`,
            institution: inline`Smart Transportation Innovations Grant`,
            time: inline`2021.12 - 2022.12`,
          }),
          space,
        ),
      ),
    ),
    inline(
      sectionBlock(
        inline`Internships`,
        blocks(
          m.lines(
            inline(
              internHeading({
                company: inline`ABC Tech Ltd.`,
                location: inline`Shanghai, China`,
                time: inline`2024.01 - 2024.06`,
              }),
            ),
            m.list(
              m.item(['Develop engaging content for social media platforms.']),
              m.item(['Prepare reports and presentations summarizing research findings.']),
            ),
          ),
          m.lines(
            inline(
              internHeading({
                company: inline`XYZ Tech Inc.`,
                location: inline`Shanghai, China`,
                time: inline`2023.07 - 2023.12`,
              }),
            ),
            m.list(
              m.item(['Develop engaging content for social media platforms.']),
              m.item(['Prepare reports and presentations summarizing research findings.']),
            ),
          ),
        ),
      ),
    ),
    inline(
      sectionBlock(
        inline`Awards and Honors`,
        blocks(
          m.lines(
            set(par, { spacing: pt(8) }),
            inline(
              award({
                title: inline`${strong(inline`First Prize`)}, International Data Science Challenge`,
                time: inline`2023.11`,
              }),
              space,
              award({
                title: inline`${strong(inline`Best Innovation Award`)}, Tech Startup Pitch Competition`,
                time: inline`2023.05`,
              }),
              space,
              award({
                title: inline`${strong(inline`Excellence in Research Award`)}, Annual Research Symposium`,
                time: inline`2022.12`,
              }),
              space,
              award({
                title: inline`${strong(inline`Academic Scholarship`)}, Tsinghua University`,
                time: inline`2022.09`,
              }),
            ),
          ),
        ),
      ),
    ),
    inline(
      sectionBlock(
        inline`Skills`,
        blocks(
          m.lines(
            set(terms, { separator: inline`:${space}` }),
            m.terms(
              m.term(['Languages'], ['Chinese, English, French']),
              m.term(['Programming'], ['Python, C++, MATLAB']),
            ),
          ),
        ),
      ),
    ),
    inline(
      sectionBlock(
        inline`Academinc Services`,
        blocks(
          m.lines(
            set(par, { justify: true }),
            m.terms(
              m.term(['Reviewers for'], [emph(inline`Journal of Operations Research and Optimization`)]),
              m.term(
                [hide(inline`Reviewers for`)],
                [emph(inline`International Conference on Optimization and Machine Learning`)],
              ),
              m.term([hide(inline`Reviewers for`)], [sym.dots.h]),
            ),
          ),
        ),
      ),
    ),
  )
}
