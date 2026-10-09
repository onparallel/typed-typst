// Converted from test/universe/corpus/isc-hei-report.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  blocks,
  blue,
  center,
  cm,
  datetime,
  define,
  doc,
  em,
  emph,
  external,
  figure,
  footnote,
  fr,
  heading,
  horizon,
  image,
  importPackage,
  includeFile,
  inline,
  label,
  labelled,
  left,
  let_,
  link,
  lorem,
  m,
  pagebreak,
  path,
  pct,
  raw,
  read,
  ref,
  set,
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
  const pageTitle = define('page-title')
    .pos('arg1', T.any)
    .named('bottom', T.any, null)
    .named('mult', T.any, null)
    .named('top', T.any, null)
    .returns(T.any)
    .external()
  const i18n = define('i18n').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const todo = define('todo').pos('arg1', T.content).returns(T.any).external()
  const code = define('code').pos('arg1', T.content).returns(T.any).external()
  const inc = external('inc')
  const theBibliography = define('the-bibliography')
    .named('bib-file', T.any, null)
    .named('full', T.any, null)
    .named('style', T.any, null)
    .returns(T.any)
    .external()
  const appendixPage = define('appendix-page').returns(T.any).external()
  const tableOfFigures = define('table-of-figures').returns(T.any).external()
  const codeSamples = define('code-samples').returns(T.any).external()
  const project_with = define('with')
    .named('academic-year', T.any, null)
    .named('authors', T.any, null)
    .named('code-theme', T.any, null)
    .named('course-name', T.any, null)
    .named('course-supervisor', T.any, null)
    .named('cover-image', T.any, null)
    .named('cover-image-caption', T.content, [])
    .named('cover-image-height', T.any, null)
    .named('date', T.any, null)
    .named('language', T.any, null)
    .named('logo', T.any, null)
    .named('semester', T.any, null)
    .named('show-toc', T.any, null)
    .named('subtitle', T.content, [])
    .named('title', T.any, null)
    .returns(T.any)
    .external(project)
  const printIndex = define('print-index')
    .named('delimiter', T.any, null)
    .named('outlined', T.any, null)
    .named('row-gutter', T.any, null)
    .named('sorted', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external()
  const acr = define('acr').pos('arg1', T.any).returns(T.any).external()
  const inc_showybox = define('showybox')
    .pos('arg1', T.content)
    .named('frame', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(inc)
  const [doc_languageDecl, doc_language] = let_('doc_language', 'fr')
  const acronymTable = define('acronym-table')
    .returns(T.any)
    .body((p) =>
      printIndex({
        title: pageTitle({ mult: 1, top: em(1), bottom: em(1) }, i18n(doc_language, 'acronym-table-title')),
        sorted: 'up',
        delimiter: ' : ',
        rowGutter: em(0.7),
        outlined: false,
      }),
    )
  const [code_sampleDecl, code_sample] = let_('code_sample', read(path('code/sample.scala')))
  const [code_sampleDecl_2, code_sample_2] = let_('code_sample', read(path('code/sample.scala')))
  return doc(
    importPackage('@preview/isc-hei-report:0.8.1', [
      project,
      pageTitle,
      i18n,
      todo,
      code,
      inc,
      theBibliography,
      appendixPage,
      tableOfFigures,
      codeSamples,
    ]),
    inline(doc_languageDecl),
    show(
      project_with({
        title: 'Rapport de projet pour la filière ISC',
        subtitle: inline`Avec une mise en page ${raw('Typst')}`,
        authors: ['D. Knuth', 'L. Torvalds', 'M. Odersky'],
        date: datetime({ year: 2026, month: 3, day: 15 }),
        courseName: '101.1 Programmation impérative',
        courseSupervisor: 'Prof. Dr P.-A. Mudry',
        semester: 'Semestre de printemps',
        academicYear: '2025-2026',
        logo: image(path('figs/isc_logo.svg')),
        coverImage: image(path('figs/cover_image_placeholder.png')),
        coverImageHeight: cm(8),
        coverImageCaption: inline`KNN graph -- Inspired by ${emph(inline`Marcus Volg`)}`,
        showToc: true,
        language: doc_language,
        codeTheme: 'bluloco-light',
      }),
    ),
    m.lines(importPackage('@preview/acrostiche:0.7.0', [printIndex, acr]), includeFile('acronyms.typ')),
    acronymTable.decl,
    m.lines(
      m.heading(1, 'Introduction'),
      inline`Écrire un rapport est un exercice autant ${strong(inline`de fond que de forme`)}. Dans ce contexte,
nous proposons dans ce document de quoi simplifier la rédaction de la forme sans avoir -- à
priori -- d'avis sur le fond, ceci dans le contexte de la filière ISC${footnote(inline`Voici d'ailleurs comment mettre une note de bas de page ${link('https://isc.hevs.ch')}`)}.`,
    ),
    inline`Il convient tout d'abord pour présenter le contenu de se rendre compte que ce système de mise
en page permet d'utiliser une forme de ${emph(inline`markdown`)} comme entrée. Le ${emph(inline`markdown`)}
est une manière de formatter des fichiers textes afin de pouvoir les transformer avec un programme
afin de les afficher dans différents formats, comme PDF ou encore sous forme de page web.`,
    inline`Le langage ${emph(inline`markdown`)} utilise différents types de balises permettant de faire
du ${strong(inline`gras`)}, de ${emph(inline`l'italique`)} ou encore du ${emph(inline(strong(inline`gras et de l'italique`)))}.
Il est également possible de faire des listes, des tableaux, des images, des liens hypertextes,
des notes de bas de page, des équations mathématiques comme ${unsafeRaw.math`x^2 = 3`}, des
blocs de code comme par exemple ${raw('def hello()')} et encore bien d'autres choses.`,
    inline`Vous trouverez ici de la documentation sur la manière d'utiliser le langage ${raw('markdown')}
pour écrire des documents ici : ${link('https://www.markdownguide.org/basic-syntax/')}. Vous
trouverez également une version spécifique sur l'écriture de documents en Typst ici ${link('https://typst.app/docs/reference/syntax/')}.`,
    inline`En plus des choses simples montrées ci-dessus, le ${raw('markdown')} simplifie la création de
listes avec des nombres comme suit :`,
    m.enum(
      m.item(['Un élément']),
      m.item(['Un autre élément de liste']),
      m.item(['Encore d', smartquote({ double: false }), 'autres éléments si nécessaire']),
    ),
    inline`Des choses plus exotiques, comme mettre du ${todo(inline`texte mis en évidence`)} sont également
possibles, tout comme les références à d'autres parties, comme dans le ${ref({ supplement: inline`point` }, label('intro'))}.`,
    m.heading(2, 'Insertion de code'),
    inline`Nous pouvons également avoir du ${raw('code brut directement en ligne')} mais cela peut également
être fait avec du code Scala comme par exemple dans ${raw({ lang: 'scala' }, 'def foo(x: Int)')}.
Cela n'empêche pas d'avoir des blocs de code joliment mis en forme également. Ainsi, lorsque
l'on souhaite avoir du code inséré dans une figure, on peut également utiliser le package ${raw('sourcecode')}
qui rajoute notamment les numéros de ligne. En complément avec une ${raw('figure')}, il est
possible d'avoir une ${emph(inline`légende`)}, un numéro de figure ainsi que du code centré
:`,
    inline(
      figure(
        { caption: 'Un tout petit listing en Scala' },
        code(
          inline(
            space,
            raw(
              { block: true, lang: 'scala' },
              'def foo(val a : Any) : Int = {\n  a match :\n    case a: Int  => 12\n    case _ => 42\n}',
            ),
            space,
          ),
        ),
      ),
    ),
    'On peut si on le souhaite également avoir des blocs de code plus long si nécessaire, sur plusieurs pages :',
    inline(
      figure(
        { caption: 'Un autre exemple de code, plus long' },
        code(
          inline(
            space,
            raw(
              { block: true, lang: 'scala' },
              'object ImageProcessingApp_Animation extends App {\n  val imageFile = "./res/grace_hopper.jpg"\n\n  val org = new ImageGraphics(imageFile, "Original", -200, 0)\n  val dest2 = new ImageGraphics(imageFile, "Threshold", 200, 0)\n\n  var direction: Int = 1\n  var i = 1\n\n  while (true) {\n    if (i == 255 || i == 0)\n      direction *= -1\n\n    i = i + direction\n    dest2.setPixelsBW(ImageFilters_Solution.threshold(org.getPixelsBW(), i))\n  }\n}',
            ),
            space,
          ),
        ),
      ),
    ),
    m.lines(
      m.heading(3, 'Insérer du code à partir d', smartquote({ double: false }), 'un fichier'),
      inline`Il est tout à fait possible de mettre du code qui provient d'un fichier comme ci-dessous :`,
    ),
    m.lines(
      code_sampleDecl,
      inline(
        figure(
          { caption: 'Code included from the file `sample.scala`' },
          code(inline(space, raw({ lang: 'scala' }, code_sample), space)),
        ),
      ),
    ),
    m.heading(2, 'Insertion d', smartquote({ double: false }), 'images'),
    inline`Une image vaut souvent mieux que mille mots ! Il est possible d'ajouter des images, bien entendu.
La syntaxe est relativement simple comme vous pouvez le voir dans l'exemple ci-dessous:`,
    inline(
      labelled(
        [
          figure(
            { caption: inline`Grace Hopper, informaticienne américaine` },
            image({ height: cm(4) }, path('figs/pixelize.png')),
          ),
          space,
        ],
        label('fig_engineer'),
      ),
    ),
    inline`Pour le reste, voici un texte pour voir de quoi il retourne. Vous allez réaliser une fonction
appelée ${emph(inline`mean`)} qui va appliquer un filtre de moyenne à l'image. Ce filtre a pour
but de flouter l'image et d'enlever ainsi ses aspérités. Le principe est le suivant : la valeur
d'un pixel est remplacée par la moyenne des pixels se trouvant dans une zone carrée de 3 par
3 pixels autour du pixel. Si on veut calculer la nouvelle valeur du pixel situé à la position
${unsafeRaw.math`(x,y)`} selon la figure ${ref(label('fig_engineer'))}, sa nouvelle valeur sera
la moyenne des 9 valeurs affichées.`,
    inline`La dérivée doit se calculer selon les deux axes. Le calcul est très simple : la dérivée selon
${raw('x')} du pixel situé en ${unsafeRaw.math`(x,y)`} vaut la valeur du pixel de droite ${unsafeRaw.math`(x+1, y)`}
moins la valeur du pixel de gauche ${unsafeRaw.math`(x-1,y)`}. Dans le cas de la figure, la
dérivée selon ${unsafeRaw.math`x`} vaut ${unsafeRaw.math`D_x=234-255=-21`}.`,
    inline`De même, on peut calculer la dérivée selon ${unsafeRaw.math`y`}. Elle correspond au pixel du
dessous ${unsafeRaw.math`(x,y+1)`} moins le pixel ${unsafeRaw.math`(x,y-1)`} du dessus. Dans
le cas de la ${ref(label('fig_engineer'))}, la dérivée selon ${unsafeRaw.math`y`} vaut ${unsafeRaw.math`D_y = 230-127 = 103`}.`,
    'La norme de la dérivée est calculée selon le théorème de Pythagore :',
    inline(unsafeRaw.math.block`D = sqrt(D_x^ 2 +D_y^2)`),
    'On peut également avoir des notations plus complexes :',
    inline(unsafeRaw.math.block`sum_(n=1)^(infinity) 2^(-n) = 1 "ou encore" integral_(x = 0)^3 x^2 dif x`),
    inline(
      inc_showybox(
        {
          title: "Stokes' theorem",
          frame: {
            borderColor: blue,
            titleColor: blue.lighten(pct(30)),
            bodyColor: blue.lighten(pct(95)),
            footerColor: blue.lighten(pct(80)),
          },
        },
        blocks(
          inline`Let ${unsafeRaw.math`Sigma`} be a smooth oriented surface in ${unsafeRaw.math`RR^3`} with boundary
${unsafeRaw.math`partial Sigma equiv Gamma`}. If a vector field ${unsafeRaw.math`bold(F)(x,y,z)=(F_x (x,y,z), F_y (x,y,z), F_z (x,y,z))`}
is defined and has continuous first order partial derivatives in a region containing ${unsafeRaw.math`Sigma`},
then`,
          inline(
            unsafeRaw.math
              .block`integral.double_Sigma (bold(nabla) times bold(F)) dot bold(Sigma) = integral.cont_(partial Sigma) bold(F) dot dif bold(Gamma)`,
          ),
        ),
      ),
    ),
    inline(pagebreak()),
    m.heading(2, 'Des tables'),
    inline`Il est possible d'insérer des tables simples :`,
    inline(
      figure(
        { caption: 'Une table simple' },
        table(
          { align: left, columns: 4, stroke: null },
          inline(strong(inline`Monday`)),
          inline`11.5`,
          inline`13.0`,
          inline`4.0`,
          inline(strong(inline`Tuesday`)),
          inline`8.0`,
          inline`14.5`,
          inline`5.0`,
          inline(strong(inline`Wednesday`)),
          inline`9.0`,
          inline`18.5`,
          inline`13.0`,
        ),
      ),
    ),
    inline`Des tables plus compliquées sont également possible. La page ${link('https://typst.app/docs/guides/table-guide/')}
donne d'ailleurs de bonnes informations.`,
    set(table, { stroke: (x, y) => unsafeRaw.code<any>`(left: if x > 0 { 0.8pt }, top: if y > 0 { 1.5pt })` }),
    inline(
      figure(
        { caption: inline`Une table plus complexe` },
        table(
          { columns: [fr(2), fr(1), fr(1)], align: add(center, horizon) },
          table.header(
            inline(strong(inline`Technique`)),
            inline(strong(inline`Advantage`)),
            inline(strong(inline`Drawback`)),
          ),
          inline`Diegetic`,
          inline`Immersive`,
          inline`May be contrived`,
          inline`Extradiegetic`,
          inline`Breaks immersion`,
          inline`Obstrusive`,
          inline`Omitted`,
          inline`Fosters engagement`,
          inline`May fracture audience`,
        ),
      ),
    ),
    m.lines(
      m.heading(2, 'Citer ses sources'),
      inline`Il est important de citer les sources que l'on utilise. Par exemple, les deux travaux ${ref(label('mui_nasa_dod09'))},
${ref(label('mui_hybrid_06'))} et ${ref(label('mudry:133438'))} sont deux papiers très intéressants
à lire et dont les références complètes se trouvent dans la bibliographie à la fin de ce document.
Il est également d'utiliser des acronymes comme par exemple ${acr('USB')}. Si on l'utilise une
deuxième fois, seul l'acronyme apparaît, ainsi ${acr('USB')} est suffisant.`,
    ),
    inline`Si l'on souhaite citer des références issues d'une page ou d'un site web et que cette référence
est importante, on utilisera la syntaxe ${ref(label('WinNT'))} qui cite une référence de la
bibliographie. Pour les autres cas, il est possible de référer au site uniquement avec son URL.`,
    inline`Et lorsque le serveur refuse poliment de vous préparer un café parce qu'il s'agit en réalité
d'une théière, la norme à invoquer est bien entendu ${ref(label('rfc2324'))} (oui, le code HTTP
418 existe vraiment).`,
    m.lines(
      m.heading(2, 'Un exemple de texte : le filtre de Sobel'),
      inline`Une autre méthode pour extraire les contours à l'intérieur d'une image est d'utiliser ${link('https://fr.wikipedia.org/wiki/Détection_de_contours', inline`l'algorithme de Sobel`)}
Cette méthode est très similaire à celle de la dérivée, mais un peu plus compliquée et donne
de meilleurs résultats.`,
    ),
    inline`Pour l'exemple, la valeur du filtre de Sobel selon ${emph(inline`x`)} vaudrait :`,
    inline(unsafeRaw.math.block`S_x= 100 + 2 dot 234 + 84 -128-2 dot 255-123=-109`),
    inline`De même la valeur du filtre de Sobel selon ${emph(inline`y`)} vaudrait:`,
    inline(unsafeRaw.math.block`S_y= 123+2 dot 230+84-128-2 dot 127-100`),
    'Comme auparavant, la norme du filtre de Sobel se calcule selon Pythagore et vaut pour cet exemple :',
    inline(unsafeRaw.math.block`S = sqrt(S_x^2+S_y^2) = sqrt(109^2+185^2) =214.47`),
    m.lines(inline(labelled(heading({ depth: 2 }, inline('Problématique')), label('intro'))), inline(lorem(20))),
    m.lines(m.heading(2, 'Plan du travail'), inline(lorem(40))),
    inline(pagebreak()),
    m.lines(m.heading(1, 'Conclusion'), inline(lorem(500))),
    inline(
      pagebreak(),
      space,
      theBibliography({ bibFile: read({ encoding: null }, path('bibliography.bib')), full: true, style: 'ieee' }),
    ),
    inline(pagebreak(), space, appendixPage(), space, pagebreak()),
    inline(acronymTable()),
    inline(pagebreak()),
    inline(tableOfFigures()),
    inline(pagebreak(), space, codeSamples()),
    code_sampleDecl_2,
    inline(
      figure(
        { caption: 'Code included from the file example.scala' },
        code(inline(space, raw({ lang: 'scala' }, code_sample_2), space)),
      ),
    ),
    inline(
      figure(
        { caption: 'Code included from the file example.scala' },
        code(inline(space, raw({ lang: 'scala' }, code_sample_2), space)),
      ),
    ),
    inline(
      figure(
        { caption: 'Code included from the file sort.py' },
        code(inline(space, raw({ lang: 'python' }, read(path('code/sort.py'))), space)),
      ),
    ),
  )
}
