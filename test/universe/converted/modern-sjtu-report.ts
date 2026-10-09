// Converted from test/universe/corpus/modern-sjtu-report.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  auto,
  bibliography,
  blocks,
  calc,
  data,
  define,
  doc,
  em,
  emph,
  external,
  figure,
  h,
  importPackage,
  inline,
  label,
  let_,
  lorem,
  m,
  path,
  raw,
  ref,
  show,
  space,
  strike,
  strong,
  sub,
  super_,
  table,
  times,
  underline,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const lq = external('lq')
  const makeCover = define('make-cover')
    .named('course-name', T.any, null)
    .named('course-name-en', T.any, null)
    .named('cover-fonts', T.any, null)
    .named('ident-color', T.any, null)
    .named('info-items', T.any, null)
    .named('logo-path', T.any, null)
    .named('name-path', T.any, null)
    .named('org-name', T.any, null)
    .returns(T.any)
    .external()
  const generalLayout = external('general-layout')
  const makeTitle = define('make-title').named('name', T.any, null).returns(T.any).external()
  const pseudocodeList = define('pseudocode-list').pos('arg1', T.content).returns(T.any).external()
  const fakeitalic = define('fakeitalic').pos('arg1', T.any).returns(T.any).external()
  const showCnFakebold = external('show-cn-fakebold')
  const generalLayout_with = define('with')
    .named('article-fonts', T.any, null)
    .named('code-fonts', T.any, null)
    .named('experiment-name', T.any, null)
    .named('header-logo', T.any, null)
    .named('header-path', T.any, null)
    .named('ident-color', T.any, null)
    .returns(T.any)
    .external(generalLayout)
  const lq_diagram = define('diagram')
    .pos('arg1', T.any)
    .pos('arg2', T.any)
    .named('title', T.content, [])
    .returns(T.any)
    .external(lq)
  const lq_plot = define('plot')
    .pos('arg1', T.any)
    .pos('arg2', T.any)
    .named('label', T.content, [])
    .named('mark', T.any, null)
    .named('stroke', T.any, null)
    .returns(T.any)
    .external(lq)
  const [courseNameDecl, courseName] = let_('course-name', '某交大金课')
  const [courseNameEnDecl, courseNameEn] = let_('course-name-en', 'Some Random Course')
  const [experimentNameDecl, experimentName] = let_('experiment-name', '实验名称')
  const [identColorDecl, identColor] = let_('ident-color', 'blue')
  const [logoPathDecl, logoPath] = let_('logo-path', 'path/to/logo')
  const [namePathDecl, namePath] = let_('name-path', 'path/to/name')
  const [headerPathDecl, headerPath] = let_('header-path', 'path/to/header')
  const [orgNameDecl, orgName] = let_('org-name', 'name')
  const [infoItemsDecl, infoItems] = let_(
    'info-items',
    data([
      [inline`专${h(em(2))}业`, inline`某专业`],
      [inline`学生姓名`, inline`某学生`],
      [inline`学生学号`, inline`1234567890`],
      [inline`教${h(em(2))}师`, inline`某教师`],
      [inline`自定义键`, inline`自定义值`],
    ]),
  )
  const [coverFontsDecl, coverFonts] = let_(
    'cover-fonts',
    data(['Times New Roman', 'Kaiti SC', 'KaiTi', 'Noto Serif SC', 'SimSun']),
  )
  const [articleFontsDecl, articleFonts] = let_(
    'article-fonts',
    data(['Times New Roman', 'Noto Serif SC', 'Songti SC', 'SimSun']),
  )
  const [codeFontsDecl, codeFonts] = let_(
    'code-fonts',
    data(['Consolas', 'Ubuntu Mono', 'Menlo', 'Courier New', 'Courier', 'Noto Serif SC']),
  )
  return doc(
    m.lines(
      importPackage('@preview/modern-sjtu-report:0.2.0', [makeCover, generalLayout, makeTitle, pseudocodeList]),
      importPackage('@preview/cuti:0.4.0', [fakeitalic, showCnFakebold]),
      importPackage('@preview/lilaq:0.5.0', lq),
    ),
    m.lines(courseNameDecl, courseNameEnDecl, experimentNameDecl),
    m.lines(identColorDecl, logoPathDecl, namePathDecl, headerPathDecl, orgNameDecl),
    infoItemsDecl,
    m.lines(coverFontsDecl, articleFontsDecl, codeFontsDecl),
    inline(
      makeCover({
        courseName: courseName,
        courseNameEn: courseNameEn,
        infoItems: infoItems,
        identColor: identColor,
        coverFonts: coverFonts,
        logoPath: logoPath,
        namePath: namePath,
        orgName: orgName,
      }),
    ),
    show(
      generalLayout_with({
        identColor: identColor,
        headerLogo: true,
        experimentName: experimentName,
        articleFonts: articleFonts,
        codeFonts: codeFonts,
        headerPath: headerPath,
      }),
    ),
    inline(makeTitle({ name: experimentName })),
    m.heading(1, '中文示例'),
    '相聚在东海之滨，吸取知识的甘泉。交大，交大，学府庄严，师生切磋共涉艰险。为飞跃而求实，为创业而攻坚。同学们，同学们！振兴中华，振兴中华。宏图在胸，重任在肩。',
    '迎向那真理之光，扬起青春的风帆。交大，交大，群英汇聚，同舟共济远航彼岸。为自强而奋发，为人类多贡献。同学们，同学们！饮水思源，饮水思源。母校的光荣，长存心田。',
    m.heading(1, 'English Example'),
    inline(lorem(25)),
    inline(lorem(40)),
    m.heading(1, 'Typst 常见语法与样式实例'),
    m.heading(2, '基础语法'),
    inline`落霞与孤${h(em(2))}鹜齐飞，${strong(inline`秋水共`)} ${fakeitalic('长天一色')}。`,
    inline`${underline(inline`The quick brown`)} ${strike(inline`fox`)} jumps over ${emph(inline`the lazy`)}
d${super_(inline`o`)}${sub(inline`g`)}.`,
    m.lines(m.heading(3, '三级标题'), m.heading(4, '四级标题'), m.heading(5, '五级标题'), m.heading(6, '六级标题')),
    m.heading(2, '列表'),
    inline(lorem(20)),
    m.enum(m.item(m.lines('有序列表', m.list(m.item(m.lines('的无序子列表', m.enum(m.item(['的有序子子列表'])))))))),
    inline(lorem(30)),
    m.heading(2, '数学'),
    inline(lorem(30)),
    inline(unsafeRaw.math.block`x_"1,2" = (- b plus.minus sqrt(b^2 - 4 a c)) / (2 a)`),
    inline`而这是一个行内数学公式 ${unsafeRaw.math`e^(i pi) + 1 = 0.`}`,
    m.heading(2, '图表'),
    inline(lorem(45)),
    inline(
      figure(
        { caption: '一个三线表' },
        table(
          { columns: [auto, auto, auto] },
          table.header(inline`Column1`, inline`Column2`, inline`Columns3`),
          inline`第一行`,
          inline`100`,
          inline(unsafeRaw.math`x + y`),
          inline`row2`,
          inline`200`,
          inline(unsafeRaw.math`1/2`),
          inline(emph(inline`The third row`)),
          inline`30000000000000`,
          inline(unsafeRaw.math`integral e^x d x`),
        ),
      ),
    ),
    inline(lorem(50)),
    inline(
      figure(
        { caption: inline`A matplotlib style plot created by lilaq` },
        lq_diagram(
          { title: inline`Example Plot` },
          lq_plot({ mark: 's', label: inline`A`, stroke: null }, [0, 1, 2, 3, 4], [3, 5, 4, 2, 3]),
          lq_plot({ mark: 'o', label: inline`B` }, [0, 1, 2, 3, 4], (x) => add(times(2, calc.cos(x)), 3)),
        ),
      ),
    ),
    inline(lorem(25)),
    m.heading(2, '代码'),
    inline`${lorem(30)} 这是一个行内代码块 ${raw({ lang: 'python' }, 'print("Hello, World!")')} (有高亮) ${raw('print("Hello World!")')}
(无高亮)。`,
    inline(
      raw(
        { block: true, lang: 'cpp' },
        '#include <iostream>\nusing namespace std;\nint main() {\n    cout << "Hello, World!" << endl;\n    return 0; // 代码中的中文\n}',
      ),
    ),
    inline(lorem(20)),
    inline(
      figure(
        { kind: 'pseudocode-list', supplement: pseudocodeList, caption: '伪代码示例' },
        pseudocodeList(
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
    ),
    inline(lorem(20), space, ref(label('vaswani2023attentionneed')), space, ref(label('reference'))),
    inline(bibliography({ title: '参考文献' }, path('ref.bib'))),
  )
}
