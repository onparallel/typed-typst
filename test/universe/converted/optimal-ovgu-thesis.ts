// Converted from test/universe/corpus/optimal-ovgu-thesis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  counter,
  define,
  doc,
  external,
  importFile,
  importPackage,
  includeFile,
  inline,
  m,
  outline,
  page,
  path,
  set,
  show,
  space,
} from '../../../src/index.ts'

export default () => {
  const author = external('author')
  const lang = external('lang')
  const documentType = external('document-type')
  const supervisor = external('supervisor')
  const secondSupervisor = external('second-supervisor')
  const advisors = external('advisors')
  const city = external('city')
  const date = external('date')
  const isDoublesided = external('is-doublesided')
  const title_2 = external('title')
  const internationalTitle = external('international-title')
  const organisation = external('organisation')
  const organisationLogo = external('organisation-logo')
  const headerLogo = external('header-logo')
  const optimalOvguThesis = external('optimal-ovgu-thesis')
  const ootTitlepage = define('oot-titlepage')
    .named('advisors', T.any, null)
    .named('author', T.any, null)
    .named('city', T.any, null)
    .named('date', T.any, null)
    .named('document-type', T.any, null)
    .named('header-logo', T.any, null)
    .named('is-doublesided', T.any, null)
    .named('lang', T.any, null)
    .named('organisation', T.any, null)
    .named('organisation-logo', T.any, null)
    .named('second-supervisor', T.any, null)
    .named('supervisor', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external()
  const ootDisclaimer = define('oot-disclaimer')
    .named('author', T.any, null)
    .named('city', T.any, null)
    .named('international-title', T.any, null)
    .named('is-doublesided', T.any, null)
    .named('lang', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external()
  const ootAcknowledgement = define('oot-acknowledgement')
    .pos('arg1', T.content)
    .named('heading', T.any, null)
    .named('is-doublesided', T.any, null)
    .returns(T.any)
    .external()
  const ootAbstract = define('oot-abstract')
    .pos('arg1', T.content)
    .named('is-doublesided', T.any, null)
    .named('lang', T.any, null)
    .returns(T.any)
    .external()
  const optimalOvguThesis_with = define('with')
    .named('author', T.any, null)
    .named('is-doublesided', T.any, null)
    .named('lang', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(optimalOvguThesis)
  return doc(
    m.lines(
      importFile('metadata.typ', [
        author,
        lang,
        documentType,
        supervisor,
        secondSupervisor,
        advisors,
        city,
        date,
        isDoublesided,
        title_2,
        internationalTitle,
        organisation,
        organisationLogo,
        headerLogo,
      ]),
      importPackage('@preview/optimal-ovgu-thesis:0.1.1', [
        optimalOvguThesis,
        ootTitlepage,
        ootDisclaimer,
        ootAcknowledgement,
        ootAbstract,
      ]),
    ),
    show(optimalOvguThesis_with({ title: title_2, author: author, lang: lang, isDoublesided: isDoublesided })),
    set(page, { numbering: 'I' }),
    inline(
      ootTitlepage({
        title: title_2,
        documentType: documentType,
        supervisor: supervisor,
        secondSupervisor: secondSupervisor,
        advisors: advisors,
        author: author,
        city: city,
        date: date,
        organisation: organisation,
        organisationLogo: organisationLogo,
        headerLogo: headerLogo,
        isDoublesided: isDoublesided,
        lang: lang,
      }),
    ),
    inline(counter(page).update(2)),
    inline(
      ootDisclaimer({
        title: title_2,
        internationalTitle: internationalTitle,
        author: author,
        city: city,
        isDoublesided: isDoublesided,
        lang: lang,
      }),
    ),
    inline(
      ootAcknowledgement(
        { heading: 'Acknowledgements', isDoublesided: isDoublesided },
        inline`${space}Standing on the shoulders of giants${space}`,
      ),
    ),
    inline(
      ootAbstract(
        { isDoublesided: isDoublesided },
        inline`${space}This Master's thesis investigates the impact of different architectures of neural networks
on the performance of real-time image recognition on low-power devices. Optimization strategies
are developed and evaluated to enhance the efficiency and accuracy of these systems. The results
demonstrate that targeted adaptations of network structures are crucial for enabling fast and
precise image recognition on resource-constrained devices.${space}`,
      ),
    ),
    inline(
      ootAbstract(
        { isDoublesided: isDoublesided, lang: 'de' },
        inline`${space}Die vorliegende Masterarbeit untersucht die Auswirkungen verschiedener Architekturen
von neuronalen Netzwerken auf die Leistungsfähigkeit der Bilderkennung in Echtzeit auf energiesparenden
Geräten. Es werden Optimierungsstrategien entwickelt und evaluiert, um die Effizienz und Genauigkeit
dieser Systeme zu verbessern. Die Ergebnisse zeigen, dass die gezielte Anpassung der Netzwerkstrukturen
entscheidend ist, um eine schnelle und präzise Bilderkennung auf ressourcenbeschränkten Geräten
zu ermöglichen.${space}`,
      ),
    ),
    inline(outline()),
    m.lines(set(page, { numbering: '1' }), inline(counter(page).update(1))),
    includeFile('chapter/01-Einleitung.typ'),
    inline(bibliography(path('./thesis.bib'))),
    includeFile('chapter/99-Appendix.typ'),
  )
}
