// Converted from test/universe/corpus/modern-tust-thesis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  blocks,
  bottom,
  call,
  cm,
  color,
  data,
  datetime,
  define,
  doc,
  em,
  external,
  footnote,
  fr,
  grid,
  h,
  heading,
  horizon,
  image,
  importPackage,
  inline,
  label,
  labelled,
  let_,
  m,
  math,
  path,
  pct,
  place,
  pt,
  raw,
  ref,
  show,
  space,
  strong,
  sym,
  table,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const lq = external('lq')
  const suiji = external('suiji')
  const doc_2 = external('doc')
  const preface = external('preface')
  const mainmatter = external('mainmatter')
  const appendix = external('appendix')
  const codlySetup = external('codly-setup')
  const documentclass = define('documentclass')
    .named('anonymous', T.any, null)
    .named('date', T.any, null)
    .named('info', T.any, null)
    .named('twoside', T.any, null)
    .named('use-standard-code-format', T.any, null)
    .returns(T.any)
    .external()
  const wordCountCjk = external('word-count-cjk')
  const theorem = define('theorem').pos('arg1', T.content).named('title', T.any, null).returns(T.any).external()
  const proof = define('proof').pos('arg1', T.content).returns(T.any).external()
  const imagex = define('imagex')
    .rest('args', T.any)
    .named('caption', T.content, [])
    .named('caption-en', T.content, [])
    .named('columns', T.any, null)
    .named('label-name', T.any, null)
    .returns(T.any)
    .external()
  const subimagex = define('subimagex')
    .pos('arg1', T.any)
    .named('caption', T.content, [])
    .named('label-name', T.any, null)
    .returns(T.any)
    .external()
  const tablex = define('tablex')
    .rest('args', T.any)
    .named('align', T.any, null)
    .named('breakable', T.any, null)
    .named('caption', T.content, [])
    .named('columns', T.any, null)
    .named('header', T.any, null)
    .named('label-name', T.any, null)
    .returns(T.any)
    .external()
  const tableNote = define('table-note').pos('arg1', T.any).returns(T.any).external()
  const algox = define('algox')
    .pos('arg1', T.any)
    .named('caption', T.content, [])
    .named('label-name', T.any, null)
    .returns(T.any)
    .external()
  const pseudocodeList = define('pseudocode-list')
    .pos('arg1', T.content)
    .named('indentation', T.any, null)
    .named('line-gap', T.any, null)
    .returns(T.any)
    .external()
  const totalWords = external('total-words')
  const num = external('num')
  const unit = external('unit')
  const qty = external('qty')
  const numrange = external('numrange')
  const qtyrange = external('qtyrange')
  const lq_diagram = define('diagram')
    .rest('args', T.any)
    .named('height', T.any, null)
    .named('title', T.content, [])
    .named('width', T.any, null)
    .named('xlabel', T.any, null)
    .named('ylabel', T.any, null)
    .returns(T.any)
    .external(lq)
  const lq_plot = define('plot')
    .pos('arg1', T.any)
    .pos('arg2', T.any)
    .named('label', T.content, [])
    .named('mark', T.any, null)
    .returns(T.any)
    .external(lq)
  const suiji_genRng = define('gen-rng').pos('arg1', T.any).returns(T.any).external(suiji)
  const suiji_uniform = define('uniform').pos('arg1', T.any).named('size', T.any, null).returns(T.any).external(suiji)
  const lq_scatter = define('scatter')
    .pos('arg1', T.any)
    .pos('arg2', T.any)
    .named('color', T.any, null)
    .named('map', T.any, null)
    .named('size', T.any, null)
    .returns(T.any)
    .external(lq)
  const [
    patternDecl,
    [
      date,
      twoside,
      anonymous,
      info,
      doc_3,
      preface_2,
      mainmatter_2,
      appendix_2,
      cover,
      coverEn,
      declare,
      abstract,
      abstractEn,
      outline_2,
      imageOutline,
      tableOutline,
      algorithmOutline,
      nomenclature,
      bib,
      acknowledgement,
      task,
      codlySetup_2,
    ],
  ] = let_(
    [
      'date',
      'twoside',
      'anonymous',
      'info',
      'doc',
      'preface',
      'mainmatter',
      'appendix',
      'cover',
      'cover-en',
      'declare',
      'abstract',
      'abstract-en',
      'outline',
      'image-outline',
      'table-outline',
      'algorithm-outline',
      'nomenclature',
      'bib',
      'acknowledgement',
      'task',
      'codly-setup',
    ],
    documentclass({
      date: datetime.today(),
      twoside: false,
      anonymous: false,
      useStandardCodeFormat: false,
      info: {
        studentId: '22104900',
        name: '张三',
        nameEn: 'Zhang San',
        title: '天津科技大学本科毕业设计（论文）模板',
        titleEn: 'Undergraduate Thesis Template for Tianjin University of Science and Technology',
        workType: 'design',
        school: '人工智能学院',
        major: '专业名称',
        research: '研究方向',
        grade: '2022',
        supervisor: '指导教师',
        supervisorRank: '职称',
      },
    }),
  )
  const bf = define('bf')
    .pos('x', T.any)
    .returns(T.any)
    .body((p) => math.bold(math.upright(p['x'])))
  const [ppiDecl, ppi] = let_('ppi', unsafeRaw.math`upright(pi)`)
  const [eeDecl, ee] = let_('ee', unsafeRaw.math`upright(e)`)
  const [iiDecl, ii] = let_('ii', unsafeRaw.math`upright(i)`)
  const [ResDecl, Res] = let_('Res', math.op('Res'))
  const [tmpDecl, tmp] = let_('tmp', math.italic('tmp'))
  const [xsDecl, xs] = let_('xs', data([0, 1, 2, 3, 4]))
  const [patternDecl_2, [y1, y2]] = let_(
    ['y1', 'y2'],
    [
      [1, 2, 3, 4, 5],
      [5, 3, 7, 9, 3],
    ],
  )
  const [rngDecl, rng] = let_('rng', suiji_genRng(33))
  const [patternDecl_3, [rng_2, x]] = let_(['rng', 'x'], suiji_uniform({ size: 20 }, rng))
  const [patternDecl_4, [rng_3, y]] = let_(['rng', 'y'], suiji_uniform({ size: 20 }, rng_2))
  const [patternDecl_5, [rng_4, colors]] = let_(['rng', 'colors'], suiji_uniform({ size: 20 }, rng_3))
  const [patternDecl_6, [rng_5, sizes]] = let_(['rng', 'sizes'], suiji_uniform({ size: 20 }, rng_4))
  const bf_2 = define('bf')
    .pos('x', T.any)
    .returns(T.any)
    .body((p) => math.bold(math.upright(p['x'])))
  return doc(
    importPackage('@preview/modern-tust-thesis:0.1.0', [
      doc_2,
      preface,
      mainmatter,
      appendix,
      codlySetup,
      documentclass,
      wordCountCjk,
      theorem,
      proof,
      imagex,
      subimagex,
      tablex,
      tableNote,
      algox,
      pseudocodeList,
      totalWords,
    ]),
    patternDecl,
    show(doc_3),
    inline(call(cover)),
    inline(
      call(declare, {
        originalStatementSign: place(
          { dx: cm(13), dy: cm(-1.3) },
          image({ height: em(2) }, path('figures/student-sign.png')),
        ),
        authorizationAuthorSign: place(
          { dx: cm(5), dy: cm(-1.3) },
          image({ height: em(2) }, path('figures/student-sign.png')),
        ),
        supervisorSign: place(
          { dx: cm(4), dy: cm(-1.2) },
          image({ height: em(2) }, path('figures/supervisor-sign.png')),
        ),
      }),
    ),
    inline(
      call(
        task,
        blocks(
          m.enum(
            { tight: false },
            m.numbered(1, ['查阅相关文献，了解国内外研究现状。']),
            m.numbered(2, ['完成开题报告，确定研究方案。']),
            m.numbered(3, ['开展实验研究，收集数据并进行分析。']),
            m.numbered(4, ['撰写论文初稿，并根据导师意见修改完善。']),
            m.numbered(5, ['完成论文终稿并准备答辩。']),
          ),
        ),
      ),
    ),
    show(preface_2),
    inline(
      call(
        abstract,
        { keywords: ['学位论文', '论文格式', 'Typst', '模板'] },
        blocks(
          '本文介绍天津科技大学本科毕业设计（论文） Typst 模板的使用方法。该模板遵循学校规定的论文格式要求，包括封面、声明、任务书、摘要、目录、正文、参考文献、致谢等部分。模板采用模块化设计，用户只需修改基本信息和正文内容即可生成符合规范的论文。',
          '本模板参考上海交通大学学位论文Typst模板的设计思路，结合天津科技大学的具体要求进行调整和优化。',
        ),
      ),
    ),
    inline(
      call(
        abstractEn,
        { keywords: ['thesis', 'format', 'Typst', 'template'] },
        blocks(
          inline`This document introduces the usage of Typst template for undergraduate design (thesis) at Tianjin
University of Science and Technology. The template follows the university's thesis format requirements,
including cover page, declaration, task assignment, abstract, table of contents, main body,
references, and acknowledgement.`,
          inline`With a modular design, users only need to modify basic information and main content to generate
a compliant thesis. This template is developed with reference to Shanghai Jiao Tong University
Thesis Typst Template and adapted to meet TUST's specific requirements.`,
        ),
      ),
    ),
    inline(call(outline_2)),
    inline(
      call(
        nomenclature,
        { width: pct(50), columns: [fr(1), fr(1.5)] },
        blocks(
          m.terms(
            m.term([unsafeRaw.math`epsilon`], ['介电常数']),
            m.term([unsafeRaw.math`mu`], ['磁导率']),
            m.term([unsafeRaw.math`epsilon`], ['介电常数']),
            m.term([unsafeRaw.math`mu`], ['磁导率']),
            m.term([unsafeRaw.math`epsilon`], ['介电常数']),
            m.term([unsafeRaw.math`mu`], ['磁导率']),
          ),
        ),
      ),
    ),
    m.lines(unsafeRaw.markup`#show: mainmatter.with(use-standard-code-format: false)`, inline(show(wordCountCjk))),
    inline(labelled(heading({ depth: 1 }, inline('绪论')), label('chp:intro'))),
    m.heading(2, '引言'),
    '学位论文是研究生从事科研工作的成果的主要表现，集中表明了作者在研究工作中获得的新的发明、理论或见解，是研究生申请硕士或博士学位的重要依据，也是科研领域中的重要文献资料和社会的宝贵财富。',
    m.heading(3, '三级标题'),
    inline`更深层次的内容${sym.dots.h}${sym.dots.h}`,
    m.heading(4, '四级标题'),
    inline`标题引用：${ref(label('chp:intro'))} ${ref(label('sec:meaning'))} ${ref(label('app:flowchart'))}`,
    m.heading(2, '本文研究主要内容'),
    inline`本文主要研究${sym.dots.h}${sym.dots.h}`,
    inline(labelled(heading({ depth: 2 }, inline('本文研究意义')), label('sec:meaning'))),
    inline`本文的研究具有重要的理论和实践意义${sym.dots.h}${sym.dots.h}`,
    m.heading(2, '本章小结'),
    inline`本章介绍了论文的研究背景、研究意义和主要内容${sym.dots.h}${sym.dots.h}`,
    m.heading(1, '数学与引用文献的标注'),
    m.heading(2, '数学'),
    m.heading(3, '数学和单位'),
    inline`包 ${raw('unify')} 提供了更好的数字和单位支持，但与 ${raw('siunitx')} 相比，只支持了${raw('num')}, ${raw('unit')}, ${raw('qty')},
${raw('numrange')}, ${raw('qtyrange')} 五个函数：`,
    importPackage('@preview/unify:0.7.1', [num, unit, qty, numrange, qtyrange]),
    m.list(
      m.item([unsafeRaw.math`num("-1.32865+-0.50273e-6")`]),
      m.item([unsafeRaw.math`num("0.3e45", multiplier: "times")`]),
      m.item([unsafeRaw.math`unit("kg m/s")`]),
      m.item([unsafeRaw.math`unit("ohm")`]),
      m.item([unsafeRaw.math`qty("0.13", "mm")`]),
      m.item([unsafeRaw.math`qty("1.3+1.2-0.3e3", "erg/cm^2/s", space: "#h(2mm)")`]),
      m.item([unsafeRaw.math`numrange("1,1238e-2", "3,0868e5", thousandsep: "'")`]),
      m.item([unsafeRaw.math`numrange("10", "20", delimiter: "tilde")`]),
      m.item([unsafeRaw.math`qtyrange("1e3", "2e3", "meter per second squared", per: "\\\\/", delimiter: "\\"to\\"")`]),
      m.item([unsafeRaw.math`qtyrange("10", "20", "celsius", delimiter: "tilde")`]),
    ),
    m.heading(3, '数学符号和公式'),
    inline`按照国标GB/T3102.11—1993《物理科学和技术中使用的数学符号》，微分符号 ${unsafeRaw.math`dif`} 应使用直立体。除此之外，数学常数也应使用直立体：`,
    m.lines(bf.decl, ppiDecl, eeDecl, iiDecl),
    m.list(
      m.item(['微分符号', space, unsafeRaw.math`dif`, '：', space, raw('dif')]),
      m.item(['圆周率', space, unsafeRaw.math`ppi`, '：', space, raw('upright(pi)')]),
      m.item(['自然对数的底', space, unsafeRaw.math`ee`, '：', space, raw('upright(e)')]),
      m.item(['虚数单位', space, unsafeRaw.math`ii`, '：', space, raw('upright(i)')]),
    ),
    inline`公式应另起一行居中排版。公式后应注明编号，按章顺序编排，编号右端对齐，如${ref(label('equation'))} 所示。`,
    inline(labelled([unsafeRaw.math.block`ee^(ii ppi) + 1 = 0`, space], label('equation'))),
    inline(unsafeRaw.math.block`(dif^2 u) / (dif t^2) = integral f(x) dif x`),
    '公式末尾是需要添加标点符号的，至于用逗号还是句号，取决于公式下面一句是接着公式说的，还是另起一句。',
    inline(unsafeRaw.math
      .block`(2h) / ppi limits(integral)_0^infinity (sin (omega delta)) / omega cos (omega x) dif omega = cases(
    h "," quad abs(x) < delta ",",
    h / 2 "," quad x = plus.minus delta ",",
    0 "," quad abs(x) > delta"."
  )`),
    inline`公式较长时最好在等号"${unsafeRaw.math`=`}"处转行。子公式的引用请在该行公式后添加 ${raw('#<subequation>')} 引用标签，如${ref(label('subequation'))}
所示。如果有某行公式不需要编号,请使用 ${raw('#<equate:revoke>')} 标签。（此标签由 ${raw('equate')} 包定义，目前不可自定义）`,
    inline(unsafeRaw.math.block`& I(X_3; X_4) - I(X_3; X_4 | X_1) - I(X_3; X_4 | X_2) #<equate:revoke> \\
  = & [I(X_3; X_4) - I(X_3; X_4 | X_1)] - I(X_3; X_4 | tilde(X_2)) \\
  = & I(X_1; X_3; X_4) - I(X_3; X_4 | tilde(X_2)). #<subequation>`),
    inline`如果在等号处转行难以实现，也可在 ${unsafeRaw.math`+`}、${unsafeRaw.math`-`}、${unsafeRaw.math`times`}、${unsafeRaw.math`div`}
运算符号处转行，转行时运算符号仅书写于转行式前，不重复书写。`,
    inline(unsafeRaw.math
      .block`1 / 2 Delta(f_(i j) f^(i j)) = 2 med &(sum_(i<j) x_(i j) (sigma_i - sigma_j)^2 + f_(i j) nabla_j nabla_i (Delta f) #<equate:revoke> \\
    &+ nabla_k f_(i j) nabla^k f^(i j) + f^(i j) f^k [2 nabla_i R_(j k) - nabla_k R_(i j)]).`),
    m.heading(3, '定理环境'),
    inline`示例文件中使用 ${raw('theorion')} 宏包配置了定理、引理和证明等环境。`,
    inline`这里举一个"定理"和"证明"的例子。`,
    ResDecl,
    inline(
      labelled(
        [
          theorem(
            { title: '留数定理' },
            blocks(
              inline`假设 ${unsafeRaw.math`U`} 是复平面上的一个单连通开子集，${unsafeRaw.math`a_1, dots, a_n`} 是复平面上有限个点，${unsafeRaw.math`f`}
是定义在 ${unsafeRaw.math`U without {a_1, dots, a_n}`} 上的全纯函数，如果 ${unsafeRaw.math`gamma`} 是一条把 ${unsafeRaw.math`a_1, dots, a_n`}
包围起来的可求长曲线，但不经过任何一个 ${unsafeRaw.math`a_k`}，并且其起点与终点重合，那么：`,
              inline(
                labelled(
                  [
                    unsafeRaw.math
                      .block`limits(integral.cont)_gamma f(z) dif z = 2 ppi ii sum_(k=1)^n op(I)(gamma, a_k) Res(f, a_k).`,
                    space,
                  ],
                  label('res'),
                ),
              ),
              inline`如果 ${unsafeRaw.math`gamma`} 是若尔当曲线，那么 ${unsafeRaw.math`op(I)(gamma, a_k) = 1`}，因此：`,
              inline(
                labelled(
                  [
                    unsafeRaw.math.block`limits(integral.cont)_gamma f(z) dif z = 2 ppi ii sum_(k=1)^n Res(f, a_k).`,
                    space,
                  ],
                  label('resthm'),
                ),
              ),
              inline`在这里，${unsafeRaw.math`Res(f, a_k)`} 表示 ${unsafeRaw.math`f`} 在点 ${unsafeRaw.math`a_k`} 的留数，${unsafeRaw.math`op(I)(gamma, a_k)`}
表示 ${unsafeRaw.math`gamma`} 关于点 ${unsafeRaw.math`a_k`} 的卷绕数。卷绕数是一个整数，它描述了曲线 ${unsafeRaw.math`gamma`}
绕过点 ${unsafeRaw.math`a_k`} 的次数。如果 ${unsafeRaw.math`gamma`} 依逆时针方向绕着 ${unsafeRaw.math`a_k`} 移动，卷绕数就是一个正数，如果 ${unsafeRaw.math`gamma`}
根本不绕过 ${unsafeRaw.math`a_k`}，卷绕数就是零。`,
              inline`${ref(label('thm:res'))} 的证明。`,
              inline(proof(blocks('首先，由……', '其次，……', '所以……'))),
            ),
          ),
          space,
        ],
        label('thm:res'),
      ),
    ),
    m.heading(2, '引用文献的标注'),
    inline`正文中引用参考文献时，使用 ${raw('@Yu2001 @Cheng1999 @Li1999')} 可以产生"上标引用的参考文献"，如 ${ref(label('Yu2001'))}
${ref(label('Cheng1999'))} ${ref(label('Li1999'))}。`,
    'Typst 使用 Hayagriva 管理参考文献，有部分细节问题还在逐步修复。',
    m.heading(1, '图表、算法格式'),
    m.heading(2, '插图'),
    inline`本模板使用 ${raw('imagex')} 函数对图片环境进行封装，在实现子图，双语图题等复杂功能的同时，仍保留较高的自定义程度，将通过下面的示例进行说明。图片的引用须以 ${raw('img')}
开头。`,
    m.heading(3, '单个图形'),
    inline`图要有图题，图题采用中文，并置于图的编号之后，图的编号和图题应置于图下方的居中位置。文中必须有关于本插图的提示，如${ref(label('img:image'))} 所示。该页空白不够排写该图整体时，则可将其后文字部分提前排写，将图移到次页。`,
    inline(
      imagex(
        { caption: inline`内热源沿径向的分布`, labelName: 'image' },
        image({ width: pct(80) }, path('figures/energy-distribution.png')),
      ),
    ),
    m.heading(3, '多个图形'),
    inline`简单插入多个图形的例子如${ref(label('img:SRR'))} 所示。这两个水平并列放置的子图共用一个图形计数器，没有各自的子图题。`,
    inline(
      imagex(
        { columns: [fr(1), fr(1)], caption: inline`不同情景下上海市乘用车的温室气体排放量`, labelName: 'SRR' },
        image(path('figures/emissions-variation.png')),
        image(path('figures/emissions-2050.png')),
      ),
    ),
    inline`如果多个图形相互独立，并不共用一个图形计数器，那么用 ${raw('grid')} 或者 ${raw('columns')} 就可以，如${ref(label('img:parallel1'))}
与${ref(label('img:parallel2'))}。`,
    inline(
      grid(
        { align: bottom, columns: [fr(1), fr(1)] },
        grid.cell(
          imagex(
            { caption: inline`温室气体排放量随时间变化的情况`, labelName: 'parallel1' },
            image(path('figures/emissions-variation.png')),
          ),
        ),
        grid.cell(
          imagex(
            { caption: inline`2050 年的温室气体排放量`, labelName: 'parallel2' },
            image(path('figures/emissions-2050.png')),
          ),
        ),
      ),
    ),
    inline`如果要为共用一个计数器的多个子图添加子图题，使用 ${raw('subimagex')}，如${ref(label('img:subfigures'))} 所示。`,
    inline(
      imagex(
        { columns: [fr(1), fr(1)], caption: inline`不同情景下上海市乘用车的温室气体排放量`, labelName: 'subfigures' },
        subimagex(
          { caption: inline`温室气体排放量随时间变化的情况`, labelName: 'test1' },
          image(path('figures/emissions-variation.png')),
        ),
        subimagex(
          { caption: inline`2050 年的温室气体排放量`, labelName: 'test2' },
          image(path('figures/emissions-2050.png')),
        ),
      ),
    ),
    m.heading(2, '表格'),
    inline`本模板使用 ${raw('tablex')} 函数对表格进行封装，实现了自动续表和表格脚注功能，表格的引用须以 ${raw('tbl')} 开头。`,
    m.heading(3, '基本表格'),
    '编排表格应简单明了，表达一致，明晰易懂，表文呼应、内容一致。表题置于表上。',
    inline`表格的编排建议采用国际通行的三线表${footnote(inline`三线表，以其形式简洁、功能分明、阅读方便而在科技论文中被推荐使用。三线表通常只有 3 条线，即顶线、底线和栏目线，没有竖线。`)}，如${ref(label('tbl:standard-table'))}
所示。`,
    inline(
      tablex(
        {
          header: [
            table.cell({ colspan: 2 }, inline`Item`),
            inline(),
            table.hline({ end: 2, stroke: pt(0.25) }),
            inline`Animal`,
            inline`Desciption`,
            inline`Price($)`,
          ],
          columns: 3,
          caption: inline`一个颇为标准的三线表`,
          labelName: 'standard-table',
        },
        inline`Gnat`,
        inline`per gram`,
        inline`13.65`,
        inline(),
        inline`each`,
        inline`0.01`,
        inline`Gnu`,
        inline`stuffed`,
        inline`92.50`,
        inline`Emu`,
        inline`stuffed`,
        inline`33.33`,
        inline`Armadillo`,
        inline`frozen`,
        inline`8.99`,
      ),
    ),
    m.heading(3, '复杂表格'),
    inline`我们经常会在表格下方标注数据来源，或者对表格里面的条目进行解释。可以用 ${raw('table-note')} 在表格中添加表注，如${ref(label('tbl:footnote-table'))}
所示。`,
    inline(
      tablex(
        {
          align: horizon,
          breakable: false,
          header: [
            table.cell({ rowspan: 2 }, inline`total`),
            table.cell({ colspan: 2 }, inline`20${tableNote('the first note.')}`),
            table.cell({ rowspan: 2 }, inline()),
            table.cell({ colspan: 2 }, inline`40`),
            table.cell({ rowspan: 2 }, inline()),
            table.cell({ colspan: 2 }, inline`60`),
            table.hline({ end: 3, stroke: pt(0.25) }),
            table.hline({ start: 4, end: 6, stroke: pt(0.25) }),
            table.hline({ start: 7, end: 9, stroke: pt(0.25) }),
            inline`www`,
            inline`k`,
            inline`www`,
            inline`k`,
            inline`www`,
            inline`k`,
          ],
          columns: 9,
          caption: inline`一个带有脚注的表格的例子`,
          labelName: 'footnote-table',
        },
        inline(),
        inline`4.22`,
        inline`120.0140${tableNote('the second note.')}`,
        inline(),
        inline`333.15`,
        inline`0.0411`,
        inline(),
        inline`444.99`,
        inline`0.1387`,
        inline(),
        inline`168.6123`,
        inline`10.86`,
        inline(),
        inline`255.37`,
        inline`0.0353`,
        inline(),
        inline`376.14`,
        inline`0.1058`,
        inline(),
        inline`6.761`,
        inline`0.007`,
        inline(),
        inline`235.37`,
        inline`0.0267`,
        inline(),
        inline`348.66`,
        inline`0.1010`,
      ),
    ),
    inline`如某个表需要转页接排，${raw('tablex')} 自动实现了续表功能。接排时表题省略，表头应重复书写，并在右上方写"续表 xx"，如${ref(label('tbl:long-table'))}
所示。（注意：当表格跨页时，脚注不能添加在表头中，会导致重复标注，此时应传入参数 ${raw('breakable: false')}，取消续表功能。）`,
    inline(unsafeRaw.code<any>`tablex(
  ..for i in range(15) {
    ([250], [88], [5900], [1.65])
  },
  header: (
    [感应频率 #linebreak() (kHz)],
    [感应发生器功率 #linebreak() (%×80kW)],
    [工件移动速度 #linebreak() (mm/min)],
    [感应圈与零件间隙 #linebreak() (mm)],
  ),
  columns: (25%, 25%, 25%, 25%),
  caption: [高频感应加热的基本参数],
  label-name: "long-table",
)`),
    m.heading(2, '算法环境'),
    inline`本模板使用 ${raw('algox')} 函数对算法环境进行封装，其中使用的算法包为 ${raw('lovelace')}，需要自定义 ${raw('pseudocode-list')}
的格式时可自行查询 ${raw('lovelace')} 的文档。算法的应用须以 ${raw('algo')} 开头。算法与表格一样也实现了跨页自动添加"须算法"的功能。`,
    inline`我们可以通过${ref(label('algo:fibonacci'))} 来计算斐波那契数列第 ${unsafeRaw.math`n`} 项。`,
    m.lines(
      tmpDecl,
      inline(
        algox(
          { labelName: 'fibonacci', caption: inline`斐波那契数列计算` },
          pseudocodeList(
            { lineGap: em(1), indentation: em(2) },
            blocks(
              m.lines(
                m.list(
                  m.item([h(em(-1.5)), space, strong(inline`input:`), space, 'integer', space, unsafeRaw.math`n`]),
                  m.item([
                    h(em(-1.5)),
                    space,
                    strong(inline`output:`),
                    space,
                    'Fibonacci number',
                    space,
                    unsafeRaw.math`F(n)`,
                  ]),
                ),
                m.enum(
                  m.item([
                    strong(inline`if`),
                    space,
                    unsafeRaw.math`n = 0`,
                    space,
                    strong(inline`then return`),
                    space,
                    unsafeRaw.math`0`,
                  ]),
                  m.item([
                    strong(inline`if`),
                    space,
                    unsafeRaw.math`n = 1`,
                    space,
                    strong(inline`then return`),
                    space,
                    unsafeRaw.math`1`,
                  ]),
                  m.item([unsafeRaw.math`a <- 0`]),
                  m.item([unsafeRaw.math`b <- 1`]),
                  m.item(
                    m.lines(
                      inline(
                        strong(inline`for`),
                        space,
                        unsafeRaw.math`i`,
                        space,
                        strong(inline`from`),
                        space,
                        unsafeRaw.math`2`,
                        space,
                        strong(inline`to`),
                        space,
                        unsafeRaw.math`n`,
                        space,
                        strong(inline`do`),
                      ),
                      m.enum(
                        m.item([unsafeRaw.math`tmp <- a + b`]),
                        m.item([unsafeRaw.math`a <- b`]),
                        m.item([unsafeRaw.math`b <- tmp`]),
                      ),
                    ),
                  ),
                  m.item([strong(inline`end`)]),
                  m.item([strong(inline`return`), space, unsafeRaw.math`b`]),
                ),
              ),
            ),
          ),
        ),
      ),
    ),
    m.heading(2, '代码环境'),
    inline`我们可以在论文中插入算法，但是不建议插入大段的代码。如果确实需要插入代码，推荐使用 ${raw('codly')} 包插入代码。`,
    inline(
      raw(
        { block: true, lang: 'python' },
        'def fibonacci(n: int) -> int:\n    """计算斐波那契数列的第 n 项"""\n    if n == 0:\n        return 0\n    if n == 1:\n        return 1\n\n    a = 0\n    b = 1\n    for i in range(2, n + 1):\n        tmp = a + b\n        a = b\n        b = tmp\n    return b',
      ),
    ),
    m.heading(1, '绘图'),
    inline(labelled(heading({ depth: 2 }, inline('流程图')), label('sec:flowchart'))),
    inline`${raw('fletcher')} 是一个基于 ${raw('CeTZ')} 的 ${raw('Typst')} 包，用于绘制流程图，功能丰富，可参考 ${raw('fletcher')}
的文档进行学习。`,
    m.lines(
      unsafeRaw.markup`#import "@preview/fletcher:0.5.8" as fletcher: diagram, edge, node`,
      unsafeRaw.markup`#import fletcher.shapes: diamond, parallelogram`,
    ),
    inline(
      imagex(
        { caption: inline`绘制流程图效果`, captionEn: inline`Flow chart`, labelName: 'fletcher-example' },
        unsafeRaw.code<any>`diagram(
    node-stroke: 0.5pt,
    node-inset: 1em,
    edge-corner-radius: 0pt,
    spacing: 2.5em,

    (
      node((0, 0), "待测图片", corner-radius: 5pt),
      node((0, 1), "读取背景", shape: parallelogram),
      node((0, 2), "匹配特征点对"),
      node((0, 3), "多于阈值", shape: diamond),
    )
      .intersperse(edge("-|>"))
      .join(),
    (
      node((0, 4), "透视变换矩阵"),
      node((0, 5), "图像修正"),
      node((0, 6), "配准结果", corner-radius: 5pt),
    )
      .intersperse(edge("-|>"))
      .join(),
    node((3, 2), "重采"),
    edge("<|-", [是]),
    node((3, 3), "清晰?", shape: diamond),
    edge("-|>", [是]),
    node((3, 4), "仿射变换矩阵"),

    edge((0, 3), (0, 4), [是], "-|>"),
    edge((0, 3), (3, 3), [否], "-|>"),
    edge((3, 4), (0, 5), "-|>", corner: right),
    edge((3, 2), (0, 0), "-|>", corner: left),
  )`,
      ),
    ),
    m.heading(2, '数据图'),
    inline`${raw('lilaq')} 是一个强大的 Typst 绘图库，可以绘制各种类型的数据图。`,
    importPackage('@preview/lilaq:0.5.0', lq),
    m.lines(xsDecl, patternDecl_2),
    inline(
      imagex(
        { caption: inline`绘制折线图效果`, captionEn: inline`Line plots`, labelName: 'lilaq-line-example' },
        lq_diagram(
          {
            width: cm(10),
            height: cm(6),
            title: inline`Precious data`,
            xlabel: unsafeRaw.math`x`,
            ylabel: unsafeRaw.math`y`,
          },
          lq_plot({ mark: 's', label: inline`A` }, xs, y1),
          lq_plot({ mark: 'o', label: inline`B` }, xs, y2),
        ),
      ),
    ),
    m.lines(
      importPackage('@preview/suiji:0.5.1', suiji),
      rngDecl,
      patternDecl_3,
      patternDecl_4,
      patternDecl_5,
      patternDecl_6,
    ),
    inline(
      imagex(
        { caption: inline`绘制散点图效果`, captionEn: inline`Scatter`, labelName: 'lilaq-scatter-example' },
        lq_diagram(
          { width: cm(10), height: cm(6) },
          lq_scatter(
            { size: unsafeRaw.code<any>`sizes.map(size => 1000 * size)`, color: colors, map: color.map.magma },
            x,
            y,
          ),
        ),
      ),
    ),
    m.heading(1, '全文总结'),
    m.heading(2, '主要结论'),
    inline`本文主要研究了${sym.dots.h}${sym.dots.h}`,
    inline`正文与附录的总字数为：${totalWords}。`,
    m.heading(2, '研究展望'),
    inline`更深入的研究方向包括${sym.dots.h}${sym.dots.h}`,
    inline(call(bib, { bibfunc: bibliography.with(path('ref.bib')), full: false })),
    inline(
      call(
        acknowledgement,
        blocks(
          '本论文是在导师的悉心指导下完成的。导师渊博的专业知识、严谨的治学态度、精益求精的工作作风深深地感染和激励着我。在此谨向导师致以诚挚的谢意和崇高的敬意。',
          '感谢实验室的各位老师和同学，在学习和生活中给予我的关心和帮助。',
          '感谢我的家人和朋友，感谢他们一直以来的理解、支持和鼓励。',
        ),
      ),
    ),
    show(appendix_2),
    inline(labelled(heading({ depth: 1 }, inline('Maxwell Equations')), label('app:flowchart'))),
    bf_2.decl,
    inline`选择二维情况，有如下的偏振矢量：
${unsafeRaw.math.block`bf(E) & = E_z (r, theta) hat(bf(z)), \\
  bf(H) & = H_r (r, theta) hat(bf(r)) + H_theta (r, theta) hat(bold(theta)).`}`,
    inline`对上式求旋度：
${unsafeRaw.math
  .block`nabla times bf(E) & = 1 / r (partial E_z) / (partial theta) hat(bf(r)) - (partial E_z) / (partial r) hat(bold(theta)), \\
  nabla times bf(H) & = [1 / r partial / (partial r) (r H_theta) - 1 / r (partial H_r) / (partial theta)] hat(bf(z)).`}`,
    inline`因为在柱坐标系下，${unsafeRaw.math`macron(macron(mu))`} 是对角的，所以 Maxwell 方程组中电场 ${unsafeRaw.math`bf(E)`}
的旋度：
${unsafeRaw.math.block`& nabla times bf(E) = upright(i) omega bf(B), \\
  & 1 / r (partial E_z) / (partial theta) hat(bf(r)) - (partial E_z) / (partial r) hat(bold(theta)) = upright(i) omega mu_r H_r hat(bf(r)) + upright(i) omega mu_theta H_theta hat(bold(theta)).`}`,
    inline`所以 ${unsafeRaw.math`bf(H)`} 的各个分量可以写为：
${unsafeRaw.math.block`H_r & = 1 / (ii omega mu_r) 1 / r (partial E_z) / (partial theta), \\
  H_theta & = 1 / (ii omega mu_theta) 1 / r (partial E_z) / (partial r).`}`,
    inline`同样地，在柱坐标系下，${unsafeRaw.math`macron(macron(epsilon.alt))`} 是对角的，所以 Maxwell 方程组中磁场 ${unsafeRaw.math`bf(H)`}
的旋度：
${unsafeRaw.math.block`& nabla times bf(H) = -ii omega bf(D), \\
  & [1 / r partial / (partial r) (r H_theta) - 1 / r (partial H_r) / (partial theta)] hat(bf(z)) = -ii omega macron(macron(epsilon.alt)) bf(E) = -ii omega epsilon.alt_z E_z hat(bf(z)), \\
  & 1 / r partial / (partial r)(r H_theta) - 1 / r (partial H_r) / (partial theta) = -ii omega epsilon.alt_z E_z.`}`,
    inline`由此我们可以得到关于 ${unsafeRaw.math`E_z`} 的波函数方程：
${unsafeRaw.math.block`1 / (mu_theta epsilon.alt_z) 1 / r partial / (partial r) (r (partial E_z) / (partial r)) + 1 / (mu_r epsilon.alt_z) 1 / r^2 (partial^2 E_z) / (partial theta^2) + omega^2 E_z = 0.`}`,
    m.heading(1, '实验数据'),
    '本附录提供了详细的实验数据。',
    inline(unsafeRaw.code<any>`tablex(
  ..for i in range(10) {
    ([方法], str(i+1), str(0.85 + 0.01 * i), str(0.82 + 0.01 * i), str(0.83 + 0.01 * i))
  },
  header: (
    [方法名称], [编号], [准确率], [召回率], [F1分数]
  ),
  columns: 5,
  caption: [不同方法的性能对比数据],
  label-name: "exp-data",
)`),
  )
}
