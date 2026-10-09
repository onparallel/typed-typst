// Converted from test/universe/corpus/lion-ecl.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  align,
  auto,
  bibliography,
  block,
  box,
  center,
  define,
  doc,
  em,
  emph,
  external,
  figure,
  fr,
  grid,
  heading,
  horizon,
  image,
  importPackage,
  inline,
  label,
  labelled,
  let_,
  linebreak,
  m,
  path,
  pct,
  pt,
  raw,
  ref,
  show,
  smartquote,
  space,
  strong,
  sym,
  table,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const project = external('project')
  const noNum = define('no-num').pos('arg1', T.content).returns(T.any).external()
  const codly = define('codly').named('annotations', T.any, null).returns(T.any).external()
  const project_with = define('with')
    .named('auteurs', T.any, null)
    .named('mentors', T.any, null)
    .named('subtitle', T.any, null)
    .named('titre', T.any, null)
    .returns(T.any)
    .external(project)
  const [schrodDecl, schrod] = let_('schrod', inline(unsafeRaw.math.block`i planck (d Psi(t))/(d t)  = hat(H) Psi(t)`))
  const [sumDecl, sum] = let_('sum', 0)
  const [dictDecl, dict_2] = let_('dict', { cle: 'valeur', cle2: 3 })
  return doc(
    m.lines(
      importPackage('@preview/lion-ecl:0.1.0', [project, noNum, codly]),
      show(project_with({ titre: 'Rapport', subtitle: 'Sous titre', auteurs: 'Le Lion', mentors: ['Ecully', 'Bob'] })),
    ),
    inline(heading({ numbering: null }, inline`Introduction`)),
    'On en a marre du temps de compilation infini du LateX, vive le typst, en plus la syntaxe est très facile',
    m.heading(1, 'Les bases du typst'),
    inline`On peut écrire en ${strong(inline`gras`)} ou en ${emph(inline`italique`)} comme ça.`,
    m.lines(
      'Pour faire des listes il y a le choix :',
      m.enum(
        m.item(['comme ça']),
        m.item(m.lines('aussi', m.enum(m.item(['sous liste']), m.item(['et là'])))),
        m.item(['et retour ici']),
      ),
    ),
    m.list(m.item(['liste sans numéro']), m.item(['hop'])),
    'On peut aussi faire des listes avec des termes :',
    m.terms(m.term(['FLE'], ['truc pas marrant']), m.term(['STR'], ['truc marrant'])),
    inline`Pour mettre des guillemets "c'est" 'basique'`,
    m.heading(2, 'Utiliser les identifiants'),
    inline`Supposons qu'on ait une équation super chiante à recopier`,
    inline(unsafeRaw.math.block`i planck (d Psi(t))/(d t)  = hat(H) Psi(t)`),
    'On peut lui mettre un identifiant :',
    schrodDecl,
    inline`et l'appeler par ${schrod}`,
    m.lines(
      inline`et ça marche avec n'importe quel type d'objet typst : texte, equation, figure, bloc de code,
fonction...`,
      inline(labelled(heading({ depth: 2 }, inline('Insérer une figure')), label('soustitre1'))),
    ),
    inline`On peut insérer une figure avec cette commande ${labelled(figure({ caption: inline`Le motif de l'ECL` }, image({ width: pct(70) }, path('images/motif.png'))), label('figure1'))}`,
    inline`Et ensuite la référencer avec ${ref(label('figure1'))}, en ayant pris soin d'ajouter un label
après ${raw('#figure()<label>')}`,
    inline`On peut aussi référencer le titre de cette partie ${ref(label('soustitre1'))}`,
    'Une image peut être en 3 modes :',
    inline(
      box(
        { width: pt(300), height: pt(200) },
        inline(
          space,
          grid(
            { columns: [fr(1), fr(1), fr(1)], gutter: pt(10) },
            image({ width: pct(100), height: pct(100), fit: 'cover' }, path('images/motif.png')),
            image({ width: pct(100), height: pct(100), fit: 'contain' }, path('images/motif.png')),
            image({ width: pct(100), height: pct(100), fit: 'stretch' }, path('images/motif.png')),
          ),
          space,
        ),
      ),
    ),
    m.heading(2, 'Faire des maths'),
    inline`C'est comme en latex mais sans les ${raw('\\')} :`,
    inline`Ici j'ai ${unsafeRaw.math`3x = 8 alpha integral_(beta = 8)^(delta = 9) Gamma(t) d t`}, mais
si il y a des espaces entre les ${raw('$')} et l’équation ça devient une grosse équation :`,
    inline`Ici j'ai ${unsafeRaw.math.block`3x = 8 alpha " et on ecrit au milieu " integral_(beta = 8)^(delta = 9) Gamma(t) d t`}`,
    inline`Pour les fractions : ${unsafeRaw.math`1/3 + (3x^2)/(8b + 6)`}`,
    'On peut aligner des équations comme en latex :',
    inline(unsafeRaw.math.block`x &= 2 \\
  8 b &= 36x^2 + 7x - 7`),
    m.heading(3, 'Vecteurs et matrices'),
    inline`C'est super simple ${noNum(inline(unsafeRaw.math.block`vec(1,2,3,4) = mat(1,0,0,0; 0,1,0,0; 0,0,1,0; 0,0,0,1)vec(1,2,3,4)`))}`,
    inline`On revient à la ligne dans les matrices avec ${strong(inline`;`)} et on peut désactiver la numérotation
avec ${raw('#no-num[$EQUATION$]')}`,
    m.heading(3, 'Symboles utiles'),
    inline`On a les ensembles usuels ${unsafeRaw.math.block`RR, NN, CC, QQ, ZZ`}`,
    inline`Mais aussi les nombres calligraphiés ${labelled(unsafeRaw.math.block`cal(M), cal(A), cal(E), cal(V)`, label('testlabel'))}`,
    inline`On a aussi : ${unsafeRaw.math`floor(3x + 6) ceil(9x - 1) x\\/3 -> => ==> <= !=`}`,
    m.heading(2, 'Citer la biblio'),
    inline`On peut citer ${ref(label('smith2024typst'))}, cela fait apparaître la ref dans la bibliographie`,
    m.heading(2, 'Mettre des tables'),
    'Sans grande surprise :',
    inline(
      table(
        { columns: [fr(1), auto, auto], inset: pt(10), align: horizon },
        table.header(inline(), inline(strong(inline`Volume`)), inline(strong(inline`Parameters`))),
        inline(),
        unsafeRaw.math.block`pi h (D^2 - d^2) / 4`,
        inline`${space}${unsafeRaw.math`h`}: height ${linebreak()} ${unsafeRaw.math`D`}: outer radius ${linebreak()}
${unsafeRaw.math`d`}: inner radius${space}`,
        inline(),
        unsafeRaw.math.block`sqrt(2) / 12 a^3`,
        inline`${unsafeRaw.math`a`}: edge length`,
      ),
    ),
    m.heading(2, 'Mettre un bloc de code'),
    inline`Pour mettre un bloc de code, il suffit de l'encadrer comme en markdown, en ajoutant le nom du
langage pour la coloration:`,
    inline(raw({ block: true, lang: 'py' }, 'print("Hello World")\nprint("World Hello")')),
    inline`Il est possible de désactiver l'alternance des lignes blanches/grises en fond avec`,
    inline(raw({ block: true, lang: 'typ' }, '#codly(zebra-fill : none)')),
    'On peut mettre la numérotation des lignes en dehors des blocs de code :',
    inline(raw({ block: true, lang: 'typ' }, '#codly(number-placement : "outside") // valeur par defaut : "inside"')),
    inline`Pour empêcher un bloc de code d'être séparé sur plusieurs pages :`,
    inline(raw({ block: true, lang: 'typ' }, '#codly(breakable : false) // valeur par defaut : true')),
    'Pour ajouter des annotations à un bloc de code :',
    inline(
      codly({
        annotations: [{ start: 2, end: 5, content: block({ width: em(7) }, align(center, inline`Partie principale`)) }],
      }),
    ),
    inline(
      raw(
        { block: true, lang: 'py' },
        'def fib(n):\n  if n <= 1:\n    return n\n  else:\n    return fib(n - 1) + fib(n - 2)\nfib(25)\nfib(10)',
      ),
    ),
    inline`Pour référencer une ligne particulière, il suffit de mettre le bloc de code dans un environnement
${raw('figure')}:`,
    inline(
      labelled(
        figure(
          inline(
            raw(
              { block: true, lang: 'py' },
              'def fib(n):\n  if n <= 1:\n    return n\n  else:\n    return fib(n - 1) + fib(n - 2)\nfib(25)\nfib(10)',
            ),
          ),
        ),
        label('bloc-de-code'),
      ),
    ),
    inline`Et on peut référencer ${ref(label('bloc-de-code'))}, ou bien uniquement la deuxième ligne ${ref(label('bloc-de-code:2'))}`,
    inline`Il y a pleins d'autres options possibles, a voir dans la documentation du package ${strong(inline`codly`)}`,
    m.heading(1, 'Typst avancé'),
    'On peut faire des fonctions en typst :',
    m.lines(
      sumDecl,
      inline(unsafeRaw.code<any>`for value in (1, 2, 3, 4, 5) {
  sum = sum + value
  [valeur = #value \\ somme = #sum \\ ]
}`),
    ),
    'Il y a des dictionnaires:',
    dictDecl,
    inline`Récupération des valeurs : ${unsafeRaw.code<any>`dict.cle`} ${unsafeRaw.code<any>`dict.cle2`}`,
    inline`Récupération des clés : ${dict_2.keys()}`,
    inline`Accès d'un élément dans un tuple : ${dict_2.keys().at(0)}`,
    m.heading(1, 'Utiliser le template pour un rapport de stage'),
    m.lines(
      m.heading(2, 'Ajouter le logo de l', smartquote({ double: false }), 'entreprise'),
      inline`Si il n'y a pas que l'ECL mais aussi une entreprise, il est possible de mettre les 2 logos à
côté, pour ça, passer un élément ${raw('image')} dans le champ ${raw('company-logo')} en haut
du template`,
    ),
    inline(
      raw(
        { block: true, lang: 'typ' },
        '#show : project.with(\n    ...\n    company-logo : image("images/logo_company.png")\n    sl-size : 60%, // Taille du logo ECL\n    cl-size : 23%, // Taille du logo de l\'entreprise\n    ...\n)',
      ),
    ),
    m.heading(2, 'Changer la date'),
    inline`Ajouter le champ ${raw('date')} dans la déclaration du projet ${raw({ block: true, lang: 'typ' }, '#show : project.with(\n    ...\n    date : "12 décembre 2025"\n    ...\n)')}`,
    m.heading(2, 'Ajouter un jury pour une soutenance'),
    inline(
      raw(
        { block: true, lang: 'typ' },
        '#show : project.with(\n    ...\n    jury : ("Jury 1","Jury 2"),\n    defense-date : "12 décembre 2025"\n    ...\n)',
      ),
    ),
    m.heading(2, 'Changer les noms de base'),
    inline`Pour changer les "Auteurs", et "Encadrants", il faut aller dans le fichier ${raw('ressources/fr.json')}`,
    m.heading(2, 'Ajouter une table des figures ou une table des tables'),
    'Il faut ajouter',
    inline(
      raw(
        { block: true, lang: 'typ' },
        '#show : project.with(\n    ...\n    fig-table : true,\n    tab-table : true,\n    ...\n)',
      ),
    ),
    inline(bibliography({ title: 'Bibliographie' }, path('biblio.bib'))),
  )
}
