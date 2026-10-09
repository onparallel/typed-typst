// Converted from test/universe/corpus/desk-tagger.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { cm, csv, dictionary, doc, inline, let_, m, page, set, unsafePath, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const [studentsDataDecl, studentsData] = let_('students-data', 'students.csv')
  const [logoDecl, logo] = let_('logo', 'assets/uai-negocios-logo-bajada-png.png')
  const [dataDecl, data_2] = let_('data', csv({ rowType: dictionary }, unsafePath(studentsData)))
  return doc(
    set(page, { paper: 'us-letter', flipped: true, margin: cm(1), footer: null }),
    m.lines(studentsDataDecl, logoDecl),
    dataDecl,
    inline(unsafeRaw.code<any>`for row in data {
  // Center line
  place(
    center + horizon,
    line(length: 100%, stroke: (paint: gray, dash: "dashed", thickness: 0.5pt))
  )
  
  // Main page grid
  grid(
    columns: (100%),
    rows: (50%, 8%, 42%),
    gutter: 0pt,
    
    // --- Upper half (rotated) ---
    grid(
      align: center + horizon,
      rotate(180deg, reflow: true)[
        #block(width: 100%)[
          #text(size: 110pt, weight: "medium", row.FirstName) \\
          #text(size: 80pt, row.LastName)
          #v(0.8cm)
          #align(left)[
            #image(logo, width: 8cm)
          ]
        ]
      ]
    ),
    //This is just so the center row has something in it
    v(0cm),
    
    // --- Lower half (normal) ---
    grid(
      align: center + horizon,     
      block(width: 100%)[
        #text(size: 110pt, weight: "medium", row.FirstName) \\
        #text(size: 80pt, row.LastName)
        #v(0.8cm)
        #align(left)[
          #image(logo, width: 8cm)
        ]
      ]
    )
  )
  pagebreak(weak: true)
}`),
  )
}
