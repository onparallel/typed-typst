// Converted from test/universe/corpus/kzn-ma.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  black,
  blocks,
  cm,
  codeBlock,
  context,
  counter,
  data,
  datetime,
  define,
  dict,
  doc,
  external,
  green,
  heading,
  image,
  importPackage,
  inline,
  let_,
  link,
  m,
  pagebreak,
  path,
  pct,
  pt,
  raw,
  rgb,
  set,
  show,
  smartquote,
  space,
  unsafePath,
  unsafeRaw,
  white,
} from '../../../src/index.ts'

export default () => {
  const title_2 = external('title')
  const localize = define('localize').pos('arg1', T.any).returns(T.any).external()
  const subtitle = external('subtitle')
  const thesisTypeBeginnersGuide = external('thesis-type-beginners-guide')
  const writtenBy = external('written-by')
  const supervisedBy = external('supervised-by')
  const submittedOn = external('submitted-on')
  const abstractTitle = external('abstract-title')
  const prefaceTitle = external('preface-title')
  const aiDeclarationTitle = external('ai-declaration-title')
  const acknowledgmentsTitle = external('acknowledgments-title')
  const tocTitle = external('toc-title')
  const lofTitle = external('lof-title')
  const lotTitle = external('lot-title')
  const biblioTitle = external('biblio-title')
  const appendixTitle = external('appendix-title')
  const headingDesc = external('heading-desc')
  const figDesc = external('fig-desc')
  const tabDesc = external('tab-desc')
  const appendixDesc = external('appendix-desc')
  const kznHeader = define('kzn-header').named('even-text', T.content, []).returns(T.any).external()
  const kznFooter = define('kzn-footer').named('footer-text', T.content, []).returns(T.any).external()
  const showPrivateContent = external('show-private-content')
  const joinWithUnd = external('join-with-und')
  const anonymousVersion = external('anonymous-version')
  const kznTitlepage = define('kzn-titlepage')
    .named('authors', T.any, null)
    .named('background-color', T.any, null)
    .named('date', T.any, null)
    .named('heading-font', T.any, null)
    .named('nord-color', T.any, null)
    .named('nord-image', T.any, null)
    .named('nord-image-source', T.content, [])
    .named('strings', T.any, null)
    .named('subtitle', T.any, null)
    .named('subtitle-size', T.any, null)
    .named('supervisors', T.any, null)
    .named('title', T.any, null)
    .named('title-size', T.any, null)
    .named('zh-blue', T.any, null)
    .returns(T.any)
    .external()
  const coverImage = external('cover-image')
  const ma = external('ma')
  const outlinesAfter = define('outlines-after').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const ma_with = define('with')
    .named('frontmatter-def', T.any, null)
    .named('layout-def', T.any, null)
    .named('outline-def', T.any, null)
    .named('titlepage-def', T.any, null)
    .returns(T.any)
    .external(ma)
  const [titleDecl, title_3] = let_('title', localize(title_2))
  const [subtitleDecl, subtitle_2] = let_('subtitle', localize(subtitle))
  const [authorsDecl, authors] = let_('authors', data(['Christian Prim', 'Lukas Zuberbühler']))
  const [supervisorsDecl, supervisors] = let_('supervisors', null)
  const [dateDecl, date] = let_('date', datetime({ day: 8, month: 9, year: 2026 }).display('[day].[month].[year]'))
  const [thesisTypeDecl, thesisType] = let_('thesis-type', localize(thesisTypeBeginnersGuide))
  const [writtenByDecl, writtenBy_2] = let_('written-by', localize(writtenBy))
  const [supervisedByDecl, supervisedBy_2] = let_('supervised-by', null)
  const [submittedOnDecl, submittedOn_2] = let_('submitted-on', 'Version')
  const [schoolDecl, school] = let_('school', 'Kantonsschule Zürich Nord')
  const [biblioStyleDecl, biblioStyle] = let_('biblio-style', 'ieee')
  const [biblioFileDecl, biblioFile] = let_('biblio-file', 'mendeley.bib')
  const [contentFileDecl, contentFile] = let_('content-file', 'main-matter.typ')
  const [appendixFileDecl, appendixFile] = let_('appendix-file', 'appendix.typ')
  const [abstractTitleDecl, abstractTitle_2] = let_('abstract-title', localize(abstractTitle))
  const [prefaceTitleDecl, prefaceTitle_2] = let_('preface-title', localize(prefaceTitle))
  const [aiDeclarationTitleDecl, aiDeclarationTitle_2] = let_('ai-declaration-title', localize(aiDeclarationTitle))
  const [acknowledgmentsTitleDecl, acknowledgmentsTitle_2] = let_(
    'acknowledgments-title',
    localize(acknowledgmentsTitle),
  )
  const [tocTitleDecl, tocTitle_2] = let_('toc-title', localize(tocTitle))
  const [lofTitleDecl, lofTitle_2] = let_('lof-title', localize(lofTitle))
  const [lotTitleDecl, lotTitle_2] = let_('lot-title', localize(lotTitle))
  const [biblioTitleDecl, biblioTitle_2] = let_('biblio-title', localize(biblioTitle))
  const [appendixTitleDecl, appendixTitle_2] = let_('appendix-title', localize(appendixTitle))
  const [headingDescDecl, headingDesc_2] = let_('heading-desc', localize(headingDesc))
  const [figDescDecl, figDesc_2] = let_('fig-desc', localize(figDesc))
  const [tabDescDecl, tabDesc_2] = let_('tab-desc', localize(tabDesc))
  const [appendixDescDecl, appendixDesc_2] = let_('appendix-desc', localize(appendixDesc))
  const [layoutDefDecl, layoutDef] = let_(
    'layout-def',
    dict({
      paper: 'a4',
      'font-size': pt(11),
      margin: { top: cm(2), inside: cm(3), outside: cm(2), bottom: cm(2.5) },
      numbering: '1',
      mainFont: 'EB Garamond',
      monoFont: 'New Computer Modern Mono',
      mathFont: 'Libertinus Math',
      copystop: false,
      header: kznHeader({ evenText: inline(title_3) }),
      footer: kznFooter({ footerText: inline(school) }),
      'link-color': green,
      'heading-desc': headingDesc_2,
      'fig-desc': figDesc_2,
      'tab-desc': tabDesc_2,
      language: 'de',
      'language-region': 'CH',
    }),
  )
  const [outlineDefDecl, outlineDef] = let_('outline-def', {
    toc: blocks(m.heading(1, tocTitle_2)),
    lof: blocks(m.heading(1, lofTitle_2)),
    lot: blocks(m.heading(1, lotTitle_2)),
  })
  const simpleTitlePage = define('simpleTitlePage')
    .returns(T.any)
    .body(
      (p) => unsafeRaw.code<any>`context {
  if show-private-content.get() {
    place(
      top + left,
      [
        #block(text(weight: "bold", size: 16pt, [Kantonsschule Zürich Nord]))
        #block(text(weight: "bold", size: 12pt, [Lang- und Kurzgymnasium]))
        #block(text(weight: "bold", size: 12pt, [Fachmittelschule]))
      ],
    )

    v(7cm)

    place(
      center,
      [
        #block(text(weight: "bold", size: 24pt, title))
        #block(text(weight: "bold", size: 16pt, subtitle))

        #v(1cm)

        #block(text(size: 14pt, [#thesis-type]))
      ],
    )

    v(5cm)
    place(center, [#image("img/image.jpeg", width: 10cm)])

    place(
      bottom + left,
      [
        #block(text(weight: "bold", size: 14pt, [#written-by]))
        #block(text(weight: "bold", size: 16pt, [#join-with-und(authors)]))
        // #block(text(weight: "bold", size: 12pt, [#supervised-by]))
        // #block(text(weight: "bold", size: 14pt, [#join-with-und(supervisors)]))
        #block(text(weight: "bold", size: 11pt, [#submitted-on #date]))
        #v(1cm)
      ],
    )
  } else {
    place(
      horizon + center,
      [
        #block(text(weight: "bold", size: 22pt, title))
        #block(text(weight: "bold", size: 16pt, subtitle))
        #v(2cm)
        #block(text(size: 20pt, localize(anonymous-version)))
      ],
    )
  }
}`,
    )
  const kznTitlePage = define('kznTitlePage')
    .returns(T.any)
    .body((p) =>
      kznTitlepage({
        authors: authors,
        supervisors: supervisors,
        title: localize(title_3),
        titleSize: pt(28),
        subtitle: subtitle_2,
        subtitleSize: pt(18),
        date: date,
        nordImage: image({ height: pct(100) }, path('img/image.jpeg')),
        nordImageSource: inline(
          localize(coverImage),
          space,
          link('https://de.wikipedia.org/wiki/Kantonsschule_Zürich_Nord'),
        ),
        nordColor: black,
        backgroundColor: white,
        zhBlue: rgb('009EE0'),
        headingFont: 'Lato',
        strings: {
          submittedOn: submittedOn_2,
          thesisType: thesisType,
          writtenBy: writtenBy_2,
          supervisedBy: supervisedBy_2,
        },
      }),
    )
  const [titlepageDefDecl, titlepageDef] = let_('titlepage-def', { content: kznTitlePage() })
  const myAbstract = define('myAbstract')
    .returns(T.any)
    .body((p) =>
      codeBlock(
        [],
        blocks(
          m.heading(1, abstractTitle_2),
          'Dieses Dokument beschreibt das Typst-Template der Kantonsschule Zürich Nord (KZN) für Maturitätsarbeiten und andere schriftliche Arbeiten. Es richtet sich an Schülerinnen und Schüler, die ihre Arbeit mit dem modernen Textsatzsystem Typst verfassen möchten, sowie an Lehrpersonen, die das Template für eigene Dokumente einsetzen.',
          'Im ersten Teil werden die Grundkonzepte von Typst erläutert: Textformatierung mit Markdown, die zentralen Funktionen, sowie das Einbinden von Tabellen, Abbildungen und Formeln.',
          'Der zweite Teil dokumentiert das KZN-Template konkret: Projekterstellung, Anpassung von Layout und Titelseite, Verwaltung der Frontmatter-Blöcke, Literaturreferenzen im BibTeX-Format, Mehrsprachigkeit sowie die Anonymisierungsfunktion für Plagiatsprüfungen.',
          'Im Anhang finden sich vollständige Beispiele für den mathematischen Formelsatz, den Umgang mit diakritischen Zeichen und nicht-lateinischen Schriften, sowie Vorlagen für Einzel- und Mehrfachabbildungen und -tabellen.',
        ),
      ),
    )
  const myAIDeclaration = define('myAIDeclaration')
    .returns(T.any)
    .body((p) =>
      codeBlock(
        [],
        blocks(
          m.lines(
            m.heading(1, aiDeclarationTitle_2),
            inline(
              localize(
                dict({
                  de: blocks(
                    m.lines(
                      'KI-Tools wurden bei der Erstellung dieser Arbeit in folgenden Bereichen eingesetzt:',
                      m.list(
                        m.item(['Übersetzungen und Sprachbeispiele (Claude Sonnet 4.6)']),
                        m.item(['Grammatik- und Stilprüfung (Claude Sonnet 4.6)']),
                        m.item(['Code-Generierung für Beispiele (Claude Sonnet 4.6)']),
                      ),
                    ),
                    'Alle KI-generierten Inhalte wurden sorgfältig überprüft, verifiziert und bei Bedarf angepasst.',
                  ),
                  en: blocks(
                    m.lines(
                      'AI tools were used in the following areas during the preparation of this work:',
                      m.list(
                        m.item(['Translations and language examples (Claude Sonnet 4.6)']),
                        m.item(['Grammar and style checking (Claude Sonnet 4.6)']),
                        m.item(['Code generation for examples (Claude Sonnet 4.6)']),
                      ),
                    ),
                    'All AI-generated content was carefully reviewed, verified, and adapted as needed.',
                  ),
                  fr: blocks(
                    m.lines(
                      inline`Des outils d'IA ont été utilisés dans les domaines suivants lors de la préparation de ce travail
:`,
                      m.list(
                        m.item(['Traductions et exemples linguistiques (Claude Sonnet 4.6)']),
                        m.item(['Vérification grammaticale et stylistique (Claude Sonnet 4.6)']),
                        m.item(['Génération de code pour les exemples (Claude Sonnet 4.6)']),
                      ),
                    ),
                    'Tous les contenus générés par IA ont été soigneusement vérifiés, validés et adaptés si nécessaire.',
                  ),
                  it: blocks(
                    m.lines(
                      'Strumenti di IA sono stati utilizzati nelle seguenti aree durante la preparazione di questo lavoro:',
                      m.list(
                        m.item(['Traduzioni ed esempi linguistici (Claude Sonnet 4.6)']),
                        m.item(['Controllo grammaticale e stilistico (Claude Sonnet 4.6)']),
                        m.item(['Generazione di codice per gli esempi (Claude Sonnet 4.6)']),
                      ),
                    ),
                    inline`Tutti i contenuti generati dall'IA sono stati attentamente verificati, validati e adattati secondo
necessità.`,
                  ),
                  es: blocks(
                    m.lines(
                      'Se utilizaron herramientas de IA en las siguientes áreas durante la preparación de este trabajo:',
                      m.list(
                        m.item(['Traducciones y ejemplos lingüísticos (Claude Sonnet 4.6)']),
                        m.item(['Revisión gramatical y estilística (Claude Sonnet 4.6)']),
                        m.item(['Generación de código para ejemplos (Claude Sonnet 4.6)']),
                      ),
                    ),
                    'Todo el contenido generado por IA fue cuidadosamente revisado, verificado y adaptado según fuera necesario.',
                  ),
                }),
              ),
            ),
          ),
        ),
      ),
    )
  const myAcknowledgments = define('myAcknowledgments')
    .returns(T.any)
    .body((p) =>
      codeBlock(
        [],
        blocks(
          m.heading(1, acknowledgmentsTitle_2),
          'Wir danken dem Typst-Entwicklerteam für die Bereitstellung eines modernen, leistungsfähigen und frei zugänglichen Textsatzsystems.',
        ),
      ),
    )
  const myPreface = define('myPreface')
    .returns(T.any)
    .body((p) =>
      codeBlock(
        [],
        blocks(
          m.heading(1, prefaceTitle_2),
          'Wer eine Maturarbeit schreibt, soll sich auf den Inhalt konzentrieren können – nicht auf Seitenränder, Schriftgrössen und Titelseiten.',
          'Mit Typst steht ein modernes Textsatzsystem zur Verfügung, das eine klare Trennung von Inhalt und Layout erlaubt. Die Formatierung geschieht automatisch, ist aber dennoch überall anpassbar. Literaturreferenzen können mit Online-Datenbanken wie Mendeley oder Zotero verwaltet und mit minimalem Aufwand in die Arbeit integriert werden. Der Formelsatz für Mathematik, Physik und Chemie ist intuitiv, ebenso Codeblöcke für Informatikarbeiten.',
          'Dieses Template soll Zeit und Nerven sparen, damit beides für das wirklich Wichtige zur Verfügung steht: das Denken, Recherchieren und Schreiben.',
        ),
      ),
    )
  const myCustomBlock = define('myCustomBlock')
    .returns(T.any)
    .body((p) =>
      codeBlock(
        [],
        blocks(
          m.heading(1, 'Quickstart'),
          'Um die eigene Arbeit zu starten, sind mindestens diese Schritt nötig:',
          m.list(
            m.item([
              'Im Dokument',
              space,
              raw({ lang: 'typst' }, 'main.typ'),
              space,
              'nach dem Kommentar',
              space,
              smartquote({ double: true }),
              'Allgemeine Angaben',
              smartquote({ double: true }),
              space,
              'die Informationen wie Titel, Namen etc. anpassen.',
            ]),
            m.item([
              'Ein eigenes Bild für die Titelseite in den Ordner',
              space,
              raw({ lang: 'typst' }, 'img'),
              space,
              'hochladen und in der',
              space,
              raw({ lang: 'typst' }, 'kznTitlePage()'),
              '-Funktion im Dokument',
              space,
              raw({ lang: 'typst' }, 'main.typ'),
              space,
              'anpassen:',
              space,
              raw(
                { block: true, lang: 'typst' },
                '// Titelseite mit KZN-Gestaltung und Hintergrundbild\n#let kznTitlePage() = kzn-titlepage(\n...\nnord-image: image("img/neuesBild.jpeg", height: 100%),\n// Quellenangabe zum Hintergrundbild (beliebiger Textblock)\nnord-image-source: [#localize(cover-image) #link("https://www.meineBildquelle.ch")],\n...',
              ),
            ]),
            m.item([
              'Die Vorspann-Blöcke im Dokument',
              space,
              raw({ lang: 'typst' }, 'main.typ'),
              space,
              'anpassen und nicht gewünschte löschen. So würde z.B. nur der Abstract-Block gesetzt:',
              space,
              raw(
                { block: true, lang: 'typst' },
                '#let frontmatter-def = (\n  content: (\n    myAbstract(),\n  ),\n  // numbering: "i",               // Römische Seitenzahlen im Vorspann\n  // footer: kzn-footer(footer-text: []), // Eigene Fusszeile im Vorspann\n)',
              ),
            ]),
            m.item([
              'Inhalt in',
              space,
              raw({ lang: 'typst' }, 'main-matter.typ'),
              space,
              'und',
              space,
              raw({ lang: 'typst' }, 'appendix.typ'),
              space,
              'löschen bis auf folgende Zeilen:',
              space,
              raw(
                { block: true, lang: 'typst' },
                '#import "@preview/kzn-ma:0.1.1": * // Diese Zeile ist immer nötig\n#import "@preview/unify:0.8.1": unit, qty, num // Diese Zeile nötig, wenn Formeln gesetzt werden\n#import "@preview/codly:1.3.0": codly, codly-init\n#import "@preview/codly-languages:0.1.10": * // Diese beiden Zeilen sind nötig, wenn Codeblöcke gesetzt werden',
              ),
            ]),
            m.item([
              'Arbeit in',
              space,
              raw({ lang: 'typst' }, 'main-matter.typ'),
              space,
              'und',
              space,
              raw({ lang: 'typst' }, 'appendix.typ'),
              space,
              'schreiben.',
            ]),
          ),
        ),
      ),
    )
  const [frontmatterDefDecl, frontmatterDef] = let_('frontmatter-def', {
    content: [myAbstract(), myAIDeclaration(), myAcknowledgments(), myPreface(), myCustomBlock()],
  })
  return doc(
    importPackage('@preview/kzn-ma:0.1.1', [
      title_2,
      localize,
      subtitle,
      thesisTypeBeginnersGuide,
      writtenBy,
      supervisedBy,
      submittedOn,
      abstractTitle,
      prefaceTitle,
      aiDeclarationTitle,
      acknowledgmentsTitle,
      tocTitle,
      lofTitle,
      lotTitle,
      biblioTitle,
      appendixTitle,
      headingDesc,
      figDesc,
      tabDesc,
      appendixDesc,
      kznHeader,
      kznFooter,
      showPrivateContent,
      joinWithUnd,
      anonymousVersion,
      kznTitlepage,
      coverImage,
      ma,
      outlinesAfter,
    ]),
    m.lines(titleDecl, subtitleDecl),
    authorsDecl,
    inline(supervisorsDecl),
    dateDecl,
    thesisTypeDecl,
    m.lines(writtenByDecl, inline(supervisedByDecl, space, submittedOnDecl)),
    schoolDecl,
    biblioStyleDecl,
    biblioFileDecl,
    contentFileDecl,
    appendixFileDecl,
    inline(
      abstractTitleDecl,
      space,
      prefaceTitleDecl,
      space,
      aiDeclarationTitleDecl,
      space,
      acknowledgmentsTitleDecl,
      space,
      tocTitleDecl,
      space,
      lofTitleDecl,
      space,
      lotTitleDecl,
      space,
      biblioTitleDecl,
      space,
      appendixTitleDecl,
    ),
    inline(headingDescDecl, space, figDescDecl, space, tabDescDecl, space, appendixDescDecl),
    layoutDefDecl,
    outlineDefDecl,
    simpleTitlePage.decl,
    kznTitlePage.decl,
    titlepageDefDecl,
    myAbstract.decl,
    myAIDeclaration.decl,
    myAcknowledgments.decl,
    myPreface.decl,
    myCustomBlock.decl,
    frontmatterDefDecl,
    show(
      ma_with({
        layoutDef: layoutDef,
        frontmatterDef: frontmatterDef,
        titlepageDef: titlepageDef,
        outlineDef: outlineDef,
      }),
    ),
    unsafeRaw.markup`#include content-file`,
    inline(
      pagebreak({ weak: true }),
      space,
      bibliography({ title: biblioTitle_2, style: unsafePath(biblioStyle) }, unsafePath(biblioFile)),
    ),
    inline(outlinesAfter(outlineDef, layoutDef)),
    m.lines(
      set(heading, { numbering: 'A', outlined: true, supplement: appendixDesc_2 }),
      inline(counter(heading).update(0), space, pagebreak({ weak: true, to: 'odd' })),
    ),
    unsafeRaw.markup`#include appendix-file`,
  )
}
