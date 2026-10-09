// Converted from test/universe/corpus/gzu-thesis-unofficial.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  block,
  codeBlock,
  define,
  doc,
  em,
  external,
  figure,
  footnote,
  h,
  horizon,
  image,
  importPackage,
  inline,
  label,
  labelled,
  lorem,
  m,
  path,
  pct,
  range,
  raw,
  ref,
  set,
  show,
  space,
  spread,
  table,
  terms,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const removeCjkBreakSpace = external('remove-cjk-break-space')
  const kouhu = define('kouhu')
    .named('builtin-text', T.any, null)
    .named('indices', T.any, null)
    .returns(T.any)
    .external()
  const gzuThesis = external('gzu-thesis')
  const toprule = define('toprule').named('continued', T.any, null).returns(T.any).external()
  const midrule = define('midrule').returns(T.any).external()
  const bottomrule = define('bottomrule').returns(T.any).external()
  const continuedHeader = define('continued-header')
    .pos('arg1', T.any)
    .pos('arg2', T.any)
    .pos('arg3', T.any)
    .pos('arg4', T.content)
    .pos('arg5', T.content)
    .pos('arg6', T.content)
    .named('columns', T.any, null)
    .returns(T.any)
    .external()
  const cmidrule = define('cmidrule').returns(T.any).external()
  const gzuThesis_with = define('with')
    .named('abstract-en', T.any, null)
    .named('abstract-zh', T.any, null)
    .named('acknowledgment', T.any, null)
    .named('appendix', T.any, null)
    .named('author', T.content, [])
    .named('bibliography', T.any, null)
    .named('class', T.content, [])
    .named('college', T.content, [])
    .named('id', T.content, [])
    .named('major', T.content, [])
    .named('sign', T.any, null)
    .named('teacher', T.content, [])
    .named('title-en', T.content, [])
    .named('title-zh', T.content, [])
    .returns(T.any)
    .external(gzuThesis)
  return doc(
    importPackage('@preview/cjk-unbreak:0.2.3', [removeCjkBreakSpace]),
    importPackage('@preview/kouhu:0.2.0', [kouhu]),
    importPackage('@preview/gzu-thesis-unofficial:0.1.0', [
      gzuThesis,
      toprule,
      midrule,
      bottomrule,
      continuedHeader,
      cmidrule,
    ]),
    show(removeCjkBreakSpace),
    show(
      gzuThesis_with({
        titleZh: inline`基于 Typst 的贵州大学本科生毕业论文（设计）模板`,
        titleEn: inline`Guizhou University Undergraduate Graduation Thesis (Design) Template Based on Typst`,
        author: inline`姓名`,
        college: inline`${h(em(1))}学院名称${h(em(1))}`,
        major: inline`专业名称`,
        class: inline`班级`,
        id: inline`学号`,
        teacher: inline`指导教师`,
        sign: image({ width: em(5) }, path('sign.jpg')),
        abstractZh: {
          abstract: kouhu({ indices: range(3), builtinText: 'xiangyu' }),
          keywords: ['Typst模板', '贵州大学毕业论文'],
        },
        abstractEn: { abstract: lorem(200), keywords: ['Typst template', 'GZU thesis'] },
        bibliography: bibliography(path('ref.bib')),
        acknowledgment: kouhu({ indices: range(7), builtinText: 'nanshanjing' }),
        appendix: kouhu({ indices: range(2), builtinText: 'zhufu' }),
      }),
    ),
    m.lines(
      m.heading(1, '介绍'),
      m.heading(2, '图片示例'),
      inline`${labelled([figure({ caption: inline`用于测试的图片` }, image({ width: pct(20) }, path('sign.jpg'))), space], label('fig.1'))}
如${ref(label('fig.1'))} 是一张在雪地里写了文字的图片`,
    ),
    m.lines(
      m.heading(2, '公式示例'),
      inline`牛顿第二定律的代数表如${ref(label('eq.nu'))} ${set(terms, { indent: em(4), separator: inline`：`, spacing: em(0.4) })}
${labelled([unsafeRaw.math.block`F = m a`, space], label('eq.nu'))}`,
    ),
    m.lines(
      m.heading(2, '引用文献和脚注'),
      inline`引用文献 ${ref(label('netwok2020'))}${footnote(inline`必须在前面使用${raw('gzu-thesis')}函数时传入正确的${raw('bibliography')}才能引用`)}，
之后便能在参考文献页自动显示。`,
    ),
    m.lines(
      m.heading(2, '表格示例'),
      m.heading(3, '非跨页表'),
      inline(
        figure(
          { caption: inline`用于测试的表格` },
          table(
            { columns: 5 },
            toprule(),
            table.header(inline`表头1`, inline`表头2`, inline`表头4`, inline`表头4`, inline`表头5`),
            midrule(),
            spread(unsafeRaw.code<any>`for _ in range(5) { ([A], [B], [C], [D], [E]) }`),
            bottomrule(),
          ),
        ),
      ),
      m.heading(3, '跨页表'),
      inline`表格也支持跨页，跨页会显示续表。
${codeBlock(
  [show(figure, set(block, { breakable: true }))],
  figure(
    { caption: inline`用于测试的跨页表格` },
    table(
      { columns: 4 },
      toprule({ continued: true }),
      continuedHeader(
        { columns: 4 },
        table.cell({ rowspan: 2, align: horizon }, inline`材料`),
        table.cell({ colspan: 3 }, inline`化学元素（%）`),
        cmidrule(),
        inline`C`,
        inline`Al`,
        inline`V`,
      ),
      midrule(),
      spread(unsafeRaw.code<any>`for i in range(5) {
        ([Ti6Al4V], [0.1], [0.2], [0.3])
      }`),
      bottomrule(),
    ),
  ),
)}`,
    ),
  )
}
