// Converted from test/universe/corpus/bone-resume.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  auto,
  blocks,
  box,
  cm,
  codeBlock,
  color,
  define,
  deg,
  doc,
  em,
  external,
  fr,
  grid,
  h,
  importPackage,
  inline,
  linebreak,
  link,
  ltr,
  m,
  move,
  pct,
  pt,
  raw,
  show,
  space,
  stack,
  strong,
  text,
  unsafeRaw,
  v,
} from '../../../src/index.ts'

export default () => {
  const resumeInit = external('resume-init')
  const resumeSection = define('resume-section')
    .pos('arg1', T.any)
    .pos('arg2', T.any)
    .pos('arg3', T.content)
    .returns(T.any)
    .external()
  const resumeInit_with = define('with')
    .named('author', T.any, null)
    .named('footer', T.content, [])
    .returns(T.any)
    .external(resumeInit)
  const stars = define('stars')
    .pos('num', T.any)
    .returns(T.any)
    .body(
      (p) => unsafeRaw.code<any>`{
  for _ in range(num) {
    [#emoji.star]
  }
}`,
    )
  const level = define('level')
    .pos('num', T.any)
    .named('desc', T.any, null)
    .returns(T.any)
    .body((p) =>
      codeBlock([
        unsafeRaw.code<any>`if desc == none {
    if num < 3 {
      desc = "了解"
    } else if num < 5 {
      desc = "掌握"
    } else if num < 7 {
      desc = "熟练"
    } else {
      desc = "精通"
    }
  }`,
        inline(p['desc']),
      ]),
    )
  return doc(
    m.lines(
      unsafeRaw.markup`#import emoji: star`,
      importPackage('@preview/bone-resume:0.3.1', [resumeInit, resumeSection]),
    ),
    m.lines(
      show(
        resumeInit_with({
          author: '张三',
          footer: inline`Powered by ${link('https://github.com/typst/packages/tree/main/packages/preview/bone-resume', inline`BoneResume`)}`,
        }),
      ),
      inline(
        stack(
          { dir: ltr, spacing: fr(1) },
          text({ size: pt(24) }, inline(strong(inline`张三`))),
          stack(
            { spacing: em(0.75) },
            inline`微信: weixin`,
            inline`电话: 188 8888 8888`,
            inline`邮箱: ${link('mailto:admin@qq.com', inline`admin@qq.com`)}`,
          ),
          stack(
            { spacing: em(0.75) },
            inline`GitHub: ${link('https://github.com/zrr1999', inline`github.com/zrr1999`)}`,
            inline`个人主页: ${link('https://www.bone6.top', inline`www.bone6.top`)}`,
          ),
          move(
            { dy: em(-2) },
            box({
              height: pt(84),
              width: pt(60),
              fill: color.hsv(deg(240), pct(10), pct(100)),
              inset: pt(5),
              radius: pt(3),
            }),
          ),
        ),
      ),
    ),
    m.lines(
      inline(v(em(-4))),
      m.heading(1, '教育背景'),
      inline`西安电子科技大学 ${h(cm(2))} 智能科学与技术专业（学士） ${h(fr(1))} 2018.09-2022.07${linebreak()}
西安电子科技大学 ${h(cm(2))} 计算机科学与技术专业（在读硕士） ${h(fr(1))} 2022.09-2025.07`,
    ),
    m.lines(
      m.heading(1, '开源贡献'),
      inline(
        resumeSection(
          link('https://github.com/PaddlePaddle/CINN', inline`PaddlePaddle/CINN`),
          '针对神经网络的编译器基础设施',
          inline`${space}添加了 argmax, sort, gather, gather_nd, scatter_nd 等算子, 实现了 CSE Pass 和
ReverseComputeInline 原语以及参与了一些单元测试补全，具体内容见
${link('https://github.com/PaddlePaddle/CINN/pulls?q=is%3Apr+author%3Azrr1999+is%3Aclosed', inline`相关 PR`)}。${space}`,
        ),
      ),
    ),
    inline(
      resumeSection(
        link('https://github.com/PaddlePaddle/Paddle', inline`PaddlePaddle/Paddle`),
        '高性能单机、分布式训练和跨平台部署框架',
        inline`${space}添加了 remainder_, sparse_transpose, sparse_sum 三个算子， 实现了 TensorRT onehot
算子转换功能，以及修复了一些bug，具体内容见
${link('https://github.com/PaddlePaddle/Paddle/pulls?q=is%3Apr+author%3Azrr1999+is%3Aclosed', inline`相关 PR`)}。${space}`,
      ),
    ),
    m.lines(
      m.heading(1, '实习经历'),
      inline(
        resumeSection(
          inline`${link('https://github.com/PaddlePaddle/PaddleSOT', inline`百度飞桨框架开发-动转静小组`)}（线上实习）`,
          '2023.07.01-2023.10.31',
          blocks(
            m.lines(
              inline`主要工作是参与 ${link('https://github.com/PaddlePaddle/PaddleSOT', inline`PaddleSOT`)} 的开发，主要贡献包括：`,
              m.enum(
                m.item(['添加注册优先级机制并重构模拟变量机制。']),
                m.item(['优化字节码模拟执行报错信息和', raw('GitHub Actions'), '日志信息。']),
                m.item(['实现', space, raw('VariableStack'), space, '并添加子图打断的', raw('Python3.11'), '支持。']),
              ),
            ),
          ),
        ),
        space,
        resumeSection(
          inline`${link('https://github.com/PaddlePaddle/Paddle', inline`百度飞桨框架开发-PIR项目`)}（线上实习）`,
          '2023.11.01-2024.05.31',
          blocks(
            m.lines(
              inline`主要工作是参与 ${link('https://github.com/PaddlePaddle/Paddle', inline`Paddle`)} 中 PIR
组件的开发，主要贡献包括：`,
              m.enum(
                m.item(['Python API 适配升级。']),
                m.item(['API 类型检查的生成机制实现。']),
                m.item(['添加', space, raw('InvalidType'), space, '错误类型。']),
              ),
            ),
          ),
        ),
      ),
    ),
    m.lines(m.heading(1, '个人技能'), stars.decl),
    level.decl,
    inline(
      grid(
        { columns: [pt(60), fr(1), auto], rows: auto, gutter: pt(6) },
        'Python',
        inline`有丰富的大型开源项目开发经验，熟悉字节码等机制并有实际项目经验${space}`,
        level(8),
        'C/C++',
        inline`有较为丰富的大型开源项目开发经验，擅长编写高性能算子`,
        level(5),
        'CUDA',
        inline`有一定的的大型开源项目算子开发经验`,
        level(4),
        'JS/TS',
        inline`有多项前端或全栈小型项目开发经验，获得若干奖项`,
        level(4),
        'Rust',
        inline`有局部修改其他开源项目的经历，了解基本的工具链`,
        level(3),
        'Typst',
        inline`对 Typst 语言的实现原理有过了解，修复过官方示例中小错误`,
        level(3),
        'LaTeX',
        inline`在本科期间，作为主要编写文档的工具使用至少三年`,
        level(3),
      ),
    ),
  )
}
