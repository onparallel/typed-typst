// Converted from test/universe/corpus/ntnu-physics-report-replica.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  center,
  define,
  doc,
  em,
  emph,
  external,
  figure,
  heading,
  importPackage,
  inline,
  label,
  labelled,
  m,
  par,
  pt,
  ref,
  set,
  show,
  space,
  sym,
  symbol,
  table,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const ntnuReport = external('ntnu-report')
  const toprule = external('toprule')
  const midrule = external('midrule')
  const bottomrule = external('bottomrule')
  const ntnuReport_with = define('with')
    .named('abstract', T.content, [])
    .named('affiliations', T.any, null)
    .named('authors', T.any, null)
    .named('supervisor', T.any, null)
    .named('title', T.any, null)
    .named('two-column', T.any, null)
    .returns(T.any)
    .external(ntnuReport)
  return doc(
    importPackage('@preview/ntnu-physics-report-replica:0.1.0', [ntnuReport, toprule, midrule, bottomrule]),
    show(
      ntnuReport_with({
        title: 'Tittel på rapporten',
        authors: [
          { name: 'Ditt Navn', affiliations: [1] },
          { name: 'Medstudent', affiliations: [1] },
        ],
        affiliations: [
          'Institutt for fysikk, Norges Teknisk-Naturvitenskapelige Universitet, N-7491 Trondheim, Norway.',
        ],
        supervisor: 'Veileders Navn',
        abstract: inline`${space}Her skriver du et sammendrag av rapporten. Sammendraget skal være veldig kort men må
inneholde svaret på tre spørsmål: 1. Hva gjorde du (hva målte du)? 2. Hvordan gjorde du det
(hvilken metode)? 3. Hva fant du (resultat)?${space}`,
        twoColumn: true,
      }),
    ),
    m.heading(1, 'Innledning'),
    'Her begynner rapporten. Beskriv bakgrunnen for eksperimentet og hva du ønsker å undersøke.',
    m.heading(1, 'Teori'),
    inline`Her presenterer du den relevante teorien. For eksempel kan svingetiden til en pendel uttrykkes
som ${labelled([unsafeRaw.math.block`T = 2 pi sqrt(l / g),`, space], label('svingetid'))} der
${unsafeRaw.math`l`} er lengden til pendelen og ${unsafeRaw.math`g`} er tyngdeakselerasjonen.`,
    inline`Vi kan referere til ligning ${ref(label('svingetid'))} senere i teksten.`,
    m.heading(1, 'Metode og apparatur'),
    'Beskriv utstyret du brukte og hvordan eksperimentet ble utført.',
    m.heading(1, 'Resultat og diskusjon'),
    inline`Presenter resultatene dine. For eksempel: Vi målte lengden til ${unsafeRaw.math`l = 1,000 plus.minus 0,001 "m"`}.`,
    inline(
      labelled(
        [
          figure(
            { caption: inline`Målte verdier for pendellengde, svingetid og beregnet tyngdeakselerasjon.`, kind: table },
            table(
              { columns: 3, align: center, stroke: null, inset: { x: pt(8), y: pt(4) } },
              toprule,
              inline`${unsafeRaw.math`l`} (m)`,
              inline`${unsafeRaw.math`T`} (s)`,
              inline`${unsafeRaw.math`g`} (m/s²)`,
              midrule,
              inline`0,50`,
              inline`1,42`,
              inline`9,80`,
              inline`0,75`,
              inline`1,74`,
              inline`9,81`,
              inline`1,00`,
              inline`2,01`,
              inline`9,79`,
              bottomrule,
            ),
          ),
          space,
        ],
        label('resultater'),
      ),
    ),
    inline`Resultatene i ${ref(label('resultater'))} viser at...`,
    m.heading(1, 'Konklusjon'),
    'Oppsummer funnene dine og gi en konklusjon.',
    inline(heading({ level: 1 }, inline`Referanser`)),
    set(par, { firstLineIndent: pt(0), hangingIndent: em(1.5) }),
    inline`${symbol('[')}1${symbol(']')} Forfatter. ${emph(inline`Tittel`)}. Utgiver, År.`,
  )
}
