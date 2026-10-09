// Converted from test/universe/corpus/h-brs-thesis-unofficial.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  auto,
  bibliography,
  center,
  cite,
  cm,
  define,
  doc,
  external,
  figure,
  fr,
  image,
  importPackage,
  inline,
  label,
  labelled,
  left,
  luma,
  m,
  path,
  pct,
  read,
  rect,
  ref,
  show,
  space,
  strong,
  sym,
  table,
} from '../../../src/index.ts'

export default () => {
  const template = external('template')
  const template_with = define('with')
    .named('abbr-csv-content', T.any, null)
    .named('authors', T.any, null)
    .named('date', T.any, null)
    .named('info', T.any, null)
    .named('show-declaration', T.any, null)
    .named('title', T.any, null)
    .named('type-of-work', T.any, null)
    .returns(T.any)
    .external(template)
  return doc(
    importPackage('@preview/h-brs-thesis-unofficial:0.1.2', [template]),
    show(
      template_with({
        title: 'Einsatz moderner Methoden in der angewandten Informatik',
        authors: 'Max Mustermann',
        typeOfWork: 'Bachelorarbeit',
        date: '01. März 2026',
        info: [
          ['Betreuer:in', 'Prof. Dr. Alexandra Kees'],
          ['Zweitgutachter:in', 'Prof. Dr. Hartmut Pohl'],
        ],
        showDeclaration: true,
        abbrCsvContent: read(path('abbr.csv')),
      }),
    ),
    m.heading(1, 'Einleitung'),
    inline`Die zunehmende Digitalisierung stellt Unternehmen und Forschungseinrichtungen vor neue Herausforderungen.
Bestehende Ansätze zur Datenverarbeitung stoßen dabei häufig an ihre Grenzen, sodass Moderne
Methoden der angewandten Informatik an Bedeutung gewinnen ${ref(label('mustermann2021'))}.`,
    'Ziel dieser Arbeit ist es, geeignete Methoden zu identifizieren, deren Eignung zu bewerten und auf einen konkreten Anwendungsfall zu übertragen. Die Arbeit gliedert sich in einen Grundlagenteil, einen Methoden-Teil sowie eine abschließende Zusammenfassung.',
    m.heading(1, 'Stand der Forschung'),
    m.heading(2, 'Grundlegende Konzepte'),
    inline`Die Verarbeitung großer Datenmengen erfordert effiziente Algorithmen sowie eine geeignete Systemarchitektur.
${ref(label('mustermann2021'))} beschreibt hierzu grundlegende Konzepte der Datenmodellierung,
die als Ausgangspunkt für die vorliegende Arbeit dienen. ${ref(label('fig-architektur'))} zeigt
den schematischen Aufbau einer solchen Architektur.`,
    inline(
      labelled(
        [
          figure(
            { kind: image, caption: inline`Schematischer Aufbau der Systemarchitektur` },
            rect({ width: pct(100), height: cm(5), fill: luma(230) }),
          ),
          space,
        ],
        label('fig-architektur'),
      ),
    ),
    inline`Aktuelle Forschungsarbeiten zeigen, dass insbesondere verteilte Systeme erhebliche Vorteile
gegenüber monolithischen Architekturen bieten ${ref(label('schmidt2022'))}. Die dabei eingesetzten
Methoden sind jedoch stark vom jeweiligen Anwendungskontext abhängig.`,
    m.heading(2, 'Verwandte Arbeiten'),
    inline`${cite({ form: 'prose' }, label('kees2019'))} untersuchen wissenschaftliche Arbeitsmethoden
im Informatik-Bereich und stellen fest, dass eine strukturierte Vorgehensweise maßgeblich zur
Qualität der Ergebnisse beiträgt. Diese Erkenntnisse fließen in die Methodik der vorliegenden
Arbeit ein.`,
    m.heading(1, 'Methodik und Anwendung'),
    m.heading(2, 'Vorgehensweise'),
    inline`Auf Basis der im vorangegangenen Kapitel erarbeiteten Grundlagen wird in diesem Abschnitt ein
Lösungsansatz entwickelt. Die Auswahl der eingesetzten Methoden orientiert sich an den Kriterien
Skalierbarkeit und Wartbarkeit. Der zugrunde liegende Ablauf ist in ${ref(label('fig-workflow'))}
dargestellt.`,
    inline(
      labelled(
        [
          figure(
            { kind: image, caption: inline`Ablauf des entwickelten Lösungsansatzes` },
            rect({ width: pct(100), height: cm(5), fill: luma(230) }),
          ),
          space,
        ],
        label('fig-workflow'),
      ),
    ),
    inline`Das entwickelte Konzept wurde prototypisch implementiert und anhand eines realen Datensatzes
evaluiert. Die Rohdaten lagen im ${ref(label('CSV'))} Format vor und wurden über eine ${ref(label('REST'))}
konforme ${ref(label('API'))} per ${ref(label('HTTP'))} abgerufen. Die Ergebnisse zeigen, dass
der gewählte Ansatz die gestellten Anforderungen erfüllt ${ref(label('schmidt2022'))}.`,
    m.heading(2, 'Ergebnisse'),
    inline`Die durchgeführten Experimente bestätigen die Ausgangshypothese. ${ref(label('tbl-ergebnisse'))}
fasst die gemessenen Kennwerte der evaluierten Verfahren zusammen. Im Vergleich zu bestehenden
Verfahren konnte eine Verbesserung der Verarbeitungsgeschwindigkeit um durchschnittlich 34${sym.space.nobreak}%
erzielt werden. Die Genauigkeit blieb dabei auf einem vergleichbaren Niveau. ${ref(label('fig-ergebnisse'))}
visualisiert die Laufzeitunterschiede zwischen den drei Verfahren.`,
    inline(
      labelled(
        [
          figure(
            { kind: image, caption: inline`Laufzeitvergleich der evaluierten Verfahren` },
            rect({ width: pct(100), height: cm(5), fill: luma(230) }),
          ),
          space,
        ],
        label('fig-ergebnisse'),
      ),
    ),
    inline(
      labelled(
        [
          figure(
            { caption: inline`Vergleich der evaluierten Verfahren` },
            table(
              { columns: [fr(1), auto, auto, auto], align: [left, center, center, center] },
              table.header(
                inline(strong(inline`Verfahren`)),
                inline(strong(inline`Laufzeit (ms)`)),
                inline(strong(inline`Genauigkeit (%)`)),
                inline(strong(inline`Speicherbedarf (in Megabyte)`)),
              ),
              inline`Baseline`,
              inline`142`,
              inline`87.3`,
              inline`512`,
              inline`Ansatz 1`,
              inline`105`,
              inline`88.1`,
              inline`480`,
              inline`Ansatz 2 (vorgeschlagen)`,
              inline`93`,
              inline`88.7`,
              inline`460`,
            ),
          ),
          space,
        ],
        label('tbl-ergebnisse'),
      ),
    ),
    m.heading(1, 'Zusammenfassung und Ausblick'),
    'Die vorliegende Arbeit zeigt, dass Methoden der angewandten Informatik effektiv zur Lösung von Problemstellungen eingesetzt werden können. Der entwickelte Prototyp belegt die Tragfähigkeit des vorgeschlagenen Ansatzes.',
    'Weiterer Forschungsbedarf besteht hinsichtlich der Übertragbarkeit der Ergebnisse auf andere Domänen sowie der Optimierung des Verfahrens für Ressourcen-beschränkte Umgebungen. Eine vertiefte Betrachtung dieser Aspekte bleibt künftigen Arbeiten vorbehalten.',
    inline(bibliography(path('references.bib'))),
  )
}
