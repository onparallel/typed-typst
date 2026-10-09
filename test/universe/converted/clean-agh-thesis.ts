// Converted from test/universe/corpus/clean-agh-thesis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  define,
  doc,
  external,
  importPackage,
  inline,
  label,
  m,
  path,
  ref,
  show,
} from '../../../src/index.ts'

export default () => {
  const agh = external('agh')
  const agh_with = define('with')
    .named('acknowledgements', T.any, null)
    .named('author', T.any, null)
    .named('bibliography', T.any, null)
    .named('course', T.any, null)
    .named('department', T.any, null)
    .named('masters', T.any, null)
    .named('supervisor', T.any, null)
    .named('titles', T.any, null)
    .returns(T.any)
    .external(agh)
  return doc(
    importPackage('@preview/clean-agh-thesis:0.1.0', [agh]),
    show(
      agh_with({
        titles: [
          'Klasyfikacja wybranych komórek szpiku kostnego na podstawie zdjęć rozmazów przy użyciu algorytmu opartego na splotowych sieciach neuronowych',
          'Classification of selected bone marrow cells from smear images using convolutional neural networks',
        ],
        department: 'Wydział Elektrotechniki, Automatyki, Informatyki i Inżynierii Biomedycznej',
        author: 'Mateusz Woźniak',
        supervisor: 'dr hab. inż. Tomasz Hachaj',
        course: 'Informatyka i Systemy Inteligentne',
        acknowledgements: [
          'Dziękuję moim rodzicom, którzy zawsze wspierają mnie w moich decyzjach.',
          'Dziękuję moim kolegom i koleżankom, którzy pomogli mi w realizacji tego projektu.',
        ],
        masters: false,
        bibliography: bibliography({ title: 'Bibliografia' }, path('refs.bib')),
      }),
    ),
    m.lines(m.heading(1, 'Wstęp'), m.heading(2, 'Wprowadzenie')),
    'Rozwój technologii informatycznych, w szczególności uczenia maszynowego, otwiera nowe możliwości w wielu dziedzinach nauki i przemysłu. Jednym z obszarów życia, w którym te technologie mogą odnieść duży sukces, jest medycyna. Zastosowanie komputerów do analizy danych medycznych może wpłynąć pozytywnie na proces leczenia wielu chorób. Sztuczna inteligencja daje możliwość zautomatyzowania czasochłonnych zadań w diagnostyce i zaoszczędzenia wielu godzin pracy lekarza diagnosty.',
    inline`Celem niniejszej pracy jest zastosowanie splotowych sieci neuronowych do klasyfikacji komórek
szpiku kostnego na podstawie zdjęć rozmazów ${ref(label('dataset'))}. Wykorzystanie tej technologii
może znacznie przyspieszyć i ułatwić proces diagnozy, co jest kluczowe dla skutecznego leczenia
wielu chorób takich jak na przykład nowotwory krwi.`,
    m.heading(1, 'Podstawy teoretyczne'),
    'Podstawowym elementem sieci neuronowych jest neuron, który jest elementem obliczeniowym, który przyjmuje sygnały wejściowe, przetwarza je i generuje sygnał wyjściowy.',
  )
}
