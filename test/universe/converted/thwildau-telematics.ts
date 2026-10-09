// Converted from test/universe/corpus/thwildau-telematics.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  define,
  doc,
  external,
  importPackage,
  includeFile,
  inline,
  linebreak,
  link,
  m,
  path,
  set,
  show,
  text,
} from '../../../src/index.ts'

export default () => {
  const abbreviation = external('abbreviation')
  const conf = external('conf')
  const defineAbbreviation = external('define-abbreviation')
  const defineUnit = external('define-unit')
  const infocard = external('infocard')
  const tables = external('tables')
  const thColor = external('th-color')
  const todo = external('todo')
  const unit = external('unit')
  const conf_with = define('with')
    .named('bibliography', T.any, null)
    .named('internship', T.any, null)
    .named('language', T.any, null)
    .named('misc-pages', T.any, null)
    .named('student', T.any, null)
    .named('supervisor', T.any, null)
    .named('title', T.any, null)
    .named('titlepage', T.any, null)
    .returns(T.any)
    .external(conf)
  return doc(
    inline(
      importPackage('@preview/thwildau-telematics:0.1.1', [
        abbreviation,
        conf,
        defineAbbreviation,
        defineUnit,
        infocard,
        tables,
        thColor,
        todo,
        unit,
      ]),
    ),
    show(
      conf_with({
        title: 'TH-Wildau Telematics Typst Template',
        titlepage: 'internship',
        student: {
          name: 'Carl Heinrich Bellgardt',
          matrnr: '12345678',
          subject: 'Praxisintegrierender Bachelor Studiengang Telematik',
          seminarGroup: 'T23',
          semester: '5',
        },
        supervisor: { name: 'Frau Dr. Lieschen Müller', mail: 'mueller@beispielag.de' },
        internship: {
          type: '3. Betriebspraktikum',
          partner: inline`Beispiel AG ${linebreak()} Straßenweg 1 ${linebreak()} 12345 Musterstadt ${linebreak()} ${link('https://beispielag.de')}`,
          period: '16.06.2025 bis 25.07.2025',
        },
        bibliography: bibliography({ style: 'institute-of-electrical-and-electronics-engineers' }, path('bib.yaml')),
        language: 'de',
        miscPages: {
          bibliographicDescription: {
            de: {
              titleLong: 'TH-Wildau Telematics Typst Template für Thesis und Praktikumsbericht',
              metadata: ' ',
              keywords: 'Typst, Thesis, Template, TH-Wildau, Telematik',
              goal: inline`Erstellung eines neue Typst Projektes mit dem TH-Wildau Telematics Template.`,
              abstract: inline`In dieser Arbeit wird erklärt, wie das darin verwendete TH-Wildau Telematics Typst-Template
konfiguriert und angewendet werden kann.`,
            },
            en: {
              titleLong: 'TH-Wildau Typst template for thesis and intership.',
              metadata: ' ',
              keywords: 'Typst, Thesis, Template, TH-Wildau, Telematics',
              goal: inline`Creation of a new typst project with the TH-Wildau Telematics template.`,
              abstract: inline`This thesis aims to explain the process of installing, configuring and applying the TH-Wildau
Telematics typst template.`,
            },
          },
          readingGuides: inline`Für diese Arbeit ist grundlegendes Wissen über die Sprache Typst von Vorteil.${linebreak()}
For this template it is advised to first understand the basic concepts of the typst language.`,
          authorshipDeclaration: true,
          companyConfirmation: true,
          glossary: [['Telematik', 'Die Kombination aus Telekommunikation und Informatik']],
          appendix: includeFile('chapters/appendix.typ'),
        },
      }),
    ),
    m.lines(set(text, { lang: 'en' }), includeFile('chapters/01.typ')),
    m.lines(set(text, { lang: 'de' }), includeFile('chapters/02.typ')),
  )
}
