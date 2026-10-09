// Converted from test/universe/corpus/silky-letter-insa.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  align,
  assume,
  center,
  datetime,
  define,
  doc,
  external,
  heading,
  importPackage,
  inline,
  linebreak,
  m,
  pt,
  raw,
  set,
  show,
  space,
  text,
  unsafeRaw,
  upper,
  v,
} from '../../../src/index.ts'

export default () => {
  const insaLetter = define('insa-letter')
    .pos('arg1', T.any)
    .named('author', T.content, [])
    .named('date', T.any, null)
    .returns(T.any)
    .external()
  const insaHeadingFonts = external('insa-heading-fonts')
  return doc(
    m.lines(
      importPackage('@preview/silky-letter-insa:0.2.3', [insaLetter, insaHeadingFonts]),
      show((doc_2, ctx) =>
        insaLetter(
          { author: inline`${space}NOM Prénom${linebreak()} Rôle / Département${space}`, date: datetime.today() },
          doc_2,
        ),
      ),
    ),
    inline(
      v(pt(15)),
      space,
      align(
        center,
        text({ size: pt(22), font: insaHeadingFonts, weight: 'bold' }, assume<'str'>(upper('Probabilités - Annale X'))),
      ),
      space,
      v(pt(5)),
    ),
    inline(set(heading, { numbering: '1.' })),
    m.lines(
      m.heading(1, 'Gros titre'),
      m.heading(2, 'Sous section'),
      inline`Équation sur une ligne : ${unsafeRaw.math`overline(x_n) = 1/n sum_(i=1)^n x_i`}`,
    ),
    m.lines(
      m.heading(2, 'Autre sous section'),
      inline`Grosse équation : ${unsafeRaw.math
        .block`"Variance biaisée :" s^2 &= 1/n sum_(i=1)^n (x_i - overline(x_n))^2\\
"Variance corrigée :" s'^2 &=  n/(n-1) s^2`}`,
    ),
    m.lines(
      m.heading(3, 'Petite section'),
      inline`Code R : ${raw({ block: true, lang: 'R' }, 'data = c(1653, 2059, 2281, 1813, 2180, 1721, 1857, 1677, 1728)\nmoyenne = mean(data)\ns_prime = sqrt(var(data)) # car la variance de R est déjà corrigée\nn = 9\nalpha = 0.08\n\nIC_min = moyenne + qt(alpha / 2, df = n - 1) * s_prime / sqrt(n)\nIC_max = moyenne + qt(1 - alpha / 2, df = n - 1) * s_prime / sqrt(n)')}`,
    ),
  )
}
