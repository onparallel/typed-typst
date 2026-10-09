// Converted from test/universe/corpus/modern-pku-thesis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  blocks,
  define,
  doc,
  external,
  importPackage,
  inline,
  m,
  path,
  read,
  show,
  space,
  sym,
} from '../../../src/index.ts'

export default () => {
  const appendix = define('appendix').returns(T.any).external()
  const conf = external('conf')
  const conf_with = define('with')
    .named('acknowledgements', T.content, [])
    .named('bibcontent', T.any, null)
    .named('bibstyle', T.any, null)
    .named('bibversion', T.any, null)
    .named('blindid', T.any, null)
    .named('cabstract', T.content, [])
    .named('cauthor', T.any, null)
    .named('cfirstmajor', T.any, null)
    .named('cheader', T.any, null)
    .named('ckeywords', T.any, null)
    .named('cmajor', T.any, null)
    .named('csupervisor', T.any, null)
    .named('cthesisname', T.any, null)
    .named('ctitle', T.any, null)
    .named('date', T.any, null)
    .named('degree-type', T.any, null)
    .named('direction', T.any, null)
    .named('eabstract', T.content, [])
    .named('eauthor', T.any, null)
    .named('ekeywords', T.any, null)
    .named('emajor', T.any, null)
    .named('esupervisor', T.any, null)
    .named('etitle', T.any, null)
    .named('school', T.any, null)
    .named('studentid', T.any, null)
    .returns(T.any)
    .external(conf)
  return doc(
    importPackage('@preview/modern-pku-thesis:0.2.3', [appendix, conf]),
    show(
      conf_with({
        cauthor: '张三',
        eauthor: 'San Zhang',
        studentid: '23000xxxxx',
        blindid: 'L2023XXXXX',
        cthesisname: '博士研究生学位论文',
        cheader: '北京大学博士学位论文',
        ctitle: '论文中文标题',
        etitle: 'English Title of Your Dissertation',
        school: '某个学院',
        cfirstmajor: '某个一级学科',
        cmajor: '某个专业',
        emajor: 'Some Major',
        direction: '某个研究方向',
        csupervisor: '李四',
        esupervisor: 'Si Li',
        date: { year: 2026, month: 6 },
        degreeType: 'academic',
        cabstract: blocks('在此处填写中文摘要内容。', '摘要应简明扼要地概述论文的主要内容和研究成果。'),
        ckeywords: ['关键词1', '关键词2', '关键词3'],
        eabstract: blocks(
          'Write your English abstract here.',
          'The abstract should briefly summarize the main content and research findings of your dissertation.',
        ),
        ekeywords: ['keyword1', 'keyword2', 'keyword3'],
        acknowledgements: inline`${space}在此处填写致谢内容。${space}`,
        bibcontent: read(path('ref.bib')),
        bibstyle: 'numeric',
        bibversion: '2015',
      }),
    ),
    m.heading(1, '绪论'),
    m.heading(2, '研究背景'),
    inline`在此处撰写研究背景...`,
    m.heading(2, '研究目的与意义'),
    inline`在此处撰写研究目的与意义...`,
    m.heading(1, '相关工作'),
    m.heading(2, '国内外研究现状'),
    inline`在此处撰写文献综述...`,
    m.heading(1, '研究方法'),
    inline`在此处撰写研究方法...`,
    m.heading(1, '实验与结果'),
    inline`在此处撰写实验和结果...`,
    m.heading(1, '总结与展望'),
    inline`在此处撰写总结和展望...`,
    inline(appendix()),
    m.heading(1, '附录'),
    inline`在此处添加附录内容...`,
  )
}
