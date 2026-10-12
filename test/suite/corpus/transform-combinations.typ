// Typst 0.15.1 test suite: tests/suite/layout/transform.typ, case transform-combinations.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#block[
  #rect(width: 10pt, height: 10pt)
  #block(inset: 10pt)[
    #rect(width: 10pt, height: 10pt)
    #rotate(45deg, block(inset: 10pt)[
      #block(inset: 10pt)[
        #rect(width: 10pt, height: 10pt)
        Hello world
        #rect(width: 10pt, height: 10pt, radius: 10pt)
        #rotate(45deg, block(inset: 10pt)[
          #rect(width: 10pt, height: 10pt, radius: 10pt)
          #rect(width: 10pt, height: 10pt, radius: 10pt)
        ])
      ]
    ])
  ]
]
