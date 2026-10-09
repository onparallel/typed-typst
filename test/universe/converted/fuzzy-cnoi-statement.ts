// Converted from test/universe/corpus/fuzzy-cnoi-statement.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  blue,
  call,
  codeBlock,
  define,
  doc,
  figure,
  image,
  importPackage,
  inline,
  label,
  labelled,
  let_,
  lorem,
  m,
  path,
  pct,
  raw,
  read,
  ref,
  show,
  spread,
  strong,
  table,
  text,
  underline,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const documentClass = define('document-class').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const [probListDecl, probList] = let_('prob-list', [
    {
      name: '圆格染色',
      nameEn: 'color',
      timeLimit: '1.0 秒',
      memoryLimit: '512 MiB',
      testCaseCount: '10',
      testCaseEqual: '是',
      year: '2023',
    },
    {
      name: '桂花树',
      nameEn: 'tree',
      type: '交互型',
      timeLimit: '0.5 秒',
      memoryLimit: '512 MiB',
      testCaseCount: '10',
      testCaseEqual: '是',
      year: '2023',
    },
    {
      name: '深搜',
      nameEn: 'dfs',
      type: '提交答案型',
      executable: inline`无`,
      input: inline(raw('dfs'), unsafeRaw.math`1~10`, raw('.in')),
      output: inline(raw('dfs'), unsafeRaw.math`1~10`, raw('.out')),
      testCaseCount: '10',
      testCaseEqual: '是',
      submitFileName: inline(raw('dfs'), unsafeRaw.math`1~10`, raw('.out')),
    },
  ])
  const [contestInfoDecl, contestInfo] = let_('contest-info', {
    name: '全国中老年信息学奥林匹克竞赛',
    nameEn: 'FCC ION 3202',
    round: '第一试',
    time: '时间：2023 年 7 月 24 日 08:00 ~ 13:00',
  })
  const [
    patternDecl,
    [
      init,
      title_2,
      problemTable,
      nextProblem,
      filename,
      currentFilename,
      currentSampleFilename,
      dataConstraintsTableArgs,
    ],
  ] = let_(
    [
      'init',
      'title',
      'problem-table',
      'next-problem',
      'filename',
      'current-filename',
      'current-sample-filename',
      'data-constraints-table-args',
    ],
    documentClass(contestInfo, probList),
  )
  return doc(
    importPackage('@preview/fuzzy-cnoi-statement:0.1.3', [documentClass]),
    probListDecl,
    contestInfoDecl,
    patternDecl,
    show(init),
    inline(call(title_2)),
    inline(
      call(problemTable, {
        extraRows: unsafeRaw.code<any>`(
    year: (                   // 对应的 field 名
      name: "年份",           // 显示的名字；可以用 content（调整字号等）
      wrap: text,             // 显示的样式：若题目的这一项是 str，则显示为 wrap(str)，否则会直接显示这一项。默认为 text。
      always-display: false,  // 是否总是显示：若为 false，则至少要有一个题目有这一项才会显示。默认为 false。
      default: "2023"         // 默认值，默认为“无”。你也可以传入一个函数，其接受一个参数，为当前题目的信息，返回一个 str 或 content。
    ),
    contest: (
      name: "赛事",
      wrap: text.with(fill: blue), // 你也可以在这里设置更小的字体
      always-display: true,
      default: "NOI"
    ),
    setter: (
      // name: text(size: 0.8em)[出题人], // 也许你需要更小的字号
      name: "出题人",
      always-display: true,
      default: p => { p.name-en + "的出题人" }
    ),
    foo: (
      name: "bar",
      wrap: text,
      default: "这一行不会显示"
    )
  )`,
        languages: [
          ['C++', 'cpp'],
          ['D++', 'dpp'],
        ],
        compileOptions: [['C++', '-O2 -std=c++20 -DOFFLINE_JUDGE']],
      }),
    ),
    m.lines(
      inline(strong(inline`注意事项（请仔细阅读）`)),
      m.enum(
        m.item(['文件名（程序名和输入输出文件名）必须使用英文小写。']),
        m.item(['C++ 中函数 main() 的返回值类型必须是 int，程序正常结束时的返回值必须是 0。']),
        m.item(['因违反以上两点而出现的错误或问题，申诉时一律不予受理。']),
        m.item(['若无特殊说明，结果的比较方式为全文比较（过滤行末空格及文末回车）。']),
        m.item(['选手提交的程序源文件必须不大于 100KB。']),
        m.item(['程序可使用的栈空间内存限制与题目的内存限制一致。']),
        m.item(['只提供 Linux 格式附加样例文件。']),
        m.item([
          '禁止在源代码中改变编译器参数（如使用 #pragma 命令），禁止使用系统结构相关指令（如内联汇编）和其他可能造成不公平的方法。',
        ]),
      ),
    ),
    inline(call(nextProblem)),
    m.heading(2, '题目描述'),
    inline`输入两个正整数 ${unsafeRaw.math`a, b`}，输出它们的和。`,
    m.lines(
      inline`你可以${strong(inline`强调一段带 ${unsafeRaw.math`f+or+mu+l+a`} 的文本`)}。用 ${raw('#underline')} 加 ${raw('``')}
来实现 ${underline(inline(raw('underlined raw text')))}。`,
      m.enum(m.item(['第一点']), m.item(['第二点'])),
    ),
    m.list(
      m.item(
        m.lines(
          '第一点',
          m.list(m.item(['列表可以嵌套']), m.item(['但目前，有序列表和无序列表的互相嵌套会有缩进上的问题。'])),
        ),
      ),
      m.item(m.lines('第二点', m.list(m.item(['第二点的第一点']), m.item(['第二点的第二点'])))),
    ),
    m.heading(2, '输入格式'),
    inline`从文件 ${call(currentFilename, 'in')} 中读入数据。`,
    inline`输入的第一行包含两个正整数 ${unsafeRaw.math`a, b`}，表示需要求和的两个数。`,
    m.heading(2, '输出格式'),
    inline`输出到文件 ${call(filename, inline`color.out`)} 中。`,
    inline`输出一行一个整数，表示 ${unsafeRaw.math`a+b`}。`,
    m.lines(m.heading(2, '样例1输入'), inline(raw({ block: true }, read(path('color1.in'))))),
    m.lines(m.heading(2, '样例1输出'), inline(raw({ block: true, lang: 'text' }, '13'))),
    m.heading(2, '样例1解释'),
    inline(labelled(figure({ caption: '凹包' }, inline(image({ width: pct(40) }, path('fig.png')))), label('aobao'))),
    inline`如${ref(label('aobao'))}，这是一个凹包。`,
    inline(unsafeRaw.code<any>`for (i,case) in range(2, 8).zip((
  $1 tilde 5$,
  $6 tilde 9$,
  $10 tilde 13$,
  $14 tilde 17$,
  $18 tilde 19$,
  $20$)){[
== 样例#{i+2}
见选手目录下的 #current-sample-filename(i, "in") 与 #current-sample-filename(i, "ans")。

这个样例满足测试点 #case 的条件限制。
]}`),
    m.heading(2, '数据范围'),
    inline`对于所有测试数据保证：${unsafeRaw.math`1 <= a,b <= 10^9`}。`,
    inline(
      figure(
        table(
          { columns: 4 },
          spread(dataConstraintsTableArgs),
          table.header(inline`测试点编号`, unsafeRaw.math`n,m <=`, unsafeRaw.math`q<=`, inline`特殊性质`),
          unsafeRaw.math`1 tilde 5`,
          unsafeRaw.math`300`,
          unsafeRaw.math`300`,
          table.cell({ rowspan: 2 }, inline`无`),
          unsafeRaw.math`6 tilde 9`,
          table.cell({ rowspan: 4 }, inline(unsafeRaw.math`10^5`)),
          unsafeRaw.math`2000`,
          unsafeRaw.math`10 tilde 13`,
          table.cell({ rowspan: 4 }, inline(unsafeRaw.math`10^5`)),
          inline`A`,
          unsafeRaw.math`14 tilde 17`,
          inline`B`,
          unsafeRaw.math`18 tilde 19`,
          table.cell({ rowspan: 2 }, inline`无`),
          unsafeRaw.math`20`,
          unsafeRaw.math`10^9`,
        ),
      ),
    ),
    '特殊性质 A: 你可以像上面这样创建复杂的表格。',
    inline(call(nextProblem)),
    inline(strong(inline`这是一道交互题。`)),
    m.lines(m.heading(2, '题目描述'), inline(lorem(50))),
    m.lines(m.heading(2, '实现细节'), inline`请确保你的程序开头有 ${raw('#include "tree.h"')}。`),
    inline(raw({ block: true, lang: 'cpp' }, 'int query(int x, int y);\nvoid answer(std::vector<int> ans);')),
    inline(raw({ block: true, lang: 'bash' }, 'g++ count.cpp -c -O2 -std=c++14 -lm && g++ count.o grader.o -o count')),
    '我能吞下玻璃而不伤身体。',
    m.list(
      m.item(
        m.lines(
          '赵钱孙李周吴郑王，冯陈楮卫蒋沈韩：',
          m.list(
            m.item(m.lines('杨朱秦尤许何吕施张孔。', m.list(m.item(['曹严华金魏陶姜戚谢。'])))),
            m.item(['邹喻柏水窦章云苏潘葛奚。']),
          ),
        ),
      ),
      m.item(['范彭郎鲁韦昌马苗凤花，方俞任袁柳酆鲍史唐费廉岑薛雷。']),
      m.item(['贺倪汤滕殷罗毕郝邬安常乐于时傅皮卞齐康伍余，元卜顾孟平黄和穆萧尹姚邵湛汪，祁毛禹狄米贝明臧计伏成戴。']),
    ),
    m.lines(m.heading(2, '评分标准'), inline(lorem(50))),
    inline(lorem(100)),
    m.lines(m.heading(2, '数据范围'), inline(lorem(50))),
    m.lines(inline(call(nextProblem)), m.heading(2, '题目描述'), inline(lorem(50))),
    m.lines(
      m.heading(2, '输入格式'),
      inline`从文件 ${call(filename, inline`dfs${unsafeRaw.math`1~10`}.in`)} 中读入数据。`,
    ),
    inline(lorem(50)),
    m.lines(
      m.heading(2, '输出格式'),
      inline`输出到文件 ${call(filename, inline`dfs${unsafeRaw.math`1~10`}.out`)} 中。`,
    ),
    inline(lorem(50)),
    m.lines(m.heading(2, '数据范围'), inline`对于所有测试数据保证：${unsafeRaw.math`1 <= n <= 10^5`}。`),
  )
}
