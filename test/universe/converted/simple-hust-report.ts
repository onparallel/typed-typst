// Converted from test/universe/corpus/simple-hust-report.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  blocks,
  datetime,
  define,
  doc,
  emph,
  external,
  figure,
  fr,
  image,
  importPackage,
  inline,
  label,
  labelled,
  link,
  m,
  path,
  pct,
  raw,
  ref,
  show,
  space,
  strong,
  table,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const pseudocodeList = define('pseudocode-list')
    .pos('arg1', T.content)
    .named('booktabs', T.any, null)
    .named('numbered-title', T.content, [])
    .returns(T.any)
    .external()
  const report = external('report')
  const report_with = define('with')
    .named('appendix', T.content, [])
    .named('bibliography-file', T.any, null)
    .named('class-name', T.any, null)
    .named('course-name', T.any, null)
    .named('date', T.any, null)
    .named('header-text', T.any, null)
    .named('instructor', T.any, null)
    .named('logo', T.any, null)
    .named('name', T.any, null)
    .named('school', T.any, null)
    .named('student-id', T.any, null)
    .named('title', T.any, null)
    .named('type', T.any, null)
    .returns(T.any)
    .external(report)
  return doc(
    m.lines(
      importPackage('@preview/simple-hust-report:0.1.1', [pseudocodeList, report]),
      show(
        report_with({
          logo: null,
          type: '课程实验报告',
          courseName: ['课程名称', '人工智能导论'],
          title: ['实验题目', '基于CNN的动物识别系统'],
          className: 'CS2410',
          studentId: 'U202488888',
          name: '张三',
          instructor: '李四',
          date: datetime.today().display('[year]年[month]月[day]日'),
          school: '计算机科学与技术学院',
          headerText: '华中科技大学课程实验报告',
          appendix: blocks(m.heading(1, '原始代码'), m.heading(2, '模块一')),
          bibliographyFile: bibliography(path('ref.bib')),
        }),
      ),
    ),
    m.lines(m.heading(1, '引言'), inline`用 ${raw('=')} 可以区分多级标题。`),
    inline`用 ${raw('*')} 包裹可以${strong(inline`加粗`)}关键字，用 ${raw('_')} 包裹可以${emph(inline`强调`)}关键词。`,
    m.lines(
      m.heading(2, '有序列表'),
      inline`有序列表以 ${raw('+')} 开头，`,
      m.enum(m.item(['第一']), m.item(['第二'])),
    ),
    m.lines(
      m.heading(2, '无序列表'),
      inline`无序列表以 ${raw('-')}开头,列表均可利用缩进进行嵌套。例如`,
      m.list(m.item(m.lines('One', m.list(m.item(['这里是子列表']), m.item(['111'])))), m.item(['Two'])),
    ),
    m.lines(
      m.heading(1, '第一章'),
      '所有图片、表格、公式、伪代码均会按照“章节-序号”自动编号。',
      m.heading(2, '图片插入'),
      inline`插入图片的格式如下,可在figure之后用${raw('< >')}包裹对figure的命名，然后用${raw('@name')}的方式来引用这个figure，就像这样${ref(label('HUST'))}，或者${ref(label('this_is_a_table'))}
${labelled(figure({ caption: '华中科技大学(黑)' }, image({ width: pct(80) }, path('/images/HUSTBlack.svg'))), label('HUST'))}`,
    ),
    m.lines(
      m.heading(2, '表格插入'),
      inline`表格的基本用法如下，
${labelled(figure({ caption: '这里是表格的名字' }, table({ columns: [fr(1), fr(2), fr(1)] }, inline`1`, inline`2`, inline`3`, inline`a`, inline`b`, inline`c`)), label('this_is_a_table'))}`,
      m.heading(2, '公式插入'),
      inline`行内公式的插入如下,直接用${raw('$')}包裹即可，例如${unsafeRaw.math`F = m a`}和${unsafeRaw.math`O(N^2)`}, ${unsafeRaw.math`cal(O)(N log N)`},单个字母间的空格表示相乘。用${raw('""')}包裹表示以原文呈现。`,
    ),
    inline`单行公式的插入,在开头${raw('$')}之后和结尾${raw('$')}之前多一个空格即可。`,
    inline(unsafeRaw.math.block`T(n) = cases(
    1 & "if" n = 1,
    2T(n /2) + n & "if" n >= 2
  )`),
    m.lines(
      m.heading(2, '代码插入'),
      m.heading(3, '伪代码插入'),
      inline`插入伪代码的格式如下，用有序列表来实现缩进，用${raw('*')}包裹关键词实现加粗。伪代码格式的实现调用了 lovelace的库 。更多资料请${link('https://typst.app/universe/package/lovelace/', inline`点击这里`)}。`,
    ),
    inline(
      labelled(
        figure(
          { kind: 'algorithm', supplement: 'Algorithm' },
          pseudocodeList(
            { booktabs: true, numberedTitle: inline`Quick Sort` },
            blocks(
              m.enum(
                m.item([
                  strong(inline`Input:`),
                  space,
                  'Array',
                  space,
                  unsafeRaw.math`A`,
                  ', low',
                  space,
                  unsafeRaw.math`p`,
                  ', high',
                  space,
                  unsafeRaw.math`r`,
                ]),
                m.item([strong(inline`Output:`), space, 'Sorted Array', space, unsafeRaw.math`A`]),
                m.item(
                  m.lines(
                    inline(strong(inline`if`), space, unsafeRaw.math`p < r`, space, strong(inline`then`)),
                    m.enum(
                      m.item([
                        unsafeRaw.math`q =`,
                        space,
                        strong(inline`Partition`),
                        '(',
                        unsafeRaw.math`A, p, r`,
                        ')',
                      ]),
                      m.item([strong(inline`QuickSort`), '(', unsafeRaw.math`A, p, q-1`, ')']),
                      m.item([strong(inline`QuickSort`), '(', unsafeRaw.math`A, q+1, r`, ')']),
                    ),
                  ),
                ),
                m.item([strong(inline`end if`)]),
                m.item([strong(inline`return`)]),
              ),
            ),
          ),
        ),
        label('quick_sort'),
      ),
    ),
    inline`如果导入了参考文献，可以直接使用${raw('@')}来进行访问，例如 ${ref(label('clrs'))} 这样，被引用到的文献会出现在参考文献的列表中。`,
    m.lines(
      m.heading(3, '代码块和行内代码插入'),
      inline`代码块的格式如下
${raw({ block: true, lang: 'cpp' }, '#include<iostream>\nint main() {\n  cout << "hello,world!";\n}')}`,
    ),
    inline(raw({ block: true, lang: 'python' }, 'def helloWorld():\n  print("hello,world!")\n\nhelloWolrd()')),
    inline`除此之外，还可以利用“ \` ”反引号包裹来实现行内代码的效果，例如${raw('print()')}`,
    m.lines(m.heading(1, '第二章'), inline`更多使用方法请查询${link('https://typst.app/docs/', inline`官方文档`)}。`),
  )
}
