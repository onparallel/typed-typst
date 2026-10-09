// Converted from test/universe/corpus/fom-thesis-unofficial.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  center,
  define,
  doc,
  external,
  figure,
  image,
  importPackage,
  includeFile,
  inline,
  label,
  labelled,
  left,
  lorem,
  m,
  path,
  pct,
  raw,
  ref,
  right,
  show,
  space,
  strong,
  sym,
  table,
} from '../../../src/index.ts'

export default () => {
  const project = external('project')
  const project_with = define('with')
    .named('abbreviations', T.any, null)
    .named('abgabedatum', T.any, null)
    .named('akademischer-grad', T.any, null)
    .named('authors', T.any, null)
    .named('betreuer', T.any, null)
    .named('bib-file', T.any, null)
    .named('bib-web-file', T.any, null)
    .named('date', T.any, null)
    .named('dokumentart', T.any, null)
    .named('list-of-figures', T.any, null)
    .named('list-of-tables', T.any, null)
    .named('logo', T.any, null)
    .named('matrikelnummer', T.any, null)
    .named('studiengang', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(project)
  return doc(
    importPackage('@preview/fom-thesis-unofficial:0.1.0', [project]),
    show(
      project_with({
        title: 'Hier könnte Ihr Titel stehen!',
        authors: 'Max Mustermann',
        studiengang: 'Wirtschaftsinformatik',
        akademischerGrad: 'Bachelor of Science (B.Sc.)',
        dokumentart: 'Seminararbeit',
        matrikelnummer: '361710',
        betreuer: 'Prof. Dr. Maria Musterfrau',
        abgabedatum: '01.04.2026',
        date: 'March 16, 2026',
        logo: image(path('media/example-logo.png')),
        bibFile: bibliography({ title: 'Literaturverzeichnis' }, path('references.yaml')),
        bibWebFile: bibliography({ title: 'Internetquellen' }, path('references_web.yaml')),
        abbreviations: includeFile('abkuerzungsverz.typ'),
        listOfFigures: true,
        listOfTables: true,
      }),
    ),
    m.lines(m.heading(1, 'Einleitung'), inline(lorem(60))),
    m.lines(m.heading(2, 'Problemstellung'), inline(lorem(20))),
    m.lines(
      m.heading(2, 'Zielsetzung'),
      inline(
        labelled(
          [
            figure(
              { caption: inline`Ziele der wissenschaftlichen Arbeit` },
              table(
                { columns: 3, align: [left, center, right] },
                table.header(
                  inline(strong(inline`Ziel`)),
                  inline(strong(inline`Spalte 2`)),
                  inline(strong(inline`Spalte 3`)),
                ),
                inline`Super Note bekommen!`,
                inline`Reihe 2`,
                inline`...`,
                inline`Reihe 3`,
                inline`uvm.`,
                inline`...`,
              ),
            ),
            space,
          ],
          label('academic_goals'),
        ),
        space,
        lorem(20),
      ),
    ),
    m.lines(m.heading(2, 'Vorgehensweise'), inline(lorem(20))),
    m.lines(
      m.heading(1, 'Erste Ebene'),
      inline(
        lorem(20),
        space,
        labelled(
          [
            figure(
              { caption: inline`FOM Aussicht, Rheinauhafen, Köln (C) Finn Riedel` },
              image({ width: pct(60) }, path('media/Finn_Riedel_FOM_Koeln_Rheinauhafen.JPG')),
            ),
            space,
          ],
          label('fom_cgn'),
        ),
      ),
    ),
    inline`Wie man an ${ref(label('fom_cgn'))} sehen kann, kann man auch Abbildungen darstellen.`,
    m.lines(m.heading(2, 'Zweite Ebene'), inline(lorem(20))),
    m.lines(
      m.heading(2, 'Zweite Ebene'),
      inline(
        lorem(20),
        space,
        labelled(
          [
            figure(
              { caption: inline`Addition in Python` },
              raw({ block: true, lang: 'py' }, '  x = 15\n  y = 10\n  print(x+y)'),
            ),
            space,
          ],
          label('addition_py'),
        ),
        space,
        lorem(20),
      ),
    ),
    m.lines(m.heading(3, 'Dritte Ebene'), inline(lorem(20))),
    m.lines(m.heading(3, 'Dritte Ebene'), inline(lorem(20))),
    m.lines(
      m.heading(1, 'Erste Ebene'),
      inline(
        lorem(20),
        space,
        lorem(10),
        ref(label('unternehmensbewertung')),
        space,
        lorem(10),
        ref(label('personal')),
        space,
        lorem(10),
        ref(label('wissenschaftliches_arbeiten')),
        space,
        lorem(10),
        ref({ supplement: inline`S. 13` }, label('investment_banking')),
        space,
        lorem(10),
        ref(label('private_equity')),
        space,
        lorem(10),
        ref(label('lemons')),
        space,
        lorem(10),
        ref(label('vw')),
        space,
        lorem(10),
        ref(label('theisen_ohnejahr')),
      ),
    ),
    m.lines(m.heading(1, 'Fazit'), 'Fertig!'),
  )
}
