// Converted from test/universe/corpus/infodoc-unr10.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, external, importPackage, show } from '../../../src/index.ts'

export default () => {
  const kbaDocument = external('kba-document')
  const kbaDocument_with = define('with')
    .named('anlagen', T.any, null)
    .named('beauftragter', T.any, null)
    .named('beschraenkungen', T.any, null)
    .named('date', T.any, null)
    .named('doc-number', T.any, null)
    .named('genehmigt-als', T.any, null)
    .named('genehmigung-stelle-art', T.any, null)
    .named('handelsbezeichnung', T.any, null)
    .named('hersteller-name-anschrift', T.any, null)
    .named('ident-merkmal', T.any, null)
    .named('ident-stelle', T.any, null)
    .named('marke', T.any, null)
    .named('montagebetriebe', T.any, null)
    .named('nennspannung', T.any, null)
    .named('typ', T.any, null)
    .named('varianten', T.any, null)
    .returns(T.any)
    .external(kbaDocument)
  return doc(
    importPackage('@preview/infodoc-unr10:0.1.0', [kbaDocument]),
    show(
      kbaDocument_with({
        date: '15.06.2025',
        docNumber: 'ID-MYPRODUCT-00',
        marke: 'My Brand',
        typ: 'MY-TYPE-100',
        varianten: ['MY-TYPE-100-A', 'MY-TYPE-100-B'],
        handelsbezeichnung: 'My Product Name',
        identMerkmal: ['Typbezeichnung auf dem Gehäuse', 'Type designation on housing'],
        identStelle: ['Gehäuseunterseite', 'Bottom of housing'],
        herstellerNameAnschrift: 'My Company GmbH, Musterstraße 1, 10000 Berlin, Germany',
        beauftragter: '',
        genehmigungStelleArt: ['Klebeschild auf dem Gehäuse', 'Adhesive label on the housing'],
        montagebetriebe: ['My Company GmbH, Musterstraße 1, 10000 Berlin, Germany'],
        genehmigtAls: ['Bauteil', 'component'],
        beschraenkungen: ['keine', 'none'],
        nennspannung: ['12 V', 'neg. ground'],
        anlagen: [
          {
            nr: '1',
            inhalt: 'Functional Description',
            docNr: 'FUN-MYPRODUCT-1.0',
            datum: '15.06.2025',
            rev: '15.06.2025',
            seiten: '3',
          },
        ],
      }),
    ),
  )
}
