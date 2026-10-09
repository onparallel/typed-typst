// Converted from test/universe/corpus/muw-community-templates.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  data,
  define,
  doc,
  external,
  importPackage,
  inline,
  let_,
  m,
  set,
  text,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const muwPresentation = external('muw-presentation')
  const muwLogoWhite = define('muw-logo-white')
    .rest('args', T.any)
    .returns(T.any)
    .body((p) => unsafeRaw.code<any>`muw-box(fill: gray, figure(box([Hello], ..args)))`)
  const muwLogoBlue = define('muw-logo-blue')
    .rest('args', T.any)
    .returns(T.any)
    .body((p) => unsafeRaw.code<any>`muw-box(fill: gray, figure(box([Hallo], ..args)))`)
  const [customMuwLogosDecl, customMuwLogos] = let_('custom-muw-logos', data([muwLogoWhite, muwLogoBlue]))
  return doc(
    importPackage('@preview/muw-community-templates:0.1.2', muwPresentation),
    unsafeRaw.markup`#import muw-presentation: *`,
    set(text, { lang: 'de' }),
    inline(unsafeRaw.code<any>`polylux.enable-handout-mode(false)`),
    m.lines(muwLogoWhite.decl, muwLogoBlue.decl, customMuwLogosDecl),
    unsafeRaw.markup`#show: slides.with(
  title: [Titel mit blauem Hintergrund],
  series: [Titel der Präsentation ODER des Vortragenden],
  klinik: [Universitätsklinik für XY],
  orga: [Organisationseinheit],

  author: [Univ. Prof. Dr. Maximilian Mustermann],
  email: none,  // link("mailto:n12345678@students.meduniwien.ac.at"),

  paper: "presentation-16-9",  // 4-3",
  toc: false,
  show-date: true,
  
  // if you want to use custom logs for your institute
  // for example for the Comprehensive Center for AI in Medicine (CAIM)
  logos: none, // custom-muw-logos,

)`,
    inline(unsafeRaw.code<any>`slide[
  = Very minimalist slides

  #lorem(10)

  - https://polylux.dev/book/
  - https://polylux.dev/book/getting-started/getting-started.html

  #muw-box(
    height: 25mm,
    fill: muw_colors.dunkelblau,
    text(fill: white)[
      #set align(horizon)
      ~ Hier ist eine MedUni Wien box ... ~ \\
      ~ Hier könnte auch ein bild sein ... ~
    ]
  )

]`),
    inline(unsafeRaw.code<any>`slide[
  == This slide changes!

  You can always see this.
  // Make use of features like #uncover, #only, and others to create dynamic content
  #polylux.uncover(2)[But this appears later!]
  
]`),
    inline(unsafeRaw.code<any>`black-slide[

  == Are you a radiologist or do you want to show a CT, MRI or X-ray image?

  #stack(dir: ltr, spacing: 1fr,
    [
      #v(3cm)
      use: \`#black-slide[]\`
    ],
    [
      #set text(size: 12pt)
     
      #figure(
        muw-box(
          stroke: 1pt + white,
          image("./img/Knie_mr.jpg", width: 30%)
        ),
        caption: [
          Magnetresonanztomographie Aufnahme eines \\
          menschlichen Kniegelenks, in sagittaler Schichtung @wikipedia_mrt
        ]
      )
    ]
  )
]`),
    inline(unsafeRaw.code<any>`color-slide[
    #show: align.with(center + horizon)
    
    // #heading(outlined: false)[Nun eine kurze Demonstration]

    #text(size: 130pt, weight: "bold")[#v(-2cm) or use \`color-slide\`]
]`),
    inline(unsafeRaw.code<any>`color-slide(bg-fill: muw_colors.gruen)[
  hier in grün ...
]`),
    inline(unsafeRaw.code<any>`color-slide(bg-fill: muw_colors.dunkelblau)[
  #set text(fill: white)

  und blau ...
]`),
    inline(unsafeRaw.code<any>`slide[
  == side by side text

  #polylux.toolbox.side-by-side[
    #lorem(7)
  ][
    #lorem(10)
  ][
    #lorem(5)
  ]

  #polylux.toolbox.side-by-side(gutter: 3mm, columns: (1fr, 2fr, 1fr))[
    #rect(width: 100%, stroke: none, fill: aqua)
  ][
    #rect(width: 100%, stroke: none, fill: teal)
  ][
    #rect(width: 100%, stroke: none, fill: eastern)
  ]

]`),
    inline(unsafeRaw.code<any>`slide[
  #polylux.toolbox.big[BIG]
]`),
    inline(unsafeRaw.code<any>`slide[
  #set par(leading: .1em)
  #polylux.toolbox.big[
    Lorem ipsum dolor sit amet, consectetur \\ adipiscing elit, sed do eiusmod \\
    tempor incididunt ut labore et dolore \\ magnam aliquam quaerat.
  ]
]`),
    inline(unsafeRaw.code<any>`slide[
  == a random list

  - abc
  - def
    - ghi
    - jkl
      - mno
      - pqr
        - stu
        - vwx

]`),
    inline(unsafeRaw.code<any>`slide[
  = https://typst.app/universe/

  if you want to present more specific things such as physical formulas, chemical equations, system-describing diagrams

  - chem: https://github.com/Typsium
  - phy: https://github.com/Leedehai/typst-physics
  - etc.
]`),
    inline(unsafeRaw.code<any>`slide[
  // https://typst.app/docs/reference/model/bibliography/

  #bibliography("lit.bib")
]`),
  )
}
