// Converted from test/universe/corpus/modern-cug-report.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  blocks,
  cm,
  contentBlock,
  counter,
  define,
  doc,
  figure,
  heading,
  highlight,
  horizon,
  importPackage,
  inline,
  label,
  labelled,
  let_,
  m,
  parbreak,
  path,
  pt,
  raw,
  ref,
  show,
  space,
  strong,
  table,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const defineSize = define('define-size').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const template = define('template')
    .pos('arg1', T.any)
    .named('footer', T.any, null)
    .named('header', T.any, null)
    .named('size-config', T.any, null)
    .returns(T.any)
    .external()
  const boxRed = define('box-red').pos('arg1', T.content).returns(T.any).external()
  const beamerBlock = define('beamer-block').pos('arg1', T.content).returns(T.any).external()
  const nonum = define('nonum').pos('arg1', T.content).returns(T.any).external()
  const delta = define('delta')
    .pos('x', T.any)
    .returns(T.any)
    .body((p) => unsafeRaw.math`Delta #x`)
  const [sizeConfigDecl, sizeConfig] = let_(
    'size-config',
    defineSize(pt(12), {
      text: pt(12),
      math: { text: pt(12), block: pt(12) },
      table: pt(13),
      figure: pt(10),
      raw: pt(11),
      heading: { H1: pt(13), H2: pt(13), H3: pt(13) },
    }),
  )
  return doc(
    importPackage('@preview/modern-cug-report:0.1.3', [defineSize, template, boxRed, beamerBlock, nonum]),
    inline(counter(heading).update(2), space, delta.decl),
    m.lines(
      sizeConfigDecl,
      show((doc_2, ctx) =>
        template({ sizeConfig: sizeConfig, footer: 'CUG水文气象学2024', header: '蒸散发的基本原理' }, doc_2),
      ),
    ),
    m.heading(1, '1', ' ', strong(inline`蒸散发的基本原理`)),
    m.heading(2, '1.1 物理基础'),
    inline(
      boxRed(
        blocks(
          inline`${strong(inline`比热容`)} ${unsafeRaw.math`c_p`}：单位质量的物质升高1℃所需要的能量，${unsafeRaw.math`J \\/ ("kg" ℃)`}。`,
          inline`根据比热容${unsafeRaw.math`c_p`}的定义，可以得到温度变化引起的感热${unsafeRaw.math`H`}：
${labelled([unsafeRaw.math.block`H = c_p rho V delta(T)`, space], label('eq_h'))}`,
        ),
      ),
    ),
    inline`其中，${unsafeRaw.math`rho`}: 空气密度，${unsafeRaw.math`V`}: 空气体积。`,
    inline(
      beamerBlock(
        blocks(
          parbreak(),
          m.enum(
            m.numbered(
              1,
              [
                unsafeRaw.math`R_n = 100 W m^(-2)`,
                '，全转为潜热，1天蒸发量是多少mm？',
                highlight(inline`考察点：汽化潜热`),
              ],
              inline(nonum(inline(unsafeRaw.math.block`"LE" = 100 W m^(-2) times 86400 s = 8.64 "MJ" \\`))),
            ),
          ),
        ),
      ),
    ),
    m.heading(2, '1.2 如何使用'),
    m.heading(3, '1.2.1 图件'),
    inline(
      raw(
        { block: true },
        '#figure(\n  image("Penman1948.png", width: 75%),\n  caption: [Penman 1948水面蒸发示意图。]\n) <fig_penman1948>',
      ),
    ),
    m.heading(3, '1.2.2 表格'),
    inline(
      figure(
        {
          caption: inline`土壤类型、${unsafeRaw.math`K`}、与${unsafeRaw.math`K"lat"_"factor"`}值。表格出自Fan et al. (2007) Table 2。`,
        },
        table(
          { columns: [cm(1.5), cm(4), cm(3), cm(2)], align: horizon },
          table.header(
            inline(strong(inline`编号`)),
            inline(strong(inline`土壤类型`)),
            inline(strong(inline(unsafeRaw.math`K`))),
            inline(strong(inline(unsafeRaw.math`K"lat"_"factor"`))),
          ),
          inline`1`,
          'sand',
          inline`15.2064`,
          inline`2`,
        ),
      ),
    ),
    m.heading(3, '1.2.3 代码'),
    inline(
      raw(
        { block: true, lang: 'julia' },
        'function Fourier(y::AbstractVector{FT}, P::FT=length(y);\n  threshold=0.95) where {FT<:Real}\n  Δt = P / N\n  t = 0.0:Δt:(P-Δt)   # lenght(t) == N\n  # freq = 1 ./ t\nend',
      ),
    ),
    m.heading(3, '1.2.4 参考文献'),
    inline`图件源自${contentBlock(inline(ref(label('monteith2013'))))} Figure 3.4。`,
    inline(bibliography({ title: '参考文献', style: 'gb-7714-2015-author-date' }, path('References.bib'))),
  )
}
