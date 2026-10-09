// Converted from test/universe/corpus/may.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  define,
  doc,
  external,
  figure,
  importPackage,
  inline,
  lorem,
  m,
  raw,
  right,
  show,
  table,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const may = external('may')
  const vb = external('vb')
  const wrapContent = define('wrap-content')
    .pos('arg1', T.any)
    .pos('arg2', T.any)
    .named('align', T.any, null)
    .returns(T.any)
    .external()
  return doc(
    m.lines(
      importPackage('@preview/may:0.1.2', [may, vb]),
      importPackage('@preview/wrap-it:0.1.1', [wrapContent]),
      show(may),
    ),
    m.heading(1, 'May'),
    '>| A simple and elegant template for multiple daily tasks',
    inline(lorem(24)),
    m.heading(2, 'Tables and Wraps'),
    inline(
      wrapContent(
        { align: right },
        figure(
          { caption: inline`A sample table, ours is the best.` },
          table(
            { columns: 3 },
            'Benchmark',
            'A/%',
            'B/%',
            table.hline(),
            'jo',
            '13.3',
            '33.2',
            'jojo',
            '11.1',
            '28.3',
            'ours',
            '100.0',
            '100.0',
            table.hline(),
          ),
        ),
        lorem(60),
      ),
    ),
    m.heading(2, 'Codeblocks and Formulas'),
    inline`Inline raw code such as ${raw('mean + sigma * noise')} now stays inline and fenced code stays
block-level.`,
    inline(unsafeRaw.math
      .block`vb(x)_(t+1) &= sqrt(macron(alpha)_t) vb(x)_0 + sqrt(1 - macron(alpha)_t) vb(epsilon) quad &"Forward"\\
vb(x)_(t-1) &= 1/sqrt(1 - beta_t) (vb(x)_t - (beta_t)/sqrt(1 - macron(alpha)_t) vb(epsilon)_theta (vb(x)_t, t)) + sqrt(beta_t) vb(epsilon) quad &"Backward"`),
    inline(
      raw(
        { block: true, lang: 'python' },
        '# DDPM step\ndef p_sample_ddpm(self, model: nn.Module, x_t: torch.Tensor, t: torch.Tensor):\n    eps = model(x_t, t)\n    beta_t = self.betas[t][:, None, None, None]\n    alpha_t = self.alphas[t][:, None, None, None]\n    alpha_bar_t = self.alpha_bars[t][:, None, None, None]\n    sqrt_one_minus_alpha_bar_t = self.sqrt_one_minus_alpha_bars[t][:, None, None, None]\n    mean = 1 / torch.sqrt(alpha_t) * (x_t - beta_t / sqrt_one_minus_alpha_bar_t * eps)\n    if (t == 0).all():\n        return mean\n    noise = torch.randn_like(x_t)\n    sigma = torch.sqrt(beta_t)\n    return mean + sigma * noise',
      ),
    ),
  )
}
