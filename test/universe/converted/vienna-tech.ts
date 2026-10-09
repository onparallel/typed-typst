// Converted from test/universe/corpus/vienna-tech.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  blocks,
  define,
  doc,
  external,
  importPackage,
  includeFile,
  inline,
  m,
  outline,
  pagebreak,
  path,
  raw,
  show,
  space,
} from '../../../src/index.ts'

export default () => {
  const fancyTypst = external('fancy-typst')
  const fancyLatex = external('fancy-latex')
  const tuwThesis = external('tuw-thesis')
  const maketitle = define('maketitle')
    .named('authors', T.any, null)
    .named('thesis-type', T.content, [])
    .named('title', T.content, [])
    .returns(T.any)
    .external()
  const author = define('author')
    .pos('arg1', T.any)
    .named('email', T.any, null)
    .named('matrnr', T.any, null)
    .returns(T.any)
    .external()
  const abstract = define('abstract').pos('arg1', T.content).returns(T.any).external()
  const appendix = external('appendix')
  const figOutline = define('fig-outline').named('title', T.any, null).returns(T.any).external()
  const tabOutline = define('tab-outline').named('title', T.any, null).returns(T.any).external()
  const tuwThesis_with = define('with').named('header-title', T.any, null).returns(T.any).external(tuwThesis)
  const appendix_with = define('with').named('title', T.any, null).returns(T.any).external(appendix)
  return doc(
    importPackage('@preview/vienna-tech:1.1.0', [
      fancyTypst,
      fancyLatex,
      tuwThesis,
      maketitle,
      author,
      abstract,
      appendix,
      figOutline,
      tabOutline,
    ]),
    m.lines(show('Typst', fancyTypst), show('LaTeX', fancyLatex)),
    m.lines(
      show(tuwThesis_with({ headerTitle: 'Instruktionen zur Abfassung der Bachelorarbeit' })),
      inline(
        maketitle({
          title: inline`Instruktionen zur Abfassung der Bachelorarbeit`,
          thesisType: inline`Bachelorarbeit`,
          authors: [author({ email: 'email@email.com', matrnr: '123456789' }, 'Vorname Nachname')],
        }),
      ),
    ),
    inline(abstract(blocks(includeFile('abstract.typ'))), space, outline()),
    m.lines(
      m.heading(1, 'Einleitung'),
      'Die Bachelorarbeit kann in Deutsch oder Englisch verfasst werden. Die Länge darf 12 Seiten nicht unterschreiten und 30 Seiten nicht überschreiten (exkl. Anhang). Nach dem Titel der Arbeit werden der Autor und darauf eine Kurzfassung angeführt. Danach beginnt der Hauptteil der Arbeit. Die Bachelorarbeit hat keine Titelseite und nur bei Bedarf ein Inhaltsverzeichnis (zwischen Kurzfassung und Kapitel 1).',
    ),
    inline`Der Titel der Arbeit wird in dem Konfigurationsbefehl ${raw('tuw-thesis')} angegeben, ebenso
wie der Name des/der Autors/Autoren, die E-Mailadresse, die Matrikelnummer und das Datum. Durch
den Konfigurationsbefehl wird nicht nur der Typografische Stil der Arbeit festgelegt, sondern
es wird auch der Titelblock, das Inhalts- und das Literaturverzeichnis generiert.`,
    m.lines(
      includeFile('sections.typ'),
      inline(
        pagebreak(),
        space,
        show(appendix_with({ title: 'Anhang' })),
        space,
        includeFile('appendix.typ'),
        space,
        bibliography({ title: 'Literaturverzeichnis' }, path('assets/refs.bib')),
      ),
    ),
    inline(figOutline({ title: 'Abbildungsverzeichnis' })),
    inline(tabOutline({ title: 'Tabellenverzeichnis' })),
  )
}
