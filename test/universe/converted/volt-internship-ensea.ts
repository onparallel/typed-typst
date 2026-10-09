// Converted from test/universe/corpus/volt-internship-ensea.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  blocks,
  center,
  define,
  doc,
  external,
  figure,
  image,
  importFile,
  importPackage,
  inline,
  label,
  left,
  linebreak,
  lorem,
  m,
  pagebreak,
  path,
  pct,
  pt,
  raw,
  ref,
  right,
  show,
  smartquote,
  space,
  strong,
  super_,
  table,
  unsafeRaw,
  yaml,
} from '../../../src/index.ts'

export default () => {
  const initGlossary = external('init-glossary')
  const initGlossary_with = define('with')
    .pos('arg1', T.any)
    .named('term-links', T.any, null)
    .returns(T.any)
    .external(initGlossary)
  const abstract = define('abstract').returns(T.any).external()
  const acknowledgements = define('acknowledgements').returns(T.any).external()
  const annexes = define('annexes').returns(T.any).external()
  const internship = external('internship')
  const namedEquation = define('named-equation')
    .pos('arg1', T.any)
    .pos('arg2', T.any)
    .pos('arg3', T.content)
    .returns(T.any)
    .external()
  const internship_with = define('with')
    .named('abstract', T.any, null)
    .named('acknowledgements', T.any, null)
    .named('appendices', T.any, null)
    .named('authors', T.any, null)
    .named('company-logo', T.any, null)
    .named('enable-list-equations', T.any, null)
    .named('enable-list-figures', T.any, null)
    .named('internship-details', T.content, [])
    .named('references', T.any, null)
    .named('student-info', T.content, [])
    .named('title', T.content, [])
    .returns(T.any)
    .external(internship)
  return doc(
    m.lines(
      importPackage('@preview/glossy:0.8.0', [initGlossary]),
      show(initGlossary_with({ termLinks: true }, yaml(path('glossary.yaml')))),
      importFile('abstract.typ', [abstract]),
      importFile('acknowledgements.typ', [acknowledgements]),
      importFile('appendices.typ', [annexes]),
    ),
    importPackage('@preview/volt-internship-ensea:0.2.0', [initGlossary, internship, namedEquation]),
    show(
      internship_with({
        abstract: abstract(),
        acknowledgements: acknowledgements(),
        appendices: annexes(),
        references: bibliography({ full: true }, path('references.bib')),
        companyLogo: image(path('media/logo.png')),
        authors: ['Jean DUPONT'],
        studentInfo: inline`${strong(inline`Élève ingénieur en X${super_(inline`ème`)} année`)} ${linebreak()} Promotion
20XX ${linebreak()} Année 20XX/20XX`,
        title: inline(lorem(10)),
        internshipDetails: blocks(
          inline`Stage effectué du ${strong(inline`1er mars au 30 août 2025`)}, au sein de la société ${strong(inline`TechSolutions`)},
située à Paris.`,
          m.lines(
            inline`Sous la responsabilité de : ${linebreak()}`,
            m.list(
              m.item(['M.', space, strong(inline`Pierre LEFEVRE`), ', Directeur de la Stratégie', space, linebreak()]),
              m.item(['Mme', space, strong(inline`Marie DUBOIS`), ', Responsable des Opérations', space, linebreak()]),
            ),
          ),
        ),
        enableListFigures: true,
        enableListEquations: true,
      }),
    ),
    m.lines(m.heading(1, 'Introduction'), inline(lorem(70))),
    m.lines(
      m.heading(
        2,
        'Une figure pour illustrer la',
        ' ',
        smartquote({ double: true }),
        'Liste des figures',
        smartquote({ double: true }),
      ),
      inline(figure({ caption: inline`Logo de l'ENSEA` }, image({ width: pct(25) }, path('media/logo-ENSEA.png')))),
    ),
    m.lines(
      m.heading(
        2,
        'Une tableau pour illustrer la',
        ' ',
        smartquote({ double: true }),
        'Liste des tableaux',
        smartquote({ double: true }),
        ' ',
        'et le',
        ' ',
        smartquote({ double: true }),
        'Glossaire',
        smartquote({ double: true }),
      ),
      inline(
        figure(
          { caption: inline`Résultats des étudiants de l'${ref(label('ENSEA'))} à l'examen` },
          table(
            { columns: 3, align: [center, left, right], inset: pt(6), stroke: pt(1), fill: [null, null, null] },
            table.header(inline`N°`, inline`Nom de l'étudiant`, inline`Note finale`),
            inline`001`,
            inline`Alice Dupont`,
            inline`16,5`,
            inline`002`,
            inline`Bruno Lefèvre`,
            inline`14,8`,
            inline`003`,
            inline`Claire Noël`,
            inline`12,7`,
          ),
        ),
      ),
    ),
    m.lines(
      m.heading(
        2,
        'Une citation pour illustrer la',
        ' ',
        smartquote({ double: true }),
        'Bibliographie',
        smartquote({ double: true }),
      ),
      inline`Dans le traité "${strong(inline`Philosophiæ Naturalis Principia Mathematica`)}" ${ref(label('newton1833philosophiae'))},
Newton énonce ses célèbres lois du mouvement et la loi de la gravitation universelle, posant
ainsi les bases de la mécanique classique.`,
    ),
    inline(pagebreak()),
    m.lines(
      m.heading(1, 'Titre de niveau 1'),
      inline`Cette équation a un nom qui apparaît dans la "Liste des équations" :`,
    ),
    inline(namedEquation(unsafeRaw.math.block`P =I^2 times R`, label('Effet-Joule'), inline`Effet Joule`)),
    inline`Celle-ci non : ${unsafeRaw.math.block`U =R times I`}`,
    m.lines(m.heading(2, 'Titre de niveau 2'), inline(lorem(50))),
    m.lines(m.heading(3, 'Titre de niveau 3'), inline(lorem(35))),
    inline(
      raw(
        { block: true, lang: 'java' },
        '// HelloWorld.java\npublic class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}',
      ),
    ),
    inline(pagebreak()),
    m.lines(m.heading(1, 'Conclusion'), inline(lorem(350))),
  )
}
