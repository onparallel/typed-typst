// Converted from test/universe/corpus/easy-wi-hwr.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  auto,
  bibliography,
  define,
  doc,
  external,
  importPackage,
  includeFile,
  inline,
  path,
  show,
  space,
} from '../../../src/index.ts'

export default () => {
  const hwr = external('hwr')
  const abk = external('abk')
  const gls = external('gls')
  const glspl = external('glspl')
  const hwr_with = define('with')
    .named('abbreviations', T.any, null)
    .named('abstract', T.content, [])
    .named('ai-tools', T.any, null)
    .named('appendix', T.any, null)
    .named('bibliography', T.any, null)
    .named('chapters', T.any, null)
    .named('citation-style', T.any, null)
    .named('city', T.any, null)
    .named('cohort', T.any, null)
    .named('company', T.any, null)
    .named('date', T.any, null)
    .named('declaration-lang', T.any, null)
    .named('doc-type', T.any, null)
    .named('field-of-study', T.any, null)
    .named('glossary', T.any, null)
    .named('heading-depth', T.any, null)
    .named('lang', T.any, null)
    .named('matrikel', T.any, null)
    .named('name', T.any, null)
    .named('semester', T.any, null)
    .named('show-appendix-toc', T.any, null)
    .named('supervisor', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(hwr)
  return doc(
    importPackage('@preview/easy-wi-hwr:0.1.3', [hwr, abk, gls, glspl]),
    show(
      hwr_with({
        docType: 'ptb-1',
        title: 'Digitale Transformation im Mittelstand: Chancen und Herausforderungen',
        name: 'Max Mustermann',
        matrikel: '12345678',
        supervisor: 'Prof. Dr. Anna Muster',
        company: 'Muster GmbH',
        lang: 'de',
        fieldOfStudy: 'Wirtschaftsinformatik',
        cohort: '2024',
        semester: '3',
        date: auto,
        abstract: inline`${space}Diese Arbeit untersucht die digitale Transformation im deutschen Mittelstand. Im Fokus
stehen die zentralen Herausforderungen bei der Einführung von ERP-Systemen sowie die Erfolgsfaktoren
für eine nachhaltige Digitalisierungsstrategie.${space}`,
        abbreviations: {
          HWR: 'Hochschule für Wirtschaft und Recht Berlin',
          KI: 'Künstliche Intelligenz',
          ERP: 'Enterprise Resource Planning',
          API: 'Application Programming Interface',
          PTB: 'Praxistransferbericht',
        },
        glossary: [
          {
            key: 'stakeholder',
            short: 'Stakeholder',
            long: 'Stakeholder',
            description: 'Interessengruppen, die direkt oder indirekt von einem Projekt betroffen sind.',
          },
        ],
        aiTools: [
          {
            tool: 'ChatGPT 4o',
            usage: 'Textvorschläge für Einleitung, im Text gekennzeichnet',
            chapters: 'Kapitel 1, S. 3',
            remarks: 'Prompts: ',
            remarksRef: 'Prompt-Protokoll',
          },
          { tool: 'DeepL Translator', usage: 'Übersetzung englischer Quellabschnitte', chapters: 'Gesamte Arbeit' },
        ],
        chapters: [
          includeFile('kapitel/01_einleitung.typ'),
          includeFile('kapitel/02_grundlagen.typ'),
          includeFile('kapitel/03_methodik.typ'),
          includeFile('kapitel/04_ergebnisse.typ'),
          includeFile('kapitel/05_fazit.typ'),
        ],
        appendix: [
          { title: 'Interviewleitfaden', content: includeFile('anhang/a_interviewleitfaden.typ') },
          { title: 'Rohdaten Umfrage', content: includeFile('anhang/b_rohdaten.typ') },
          { title: 'Screenshot Dashboard', content: includeFile('anhang/c_abbildung.typ') },
          { title: 'Prompt-Protokoll', content: includeFile('anhang/d_prompt_protokoll.typ') },
          { title: 'Interview-Transkript', content: includeFile('anhang/e_interview_transkript.typ') },
          { title: 'Code-Listing', content: includeFile('anhang/f_code_listing.typ') },
          { title: 'Mermaid-Diagramm', content: includeFile('anhang/g_mermaid_diagramm.typ') },
        ],
        bibliography: bibliography(path('refs.bib')),
        citationStyle: 'auto',
        headingDepth: 4,
        declarationLang: auto,
        city: 'Berlin',
        showAppendixToc: false,
      }),
    ),
  )
}
