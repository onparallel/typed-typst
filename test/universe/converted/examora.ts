// Converted from test/universe/corpus/examora.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  black,
  blocks,
  calc,
  call,
  cm,
  data,
  datetime,
  define,
  div,
  doc,
  em,
  enum_,
  external,
  fr,
  grid,
  importPackage,
  inline,
  left,
  let_,
  lorem,
  m,
  minus,
  pct,
  pt,
  raw,
  rgb,
  right,
  set,
  show,
  space,
  strong,
  text,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const documentclass = define('documentclass')
    .named('continue-number', T.any, null)
    .named('font-size', T.any, null)
    .named('info', T.any, null)
    .named('margin', T.any, null)
    .named('method', T.any, null)
    .named('student-info', T.any, null)
    .named('type', T.any, null)
    .returns(T.any)
    .external()
  const codlyInit = external('codly-init')
  const canvas = define('canvas').pos('arg1', T.any).returns(T.any).external()
  const draw = external('draw')
  const plot = external('plot')
  const [
    patternDecl,
    [
      mainmatter,
      title_2,
      questionHeader,
      scoreTable,
      choiceQuestion,
      fillQuestion,
      trueFalseQuestion,
      question,
      newPage,
    ],
  ] = let_(
    [
      'mainmatter',
      'title',
      'question-header',
      'score-table',
      'choice-question',
      'fill-question',
      'true-false-question',
      'question',
      'new-page',
    ],
    documentclass({
      info: {
        school: '布鲁斯特大学',
        subject: '高等数学',
        major: 'XX专业',
        date: datetime({ year: 2025, day: 20, month: 6 }),
        duration: inline`120分钟`,
      },
      margin: { top: cm(3), bottom: cm(3), outside: cm(2), inside: cm(3.2) },
      studentInfo: ['学院', '专业', '班级', '姓名', '学号'],
      fontSize: pt(13),
      type: 'A卷',
      method: '闭卷',
      continueNumber: true,
    }),
  )
  const [styleDecl, style] = let_('style', { stroke: black, fill: rgb(0, 0, 200, 75) })
  const f1 = define('f1')
    .pos('x', T.any)
    .returns(T.any)
    .body((p) => calc.sin(p['x']))
  const [fnDecl, fn] = let_(
    'fn',
    data([
      [unsafeRaw.math.block`x - x^3"/"3!`, (x) => minus(x, div(calc.pow(x, 3), 6))],
      [
        unsafeRaw.math.block`x - x^3"/"3! - x^5"/"5!`,
        (x_2) => add(minus(x_2, div(calc.pow(x_2, 3), 6)), div(calc.pow(x_2, 5), 120)),
      ],
      [
        unsafeRaw.math.block`x - x^3"/"3! - x^5"/"5! - x^7"/"7!`,
        (x_3) =>
          minus(add(minus(x_3, div(calc.pow(x_3, 3), 6)), div(calc.pow(x_3, 5), 120)), div(calc.pow(x_3, 7), 5040)),
      ],
    ]),
  )
  return doc(
    importPackage('@preview/examora:0.2.0', [documentclass]),
    patternDecl,
    m.lines(show(mainmatter), inline(set(text, { lang: 'zh' }))),
    inline(call(title_2)),
    inline(call(scoreTable)),
    inline(call(questionHeader, inline`选择题（每空2分，共30分）`)),
    inline(
      call(
        choiceQuestion,
        data([
          ['以下内容哪个是真的？', ['地球是方的', ['地球是圆的', true], '月亮自己发光', '太阳比地球小']],
          [
            inline`如果不希望选项被随机打乱，可以加入 ${raw('fixed')} 选项，例如，下列选项中哪个是对的？`,
            [
              unsafeRaw.math`1 + 1 = 3`,
              unsafeRaw.math`1 + 2 = 10`,
              unsafeRaw.math`1 - 0 = 3`,
              [inline`以上选项都是错的`, true],
            ],
            { inset: em(0.8) },
            { fixed: true },
          ],
          [
            inline`以下内容中，哪一个是${unsafeRaw.math`e^x`}的泰勒展开公式？提示：一个函数的泰勒展开是一个很重要的概念哦`,
            [
              [inline(unsafeRaw.math`display(e^x= sum_(i=0)^oo x^i / i!)`), true],
              inline(unsafeRaw.math`display(e^x= sum_(i=-oo)^oo x^i / i!)`),
              inline(unsafeRaw.math`display(e^x= sum_(i=0)^oo x^(2i) / (2i)!)`),
              inline(unsafeRaw.math`display(e^x= sum_(i=0)^oo x^(2i + 1) / (2i + 1)!)`),
            ],
            { inset: em(0.8) },
          ],
          [
            inline`以下内容中，哪一个是${unsafeRaw.math`e^x`}的泰勒展开公式？提示：一个函数的泰勒展开是一个很重要的概念哦`,
            [
              [inline(unsafeRaw.math`display(e^x= sum_(i=0)^oo x^i / i!)`), true],
              inline(unsafeRaw.math`display(e^x= sum_(i=-oo)^oo x^i / i!)`),
              inline(unsafeRaw.math`display(e^x= sum_(i=0)^oo x^(2i) / (2i)!)`),
              inline(unsafeRaw.math`display(e^x= sum_(i=0)^oo x^(2i + 1) / (2i + 1)!)`),
            ],
            { inset: em(0.8) },
          ],
          [
            inline`以下内容中，哪一个是${unsafeRaw.math`e^x`}的泰勒展开公式？提示：一个函数的泰勒展开是一个很重要的概念哦`,
            [
              [inline(unsafeRaw.math`display(e^x= sum_(i=0)^oo x^i / i!)`), true],
              inline(unsafeRaw.math`display(e^x= sum_(i=-oo)^oo x^i / i!)`),
              inline(unsafeRaw.math`display(e^x= sum_(i=0)^oo x^(2i) / (2i)!)`),
              inline(unsafeRaw.math`display(e^x= sum_(i=0)^oo x^(2i + 1) / (2i + 1)!)`),
            ],
            { inset: em(0.8) },
          ],
          [
            inline`以下内容中，哪一个是${unsafeRaw.math`e^x`}的泰勒展开公式？提示：一个函数的泰勒展开是一个很重要的概念哦`,
            [
              [inline(unsafeRaw.math`display(e^x= sum_(i=0)^oo x^i / i!)`), true],
              inline(unsafeRaw.math`display(e^x= sum_(i=-oo)^oo x^i / i!)`),
              inline(unsafeRaw.math`display(e^x= sum_(i=0)^oo x^(2i) / (2i)!)`),
              inline(unsafeRaw.math`display(e^x= sum_(i=0)^oo x^(2i + 1) / (2i + 1)!)`),
            ],
            { inset: em(0.8) },
          ],
          [inline`这是一个很短的题目。`, [[inline`选这个`, true], inline`别选`, inline`别选`, inline`别选`]],
          [inline`这是一个很短的题目。`, [[inline`选这个`, true], inline`别选`, inline`别选`, inline`别选`]],
          [
            inline`这是一个很短的题目。`,
            [[inline`选这个`, true], inline`别选`, inline`别选`, [inline`也选这个`, true]],
          ],
          [inline`这是一个很短的题目。`, [[inline`选这个`, true], inline`别选`, inline`别选`, inline`别选`]],
          [inline`这是一个很短的题目。`, [[inline`选这个`, true], inline`别选`, inline`别选`, inline`别选`]],
          [inline`这是一个很短的题目。`, [[inline`选这个`, true], inline`别选`, inline`别选`, inline`别选`]],
          [inline`这是一个很短的题目。`, [[inline`选这个`, true], inline`别选`, inline`别选`, inline`别选`]],
          [inline`这是一个很短的题目。`, [[inline`选这个`, true], inline`别选`, inline`别选`, inline`别选`]],
          [inline`这是一个很短的题目。`, [[inline`选这个`, true], inline`别选`, inline`别选`, inline`别选`]],
        ]),
      ),
    ),
    inline(call(questionHeader, inline`填空题（每空1分，共10分）`)),
    inline(
      call(
        fillQuestion,
        { spacing: em(1.5), leading: em(1.5) },
        data([
          [
            inline`${raw('Java')}中，控制循环的关键字包括：`,
            [inline(raw('break')), cm(3)],
            inline`、`,
            [inline(raw('continue')), cm(3)],
            inline`和`,
            [inline(raw('goto')), cm(3)],
            inline`。`,
          ],
          [
            inline`${raw('Java')}中，控制循环的关键字包括：`,
            [inline(raw('break')), cm(3)],
            inline`、`,
            [inline(raw('continue')), cm(3)],
            inline`和`,
            [inline(raw('goto')), cm(3)],
            inline`。`,
          ],
          ['这是第一题', ['这是答案', cm(3)], '这是后续内容。'],
          ['这是第一题', ['这是答案', cm(3)], '这是后续内容。'],
          ['这是第一题', ['这是答案', cm(3)], '这是后续内容。'],
          [inline`递归程序的含义是：`, [inline`函数的自我调用`, cm(4)], inline`。`],
          [inline`递归程序的含义是：`, [inline`函数的自我调用`, cm(4)], inline`。`],
          [inline`递归程序的含义是：`, [inline`函数的自我调用`, cm(4)], inline`。`],
          [
            inline`${raw('Java')}中，控制循环的关键字包括：`,
            [inline(raw('break')), cm(3)],
            inline`、`,
            [inline(raw('continue')), cm(3)],
            inline`和`,
            [inline(raw('goto')), cm(3)],
            inline`。`,
          ],
          [
            inline`${raw('Java')}中，控制循环的关键字包括：`,
            [inline(raw('break')), cm(3)],
            inline`、`,
            [inline(raw('continue')), cm(3)],
            inline`和`,
            [inline(raw('goto')), cm(3)],
            inline`。`,
          ],
        ]),
      ),
    ),
    inline(call(questionHeader, inline`判断题（每题1分，共10分）`)),
    inline(
      call(
        trueFalseQuestion,
        { spacing: em(1.2), leading: em(1) },
        data([
          [
            inline`${raw('C++')} 中，${raw({ lang: 'cpp' }, '#include <iostream>')} 是用来引入输入输出流库的。${lorem(10)}`,
            true,
          ],
          [
            inline`在 ${raw('C++')} 中，${raw('int a = 5.5')}; 会将 ${unsafeRaw.math`5.5`} 转换为整数 ${unsafeRaw.math`5`}。${lorem(10)}`,
            true,
          ],
          [inline`${raw('C++')} 中，${raw({ lang: 'cpp' }, 'std::vector')} 是一种固定大小的数组。${lorem(10)}`, false],
          [
            inline`${raw('C++')} 中，${raw({ lang: 'cpp' }, '#include <iostream>')} 是用来引入输入输出流库的。${lorem(10)}`,
            true,
          ],
          [
            inline`在 ${raw('C++')} 中，${raw('int a = 5.5')}; 会将 ${unsafeRaw.math`5.5`} 转换为整数 ${unsafeRaw.math`5`}。${lorem(10)}`,
            true,
          ],
          [inline`${raw('C++')} 中，${raw({ lang: 'cpp' }, 'std::vector')} 是一种固定大小的数组。${lorem(10)}`, false],
          [
            inline`${raw('C++')} 中，${raw({ lang: 'cpp' }, '#include <iostream>')} 是用来引入输入输出流库的。${lorem(10)}`,
            true,
          ],
          [
            inline`在 ${raw('C++')} 中，${raw('int a = 5.5')}; 会将 ${unsafeRaw.math`5.5`} 转换为整数 ${unsafeRaw.math`5`}。${lorem(10)}`,
            true,
          ],
          [inline`${raw('C++')} 中，${raw({ lang: 'cpp' }, 'std::vector')} 是一种固定大小的数组。${lorem(10)}`, false],
          [inline`${raw('C++')} 中，${raw({ lang: 'cpp' }, 'std::vector')} 是一种固定大小的数组。${lorem(10)}`, false],
        ]),
      ),
    ),
    inline(call(newPage)),
    inline(call(questionHeader, inline`简答题（每题5分，共10分）`)),
    inline(
      call(question, {
        question: inline`请谈谈你对于函数式编程的理解。`,
        answer: inline`${space}${strong(inline`函数式编程（Functional Programming，简称 FP）`)}是一种编程范式，它将计算视为数学函数的求值，并避免使用可变状态和副作用。以下是函数式编程的核心定义和特点：
输出仅依赖输入参数，没有副作用（不会修改外部状态）。不可变性（Immutability）高阶函数（Higher-Order Functions）函数组合（Function Composition）惰性求值、无状态（Statelessness） 避免共享状态，减少并发编程中的问题。${space}`,
        spacing: pct(40),
      }),
    ),
    inline(call(question, { question: inline`请谈谈你对于${raw('C++')}中移动语义的理解。` }), space, call(newPage)),
    inline(
      call(questionHeader, inline`程序阅读题（每题10分，共20分）`),
      space,
      call(question, {
        question: inline`阅读以下程序，解释并说明其输出结果。`,
        body: blocks(
          m.lines(
            importPackage('@preview/codly:1.3.0', [codlyInit]),
            show(codlyInit),
            inline(
              raw(
                { block: true, lang: 'cpp' },
                '#include <iostream>\nint main() {\n  std::cout << "Hello, world!" << std::endl;\n  return 0;\n}',
              ),
            ),
          ),
        ),
        answer: blocks(inline`输出 ${raw('Hello, world!')}`, inline(lorem(100))),
      }),
    ),
    inline(call(newPage)),
    inline(
      call(question, {
        question: inline`已知在${unsafeRaw.math`triangle A B C`}中，${unsafeRaw.math`A + B = 3C, 2 sin(A-C) = sin B`}`,
        body: blocks(
          m.lines(
            set(enum_, { numbering: '(1)' }),
            inline(
              grid(
                { columns: [fr(1), fr(1)], align: [left, right] },
                blocks(
                  m.lines(
                    set(enum_, { numbering: 'a.' }),
                    m.enum(
                      m.item(['求', space, unsafeRaw.math`sin A`, ';']),
                      m.item([
                        '设',
                        space,
                        unsafeRaw.math`A B = 5`,
                        ', 求',
                        space,
                        unsafeRaw.math`A B`,
                        space,
                        '边上的高.',
                      ]),
                    ),
                  ),
                ),
                blocks(
                  m.lines(
                    importPackage('@preview/cetz:0.4.0', [canvas, draw]),
                    importPackage('@preview/cetz-plot:0.1.2', [plot]),
                  ),
                  styleDecl,
                  m.lines(f1.decl, fnDecl),
                  m.lines(
                    set(text, { size: pt(10) }),
                    inline(
                      canvas(unsafeRaw.code<any>`{
          import draw: *

          // Set-up a thin axis style
          set-style(
            axes: (stroke: .5pt, tick: (stroke: .5pt)),
            legend: none,
          )

          plot.plot(
            size: (5, 3),
            x-tick-step: calc.pi / 2,
            x-format: plot.formats.multiple-of,
            y-tick-step: 2,
            y-min: -2.5,
            y-max: 2.5,
            {
              let domain = (-1.1 * calc.pi, +1.1 * calc.pi)

              for (title, f) in fn {
                plot.add-fill-between(f, f1, domain: domain, style: (stroke: none), label: none)
              }
              plot.add(f1, domain: domain, style: (stroke: black))
            },
          )
        }`),
                    ),
                  ),
                ),
              ),
            ),
          ),
        ),
      }),
    ),
    inline(call(newPage)),
    inline(call(questionHeader, inline`程序设计题（每题10分，共20分）`)),
    inline(call(question, { question: inline`设计一个自己的 ${raw('unique_ptr')}.` })),
    inline(call(newPage)),
    inline(call(question, { question: inline`用自己的 ${raw('unique_ptr')} 实现一个链表。` })),
  )
}
