// Converted from test/universe/corpus/simple-thesis-ger-host.typ by scripts/convert-suite.ts — do not edit.
import {
  T,
  bibliography,
  define,
  doc,
  external,
  heading,
  importPackage,
  includeFile,
  inline,
  label,
  lorem,
  m,
  pagebreak,
  path,
  ref,
  show,
  space,
} from '../../../src/index.ts'

export default () => {
  const thesisLayout = external('thesis-layout')
  const showGlossary = external('show-glossary')
  const thesisLayout_with = define('with')
    .named('author', T.content, [])
    .named('city', T.content, [])
    .named('company', T.content, [])
    .named('degree', T.content, [])
    .named('examiner-first', T.content, [])
    .named('examiner-second', T.content, [])
    .named('faculty', T.content, [])
    .named('street', T.content, [])
    .named('subject', T.content, [])
    .named('thesis-title', T.content, [])
    .returns(T.any)
    .external(thesisLayout)
  return doc(
    m.lines(
      importPackage('@preview/simple-thesis-ger-host:1.0.1', [thesisLayout, showGlossary]),
      show(
        thesisLayout_with({
          degree: inline`Abschlussarbeit`,
          subject: inline`Studiengang Elektrotechnik Bachelor`,
          thesisTitle: inline`Titel der Abschlussarbeit, der viel zu lang ist, sowie sich das für eine Ordentliche Abschlussarbeit,
die was aufsich hält, gehört`,
          author: inline`Vorname Nachname`,
          street: inline`Beispiel Straße 15`,
          city: inline`18435 Stralsund`,
          examinerFirst: inline`Prof. Dr. Ing. Beispielname`,
          examinerSecond: inline`Prof. Dr. Zweitprüfer`,
          faculty: inline`Fakultät Elektrotechnik und Informatik`,
          company: inline`Beispiel GmbH`,
        }),
      ),
    ),
    m.lines(
      includeFile('./chapter/vorwort.typ'),
      heading({ depth: 1 }, inline('Chapter 1')),
      inline(
        lorem(20),
        space,
        ref(label('host')),
        space,
        lorem(60),
        space,
        ref(label('hostWebsite')),
        space,
        lorem(800),
      ),
      heading({ depth: 1 }, inline('Chapter 2')),
      inline(
        lorem(20),
        space,
        ref(label('host')),
        space,
        lorem(60),
        space,
        ref(label('hostWebsite')),
        space,
        lorem(80),
        space,
        ref(label('hostWebsite')),
        space,
        lorem(200),
      ),
      heading({ depth: 1 }, inline('Chapter 3')),
      inline(lorem(500), space, pagebreak()),
      heading({ depth: 1 }, inline('Glossar')),
      show(showGlossary),
    ),
    m.lines(
      heading({ depth: 1 }, inline('Quellenverzeichniss')),
      inline(bibliography({ title: null }, path('./bib/Abschlussarbeit.bib'))),
      heading({ depth: 1 }, inline('Anhang')),
    ),
  )
}
