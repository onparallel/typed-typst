// Converted from test/universe/corpus/pg-thesis-unofficial.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, external, importPackage, includeFile, m, path, show } from '../../../src/index.ts'

export default () => {
  const pg = external('pg')
  const pg_pracaDyplomowa = define('praca-dyplomowa')
    .named('abbreviations', T.any, null)
    .named('abstract-eng', T.any, null)
    .named('abstract-pl', T.any, null)
    .named('appendices', T.any, null)
    .named('bibliography-path', T.any, null)
    .named('disclaimer-page-path', T.any, null)
    .named('keywords-eng', T.any, null)
    .named('keywords-pl', T.any, null)
    .named('oecd-eng', T.any, null)
    .named('oecd-pl', T.any, null)
    .named('title-page-path', T.any, null)
    .returns(T.any)
    .external(pg)
  return doc(
    importPackage('@preview/pg-thesis-unofficial:0.1.0', pg),
    show(
      pg_pracaDyplomowa.with({
        titlePagePath: path('./assets/strona-tytulowa.pdf'),
        disclaimerPagePath: path('./assets/oswiadczenie.pdf'),
        abstractPl: includeFile('chapters/meta/streszczenie.typ'),
        keywordsPl: 'tutaj, należy, podać, słowa, kluczowe',
        oecdPl: 'dziedzina, technika, ...',
        abstractEng: includeFile('chapters/meta/abstract.typ'),
        keywordsEng: 'tutaj, należy, podać, słowa, kluczowe, w, języku, angielskim',
        oecdEng: 'dziedzina po angielsku, ...',
        abbreviations: includeFile('chapters/meta/wykaz-skrotow.typ'),
        bibliographyPath: path('bibliography.bib'),
        appendices: [includeFile('chapters/dodatki/dodatek-a.typ')],
      }),
    ),
    m.lines(
      includeFile('chapters/wstep.typ'),
      includeFile('chapters/dokumenty-elektroniczne.typ'),
      includeFile('chapters/jeszcze-jeden-rozdzial.typ'),
      includeFile('chapters/podsumowanie.typ'),
    ),
  )
}
