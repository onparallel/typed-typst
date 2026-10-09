// Converted from test/universe/corpus/simple-bupt-report.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  define,
  doc,
  figure,
  image,
  importPackage,
  inline,
  label,
  labelled,
  m,
  path,
  pct,
  raw,
  ref,
  show,
  space,
} from '../../../src/index.ts'

export default () => {
  const experimentReport = define('experiment-report')
    .pos('arg1', T.any)
    .named('class', T.any, null)
    .named('date', T.any, null)
    .named('name', T.any, null)
    .named('semester', T.any, null)
    .named('student-id', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external()
  return doc(
    m.lines(
      importPackage('@preview/simple-bupt-report:0.1.1', [experimentReport]),
      show((doc_2, ctx) =>
        experimentReport(
          {
            title: '《信号处理实验》实验报告',
            semester: '2024-2025学年第二学期',
            class: '2023211113',
            name: '张三',
            studentId: '2021123456',
            date: '2024年4月14日',
          },
          doc_2,
        ),
      ),
    ),
    m.heading(1, '实验一 频谱泄露实验'),
    m.heading(2, '实验目的'),
    '（1）掌握MATLAB的基本使用方法；',
    '（2）其他实验目的；',
    '（3）xxx。',
    m.lines(
      m.heading(2, '实验原理'),
      m.heading(3, '原理一'),
      inline`写一些使用到的原理，简略得当，过长将扣分。
插入公式，建议大家使用MathType，或者采用WPS自带的公式编辑器，如图1所示。`,
      m.heading(3, '原理二'),
    ),
    m.lines(
      m.heading(2, '实验步骤'),
      m.heading(3, '码上使用过程'),
      '写明码上问答过程及使用情况。',
      m.heading(3, 'Matlab实验过程'),
      inline`如${ref(label('bupt-logo'))} ，写明实验步骤，简明扼要。`,
    ),
    inline(
      labelled(
        [figure({ caption: 'BUPT校徽' }, image({ width: pct(30) }, path('example_picture.jpg'))), space],
        label('bupt-logo'),
      ),
    ),
    inline`代码高亮样例
${raw({ block: true, lang: 'matlab' }, 'N2 = 128;  % 信号长度，为了脚标统一设置为N2\nt2=(0:N2-1)/fs;  % 时间序列\nx2 = sin(120*pi*t2);  % 离散信号\nX2 = dft(x2,N2);  % DFT变换')}`,
    m.lines(
      m.heading(2, '实验结果与分析'),
      '展示得到的实验结果，并给出相应的分析。',
      m.heading(2, '码上使用心得体会'),
      '总结采用码上大模型开展实验的收获或者建议。',
    ),
    '这是个实验报告模板，所有样式已设置好，点击Word上方样式中相关样式，即可使用。',
  )
}
