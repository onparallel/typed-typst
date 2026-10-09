// Converted from test/universe/corpus/homiework.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  align,
  center,
  datetime,
  define,
  doc,
  external,
  importPackage,
  inline,
  m,
  raw,
  rect,
  show,
  space,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const homework = external('homework')
  const homework_with = define('with')
    .named('course', T.any, null)
    .named('date', T.any, null)
    .named('number', T.any, null)
    .named('semester', T.any, null)
    .returns(T.any)
    .external(homework)
  return doc(
    importPackage('@preview/homiework:0.1.0', [homework]),
    show(
      homework_with({
        course: 'MATH 000',
        semester: 'Spring 20XX',
        number: 'X',
        date: datetime({ year: 2026, month: 3, day: 24 }),
      }),
    ),
    m.heading(1, 'Problem 1'),
    inline`Given ${unsafeRaw.math`integral_(-infinity)^infinity |Psi(x,t)|^2 =1`} ${raw({ block: true, lang: 'python' }, 'def mean(x):\n  total = 0\n  for i in x:\n    total += i\n  return total / len(x)')}`,
    inline(align(center, inline(space, rect(inline(unsafeRaw.math.block`E = m c^2`)), space))),
    m.lines(
      m.heading(1, 'Problem 2'),
      'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.',
    ),
    'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.',
    'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.',
    'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.',
    'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.',
    inline(
      raw(
        { block: true, lang: 'matlab' },
        'T0 = 150;   \nTenv = 25;    \nk = 0.1;   \ntspan = [0, 50];\n\nt_ana = linspace(0, 50, 500);\nT_ana = Tenv + (T0 - Tenv) .* exp(-k .* t_ana);\n\nodefun = @(t, T) -k * (T - Tenv);\n[t_ode, T_ode] = ode45(odefun, tspan, T0);\n\ndt = 0.5;       \nt_rk = 0:dt:50;\nT_rk = zeros(size(t_rk));\nT_rk(1) = T0;\n\nfor i = 1:length(t_rk)-1\n    ti = t_rk(i);\n    Ti = T_rk(i);\n    f  = @(t, T) -k * (T - Tenv);\n    k1 = f(ti,        Ti);\n    k2 = f(ti + dt/2, Ti + dt/2 * k1);\n    k3 = f(ti + dt/2, Ti + dt/2 * k2);\n    k4 = f(ti + dt,   Ti + dt   * k3);\n    T_rk(i+1) = Ti + (dt/6) * (k1 + 2*k2 + 2*k3 + k4);\nend\n',
      ),
    ),
  )
}
