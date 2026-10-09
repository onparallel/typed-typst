// Converted from test/universe/corpus/zhaji.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, external, importPackage, inline, m, show, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const note = external('note')
  const dd = external('dd')
  const def = define('def').pos('arg1', T.content).pos('arg2', T.content).returns(T.any).external()
  const thm = define('thm').pos('arg1', T.content).pos('arg2', T.content).returns(T.any).external()
  const hint = define('hint').pos('arg1', T.content).pos('arg2', T.content).returns(T.any).external()
  return doc(
    m.lines(importPackage('@preview/zhaji:0.1.0', [note, dd, def, thm, hint]), show(note)),
    m.lines(m.heading(1, '引论'), '这是引论'),
    m.lines(m.heading(2, '线性自治系统'), '线性自治系统是右端项不含时的线性系统'),
    m.lines(m.heading(3, '一阶线性方程'), '一阶线性方程是只含一阶导数的线性方程。'),
    m.heading(4, '核心模型'),
    inline`设 ${unsafeRaw.math`t`} 为时间自变量，${unsafeRaw.math`x(t)`} 表示系统的状态。`,
    inline`根据基本物理定律，变化率满足：
${unsafeRaw.math.block`frac(dd x, dd t) = - k x.`}`,
    inline(
      def(
        inline`系统状态`,
        inline`${space}系统在时刻 ${unsafeRaw.math`t`} 的全部特征由状态变量 ${unsafeRaw.math`x(t)`} 唯一刻画。${space}`,
      ),
    ),
    inline(
      thm(
        inline`衰减解的存在性`,
        inline`${space}方程的通解具有指数形式：
${unsafeRaw.math.block`x(t) = C e^(- k t), quad C in R.`}${space}`,
      ),
    ),
    inline(
      hint(
        inline`思考与拓展`,
        inline`${space}若初始时刻满足 ${unsafeRaw.math`x(0) = x_0`}，则特解为 ${unsafeRaw.math`x(t) = x_0 e^(- k t)`}。当 ${unsafeRaw.math`t -> +infinity`}
时系统状态渐近趋向于稳定平衡态。${space}`,
      ),
    ),
  )
}
