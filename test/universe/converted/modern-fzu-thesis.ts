// Converted from test/universe/corpus/modern-fzu-thesis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  align,
  bibliography,
  blocks,
  call,
  center,
  contentBlock,
  datetime,
  define,
  doc,
  external,
  figure,
  h,
  heading,
  horizon,
  image,
  importPackage,
  inline,
  label,
  labelled,
  let_,
  link,
  ltr,
  m,
  parbreak,
  path,
  pct,
  pt,
  raw,
  ref,
  show,
  space,
  stack,
  strong,
  table,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const documentclass = define('documentclass')
    .named('bibliography', T.any, null)
    .named('info', T.any, null)
    .returns(T.any)
    .external()
  const zebraw = external('zebraw')
  const pseudocodeList = define('pseudocode-list')
    .pos('arg1', T.content)
    .named('booktabs', T.any, null)
    .named('numbered-title', T.content, [])
    .returns(T.any)
    .external()
  const [
    patternDecl,
    [
      twoside,
      doc_2,
      preface,
      mainmatter,
      appendix,
      fontsDisplayPage,
      cover,
      declPage,
      abstract,
      abstractEn,
      bilingualBibliography,
      outlinePage,
      listOfFigures,
      listOfTables,
      notation,
      acknowledgement,
    ],
  ] = let_(
    [
      'twoside',
      'doc',
      'preface',
      'mainmatter',
      'appendix',
      'fonts-display-page',
      'cover',
      'decl-page',
      'abstract',
      'abstract-en',
      'bilingual-bibliography',
      'outline-page',
      'list-of-figures',
      'list-of-tables',
      'notation',
      'acknowledgement',
    ],
    documentclass({
      info: {
        title: ['基于DALI协议的', '照明控制系统'],
        titleEn: 'My Title in English',
        grade: '20XX',
        studentId: '1234567890',
        author: '张三',
        authorEn: 'Ming Xing',
        department: '某学院',
        departmentEn: 'School of Chemistry and Chemical Engineering',
        major: '某专业',
        majorEn: 'Chemistry',
        submitDate: datetime.today(),
      },
      bibliography: bibliography.with(path('ref.bib')),
    }),
  )
  return doc(
    importPackage('@preview/modern-fzu-thesis:0.1.0', [documentclass]),
    unsafeRaw.markup`#let place-sign(align: center + horizon, dx: 0pt, dy: 0pt, ..args, body) = {
  sym.zws
  place(align, dx: dx, dy: dy, ..args)[#box(body)]
}`,
    patternDecl,
    show(doc_2),
    inline(call(cover)),
    inline(
      call(declPage, {
        studentSign: unsafeRaw.code<any>`place-sign(align: horizon, dx: -15pt, dy: 3pt)[#image("images/sign.png", height: 1.5cm)]`,
        teacherSign: unsafeRaw.code<any>`place-sign(align: horizon, dx: -15pt, dy: 3pt)[#image("images/sign.png", height: 1.5cm)]`,
      }),
    ),
    show(preface),
    inline(
      call(
        abstract,
        { keywords: ['我', '就', '测试用', '关键词'] },
        blocks(
          '随着人民生活水平的提高和光源的发展，人们对照明的要求越来越高，要求利用灯光营造和谐的气氛、舒适的环境，创造一种动态的效果，以及操作上的简便，这样人们对照明的要求越来越高，传统的建筑照明受到了时代的强烈冲击。同时，由于能源有限，建设“节约型社会”的观念得到了人们的认同。据有关资料统计，目前世界上总发电量的25%用于照明，并且社会对照明智能化和绿色化的要求也越加迫切。',
          '智能照明控制系统，就是根据某一区域的功能、时段，室内光亮度或该区域的用途，用计算机技术和通讯技术及数字调光技术相结合，使照明系统自动化。智能照明系统的种类有许多种，目前发展与推广速度较快的技术，就是本文所介绍的基于DALI（Digital Addressable Lighting Interface）协议的智能照明技术。',
          parbreak(),
        ),
      ),
    ),
    inline(
      call(
        abstractEn,
        { keywords: ['Dummy', 'Keywords', 'Here', 'It Is'] },
        blocks(
          'With the improvement of people’s living standard and the development of lighting equipment, the demand for advanced lighting is also escalating. This happens for many reasons, for example, people pursue an atmosphere of harmony, a comfortable living environment and the creation of dynamic effect by using lamplight. As a result of the expanded demand, traditional architecture illumination has suffered a blow. Meanwhile, because of the limited energy, the conception of Thrift Society is widely recognized. According to related statistics, a quarter of the world’s total electricity generation is used for lighting. On the part of the society, the demand for green lighting and intelligent lighting is also becoming increasingly urgent',
          'For a particular region, in conformity with it’s function, the period of time, it’s indoor brightness and it’s purpose of use, the intelligent lighting control system can automatize the lighting system with the integrated technologies of computer, communication and digital light regulation. The sorts of the intelligent lighting system can be various, and the technology introduced in this paper, which is based on DALI, is currently developing and promoting rapidly.',
          '……',
          parbreak(),
        ),
      ),
    ),
    inline(call(outlinePage)),
    show(mainmatter),
    m.heading(1, '使用指南'),
    m.heading(2, '列表'),
    m.heading(3, '无序列表'),
    m.list(
      m.item(['无序列表项一']),
      m.item(m.lines('无序列表项二', m.list(m.item(['无序子列表项一']), m.item(['无序子列表项二'])))),
    ),
    m.heading(3, '有序列表'),
    m.enum(
      m.item(['有序列表项一']),
      m.item(m.lines('有序列表项二', m.enum(m.item(['有序子列表项一']), m.item(['有序子列表项二'])))),
    ),
    m.heading(3, '术语列表'),
    m.terms(m.term(['术语一'], ['术语解释']), m.term(['术语二'], ['术语解释'])),
    m.heading(2, '图表'),
    inline`引用${ref(label('tbl:timing'))}，引用${ref(label('tbl:timing-tlt'))}，以及${ref(label('fig:nju-logo'))}。引用图表时，表格和图片分别需要加上 ${raw('tbl:')}和${raw('fig:')}
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
        [figure({ caption: inline`图片测试` }, image({ width: pct(20) }, path('images/fzu_logo.svg'))), space],
        label('nju-logo'),
      ),
    ),
    m.heading(2, '数学公式'),
    inline`可以像 Markdown 一样写行内公式 ${unsafeRaw.math`x + y`}，以及带编号的行间公式：`,
    inline(labelled([unsafeRaw.math.block`phi.alt := (1 + sqrt(5)) / 2`, space], label('ratio'))),
    inline`引用数学公式需要加上 ${raw('eqt:')} 前缀，则由 ${ref(label('eqt:ratio'))}，我们有：`,
    inline(unsafeRaw.math.block`F_n = floor(1 / sqrt(5) phi.alt^n)`),
    inline`我们也可以通过 ${raw('<->')} 标签来标识该行间公式不需要编号`,
    inline(labelled([unsafeRaw.math.block`y = integral_1^2 x^2 dif x`, space], label('-'))),
    '而后续数学公式仍然能正常编号。',
    inline(unsafeRaw.math.block`F_n = floor(1 / sqrt(5) phi.alt^n)`),
    m.heading(2, '参考文献'),
    inline`可以像这样引用参考文献：图书${contentBlock(inline(ref(label('蒋有绪1998'))))}和会议${contentBlock(inline(ref(label('中国力学学会1990'))))}。`,
    m.heading(2, '代码块'),
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
    inline`你也可以使用 ${ref(label('lst:typst-code'))} 引入第三方模块来支持更丰富的代码块显示`,
    m.lines(importPackage('@preview/zebraw:0.5.4', [zebraw]), show(zebraw)),
    inline(
      labelled(
        [
          figure(
            { caption: inline`第三方模块代码` },
            raw({ block: true, lang: 'typst' }, '#import "@preview/zebraw:0.5.4": zebraw\n#show: zebraw'),
          ),
          space,
        ],
        label('typst-code'),
      ),
    ),
    inline(
      labelled(
        [
          figure(
            { caption: inline`zebraw渲染的代码块` },
            raw({ block: true, lang: 'py' }, 'def add(x, y):\n  return x + y'),
          ),
          space,
        ],
        label('zebraw-code'),
      ),
    ),
    inline`你也可以使用 ${ref(label('lst:lovelace'))} 来显示算法伪代码`,
    inline(
      labelled(
        [
          figure(
            { caption: inline`算法伪代码模块 lovelace` },
            raw({ block: true, lang: 'typst' }, '#import "@preview/lovelace:0.3.0": *'),
          ),
          space,
        ],
        label('lovelace'),
      ),
    ),
    importPackage('@preview/lovelace:0.3.0', [pseudocodeList]),
    inline(
      labelled(
        [
          figure(
            { kind: 'algorithm', supplement: inline`算法` },
            pseudocodeList(
              { booktabs: true, numberedTitle: inline`我的算法` },
              blocks(
                m.enum(
                  m.item(['do something']),
                  m.item(['do something else']),
                  m.item(
                    m.lines(
                      inline`${strong(inline`while`)} still something to do`,
                      m.enum(
                        m.item(['do even more']),
                        m.item(
                          m.lines(
                            inline`${strong(inline`if`)} not done yet ${strong(inline`then`)}`,
                            m.enum(m.item(['wait a bit']), m.item(['resume working'])),
                          ),
                        ),
                        m.item(m.lines(inline(strong(inline`else`)), m.enum(m.item(['go home'])))),
                        m.item([strong(inline`end`)]),
                      ),
                    ),
                  ),
                  m.item([strong(inline`end`)]),
                ),
              ),
            ),
          ),
          space,
        ],
        label('cool'),
      ),
    ),
    m.lines(inline`See ${ref(label('cool'))} for details on how to do something cool.`, m.heading(1, '正文预览')),
    m.heading(2, '正文子标题'),
    '光注入建筑予生命，色彩渗透空间予运动。这是一个光的世界，是一个运动的世界。随着人民生活水平的提高和光源的发展，人们对照明的要求越来越高，除普遍要求的节能以外，还要求利用灯光营造和谐的气氛、舒适的环境，创造一种动态的效果，以及操作上的简便，这样人们对照明的要求越来越高，传统的建筑照明受到了时代的强烈冲击。智能照明应运而生。并迅速地向前发展，以致形成照明发展又一个重要趋势。',
    m.heading(2, '正文子标题'),
    '随着国家经济的不断快速发展，人们生活水平的不断提高，照明在人们日常生活以及工作中的作用也显得越发重要。据有关资料统计，目前世界上总发电量的25%用于照明，并且社会对照明智能化和绿色化的要求也越加迫切。例如在大型建筑物、商厦、音乐厅、博物馆、大学、演播室、会议厅等应用场合，对照明控制的智能化、绿色化和节能等都提出了较高的要求。',
    '随着国家经济的不断快速发展，人们生活水平的不断提高，照明在人们日常生活以及工作中的作用也显得越发重要。据有关资料统计，目前世界上总发电量的25%用于照明，并且社会对照明智能化和绿色化的要求也越加迫切。例如在大型建筑物、商厦、音乐厅、博物馆、大学、演播室、会议厅等应用场合，对照明控制的智能化、绿色化和节能等都提出了较高的要求。',
    '随着国家经济的不断快速发展，人们生活水平的不断提高，照明在人们日常生活以及工作中的作用也显得越发重要。据有关资料统计，目前世界上总发电量的25%用于照明，并且社会对照明智能化和绿色化的要求也越加迫切。例如在大型建筑物、商厦、音乐厅、博物馆、大学、演播室、会议厅等应用场合，对照明控制的智能化、绿色化和节能等都提出了较高的要求。',
    '照明可分为天然照明和人工照明两大类。天然照明（比如阳光）受自然条件的限制，不能根据人们的要求保持、随时随地可用、明暗可调、光线稳定的采光。在夜晚或天然光线不足的地方，需要采用人工照明。人工照明主要用电光源来实现。',
    m.heading(3, '正文子子标题'),
    '正文内容',
    inline(labelled(heading({ depth: 1 }, inline('结论')), label('no-numbering'))),
    inline`使用 ${raw('<no-numbering>')} 标签可以取消标题编号。`,
    inline(unsafeRaw.code<any>`if twoside {
  pagebreak() + " "
}`),
    inline(call(bilingualBibliography, { full: true })),
    inline(
      call(
        acknowledgement,
        blocks(
          inline`本模板基于南京大学学位论文 ${link('https://github.com/nju-lug/modern-nju-thesis', inline`modern-nju-thesis`)}
魔改。`,
          inline`感谢模板原作者 ${link('https://github.com/Orangex4', inline`OrangeX4`)}, 感谢 typst 项目组，感谢 typst 中文社区。感谢 NJU-LUG，感谢 NJUThesis
LaTeX 模板。`,
        ),
      ),
    ),
    inline(unsafeRaw.code<any>`if twoside {
  pagebreak() + " "
}`),
    show(appendix),
    m.heading(1, '附录'),
    m.heading(2, '附录子标题'),
    m.heading(3, '附录子子标题'),
    inline`附录内容，这里也可以加入图片，例如${ref(label('fig:appendix-img'))}。`,
    inline(
      labelled(
        [figure({ caption: inline`图片测试` }, image({ width: pct(20) }, path('images/fzu_logo.svg'))), space],
        label('appendix-img'),
      ),
    ),
  )
}
