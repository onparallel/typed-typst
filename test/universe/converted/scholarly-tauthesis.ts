// Converted from test/universe/corpus/scholarly-tauthesis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  bibliography,
  cite,
  define,
  doc,
  external,
  importFile,
  importPackage,
  includeFile,
  inline,
  label,
  let_,
  path,
  selector,
  show,
  unsafePath,
  unsafeRaw,
  yaml,
} from '../../../src/index.ts'

export default () => {
  const tauthesis = external('tauthesis')
  const metadata_2 = external('metadata')
  const tauthesis_template = define('template')
    .named('abstractContents', T.any, null)
    .named('aiDisclaimerContents', T.any, null)
    .named('alaotsikko', T.any, null)
    .named('attachPublications', T.any, null)
    .named('author', T.any, null)
    .named('avainsanat', T.any, null)
    .named('citationStyle', T.any, null)
    .named('codeFont', T.any, null)
    .named('colorSeparatorLines', T.any, null)
    .named('compilationThesis', T.any, null)
    .named('description', T.any, null)
    .named('displayLinkToToC', T.any, null)
    .named('eqNumberWithinLevel', T.any, null)
    .named('examiners', T.any, null)
    .named('faculty', T.any, null)
    .named('figNumberWithinLevel', T.any, null)
    .named('glossaryDict', T.any, null)
    .named('includeFinnishAbstract', T.any, null)
    .named('includeGlossary', T.any, null)
    .named('includeListOfFigures', T.any, null)
    .named('includeListOfListings', T.any, null)
    .named('includeListOfTables', T.any, null)
    .named('keywords', T.any, null)
    .named('koulu', T.any, null)
    .named('language', T.any, null)
    .named('location', T.any, null)
    .named('maintitle', T.any, null)
    .named('mathFont', T.any, null)
    .named('otsikko', T.any, null)
    .named('physicallyPrinted', T.any, null)
    .named('prefaceContents', T.any, null)
    .named('printTwoSided', T.any, null)
    .named('publicationDict', T.any, null)
    .named('region', T.any, null)
    .named('showParagraphLineNumbers', T.any, null)
    .named('sijainti', T.any, null)
    .named('subtitle', T.any, null)
    .named('tekoälynKäyttöTeksti', T.any, null)
    .named('textFont', T.any, null)
    .named('thesisProgramme', T.any, null)
    .named('thesisType', T.any, null)
    .named('tiedekunta', T.any, null)
    .named('tiivistelmänSisältö', T.any, null)
    .named('tutkintoOhjelma', T.any, null)
    .named('työnTyyppi', T.any, null)
    .named('university', T.any, null)
    .named('usedAI', T.any, null)
    .returns(T.any)
    .external(tauthesis)
  const metadata_alaotsikko = external('alaotsikko', metadata_2)
  const metadata_attachPublications = external('attachPublications', metadata_2)
  const metadata_author = external('author', metadata_2)
  const metadata_avainsanat = external('avainsanat', metadata_2)
  const metadata_citationStyle = external('citationStyle', metadata_2)
  const metadata_colorSeparatorLines = external('colorSeparatorLines', metadata_2)
  const metadata_compilationThesis = external('compilationThesis', metadata_2)
  const metadata_description = external('description', metadata_2)
  const metadata_displayLinkToToC = external('displayLinkToToC', metadata_2)
  const metadata_eqNumberWithinLevel = external('eqNumberWithinLevel', metadata_2)
  const metadata_examiners = external('examiners', metadata_2)
  const metadata_faculty = external('faculty', metadata_2)
  const metadata_figNumberWithinLevel = external('figNumberWithinLevel', metadata_2)
  const metadata_includeFinnishAbstract = external('includeFinnishAbstract', metadata_2)
  const metadata_includeGlossary = external('includeGlossary', metadata_2)
  const metadata_includeListOfFigures = external('includeListOfFigures', metadata_2)
  const metadata_includeListOfTables = external('includeListOfTables', metadata_2)
  const metadata_includeListOfListings = external('includeListOfListings', metadata_2)
  const metadata_keywords = external('keywords', metadata_2)
  const metadata_koulu = external('koulu', metadata_2)
  const metadata_language = external('language', metadata_2)
  const metadata_location = external('location', metadata_2)
  const metadata_otsikko = external('otsikko', metadata_2)
  const metadata_physicallyPrinted = external('physicallyPrinted', metadata_2)
  const metadata_printTwoSided = external('printTwoSided', metadata_2)
  const metadata_region = external('region', metadata_2)
  const metadata_showParagraphLineNumbers = external('showParagraphLineNumbers', metadata_2)
  const metadata_sijainti = external('sijainti', metadata_2)
  const metadata_subtitle = external('subtitle', metadata_2)
  const metadata_thesisProgramme = external('thesisProgramme', metadata_2)
  const metadata_thesisType = external('thesisType', metadata_2)
  const metadata_tiedekunta = external('tiedekunta', metadata_2)
  const metadata_maintitle = external('maintitle', metadata_2)
  const metadata_tutkintoOhjelma = external('tutkintoOhjelma', metadata_2)
  const metadata_ty_nTyyppi = external('työnTyyppi', metadata_2)
  const metadata_university = external('university', metadata_2)
  const metadata_usedAI = external('usedAI', metadata_2)
  const metadata_textFont = external('textFont', metadata_2)
  const metadata_mathFont = external('mathFont', metadata_2)
  const metadata_codeFont = external('codeFont', metadata_2)
  const tauthesis_bibSettings = define('bibSettings').rest('args', T.any).returns(T.any).external(tauthesis)
  const metadata_bibFileSuffix = external('bibFileSuffix', metadata_2)
  const tauthesis_appendix = define('appendix')
    .pos('arg1', T.any)
    .pos('arg2', T.any)
    .pos('arg3', T.any)
    .named('codeFont', T.any, null)
    .named('eqNumberWithinLevel', T.any, null)
    .named('figNumberWithinLevel', T.any, null)
    .named('mathFont', T.any, null)
    .returns(T.any)
    .external(tauthesis)
  const tauthesis_thesisTypeToIntFn = define('thesisTypeToIntFn').pos('arg1', T.any).returns(T.any).external(tauthesis)
  const tauthesis_publicationMatter = define('publicationMatter')
    .named('eqNumberWithinLevel', T.any, null)
    .named('figNumberWithinLevel', T.any, null)
    .returns(T.any)
    .external(tauthesis)
  const [tiivistelm_nSis_lt_Decl, tiivistelm_nSis_lt_] = let_(
    'tiivistelmänSisältö',
    includeFile('frontmatter/tiivistelma.typ'),
  )
  const [abstractContentsDecl, abstractContents] = let_('abstractContents', includeFile('frontmatter/abstract.typ'))
  const [prefaceContentsDecl, prefaceContents] = let_('prefaceContents', includeFile('frontmatter/preface.typ'))
  const [aiDisclaimerContentsDecl, aiDisclaimerContents] = let_(
    'aiDisclaimerContents',
    includeFile('frontmatter/use-of-ai.typ'),
  )
  const [teko_lynK_ytt_TekstiDecl, teko_lynK_ytt_Teksti] = let_(
    'tekoälynKäyttöTeksti',
    includeFile('frontmatter/tekoalyn-kaytto.typ'),
  )
  const [publicationDictDecl, publicationDict] = let_('publicationDict', yaml(path('bibliography.yaml')))
  const [thesisTypeIntDecl, thesisTypeInt] = let_('thesisTypeInt', tauthesis_thesisTypeToIntFn(metadata_thesisType))
  return doc(
    importPackage('@preview/scholarly-tauthesis:0.23.1', tauthesis),
    importFile('metadata.typ', metadata_2),
    unsafeRaw.markup`#let glossaryModule = import "frontmatter/glossary.typ": glossary_words as glossaryDict`,
    tiivistelm_nSis_lt_Decl,
    abstractContentsDecl,
    prefaceContentsDecl,
    aiDisclaimerContentsDecl,
    teko_lynK_ytt_TekstiDecl,
    publicationDictDecl,
    show(
      tauthesis_template.with({
        abstractContents: abstractContents,
        aiDisclaimerContents: aiDisclaimerContents,
        alaotsikko: metadata_alaotsikko,
        attachPublications: metadata_attachPublications,
        author: metadata_author,
        avainsanat: metadata_avainsanat,
        citationStyle: metadata_citationStyle,
        colorSeparatorLines: metadata_colorSeparatorLines,
        compilationThesis: metadata_compilationThesis,
        description: metadata_description,
        displayLinkToToC: metadata_displayLinkToToC,
        eqNumberWithinLevel: metadata_eqNumberWithinLevel,
        examiners: metadata_examiners,
        faculty: metadata_faculty,
        figNumberWithinLevel: metadata_figNumberWithinLevel,
        glossaryDict: unsafeRaw.code<any>`glossaryDict`,
        includeFinnishAbstract: metadata_includeFinnishAbstract,
        includeGlossary: metadata_includeGlossary,
        includeListOfFigures: metadata_includeListOfFigures,
        includeListOfTables: metadata_includeListOfTables,
        includeListOfListings: metadata_includeListOfListings,
        keywords: metadata_keywords,
        koulu: metadata_koulu,
        language: metadata_language,
        location: metadata_location,
        otsikko: metadata_otsikko,
        physicallyPrinted: metadata_physicallyPrinted,
        prefaceContents: prefaceContents,
        printTwoSided: metadata_printTwoSided,
        publicationDict: publicationDict,
        region: metadata_region,
        showParagraphLineNumbers: metadata_showParagraphLineNumbers,
        sijainti: metadata_sijainti,
        subtitle: metadata_subtitle,
        tekoälynKäyttöTeksti: teko_lynK_ytt_Teksti,
        thesisProgramme: metadata_thesisProgramme,
        thesisType: metadata_thesisType,
        tiedekunta: metadata_tiedekunta,
        tiivistelmänSisältö: tiivistelm_nSis_lt_,
        maintitle: metadata_maintitle,
        tutkintoOhjelma: metadata_tutkintoOhjelma,
        työnTyyppi: metadata_ty_nTyyppi,
        university: metadata_university,
        usedAI: metadata_usedAI,
        textFont: metadata_textFont,
        mathFont: metadata_mathFont,
        codeFont: metadata_codeFont,
      }),
    ),
    includeFile('mainmatter/index.typ'),
    show(tauthesis_bibSettings.with(metadata_language)),
    inline(
      bibliography(
        { style: unsafePath(metadata_citationStyle), target: selector(cite).before(label('publicationMatter')) },
        unsafePath(add('bibliography.', metadata_bibFileSuffix)),
      ),
    ),
    show((doc_2, ctx) =>
      tauthesis_appendix(
        {
          figNumberWithinLevel: metadata_figNumberWithinLevel,
          eqNumberWithinLevel: metadata_eqNumberWithinLevel,
          mathFont: metadata_mathFont,
          codeFont: metadata_codeFont,
        },
        metadata_language,
        tauthesis_thesisTypeToIntFn(metadata_thesisType),
        doc_2,
      ),
    ),
    includeFile('appendices/index.typ'),
    show(
      tauthesis_publicationMatter.with({
        figNumberWithinLevel: metadata_figNumberWithinLevel,
        eqNumberWithinLevel: metadata_eqNumberWithinLevel,
      }),
    ),
    thesisTypeIntDecl,
    inline(unsafeRaw.code<any>`if thesisTypeInt >= tauthesis.licentiateThesisTypeInt and metadata.compilationThesis and metadata.attachPublications {

	for (citeKey, publication) in publicationDict {
		if not "tauthesis-publication" in publication or not publication.tauthesis-publication { continue }
		tauthesis.displayPublicationTitlePage(citeKey, publication, metadata.language)
		if "path" in publication and publication.path != none {
			let (filePathStr, fileNameSuffix) = tauthesis.publicationFilePath(citeKey, publication)
			let filePath = path(publication.path)
			tauthesis.loadPublicationPages(
				citeKey,
				publication,
				filePath,
				fileNameSuffix,
				tauthesis.thesisTypeToIntFn(metadata.thesisType),
				metadata.language,
			)
		}
	}
}`),
  )
}
