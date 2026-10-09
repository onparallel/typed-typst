// Converted from test/universe/corpus/modern-buaa-thesis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  blocks,
  center,
  define,
  doc,
  external,
  figure,
  fr,
  image,
  importPackage,
  inline,
  label,
  labelled,
  let_,
  linebreak,
  m,
  pagebreak,
  path,
  pct,
  pt,
  read,
  ref,
  show,
  space,
  strong,
  symbol,
  table,
  text,
  top,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const abstract = external('abstract')
  const abstractEn = external('abstract-en')
  const fontType = external('font-type')
  const multicite = define('multicite').pos('arg1', T.content).returns(T.any).external()
  const pseudocodeList = define('pseudocode-list')
    .pos('arg1', T.content)
    .named('booktabs', T.any, null)
    .named('full', T.any, null)
    .named('numbered-title', T.content, [])
    .returns(T.any)
    .external()
  const thesis = external('thesis')
  const abstract_with = define('with').named('keyword', T.any, null).returns(T.any).external(abstract)
  const abstractEn_with = define('with').named('keyword', T.any, null).returns(T.any).external(abstractEn)
  const thesis_with = define('with')
    .named('abstract', T.any, null)
    .named('abstract-en', T.any, null)
    .named('achievement', T.content, [])
    .named('acknowledgements', T.content, [])
    .named('author', T.any, null)
    .named('bibliography', T.any, null)
    .named('college', T.any, null)
    .named('cv', T.content, [])
    .named('date', T.any, null)
    .named('degree', T.any, null)
    .named('lib-number', T.content, [])
    .named('major', T.any, null)
    .named('stu-id', T.content, [])
    .named('teacher', T.any, null)
    .named('teacher-degree', T.any, null)
    .named('title', T.any, null)
    .named('type', T.any, null)
    .returns(T.any)
    .external(thesis)
  const fontType_kai = external('kai', fontType)
  const [abstractZhTextDecl, abstractZhText] = let_(
    'abstract-zh-text',
    blocks(show(abstract_with({ keyword: ['关键词 1', '关键词 2'] })), '这是我们的中文摘要'),
  )
  const [abstractEnTextDecl, abstractEnText] = let_(
    'abstract-en-text',
    blocks(show(abstractEn_with({ keyword: ['Keyword 1', 'Keyword 2'] })), 'This is our English abstract.'),
  )
  return doc(
    inline`﻿${importPackage('@preview/modern-buaa-thesis:0.4.0', [abstract, abstractEn, fontType, multicite, pseudocodeList, thesis])}`,
    abstractZhTextDecl,
    abstractEnTextDecl,
    show(
      thesis_with({
        type: 'doctor',
        title: { zh: inline`博士生毕业论文的题目`, en: inline`A Title for PhD Thesis` },
        author: { zh: inline`张三`, en: inline`San Zhang` },
        teacher: { zh: inline`李四`, en: inline`Si Li` },
        teacherDegree: { zh: inline`教授`, en: inline`Prof.` },
        college: { zh: inline`计算机学院`, en: inline`School of Computer Science and Engineering` },
        major: {
          discipline: inline`计算机体系结构${space}`,
          direction: inline`模型分布式训练`,
          disciplineFirst: inline`计算机科学与技术`,
          disciplineDirection: inline`计算机体系结构`,
        },
        date: {
          start: inline`2021年09月01日`,
          end: inline`2026年06月30日`,
          summit: inline`2026年06月10日`,
          defense: inline`2026年06月10日`,
        },
        degree: { zh: '工学博士', en: 'Doctor of Philosophy' },
        libNumber: inline`TP317`,
        stuId: inline`BY2406100`,
        abstract: abstractZhText,
        abstractEn: abstractEnText,
        bibliography: read(path('ref.bib')),
        achievement: inline`${space}在国际会议上发表了多篇论文，
参与了多个开源项目的开发，${space}`,
        acknowledgements: blocks('感谢我的导师李四教授的指导和支持', '感谢我的家人和朋友的鼓励和帮助'),
        cv: blocks(
          '2021年09月 - 2026年06月：北京航空航天大学，计算机科学与技术专业，博士研究生',
          '2017年09月 - 2021年06月：北京航空航天大学，计算机科学与技术专业',
        ),
      }),
    ),
    m.heading(1, '绪论'),
    m.heading(2, '什么是 Typst？'),
    'Typst 是一种现代的文档排版语言，旨在简化文档的编写和排版过程。它结合了编程的灵活性和传统排版的美观，使得用户可以轻松创建高质量的文档。',
    m.heading(2, '为什么使用 Typst？'),
    '使用 Typst 的原因包括：',
    '1、简洁的语法：Typst 的语法设计简洁明了，易于学习和使用。',
    '2、强大的功能：Typst 提供了丰富的功能，如数学公式支持、图形绘制、表格处理等，能够满足各种文档需求。',
    '3、可扩展性：Typst 支持自定义函数和模块，使得用户可以根据自己的需求扩展功能。',
    inline(pagebreak()),
    m.heading(1, '支持的文档元素'),
    m.heading(2, '图片引用'),
    inline`如${ref(label('fig:logo'))} 所示，我们在文档中插入一个图片，并为其添加了一个标题。`,
    inline(
      labelled(
        [figure({ caption: '这是一个北航的Logo' }, image({ width: pct(30) }, path('logo.png'))), space],
        label('fig:logo'),
      ),
    ),
    m.heading(2, '表格引用'),
    inline`如${ref(label('tab:three-line'))} 所示，我们在文档中插入一个三线表格，并为其添加了一个标题。`,
    inline(
      labelled(
        [
          figure(
            { caption: '这是一个三线表' },
            table(
              { stroke: null, columns: [fr(1), fr(1), fr(1), fr(1)], align: center },
              table.hline(),
              table.header(
                inline(strong(inline`标题1`)),
                inline(strong(inline`标题2`)),
                inline(strong(inline`标题3`)),
                inline(strong(inline`标题4`)),
              ),
              table.hline({ stroke: pt(0.5) }),
              inline`内容1`,
              inline`内容1`,
              inline`内容1`,
              inline`内容1`,
              inline`内容2`,
              inline`内容2`,
              inline`内容2`,
              inline`内容2`,
              inline`内容3`,
              inline`内容3`,
              inline`内容3`,
              inline`内容3`,
              inline`内容4`,
              inline`内容4`,
              inline`内容4`,
              inline`内容4`,
              table.hline(),
            ),
          ),
          space,
        ],
        label('tab:three-line'),
      ),
    ),
    m.heading(2, '数学公式'),
    inline`这是一个行内公式：${unsafeRaw.math`E = m c^2`}`,
    inline`这是一个行间公式：${ref(label('mc2'))}：`,
    inline(labelled([unsafeRaw.math.block`E = m c^2`, space], label('mc2'))),
    m.heading(2),
    inline(
      labelled(
        [
          figure(
            { kind: 'algorithm', placement: top },
            pseudocodeList(
              { booktabs: true, numberedTitle: inline`一级设备分组算法`, full: true },
              blocks(
                m.list(
                  m.item([
                    strong(
                      inline`输入：设备集合${unsafeRaw.math`D = {d_1, d_2, dots, d_n}`}，网络评价指标集合${unsafeRaw.math`P_t`}，网络同质性阈值${unsafeRaw.math`epsilon_t`}`,
                    ),
                  ]),
                  m.item([strong(inline`输出：一级设备组集合${unsafeRaw.math`cal(G)_("FG")`}`)]),
                ),
                m.enum(
                  m.item([
                    '将每一台设备初始化为一个独立的候选组',
                    unsafeRaw.math`cal(G) <- {{d_1}, {d_2}, dots, {d_n}}`,
                  ]),
                  m.item([symbol('/'), symbol('/'), space, text({ font: fontType_kai }, inline`用于存储候选组对`)]),
                  m.item(['初始化最大堆', unsafeRaw.math`v_n`]),
                  m.item([
                    symbol('/'),
                    symbol('/'),
                    space,
                    text({ font: fontType_kai }, inline`遍历任意两个不同的候选组`),
                  ]),
                  m.item(
                    m.lines(
                      inline(
                        strong(inline`for`),
                        space,
                        unsafeRaw.math`(G_i, G_j in cal(G))`,
                        space,
                        strong(inline`do`),
                      ),
                      m.enum(
                        m.item([
                          '计算组间平均网络代价',
                          unsafeRaw.math`overline(p_t) (G_i, G_j) <- 1 / (|G_i| dot |G_j|) sum_(u in G_i) sum_(v in G_j) p_t(d_u, d_v)`,
                        ]),
                        m.item([
                          symbol('/'),
                          symbol('/'),
                          space,
                          text({ font: fontType_kai }, inline`代价越小优先级越高`),
                        ]),
                        m.item([
                          '将候选组对',
                          unsafeRaw.math`(G_i, G_j)`,
                          '插入堆',
                          unsafeRaw.math`v_n`,
                          '，堆键设为',
                          unsafeRaw.math`-overline(p_t) (G_i, G_j)`,
                        ]),
                      ),
                    ),
                  ),
                  m.item([strong(inline`end`)]),
                  m.item([linebreak()]),
                  m.item(
                    m.lines(
                      inline(strong(inline`while`), space, unsafeRaw.math`v_n != emptyset`, space, strong(inline`do`)),
                      m.enum(
                        m.item([
                          '从堆',
                          unsafeRaw.math`v_n`,
                          '中取出当前优先级最高的候选组对',
                          unsafeRaw.math`(G_i, G_j)`,
                        ]),
                        m.item(
                          m.lines(
                            inline`${strong(inline`if`)} ${unsafeRaw.math`G_i in.not cal(G)`} || ${unsafeRaw.math`G_j in.not cal(G)`}
${strong(inline`then`)}`,
                            m.enum(
                              m.item([
                                symbol('/'),
                                symbol('/'),
                                space,
                                text({ font: fontType_kai }, inline`跳过该候选（过期条目），继续下一轮`),
                              ]),
                              m.item([strong(inline`continue`)]),
                            ),
                          ),
                        ),
                        m.item([strong(inline`end`)]),
                        m.item([
                          '计算组间平均网络代价',
                          unsafeRaw.math`overline(p_t) (G_i, G_j) <- 1 / (|G_i| dot |G_j|) sum_(u in G_i) sum_(v in G_j) p_t(d_u, d_v)`,
                        ]),
                        m.item(
                          m.lines(
                            inline(
                              strong(inline`if`),
                              space,
                              unsafeRaw.math`overline(p_t) (G_i, G_j) <= epsilon_t`,
                              space,
                              strong(inline`then`),
                            ),
                            m.enum(
                              m.item([
                                symbol('/'),
                                symbol('/'),
                                space,
                                text({ font: fontType_kai }, inline`合并两组，生成新组`),
                              ]),
                              m.item([unsafeRaw.math`G_("new") <- G_i union G_j`]),
                              m.item([
                                symbol('/'),
                                symbol('/'),
                                space,
                                text({ font: fontType_kai }, inline`更新组集合`),
                              ]),
                              m.item([unsafeRaw.math`cal(G) <- (cal(G) minus {G_i, G_j}) union {G_("new") }`]),
                              m.item([
                                symbol('/'),
                                symbol('/'),
                                space,
                                text({ font: fontType_kai }, inline`任意其余组`),
                              ]),
                              m.item(
                                m.lines(
                                  inline(
                                    strong(inline`for`),
                                    space,
                                    unsafeRaw.math`G_k in cal(G), G_k != G_("new")`,
                                    space,
                                    strong(inline`do`),
                                  ),
                                  m.enum(
                                    m.item([
                                      symbol('/'),
                                      symbol('/'),
                                      space,
                                      text(
                                        { font: fontType_kai },
                                        inline`计算${unsafeRaw.math`G_("new")`}与${unsafeRaw.math`G_k`}之间的平均网络代价`,
                                      ),
                                    ]),
                                    m.item([
                                      '计算',
                                      unsafeRaw.math`overline(p_t) (G_("new"), G_k) <- 1 / (|G_("new")| dot |G_k|) sum_(u in G_("new")) sum_(v in G_k) p_t(d_u, d_v)`,
                                    ]),
                                    m.item([
                                      '将候选组对',
                                      unsafeRaw.math`(G_("new"), G_k)`,
                                      '插入堆',
                                      unsafeRaw.math`v_n`,
                                      '，堆键设为',
                                      unsafeRaw.math`-overline(p_t) (G_("new"), G_k)`,
                                    ]),
                                  ),
                                ),
                              ),
                              m.item([strong(inline`end`)]),
                            ),
                          ),
                        ),
                        m.item([strong(inline`end`)]),
                      ),
                    ),
                  ),
                  m.item([strong(inline`end`)]),
                  m.item([linebreak()]),
                  m.item([
                    symbol('/'),
                    symbol('/'),
                    space,
                    text({ font: fontType_kai }, inline`仅保留最终形成的顶层组集合`),
                  ]),
                  m.item([unsafeRaw.math`cal(G)_("FG") <- cal(G)`]),
                  m.item([strong(inline`return`), space, unsafeRaw.math`cal(G)_("FG")`]),
                ),
              ),
            ),
          ),
          space,
        ],
        label('algo:2:first-level-group'),
      ),
    ),
    inline`这是我们定义的${ref(label('algo:2:first-level-group'))}。`,
    m.heading(2, '文献引用'),
    inline`让我们引用两个文献吧 ${multicite(inline(ref(label('heDeepResidualLearning2016')), space, ref(label('vaswaniAttentionAllYou2023'))))}！`,
    inline(pagebreak()),
  )
}
