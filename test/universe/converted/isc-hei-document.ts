// Converted from test/universe/corpus/isc-hei-document.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  auto,
  blue,
  center,
  datetime,
  define,
  doc,
  emph,
  external,
  figure,
  fr,
  image,
  importPackage,
  inline,
  label,
  labelled,
  left,
  link,
  lorem,
  luma,
  m,
  pagebreak,
  path,
  pct,
  pt,
  quote,
  raw,
  read,
  ref,
  show,
  smallcaps,
  smartquote,
  space,
  strike,
  strong,
  table,
  text,
  underline,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const project = external('project')
  const code = define('code').pos('arg1', T.any).returns(T.any).external()
  const todo = define('todo').pos('arg1', T.content).returns(T.any).external()
  const theBibliography = define('the-bibliography')
    .named('bib-file', T.any, null)
    .named('full', T.any, null)
    .named('style', T.any, null)
    .returns(T.any)
    .external()
  const project_with = define('with')
    .named('authors', T.any, null)
    .named('code-theme', T.any, null)
    .named('date', T.any, null)
    .named('doc-type', T.any, null)
    .named('fancy-line', T.any, null)
    .named('language', T.any, null)
    .named('logo', T.any, null)
    .named('revision', T.any, null)
    .named('show-cover', T.any, null)
    .named('show-toc', T.any, null)
    .named('subtitle', T.content, [])
    .named('title', T.any, null)
    .returns(T.any)
    .external(project)
  return doc(
    importPackage('@preview/isc-hei-document:0.8.1', [project, code, todo, theBibliography]),
    show(
      project_with({
        docType: 'document',
        showCover: false,
        showToc: false,
        fancyLine: true,
        title: 'A simple template for ISC documents',
        subtitle: inline`Typeset with ${raw('Typst')}`,
        authors: ['A. Lovelace', 'Prof. B. Liskov', 'Prof. N. Wirth'],
        date: datetime({ year: 2026, month: 3, day: 24 }),
        revision: '1.0',
        language: 'fr',
        logo: auto,
        codeTheme: 'bluloco-light',
      }),
    ),
    m.heading(1, 'Introduction'),
    inline`Ce document présente un aperçu des fonctionnalités offertes par ${link('https://typst.app', inline`Typst`)},
un système de composition typographique moderne. Les sections suivantes illustrent la mise en
forme de texte, les listes, les tableaux, les images, le code source, les formules mathématiques
et bien plus encore.`,
    inline(lorem(100)),
    inline(lorem(100)),
    m.heading(1, 'Mise en forme du texte'),
    inline`Typst offre une syntaxe simple et intuitive pour formater du texte. On peut écrire en ${strong(inline`gras`)},
en ${emph(inline`italique`)}, ou en ${strong(inline(emph(inline`gras italique`)))}. Il est aussi
possible d'utiliser du ${raw('code en ligne')} directement dans le texte.`,
    inline`Les ${text({ fill: blue }, inline`couleurs`)} sont facilement applicables, tout comme les changements
de ${text({ size: pt(14) }, inline`taille`)} ou de ${text({ font: 'New Computer Modern' }, inline`police`)}.
On peut également ${underline(inline`souligner`)}, ${strike(inline`barrer`)} ou mettre en ${smallcaps(inline`petites capitales`)}.`,
    inline(
      quote(
        { block: true, attribution: inline`Donald Knuth` },
        inline`${space}The best programs are written so that computing machines can perform them quickly and
so that human beings can understand them clearly.${space}`,
      ),
    ),
    m.heading(2, 'Listes'),
    'Les listes à puces et numérotées sont très simples à créer :',
    m.list(
      m.item(['Premier élément']),
      m.item(
        m.lines(
          'Deuxième élément avec sous-éléments :',
          m.list(m.item(['Sous-élément A']), m.item(['Sous-élément B'])),
        ),
      ),
      m.item(['Troisième élément']),
    ),
    'Et les listes numérotées :',
    m.enum(
      m.item(['Analyser le problème']),
      m.item(['Concevoir une solution']),
      m.item(['Implémenter et tester']),
      m.item(['Documenter le résultat']),
    ),
    m.heading(1, 'Tableaux et figures'),
    m.heading(2, 'Tableaux'),
    'Les tableaux permettent de présenter des données de manière structurée. Voici un comparatif de quelques langages de programmation :',
    inline(
      labelled(
        [
          figure(
            { caption: inline`Comparaison de langages de programmation` },
            table(
              {
                columns: [auto, fr(1), fr(1), auto],
                align: [left, center, center, center],
                stroke: add(pt(0.5), luma(180)),
                inset: pt(8),
                fill: (x, y) =>
                  unsafeRaw.code<any>`if y == 0 { luma(230) } else if calc.odd(y) { luma(245) } else { white }`,
              },
              table.header(
                inline(strong(inline`Langage`)),
                inline(strong(inline`Paradigme`)),
                inline(strong(inline`Typage`)),
                inline(strong(inline`Année`)),
              ),
              inline`Python`,
              inline`Multi-paradigme`,
              inline`Dynamique`,
              inline`1991`,
              inline`Scala`,
              inline`Fonctionnel / OO`,
              inline`Statique`,
              inline`2004`,
              inline`Rust`,
              inline`Système`,
              inline`Statique`,
              inline`2010`,
              inline`Typst`,
              inline`Markup / Script`,
              inline`Dynamique`,
              inline`2023`,
              inline`C`,
              inline`Procédural`,
              inline`Statique`,
              inline`1972`,
            ),
          ),
          space,
        ],
        label('tab:langages'),
      ),
    ),
    inline`Comme le montre la ${ref(label('tab:langages'))}, chaque langage a ses propres caractéristiques.
On peut référencer les tableaux et figures automatiquement grâce aux labels.`,
    m.heading(2, 'Insertion d', smartquote({ double: false }), 'images'),
    inline`Les images s'insèrent facilement avec la fonction ${raw('image')}. Voici un exemple :`,
    inline(
      labelled(
        [
          figure(
            { caption: inline`Une image d'exemple insérée dans le document` },
            image({ width: pct(30) }, path('figs/random_image.png')),
          ),
          space,
        ],
        label('fig:exemple'),
      ),
    ),
    inline`La ${ref(label('fig:exemple'))} montre comment inclure une image avec une légende. Les images
peuvent être redimensionnées, alignées et référencées dans le texte.`,
    m.heading(1, 'Code et mathématiques'),
    m.heading(2, 'Blocs de code'),
    'Typst peut afficher du code source avec coloration syntaxique :',
    inline(
      code(
        raw(
          { block: true, lang: 'python' },
          'def fibonacci(n: int) -> list[int]:\n    """Génère les n premiers nombres de Fibonacci."""\n    fib = [0, 1]\n    for i in range(2, n):\n        fib.append(fib[-1] + fib[-2])\n    return fib\n\n# Afficher les 10 premiers\nprint(fibonacci(10))',
        ),
      ),
    ),
    'Et un autre exemple en Scala :',
    inline(
      code(
        raw(
          { block: true, lang: 'scala' },
          'case class Student(name: String, grade: Double)\n\nval students = List(\n  Student("Alice", 5.5),\n  Student("Bob", 4.8),\n  Student("Charlie", 5.9),\n)\n\nval average = students.map(_.grade).sum / students.length\nprintln(f"Moyenne: $average%.1f")',
        ),
      ),
    ),
    m.heading(2, 'Formules mathématiques'),
    inline`Typst dispose d'un excellent support des mathématiques. Par exemple, la formule d'Euler :`,
    inline(unsafeRaw.math.block`e^(i pi) + 1 = 0`),
    'Une intégrale classique :',
    inline(unsafeRaw.math.block`integral_0^infinity e^(-x^2) dif x = sqrt(pi) / 2`),
    inline`Ou encore la définition d'une matrice et d'un système d'équations :`,
    inline(unsafeRaw.math.block`bold(A) = mat(
  a_(1,1), a_(1,2), dots.c, a_(1,n);
  a_(2,1), a_(2,2), dots.c, a_(2,n);
  dots.v, dots.v, dots.down, dots.v;
  a_(m,1), a_(m,2), dots.c, a_(m,n);
)`),
    inline`Les formules en ligne comme ${unsafeRaw.math`sum_(k=1)^n k = n(n+1)/2`} s'intègrent naturellement
dans le texte.`,
    m.heading(2, 'Boîtes et encadrés'),
    inline`On peut utiliser les boîtes de ${raw('showybox')} pour mettre en valeur du contenu :`,
    inline(todo(inline`Compléter cette section avec d'autres exemples`)),
    m.lines(
      m.heading(1, 'Citer ses sources'),
      inline`Il est important de citer les sources que l'on utilise. Par exemple, les deux travaux ${ref(label('mui_nasa_dod09'))},
${ref(label('mui_hybrid_06'))} et ${ref(label('mudry:133438'))} sont des papiers très intéressants
à lire et dont les références complètes se trouvent dans la bibliographie à la fin de ce document.`,
    ),
    inline(
      pagebreak(),
      space,
      theBibliography({ bibFile: read({ encoding: null }, path('bibliography.bib')), full: true, style: 'ieee' }),
    ),
  )
}
