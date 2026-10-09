// Converted from test/universe/corpus/clean-barm.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  cite,
  define,
  doc,
  external,
  figure,
  footnote,
  fr,
  heading,
  importPackage,
  includeFile,
  inline,
  label,
  labelled,
  lorem,
  m,
  path,
  raw,
  ref,
  show,
  table,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const prequery = external('prequery')
  const thesis = external('thesis')
  const acr = define('acr').pos('arg1', T.any).returns(T.any).external()
  const gls = define('gls').pos('arg1', T.any).returns(T.any).external()
  const comment = define('comment').pos('arg1', T.any).returns(T.any).external()
  const todo = define('todo').pos('arg1', T.any).returns(T.any).external()
  const sourcecode = define('sourcecode').pos('arg1', T.any).returns(T.any).external()
  const thesis_with = define('with')
    .named('academic-reviewer', T.any, null)
    .named('acronyms', T.any, null)
    .named('appendix', T.any, null)
    .named('author', T.any, null)
    .named('bibliography', T.any, null)
    .named('company-logo', T.any, null)
    .named('company-reviewer', T.any, null)
    .named('contact-details', T.any, null)
    .named('degree-program', T.content, [])
    .named('description', T.any, null)
    .named('glossary', T.any, null)
    .named('header-logo', T.any, null)
    .named('keywords', T.any, null)
    .named('show-list-of-code', T.any, null)
    .named('show-list-of-figures', T.any, null)
    .named('show-list-of-tables', T.any, null)
    .named('student-id', T.any, null)
    .named('study-group', T.any, null)
    .named('submission-date', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(thesis)
  const prequery_image = define('image').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external(prequery)
  return doc(
    m.lines(
      importPackage('@preview/clean-barm:1.0.1', [thesis, acr, gls, comment, todo]),
      importPackage('@preview/codelst:2.0.2', [sourcecode]),
      importPackage('@preview/prequery:0.2.0', prequery),
    ),
    inline(unsafeRaw.code<any>`prequery.fallback.update(true)`),
    show(
      thesis_with({
        title: 'Titel der Arbeit',
        author: 'Max Mustermann',
        studyGroup: 'AI-WS23_III',
        studentId: '123456',
        contactDetails: ['Musterstraße 1', '12345 Musterstadt', 'max.mustermann@email.com'],
        keywords: ['PDF', 'Ausarbeitung'],
        description: '',
        submissionDate: '01.01.2024',
        academicReviewer: 'Alice',
        companyReviewer: 'Bob',
        headerLogo: prequery_image(
          'https://raw.githubusercontent.com/GolemT/BA-Template/4af5df877426ca06ec087129b9684637c4cc49b1/Bachelorarbeit/images/BA_Header.png',
          'BA_Header.png',
        ),
        companyLogo: prequery_image(
          'https://raw.githubusercontent.com/GolemT/BA-Template/4af5df877426ca06ec087129b9684637c4cc49b1/Bachelorarbeit/images/DB_Logo.png',
          'DB_Logo.png',
        ),
        degreeProgram: inline`Angewandte Informatik`,
        showListOfFigures: true,
        showListOfTables: true,
        showListOfCode: true,
        acronyms: { API: 'Application Programming Interface', HTML: 'Hypertext Markup Language' },
        appendix: includeFile('./anhang.typ'),
        glossary: {
          API: 'Application Programming Interface',
          Typst: 'Eine Markup-Sprache für die Dokumentenerstellung',
        },
        bibliography: bibliography({ title: null, style: path('apa-ba-remix.csl') }, path('refs.bib')),
      }),
    ),
    m.heading(1, 'Introduction'),
    includeFile('/texts/subtext.typ'),
    m.heading(2, 'Different Objects'),
    inline`${acr('API')} ist eine Abkürzung`,
    inline`${gls('API')} ist eine Glossarverlinkung`,
    inline(
      labelled(
        figure(
          { caption: 'Logo der Berufsakademie Rhein-Main' },
          prequery_image(
            'https://raw.githubusercontent.com/GolemT/BA-Template/4af5df877426ca06ec087129b9684637c4cc49b1/Wissenschaftliche_Arbeiten/images/BA_Logo.jpg',
            'BA_Logo.jpg',
          ),
        ),
        label('Logo'),
      ),
    ),
    inline(
      labelled(
        figure({ caption: 'Tabellenbeispiel' }, table({ columns: fr(2), rowGutter: 1 }, inline`Das ist eine Tabelle`)),
        label('tabelle'),
      ),
    ),
    inline(
      labelled(
        figure(
          { caption: 'Beispiel für Code' },
          sourcecode(
            raw(
              { block: true, lang: 'ts' },
              '  const ReactComponent = () => {\n    return (\n      <div>\n        <h1>Hello World</h1>\n      </div>\n    );\n  };\n\n  export default ReactComponent;',
            ),
          ),
        ),
        label('code'),
      ),
    ),
    inline(labelled(heading({ depth: 3 }, inline('Contributions')), label('Contribution'))),
    inline(comment('This is a comment')),
    inline(todo('This is a ToDo')),
    inline(lorem(40)),
    m.heading(1, 'Linking Text'),
    inline`Hier wird nochmal ${acr('API')} aus dem Abkürzungsverzeichnis erwähnt.`,
    inline`Hier wird nochmal ${gls('API')} aus dem Glossar erwähnt`,
    inline`${ref(label('Logo'))} Zeigt das Logo der BA`,
    inline`${ref(label('tabelle'))} zeigt ein Beispiel einer Tabelle`,
    inline`${ref(label('code'))} zeigt ein Code Snippet`,
    m.heading(2, 'Zitate'),
    inline`Hier ist ein Zitat ${ref(label('nissen_softwareagenten_2006'))}.`,
    inline`${cite({ form: 'prose' }, label('nissen_softwareagenten_2006'))}) zitiert etwas im laufenden
Text.`,
    inline`Hier ist ein Zitat mit Link auf die Fußnote ${footnote(inline(cite(label('nissen_softwareagenten_2006'))))}`,
  )
}
