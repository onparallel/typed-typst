// Converted from test/universe/corpus/manuscr-ismin.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  align,
  auto,
  bibliography,
  blocks,
  center,
  cm,
  define,
  doc,
  emph,
  external,
  figure,
  fr,
  h,
  heading,
  horizon,
  image,
  importPackage,
  inline,
  label,
  labelled,
  link,
  lorem,
  m,
  outline,
  pagebreak,
  path,
  quote,
  raw,
  ref,
  set,
  show,
  smallcaps,
  smartquote,
  space,
  strong,
  sym,
  table,
  text,
  unsafeRaw,
  upper,
  where,
} from '../../../src/index.ts'

export default () => {
  const manuscrIsmin = external('manuscr-ismin')
  const violetEmse = external('violet-emse')
  const manuscrIsmin_with = define('with')
    .named('academic-year', T.content, [])
    .named('authors', T.any, null)
    .named('course', T.any, null)
    .named('date', T.any, null)
    .named('header', T.content, [])
    .named('latex-look', T.any, null)
    .named('logo', T.any, null)
    .named('mentor1', T.any, null)
    .named('mentor2', T.any, null)
    .named('school', T.any, null)
    .named('subtitle', T.content, [])
    .named('title', T.content, [])
    .returns(T.any)
    .external(manuscrIsmin)
  return doc(
    importPackage('@preview/manuscr-ismin:0.3.1', [manuscrIsmin, violetEmse]),
    show(
      manuscrIsmin_with({
        title: inline`Titre`,
        subtitle: inline`Sous-titre`,
        school: {
          name: inline`École nationale supérieure des mines de Saint-Étienne`,
          subname: inline`Campus Aix-Marseille-Provence Georges Charpak`,
        },
        course: {
          ue: 'UE',
          ecue: 'ECUE',
          name: inline`Unité d'enseignement`,
          subname: inline`Élément constitutif d'une unité d'enseignement`,
        },
        authors: [
          { name: inline`Auteur ${smallcaps(inline`Premier`)}`, affiliation: 'Filière 1', email: 'auteur1@emse.fr' },
          { name: inline`Auteur ${smallcaps(inline`le Second`)}`, affiliation: 'Filière 2', email: 'auteur2@emse.fr' },
        ],
        mentor1: {
          role: 'Encadrant',
          name: inline`Professeur ${smallcaps(inline`Électronicien`)}`,
          email: 'bllll@emse.fr',
        },
        mentor2: {
          role: 'Co-encadrant',
          name: inline`Doctorant ${smallcaps(inline`de Sécurité`)}`,
          email: 'pchhch@emse.fr',
        },
        academicYear: inline`2025-2026`,
        header: inline(h(fr(1)), space, upper(inline(emph(inline`En-tête${space}`)))),
        logo: image({ width: cm(7.3) }, path('assets/MSE-IMT_Hor_RVB.svg')),
        date: '01/03/26',
        latexLook: false,
      }),
    ),
    inline(outline({ indent: auto })),
    inline(
      labelled([heading({ numbering: null }, inline`Table des figures`), space], label('fig_outline')),
      space,
      outline({ target: where(figure, { kind: image }), title: null }),
    ),
    inline(
      heading({ numbering: null }, inline`Table des tableaux`),
      space,
      outline({ target: where(figure, { kind: table }), title: null }),
    ),
    inline(
      heading({ numbering: null }, inline`Table des équations`),
      space,
      outline({ target: where(figure, { kind: 'equation' }), title: null }),
    ),
    inline(
      heading({ numbering: null }, inline`Table des listages`),
      space,
      outline({ target: where(figure, { kind: raw }), title: null }),
    ),
    inline(pagebreak()),
    inline`Ce ${emph(inline`template`)} est utilisé pour écrire les rapports à l'${smallcaps(inline`ismin`)}.
Vous pouvez évidemment en modifier le contenu. Ci-suit une présentation de ce qu'il est possible
de faire avec.`,
    m.heading(1, 'Différences avec le', ' ', smartquote({ double: true }), 'par défaut', smartquote({ double: true })),
    m.heading(2, 'Titres'),
    inline`Les titres sont colorés avec le violet ${smallcaps(inline`emse`)}, mais il est possible de le
modifier. Pour générer des titres de différents niveaux :`,
    inline(
      figure(
        { caption: inline`Génération des titres` },
        raw(
          { block: true, lang: 'typst' },
          '= Premier titre de niveau 1\n\n== Premier titre de niveau 2\n\n=== Premier titre de niveau 3\n\n== Second titre de niveau 1',
        ),
      ),
    ),
    'Les titres servent à générer une table des matières et à segmenter le document.',
    m.heading(2, 'Tableaux'),
    inline`Les tableaux (dans une figure) dans ce ${emph(inline`template`)} ressemblent à ceci :`,
    inline(
      labelled(
        [
          figure(
            { caption: inline`Un tableau` },
            inline(
              space,
              table(
                { align: add(center, horizon), columns: 2 },
                table.header(
                  inline(align(center, inline(strong(inline`Chiffres`)))),
                  inline(align(center, inline(strong(inline`Lettres`)))),
                ),
                inline`0`,
                inline`A`,
                inline`1`,
                inline`B`,
                inline`2`,
                inline(sym.Gamma),
                inline`3`,
                inline(sym.Delta),
                inline`4`,
                inline(sym.Epsilon),
              ),
              space,
            ),
          ),
          space,
        ],
        label('tab1'),
      ),
    ),
    inline`La fond de la première ligne est plus foncé, puis on a une alternance des couleurs en descendant.
Si on veut un tableau avec les titres "verticaux", voici le code à utiliser -- on change la
fonction qui sert paramètre ${raw('fill')} à la fonction ${raw('table')} :`,
    inline(
      figure(
        { caption: inline`Adapter le coloriage pour un tableau "vertical"` },
        raw(
          { block: true, lang: 'typ' },
          '#table(\n  fill: (x, y) => if x == 0 {\n    body-color\n    } else if calc.even(y) {\n      block-color\n    } else {\n      none\n    },\n  align: horizon,\n  [Contenu], [Contenu], [...]\n)',
        ),
      ),
    ),
    'On a ceci :',
    inline(
      figure(
        { caption: inline`Un autre tableau` },
        blocks(
          m.lines(
            show(where(table.cell, { y: 0 }), set(text, { style: 'normal', weight: 'regular' })),
            inline(
              table(
                {
                  align: add(center, horizon),
                  columns: 9,
                  fill: (x, y) => unsafeRaw.code<any>`if x == 0 {
      violet-emse.lighten(80%)
    } else if calc.even(y) {
      violet-emse.lighten(90%)
    } else {
      none
    }`,
                },
                inline(unsafeRaw.math`n`),
                inline`0`,
                inline`1`,
                inline`2`,
                inline`3`,
                inline`4`,
                inline`5`,
                inline`6`,
                inline`7`,
                inline(unsafeRaw.math`F_n`),
                inline`0`,
                inline`1`,
                inline`1`,
                inline`2`,
                inline`3`,
                inline`5`,
                inline`8`,
                inline`13`,
              ),
            ),
          ),
        ),
      ),
    ),
    m.heading(2, 'Code'),
    inline`Le code en ligne ressemble à ça ${raw({ lang: 'c' }, 'int main(void)')} ou à ça ${raw('par exemple')}
; le fond est coloré avec une nuance du violet ${smallcaps(inline`emse`)}. Voici un exemple
pour du code en bloc :`,
    inline(
      figure(
        { caption: inline`Fichier${space}` },
        raw(
          { block: true, lang: 'sv' },
          '`timescale  1ns / 1ps\n\nmodule xor_down import ascon_pack::*; (\n  input  logic[255:0] data_xor_down_i,\n  input  logic[1:0]   ena_xor_down_i,\n  input  type_state   state_i,\n  output type_state   state_o\n);\n  // Downstream XOR\n  assign state_o[0] = state_i[0];\n  assign state_o[1] = (ena_xor_down_i)? state_i[1] ^ data_xor_down_i[255:192]: state_i[1];\n  assign state_o[2] = (ena_xor_down_i)? state_i[2] ^ data_xor_down_i[191:128]: state_i[2];\n  assign state_o[3] = (ena_xor_down_i)? state_i[3] ^ data_xor_down_i[127: 64]: state_i[3];\n  assign state_o[4] = (ena_xor_down_i)? state_i[4] ^ data_xor_down_i[ 63:  0]: state_i[4];\nendmodule: xor_down',
        ),
      ),
    ),
    m.heading(2, 'Les mathématiques'),
    inline`Attention à bien utiliser le mode mathématique pour 3x + 7/8y >= 23 deviendra ${unsafeRaw.math`3x + 7/8y >= 23`},
ce qui n'est pas du tout la même chose. Voici les équations de ${smallcaps(inline`Maxwell`)}
en bloc au sein d'une figure -- pour montrer un peu ce qu'il est possible de faire :`,
    inline(
      figure(
        { caption: inline`Équations de ${smallcaps(inline`Maxwell`)}`, kind: 'equation' },
        inline(
          space,
          unsafeRaw.math.block`op("div")(arrow(E)) & = rho / epsilon_0 \\
    arrow(op("rot"))(arrow(E)) & = - (partial arrow(B)) / (partial t) \\
           op("div")(arrow(B)) & = 0 \\
    arrow(op("rot"))(arrow(B)) & = mu_0 arrow(j) + mu_0 epsilon_0 (partial arrow(E)) / (partial t)`,
          space,
        ),
      ),
    ),
    inline`L'équation de ${smallcaps(inline`Maxwell`)} préférée de mon amie est celle dite de ${smallcaps(inline`Maxwell-Faraday`)}
(locale) obtenue grâce au théorème de ${smallcaps(inline`Stokes`)} : ${unsafeRaw.math`integral.cont_C arrow(E) dif arrow(cal(l)) = - dif / (dif t) (integral_S arrow(B) dif arrow(S))`}.`,
    inline`Le séparateur décimal par défaut est le point en Typst, donc ils sont automatiquement convertis
en virgules dans le mode math par le ${emph(inline`template`)} : ${unsafeRaw.math.block`3.8 != 3, 8`}
On utilisera les virgules plutôt comme séparateur (comme les points-virgules) : ${unsafeRaw.math.block`A = {1, 2, 3}`}`,
    m.heading(2, 'Les figures'),
    inline`Les figures permettent de centrer le contenu et d'ajouter sous-titres et références. Pour une
figure avec une image ou une équation, la légende est en bas, mais pour les tableaux et les
listages elle est en haut. Voici une image tirée de ${link('https://x.com/chatmignon__', inline`Twitter`)}
(j'ai fait un lien vers Twitter) : ${figure({ caption: inline`Toto apprend à Tigre comment coder en C++` }, inline(space, image({ height: cm(7) }, path('images/toto_tigre.jpg')), space))}`,
    m.heading(2, 'Les liens'),
    inline`Les liens externes (vers l'extérieur du document) sont indiqués avec un cercle bleu. Les liens
internes eux sont indiqués avec un carré de la couleur principale du document. ${link(label('tab1'), inline`Lien interne`)}
et ${link('https://http.cat/', inline`lien externe.`)} Je sais que c'est non-usuel, mais selon
Matthew ${smallcaps(inline`Butterick`)}, c'est mieux.`,
    m.heading(2, 'Listes'),
    m.heading(3, 'Listes de puces'),
    inline`On peut utiliser ${raw({ lang: 'typ' }, '-')} pour faire des listes de puces, comme suit :`,
    m.list(m.item(['oui,']), m.item(['non']), m.item(['peut-être.'])),
    'On peut les faire plus espacées :',
    m.list(
      { tight: false },
      m.item(['comme ça,']),
      m.item(['la différence est flagrante,']),
      m.item(['impressionnant.']),
    ),
    m.heading(3, 'Listes numérotées'),
    inline`Même principe pour les listes numérotées, mais avec un ${raw({ lang: 'typ' }, '+')} :`,
    m.enum(
      m.item(
        m.lines(
          'Incroyable ;',
          m.enum(m.item(['on peut même inclure des listes dans des listes,']), m.item(['la technologie est folle.'])),
        ),
      ),
      m.item(['Wow.']),
      m.item(['Impressionant.']),
    ),
    m.heading(2, 'Les citations'),
    inline(
      quote(
        { block: true, attribution: inline`Lews Therin Thelamon ${ref(label('wot_8'))}` },
        inline`${space}Moi, je n’ai jamais été vaincu ! Je suis le Seigneur du Matin. Personne ne peut me battre.${space}`,
      ),
    ),
    inline`D'après un autre individu (invincible également), il serait bon que tu ${quote({ attribution: label('sam_2') }, inline`adopte un chien`)}.`,
    m.heading(2, 'Autres'),
    inline`Typst offre énormément d'autres possibilités, n'hésitez pas à consulter la documentation ! Le
reste du document est rempli avec du vide.`,
    m.heading(1, 'Partie 2'),
    inline(lorem(67)),
    m.heading(1, 'Partie 3'),
    inline(lorem(67)),
    inline(lorem(42)),
    inline(bibliography({ style: 'ieee' }, path('bibs.yaml'))),
    inline(heading({ numbering: null }, inline`Glossaire`)),
    m.terms(
      m.term(['Terme'], ['Une définition de ce terme.']),
      m.term(['Autre terme'], ['Une définition de cet autre terme.']),
      m.term(['UAVM'], ['Un Acronyme Vraiment Mystérieux.']),
    ),
  )
}
