// Converted from test/universe/corpus/unofficial-ukim-thesis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  define,
  doc,
  external,
  image,
  importPackage,
  inline,
  m,
  pagebreak,
  path,
  pct,
  show,
  space,
} from '../../../src/index.ts'

export default () => {
  const uthesis = external('uthesis')
  const uthesis_with = define('with')
    .named('abstract-en', T.content, [])
    .named('abstract-mk', T.content, [])
    .named('author', T.any, null)
    .named('committee', T.any, null)
    .named('dedication', T.any, null)
    .named('defense-date', T.any, null)
    .named('institution', T.any, null)
    .named('keywords-en', T.any, null)
    .named('keywords-mk', T.any, null)
    .named('location', T.any, null)
    .named('logo', T.any, null)
    .named('mentor', T.any, null)
    .named('promotion-date', T.any, null)
    .named('title-en', T.any, null)
    .named('title-mk', T.any, null)
    .named('year', T.any, null)
    .returns(T.any)
    .external(uthesis)
  return doc(
    importPackage('@preview/unofficial-ukim-thesis:0.1.0', [uthesis]),
    show(
      uthesis_with({
        titleMk: 'Рамански спектри на кофеин',
        titleEn: 'Raman spectra of caffeine',
        institution: 'Институт за хемија, Природно-математички факултет, Универзитет „Св. Кирил и Методиј“ Скопје ',
        logo: image({ width: pct(30) }, path('logo.png')),
        author: 'Студент Студентовски',
        year: '2025',
        location: 'Скопје',
        mentor: 'Ментор: Проф. д-р Ментор',
        committee: [
          'Членови на комисијата:       Член 1',
          '                                                               Член 2',
          '                                                               Член 3',
        ],
        defenseDate: 'Датум на одбраната: 01.01.2025',
        promotionDate: 'Датум на промоција: 01.01.2025',
        abstractMk: inline`${space}Апстракт на македонски.${space}`,
        keywordsMk: ['клучен збор 1', 'клучен збор 2', 'клучен збор 3'],
        abstractEn: inline`${space}Abstract written in English.${space}`,
        keywordsEn: ['keyword 1', 'keyword 2', 'keyword 3'],
        dedication: null,
      }),
    ),
    inline(pagebreak()),
    m.heading(1, 'Вовед'),
    inline(pagebreak()),
    m.heading(1, 'Теорија'),
    inline(pagebreak()),
    m.heading(1, 'Експериментален дел'),
    inline(pagebreak()),
    m.heading(1, 'Резултати'),
    inline(pagebreak()),
    m.heading(1, 'Заклучок'),
    inline(pagebreak()),
  )
}
