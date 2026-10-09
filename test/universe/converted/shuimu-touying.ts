// Converted from test/universe/corpus/shuimu-touying.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  align,
  bibliography,
  blocks,
  datetime,
  define,
  doc,
  external,
  importPackage,
  inline,
  label,
  m,
  math,
  path,
  raw,
  ref,
  set,
  show,
  space,
  top,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const shuimuTouyingTheme = external('shuimu-touying-theme')
  const configInfo = define('config-info')
    .named('author', T.content, [])
    .named('date', T.any, null)
    .named('institution', T.content, [])
    .named('reporter', T.content, [])
    .named('subtitle', T.content, [])
    .named('supervisor', T.content, [])
    .named('title', T.content, [])
    .returns(T.any)
    .external()
  const titleSlide = define('title-slide').returns(T.any).external()
  const outlineSlide = define('outline-slide').returns(T.any).external()
  const slide = define('slide')
    .pos('arg1', T.content)
    .named('align', T.any, null)
    .named('title', T.content, [])
    .returns(T.any)
    .external()
  const titledBlock = define('titled-block')
    .pos('arg1', T.content)
    .named('title', T.content, [])
    .returns(T.any)
    .external()
  const focusSlide = define('focus-slide').pos('arg1', T.content).returns(T.any).external()
  const shuimuTouyingTheme_with = define('with').pos('arg1', T.any).returns(T.any).external(shuimuTouyingTheme)
  return doc(
    importPackage('@preview/shuimu-touying:0.4.1', [
      shuimuTouyingTheme,
      configInfo,
      titleSlide,
      outlineSlide,
      slide,
      titledBlock,
      focusSlide,
    ]),
    show(
      shuimuTouyingTheme_with(
        configInfo({
          title: inline`报告主标题`,
          subtitle: inline`报告副标题`,
          reporter: inline`报告人姓名`,
          author: inline`作者姓名`,
          supervisor: inline`导师姓名`,
          date: datetime.today(),
          institution: inline`清华大学院系名称`,
        }),
      ),
    ),
    inline(titleSlide()),
    inline(outlineSlide()),
    m.heading(1, '快速上手'),
    m.heading(2, '修改报告信息'),
    m.list(
      m.item(['在', space, raw('config-info(...)'), space, '中填写标题、作者、报告人、导师、日期和机构。']),
      m.item([raw('#title-slide()'), space, '会读取这些信息生成封面。']),
      m.item(['需要临时覆盖封面信息时，可以写成', space, raw('#title-slide(title: [临时标题])'), '。']),
    ),
    m.heading(2, '编写页面结构'),
    m.list(
      m.item(['使用一级标题', space, raw('= 章节名'), space, '创建章节。']),
      m.item(['使用二级标题', space, raw('== 页面标题'), space, '创建普通正文页。']),
      m.item(['目录页和顶部 mini-frame 导航会根据一级标题自动生成。']),
    ),
    inline(
      slide(
        { title: inline`手动页面示例`, align: top },
        blocks(
          m.list(
            m.item(['当标题层级不方便表达页面结构时，可以直接使用', space, raw('#slide(...)'), '。']),
            m.item([
              raw('align: top'),
              space,
              '适合内容较多的页面；默认',
              space,
              raw('horizon'),
              space,
              '更适合内容较少的页面。',
            ]),
          ),
        ),
      ),
    ),
    m.heading(1, '常用组件'),
    m.heading(2, '普通正文页'),
    m.list(
      m.item(['这里可以放段落、列表、引用和图表。']),
      m.item(['正文默认使用模板设置的字体、字号、项目符号和页脚。']),
      m.item(['文献引用可以直接写在正文中，例如', space, ref(label('cai1985')), '。']),
    ),
    m.heading(2, '强调内容块'),
    inline(titledBlock({ title: inline`结论示例` }, inline`这里放需要强调的公式、定义、结论或阶段性进展。`)),
    m.heading(2, '公式与编号'),
    set(math.equation, { numbering: '(1)' }),
    inline(titledBlock({ title: inline`有编号公式` }, inline(unsafeRaw.math.block`e^(pi i) + 1 = 0`))),
    inline(
      titledBlock(
        { title: inline`部分无编号公式` },
        inline(math.equation({ block: true, numbering: null }, inline(space, unsafeRaw.math.block`1 + 1 = 2`, space))),
      ),
    ),
    inline(titledBlock({ title: inline`继续编号` }, inline(unsafeRaw.math.block`2+2=4`))),
    m.heading(1, '收尾页面'),
    m.heading(2, '参考文献'),
    m.list(
      m.item(['使用', space, raw('@引用键'), space, '插入文献引用，例如', space, ref(label('cai1985')), '。']),
      m.item([raw('#bibliography(...)'), space, '会读取', space, raw('refs.bib'), space, '并生成参考文献页。']),
    ),
    inline(
      set(align, { alignment: top }),
      space,
      bibliography({ title: null, full: true, style: 'gb-7714-2015-numeric' }, path('refs.bib')),
    ),
    inline(focusSlide(inline`${space}Q&A`)),
  )
}
