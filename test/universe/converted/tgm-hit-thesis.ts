// Converted from test/universe/corpus/tgm-hit-thesis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  cm,
  context,
  datetime,
  define,
  doc,
  external,
  importFile,
  includeFile,
  inline,
  path,
  show,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const thesis = define('thesis')
    .named('authors', T.any, null)
    .named('bibliography', T.any, null)
    .named('date', T.any, null)
    .named('division', T.content, [])
    .named('logo', T.any, null)
    .named('prompts', T.any, null)
    .named('subtitle', T.content, [])
    .named('supervisor', T.content, [])
    .named('supervisor-label', T.content, [])
    .named('title', T.content, [])
    .named('year', T.content, [])
    .returns(T.any)
    .external()
  const assets = external('assets')
  const declaration = define('declaration').pos('arg1', T.any).returns(T.any).external()
  const mainMatter = define('main-matter').returns(T.any).external()
  const assets_logo = define('logo').named('width', T.any, null).returns(T.any).external(assets)
  return doc(
    importFile('lib.typ', [thesis, assets, declaration, mainMatter]),
    show(
      thesis({
        title: inline`Keine Panik!`,
        subtitle: inline`Mit Typst durch die Diplomarbeit`,
        authors: [
          { name: 'Arthur Dent', class: inline`5xHIT`, subtitle: inline`Untertitel des Themengebiets von Arthur Dent` },
          {
            name: 'Ford Prefect',
            class: inline`5xHIT`,
            subtitle: inline`Untertitel des Themengebiets von Ford Prefect`,
          },
          {
            name: 'Tricia McMillan',
            class: inline`5xHIT`,
            subtitle: inline`Untertitel des Themengebiets von Tricia McMillan`,
          },
          {
            name: 'Zaphod Beeblebrox',
            class: inline`5xHIT`,
            subtitle: inline`Untertitel des Themengebiets von Zaphod Beeblebrox`,
          },
        ],
        supervisorLabel: inline`Betreuer:in`,
        supervisor: inline`DSc MSc Deep Thought`,
        date: datetime({ year: 2018, month: 3, day: 4 }),
        year: inline`2017/18`,
        division: inline`Medientechnik, Systemtechnik`,
        logo: assets_logo({ width: cm(3) }),
        bibliography: path('bibliography.bib'),
        prompts: path('prompts.bib'),
      }),
    ),
    includeFile('glossaries.typ'),
    inline(
      declaration(unsafeRaw.code<any>`context if text.lang == "de" [
  Ich erkläre an Eides statt, dass ich die vorliegende Arbeit selbstständig verfasst, andere als die angegebenen Quellen/Hilfsmittel nicht benutzt und die den benutzten Quellen wörtlich und inhaltlich entnommenen Stellen als solche kenntlich gemacht habe.
  Für die Erstellung der Arbeit habe ich auch folgende Hilfsmittel generativer KI-Tools [z. B. ChatGPT, Grammarly Go, Midjourney] zu folgendem Zweck verwendet:

  - ChatGPT: eigentlich für eh alles
] else if text.lang == "en" [
  I declare that I have authored this thesis independently, that I have not used other than the declared sources and that I have explicitly marked all material which has been quoted either literally or by content from the used sources.
  I also used the following generative AI tools [e.g. ChatGPT, Grammarly Go, Midjourney] for the following purpose:

  - ChatGPT: for basically everything
] else {
  panic("no statutory declaration for that language!")
}`),
    ),
    includeFile('chapters/kurzfassung.typ'),
    show(mainMatter()),
    includeFile('chapters/about.typ'),
    includeFile('chapters/kapitel-1.typ'),
    includeFile('chapters/kapitel-2.typ'),
  )
}
