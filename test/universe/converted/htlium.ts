// Converted from test/universe/corpus/htlium.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  datetime,
  define,
  doc,
  external,
  image,
  importFile,
  importPackage,
  m,
  red,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const icuDatetime = external('icu-datetime')
  const codlyInit = external('codly-init')
  const codly = external('codly')
  const codlyEnable = external('codly-enable')
  const codlyLanguages = external('codly-languages')
  const titlepage = external('titlepage')
  const template = define('template')
    .pos('body', T.any)
    .named('lang', T.any, 'de')
    .named('color-scheme', T.any, red)
    .named('author', T.any, 'Your Name')
    .named('class-long', T.any, 'Protokoll')
    .named('logo', T.any, image)
    .named('school-year', T.any, '2025/26')
    .named('title', T.any, 'Title')
    .named('subtitle', T.any, 'Subtitle')
    .named('task-title', T.any, 'Task Title')
    .named('task-content', T.any, 'Task Content')
    .named('class', T.any, 'Class')
    .named('date', T.any, datetime.today().display('[Day padding:None].[month].[year]'))
    .named('subject', T.any, 'Subject')
    .named('school', T.any, 'School')
    .named('department', T.any, 'Department')
    .named('teachers', T.any, ['Frau Mag. Mustermann', 'Herr Mag. Muster'])
    .named('do-lof', T.any, true)
    .named('do-lot', T.any, true)
    .named('do-bib', T.any, true)
    .named('bib-src', T.any, 'refs.bib')
    .named('fancy-design', T.any, true)
    .named('before-logo-info', T.any, [])
    .named('after-logo-info', T.any, [])
    .returns(T.any)
    .body(
      (p) => unsafeRaw.code<any>`{
  let title-color = color-scheme.darken(20%)

  import "@preview/codly:1.3.0": *
  import "@preview/codly-languages:0.1.1": *
  show: codly-init.with()
  codly(languages: codly-languages)
  codly-enable()

  set heading(
    numbering: "1.1",
  )
  //if fancy-design {
  show heading: set text(fill: title-color)
  //}
  
  set page(
    paper: "a4",
    margin: (top: 2.95cm, bottom: 2.54cm, left: 1.57cm, right: 1.57cm),
    numbering: "1",
    header: context {
      if counter(page).get().first() > 1 {
        
      grid(
        columns: 3 * (1fr,),
        rows: (7fr, 1fr),
        [
          #author
          #if fancy-design {
             place(
              left + top,
              dx: -1.7cm,
              dy: -0.7cm,
              rect(
                width: 0.5cm,
                height: 31cm,
                fill: color-scheme.darken(20%),
              )
            )
          }
        ],
        align(center)[
          #class-long
        ],
        align(right)[
          #if logo != none [
            #show image: set image(width: 3cm)
            #logo
          ]
        ],
        
        [
          #line(length: 300%, stroke: 0.5pt)
        ],
      )
      }
    },
    footer: context {
      if counter(page).get().first() > 1 [
        #grid(
          columns: 2 * (1fr,),
          [
            #school-year
          ],
          align(right)[
            #counter(page).display("1")
          ],
        )
      ]
    },
  )
  
  set document(
    title: title,
    author: author,
  )
  
  set text(
    font: "Arial",
    size: 12pt,
    lang: lang,
  )

  show table: t => {
    if (t.has("label") and t.label == <nostyle>) {
      return t
    }
    let fields = t.fields()
    if ("label" in fields.keys()) {
      let _ = fields.remove("label")
    }
    let chld = fields.remove("children")

    block(
      radius: 4pt,
      clip: true,
      stroke: 1pt,
    )[
      #table(
        ..fields,
        fill: (x, y) => {
          if (calc.odd(y)) {
            color-scheme.darken(60%).transparentize(90%)
          } else {
            rgb(0, 0, 0, 0)
          }
        },
        ..chld
      )<nostyle>
    ]
  }

  set cite(
    style: "ieee"
  )

  titlepage(
    title,
    lang,
    color-scheme,
    subtitle,
    task-title,
    task-content,
    author,
    class,
    school-year,
    date,
    logo,
    subject,
    school,
    department,
    teachers,
    fancy-design,
    before-logo-info,
    after-logo-info
  )

  show outline.entry.where(
    level: 1
  ): set text(weight: "bold") 
  outline()
  pagebreak()
  
  if do-lof {
    show outline.entry: it => {
      it.indented(none, it.prefix() + ": " + it.inner())
    }
    show outline.entry.where(
      level: 1,
    ): set text(weight: "regular")
    outline(
      title: [
        #if lang == "de" [
          Abbildungsverzeichnis
        ] else [
          List of Figures
        ]
        ],
      target: figure.where(kind: image),
    )
  }
  if do-lot {
    show outline.entry: it => {
      it.indented(none, it.prefix() + ": " + it.inner())
    }
    show outline.entry.where(
      level: 1,
    ): set text(weight: "regular")
    outline(
      title: [
        #if lang == "de" [
          Tabellenverzeichnis
        ] else [
          List of Tables
        ]
      ],
      target: figure.where(kind: table),
    )
  }
  if do-lot or do-lof {
    pagebreak()
  }
  
  body
  
  if do-bib {
    bibliography(bib-src, style: "ieee",
    title: [
      #if lang == "de" [
        Literaturverzeichnis
      ] else [
        List of References
      ]
    ])
  }
}`,
    )
  return doc(
    m.lines(
      importPackage('@preview/icu-datetime:0.2.2', icuDatetime),
      importPackage('@preview/codly:1.3.0', [codlyInit, codly, codlyEnable]),
      importPackage('@preview/codly-languages:0.1.10', [codlyLanguages]),
    ),
    m.lines(importFile('lib/titlepage.typ', [titlepage]), unsafeRaw.markup`#import "lib/boxes.typ": *`),
    template.decl,
  )
}
