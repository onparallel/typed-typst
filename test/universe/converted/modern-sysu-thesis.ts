// Converted from test/universe/corpus/modern-sysu-thesis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  align,
  bibliography,
  center,
  contentBlock,
  datetime,
  define,
  doc,
  external,
  figure,
  h,
  horizon,
  image,
  importPackage,
  inline,
  label,
  labelled,
  ltr,
  m,
  path,
  pct,
  pt,
  raw,
  ref,
  show,
  space,
  stack,
  table,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const thesis = external('thesis')
  const thesis_doc = define('doc')
    .named('bibliography', T.any, null)
    .named('pages', T.any, null)
    .named('thesis-info', T.any, null)
    .named('twoside', T.any, null)
    .returns(T.any)
    .external(thesis)
  return doc(
    m.lines(
      importPackage('@preview/modern-sysu-thesis:0.4.1', [{ item: 'postgraduate', as: thesis }]),
      unsafeRaw.markup`#import thesis: abstract, acknowledgement, appendix, contents`,
    ),
    show(
      thesis_doc.with({
        thesisInfo: {
          title: ['基于 Typst 的', '中山大学学位论文模板'],
          titleEn: 'A Typst Template for SYSU thesis',
          author: { sno: '1xxxxxxx', name: '张三', grade: '2024', department: '某学院', major: '某专业' },
          supervisor: ['李四', '教授'],
          submitDate: datetime.today(),
          discipline: '工学',
          degree: '博士',
        },
        bibliography: bibliography.with(path('ref.bib')),
        pages: { cover: false, appendix: true },
        twoside: false,
      }),
    ),
    m.heading(1, unsafeRaw.code<any>`contents(zh: "导 论", en: "Introduction")`),
    m.heading(2, unsafeRaw.code<any>`contents(zh: "列表", en: "List")`),
    m.heading(3, unsafeRaw.code<any>`contents(zh: "无序列表", en: "Unordered list")`),
    m.list(
      m.item(['无序列表项一']),
      m.item(m.lines('无序列表项二', m.list(m.item(['无序子列表项一']), m.item(['无序子列表项二'])))),
    ),
    m.heading(3, unsafeRaw.code<any>`contents(zh: "有序列表", en: "Ordered list")`),
    m.enum(
      m.item(['有序列表项一']),
      m.item(m.lines('有序列表项二', m.enum(m.item(['有序子列表项一']), m.item(['有序子列表项二'])))),
    ),
    m.heading(3, unsafeRaw.code<any>`contents(zh: "术语列表", en: "List of terms")`),
    m.terms(m.term(['术语一'], ['术语解释']), m.term(['术语二'], ['术语解释'])),
    m.heading(2, unsafeRaw.code<any>`contents(zh: "图表", en: "Figures")`),
    inline`引用${ref(label('tbl:timing'))}，引用${ref(label('tbl:timing-tlt'))}，以及${ref(label('fig:sysu-logo'))}。引用图表时，表格和图片分别需要加上 ${raw('tbl:')}和${raw('fig:')}
前缀才能正常显示编号。`,
    inline(
      align(
        center,
        stack(
          { dir: ltr },
          inline(
            space,
            labelled(
              [
                figure(
                  { caption: inline`常规表` },
                  table(
                    { align: add(center, horizon), columns: 4 },
                    inline`t`,
                    inline`1`,
                    inline`2`,
                    inline`3`,
                    inline`y`,
                    inline`0.3s`,
                    inline`0.4s`,
                    inline`0.8s`,
                  ),
                ),
                space,
              ],
              label('timing'),
            ),
            space,
          ),
          inline(space, h(pt(50)), space),
          inline(
            space,
            labelled(
              [
                figure(
                  { caption: inline`三线表` },
                  table(
                    { columns: 4, stroke: null },
                    table.hline(),
                    inline`t`,
                    inline`1`,
                    inline`2`,
                    inline`3`,
                    table.hline({ stroke: pt(0.5) }),
                    inline`y`,
                    inline`0.3s`,
                    inline`0.4s`,
                    inline`0.8s`,
                    table.hline(),
                  ),
                ),
                space,
              ],
              label('timing-tlt'),
            ),
            space,
          ),
        ),
      ),
    ),
    inline(
      labelled(
        [figure({ caption: inline`图片测试` }, image({ width: pct(20) }, path('images/sysu_logo.svg'))), space],
        label('sysu-logo'),
      ),
    ),
    m.lines(
      m.heading(2, unsafeRaw.code<any>`contents(zh: "数学公式", en: "Mathematical formula")`),
      inline`可以像 Markdown 一样写行内公式 ${unsafeRaw.math`x + y`}，以及带编号的行间公式：`,
    ),
    inline(labelled([unsafeRaw.math.block`phi.alt := (1 + sqrt(5)) / 2`, space], label('ratio'))),
    inline`引用数学公式需要加上 ${raw('eqt:')} 前缀，则由${ref(label('eqt:ratio'))}，我们有：`,
    inline(unsafeRaw.math.block`F_n = floor(1 / sqrt(5) phi.alt^n)`),
    inline`我们也可以通过 ${raw('<->')} 标签来标识该行间公式不需要编号`,
    inline(labelled([unsafeRaw.math.block`y = integral_1^2 x^2 dif x`, space], label('-'))),
    '而后续数学公式仍然能正常编号。',
    inline(unsafeRaw.math.block`F_n = floor(1 / sqrt(5) phi.alt^n)`),
    m.heading(2, unsafeRaw.code<any>`contents(zh: "参考文献", en: "References")`),
    inline`可以像这样引用参考文献：图书${contentBlock(inline(ref(label('蒋有绪1998'))))}和会议${contentBlock(inline(ref(label('中国力学学会1990'))))}。`,
    m.heading(2, unsafeRaw.code<any>`contents(zh: "代码块", en: "Code block")`),
    inline`代码块支持语法高亮。引用时需要加上 ${raw('lst:')} ${ref(label('lst:code'))}`,
    inline(
      labelled(
        [
          figure({ caption: inline`代码块` }, raw({ block: true, lang: 'py' }, 'def add(x, y):\n  return x + y')),
          space,
        ],
        label('code'),
      ),
    ),
    m.heading(1, unsafeRaw.code<any>`contents(zh: "正　文", en: "Main body")`),
    m.heading(2, unsafeRaw.code<any>`contents(zh: "正文子标题", en: "Subtitle of main body")`),
    m.heading(3, unsafeRaw.code<any>`contents(zh: "正文子子标题", en: "Subsubtitle of main body")`),
    '正文内容',
    unsafeRaw.markup`#show: appendix`,
    m.heading(1, unsafeRaw.code<any>`contents(zh: "附录", en: "Appendix")`),
    m.heading(2, '附录章节题'),
    m.lines(m.heading(3, '附录子标题'), m.heading(4, '附录子子标题')),
    inline`附录内容，这里也可以加入图片，例如${ref(label('fig:appendix-img'))}。`,
    inline`从正文内容里复制公式，以审查公式编号
${unsafeRaw.math.block`F_n = floor(1 / sqrt(5) phi.alt^n)`}`,
    inline(
      labelled(
        [figure({ caption: inline`图片测试` }, image({ width: pct(20) }, path('images/sysu_logo.svg'))), space],
        label('appendix-img'),
      ),
    ),
    inline(unsafeRaw.code<any>`acknowledgement[
  感谢 NJU-LUG，感谢 NJUThesis LaTeX 模板。
]`),
  )
}
