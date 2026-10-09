// Converted from test/universe/corpus/ukw-bipg-unofficial-thesis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  cm,
  define,
  doc,
  external,
  figure,
  footnote,
  importPackage,
  inline,
  label,
  labelled,
  m,
  pct,
  pt,
  rect,
  ref,
  show,
  space,
  strong,
  table,
} from '../../../src/index.ts'

export default () => {
  const ukwThesis = external('ukw-thesis')
  const zalacznik = external('zalacznik')
  const ukwThesis_with = define('with')
    .named('abstract', T.content, [])
    .named('album', T.any, null)
    .named('author', T.any, null)
    .named('bibliography-file', T.any, null)
    .named('bibliography-style', T.any, null)
    .named('degree', T.any, null)
    .named('draft', T.any, null)
    .named('field', T.any, null)
    .named('keywords', T.any, null)
    .named('lang', T.any, null)
    .named('list-of-figures', T.any, null)
    .named('list-of-tables', T.any, null)
    .named('study-type', T.any, null)
    .named('subtitle', T.any, null)
    .named('supervisor', T.any, null)
    .named('title', T.any, null)
    .named('year', T.any, null)
    .returns(T.any)
    .external(ukwThesis)
  return doc(
    importPackage('@preview/ukw-bipg-unofficial-thesis:0.1.0', [ukwThesis, zalacznik]),
    show(
      ukwThesis_with({
        title: 'Proceduralne generowanie poziomów jako narzędzie projektowania rozgrywki',
        subtitle: null,
        author: 'Anna Kowalska',
        album: '123456',
        supervisor: 'dr Jan Nowak',
        field: 'Badanie i Projektowanie Gier',
        studyType: 'studia stacjonarne pierwszego stopnia',
        degree: 'bachelor',
        year: '2026',
        lang: 'pl',
        keywords: ['proceduralne generowanie', 'projektowanie poziomów', 'mechaniki gier', 'roguelike', 'game design'],
        abstract: inline`${space}Praca analizuje wykorzystanie proceduralnego generowania poziomów w projektowaniu rozgrywki
gier cyfrowych. Celem badania jest ustalenie, w jaki sposób parametry algorytmów generacyjnych
przekładają się na doświadczenie gracza. W części teoretycznej omówiono stan badań, w części
praktycznej przedstawiono prototyp oraz wyniki testów z udziałem graczy.${space}`,
        bibliographyFile: 'template/bibliografia.bib',
        bibliographyStyle: 'apa',
        listOfFigures: true,
        listOfTables: true,
        draft: false,
      }),
    ),
    m.heading(1, 'Wstęp'),
    'Tutaj przedstawiasz temat, cel pracy, hipotezy oraz zakres podmiotowy i przedmiotowy badania — czyli dokładnie te elementy, o których będziesz mówić podczas omówienia pracy na egzaminie dyplomowym (§3 ust. 3 Regulaminu).',
    inline`Przypis merytoryczny umieszczasz na dole strony w ten sposób.${footnote(inline`Numeracja przypisów jest ciągła w całej pracy — wymaga tego §2 ust. 4.`)}
Odwołanie śródtekstowe do literatury zapisujesz konsekwentnie jednym systemem ${ref(label('juul2005'))}.`,
    m.heading(2, 'Cel i hipotezy'),
    'Sformułuj cel główny oraz hipotezy badawcze.',
    m.heading(2, 'Metody badawcze'),
    'Opisz zastosowane metody oraz wykorzystane źródła informacji.',
    m.heading(1, 'Stan badań'),
    'Przegląd literatury przedmiotu.',
    inline(
      labelled(
        [
          figure(
            { caption: inline`Schemat pętli rozgrywki w analizowanym prototypie.` },
            rect({ width: pct(60), height: cm(4), stroke: pt(0.5) }),
          ),
          space,
        ],
        label('fig-petla'),
      ),
    ),
    inline`Do rysunku odwołujesz się przez etykietę: ${ref(label('fig-petla'))}.`,
    m.heading(1, 'Część analityczna / projektowa'),
    inline(
      labelled(
        [
          figure(
            { caption: inline`Parametry generatora poziomów.` },
            table(
              { columns: 3, stroke: pt(0.5) },
              table.header(
                inline(strong(inline`Parametr`)),
                inline(strong(inline`Wartość`)),
                inline(strong(inline`Wpływ na rozgrywkę`)),
              ),
              inline`Gęstość korytarzy`,
              inline`0,4`,
              inline`Tempo eksploracji`,
              inline`Liczba pomieszczeń`,
              inline`12`,
              inline`Długość sesji`,
              inline`Ziarno losowe`,
              inline`stałe / losowe`,
              inline`Powtarzalność testów`,
            ),
          ),
          space,
        ],
        label('tab-parametry'),
      ),
    ),
    m.heading(1, 'Zakończenie'),
    'Wnioski, ograniczenia badania oraz kierunki dalszych prac.',
  )
}
